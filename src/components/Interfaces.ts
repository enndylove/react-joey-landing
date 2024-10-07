export interface IHeaderItem {
    onClick?: () => void,
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

export interface IXTrackText {
    text: string,
}

export interface ITestimonialsContent {
    title: string,
    description: string,
    author: string,
    info: string,
}

export interface IFooterTalk {
    title: string,
    email: string,
}

export interface IFooterContent {
    licence_year: string,
    licence_madeBy: string,
    dribble_link: string,
    instagram_link: string,
    linkedIn_link: string,
}

export interface IFooterItem {
    link: string,
    text: string,
}