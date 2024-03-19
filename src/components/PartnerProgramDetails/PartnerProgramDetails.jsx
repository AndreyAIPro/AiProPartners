

import { partnerProgramData } from "../../data/landingData";
import PartnerProgramItem from "../common/PartnerProgramItem/PartnerProgramItem";

const PartnerProgramDetails = () => {
	return (
		<article
			className="w-full flex max-w-[1025px] flex-col rounded-[30px] bg-article px-11 py-[60px] text-white max-md:max-w-[730px] max-sm:max-w-[558px] max-sm:gap-[30px] max-sm:py-[40px] max-sm:px-5"
		>
			{partnerProgramData.map((paragraph, index) => (
				<PartnerProgramItem key={index} {...paragraph} />
			))}
		</article>
	);
};

export default PartnerProgramDetails;
