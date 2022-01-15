import type { NextPage } from "next";
import styles from '../styles/SideNav.module.scss';
import { useState } from "react";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

interface Props {
    visible?: boolean
    visibilityToggler: () => void
}

const SideNav: NextPage<Props> = ({ visible = true, visibilityToggler }) => {

    const navClassNames = [styles.sidenav];

    if(visible) {
        navClassNames.push(styles.visible);
    }

    return (
        <nav className={navClassNames.join(" ")}>
            <button className={styles.toggleButton} onClick={visibilityToggler}><MenuRoundedIcon /></button>
            <div className={styles.header}>Online Maze Game</div>
        </nav>
    )
}

export default SideNav;