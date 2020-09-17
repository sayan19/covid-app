import React from 'react';
import PropTypes from 'prop-types';
import { TransitionGroup } from 'react-transition-group';

function Result(props) {
  return (
    <TransitionGroup
      className="container result"
      component="div"
      transitionName="fade"
      transitionEnterTimeout={800}
      transitionLeaveTimeout={500}
      transitionAppear
      transitionAppearTimeout={500}
    >
      <div>
        THANK YOU! KEEP SOCIAL DISTANCING!! :)
      </div>
    </TransitionGroup>
  );
}

Result.propTypes = {
  Result: PropTypes.string.isRequired
};

export default Result;