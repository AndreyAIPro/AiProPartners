/** @format */

import { growth } from '../../data/landingData';
import GrowthListItem from '../common/GrowthListItem/GrowthListItem';

const GrowthList = () => {
	return (
		<ul className='flex flex-col items-start'>
			{growth.map((item) => (
				<GrowthListItem key={item.title} {...item} />
			))}
		</ul>
	);
};

export default GrowthList;
