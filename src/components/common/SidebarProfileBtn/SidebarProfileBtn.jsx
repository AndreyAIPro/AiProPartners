/** @format */

import { NavLink } from "react-router-dom";
import { ReactComponent as ProfilePlaceholder } from "../../../assets/images/profile-placeholder.svg";
import { ReactComponent as SettingsIcon } from "../../../assets/images/settings-btn.svg";
import styles from "./sidebar-profile-btn.module.scss";
import { ReactComponent as ExitIcon } from "../../../assets/images/Icons aipro partners/exit.svg";
import { Popconfirm, ConfigProvider, theme, Button } from "antd";
import { useLogout } from '../../../hooks/useLogout'
import { useUser } from "../../../hooks/useUser";



const SidebarProfileBtn = () => {
	const { logout } = useLogout();
	const { user } = useUser();
	const userData = user.user_metadata;
	return (
		<div className={styles.btn}>
			<div className={styles.btn__profile}>
				<ProfilePlaceholder />
				<h3>{userData.fullName}</h3>
			</div>
			<div className=" flex flex-row items-center justify-center ">
				<ConfigProvider
					theme={{
						algorithm: theme.darkAlgorithm,
					}}
				>
					<Popconfirm
						title="Хотите выйти ?"
						onConfirm={logout}
						okText="Да"
						cancelText="Нет"
						placement="left"
					>
						<Button
							style={{
								paddingLeft: " 2px",
								paddingRight: "2px",
								borderColor: "#0e0e0e",
							}}
						>
							<ExitIcon />
						</Button>
					</Popconfirm>
				</ConfigProvider>

				<NavLink
					to="/preferences"
					className={styles.settings__btn}
					style={({ isActive }) => {
						return {
							backgroundColor: isActive ? "#24a1e0" : "",
							borderRadius: "15px",
						};
					}}
				>
					<SettingsIcon />
				</NavLink>
			</div>
		</div>
	);
};

export default SidebarProfileBtn;
