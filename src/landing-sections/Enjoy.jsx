/** @format */

import LandingButton from '../components/common/LandingButton/LandingButton';
import LandingSectionHeading from '../components/common/LandingSectionHeading/LandingSectionHeading';

const Enjoy = () => {
	return (
		<section className='relative w-full max-h-[336px] h-screen flex flex-col items-center justify-center gap-8 after:h-full after:w-full after:bg-enjoy-after after:bg-no-repeat after:bg-center after:absolute bg-gradient-to-r from-enjoy-start-gradient to-enjoy-end-gradient'>
			<LandingSectionHeading title='Присоединяйтесь к AIPRO!' />
			<LandingButton isYellow label='Зарегистрироваться' />
		</section>
	);
};

export default Enjoy;
