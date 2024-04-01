import DateFilter from "./DateFilter";
import SumFilter from "./SumFilter";
import PaymentFilter from "./PaymentFilter";
import CommentsFilter from "./CommentsFilter";
import StatusFilter from "./StatusFilter";

const AllFiltersTable = ({
	value,
	onChange,
	data,
	onDataChange,
	filterByDate,
}) => {
	return (
		<div className="flex flex-wrap items-end gap-6 ">
			<DateFilter />
			<SumFilter data={data} onDataChange={onDataChange} />
			<CommentsFilter data={data} onDataChange={onDataChange} />
			<PaymentFilter
				value={value}
				onChange={onChange}
				data={data}
				onDataChange={onDataChange}
			/>
			<StatusFilter
				value={value}
				onChange={onChange}
				data={data}
				onDataChange={onDataChange}
			/>
		</div>
	);
};

export default AllFiltersTable;
