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
  Tabs,
  Statistic,
  InputNumber
} from "antd";
import PageHeaderWrapper from "@/components/PageHeaderWrapper";
import styles from "./Detail.less";

import Comments from "../Comments.js";
import Ellipsis from "@/components/Ellipsis";


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
          <div className={styles.content} />
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
          <Col span={20} offset={2}>
            <Card>
              <Avatar
                size="large"
                src="http://gtms03.alicdn.com/tps/i3/TB1LFGeKVXXXXbCaXXX07tlTXXX-200-200.png"
              />
              <div>宝贝浏览次数</div>
              <span>最近编辑时间</span>
            </Card>
          </Col>
        </Row>
        <Divider />
        <Row gutter={16}>
          <Col span={12} offset={2}>
            <Carousel autoplay className={styles.itemCarousel}>
              <div>
                <div
                  style={{
                    backgroundImage: `url(https://img.alicdn.com/bao/uploaded/i1/O1CN01EC4oUn1I0ddyUGAiw_!!0-fleamarket.jpg_728x728.jpg)`
                  }}
                  className={styles.itemPic}
                />
              </div>
              <div>
                <div
                  style={{
                    backgroundImage: `url(https://img.alicdn.com/bao/uploaded/i4/O1CN01wf5pBP27j6V7WPuwV_!!0-fleamarket.jpg_728x728.jpg)`
                  }}
                  className={styles.itemPic}
                />
              </div>
            </Carousel>
          </Col>
          <Col span={8}>
            <Card className={styles.itemDetail}>
              <Ellipsis lines={2}>
                施华洛世奇四叶草钥匙项链 施华洛世奇四叶草钥匙项链香港代购正
              </Ellipsis>
              <Statistic
                className={styles.priceNum}
                value={165}
                precision={2}
                prefix={<span className={styles.itemPrefix}>售价:</span>}
              />
              <p>
                <span className={styles.itemPrefix}>数量:</span>
                <InputNumber size="small" min={1} max={99} defaultValue={1} />
              </p>
              <Divider />
              <p>
                <span className={styles.itemPrefix}>成色:</span>
                <span>非全新</span>
              </p>
              <p>
                <span className={styles.itemPrefix}>所在地:</span>
                <span>江苏苏州</span>
              </p>
              <p>
                <span className={styles.itemPrefix}>交易方式:</span>
                <span>包邮/邮费自理/面交</span>
              </p>
              <Divider />
              <Button>立即购买</Button>
            </Card>
          </Col>
        </Row>
        <Divider />
        <Row gutter={16}>
          <Col span={14} offset={2}>
            <Card>
              <Tabs>
                <TabPane tab="详情介绍" key="1">
                  <div className={styles.itemIntro}>
                    <img
                      src="https://img.alicdn.com/imgextra/i1/2208533595/O1CN01iQEOJw1cQYMRfmKPL_!!2208533595.jpg"
                      alt=""
                    />
                  </div>
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
          <Col span={6}>
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
