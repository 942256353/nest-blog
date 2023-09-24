import { registerDecorator, ValidationOptions, ValidationArguments } from 'class-validator';
import {PrismaClient} from '@prisma/client'

export function IsNotExistsRule(table: string, validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'IsNotExistsRule',
      target: object.constructor,
      propertyName: propertyName,
      constraints: [table],
      options: validationOptions,
      validator: {
       async validate(value: any, args: ValidationArguments) {
          const prisma = new PrismaClient();
          const res = await prisma[table].findFirst({
            where:{
                [args.property]:value
            }
          })
          return !Boolean(res);
        },
      },
    });
  };
}