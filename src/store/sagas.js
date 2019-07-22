import {takeEvery,put} from 'redux-saga/effects';
import {GET_INIT_LIST} from './actionTypes';
import {initListAction} from './actionCreator';
import axios from 'axios';

function* getInitList() {
    try{
      const res = yield axios.get('https://www.easy-mock.com/mock/5d20412b42625a525baaa95f/example/list');
      const action = initListAction(res.data);
      yield put(action);
    }catch(e){
      console.log('list.json 网络请求失败')
    }
  }
  
  function* myAppSaga() {
      yield takeEvery(GET_INIT_LIST, getInitList); 
    }
  
    export default myAppSaga;