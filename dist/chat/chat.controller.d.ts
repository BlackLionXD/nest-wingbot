import { HuggingfaceService } from '../huggingface/huggingface.service';
export declare class ChatController {
    private readonly hfService;
    constructor(hfService: HuggingfaceService);
    chat(message: string): Promise<{
        reply: string;
    }>;
}
