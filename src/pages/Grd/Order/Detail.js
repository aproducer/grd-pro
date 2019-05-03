import React, { Component } from "react";
import { connect } from "dva";
import {
  Card,
  Badge,
  Table,
  Divider,
  Steps,
  Statistic,
  Button,
  Row,
  Col
} from "antd";
import DescriptionList from "@/components/DescriptionList";
import PageHeaderWrapper from "@/components/PageHeaderWrapper";
import styles from "./Detail.less";
import GoodsTable from "../GoodsTable";
import Yuan from "@/utils/Yuan";
const { Description } = DescriptionList;
const Step = Steps.Step;

@connect(({ order, loading }) => ({
  order,
  loading: loading.models.order
}))
class BasicProfile extends Component {
  state = {
    stepsCurrent: 4
  };
  componentDidMount() {
    const { dispatch, match } = this.props;
    const { params } = match;

    dispatch({
      type: "order/fetch",
      payload: {
        uid: "123"
      }
    });
  }

  render() {
    // const { profile = {}, loading } = this.props;
    // const {
    //   basicGoods = [],
    //   basicProgress = [],
    //   userInfo = {},
    //   application = {}
    // } = profile;
    // let goodsData = [];
    // if (basicGoods.length) {
    //   let num = 0;
    //   let amount = 0;
    //   basicGoods.forEach(item => {
    //     num += Number(item.num);
    //     amount += Number(item.amount);
    //   });
    //   goodsData = basicGoods.concat({
    //     id: "总计",
    //     num,
    //     amount
    //   });
    // }
    const { loading } = this.props;
    const data = this.props.order.dataList.length
      ? this.props.order.dataList[0]
      : {};
    const { address } = data.oid ? data : { address: [] };
    return data.oid ? (
      <Card bordered={false}>
        <Steps current={data.status}>
          <Step
            title="付款"
            description={data.status > 0 ? "用户已付款" : "用户未付款"}
          />
          <Step
            title="发货"
            description={data.status > 1 ? "商家已发货" : "商家未发货"}
          />
          <Step
            title="收货"
            description={data.status > 2 ? "用户已收货" : "用户未收货"}
          />
          <Step
            title="评价"
            description={data.status > 3 ? "用户已评价" : "用户未评价"}
          />
        </Steps>
        <Divider style={{ marginBottom: 32 }} />
        <DescriptionList
          size="large"
          title="订单详情"
          style={{ marginBottom: 32 }}
        >
          <Description term="订单号">{data.oid}</Description>
          <Description term="状态">
            {(() => {
              switch (data.status) {
                case 0:
                  return "未付款";
                  break;
                case 1:
                  return "未发货";
                  break;
                case 2:
                  return "未签收";
                  break;
                case 3:
                  return "未评价";
                  break;
                case 4:
                  return "已完结";
                  break;
                default:
                  return "状态未知";
              }
            })()}
          </Description>
          <Description term="快递单号">{data.expressId}</Description>

          <Description term="快递公司">{data.expressName}</Description>
        </DescriptionList>
        <Divider style={{ marginBottom: 32 }} />
        <DescriptionList
          size="large"
          title="用户信息"
          style={{ marginBottom: 32 }}
        >
          <Description term="用户姓名">{address.name}</Description>
          <Description term="联系电话">{address.phone}</Description>
          <Description term="收货地址">
            {address.geographic.province.label +
              address.geographic.city.label +
              address.detail}
          </Description>
        </DescriptionList>
        <Divider style={{ marginBottom: 32 }} />
        <div className={styles.title}>下单商品</div>
        <GoodsTable
          style={{ marginBottom: 24 }}
          scroll={{ x: 800 }}
          loading={loading}
          dataSource={data.itemList}
        />
        <Card>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between"
            }}
          >
            <span style={{ fontWeight: "bold" }}>金额总计:</span>
            <Statistic
              style={{ color: "#ec5328" }}
              value={data.sum}
              precision={2}
              // prefix='¥'
            />
          </div>
        </Card>
        <br />
        <Row>
          <Col md={{ span: 12, offset: 6 }} sm={24}>
            <Button size="large" type="primary" block>
              付款
            </Button>
          </Col>
        </Row>
      </Card>
    ) : null;
  }
}

export default BasicProfile;
