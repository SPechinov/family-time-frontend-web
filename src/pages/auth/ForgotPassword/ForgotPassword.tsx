import { FC } from 'react';
import { Layout as LayoutAuth } from '../../../entities/auth';
import { ForgotPassword as WidgetForgotPassword } from '../../../widgets/auth';

export const ForgotPassword: FC = () => {
  return (
    <LayoutAuth>
      <WidgetForgotPassword />
    </LayoutAuth>
  );
};
