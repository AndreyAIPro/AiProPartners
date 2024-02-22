/** @format */

import { ReactComponent as LandingHeroImg } from '../assets/images/landing/landing-hero-img.svg';
import LandingButton from '../components/common/LandingButton/LandingButton';

const Hero = () => {
	return (
		<section className='font-nunito-sans w-full h-full text-white flex items-center justify-around'>
			<div className='flex flex-col z-10 gap-7'>
				<h1 className='text-[64px] leading-[72px] font-nunito-sans font-black text-left max-w-[661px]'>
					Партнерская программа, которая подходит{' '}
					<span className='text-[#e61685] font-nunito-sans'>всем</span>
				</h1>
				<p className='max-w-[586px] font-regular text-title3 font-nunito-sans'>
					Получайте прибыль за трафик! <br /> Привлекайте покупателей на
					платформу, а мы предоставим все необходимые инструменты для вашего
					роста
				</p>
				<LandingButton label='Зарегистрироваться' isYellow />
			</div>
			<div className='z-30 flex flex-col items-center relative after:h-[431px] after:w-[431px] after:top-5 after:left-18 after'>
				<LandingHeroImg className='z-30' />
				<h2 className='text-[36px] font-nunito-sans max-w-[596px] text-center'>
					Зарабатывайте вместе с лучшими AiPro продуктами
				</h2>
			</div>
		</section>
	);
};

export default Hero;
