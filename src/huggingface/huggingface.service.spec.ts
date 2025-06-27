import { Test, TestingModule } from '@nestjs/testing';
import { HuggingfaceService } from './huggingface.service';

describe('HuggingfaceService', () => {
  let service: HuggingfaceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HuggingfaceService],
    }).compile();

    service = module.get<HuggingfaceService>(HuggingfaceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
