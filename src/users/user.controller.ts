import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
  Query,
} from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { UserService } from './user.service';
@Controller('auth')
export class UserController {
  constructor(private userService: UserService) {}
  @Post('/signup')
  createUser(@Body() body: CreateUserDto) {
    return this.userService.create(body.email, body.password);
  }
  @Get()
  findAll(@Query('email') query: string) {
    return this.userService.find(query);
  }
  @Get('/:id')
  findUser(@Param('id') id: string) {
    return this.userService.findOne(parseInt(id));
  }
  @Patch('/:id')
  updateUser(@Param('id') id: string, @Body() body: any) {
    return this.userService.update(parseInt(id), body);
  }
  @Delete('/:id')
  removeUSer(@Param('id') id: string) {
    return this.userService.remove(parseInt(id));
  }
}
