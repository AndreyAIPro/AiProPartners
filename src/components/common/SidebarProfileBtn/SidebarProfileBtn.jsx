import { Button, ConfigProvider, Popconfirm, theme } from "antd";
import { NavLink } from "react-router-dom";
import { ReactComponent as ExitIcon } from "../../../assets/images/Icons aipro partners/exit.svg";
import { ReactComponent as ProfilePlaceholder } from "../../../assets/images/profile-placeholder.svg";
import { ReactComponent as SettingsIcon } from "../../../assets/images/settings-btn.svg";
import { useLogout } from "../../../hooks/useLogout";
import { useUser } from "../../../hooks/useUser";
import styles from "./sidebar-profile-btn.module.scss";

const SidebarProfileBtn = () => {
	const { logout } = useLogout();
	const { user } = useUser();
	const userData = user.user_metadata;

	return (
		<div className="w-full flex h-full max-h-10 items-center justify-between max-xl:flex-col">
			<div className="flex items-center gap-[10px] max-xl:hidden">
				<ProfilePlaceholder />
				<h3 className="text-[20px] font-normal leading-7">
					{userData.fullName}
				</h3>
			</div>
			<div className="flex flex-row items-center justify-center ">
				<ConfigProvider
					theme={{
						algorithm: theme.darkAlgorithm,
					}}
					className="max-xl:hidden"
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
					className={({ isActive }) =>
						!isActive
							? "settings__btn ml-2 h-[25px] w-[25px] border-[5px]"
							: `settings__btn active ml-2 h-[25px] w-[25px] border-[5px]`
					}
				>
					<SettingsIcon className={styles.svgIcon} />
				</NavLink>
			</div>
		</div>
	);
};

export default SidebarProfileBtn;
