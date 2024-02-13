import React, { Component } from 'react';
import Section from './Section';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feedbackStatus: {
        good: 0,
        neutral: 0,
        bad: 0,
      },
    };
  }

  handleFeedback = feedbackSelection => {
    this.setState(prevState => ({
      feedbackStatus: {
        ...prevState.feedbackStatus,
        [feedbackSelection]: prevState.feedbackStatus[feedbackSelection] + 1,
      },
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state.feedbackStatus;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const positive = this.state.feedbackStatus.good;
    return total > 0 ? Math.round((positive / total) * 100) : 0;
  };

  render() {
    const { feedbackStatus } = this.state;
    const { good, neutral, bad } = feedbackStatus;
    const totalFeedback = this.countTotalFeedback();
    const positiveFeedbackPercentage = this.countPositiveFeedbackPercentage();

    return (
      <div className={'generalContainer'}>
        <Section title="Please Leave Feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.handleFeedback}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positivePercentage={positiveFeedbackPercentage}
          />
        </Section>
      </div>
    );
  }
}

export default App;
