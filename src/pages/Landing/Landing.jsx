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
		<main className="relative overflow-hidden bg-dark-blue">
			<section className="after:w-full from-1.33% to-96% box-border bg-gradient-to-r from-[#7000ff] to-[#c000f0] px-[123px]  py-[40px] text-white after:absolute after:left-0 after:top-[-23px] after:z-[1] after:h-[763px] after:bg-gradient-to-t after:from-dark-blue max-lg:px-[30px] max-lg:after:max-h-[752px] max-md:after:max-h-[541px] max-sm:p-0 max-sm:after:hidden">
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
