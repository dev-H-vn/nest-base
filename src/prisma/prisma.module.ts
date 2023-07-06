import { PrismaService } from './prisma.service';
import { Global, Module } from '@nestjs/common';

@Global() //this module is used globally
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
