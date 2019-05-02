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
  Button,
  Modal,
  Input,
  Form,
  Select
} from "antd";
import PageHeaderWrapper from "@/components/PageHeaderWrapper";
import styles from "./Home.less";
import TagSelect from "@/components/TagSelect";

import GoodsList from "./GoodsList.js";
import Center from "./users/User";
import AddGoods from "./Item/AddGoods";
import StandardFormRow from "@/components/StandardFormRow";
import { FormattedMessage } from "umi/locale";

const { Option } = Select;
const FormItem = Form.Item;

@connect(({ user, goodsList }) => ({
  currentUser: user.currentUser,
  goodsList
}))
@Form.create({
  onValuesChange({ dispatch }, changedValues, allValues) {
    // 表单项变化时请求数据
    console.log(changedValues, allValues);
    // 模拟查询表单生效
    dispatch({
      type: "list/fetch",
      payload: {
        count: 8
      }
    });
  }
})
class Home extends PureComponent {
  state = {
    visible: false
  };

  componentDidMount() {
    const { dispatch } = this.props; //第一次请求商品数据
    dispatch({
      type: "goodsList/fetch",
      payload: {
        count: 36
      }
    });
  }

  showModal = () => {
    //打开模态框事件
    this.setState({
      visible: true
    });
  };

  handleOk = e => {
    //确认事件
    this.setState({
      visible: false
    });
  };

  handleCancel = e => {
    //取消事
    this.setState({
      visible: false
    });
  };
  render() {
    const { currentUser } = this.props;
    const { datalist } = this.props.goodsList;
    const { getFieldDecorator } = this.props.form;
    const actionsTextMap = {
      expandText: (
        <FormattedMessage
          id="component.tagSelect.expand"
          defaultMessage="Expand"
        />
      ),
      collapseText: (
        <FormattedMessage
          id="component.tagSelect.collapse"
          defaultMessage="Collapse"
        />
      ),
      selectAllText: (
        <FormattedMessage id="component.tagSelect.all" defaultMessage="All" />
      )
    };
    return (
      <>
        <div className={styles.homeCarousel}>
          <Carousel autoplay>
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
                backgroundImage: `url(https://img10.360buyimg.com/img/jfs/t1/24985/8/14009/87552/5ca4902eE9e230b4f/353c57fa74a8c0fa.jpg)`
              }}
              className={styles.barPics}
            />
          </div>
          <div>
            <div
              style={{
                backgroundImage: `url(https://img30.360buyimg.com/img/jfs/t1/30711/7/9249/83156/5ca46baeE84b33181/f470a277d2b4f77c.jpg)`
              }}
              className={styles.barPics}
            />
          </div>
          </Carousel>
        </div>
        <br />
        <Card style={{ textAlign: "center" }}>
          <Row>
            <Col sm={{ span: 12, offset: 6 }} xs={24}>
              <Input.Search
                placeholder="请输入"
                enterButton="搜索"
                size="large"
                onSearch={this.handleSubmit}
                style={{ marginBottom: 8 }}
              />
            </Col>
            <Col sm={{ span: 4, offset: 2 }} xs={24}>
              <Button
                style={{ width: "100%" }}
                type="primary"
                size="large"
                onClick={this.showModal}
              >
                发布商品
              </Button>
            </Col>
          </Row>
        </Card>
        <br />
        <Card bordered={false}>
          <Form layout="inline" style={{ textAlign: "center" }}>
            <StandardFormRow
              title="所属类目"
              style={{ bordered: "0", margin: "0" }}
            >
              <FormItem>
                {getFieldDecorator("category")(
                  <TagSelect expandable actionsText={actionsTextMap}>
                    <TagSelect.Option value="cat1">手机</TagSelect.Option>
                    <TagSelect.Option value="cat2">数码</TagSelect.Option>
                    <TagSelect.Option value="cat3">租房</TagSelect.Option>
                    <TagSelect.Option value="cat4">服装</TagSelect.Option>
                    <TagSelect.Option value="cat5">居家</TagSelect.Option>
                    <TagSelect.Option value="cat6">美妆</TagSelect.Option>
                    <TagSelect.Option value="cat7">运动</TagSelect.Option>
                    <TagSelect.Option value="cat8">家电</TagSelect.Option>
                    <TagSelect.Option value="cat9">玩具乐器</TagSelect.Option>
                  </TagSelect>
                )}
              </FormItem>
            </StandardFormRow>
          </Form>
        </Card>
        <br />
        <GoodsList
          datalist={datalist}
          grid={{ gutter: 16, xxl: 6, xl: 4, lg: 3, md: 3, sm: 1, xs: 1 }}
          pagination={{ pageSize: 46 }}
        />
        <Modal
          title="发布商品"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          width="80vw"
        >
          <AddGoods />
        </Modal>
      </>
    );
  }
}

export default Home;
