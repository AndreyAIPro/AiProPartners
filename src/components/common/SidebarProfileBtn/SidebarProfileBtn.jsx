/** @format */

import { NavLink } from "react-router-dom";
import { ReactComponent as ProfilePlaceholder } from "../../../assets/images/profile-placeholder.svg";
import { ReactComponent as SettingsIcon } from "../../../assets/images/settings-btn.svg";
import styles from "./sidebar-profile-btn.module.scss";

const SidebarProfileBtn = () => {
    return (
        <div className={styles.btn}>
            <div className={styles.btn__profile}>
                <ProfilePlaceholder />
                <h3>Имя Фамилия</h3>
            </div>
            <NavLink
                to="/preferences"
                className={styles.settings__btn}
                style={({ isActive }) => {
                    return {
                        backgroundColor: isActive ? "#24a1e0" : "",
                        borderRadius: "15px",
                    };
                }}
            >
                <SettingsIcon />
            </NavLink>
        </div>
    );
};

export default SidebarProfileBtn;
