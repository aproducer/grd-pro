import React, { PureComponent } from "react";
import moment from "moment";
import { connect } from "dva";

import { Row, Col, Card, List, Avatar, Carousel,Button } from "antd";
import PageHeaderWrapper from "@/components/PageHeaderWrapper";
import styles from "./Home.less";

import GoodsList from "./GoodsList.js";
@connect(({ user }) => ({
  currentUser: user.currentUser
}))
class Home extends PureComponent {
  render() {
    const { currentUser } = this.props;
    const pageHeaderContent =
      currentUser && Object.keys(currentUser).length ? (
        <div className={styles.pageHeaderContent}>
          <div className={styles.avatar}>
            <Avatar size="large" src={currentUser.avatar} />
          </div>
          <div className={styles.content}>
            <div className={styles.contentTitle}>
              早安，
              {currentUser.name}
              ，祝你开心每一天！
            </div>
            <div>
              {currentUser.title} |{currentUser.group}
            </div>
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
        {/* <PageHeaderWrapper
          content={pageHeaderContent}
          extraContent={extraContent}
        />
        <br /> */}
        <Carousel autoplay className={styles.slickSlide}>
          <div>
            <h3>1</h3>
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
        <Card>
          <Button>发布商品</Button>
        </Card>
        <br/>
        <GoodsList />
      </>
    );
  }
}

export default Home;
