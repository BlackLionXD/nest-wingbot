"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HuggingfaceService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("@nestjs/axios");
const rxjs_1 = require("rxjs");
let HuggingfaceService = class HuggingfaceService {
    httpService;
    apiUrl = 'https://api-inference.huggingface.co/models/HuggingFaceH4/zephyr-7b-beta';
    apiToken = process.env.HF_API_TOKEN;
    constructor(httpService) {
        this.httpService = httpService;
    }
    async generateResponse(userInput) {
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
            const response = await (0, rxjs_1.lastValueFrom)(response$);
            return response.data[0]?.generated_text || 'No response.';
        }
        catch (error) {
            console.error('Hugging Face Error:', error.response?.data || error.message);
            return 'AI error. Try again later.';
        }
    }
};
exports.HuggingfaceService = HuggingfaceService;
exports.HuggingfaceService = HuggingfaceService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService])
], HuggingfaceService);
//# sourceMappingURL=huggingface.service.js.map