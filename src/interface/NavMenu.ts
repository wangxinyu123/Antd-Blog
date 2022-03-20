export interface IMenuProps {
    defaultKeys?: any;
    menu: {
        name: string,
        path: string,
        key?: string,
        icon?: any
    }[];
}