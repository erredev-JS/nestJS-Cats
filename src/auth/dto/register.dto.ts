import { Transform } from 'class-transformer';
import { IsEmail, IsString, MinLength } from 'class-validator';

export class RegisterDto {
  @Transform(({value}) => value.trim())
  @IsString()
  @MinLength(4)
  name: string;

  @IsEmail()
  @MinLength(6)
  email: string;

  @Transform(({value}) => value.trim())
  @IsString()
  @MinLength(6)
  password: string;
}
