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
    const datalist=[
      {
        cardData: {
          auctionType: "b",
          dislikeTrackParams: {
            matchTypeSet: "HOT",
            rtpType: "unknown",
            item_id: "590240548641",
            matchType: "HOT",
            recProvince: "null",
            index: "1",
            recCity: "北京",
            trackName: "Feed1Dislike",
            type: "1",
            search_id: "bb591a8e96f140f623cd3063e2eda891",
            upCardStatus: "0",
            spm: "a2170.7897990.6801272.1_dislike",
            abtest: "b",
            pvid: "8a6efa44-b683-4b64-9d9a-e3299f05cba3",
            triggerItemId: "-1",
            verType: "2",
            id: "590240548641",
            position: "11",
            rn: "3a418e1d311cbbee03ed79a1b797974e",
            scm: "1007.12538.128426.100200300000015",
            abtag: "style_masonryLayouts_1.0_mamaAD",
            ab_id: "ts.idlefish.feed.2309b84e-34e6-4fd2-8cc6-3995f510574b",
            test_id: "128426"
          },
          itemId: "590240548641",
          mainPicInfo: {
            heightSize: "100",
            major: "true",
            type: "0",
            url:
              "http://img.alicdn.com/bao/uploaded/i3/O1CN010gHDzX20x7J17L2eH_!!0-fleamarket.jpg",
            videoId: "0",
            widthSize: "100"
          },
          needRequestMario: "false",
          priceInfo: {
            oriPrice: "0.00",
            preText: "￥",
            price: "19200"
          },
          redirectUrl: "fleamarket://item?id=590240548641&fmdirect=true",
          titleSummary: {
            text:
              "CHANEL 香奈儿 woc链条包 日本限量 超特别的颜色，古铜粉，logo是淡粉色，17年购于日本名古屋，背过2次，包"
          },
          trackParams: {
            rtpType: "unknown",
            matchType: "HOT",
            trackName: "Feed1",
            type: "1",
            upCardStatus: "0",
            abtest: "b",
            pvid: "8a6efa44-b683-4b64-9d9a-e3299f05cba3",
            verType: "2",
            id: "590240548641",
            scm: "1007.12538.128426.100200300000015",
            abtag: "style_masonryLayouts_1.0_mamaAD",
            test_id: "128426",
            matchTypeSet: "HOT",
            reason_pvid: "70c06586-b7d1-48ec-bd11-4ac48906cee8",
            item_id: "590240548641",
            recProvince: "null",
            index: "1",
            recCity: "北京",
            search_id: "bb591a8e96f140f623cd3063e2eda891",
            spm: "a2170.7897990.6801272.1",
            reason_scm: "1007.16879.113143.0",
            reason_type: "close\u0001-no_exp",
            triggerItemId: "-1",
            position: "11",
            rn: "3a418e1d311cbbee03ed79a1b797974e",
            ab_id: "ts.idlefish.feed.2309b84e-34e6-4fd2-8cc6-3995f510574b"
          },
          user: {
            avatar:
              "http://img.alicdn.com/bao/uploaded/i2/O1CN013RXXrQ20vHhc62deh_!!0-fleamarket.jpg",
            trackParams: {
              spm: "a2170.7897990.6801272.1_head",
              trackName: "Feed1HeadPortrait"
            },
            userId: "33636250",
            userNick: "x***y",
            userSketch: {
              topTags: [
                {
                  height: "0",
                  tagUrl:
                    "http://gw.alicdn.com/mt/TB1796pGL5TBuNjSspmXXaDRVXa-168-24.png",
                  width: "168"
                }
              ]
            }
          }
        },
        cardType: "61801"
      },
      {
        cardData: {
          auctionType: "b",
          dislikeTrackParams: {
            matchTypeSet: "HOT",
            rtpType: "unknown",
            item_id: "590238976728",
            matchType: "HOT",
            recProvince: "null",
            index: "2",
            recCity: "北京",
            trackName: "Feed1Dislike",
            type: "1",
            search_id: "bb591a8e96f140f623cd3063e2eda891",
            upCardStatus: "0",
            spm: "a2170.7897990.6801272.2_dislike",
            abtest: "b",
            pvid: "8a6efa44-b683-4b64-9d9a-e3299f05cba3",
            triggerItemId: "-1",
            verType: "2",
            id: "590238976728",
            position: "7",
            rn: "3a418e1d311cbbee03ed79a1b797974e",
            scm: "1007.12538.128426.100200300000015",
            abtag: "style_masonryLayouts_1.0_mamaAD",
            ab_id: "ts.idlefish.feed.2309b84e-34e6-4fd2-8cc6-3995f510574b",
            test_id: "128426"
          },
          itemId: "590238976728",
          mainPicInfo: {
            heightSize: "800",
            major: "true",
            type: "0",
            url:
              "http://img.alicdn.com/bao/uploaded/i2/O1CN01hfJKer1aXlN20SXHs_!!0-fleamarket.jpg",
            widthSize: "800"
          },
          needRequestMario: "false",
          priceInfo: {
            oriPrice: "0.00",
            preText: "￥",
            price: "109"
          },
          redirectUrl: "fleamarket://item?id=590238976728&fmdirect=true",
          titleSummary: {
            text:
              "Zara高跟尖头真皮工作鞋 Zara欧美女黑色高跟尖头羊皮纹革皮鞋单鞋真皮中跟工作鞋红色婚鞋\n 高跟皮鞋，有多种颜色可选"
          },
          trackParams: {
            rtpType: "unknown",
            matchType: "HOT",
            trackName: "Feed1",
            type: "1",
            upCardStatus: "0",
            abtest: "b",
            pvid: "8a6efa44-b683-4b64-9d9a-e3299f05cba3",
            verType: "2",
            id: "590238976728",
            scm: "1007.12538.128426.100200300000015",
            abtag: "style_masonryLayouts_1.0_mamaAD",
            test_id: "128426",
            matchTypeSet: "HOT",
            reason_pvid: "70c06586-b7d1-48ec-bd11-4ac48906cee8",
            item_id: "590238976728",
            recProvince: "null",
            index: "2",
            recCity: "北京",
            search_id: "bb591a8e96f140f623cd3063e2eda891",
            spm: "a2170.7897990.6801272.2",
            reason_scm: "1007.16879.113143.0",
            reason_type: "close\u0001-no_exp",
            triggerItemId: "-1",
            position: "7",
            rn: "3a418e1d311cbbee03ed79a1b797974e",
            ab_id: "ts.idlefish.feed.2309b84e-34e6-4fd2-8cc6-3995f510574b"
          },
          user: {
            avatar:
              "http://img.alicdn.com/bao/uploaded/i2/O1CN01WHnlV11ZR3xJbZwr2_!!0-fleamarket.jpg",
            trackParams: {
              spm: "a2170.7897990.6801272.2_head",
              trackName: "Feed1HeadPortrait"
            },
            userId: "2141870230",
            userNick: "光***i",
            userSketch: {
              topTags: [
                {
                  height: "0",
                  tagUrl:
                    "http://gw.alicdn.com/mt/TB1796pGL5TBuNjSspmXXaDRVXa-168-24.png",
                  width: "168"
                }
              ]
            }
          }
        },
        cardType: "61801"
      },]
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
              <Button type="primary" size="large" className={styles.itembtn}>
                立即购买
              </Button>
              <Button
                style={{ float: "right" }}
                size="large"
                className={styles.itembtn}
              >
                加入购物车
              </Button>
            </Card>
          </Col>
        </Row>
        <Divider />
        <Row gutter={16}>
          <Col md={15} sm={24}>
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
          <Col md={9} sm={24}>
            <Card>
              <h3>推荐商品</h3>
              <Divider />
              <GoodsList datalist={datalist} />
            </Card>
          </Col>
        </Row>
        <br />
      </>
    );
  }
}

export default Detail;
