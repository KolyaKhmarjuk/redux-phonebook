const addFilter = value => ({
  type: 'contacts/filter_change',
  payload: value,
});

export { addFilter };
