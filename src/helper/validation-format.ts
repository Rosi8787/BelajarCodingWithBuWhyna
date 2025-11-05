import { BadRequestException, ValidationError } from "@nestjs/common";
import { error } from "console";

const FormatValidation = (errors: ValidationError[]): BadRequestException =>{
    const messages = errors.map(
        it => Object.values(it.constraints || {}).join(",")
    )
      .join("; ")
    return new BadRequestException(`error validation : ${messages}`);
}
export default FormatValidation