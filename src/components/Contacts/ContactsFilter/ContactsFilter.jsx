import { useDispatch } from 'react-redux';
import { filterChange } from 'redux/filterSlice';
import css from './ContactsFilter.module.css';

import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
} from '@chakra-ui/react';

export const ContactsFilter = () => {
  const dispatch = useDispatch();

  const handleChange = e => {
    const value = e.target.value;
    dispatch(filterChange(value.trim()));
  };

  return (
    <FormControl display="flex" alignItems="baseline" mt={5}>
      <FormLabel fontSize={20}>Find contact</FormLabel>
      <Input
        type="text"
        autoComplete="off"
        onChange={handleChange}
        w={377}
        _focus={{ border: '1px solid #d5a6bd', outline: 'none' }}
      />
    </FormControl>
  );
};
