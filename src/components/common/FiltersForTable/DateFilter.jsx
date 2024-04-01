import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { ConfigProvider, DatePicker, theme } from "antd";

dayjs.extend(customParseFormat);

const { RangePicker } = DatePicker;

const DateFilter = ({ filterByDate }) => {
	const disabledDate = (current) => {
		return current && current < dayjs().endOf("day");
	};

	const handleDateChange = (dates) => {
		if (dates && dates.length === 2) {
			const startDate = dayjs(dates[0]).startOf("day").toDate();
			const endDate = dayjs(dates[1]).endOf("day").toDate();
			filterByDate(startDate, endDate);
		}
	};

	return (
		<div className="flex  flex-row flex-nowrap rounded-md border-2 py-1  pl-2 ">
			<div className="flex items-center justify-center text-nowrap pr-2">
				Выбрать диапазон дат
			</div>
			<div>
				<ConfigProvider
					theme={{
						algorithm: theme.darkAlgorithm,
					}}
				>
					<RangePicker
						onChange={handleDateChange}
						className="bg-secondary  text-white"
						disabledDate={disabledDate}
						size="small"
						variant={false}
						placeholder={["Начало", "Конец"]}
					/>
				</ConfigProvider>
			</div>
		</div>
	);
};
export default DateFilter;
