import { ConfigProvider, theme, Tabs } from "antd";
import RegularPreferences from "./preferencesTabs/RegularPreferences";
import PaymentPreferences from "./preferencesTabs/PaymentPreferences";

const Preferences = () => {
	const items = [
		{
			key: "1",
			label: "Общие настройки",
			children: <RegularPreferences />,
		},
		{
			key: "2",
			label: "Способы ввывода",
			children: <PaymentPreferences />,
			disabled: true,
		},
	];
	return (
		<>
			<ConfigProvider
				theme={{
					algorithm: theme.darkAlgorithm,

					components: {
						Checkbox: {
							colorPrimary: "#24A1E0",
							colorBgContainer: "white",
							colorBgBase: "white",
						},
						Input: {
							colorBgContainer: "white",
							colorText: "black",
							colorTextPlaceholder: "gray",
							colorIcon: "gray",
						},
						Form: {
							labelFontSize: 12,
							paddingContentVertical: 0,
						},
						TextArea: {
							colorTextPlaceholder: "gray",
						},
						Select: {
							colorBorder: "white",
						},
						Table: {
							fontSize: 12,
						},
						Tabs: {
							colorPrimary: "#24A1E0",
						},
						Button: {
							colorPrimary: "#24A1E0",
						},
					},
				}}
			>
				<div className="flex-1 flex-col ">
					<h2 className=" mt-4 px-8 text-title font-bold ">Настройки</h2>

					<div className="flex-1">
						<Tabs defaultActiveKey="1" items={items} />
					</div>
				</div>
			</ConfigProvider>
		</>
	);
};

export default Preferences;
