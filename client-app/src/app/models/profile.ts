import { User } from "./user";

export interface IProfile {
    userName: string;
    displayName: string;
    image?: string;
    bio?: string;
    followersCount: number;
    followingCount: number;
    following: boolean;
    photos?: Photo[];
}

export class Profile implements IProfile {
    constructor(user: User) {
        this.userName = user.userName;
        this.displayName = user.displayName;
        this.image = user.image;
    }

    userName: string;
    displayName: string;
    image?: string;
    bio?: string;
    followersCount = 0;
    followingCount = 0;
    following = false;
    photos?: Photo[];
}

export interface Photo {
    id: string;
    url: string;
    isMain: boolean;
}