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
  Modal,
  Input
} from "antd";
import PageHeaderWrapper from "@/components/PageHeaderWrapper";
import styles from "./Home.less";

import GoodsList from "./GoodsList.js";
import Center from "./users/User";
import AddGoods from "./Item/AddGoods";

@connect(({ user, goodsList }) => ({
  currentUser: user.currentUser,
  goodsList
}))
class Home extends PureComponent {
  state = {
    visible: false
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: "goodsList/fetch",
      payload: {
        count: 8
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
    const { currentUser } = this.props;
    const { datalist } = this.props.goodsList;
    return (
      <>
        <Carousel autoplay className={styles.slickSlide}>
          <div>
            <div
              style={{
                backgroundImage: `url(https://img12.360buyimg.com/img/jfs/t1/19027/37/12793/100099/5c9b473cE975faa7f/7dee62191cc6f348.jpg)`
              }}
              className={styles.barPics}
            />
          </div>
          <div>
            <div
              style={{
                backgroundImage: `url(https://img10.360buyimg.com/img/jfs/t1/24985/8/14009/87552/5ca4902eE9e230b4f/353c57fa74a8c0fa.jpg)`
              }}
              className={styles.barPics}
            />
          </div>
          <div>
            <div
              style={{
                backgroundImage: `url(https://img30.360buyimg.com/img/jfs/t1/30711/7/9249/83156/5ca46baeE84b33181/f470a277d2b4f77c.jpg)`
              }}
              className={styles.barPics}
            />
          </div>
        </Carousel>
        <br />
        <Card style={{ textAlign: "center" }}>
          <Row>
            <Col sm={{span:12,offset:6}} xs={24}>
              <Input.Search
                placeholder="请输入"
                enterButton="搜索"
                size="large"
                onSearch={this.handleSubmit}
                style={{marginBottom:8}}
              />
            </Col>
            <Col sm={{span:4,offset:2}} xs={24}>
              <Button style={{width:'100%'}} type='primary' size="large" onClick={this.showModal}>
                发布商品
              </Button> 
            </Col>
          </Row>
        </Card>
        <br />
        <GoodsList datalist={datalist} />
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

export default Home;
