

import { NavLink } from 'react-router-dom';

const FooterLinksItem = ({ title, items }) => {
	return (
		<div className={`flex items-center text-text3 ${title ? 'gap-3' : null}`}>
			{title}
			{items.map((item) => (
				<li
					className={`flex items-center ${item.icon ? 'gap-3' : 'mr-4'}`}
					key={item.title}
				>
					{item.icon ? <img src={item.icon} alt={item.title} /> : null}
					<NavLink key={item.title} to={item.href}>
						{item.title}
					</NavLink>
				</li>
			))}
		</div>
	);
};

export default FooterLinksItem;
