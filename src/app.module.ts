import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { AuthModule } from 'src/auth/auth.module';
import { NoteModule } from 'src/note/note.module';
import { PrismaModule } from 'src/prisma/prisma.module';
import { UserModule } from 'src/user/user.module';
import { ResponseInterceptor } from 'src/utils';

@Module({
  imports: [
    ConfigModule.forRoot({
      // configuration on the global
      isGlobal: true,
    }),
    UserModule,
    AuthModule,
    NoteModule,
    PrismaModule,
  ],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: ResponseInterceptor,
    },
  ],
})
export class AppModule {}
