import { Body, Controller, HttpStatus, Post, UploadedFile, UseInterceptors, ValidationPipe } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { OpenaiBodyDTO } from './dto/openai-body.dto';
import { DocImportCollection } from './openai.doc';
import { OpenaiService } from './openai.service';

@ApiTags('openai')
@Controller({ path: 'openai', version: '1' })
export class OpenaiController {
    constructor(private openaiService: OpenaiService) {}

    @Post('')
    @DocImportCollection()
    @UseInterceptors(FileInterceptor('file', { limits: { files: 1 } }))
    @ApiResponse({ status: HttpStatus.CREATED, type: OpenaiBodyDTO })
    async importTargetToTest(
        @UploadedFile() file: Express.Multer.File,
        @Body(ValidationPipe) body: OpenaiBodyDTO
    ) {
        return this.openaiService.importTargetToTest(file, body)
    }
 }
