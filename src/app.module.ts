import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { AuthModule } from 'src/auth/auth.module';
import { ResponseInterceptor } from 'src/utils';
import { NoteModule } from 'src/note/note.module';
import { PrismaModule } from 'src/prisma/prisma.module';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      // configuration on the global
      isGlobal: true,
    }),
    UserModule,
    AuthModule,
    NoteModule,
    PrismaModule, //To configure environment variables and load .env files in a NestJS application.
  ],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: ResponseInterceptor,
    },
  ],
})
export class AppModule {}
