

import TelegramLink from '../../common/TelegramLink';
import SidebarNavMenu from '../../SidebarNavMenu';
import SocialLinksList from '../../SocialLinksList';
import LeftSidebarHeader from './LeftSidebarHeader';

const LeftSidebar = () => {
    return (
        <>
            <div className="sticky top-0">
                <LeftSidebarHeader />
                <SidebarNavMenu />
                <TelegramLink />
                <SocialLinksList />
            </div>
        </>
    );
};

export default LeftSidebar;
