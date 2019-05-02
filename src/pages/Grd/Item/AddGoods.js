import React, { PureComponent } from "react";
import moment from "moment";
import { connect } from "dva";

import {
  Form,
  Select,
  InputNumber,
  Switch,
  Radio,
  Slider,
  Button,
  Upload,
  Icon,
  Rate,
  Checkbox,
  Row,
  Col,
  Modal,
  Input
} from "antd";

import GeographicView from "../GeographicView";
// 引入编辑器组件
import BraftEditor from "braft-editor";
// 引入编辑器样式
import "braft-editor/dist/index.css";

const { Option } = Select;

const validatorGeographic = (rule, value, callback) => {
  //验证地址输入
  const { province, city } = value;
  if (!province.key) {
    callback("Please input your province!");
  }
  if (!city.key) {
    callback("Please input your city!");
  }
  callback();
};

class AddItem extends PureComponent {
  state = {
    editorState: BraftEditor.createEditorState(null),
    previewVisible: false,
    previewImage: "",
    fileList: []
  };

  componentDidMount() {
    // 异步设置编辑器内容
    setTimeout(() => {
      this.props.form.setFieldsValue({
        intro: BraftEditor.createEditorState()
      });
    }, 0);
  }

  handleSubmit = event => {
    event.preventDefault();

    this.props.form.validateFields((error, values) => {
      console.log(values);
      if (!error) {
        const submitData = {
          ...values,
          intro: values.intro && values.intro.toRAW() // or values.content.toHTML()
        };
        console.log(submitData);
      }
    });
  };

  handleCancel = () => this.setState({ previewVisible: false });

  handlePreview = file => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true
    });
  };

  handleChange = ({ fileList }) => this.setState({ fileList });

  normFile = e => {
    //获取文件上传值
    console.log("Upload event:", e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  handleEditorChange = editorState => {
    this.setState({ editorState });
  };

  render() {
    const { editorState } = this.state;
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 4 },
      wrapperCol: { span: 8 }
    };

    const { previewVisible, previewImage, fileList } = this.state;
    const uploadButton = (
      <div>
        <Icon type="plus" />
        <div className="ant-upload-text">Upload</div>
      </div>
    );

    return (
      <>
        <Form onSubmit={this.handleSubmit}>
          <Form.Item {...formItemLayout} label="商品名称">
            {getFieldDecorator("title", {
              rules: [
                {
                  required: true,
                  message: "请输入商品名称"
                }
              ]
            })(<Input placeholder="请输入商品名称" allowClear />)}
          </Form.Item>
          <Form.Item {...formItemLayout} label="售价">
            {getFieldDecorator("price", {
              rules: [
                {
                  required: true
                }
              ],
              initialValue: 0
            })(<InputNumber min={0} />)}
          </Form.Item>

          <Form.Item {...formItemLayout} label="库存数量">
            {getFieldDecorator("num", {
              initialValue: 1,
              rules: [
                {
                  required: true
                }
              ]
            })(<InputNumber min={1} max={9999} />)}
          </Form.Item>

          <Form.Item {...formItemLayout} label="成色">
            {getFieldDecorator("condition", {
              rules: [
                {
                  required: true,
                  message: "请输入商品名称"
                }
              ]
            })(
              <Select placeholder="请选择商品成色">
                <Option value="全新">全新</Option>
                <Option value="非全新">非全新</Option>
              </Select>
            )}
          </Form.Item>
          <Form.Item {...formItemLayout} label="所在地区">
            {getFieldDecorator("geographic", {
              rules: [
                {
                  required: true,
                  message: "请选择所在地区"
                },
                {
                  validator: validatorGeographic
                }
              ]
            })(<GeographicView />)}
          </Form.Item>
          <Form.Item {...formItemLayout} label="交易方式">
            {getFieldDecorator("trade", {
              rules: [
                {
                  required: true,
                  message: "请选择交易方式"
                }
              ]
            })(
              <Select placeholder="请选择交易方式">
                <Option value="线下交易">线下交易</Option>
                <Option value="包邮">包邮</Option>
                <Option value="邮费自理">邮费自理</Option>
              </Select>
            )}
          </Form.Item>
          <Form.Item {...formItemLayout} label="商品类别">
            {getFieldDecorator("type", {
              rules: [
                {
                  required: true,
                  message: "请选择商品类别"
                }
              ]
            })(
              <Select placeholder="请选择商品类别">
                <Option value="手机">手机</Option>
                <Option value="数码">数码</Option>
                <Option value="租房">租房</Option>
                <Option value="服装">服装</Option>
                <Option value="居家">居家</Option>
                <Option value="美妆">美妆</Option>
                <Option value="运动">运动</Option>
                <Option value="家电">家电</Option>
                <Option value="玩具乐器">玩具乐器</Option>
              </Select>
            )}
          </Form.Item>
          <Form.Item
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 16 }}
            label="商品预览图"
          >
            {getFieldDecorator("pic", {
              valuePropName: "fileList",
              getValueFromEvent: this.normFile,
              setFieldsValue: fileList,
              rules: [
                {
                  required: true,
                  message: "请至少选择一张商品预览图",
                  type: "array"
                }
              ]
            })(
              <Upload
                action="//jsonplaceholder.typicode.com/posts/"
                listType="picture-card"
                onPreview={this.handlePreview}
                onChange={this.handleChange}
              >
                {fileList.length >= 5 ? null : uploadButton}
              </Upload>
            )}
          </Form.Item>

          <Form.Item
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 18 }}
            label="商品描述"
          >
            {getFieldDecorator("intro", {
              validateTrigger: "onBlur",
              rules: [
                {
                  required: true,
                  validator: (_, value, callback) => {
                    if (value.isEmpty()) {
                      callback("请输入正文内容");
                    } else {
                      callback();
                    }
                  }
                }
              ]
            })(
              <BraftEditor
                style={{ border: "1px solid #d9d9d9", borderRadius: "4px" }}
                excludeControls={[
                  "letter-spacing",
                  "line-height",
                  "superscript",
                  "subscript",
                  "remove-styles",
                  "emoji",
                  "text-indent",
                  "link",
                  "headings",
                  "list-ul",
                  "list-ol",
                  "blockquote",
                  "code"
                ]}
                media={{
                  accepts: { video: false, audio: false },
                  externals: { video: false, audio: false, embed: false }
                }}
                imageControls={[]}
                placeholder="请输入商品具体描述"
              />
            )}
          </Form.Item>

          <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
        <Modal
          visible={previewVisible}
          footer={null}
          onCancel={this.handleCancel}
        >
          <img alt="example" style={{ width: "100%" }} src={previewImage} />
        </Modal>
      </>
    );
  }
}

export default Form.create({ name: "validate_other" })(AddItem);
