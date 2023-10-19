import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilterValue, getIsLoading } from 'redux/selectors';
import { ContactItem } from './ContactItem';
import { useEffect, useMemo } from 'react';
import { fetchContacts } from '../../../redux/contactsOperations';
import { List } from '@chakra-ui/react';

import css from './css/ContactsList.module.css';
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
      className={css.list}
      h="300px"
    >
      <ContactItem contacts={visibleContacts} />
      {IsLoading && <Loader />}
    </List>
  );
};
