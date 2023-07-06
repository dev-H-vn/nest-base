import { Module } from '@nestjs/common';
import { AuthModule } from 'src/auth/auth.module';
import { NoteModule } from 'src/note/note.module';
import { PrismaModule } from 'src/prisma/prisma.module';
@Module({
  imports: [AuthModule, NoteModule, PrismaModule],
})
export class AppModule {}
