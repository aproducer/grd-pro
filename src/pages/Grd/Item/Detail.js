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
  Divider,
  Button,
  Tabs
} from "antd";
import PageHeaderWrapper from "@/components/PageHeaderWrapper";
import styles from "./Detail.less";

import Comments from '../Comments.js'

const { TabPane } = Tabs;

@connect(({ user }) => ({
  currentUser: user.currentUser
}))
class Home extends PureComponent {
  render() {
    const { currentUser } = this.props;
    const { id } = this.props.computedMatch.params;
    const pageHeaderContent =
      currentUser && Object.keys(currentUser).length ? (
        <div className={styles.pageHeaderContent}>
          <div className={styles.avatar}>
            <Avatar size="large" src={currentUser.avatar} />
          </div>
          <div className={styles.content}>
          </div>
        </div>
      ) : null;

    const extraContent = (
      <div className={styles.extraContent}>
        <div className={styles.statItem}>
          <p>商品数</p>
          <p>56</p>
        </div>
        <div className={styles.statItem}>
          <p>销量排名</p>
          <p>
            8<span> / 24</span>
          </p>
        </div>
        <div className={styles.statItem}>
          <p>营业额</p>
          <p>2,223 元</p>
        </div>
      </div>
    );
    return (
      <>
        <Row gutter={16}>
          <Col span={12} offset={2}>
            <Carousel autoplay className={styles.itemCarousel}>
              <div>
                <h3>{id}</h3>
              </div>
              <div>
                <h3>2</h3>
              </div>
              <div>
                <h3>3</h3>
              </div>
              <div>
                <h3>4</h3>
              </div>
            </Carousel>
          </Col>
          <Col span={8}>
            <Card className={styles.itemDetail}>
              <h3>
                施华洛世奇四叶草钥匙项链 施华洛世奇四叶草钥匙项链香港代购正
              </h3>
              <p>售价</p>
              <p>数量</p>
              <Divider />
              <p>成色</p>
              <p>所在地</p>
              <p>联系方式</p>
              <p>交易方式</p>
              <Divider />
              <Button>立即购买</Button>
            </Card>
          </Col>
        </Row>
        <Divider />
        <Row gutter={16}>
          <Col span={12} offset={2}>
            <Card>
              <Tabs>
                <TabPane tab="详情介绍" key="1">
                  Content of Tab 1
                </TabPane>
                <TabPane tab="留言" key="2">
                  <Comments />
                </TabPane>
                <TabPane tab="安全保障" key="3">
                  Content of Tab 3
                </TabPane>
              </Tabs>
            </Card>
          </Col>
          <Col span={8}>
          <Card>
              <h3>卖家的其他商品</h3>
          </Card>
          </Col>
        </Row>
        <br />
      </>
    );
  }
}

export default Home;
