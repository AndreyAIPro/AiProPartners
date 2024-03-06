/** @format */

import { ReactComponent as Logo } from '../assets/images/logo.svg';
import FooterLinksList from '../components/common/FooterLinksList/FooterLinksList';

const Footer = () => {
	return (
		<footer className='flex justify-center gap-[50px] w-full pt-[32px] pb-10 text-white text-[40px] max-sm:hidden'>
			<div className='flex items-center gap-3' data-aos='fade-up'>
				<span className='uppercase'>AIPRO</span>
				<Logo />
			</div>
			<FooterLinksList />
		</footer>
	);
};

export default Footer;
