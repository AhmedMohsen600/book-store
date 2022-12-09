import { Routes, Route } from 'react-router-dom';
import { Header } from '../components';
import * as ROUTES from '../constant/router';
import { Books, Categories } from '../pages';

export default function PageRoutes() {
  return (
    <Routes>
      <Route element={<Header />}>
        <Route path={ROUTES.BOOKS} element={<Books />} />
        <Route path={ROUTES.CATEGORY} element={<Categories />} />
      </Route>
    </Routes>
  );
}
