import { IUser } from './user.model';

export interface IUserRegisterResponse {
    status: Number;
    response: IUser;
}