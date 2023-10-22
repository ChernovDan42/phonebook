export const searchName = (state, obj) => {
  return state.find(
    contact => contact.name.toLowerCase() === obj.name.toLowerCase()
  );
};
