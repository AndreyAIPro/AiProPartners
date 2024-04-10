import { Outlet, useLocation } from "react-router-dom";
import Link from "../../components/common/NavLink/NavLink";

const Study = () => {
	const location = useLocation();

	return (
		<section className="flex-1 flex-col justify-start px-4 [&>*:nth-child(4)]:text-light-gray">
			<h2 className="px-4 py-3 text-title font-bold 2xl:py-6 ">Обучения</h2>
			<div className="mt-5 flex gap-10 text-title2 ">
				<Link
					href="articles"
					title="Полезные статьи"
					path={location.pathname}
					route={"study"}
				/>

				<Link
					href="community"
					title="Комьюнити"
					path={location.pathname}
					route={"study"}
				/>
			</div>

			<Outlet />
		</section>
	);
};

export default Study;
