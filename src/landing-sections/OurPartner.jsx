/** @format */

import LandingPartnersList from '../components/LandingPartnersList/LandingPartnersList';
import LandingSectionHeading from '../components/common/LandingSectionHeading/LandingSectionHeading';

const OurPartner = () => {
	return (
		<section className='flex flex-col items-center pt-[120px] pb-[73px]'>
			<LandingSectionHeading
				title='Кто может стать нашим партнером?'
				subtitle='Вы можете зарабатывать больше в любой сфере'
			/>
			<LandingPartnersList />
		</section>
	);
};

export default OurPartner;
