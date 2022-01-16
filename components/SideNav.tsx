import type { NextPage } from "next";
import styles from '../styles/SideNav.module.scss';
import { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import { connect } from 'react-redux';
import { closeSideNav } from '../state/actions/sideNavActions'

interface Props {
    visible?: boolean
    closeSideNav: any
}

const SideNav: NextPage<Props> = ({ visible = true, closeSideNav }) => {

    const navClassNames = [styles.sidenav];

    if(visible) {
        navClassNames.push(styles.visible);
    }

    return (
        <nav className={navClassNames.join(" ")}>
            <button className={styles.toggleButton} onClick={closeSideNav}><CloseIcon /></button>
            <div className={styles.header}>Online Maze Game</div>
        </nav>
    )
}

const mapStateToProp = (state) => ({
    visible: state.sideNav.visible
})

export default connect(mapStateToProp, { closeSideNav })(SideNav);