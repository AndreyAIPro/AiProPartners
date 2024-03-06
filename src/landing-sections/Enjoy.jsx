/** @format */

import LandingButton from '../components/common/LandingButton/LandingButton';
import LandingSectionHeading from '../components/common/LandingSectionHeading/LandingSectionHeading';

const Enjoy = () => {
	return (
		<section className='relative w-full max-h-[336px] h-screen flex flex-col items-center justify-center gap-8 after:h-full after:w-full after:bg-enjoy-after after:bg-no-repeat after:bg-center after:absolute bg-gradient-to-r from-enjoy-start-gradient to-enjoy-end-gradient max-sm:bg-start-today-mobile max-sm:max-h-[366px] max-sm:after:hidden max-sm:bg-cover max-sm:bg-center max-sm:bg-no-repeat'>
			<LandingSectionHeading
				title='Присоединяйтесь к AIPRO!'
				dataAos='fate-left'
			/>
			<LandingButton isYellow label='Зарегистрироваться' dataAos='fate-right' />
		</section>
	);
};

export default Enjoy;
