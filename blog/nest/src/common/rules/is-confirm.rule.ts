import { registerDecorator, ValidationOptions, ValidationArguments } from 'class-validator';
import {PrismaClient} from '@prisma/client'

export function IsConfirm(validationOptions?: ValidationOptions) {
  return function (object: Record<string,any>, propertyName: string) {
    registerDecorator({
      name: 'IsConfirm',
      target: object.constructor,
      propertyName: propertyName,
      constraints: [],
      options: validationOptions,
      validator: {
       async validate(value: any, args: ValidationArguments) {
          return Boolean(value === args.object[args.property + '_confirm'])
        },
      },
    });
  };
}