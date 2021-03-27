/**
 * User List reducer
 */
import { handleActions } from 'redux-actions';
import { UserActions } from './userActions';


export const USER_INITIAL_STATE: any = {
    userDetail: []

};

const UserReducer = handleActions<any, any>(
    {
        [UserActions.Type.GET_USER_DETAIL_REQUEST]: (state, action) => {
            console.log('action', action)
            return {
                ...state,
                userDetail: action.payload
            }
        },
        [UserActions.Type.ADD_DETAIL_REQUEST]: (state, action) => {
            console.log('action', action)
            return {
                ...state,
                userDetail: action.payload
            }
        }

    }, USER_INITIAL_STATE
);

export default UserReducer;