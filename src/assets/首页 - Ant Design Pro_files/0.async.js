(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/antd/es/switch/index.js":
/*!********************************************************************************!*\
  !*** delegated ../node_modules/antd/es/switch/index.js from dll-reference umi ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference umi */ "dll-reference umi"))("./node_modules/antd/es/switch/index.js");

/***/ }),

/***/ "./node_modules/react-copy-to-clipboard/lib/index.js":
/*!*********************************************************************************************!*\
  !*** delegated ../node_modules/react-copy-to-clipboard/lib/index.js from dll-reference umi ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference umi */ "dll-reference umi"))("./node_modules/react-copy-to-clipboard/lib/index.js");

/***/ }),

/***/ "./src/components/SettingDrawer/BlockCheckbox.js":
/*!*******************************************************!*\
  !*** ./src/components/SettingDrawer/BlockCheckbox.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_es_tooltip_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/es/tooltip/style */ "./node_modules/antd/es/tooltip/style/index.js");
/* harmony import */ var antd_es_tooltip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/es/tooltip */ "./node_modules/antd/es/tooltip/index.js");
/* harmony import */ var antd_es_icon_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/es/icon/style */ "./node_modules/antd/es/icon/style/index.js");
/* harmony import */ var antd_es_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/es/icon */ "./node_modules/antd/es/icon/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index.less */ "./src/components/SettingDrawer/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_5__);







var BlockChecbox = function BlockChecbox(_ref) {
  var value = _ref.value,
      onChange = _ref.onChange,
      list = _ref.list;
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: _index_less__WEBPACK_IMPORTED_MODULE_5___default.a.blockChecbox,
    key: value
  }, list.map(function (item) {
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_es_tooltip__WEBPACK_IMPORTED_MODULE_1__["default"], {
      title: item.title,
      key: item.key
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: _index_less__WEBPACK_IMPORTED_MODULE_5___default.a.item,
      onClick: function onClick() {
        return onChange(item.key);
      }
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("img", {
      src: item.url,
      alt: item.key
    }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: _index_less__WEBPACK_IMPORTED_MODULE_5___default.a.selectIcon,
      style: {
        display: value === item.key ? 'block' : 'none'
      }
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_es_icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
      type: "check"
    }))));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (BlockChecbox);

/***/ }),

/***/ "./src/components/SettingDrawer/ThemeColor.js":
/*!****************************************************!*\
  !*** ./src/components/SettingDrawer/ThemeColor.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_es_tooltip_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/es/tooltip/style */ "./node_modules/antd/es/tooltip/style/index.js");
/* harmony import */ var antd_es_tooltip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/es/tooltip */ "./node_modules/antd/es/tooltip/index.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_es_icon_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/es/icon/style */ "./node_modules/antd/es/icon/style/index.js");
/* harmony import */ var antd_es_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/es/icon */ "./node_modules/antd/es/icon/index.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var umi_locale__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! umi/locale */ "./node_modules/umi-plugin-locale/lib/locale.js");
/* harmony import */ var umi_locale__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(umi_locale__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ThemeColor_less__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ThemeColor.less */ "./src/components/SettingDrawer/ThemeColor.less");
/* harmony import */ var _ThemeColor_less__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_ThemeColor_less__WEBPACK_IMPORTED_MODULE_8__);










var Tag = function Tag(_ref) {
  var color = _ref.color,
      check = _ref.check,
      rest = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_5___default()(_ref, ["color", "check"]);

  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({}, rest, {
    style: {
      backgroundColor: color
    }
  }), check ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_es_icon__WEBPACK_IMPORTED_MODULE_4__["default"], {
    type: "check"
  }) : '');
};

