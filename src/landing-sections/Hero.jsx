/** @format */

import LandingButton from '../components/common/LandingButton/LandingButton';

const Hero = () => {
	return (
		<section className='font-nunito-sans relative w-full h-full text-white flex items-center justify-around max-sm:flex-col-reverse max-sm:after:h-full max-sm:after:absolute max-sm:after:w-full max-sm:after:bottom-0 max-sm:after:left-0 max-sm:after:z-[1] max-sm:after:bg-gradient-to-t  max-sm:after:from-dark-blue max-sm:px-[30px] max-sm:pt-[10px]'>
			<div className='flex flex-col z-10 gap-7 max-sm:px-[30px] max-sm:items-center max-sm:z-40 max-md:mt-8'>
				<h1
					className='text-[64px] leading-[72px] font-nunito-sans font-black text-left max-w-[661px] max-sm:text-center max-sm:text-title max-[1400px]:leading-[45px] max-[1400px]:text-[40px] max-md:text-[32px]'
					data-aos='fade-right'
				>
					Партнерская программа, которая подходит{' '}
					<span className='text-[#e61685] font-nunito-sans'>всем</span>
				</h1>
				<p
					className='max-w-[586px] font-regular text-title3 font-nunito-sans max-sm:text-center max-md:text-text2'
					data-aos='fade-up'
				>
					Получайте прибыль за трафик! <br /> Привлекайте покупателей на
					платформу, а мы предоставим все необходимые инструменты для вашего
					роста
				</p>
				<LandingButton
					label='Зарегистрироваться'
					isYellow
					href='/registration'
					dataAos='fade'
				/>
			</div>
			<div
				className='z-30 flex flex-col items-center relative after:h-[431px] after:w-[431px] after:top-5 after:left-18 after max-sm:after:w-[400px] max-md:after:h-[200px]'
				data-aos='fade-left'
			>
				<img
					src='src	/assets/images/landing/landing-hero-img.svg'
					className='z-30 max-sm:max-w-[270px] max-sm:object-cover'
				/>
				<h2 className='text-[36px] font-nunito-sans max-w-[596px] text-center max-sm:hidden max-md:text-text2 z-30'>
					Зарабатывайте вместе с лучшими AiPro продуктами
				</h2>
			</div>
		</section>
	);
};

export default Hero;
