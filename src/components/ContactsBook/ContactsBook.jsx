import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { deleteContact } from 'redux/contacts/contactsAction';

const ContactsBook = ({ filter, contacts, onDelete }) => {
  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    const normalized = filter.toLowerCase();
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalized)
    );

    setFilteredList(filteredContacts);
  }, [contacts, filter]);

  return (
    <ul>
      {filteredList.map(contact => (
        <li className="contactItem" key={contact.id}>
          {contact.name}: {contact.number}
          <button
            className="deleteBtn"
            onClick={() => {
              onDelete(contact.id);
            }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

const mapStateToProps = state => ({
  filter: state.contacts.filter,
  contacts: state.contacts.item,
});

const mapDispatchToProps = dispatch => ({
  onDelete: id => dispatch(deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsBook);
