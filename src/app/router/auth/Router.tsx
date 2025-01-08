import { FC } from 'react';
import { authRoutes } from '../../../entities/auth';
import { Navigate, Route, Routes } from 'react-router';
import { AuthMain, AuthForgotPassword } from '../../../pages/auth';

export const Router: FC = () => {
  return (
    <Routes>
      <Route path={authRoutes.signIn.root} element={<AuthMain />} />
      <Route path={authRoutes.signUp.root} element={<AuthMain />} />
      <Route
        path={authRoutes.forgotPassword.root}
        element={<AuthForgotPassword />}
      />
      <Route path="*" element={<Navigate to={authRoutes.signIn.abs} />} />
    </Routes>
  );
};
