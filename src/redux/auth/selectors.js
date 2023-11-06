import { createSelector } from '@reduxjs/toolkit';

const selectAuth = state => state.user;

export const selectName = createSelector(selectAuth, user => user.user.name);
export const selectIsLoggedIn = createSelector(
  selectAuth,
  user => user.isLoggedIn
);
export const isFetchCurrentUser = createSelector(
  selectAuth,
  user => user.isFetchCurrentUser
);
export const selectError = createSelector(selectAuth, user => user.error);
