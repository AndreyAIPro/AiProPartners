import { ReactComponent as FacebookIcon } from "../../assets/images/socialLinks/facebook.svg";
import { ReactComponent as InstagramIcon } from "../../assets/images/socialLinks/instagram.svg";
import { ReactComponent as TelegramIcon } from "../../assets/images/socialLinks/telegram.svg";

const Links = [
	{ icon: <TelegramIcon />, href: "#" },
	{ icon: <InstagramIcon />, href: "#" },
	{ icon: <FacebookIcon />, href: "#" },
];

const SocialLinksList = ({ isExpandedRightSidebar }) => {
	return (
		<>
			<ul
				className={`w-full mt-[55px] flex items-center justify-around gap-5 px-5 max-xl:mt-[300px] ${isExpandedRightSidebar ? "max-xl:flex-row" : "max-xl:flex-col"}`}
			>
				{Links.map((link, i) => (
					<a key={i} href={link.href}>
						{link.icon}
					</a>
				))}
				<p className="text-wrap text-text4 font-normal max-xl:hidden">
					Подписывайся на нас в соцсетях
				</p>
			</ul>
		</>
	);
};

export default SocialLinksList;
