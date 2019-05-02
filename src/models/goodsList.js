import { queryGoodsList, querySingleGoods } from "@/services/api";
import BraftEditor from "braft-editor";

export default {
  namespace: "goodsList",

  state: {
    data: {},
    datalist: []
  },

  effects: {
    *fetch({ payload }, { call, put }) {
      const response = yield call(queryGoodsList, payload);
      const datalist = response.data.cardList.slice(0, payload.count || 36);
      const newdatalist = datalist.map((val, index, array) => {
        const { cardData } = val;
        return {
          gid: cardData.itemId,
          uid: cardData.user.userId,
          user: {
            avatar: cardData.user.avatar,
            name: cardData.user.userNick
          },
          pic: [cardData.mainPicInfo.url],
          title: cardData.titleSummary.text,
          type: "服装",
          price: cardData.priceInfo.price,
          num: 10,
          condition: "全新",
          geographic: {
            city: { key: "120100", label: "市辖区" },
            province: { key: "120000", label: "天津市" }
          },
          trade: "包邮",
          intro: "",
          pubtime: "2019-03-25T08:31:05.505Z"
        };
      });

      // console.log(JSON.stringify(newdatalist));
      //put(action)
      yield put({
        type: "saveList",
        payload: Array.isArray(newdatalist) ? newdatalist : []
      });
    },
    *fetchSingle({ payload }, { call, put }) {
      const response = yield call(querySingleGoods, payload);
      const datalist = response.data.cardList.slice(0, 1);
      const newdatalist = datalist.map((val, index, array) => {
        const { cardData } = val;
        return {
          gid: cardData.itemId,
          uid: cardData.user.userId,
          user: {
            avatar: cardData.user.avatar,
            name: cardData.user.userNick
          },
          pic: [cardData.mainPicInfo.url, cardData.mainPicInfo.url],
          title: cardData.titleSummary.text,
          type: "服装",
          price: cardData.priceInfo.price,
          num: 10,
          condition: "全新",
          geographic: {
            city: { key: "120100", label: "市辖区" },
            province: { key: "120000", label: "天津市" }
          },
          trade: "包邮",
          intro:'',
          pubtime: "2019-03-25T08:31:05.505Z"
        };
      });
      newdatalist[0].intro = BraftEditor.createEditorState(
        newdatalist[0].intro
      );
      // console.log(JSON.stringify(newdatalist));
      //put(action)
      yield put({
        type: "saveSingle",
        payload: newdatalist[0]
      });
    }
  },

  reducers: {
    saveList(state, action) {
      // console.log(action.payload);
      return {
        ...state,
        datalist: action.payload
      };
    },
    saveSingle(state, action) {
      // console.log(action.payload);
      return {
        ...state,
        data: action.payload
      };
    }
  }
};
