import { useSelector } from 'react-redux';
import { getContacts, getFilterValue, getIsLoading } from 'redux/selectors';
import { ContactItem } from './ContactItem';
import { useMemo } from 'react';
import { List } from '@chakra-ui/react';

import { Loader } from 'components/helpers/Loader/Loader';

export const ContactsList = () => {
  const contacts = useSelector(getContacts);
  const filterValue = useSelector(getFilterValue);
  const IsLoading = useSelector(getIsLoading);

  const visibleContacts = useMemo(() => {
    const normalized = filterValue.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalized)
    );
  }, [contacts, filterValue]);

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
