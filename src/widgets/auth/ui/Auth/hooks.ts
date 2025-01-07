import { useState } from 'react';
import { SignInFormValues, SignUpFormValues } from '../../../../entities/auth';

export const useFormsStates = () => {
  const [signInValues, setSignInValues] = useState<SignInFormValues>({
    email: '',
    password: '',
  });
  const [signUpValues, setSignUpValues] = useState<SignUpFormValues>({
    email: '',
    password: '',
    country: undefined,
  });

  const clearSignInValues = () => {
    setSignInValues({
      email: '',
      password: '',
    });
  };

  const clearSignUpValues = () => {
    setSignUpValues({
      email: '',
      password: '',
      country: undefined,
    });
  };

  return {
    signInValues,
    setSignInValues,
    clearSignInValues,
    signUpValues,
    setSignUpValues,
    clearSignUpValues,
  };
};
