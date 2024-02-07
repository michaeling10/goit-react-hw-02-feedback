//import { Statistics } from '../components/Statistics';
import React, { useState } from 'react';
import Section from './Section';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';

export const App = () => {
  const [feedbackStatus, setFeedbackStatus] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleFeedback = feedbackSelection => {
    setFeedbackStatus({
      ...feedbackStatus,
      [feedbackSelection]: feedbackStatus[feedbackSelection] + 1,
    });
  };

  const countTotalFeedback = () => {
    return feedbackStatus.good + feedbackStatus.neutral + feedbackStatus.bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return Math.round((feedbackStatus.good / total) * 100);
  };

  return (
    <div className={'generalContainer'}>
      <Section title="Please Leave Feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={handleFeedback}
        />
      </Section>
      <Section title="Statistics">
        <Statistics
          good={feedbackStatus.good}
          neutral={feedbackStatus.neutral}
          bad={feedbackStatus.bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
      </Section>
    </div>
  );
};
