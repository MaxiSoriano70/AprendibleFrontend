"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/libros",{

/***/ "./pages/libros/index.js":
/*!*******************************!*\
  !*** ./pages/libros/index.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst BookList = (param)=>{\n    let { books  } = param;\n    async function handleDelete(e, bookId) {\n        e.preventDefault();\n        const res = await fetch(\"\".concat(\"http://localhost:8000\", \"/api/books/\").concat(bookId), {\n            method: \"POST\",\n            headers: {\n                accept: \"application/json\",\n                \"content-type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                _method: \"DELETE\"\n            })\n        });\n        if (res.ok) {\n            window.location.href = \"/libros\";\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Books\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\xampp\\\\htdocs\\\\Aprendible\\\\books\\\\frontend\\\\pages\\\\libros\\\\index.js\",\n                        lineNumber: 37,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Index de libros\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\xampp\\\\htdocs\\\\Aprendible\\\\books\\\\frontend\\\\pages\\\\libros\\\\index.js\",\n                        lineNumber: 38,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\xampp\\\\htdocs\\\\Aprendible\\\\books\\\\frontend\\\\pages\\\\libros\\\\index.js\",\n                lineNumber: 36,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Libros\"\n            }, void 0, false, {\n                fileName: \"C:\\\\xampp\\\\htdocs\\\\Aprendible\\\\books\\\\frontend\\\\pages\\\\libros\\\\index.js\",\n                lineNumber: 45,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: books.map((book)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                href: \"/libros/\".concat(book.id),\n                                children: book.title\n                            }, void 0, false, {\n                                fileName: \"C:\\\\xampp\\\\htdocs\\\\Aprendible\\\\books\\\\frontend\\\\pages\\\\libros\\\\index.js\",\n                                lineNumber: 49,\n                                columnNumber: 25\n                            }, undefined),\n                            \" - \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                href: \"/libros/\".concat(book.id, \"/editar\"),\n                                children: \"Editar\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\xampp\\\\htdocs\\\\Aprendible\\\\books\\\\frontend\\\\pages\\\\libros\\\\index.js\",\n                                lineNumber: 53,\n                                columnNumber: 25\n                            }, undefined),\n                            \" - \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                onSubmit: (e)=>handleDelete(e, book.id),\n                                style: {\n                                    display: \"inline\"\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    children: \"Eliminar\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\xampp\\\\htdocs\\\\Aprendible\\\\books\\\\frontend\\\\pages\\\\libros\\\\index.js\",\n                                    lineNumber: 58,\n                                    columnNumber: 29\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\xampp\\\\htdocs\\\\Aprendible\\\\books\\\\frontend\\\\pages\\\\libros\\\\index.js\",\n                                lineNumber: 57,\n                                columnNumber: 25\n                            }, undefined)\n                        ]\n                    }, \"book-\".concat(book.id), true, {\n                        fileName: \"C:\\\\xampp\\\\htdocs\\\\Aprendible\\\\books\\\\frontend\\\\pages\\\\libros\\\\index.js\",\n                        lineNumber: 48,\n                        columnNumber: 21\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"C:\\\\xampp\\\\htdocs\\\\Aprendible\\\\books\\\\frontend\\\\pages\\\\libros\\\\index.js\",\n                lineNumber: 46,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                href: \"/libros/crear\",\n                children: \"Create Book\"\n            }, void 0, false, {\n                fileName: \"C:\\\\xampp\\\\htdocs\\\\Aprendible\\\\books\\\\frontend\\\\pages\\\\libros\\\\index.js\",\n                lineNumber: 63,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\xampp\\\\htdocs\\\\Aprendible\\\\books\\\\frontend\\\\pages\\\\libros\\\\index.js\",\n                lineNumber: 64,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                href: \"../\",\n                children: \"Principal\"\n            }, void 0, false, {\n                fileName: \"C:\\\\xampp\\\\htdocs\\\\Aprendible\\\\books\\\\frontend\\\\pages\\\\libros\\\\index.js\",\n                lineNumber: 65,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\xampp\\\\htdocs\\\\Aprendible\\\\books\\\\frontend\\\\pages\\\\libros\\\\index.js\",\n        lineNumber: 35,\n        columnNumber: 9\n    }, undefined);\n};\n_c = BookList;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BookList);\nvar _c;\n$RefreshReg$(_c, \"BookList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9saWJyb3MvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFBNEI7QUFDQTtBQUNxQjtBQWNqRCxNQUFNRyxXQUFTLFNBQVc7UUFBVixFQUFDQyxNQUFLLEVBQUM7SUFDbkIsZUFBZUMsYUFBYUMsQ0FBQyxFQUFFQyxNQUFNLEVBQUM7UUFDbENELEVBQUVFLGNBQWM7UUFDaEIsTUFBTUMsTUFBSSxNQUFNQyxNQUFNLEdBQW9ESCxPQUFqREksdUJBQW1DLEVBQUMsZUFBb0IsT0FBUEosU0FBUztZQUMvRU8sUUFBUTtZQUNSQyxTQUFTO2dCQUNMQyxRQUFRO2dCQUNSLGdCQUFlO1lBQ25CO1lBQ0FDLE1BQUtDLEtBQUtDLFNBQVMsQ0FBQztnQkFDaEJDLFNBQVM7WUFDYjtRQUNKO1FBQ0EsSUFBR1gsSUFBSVksRUFBRSxFQUFDO1lBQ05DLE9BQU9DLFFBQVEsQ0FBQ0MsSUFBSSxHQUFDO1FBQ3pCLENBQUM7SUFDTDtJQUNBLHFCQUNJLDhEQUFDQztRQUFJQyxXQUFXeEIsMEVBQWdCOzswQkFDNUIsOERBQUNGLGtEQUFJQTs7a0NBQ0wsOERBQUM0QjtrQ0FBTTs7Ozs7O2tDQUNQLDhEQUFDQzt3QkFBS0MsTUFBSzt3QkFBY0MsU0FBUTs7Ozs7Ozs7Ozs7OzBCQU9qQyw4REFBQ0M7MEJBQUc7Ozs7OzswQkFDSiw4REFBQ0M7MEJBQ0k3QixNQUFNOEIsR0FBRyxDQUFDQyxDQUFBQSxxQkFDUCw4REFBQ0M7OzBDQUNHLDhEQUFDbkMsa0RBQUlBO2dDQUFDdUIsTUFBTSxXQUFtQixPQUFSVyxLQUFLRSxFQUFFOzBDQUN6QkYsS0FBS1AsS0FBSzs7Ozs7OzRCQUVkOzBDQUNELDhEQUFDM0Isa0RBQUlBO2dDQUFDdUIsTUFBTSxXQUFtQixPQUFSVyxLQUFLRSxFQUFFLEVBQUM7MENBQVU7Ozs7Ozs0QkFHeEM7MENBQ0QsOERBQUNDO2dDQUFLQyxVQUFVLENBQUNqQyxJQUFJRCxhQUFhQyxHQUFFNkIsS0FBS0UsRUFBRTtnQ0FBR0csT0FBTztvQ0FBQ0MsU0FBUTtnQ0FBUTswQ0FDbEUsNEVBQUNDOzhDQUFPOzs7Ozs7Ozs7Ozs7dUJBVlAsUUFBZ0IsT0FBUlAsS0FBS0UsRUFBRTs7Ozs7Ozs7OzswQkFlaEMsOERBQUNwQyxrREFBSUE7Z0JBQUN1QixNQUFLOzBCQUFnQjs7Ozs7OzBCQUMzQiw4REFBQ21COzs7OzswQkFDRCw4REFBQzFDLGtEQUFJQTtnQkFBQ3VCLE1BQUs7MEJBQU07Ozs7Ozs7Ozs7OztBQUk3QjtLQXBETXJCOztBQXNETiwrREFBZUEsUUFBUUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9saWJyb3MvaW5kZXguanM/NGNlMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCJcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpe1xyXG4gICAgLy9Db25lY3RhbW9zIEFwaVxyXG4gICAgY29uc3QgcmVzPWF3YWl0IGZldGNoKGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0JBQ0tFTkRfVVJMfS9hcGkvYm9va3NgKVxyXG4gICAgLy9UcmFlbW9zIGxvcyBkYXRvc1xyXG4gICAgY29uc3QgZGF0YT1hd2FpdCByZXMuanNvbigpO1xyXG4gICAgcmV0dXJue1xyXG4gICAgICAgIHByb3BzOntcclxuICAgICAgICAgICAgYm9va3M6ZGF0YVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgQm9va0xpc3Q9KHtib29rc30pPT57XHJcbiAgICBhc3luYyBmdW5jdGlvbiBoYW5kbGVEZWxldGUoZSwgYm9va0lkKXtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc3QgcmVzPWF3YWl0IGZldGNoKGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0JBQ0tFTkRfVVJMfS9hcGkvYm9va3MvJHtib29rSWR9YCx7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBhY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgICAgICdjb250ZW50LXR5cGUnOidhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYm9keTpKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgICAgICBfbWV0aG9kOiAnREVMRVRFJ1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmKHJlcy5vayl7XHJcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmPScvbGlicm9zJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgIDx0aXRsZT5Cb29rczwvdGl0bGU+XHJcbiAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJJbmRleCBkZSBsaWJyb3NcIiAvPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcblxyXG4gICAgICAgICAgICB7LypNdWVzdHJvIGxvIHF1ZSB0cmFpZ28gZGUgbGEgYXBpKi99XHJcbiAgICAgICAgICAgIHsvKjxwcmU+e0pTT04uc3RyaW5naWZ5KGJvb2tzKX08L3ByZT4qL31cclxuXHJcblxyXG4gICAgICAgICAgICA8aDE+TGlicm9zPC9oMT5cclxuICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAge2Jvb2tzLm1hcChib29rID0+KFxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2Bib29rLSR7Ym9vay5pZH1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9saWJyb3MvJHtib29rLmlkfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2Jvb2sudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgeycgLSAnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL2xpYnJvcy8ke2Jvb2suaWR9L2VkaXRhcmB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRWRpdGFyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgeycgLSAnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17KGUpPT5oYW5kbGVEZWxldGUoZSxib29rLmlkKX0gc3R5bGU9e3tkaXNwbGF5OidpbmxpbmUnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uPkVsaW1pbmFyPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbGlicm9zL2NyZWFyXCI+Q3JlYXRlIEJvb2s8L0xpbms+XHJcbiAgICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiLi4vXCI+UHJpbmNpcGFsPC9MaW5rPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgXHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJvb2tMaXN0Il0sIm5hbWVzIjpbIkhlYWQiLCJMaW5rIiwic3R5bGVzIiwiQm9va0xpc3QiLCJib29rcyIsImhhbmRsZURlbGV0ZSIsImUiLCJib29rSWQiLCJwcmV2ZW50RGVmYXVsdCIsInJlcyIsImZldGNoIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0JBQ0tFTkRfVVJMIiwibWV0aG9kIiwiaGVhZGVycyIsImFjY2VwdCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiX21ldGhvZCIsIm9rIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJoMSIsInVsIiwibWFwIiwiYm9vayIsImxpIiwiaWQiLCJmb3JtIiwib25TdWJtaXQiLCJzdHlsZSIsImRpc3BsYXkiLCJidXR0b24iLCJiciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/libros/index.js\n"));

/***/ })

});