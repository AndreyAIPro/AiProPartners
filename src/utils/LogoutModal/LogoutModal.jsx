import { NavLink } from "react-router-dom";
import { useLogout } from "../../hooks/useLogout";

const LogoutModal = ({ active, onClose, isExpandedRightSidebar }) => {
	const { logout } = useLogout();

	return (
		<>
			{active && (
				<div
					className={
						isExpandedRightSidebar
							? `${active ? "flex" : "hidden"} w-fit absolute top-20 flex-col items-center justify-center gap-2 rounded-xl bg-gray px-2 py-1 text-text3`
							: `${active ? "flex" : "hidden"} absolute right-6  top-4 w-[215px] flex-col items-center justify-center gap-2 rounded-3xl bg-gray p-5 text-text3`
					}
				>
					{isExpandedRightSidebar ? (
						<span className="">
							<h3>Вы уверены</h3>
							<h3>что хотите</h3>
							<h3> выйти?</h3>
						</span>
					) : (
						<h3>Вы уверены что хотите выйти?</h3>
					)}

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
