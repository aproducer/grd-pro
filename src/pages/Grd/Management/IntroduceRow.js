import React, { memo } from 'react';
import { Row, Col, Icon, Tooltip } from 'antd';
import { FormattedMessage } from 'umi/locale';
import styles from './Analysis.less';
import { ChartCard, MiniArea, MiniBar, MiniProgress, Field } from '@/components/Charts';
import Trend from '@/components/Trend';
import numeral from 'numeral';
import Yuan from '@/utils/Yuan';

const topColResponsiveProps = {
  xs: 24,
  sm: 24,
  md: 8,
  lg: 8,
  xl: 8,
  style: { marginBottom: 24 },
};

const IntroduceRow = memo(({ loading, visitData }) => (
  <Row gutter={16}>
    <Col {...topColResponsiveProps}>
      <ChartCard
        bordered={false}
        title={<FormattedMessage id="app.analysis.total-sales" defaultMessage="总销售额" />}
        // action={
        //   <Tooltip
        //     title={<FormattedMessage id="app.analysis.introduce" defaultMessage="Introduce" />}
        //   >
        //     <Icon type="info-circle-o" />
        //   </Tooltip>
        // }
        loading={loading}
        total={() => <Yuan>123456</Yuan>}//总销售额
        footer={
          <Field
            label={<FormattedMessage id="app.analysis.day-sales" defaultMessage="日均销售额" />}
            value={`￥${numeral(123456).format('0,0')}`}//日均销售额
          />
        }
        contentHeight={46}
      >
        <Trend flag="down">
          <FormattedMessage id="app.analysis.day" defaultMessage="较昨日上涨" />
          <span className={styles.trendText}>11%</span>
        </Trend>
      </ChartCard>
    </Col>

    <Col {...topColResponsiveProps}>
      <ChartCard
        bordered={false}
        loading={loading}
        title={<FormattedMessage id="app.analysis.visits" defaultMessage="访问量" />}
        total={numeral(321).format('0,0')}
        footer={
          <Field
            label={<FormattedMessage id="app.analysis.day-visits" defaultMessage="日访问量" />}
            value={numeral(6).format('0,0')}
          />
        }
        contentHeight={46}
      >
        <MiniArea color="#975FE4" data={visitData} />
      </ChartCard>
    </Col>
    <Col {...topColResponsiveProps}>
      <ChartCard
        bordered={false}
        loading={loading}
        title={<FormattedMessage id="app.analysis.payments" defaultMessage="支付笔数" />}
        total={numeral(114).format('0,0')}
        footer={
          <Field
            label={
              <FormattedMessage
                id="app.analysis.conversion-rate"
                defaultMessage="转化率"
              />
            }
            value="60%"
          />
        }
        contentHeight={46}
      >
        <MiniBar data={visitData} />
      </ChartCard>
    </Col>
  </Row>
));

export default IntroduceRow;
