import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HuggingfaceService } from './huggingface/huggingface.service';
import { HttpModule } from '@nestjs/axios';
import { ChatController } from './chat/chat.controller';
@Module({
  imports: [HttpModule],
  controllers: [AppController, ChatController],
  providers: [AppService, HuggingfaceService],
})
export class AppModule {}
