import { RegularUsersService } from "../services/regular-users.service";

export class RegularUsers
{
    constructor
    (
        public userId?:number,
        public userName?: string,
        public cellphoneUserNumber?:number,
        public recommendedDriverCode?:number
    ){}
}

