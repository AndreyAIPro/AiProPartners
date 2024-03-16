import DateFilter from "./DateFilter";
import SumFilter from "./SumFilter";
import PaymentFilter from "./PaymentFilter";
import CommentsFilter from "./CommentsFilter";
import StatusFilter from "./StatusFilter";

const FiltersTable = () => {
	return (
		<div className="flex flex-wrap items-end gap-14 ">
			<DateFilter />
			<SumFilter />
			<PaymentFilter />
			<CommentsFilter />
			<StatusFilter />
		</div>
	);
};

export default FiltersTable;
