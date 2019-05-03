export default {
  "GET /api/grd/order_list": (req, res) => {
    return res.json([
      {
        uid: "123",
        oid: "123",
        status: 0,
        address: {
          aid: "123",
          uid: "123",
          name: "测试测试",
          phone: "18888888888",
          geographic: {
            city: { key: "120100", label: "市辖区" },
            province: { key: "120000", label: "天津市" }
          },
          detail: "测试区测试路123456号"
        },
        itemList: [
          {
            gid: "590240548641",
            uid: "33636250",
            user: {
              avatar:
                "http://img.alicdn.com/bao/uploaded/i2/O1CN013RXXrQ20vHhc62deh_!!0-fleamarket.jpg",
              name: "x***y"
            },
            pic: [
              "http://img.alicdn.com/bao/uploaded/i3/O1CN010gHDzX20x7J17L2eH_!!0-fleamarket.jpg"
            ],
            title:
              "CHANEL 香奈儿 woc链条包 日本限量 超特别的颜色，古铜粉，logo是淡粉色，17年购于日本名古屋，背过2次，包",
            type: "服装",
            price: "19200",
            num: 10,
            cartNum: 1,
            condition: "全新",
            geographic: {
              city: {
                key: "120100",
                label: "市辖区"
              },
              province: {
                key: "120000",
                label: "天津市"
              }
            },
            trade: "包邮",
            intro: "",
            pubtime: "2019-03-25T08:31:05.505Z"
          },
          {
            gid: "590238976728",
            uid: "2141870230",
            user: {
              avatar:
                "http://img.alicdn.com/bao/uploaded/i2/O1CN01WHnlV11ZR3xJbZwr2_!!0-fleamarket.jpg",
              name: "光***i"
            },
            pic: [
              "http://img.alicdn.com/bao/uploaded/i2/O1CN01hfJKer1aXlN20SXHs_!!0-fleamarket.jpg"
            ],
            title:
              "Zara高跟尖头真皮工作鞋 Zara欧美女黑色高跟尖头羊皮纹革皮鞋单鞋真皮中跟工作鞋红色婚鞋\n 高跟皮鞋，有多种颜色可选",
            type: "服装",
            price: "109",
            num: 10,
            cartNum: 1,
            condition: "全新",
            geographic: {
              city: {
                key: "120100",
                label: "市辖区"
              },
              province: {
                key: "120000",
                label: "天津市"
              }
            },
            trade: "包邮",
            intro: "",
            pubtime: "2019-03-25T08:31:05.505Z"
          },
          {
            gid: "590239700680",
            uid: "3893379524",
            user: {
              avatar:
                "http://img.alicdn.com/bao/uploaded/i2/O1CN01071aum1zlNVbBvxEA_!!0-fleamarket.jpg",
              name: "科***1"
            },
            pic: [
              "http://img.alicdn.com/bao/uploaded/i3/O1CN01t9KPIu1ZjNnrvF3il_!!0-fleamarket.jpg"
            ],
            title:
              "耐克 Travis Scott x Air Jordan 1 耐克鬼脸全新联名设计 「Cactus Jack」Air J",
            type: "服装",
            price: "500",
            num: 10,
            cartNum: 1,
            condition: "全新",
            geographic: {
              city: {
                key: "120100",
                label: "市辖区"
              },
              province: {
                key: "120000",
                label: "天津市"
              }
            },
            trade: "包邮",
            intro: "",
            pubtime: "2019-03-25T08:31:05.505Z"
          }
        ],
        expressName:'顺丰物流',
        expressId:'630000201810147636',
        sum: 19309
      }
    ]);
  },
  "POST /api/grd/add_order": (req, res) => {
    return res.json({
      status: "success",
      code: "200"
    });
  },
  "POST /api/grd/update_order": (req, res) => {
    return res.json({
      status: "success",
      code: "200"
    });
  },
  "POST /api/grd/delete_order": (req, res) => {
    return res.json({
      status: "success",
      code: "200"
    });
  }
};
