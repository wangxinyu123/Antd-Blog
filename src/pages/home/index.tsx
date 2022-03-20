import React from 'react';
import { Link } from 'react-router-dom'
import styles from './index.module.scss'

const dataArr = [
    { name: '基础知识', detail: '整理日常开发过程中遇到的问题' },
    { name: '组件封装', detail: '提炼高复用的业务组件' },
    { name: '数据可视化', detail: '汇总数据看板' }
]
const HomePage: React.FC = () => {
    return (
        <div className={styles.homeContain}>
            <div className={styles.contain}>
                <div className={styles.logo}>
                    <img src={require('@/image/me.png')} />
                </div>
                <h1 className={styles.title}>Wysoka 学习笔记</h1>
                <div className={styles.quickBtn}>
                    <Link to='/product'>快速了解 →</Link>
                </div>
                <div className={styles.introduce}>
                    {
                        dataArr?.map((item, index) => {
                            return (
                                <div className={styles.introduceDesc} key={index}>
                                    <h2>{item.name}</h2>
                                    <p className={styles.detail}>{item.detail}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default HomePage
