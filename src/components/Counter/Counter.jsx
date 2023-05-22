// import React from 'react';
import React, { useState, useEffect } from 'react';
import { Feedback } from '../FeedbackOptions/FeedbackOptions';
import { Notification } from '../Notification/Notification';
import { Section } from '../Section/Section';
import { Statistics } from '../Statistics/Statistics';

// import css from './Counter.module.css';



export default function Counter() {
	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);
	const [total, setTotal] = useState(0);
	const [positive, setPositive] = useState(0);

	const handleIncrement = (feedback) => {
		if (feedback === 'good') {
		  setGood((prevGood) => prevGood + 1);
		} else if (feedback === 'neutral') {
		  setNeutral((prevNeutral) => prevNeutral + 1);
		} else if (feedback === 'bad') {
		  setBad((prevBad) => prevBad + 1);
		}
	 };



	 useEffect(() => {
		setTotal(good + neutral + bad);

		setPositive(Math.round((good / total) * 100 || 0));
	 }, [good, neutral, bad, total])
	
	

	// render(){
	// 	const { good, neutral, bad } = this.state;
	// 	const total = this.countTotalFeedback();
	// 	const positive = this.countPositiveFeedbackPercentage();
	// 	const options = Object.keys(this.state);

		return (
			<div>
				<Section title="Please leave feedback">
         		<Feedback
            		options={Object.keys({ good, neutral, bad })}
            		onLeaveFeedback={handleIncrement}
          		/>
       		</Section>

				{/* {total === 0 ? (
					<Notification message=""/>
					) : (
						<Section title={'Statistic'}>
							<Statistics 
							good={good}
							neutral={neutral}
							bad={bad}
							total={total}
							positivePercentage={positive}
							/>
						</Section>
					)} */}
					<Section title="Statistics">
						{total > 0 ? (
							<Statistics
								good={good}
								neutral={neutral}
								bad={bad}
								total={total}
								positivePercentage={positive}
							/>
						) : (
							<Notification message="There is no feedback" />
						)}
					</Section>
			</div>
		)
	// }
};

// export default Counter;















// export class Counter extends React.Component {
// 	static defaultProps = {
// 		initialValue: 0,
// 	}
// 	state = {
// 		good: this.props.initialValue,
// 		neutral: this.props.initialValue,
// 		bad: this.props.initialValue
// 	}
// 	handleIncrement = feedback => {
// 		this.setState(prevState => ({
// 		  [feedback]: prevState[feedback] + 1
// 		}));
// 	 };
// 	countTotalFeedback = () => {
// 		return this.state.good + this.state.neutral + this.state.bad;
// 	 };
// 	countPositiveFeedbackPercentage = () => {
// 		// return Math.round((this.state.good / this.countTotalFeedback()) * 100) || 0;
// 		const total = this.countTotalFeedback();
// 		if (total > 0) {
// 		  return Math.round((this.state.good / total) * 100);
// 		} else {
// 		  return 0;
// 		}
// 	 };
	

// 	render(){
// 		const { good, neutral, bad } = this.state;
// 		const total = this.countTotalFeedback();
// 		const positive = this.countPositiveFeedbackPercentage();
// 		const options = Object.keys(this.state);

// 		return (
// 			<div>
// 				<Section title="Please leave feedback">
//          		<Feedback
//             		options={options}
//             		onLeaveFeedback={this.handleIncrement}
//           		/>
//        		</Section>

// 				{/* {total === 0 ? (
// 					<Notification message=""/>
// 					) : (
// 						<Section title={'Statistic'}>
// 							<Statistics 
// 							good={good}
// 							neutral={neutral}
// 							bad={bad}
// 							total={total}
// 							positivePercentage={positive}
// 							/>
// 						</Section>
// 					)} */}
// 					<Section title="Statistics">
// 						{total > 0 ? (
// 							<Statistics
// 							good={good}
// 							neutral={neutral}
// 							bad={bad}
// 							total={total}
// 							positivePercentage={positive}
// 							/>
// 						) : (
// 							<Notification message="There is no feedback" />
// 						)}
// 					</Section>
// 			</div>
// 		)
// 	}
// };

// export default Counter;

















//////////////////////////////////////////////////////////////////////////////////////////////////

// handleIncrementGood = () => {
	// 	this.setState(prevState => ({
	// 			good: prevState.good + 1
	// 	}))
	// };
	// handleIncrementNeutral = () => {
	// 	this.setState(prevState => ({
	// 		neutral: prevState.neutral + 1
	// 	}))
	// };
	// handleIncrementBad = () => {
	// 	this.setState(prevState => ({
	// 		bad: prevState.bad + 1
	// 	}))
	// };

	// <div>
	// 	<h2>Please leave feedback</h2>
	// 	<div>
	// 		<button type="button" onClick={this.handleIncrementGood}>Good</button>
	// 		<button type="button" onClick={this.handleIncrementNeutral}>Neutral</button>
	// 		<button type="button" onClick={this.handleIncrementBad}>Bad</button>
	// 	</div>
	// 	<h3>Statistics</h3>
	// 	<ul>
	// 		<li>Good: {this.state.good}</li>
	// 		<li>Neutral: {this.state.neutral}</li>
	// 		<li>Bad: {this.state.bad}</li>
	// 		<li>Total: {total}</li>
	// 		<li>Positive feedback: {positive}%</li>
	// 	</ul>
	// </div>

	// {/* <Section title={'Please leave feedback'}>
	// 	<Feedback 
	// 		options={Object.keys(this.state)}
	// 		onLeaveFeedback={this.handleIncrementGood}
	// 		countTotalFeedback={() => {
	// 		this.countTotalFeedback();
	// 		}}
	// 	/>
	// </Section> */}