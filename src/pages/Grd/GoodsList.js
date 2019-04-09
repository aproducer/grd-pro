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
import { FormattedMessage } from "umi/locale";

import TagSelect from "@/components/TagSelect";
import AvatarList from "@/components/AvatarList";
import Ellipsis from "@/components/Ellipsis";
import StandardFormRow from "@/components/StandardFormRow";
import Link from "umi/link";

import styles from "./GoodsList.less";

const { Option } = Select;
const FormItem = Form.Item;

/* eslint react/no-array-index-key: 0 */

@connect(({ list, loading }) => ({
  list,
  loading: loading.models.list
}))
@Form.create({
  onValuesChange({ dispatch }, changedValues, allValues) {
    // 表单项变化时请求数据
    // eslint-disable-next-line
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
class GoodsList extends PureComponent {
  componentDidMount() {
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
      list: { list = [] },
      loading,
      form,
      datalist
    } = this.props;
    const { getFieldDecorator } = form;
    const cardList = datalist ? (
      <Link to='/item/detail/:id'>
        <List
          rowKey="id"
          loading={loading}
          grid={{ gutter: 16, xl: 6, lg: 4, md: 4, sm: 3, xs: 2 }}
          pagination={{ pageSize: 46 }}
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
                      backgroundImage: `url(${item.cardData.mainPicInfo.url})`
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
                <div className={styles.cardItemContent}>
                  {/* <span>{moment(item.updatedAt).fromNow()}</span> */}
                  <div className={styles.avatarList}>
                    <Avatar
                      size={"small"}
                      src={item.cardData.user.avatar}
                      alt={item.cardData.user.userNick}
                    />
                    &nbsp;&nbsp;
                    <span>{item.cardData.user.userNick}</span>
                  </div>
                </div>
              </Card>
            </List.Item>
          )}
        />
      </Link>
    ) : null;

    const formItemLayout = {
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 }
      }
    };

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
      <div className={styles.coverCardList}>
        <Card bordered={false}>
          <Form layout="inline">
            <StandardFormRow
              title="所属类目"
              block
              style={{ paddingBottom: 11 }}
            >
              <FormItem>
                {getFieldDecorator("category")(
                  <TagSelect expandable actionsText={actionsTextMap}>
                    <TagSelect.Option value="cat1">类目一</TagSelect.Option>
                    <TagSelect.Option value="cat2">类目二</TagSelect.Option>
                    <TagSelect.Option value="cat3">类目三</TagSelect.Option>
                    <TagSelect.Option value="cat4">类目四</TagSelect.Option>
                    <TagSelect.Option value="cat5">类目五</TagSelect.Option>
                    <TagSelect.Option value="cat6">类目六</TagSelect.Option>
                    <TagSelect.Option value="cat7">类目七</TagSelect.Option>
                    <TagSelect.Option value="cat8">类目八</TagSelect.Option>
                    <TagSelect.Option value="cat9">类目九</TagSelect.Option>
                    <TagSelect.Option value="cat10">类目十</TagSelect.Option>
                    <TagSelect.Option value="cat11">类目十一</TagSelect.Option>
                    <TagSelect.Option value="cat12">类目十二</TagSelect.Option>
                  </TagSelect>
                )}
              </FormItem>
            </StandardFormRow>
            <StandardFormRow title="其它选项" grid last>
              <Row gutter={16}>
                <Col lg={8} md={10} sm={10} xs={24}>
                  <FormItem {...formItemLayout} label="作者">
                    {getFieldDecorator("author", {})(
                      <Select
                        placeholder="不限"
                        style={{ maxWidth: 200, width: "100%" }}
                      >
                        <Option value="lisa">王昭君</Option>
                      </Select>
                    )}
                  </FormItem>
                </Col>
                <Col lg={8} md={10} sm={10} xs={24}>
                  <FormItem {...formItemLayout} label="好评度">
                    {getFieldDecorator("rate", {})(
                      <Select
                        placeholder="不限"
                        style={{ maxWidth: 200, width: "100%" }}
                      >
                        <Option value="good">优秀</Option>
                        <Option value="normal">普通</Option>
                      </Select>
                    )}
                  </FormItem>
                </Col>
              </Row>
            </StandardFormRow>
          </Form>
        </Card>
        <div className={styles.cardList}>{cardList}</div>
      </div>
    );
  }
}

export default GoodsList;
