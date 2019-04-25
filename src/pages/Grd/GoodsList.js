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
          <Form layout="inline" style={{textAlign:'center'}}>
            <StandardFormRow title="所属类目" style={{bordered:'0',margin:'0'}}>
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
        <div className={styles.cardList}>
          {datalist ? (
            <List
              rowKey="id"
              loading={loading}
              grid={{ gutter: 16, xl: 6, lg: 4, md: 4, sm: 1, xs: 1 }}
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
                          backgroundImage: `url(${
                            item.cardData.mainPicInfo.url
                          })`
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
          ) : null}
        </div>
      </div>
    );
  }
}

export default GoodsList;
