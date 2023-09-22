import { PrismaClient } from '@prisma/client';
import { registerDecorator, ValidationOptions, ValidationArguments } from 'class-validator';

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
          const user = await prisma[table].findFirst({
            where: {
              [propertyName]: args.value
            }
          })
          console.log(!Boolean(user));
          return !Boolean(user);
        }
      },
    });
  };
}