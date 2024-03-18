// const  dataSource = tableData.map((row, index)=> {
// 		key: {index}, /* = id*/
// 		date: {row.data}, //data
// 		Unics: {row.unique}, //unique
// 		regestrationCount: {row.getClients}, //getClients
// 		firstBuy: {row.firstbuy}
// 		percentCTR: {((row.unique / row.getClients) * 100).toFixed(2)}, // unique/getClients * 100  2 цифри після точки
// 		TO = {row.firstBuy + row.otherBuy} // (total orders)
// 		UOS: {row.income}, //іncome
// 		percentUOS: "3", //
// 		percentCR2: "2", //CR2 % = firstBuy / getClients * 100
// 		// CR3 % = firstBuy / otherBuy * 100
// 		incomeValue: "over9000", //
// 	},)

export const ofers = [{ value: "Офер", label: "Офер" }];
export const columns = [
	{
		title: "Дата",
		dataIndex: "date",
		key: "date",
	},
	{
		title: "Субакаунт",
		dataIndex: "refName",
		key: "refName",
	},
	{
		title: "Уники",
		dataIndex: "unique",
		key: "unique",
	},
	{
		title: "Рег",
		dataIndex: "getClients",
		key: "getClients",
	},

	{
		title: "CTR, %",
		dataIndex: "percentCTR",
		key: "percentCTR",
	},
	{
		title: "First buy",
		dataIndex: "firstBuy",
		key: "firstBuy",
	},
	{
		title: "Other buy",
		dataIndex: "otherBuy",
		key: "otherBuy",
	},
	{
		title: "TO",
		dataIndex: "to",
		key: "to",
	},
	{
		title: "UOS",
		dataIndex: "uos",
		key: "uos",
	},
	{
		title: "CR2",
		dataIndex: "cr2",
		key: "cr2",
	},
	{
		title: "CR3",
		dataIndex: "cr3",
		key: "cr3",
	},
	{
		title: "Дохід",
		dataIndex: "totalIncome",
		key: "totalIncome",
	},
];

export const statisticAll = [
	{ value: "Общая статистика", label: "Общая статистика" },
];
export const countries = [
	{ value: "Украина", label: "Украина" },
	{ value: "Омерика", label: "Омерика" },
	{ value: "Чайна", label: "Чайна" },
	{ value: "Пидорашка", label: "Пидорашка", disabled: true },
];
export const subAccounts = [
	{ value: "Вася", label: "Вася" },
	{ value: "Петя", label: "Петя" },
	{ value: "Саня", label: "Саня" },
	{ value: "Ваня", label: "Ваня", disabled: true },
];
