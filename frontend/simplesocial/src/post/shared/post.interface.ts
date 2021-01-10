import { PostGroup } from './post-group.interface';
import { PostUser } from './post-user.interface';

export interface Post{
    id:number;
    user:PostUser;
    created_at:string;
    message:string;
    message_html:string;
    group: PostGroup;
}