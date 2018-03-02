import React from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';

const EditExpensePage = props => (
  <div>
    <p> this is the edit page, {props.match.params.id}</p>
  </div>
);

EditExpensePage.propTypes = {
  match: ReactRouterPropTypes.match.isRequired,
};


export default EditExpensePage;
