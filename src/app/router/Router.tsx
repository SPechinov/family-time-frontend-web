import { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';
import { PageMain } from '../../pages/auth';

export const Router: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageMain />} />
      </Routes>
    </BrowserRouter>
  );
};
