export interface IHeaderItem {
    onClick?: () => void;
    link: string;
    active?: boolean;
    notification?: number | 0;
    title: string;
}

export interface IWelcomeContent {
    title: string,
    buttonText: string,
}

export interface IWelcomeAbout {
    email: string;
    description: string;
}