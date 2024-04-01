const StatusFilter = ({ value, onChange, data, onDataChange }) => {
	const handleSortingChange = (e) => {
		onChange(e.target.value);
		sortData(e.target.value);
	};

	const sortData = (sortingOption) => {
		const sortedData = data.slice().sort((a, b) => {
			if (sortingOption === "Успешно") {
				return a.status === b.status ? 0 : a.status === "Успешно" ? -1 : 1;
			} else if (sortingOption === "В обработке") {
				return a.status === b.status ? 0 : a.status === "В обработке" ? -1 : 1;
			} else if (sortingOption === "Отклонено") {
				return a.status === b.status ? 0 : a.status === "Отклонено" ? -1 : 1;
			} else {
				return 0;
			}
		});
		onDataChange(sortedData);
	};

	return (
		<div>
			<select
				value={value}
				onChange={handleSortingChange}
				className="m-w-full min-w-[150px]  max-w-[210px] cursor-pointer  rounded-md border-2 border-white bg-black  px-2 py-1 font-nunito-sans outline-none"
			>
				<option value="Успешно">Успешно</option>
				<option value="Отклонено">Отклонено</option>
				<option value="В обработке">В обработке</option>
			</select>
		</div>
	);
};

export default StatusFilter;
