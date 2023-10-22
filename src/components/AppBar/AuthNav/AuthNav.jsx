import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { NavLink } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import css from './AuthNav.module.css';

export const AuthNav = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <>
      {!isLoggedIn && (
        <Breadcrumb fontWeight="medium" fontSize="lg" separator="">
          <BreadcrumbItem>
            <BreadcrumbLink
              as={NavLink}
              to="/login"
              fontSize={20}
              textDecoration="none"
              className={css.authLink}
            >
              Login
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink
              isCurrentPage
              as={NavLink}
              to="/register"
              fontSize={20}
              textDecoration="none"
              className={css.authLink}
            >
              Register
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      )}
    </>
  );
};
