import { IsNumber, IsOptional, IsPositive, IsString, MinLength } from "class-validator";

export class CreateCatDto {

    // Campo id es autogenerado 

    @IsString()
    @MinLength(1)
    name: string;


    @IsNumber()
    @IsPositive()
    age: number;

    @IsString()
    @IsOptional()
    breed?: string

}
