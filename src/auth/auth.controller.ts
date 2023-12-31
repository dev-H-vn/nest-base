import {
  Body,
  Controller,
  Get,
  Header,
  HttpCode,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthService } from 'src/auth/auth.service';
import { LoginDto, RegisterDto } from 'src/auth/dto/auth.dto';

@ApiBearerAuth()
@ApiTags('Example')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Get()
  checkConnect() {
    console.log('--------------------------------');
  }

  @Post('register')
  @HttpCode(HttpStatus.CREATED)
  // @Header('Cache-Control', 'none')
  async register(@Body() body: RegisterDto) {
    return await this.authService.register(body);
  }

  @Post('login')
  @HttpCode(HttpStatus.OK)
  async login(@Body() body: LoginDto) {
    return await this.authService.login(body);
  }
}
