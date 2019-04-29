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
import GoodsList from "../GoodsList";

const { Option } = Select;
const FormItem = Form.Item;

/* eslint react/no-array-index-key: 0 */

class Goods extends PureComponent {
  render() {
  
    return (
      <div className={styles.coverCardList}>
        <div className={styles.cardList}>
        <GoodsList datalist={[]} grid={{ gutter: 16,xxl:6, xl: 4, lg: 3, md: 3, sm: 1, xs: 1 }} pagination={{ pageSize: 46 }}/>
        </div>
      </div>
    );
  }
}

export default Goods;
