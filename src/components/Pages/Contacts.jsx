import { Box } from '@chakra-ui/react';
import { ContactForm } from 'components/Contacts/ContactForm/ContactForm';
import { ContactsFilter } from 'components/Contacts/ContactsFilter/ContactsFilter';
import { ContactsList } from 'components/Contacts/ContactsList/ContactsList';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { fetchContacts } from 'redux/contactsOperations';

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <Box ml="20px">
      <ContactForm />
      <ContactsFilter />
      {isLoggedIn && <ContactsList />}
      <ToastContainer autoClose={2500} />
    </Box>
  );
};

export default Contacts;
