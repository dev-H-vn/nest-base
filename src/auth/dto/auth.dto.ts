import { ApiProperty } from '@nestjs/swagger';
import { IsDefined, IsEmail, IsNotEmpty, IsString } from 'class-validator';

//Define a "type" of "authentication request"
export class RegisterDto {
  @ApiProperty() //swagger
  @IsEmail()
  @IsNotEmpty()
  @IsDefined()
  email: string;

  @ApiProperty() //swagger
  @IsString()
  @IsNotEmpty()
  @IsDefined()
  password: string;
}
export class LoginDto {
  @ApiProperty() //swagger
  @IsEmail()
  @IsNotEmpty()
  @IsDefined()
  email: string;

  @ApiProperty() //swagger
  @IsString()
  @IsNotEmpty()
  @IsDefined()
  password: string;
}
