import Link from "./../../components/common/NavLink/NavLink";
import { Outlet, useLocation } from "react-router-dom";

const Finances = () => {
	const location = useLocation();

	return (
		<section className="flex-1 flex-col justify-start px-4">
			<h2 className=" px-4 py-3 text-title font-bold 2xl:py-6 ">Финансы</h2>
			<div className="mt-5 flex gap-10 text-title2 ">
				<Link
					href="withdrawal"
					title="Вывод средств"
					path={location.pathname}
					route={"finances"}
				/>
				<Link
					href="transactionList"
					title="Список транзакций"
					path={location.pathname}
					route={"finances"}
				/>
			</div>
			<Outlet />
		</section>
	);
};

export default Finances;
