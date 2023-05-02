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

export interface PostsProps {
    name: string;
    message: string;
    postImage: string;
    timestamp: any
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
    src?: any;
    alt?: string;
}

export interface CardProps {
    name?: string;
    src?: any;
    profile?: any;

}