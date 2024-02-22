/** @format */

import TopPartnersList from '../components/TopPartnersList/TopPartnersList';
import LandingSectionHeading from '../components/common/LandingSectionHeading/LandingSectionHeading';

const TopPartners = () => {
	return (
		<section className='flex flex-col pb-[171px]'>
			<div className='flex flex-col gap-6'>
				<LandingSectionHeading title='Партнеры месяца' />
				<h4 className='text-title3 font-nunito-sans text-white text-center'>
					Список обновляется раз в 30 дней. <br /> Каждый может стать лидером!
				</h4>
			</div>
			<TopPartnersList />
		</section>
	);
};

export default TopPartners;
