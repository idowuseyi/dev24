import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { NotFoundException } from '@nestjs/common';


@Injectable()
export class UsersService {
    private users = [
        {
            "id": 1,
            "name": "SeyiID",
            "email": "idostech.biz@gmail.com",
            "role": "Developer"
        },
        {
            "id": 2,
            "name": "Ademola",
            "email": "fm@gmail.com",
            "role": "Intern"
        },
        {
            "id": 3,
            "name": "Mercy",
            "email": "mercyfashion@gmail.com",
            "role": "Admin"
        },
        {
            "id": 4,
            "name": "Tolu",
            "email": "bossboss@gmail.com",
            "role": "Intern"
        },
        {
            "id": 5,
            "name": "Collins",
            "email": "tech.biz@gmail.com",
            "role": "Developer"
        },
        {
            "id": 6,
            "name": "Henry",
            "email": "football@gmail.com",
            "role": "Developer"
        },
    ]

    findAll(role?: 'Intern' | 'Admin' | 'Developer') {
        if (role) {
            const roleArray = this.users.filter(user => user.role === role)
            if (roleArray.length === 0) throw new NotFoundException('User Role Not Found')
        }
        return this.users
    }

    findOne(id: number) {
        const user = this.users.find(user => user.id === id)

        if (!user) throw new NotFoundException('User Not Found')
        return user
    }

    create(createUserDto: CreateUserDto) {
        const usersByHighestId = [...this.users].sort((a,b) => b.id - a.id)
        const newUser = {
            id: usersByHighestId[0].id + 1,
            ...createUserDto
        }
        this.users.push(newUser)
        return newUser
    }

    update(id: number, updateUserDto: UpdateUserDto) {
        this.users = this.users.map(user => {
            if (user.id === id) {
                return { ...user, ...updateUserDto}
            }
            return user
        })

        return this.findOne(id)
    }

    delete(id: number) {
        const removedUser = this.findOne(id)

        this.users = this.users.filter(user => user.id !== id)

        return removedUser
    }
}
