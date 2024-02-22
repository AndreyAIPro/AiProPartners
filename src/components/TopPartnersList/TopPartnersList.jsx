/** @format */

import { TopPartners } from '../../data/landingData';
import TopPartnersItem from '../common/TopPartnersItem/TopPartnersItem';

const TopPartnersList = () => {
	return (
		<ul className='flex flex-col items-center justify-center gap-5 mt-16'>
			{TopPartners.map((partner) => (
				<TopPartnersItem key={partner.profit} {...partner} />
			))}
		</ul>
	);
};

export default TopPartnersList;
