import {INIT_LIST_ACTION,GET_INIT_LIST} from './actionTypes';


export const initListAction = (data) => ({
    type: INIT_LIST_ACTION,
    data
})

export const getInitList=() => ({
    type:GET_INIT_LIST
})