import React from "react";

export const IncrementComponent = React.memo(({ increment }) => {
	console.log("IncrementComponent rendered");

	return (
		<button className="btn btn-success" onClick={() => increment(1)}>
			Increase by 1
		</button>
	);
});
