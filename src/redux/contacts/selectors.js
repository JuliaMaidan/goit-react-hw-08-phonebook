export const selectLoading = state => state.contacts.loading;

// export const selectFilter = state => state.contacts.filter;

export const selectAllContacts = state => state.contacts.items;

export const selectFilter = state => state.filter.filter;

export const selectFilteredContacts = store => {
  const { filter, contacts } = store;

  const normalizedFilter = filter.filter.toLowerCase();
  const result = contacts.items.filter(({ name, number }) => {
    return (
      name.toLowerCase().includes(normalizedFilter) ||
      number.toLowerCase().includes(normalizedFilter)
    );
  });
  //   console.log(result);
  return result;
};
