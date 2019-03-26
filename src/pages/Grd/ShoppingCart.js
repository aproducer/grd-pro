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
  InputNumber
} from "antd";

import Ellipsis from "@/components/Ellipsis";
import styles from "./ShoppingCart.less";

const columns = [
  {
    title: "",
    dataIndex: "pic",
    width: "64px",
    render: () => <Avatar shape="square" size={128} src='https://gd2.alicdn.com/imgextra/i2/315980614/O1CN018E2zVh1GPFggFRVHu_!!315980614.jpg' />
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
    title: "金额",
    width: "100px",
    dataIndex: "price",
    render: () => <span>￥10.90</span>
  },
  {
    title: "操作",
    width: "150px",
    dataIndex: "action",
    render: () => (
      <>
        <a>移入收藏夹</a>
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
  render() {
    return (
      <>
        <Row gutter={16}>
          <Col offset={2} span={20}>
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
                <Button>已选商品</Button>
                <span>合计:</span>
                <span> ￥148.00</span>
                <Button
                  className={styles.btnPay}
                  type="primary"
                  size={"large"}
                  width="300px"
                >
                  结&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;算
                </Button>
              </Card>
            </Affix>
          </Col>
        </Row>
      </>
    );
  }
}
export default Menagement;
