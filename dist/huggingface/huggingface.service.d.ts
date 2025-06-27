import { HttpService } from '@nestjs/axios';
export declare class HuggingfaceService {
    private readonly httpService;
    private apiUrl;
    private apiToken;
    constructor(httpService: HttpService);
    generateResponse(userInput: string): Promise<string>;
}
