/** @format */

import LandingNav from '../../components/LandingNav/LandingNav';
import Enjoy from '../../landing-sections/Enjoy';
import Growth from '../../landing-sections/Growth';
import Hero from '../../landing-sections/Hero';
import OurPartner from '../../landing-sections/OurPartner';
import SmallStatistics from '../../landing-sections/SmallStatistics';
import StartToday from '../../landing-sections/StartToday';
import TopPartners from '../../landing-sections/TopPartners';
import WhyAIPRO from '../../landing-sections/WhyAIPRO';

const Landing = () => {
	return (
		<main className='relative bg-dark-blue'>
			<section className='box-border after:absolute after:h-[763px] after:w-full after:top-[-23px] after:left-0 after:content-[""]  after:bg-gradient-to-t  after:from-dark-blue bg-gradient-to-r from-[#7000ff] from-1.33% to-[#c000f0] to-96% text-white py-[40px] px-[123px]'>
				<LandingNav />
				<Hero />
			</section>
			<section className='flex items-center bg-dark-blue h-[272px] px-[203px]'>
				<SmallStatistics />
			</section>
			<StartToday />
			<OurPartner />
			<TopPartners />
			<Growth />
			<Enjoy />
			<WhyAIPRO />
		</main>
	);
};

export default Landing;
