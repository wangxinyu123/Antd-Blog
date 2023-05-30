export interface IMenuConfig{
    defaultKeys?: any;
    selectedKeys?: string;
    menu: {
        name: string,
        path: string,
        key?: string,
        icon?: any
    }[];
}