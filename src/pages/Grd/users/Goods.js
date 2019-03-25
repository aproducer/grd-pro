import React, { PureComponent } from "react";
import moment from "moment";
import { connect } from "dva";
import { Row, Col, Form, Card, Select, List, Divider, Statistic } from "antd";
import { FormattedMessage } from "umi/locale";

import TagSelect from "@/components/TagSelect";
import AvatarList from "@/components/AvatarList";
import Ellipsis from "@/components/Ellipsis";
import StandardFormRow from "@/components/StandardFormRow";

import styles from "./Goods.less";

const { Option } = Select;
const FormItem = Form.Item;

/* eslint react/no-array-index-key: 0 */

class Goods extends PureComponent {
  render() {
    return (
      <div className={styles.coverCardList}>
        <div className={styles.cardList}>
          <List
            rowKey="id"
            // loading={loading}
            grid={{ gutter: 16, xl: 3, lg: 2, md: 2, sm: 2, xs: 1 }}
            pagination={true}
            dataSource={[{}, {}]}
            renderItem={item => (
              <List.Item>
                <Card
                  className={styles.card}
                  hoverable
                  cover={
                    <img
                      alt={"Alipay"}
                      src={
                        "https://gw.alipayobjects.com/zos/rmsportal/uMfMFlvUuceEyPpotzlq.png"
                      }
                    />
                  }
                >
                  <Card.Meta
                    description={
                      <Ellipsis lines={2}>
                        {"那是一种内在的东西， 他们到达不了，也无法触及的"}
                      </Ellipsis>
                    }
                  />
                  <Statistic
                    className={styles.priceNum}
                    value={893.88}
                    precision={2}
                    prefix={""}
                  />
                  <Divider className={styles.priceDivider} />
                  <div className={styles.cardItemContent}>
                    <span>{moment("2019-03-25T08:31:05.505Z").fromNow()}</span>
                  </div>
                </Card>
              </List.Item>
            )}
          />
        </div>
      </div>
    );
  }
}

export default Goods;
