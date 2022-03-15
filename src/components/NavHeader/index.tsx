import React from "react";
import { SearchOutlined } from '@ant-design/icons'
import styles from './index.module.scss'

const tabArr = [
    { path: '/', name: '✨基础知识' },
    { path: '/material', name: '🔥物料库' },
    { path: '/dataCenter', name: '📡数据中心' }
]

const HeaderPages: React.FC = () => {
    return (
        <div className={styles.header}>
            <div className={styles.leftNav}>
                <a href='/'>
                    <img src='http://interview.poetries.top/logo.png' />
                    <span>Wysoka 学习笔记</span>
                </a>
            </div>
            <div className={styles.rightNav}>
                <div className={styles.search}>
                    <SearchOutlined className={styles.searchIcon} />
                    <input type='search' className={styles.searchInput} />
                </div>
                {
                    tabArr?.map((item) => {
                        return (
                            <div className={styles.navItem}>
                                <a href={item?.path}>{item.name}</a>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default HeaderPages