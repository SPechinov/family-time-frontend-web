import { FC } from 'react';
import { Layout as LayoutAuth } from '../../../entities/auth';
import { Auth as WidghetAuth } from '../../../widgets/auth';

export const Main: FC = () => {
  return (
    <LayoutAuth>
      <WidghetAuth />
    </LayoutAuth>
  );
};
