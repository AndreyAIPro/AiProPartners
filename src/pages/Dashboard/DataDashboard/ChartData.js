export const chartConfig = {
	data: {
		type: "fetch",
		value:
			"https://gw.alipayobjects.com/os/bmw-prod/55424a73-7cb8-4f79-b60d-3ab627ac5698.json",
	},
	xField: (d) => new Date(d.year),
	yField: "value",
	sizeField: "5",
	shapeField: "trail",
	theme: "classicDark",
	legend: { size: false },
	colorField: "category",
	animate: { enter: { type: "growInX", duration: 2000 } },
};
export const periodType = [{ value: "Тип периода", label: "Тип периода" }];
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
export const ofers = [{ value: "Офер", label: "Офер" }];
