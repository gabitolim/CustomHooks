import { useEffect, useRef, useState } from "react";
import { useForm } from "../hooks/useForm";

export const FormsComponent = () => {
	const initialForm = {
		username: "",
		email: "",
		password: "",
	};

	const { username, email, password, onInputChange } = useForm(initialForm);

	const [showComponent, setShowComponent] = useState(false);

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(username, email, password);
		setShowComponent(true);
	};

	const focusRef = useRef();

	useEffect(() => {
		focusRef.current.focus();
	}, []);

	return (
		<>
			{!showComponent ? (
				<form onSubmit={handleSubmit} className="container mt-5">
					<div className="mb-3">
						<label htmlFor="username" className="form-label">
							Username
						</label>
						<input
							ref={focusRef}
							type="username"
							className="form-control"
							id="username"
							name="username"
							placeholder="Enter your username"
							value={username}
							onChange={onInputChange}
						/>
					</div>
					<div className="mb-3">
						<label htmlFor="exampleInputEmail1" className="form-label">
							Email
						</label>
						<input
							type="email"
							className="form-control"
							id="email"
							name="email"
							placeholder="Enter your email"
							value={email}
							onChange={onInputChange}
						/>
					</div>
					<div className="mb-3">
						<label htmlFor="exampleInputPassword1" className="form-label">
							Password
						</label>
						<input
							type="password"
							className="form-control"
							id="exampleInputPassword1"
							name="password"
							placeholder="Enter your password"
							value={password}
							onChange={onInputChange}
						/>
					</div>

					<button type="submit" className="btn btn-primary">
						Submit
					</button>
				</form>
			) : (
				<div className="container mt-5">
					<h2>Form Submitted</h2>
					<p>Username: {username}</p>
					<p>Email: {email}</p>
					<p>Password: {password}</p>
				</div>
			)}
		</>
	);
};
