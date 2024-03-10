/** @format */
import { NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import { useLogout } from "../../hooks/useLogout";
import { useUser } from "../../hooks/useUser";
import LandingButton from "../common/LandingButton/LandingButton";

const LandingNav = () => {
	const { user } = useUser();
	const { logout } = useLogout();
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
					<LandingButton href='/dashboard' label="Войти" isBorder />
				) : (
					<>
						<LandingButton label="Войти" href="/login" />
						<LandingButton label="Зарегистрироваться" href="/signup" isBorder />
					</>
				)}

				<select className="font-regular text-sm flex rounded-[8px] bg-transparent p-2 font-nunito-sans uppercase text-white">
					<option value="Rus" key="Rus" className="border-0 bg-transparent">
						Рус
					</option>
					<option value="Eng" key="Eng" className="border-0 bg-transparent">
						Eng
					</option>
					<option value="Ua" key="Ua" className="border-0 bg-transparent">
						UA
					</option>
				</select>
			</div>
		</nav>
	);
};

export default LandingNav;
