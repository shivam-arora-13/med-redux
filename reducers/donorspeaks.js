import * as ActionTypes from '../ActionTypes';

export const DonorSpeaks = (state = {
    isLoading: true,
    errMess: null,
    donorSpeaks: []
}, action) => {
switch(action.type) {
    case ActionTypes.ADD_DONORSPEAKS:
        return {...state, isLoading: false, errMess: null, donorSpeaks: action.payload};

    case ActionTypes.DONORSPEAKS_LOADING:
        return {...state, isLoading: true, errMess: null, donorSpeaks: []};

    case ActionTypes.DONORSPEAKS_FAILED:
            return {...state, isLoading: false, errMess: action.payload, donorSpeaks: []};
    
        default:
            return state;
    }
}