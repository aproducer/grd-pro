webpackHotUpdate("p__Grd__Home",{

/***/ "./src/pages/Grd/GoodsList.js":
/*!************************************!*\
  !*** ./src/pages/Grd/GoodsList.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_es_row_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/es/row/style */ "./node_modules/antd/es/row/style/index.js");
/* harmony import */ var antd_es_row__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/es/row */ "./node_modules/antd/es/row/index.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_es_col_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/es/col/style */ "./node_modules/antd/es/col/style/index.js");
/* harmony import */ var antd_es_col__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/es/col */ "./node_modules/antd/es/col/index.js");
/* harmony import */ var antd_es_list_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/es/list/style */ "./node_modules/antd/es/list/style/index.js");
/* harmony import */ var antd_es_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/es/list */ "./node_modules/antd/es/list/index.js");
/* harmony import */ var antd_es_statistic_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/es/statistic/style */ "./node_modules/antd/es/statistic/style/index.js");
/* harmony import */ var antd_es_statistic__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd/es/statistic */ "./node_modules/antd/es/statistic/index.js");
/* harmony import */ var antd_es_card_style__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd/es/card/style */ "./node_modules/antd/es/card/style/index.js");
/* harmony import */ var antd_es_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd/es/card */ "./node_modules/antd/es/card/index.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var antd_es_form_style__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! antd/es/form/style */ "./node_modules/antd/es/form/style/index.js");
/* harmony import */ var antd_es_form__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! antd/es/form */ "./node_modules/antd/es/form/index.js");
/* harmony import */ var antd_es_select_style__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! antd/es/select/style */ "./node_modules/antd/es/select/style/index.js");
/* harmony import */ var antd_es_select__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! antd/es/select */ "./node_modules/antd/es/select/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var dva__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! dva */ "./node_modules/dva/index.js");
/* harmony import */ var dva__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(dva__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var umi_locale__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! umi/locale */ "./node_modules/umi-plugin-locale/lib/locale.js");
/* harmony import */ var umi_locale__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(umi_locale__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _components_TagSelect__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @/components/TagSelect */ "./src/components/TagSelect/index.js");
/* harmony import */ var _components_AvatarList__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @/components/AvatarList */ "./src/components/AvatarList/index.js");
/* harmony import */ var _components_Ellipsis__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @/components/Ellipsis */ "./src/components/Ellipsis/index.js");
/* harmony import */ var _components_StandardFormRow__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @/components/StandardFormRow */ "./src/components/StandardFormRow/index.js");
/* harmony import */ var _GoodsList_less__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./GoodsList.less */ "./src/pages/Grd/GoodsList.less");
/* harmony import */ var _GoodsList_less__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(_GoodsList_less__WEBPACK_IMPORTED_MODULE_28__);





















var _dec, _dec2, _class;










var Option = antd_es_select__WEBPACK_IMPORTED_MODULE_19__["default"].Option;
var FormItem = antd_es_form__WEBPACK_IMPORTED_MODULE_17__["default"].Item;
/* eslint react/no-array-index-key: 0 */

