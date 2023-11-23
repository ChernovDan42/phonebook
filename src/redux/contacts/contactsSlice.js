import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  deleteContact,
  editContact,
} from './contactsOperations';

const contactsInitialState = {
  contacts: [],
  isLoading: false,
  error: null,
};

const handlePending = state => ({
  ...state,
  isLoading: true,
});
const handleRejected = (state, action) => ({
  ...state,
  isLoading: false,
  error: action.payload,
});

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {},
  extraReducers: builder => {
    builder

      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.contacts = action.payload;
        state.isLoading = false;
        state.error = null;
      })

      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.contacts.push(action.payload);
      })

      .addCase(deleteContact.fulfilled, (state, action) => {
        state.contacts = state.contacts.filter(
          contact => contact.id !== action.payload.id
        );
        state.error = null;
        state.isLoading = false;
      })
      .addCase(editContact.fulfilled, (state, action) => {
        const { id } = action.payload;

        state.contacts = state.contacts.map(contact =>
          contact.id === id ? action.payload : contact
        );
      })
      .addMatcher(
        isAnyOf(
          deleteContact.rejected,
          fetchContacts.rejected,
          addContact.rejected
        ),
        handleRejected
      )
      .addMatcher(
        isAnyOf(
          fetchContacts.pending,
          addContact.pending,
          deleteContact.pending
        ),
        handlePending
      );
  },
});

export const contactsReducer = contactsSlice.reducer;
