import { User } from './User'

export interface Chat {
    id: string;
    regTime: number;
    modTime: number;
    writer: User;
    message: string;
    roomId: string;
}

export interface Room {
    id: string;
    sequence: number;
}

export interface DirectChatRoom extends Room {
    elice: User;
    bob: User;
}

export interface GroupChatRoom extends Room {
    owner: User;
    admins: User[];
    members: User[];
}
