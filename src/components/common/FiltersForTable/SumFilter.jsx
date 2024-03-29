import { useState } from "react";

const SumFilter = () => {
	const [changeSum, setChangeSum] = useState(false);
	return (
		<button
			onClick={() => setChangeSum(!changeSum)}
			className="flex items-center   gap-2  rounded-md border-2 border-light-blue px-2 py-1 hover:bg-light-blue"
		>
			Сумма
			{changeSum ? <p>{"↑"}</p> : <p>{"↓"}</p>}
		</button>
	);
};

export default SumFilter;
