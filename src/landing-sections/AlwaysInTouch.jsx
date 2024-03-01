/** @format */
import AlwaysInTouchList from '../components/AlwaysInTouchList/AlwaysInTouchList';
import LandingSectionHeading from '../components/common/LandingSectionHeading/LandingSectionHeading';

const AlwaysInTouch = () => {
	return (
		<section className='pt-[151px] bg-reuse-bg flex flex-col gap-6 items-center relative h-[382px] w-full after:h-full after:max-h-[180px] after:w-full after:bg-in-touch after:bg-no-repeat after:bg-center after:absolute max-md:h-fit max-md:pb-14 max-md:bg-mobile-footer max-md:bg-no-repeat max-md:bg-cover'>
			<LandingSectionHeading
				title='Всегда на связи'
				isUpper
				dataAos='fade-left'
			/>
			<AlwaysInTouchList />
		</section>
	);
};

export default AlwaysInTouch;
