export const validationErrors = {
  required: 'Обязательное поле',
  invalidRegExp: 'Не правильный формат',
  minLength: (min: number) => `Минимальная длина ${min}`,
  maxLength: (max: number) => `Максимальная длина ${max}`,
};
