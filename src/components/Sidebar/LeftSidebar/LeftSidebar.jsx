/** @format */

import TelegramLink from '../../common/TelegramLink';
import SidebarNavMenu from '../../SidebarNavMenu';
import SocialLinksList from '../../SocialLinksList';
import LeftSidebarHeader from './LeftSidebarHeader';

const LeftSidebar = () => {
	return (
		<>
			<LeftSidebarHeader />
			<SidebarNavMenu />
			<TelegramLink />
			<SocialLinksList />
		</>
	);
};

export default LeftSidebar;
