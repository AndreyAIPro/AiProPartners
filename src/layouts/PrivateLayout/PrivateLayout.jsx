/** @format */

import { Outlet, useLocation, Link } from "react-router-dom";
import Landing from "../../pages/Landing/Landing";
import { Layout, Menu, ConfigProvider, Button } from "antd";
import { RightOutlined, LeftOutlined } from "@ant-design/icons";
import PathConstants from "../../router/pathConstants";
import React, { useState } from "react";
import {
	DashboardIcon,
	FinancesIcon,
	RefHrefIcon,
	StudyIcon,
	SubAccountIcon,
} from "../../assets/images/navIcons";
import logo from "../../assets/images/logo.svg";

import TelegramLink from "../../components/common/TelegramLink";
import SocialLinksList from "../../components/SocialLinksList";

const { Sider, Content } = Layout;
const navItemsData = [
	{
		icon: <DashboardIcon />,
		label: "Dashboard",
		href: PathConstants.DASHBOARD,
	},
	{
		icon: <SubAccountIcon />,
		label: "Субаккаунт",
		href: PathConstants.SUBACCOUNT,
	},
	{ icon: <RefHrefIcon />, label: "Реф.ссылка", href: PathConstants.REF },
	{ icon: <StudyIcon />, label: "Обучение", href: PathConstants.STUDY },
	{ icon: <FinancesIcon />, label: "Финансы", href: PathConstants.FINANCES },
];

const PrivateLayout = () => {
	let { pathname } = useLocation();
	const [collapsed, setCollapsed] = useState(false);

	const toggleCollapsed = () => {
		setCollapsed(!collapsed);
	};

	return (
		<>
			{pathname !== "/" ? (
				<ConfigProvider
					theme={{
						components: {
							Menu: {
								darkItemSelectedBg: "#24A1E0",
							},
							Button: {
								primaryShadow: "none",
								colorPrimaryHover: "#24A1E0",
							},
						},
					}}
				>
					<Layout className=" bg-black ">
						<Sider
							collapsible
							collapsed={collapsed}
							onCollapse={toggleCollapsed}
							width={319}
							collapsedWidth={90}
							style={{ backgroundColor: "#0e0e0e" }}
							theme="dark"
							trigger={null}
						>
							<div className="sticky top-0">
								<div className="sticky top-0 flex h-[83px] flex-row  justify-items-center bg-secondary p-4">
									<div className="flex flex-row">
										<img
											src={logo}
											alt="Logo"
											style={{ width: "60px", height: "43px" }}
										/>
										{!collapsed && (
											<div className="flex-end flex scale-75 flex-col pb-1">
												<p className="leading-0 m-0 flex flex-col text-title2 text-white">
													AIPRO
												</p>
												<p className=" text-text1 text-[#b4b4b4] ">PARTNERS</p>
											</div>
										)}
									</div>
								</div>
								<div className="mb-3 flex justify-end pr-4">
									<Button
										type="primary"
										onClick={toggleCollapsed}
										style={{ height: "3rem" }}
									>
										{collapsed ? (
											<RightOutlined
												style={{
													fontSize: "2rem",
													width: "2rem",
													height: "2rem",
												}}
											/>
										) : (
											<LeftOutlined
												style={{
													fontSize: "2rem",
													width: "2rem",
													height: "2rem",
												}}
											/>
										)}
									</Button>
								</div>
								<Menu
									theme="dark"
									mode="inline"
									defaultSelectedKeys={[pathname]}
									style={{ position: "sticky", top: "0", padding: "0" }}
									className="bg-secondary"
								>
									{navItemsData.map((item) => (
										<Menu.Item
											key={item.href}
											icon={item.icon}
											style={{
												height: "5rem",
												paddingLeft: "1rem",
												paddingTop: "1rem",
												paddingRight: "1rem",
												paddingBottom: "1rem",
												margin: "0",
												borderRadius: "0",
											}}
										>
											<Link className="p-1" to={item.href}>
												{item.label}
											</Link>
										</Menu.Item>
									))}
								</Menu>
								{!collapsed && (
									<>
										<TelegramLink />
										<SocialLinksList />
									</>
								)}
							</div>
						</Sider>

						<Content
							style={{ height: "100%", color: "white", minHeight: "100vh" }}
						>
							<Outlet />
						</Content>
						<Sider
							collapsible={true}
							style={{ backgroundColor: " var(--sidebar-bg)" }}
							width={319}
							collapsedWidth={90}
						>
							<Menu theme="dark"></Menu>
						</Sider>
					</Layout>
				</ConfigProvider>
			) : (
				<Landing />
			)}
		</>
	);
};

export default PrivateLayout;

// {pathname !== "/" ? (
// 	<div className={styles.private__layout}>
// 		<Sidebar isLeftSidebar />
// 		<Outlet />
// 		<Sidebar />
// 	</div>

// ) : (
// 	<Landing />
// )}
