import { Filter } from '../types';
import { FilterAction } from '../actions/filter';
import { SET_FILTER } from '../constants';

export interface FilterState {
    readonly filter: Filter,
}

const initialState = {
    filter: Filter.ALL,
}

export default function filter(state: FilterState = initialState, action: FilterAction ): FilterState {
    switch (action.type) {
        case SET_FILTER: {
            return {
                ...state,
                filter: action.filter,
            }
        }
        default:
            return state;
    }
}