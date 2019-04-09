import React, { PureComponent } from "react";
import { connect } from "dva";
import Link from "umi/link";
import router from "umi/router";
import { Card, Row, Col, Icon, Avatar, Tag, Divider, Spin, Input } from "antd";
import GridContent from "@/components/PageHeaderWrapper/GridContent";
import styles from "./Order.less";

@connect(({ loading, user, project }) => ({
  listLoading: loading.effects["list/fetch"],
  currentUser: user.currentUser,
  currentUserLoading: loading.effects["user/fetchCurrent"],
  project,
  projectLoading: loading.effects["project/fetchNotice"]
}))
class Center extends PureComponent {
  state = {
    newTags: [],
    inputVisible: false,
    inputValue: ""
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: "user/fetchCurrent"
    });
    dispatch({
      type: "list/fetch",
      payload: {
        count: 8
      }
    });
    dispatch({
      type: "project/fetchNotice"
    });
  }

  onTabChange = key => {
    const { match } = this.props;
    switch (key) {
      case "all":
        router.push(`${match.url}/all`);
        break;
      default:
        break;
    }
  };

  showInput = () => {
    this.setState({ inputVisible: true }, () => this.input.focus());
  };

  saveInputRef = input => {
    this.input = input;
  };

  handleInputChange = e => {
    this.setState({ inputValue: e.target.value });
  };

  handleInputConfirm = () => {
    const { state } = this;
    const { inputValue } = state;
    let { newTags } = state;
    if (
      inputValue &&
      newTags.filter(tag => tag.label === inputValue).length === 0
    ) {
      newTags = [
        ...newTags,
        { key: `new-${newTags.length}`, label: inputValue }
      ];
    }
    this.setState({
      newTags,
      inputVisible: false,
      inputValue: ""
    });
  };

  render() {
    const { newTags, inputVisible, inputValue } = this.state;
    const {
      listLoading,
      currentUser,
      currentUserLoading,
      project: { notice },
      projectLoading,
      match,
      location,
      children
    } = this.props;

    const operationTabList = [
      {
        key: "all",
        tab: (
          <span>
            所有订单 <span style={{ fontSize: 14 }}>(8)</span>
          </span>
        )
      }
    ];

    return (
      <GridContent className={styles.userCenter}>
        <Row gutter={16}>
          <Col>
            <Card
              className={styles.tabsCard}
              bordered={false}
              tabList={operationTabList}
              activeTabKey={location.pathname.replace(`${match.path}/`, "")}
              onTabChange={this.onTabChange}
              loading={listLoading}
            >
              {children}
            </Card>
          </Col>
        </Row>
      </GridContent>
    );
  }
}

export default Center;
