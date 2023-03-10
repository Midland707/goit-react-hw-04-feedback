import React, { Component } from 'react';
import { Section } from 'components/Section/Section';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';
import { Notification } from 'components/Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positivePercentage: 0,
  };

  onLeaveFeedback = event => {
    // console.log('textContent', event.target.textContent);
    if (event.target.textContent === 'good')
      this.setState(state => ({
        good: state.good + 1,
      }));
    if (event.target.textContent === 'neutral')
      this.setState(state => ({
        neutral: state.neutral + 1,
      }));
    if (event.target.textContent === 'bad')
      this.setState(state => ({
        bad: state.bad + 1,
      }));

    this.countTotalFeedback();
  };

  countTotalFeedback() {
    this.setState(state => ({
      total: state.good + state.neutral + state.bad,
    }));
    this.countPositiveFeedbackPercentage();
  }

  countPositiveFeedbackPercentage = () => {
    this.setState(state => ({
      positivePercentage: Number(((100 * state.good) / state.total).toFixed(0)),
    }));
  };

  render() {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          fontSize: 40,
        }}
      >
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.state.total}
            positivePercentage={this.state.positivePercentage}
          />
          <Notification
            message="There is no feedback"
            total={this.state.total}
          />
        </Section>
      </div>
    );
  }
}
