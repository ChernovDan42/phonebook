import { useDispatch, useSelector } from 'react-redux';
import { selectName, selectIsLoggedIn } from 'redux/auth/selectors';
import { logOut } from 'redux/auth/userOperations';
import css from './UserMenu.module.css';
import { Box, Button, Text } from '@chakra-ui/react';

export const UserMenu = () => {
  const name = useSelector(selectName);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();

  return (
    <>
      {isLoggedIn && (
        <div className={css.userMenu}>
          <Box display="flex" fontSize="xl" mr={2}>
            <Text mr={1}>Wellcome</Text>
            <Text fontWeight="bold">{name}</Text>
          </Box>

          <Button type="button" onClick={() => dispatch(logOut())}>
            Log-Out
          </Button>
        </div>
      )}
    </>
  );
};
