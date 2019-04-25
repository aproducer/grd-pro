import React, { PureComponent } from "react";
import { connect } from "dva";
import Link from "umi/link";
import router from "umi/router";
import { Card, Row, Col, Icon, Avatar, Tag, Divider, Spin, Input } from "antd";
import GridContent from "@/components/PageHeaderWrapper/GridContent";
import styles from "./User.less";

import RenderAuthorized from "@/components/Authorized"; //权限管理模块

const Authorized = RenderAuthorized("user"); //赋予当前用户权限

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
    this.authorizedCheck();
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

  authorizedCheck() {
    const Authorized = RenderAuthorized("admin"); //赋予当前用户权限
  }

  onTabChange = key => {
    const { match } = this.props;
    switch (key) {
      case "settings":
        router.push(`${match.url}/settings`);
        break;
      case "comments":
        router.push(`${match.url}/comments`);
        break;
      case "goods":
        router.push(`${match.url}/goods`);
        break;
      case "address":
        router.push(`${match.url}/address`);
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
        key: "settings",
        tab: <span>个人信息</span>
      },
      {
        key: "comments",
        tab: (
          <span>
            客户评论 <span style={{ fontSize: 14 }}>(8)</span>
          </span>
        )
      },
      {
        key: "goods",
        tab: (
          <span>
            在售商品 <span style={{ fontSize: 14 }}>(2)</span>
          </span>
        )
      },
      {
        key: "address",
        tab: (
          <span>
            地址管理
          </span>
        )
      }
    ];

    return (
      <GridContent className={styles.userCenter}>
        <Row gutter={24}>
          {/* <Col lg={7} md={24}>
            <Card
              bordered={false}
              style={{ marginBottom: 24 }}
              loading={currentUserLoading}
            >
              {currentUser && Object.keys(currentUser).length ? (
                <div>
                  <div className={styles.avatarHolder}>
                    <img alt="" src={currentUser.avatar} />
                    <div className={styles.name}>{currentUser.name}</div>
                    <div>{currentUser.signature}</div>
                  </div>
                  <div className={styles.detail}>
                    <p>
                      <i className={styles.address} />
                      {currentUser.geographic.province.label}
                      {currentUser.geographic.city.label}
                    </p>
                  </div>
                  <Divider dashed />
                  <div className={styles.tags}>
                    <div className={styles.tagsTitle}>标签</div>
                    {currentUser.tags.concat(newTags).map(item => (
                      <Tag key={item.key}>{item.label}</Tag>
                    ))}
                    {inputVisible && (
                      <Input
                        ref={this.saveInputRef}
                        type="text"
                        size="small"
                        style={{ width: 78 }}
                        value={inputValue}
                        onChange={this.handleInputChange}
                        onBlur={this.handleInputConfirm}
                        onPressEnter={this.handleInputConfirm}
                      />
                    )}
                    {!inputVisible && (
                      <Tag
                        onClick={this.showInput}
                        style={{ background: "#fff", borderStyle: "dashed" }}
                      >
                        <Icon type="plus" />
                      </Tag>
                    )}
                  </div>
                  <Divider style={{ marginTop: 16 }} dashed />
                  <div className={styles.team}>
                    <div className={styles.teamTitle}>团队</div>
                    <Spin spinning={projectLoading}>
                      <Row gutter={36}>
                        {notice.map(item => (
                          <Col key={item.id} lg={24} xl={12}>
                            <Link to={item.href}>
                              <Avatar size="small" src={item.logo} />
                              {item.member}
                            </Link>
                          </Col>
                        ))}
                      </Row>
                    </Spin>
                  </div>
                </div>
              ) : (
                "loading..."
              )}
            </Card>
          </Col> */}
          <Col lg={24} md={24}>
            <Card
              className={styles.tabsCard}
              bordered={false}
              tabList={operationTabList}
              activeTabKey={location.pathname.replace(`${match.path}/`, "")}
              onTabChange={this.onTabChange}
              loading={listLoading}
            >
              <Authorized authority="admin" noMatch={<>当没有权限时展示</>}>
                {/* 权限验证,当具有admin权限时显示 */}
                {children}
              </Authorized>
            </Card>
          </Col>
        </Row>
      </GridContent>
    );
  }
}

export default Center;
