import { ReactComponent as FacebookIcon } from "../../assets/images/socialLinks/facebook.svg";
import { ReactComponent as InstagramIcon } from "../../assets/images/socialLinks/instagram.svg";
import { ReactComponent as TelegramIcon } from "../../assets/images/socialLinks/telegram.svg";

const Links = [
	{ icon: <TelegramIcon />, href: "#" },
	{ icon: <InstagramIcon />, href: "#" },
	{ icon: <FacebookIcon />, href: "#" },
];

const SocialLinksList = () => {
	return (
		<ul className="w-full flex items-center justify-around gap-5 px-5">
			{Links.map((link, i) => (
				<a key={i} href={link.href}>
					{link.icon}
				</a>
			))}
			<p className="text-text4 font-normal">Подписывайся на нас в соцсетях</p>
		</ul>
	);
};

export default SocialLinksList;
