export interface Props {
    Icon: any;
    title?: string;
    active?:boolean;
    onClick?: object;
}

export interface Contacts {
    name: string;
    src: any;
    active: any;
}

export interface Posts {
    name: string;
    message: string;
    postImage: string;
    timestamp: string;
    userImage: string
}

export interface PostProp {
    Icon: any;
    title: string;
}

export interface WidgetProps {
    Icon: any;
    name?: string;
}

export interface Sess {
    name: string;
    image: string;
    email: string
}

export interface SideProps {
    Icon?: any;
    title?: string;
    src?: string;
    alt?: string;
}

export interface CardProps {
    name?: string;
    src?: string;
    prof?: string;

}