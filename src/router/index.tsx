import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import InitialPage from '../presentation/pages/InitialPage';


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<InitialPage />} path="/" />
    </>
  )
);
export default router;

