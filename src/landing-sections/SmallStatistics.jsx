/** @format */

import SmallStatisticsItem from '../components/common/SmallStatisticsItem/SmallStatisticsItem';
import { statistics } from '../data/landingData';

const SmallStatistics = () => {
	return (
		<section className='w-full text-white'>
			<ul className='flex items-center justify-between'>
				{statistics.map((statistic) => (
					<SmallStatisticsItem key={statistic.statistic} {...statistic} />
				))}
			</ul>
		</section>
	);
};

export default SmallStatistics;
