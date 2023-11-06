import { Navigation } from './Navigation/Navigation';
import { UserMenu } from './UserMenu/UserMenu';
import css from './AppBar.module.css';
import { AuthNav } from './AuthNav/AuthNav';
import { Box } from '@chakra-ui/react';
import { IconButtonThemeMode } from './IconButtonThemeMode/IconButtonThemeMode';

export const AppBar = () => {
  return (
    <>
      <header className={css.header}>
        <Navigation />
        <AuthNav />
        <Box display={'flex'} alignItems="center">
          <UserMenu />
          <IconButtonThemeMode />
        </Box>
      </header>
    </>
  );
};
