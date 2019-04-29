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

import GoodsTable from "./GoodsTable"; //引入商品表格

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
    visible: false,
    selectedList: [
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
    ]
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
              <GoodsTable
                dataSource={data}
                rowSelection={rowSelection}
                changeable={true}
                scroll={{ x: 1000 }}
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
                <span>
                  <Yuan>122</Yuan>
                </span>
                <span>合计:</span>
              </Card>
            </Affix>
          </Col>
        </Row>
        <Drawer
          className={styles.cartDrawer}
          title="已选商品"
          placement="bottom"
          height={"60vh"}
          closable={true}
          onClose={this.onClose}
          visible={this.state.visible}
        >
          <GoodsTable
            dataSource={this.state.selectedList}
            scroll={{ x: 1000 }}
          />
        </Drawer>
      </>
    );
  }
}
export default ShoppingCart;
