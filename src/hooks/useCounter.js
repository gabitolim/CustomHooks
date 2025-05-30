import { useState } from "react";

export const useCounter = (initialValue = 0) => {
	const [counter, setCounter] = useState(initialValue);

	const increment = (value = 1) => {
		setCounter((c) => c + value);
	};

	const allowNegative = initialValue < 0;

	const decrement = (value = 1) => {
		if (!allowNegative && counter <= 0) return;
		setCounter((c) => c - value);
	};

	const reset = () => {
		setCounter(initialValue);
	};

	return {
		counter,
		increment,
		decrement,
		reset,
	};
};
