import telegram from "../../../assets/images/socialLinks/telegram.svg";

const TelegramLink = () => {
	return (
		<div className="mt-[60px] flex flex-col gap-2 pl-5 max-xl:hidden">
			<span>Ваш персональный менеджер</span>
			<a className="flex items-center gap-1" href="https://t.me/aipro_manager">
				<img src={telegram} alt="telegram icon" width={15} height={15} />
				@aipro_manager
			</a>
		</div>
	);
};

export default TelegramLink;
