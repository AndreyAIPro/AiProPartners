/** @format */

import { partners } from '../../data/landingData';
import LandingPartnersListItem from '../common/LandingPartnersListItem/LandingPartnersListItem';

const LandingPartnersList = () => {
	return (
		<ul className='flex gap-10 mt-[100px] max-sm:flex-col max-[1200px]:w-full max-sm:items-center max-[1200px]:grid max-[1200px]:grid-cols-2 max-[1200px]:grid-rows-2 max-[1200px]:justify-items-center'>
			{partners.map((partner) => (
				<LandingPartnersListItem
					key={partner.title}
					{...partner}
					dataAos='fade-down'
				/>
			))}
		</ul>
	);
};

export default LandingPartnersList;
