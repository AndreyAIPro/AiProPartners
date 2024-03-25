import { NavLink } from "react-router-dom";
import { useLogout } from "../../hooks/useLogout";

const LogoutModal = ({ active, onClose }) => {
	const { logout } = useLogout();

	return (
		<>
			{active && (
				<div
					className={`${active ? "flex" : "hidden"} absolute mr-[200px] mt-[-30px] w-[215px] flex-col items-center justify-center gap-2 rounded-3xl bg-gray p-5 text-text3`}
				>
					<h3>Вы уверены что хотите выйти?</h3>
					<div className="flex gap-8 text-text2 ">
						<NavLink className="hover:text-light-blue" onClick={logout}>
							Да
						</NavLink>
						<button className="hover:text-light-blue" onClick={onClose}>
							Нет
						</button>
					</div>
				</div>
			)}
		</>
	);
};

export default LogoutModal;
