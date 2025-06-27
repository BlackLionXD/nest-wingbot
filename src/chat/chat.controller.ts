




import { Controller, Post, Body } from '@nestjs/common';
import { HuggingfaceService } from '../huggingface/huggingface.service';
@Controller('chat')
export class ChatController {
  constructor(private readonly hfService: HuggingfaceService) {}

  @Post()
  async chat(@Body('message') message: string) {
    const reply = await this.hfService.generateResponse(message);
    return { reply };
  }
}
