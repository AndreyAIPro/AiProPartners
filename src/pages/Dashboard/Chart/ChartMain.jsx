import { Checkbox, Select, Button } from "antd";
import { Line } from "@ant-design/plots";
import Plate from "../../Preferences/Plate/Plate";
import {
	periodType,
	statisticAll,
	countries,
	subAccounts,
	ofers,
	chartConfig,
} from "../DataDashboard/ChartData";
import { useSelectAnalTable } from "../../../hooks/useSelectAnalTable";
import { useUser } from "../../../hooks/useUser";

export default function ChartMain(params) {
	const handleChange = (value) => {
		console.log(`selected ${value}`);
	};
	const { user } = useUser();

	const { data: analTable } = useSelectAnalTable(user?.id);
	const analTableData = analTable?.map((row, index) => {
		row.key = index;
		if (row.firstBuy && row.otherBuy) {
			row.percentCTR = ((row.unique / row.getClients) * 100).toFixed(2);
		} else {
			row.percentCTR = 0;
		}
		// row.percentCTR = ((row.unique / row.getClients) * 100).toFixed(2) + "%";
		row.to = row.firstBuy + row.otherBuy;
		row.uos = (row.incomeFirst + row.incomeOther).toFixed(2);
		if (row.firstBuy && row.getClients) {
			row.cr2 = ((row.firstBuy / row.getClients) * 100).toFixed(2);
		} else {
			row.cr2 = 0;
		}
		// row.cr2 = ((row.firstBuy / row.getClients) * 100).toFixed(2) + "%";
		if (row.firstBuy && row.otherBuy) {
			row.cr3 = ((row.firstBuy / row.otherBuy) * 100).toFixed(2);
		} else {
			row.cr3 = 0;
		}
		// row.cr3 = ((row.firstBuy / row.otherBuy) * 100).toFixed(2) + "%";
		row.totalIncome = (row.incomeFirst * 0.3 + row.incomeOther * 0.15).toFixed(
			2,
		);

		return row;
	});

	const testData = [];
	const testConfig = analTableData?.map((line) => {
		testData.push({
			date: line.date,
			value: line.unique,
			category: "unique",
		});
		testData.push({
			date: line.date,
			value: line.cr2,
			category: "cr2",
		});
		testData.push({
			date: line.date,
			value: line.cr3,
			category: "cr3",
		});
		testData.push({
			date: line.date,
			value: line.firstBuy,
			category: "firstBuy",
		});
		testData.push({
			date: line.date,
			value: line.getClients,
			category: "getClients",
		});
		testData.push({
			date: line.date,
			value: line.otherBuy,
			category: "otherBuy",
		});
		testData.push({
			date: line.date,
			value: line.percentCTR,
			category: "percentCTR",
		});
		testData.push({
			date: line.date,
			value: line.to,
			category: "to",
		});
		testData.push({
			date: line.date,
			value: line.totalIncome,
			category: "totalIncome",
		});
		testData.push({
			date: line.date,
			value: line.unique,
			category: "unique",
		});
		testData.push({
			date: line.date,
			value: line.uos,
			category: "uos",
		});
	});

	const chartConfig2 = {
		data: testData,

		xField: "date",
		yField: "value",
		sizeField: "5",
		shapeField: "trail",
		theme: "classicDark",
		legend: { size: false },
		colorField: "category",
		animate: { enter: { type: "growInX", duration: 600 } },
	};

	return (
		<>
			<Plate
				title={
					<div className="flex flex-nowrap ">
						<div>Подробные данные статистики</div>
						<div className="flex flex-nowrap ">
							<div className="px-3">
								<Select
									defaultValue="Общая статистика"
									onChange={handleChange}
									options={[...statisticAll]}
									size="small"
								/>
							</div>
							<div>
								<Select
									defaultValue="Тип периода"
									onChange={handleChange}
									options={[...periodType]}
									size="small"
								/>
							</div>
						</div>
					</div>
				}
			>
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
				<div>
					{/** Chart HERE*/}
					<Line {...chartConfig} />
					<div className="px-2 py-2">
						<Checkbox className="pr-4">Уники</Checkbox>
						<Checkbox className="pr-4">Регистрации</Checkbox>
						<Checkbox className="pr-4">Подтвержденные рег.</Checkbox>
						<Checkbox className="pr-4">CTR, %</Checkbox>
						<Checkbox className="pr-4">Уникальные покупки</Checkbox>
						<Checkbox className="pr-4">Уникальные покупки в $</Checkbox>
						<Checkbox className="pr-4">CR2, %</Checkbox>
						<Checkbox className="pr-4">Доход, $</Checkbox>
					</div>
				</div>
			</Plate>
		</>
	);
}
