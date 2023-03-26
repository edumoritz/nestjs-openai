import { OpenaiService } from './openai.service';
import { OpenaiController } from './openai.controller';
import { Module } from '@nestjs/common';

@Module({
    imports: [],
    controllers: [OpenaiController],
    providers: [OpenaiService],
})
export class OpenaiModule { }
