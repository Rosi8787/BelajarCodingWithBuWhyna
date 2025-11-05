import { PartialType } from "@nestjs/mapped-types";
import { IsEmail, IsNotEmpty, IsString, IsStrongPassword } from "class-validator";

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

}
