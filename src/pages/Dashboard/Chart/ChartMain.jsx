import { Select, Button, DatePicker } from "antd";
import { Line } from "@ant-design/plots";
import Plate from "../../Preferences/Plate/Plate";
import { useState, useEffect } from "react";
import { useSelectAnalTable } from "../../../hooks/useSelectAnalTable";
import { useUser } from "../../../hooks/useUser";
import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween";

dayjs.extend(isBetween);
const { RangePicker } = DatePicker;

export default function ChartMain(params) {
	const { user } = useUser();
	const { data: analTable } = useSelectAnalTable(user?.id);
	const [dateRange, setDateRange] = useState(null);
	const [names, setNames] = useState([]);
	const [selectedName, setSelectedName] = useState(null);
	const [filteredData, setFilteredData] = useState([]);
	console.log(analTable);
	const disabledDates = () => {
		const dates = analTableData?.map((row) =>
			dayjs(row.date).format("YYYY-MM-DD"),
		);

		return (current) => {
			const formattedDate = current.format("YYYY-MM-DD");
			return !dates.includes(formattedDate);
		};
	};
	const filterData = (tableData, startDate, endDate, name) => {
		let filteredData = tableData;
		if (startDate && endDate) {
			filteredData = filteredData.filter((row) =>
				dayjs(row.date).isBetween(startDate, endDate, null, "[]"),
			);
		}
		if (name) {
			filteredData = filteredData.filter((row) => row.name === name);
		}
		return filteredData;
	};

	const analTableData = analTable?.map((row, index) => {
		row.key = index;
		if (row.firstBuy && row.otherBuy) {
			row.percentCTR = +((row.unique / row.getClients) * 100).toFixed(2);
		} else {
			row.percentCTR = 0;
		}

		row.to = row.firstBuy + row.otherBuy;
		row.uos = +(row.incomeFirst + row.incomeOther).toFixed(2);
		if (row.firstBuy && row.getClients) {
			row.cr2 = +((row.firstBuy / row.getClients) * 100).toFixed(2);
		} else {
			row.cr2 = 0;
		}

		if (row.firstBuy && row.otherBuy) {
			row.cr3 = +((row.firstBuy / row.otherBuy) * 100).toFixed(2);
		} else {
			row.cr3 = 0;
		}

		row.totalIncome = +(row.incomeFirst * 0.3 + row.incomeOther * 0.15).toFixed(
			2,
		);

		return row;
	});

	const testData = [];
	filteredData?.map((line) => {
		testData.push(
			{
				date: line.date,
				value: line.unique,
				category: "Уники",
			},
			{
				date: line.date,
				value: line.getClients,
				category: "Регистрации",
			},
			{
				date: line.date,
				value: line.percentCTR,
				category: "CTR, %",
			},
			{
				date: line.date,
				value: line.cr2,
				category: "CR2, %",
			},
			{
				date: line.date,
				value: line.cr3,
				category: "CR3, %",
			},
			{
				date: line.date,
				value: line.firstBuy,
				category: "Первичные покупки",
			},

			{
				date: line.date,
				value: line.otherBuy,
				category: "Вторичные покупки",
			},
			{
				date: line.date,
				value: line.to,
				category: "TO",
			},
			{
				date: line.date,
				value: line.uos,
				category: "UOS",
			},
			{
				date: line.date,
				value: line.totalIncome,
				category: "Доход",
			},
		);
	});

	const handleDateRangeChange = (dates) => {
		setDateRange(dates);
	};
	const handleNameChange = (value) => {
		setSelectedName(value); // Update selectedName when a new option is selected
	};

	useEffect(() => {
		if (analTable) {
			const uniqueNames = Array.from(new Set(analTable.map((row) => row.name)));
			setNames(uniqueNames);
			if (uniqueNames.length > 0) {
				setSelectedName(uniqueNames[0]);
			}
			// Filter data initially by the first unique Name
			const initialName = uniqueNames[0];
			const initialFilteredData = filterData(
				analTableData,
				null,
				null,
				initialName,
			);

			setFilteredData(initialFilteredData);
		}
	}, [analTable]);

	const chartConfig = {
		data: testData,

		xField: "date",
		yField: "value",
		sizeField: "5",
		shapeField: "trail",
		theme: "classicDark",
		colorField: "category",
		animate: { enter: { type: "growInX", duration: 600 } },
	};
	const applyFilters = () => {
		let filteredData = analTableData;

		if (dateRange && dateRange.length === 2) {
			const [startDate, endDate] = dateRange;
			filteredData = filteredData.filter((row) =>
				dayjs(row.date).isBetween(startDate, endDate, null, "[]"),
			);
		}
		// Filter by selected Name
		if (selectedName) {
			filteredData = filteredData.filter((row) => row.name === selectedName);
		}
		setFilteredData(filteredData);
	};
	// const applyFilters = () => {
	// 	// Filter data based on date range and selected Name
	// 	const filteredData = filterData(
	// 		analTable,
	// 		dateRange[0],
	// 		dateRange[1],
	// 		selectedName,
	// 	);
	// 	setFilteredData(filteredData);
	// };

	return (
		<>
			<Plate
				title={
					<div className="flex flex-col  ">
						<div className="pb-3">Подробные данные статистики</div>
						<div>
							<div className="flex flex-nowrap ">
								<div className="pr-2 ">
									<Select
										defaultValue={"Выберите Субаккаунт"}
										options={names.map((name) => ({
											label: name,
											value: name,
										}))}
										onChange={handleNameChange}
										defaultActiveFirstOption={true}
										style={{ width: "12rem" }}
									/>
								</div>
								<div className="flex flex-nowrap ">
									<div className="flex flex-row flex-nowrap rounded-md  border-[1px] pl-2 text-text3    ">
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
								<div className="pl-6">
									<Button shape="round" onClick={applyFilters}>
										Обновить
									</Button>
								</div>
							</div>
						</div>
					</div>
				}
			>
				<div>
					{/** Chart HERE*/}
					<Line {...chartConfig} className="chart-container" />
				</div>
			</Plate>
		</>
	);
}
