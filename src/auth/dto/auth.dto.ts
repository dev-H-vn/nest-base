import { IsDefined, IsEmail, IsNotEmpty, IsString } from 'class-validator';

//Define a "type" of "authentication request"
export class RegisterDto {
  @IsEmail()
  @IsNotEmpty()
  @IsDefined()
  email: string;

  @IsString()
  @IsNotEmpty()
  @IsDefined()
  password: string;
}
export class LoginDto {
  @IsEmail()
  @IsNotEmpty()
  @IsDefined()
  email: string;

  @IsString()
  @IsNotEmpty()
  @IsDefined()
  password: string;
}
