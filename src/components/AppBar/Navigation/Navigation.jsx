import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';

export const Navigation = () => {
  const isLoggined = useSelector(selectIsLoggedIn);
  return (
    <>
      {isLoggined && (
        <nav className={css.nav}>
          <Breadcrumb fontWeight="medium" fontSize="lg" separator="">
            <BreadcrumbItem>
              <BreadcrumbLink
                isCurrentPage
                as={NavLink}
                to="/"
                className={css.navLink}
                fontSize={30}
              >
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbLink
                isCurrentPage
                as={NavLink}
                to="/contacts"
                className={css.navLink}
                fontSize={30}
              >
                Contacts
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </nav>
      )}
    </>
  );
};
