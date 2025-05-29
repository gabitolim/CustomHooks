import { useState } from "react";

export const useFetch = () => {
	const [state, setState] = useState({
		data: null,
		error: null,
		isLoading: true,
	});

	const { data, error, isLoading } = state;

	const fetchData = async (url, method, bodyData = null) => {
		if (!url) return;
		try {
			const options = {
				method: method,
				headers: {
					"Content-Type": "application/json",
				},
				body:
					method == "GET" || method == "DELETE"
						? null
						: JSON.stringify(bodyData),
			};
			const res = await fetch(url, options);
			const data = await res.json();
			setState({
				data,
				error: null,
				isLoading: false,
			});
		} catch (error) {
			setState({
				data: null,
				error: error.message || "An error occurred",
				isLoading: false,
			});
		}
	};

	return {
		data,
		isLoading,
		error,
		fetchData,
	};
};
