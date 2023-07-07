import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { AuthModule } from 'src/auth/auth.module';
import { NoteModule } from 'src/note/note.module';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [
    //To configure environment variables and load .env files in a NestJS application.
    ConfigModule.forRoot({
      // configuration on the global
      isGlobal: true,
    }),
    AuthModule,
    NoteModule,
    PrismaModule,
  ],
})
export class AppModule {}
