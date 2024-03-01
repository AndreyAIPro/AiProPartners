/** @format */

import LandingNav from '../../components/LandingNav/LandingNav';
import {
	AlwaysInTouch,
	Enjoy,
	Footer,
	Growth,
	Hero,
	HowStart,
	OurPartner,
	PartnerProgram,
	SmallStatistics,
	StartToday,
	TopPartners,
	WhyAIPRO,
} from '../../landing-sections';

const Landing = () => {
	return (
		<main className='overflow-hidden relative bg-dark-blue'>
			<section className='box-border after:absolute after:h-[763px] after:w-full after:top-[-23px] after:left-0 after:z-[1] after:bg-gradient-to-t  after:from-dark-blue bg-gradient-to-r from-[#7000ff] from-1.33% to-[#c000f0] to-96% text-white py-[40px] px-[123px] max-sm:after:hidden max-sm:p-0 max-lg:px-[30px] max-lg:after:max-h-[752px] max-md:after:max-h-[541px]'>
				<LandingNav />
				<Hero />
			</section>
			<SmallStatistics />
			<StartToday />
			<OurPartner />
			<TopPartners />
			<Growth />
			<Enjoy />
			<WhyAIPRO />
			<HowStart />
			<PartnerProgram />
			<AlwaysInTouch />
			<Footer />
		</main>
	);
};

export default Landing;
