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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _utils_axios__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/axios */ "./utils/axios.js");
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../utils/api */ "./utils/api.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_13__);















var Index =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Index, _React$Component);

  function Index() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Index);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Index).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Index, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_10__["default"], null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2059252360" + " " + "d-home"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2059252360" + " " + "d-wrap"
      }, this.props.posts.map(function (item, indexs) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("article", {
          key: indexs,
          className: "jsx-2059252360"
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h3", {
          className: "jsx-2059252360" + " " + "d-title"
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
          as: "/article/detail/".concat(item.id),
          href: "/detail?id=".concat(item.id)
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
          className: "jsx-2059252360"
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
          className: "jsx-2059252360"
        }, item.title)))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          className: "jsx-2059252360" + " " + "d-content"
        }, item.brief), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          className: "jsx-2059252360" + " " + "d-intro"
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
          className: "jsx-2059252360" + " " + "d-date"
        }, item.pubdate), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
          className: "jsx-2059252360" + " " + "d-tags"
        }, item.tags.map(function (items, index) {
          return;
          react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
            as: "/article/tag/".concat(items.id),
            href: "/tag?id=".concat(items.id)
          }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
            className: "jsx-2059252360"
          }, items));
        })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
          className: "jsx-2059252360" + " " + "d-view-num"
        }, "\u9605\u8BFB:", item.read_count)));
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "2059252360"
      }, "body.jsx-2059252360{background-color:#f7f7f7;}.d-home.jsx-2059252360{max-width:1170px;margin:.8rem auto 0;min-height:100vh;background:#fff;padding-top:.50rem;}.d-wrap.jsx-2059252360{width:780px;margin:0 auto;padding-bottom:1.2rem;}article.jsx-2059252360{margin-bottom:1.2rem;position:relative;}article.jsx-2059252360::after{content:\"\";display:block;width:50%;margin:0 auto;height:1px;background:#ddd;position:absolute;bottom:-.6rem;left:0;right:0;}article.jsx-2059252360:last-child.jsx-2059252360::after{height:0;}.d-title.jsx-2059252360{font-weight:normal;font-size:.32rem;margin:0;padding:0;margin-bottom:.2rem;}.d-title.jsx-2059252360 a.jsx-2059252360{color:#333;-webkit-text-decoration:none;text-decoration:none;cursor:pointer;}.d-title.jsx-2059252360 a.jsx-2059252360 span.jsx-2059252360{padding-bottom:3px;-webkit-transition:0.15s;-webkit-transition:0.15s;transition:0.15s;box-shadow:inset 0 -2px 0 rgba(63,81,181,0);}.d-title.jsx-2059252360 a.jsx-2059252360:hover span.jsx-2059252360{box-shadow:inset 0 -2px 0 rgba(63,81,181,0.6);}.d-content.jsx-2059252360{font-size:.16rem;line-height:.26rem;margin-bottom:.15rem;}.d-intro.jsx-2059252360{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:.14rem;color:#666;}.d-tags.jsx-2059252360{-webkit-flex:1;-ms-flex:1;flex:1;margin-left:.15rem;position:relative;padding-left:.25rem;}.d-tags.jsx-2059252360 a.jsx-2059252360{display:inline-block;cursor:pointer;}.d-tags.jsx-2059252360 a.jsx-2059252360:hover{color:#000;}.d-tags.jsx-2059252360 a.jsx-2059252360+a.jsx-2059252360:before{content:\"/\";margin:0 .05rem;}.d-tags.jsx-2059252360::before{content:\"\";display:block;width:.20rem;height:.20rem;background:url('../../images/icon-tag.png') no-repeat;background-size:.20rem .20rem;position:absolute;left:0;top:.01rem;}.d-view-num.jsx-2059252360{position:relative;padding-left:.25rem;}.d-view-num.jsx-2059252360::before{content:\"\";display:block;width:.20rem;height:.20rem;background:url('../../images/icon-view.png') no-repeat;background-size:.20rem .20rem;position:absolute;left:0;top:0;}.load-more.jsx-2059252360{text-align:center;font-size:.16rem;background:#eee;padding:.10rem 0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkY6XFxwcm9qZWN0XFxibG9nZGFvXFxwYWdlc1xcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNER5QixBQUc4QyxBQUlSLEFBUUwsQUFNUyxBQUtWLEFBYUYsQUFJVSxBQVFSLEFBTVEsQUFPOEIsQUFJaEMsQUFNSixBQVNOLEFBT2MsQUFNMUIsQUFHaUIsQUFLRCxBQVlPLEFBS1AsQUFZTyxTQTdGdEIsRUFia0IsQUF5Qk8sQUE0Q3pCLEFBU2tCLEFBaUJBLENBMUdBLEFBb0ZFLEtBNUZJLEFBNkRELENBZ0RDLEFBaUJILENBMUZBLEFBY1EsRUFwQ1AsQUFxRUgsSUF2Rm5CLEFBd0JjLEFBOEVHLEFBaUJBLENBMUdTLEVBb0YxQixLQWpCdUIsRUF2REwsQUEwR0UsQ0ExRlAsQUF5QlksQUFzQnpCLENBbkZxQixDQWtHSCxBQVdsQixBQU1rQixDQXJHbEIsS0FvQ3FCLENBYlAsQ0FtQmQsRUEvQ0EsQ0FZZSxFQTBHTSxDQW5EQyxBQXVCb0MsQUFpQkMsRUFuSHZDLENBcUNJLEVBd0J4QixHQXhDb0IsQ0FzQkQsT0FvRm5CLEVBOUh1QixBQTJFQyxJQVhELENBM0J2QixDQWhCc0IsQUFzQnRCLFVBTW1ELEdBaERuRCxDQTJFQSxJQXREa0IsWUE0RWdCLENBaUJBLENBNUZ2QixPQUNDLFFBQ1osT0F5QkEsTUFpRHNCLENBaUJBLGlCQWhCWCxDQWlCQSxNQWhCSSxDQWlCTCxLQXJEVyxDQXNEckIsSUFqQkEsWUFwQ2UsV0FDZiIsImZpbGUiOiJGOlxccHJvamVjdFxcYmxvZ2Rhb1xccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xyXG5cclxuaW1wb3J0IEZldGNoIGZyb20gJy4uL3V0aWxzL2F4aW9zJztcclxuaW1wb3J0IHsgYXBpIH0gZnJvbSAnLi4vdXRpbHMvYXBpJ1xyXG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcclxuXHJcblxyXG5jbGFzcyBJbmRleCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKCkge1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGFwaS5ibG9nX2xpc3QgKyBgP3BhZ2Vfc2l6ZT0xMCZwYWdlPSR7MX1gKTtcclxuICAgICAgICBpZiAocmVzLmNvZGUgPT09ICcwJykge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgcG9zdHM6IHJlcy5kYXRhLmxpc3QsXHJcbiAgICAgICAgICAgICAgICB0b3RhbFBhZ2U6IHJlcy5kYXRhLnRvdGFsUGFnZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWhvbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnBvc3RzLm1hcCgoaXRlbSwgaW5kZXhzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxhcnRpY2xlIGtleT17aW5kZXhzfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImQtdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGFzPXtgL2FydGljbGUvZGV0YWlsLyR7aXRlbS5pZH1gfSBocmVmPXtgL2RldGFpbD9pZD0ke2l0ZW0uaWR9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+PHNwYW4+e2l0ZW0udGl0bGV9PC9zcGFuPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLmJyaWVmfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWludHJvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkLWRhdGVcIj57aXRlbS5wdWJkYXRlfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImQtdGFnc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS50YWdzLm1hcCgoaXRlbXMsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGFzPXtgL2FydGljbGUvdGFnLyR7aXRlbXMuaWR9YH0gaHJlZj17YC90YWc/aWQ9JHtpdGVtcy5pZH1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSA+e2l0ZW1zfTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkLXZpZXctbnVtXCI+6ZiF6K+7OntpdGVtLnJlYWRfY291bnR9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2FydGljbGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5pc0NvbXBsZXRlID8gPGRpdiBjbGFzc05hbWU9XCJsb2FkLW1vcmVcIj7lt7Lnu4/msqHmnInmm7TlpJrmlbDmja7llaZ+PC9kaXY+IDogPExvYWRNb3JlIGlzTG9hZGluZ01vcmU9e3RoaXMuc3RhdGUuaXNMb2FkaW5nTW9yZX0gbG9hZE1vcmVGbj17dGhpcy5sb2FkTW9yZURhdGEuYmluZCh0aGlzKX0gLz5cclxuICAgICAgICAgICAgICAgIH0gKi99XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgICBib2R5IHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y3O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAuZC1ob21lIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDExNzBweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IC44cmVtIGF1dG8gMDtcclxuICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAuNTByZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5kLXdyYXAge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA3ODBweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMS4ycmVtO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBhcnRpY2xlIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxLjJyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBhcnRpY2xlOjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNkZGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbTogLS42cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGFydGljbGU6bGFzdC1jaGlsZDo6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLmQtdGl0bGUge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAuMzJyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogLjJyZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5kLXRpdGxlIGEge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5kLXRpdGxlIGEgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDNweDtcclxuICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IDAuMTVzO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuMTVzO1xyXG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgLTJweCAwIHJnYmEoNjMsIDgxLCAxODEsIDApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAuZC10aXRsZSBhOmhvdmVyIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgLTJweCAwIHJnYmEoNjMsIDgxLCAxODEsIDAuNik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5kLWNvbnRlbnQge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogLjE2cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAuMjZyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogLjE1cmVtO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAuZC1pbnRybyB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogLjE0cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNjY2O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAuZC1kYXRlIHt9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5kLXRhZ3Mge1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC4xNXJlbTtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAuMjVyZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5kLXRhZ3MgYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLmQtdGFncyBhOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzAwMFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAuZC10YWdzIGErYTpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiL1wiO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCAuMDVyZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5kLXRhZ3M6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogLjIwcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogLjIwcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vaW1hZ2VzL2ljb24tdGFnLnBuZycpIG5vLXJlcGVhdDtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IC4yMHJlbSAuMjByZW07XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAuMDFyZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5kLXZpZXctbnVtIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAuMjVyZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5kLXZpZXctbnVtOjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IC4yMHJlbTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IC4yMHJlbTtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uL2ltYWdlcy9pY29uLXZpZXcucG5nJykgbm8tcmVwZWF0O1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogLjIwcmVtIC4yMHJlbTtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5sb2FkLW1vcmUge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IC4xNnJlbTtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZWVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IC4xMHJlbSAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8L0xheW91dD5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4vLyBjb25zdCBJbmRleCA9IChwcm9wcykgPT4gKFxyXG4vLyAgICAgPExheW91dD5cclxuLy8gICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtaG9tZVwiPlxyXG4vLyAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtd3JhcFwiPlxyXG4vLyAgICAgICAgICAgICAgICAge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIHByb3BzLnBvc3RzLm1hcCgoaXRlbSwgaW5kZXhzKSA9PiB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8YXJ0aWNsZSBrZXk9e2luZGV4c30+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZC10aXRsZVwiPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGFzPXtgL2FydGljbGUvZGV0YWlsLyR7aXRlbS5pZH1gfSBocmVmPXtgL2RldGFpbD9pZD0ke2l0ZW0uaWR9YH0+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPjxzcGFuPntpdGVtLnRpdGxlfTwvc3Bhbj48L2E+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1jb250ZW50XCI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0uYnJpZWZ9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1pbnRyb1wiPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImQtZGF0ZVwiPntpdGVtLnB1YmRhdGV9PC9zcGFuPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImQtdGFnc1wiPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnRhZ3MubWFwKChpdGVtcywgaW5kZXgpID0+IHtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBhcz17YC9hcnRpY2xlL3RhZy8ke2l0ZW1zLmlkfWB9IGhyZWY9e2AvdGFnP2lkPSR7aXRlbXMuaWR9YH0+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhID57aXRlbXN9PC9hPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZC12aWV3LW51bVwiPumYheivuzp7aXRlbS5yZWFkX2NvdW50fTwvc3Bhbj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICA8L2FydGljbGU+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgfSlcclxuLy8gICAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgICAgIHsvKiB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5pc0NvbXBsZXRlID8gPGRpdiBjbGFzc05hbWU9XCJsb2FkLW1vcmVcIj7lt7Lnu4/msqHmnInmm7TlpJrmlbDmja7llaZ+PC9kaXY+IDogPExvYWRNb3JlIGlzTG9hZGluZ01vcmU9e3RoaXMuc3RhdGUuaXNMb2FkaW5nTW9yZX0gbG9hZE1vcmVGbj17dGhpcy5sb2FkTW9yZURhdGEuYmluZCh0aGlzKX0gLz5cclxuLy8gICAgICAgICAgICAgICAgIH0gKi99XHJcblxyXG4vLyAgICAgICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuLy8gICAgICAgICAgICAgICAgIHtgXHJcbi8vICAgICAgICAgICAgICAgICBib2R5IHtcclxuLy8gICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y3O1xyXG4vLyAgICAgICAgICAgICAgICAgfVxyXG5cclxuLy8gICAgICAgICAgICAgICAgIC5kLWhvbWUge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTE3MHB4O1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogLjhyZW0gYXV0byAwO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IC41MHJlbTtcclxuLy8gICAgICAgICAgICAgICAgIH1cclxuXHJcbi8vICAgICAgICAgICAgICAgICAuZC13cmFwIHtcclxuLy8gICAgICAgICAgICAgICAgICAgICB3aWR0aDogNzgwcHg7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbi8vICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDEuMnJlbTtcclxuLy8gICAgICAgICAgICAgICAgIH1cclxuXHJcbi8vICAgICAgICAgICAgICAgICBhcnRpY2xlIHtcclxuLy8gICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxLjJyZW07XHJcbi8vICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4vLyAgICAgICAgICAgICAgICAgfVxyXG5cclxuLy8gICAgICAgICAgICAgICAgIGFydGljbGU6OmFmdGVyIHtcclxuLy8gICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MCU7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbi8vICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxcHg7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2RkZDtcclxuLy8gICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAtLjZyZW07XHJcbi8vICAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcclxuLy8gICAgICAgICAgICAgICAgICAgICByaWdodDogMDtcclxuLy8gICAgICAgICAgICAgICAgIH1cclxuXHJcbi8vICAgICAgICAgICAgICAgICBhcnRpY2xlOmxhc3QtY2hpbGQ6OmFmdGVyIHtcclxuLy8gICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDA7XHJcbi8vICAgICAgICAgICAgICAgICB9XHJcblxyXG4vLyAgICAgICAgICAgICAgICAgLmQtdGl0bGUge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAuMzJyZW07XHJcbi8vICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogLjJyZW07XHJcbi8vICAgICAgICAgICAgICAgICB9XHJcblxyXG4vLyAgICAgICAgICAgICAgICAgLmQtdGl0bGUgYSB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMzMzM7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuLy8gICAgICAgICAgICAgICAgIH1cclxuXHJcbi8vICAgICAgICAgICAgICAgICAuZC10aXRsZSBhIHNwYW4ge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAzcHg7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjE1cztcclxuLy8gICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjE1cztcclxuLy8gICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIC0ycHggMCByZ2JhKDYzLCA4MSwgMTgxLCAwKTtcclxuLy8gICAgICAgICAgICAgICAgIH1cclxuXHJcbi8vICAgICAgICAgICAgICAgICAuZC10aXRsZSBhOmhvdmVyIHNwYW4ge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgLTJweCAwIHJnYmEoNjMsIDgxLCAxODEsIDAuNik7XHJcbi8vICAgICAgICAgICAgICAgICB9XHJcblxyXG4vLyAgICAgICAgICAgICAgICAgLmQtY29udGVudCB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAuMTZyZW07XHJcbi8vICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IC4yNnJlbTtcclxuLy8gICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAuMTVyZW07XHJcbi8vICAgICAgICAgICAgICAgICB9XHJcblxyXG4vLyAgICAgICAgICAgICAgICAgLmQtaW50cm8ge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuLy8gICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IC4xNHJlbTtcclxuLy8gICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzY2NjtcclxuLy8gICAgICAgICAgICAgICAgIH1cclxuXHJcbi8vICAgICAgICAgICAgICAgICAuZC1kYXRlIHt9XHJcblxyXG4vLyAgICAgICAgICAgICAgICAgLmQtdGFncyB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgZmxleDogMTtcclxuLy8gICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogLjE1cmVtO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuLy8gICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IC4yNXJlbTtcclxuLy8gICAgICAgICAgICAgICAgIH1cclxuXHJcbi8vICAgICAgICAgICAgICAgICAuZC10YWdzIGEge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuLy8gICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbi8vICAgICAgICAgICAgICAgICB9XHJcblxyXG4vLyAgICAgICAgICAgICAgICAgLmQtdGFncyBhOmhvdmVyIHtcclxuLy8gICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzAwMFxyXG4vLyAgICAgICAgICAgICAgICAgfVxyXG5cclxuLy8gICAgICAgICAgICAgICAgIC5kLXRhZ3MgYSthOmJlZm9yZSB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCIvXCI7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIC4wNXJlbTtcclxuLy8gICAgICAgICAgICAgICAgIH1cclxuXHJcbi8vICAgICAgICAgICAgICAgICAuZC10YWdzOjpiZWZvcmUge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IC4yMHJlbTtcclxuLy8gICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IC4yMHJlbTtcclxuLy8gICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uL2ltYWdlcy9pY29uLXRhZy5wbmcnKSBuby1yZXBlYXQ7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiAuMjByZW0gLjIwcmVtO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuLy8gICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIHRvcDogLjAxcmVtO1xyXG4vLyAgICAgICAgICAgICAgICAgfVxyXG5cclxuLy8gICAgICAgICAgICAgICAgIC5kLXZpZXctbnVtIHtcclxuLy8gICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAuMjVyZW07XHJcbi8vICAgICAgICAgICAgICAgICB9XHJcblxyXG4vLyAgICAgICAgICAgICAgICAgLmQtdmlldy1udW06OmJlZm9yZSB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuLy8gICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuLy8gICAgICAgICAgICAgICAgICAgICB3aWR0aDogLjIwcmVtO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogLjIwcmVtO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vaW1hZ2VzL2ljb24tdmlldy5wbmcnKSBuby1yZXBlYXQ7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiAuMjByZW0gLjIwcmVtO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuLy8gICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIHRvcDogMDtcclxuLy8gICAgICAgICAgICAgICAgIH1cclxuXHJcbi8vICAgICAgICAgICAgICAgICAubG9hZC1tb3JlIHtcclxuLy8gICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAuMTZyZW07XHJcbi8vICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2VlZTtcclxuLy8gICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAuMTByZW0gMDtcclxuLy8gICAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgICAgIGB9XHJcbi8vICAgICAgICAgICAgIDwvc3R5bGU+XHJcbi8vICAgICAgICAgPC9kaXY+XHJcblxyXG4vLyAgICAgPC9MYXlvdXQ+XHJcbi8vICk7XHJcblxyXG4vLyBJbmRleC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbiAoKSB7XHJcbi8vICAgICAvLyBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkudHZtYXplLmNvbS9zZWFyY2gvc2hvd3M/cT1tYXJ2ZWwnKTtcclxuLy8gICAgIC8vIGNvbnN0IHJlcyA9IGF3YWl0IEZldGNoKHtcclxuLy8gICAgIC8vICAgICB1cmw6IGFwaS5ibG9nX2xpc3QrYD9wYWdlX3NpemU9MTAmcGFnZT0kezF9YCxcclxuLy8gICAgIC8vICAgICB0eXBlOiAnZ2V0JyxcclxuLy8gICAgIC8vIH0pXHJcbi8vICAgICAvLyAudGhlbihyZXMgPT4ge1xyXG4vLyAgICAgLy8gICAgIGNvbnN0IHsgY29kZSwgZGF0YSB9ID0gcmVzLmRhdGE7XHJcbi8vICAgICAvLyAgICAgaWYgKGNvZGUgPT09ICcwJykge1xyXG4vLyAgICAgLy8gICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuLy8gICAgIC8vICAgICAgICAgICAgIGxpc3REYXRhOiBkYXRhLmxpc3QsXHJcbi8vICAgICAvLyAgICAgICAgICAgICB0b3RhbFBhZ2U6IGRhdGEudG90YWxQYWdlXHJcbi8vICAgICAvLyAgICAgICAgIH0pXHJcbi8vICAgICAvLyAgICAgfVxyXG5cclxuLy8gICAgIC8vIH0pXHJcbi8vICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChhcGkuYmxvZ19saXN0K2A/cGFnZV9zaXplPTEwJnBhZ2U9JHsxfWApO1xyXG4vLyAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbi8vICAgICBpZihkYXRhLmNvZGUgPT09ICcwJyl7XHJcbi8vICAgICAgICAgcmV0dXJuIHtcclxuLy8gICAgICAgICAgICAgcG9zdHM6IGRhdGEuZGF0YS5saXN0LFxyXG4vLyAgICAgICAgICAgICB0b3RhbFBhZ2U6IGRhdGEuZGF0YS50b3RhbFBhZ2VcclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9XHJcblxyXG5cclxuLy8gfVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7Il19 */\n/*@ sourceURL=F:\\project\\blogdao\\pages\\index.js */")));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var res;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_13___default()(_utils_api__WEBPACK_IMPORTED_MODULE_12__["api"].blog_list + "?page_size=10&page=".concat(1));

              case 2:
                res = _context.sent;

                if (!(res.code === '0')) {
                  _context.next = 5;
                  break;
                }

                return _context.abrupt("return", {
                  posts: res.data.list,
                  totalPage: res.data.totalPage
                });

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps() {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component); // const Index = (props) => (
//     <Layout>
//         <div className="d-home">
//             <div className="d-wrap">
//                 {
//                     props.posts.map((item, indexs) => {
//                         return <article key={indexs}>
//                             <h3 className="d-title">
//                                 <Link as={`/article/detail/${item.id}`} href={`/detail?id=${item.id}`}>
//                                     <a><span>{item.title}</span></a>
//                                 </Link>
//                             </h3>
//                             <div className="d-content">
//                                 {item.brief}
//                             </div>
//                             <div className="d-intro">
//                                 <span className="d-date">{item.pubdate}</span>
//                                 <span className="d-tags">
//                                     {
//                                         item.tags.map((items, index) => {
//                                             return
//                                             <Link as={`/article/tag/${items.id}`} href={`/tag?id=${items.id}`}>
//                                                 <a >{items}</a>
//                                             </Link>
//                                         })
//                                     }
//                                 </span>
//                                 <span className="d-view-num">阅读:{item.read_count}</span>
//                             </div>
//                         </article>
//                     })
//                 }
//                 {/* {
//                     this.state.isComplete ? <div className="load-more">已经没有更多数据啦~</div> : <LoadMore isLoadingMore={this.state.isLoadingMore} loadMoreFn={this.loadMoreData.bind(this)} />
//                 } */}
//             </div>
//             <style jsx>
//                 {`
//                 body {
//                     background-color: #f7f7f7;
//                 }
//                 .d-home {
//                     max-width: 1170px;
//                     margin: .8rem auto 0;
//                     min-height: 100vh;
//                     background: #fff;
//                     padding-top: .50rem;
//                 }
//                 .d-wrap {
//                     width: 780px;
//                     margin: 0 auto;
//                     padding-bottom: 1.2rem;
//                 }
//                 article {
//                     margin-bottom: 1.2rem;
//                     position: relative;
//                 }
//                 article::after {
//                     content: "";
//                     display: block;
//                     width: 50%;
//                     margin: 0 auto;
//                     height: 1px;
//                     background: #ddd;
//                     position: absolute;
//                     bottom: -.6rem;
//                     left: 0;
//                     right: 0;
//                 }
//                 article:last-child::after {
//                     height: 0;
//                 }
//                 .d-title {
//                     font-weight: normal;
//                     font-size: .32rem;
//                     margin: 0;
//                     padding: 0;
//                     margin-bottom: .2rem;
//                 }
//                 .d-title a {
//                     color: #333;
//                     text-decoration: none;
//                     cursor: pointer;
//                 }
//                 .d-title a span {
//                     padding-bottom: 3px;
//                     -webkit-transition: 0.15s;
//                     transition: 0.15s;
//                     box-shadow: inset 0 -2px 0 rgba(63, 81, 181, 0);
//                 }
//                 .d-title a:hover span {
//                     box-shadow: inset 0 -2px 0 rgba(63, 81, 181, 0.6);
//                 }
//                 .d-content {
//                     font-size: .16rem;
//                     line-height: .26rem;
//                     margin-bottom: .15rem;
//                 }
//                 .d-intro {
//                     display: flex;
//                     align-items: center;
//                     font-size: .14rem;
//                     color: #666;
//                 }
//                 .d-date {}
//                 .d-tags {
//                     flex: 1;
//                     margin-left: .15rem;
//                     position: relative;
//                     padding-left: .25rem;
//                 }
//                 .d-tags a {
//                     display: inline-block;
//                     cursor: pointer;
//                 }
//                 .d-tags a:hover {
//                     color: #000
//                 }
//                 .d-tags a+a:before {
//                     content: "/";
//                     margin: 0 .05rem;
//                 }
//                 .d-tags::before {
//                     content: "";
//                     display: block;
//                     width: .20rem;
//                     height: .20rem;
//                     background: url('../../images/icon-tag.png') no-repeat;
//                     background-size: .20rem .20rem;
//                     position: absolute;
//                     left: 0;
//                     top: .01rem;
//                 }
//                 .d-view-num {
//                     position: relative;
//                     padding-left: .25rem;
//                 }
//                 .d-view-num::before {
//                     content: "";
//                     display: block;
//                     width: .20rem;
//                     height: .20rem;
//                     background: url('../../images/icon-view.png') no-repeat;
//                     background-size: .20rem .20rem;
//                     position: absolute;
//                     left: 0;
//                     top: 0;
//                 }
//                 .load-more {
//                     text-align: center;
//                     font-size: .16rem;
//                     background: #eee;
//                     padding: .10rem 0;
//                 }
//                 `}
//             </style>
//         </div>
//     </Layout>
// );
// Index.getInitialProps = async function () {
//     // const res = await fetch('https://api.tvmaze.com/search/shows?q=marvel');
//     // const res = await Fetch({
//     //     url: api.blog_list+`?page_size=10&page=${1}`,
//     //     type: 'get',
//     // })
//     // .then(res => {
//     //     const { code, data } = res.data;
//     //     if (code === '0') {
//     //         this.setState({
//     //             listData: data.list,
//     //             totalPage: data.totalPage
//     //         })
//     //     }
//     // })
//     const res = await fetch(api.blog_list+`?page_size=10&page=${1}`);
//     const data = await res.json();
//     if(data.code === '0'){
//         return {
//             posts: data.data.list,
//             totalPage: data.data.totalPage
//         }
//     }
// }


/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.797a4b5c0b8da9cc6e68.hot-update.js.map