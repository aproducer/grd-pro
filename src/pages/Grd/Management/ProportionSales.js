import React, { memo } from 'react';
import { Card, Radio } from 'antd';
import { FormattedMessage } from 'umi/locale';
import styles from './Analysis.less';
import { Pie } from '@/components/Charts';
import Yuan from '@/utils/Yuan';

const ProportionSales = memo(
  ({ loading, salesPieData,  }) => (
    <Card
      loading={loading}
      className={styles.salesCard}
      bordered={false}
      title={
        <FormattedMessage
          id="app.analysis.the-proportion-of-sales"
          defaultMessage="销售额类别占比"
        />
      }
      bodyStyle={{ padding: 24 }}
      style={{ marginTop: 24 }}
    >
      <div
        style={{
          minHeight: 380,
        }}
      >
        <h4 style={{ marginTop: 8, marginBottom: 32 }}>
          <FormattedMessage id="app.analysis.sales" defaultMessage="Sales" />
        </h4>
        <Pie
          hasLegend
          subTitle={<FormattedMessage id="app.analysis.sales" defaultMessage="销售额" />}
          total={() => <Yuan>{salesPieData.reduce((pre, now) => now.y + pre, 0)}</Yuan>}
          data={salesPieData}
          valueFormat={value => <Yuan>{value}</Yuan>}
          height={248}
          lineWidth={4}
        />
      </div>
    </Card>
  )
);

export default ProportionSales;
