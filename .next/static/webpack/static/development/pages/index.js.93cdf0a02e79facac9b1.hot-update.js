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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_LoadMore__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/LoadMore */ "./components/LoadMore.js");
/* harmony import */ var _components_Paging__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/Paging */ "./components/Paging.js");
/* harmony import */ var _utils_axios__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../utils/axios */ "./utils/axios.js");
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../utils/api */ "./utils/api.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_18__);




















var Index =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(Index, _React$Component);

  function Index() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Index);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Index)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "state", {
      newListData: [],
      _page: 1,
      isLoadingMore: false,
      // totalPage: 0,
      isComplete: false
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(Index, [{
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

      //是否需要服务器渲染 
      var page = this.state._page;
      this.setState({
        _page: page + 1
      }, function () {
        if (_this2.state._page > _this2.props.totalPage) {
          _this2.setState({
            isLoadingMore: false,
            isComplete: true
          });

          return false;
        } else {
          //加载更多数据
          Object(_utils_axios__WEBPACK_IMPORTED_MODULE_16__["default"])({
            url: _utils_api__WEBPACK_IMPORTED_MODULE_17__["api"].blog_list + "?page_size=3&page=".concat(_this2.state._page),
            type: 'get'
          }).then(function (res) {
            var _res$data = res.data,
                code = _res$data.code,
                data = _res$data.data;

            if (code === '0') {
              console.log(Object(_babel_runtime_corejs2_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_2__["default"])(_this2.props.listData));
              debugger;
              _this2.props.listData = _this2.props.listData.concat(data.list);

              _this2.setState({
                newListData: _this2.state.listData.concat(data.list),
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
      return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_13__["default"], null, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: "jsx-2059252360" + " " + "d-home"
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: "jsx-2059252360" + " " + "d-wrap"
      }, this.props.listData.map(function (item, indexs) {
        return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("article", {
          key: indexs,
          className: "jsx-2059252360"
        }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("h3", {
          className: "jsx-2059252360" + " " + "d-title"
        }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_12___default.a, {
          as: "/article/detail/".concat(item.id),
          href: "/detail?id=".concat(item.id)
        }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("a", {
          className: "jsx-2059252360"
        }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("span", {
          className: "jsx-2059252360"
        }, item.title)))), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
          className: "jsx-2059252360" + " " + "d-content"
        }, item.brief), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
          className: "jsx-2059252360" + " " + "d-intro"
        }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("span", {
          className: "jsx-2059252360" + " " + "d-date"
        }, item.pubdate), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("span", {
          className: "jsx-2059252360" + " " + "d-tags"
        }, item.tags.map(function (items, index) {
          return;
          react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_12___default.a, {
            as: "/article/tag/".concat(items.id),
            href: "/tag?id=".concat(items.id)
          }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("a", {
            className: "jsx-2059252360"
          }, items));
        })), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("span", {
          className: "jsx-2059252360" + " " + "d-view-num"
        }, "\u9605\u8BFB:", item.read_count)));
      }), this.state.isComplete ? react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: "jsx-2059252360" + " " + "load-more"
      }, "\u5DF2\u7ECF\u6CA1\u6709\u66F4\u591A\u6570\u636E\u5566~") : react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_components_LoadMore__WEBPACK_IMPORTED_MODULE_14__["default"], {
        isLoadingMore: this.state.isLoadingMore,
        loadMoreFn: this.loadMoreData.bind(this)
      })), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_10___default.a, {
        id: "2059252360"
      }, "body.jsx-2059252360{background-color:#f7f7f7;}.d-home.jsx-2059252360{max-width:1170px;margin:.8rem auto 0;min-height:100vh;background:#fff;padding-top:.50rem;}.d-wrap.jsx-2059252360{width:780px;margin:0 auto;padding-bottom:1.2rem;}article.jsx-2059252360{margin-bottom:1.2rem;position:relative;}article.jsx-2059252360::after{content:\"\";display:block;width:50%;margin:0 auto;height:1px;background:#ddd;position:absolute;bottom:-.6rem;left:0;right:0;}article.jsx-2059252360:last-child.jsx-2059252360::after{height:0;}.d-title.jsx-2059252360{font-weight:normal;font-size:.32rem;margin:0;padding:0;margin-bottom:.2rem;}.d-title.jsx-2059252360 a.jsx-2059252360{color:#333;-webkit-text-decoration:none;text-decoration:none;cursor:pointer;}.d-title.jsx-2059252360 a.jsx-2059252360 span.jsx-2059252360{padding-bottom:3px;-webkit-transition:0.15s;-webkit-transition:0.15s;transition:0.15s;box-shadow:inset 0 -2px 0 rgba(63,81,181,0);}.d-title.jsx-2059252360 a.jsx-2059252360:hover span.jsx-2059252360{box-shadow:inset 0 -2px 0 rgba(63,81,181,0.6);}.d-content.jsx-2059252360{font-size:.16rem;line-height:.26rem;margin-bottom:.15rem;}.d-intro.jsx-2059252360{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:.14rem;color:#666;}.d-tags.jsx-2059252360{-webkit-flex:1;-ms-flex:1;flex:1;margin-left:.15rem;position:relative;padding-left:.25rem;}.d-tags.jsx-2059252360 a.jsx-2059252360{display:inline-block;cursor:pointer;}.d-tags.jsx-2059252360 a.jsx-2059252360:hover{color:#000;}.d-tags.jsx-2059252360 a.jsx-2059252360+a.jsx-2059252360:before{content:\"/\";margin:0 .05rem;}.d-tags.jsx-2059252360::before{content:\"\";display:block;width:.20rem;height:.20rem;background:url('../../images/icon-tag.png') no-repeat;background-size:.20rem .20rem;position:absolute;left:0;top:.01rem;}.d-view-num.jsx-2059252360{position:relative;padding-left:.25rem;}.d-view-num.jsx-2059252360::before{content:\"\";display:block;width:.20rem;height:.20rem;background:url('../../images/icon-view.png') no-repeat;background-size:.20rem .20rem;position:absolute;left:0;top:0;}.load-more.jsx-2059252360{text-align:center;font-size:.16rem;background:#eee;padding:.10rem 0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkY6XFxwcm9qZWN0XFxibG9nZGFvXFxwYWdlc1xcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUh5QixBQUc4QyxBQUlSLEFBUUwsQUFNUyxBQUtWLEFBYUYsQUFJVSxBQVFSLEFBTVEsQUFPOEIsQUFJaEMsQUFNSixBQVNOLEFBT2MsQUFNMUIsQUFHaUIsQUFLRCxBQVlPLEFBS1AsQUFZTyxTQTdGdEIsRUFia0IsQUF5Qk8sQUE0Q3pCLEFBU2tCLEFBaUJBLENBMUdBLEFBb0ZFLEtBNUZJLEFBNkRELENBZ0RDLEFBaUJILENBMUZBLEFBY1EsRUFwQ1AsQUFxRUgsSUF2Rm5CLEFBd0JjLEFBOEVHLEFBaUJBLENBMUdTLEVBb0YxQixLQWpCdUIsRUF2REwsQUEwR0UsQ0ExRlAsQUF5QlksQUFzQnpCLENBbkZxQixDQWtHSCxBQVdsQixBQU1rQixDQXJHbEIsS0FvQ3FCLENBYlAsQ0FtQmQsRUEvQ0EsQ0FZZSxFQTBHTSxDQW5EQyxBQXVCb0MsQUFpQkMsRUFuSHZDLENBcUNJLEVBd0J4QixHQXhDb0IsQ0FzQkQsT0FvRm5CLEVBOUh1QixBQTJFQyxJQVhELENBM0J2QixDQWhCc0IsQUFzQnRCLFVBTW1ELEdBaERuRCxDQTJFQSxJQXREa0IsWUE0RWdCLENBaUJBLENBNUZ2QixPQUNDLFFBQ1osT0F5QkEsTUFpRHNCLENBaUJBLGlCQWhCWCxDQWlCQSxNQWhCSSxDQWlCTCxLQXJEVyxDQXNEckIsSUFqQkEsWUFwQ2UsV0FDZiIsImZpbGUiOiJGOlxccHJvamVjdFxcYmxvZ2Rhb1xccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xyXG5pbXBvcnQgTG9hZE1vcmUgZnJvbSAnLi4vY29tcG9uZW50cy9Mb2FkTW9yZSc7XHJcbmltcG9ydCBQYWdpbmcgZnJvbSAnLi4vY29tcG9uZW50cy9QYWdpbmcnO1xyXG5cclxuaW1wb3J0IEZldGNoIGZyb20gJy4uL3V0aWxzL2F4aW9zJztcclxuaW1wb3J0IHsgYXBpIH0gZnJvbSAnLi4vdXRpbHMvYXBpJ1xyXG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcclxuXHJcblxyXG5jbGFzcyBJbmRleCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICAvLyBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKCkge1xyXG4gICAgLy8gICAgIGNvbnN0IHJlcSA9IGF3YWl0IGZldGNoKGFwaS5ibG9nX2xpc3QgKyBgP3BhZ2Vfc2l6ZT0zJnBhZ2U9JHsxfWApO1xyXG4gICAgLy8gICAgIGNvbnN0IHJlcyA9IGF3YWl0IHJlcS5qc29uKCk7XHJcbiAgICAvLyAgICAgaWYgKHJlcy5jb2RlID09PSAnMCcpIHtcclxuICAgIC8vICAgICAgICAgcmV0dXJuIHtcclxuICAgIC8vICAgICAgICAgICAgIHBvc3RzOiByZXMuZGF0YS5saXN0LFxyXG4gICAgLy8gICAgICAgICAgICAgdG90YWxQYWdlOiByZXMuZGF0YS50b3RhbFBhZ2VcclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH1cclxuICAgIHN0YXRlID0ge1xyXG4gICAgICAgIG5ld0xpc3REYXRhOltdLFxyXG4gICAgICAgIF9wYWdlOiAxLFxyXG4gICAgICAgIGlzTG9hZGluZ01vcmU6IGZhbHNlLFxyXG4gICAgICAgIC8vIHRvdGFsUGFnZTogMCxcclxuICAgICAgICBpc0NvbXBsZXRlOiBmYWxzZVxyXG4gICAgfVxyXG4gICAgbG9hZE1vcmVEYXRhKCkge1xyXG4gICAgICAgIC8vIOiusOW9leeKtuaAgVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBpc0xvYWRpbmdNb3JlOiB0cnVlXHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLnJlc3VsdEhhbmRsZSgpXHJcbiAgICB9XHJcbiAgICByZXN1bHRIYW5kbGUoKSB7XHJcbiAgICAgICAgLy/mmK/lkKbpnIDopoHmnI3liqHlmajmuLLmn5MgXHJcbiAgICAgICAgY29uc3QgcGFnZSA9IHRoaXMuc3RhdGUuX3BhZ2VcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgX3BhZ2U6IHBhZ2UgKyAxXHJcbiAgICAgICAgfSwgKCkgPT4ge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUuX3BhZ2UgPiB0aGlzLnByb3BzLnRvdGFsUGFnZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNMb2FkaW5nTW9yZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgaXNDb21wbGV0ZTogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8v5Yqg6L295pu05aSa5pWw5o2uXHJcbiAgICAgICAgICAgICAgICBGZXRjaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBhcGkuYmxvZ19saXN0ICsgYD9wYWdlX3NpemU9MyZwYWdlPSR7dGhpcy5zdGF0ZS5fcGFnZX1gLFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdnZXQnLFxyXG4gICAgICAgICAgICAgICAgfSkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgY29kZSwgZGF0YSB9ID0gcmVzLmRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvZGUgPT09ICcwJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0eXBlb2YgdGhpcy5wcm9wcy5saXN0RGF0YSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVidWdnZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMubGlzdERhdGEgPSB0aGlzLnByb3BzLmxpc3REYXRhLmNvbmNhdChkYXRhLmxpc3QpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3TGlzdERhdGE6IHRoaXMuc3RhdGUubGlzdERhdGEuY29uY2F0KGRhdGEubGlzdCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0xvYWRpbmdNb3JlOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlcnJvcjogJyArIGVycm9yKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG5cclxuXHJcbiAgICB9XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1ob21lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLXdyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5saXN0RGF0YS5tYXAoKGl0ZW0sIGluZGV4cykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8YXJ0aWNsZSBrZXk9e2luZGV4c30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJkLXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBhcz17YC9hcnRpY2xlL2RldGFpbC8ke2l0ZW0uaWR9YH0gaHJlZj17YC9kZXRhaWw/aWQ9JHtpdGVtLmlkfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPjxzcGFuPntpdGVtLnRpdGxlfTwvc3Bhbj48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5icmllZn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1pbnRyb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZC1kYXRlXCI+e2l0ZW0ucHViZGF0ZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkLXRhZ3NcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0udGFncy5tYXAoKGl0ZW1zLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBhcz17YC9hcnRpY2xlL3RhZy8ke2l0ZW1zLmlkfWB9IGhyZWY9e2AvdGFnP2lkPSR7aXRlbXMuaWR9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgPntpdGVtc308L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZC12aWV3LW51bVwiPumYheivuzp7aXRlbS5yZWFkX2NvdW50fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hcnRpY2xlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmlzQ29tcGxldGUgPyA8ZGl2IGNsYXNzTmFtZT1cImxvYWQtbW9yZVwiPuW3sue7j+ayoeacieabtOWkmuaVsOaNruWVpn48L2Rpdj4gOiA8TG9hZE1vcmUgaXNMb2FkaW5nTW9yZT17dGhpcy5zdGF0ZS5pc0xvYWRpbmdNb3JlfSBsb2FkTW9yZUZuPXt0aGlzLmxvYWRNb3JlRGF0YS5iaW5kKHRoaXMpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgICBib2R5IHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y3O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAuZC1ob21lIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDExNzBweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IC44cmVtIGF1dG8gMDtcclxuICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAuNTByZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5kLXdyYXAge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA3ODBweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMS4ycmVtO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBhcnRpY2xlIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxLjJyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBhcnRpY2xlOjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNkZGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbTogLS42cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGFydGljbGU6bGFzdC1jaGlsZDo6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLmQtdGl0bGUge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAuMzJyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogLjJyZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5kLXRpdGxlIGEge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5kLXRpdGxlIGEgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDNweDtcclxuICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IDAuMTVzO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuMTVzO1xyXG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgLTJweCAwIHJnYmEoNjMsIDgxLCAxODEsIDApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAuZC10aXRsZSBhOmhvdmVyIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgLTJweCAwIHJnYmEoNjMsIDgxLCAxODEsIDAuNik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5kLWNvbnRlbnQge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogLjE2cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAuMjZyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogLjE1cmVtO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAuZC1pbnRybyB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogLjE0cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNjY2O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAuZC1kYXRlIHt9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5kLXRhZ3Mge1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC4xNXJlbTtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAuMjVyZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5kLXRhZ3MgYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLmQtdGFncyBhOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzAwMFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAuZC10YWdzIGErYTpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiL1wiO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCAuMDVyZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5kLXRhZ3M6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogLjIwcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogLjIwcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vaW1hZ2VzL2ljb24tdGFnLnBuZycpIG5vLXJlcGVhdDtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IC4yMHJlbSAuMjByZW07XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAuMDFyZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5kLXZpZXctbnVtIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAuMjVyZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5kLXZpZXctbnVtOjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IC4yMHJlbTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IC4yMHJlbTtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uL2ltYWdlcy9pY29uLXZpZXcucG5nJykgbm8tcmVwZWF0O1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogLjIwcmVtIC4yMHJlbTtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5sb2FkLW1vcmUge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IC4xNnJlbTtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZWVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IC4xMHJlbSAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8L0xheW91dD5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbkluZGV4LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGFwaS5ibG9nX2xpc3QrYD9wYWdlX3NpemU9MyZwYWdlPSR7MX1gKTtcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgY29uc29sZS5sb2coZGF0YS5kYXRhKVxyXG4gICAgaWYoZGF0YS5jb2RlID09PSAnMCcpe1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGxpc3REYXRhOiBkYXRhLmRhdGEubGlzdCxcclxuICAgICAgICAgICAgdG90YWxQYWdlOiBkYXRhLmRhdGEudG90YWxQYWdlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4OyJdfQ== */\n/*@ sourceURL=F:\\project\\blogdao\\pages\\index.js */")));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_11___default.a.Component);

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
          _context.next = 2;
          return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_18___default()(_utils_api__WEBPACK_IMPORTED_MODULE_17__["api"].blog_list + "?page_size=3&page=".concat(1));

        case 2:
          res = _context.sent;
          _context.next = 5;
          return res.json();

        case 5:
          data = _context.sent;
          console.log(data.data);

          if (!(data.code === '0')) {
            _context.next = 9;
            break;
          }

          return _context.abrupt("return", {
            listData: data.data.list,
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
//# sourceMappingURL=index.js.93cdf0a02e79facac9b1.hot-update.js.map