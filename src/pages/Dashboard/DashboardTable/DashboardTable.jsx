import { columns } from "../DataDashboard/TableData";
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
	const [selectedRefName, setSelectedRefName] = useState(null);

	const disabledDates = () => {
		const dates = analTable?.map((row) => dayjs(row.date).format("YYYY-MM-DD"));

		return (current) => {
			const formattedDate = current.format("YYYY-MM-DD");
			return !dates.includes(formattedDate);
		};
	};

	const handleDateRangeChange = (dates) => {
		setDateRange(dates);
	};
	const handleRefNameChange = (value) => {
		if (value === "all") {
			// If "Show all data" option is selected, set filteredData to all data
			setFilteredData(analTableData);
		} else {
			setSelectedRefName(value); // Update selectedRefName when a new option is selected
		}
	};
	useEffect(() => {
		if (analTable) {
			// Extract unique refName values
			const uniqueRefNames = Array.from(
				new Set(analTable.map((row) => row.refName)),
			);
			setRefNames(uniqueRefNames);
			// Set the initial selected refName to the first unique refName if available
			if (uniqueRefNames.length > 0) {
				setSelectedRefName(uniqueRefNames[0]);
			}
			// const firstTimeTable = analTableData?.filter(
			// 	(row) => row.refName === uniqueRefNames[0],
			// );
			// setFilteredData(firstTimeTable);
			setFilteredData(analTableData);
		}
	}, [analTable]);

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

		if (dateRange && dateRange.length === 2) {
			const [startDate, endDate] = dateRange;
			filteredData = filteredData.filter((row) =>
				dayjs(row.date).isBetween(startDate, endDate, null, "[]"),
			);
		}
		// Filter by selected refName
		if (selectedRefName) {
			filteredData = filteredData.filter(
				(row) => row.refName === selectedRefName,
			);
		}
		setFilteredData(filteredData);
	};

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
								<div className=" ml-3 flex pl-2">
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
								defaultValue={"Выберите Субаккаунт"}
								options={[
									{ label: "Показать все данные", value: "all" },
									...refNames.map((name) => ({ label: name, value: name })),
								]}
								size="small"
								onChange={handleRefNameChange}
								defaultActiveFirstOption={true}
								style={{ width: "12rem" }}
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
				<div className="flex-1">
					<Table
						dataSource={filteredData}
						columns={columns}
						size="small"
						pagination={true}
						scroll={{ x: 1000 }}
					></Table>
				</div>
			</Plate>
		</>
	);
}
