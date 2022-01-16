import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import RefreshIcon from '@mui/icons-material/Refresh';
import SideNav from '../components/SideNav';
import MazeElement from '../components/MazeElement';


import { connect } from 'react-redux';
import { openSideNav } from '../state/actions/sideNavActions'
import { refreshMaze } from '../state/actions/MazeCreationAlgoChangeAction'


interface Props {
    openSideNav: any
    refreshMaze: any
}

const Home: NextPage<Props> = ({ openSideNav, refreshMaze }) => {

    return (
        <div className={styles.container}>
            <Head>
                <title>Online Maze Game powered by AI | By Suraj Jha</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <button className={styles.sideNavToggleButton} onClick={openSideNav}><MenuRoundedIcon /></button>
            <button className={styles.refreshButton} onClick={refreshMaze}><RefreshIcon /></button>
            <SideNav />
            <MazeElement />
        </div>
    )
}




export default connect(null, {openSideNav, refreshMaze})(Home);
