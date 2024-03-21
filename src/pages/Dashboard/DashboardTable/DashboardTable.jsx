import { subAccounts, columns } from "../DataDashboard/TableData";
import { Select, DatePicker, Button, Table } from "antd";
import dayjs from "dayjs";

import Plate from "../../Preferences/Plate/Plate";
import { useUser } from "../../../hooks/useUser";
import { useSelectAnalTable } from "../../../hooks/useSelectAnalTable";
import { useState, useEffect } from "react";
import isBetween from "dayjs/plugin/isBetween";
dayjs.extend(isBetween);

const { RangePicker } = DatePicker;

export default function DashboardTable() {
	const { user } = useUser();

	const { data: analTable } = useSelectAnalTable(user?.id);
	const [dateRange, setDateRange] = useState(null);
	const [refNames, setRefNames] = useState([]);
	const disabledDates = () => {
		// Extract date values from analTable data
		const dates = analTable?.map((row) => dayjs(row.date).format("YYYY-MM-DD"));
		// Return a function to disable dates not in the analTable
		return (current) => {
			const formattedDate = current.format("YYYY-MM-DD");
			return !dates.includes(formattedDate);
		};
	};
	// const handleSubAccountChange = (value) => {
	// 	setSelectedSubAccount(value);
	// };

	const handleDateRangeChange = (dates) => {
		setDateRange(dates);
	};
	useEffect(() => {
		if (analTable) {
			// Extract unique refName values
			const uniqueRefNames = Array.from(
				new Set(analTable.map((row) => row.refName)),
			);
			setRefNames(uniqueRefNames);
		}

		setFilteredData(analTableData);
	}, [analTable]);
	console.log(refNames);
	const analTableData = analTable?.map((row, index) => {
		row.key = index;
		if (row.firstBuy && row.otherBuy) {
			row.percentCTR = ((row.unique / row.getClients) * 100).toFixed(2) + "%";
		} else {
			row.percentCTR = "-";
		}
		row.to = row.firstBuy + row.otherBuy;
		row.uos = (row.incomeFirst + row.incomeOther).toFixed(2) + "$";
		if (row.firstBuy && row.getClients) {
			row.cr2 = ((row.firstBuy / row.getClients) * 100).toFixed(2) + "%";
		} else {
			row.cr2 = "-";
		}
		if (row.firstBuy && row.otherBuy) {
			row.cr3 = ((row.firstBuy / row.otherBuy) * 100).toFixed(2) + "%";
		} else {
			row.cr3 = "-";
		}
		row.totalIncome =
			(row.incomeFirst * 0.3 + row.incomeOther * 0.15).toFixed(2) + "$";
		return row;
	});
	const [filteredData, setFilteredData] = useState(analTableData);
	const applyFilters = () => {
		let filteredData = analTableData;

		// if (selectedSubAccount) {
		//   filteredData = filteredData.filter(
		//     (row) => row.subAccount === selectedSubAccount
		//   );
		// }

		if (dateRange && dateRange.length === 2) {
			const [startDate, endDate] = dateRange;
			filteredData = filteredData.filter((row) =>
				dayjs(row.date).isBetween(startDate, endDate, null, "[]"),
			);
		}
		setFilteredData(filteredData);
	};
	console.log(analTableData);
	return (
		<>
			<Plate
				title={
					<div className="flex h-fit flex-nowrap py-1 align-middle">
						<div>Подробные данные статистики</div>
						<div className="flex flex-nowrap ">
							<div className="flex flex-row flex-nowrap rounded-md border-[1px] pl-2   text-text4 ">
								<div className="flex items-center  justify-center pr-2">
									Выбрать диапазон дат
								</div>
								<div className=" flex">
									<RangePicker
										disabledDate={disabledDates()}
										size="small"
										variant={false}
										placeholder={["Начало", "Конец"]}
										onChange={handleDateRangeChange}
									/>
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
								defaultValue={refNames.length > 0 ? refNames[0] : "Субаккаунт"}
								options={refNames.map((name) => ({ label: name, value: name }))}
								size="small"
							/>
						</div>

						<div className="pl-6">
							<Button size="small" shape="round" onClick={applyFilters}>
								Обновить
							</Button>
						</div>
					</div>
				</div>
				{/** TABLE HERE */}
				<Table
					dataSource={filteredData}
					columns={columns}
					size="small"
					pagination={true}
				></Table>
			</Plate>
		</>
	);
}
