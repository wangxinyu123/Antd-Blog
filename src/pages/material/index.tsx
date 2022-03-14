import React from 'react';
import NavHeader from '@/components/NavHeader'
import styles from './index.module.scss'

const MaterialItem: React.FC = () => {
    return (
        <div className={styles.materialContain}>
            <NavHeader />
            MaterialItem物料库
        </div>
    )
}

export default MaterialItem
