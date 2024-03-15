import {
	subAccounts,
	countries,
	statisticAll,
	columns,
	ofers,
	dataSource,
} from "../DataDashboard/TableData";
import { Select, DatePicker, Button, Table } from "antd";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import Plate from "../../Preferences/Plate/Plate";
dayjs.extend(customParseFormat);
const { RangePicker } = DatePicker;
export default function DashboardTable(params) {
	const handleChange = (value) => {
		console.log(`selected ${value}`);
	};
	const disabledDate = (current) => {
		// Can not select days before today and today
		return current && current < dayjs().endOf("day");
	};
	return (
		<>
			<Plate
				title={
					<div className="flex h-fit flex-nowrap py-1 align-middle">
						<div>Подробные данные статистики</div>
						<div className="flex flex-nowrap ">
							<div className="px-3 ">
								<Select
									defaultValue="Общая статистика"
									onChange={handleChange}
									options={[...statisticAll]}
								/>
							</div>
							<div className="flex flex-row flex-nowrap rounded-md border-[1px] pl-2   text-text4 ">
								<div className="flex items-center  justify-center pr-2">
									Выбрать диапазон дат
								</div>
								<div className=" flex">
									{/* <ConfigProvider theme={{ algorithm: theme.defaultAlgorithm }}> */}
									<RangePicker
										disabledDate={disabledDate}
										size="small"
										variant={false}
										placeholder={["Начало", "Конец"]}
									/>
									{/* </ConfigProvider> */}
								</div>
							</div>
						</div>
					</div>
				}
			>
				<div>
					<div className="flex flex-nowrap pb-3">
						<div className="pr-5">
							<Select
								defaultValue="Страна"
								onChange={handleChange}
								options={[...countries]}
								size="small"
							/>
						</div>
						<div className="pr-5">
							<Select
								defaultValue="Субаккаунт"
								onChange={handleChange}
								options={[...subAccounts]}
								size="small"
							/>
						</div>
						<div className="pr-5">
							<Select
								defaultValue="Офер"
								onChange={handleChange}
								options={[...ofers]}
								size="small"
							/>
						</div>
						<div className="pl-6">
							<Button size="small" shape="round">
								Обновить
							</Button>
						</div>
					</div>
				</div>
				{/** TABLE HERE */}
				<Table
					dataSource={dataSource}
					columns={columns}
					size="small"
					pagination={false}
				></Table>
			</Plate>
		</>
	);
}
