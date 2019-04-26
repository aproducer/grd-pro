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
import GoodsList from "../GoodsList";

const { TabPane } = Tabs;

@connect(({ user }) => ({
  currentUser: user.currentUser
}))
class Detail extends PureComponent {
  render() {
    const { currentUser } = this.props;
    const { id } = this.props.computedMatch.params;

    return (
      <>
        {/* <Row gutter={16}>
          <Col>
            <Card>
              <Avatar
                size="large"
                src="http://gtms03.alicdn.com/tps/i3/TB1LFGeKVXXXXbCaXXX07tlTXXX-200-200.png"
              />
            </Card>
          </Col>
        </Row>
        <Divider /> */}
        <Row gutter={16}>
          <Col md={14} sm={24}>
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
          <Col md={10} sm={24}>
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
              <div>
                <span className={styles.itemPrefix}>数量:</span>
                <InputNumber size="small" min={1} max={99} defaultValue={1} />
              </div>
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
                <Button type="primary" size='large' className={styles.itembtn} >
                  立即购买
                </Button>
                <Button  style={{float:'right'}} size='large' className={styles.itembtn}>
                  加入购物车
                </Button>
            </Card>
          </Col>
        </Row>
        <Divider />
        <Row gutter={16}>
          <Col md={16} sm={24}>
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
              </Tabs>
            </Card>
          </Col>
          <Col md={8} sm={0}>
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

export default Detail;
