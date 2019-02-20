webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_LoadMore__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/LoadMore */ "./components/LoadMore.js");
/* harmony import */ var _utils_axios__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../utils/axios */ "./utils/axios.js");
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../utils/api */ "./utils/api.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_15__);

















var Index =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(Index, _React$Component);

  function Index() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Index);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Index)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "state", {
      _page: 1,
      isLoadingMore: false,
      totalPage: 0,
      isComplete: false
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Index, [{
    key: "loadMoreData",
    value: function loadMoreData() {
      // 记录状态
      this.setState({
        isLoadingMore: true
      });
      this.resultHandle();
    }
  }, {
    key: "resultHandle",
    value: function resultHandle() {
      var _this2 = this;

      var page = this.state._page;
      this.setState({
        _page: page + 1
      }, function () {
        if (_this2.state._page > _this2.state.totalPage) {
          _this2.setState({
            isLoadingMore: false,
            isComplete: true
          });

          return false;
        } else {
          //加载更多数据
          Object(_utils_axios__WEBPACK_IMPORTED_MODULE_13__["default"])({
            url: _utils_api__WEBPACK_IMPORTED_MODULE_14__["api"].blog_list + "?page_size=3&page=".concat(_this2.state._page),
            type: 'get'
          }).then(function (res) {
            var _res$data = res.data,
                code = _res$data.code,
                data = _res$data.data;

            if (code === '0') {
              _this2.setState({
                listData: _this2.state.listData.concat(data.list),
                isLoadingMore: false
              });
            }
          }).catch(function (error) {
            console.log('error: ' + error);
          });
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_11__["default"], null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "d-home"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "d-wrap"
      }, this.props.posts.map(function (item, indexs) {
        return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("article", {
          key: indexs
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h3", {
          className: "d-title"
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
          as: "/article/detail/".concat(item.id),
          href: "/detail?id=".concat(item.id)
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("a", null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("span", null, item.title)))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
          className: "d-content"
        }, item.brief), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
          className: "d-intro"
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("span", {
          className: "d-date"
        }, item.pubdate), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("span", {
          className: "d-tags"
        }, item.tags.map(function (items, index) {
          return;
          react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
            as: "/article/tag/".concat(items.id),
            href: "/tag?id=".concat(items.id)
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("a", null, items));
        })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("span", {
          className: "d-view-num"
        }, "\u9605\u8BFB:", item.read_count)));
      }), this.state.isComplete ? react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "load-more"
      }, "\u5DF2\u7ECF\u6CA1\u6709\u66F4\u591A\u6570\u636E\u5566~") : react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_LoadMore__WEBPACK_IMPORTED_MODULE_12__["default"], {
        isLoadingMore: this.state.isLoadingMore,
        loadMoreFn: this.loadMoreData.bind(this)
      }))));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);

Index.getInitialProps =
/*#__PURE__*/
Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
  var res, data;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          console.log(111);
          _context.next = 3;
          return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_15___default()(_utils_api__WEBPACK_IMPORTED_MODULE_14__["api"].blog_list + "?page_size=10&page=".concat(1));

        case 3:
          res = _context.sent;
          _context.next = 6;
          return res.json();

        case 6:
          data = _context.sent;

          if (!(data.code === '0')) {
            _context.next = 9;
            break;
          }

          return _context.abrupt("return", {
            posts: data.data.list,
            totalPage: data.data.totalPage
          });

        case 9:
        case "end":
          return _context.stop();
      }
    }
  }, _callee, this);
}));
/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.7133733ea5693f91ab7b.hot-update.js.map