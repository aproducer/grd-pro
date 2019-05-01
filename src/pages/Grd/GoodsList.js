import React, { PureComponent } from "react";
import moment from "moment";
import { connect } from "dva";
import { Row, Col, Card, List, Divider, Statistic, Avatar } from "antd";

import Ellipsis from "@/components/Ellipsis";

import Link from "umi/link";

import styles from "./GoodsList.less";
import router from "umi/router";

/* eslint react/no-array-index-key: 0 */

@connect(({ list, loading }) => ({
  list,
  loading: loading.models.list
}))
class GoodsList extends PureComponent {
  // componentDidMount() {
  //   //第一次获取数据
  //   const { dispatch } = this.props;
  //   dispatch({
  //     type: "list/fetch",
  //     payload: {
  //       count: 36
  //     }
  //   });
  // }

  gotoGoodsDetail() {
    router.push("/item/detail/:id");
  }
  gotoUserDetail() {
    router.push("/users/detail/:id");
  }
  render() {
    const { loading, datalist, grid, pagination } = this.props;
    const { gotoGoodsDetail, gotoUserDetail } = this;
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
                      //商品预览图
                      <div
                        onClick={gotoGoodsDetail}
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
                      onClick={gotoGoodsDetail}
                      description={
                        <Ellipsis lines={2}>
                          {item.title}
                        </Ellipsis>
                      }
                    />
                    <br />
                    <Statistic
                      onClick={gotoGoodsDetail}
                      className={styles.priceNum}
                      value={item.price}
                      precision={2}
                      prefix={""}
                    />
                    <Divider className={styles.priceDivider} />
                    <div
                      className={styles.cardItemContent}
                      style={{ justifyContent: "space-between" }}
                    >
                      {/* <span>{moment(item.updatedAt).fromNow()}</span> */}
                      <div
                        className={styles.avatarList}
                        onClick={gotoUserDetail}
                      >
                        <Avatar
                          size={"small"}
                          src={item.user&&item.user.avatar}
                          alt={item.user&&item.user.name}
                        />
                        &nbsp;&nbsp;
                        <span>{item.user&&item.user.name}</span>
                      </div>
                      <div className={styles.cardItemContent}>
                        <span>
                          {moment(`${item.pubtime}`).fromNow()}
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
