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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_LoadMore__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/LoadMore */ "./components/LoadMore.js");
/* harmony import */ var _utils_axios__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../utils/axios */ "./utils/axios.js");
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../utils/api */ "./utils/api.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_16__);


















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
          Object(_utils_axios__WEBPACK_IMPORTED_MODULE_14__["default"])({
            url: _utils_api__WEBPACK_IMPORTED_MODULE_15__["api"].blog_list + "?page_size=3&page=".concat(_this2.state._page),
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
      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_12__["default"], null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-2059252360" + " " + "d-home"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-2059252360" + " " + "d-wrap"
      }, this.props.posts.map(function (item, indexs) {
        return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("article", {
          key: indexs,
          className: "jsx-2059252360"
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h3", {
          className: "jsx-2059252360" + " " + "d-title"
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
          as: "/article/detail/".concat(item.id),
          href: "/detail?id=".concat(item.id)
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
          className: "jsx-2059252360"
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
          className: "jsx-2059252360"
        }, item.title)))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
          className: "jsx-2059252360" + " " + "d-content"
        }, item.brief), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
          className: "jsx-2059252360" + " " + "d-intro"
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
          className: "jsx-2059252360" + " " + "d-date"
        }, item.pubdate), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
          className: "jsx-2059252360" + " " + "d-tags"
        }, item.tags.map(function (items, index) {
          return;
          react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
            as: "/article/tag/".concat(items.id),
            href: "/tag?id=".concat(items.id)
          }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
            className: "jsx-2059252360"
          }, items));
        })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
          className: "jsx-2059252360" + " " + "d-view-num"
        }, "\u9605\u8BFB:", item.read_count)));
      }), this.state.isComplete ? react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-2059252360" + " " + "load-more"
      }, "\u5DF2\u7ECF\u6CA1\u6709\u66F4\u591A\u6570\u636E\u5566~") : react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_LoadMore__WEBPACK_IMPORTED_MODULE_13__["default"], {
        isLoadingMore: this.state.isLoadingMore,
        loadMoreFn: this.loadMoreData.bind(this)
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a, {
        id: "2059252360"
      }, "body.jsx-2059252360{background-color:#f7f7f7;}.d-home.jsx-2059252360{max-width:1170px;margin:.8rem auto 0;min-height:100vh;background:#fff;padding-top:.50rem;}.d-wrap.jsx-2059252360{width:780px;margin:0 auto;padding-bottom:1.2rem;}article.jsx-2059252360{margin-bottom:1.2rem;position:relative;}article.jsx-2059252360::after{content:\"\";display:block;width:50%;margin:0 auto;height:1px;background:#ddd;position:absolute;bottom:-.6rem;left:0;right:0;}article.jsx-2059252360:last-child.jsx-2059252360::after{height:0;}.d-title.jsx-2059252360{font-weight:normal;font-size:.32rem;margin:0;padding:0;margin-bottom:.2rem;}.d-title.jsx-2059252360 a.jsx-2059252360{color:#333;-webkit-text-decoration:none;text-decoration:none;cursor:pointer;}.d-title.jsx-2059252360 a.jsx-2059252360 span.jsx-2059252360{padding-bottom:3px;-webkit-transition:0.15s;-webkit-transition:0.15s;transition:0.15s;box-shadow:inset 0 -2px 0 rgba(63,81,181,0);}.d-title.jsx-2059252360 a.jsx-2059252360:hover span.jsx-2059252360{box-shadow:inset 0 -2px 0 rgba(63,81,181,0.6);}.d-content.jsx-2059252360{font-size:.16rem;line-height:.26rem;margin-bottom:.15rem;}.d-intro.jsx-2059252360{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:.14rem;color:#666;}.d-tags.jsx-2059252360{-webkit-flex:1;-ms-flex:1;flex:1;margin-left:.15rem;position:relative;padding-left:.25rem;}.d-tags.jsx-2059252360 a.jsx-2059252360{display:inline-block;cursor:pointer;}.d-tags.jsx-2059252360 a.jsx-2059252360:hover{color:#000;}.d-tags.jsx-2059252360 a.jsx-2059252360+a.jsx-2059252360:before{content:\"/\";margin:0 .05rem;}.d-tags.jsx-2059252360::before{content:\"\";display:block;width:.20rem;height:.20rem;background:url('../../images/icon-tag.png') no-repeat;background-size:.20rem .20rem;position:absolute;left:0;top:.01rem;}.d-view-num.jsx-2059252360{position:relative;padding-left:.25rem;}.d-view-num.jsx-2059252360::before{content:\"\";display:block;width:.20rem;height:.20rem;background:url('../../images/icon-view.png') no-repeat;background-size:.20rem .20rem;position:absolute;left:0;top:0;}.load-more.jsx-2059252360{text-align:center;font-size:.16rem;background:#eee;padding:.10rem 0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkY6XFxwcm9qZWN0XFxibG9nZGFvXFxwYWdlc1xcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNkd5QixBQUc4QyxBQUlSLEFBUUwsQUFNUyxBQUtWLEFBYUYsQUFJVSxBQVFSLEFBTVEsQUFPOEIsQUFJaEMsQUFNSixBQVNOLEFBT2MsQUFNMUIsQUFHaUIsQUFLRCxBQVlPLEFBS1AsQUFZTyxTQTdGdEIsRUFia0IsQUF5Qk8sQUE0Q3pCLEFBU2tCLEFBaUJBLENBMUdBLEFBb0ZFLEtBNUZJLEFBNkRELENBZ0RDLEFBaUJILENBMUZBLEFBY1EsRUFwQ1AsQUFxRUgsSUF2Rm5CLEFBd0JjLEFBOEVHLEFBaUJBLENBMUdTLEVBb0YxQixLQWpCdUIsRUF2REwsQUEwR0UsQ0ExRlAsQUF5QlksQUFzQnpCLENBbkZxQixDQWtHSCxBQVdsQixBQU1rQixDQXJHbEIsS0FvQ3FCLENBYlAsQ0FtQmQsRUEvQ0EsQ0FZZSxFQTBHTSxDQW5EQyxBQXVCb0MsQUFpQkMsRUFuSHZDLENBcUNJLEVBd0J4QixHQXhDb0IsQ0FzQkQsT0FvRm5CLEVBOUh1QixBQTJFQyxJQVhELENBM0J2QixDQWhCc0IsQUFzQnRCLFVBTW1ELEdBaERuRCxDQTJFQSxJQXREa0IsWUE0RWdCLENBaUJBLENBNUZ2QixPQUNDLFFBQ1osT0F5QkEsTUFpRHNCLENBaUJBLGlCQWhCWCxDQWlCQSxNQWhCSSxDQWlCTCxLQXJEVyxDQXNEckIsSUFqQkEsWUFwQ2UsV0FDZiIsImZpbGUiOiJGOlxccHJvamVjdFxcYmxvZ2Rhb1xccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xyXG5pbXBvcnQgTG9hZE1vcmUgZnJvbSAnLi4vY29tcG9uZW50cy9Mb2FkTW9yZSc7XHJcblxyXG5pbXBvcnQgRmV0Y2ggZnJvbSAnLi4vdXRpbHMvYXhpb3MnO1xyXG5pbXBvcnQgeyBhcGkgfSBmcm9tICcuLi91dGlscy9hcGknXHJcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xyXG5cclxuXHJcbmNsYXNzIEluZGV4IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIC8vIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoKSB7XHJcbiAgICAvLyAgICAgY29uc3QgcmVxID0gYXdhaXQgZmV0Y2goYXBpLmJsb2dfbGlzdCArIGA/cGFnZV9zaXplPTMmcGFnZT0kezF9YCk7XHJcbiAgICAvLyAgICAgY29uc3QgcmVzID0gYXdhaXQgcmVxLmpzb24oKTtcclxuICAgIC8vICAgICBpZiAocmVzLmNvZGUgPT09ICcwJykge1xyXG4gICAgLy8gICAgICAgICByZXR1cm4ge1xyXG4gICAgLy8gICAgICAgICAgICAgcG9zdHM6IHJlcy5kYXRhLmxpc3QsXHJcbiAgICAvLyAgICAgICAgICAgICB0b3RhbFBhZ2U6IHJlcy5kYXRhLnRvdGFsUGFnZVxyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfVxyXG4gICAgc3RhdGUgPSB7XHJcbiAgICAgICAgX3BhZ2U6IDEsXHJcbiAgICAgICAgaXNMb2FkaW5nTW9yZTogZmFsc2UsXHJcbiAgICAgICAgdG90YWxQYWdlOiAwLFxyXG4gICAgICAgIGlzQ29tcGxldGU6IGZhbHNlXHJcbiAgICB9XHJcbiAgICBsb2FkTW9yZURhdGEoKSB7XHJcbiAgICAgICAgLy8g6K6w5b2V54q25oCBXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGlzTG9hZGluZ01vcmU6IHRydWVcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMucmVzdWx0SGFuZGxlKClcclxuICAgIH1cclxuICAgIHJlc3VsdEhhbmRsZSgpIHtcclxuICAgICAgICBjb25zdCBwYWdlID0gdGhpcy5zdGF0ZS5fcGFnZVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBfcGFnZTogcGFnZSArIDFcclxuICAgICAgICB9LCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLl9wYWdlID4gdGhpcy5zdGF0ZS50b3RhbFBhZ2UpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGlzTG9hZGluZ01vcmU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGlzQ29tcGxldGU6IHRydWVcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvL+WKoOi9veabtOWkmuaVsOaNrlxyXG4gICAgICAgICAgICAgICAgRmV0Y2goe1xyXG4gICAgICAgICAgICAgICAgICAgIHVybDogYXBpLmJsb2dfbGlzdCArIGA/cGFnZV9zaXplPTMmcGFnZT0ke3RoaXMuc3RhdGUuX3BhZ2V9YCxcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZ2V0JyxcclxuICAgICAgICAgICAgICAgIH0pLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB7IGNvZGUsIGRhdGEgfSA9IHJlcy5kYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjb2RlID09PSAnMCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaXN0RGF0YTogdGhpcy5zdGF0ZS5saXN0RGF0YS5jb25jYXQoZGF0YS5saXN0KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzTG9hZGluZ01vcmU6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yOiAnICsgZXJyb3IpXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG5cclxuICAgIH1cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWhvbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnBvc3RzLm1hcCgoaXRlbSwgaW5kZXhzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxhcnRpY2xlIGtleT17aW5kZXhzfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImQtdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGFzPXtgL2FydGljbGUvZGV0YWlsLyR7aXRlbS5pZH1gfSBocmVmPXtgL2RldGFpbD9pZD0ke2l0ZW0uaWR9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+PHNwYW4+e2l0ZW0udGl0bGV9PC9zcGFuPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLmJyaWVmfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWludHJvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkLWRhdGVcIj57aXRlbS5wdWJkYXRlfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImQtdGFnc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS50YWdzLm1hcCgoaXRlbXMsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGFzPXtgL2FydGljbGUvdGFnLyR7aXRlbXMuaWR9YH0gaHJlZj17YC90YWc/aWQ9JHtpdGVtcy5pZH1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSA+e2l0ZW1zfTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkLXZpZXctbnVtXCI+6ZiF6K+7OntpdGVtLnJlYWRfY291bnR9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2FydGljbGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuaXNDb21wbGV0ZSA/IDxkaXYgY2xhc3NOYW1lPVwibG9hZC1tb3JlXCI+5bey57uP5rKh5pyJ5pu05aSa5pWw5o2u5ZWmfjwvZGl2PiA6IDxMb2FkTW9yZSBpc0xvYWRpbmdNb3JlPXt0aGlzLnN0YXRlLmlzTG9hZGluZ01vcmV9IGxvYWRNb3JlRm49e3RoaXMubG9hZE1vcmVEYXRhLmJpbmQodGhpcyl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2BcclxuICAgICAgICAgICAgICAgIGJvZHkge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmN2Y3Zjc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5kLWhvbWUge1xyXG4gICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTE3MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogLjhyZW0gYXV0byAwO1xyXG4gICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IC41MHJlbTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLmQtd3JhcCB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDc4MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxLjJyZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGFydGljbGUge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEuMnJlbTtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGFydGljbGU6OmFmdGVyIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2RkZDtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAtLjZyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgYXJ0aWNsZTpsYXN0LWNoaWxkOjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAuZC10aXRsZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IC4zMnJlbTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAuMnJlbTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLmQtdGl0bGUgYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMzMzM7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLmQtdGl0bGUgYSBzcGFuIHtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogM3B4O1xyXG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogMC4xNXM7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4xNXM7XHJcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAtMnB4IDAgcmdiYSg2MywgODEsIDE4MSwgMCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5kLXRpdGxlIGE6aG92ZXIgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAtMnB4IDAgcmdiYSg2MywgODEsIDE4MSwgMC42KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLmQtY29udGVudCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAuMTZyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IC4yNnJlbTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAuMTVyZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5kLWludHJvIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAuMTRyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM2NjY7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5kLWRhdGUge31cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLmQtdGFncyB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleDogMTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogLjE1cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IC4yNXJlbTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLmQtdGFncyBhIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAuZC10YWdzIGE6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5kLXRhZ3MgYSthOmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCIvXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIC4wNXJlbTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLmQtdGFnczo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAuMjByZW07XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAuMjByZW07XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi9pbWFnZXMvaWNvbi10YWcucG5nJykgbm8tcmVwZWF0O1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogLjIwcmVtIC4yMHJlbTtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IC4wMXJlbTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLmQtdmlldy1udW0ge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IC4yNXJlbTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLmQtdmlldy1udW06OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogLjIwcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogLjIwcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vaW1hZ2VzL2ljb24tdmlldy5wbmcnKSBuby1yZXBlYXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiAuMjByZW0gLjIwcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLmxvYWQtbW9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogLjE2cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNlZWU7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogLjEwcmVtIDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuSW5kZXguZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24gKCkge1xyXG4gICAgbGV0IHBhcmFtcyA9IHtcclxuICAgICAgICBwYWdlXHJcbiAgICB9XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChhcGkuYmxvZ19saXN0K2A/cGFnZV9zaXplPTEwJnBhZ2U9JHsxfWApO1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblxyXG4gICAgaWYoZGF0YS5jb2RlID09PSAnMCcpe1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHBvc3RzOiBkYXRhLmRhdGEubGlzdCxcclxuICAgICAgICAgICAgdG90YWxQYWdlOiBkYXRhLmRhdGEudG90YWxQYWdlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4OyJdfQ== */\n/*@ sourceURL=F:\\project\\blogdao\\pages\\index.js */")));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_10___default.a.Component);

Index.getInitialProps =
/*#__PURE__*/
Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
  var params, res, data;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          params = {
            page: page
          };
          _context.next = 3;
          return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_16___default()(_utils_api__WEBPACK_IMPORTED_MODULE_15__["api"].blog_list + "?page_size=10&page=".concat(1));

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
//# sourceMappingURL=index.js.61abf20aaa4bfcf7fbbf.hot-update.js.map