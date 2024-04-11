import { NavLink } from "react-router-dom";
import { ReactComponent as ExitIcon } from "../../../assets/images/Icons aipro partners/exit.svg";
import { ReactComponent as ProfilePlaceholder } from "../../../assets/images/profile-placeholder.svg";
import { Typography } from "antd";
import { useState } from "react";
import { ReactComponent as SettingsIcon } from "../../../assets/images/settings-btn.svg";
import { useUser } from "../../../hooks/useUser";
import LogoutModal from "../../../utils/LogoutModal/LogoutModal";
import styles from "./sidebar-profile-btn.module.scss";
const { Text } = Typography;

const SidebarProfileBtn = ({ isExpandedRightSidebar }) => {
	const { user } = useUser();
	const { fullName } = user.user_metadata;
	const [openModal, setOpenModal] = useState(false);

	return (
		<div
			className={`w-full flex h-full max-h-10 items-center justify-between pt-6   2xl:scale-100  2xl:flex-row ${isExpandedRightSidebar ? "flex-col" : ""}`}
		>
			<div
				className={`flex   items-center justify-start gap-1   ${isExpandedRightSidebar ? " " : ""}`}
			>
				<ProfilePlaceholder />
				<h3
					className={`flex text-text2 font-normal leading-7   2xl:text-text1 ${isExpandedRightSidebar ? "max-2xl:hidden" : "max-2xl:flex"}`}
				>
					<Text
						ellipsis
						style={{
							color: "white",
							marginBottom: "0",
							width: "9vw",
							fontSize: "18px",
						}}
					>
						{fullName}
					</Text>
				</h3>
			</div>
			<div
				className={`max-xl:w-full flex scale-75 items-center justify-center gap-2 max-2xl:justify-end   2xl:scale-100 ${isExpandedRightSidebar ? "max-2xl:mt-10 max-2xl:flex-col" : "mt-0"}`}
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
				<LogoutModal
					isExpandedRightSidebar={isExpandedRightSidebar}
					active={openModal}
					onClose={() => setOpenModal(false)}
				/>
			</div>
		</div>
	);
};

export default SidebarProfileBtn;
