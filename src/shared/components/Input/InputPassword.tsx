import { FC, useCallback, useState } from 'react';
import { Props } from './types.ts';
import { Input } from './Input.tsx';
import { SvgIcon } from '../SvgIcon';

export const InputPassword: FC<Props> = (props) => {
  const [type, setType] = useState('password');

  const handleEyeClick = useCallback(() => {
    setType(type === 'password' ? 'text' : 'password');
  }, [type]);

  return (
    <Input
      type={type}
      endAdornment={
        <button onClick={handleEyeClick} type="button">
          <SvgIcon value="i_24_eye" />
        </button>
      }
      {...props}
    />
  );
};
