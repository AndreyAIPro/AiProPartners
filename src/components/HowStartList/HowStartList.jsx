/** @format */

import { howStart } from '../../data/landingData';
import HowStartItem from '../common/HowStartItem/HowStartItem';

const HowStartList = () => {
	return (
		<ul className='flex flex-wrap gap-y-[112px] w-full justify-center h-fit max-sm:gap-0 max-sm:gap-y-[50px] max-sm:justify-normal max-md:grid max-md:grid-cols-2 max-md:grid-rows-2 max-md:justify-items-center max-md:gap-y-14 max-sm:px-7'>
			{howStart.map((item, i) => (
				<HowStartItem
					key={item.title}
					index={i + 1}
					{...item}
					dataAos='zoom-out'
				/>
			))}
		</ul>
	);
};

export default HowStartList;
