import DateFilter from "./DateFilter";
import SumFilter from "./SumFilter";
import PaymentFilter from "./PaymentFilter";
import CommentsFilter from "./CommentsFilter";
import StatusFilter from "./StatusFilter";

const FiltersTable = () => {
	return (
		<div
			className="flex flex-auto  flex-col
		    items-start  text-text4 2xl:flex-row 2xl:text-text3"
		>
			<div className="flex  justify-center space-x-2 text-center">
				<DateFilter />
				<SumFilter />
				<CommentsFilter />
			</div>
			<div className="mt-2 flex  justify-center space-x-2 2xl:mt-0 2xl:pl-2">
				<PaymentFilter />
				<StatusFilter />

				<button className=" rounded-full border-2 border-light-blue px-2 py-1 font-nunito-sans  hover:text-light-blue">
					Обновить
				</button>
			</div>
		</div>
	);
};

export default FiltersTable;