var ThemeColor = function ThemeColor(_ref2) {
  var colors = _ref2.colors,
      title = _ref2.title,
      value = _ref2.value,
      onChange = _ref2.onChange;
  var colorList = colors;

  if (!colors) {
    colorList = [{
      key: 'dust',
      color: '#F5222D'
    }, {
      key: 'volcano',
      color: '#FA541C'
    }, {
      key: 'sunset',
      color: '#FAAD14'
    }, {
      key: 'cyan',
      color: '#13C2C2'
    }, {
      key: 'green',
      color: '#52C41A'
    }, {
      key: 'daybreak',
      color: '#1890FF'
    }, {
      key: 'geekblue',
      color: '#2F54EB'
    }, {
      key: 'purple',
      color: '#722ED1'
    }];
  }

  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: _ThemeColor_less__WEBPACK_IMPORTED_MODULE_8___default.a.themeColor
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h3", {
    className: _ThemeColor_less__WEBPACK_IMPORTED_MODULE_8___default.a.title
  }, title), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: _ThemeColor_less__WEBPACK_IMPORTED_MODULE_8___default.a.content
  }, colorList.map(function (_ref3) {
    var key = _ref3.key,
        color = _ref3.color;
    return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_es_tooltip__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: color,
      title: Object(umi_locale__WEBPACK_IMPORTED_MODULE_7__["formatMessage"])({
        id: "app.setting.themecolor.".concat(key)
      })
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Tag, {
      className: _ThemeColor_less__WEBPACK_IMPORTED_MODULE_8___default.a.colorBlock,
      color: color,
      check: value === color,
      onClick: function onClick() {
        return onChange && onChange(color);
      }
    }));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (ThemeColor);

/***/ }),

/***/ "./src/components/SettingDrawer/ThemeColor.less":
/*!******************************************************!*\
  !*** ./src/components/SettingDrawer/ThemeColor.less ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"themeColor":"antd-pro-components-setting-drawer-theme-color-themeColor","title":"antd-pro-components-setting-drawer-theme-color-title","colorBlock":"antd-pro-components-setting-drawer-theme-color-colorBlock"};
    if(true) {
      // 1553915689695
      var cssReload = __webpack_require__(/*! ../../../node_modules/css-hot-loader/hotModuleReplacement.js */ "./node_modules/css-hot-loader/hotModuleReplacement.js")(module.i, {"fileMap":"{fileName}","reloadAll":true});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);;
    }
  

/***/ }),

/***/ "./src/components/SettingDrawer/index.js":
/*!***********************************************!*\
  !*** ./src/components/SettingDrawer/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_es_drawer_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/es/drawer/style */ "./node_modules/antd/es/drawer/style/index.js");
/* harmony import */ var antd_es_drawer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/es/drawer */ "./node_modules/antd/es/drawer/index.js");
/* harmony import */ var antd_es_alert_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/es/alert/style */ "./node_modules/antd/es/alert/style/index.js");
/* harmony import */ var antd_es_alert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/es/alert */ "./node_modules/antd/es/alert/index.js");
/* harmony import */ var antd_es_button_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/es/button/style */ "./node_modules/antd/es/button/style/index.js");
/* harmony import */ var antd_es_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/es/button */ "./node_modules/antd/es/button/index.js");
/* harmony import */ var antd_es_message_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/es/message/style */ "./node_modules/antd/es/message/style/index.js");
/* harmony import */ var antd_es_message__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/es/message */ "./node_modules/antd/es/message/index.js");
/* harmony import */ var antd_es_divider_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd/es/divider/style */ "./node_modules/antd/es/divider/style/index.js");
/* harmony import */ var antd_es_divider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd/es/divider */ "./node_modules/antd/es/divider/index.js");
/* harmony import */ var antd_es_icon_style__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd/es/icon/style */ "./node_modules/antd/es/icon/style/index.js");
/* harmony import */ var antd_es_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! antd/es/icon */ "./node_modules/antd/es/icon/index.js");
/* harmony import */ var antd_es_tooltip_style__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! antd/es/tooltip/style */ "./node_modules/antd/es/tooltip/style/index.js");
/* harmony import */ var antd_es_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! antd/es/tooltip */ "./node_modules/antd/es/tooltip/index.js");
/* harmony import */ var antd_es_list_style__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! antd/es/list/style */ "./node_modules/antd/es/list/style/index.js");
/* harmony import */ var antd_es_list__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! antd/es/list */ "./node_modules/antd/es/list/index.js");
/* harmony import */ var antd_es_switch_style__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! antd/es/switch/style */ "./node_modules/antd/es/switch/style/index.js");
/* harmony import */ var antd_es_switch__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! antd/es/switch */ "./node_modules/antd/es/switch/index.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var antd_es_select_style__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! antd/es/select/style */ "./node_modules/antd/es/select/style/index.js");
/* harmony import */ var antd_es_select__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! antd/es/select */ "./node_modules/antd/es/select/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var umi_locale__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! umi/locale */ "./node_modules/umi-plugin-locale/lib/locale.js");
/* harmony import */ var umi_locale__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(umi_locale__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! react-copy-to-clipboard */ "./node_modules/react-copy-to-clipboard/lib/index.js");
/* harmony import */ var react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var dva__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! dva */ "./node_modules/dva/index.js");
/* harmony import */ var dva__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(dva__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var omit_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! omit.js */ "./node_modules/omit.js/es/index.js");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./index.less */ "./src/components/SettingDrawer/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var _ThemeColor__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./ThemeColor */ "./src/components/SettingDrawer/ThemeColor.js");
/* harmony import */ var _BlockCheckbox__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./BlockCheckbox */ "./src/components/SettingDrawer/BlockCheckbox.js");



























