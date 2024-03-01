/** @format */

import { partnerProgramData } from '../../data/landingData';
import PartnerProgramItem from '../common/PartnerProgramItem/PartnerProgramItem';

const PartnerProgramDetails = () => {
	return (
		<article
			className='max-w-[1025px] w-screen flex flex-col text-white rounded-[30px] bg-article py-[60px] px-11 max-sm:max-w-[558px] max-sm:py-[40px] max-sm:gap-[30px] max-md:max-w-[730px]'
			data-aos='flip-left'
		>
			{partnerProgramData.map((paragraph, index) => (
				<PartnerProgramItem key={index} {...paragraph} />
			))}
		</article>
	);
};

export default PartnerProgramDetails;
