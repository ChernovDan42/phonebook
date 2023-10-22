export const selectName = state => state.user.user.name;
export const selectIsLoggedIn = state => state.user.isLoggedIn;
export const isFetchCurrentUser = state => state.user.isFetchCurrentUser;
export const selectError = state => state.user.error;
