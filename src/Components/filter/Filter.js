import React from 'react';
import PropTypes from 'prop-types';
import style from './Filter.module.css';

const Filter = ({ filter, addToFilterState }) => {
  return (
    <label className={style.filterLabel}>
      Find contact by name
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={addToFilterState}
        className={style.filterInput}
      />
    </label>
  );
};

Filter.propTypes = {
  filter: PropTypes.string,
  addToFilterState: PropTypes.func,
};

export default Filter;
