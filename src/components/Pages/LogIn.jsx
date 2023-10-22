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
import { login } from 'redux/auth/userOperations';
import { Toaster } from 'react-hot-toast';

const LogIn = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: ({ email, password }) => {
      if (!email || !password) {
        return;
      }
      dispatch(login({ email, password }));
    },
  });
  return (
    <>
      <Text fontSize={'xl'} textAlign={'center'} mt={2}>
        Please Enter to Your Account
      </Text>
      <Flex bg="dark" align="center" justify="center" mt={3}>
        <Box bg="dark" p={6} rounded="lg" w={500} border="1px solid white">
          <form onSubmit={formik.handleSubmit}>
            <VStack spacing={4} align="flex-start">
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
                />
              </FormControl>

              <Button type="submit" colorScheme="purple" width="full">
                Login
              </Button>
            </VStack>
          </form>
        </Box>
      </Flex>
      <Toaster position="top-right" />
    </>
  );
};

export default LogIn;
