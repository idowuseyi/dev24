import { IsEmail, IsEnum, IsString, IsNotEmpty } from "class-validator";

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsEmail()
    email: string;

    @IsEnum(["Intern", "Admin", "Developer"], {
        message: 'Valid role required'
    })
    role: "Intern" | "Admin" | "Developer";
}