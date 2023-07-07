import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { LoginDto, RegisterDto } from 'src/auth/dto/auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Get()
  checkConnect() {
    console.log('--------------------------------');
  }

  @Post('register')
  async register(@Body() body: RegisterDto) {
    return await this.authService.register(body);
  }

  @Post('login')
  async login(@Body() body: LoginDto) {
    return await this.authService.login(body);
  }
}
