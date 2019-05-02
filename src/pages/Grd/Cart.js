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
import styles from "./Cart.less";

import GoodsTable from "./GoodsTable"; //引入商品表格

@connect(({ cart, loading }) => ({
  cart,
  loading: loading.models.cart
}))
class Cart extends PureComponent {
  state = {
    visible: false
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: "cart/fetch",
      payload: {
        uid: "123"
      }
    });
  }

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
    const { loading, dispatch } = this.props;
    const { data } = this.props.cart;
    const rowSelection = {
      //勾选商品的配置对象
      onChange: (selectedRowKeys, selectedRows) => {
        // console.log(
        //   `selectedRowKeys: ${selectedRowKeys}`,
        //   "selectedRows: ",
        //   selectedRows
        // );
        dispatch({
          type: "cart/changeSelect",
          payload: {
            selectList: selectedRowKeys
          }
        });
      },
      selectedRowKeys: data.selectList
      // getCheckboxProps: record => ({
      //   name: record.name
      // })
    };

    const selectedItemList = data.itemList
      ? data.itemList.filter(item => {
          //筛选选中的列表数据
          return data.selectList.includes(item.gid);
        })
      : [];

    return (
      <>
        <Row gutter={16}>
          <Col>
            <Card>
              <GoodsTable
                loading={loading}
                dataSource={data.itemList}
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
                  <Statistic
                    style={{ color: "#ec5328" }}
                    value={data.sum}
                    precision={2}
                    // prefix='¥'
                  />
                </span>
                <span style={{fontSize:'16px',fontWeight:'bold'}} >合计:</span>
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
          <GoodsTable dataSource={selectedItemList} scroll={{ x: 1000 }} />
        </Drawer>
      </>
    );
  }
}
export default Cart;
