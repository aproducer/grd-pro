import {
  queryCartList,
  addCartList,
  updateCartList,
  deleteCartList
} from "@/services/api";

export default {
  namespace: "cart",

  state: {
    data: []
  },

  effects: {
    *fetch({ payload }, { call, put }) {
      const response = yield call(queryCartList, payload);
      yield put({
        type: "save",
        payload: Array.isArray(response.itemList) ? response : []
      });
    },
    *add({ payload }, { call, put }) {
      const response = yield call(addCartList, payload); // post
      yield put({
        type: "fetch",
        payload: {}
      });
    },
    *delete({ payload }, { call, put }) {
      const response = yield call(updateCartList, payload); // post
      yield put({
        type: "fetch",
        payload: {}
      });
    },
    *update({ payload }, { call, put }) {
      const response = yield call(deleteCartList, payload); // post
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
        data: action.payload
      };
    },
    changeSelect(state, { payload }) {
      //在Dva层面修改选择项
      const { selectList } = payload;
      //   console.log(selectList);
      //计算总价
      const selectedItemList = state.data.itemList.filter(item => {
        //更新后的筛选选中的列表数据
        return selectList.includes(item.gid);
      });
      const sum = selectedItemList.reduce((total, item) => {
        //统计总价
        return total + ~~item.cartNum * ~~item.price;
      }, 0);
      return {
        ...state,
        data: {
          ...state.data,
          selectList,
          sum
        }
      };
    },
    changeNum(state, { payload }) {
      //在Dva层面修改数据
      const { cartNum, index } = payload;
      //   console.log(cartNum, index);
      const itemList = state.data.itemList.map((val, i) => {
        //修改对应商品的数量
        if (i == index) {
          return {
            ...val,
            cartNum
          };
        }
        return val;
      });
      //   console.log(itemList);

      //计算总价部分
      const selectedItemList = itemList.filter(item => {
        //更新后的筛选选中的列表数据
        return state.data.selectList.includes(item.gid);
      });
      const sum = selectedItemList.reduce((total, item) => {
        //统计总价
        return total + ~~item.cartNum * ~~item.price;
      }, 0);

      //   console.log(selectedItemList, sum);
      return {
        ...state,
        data: {
          ...state.data,
          itemList,
          sum
        }
      };
    }
  }
};
