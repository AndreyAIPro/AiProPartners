/** @format */

import LandingNav from "../../components/LandingNav/LandingNav";
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
} from "../../landing-sections";

const Landing = () => {
	return (
		<main className="overflow-hidden bg-dark-blue">
			<section className="hero-bg hero-after relative box-border h-[740px] px-[123px] py-[40px] text-white max-lg:px-[30px] max-sm:p-0">
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
