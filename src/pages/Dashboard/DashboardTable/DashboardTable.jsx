import { Button, DatePicker, Select, Table } from "antd";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { useSelectAnalTable } from "../../../hooks/useSelectAnalTable";
import { useUser } from "../../../hooks/useUser";
import Plate from "../../Preferences/Plate/Plate";
import { columns, subAccounts } from "../DataDashboard/TableData";
dayjs.extend(customParseFormat);
const { RangePicker } = DatePicker;

export default function DashboardTable() {
	const handleChange = (value) => {
		console.log(`selected ${value}`);
	};
	const disabledDate = (current) => {
		// Can not select days before today and today
		return current && current < dayjs().endOf("day");
	};
	const { user } = useUser();

	const { data: analTable } = useSelectAnalTable(user?.id);
	const analTableData = analTable?.map((row, index) => {
		row.key = index;
		if (row.firstBuy && row.otherBuy) {
			row.percentCTR = ((row.unique / row.getClients) * 100).toFixed(2) + "%";
		} else {
			row.percentCTR = "-";
		}
		// row.percentCTR = ((row.unique / row.getClients) * 100).toFixed(2) + "%";
		row.to = row.firstBuy + row.otherBuy;
		row.uos = (row.incomeFirst + row.incomeOther).toFixed(2) + "$";
		if (row.firstBuy && row.getClients) {
			row.cr2 = ((row.firstBuy / row.getClients) * 100).toFixed(2) + "%";
		} else {
			row.cr2 = "-";
		}
		// row.cr2 = ((row.firstBuy / row.getClients) * 100).toFixed(2) + "%";
		if (row.firstBuy && row.otherBuy) {
			row.cr3 = ((row.firstBuy / row.otherBuy) * 100).toFixed(2) + "%";
		} else {
			row.cr3 = "-";
		}
		// row.cr3 = ((row.firstBuy / row.otherBuy) * 100).toFixed(2) + "%";
		row.totalIncome =
			(row.incomeFirst * 0.3 + row.incomeOther * 0.15).toFixed(2) + "$";

		return row;
	});

	return (
		<>
			<Plate
				title={
					<div className="flex h-fit flex-nowrap py-1 align-middle">
						<div>Подробные данные статистики</div>
						<div className="flex flex-nowrap ">
							{/* <div className="px-3 ">
								<Select
									defaultValue="Общая статистика"
									onChange={handleChange}
									options={[...statisticAll]}
								/>
							</div> */}
							<div className="flex flex-row flex-nowrap rounded-md border-[1px] pl-2   text-text4 ">
								<div className="flex items-center  justify-center pr-2">
									Выбрать диапазон дат
								</div>
								<div className=" flex">
									<RangePicker
										disabledDate={disabledDate}
										size="small"
										variant={false}
										placeholder={["Начало", "Конец"]}
										onChange={(_, info) => console.log(info)}
									/>
								</div>
							</div>
						</div>
					</div>
				}
			>
				<div>
					<div className="flex flex-nowrap pb-3">
						{/* <div className="pr-5">
							<Select
								defaultValue="Страна"
								onChange={handleChange}
								options={[...countries]}
								size="small"
							/>
						</div> */}
						<div className="pr-5">
							<Select
								defaultValue="Субаккаунт"
								onChange={handleChange}
								options={[...subAccounts]}
								size="small"
							/>
						</div>
						{/* <div className="pr-5">
							<Select
								defaultValue="Офер"
								onChange={handleChange}
								options={[...ofers]}
								size="small"
							/>
						</div> */}
						<div className="pl-6">
							<Button size="small" shape="round">
								Обновить
							</Button>
						</div>
					</div>
				</div>
				{/** TABLE HERE */}
				<Table
					dataSource={analTableData}
					columns={columns}
					size="small"
					pagination={true}
				></Table>
			</Plate>
		</>
	);
}