var GoodsList = (_dec = Object(dva__WEBPACK_IMPORTED_MODULE_22__["connect"])(function (_ref) {
  var list = _ref.list,
      loading = _ref.loading;
  return {
    list: list,
    loading: loading.models.list
  };
}), _dec2 = antd_es_form__WEBPACK_IMPORTED_MODULE_17__["default"].create({
  onValuesChange: function onValuesChange(_ref2, changedValues, allValues) {
    var dispatch = _ref2.dispatch;
    // 表单项变化时请求数据
    // eslint-disable-next-line
    console.log(changedValues, allValues); // 模拟查询表单生效

    dispatch({
      type: "list/fetch",
      payload: {
        count: 8
      }
    });
  }
}), _dec(_class = _dec2(_class =
/*#__PURE__*/
function (_PureComponent) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_15___default()(GoodsList, _PureComponent);

  function GoodsList() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_11___default()(this, GoodsList);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_13___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_14___default()(GoodsList).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_12___default()(GoodsList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var dispatch = this.props.dispatch;
      dispatch({
        type: "list/fetch",
        payload: {
          count: 8
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          _this$props$list$list = _this$props.list.list,
          list = _this$props$list$list === void 0 ? [] : _this$props$list$list,
          loading = _this$props.loading,
          form = _this$props.form,
          datalist = _this$props.datalist;
      var getFieldDecorator = form.getFieldDecorator;
      var cardList = datalist ? react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(antd_es_list__WEBPACK_IMPORTED_MODULE_6__["default"], {
        rowKey: "id",
        loading: loading,
        grid: {
          gutter: 16,
          xl: 6,
          lg: 4,
          md: 4,
          sm: 3,
          xs: 2
        },
        pagination: {
          pageSize: 46
        },
        dataSource: datalist,
        renderItem: function renderItem(item) {
          return item.spu ? react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(antd_es_list__WEBPACK_IMPORTED_MODULE_6__["default"].Item, null, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(antd_es_card__WEBPACK_IMPORTED_MODULE_10__["default"], {
            className: _GoodsList_less__WEBPACK_IMPORTED_MODULE_28___default.a.card,
            hoverable: true,
            cover: react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement("img", {
              alt: item.t,
              src: item.img
            })
          }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(antd_es_card__WEBPACK_IMPORTED_MODULE_10__["default"].Meta, {
            description: react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(_components_Ellipsis__WEBPACK_IMPORTED_MODULE_26__["default"], {
              lines: 2
            }, item.t)
          }), react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(antd_es_statistic__WEBPACK_IMPORTED_MODULE_8__["default"], {
            className: _GoodsList_less__WEBPACK_IMPORTED_MODULE_28___default.a.priceNum,
            value: item.jp,
            precision: 2,
            prefix: ""
          }))) : react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(antd_es_col__WEBPACK_IMPORTED_MODULE_4__["default"], {
            xl: 8,
            lg: 12,
            md: 12,
            sm: 16,
            xs: 24,
            style: {
              padding: 0
            }
          }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(antd_es_list__WEBPACK_IMPORTED_MODULE_6__["default"].Item, null, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(antd_es_card__WEBPACK_IMPORTED_MODULE_10__["default"], {
            className: _GoodsList_less__WEBPACK_IMPORTED_MODULE_28___default.a.card,
            hoverable: true,
            cover: react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement("img", {
              alt: item.t,
              src: item.img
            })
          }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(antd_es_card__WEBPACK_IMPORTED_MODULE_10__["default"].Meta, {
            description: react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(_components_Ellipsis__WEBPACK_IMPORTED_MODULE_26__["default"], {
              lines: 2
            }, item.t)
          }), react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(antd_es_statistic__WEBPACK_IMPORTED_MODULE_8__["default"], {
            className: _GoodsList_less__WEBPACK_IMPORTED_MODULE_28___default.a.priceNum,
            value: item.jp,
            precision: 2,
            prefix: ""
          }))));
        }
      }) : null;
      var formItemLayout = {
        wrapperCol: {
          xs: {
            span: 24
          },
          sm: {
            span: 16
          }
        }
      };
      var actionsTextMap = {
        expandText: react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(umi_locale__WEBPACK_IMPORTED_MODULE_23__["FormattedMessage"], {
          id: "component.tagSelect.expand",
          defaultMessage: "Expand"
        }),
        collapseText: react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(umi_locale__WEBPACK_IMPORTED_MODULE_23__["FormattedMessage"], {
          id: "component.tagSelect.collapse",
          defaultMessage: "Collapse"
        }),
        selectAllText: react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(umi_locale__WEBPACK_IMPORTED_MODULE_23__["FormattedMessage"], {
          id: "component.tagSelect.all",
          defaultMessage: "All"
        })
      };
      return react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement("div", {
        className: _GoodsList_less__WEBPACK_IMPORTED_MODULE_28___default.a.coverCardList
      }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(antd_es_card__WEBPACK_IMPORTED_MODULE_10__["default"], {
        bordered: false
      }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(antd_es_form__WEBPACK_IMPORTED_MODULE_17__["default"], {
        layout: "inline"
      }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(_components_StandardFormRow__WEBPACK_IMPORTED_MODULE_27__["default"], {
        title: "\u6240\u5C5E\u7C7B\u76EE",
        block: true,
        style: {
          paddingBottom: 11
        }
      }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(FormItem, null, getFieldDecorator("category")(react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(_components_TagSelect__WEBPACK_IMPORTED_MODULE_24__["default"], {
        expandable: true,
        actionsText: actionsTextMap
      }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(_components_TagSelect__WEBPACK_IMPORTED_MODULE_24__["default"].Option, {
        value: "cat1"
      }, "\u7C7B\u76EE\u4E00"), react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(_components_TagSelect__WEBPACK_IMPORTED_MODULE_24__["default"].Option, {
        value: "cat2"
      }, "\u7C7B\u76EE\u4E8C"), react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(_components_TagSelect__WEBPACK_IMPORTED_MODULE_24__["default"].Option, {
        value: "cat3"
      }, "\u7C7B\u76EE\u4E09"), react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(_components_TagSelect__WEBPACK_IMPORTED_MODULE_24__["default"].Option, {
        value: "cat4"
      }, "\u7C7B\u76EE\u56DB"), react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(_components_TagSelect__WEBPACK_IMPORTED_MODULE_24__["default"].Option, {
        value: "cat5"
      }, "\u7C7B\u76EE\u4E94"), react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(_components_TagSelect__WEBPACK_IMPORTED_MODULE_24__["default"].Option, {
        value: "cat6"
      }, "\u7C7B\u76EE\u516D"), react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(_components_TagSelect__WEBPACK_IMPORTED_MODULE_24__["default"].Option, {
        value: "cat7"
      }, "\u7C7B\u76EE\u4E03"), react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(_components_TagSelect__WEBPACK_IMPORTED_MODULE_24__["default"].Option, {
        value: "cat8"
      }, "\u7C7B\u76EE\u516B"), react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(_components_TagSelect__WEBPACK_IMPORTED_MODULE_24__["default"].Option, {
        value: "cat9"
      }, "\u7C7B\u76EE\u4E5D"), react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(_components_TagSelect__WEBPACK_IMPORTED_MODULE_24__["default"].Option, {
        value: "cat10"
      }, "\u7C7B\u76EE\u5341"), react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(_components_TagSelect__WEBPACK_IMPORTED_MODULE_24__["default"].Option, {
        value: "cat11"
      }, "\u7C7B\u76EE\u5341\u4E00"), react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(_components_TagSelect__WEBPACK_IMPORTED_MODULE_24__["default"].Option, {
        value: "cat12"
      }, "\u7C7B\u76EE\u5341\u4E8C"))))), react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(_components_StandardFormRow__WEBPACK_IMPORTED_MODULE_27__["default"], {
        title: "\u5176\u5B83\u9009\u9879",
        grid: true,
        last: true
      }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(antd_es_row__WEBPACK_IMPORTED_MODULE_1__["default"], {
        gutter: 16
      }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(antd_es_col__WEBPACK_IMPORTED_MODULE_4__["default"], {
        lg: 8,
        md: 10,
        sm: 10,
        xs: 24
      }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(FormItem, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({}, formItemLayout, {
        label: "\u4F5C\u8005"
      }), getFieldDecorator("author", {})(react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(antd_es_select__WEBPACK_IMPORTED_MODULE_19__["default"], {
        placeholder: "\u4E0D\u9650",
        style: {
          maxWidth: 200,
          width: "100%"
        }
      }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(Option, {
        value: "lisa"
      }, "\u738B\u662D\u541B"))))), react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(antd_es_col__WEBPACK_IMPORTED_MODULE_4__["default"], {
        lg: 8,
        md: 10,
        sm: 10,
        xs: 24
      }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(FormItem, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({}, formItemLayout, {
        label: "\u597D\u8BC4\u5EA6"
      }), getFieldDecorator("rate", {})(react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(antd_es_select__WEBPACK_IMPORTED_MODULE_19__["default"], {
        placeholder: "\u4E0D\u9650",
        style: {
          maxWidth: 200,
          width: "100%"
        }
      }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(Option, {
        value: "good"
      }, "\u4F18\u79C0"), react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(Option, {
        value: "normal"
      }, "\u666E\u901A"))))))))), react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement("div", {
        className: _GoodsList_less__WEBPACK_IMPORTED_MODULE_28___default.a.cardList
      }, cardList));
    }
  }]);

  return GoodsList;
}(react__WEBPACK_IMPORTED_MODULE_20__["PureComponent"])) || _class) || _class);
/* harmony default export */ __webpack_exports__["default"] = (GoodsList);

/***/ })

})
//# sourceMappingURL=p__Grd__Home.226da273acf0442002f0.hot-update.js.map