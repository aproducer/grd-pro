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
  Modal,
  Form,
  Select,
  Divider,
  Statistic
} from "antd";

import Ellipsis from "@/components/Ellipsis";
import styles from "./Management.less";

import Analysis from "./Analysis";
import AddGoods from "../Item/AddGoods";

import Yuan from "@/utils/Yuan";

@connect(({ user, goodsList }) => ({
  currentUser: user.currentUser,
  goodsList
}))

class Menagement extends PureComponent {
  state = {
    visible: false
  };

  componentDidMount() {
    const { dispatch } = this.props; //第一次请求商品数据
    dispatch({
      type: "goodsList/fetch",
      payload: {
        count: 4
      }
    });
  }

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
  };

  render() {
    const { datalist } = this.props.goodsList;
    return (
      <>
        <Button
          type="primary"
          className={styles.btnTable}
          icon="plus"
          onClick={this.showModal}
        >
          发布商品
        </Button>
        <br />
        <div className={styles.coverCardList}>
          <div className={styles.cardList}>
            {datalist ? (
              <List
                rowKey="id"
                grid={{ gutter: 16, xxl: 6, xl: 4, lg: 3, md: 3, sm: 1, xs: 1 }}
                dataSource={datalist}
                pagination={{ pageSize: 10 }}
                renderItem={item => (
                  <List.Item>
                    <Card
                      className={styles.card}
                      hoverable
                      cover={
                        <div
                          className={styles.cardPic}
                          style={{
                            backgroundImage: `url(${
                              item.pic&&item.pic[0]
                            })`
                          }}
                        />
                      }
                    >
                      <Card.Meta
                        description={
                          <Ellipsis lines={2}>
                            {item.title}
                          </Ellipsis>
                        }
                      />
                      <br />
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between"
                        }}
                      >
                        <Statistic
                          className={styles.priceNum}
                          value={item.price}
                          precision={2}
                          prefix={""}
                        />
                        <div className={styles.cardItemContent}>
                          <span>
                            {moment(`${item.pubtime}`).fromNow()}
                          </span>
                        </div>
                      </div>

                      <Divider className={styles.priceDivider} />
                      <div
                        className={styles.cardItemContent}
                        style={{
                          justifyContent: "space-between",
                          fontSize: "16px"
                        }}
                      >
                        <a>编辑</a>
                        <a>删除</a>
                        {/* <a style={{color:'#ed5b56'}}>删除</a> */}
                      </div>
                    </Card>
                  </List.Item>
                )}
              />
            ) : null}
          </div>
        </div>
        <br />
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
