import React, {Component} from "react";
import Section from "./Section/Section";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Statistics from "./Statistics/Statistics";
import Notification from "./Notification/Notification";


class App extends Component {state = 
    {good: 0,
    neutral: 0,
    bad: 0};

    onLeaveFeedback=(e)=>{
      const name=e.target.name
    this.setState((prevState)=>({
      [name]:prevState[name]+1
      }))
    }

    countTotalFeedback = () => {
        const {good,neutral,bad} = this.state
        const total = good + neutral+bad;
          return total}
      
    countPositiveFeedbackPercentage = () => {
      const percentage = Math.round((this.state.good/this.countTotalFeedback())*100);
          return percentage ||0}

    render () {
      const options=Object.keys(this.state) 

      return (
      <div>
      <Section title="Please leave feedback">
      <FeedbackOptions options={options} onLeaveFeedback={this.onLeaveFeedback}/>
      </Section>

      {this.countTotalFeedback()===0
      ? <Notification message="No feedback given"/>
      : <Section title="Statistics">
        <Statistics
        good={this.state.good}
        neutral={this.state.neutral}
        bad={this.state.bad}  
        total={this.countTotalFeedback()}
        positivePrecentage={this.countPositiveFeedbackPercentage()}
        />
      </Section>}
    </div>)}
}

export default App;
