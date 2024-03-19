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
import { useSelectAnalTable } from "../../hooks/useSelectAnalTable";

const Charts = () => {
	// Chart config
	const { user } = useUser();
	const { data: analTable } = useSelectAnalTable(user?.id);
	let uniquesA = 0,
		registrationA = 0,
		shoppingA = 0,
		balanceA = 0;

	analTable?.map((row) => {
		uniquesA += row.unique || 0;
		registrationA += row.getClients || 0;
		shoppingA += (row.firstBuy || 0) + (row.otherBuy || 0);
		balanceA += (row.incomeFirst || 0) * 0.3 + (row.incomeOther || 0) * 0.15;
	});
	
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
						<Clients
						uniquesA={uniquesA}
						uniquesG={0} />
					</div>
					<div className="mx-2 flex-1  ">
						<Registation
						registrationA={registrationA}
						registrationG={0} />
					</div>
					<div className="mx-2 flex-1  ">
						<Purchase
						shoppingA={shoppingA}
						shoppingG={0} />{" "}
					</div>
					<div className="mx-2 flex-1  ">
						<OverAllBalance
						balanceA={balanceA}
						balanceG={0} />
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
