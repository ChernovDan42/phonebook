import { useFormik } from 'formik';
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/userOperations';
import { Toaster } from 'react-hot-toast';

const Register = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    onSubmit: values => {
      dispatch(register(values));
    },
  });
  return (
    <>
      <Text fontSize={'xl'} textAlign={'center'} mt={2}>
        Create new User
      </Text>
      <Flex bg="dark" align="center" justify="center" mt={3}>
        <Box bg="dark" p={6} rounded="lg" w={500} border="1px solid white">
          <form onSubmit={formik.handleSubmit}>
            <VStack spacing={4} align="flex-start">
              <FormControl>
                <FormLabel htmlFor="name">Name</FormLabel>
                <Input
                  id="name"
                  name="name"
                  type="name"
                  variant="filled"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                  border="1px solid white "
                  _focus={{ border: '1px solid #d5a6bd' }}
                  pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                  required
                />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  variant="filled"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  border="1px solid white "
                  _focus={{ border: '1px solid #d5a6bd' }}
                  required
                />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="password">Password</FormLabel>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  variant="filled"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  border="1px solid white "
                  _focus={{ border: '1px solid #d5a6bd' }}
                  pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$"
                  title="Password must contain at least one lowercase letter,one uppercase letter,one digit.Minimum length of 8 characters"
                  required
                />
              </FormControl>

              <Button type="submit" colorScheme="purple" width="full">
                Create User
              </Button>
            </VStack>
          </form>
        </Box>
      </Flex>
      <Toaster position="top-right" />
    </>
  );
};

export default Register;
