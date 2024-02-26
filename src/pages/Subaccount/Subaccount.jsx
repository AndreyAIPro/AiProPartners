import SubaccountTable from "./SubaccountTable/SubaccountTable";

/** @format */

const Subaccount = () => {
    return (
        <div className="flex flex-row  bg-black ">
            <div className="w-2/5">
                <h2 className="text-title px-12 py-6">Субаккаунт</h2>

                <p className="text-title2 px-4 py-2">
                    <b>Субаккаунт (ссылка для субаккаунта)</b>- это ссылка которая позволяет вам:
                </p>

                <ul className="list-disc px-12 text-text1">
                    <li>
                        Тестировать различные гипотезы рекламных воронок продаж (ГЕО, платформы, подходы в рекламе и остальные всевозможные
                        моменты)
                    </li>
                    <li>
                        Создавать свои субаккаунты, где вы можете назначать своих собственных менеджеров по продажам, отслеживать их
                        деятельность и анализировать результаты.
                    </li>
                </ul>
            </div>
            <div className="w-full flex justify-center">
                <SubaccountTable />
            </div>
        </div>
    );
};

export default Subaccount;
