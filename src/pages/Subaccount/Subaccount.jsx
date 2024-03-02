import SubaccountTable from "./SubaccountTable/SubaccountTable";

/** @format */

const Subaccount = () => {
    return (
        <>
            <div className="flex-1 flex-col justify-start">
                <h2 className="text-title px-4 py-6  font-bold">Субаккаунт</h2>
                <div className="flex flex-row">
                    <div className="w-[455px]">
                        <p className="text-title2 px-4 py-2 ">
                            <b>Субаккаунт (ссылка для субаккаунта)</b>- это ссылка которая позволяет вам:
                        </p>

                        <ul className="list-disc px-12 text-text1 ">
                            <li className="text-text1 ">
                                Тестировать различные гипотезы рекламных воронок продаж (ГЕО, платформы, подходы в рекламе и остальные
                                всевозможные моменты)
                            </li>
                            <li className="text-text1 ">
                                Создавать свои субаккаунты, где вы можете назначать своих собственных менеджеров по продажам, отслеживать их
                                деятельность и анализировать результаты.
                            </li>
                        </ul>
                    </div>
                    <div className="flex-1 ">
                        <SubaccountTable />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Subaccount;
