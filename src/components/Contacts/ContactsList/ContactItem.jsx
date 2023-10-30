import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsOperations';
import { ListItem, Text, Box, IconButton, border } from '@chakra-ui/react';
import { DeleteIcon, EditIcon } from '@chakra-ui/icons';
import css from './css/ContactItem.module.css';
import PropTypes from 'prop-types';
import { getIsLoading } from 'redux/selectors';
import { useState } from 'react';
import { Modal } from 'components/Modal/Modal';

export const ContactItem = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const IsLoading = useSelector(getIsLoading);
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => setShowModal(state => !state);

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };
  return (
    <>
      <ListItem mb={3}>
        <div className={css.contactInfo}>
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
        </div>
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
