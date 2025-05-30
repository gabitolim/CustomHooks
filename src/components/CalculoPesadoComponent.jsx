import React, { useMemo, useState } from "react";

export const CalculoPesadoComponent = () => {
	const [show, setShow] = useState(true);
	const [numList, setNumList] = useState([2, 3, 4, 5, 6, 7, 8, 9]);

	const getCalculo = (numList) => {
		console.log("Calculando...");
		return numList.reduce((acc, num) => acc * num);
	};

	const addNumber = () => {
		setNumList([...numList, [numList.length - 1] + 1]);
	};

	const memoValue = useMemo(() => getCalculo(numList), [numList]);
	return (
		<>
			<h2>Calculos:</h2>
			{show && <h4>El Calculo es: {memoValue}</h4>}
			<button className="btn btn-info" onClick={() => setShow(!show)}>
				{show ? "Ocultar Calculo" : "Mostrar Calculo"}
			</button>
			<button className="btn btn-danger" onClick={() => addNumber()}>
				Add Numbers
			</button>
		</>
	);
};
