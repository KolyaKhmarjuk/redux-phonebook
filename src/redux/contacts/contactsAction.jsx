const addContact = contact => ({
  type: 'contacts/item_add',
  payload: contact,
});

const deleteContact = id => ({
  type: 'contacts/item_delete',
  payload: id,
});

export { addContact, deleteContact };
