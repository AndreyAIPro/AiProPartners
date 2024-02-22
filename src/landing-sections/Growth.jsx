/** @format */

import GrowthList from '../components/GrowthList/GrowthList';
import LandingSectionHeading from '../components/common/LandingSectionHeading/LandingSectionHeading';

const Growth = () => {
	return (
		<section className='flex flex-col px-[120px] pb-[128px] gap-[83px]'>
			<LandingSectionHeading
				title='Рост без ограничений'
				subtitle='Сделайте 3 шага к успеху вместе с нами'
			/>
			<GrowthList />
		</section>
	);
};

export default Growth;
