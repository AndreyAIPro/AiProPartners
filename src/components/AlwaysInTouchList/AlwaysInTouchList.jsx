

import { alwaysInTouch } from '../../data/landingData';
import AlwaysInTouchItem from '../common/AlwaysInTouchItem/AlwaysInTouchItem';

const AlwaysInTouchList = () => {
	return (
		<ul
			className='flex items-center justify-center bg-in-touch-bg rounded-[20px] max-md:flex-col'
			data-aos='fade-right'
		>
			{alwaysInTouch.map((item, index) => (
				<AlwaysInTouchItem key={index} index={index + 1} {...item} />
			))}
		</ul>
	);
};

export default AlwaysInTouchList;
