import { useSelector } from 'react-redux';
import { getIsLoading, selectVisibleContacts } from 'redux/selectors';
import { ContactItem } from './ContactItem';

import { List } from '@chakra-ui/react';

import { Loader } from 'components/helpers/Loader/Loader';

export const ContactsList = () => {
  const IsLoading = useSelector(getIsLoading);
  const visibleContacts = useSelector(selectVisibleContacts);

  return (
    <List
      mt={7}
      display="flex"
      flexDirection={'column-reverse'}
      justifyContent={'flex-end'}
      h="300px"
    >
      {IsLoading && <Loader />}
      {visibleContacts.map(({ number, id, name }) => {
        return <ContactItem key={id} name={name} number={number} id={id} />;
      })}
    </List>
  );
};
