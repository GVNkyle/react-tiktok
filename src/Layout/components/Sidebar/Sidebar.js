import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import {
    HomeIcon,
    UserGroupIcon,
    LiveIcon,
    HomeActiveIcon,
    UserGroupActiveIcon,
    LiveActiveIcon
} from '~/components/Icons'
import styles from './Sidebar.module.scss';
import config from '~/config';
import Menu, { MenuItem } from './Menu';
import SuggestedAccounts from '~/components/SuggestedAccounts';
import * as userService from '~/services/userService';

const cx = classNames.bind(styles);

const PER_PAGE = 5;

function Sidebar() {
    const [SuggestedUsers, setSuggestedUsers] = useState([]);

    useEffect(() => {
        const getSuggestedUsers = async () => {
            const results = await userService.getSuggested({ page: 1, perPage: PER_PAGE })
            setSuggestedUsers(prevUsers => [...prevUsers, ...results]);
        }

        getSuggestedUsers();
    }, []);

    return (
        <aside className={cx('wrapper')}>
            <Menu >
                <MenuItem title="For you" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
                <MenuItem title="Following" to={config.routes.following} icon={<UserGroupIcon />} activeIcon={<UserGroupActiveIcon />} />
                <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} />
            </Menu>
            <SuggestedAccounts label='Suggested accounts' data={SuggestedUsers} />
            {/* <SuggestedAccounts label='Following accounts' /> */}
        </aside>
    );
}

export default Sidebar;