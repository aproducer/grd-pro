import React, { memo } from "react";
import { Row, Col, Card, Tabs, DatePicker } from "antd";
import { FormattedMessage, formatMessage } from "umi/locale";
import numeral from "numeral";
import styles from "./Analysis.less";
import { Bar } from "@/components/Charts";

const SalesCard = memo(({ salesData, loading }) => (
  <Card
    loading={loading}
    className={styles.salesCard}
    bordered={false}
    title={<FormattedMessage id="app.analysis.the-trend-of-sales" defaultMessage="销售趋势柱状图" />}
    bodyStyle={{ padding: 24 }}
    style={{ marginTop: 24 }}
  >
    <div
      style={{
        minHeight: 380
      }}
    >
      <div className={styles.salesBar}>
        <Bar
          height={295}
          title={
            <FormattedMessage
              id="app.analysis.sales-trend"
              defaultMessage="销售趋势"
            />
          }
          data={salesData}
        />
      </div>
    </div>
  </Card>
));

export default SalesCard;
