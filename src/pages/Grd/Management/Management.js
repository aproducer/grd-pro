import React, { PureComponent } from "react";
import moment from "moment";
import { connect } from "dva";

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
  Modal
} from "antd";

import Ellipsis from "@/components/Ellipsis";
import styles from "./Management.less";

import Analysis from "./Analysis";
import AddGoods from "../Item/AddGoods";

const columns = [
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
        芝奇DDR4 2400 2666 3000 3200 8G 16G套装台式机电脑吃鸡 Apex12
      </Ellipsis>
    )
  },
  {
    title: "",
    dataIndex: "class",
    width: "200px",
    render: () => (
      <Ellipsis lines={2}>
        芝奇DDR4 2400 2666 3000 3200 8G 16G套装台式机电脑吃鸡 Apex
      </Ellipsis>
    )
  },
  {
    title: "单价",
    width: "100px",
    dataIndex: "single",
    render: () => <span>￥10.90</span>
  },
  {
    title: "数量",
    width: "50px",
    dataIndex: "num",
    render: () => <InputNumber min={1} max={99} defaultValue={3} />
  },
  {
    title: "操作",
    width: "150px",
    dataIndex: "action",
    render: () => (
      <>
        <a>编辑</a>
        <br />
        <a>删除</a>
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
  state = {
    visible: false
  };

  showModal = () => {
    //打开模态框事件
    this.setState({
      visible: true
    });
  };

  handleOk = e => {
    //确认事件
    console.log(e);
    this.setState({
      visible: false
    });
  };

  handleCancel = e => {
    //取消事件
    console.log(e);
    this.setState({
      visible: false
    });
  }

  render() {
    return (
      <>
        <Button className={styles.btnTable} icon="plus" onClick={this.showModal}>
          新增商品
        </Button>
        <Button className={styles.btnTable} icon="delete">
          批量删除
        </Button>
        <br />
        <Table
          rowSelection={rowSelection}
          columns={columns}
          dataSource={data}
          scroll={{ x: 1000 }}
          pagination={false}
        />
        <Modal
          title="发布商品"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          width="80vw"
        >
          <AddGoods />
        </Modal>
      </>
    );
  }
}
export default Menagement;
