import { Injectable } from '@nestjs/common';
import { Configuration, OpenAIApi } from 'openai';
import { OpenaiBodyDTO } from './dto/openai-body.dto';

@Injectable()
export class OpenaiService {

    async importTargetToTest(file: Express.Multer.File, body: OpenaiBodyDTO) {
        const buffer = file.buffer.toString();

        const configuration = new Configuration({
            apiKey: process.env.OPENAI_API_KEY,
        });

        const openai = new OpenAIApi(configuration);

        const prompt = `In a ${body.type_app} application that uses ${body.type_test} as tests, 
            show me just an example of a test for the following code:\n`
        + "```"
        + buffer
        +"```";

        try {

            const response = await openai.createCompletion({
                model: "text-davinci-003",
                prompt,
                max_tokens: 2048
            });
            const result = response.data.choices[0].text.trim()
    
            console.log(result)
    
            return result;
            
        } catch (error) {
            console.error(error.response.data);
            throw error;
        }
        
          
    }
}
