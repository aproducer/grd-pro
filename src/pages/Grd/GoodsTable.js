import React, { PureComponent } from "react";
import moment from "moment";
import { connect } from "dva";
import Yuan from "@/utils/Yuan";

import {
  Row,
  Col,
  Card,
  List,
  Avatar,
  Carousel,
  Button,
  Table,
  Affix,
  InputNumber,
  Drawer,
  Statistic
} from "antd";

import Ellipsis from "@/components/Ellipsis";

@connect(({ cart }) => ({
  cart
}))
class GoodsTable extends PureComponent {
  state = {
    visible: false,
    selectedList: [
      {
        key: "1"
      },
      {
        key: "2"
      }
    ]
  };

  numOnChange(cartNum, row, index) {
    // console.log(cartNum, row, index);
    const { dispatch } = this.props;
    dispatch({
      type: "cart/changeNum",
      payload: {
        cartNum,
        index
      }
    });
  }

  render() {
    const {
      dataSource,
      rowSelection,
      changeable,
      scroll,
      loading
    } = this.props;
    const oriColumns = [
      {
        title: "",
        dataIndex: "pic",
        width: "64px",
        render: (val, row) => (
          <Avatar shape="square" size={128} src={row.pic&&row.pic[0]} />
        )
      },
      {
        title: "商品信息",
        dataIndex: "title",
        width: "300px",
        render: val => <Ellipsis lines={2}>{val}</Ellipsis>
      },
      {
        title: "交易方式",
        dataIndex: "trade",
        width: "100px",
        align: "center",
        render: val => <span>{val}</span>
      },
      {
        title: "单价",
        width: "200px",
        dataIndex: "price",
        align: "center",
        render: val => (
          <Statistic
            style={{ color: "#ec5328" }}
            value={val}
            precision={2}
            // prefix='¥'
          />
        )
      },
      {
        title: "数量",
        width: "50px",
        dataIndex: "cartNum",
        align: "center",
        render: (val, row, index) => {
          return changeable ? (
            <InputNumber
              min={1}
              max={row.num}
              defaultValue={val}
              onChange={cartNum => {
                this.numOnChange(cartNum, row, index);
              }}
            />
          ) : (
            <span>{val}</span>
          );
        }
      },
      {
        title: "金额",
        width: "200px",
        dataIndex: "sum",
        align: "center",
        render: (val, row) => (
          <Statistic
            style={{ color: "#ec5328" }}
            value={row.price * row.cartNum}
            precision={2}
            // prefix='¥'
          />
        )
      },
      {
        title: "操作",
        width: "150px",
        dataIndex: "action",
        align: "center",
        render: () => <a>删除</a>
      }
    ];
    const columns = changeable ? oriColumns : oriColumns.slice(0, -1);

    return (
      <>
        <Table
          rowKey="gid"
          loading={loading}
          rowSelection={rowSelection}
          columns={columns}
          dataSource={dataSource}
          size="small"
          scroll={scroll}
          pagination={false}
        />
      </>
    );
  }
}
export default GoodsTable;
