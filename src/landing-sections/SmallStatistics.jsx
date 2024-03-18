

import SmallStatisticsItem from "../components/common/SmallStatisticsItem/SmallStatisticsItem";
import { statistics } from "../data/landingData";

const SmallStatistics = () => {
	return (
		<section className="w-full flex min-h-[272px] items-center justify-center text-white max-md:py-14">
			<ul className="w-full flex items-center justify-around max-md:grid  max-md:gap-5 max-sm:flex-col max-sm:gap-[50px] max-sm:pt-3 -sm:flex-col">
				{statistics.map((statistic) => (
					<SmallStatisticsItem key={statistic.statistic} {...statistic} />
				))}
			</ul>
		</section>
	);
};

// max-md:grid-cols-2 max-md:grid-rows-2 max-md:justify-items-center

export default SmallStatistics;
