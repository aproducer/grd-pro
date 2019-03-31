import dataList from "./goodsData";

const getGoodsList = (req, res) => {
  return res.json(dataList);
};

export default {
  "GET /api/grd/goods_list": getGoodsList
};
