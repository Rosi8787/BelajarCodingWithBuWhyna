import { PartialType } from "@nestjs/mapped-types";
import { IsEmail, isNotEmpty, IsNotEmpty, isString, IsString, IsStrongPassword } from "class-validator";
import { userRole } from "@prisma/client";

export class CreateUserDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;
    
    @IsNotEmpty()
    @IsStrongPassword(
        // {
        //     minLength    :1,
        //     minLowercase :1,
        //     minUppercase :1,
        //     minNumbers   :1,
        //     minSymbols   :1
        // }
    )
    password: string;

    @IsNotEmpty()
    @IsString()
    role : userRole

}
