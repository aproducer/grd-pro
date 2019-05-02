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
  InputNumber,
  Spin
} from "antd";
import PageHeaderWrapper from "@/components/PageHeaderWrapper";
import styles from "./Detail.less";

import Comments from "../Comments.js";
import Ellipsis from "@/components/Ellipsis";
import GoodsList from "../GoodsList";

// 引入编辑器组件
import BraftEditor from "braft-editor";

const { TabPane } = Tabs;

@connect(({ user, goodsList, loading }) => ({
  currentUser: user.currentUser,
  goodsList
}))
class Detail extends PureComponent {
  state = {
    intro: {}
  };
  componentDidMount() {
    const { dispatch } = this.props;
    //请求商品列表数据
    dispatch({
      type: "goodsList/fetch",
      payload: {
        count: 2
      }
    });
    //请求单个商品详情数据
    dispatch({
      type: "goodsList/fetchSingle",
      payload: {
        id: 1123
      }
    });
    setTimeout(() => {
      //对intro首先进行BE格式转换
      this.setState({
        intro: BraftEditor.createEditorState()
      });
    }, 0);
  }
  render() {
    const { currentUser } = this.props;
    const { id } = this.props.computedMatch.params;
    const { datalist, data } = this.props.goodsList; //推荐商品数据以及商品详情
    return data.gid ? (
      <>
        <Row gutter={16}>
          <Col md={14} sm={24}>
            <Carousel autoplay className={styles.itemCarousel}>
              {data.pic.map((val, index) => {
                return (
                  <div key={`pic-${index}`}>
                    <div
                      style={{
                        backgroundImage: `url(${val})`
                      }}
                      className={styles.itemPic}
                    />
                  </div>
                );
              })}
            </Carousel>
          </Col>
          <Col md={10} sm={24}>
            <Card className={styles.itemDetail}>
              <Ellipsis lines={2} style={{ fontWeight: "bold" }}>
                {data.title}
              </Ellipsis>
              <Statistic
                className={styles.priceNum}
                value={data.price}
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
                <span>{data.condition}</span>
              </p>
              <p>
                <span className={styles.itemPrefix}>所在地:</span>
                <span>
                  {data.geographic.province.label + data.geographic.city.label}
                </span>
              </p>
              <p>
                <span className={styles.itemPrefix}>交易方式:</span>
                <span>{data.trade}</span>
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
                    <div
                      dangerouslySetInnerHTML={{
                        __html: data.intro.toHTML && data.intro.toHTML()
                      }}
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
              <Divider style={{ marginBottom: "-1px" }} />
              <GoodsList datalist={datalist} />
            </Card>
          </Col>
        </Row>
        <br />
      </>
    ) : null;
  }
}

export default Detail;
