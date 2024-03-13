
import { useEffect } from "react";
import {
	Outlet,
	useLocation,
	useNavigate
} from "react-router-dom";
import Link from "../../components/common/NavLink/NavLink";

const Study = () => {
	const location = useLocation();
	const navigate = useNavigate();

	useEffect(() => {
		navigate("community");
	}, [navigate]);

	return (
		<section className="w-[1245px]  py-8 [&>*:nth-child(4)]:text-light-gray">
			<h2 className=" font-nunito-sans text-title font-bold">Обучения</h2>
			<div className="mt-5 flex gap-10 text-title2 ">
				<Link
					href="articles"
					title="Полезные статьи"
					path={location.pathname}
				/>
				<Link href="community" title="Комьюнити" path={location.pathname} />
			</div>

			<Outlet />
		</section>
	);
};

export default Study;
