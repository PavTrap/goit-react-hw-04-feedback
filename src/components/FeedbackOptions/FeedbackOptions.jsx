import React from 'react';
import css from './FeddbackOptions.module.css';

export const Feedback = ({ options, onLeaveFeedback }) => {
	return (
		<div>
		  {options.map(option => (
			 <button
				className={css.button}
				key={option}
				onClick={() => onLeaveFeedback(option)}
			 >
				{option}
			 </button>
		  ))}
		</div>
	 );
 };