import { combineReducers } from 'redux';

const itemsReducer = (state = [], action) => {
  switch (action.type) {
    case 'contacts/item_add':
      return [...state, action.payload];
    case 'contacts/item_delete':
      return state.filter(item => item.id !== action.payload);
    default:
      return state;
  }
};

const filterReducer = (state = '', action) => {
  switch (action.type) {
    case 'contacts/filter_change':
      return action.payload;
    default:
      return state;
  }
};

const contactsReducer = combineReducers({
  item: itemsReducer,
  filter: filterReducer,
});

export default contactsReducer;
