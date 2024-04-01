import { ReactComponent as Logo } from "../assets/images/logo.svg";
import FooterLinksList from "../components/common/FooterLinksList/FooterLinksList";

const Footer = () => {
	return (
		<footer className="w-full flex justify-center gap-[50px] pb-10 pt-[32px] text-[40px] text-white max-sm:hidden">
			<div className="flex items-center gap-3">
				<span className="uppercase">AIPRO</span>
				<Logo />
			</div>
			<FooterLinksList />
		</footer>
	);
};

export default Footer;
