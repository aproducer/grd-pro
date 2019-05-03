import {
    queryOrderList,
    addOrderList,
    updateOrderList,
    deleteOrderList
  } from "@/services/api";
  
  export default {
    namespace: "order",
  
    state: {
      dataList: []
    },
  
    effects: {
      *fetch({ payload }, { call, put }) {
        const response = yield call(queryOrderList, payload);
        yield put({
          type: "save",
          payload: Array.isArray(response) ? response : []
        });
      },
      *add({ payload }, { call, put }) {
        const response = yield call(addOrderList, payload); // post
        yield put({
          type: "fetch",
          payload: {}
        });
      },
      *delete({ payload }, { call, put }) {
        const response = yield call(updateOrderList, payload); // post
        yield put({
          type: "fetch",
          payload: {}
        });
      },
      *update({ payload }, { call, put }) {
        const response = yield call(deleteOrderList, payload); // post
        yield put({
          type: "fetch",
          payload: {}
        });
      }
    },
  
    reducers: {
      save(state, action) {
        return {
          ...state,
          dataList: action.payload
        };
      },
    }
  };
  