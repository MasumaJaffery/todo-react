/* eslint-disable linebreak-style */
import React from 'react';
import PropTypes from 'prop-types';

const RemoveTodo = ({ onRemoveAll }) => (
  <>
    <div className="Removebtn">
      <button type="button" onClick={onRemoveAll}>Remove All</button>
    </div>
  </>
);

RemoveTodo.propTypes = {
  onRemoveAll: PropTypes.func.isRequired,
};

export default RemoveTodo;
