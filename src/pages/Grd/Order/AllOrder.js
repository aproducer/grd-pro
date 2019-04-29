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
  InputNumber
} from "antd";

import Ellipsis from "@/components/Ellipsis";
import styles from "./AllOrder.less";
import GoodsTable from "../GoodsTable";
import Yuan from "@/utils/Yuan";

const columns = [
  {
    title: "商品预览图",
    dataIndex: "pic",
    width: "250px",
    render: (val, record) => (
      <div className={styles.avatarList}>
        <AvatarList size={100} maxLength={3}>
          {[
            {
              name: "1",
              src:
              "http://img.alicdn.com/bao/uploaded/i4/O1CN01QvZKkV1POBJN8bkLE_!!0-fleamarket.jpg"
            },
            {
              name: "2",
              src:
                "http://img.alicdn.com/bao/uploaded/i3/O1CN01Tefdwh28RWuupZ47T_!!0-fleamarket.jpg"
            },
            {
              name: "3",
              src:
                "http://img.alicdn.com/bao/uploaded/i3/882977773/TB2SbeCeCtYBeNjSspkXXbU8VXa_!!882977773.jpg"
            }
          ].map((goods, i) => (
            <AvatarList.Item
              key={`${record.key}-avatar-${i}`}
              src={goods.src}
              tips={goods.name}
            />
          ))}
        </AvatarList>
      </div>
    )
  },
  {
    title: "订单信息",
    dataIndex: "detail",
    width: "300px",
    render: () => (
      <div>
        <Ellipsis lines={1}>德国brita滤芯碧然德滤芯滤水壶净水器家用</Ellipsis>
        等<span>3</span>件商品
      </div>
    )
  },
  {
    title: "订单状态",
    dataIndex: "class",
    width: "100px",
    render: () => <span>已付款</span>
  },
  {
    title: "总价",
    width: "100px",
    dataIndex: "single",
    render: () => <Yuan>109.10</Yuan>
  },
  {
    title: "操作",
    width: "150px",
    dataIndex: "action",
    render: () => (
      <>
        {/* 付款/发货/收货/评价 */}
        <a>收货</a>
      </>
    )
  }
];
const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park"
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park"
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park"
  },
  {
    key: "4",
    name: "Disabled User",
    age: 99,
    address: "Sidney No. 1 Lake Park"
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

class Menagement extends PureComponent {
  render() {
    return (
      <>
        <Table
          rowSelection={rowSelection}
          size="small "
          columns={columns}
          dataSource={data}
          scroll={{ x: 1000 }}
          pagination={false}
          expandedRowRender={() => (
            <GoodsTable
              scroll={{}}
              dataSource={[
                {
                  key: "1"
                },
                {
                  key: "2"
                }
              ]}
            />
          )}
        />
      </>
    );
  }
}
export default Menagement;
