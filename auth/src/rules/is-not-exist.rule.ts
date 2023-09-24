import { PrismaClient } from '@prisma/client';
// import { ValidatorConstraint, ValidatorConstraintInterface, ValidationArguments } from 'class-validator';
import { registerDecorator, ValidationOptions, ValidationArguments } from 'class-validator';

// @ValidatorConstraint({ name: 'IsNotExist', async: false })
// export class IsNotExist implements ValidatorConstraintInterface {
//  async validate(text: string, args: ValidationArguments) {
//     console.log(args);
//     const prisma = new PrismaClient();
//     const table = args.constraints.toString();
//     const result = await prisma[table].findFirst({
//       where: {
//         [args.property]: args.value
//       }
//     })
//     console.log(result);
//     return Boolean(user); // for async validations you must return a Promise<boolean> here
//   }

//   defaultMessage(args: ValidationArguments) {
//     // here you can provide default error message if validation failed
//     return '用户不存在';
//   }
// }
export function IsNotExist(table: string, validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'IsNotExist',
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
          return Boolean(user)
        },
      },
    });
  };
}