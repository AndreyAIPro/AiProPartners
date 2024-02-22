/** @format */

import { partners } from '../../data/landingData';
import LandingPartnersListItem from '../common/LandingPartnersListItem/LandingPartnersListItem';

const LandingPartnersList = () => {
	return (
		<ul className='flex gap-10 mt-[100px]'>
			{partners.map((partner) => (
				<LandingPartnersListItem key={partner.title} {...partner} />
			))}
		</ul>
	);
};

export default LandingPartnersList;
