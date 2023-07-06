import { Controller, Get } from '@nestjs/common';

@Controller('notes')
export class NoteController {
  constructor() {}

  @Get()
  getNotes() {}
}
