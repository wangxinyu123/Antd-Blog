import React from 'react';
import NavHeader from '@/components/NavHeader'
import styles from './index.module.scss'

const DataCenter: React.FC = () => {
    return (
        <div className={styles.dataContain}>
            <NavHeader />DataMarket数据大盘
        </div>
    )
}

export default DataCenter;