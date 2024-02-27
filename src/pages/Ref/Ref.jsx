import RefTable from "./RefTable/RefTable";

/** @format */

const Ref = () => {
    return (
        <>
            <div className="flex flex-row  bg-black ">
                <div className="w-3/5">
                    <h2 className="text-title px-12 py-6 font-bold font-nunito-sans">Реферальная ссылка</h2>

                    <p className="text-title3 px-4 font-normal font-nunito-sans">
                        <b className="font-nunito-sans">Реферальная ссылка (Пригласительная ссылка).</b> Привлекайте в свою команду
                        партнеров по вашей реферальной ссылке чтоб иметь дополнительную прибыль:
                    </p>

                    <ul className="list-disc px-12 py-2 ">
                        <li className="font-nunito-sans text-text2 py-2">10% (доход от Личного Объема вашего партнера)</li>
                        <li className="font-nunito-sans text-text2 py-2">
                            5% (Доход от каждой повторной продажи Личного Объема вашего партнера)
                        </li>
                    </ul>
                </div>
                <div className="w-full flex justify-center">
                    <RefTable />
                </div>
            </div>
        </>
    );
};

export default Ref;
