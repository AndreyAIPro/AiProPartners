import { NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";

import LandingButton from "../common/LandingButton/LandingButton";

const LandingNav = ({user, refLink}) => {

	return (
		<nav className="relative z-10 flex items-center justify-between max-sm:justify-center max-sm:pt-5">
			<NavLink
				to="/dashboard"
				data-aos="fade-right"
				className="flex items-center gap-4 font-nunito-sans text-[50px] font-medium hover:cursor-pointer"
			>
				AIPRO <Logo width={67} />
			</NavLink>
			<div className="flex items-center gap-8 max-md:gap-3 max-sm:hidden">
				{user ? (
					<LandingButton href="/dashboard" label="Войти" isBorder />
				) : (
					<>
						<LandingButton label="Войти" href={"/login"+refLink} />
						<LandingButton label="Зарегистрироваться" href={"/signup"+refLink} isBorder />
					</>
				)}

				<select className="font-regular text-sm flex cursor-pointer rounded-[8px] bg-transparent p-2 font-nunito-sans uppercase text-white">
					<option value="Rus" key="Rus" className="border-0 bg-transparent">
						Рус
					</option>
				</select>
			</div>
		</nav>
	);
};

export default LandingNav;
