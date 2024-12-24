import { FC, useCallback, useState } from 'react';
import { Props } from './types.ts';
import { Input } from './Input.tsx';
import { SvgIcon } from '../SvgIcon';
import styles from './styles-password.module.scss';

export const InputPassword: FC<Props> = (props) => {
  const [hidden, setHidden] = useState(true);

  const handleEyeClick = useCallback(() => {
    setHidden((prevState) => !prevState);
  }, []);

  return (
    <Input
      type={hidden ? 'password' : 'text'}
      classNameEndAdornment={styles.endAdornment}
      endAdornment={
        <button
          className={styles.button}
          onClick={handleEyeClick}
          type="button"
        >
          <SvgIcon value={hidden ? 'i_24_eye_off' : 'i_24_eye'} />
        </button>
      }
      {...props}
    />
  );
};
