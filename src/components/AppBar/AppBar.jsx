import { Navigation } from './Navigation/Navigation';
import { UserMenu } from './UserMenu/UserMenu';
import css from './AppBar.module.css';
import { AuthNav } from './AuthNav/AuthNav';

export const AppBar = () => {
  return (
    <>
      <header className={css.header}>
        <Navigation />
        <AuthNav />
        <UserMenu />
      </header>
    </>
  );
};
