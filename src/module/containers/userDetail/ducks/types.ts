import { FormComponentProps } from "antd/lib/form";
import { RouteComponentProps } from "react-router-dom";

export interface UserComponentProps extends UserState, RouteComponentProps, AddUserFromProps {
    actions: UserComponenetActions;
}
export interface UserState {
    userDetail: Array<any>;
}
interface UserComponenetActions {
    getUserDetailRequest(): void;
    addUserDetail(data: any): void;
}
export interface AddUserFromProps extends FormComponentProps {
    close(): void;
    addUserDetail(data: any): void;
}