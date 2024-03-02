import RefTable from "./RefTable/RefTable";

/** @format */

const Ref = () => {
    return (
        <>
            <div className="flex-1 flex-col justify-start">
                <h2 className="text-title px-4 py-6 font-bold ">Реферальная ссылка</h2>
                <div className="flex flex-row">
                    <div className="max-w-[455px] flex flex-col ">
                        <p className="text-title2  px-4 py-2 ">
                            <b>Реферальная ссылка (Пригласительная ссылка).</b> Привлекайте в свою команду партнеров по вашей реферальной
                            ссылке чтоб иметь дополнительную прибыль:
                        </p>

                        <ul className="list-disc px-12 text-text1 ">
                            <li className=" text-text1 ">10% (доход от Личного Объема вашего партнера)</li>
                            <li className=" text-text1 ">5% (Доход от каждой повторной продажи Личного Объема вашего партнера)</li>
                        </ul>
                    </div>
                    <div className="flex-1">
                        <RefTable />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Ref;
