import { FC } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router';
import { authRoutes } from '../../entities/auth';
import { AuthRouter } from './auth';

export const Router: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`${authRoutes.root}/*`} element={<AuthRouter />} />
        <Route path="*" element={<Navigate to={authRoutes.root} />} />
      </Routes>
    </BrowserRouter>
  );
};
