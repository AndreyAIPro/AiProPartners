import { Checkbox, Select, Button } from "antd";
import { Line } from "@ant-design/plots";
import Plate from "../../Preferences/Plate/Plate";
import {
	chartConfig,
	periodType,
	statisticAll,
	countries,
	subAccounts,
	ofers,
} from "../DataDashboard/ChartData";

export default function ChartMain(params) {
	const handleChange = (value) => {
		console.log(`selected ${value}`);
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
