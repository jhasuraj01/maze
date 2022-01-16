import type { NextPage } from "next";
import styles from '../styles/SideNav.module.scss';
import { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import { connect } from 'react-redux';
import { closeSideNav } from '../state/actions/sideNavActions'
import DropDown from "./DropDown";
import {createWithQueue, createWithStack} from "../state/actions/MazeCreationAlgoChangeAction"



const algorithmOptions: SelectionOption[] = [
    { value: 'dfs', label: 'Depth First Search' },
    { value: 'bfs', label: 'Breadth First Search' },
]

interface Props {
    visible?: boolean
    closeSideNav: any
    createWithQueue: any
    createWithStack: any
}

const SideNav: NextPage<Props> = ({ visible = true, closeSideNav, createWithQueue, createWithStack }) => {

    const navClassNames = [styles.sidenav];

    if(visible) {
        navClassNames.push(styles.visible);
    }

    const handleSelectionChange = (event) => {
        if(event.target.value === 'dfs') {
            createWithStack();
        }
        else {
            createWithQueue();
        }
    }

    return (
        <nav className={navClassNames.join(" ")}>
            <button className={styles.toggleButton} onClick={closeSideNav}><CloseIcon /></button>
            <div className={styles.header}>Online Maze Game</div>
            <br></br>
            <DropDown options={algorithmOptions} defaultValue="dfs" title="Algorithm" onChange={handleSelectionChange}/>
        </nav>
    )
}

const mapStateToProp = (state) => ({
    visible: state.sideNav.visible
})

export default connect(mapStateToProp, { closeSideNav, createWithQueue, createWithStack })(SideNav);