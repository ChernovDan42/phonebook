import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsOperations';
import { ListItem, Text, Button } from '@chakra-ui/react';

import css from './css/ContactItem.module.css';
import PropTypes from 'prop-types';
import { getIsLoading } from 'redux/selectors';
import { useState } from 'react';
import { Modal } from 'components/Modal/Modal';
import { number } from 'yup';

export const ContactItem = ({ contacts }) => {
  const dispatch = useDispatch();
  const IsLoading = useSelector(getIsLoading);
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => setShowModal(state => !state);

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };
  return (
    <>
      {contacts.map(({ name, number, id }) => {
        return (
          <div key={id}>
            <ListItem mb={3}>
              <div className={css.contactInfo}>
                <Text fontSize={'lg'}>
                  {name}: {number}
                </Text>
                <Button
                  type="button"
                  onClick={() => handleDelete(id)}
                  disabled={IsLoading}
                >
                  Delete
                </Button>
                <Button
                  type="button"
                  onClick={toggleModal}
                  disabled={IsLoading}
                >
                  Edit
                </Button>
              </div>
            </ListItem>
          </div>
        );
      })}
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
