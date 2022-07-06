import './App.css';
import { Component } from 'react';
import { FeedbackOptions } from './component/FeedbackOptions/FeedbackOptions';
import { Statistics } from './component/Statistics/Statistics';

export class App extends Component  {
  // static defaultProps = {
  //   total: 0,
  //   positivePercentage: 0,
  // };
  
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

  countTotalFeedback = () => { 
    //let { total } = this.props;
    //let total;
    return this.state.good + this.state.neutral + this.state.bad;
  
    //   this.setState(() => {
  //     return {
  //       total: this.state.good + this.state.neutral + this.state.bad
  //     }
  //   }
  //   )
  //  let { total } = this.props;
  //   return (
  //     this.setState({
  //       total: 1
  //   })
  //   )
  
    // return (
    //   this.setState(prev => {
    //     return {
    //       total: prev.good,
    //     }
    //   })
    // )
   }   

  
  countPositiveFeedbackPercentage = () => { 
    //let positivePercentage;
    return 100 * this.state.good / (this.state.good + this.state.neutral + this.state.bad)
  }

  render() { 
    //let { total, positivePercentage } = this.props;
    return (
      <div>
        <FeedbackOptions
          onGoodFeedvack={this.countGoodFeedback}
          onNeutralFeedback={this.countNeutralFeedback}
          onBadFeedback={this.countBadFeedback}
        />
        {/* <div>
          <h3>FeedbackOptions</h3> 
          <button onClick={this.countGoodFeedback}>Good</button>
          <button onClick={this.countNeutralFeedback}>Neutral</button>
          <button onClick={this.countBadFeedback}>Bad</button>
        </div> */}
        
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback()}
          positivePercentage={Number(this.countPositiveFeedbackPercentage()).toFixed(0)}
        />
        {/* <div>
          <h3>Statistics</h3>
          <ul>
            <li>Good: {this.state.good}</li>
            <li>Neutral: {this.state.neutral}</li>
            <li>Bad: {this.state.bad}</li>
            <li>Total: {this.countTotalFeedback()}</li>
            <li>Positive feedback: {this.countPositiveFeedbackPercentage().toFixed(0)}%</li>
          </ul>
        </div>                */}
      </div>
      
  );
  }
}
