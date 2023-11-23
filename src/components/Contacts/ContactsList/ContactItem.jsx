import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/contactsOperations';
import {
  ListItem,
  Text,
  Box,
  IconButton,
  useColorModeValue,
} from '@chakra-ui/react';
import { DeleteIcon, EditIcon } from '@chakra-ui/icons';

import PropTypes from 'prop-types';
import { getIsLoading } from 'redux/contacts/selectors';
import { useState } from 'react';
import { Modal } from 'components/Modal/Modal';

export const ContactItem = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const IsLoading = useSelector(getIsLoading);
  const [showModal, setShowModal] = useState(false);

  const border = useColorModeValue('1px solid purple', '1px solid  #D6BCFA');

  const toggleModal = () => setShowModal(state => !state);

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };
  return (
    <>
      <ListItem
        mt={4}
        borderBottom={border}
        display={'flex'}
        justifyContent="space-between"
        alignItems="center"
        w="600px"
        mr="10px"
      >
        <Text fontSize={'lg'}>
          {name}: {number}
        </Text>
        <Box>
          <IconButton
            mr={5}
            border={'none'}
            colorScheme="purple"
            aria-label="Delete Contact"
            size="md"
            icon={<DeleteIcon />}
            onClick={() => handleDelete(id)}
            variant="outline"
            disabled={IsLoading}
          />
          <IconButton
            border={'none'}
            colorScheme="purple"
            aria-label="Edit Contact"
            size="md"
            icon={<EditIcon />}
            onClick={toggleModal}
            variant="outline"
            disabled={IsLoading}
          />
        </Box>
      </ListItem>
      {showModal && (
        <Modal onClose={toggleModal} name={name} number={number} id={id} />
      )}
    </>
  );
};

ContactItem.propTypes = {
  optionalObjectWithShape: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
  }),
};
