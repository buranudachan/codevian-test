/**
 * Global Interface
 */

import { RouterState } from 'connected-react-router';
import { UserState } from '../containers/userDetail/ducks/types';

// Application State
export interface ApplicationState {
    router: RouterState;
    userStateData: UserState,
}
