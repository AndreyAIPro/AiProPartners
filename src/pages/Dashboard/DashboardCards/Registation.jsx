import Plate from "../../Preferences/Plate/Plate";
import { Statistic } from "antd";
import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";
export default function Registation({ registrationA, registrationG }) {
	return (
		<>
			<Plate title={"Регистрации"}>
				<div className="py-2">
					<div>
						<p className="text-text4 2xl:text-text3">Активный объем</p>
						<div className="flex flex-row">
							<span className="px-1 text-text3 2xl:text-text1">
								{registrationA}
							</span>
							{/* <Statistic
								value={11.28}
								precision={2}
								valueStyle={{ color: "#3f8600", fontSize: "12px" }}
								prefix={<ArrowUpOutlined />}
								suffix="%нед."
							/> */}
						</div>
					</div>
					<div className="pt-2">
						<p className="text-text4 2xl:text-text3">Групповой объем</p>
						<div className="flex flex-row">
							<span className="px-1 text-text3 2xl:text-text1">
								{registrationG}
							</span>
							{/* <Statistic
								value={9.3}
								precision={2}
								valueStyle={{ color: "#cf1322", fontSize: "12px" }}
								prefix={<ArrowDownOutlined />}
								suffix="%нед."
							/> */}
						</div>
					</div>
				</div>
			</Plate>
		</>
	);
}
