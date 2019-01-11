import {FETCH_ADS} from '../actions/ActionsTypes';

const initState = [];

export default function(state = initState, action) {
    switch(action.type) {
        case FETCH_ADS: return action.ads;
        default: return state;
    }
}