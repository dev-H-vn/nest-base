import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { NoteService } from './note/note.service';
import { NoteController } from './note/note.controller';
import { NoteModule } from './note/note.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [AuthModule, NoteModule],
  controllers: [AppController, NoteController],
  providers: [AppService, NoteService],
})
export class AppModule {}
