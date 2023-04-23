import { connect } from 'react-redux';
import { addFilter } from 'redux/contacts/filterAction';

const FilterContact = ({ onFilter }) => {
  return (
    <>
      <label className="filterLabel">
        Find
        <input
          type="text"
          name="filter"
          onChange={e => {
            onFilter(e.target.value);
          }}
          className="inputFilter"
        />
      </label>
    </>
  );
};

const mapDispatchToProps = dispatch => ({
  onFilter: value => dispatch(addFilter(value)),
});

export default connect(null, mapDispatchToProps)(FilterContact);
