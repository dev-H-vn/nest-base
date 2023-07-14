import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { AppController } from 'src/app.controller';
import { AuthModule } from 'src/auth/auth.module';
import { EventsGateway } from 'src/gateway/events.gateway';
import { GatewayModule } from 'src/gateway/gateway.module';
import { NoteModule } from 'src/note/note.module';
import { PrismaModule } from 'src/prisma/prisma.module';
import { UserModule } from 'src/user/user.module';
import { ResponseInterceptor } from 'src/utils';

@Module({
  imports: [
    GatewayModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    UserModule,
    AuthModule,
    NoteModule,
    PrismaModule,
  ],
  controllers: [AppController],
  providers: [
    EventsGateway,
    {
      provide: APP_INTERCEPTOR,
      useClass: ResponseInterceptor,
    },
  ],
})
export class AppModule {}
