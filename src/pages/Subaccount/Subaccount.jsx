import SubaccountTable from "./SubaccountTable/SubaccountTable";

const Subaccount = () => {
	return (
		<article className="flex-1 flex-col justify-start px-4">
			<h2 className="px-4 py-6 text-title  font-bold">Субаккаунт</h2>
			<div className="flex flex-row">
				<div className="w-[455px]">
					<p className="px-4 py-2 text-title2 ">
						<b>Субаккаунт (ссылка для субаккаунта)</b>- это ссылка которая
						позволяет вам:
					</p>

					<ul className="list-disc px-12 text-text1 ">
						<li className="text-text1 ">
							Тестировать различные гипотезы рекламных воронок продаж (ГЕО,
							платформы, подходы в рекламе и остальные всевозможные моменты)
						</li>
						<li className="text-text1 ">
							Создавать свои субаккаунты, где вы можете назначать своих
							собственных менеджеров по продажам, отслеживать их деятельность и
							анализировать результаты.
						</li>
					</ul>
				</div>
				<div className="flex-1 ">
					<SubaccountTable />
				</div>
			</div>
		</article>
	);
};

export default Subaccount;
