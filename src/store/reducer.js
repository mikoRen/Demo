import {INIT_LIST_ACTION} from './actionTypes'


const defaultState={
    list:['Hello',"World","Love"],
    text:['I am a saga-test !'],
    refreshing:false
}

export default (state=defaultState,action) => {

    if (action.type === INIT_LIST_ACTION) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list = action.data;
        newState.refreshing = true;
        return newState;
    }

    return state;
}