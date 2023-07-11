import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';

export const signJwtToken = async (
  userId: string,
  email: string,
  jwtService: JwtService,
  configService: ConfigService,
): Promise<{ accessToken: string }> => {
  const payload = {
    sub: userId,
    email,
  };
  const jwtString = await jwtService.signAsync(payload, {
    expiresIn: '30m',
    secret: configService.get('JWT_SECRET'),
  });
  return {
    accessToken: jwtString,
  };
};
