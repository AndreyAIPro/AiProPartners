/**  @format */
import { useState } from "react";
import TableFinance from "./../../components/common/TableFinance.jsx/TableFinance";
import Withdrawal from "./../../components/common/Withdrawal/Withdrawal";

const Finances = () => {
	const [changer, setChanger] = useState(false);

	return (
		<section className="m-0 w-[1245px] py-8">
			<h2 className=" font-nunito-sans text-title font-bold">Финансы</h2>
			<div className="mt-5 flex gap-10 text-title2 ">
				<button
					className={`font-nunito-sans font-bold text-light-gray ${changer === true && "text-white"}`}
					onClick={() => setChanger(!changer)}
				>
					Вывод средств
				</button>

				<button
					className={`font-nunito-sans font-bold text-light-gray ${changer === false && "text-white"}`}
					onClick={() => setChanger(!changer)}
				>
					Список транзакций
				</button>
			</div>
			{changer ? (
				<Withdrawal />
			) : (
				<div className="m-6">
					<TableFinance />
				</div>
			)}
		</section>
	);
};

export default Finances;
