import React, { PureComponent } from "react";
import moment from "moment";
import { connect } from "dva";
import { Row, Col, Card, List, Divider, Statistic, Avatar } from "antd";

import Ellipsis from "@/components/Ellipsis";

import Link from "umi/link";

import styles from "./GoodsList.less";

/* eslint react/no-array-index-key: 0 */

@connect(({ list, loading }) => ({
  list,
  loading: loading.models.list
}))
class GoodsList extends PureComponent {
  componentDidMount() {
    //第一次获取数据
    const { dispatch } = this.props;
    dispatch({
      type: "list/fetch",
      payload: {
        count: 8
      }
    });
  }

  render() {
    const {
      loading,
      datalist,
      grid,
      pagination
    } = this.props;


    return (
      <div className={styles.coverCardList}>
        <div className={styles.cardList}>
          {datalist ? (
            <List
              rowKey="id"
              loading={loading}
              grid={grid}
              pagination={pagination}
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
                    <div className={styles.cardItemContent} style={{justifyContent: 'space-between'}}>
                      {/* <span>{moment(item.updatedAt).fromNow()}</span> */}
                      <div
                        className={styles.avatarList}
                      >
                        <Avatar
                          size={"small"}
                          src={item.cardData.user.avatar}
                          alt={item.cardData.user.userNick}
                        />
                        &nbsp;&nbsp;
                        <span>{item.cardData.user.userNick}</span>
                      </div>
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
    );
  }
}

export default GoodsList;
