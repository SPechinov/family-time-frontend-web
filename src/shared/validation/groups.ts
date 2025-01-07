import { validationRules } from './rules.ts';
import { validationErrors } from './errors.ts';

export const validationGroups = {
  required: {
    required: {
      value: true,
      message: validationErrors.required,
    },
  },
  email: {
    pattern: {
      value: validationRules.email.regexp,
      message: validationErrors.invalidRegExp,
    },
    minLength: {
      value: validationRules.email.minLength,
      message: validationErrors.minLength(validationRules.email.minLength),
    },
    maxLength: {
      value: validationRules.email.maxLength,
      message: validationErrors.maxLength(validationRules.email.maxLength),
    },
  },
  password: {
    minLength: {
      value: validationRules.password.minLength,
      message: validationErrors.minLength(validationRules.password.minLength),
    },
    maxLength: {
      value: validationRules.password.maxLength,
      message: validationErrors.maxLength(validationRules.password.maxLength),
    },
  },
};
