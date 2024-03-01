/** @format */

import { NavLink } from 'react-router-dom';

const Link = ({ href, title, path }) => {
	return (
		<NavLink
			to={href}
			className={`font-nunito-sans font-bold ${path === href ? 'text-white' : `text-light-gray`}`}
		>
			{title}
		</NavLink>
	);
};

export default Link;
