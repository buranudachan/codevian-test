/**
 * Reducer List
 */

import UserReducer, { USER_INITIAL_STATE } from '../containers/userDetail/ducks/userReducers';

const reducerList = {
    userStateData: UserReducer,
};

export default reducerList;

type Action = 'PUSH' | 'POP' | 'REPLACE';
const ActionData: Action = 'POP';
export const reducerInitialState = {
    router: { location: { pathname: '', search: '', state: undefined, hash: '' }, action: ActionData },
    userStateData: USER_INITIAL_STATE,
};