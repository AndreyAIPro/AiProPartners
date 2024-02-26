import React from "react";

function Auth() {
	return (
		<div className="flex h-screen flex-col-reverse bg-[#181818] text-white md:flex-row">
			<div className="br-100 flex w-full items-center justify-center bg-[#24a1e0] md:w-3/6 md:rounded-r-[150px] ">
				<div className="flex flex-col items-center justify-center">
					<div className=" text-center font-['Nunito_Sans'] text-[40px] font-bold">
						Добро пожаловать
					</div>
					<div className="w-[400px] text-center font-['Nunito_Sans'] text-[20px] font-normal">
						Заполните поля что бы пользоваться всеми функциями AiPro Если у вас
						уже есть аккаунт, вы можете войти в него
					</div>
					<button></button>
				</div>
			</div>
			<div className="flex w-full items-center justify-center md:w-3/6">
				lorem150rerere
			</div>
		</div>
	);
}

export default Auth;
