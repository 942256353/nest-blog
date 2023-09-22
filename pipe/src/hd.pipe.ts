import { ArgumentMetadata, BadRequestException,  HttpException, HttpStatus, Injectable, PipeTransform} from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';

@Injectable()
export class HdPipe implements PipeTransform {
 async transform(value: any, metadata: ArgumentMetadata) {
  //  return metadata.metatype ==Number?+value:value;
  const object = plainToInstance(metadata.metatype, value);
  const errors = await validate(object)
  if(errors.length > 0){
    const messages = errors.map(err =>({
      field:err.property,
      message: Object.values(err.constraints).map(v=>v)
    }))
    throw new HttpException(messages,HttpStatus.UNPROCESSABLE_ENTITY)
  }
  return value;
  }
}
