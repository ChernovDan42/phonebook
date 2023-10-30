import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppBar } from './AppBar/AppBar';
import { Routes, Route } from 'react-router-dom';
import { refreshUser } from 'redux/auth/userOperations';
import PublicRoute from './helpers/Routes/PublicRoute';
import PrivateRoute from './helpers/Routes/PrivateRoute';
import { lazy, Suspense } from 'react';
import { Loader } from './helpers/Loader/Loader';
import { isFetchCurrentUser } from 'redux/auth/selectors';

const Contacts = lazy(() => import('./Pages/Contacts'));
const LogIn = lazy(() => import('./Pages/LogIn'));
const Register = lazy(() => import('./Pages/Register'));

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
          <AppBar />
          <Suspense fallback={<Loader />}>
            <Routes>
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
                  <PublicRoute restricted>
                    <LogIn />
                  </PublicRoute>
                }
              ></Route>
              <Route
                exact
                path="register"
                element={
                  <PublicRoute restricted>
                    <Register />
                  </PublicRoute>
                }
              ></Route>
            </Routes>
          </Suspense>
        </>
      )}
    </>
  );
};
