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
  findUser(@Param('id') id: number) {
    return this.userService.findOne(id);
  }
  @Patch('/:id')
  updateUser(@Param('id') id: number, @Body() body: any) {
    return this.userService.update(id, body);
  }
  @Delete('/:id')
  removeUSer(@Param('id') id: number) {
    return this.userService.remove(id);
  }
}
