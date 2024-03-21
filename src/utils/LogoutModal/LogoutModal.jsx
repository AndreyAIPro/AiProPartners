import { useLogout } from "../../hooks/useLogout";

const LogoutModal = ({ active, setActive }) => {
	const { logout } = useLogout();

	return (
		<div
			className={`${active ? "flex" : "hidden"} absolute mr-10 mt-[-30px] w-[200px] flex-col items-center justify-center gap-2 rounded-3xl bg-gray p-3 text-text3 `}
			onClick={() => setActive(false)}
		>
			<h3>Вы уверены что хотите выйти?</h3>
			<div className="flex gap-8 text-text2 ">
				<button className="hover:text-light-blue" onClick={logout}>
					Да
				</button>
				<button className="hover:text-light-blue" onClick={setActive(false)}>
					Нет
				</button>
			</div>
		</div>
	);
};

export default LogoutModal;
