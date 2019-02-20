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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _utils_axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/axios */ "./utils/axios.js");
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/api */ "./utils/api.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_8__);










var Index = function Index(props) {
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_5__["default"], null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "jsx-2059252360" + " " + "d-home"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "jsx-2059252360" + " " + "d-wrap"
  }, props.posts.map(function (item, indexs) {
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("article", {
      key: indexs,
      className: "jsx-2059252360"
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h3", {
      className: "jsx-2059252360" + " " + "d-title"
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      as: "/article/detail/".concat(item.id),
      href: "/detail?id=".concat(item.id)
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {
      className: "jsx-2059252360"
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
      className: "jsx-2059252360"
    }, item.title)))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "jsx-2059252360" + " " + "d-content"
    }, item.brief), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "jsx-2059252360" + " " + "d-intro"
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
      className: "jsx-2059252360" + " " + "d-date"
    }, item.pubdate), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
      className: "jsx-2059252360" + " " + "d-tags"
    }, item.tags.map(function (items, index) {
      return;
      react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
        as: "/article/tag/".concat(items.id),
        href: "/tag?id=".concat(items.id)
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {
        className: "jsx-2059252360"
      }, items));
    })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
      className: "jsx-2059252360" + " " + "d-view-num"
    }, "\u9605\u8BFB:", item.read_count)));
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "2059252360"
  }, "body.jsx-2059252360{background-color:#f7f7f7;}.d-home.jsx-2059252360{max-width:1170px;margin:.8rem auto 0;min-height:100vh;background:#fff;padding-top:.50rem;}.d-wrap.jsx-2059252360{width:780px;margin:0 auto;padding-bottom:1.2rem;}article.jsx-2059252360{margin-bottom:1.2rem;position:relative;}article.jsx-2059252360::after{content:\"\";display:block;width:50%;margin:0 auto;height:1px;background:#ddd;position:absolute;bottom:-.6rem;left:0;right:0;}article.jsx-2059252360:last-child.jsx-2059252360::after{height:0;}.d-title.jsx-2059252360{font-weight:normal;font-size:.32rem;margin:0;padding:0;margin-bottom:.2rem;}.d-title.jsx-2059252360 a.jsx-2059252360{color:#333;-webkit-text-decoration:none;text-decoration:none;cursor:pointer;}.d-title.jsx-2059252360 a.jsx-2059252360 span.jsx-2059252360{padding-bottom:3px;-webkit-transition:0.15s;-webkit-transition:0.15s;transition:0.15s;box-shadow:inset 0 -2px 0 rgba(63,81,181,0);}.d-title.jsx-2059252360 a.jsx-2059252360:hover span.jsx-2059252360{box-shadow:inset 0 -2px 0 rgba(63,81,181,0.6);}.d-content.jsx-2059252360{font-size:.16rem;line-height:.26rem;margin-bottom:.15rem;}.d-intro.jsx-2059252360{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:.14rem;color:#666;}.d-tags.jsx-2059252360{-webkit-flex:1;-ms-flex:1;flex:1;margin-left:.15rem;position:relative;padding-left:.25rem;}.d-tags.jsx-2059252360 a.jsx-2059252360{display:inline-block;cursor:pointer;}.d-tags.jsx-2059252360 a.jsx-2059252360:hover{color:#000;}.d-tags.jsx-2059252360 a.jsx-2059252360+a.jsx-2059252360:before{content:\"/\";margin:0 .05rem;}.d-tags.jsx-2059252360::before{content:\"\";display:block;width:.20rem;height:.20rem;background:url('../../images/icon-tag.png') no-repeat;background-size:.20rem .20rem;position:absolute;left:0;top:.01rem;}.d-view-num.jsx-2059252360{position:relative;padding-left:.25rem;}.d-view-num.jsx-2059252360::before{content:\"\";display:block;width:.20rem;height:.20rem;background:url('../../images/icon-view.png') no-repeat;background-size:.20rem .20rem;position:absolute;left:0;top:0;}.load-more.jsx-2059252360{text-align:center;font-size:.16rem;background:#eee;padding:.10rem 0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkY6XFxwcm9qZWN0XFxibG9nZGFvXFxwYWdlc1xcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkRpQixBQUc4QyxBQUlSLEFBUUwsQUFNUyxBQUtWLEFBYUYsQUFJVSxBQVFSLEFBTVEsQUFPOEIsQUFJaEMsQUFNSixBQVNOLEFBT2MsQUFNMUIsQUFHaUIsQUFLRCxBQVlPLEFBS1AsQUFZTyxTQTdGdEIsRUFia0IsQUF5Qk8sQUE0Q3pCLEFBU2tCLEFBaUJBLENBMUdBLEFBb0ZFLEtBNUZJLEFBNkRELENBZ0RDLEFBaUJILENBMUZBLEFBY1EsRUFwQ1AsQUFxRUgsSUF2Rm5CLEFBd0JjLEFBOEVHLEFBaUJBLENBMUdTLEVBb0YxQixLQWpCdUIsRUF2REwsQUEwR0UsQ0ExRlAsQUF5QlksQUFzQnpCLENBbkZxQixDQWtHSCxBQVdsQixBQU1rQixDQXJHbEIsS0FvQ3FCLENBYlAsQ0FtQmQsRUEvQ0EsQ0FZZSxFQTBHTSxDQW5EQyxBQXVCb0MsQUFpQkMsRUFuSHZDLENBcUNJLEVBd0J4QixHQXhDb0IsQ0FzQkQsT0FvRm5CLEVBOUh1QixBQTJFQyxJQVhELENBM0J2QixDQWhCc0IsQUFzQnRCLFVBTW1ELEdBaERuRCxDQTJFQSxJQXREa0IsWUE0RWdCLENBaUJBLENBNUZ2QixPQUNDLFFBQ1osT0F5QkEsTUFpRHNCLENBaUJBLGlCQWhCWCxDQWlCQSxNQWhCSSxDQWlCTCxLQXJEVyxDQXNEckIsSUFqQkEsWUFwQ2UsV0FDZiIsImZpbGUiOiJGOlxccHJvamVjdFxcYmxvZ2Rhb1xccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XHJcblxyXG5pbXBvcnQgRmV0Y2ggZnJvbSAnLi4vdXRpbHMvYXhpb3MnO1xyXG5pbXBvcnQge2FwaX0gZnJvbSAnLi4vdXRpbHMvYXBpJ1xyXG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcclxuXHJcbmNvbnN0IEluZGV4ID0gKHByb3BzKSA9PiAoXHJcbiAgICA8TGF5b3V0PlxyXG4gICAgICAgIHsvKiA8dWw+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHByb3BzLnNob3dzLm1hcCgoe3Nob3d9KT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17c2hvdy5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBhcz17YC9hcnRpY2xlL2RldGFpbC8ke3Nob3cuaWR9YH0gaHJlZj17YC9kZXRhaWw/aWQ9JHtzaG93LmlkfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPntzaG93LnRpdGxlfTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIDwvdWw+ICovfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1ob21lXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC13cmFwXCI+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcHMucG9zdHMubWFwKChpdGVtLCBpbmRleHMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxhcnRpY2xlIGtleT17aW5kZXhzfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJkLXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgYXM9e2AvYXJ0aWNsZS9kZXRhaWwvJHtpdGVtLmlkfWB9IGhyZWY9e2AvZGV0YWlsP2lkPSR7aXRlbS5pZH1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+PHNwYW4+e2l0ZW0udGl0bGV9PC9zcGFuPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5icmllZn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWludHJvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZC1kYXRlXCI+e2l0ZW0ucHViZGF0ZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZC10YWdzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0udGFncy5tYXAoKGl0ZW1zLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBhcz17YC9hcnRpY2xlL3RhZy8ke2l0ZW1zLmlkfWB9IGhyZWY9e2AvdGFnP2lkPSR7aXRlbXMuaWR9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhID57aXRlbXN9PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZC12aWV3LW51bVwiPumYheivuzp7aXRlbS5yZWFkX2NvdW50fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2FydGljbGU+XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHsvKiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5pc0NvbXBsZXRlID8gPGRpdiBjbGFzc05hbWU9XCJsb2FkLW1vcmVcIj7lt7Lnu4/msqHmnInmm7TlpJrmlbDmja7llaZ+PC9kaXY+IDogPExvYWRNb3JlIGlzTG9hZGluZ01vcmU9e3RoaXMuc3RhdGUuaXNMb2FkaW5nTW9yZX0gbG9hZE1vcmVGbj17dGhpcy5sb2FkTW9yZURhdGEuYmluZCh0aGlzKX0gLz5cclxuICAgICAgICAgICAgICAgIH0gKi99XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgICBib2R5IHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y3O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAuZC1ob21lIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDExNzBweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IC44cmVtIGF1dG8gMDtcclxuICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAuNTByZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5kLXdyYXAge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA3ODBweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMS4ycmVtO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBhcnRpY2xlIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxLjJyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBhcnRpY2xlOjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNkZGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbTogLS42cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGFydGljbGU6bGFzdC1jaGlsZDo6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLmQtdGl0bGUge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAuMzJyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogLjJyZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5kLXRpdGxlIGEge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5kLXRpdGxlIGEgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDNweDtcclxuICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IDAuMTVzO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuMTVzO1xyXG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgLTJweCAwIHJnYmEoNjMsIDgxLCAxODEsIDApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAuZC10aXRsZSBhOmhvdmVyIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgLTJweCAwIHJnYmEoNjMsIDgxLCAxODEsIDAuNik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5kLWNvbnRlbnQge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogLjE2cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAuMjZyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogLjE1cmVtO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAuZC1pbnRybyB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogLjE0cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNjY2O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAuZC1kYXRlIHt9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5kLXRhZ3Mge1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC4xNXJlbTtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAuMjVyZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5kLXRhZ3MgYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLmQtdGFncyBhOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzAwMFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAuZC10YWdzIGErYTpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiL1wiO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCAuMDVyZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5kLXRhZ3M6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogLjIwcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogLjIwcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vaW1hZ2VzL2ljb24tdGFnLnBuZycpIG5vLXJlcGVhdDtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IC4yMHJlbSAuMjByZW07XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAuMDFyZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5kLXZpZXctbnVtIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAuMjVyZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5kLXZpZXctbnVtOjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IC4yMHJlbTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IC4yMHJlbTtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uL2ltYWdlcy9pY29uLXZpZXcucG5nJykgbm8tcmVwZWF0O1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogLjIwcmVtIC4yMHJlbTtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5sb2FkLW1vcmUge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IC4xNnJlbTtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZWVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IC4xMHJlbSAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIFxyXG4gICAgPC9MYXlvdXQ+XHJcbik7XHJcblxyXG5JbmRleC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbiAoKSB7XHJcbiAgICAvLyBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkudHZtYXplLmNvbS9zZWFyY2gvc2hvd3M/cT1tYXJ2ZWwnKTtcclxuICAgIC8vIGNvbnN0IHJlcyA9IGF3YWl0IEZldGNoKHtcclxuICAgIC8vICAgICB1cmw6IGFwaS5ibG9nX2xpc3QrYD9wYWdlX3NpemU9MTAmcGFnZT0kezF9YCxcclxuICAgIC8vICAgICB0eXBlOiAnZ2V0JyxcclxuICAgIC8vIH0pXHJcbiAgICAvLyAudGhlbihyZXMgPT4ge1xyXG4gICAgLy8gICAgIGNvbnN0IHsgY29kZSwgZGF0YSB9ID0gcmVzLmRhdGE7XHJcbiAgICAvLyAgICAgaWYgKGNvZGUgPT09ICcwJykge1xyXG4gICAgLy8gICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgIC8vICAgICAgICAgICAgIGxpc3REYXRhOiBkYXRhLmxpc3QsXHJcbiAgICAvLyAgICAgICAgICAgICB0b3RhbFBhZ2U6IGRhdGEudG90YWxQYWdlXHJcbiAgICAvLyAgICAgICAgIH0pXHJcbiAgICAvLyAgICAgfVxyXG5cclxuICAgIC8vIH0pXHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cDovLzEyNy4wLjAuMTo4MDAwL2FwaS9ibG9nX2xpc3QnKTtcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwb3N0czogZGF0YS5kYXRhLmxpc3RcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4OyJdfQ== */\n/*@ sourceURL=F:\\project\\blogdao\\pages\\index.js */")));
};

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
          return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_8___default()('http://127.0.0.1:8000/api/blog_list');

        case 2:
          res = _context.sent;
          _context.next = 5;
          return res.json();

        case 5:
          data = _context.sent;
          return _context.abrupt("return", {
            posts: data.data.list
          });

        case 7:
        case "end":
          return _context.stop();
      }
    }
  }, _callee, this);
}));
/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.ac756c9ce9b5949e31d6.hot-update.js.map