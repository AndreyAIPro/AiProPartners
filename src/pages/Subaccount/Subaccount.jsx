import SubaccountTable from "./SubaccountTable/SubaccountTable";

const Subaccount = () => {
	return (
		<article className="flex-1 flex-col justify-start px-4">
			<div className="flex flex-wrap">
				<h2 className="px-4 py-3 text-title font-bold 2xl:py-6 ">Субаккаунт</h2>

				<div className="flex flex-col 2xl:flex-row">
					<div className="flex flex-1">
						<div className="">
							<p className="px-4 py-2 text-title3 2xl:text-title2 ">
								<b>Субаккаунт (ссылка для субаккаунта)</b>- это ссылка которая
								позволяет вам:
							</p>

							<ul className="flex list-disc flex-row gap-[2rem] px-12 text-text1 2xl:flex-col 2xl:gap-2">
								<li className="text-text2 2xl:text-text1 ">
									Тестировать различные гипотезы рекламных воронок продаж (ГЕО,
									платформы, подходы в рекламе и остальные всевозможные моменты)
								</li>
								<li className="text-text2 2xl:text-text1 ">
									Создавать свои субаккаунты, где вы можете назначать своих
									собственных менеджеров по продажам, отслеживать их
									деятельность и анализировать результаты.
								</li>
							</ul>
						</div>
					</div>
					<SubaccountTable />
				</div>
			</div>
		</article>
	);
};

export default Subaccount;
