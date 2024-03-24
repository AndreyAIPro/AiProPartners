import React from "react";

const PaymentFilter = ({ value, onChange, data, onDataChange }) => {
	const handleSortingChange = (e) => {
		onChange(e.target.value);
		sortData(e.target.value);
	};

	const sortData = (sortingOption) => {
		const sortedData = data.slice().sort((a, b) => {
			if (sortingOption === "BTC") {
				return a.withdrawal === b.withdrawal
					? 0
					: a.withdrawal === "BTC"
						? -1
						: 1;
			} else if (sortingOption === "WebMoney") {
				return a.withdrawal === b.withdrawal
					? 0
					: a.withdrawal === "WebMoney"
						? -1
						: 1;
			}
		});
		onDataChange(sortedData);
	};

	return (
		<div>
			<select
				value={value}
				onChange={handleSortingChange}
				className="m-w-full  min-w-[150px]  max-w-[210px] cursor-pointer  rounded-md border-2 border-white bg-black  px-2 py-1 font-nunito-sans outline-none"
			>
				<option value="BTC">BTC</option>
				<option value="WebMoney">WebMoney</option>
			</select>
		</div>
	);
};

export default PaymentFilter;
