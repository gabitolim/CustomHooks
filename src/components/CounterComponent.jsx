import { useCounter } from "../hooks/useCounter";

export const CounterComponent = () => {
	const { counter, increment, decrement, reset } = useCounter(0);

	return (
		<>
			<h1>Counter</h1>
			<h4>{counter}</h4>
			<button className="btn btn-primary" onClick={() => increment()}>
				{" "}
				+1
			</button>
			<button className="btn btn-warning" onClick={() => reset()}>
				Reset
			</button>
			<button className="btn btn-primary" onClick={() => decrement()}>
				-1
			</button>
		</>
	);
};
