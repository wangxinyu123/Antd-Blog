import React from 'react';
import SideNav from '@/components/SideNav'
import { materialConfig } from '@/constants/menuConfig'
import styles from './index.module.scss'

const MaterialItem: React.FC = (props) => {
    return (
        <div className={styles.materialContain}>
            {/* <SideNav menu={materialConfig} defaultKeys={'1'} /> */}
            {props.children}
        </div>
    )
}

export default MaterialItem
