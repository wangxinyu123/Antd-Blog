import React from 'react';
import NavHeader from '@/components/NavHeader'
import styles from './index.module.scss'

const HomePage: React.FC = () => {
    return (
        <div className={styles.homeContain}>
            <NavHeader />
            HomePage
        </div>
    )
}

export default HomePage
