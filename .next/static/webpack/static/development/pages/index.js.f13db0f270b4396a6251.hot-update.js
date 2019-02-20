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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _utils_axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/axios */ "./utils/axios.js");
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/api */ "./utils/api.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_12__);














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
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, "hello ", this.props.userAgent);
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var res, userAgent;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                res = _ref.res;
                userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
                return _context.abrupt("return", {
                  userAgent: userAgent
                });

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component); // const Index = (props) => (
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


Index.getInitialProps =
/*#__PURE__*/
Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
  var res, data;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_12___default()(_utils_api__WEBPACK_IMPORTED_MODULE_11__["api"].blog_list + "?page_size=10&page=".concat(1));

        case 2:
          res = _context2.sent;
          _context2.next = 5;
          return res.json();

        case 5:
          data = _context2.sent;

          if (!(data.code === '0')) {
            _context2.next = 8;
            break;
          }

          return _context2.abrupt("return", {
            posts: data.data.list,
            totalPage: data.data.totalPage
          });

        case 8:
        case "end":
          return _context2.stop();
      }
    }
  }, _callee2, this);
}));
/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.f13db0f270b4396a6251.hot-update.js.map