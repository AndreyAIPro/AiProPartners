const Filter = ({ filters }) => {
	return (
		<>
			{filters.map((filter) => (
				<select
					key={filter.placeholder}
					placeholder={filter.placeholder}
					className="m-w-full mr-12 min-w-[150px]  max-w-[210px] cursor-pointer  rounded-md border-2 border-white bg-black  px-2 py-1 font-nunito-sans outline-none"
				>
					{filter.options.map((option) => (
						<option value={option.value} key={option.value}>
							{option.text}
						</option>
					))}
				</select>
			))}
		</>
	);
};

export default Filter;
