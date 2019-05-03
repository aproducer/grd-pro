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
  Table,
  Affix,
  InputNumber,
  Drawer,
  Icon,
  Input,
  Popconfirm,
  Form
} from "antd";

import Ellipsis from "@/components/Ellipsis";
import GeographicView from "../GeographicView";
import styles from "./Address.less";

const FormItem = Form.Item;

const rowSelection = {
  //表单选择项事件处理
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      "selectedRows: ",
      selectedRows
    );
  },
  getCheckboxProps: record => ({
    name: record.name
  })
};

const validatorGeographic = (rule, value, callback) => {
  //验证地址输入
  const { province, city } = value;
  if (!province.key) {
    callback("请选择您所在的省份!");
  }
  if (!city.key) {
    callback("请选择您所在的城市!");
  }
  callback();
};

const data = [];
for (let i = 0; i < 8; i++) {
  data.push({
    key: i.toString(),
    aid: i.toString(),
    uid: "123456",
    name: `测试 ${i}`,
    phone: "18888888888",
    geographic: {
      city: { key: "120100", label: "市辖区" },
      province: { key: "120000", label: "天津市" }
    },
    detail: "测试区测试路123456号"
  });
}

const EditableContext = React.createContext();
class EditableCell extends PureComponent {
  //可编辑单元格
  getInput = getFieldDecorator => {
    //对不同的编辑类型返回不同的input框
    const { index, title, record, type } = this.props;
    if (this.props.type === "geographic") {
      //当编辑项为省市信息时
      return getFieldDecorator("geographic", {
        rules: [
          {
            required: true,
            message: "请选择所在地区"
          },
          {
            validator: validatorGeographic
          }
        ],
        initialValue: record[index]
      })(<GeographicView />);
    } else if (this.props.index === "phone") {
        //当编辑项为电话时
      return getFieldDecorator("phone", {
        rules: [
          {
            required: true,
            message: "请输入联系电话"
          },
          {
            pattern: /^\d{11}$/,
            message: "电话格式不符合规范"
          }
        ],
        initialValue: record[index]
      })(<Input />);
    }
    //普通文本编辑项
    return getFieldDecorator(index, {
      rules: [
        {
          required: true,
          message: `请输入${title}!`
        }
      ],
      initialValue: record[index]
    })(<Input />);
  };
  render() {
    const { editing, ...restProps } = this.props;
    return (
      <EditableContext.Consumer>
        {form => {
          const { getFieldDecorator } = form;
          return (
            <td {...restProps}>
              {editing ? (
                <FormItem style={{ margin: 0 }}>
                  {this.getInput(getFieldDecorator)}
                </FormItem>
              ) : (
                restProps.children
              )}
            </td>
          );
        }}
      </EditableContext.Consumer>
    );
  }
}

class Address extends PureComponent {
  state = {
    data,
    //editingKey为修改的项
    editingKey: ""
  };
  columns = [
    {
      title: "姓名",
      dataIndex: "name",
      width: 100,
      editable: true
    },
    {
      title: "电话",
      dataIndex: "phone",
      width: 200,
      editable: true
    },
    {
      title: "省区",
      dataIndex: "geographic",
      width: 200,
      editable: true,
      render: geographic => {
        if (geographic) {
          return (
            <span>
              {" "}
              {`${geographic.province.label + geographic.city.label}`}{" "}
            </span>
          );
        }
        return <span>数据不存在</span>;
      }
    },
    {
      title: "详细地址",
      dataIndex: "detail",
      width: 300,
      editable: true
    },
    {
      title: "操作",
      dataIndex: "operation",
      width: 100,
      render: (text, record) => {
        const { editingKey } = this.state;
        const editable = this.isEditing(record);
        return (
          <div>
            {editable ? (
              <span>
                <EditableContext.Consumer>
                  {form => (
                    <a
                      href="javascript:;"
                      onClick={() => this.save(form, record.key)}
                      style={{ marginRight: 8 }}
                    >
                      确认
                    </a>
                  )}
                </EditableContext.Consumer>
                <Popconfirm
                  title="确认取消吗?"
                  onConfirm={() => this.cancel(record.key)}
                >
                  <a>取消</a>
                </Popconfirm>
              </span>
            ) : (
              <span>
                <a
                  disabled={editingKey !== ""}
                  onClick={() => this.edit(record.key)}
                >
                  编辑
                </a>
                &nbsp;&nbsp;
                <Popconfirm title="确认删除吗?">
                  <a disabled={editingKey !== ""}>删除</a>
                </Popconfirm>
              </span>
            )}
          </div>
        );
      }
    }
  ];
  //确认对应数据项是否为编辑项
  isEditing = record => record.key === this.state.editingKey;

  //取消编辑,将editingKey置空
  cancel = () => {
    this.setState({ editingKey: "" });
  };

  //存储编辑内容
  save(form, key) {
    //接受的key为对应数据项的key
    form.validateFields((error, row) => {
      //当有错误时
      if (error) {
        return;
      }
      console.log(row);
      //当没有错误时
      const newData = [...this.state.data];
      //记录修改项的下标
      const index = newData.findIndex(item => key === item.key);
      if (index > -1) {
        //当修改项存在时候
        const item = newData[index];
        //替换数据
        newData.splice(index, 1, {
          ...item,
          ...row
        });
        this.setState({ data: newData, editingKey: "" });
      } else {
        //当修改项不存在时
        newData.push(row);
        this.setState({ data: newData, editingKey: "" });
      }
    });
  }
  //编辑时,记录对应项的key为editingKey
  edit(key) {
    this.setState({ editingKey: key });
  }

  render() {
    const components = {
      body: {
        cell: EditableCell
      }
    };
    const columns = this.columns.map(col => {
      if (!col.editable) {
        //当columns中的editable不为true时,直接返回对应col
        return col;
      }
      //当columns中editable为true时,对该col进行处理
      return {
        ...col,
        onCell: record => ({
          //传入EditableCell中
          record,
          type: col.dataIndex === "geographic" ? "geographic" : "text",
          index: col.dataIndex,
          title: col.title,
          //判断是否为真在编辑项
          editing: this.isEditing(record)
        })
      };
    });
    return (
      <>
        <Button
          className={styles.btnTable}
          icon="plus"
          onClick={this.showModal}
        >
          新增商品
        </Button>
        <Button type="danger" className={styles.btnTable} icon="delete">
          批量删除
        </Button>
        <EditableContext.Provider value={this.props.form}>
          <Table
            components={components}
            dataSource={this.state.data}
            columns={columns}
            scroll={{ x: 1000 }}
            rowSelection={rowSelection}
            rowClassName="editable-row"
            pagination={false}
            //   pagination={{
            //     //点击分页时,取消编辑
            //     onChange: this.cancel
            //   }}
          />
        </EditableContext.Provider>
      </>
    );
  }
}
export default Form.create()(Address);
