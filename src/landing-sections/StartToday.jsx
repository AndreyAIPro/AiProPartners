/** @format */

import LandingButton from '../components/common/LandingButton/LandingButton';

const StartToday = () => {
	return (
		<section className='max-h-[644px] bg-start-today h-screen flex flex-col items-center justify-center gap-[67px] relative after:absolute after:h-full after:w-full after:bg-start-today-after after:bg-no-repeat after:bg-center'>
			<h3 className='text-white font-extrabold text-[36px] font-nunito-sans text-center'>
				Начните зарабатывать сегодня. <br /> Станьте лидером уже завтра!
			</h3>
			<LandingButton isYellow label='Зарегистрироваться' />
		</section>
	);
};

export default StartToday;
