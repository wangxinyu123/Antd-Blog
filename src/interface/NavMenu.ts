export interface IMenuProps {
    defaultKeys?: any;
    selectedKeys?: string;
    menu: {
        name: string,
        path: string,
        key?: string,
        icon?: any
    }[];
}