/** @format */

import LandingButton from '../components/common/LandingButton/LandingButton';

const StartToday = () => {
	return (
		<section className='max-h-[644px] bg-reuse-bg h-screen flex flex-col items-center justify-center gap-[67px] relative after:absolute after:h-full after:w-full after:bg-start-today-after after:bg-no-repeat after:bg-center max-sm:bg-start-today-mobile max-sm:bg-no-repeat max-sm:bg-center max-sm:bg-cover max-sm:after:bg-start-today-mobile-vectors max-sm:after:bg-contain max-sm:after:scale-90 max-sm:text-title2'>
			<h3
				className='text-white font-extrabold text-[36px] font-nunito-sans text-center'
				data-aos='fade-left'
			>
				Начните зарабатывать сегодня. <br /> Станьте лидером уже завтра!
			</h3>
			<LandingButton isYellow label='Зарегистрироваться' dataAos='fade-right' isMobileStart/>
		</section>
	);
};

export default StartToday;
