

import { whyAIPRO } from '../../data/landingData';
import WhyAIPROListItem from '../common/WhyAIPROListItem/WhyAIPROListItem';

const WhyAIPROList = () => {
	return (
		<ul className='flex flex-wrap max-w-[1016px] h-fit gap-5 max-sm:px-[30px] max-lg:justify-center'>
			{whyAIPRO.map((reason, index) => (
				<WhyAIPROListItem key={index} {...reason} dataAos='zoom' />
			))}
		</ul>
	);
};

export default WhyAIPROList;
