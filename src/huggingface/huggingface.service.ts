



import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';

import { lastValueFrom } from 'rxjs';

@Injectable()
export class HuggingfaceService {
private apiUrl = 'https://api-inference.huggingface.co/models/HuggingFaceH4/zephyr-7b-beta';

    private apiToken = process.env.HF_API_TOKEN;

  constructor(private readonly httpService: HttpService) {}

  async generateResponse(userInput: string): Promise<string> {
    const prompt = `You are a helpful, kind, and understanding dating coach. A user says: "${userInput}". How should they reply on a first date?`;

    const body = {
      inputs: prompt,
      parameters: {
        max_new_tokens: 100,
        temperature: 0.7,
        return_full_text: false,
      },
    };

    const headers = {
      Authorization: `Bearer ${this.apiToken}`,
      'Content-Type': 'application/json',
    };

    try {
      const response$ = this.httpService.post(this.apiUrl, body, { headers });
      const response = await lastValueFrom(response$);
      return response.data[0]?.generated_text || 'No response.';
    } catch (error) {
      console.error('Hugging Face Error:', error.response?.data || error.message);
      return 'AI error. Try again later.';
    }
  }
}
