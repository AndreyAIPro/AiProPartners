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
		<div className="mt-[55px] flex">
			<ul
				className={`w-full  flex  justify-around gap-5 px-5  ${isExpandedRightSidebar ? "max-xl:flex-col" : "max-xl:flex-row"} `}
			>
				{Links.map((link, i) => (
					<a key={i} href={link.href}>
						{link.icon}
					</a>
				))}
			</ul>
			<p className=" text-wrap text-text4 font-normal max-2xl:hidden ">
				Подписывайся на нас в соцсетях
			</p>
		</div>
	);
};

export default SocialLinksList;
