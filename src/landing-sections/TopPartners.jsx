/** @format */

import TopPartnersList from '../components/TopPartnersList/TopPartnersList';
import LandingSectionHeading from '../components/common/LandingSectionHeading/LandingSectionHeading';

const TopPartners = () => {
	return (
		<section className='flex flex-col pb-[171px] max-sm:px-[30px] max-md:px-10 max-sm:pb-24'>
			<div className='flex flex-col gap-6'>
				<LandingSectionHeading title='Партнеры месяца' dataAos='fate' />
				<h4
					className='text-title3 font-nunito-sans text-white text-center max-sm:text-text2'
					data-aos='fade-left'
				>
					Список обновляется раз в 30 дней. <br /> Каждый может стать лидером!
				</h4>
			</div>
			<TopPartnersList />
		</section>
	);
};

export default TopPartners;
