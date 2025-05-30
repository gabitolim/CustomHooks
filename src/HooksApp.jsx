import { CalculoPesadoComponent } from "./components/CalculoPesadoComponent";
import { CallBackComponent } from "./components/CallBackComponent";
import { CounterComponent } from "./components/CounterComponent";
import { FetchComponent } from "./components/FetchComponent";
import { FormsComponent } from "./components/FormsComponent";

export const HooksApp = () => {
	return (
		<>
			<h1>Aplication of HooksApp</h1>
			<hr />
			<FetchComponent />
			<hr />
			<CounterComponent />
			<hr />
			<FormsComponent />
			<hr />
			<CalculoPesadoComponent />
			<hr />
			<CallBackComponent />
		</>
	);
};
