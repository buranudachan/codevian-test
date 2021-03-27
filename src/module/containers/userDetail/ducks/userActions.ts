import { createAction } from 'redux-actions';
import { getUserDetails } from '../../../service/api';


export namespace UserActions {
    export enum Type {
        GET_USER_DETAIL_REQUEST = 'GET_USER_DETAIL_DETAIL_REQUEST',
        GET_USER_DETAIL_RESPONSE = 'GET_USER_DETAIL_RESPONSE',
        ADD_DETAIL_REQUEST = 'ADD_DETAIL_REQUEST',
    }

    export const getUserDetailRequest = createAction(Type.GET_USER_DETAIL_REQUEST, async () => {
        const data: any = await getUserDetails();
        if (data.success) {
            getUserDetailResponse(data.success.data.data);
        }

    });
    export const getUserDetailResponse = createAction(Type.GET_USER_DETAIL_RESPONSE, (data: any) => data);

    export const addUserDetail = createAction(
        Type.ADD_DETAIL_REQUEST,
        (data: any) => data
    );
}