import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';

export const signJwtToken = async (
  userId: string,
  email: string,
  jwtService: JwtService,
  configService: ConfigService,
): Promise<{ accessToken: string; statusCode: number; message: string }> => {
  const payload = {
    sub: userId,
    email,
  };
  const jwtString = await jwtService.signAsync(payload, {
    expiresIn: '10m',
    secret: configService.get('JWT_SECRET'),
  });
  return {
    statusCode: 200,
    message: 'Login successful',
    accessToken: jwtString,
  };
};
