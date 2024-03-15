import { ConfigProvider, theme } from "antd";

import { useUser } from "../../hooks/useUser";
import { creatDefultRefLink } from "../../utils/supabaseUtils";
import {
	Clients,
	OverAllBalance,
	Purchase,
	Registation,
} from "./DashboardCards";
import ChartMain from "./Chart/ChartMain";
import DashboardTable from "./DashboardTable/DashboardTable";

const Charts = () => {
	// Chart config
	const { user } = useUser();

	if (user?.id !== undefined) creatDefultRefLink(user.id);
	const componentsConfg = {
		components: {
			Checkbox: {
				colorPrimary: "#24A1E0",
				colorBgContainer: "white",
				colorBgBase: "white",
				colorText: "white",
				fontSize: 12,
			},
			Line: {},
			Select: {
				colorBorder: "white",
				colorBgContainer: "black",
			},
			Button: {
				colorBorder: "#24A1E0",
			},
			DatePicker: {
				cellActiveWithRangeBg: "#24A1E0",
			},
			Icon: { color: "white" },
		},
	};

	return (
		<>
			<div className="flex-1">
				<h2 className="px-4 py-6 text-title font-bold ">Dashboard</h2>
				<div className="flex flex-row justify-evenly p-2">
					{/* Плашки*/}
					<div className="mx-2 flex-1  ">
						<Clients />
					</div>
					<div className="mx-2 flex-1  ">
						<OverAllBalance />
					</div>
					<div className="mx-2 flex-1  ">
						<Purchase />{" "}
					</div>
					<div className="mx-2 flex-1  ">
						<Registation />
					</div>
				</div>
				{/** Секция с графиками и таблицей */}
				<div className="flex flex-1 flex-col items-center ">
					<div className="dashboard-size-helper ">
						<ConfigProvider
							theme={{
								algorithm: theme.darkAlgorithm,
								...componentsConfg,
							}}
						>
							{/** Chart section*/}
							<ChartMain />
							{/** Table section */}
							<DashboardTable />
						</ConfigProvider>
					</div>
				</div>
			</div>
		</>
	);
};

export default Charts;
