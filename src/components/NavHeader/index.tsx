import React, { useRef } from "react";
import { Link } from 'react-router-dom'
import { SearchOutlined } from '@ant-design/icons'
import Darkreader from 'react-darkreader'
import styles from './index.module.scss'

interface IHeaderProps {
    theme: string;
    getTheme: (val: boolean) => void
}

const tabArr = [
    { path: '/', name: '✨基础知识' },
    { path: '/material', name: '🔥物料库' },
    { path: '/dataCenter', name: '📡数据中心' }
]

const HeaderPages: React.FC<IHeaderProps> = ({ theme, getTheme }) => {
    const themeRef = useRef(theme);

    return (
        <div className={styles.header}>
            <div className={styles.leftNav}>
                <Link to='/'>
                    <img src={require('@/image/blog_icon.png')} />
                    <span>Wysoka 学习笔记</span>
                </Link>
            </div>
            <div className={styles.rightNav}>
                <div className={styles.search}>
                    <SearchOutlined className={styles.searchIcon} />
                    <input type='search' className={styles.searchInput} />
                </div>
                <Darkreader defaultDarken={themeRef.current === 'light' || themeRef.current === null ? false : true} onChange={(val) => {
                    getTheme(val);
                    val ? localStorage.setItem('dark_theme', 'dark') : localStorage.setItem('dark_theme', 'light')
                }} />
                {
                    tabArr?.map((item, index) => {
                        return (
                            <div className={styles.navItem} key={index}>
                                <Link to={item?.path}>{item.name}</Link>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default HeaderPages