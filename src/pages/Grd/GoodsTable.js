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
  Drawer
} from "antd";

import Ellipsis from "@/components/Ellipsis";
import styles from "./ShoppingCart.less";




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

  render() {
    const { dataSource, rowSelection,changeable,scroll } = this.props;
    const oriColumns = [
        {
          title: "",
          dataIndex: "pic",
          width: "64px",
          render: () => (
            <Avatar
              shape="square"
              size={128}
              src="https://gd2.alicdn.com/imgextra/i2/315980614/O1CN018E2zVh1GPFggFRVHu_!!315980614.jpg"
            />
          )
        },
        {
          title: "商品信息",
          dataIndex: "detail",
          width: "300px",
          render: () => (
            <Ellipsis lines={2}>
              芝奇DDR4 2400 2666 3000 3200 8G 16G套装台式机电脑吃鸡 Apex
            </Ellipsis>
          )
        },
        {
          title: "交易方式",
          dataIndex: "class",
          width: "100px",
          align: "center",
          render: () => <span>包邮</span>
        },
        {
          title: "单价",
          width: "100px",
          dataIndex: "single",
          align: "center",
          render: () => (
            <span>
              <Yuan>10.90</Yuan>{" "}
            </span>
          )
        },
        {
          title: "数量",
          width: "50px",
          dataIndex: "num",
          align: "center",
          render: () => {
              return changeable?(<InputNumber min={1} max={99} defaultValue={3} />):(<span>3</span>)}
        },
        {
          title: "金额",
          width: "100px",
          dataIndex: "price",
          align: "center",
          render: () => (
            <span>
              <Yuan>10.90</Yuan>
            </span>
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
    const columns=changeable?oriColumns:oriColumns.slice(0,-1);
    
    
    return (
      <>
        <Table
          rowSelection={rowSelection}
          columns={columns}
          dataSource={dataSource}
          size='small'
          scroll={scroll}
          pagination={false}
        //   rowKey="id"
        />
      </>
    );
  }
}
export default GoodsTable;
