/**
 * Selectors for User Detail
 */
import { createSelector } from 'reselect';
import { ApplicationState } from '../../../app-ducks/types';
import { UserState } from './types';

export const fetchUserData = (state: ApplicationState) => state.userStateData;

const userSelectors = {
    getUserData: createSelector(
        [fetchUserData],
        (data: UserState) => data
    )
};

export default userSelectors;