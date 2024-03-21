import { NavLink } from "react-router-dom";
import { ReactComponent as ExitIcon } from "../../../assets/images/Icons aipro partners/exit.svg";
import { ReactComponent as ProfilePlaceholder } from "../../../assets/images/profile-placeholder.svg";

import { useState } from "react";
import { ReactComponent as SettingsIcon } from "../../../assets/images/settings-btn.svg";
import { useUser } from "../../../hooks/useUser";
import LogoutModal from "../../../utils/LogoutModal/LogoutModal";
import styles from "./sidebar-profile-btn.module.scss";

const SidebarProfileBtn = () => {
	const { user } = useUser();
	const [openModal, setOpenModal] = useState(false);
	const userData = user.user_metadata;

	return (
		<div className="w-full flex h-full max-h-10 items-center justify-between max-xl:flex-col">
			<div className="flex items-center gap-[10px] max-xl:hidden">
				<ProfilePlaceholder />
				<h3 className="text-[20px] font-normal leading-7">
					{userData.fullName}
				</h3>
			</div>
			<div className="flex flex-col items-center justify-center gap-4 max-xl:flex-col-reverse max-xl:gap-5">
				<button
					onClick={() => setOpenModal(true)}
					className="relative mr-[-7px] flex flex-row-reverse"
				>
					<ExitIcon />
					<LogoutModal active={openModal} setActive={setOpenModal} />
				</button>

				<NavLink
					to="/preferences"
					className={({ isActive }) =>
						!isActive
							? "settings__btn h-[25px] w-[25px]"
							: `settings__btn active h-[25px] w-[25px]`
					}
				>
					<SettingsIcon className={styles.svgIcon} />
				</NavLink>
			</div>
		</div>
	);
};

export default SidebarProfileBtn;
