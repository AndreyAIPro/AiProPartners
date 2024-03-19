import LandingButton from "../components/common/LandingButton/LandingButton";

const StartToday = ({user, refLink}) => {

	return (
		<section className="after:w-full relative flex h-screen max-h-[644px] flex-col items-center justify-center gap-[67px] bg-reuse-bg after:absolute after:h-full after:bg-start-today-after after:bg-center after:bg-no-repeat max-sm:bg-start-today-mobile max-sm:bg-cover max-sm:bg-center max-sm:bg-no-repeat max-sm:text-title2 max-sm:after:scale-90 max-sm:after:bg-start-today-mobile-vectors max-sm:after:bg-contain">
			<h3
				className="text-center font-nunito-sans text-[36px] font-extrabold text-white"
				data-aos="fade-left"
			>
				Начните зарабатывать сегодня. <br /> Станьте лидером уже завтра!
			</h3>
			<LandingButton
				href={user ? "/dashboard" : "/signup"+refLink}
				isYellow
				label="Зарегистрироваться"
				dataAos="fade-right"
				isMobileStart
			/>
		</section>
	);
};

export default StartToday;
