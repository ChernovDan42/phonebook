import { selectIsLoggedIn } from 'redux/auth/selectors';
import { Route, redirect, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function PublicRoute({
  children,
  restricted = false,
  ...routeProps
}) {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;

  return <>{shouldRedirect ? <Navigate to="/contacts" /> : children}</>;
}
