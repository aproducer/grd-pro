import React, { PureComponent } from "react";
import moment from "moment";
import { connect } from "dva";
import AvatarList from "@/components/AvatarList";

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
  Statistic
} from "antd";

import Ellipsis from "@/components/Ellipsis";
import styles from "./AllOrder.less";
import GoodsTable from "../GoodsTable";
import Yuan from "@/utils/Yuan";
import router from "umi/router";

const columns = [
  {
    title: "商品预览图",
    dataIndex: "itemList",
    width: "250px",
    render: (val, record) => (
      <div className={styles.avatarList}>
        <AvatarList size={100} maxLength={3}>
          {val.map((item, i) => (
            <AvatarList.Item
              key={`${record.key}-avatar-${i}`}
              src={item.pic[0]}
              tips={item.title}
            />
          ))}
        </AvatarList>
      </div>
    )
  },
  {
    title: "订单信息",
    dataIndex: "itemList",
    width: "300px",
    render: val => (
      <div
        style={{ cursor: "pointer" }}
        onClick={() => {
          router.push("/orderdetail/:uid/:oid");
        }}
      >
        <Ellipsis lines={1}>{val[0].title}</Ellipsis>等<span>{val.length}</span>
        件商品
      </div>
    )
  },
  {
    title: "订单状态",
    dataIndex: "status",
    width: "100px",
    align:'center',
    render: val => (
      <span>
        {(() => {
          switch (val) {
            case 0:
              return "未付款";
              break;
            case 1:
              return "未发货";
              break;
            case 2:
              return "未签收";
              break;
            case 3:
              return "未评价";
              break;
            case 4:
              return "已完结";
              break;
            default:
              return "状态未知";
          }
        })()}
      </span>
    )
  },
  {
    title: "总价",
    width: "200px",
    dataIndex: "sum",
    align:'center',
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
    title: "操作",
    width: "150px",
    dataIndex: "status",
    align:'center',
    render: val => {
      switch (val) {
        case 0:
          return (<a>付款</a>);
          break;
        case 1:
        return (<a>发货</a>);
          break;
        case 2:
        return (<a>收货</a>);
          break;
        case 3:
        return (<a>评价</a>);
          break;
        case 4:
          return "已完结";
          break;
        default:
          return "状态未知";
      }
    }
  }
];

// rowSelection object indicates the need for row selection
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      "selectedRows: ",
      selectedRows
    );
  },
  getCheckboxProps: record => ({
    name: record.name
  })
};
@connect(({ order, loading }) => ({
  order,
  loading: loading.models.order
}))
class Menagement extends PureComponent {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: "order/fetch",
      payload: {
        uid: "123"
      }
    });
  }
  render() {
    const { dataList } = this.props.order;
    return (
      <>
        <Table
          // onRow={record => {
          //   return {
          //     onClick: () => {
          //       router.push("/orderdetail/:uid/:oid");
          //     }
          //   };
          // }}
          rowKey="oid"
          rowSelection={rowSelection}
          size="small "
          columns={columns}
          dataSource={dataList}
          scroll={{ x: 1000 }}
          pagination={false}
          expandedRowRender={record => (
            <GoodsTable dataSource={record.itemList} />
          )}
        />
      </>
    );
  }
}
export default Menagement;
