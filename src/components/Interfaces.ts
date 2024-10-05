export interface IHeaderItem {
    onClick?: () => void,
    link: string,
    active?: boolean,
    notification?: number | 0,
    title: string,
}

export interface IWelcomeContent {
    title: string,
    buttonText: string,
}

export interface IWelcomeAbout {
    email: string,
    description: string,
}

export interface IProjectContent {
    title: string,
    description: string,
    link: string,
}

export interface IProjectCard {
    id: number,
    imageName: string,
    title: string,
    description: string,
}

export interface IExpertiseCard {
    id: number,
    title: string,
    description: string,
}