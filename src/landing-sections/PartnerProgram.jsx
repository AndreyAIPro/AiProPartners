/** @format */

import PartnerProgramDetails from '../components/PartnerProgramDetails/PartnerProgramDetails';
import LandingButton from '../components/common/LandingButton/LandingButton';
import LandingSectionHeading from '../components/common/LandingSectionHeading/LandingSectionHeading';

const PartnerProgram = () => {
	return (
		<section className='flex flex-col items-center justify-between pt-[121px] pb-[38px] bg-partner-program h-full w-full relative bg-no-repeat max-sm:pt-[103px] max-sm:bg-none'>
			<h2 className='max-w-[564px] max-h-[78px] h-full w-full flex items-center justify-center bg-yellow py-6 text-[32px] rounded-[10px] z-10 absolute top-[75px] max-sm:max-w-[233px] max-sm:text-text2 max-sm:max-h-[54px]'>
				Программа Партнерства
			</h2>

			<PartnerProgramDetails />
			<div className='flex flex-col justify-center items-center gap-10 mt-[85px] max-sm:px-7'>
				<LandingSectionHeading
					title='Остался последний шаг к заработку, зарегистрируйся ниже!'
					dataAos='flip-right'
				/>
				<LandingButton
					label='Начать зарабатывать'
					isYellow
					dataAos='fade-right'
				/>
			</div>
		</section>
	);
};

export default PartnerProgram;
