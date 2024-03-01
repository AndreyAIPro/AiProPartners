/** @format */

import LandingPartnersList from '../components/LandingPartnersList/LandingPartnersList';
import LandingSectionHeading from '../components/common/LandingSectionHeading/LandingSectionHeading';

const OurPartner = () => {
	return (
		<section className='flex flex-col items-center pt-[120px] pb-[73px] max-sm:px-[30px] max-sm:text-center w-full max-lg:px-[30px] max-xl:px-[30px]'>
			<LandingSectionHeading
				title='Кто может стать нашим партнером?'
				subtitle='Вы можете зарабатывать больше в любой сфере'
				dataAos='fade-left'
			/>
			<LandingPartnersList />
		</section>
	);
};

export default OurPartner;
