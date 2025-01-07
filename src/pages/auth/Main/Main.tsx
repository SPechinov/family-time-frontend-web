import { FC } from 'react';
import { Layout as LayoutAuth } from '../../../entities/auth';
import { Auth as WidgetAuth } from '../../../widgets/auth';
import { Navigate, Route, Routes } from 'react-router';
import { routes } from '../routes.ts';

export const Main: FC = () => {
  return (
    <LayoutAuth>
      <Routes>
        <Route path={routes.signIn.root} element={<WidgetAuth />} />
        <Route path={routes.signUp.root} element={<WidgetAuth />} />
        <Route path="*" element={<Navigate to={routes.signIn.abs} />} />
      </Routes>
    </LayoutAuth>
  );
};
