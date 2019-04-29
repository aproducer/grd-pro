import React, { Component } from "react";
import { connect } from "dva";
import { Card, Badge, Table, Divider, Steps } from "antd";
import DescriptionList from "@/components/DescriptionList";
import PageHeaderWrapper from "@/components/PageHeaderWrapper";
import styles from "./Detail.less";
import GoodsTable from "../GoodsTable";
import Yuan from "@/utils/Yuan";
const { Description } = DescriptionList;
const Step = Steps.Step;

@connect(({ profile, loading }) => ({
  profile,
  loading: loading.effects["profile/fetchBasic"]
}))
class BasicProfile extends Component {
  state = {
    stepsCurrent: 4
  };
  componentDidMount() {
    const { dispatch, match } = this.props;
    const { params } = match;

    dispatch({
      type: "profile/fetchBasic",
      payload: params.id || "1000000000"
    });
  }

  render() {
    const { profile = {}, loading } = this.props;
    const {
      basicGoods = [],
      basicProgress = [],
      userInfo = {},
      application = {}
    } = profile;
    let goodsData = [];
    if (basicGoods.length) {
      let num = 0;
      let amount = 0;
      basicGoods.forEach(item => {
        num += Number(item.num);
        amount += Number(item.amount);
      });
      goodsData = basicGoods.concat({
        id: "总计",
        num,
        amount
      });
    }

    return (
      <Card bordered={false}>
        <Steps current={this.state.stepsCurrent}>
          <Step
            title="付款"
            description={
              this.state.stepsCurrent > 0 ? "用户已付款" : "用户未付款"
            }
          />
          <Step
            title="发货"
            description={
              this.state.stepsCurrent > 1 ? "商家已发货" : "商家未发货"
            }
          />
          <Step
            title="收货"
            description={
              this.state.stepsCurrent > 2 ? "用户已收货" : "用户未收货"
            }
          />
          <Step
            title="评价"
            description={
              this.state.stepsCurrent > 3 ? "用户已评价" : "用户未评价"
            }
          />
        </Steps>
        <Divider style={{ marginBottom: 32 }} />
        <DescriptionList
          size="large"
          title="订单详情"
          style={{ marginBottom: 32 }}
        >
          <Description term="订单号">{application.id}</Description>
          <Description term="状态">{application.status}</Description>
          <Description term="快递单号">{application.orderNo}</Description>

          <Description term="快递公司">{userInfo.delivery}</Description>
        </DescriptionList>
        <Divider style={{ marginBottom: 32 }} />
        <DescriptionList
          size="large"
          title="用户信息"
          style={{ marginBottom: 32 }}
        >
          <Description term="用户姓名">{userInfo.name}</Description>
          <Description term="联系电话">{userInfo.tel}</Description>
          <Description term="取货地址">{userInfo.addr}</Description>
          <Description term="备注">{userInfo.remark}</Description>
        </DescriptionList>
        <Divider style={{ marginBottom: 32 }} />
        <div className={styles.title}>下单商品</div>
        <GoodsTable
          style={{ marginBottom: 24 }}
          scroll={{ x: 800 }}
          loading={loading}
          dataSource={[
            {
              key: "1"
            },
            {
              key: "2"
            }
          ]}
        />
        <Card>
          <div style={{ display: "flex", justifyContent: "space-between",fontWeight:'bold' }}>
            <span >金额总计:</span>
            <Yuan>122</Yuan>
          </div>
        </Card>
      </Card>
    );
  }
}

export default BasicProfile;
