import React, { PureComponent } from "react";
import moment from "moment";
import { connect } from "dva";

import { Row, Col, Card, List, Avatar, Carousel, Button } from "antd";
import PageHeaderWrapper from "@/components/PageHeaderWrapper";
import styles from "./Home.less";

import GoodsList from "./GoodsList.js";
import bar from "@/assets/bar/bar1.jpg";
import Center from "./users/User";
@connect(({ user, goodsList }) => ({
  currentUser: user.currentUser,
  goodsList
}))
class Home extends PureComponent {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: "goodsList/fetch",
      payload: {
        count: 8
      }
    });
  }

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
                backgroundImage: `url(https://img12.360buyimg.com/img/jfs/t1/19027/37/12793/100099/5c9b473cE975faa7f/7dee62191cc6f348.jpg)`
              }}
              className={styles.barPics}
            />
          </div>
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
                backgroundImage: `url(https://img12.360buyimg.com/img/jfs/t1/19027/37/12793/100099/5c9b473cE975faa7f/7dee62191cc6f348.jpg)`
              }}
              className={styles.barPics}
            />
          </div>
        </Carousel>
        <br />
        <Card>
          <Button>发布商品</Button>
        </Card>
        <br />
        <GoodsList datalist={datalist} />
      </>
    );
  }
}

export default Home;
