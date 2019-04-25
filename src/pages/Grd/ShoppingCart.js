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
  Drawer
} from "antd";

import Ellipsis from "@/components/Ellipsis";
import styles from "./ShoppingCart.less";

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
        芝奇DDR4 2400 2666 3000 3200 8G 16G套装台式机电脑吃鸡 Apex
      </Ellipsis>
    )
  },
  {
    title: "交易方式",
    dataIndex: "class",
    width: "100px",
    align:'center',
    render: () => <span>包邮</span>
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
    title: "金额",
    width: "100px",
    dataIndex: "price",
    align:'center',
    render: () => <span>￥10.90</span>
  },
  {
    title: "操作",
    width: "150px",
    dataIndex: "action",
    align:'center',
    render: () => <a>删除</a>
  }
];
const data = [
  {
    key: "1"
  },
  {
    key: "2"
  },
  {
    key: "3"
  },
  {
    key: "4"
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

class ShoppingCart extends PureComponent {
  state = { 
    visible: false ,
    selectedList:[{
      key: "1"
    },
    {
      key: "2"
    }]
  };

  showDrawer = () => {
    //控制显示drawer
    this.setState({
      visible: true
    });
  };

  onClose = () => {
    //控制关闭drawer
    this.setState({
      visible: false
    });
  };

  render() {
    return (
      <>
        <Row gutter={16}>
          <Col>
            <Card>
              <Table
                rowSelection={rowSelection}
                columns={columns}
                dataSource={data}
                scroll={{ x: 1000 }}
                pagination={false}
              />
            </Card>

            <Affix offsetBottom={10}>
              <Card className={styles.cartBar}>
                <Button onClick={this.showDrawer}>已选商品</Button>
                <Button
                  className={styles.btnPay}
                  type="primary"
                  size={"large"}
                  width="300px"
                >
                  结&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;算
                </Button>
                <span> ￥148.00</span>
                <span>合计:</span>
              </Card>
            </Affix>
          </Col>
        </Row>
        <Drawer
          className={styles.cartDrawer}
          title="已选商品"
          placement="bottom"
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
        >
          <Table
            rowSelection={rowSelection}
            columns={columns}
            dataSource={this.state.selectedList}
            scroll={{ x: 1000 }}
            pagination={false}
          />
        </Drawer>
      </>
    );
  }
}
export default ShoppingCart;
