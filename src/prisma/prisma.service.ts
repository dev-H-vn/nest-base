import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class PrismaService extends PrismaClient {
  constructor(configService: ConfigService) {
    super({
      datasources: {
        db: {
          url: configService.get('DATABASE_URL'),
        },
      },
    });
  }
  cleanDatabase() {
    return this.$transaction([
      //2 commands in ONE transaction
      this.note.deleteMany(),
      this.user.deleteMany(),
    ]);
  }
}
