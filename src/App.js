import './App.css';
import { Component } from 'react';
import { FeedbackOptions } from './component/FeedbackOptions/FeedbackOptions';
import { Statistics } from './component/Statistics/Statistics';
import { Section } from './component/Section/Section';

export class App extends Component  {  
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }
  
  countGoodFeedback = () => { 
    this.setState(prevState => ({
      good: prevState.good + 1,
    }))
  }

  countNeutralFeedback = () => { 
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }))
  }

  countBadFeedback = () => { 
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }))
  }

  countTotalFeedback () { 
    return (this.state.good + this.state.neutral + this.state.bad);
  }  
  
  countPositiveFeedbackPercentage = () => { 
    return 100 * this.state.good / (this.state.good + this.state.neutral + this.state.bad)
  }

  render() { 
    return (
      <div>
        <Section>
          <FeedbackOptions
          onGoodFeedback={this.countGoodFeedback}
          onNeutralFeedback={this.countNeutralFeedback}
          onBadFeedback={this.countBadFeedback}
        /> 
        </Section>
        <Section>
          <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback()}
          positivePercentage={Number(this.countPositiveFeedbackPercentage()).toFixed(0)}
        />
        </Section>  
      </div>    
  );
  }
}
