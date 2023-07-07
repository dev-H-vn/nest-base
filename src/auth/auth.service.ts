import { Injectable, UnauthorizedException } from '@nestjs/common';
import { LoginDto, RegisterDto } from 'src/auth/dto/auth.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { signJwtToken } from 'src/utils';

@Injectable()
export class AuthService {
  constructor(
    private prismaService: PrismaService,
    private jstService: JwtService,
    private configService: ConfigService,
  ) {}
  async register(auth: RegisterDto) {
    const { email, password } = auth;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await this.prismaService.user.create({
      data: { email, hashedPassword },
    });
    return { user };
  }

  async login(auth: LoginDto) {
    const { email, password } = auth;
    const user = await this.prismaService.user.findFirst({
      where: { email },
    });
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }
    const isMatch = await bcrypt.compare(password, user.hashedPassword);
    if (!isMatch) {
      throw new UnauthorizedException('Invalid credentials');
    }
    return await signJwtToken(
      user.id,
      user.email,
      this.jstService,
      this.configService,
    );
  }
}
