import React from "react";
import styles from './index.module.scss'

const tabArr = [
    { path: '/', name: '基础知识' },
    { path: '/material', name: '物料库' }
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
            </div>
        </div>
    )
}

export default HeaderPages