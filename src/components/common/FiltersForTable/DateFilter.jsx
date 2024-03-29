import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { ConfigProvider, DatePicker, theme } from "antd";

dayjs.extend(customParseFormat);

const { RangePicker } = DatePicker;

const DateFilter = () => {
	const disabledDate = (current) => {
		return current && current < dayjs().endOf("day");
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
