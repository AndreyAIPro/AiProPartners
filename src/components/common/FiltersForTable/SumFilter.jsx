import { useState } from "react";

const SumFilter = ({ data, onDataChange }) => {
	const [ascending, setAscending] = useState(true);

	const sortBySum = () => {
		const sortedBySum = data.slice().sort((a, b) => {
			if (ascending) {
				return a.sum - b.sum;
			} else {
				return b.sum - a.sum;
			}
		});
		onDataChange(sortedBySum);
		setAscending(!ascending);
	};

	return (
		<div>
			<button
				onClick={sortBySum}
				className="flex gap-2 rounded-md border-2 border-light-blue px-4 py-1 font-nunito-sans hover:bg-light-blue"
			>
				Сумма
				{ascending ? <p>{"↑"}</p> : <p>{"↓"}</p>}
			</button>
		</div>
	);
};

export default SumFilter;
