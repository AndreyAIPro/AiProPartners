/** @format */

import { growth } from '../../data/landingData';
import GrowthListItem from '../common/GrowthListItem/GrowthListItem';

const GrowthList = () => {
	return (
		<ul className='flex flex-col items-start max-sm:gap-5 max-[1200px]:gap-10'>
			{growth.map((item) => (
				<GrowthListItem key={item.title} {...item} dataAos='fade-up' />
			))}
		</ul>
	);
};

export default GrowthList;
