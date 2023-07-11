import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { UserService } from 'src/user/user.service';
import { MyJwtGuard } from 'src/utils';

@ApiBearerAuth()
@ApiTags('Users')
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get(':id')
  @UseGuards(MyJwtGuard)
  @HttpCode(HttpStatus.OK)
  async getDetailUser(@Param('id') id: string): Promise<any> {
    return await this.userService.getDetailUser(id);
  }
}
