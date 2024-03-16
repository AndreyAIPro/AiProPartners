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
		<div className="flex flex-col flex-nowrap rounded-md border-[1px] border-white">
			<div className="pt-2 text-center">Выбрать диапазон дат</div>
			<div className="  pt-2">
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
