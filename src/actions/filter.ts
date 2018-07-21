import { SET_FILTER } from '../constants';
import { Filter } from '../types';

export interface SetFilter {
    type: typeof SET_FILTER,
    filter: Filter,
}

export function setFilter(filter: Filter): SetFilter {
    return {
        type: SET_FILTER,
        filter,
    }
}

export type FilterAction = SetFilter;