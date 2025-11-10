import { IsNotEmpty,IsNumber,IsString } from "class-validator";
import { Category } from "@prisma/client";

export class CreateMenuDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsNumber()
    price: number;

    @IsNotEmpty()
    @IsString()
    category: Category;

    @IsNotEmpty()
    @IsString()
    description: string;
}