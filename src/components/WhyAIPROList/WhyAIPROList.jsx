/** @format */

import { whyAIPRO } from '../../data/landingData';
import WhyAIPROListItem from '../common/WhyAIPROListItem/WhyAIPROListItem';

const WhyAIPROList = () => {
	return (
		<ul className='flex flex-wrap max-w-[1016px] gap-5'>
			{whyAIPRO.map((reason) => (
				<WhyAIPROListItem key={reason.id} {...reason} />
			))}
		</ul>
	);
};

export default WhyAIPROList;
