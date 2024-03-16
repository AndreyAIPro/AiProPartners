import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { DatePicker } from "antd";

dayjs.extend(customParseFormat);

const { RangePicker } = DatePicker;

const DateFilter = () => {
	const disabledDate = (current) => {
		return current && current < dayjs().endOf("day");
	};

	return (
		<div className="dark-theme lex flex-col flex-nowrap border-[1px] border-white">
			<div className="flex items-center justify-center pt-2">
				Выбрать диапазон дат
			</div>
			<div className="  pt-2  text-red">
				<RangePicker
					className="bg-gray text-white"
					disabledDate={disabledDate}
					size="small"
					variant={false}
					placeholder={["Начало", "Конец"]}
				/>
			</div>
		</div>
	);
};
export default DateFilter;
