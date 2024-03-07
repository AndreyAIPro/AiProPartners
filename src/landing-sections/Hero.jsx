/** @format */

import LandingButton from "../components/common/LandingButton/LandingButton";

const Hero = () => {
	return (
		<section className="w-full flex h-[740px] justify-around max-lg:h-[500px] max-lg:items-center max-sm:flex-col-reverse max-sm:gap-8 max-sm:pt-[70px]">
			<div className="z-10 flex flex-col gap-7 pt-20 max-md:mt-8 max-dm:px-5 max-sm:z-40 max-sm:items-center max-sm:px-[30px] max-sm:mt-0 max-sm:pt-0">
				<h1
					className="max-w-[661px] text-left font-nunito-sans text-[64px] font-black leading-[72px] max-[1400px]:text-[40px] max-[1400px]:leading-[45px] max-md:text-[32px] max-sm:text-center max-sm:text-title2"
					data-aos="fade-right"
				>
					Партнерская программа, которая подходит{" "}
					<span className="font-nunito-sans text-[#e61685]">всем</span>
				</h1>
				<p
					className="font-regular max-w-[586px] font-nunito-sans text-title3 max-md:text-text2 max-sm:text-center"
					data-aos="fade-up"
				>
					Получайте прибыль за трафик! <br /> Привлекайте покупателей на
					платформу, а мы предоставим все необходимые инструменты для вашего
					роста
				</p>
				<LandingButton
					label="Зарегистрироваться"
					isYellow
					href="/registration"
					dataAos="fade"
				/>
			</div>
			<div
				className="after:left-18 after relative z-30 flex flex-col items-center after:top-5 after:h-[431px] after:w-[431px] max-md:after:h-[200px] max-sm:after:w-[400px]"
				data-aos="fade-left"
			>
				<img
					src="src/assets/images/landing/landing-hero-img.svg"
					className="z-30 max-w-[528px] max-sm:max-w-[270px] max-sm:object-cover max-lg:max-w-[400px]"
				/>
				<h2 className="z-30 max-w-[596px] text-center font-nunito-sans text-[36px] max-md:text-text2 max-sm:hidden max-lg:text-[24px]">
					Зарабатывайте вместе с лучшими AiPro продуктами
				</h2>
			</div>
		</section>
	);
};

export default Hero;
