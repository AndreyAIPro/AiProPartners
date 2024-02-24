/** @format */

import { ReactComponent as FacebookIcon } from '../../assets/images/socialLinks/facebook.svg';
import { ReactComponent as InstagramIcon } from '../../assets/images/socialLinks/instagram.svg';
import { ReactComponent as TelegramIcon } from '../../assets/images/socialLinks/telegram.svg';
import styles from './social-links-list.module.scss';

const Links = [
	{ icon: <TelegramIcon />, href: '#' },
	{ icon: <InstagramIcon />, href: '#' },
	{ icon: <FacebookIcon />, href: '#' },
];

const SocialLinksList = () => {
	return (
		<ul className={styles.links__list}>
			{Links.map((link, i) => (
				<a key={i} href={link.href}>
					{link.icon}
				</a>
			))}
			<p className={styles.list__text}>Подписывайся на нас в соцсетях</p>
		</ul>
	);
};

export default SocialLinksList;
