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
@connect(({ user, goodsList }) => ({
  currentUser: user.currentUser,
  goodsList
}))

class Goods extends PureComponent {
  componentDidMount() {
    const { dispatch } = this.props; //第一次请求商品数据
    dispatch({
      type: "goodsList/fetch",
      payload: {
        count: 4
      }
    });
  }
  render() {
    const { datalist } = this.props.goodsList;
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
                      <Statistic
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
      </>
    );
  }
}

export default Goods;
