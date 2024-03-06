/** @format */

import SmallStatisticsItem from '../components/common/SmallStatisticsItem/SmallStatisticsItem';
import { statistics } from '../data/landingData';

const SmallStatistics = () => {
	return (
		<section className='flex items-center justify-center w-full text-white min-h-[272px] max-md:py-14'>
			<ul className='flex items-center justify-around w-full max-sm:flex-col max-sm:pt-[150px] max-sm:gap-[50px] max-md:grid max-md:grid-cols-2 max-md:grid-rows-2 max-md:justify-items-center max-md:gap-5'>
				{statistics.map((statistic) => (
					<SmallStatisticsItem key={statistic.statistic} {...statistic} />
				))}
			</ul>
		</section>
	);
};

export default SmallStatistics;
