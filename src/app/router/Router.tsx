import { FC } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router';
import { authRoutes, PageAuthMain } from '../../pages/auth';

export const Router: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`${authRoutes.root}/*`} element={<PageAuthMain />} />
        <Route path="*" element={<Navigate to={authRoutes.root} />} />
      </Routes>
    </BrowserRouter>
  );
};
