/** @format */

import { footerLinks } from '../../../data/landingData';
import FooterLinksItem from '../FooterLinksItem/FooterLinksItem';

const FooterLinksList = () => {
	return (
		<ul
			className='flex gap-[50px] max-[1200px]:flex-col max-[1200px]:items-center max-[1200px]:gap-[15px]'
			data-aos='fade-up'
		>
			{footerLinks.map((links, index) => (
				<FooterLinksItem key={index} {...links} />
			))}
		</ul>
	);
};

export default FooterLinksList;
