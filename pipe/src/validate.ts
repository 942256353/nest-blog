import { ValidationError, ValidationPipe } from "@nestjs/common";

export class Validate extends ValidationPipe{
    protected mapChildrenToValidationErrors(error: ValidationError, parentPath?: string): ValidationError[]{
        const errors = super.mapChildrenToValidationErrors(error, parentPath);
        // console.log(errors)
        errors.map(error=>{
            for(const key in error.constraints){
                error.constraints[key] = error.property+':'+error.constraints[key]
            }
        })
        return errors
    }
}
