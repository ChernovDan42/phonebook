import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/selectors';

export default function PrivateRoute({ children }) {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  if (!isLoggedIn) {
    // not logged in so redirect to login page with the return url
    return <Navigate to="/login"  />;
  }

  // authorized so return child components
  return children;
}
