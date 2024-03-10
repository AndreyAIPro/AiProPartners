import { ConfigProvider, theme } from "antd";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Login from "../../components/Login/Login";
import Register from "../../components/Register/Register";
import { useUser } from "../../hooks/useUser";

function Auth() {
	const { user } = useUser()
	const navigate = useNavigate();
	const { pathname } = useLocation();

	const [isActive, setIsActive] = useState(pathname === "/signup");

	if (user) navigate('/dashboard');
	
	return (
		<div
			className={`relative flex min-h-screen  flex-col-reverse bg-[#181818] text-white lg:flex-row ${!isActive && "lg:flex-row-reverse"}`}
		>
			<div
				className={`max-lg:min-w-full flex w-[50%] items-center justify-center bg-[#24a1e0] p-[20px] max-lg:rounded-t-[100px] lg:rounded-r-[150px] ${!isActive && "lg:rounded-l-[150px] lg:rounded-r-none"}`}
			>
				<div className="flex flex-col items-center justify-center">
					<div className=" text-center text-[40px] font-bold max-md:text-[30px]">
						{isActive ? "Добро пожаловать" : "С возвращением!"}
					</div>
					<div className="max-md:max-w-none lg:w-[400px] text-center text-[20px] font-normal max-md:text-[16px]">
						Заполните поля что бы пользоваться всеми функциями AiPro
						<p>
							{isActive
								? "Если у вас уже есть аккаунт, вы можете войти в него"
								: "Если у вас еще нет аккаунта, вы можете создать его"}
						</p>
					</div>
					<button
						className=" mt-[15px]  rounded-[10px] border border-solid p-[5px] px-[30px] text-[20px] hover:bg-[#2faeed]"
						onClick={isActive ? handleLoginClick : handleRegisterClick}
					>
						{isActive ? "Войти" : "Зарегистрироваться"}
					</button>
				</div>
			</div>
			<div className="max-lg:min-w-full flex w-[50%] items-center justify-center p-[20px]">
				<ConfigProvider
					theme={{
						token: {
							algorithm: theme.darkAlgorithm,
						},
						components: {
							Input: {
								colorBgContainer: "none",
								colorBorder: "rgb(63, 63, 63)",
								colorIcon: "#fff",
								colorTextPlaceholder: "rgb(180, 180, 180)",
								colorText: "rgb(254, 254, 254)",
								paddingBlock: "10px",
								fontSize: "17px",
								activeBorderColor: "grey",
								hoverBorderColor: "grey",
							},
						},
					}}
				>
					{isActive ? <Register /> : <Login />}
				</ConfigProvider>
			</div>
		</div>
	);

	function handleLoginClick() {
		setIsActive(false);
		navigate("/login", { replace: true });
	}

	function handleRegisterClick() {
		setIsActive(true);
		navigate("/signup", { replace: true });
	}
}

export default Auth;
