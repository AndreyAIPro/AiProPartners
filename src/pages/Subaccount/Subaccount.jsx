import SubaccountTable from "./SubaccountTable/SubaccountTable";

/** @format */

const Subaccount = () => {
    return (
        <>
            <div className="flex flex-row  bg-black ">
                <div className="w-2/5">
                    <h2 className="text-title px-12 py-6 font-nunito-sans font-bold">Субаккаунт</h2>

                    <p className="text-title2 px-4 py-2 font-nunito-sans">
                        <b className=" font-nunito-sans">Субаккаунт (ссылка для субаккаунта)</b>- это ссылка которая позволяет вам:
                    </p>

                    <ul className="list-disc px-12 text-text1 font-nunito-sans">
                        <li className="text-text1 font-nunito-sans">
                            Тестировать различные гипотезы рекламных воронок продаж (ГЕО, платформы, подходы в рекламе и остальные
                            всевозможные моменты)
                        </li>
                        <li className="text-text1 font-nunito-sans">
                            Создавать свои субаккаунты, где вы можете назначать своих собственных менеджеров по продажам, отслеживать их
                            деятельность и анализировать результаты.
                        </li>
                    </ul>
                </div>
                <div className="w-full flex justify-center font-nunito-sans">
                    <SubaccountTable />
                </div>
            </div>
        </>
    );
};

export default Subaccount;
