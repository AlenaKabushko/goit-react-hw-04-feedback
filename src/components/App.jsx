import { useState } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';
import Notification from './Notification/Notification';

const initialState = {
  good: 0,
  neutral: 0,
  bad: 0,
};

export function App() {
  const [state, setState] = useState(initialState);

  const increment = e => {
    const changedName = e.target.dataset.action;
    setState(prevState => {
      return { ...prevState, [changedName]: prevState[changedName] + 1 };
    });
  };

  const countTotalFeedback = () => {
    return state.good + state.neutral + state.bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((state.good * 100) / countTotalFeedback());
  };

  return (
    <>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          options={Object.keys(state)}
          onLeaveFeedback={increment}
        />
      </Section>

      <Section title={'Statistics'}>
        {countTotalFeedback() ? (
          <Statistics
            good={state.good}
            neutral={state.neutral}
            bad={state.bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification text={'There is no feedback'} />
        )}
      </Section>
    </>
  );
}
