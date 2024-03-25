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
		<div className="w-full flex h-full max-h-10 items-center justify-between max-xl:flex-col max-xl:gap-2">
			<div
				className={`flex items-center gap-[10px] ${isExpandedRightSidebar ? "ml-[-10px] mt-5" : ""}`}
			>
				<ProfilePlaceholder />
				<h3
					className={`text-[20px] font-normal leading-7 ${isExpandedRightSidebar ? "max-xl:hidden" : "max-xl:flex"}`}
				>
					{fullName}
				</h3>
			</div>
			<div
				className={`max-xl:w-full flex items-center justify-center gap-4 max-xl:justify-end max-xl:gap-5 max-xl:pr-5 ${isExpandedRightSidebar ? "max-xl:mt-10 max-xl:flex-col" : "mt-0"}`}
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
