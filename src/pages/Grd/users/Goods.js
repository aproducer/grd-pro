import React, { PureComponent } from "react";
import moment from "moment";
import { connect } from "dva";
import {
  Row,
  Col,
  Form,
  Card,
  Select,
  List,
  Divider,
  Statistic,
  Avatar
} from "antd";

import Ellipsis from "@/components/Ellipsis";
import StandardFormRow from "@/components/StandardFormRow";

import styles from "./Goods.less";
import GoodsList from "../GoodsList";

const { Option } = Select;
const FormItem = Form.Item;

/* eslint react/no-array-index-key: 0 */

class Goods extends PureComponent {
  render() {
    const datalist = [
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
      }
    ];
    return (
      <>
        <div className={styles.coverCardList}>
          <div className={styles.cardList}>
            {datalist ? (
              <List
                rowKey="id"
                grid={{ gutter: 16, xxl: 6, xl: 4, lg: 3, md: 3, sm: 1, xs: 1 }}
                dataSource={datalist}
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
                              item.cardData.mainPicInfo.url
                            })`
                          }}
                        />
                        // <img
                        //   src={item.cardData.mainPicInfo?item.cardData.mainPicInfo.url:''}
                        // />
                      }
                    >
                      <Card.Meta
                        description={
                          <Ellipsis lines={2}>
                            {item.cardData.titleSummary.text}
                          </Ellipsis>
                        }
                      />
                      <br />
                      <Statistic
                        className={styles.priceNum}
                        value={item.cardData.priceInfo.price}
                        precision={2}
                        prefix={""}
                      />
                      <Divider className={styles.priceDivider} />
                      <div
                        className={styles.cardItemContent}
                        style={{ justifyContent: "space-between" }}
                      >
                        {/* <span>{moment(item.updatedAt).fromNow()}</span> */}
                        {/* <div className={styles.avatarList}>
                        <Avatar
                          size={"small"}
                          src={item.cardData.user.avatar}
                          alt={item.cardData.user.userNick}
                        />
                        &nbsp;&nbsp;
                        <span>{item.cardData.user.userNick}</span>
                      </div> */}
                        <div className={styles.cardItemContent}>
                          <span>
                            {moment("2019-03-25T08:31:05.505Z").fromNow()}
                          </span>
                        </div>
                      </div>
                    </Card>
                  </List.Item>
                )}
              />
            ) : null}
          </div>
        </div>
      </>
    );
  }
}

export default Goods;
