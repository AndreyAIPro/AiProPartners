import { NavLink } from "react-router-dom";
import { ReactComponent as ExitIcon } from "../../../assets/images/Icons aipro partners/exit.svg";
import { ReactComponent as ProfilePlaceholder } from "../../../assets/images/profile-placeholder.svg";

import { useState } from "react";
import { ReactComponent as SettingsIcon } from "../../../assets/images/settings-btn.svg";
import { useUser } from "../../../hooks/useUser";
import LogoutModal from "../../../utils/LogoutModal/LogoutModal";
import styles from "./sidebar-profile-btn.module.scss";

const SidebarProfileBtn = ({ isExpandedRightSidebar }) => {
	const { user } = useUser();
	const { fullName } = user.user_metadata;
	const [openModal, setOpenModal] = useState(false);

	return (
		<div
			className={`w-full flex h-full max-h-10  items-center justify-between  max-xl:gap-2  2xl:scale-100 ${isExpandedRightSidebar ? "flex-col" : ""}`}
		>
			<div
				className={`flex scale-75 items-center gap-[10px] 2xl:scale-100 ${isExpandedRightSidebar ? "ml-[-10px] mt-5" : ""}`}
			>
				<ProfilePlaceholder />
				<h3
					className={`text-[1rem] font-normal leading-7 2xl:text-[20px] ${isExpandedRightSidebar ? "max-xl:hidden" : "max-xl:flex"}`}
				>
					{fullName}
				</h3>
			</div>
			<div
				className={`max-xl:w-full flex scale-75 items-center justify-center gap-4 max-xl:justify-end max-xl:gap-5 max-xl:pr-5 2xl:scale-100 ${isExpandedRightSidebar ? "max-xl:mt-10 max-xl:flex-col" : "mt-0"}`}
			>
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
				<button
					onClick={() => setOpenModal(true)}
					className="relative mr-[-7px] flex flex-row-reverse"
				>
					<ExitIcon />
				</button>
				<LogoutModal active={openModal} onClose={() => setOpenModal(false)} />
			</div>
		</div>
	);
};

export default SidebarProfileBtn;