var _dec, _class, _temp;









var Option = antd_es_select__WEBPACK_IMPORTED_MODULE_25__["default"].Option;

var Body = function Body(_ref) {
  var children = _ref.children,
      title = _ref.title,
      style = _ref.style;
  return react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement("div", {
    style: _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_23___default()({}, style, {
      marginBottom: 24
    })
  }, react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement("h3", {
    className: _index_less__WEBPACK_IMPORTED_MODULE_31___default.a.title
  }, title), children);
};

var SettingDrawer = (_dec = Object(dva__WEBPACK_IMPORTED_MODULE_29__["connect"])(function (_ref2) {
  var setting = _ref2.setting;
  return {
    setting: setting
  };
}), _dec(_class = (_temp =
/*#__PURE__*/
function (_PureComponent) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_22___default()(SettingDrawer, _PureComponent);

  function SettingDrawer() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_18___default()(this, SettingDrawer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_20___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_21___default()(SettingDrawer)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      collapse: false
    };

    _this.getLayoutSetting = function () {
      var _this$props$setting = _this.props.setting,
          contentWidth = _this$props$setting.contentWidth,
          fixedHeader = _this$props$setting.fixedHeader,
          layout = _this$props$setting.layout,
          autoHideHeader = _this$props$setting.autoHideHeader,
          fixSiderbar = _this$props$setting.fixSiderbar;
      return [{
        title: Object(umi_locale__WEBPACK_IMPORTED_MODULE_27__["formatMessage"])({
          id: 'app.setting.content-width'
        }),
        action: react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement(antd_es_select__WEBPACK_IMPORTED_MODULE_25__["default"], {
          value: contentWidth,
          size: "small",
          onSelect: function onSelect(value) {
            return _this.changeSetting('contentWidth', value);
          },
          style: {
            width: 80
          }
        }, layout === 'sidemenu' ? null : react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement(Option, {
          value: "Fixed"
        }, Object(umi_locale__WEBPACK_IMPORTED_MODULE_27__["formatMessage"])({
          id: 'app.setting.content-width.fixed'
        })), react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement(Option, {
          value: "Fluid"
        }, Object(umi_locale__WEBPACK_IMPORTED_MODULE_27__["formatMessage"])({
          id: 'app.setting.content-width.fluid'
        })))
      }, {
        title: Object(umi_locale__WEBPACK_IMPORTED_MODULE_27__["formatMessage"])({
          id: 'app.setting.fixedheader'
        }),
        action: react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement(antd_es_switch__WEBPACK_IMPORTED_MODULE_17__["default"], {
          size: "small",
          checked: !!fixedHeader,
          onChange: function onChange(checked) {
            return _this.changeSetting('fixedHeader', checked);
          }
        })
      }, {
        title: Object(umi_locale__WEBPACK_IMPORTED_MODULE_27__["formatMessage"])({
          id: 'app.setting.hideheader'
        }),
        disabled: !fixedHeader,
        disabledReason: Object(umi_locale__WEBPACK_IMPORTED_MODULE_27__["formatMessage"])({
          id: 'app.setting.hideheader.hint'
        }),
        action: react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement(antd_es_switch__WEBPACK_IMPORTED_MODULE_17__["default"], {
          size: "small",
          checked: !!autoHideHeader,
          onChange: function onChange(checked) {
            return _this.changeSetting('autoHideHeader', checked);
          }
        })
      }, {
        title: Object(umi_locale__WEBPACK_IMPORTED_MODULE_27__["formatMessage"])({
          id: 'app.setting.fixedsidebar'
        }),
        disabled: layout === 'topmenu',
        disabledReason: Object(umi_locale__WEBPACK_IMPORTED_MODULE_27__["formatMessage"])({
          id: 'app.setting.fixedsidebar.hint'
        }),
        action: react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement(antd_es_switch__WEBPACK_IMPORTED_MODULE_17__["default"], {
          size: "small",
          checked: !!fixSiderbar,
          onChange: function onChange(checked) {
            return _this.changeSetting('fixSiderbar', checked);
          }
        })
      }];
    };

    _this.changeSetting = function (key, value) {
      var setting = _this.props.setting;

      var nextState = _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_23___default()({}, setting);

      nextState[key] = value;

      if (key === 'layout') {
        nextState.contentWidth = value === 'topmenu' ? 'Fixed' : 'Fluid';
      } else if (key === 'fixedHeader' && !value) {
        nextState.autoHideHeader = false;
      }

      _this.setState(nextState, function () {
        var dispatch = _this.props.dispatch;
        dispatch({
          type: 'setting/changeSetting',
          payload: _this.state
        });
      });
    };

    _this.togglerContent = function () {
      var collapse = _this.state.collapse;

      _this.setState({
        collapse: !collapse
      });
    };

    _this.renderLayoutSettingItem = function (item) {
      var action = react__WEBPACK_IMPORTED_MODULE_26___default.a.cloneElement(item.action, {
        disabled: item.disabled
      });
      return react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement(antd_es_tooltip__WEBPACK_IMPORTED_MODULE_13__["default"], {
        title: item.disabled ? item.disabledReason : '',
        placement: "left"
      }, react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement(antd_es_list__WEBPACK_IMPORTED_MODULE_15__["default"].Item, {
        actions: [action]
      }, react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement("span", {
        style: {
          opacity: item.disabled ? '0.5' : ''
        }
      }, item.title)));
    };

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_19___default()(SettingDrawer, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var setting = this.props.setting;
      var navTheme = setting.navTheme,
          primaryColor = setting.primaryColor,
          layout = setting.layout,
          colorWeak = setting.colorWeak;
      var collapse = this.state.collapse;
      return react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement(antd_es_drawer__WEBPACK_IMPORTED_MODULE_1__["default"], {
        visible: collapse,
        width: 300,
        onClose: this.togglerContent,
        placement: "right",
        handler: react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement("div", {
          className: _index_less__WEBPACK_IMPORTED_MODULE_31___default.a.handle
        }, react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement(antd_es_icon__WEBPACK_IMPORTED_MODULE_11__["default"], {
          type: collapse ? 'close' : 'setting',
          style: {
            color: '#fff',
            fontSize: 20
          }
        })),
        onHandleClick: this.togglerContent,
        style: {
          zIndex: 999
        }
      }, react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement("div", {
        className: _index_less__WEBPACK_IMPORTED_MODULE_31___default.a.content
      }, react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement(Body, {
        title: Object(umi_locale__WEBPACK_IMPORTED_MODULE_27__["formatMessage"])({
          id: 'app.setting.pagestyle'
        })
      }, react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement(_BlockCheckbox__WEBPACK_IMPORTED_MODULE_33__["default"], {
        list: [{
          key: 'dark',
          url: 'https://gw.alipayobjects.com/zos/rmsportal/LCkqqYNmvBEbokSDscrm.svg',
          title: Object(umi_locale__WEBPACK_IMPORTED_MODULE_27__["formatMessage"])({
            id: 'app.setting.pagestyle.dark'
          })
        }, {
          key: 'light',
          url: 'https://gw.alipayobjects.com/zos/rmsportal/jpRkZQMyYRryryPNtyIC.svg',
          title: Object(umi_locale__WEBPACK_IMPORTED_MODULE_27__["formatMessage"])({
            id: 'app.setting.pagestyle.light'
          })
        }],
        value: navTheme,
        onChange: function onChange(value) {
          return _this2.changeSetting('navTheme', value);
        }
      })), react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement(_ThemeColor__WEBPACK_IMPORTED_MODULE_32__["default"], {
        title: Object(umi_locale__WEBPACK_IMPORTED_MODULE_27__["formatMessage"])({
          id: 'app.setting.themecolor'
        }),
        value: primaryColor,
        onChange: function onChange(color) {
          return _this2.changeSetting('primaryColor', color);
        }
      }), react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement(antd_es_divider__WEBPACK_IMPORTED_MODULE_9__["default"], null), react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement(Body, {
        title: Object(umi_locale__WEBPACK_IMPORTED_MODULE_27__["formatMessage"])({
          id: 'app.setting.navigationmode'
        })
      }, react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement(_BlockCheckbox__WEBPACK_IMPORTED_MODULE_33__["default"], {
        list: [{
          key: 'sidemenu',
          url: 'https://gw.alipayobjects.com/zos/rmsportal/JopDzEhOqwOjeNTXkoje.svg',
          title: Object(umi_locale__WEBPACK_IMPORTED_MODULE_27__["formatMessage"])({
            id: 'app.setting.sidemenu'
          })
        }, {
          key: 'topmenu',
          url: 'https://gw.alipayobjects.com/zos/rmsportal/KDNDBbriJhLwuqMoxcAr.svg',
          title: Object(umi_locale__WEBPACK_IMPORTED_MODULE_27__["formatMessage"])({
            id: 'app.setting.topmenu'
          })
        }],
        value: layout,
        onChange: function onChange(value) {
          return _this2.changeSetting('layout', value);
        }
      })), react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement(antd_es_list__WEBPACK_IMPORTED_MODULE_15__["default"], {
        split: false,
        dataSource: this.getLayoutSetting(),
        renderItem: this.renderLayoutSettingItem
      }), react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement(antd_es_divider__WEBPACK_IMPORTED_MODULE_9__["default"], null), react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement(Body, {
        title: Object(umi_locale__WEBPACK_IMPORTED_MODULE_27__["formatMessage"])({
          id: 'app.setting.othersettings'
        })
      }, react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement(antd_es_list__WEBPACK_IMPORTED_MODULE_15__["default"].Item, {
        actions: [react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement(antd_es_switch__WEBPACK_IMPORTED_MODULE_17__["default"], {
          size: "small",
          checked: !!colorWeak,
          onChange: function onChange(checked) {
            return _this2.changeSetting('colorWeak', checked);
          }
        })]
      }, Object(umi_locale__WEBPACK_IMPORTED_MODULE_27__["formatMessage"])({
        id: 'app.setting.weakmode'
      }))), react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement(antd_es_divider__WEBPACK_IMPORTED_MODULE_9__["default"], null), react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_28__["CopyToClipboard"], {
        text: JSON.stringify(Object(omit_js__WEBPACK_IMPORTED_MODULE_30__["default"])(setting, ['colorWeak']), null, 2),
        onCopy: function onCopy() {
          return antd_es_message__WEBPACK_IMPORTED_MODULE_7__["default"].success(Object(umi_locale__WEBPACK_IMPORTED_MODULE_27__["formatMessage"])({
            id: 'app.setting.copyinfo'
          }));
        }
      }, react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement(antd_es_button__WEBPACK_IMPORTED_MODULE_5__["default"], {
        block: true,
        icon: "copy"
      }, Object(umi_locale__WEBPACK_IMPORTED_MODULE_27__["formatMessage"])({
        id: 'app.setting.copy'
      }))), react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement(antd_es_alert__WEBPACK_IMPORTED_MODULE_3__["default"], {
        type: "warning",
        className: _index_less__WEBPACK_IMPORTED_MODULE_31___default.a.productionHint,
        message: react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement("div", null, Object(umi_locale__WEBPACK_IMPORTED_MODULE_27__["formatMessage"])({
          id: 'app.setting.production.hint'
        }), ' ', react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement("a", {
          href: "https://u.ant.design/pro-v2-default-settings",
          target: "_blank",
          rel: "noopener noreferrer"
        }, "src/defaultSettings.js"))
      })));
    }
  }]);

  return SettingDrawer;
}(react__WEBPACK_IMPORTED_MODULE_26__["PureComponent"]), _temp)) || _class);
/* harmony default export */ __webpack_exports__["default"] = (SettingDrawer);

/***/ }),

/***/ "./src/components/SettingDrawer/index.less":
/*!*************************************************!*\
  !*** ./src/components/SettingDrawer/index.less ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"content":"antd-pro-components-setting-drawer-index-content","blockChecbox":"antd-pro-components-setting-drawer-index-blockChecbox","item":"antd-pro-components-setting-drawer-index-item","selectIcon":"antd-pro-components-setting-drawer-index-selectIcon","color_block":"antd-pro-components-setting-drawer-index-color_block","title":"antd-pro-components-setting-drawer-index-title","handle":"antd-pro-components-setting-drawer-index-handle","productionHint":"antd-pro-components-setting-drawer-index-productionHint"};
    if(true) {
      // 1553915689240
      var cssReload = __webpack_require__(/*! ../../../node_modules/css-hot-loader/hotModuleReplacement.js */ "./node_modules/css-hot-loader/hotModuleReplacement.js")(module.i, {"fileMap":"{fileName}","reloadAll":true});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);;
    }
  

/***/ })

}]);
//# sourceMappingURL=0.async.js.map