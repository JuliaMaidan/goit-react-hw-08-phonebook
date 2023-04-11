export const getContacts = state => state.contacts;

export const getFilter = state => state.filter.filter;

export const getFilteredContacts = store => {
  const { filter, contacts } = store;

  const normalizedFilter = filter.filter.toLowerCase();
  const result = contacts.items.filter(({ name, phone }) => {
    return (
      name.toLowerCase().includes(normalizedFilter) ||
      phone.toLowerCase().includes(normalizedFilter)
    );
  });
  return result;
};
