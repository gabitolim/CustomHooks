import { useReducer } from "react";
import { useForm } from "../hooks/useForm";

export const TaskListComponent = () => {
	const initialState = [
		{ id: 1, title: "Task 1", completed: false },
		{ id: 2, title: "Task 2", completed: true },
		{ id: 3, title: "Task 3", completed: false },
	];

	const removeTask = {
		type: "[Tasks] Remove Task",
	};

	const deleteTasks = {
		type: "[Tasks] Delete All Tasks",
	};

	const taskReducer = (state = initialState, action) => {
		switch (action.type) {
			case "Add Task":
				return [...state, action.payload];
			case "End Task":
				return [...state, action.payload];
			case "Remove Task":
				return [...state, action.payload];
			case "Delete Tasks":
				return [...state, action.payload];

			default:
				return state;
		}
	};

	const addTask = (event) => {
		event.preventDefault();
		const newTask = {
			id: new Date().getTime(),
			title: task,
			completed: false,
		};
		const action = {
			type: "Add Task",
			payload: newTask,
		};
		dispatch(action);
	};

	const endTask = (id) => {
		console.log(id);
		const action = {
			type: "End Task",
			payload: id,
		};
		dispatch(action);
	};

	const { task, onInputChange } = useForm({ task: "" });
	const [state, dispatch] = useReducer(taskReducer, initialState);

	return (
		<>
			<form onSubmit={addTask}>
				<div className="mb-3">
					<label htmlFor="task" className="form-label">
						Add New Task
					</label>
					<input
						type="text"
						className="form-control"
						id="task"
						name="task"
						onChange={onInputChange}
					></input>
				</div>

				<button type="submit" className="btn btn-primary">
					Confirm
				</button>
			</form>
			<hr />
			<ul className="list-group">
				{state.map((task) => {
					return (
						<li
							className="list-group-item d-flex justify-content-between align-items-start"
							key={task.id}
						>
							<span>{task.title}</span>
							<input
								type="checkbox"
								value={task.completed}
								onChange={() => endTask(task.id)}
							/>
						</li>
					);
				})}
			</ul>
		</>
	);
};
