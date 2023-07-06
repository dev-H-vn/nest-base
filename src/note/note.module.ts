import { NoteService } from './note.service';
import { Module } from '@nestjs/common';
import { NoteController } from './note.controller';

@Module({
  controllers: [NoteController],
  providers: [NoteService],
})
export class NoteModule {}
