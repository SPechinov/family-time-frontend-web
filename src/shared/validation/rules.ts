export const validationRules = {
  email: {
    regexp:
      /^[a-zA-Z0-9._%+-]+[a-zA-Z0-9]@[a-zA-Z0-9]+[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    minLength: 5,
    maxLength: 50,
  },
  password: {
    minLength: 8,
    maxLength: 50,
  },
};
