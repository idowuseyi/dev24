import { Body, Controller, Delete, Get, Param, Patch, Post, Query, ParseIntPipe, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';


@Controller('users') // decorator says it will handle the users route i.e /users. controllers run automatically when called.
export class UsersController {
    /*
    GET /users done
    GET /users/:id done
    POST /users/
    PATCH /users/:id
    DELETE /users/:id
    */

    constructor(private readonly userService: UsersService) {}

    @Get() // GET /users - get all users or /users?role=value
    findAll(@Query('role') role?: 'Intern' | 'Admin' | 'Developer') {
        return this.userService.findAll(role)
    }

    @Get(':id') // GET /user:id
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.userService.findOne(id)
    }

    @Post() // POST /users/
    create(@Body(ValidationPipe) createUserDto: CreateUserDto) {
        return this.userService.create(createUserDto)
    }

    @Patch(':id') // PATCH /user:id
    update(@Param('id', ParseIntPipe) id: number, @Body(ValidationPipe) updateUserDto: UpdateUserDto) {
        return this.userService.update(id, updateUserDto)
    }

    @Delete(':id') // DELETE /user:id
    delete(@Param('id', ParseIntPipe) id: number) {
        return this.userService.delete(id)
    }


}
