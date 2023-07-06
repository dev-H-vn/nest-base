import { Body, Controller, Post } from '@nestjs/common';
import { RegisterDto } from 'src/auth/dto/auth.dto';

@Controller('auth')
export class AuthController {
  @Post()
  register(@Body() body: RegisterDto) {
    console.log(body);
    return 'This action adds a new cat';
  }

  @Post()
  login(@Body() body) {
    console.log(body);
    return 'This action adds a new cat';
  }
}
