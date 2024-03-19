import Link from "./../../components/common/NavLink/NavLink";
import { Outlet, useLocation } from "react-router-dom";

const Finances = () => {
	const location = useLocation();

	return (
		<section className="m-0 w-[1245px] py-8">
			<h2 className=" font-nunito-sans text-title font-bold">Финансы</h2>
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
