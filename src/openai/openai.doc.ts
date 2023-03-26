import { applyDecorators } from "@nestjs/common";
import { ApiBody, ApiConsumes, ApiOperation } from "@nestjs/swagger";

export const DocImportCollection = () =>
  applyDecorators(
    ApiOperation({
      summary: 'Import file to generate automatic test.',
      description: 'Import file to generate automatic test.'
    }),
    ApiConsumes('multipart/form-data'),
    ApiBody({
      schema: {
        required: ['file', 'type_app', 'type_test'],
        type: 'object',
        properties: {
        file: {
            type: 'string',
            format: 'binary'
          },
          type_app: {
            type: 'string'
          },
          type_test: {
            type: 'string'
          }
        }
      }
    })
  );
