"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/products/page",{

/***/ "(app-pages-browser)/./src/app/_components/productList.jsx":
/*!*********************************************!*\
  !*** ./src/app/_components/productList.jsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ProductList; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react-experimental/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\nfunction ProductList(param) {\n    let { products } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"products\",\n        children: products.map((p)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"card\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    href: \"/products/\".concat(p.id),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            children: [\n                                p.title,\n                                \" - \",\n                                p.size\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\evan1\\\\OneDrive\\\\Documents\\\\GitHub\\\\Redis-Stack\\\\src\\\\app\\\\_components\\\\productList.jsx\",\n                            lineNumber: 12,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            src: \"/img/\".concat(p.img),\n                            alt: p.title,\n                            width: 200,\n                            height: 300,\n                            className: \"mx-auto my-4\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\evan1\\\\OneDrive\\\\Documents\\\\GitHub\\\\Redis-Stack\\\\src\\\\app\\\\_components\\\\productList.jsx\",\n                            lineNumber: 13,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"my-3\",\n                            children: [\n                                \"$\",\n                                p.price\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\evan1\\\\OneDrive\\\\Documents\\\\GitHub\\\\Redis-Stack\\\\src\\\\app\\\\_components\\\\productList.jsx\",\n                            lineNumber: 20,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"font-semibold\",\n                            children: \"Available in:\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\evan1\\\\OneDrive\\\\Documents\\\\GitHub\\\\Redis-Stack\\\\src\\\\app\\\\_components\\\\productList.jsx\",\n                            lineNumber: 21,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: p.colors.toString()\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\evan1\\\\OneDrive\\\\Documents\\\\GitHub\\\\Redis-Stack\\\\src\\\\app\\\\_components\\\\productList.jsx\",\n                            lineNumber: 22,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\evan1\\\\OneDrive\\\\Documents\\\\GitHub\\\\Redis-Stack\\\\src\\\\app\\\\_components\\\\productList.jsx\",\n                    lineNumber: 11,\n                    columnNumber: 11\n                }, this)\n            }, p.title, false, {\n                fileName: \"C:\\\\Users\\\\evan1\\\\OneDrive\\\\Documents\\\\GitHub\\\\Redis-Stack\\\\src\\\\app\\\\_components\\\\productList.jsx\",\n                lineNumber: 10,\n                columnNumber: 9\n            }, this))\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\evan1\\\\OneDrive\\\\Documents\\\\GitHub\\\\Redis-Stack\\\\src\\\\app\\\\_components\\\\productList.jsx\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this);\n}\n_c = ProductList;\nvar _c;\n$RefreshReg$(_c, \"ProductList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvX2NvbXBvbmVudHMvcHJvZHVjdExpc3QuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFFOEI7QUFDRjtBQUViLFNBQVNFLFlBQVksS0FBWTtRQUFaLEVBQUVDLFFBQVEsRUFBRSxHQUFaO0lBQ2xDLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVO2tCQUNaRixTQUFTRyxHQUFHLENBQUNDLENBQUFBLGtCQUNaLDhEQUFDSDtnQkFBa0JDLFdBQVU7MEJBQzNCLDRFQUFDSixrREFBSUE7b0JBQUNPLE1BQU0sYUFBa0IsT0FBTEQsRUFBRUUsRUFBRTs7c0NBQzNCLDhEQUFDQzs7Z0NBQUlILEVBQUVJLEtBQUs7Z0NBQUM7Z0NBQUlKLEVBQUVLLElBQUk7Ozs7Ozs7c0NBQ3ZCLDhEQUFDWixtREFBS0E7NEJBQ0phLEtBQUssUUFBYyxPQUFOTixFQUFFTyxHQUFHOzRCQUNsQkMsS0FBS1IsRUFBRUksS0FBSzs0QkFDWkssT0FBTzs0QkFDUEMsUUFBUTs0QkFDUlosV0FBVTs7Ozs7O3NDQUVaLDhEQUFDRTs0QkFBRUYsV0FBVTs7Z0NBQU87Z0NBQUVFLEVBQUVXLEtBQUs7Ozs7Ozs7c0NBQzdCLDhEQUFDWDs0QkFBRUYsV0FBVTtzQ0FBZ0I7Ozs7OztzQ0FDN0IsOERBQUNFO3NDQUFHQSxFQUFFWSxNQUFNLENBQUNDLFFBQVE7Ozs7Ozs7Ozs7OztlQVpmYixFQUFFSSxLQUFLOzs7Ozs7Ozs7O0FBa0J6QjtLQXRCd0JUIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvX2NvbXBvbmVudHMvcHJvZHVjdExpc3QuanN4Pzk1YWEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcblxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9kdWN0TGlzdCh7IHByb2R1Y3RzIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3RzXCI+XG4gICAgICB7cHJvZHVjdHMubWFwKHAgPT4gKFxuICAgICAgICA8ZGl2IGtleT17cC50aXRsZX0gY2xhc3NOYW1lPVwiY2FyZFwiPlxuICAgICAgICAgIDxMaW5rIGhyZWY9e2AvcHJvZHVjdHMvJHtwLmlkfWB9PlxuICAgICAgICAgICAgPGgzPntwLnRpdGxlfSAtIHtwLnNpemV9PC9oMz5cbiAgICAgICAgICAgIDxJbWFnZSBcbiAgICAgICAgICAgICAgc3JjPXtgL2ltZy8ke3AuaW1nfWB9IFxuICAgICAgICAgICAgICBhbHQ9e3AudGl0bGV9IFxuICAgICAgICAgICAgICB3aWR0aD17MjAwfVxuICAgICAgICAgICAgICBoZWlnaHQ9ezMwMH1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXgtYXV0byBteS00XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJteS0zXCI+JHtwLnByaWNlfTwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGRcIj5BdmFpbGFibGUgaW46PC9wPlxuICAgICAgICAgICAgPHA+e3AuY29sb3JzLnRvU3RyaW5nKCl9PC9wPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApKX1cbiAgICA8L2Rpdj5cbiAgKVxufSJdLCJuYW1lcyI6WyJJbWFnZSIsIkxpbmsiLCJQcm9kdWN0TGlzdCIsInByb2R1Y3RzIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFwIiwicCIsImhyZWYiLCJpZCIsImgzIiwidGl0bGUiLCJzaXplIiwic3JjIiwiaW1nIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJwcmljZSIsImNvbG9ycyIsInRvU3RyaW5nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/_components/productList.jsx\n"));

/***/ })

});