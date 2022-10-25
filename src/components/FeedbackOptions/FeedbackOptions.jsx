import React from 'react';
import PropTypes from 'prop-types';
import { ButtonBox, Button } from './FeedbackOptions.styled';

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <ButtonBox>
      {options.map((option, index) => (
        <Button
          key={index}
          type="button"
          onClick={onLeaveFeedback}
          data-action={option}
        >
          {option}
        </Button>
      ))}
    </ButtonBox>
  );
}

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func,
};
