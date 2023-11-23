import { useEffect, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import { refreshUser } from 'redux/auth/userOperations';
import PrivateRoute from './helpers/Routes/PrivateRoute';
import RestrictedRoute from './helpers/Routes/RestrictedRoute';
import { isFetchCurrentUser } from 'redux/auth/selectors';
import { Layout } from './Layout/Layout';

const Contacts = lazy(() => import('./Pages/Contacts'));
const LogIn = lazy(() => import('./Pages/LogIn'));
const Register = lazy(() => import('./Pages/Register'));
const Home = lazy(() => import('./Pages/Home'));

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshingCurrentUser = useSelector(isFetchCurrentUser);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return (
    <>
      {!isRefreshingCurrentUser && (
        <>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route
                index
                element={
                  <PrivateRoute>
                    <Home />
                  </PrivateRoute>
                }
              />
              <Route
                path="contacts"
                element={
                  <PrivateRoute>
                    <Contacts />
                  </PrivateRoute>
                }
              />
              <Route
                exact
                path="login"
                element={
                  <RestrictedRoute>
                    <LogIn />
                  </RestrictedRoute>
                }
              />
              <Route
                exact
                path="register"
                element={
                  <RestrictedRoute>
                    <Register />
                  </RestrictedRoute>
                }
              />
            </Route>
            <Route path="*" element={<Navigate to={'/'} />} />
          </Routes>
        </>
      )}
    </>
  );
};
