import React from 'react';
import NavHeader from '@/components/NavHeader'
import styles from './index.module.scss'

const ProductPages: React.FC = () => {
    return (
        <div className={styles.pageContain}>
            <NavHeader />
        </div>
    )
}

export default ProductPages