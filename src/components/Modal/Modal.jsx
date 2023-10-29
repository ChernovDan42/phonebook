import css from './Modal.module.css';
import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
} from '@chakra-ui/react';
import { useFormik } from 'formik';

const modalRoot = document.querySelector('#modal-root');

export function Modal({ onClose, name, number }) {
  useEffect(() => {
    window.addEventListener('keydown', handleKeydown);
    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  });

  const handleKeydown = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const formik = useFormik({
    initialValues: {
      name: name,
      number: number,
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return createPortal(
    <div className={css.Overlay} onClick={handleBackdropClick}>
      <div className={css.modal}>
        <Box
          bg="dark"
          p={6}
          rounded="lg"
          w={500}
          border="1px solid white"
          mt={5}
        >
          <form onSubmit={formik.handleSubmit}>
            <VStack spacing={4} align="flex-start">
              <FormControl>
                <FormLabel htmlFor="name">Name</FormLabel>
                <Input
                  onChange={formik.handleChange}
                  value={formik.values.name}
                  id="name"
                  name="name"
                  type="text"
                  variant="filled"
                  border="1px solid white "
                  _focus={{ border: '1px solid #d5a6bd' }}
                  pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                  required
                />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="number">Phone Number</FormLabel>
                <Input
                  onChange={formik.handleChange}
                  value={formik.values.number}
                  id="number"
                  name="number"
                  type="tel"
                  variant="filled"
                  border="1px solid white "
                  _focus={{ border: '1px solid #d5a6bd' }}
                  required
                  minLength="10"
                  maxLength="13"
                  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                  pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
                />
              </FormControl>

              <Button type="submit" colorScheme="purple" width="full">
                Add Contact
              </Button>
            </VStack>
          </form>
        </Box>
      </div>
    </div>,
    modalRoot
  );
}
