webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/readOnlyError.js":
false,

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
      }, "body.jsx-2059252360{background-color:#f7f7f7;}.d-home.jsx-2059252360{max-width:1170px;margin:.8rem auto 0;min-height:100vh;background:#fff;padding-top:.50rem;}.d-wrap.jsx-2059252360{width:780px;margin:0 auto;padding-bottom:1.2rem;}article.jsx-2059252360{margin-bottom:1.2rem;position:relative;}article.jsx-2059252360::after{content:\"\";display:block;width:50%;margin:0 auto;height:1px;background:#ddd;position:absolute;bottom:-.6rem;left:0;right:0;}article.jsx-2059252360:last-child.jsx-2059252360::after{height:0;}.d-title.jsx-2059252360{font-weight:normal;font-size:.32rem;margin:0;padding:0;margin-bottom:.2rem;}.d-title.jsx-2059252360 a.jsx-2059252360{color:#333;-webkit-text-decoration:none;text-decoration:none;cursor:pointer;}.d-title.jsx-2059252360 a.jsx-2059252360 span.jsx-2059252360{padding-bottom:3px;-webkit-transition:0.15s;-webkit-transition:0.15s;transition:0.15s;box-shadow:inset 0 -2px 0 rgba(63,81,181,0);}.d-title.jsx-2059252360 a.jsx-2059252360:hover span.jsx-2059252360{box-shadow:inset 0 -2px 0 rgba(63,81,181,0.6);}.d-content.jsx-2059252360{font-size:.16rem;line-height:.26rem;margin-bottom:.15rem;}.d-intro.jsx-2059252360{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:.14rem;color:#666;}.d-tags.jsx-2059252360{-webkit-flex:1;-ms-flex:1;flex:1;margin-left:.15rem;position:relative;padding-left:.25rem;}.d-tags.jsx-2059252360 a.jsx-2059252360{display:inline-block;cursor:pointer;}.d-tags.jsx-2059252360 a.jsx-2059252360:hover{color:#000;}.d-tags.jsx-2059252360 a.jsx-2059252360+a.jsx-2059252360:before{content:\"/\";margin:0 .05rem;}.d-tags.jsx-2059252360::before{content:\"\";display:block;width:.20rem;height:.20rem;background:url('../../images/icon-tag.png') no-repeat;background-size:.20rem .20rem;position:absolute;left:0;top:.01rem;}.d-view-num.jsx-2059252360{position:relative;padding-left:.25rem;}.d-view-num.jsx-2059252360::before{content:\"\";display:block;width:.20rem;height:.20rem;background:url('../../images/icon-view.png') no-repeat;background-size:.20rem .20rem;position:absolute;left:0;top:0;}.load-more.jsx-2059252360{text-align:center;font-size:.16rem;background:#eee;padding:.10rem 0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkY6XFxwcm9qZWN0XFxibG9nZGFvXFxwYWdlc1xcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNkR5QixBQUc4QyxBQUlSLEFBUUwsQUFNUyxBQUtWLEFBYUYsQUFJVSxBQVFSLEFBTVEsQUFPOEIsQUFJaEMsQUFNSixBQVNOLEFBT2MsQUFNMUIsQUFHaUIsQUFLRCxBQVlPLEFBS1AsQUFZTyxTQTdGdEIsRUFia0IsQUF5Qk8sQUE0Q3pCLEFBU2tCLEFBaUJBLENBMUdBLEFBb0ZFLEtBNUZJLEFBNkRELENBZ0RDLEFBaUJILENBMUZBLEFBY1EsRUFwQ1AsQUFxRUgsSUF2Rm5CLEFBd0JjLEFBOEVHLEFBaUJBLENBMUdTLEVBb0YxQixLQWpCdUIsRUF2REwsQUEwR0UsQ0ExRlAsQUF5QlksQUFzQnpCLENBbkZxQixDQWtHSCxBQVdsQixBQU1rQixDQXJHbEIsS0FvQ3FCLENBYlAsQ0FtQmQsRUEvQ0EsQ0FZZSxFQTBHTSxDQW5EQyxBQXVCb0MsQUFpQkMsRUFuSHZDLENBcUNJLEVBd0J4QixHQXhDb0IsQ0FzQkQsT0FvRm5CLEVBOUh1QixBQTJFQyxJQVhELENBM0J2QixDQWhCc0IsQUFzQnRCLFVBTW1ELEdBaERuRCxDQTJFQSxJQXREa0IsWUE0RWdCLENBaUJBLENBNUZ2QixPQUNDLFFBQ1osT0F5QkEsTUFpRHNCLENBaUJBLGlCQWhCWCxDQWlCQSxNQWhCSSxDQWlCTCxLQXJEVyxDQXNEckIsSUFqQkEsWUFwQ2UsV0FDZiIsImZpbGUiOiJGOlxccHJvamVjdFxcYmxvZ2Rhb1xccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xyXG5cclxuaW1wb3J0IEZldGNoIGZyb20gJy4uL3V0aWxzL2F4aW9zJztcclxuaW1wb3J0IHsgYXBpIH0gZnJvbSAnLi4vdXRpbHMvYXBpJ1xyXG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcclxuXHJcblxyXG5jbGFzcyBJbmRleCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKCkge1xyXG4gICAgICAgIGNvbnN0IHJlcSA9IGF3YWl0IGZldGNoKGFwaS5ibG9nX2xpc3QgKyBgP3BhZ2Vfc2l6ZT0xMCZwYWdlPSR7MX1gKTtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgICAgIGlmIChyZXMuY29kZSA9PT0gJzAnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBwb3N0czogcmVzLmRhdGEubGlzdCxcclxuICAgICAgICAgICAgICAgIHRvdGFsUGFnZTogcmVzLmRhdGEudG90YWxQYWdlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtaG9tZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC13cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMucG9zdHMubWFwKChpdGVtLCBpbmRleHMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGFydGljbGUga2V5PXtpbmRleHN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZC10aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgYXM9e2AvYXJ0aWNsZS9kZXRhaWwvJHtpdGVtLmlkfWB9IGhyZWY9e2AvZGV0YWlsP2lkPSR7aXRlbS5pZH1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT48c3Bhbj57aXRlbS50aXRsZX08L3NwYW4+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0uYnJpZWZ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtaW50cm9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImQtZGF0ZVwiPntpdGVtLnB1YmRhdGV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZC10YWdzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnRhZ3MubWFwKChpdGVtcywgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgYXM9e2AvYXJ0aWNsZS90YWcvJHtpdGVtcy5pZH1gfSBocmVmPXtgL3RhZz9pZD0ke2l0ZW1zLmlkfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhID57aXRlbXN9PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImQtdmlldy1udW1cIj7pmIXor7s6e2l0ZW0ucmVhZF9jb3VudH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYXJ0aWNsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmlzQ29tcGxldGUgPyA8ZGl2IGNsYXNzTmFtZT1cImxvYWQtbW9yZVwiPuW3sue7j+ayoeacieabtOWkmuaVsOaNruWVpn48L2Rpdj4gOiA8TG9hZE1vcmUgaXNMb2FkaW5nTW9yZT17dGhpcy5zdGF0ZS5pc0xvYWRpbmdNb3JlfSBsb2FkTW9yZUZuPXt0aGlzLmxvYWRNb3JlRGF0YS5iaW5kKHRoaXMpfSAvPlxyXG4gICAgICAgICAgICAgICAgfSAqL31cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2BcclxuICAgICAgICAgICAgICAgIGJvZHkge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmN2Y3Zjc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5kLWhvbWUge1xyXG4gICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTE3MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogLjhyZW0gYXV0byAwO1xyXG4gICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IC41MHJlbTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLmQtd3JhcCB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDc4MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxLjJyZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGFydGljbGUge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEuMnJlbTtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGFydGljbGU6OmFmdGVyIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2RkZDtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAtLjZyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgYXJ0aWNsZTpsYXN0LWNoaWxkOjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAuZC10aXRsZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IC4zMnJlbTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAuMnJlbTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLmQtdGl0bGUgYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMzMzM7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLmQtdGl0bGUgYSBzcGFuIHtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogM3B4O1xyXG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogMC4xNXM7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4xNXM7XHJcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAtMnB4IDAgcmdiYSg2MywgODEsIDE4MSwgMCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5kLXRpdGxlIGE6aG92ZXIgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAtMnB4IDAgcmdiYSg2MywgODEsIDE4MSwgMC42KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLmQtY29udGVudCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAuMTZyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IC4yNnJlbTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAuMTVyZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5kLWludHJvIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAuMTRyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM2NjY7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5kLWRhdGUge31cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLmQtdGFncyB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleDogMTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogLjE1cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IC4yNXJlbTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLmQtdGFncyBhIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAuZC10YWdzIGE6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5kLXRhZ3MgYSthOmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCIvXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIC4wNXJlbTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLmQtdGFnczo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAuMjByZW07XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAuMjByZW07XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi9pbWFnZXMvaWNvbi10YWcucG5nJykgbm8tcmVwZWF0O1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogLjIwcmVtIC4yMHJlbTtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IC4wMXJlbTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLmQtdmlldy1udW0ge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IC4yNXJlbTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLmQtdmlldy1udW06OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogLjIwcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogLjIwcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vaW1hZ2VzL2ljb24tdmlldy5wbmcnKSBuby1yZXBlYXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiAuMjByZW0gLjIwcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLmxvYWQtbW9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogLjE2cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNlZWU7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogLjEwcmVtIDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuXHJcbi8vIGNvbnN0IEluZGV4ID0gKHByb3BzKSA9PiAoXHJcbi8vICAgICA8TGF5b3V0PlxyXG4vLyAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1ob21lXCI+XHJcbi8vICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC13cmFwXCI+XHJcbi8vICAgICAgICAgICAgICAgICB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgcHJvcHMucG9zdHMubWFwKChpdGVtLCBpbmRleHMpID0+IHtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxhcnRpY2xlIGtleT17aW5kZXhzfT5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJkLXRpdGxlXCI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgYXM9e2AvYXJ0aWNsZS9kZXRhaWwvJHtpdGVtLmlkfWB9IGhyZWY9e2AvZGV0YWlsP2lkPSR7aXRlbS5pZH1gfT5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+PHNwYW4+e2l0ZW0udGl0bGV9PC9zcGFuPjwvYT5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWNvbnRlbnRcIj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5icmllZn1cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWludHJvXCI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZC1kYXRlXCI+e2l0ZW0ucHViZGF0ZX08L3NwYW4+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZC10YWdzXCI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0udGFncy5tYXAoKGl0ZW1zLCBpbmRleCkgPT4ge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGFzPXtgL2FydGljbGUvdGFnLyR7aXRlbXMuaWR9YH0gaHJlZj17YC90YWc/aWQ9JHtpdGVtcy5pZH1gfT5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgPntpdGVtc308L2E+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkLXZpZXctbnVtXCI+6ZiF6K+7OntpdGVtLnJlYWRfY291bnR9PC9zcGFuPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIDwvYXJ0aWNsZT5cclxuLy8gICAgICAgICAgICAgICAgICAgICB9KVxyXG4vLyAgICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICAgICAgey8qIHtcclxuLy8gICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmlzQ29tcGxldGUgPyA8ZGl2IGNsYXNzTmFtZT1cImxvYWQtbW9yZVwiPuW3sue7j+ayoeacieabtOWkmuaVsOaNruWVpn48L2Rpdj4gOiA8TG9hZE1vcmUgaXNMb2FkaW5nTW9yZT17dGhpcy5zdGF0ZS5pc0xvYWRpbmdNb3JlfSBsb2FkTW9yZUZuPXt0aGlzLmxvYWRNb3JlRGF0YS5iaW5kKHRoaXMpfSAvPlxyXG4vLyAgICAgICAgICAgICAgICAgfSAqL31cclxuXHJcbi8vICAgICAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICAgICAgICA8c3R5bGUganN4PlxyXG4vLyAgICAgICAgICAgICAgICAge2BcclxuLy8gICAgICAgICAgICAgICAgIGJvZHkge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmN2Y3Zjc7XHJcbi8vICAgICAgICAgICAgICAgICB9XHJcblxyXG4vLyAgICAgICAgICAgICAgICAgLmQtaG9tZSB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMTcwcHg7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAuOHJlbSBhdXRvIDA7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogMTAwdmg7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuLy8gICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogLjUwcmVtO1xyXG4vLyAgICAgICAgICAgICAgICAgfVxyXG5cclxuLy8gICAgICAgICAgICAgICAgIC5kLXdyYXAge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA3ODBweDtcclxuLy8gICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuLy8gICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMS4ycmVtO1xyXG4vLyAgICAgICAgICAgICAgICAgfVxyXG5cclxuLy8gICAgICAgICAgICAgICAgIGFydGljbGUge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEuMnJlbTtcclxuLy8gICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbi8vICAgICAgICAgICAgICAgICB9XHJcblxyXG4vLyAgICAgICAgICAgICAgICAgYXJ0aWNsZTo6YWZ0ZXIge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwJTtcclxuLy8gICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuLy8gICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDFweDtcclxuLy8gICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZGRkO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuLy8gICAgICAgICAgICAgICAgICAgICBib3R0b206IC0uNnJlbTtcclxuLy8gICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4vLyAgICAgICAgICAgICAgICAgfVxyXG5cclxuLy8gICAgICAgICAgICAgICAgIGFydGljbGU6bGFzdC1jaGlsZDo6YWZ0ZXIge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMDtcclxuLy8gICAgICAgICAgICAgICAgIH1cclxuXHJcbi8vICAgICAgICAgICAgICAgICAuZC10aXRsZSB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuLy8gICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IC4zMnJlbTtcclxuLy8gICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuLy8gICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAuMnJlbTtcclxuLy8gICAgICAgICAgICAgICAgIH1cclxuXHJcbi8vICAgICAgICAgICAgICAgICAuZC10aXRsZSBhIHtcclxuLy8gICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzMzMztcclxuLy8gICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4vLyAgICAgICAgICAgICAgICAgfVxyXG5cclxuLy8gICAgICAgICAgICAgICAgIC5kLXRpdGxlIGEgc3BhbiB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDNweDtcclxuLy8gICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IDAuMTVzO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuMTVzO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgLTJweCAwIHJnYmEoNjMsIDgxLCAxODEsIDApO1xyXG4vLyAgICAgICAgICAgICAgICAgfVxyXG5cclxuLy8gICAgICAgICAgICAgICAgIC5kLXRpdGxlIGE6aG92ZXIgc3BhbiB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAtMnB4IDAgcmdiYSg2MywgODEsIDE4MSwgMC42KTtcclxuLy8gICAgICAgICAgICAgICAgIH1cclxuXHJcbi8vICAgICAgICAgICAgICAgICAuZC1jb250ZW50IHtcclxuLy8gICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IC4xNnJlbTtcclxuLy8gICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogLjI2cmVtO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IC4xNXJlbTtcclxuLy8gICAgICAgICAgICAgICAgIH1cclxuXHJcbi8vICAgICAgICAgICAgICAgICAuZC1pbnRybyB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuLy8gICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogLjE0cmVtO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNjY2O1xyXG4vLyAgICAgICAgICAgICAgICAgfVxyXG5cclxuLy8gICAgICAgICAgICAgICAgIC5kLWRhdGUge31cclxuXHJcbi8vICAgICAgICAgICAgICAgICAuZC10YWdzIHtcclxuLy8gICAgICAgICAgICAgICAgICAgICBmbGV4OiAxO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAuMTVyZW07XHJcbi8vICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogLjI1cmVtO1xyXG4vLyAgICAgICAgICAgICAgICAgfVxyXG5cclxuLy8gICAgICAgICAgICAgICAgIC5kLXRhZ3MgYSB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuLy8gICAgICAgICAgICAgICAgIH1cclxuXHJcbi8vICAgICAgICAgICAgICAgICAuZC10YWdzIGE6aG92ZXIge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwXHJcbi8vICAgICAgICAgICAgICAgICB9XHJcblxyXG4vLyAgICAgICAgICAgICAgICAgLmQtdGFncyBhK2E6YmVmb3JlIHtcclxuLy8gICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIi9cIjtcclxuLy8gICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgLjA1cmVtO1xyXG4vLyAgICAgICAgICAgICAgICAgfVxyXG5cclxuLy8gICAgICAgICAgICAgICAgIC5kLXRhZ3M6OmJlZm9yZSB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuLy8gICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuLy8gICAgICAgICAgICAgICAgICAgICB3aWR0aDogLjIwcmVtO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogLjIwcmVtO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vaW1hZ2VzL2ljb24tdGFnLnBuZycpIG5vLXJlcGVhdDtcclxuLy8gICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IC4yMHJlbSAuMjByZW07XHJcbi8vICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgdG9wOiAuMDFyZW07XHJcbi8vICAgICAgICAgICAgICAgICB9XHJcblxyXG4vLyAgICAgICAgICAgICAgICAgLmQtdmlldy1udW0ge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuLy8gICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IC4yNXJlbTtcclxuLy8gICAgICAgICAgICAgICAgIH1cclxuXHJcbi8vICAgICAgICAgICAgICAgICAuZC12aWV3LW51bTo6YmVmb3JlIHtcclxuLy8gICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAuMjByZW07XHJcbi8vICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAuMjByZW07XHJcbi8vICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi9pbWFnZXMvaWNvbi12aWV3LnBuZycpIG5vLXJlcGVhdDtcclxuLy8gICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IC4yMHJlbSAuMjByZW07XHJcbi8vICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4vLyAgICAgICAgICAgICAgICAgfVxyXG5cclxuLy8gICAgICAgICAgICAgICAgIC5sb2FkLW1vcmUge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuLy8gICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IC4xNnJlbTtcclxuLy8gICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZWVlO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IC4xMHJlbSAwO1xyXG4vLyAgICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICAgICAgYH1cclxuLy8gICAgICAgICAgICAgPC9zdHlsZT5cclxuLy8gICAgICAgICA8L2Rpdj5cclxuXHJcbi8vICAgICA8L0xheW91dD5cclxuLy8gKTtcclxuXHJcbi8vIEluZGV4LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGZ1bmN0aW9uICgpIHtcclxuLy8gICAgIC8vIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS50dm1hemUuY29tL3NlYXJjaC9zaG93cz9xPW1hcnZlbCcpO1xyXG4vLyAgICAgLy8gY29uc3QgcmVzID0gYXdhaXQgRmV0Y2goe1xyXG4vLyAgICAgLy8gICAgIHVybDogYXBpLmJsb2dfbGlzdCtgP3BhZ2Vfc2l6ZT0xMCZwYWdlPSR7MX1gLFxyXG4vLyAgICAgLy8gICAgIHR5cGU6ICdnZXQnLFxyXG4vLyAgICAgLy8gfSlcclxuLy8gICAgIC8vIC50aGVuKHJlcyA9PiB7XHJcbi8vICAgICAvLyAgICAgY29uc3QgeyBjb2RlLCBkYXRhIH0gPSByZXMuZGF0YTtcclxuLy8gICAgIC8vICAgICBpZiAoY29kZSA9PT0gJzAnKSB7XHJcbi8vICAgICAvLyAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4vLyAgICAgLy8gICAgICAgICAgICAgbGlzdERhdGE6IGRhdGEubGlzdCxcclxuLy8gICAgIC8vICAgICAgICAgICAgIHRvdGFsUGFnZTogZGF0YS50b3RhbFBhZ2VcclxuLy8gICAgIC8vICAgICAgICAgfSlcclxuLy8gICAgIC8vICAgICB9XHJcblxyXG4vLyAgICAgLy8gfSlcclxuLy8gICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGFwaS5ibG9nX2xpc3QrYD9wYWdlX3NpemU9MTAmcGFnZT0kezF9YCk7XHJcbi8vICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuLy8gICAgIGlmKGRhdGEuY29kZSA9PT0gJzAnKXtcclxuLy8gICAgICAgICByZXR1cm4ge1xyXG4vLyAgICAgICAgICAgICBwb3N0czogZGF0YS5kYXRhLmxpc3QsXHJcbi8vICAgICAgICAgICAgIHRvdGFsUGFnZTogZGF0YS5kYXRhLnRvdGFsUGFnZVxyXG4vLyAgICAgICAgIH1cclxuLy8gICAgIH1cclxuXHJcblxyXG4vLyB9XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDsiXX0= */\n/*@ sourceURL=F:\\project\\blogdao\\pages\\index.js */")));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var req, res;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_13___default()(_utils_api__WEBPACK_IMPORTED_MODULE_12__["api"].blog_list + "?page_size=10&page=".concat(1));

              case 2:
                req = _context.sent;
                _context.next = 5;
                return res.json();

              case 5:
                res = _context.sent;

                if (!(res.code === '0')) {
                  _context.next = 8;
                  break;
                }

                return _context.abrupt("return", {
                  posts: res.data.list,
                  totalPage: res.data.totalPage
                });

              case 8:
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
//# sourceMappingURL=index.js.fb55dbcccf2fc90f89b7.hot-update.js.map