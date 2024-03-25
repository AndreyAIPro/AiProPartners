import { howStart } from "../../data/landingData";
import HowStartItem from "../common/HowStartItem/HowStartItem";

const HowStartList = () => {
	return (
		<ul className="w-full flex h-fit flex-wrap justify-center gap-x-[102px] gap-y-[112px] max-md:grid max-md:grid-cols-2 max-md:grid-rows-2 max-md:justify-items-center max-md:gap-y-14 max-sm:flex max-sm:flex-col max-sm:gap-0 max-sm:gap-y-[50px] max-sm:px-7 max-[590px]:justify-normal max-[590px]:gap-8">
			{howStart.map((item, i) => (
				<HowStartItem
					key={item.title}
					index={i + 1}
					{...item}
					dataAos="zoom-out"
				/>
			))}
		</ul>
	);
};

export default HowStartList;
