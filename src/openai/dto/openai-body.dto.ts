import { ApiProperty } from "@nestjs/swagger";

export class OpenaiBodyDTO {
    @ApiProperty({ required: true })
    type_app: string;

    @ApiProperty({ required: true })
    type_test: string;
}