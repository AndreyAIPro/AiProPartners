import { useParams } from "react-router-dom";
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
import { useUser } from "../../hooks/useUser";

const Landing = () => {
	const { user } = useUser();
	const { refid } = useParams();
	const refLink = refid === undefined ? "" : "/home" + refid;

	return (
		<main className="overflow-hidden bg-dark-blue">
			<section className="hero-bg hero-after relative box-border h-[740px] px-[123px] py-[40px] text-white max-lg:px-[30px] max-sm:p-0">
				<LandingNav user={user} refLink={refLink} />
				<Hero user={user} refLink={refLink} />
			</section>
			<SmallStatistics />
			<StartToday user={user} refLink={refLink} />
			<OurPartner />
			<TopPartners />
			<Growth />
			<Enjoy user={user} refLink={refLink} />
			<WhyAIPRO />
			<HowStart />
			<PartnerProgram user={user} refLink={refLink} />
			<AlwaysInTouch />
			<Footer />
		</main>
	);
};

export default Landing;
