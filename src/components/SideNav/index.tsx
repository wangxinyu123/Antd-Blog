import React from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'antd'
import { IMenuConfig } from '@/interface/NavMenu'
import styles from './index.module.scss'


const MenuItem = Menu.Item
const NavMenu: React.FC<IMenuConfig> = ({ menu, defaultKeys }) => {
    return (
        <div className={styles.menuItem}>
            <Menu mode='inline' theme='light' defaultSelectedKeys={defaultKeys}>
                {
                    menu?.map((item) => {
                        return (
                            <MenuItem icon={<item.icon />} key={item.key}>
                                <Link to={item.path}>{item.name}</Link>
                            </MenuItem>
                        )
                    })
                }
            </Menu>
        </div>
    )
}

export default NavMenu