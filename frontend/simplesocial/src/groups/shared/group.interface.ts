import { GroupUser } from './groupuser.interface';

export interface Group{
    id:number;
    description: string;
    name:string;
    slug:string;
    members:GroupUser[];
    adminuser: GroupUser;
}