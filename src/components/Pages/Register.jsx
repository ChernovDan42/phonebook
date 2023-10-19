import { useFormik } from 'formik';
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  VStack,
} from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/userOperations';

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
    <Flex bg="dark" align="center" justify="center" h="100vh">
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
              Create User
            </Button>
          </VStack>
        </form>
      </Box>
    </Flex>
  );
};

export default Register;
