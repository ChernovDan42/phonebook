import { useDispatch } from 'react-redux';
import { filterChange } from 'redux/filterSlice';
import { FormControl, FormLabel, Input, Icon, Box } from '@chakra-ui/react';
import { RiUserSearchLine } from 'react-icons/ri';

export const ContactsFilter = () => {
  const dispatch = useDispatch();

  const handleChange = e => {
    const value = e.target.value;
    dispatch(filterChange(value.trim()));
  };

  return (
    <FormControl display="flex" alignItems="baseline" mt={5}>
      <FormLabel htmlFor="searchContact" fontSize={20}>
        Find contact
      </FormLabel>
      <Box position="relative">
        <Input
          id="searchContact"
          type="text"
          autoComplete="off"
          onChange={handleChange}
          w={377}
          _focus={{ border: '1px solid #d5a6bd' }}
        />
        <Icon
          as={RiUserSearchLine}
          position="absolute"
          right={1}
          top={'20%'}
          boxSize="24px"
        />
      </Box>
    </FormControl>
  );
};
