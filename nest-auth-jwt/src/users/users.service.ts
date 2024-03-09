import { Injectable } from '@nestjs/common';

export type User = {
    id: number;
    name: string;
    username: string;
    password: string;
};

@Injectable()
export class UsersService {
    private readonly users: User[] = [
        {
            id: 1,
            name: 'Moris',
            username: 'moris',
            password: 'sosecure',
        },
        {
            id: 2,
            name: 'Mustaph',
            username: 'mustaph',
            password: 'muskey',
        },
    ];

    async findOne(username: string): Promise<User | undefined> {
        return this.users.find(user => user.username === username);
    }
}
