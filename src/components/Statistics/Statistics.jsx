import React from 'react';
import PropTypes from 'prop-types';

function Statistics(p) {
  return (
    <div>
      <p>Good: {p.good}</p>
      <p>Neutral: {p.neutral}</p>
      <p>Bad: {p.bad}</p>
      <p>Total: {p.total}</p>
      <p>Positive {p.positivePercentage} %</p>
    </div>
  );
}

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};

export default Statistics;
