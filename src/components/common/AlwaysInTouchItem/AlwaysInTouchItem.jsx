

import { NavLink } from 'react-router-dom';
import { alwaysInTouch } from '../../../data/landingData';

const AlwaysInTouchItem = ({ href, text, icon, index }) => {
	return (
		<li
			className={`flex items-center justify-center text-white w-[330px] py-[35px] border border-in-touch-border border-y-0 ${index == alwaysInTouch.length ? 'border-r-0 max-md:border-b-0' : index == 1 ? 'border-l-0 max-md:border-t-0' : null} max-md:border max-md:border-x-0 `}
		>
			<NavLink to={href} className='flex gap-x-3'>
				<img src={icon} alt={text} />
				{text}
			</NavLink>
		</li>
	);
};

export default AlwaysInTouchItem;
