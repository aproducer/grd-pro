import { queryGoodsList } from "@/services/api";

export default {
  namespace: "goodsList",

  state: {
    datalist: []
  },

  effects: {
    *fetch({ payload }, { call, put }) {
      const response = yield call(queryGoodsList, payload);
      const datalist = response.data.cardList.slice(0,36);
      console.log(datalist);
      yield put({
        type: "queryList",
        payload: Array.isArray(datalist) ? datalist : []
      });
    }
  },

  reducers: {
    queryList(state, action) {
      console.log(action.payload);
      return {
        ...state,
        datalist: action.payload,
      };
    }
  }
};
