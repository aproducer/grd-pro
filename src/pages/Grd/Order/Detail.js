import React, { Component } from "react";
import { connect } from "dva";
import { Card, Badge, Table, Divider, Steps } from "antd";
import DescriptionList from "@/components/DescriptionList";
import PageHeaderWrapper from "@/components/PageHeaderWrapper";
import styles from "./Detail.less";

const { Description } = DescriptionList;
const Step = Steps.Step;

const progressColumns = [
  {
    title: "时间",
    dataIndex: "time",
    key: "time"
  },
  {
    title: "当前进度",
    dataIndex: "rate",
    key: "rate"
  },
  {
    title: "状态",
    dataIndex: "status",
    key: "status",
    render: text =>
      text === "success" ? (
        <Badge status="success" text="成功" />
      ) : (
        <Badge status="processing" text="进行中" />
      )
  },
  {
    title: "操作员ID",
    dataIndex: "operator",
    key: "operator"
  },
  {
    title: "耗时",
    dataIndex: "cost",
    key: "cost"
  }
];

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
    const renderContent = (value, row, index) => {
      const obj = {
        children: value,
        props: {}
      };
      if (index === basicGoods.length) {
        obj.props.colSpan = 0;
      }
      return obj;
    };
    const goodsColumns = [
      {
        title: "商品编号",
        dataIndex: "id",
        key: "id",
        render: (text, row, index) => {
          if (index < basicGoods.length) {
            return <a href="">{text}</a>;
          }
          return {
            children: <span style={{ fontWeight: 600 }}>总计</span>,
            props: {
              colSpan: 4
            }
          };
        }
      },
      {
        title: "商品名称",
        dataIndex: "name",
        key: "name",
        render: renderContent
      },
      {
        title: "商品条码",
        dataIndex: "barcode",
        key: "barcode",
        render: renderContent
      },
      {
        title: "单价",
        dataIndex: "price",
        key: "price",
        align: "right",
        render: renderContent
      },
      {
        title: "数量（件）",
        dataIndex: "num",
        key: "num",
        align: "right",
        render: (text, row, index) => {
          if (index < basicGoods.length) {
            return text;
          }
          return <span style={{ fontWeight: 600 }}>{text}</span>;
        }
      },
      {
        title: "金额",
        dataIndex: "amount",
        key: "amount",
        align: "right",
        render: (text, row, index) => {
          if (index < basicGoods.length) {
            return text;
          }
          return <span style={{ fontWeight: 600 }}>{text}</span>;
        }
      }
    ];
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
        <Table
          style={{ marginBottom: 24 }}
          pagination={false}
          loading={loading}
          dataSource={goodsData}
          columns={goodsColumns}
          rowKey="id"
        />
        {/* <div className={styles.title}>商品进度</div>
        <Table
          style={{ marginBottom: 16 }}
          pagination={false}
          loading={loading}
          dataSource={basicProgress}
          columns={progressColumns}
        /> */}
      </Card>
    );
  }
}

export default BasicProfile;
