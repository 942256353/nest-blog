import {
    ValidationArguments,
    ValidatorConstraint,
    ValidatorConstraintInterface,
  } from 'class-validator';
  
  @ValidatorConstraint()
  export class IsConfirmed implements ValidatorConstraintInterface {
    async validate(value: string, args: ValidationArguments) {
      return value === args.object[args.property+'_comfirmed'];
    }
  
    defaultMessage(args: ValidationArguments) {
      return '两次密码不一致';
    }
  }
  