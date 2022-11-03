"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/libros/crear",{

/***/ "./pages/libros/crear.js":
/*!*******************************!*\
  !*** ./pages/libros/crear.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst BookCreate = ()=>{\n    _s();\n    const [bookTitle, setBookName] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [errors, setErrors] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    async function handleSubmit(e) {\n        e.preventDefault();\n        const res = await fetch(\"\".concat(\"http://localhost:8000\", \"/api/books\"), {\n            method: \"POST\",\n            headers: {\n                accept: \"application/json\",\n                \"content-type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                title: bookTitle\n            })\n        });\n        if (res.ok) {} else {\n            const data = await res.json();\n            setErrors(data.errors);\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Book Crate\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\xampp\\\\htdocs\\\\Aprendible\\\\books\\\\frontend\\\\pages\\\\libros\\\\crear.js\",\n                        lineNumber: 33,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Crear libros\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\xampp\\\\htdocs\\\\Aprendible\\\\books\\\\frontend\\\\pages\\\\libros\\\\crear.js\",\n                        lineNumber: 34,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\xampp\\\\htdocs\\\\Aprendible\\\\books\\\\frontend\\\\pages\\\\libros\\\\crear.js\",\n                lineNumber: 32,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"BookCreate\"\n            }, void 0, false, {\n                fileName: \"C:\\\\xampp\\\\htdocs\\\\Aprendible\\\\books\\\\frontend\\\\pages\\\\libros\\\\crear.js\",\n                lineNumber: 36,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: bookTitle\n            }, void 0, false, {\n                fileName: \"C:\\\\xampp\\\\htdocs\\\\Aprendible\\\\books\\\\frontend\\\\pages\\\\libros\\\\crear.js\",\n                lineNumber: 37,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        onChange: (e)=>setBookName(e.target.value),\n                        value: bookTitle,\n                        type: \"text\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\xampp\\\\htdocs\\\\Aprendible\\\\books\\\\frontend\\\\pages\\\\libros\\\\crear.js\",\n                        lineNumber: 39,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        children: \"Enviar\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\xampp\\\\htdocs\\\\Aprendible\\\\books\\\\frontend\\\\pages\\\\libros\\\\crear.js\",\n                        lineNumber: 44,\n                        columnNumber: 17\n                    }, undefined),\n                    errors.title && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        style: {\n                            color: \"red\",\n                            display: \"block\"\n                        },\n                        children: errors.title\n                    }, void 0, false, {\n                        fileName: \"C:\\\\xampp\\\\htdocs\\\\Aprendible\\\\books\\\\frontend\\\\pages\\\\libros\\\\crear.js\",\n                        lineNumber: 45,\n                        columnNumber: 35\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\xampp\\\\htdocs\\\\Aprendible\\\\books\\\\frontend\\\\pages\\\\libros\\\\crear.js\",\n                lineNumber: 38,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                href: \"/libros\",\n                children: \"Book List\"\n            }, void 0, false, {\n                fileName: \"C:\\\\xampp\\\\htdocs\\\\Aprendible\\\\books\\\\frontend\\\\pages\\\\libros\\\\crear.js\",\n                lineNumber: 47,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\xampp\\\\htdocs\\\\Aprendible\\\\books\\\\frontend\\\\pages\\\\libros\\\\crear.js\",\n        lineNumber: 31,\n        columnNumber: 9\n    }, undefined);\n};\n_s(BookCreate, \"CYJYsHGVAPtrJq4BN12U9a4GXXs=\");\n_c = BookCreate;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BookCreate);\nvar _c;\n$RefreshReg$(_c, \"BookCreate\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9saWJyb3MvY3JlYXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7QUFBNEI7QUFDQTtBQUNJO0FBQ2lCO0FBRWpELE1BQU1JLGFBQVcsSUFBSTs7SUFDakIsTUFBTSxDQUFDQyxXQUFXQyxZQUFZLEdBQUdKLCtDQUFRQSxDQUFDO0lBQzFDLE1BQU0sQ0FBQ0ssUUFBUUMsVUFBVSxHQUFDTiwrQ0FBUUEsQ0FBQyxFQUFFO0lBRXJDLGVBQWVPLGFBQWFDLENBQUMsRUFBQztRQUMxQkEsRUFBRUMsY0FBYztRQUNoQixNQUFNQyxNQUFJLE1BQU1DLE1BQU0sR0FBdUMsT0FBcENDLHVCQUFtQyxFQUFDLGVBQVk7WUFDckVHLFFBQVE7WUFDUkMsU0FBUztnQkFDTEMsUUFBUTtnQkFDUixnQkFBZTtZQUNuQjtZQUNBQyxNQUFLQyxLQUFLQyxTQUFTLENBQUM7Z0JBQ2hCQyxPQUFPbEI7WUFDWDtRQUNKO1FBQ0EsSUFBR08sSUFBSVksRUFBRSxFQUFDLENBRVYsT0FBSztZQUNELE1BQU1DLE9BQU0sTUFBTWIsSUFBSWMsSUFBSTtZQUMxQmxCLFVBQVVpQixLQUFLbEIsTUFBTTtRQUN6QixDQUFDO0lBQ0w7SUFFQSxxQkFDSSw4REFBQ29CO1FBQUlDLFdBQVd6QiwwRUFBZ0I7OzBCQUM1Qiw4REFBQ0gsa0RBQUlBOztrQ0FDTCw4REFBQ3VCO2tDQUFNOzs7Ozs7a0NBQ1AsOERBQUNPO3dCQUFLQyxNQUFLO3dCQUFjQyxTQUFROzs7Ozs7Ozs7Ozs7MEJBRWpDLDhEQUFDQzswQkFBRzs7Ozs7OzBCQUNKLDhEQUFDQzswQkFBRzdCOzs7Ozs7MEJBQ0osOERBQUM4QjtnQkFBS0MsVUFBVTNCOztrQ0FDWiw4REFBQzRCO3dCQUNHQyxVQUFVLENBQUM1QixJQUFJSixZQUFZSSxFQUFFNkIsTUFBTSxDQUFDQyxLQUFLO3dCQUN6Q0EsT0FBT25DO3dCQUNQb0MsTUFBSzs7Ozs7O2tDQUVULDhEQUFDQztrQ0FBTzs7Ozs7O29CQUNQbkMsT0FBT2dCLEtBQUssa0JBQUssOERBQUNvQjt3QkFBS0MsT0FBTzs0QkFBQ0MsT0FBTzs0QkFBTUMsU0FBUTt3QkFBTztrQ0FBSXZDLE9BQU9nQixLQUFLOzs7Ozs7Ozs7Ozs7MEJBRWhGLDhEQUFDdEIsa0RBQUlBO2dCQUFDOEMsTUFBSzswQkFBVTs7Ozs7Ozs7Ozs7O0FBSWpDO0dBN0NNM0M7S0FBQUE7QUErQ04sK0RBQWVBLFVBQVVBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbGlicm9zL2NyZWFyLmpzPzEyYjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiXHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIlxyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcclxuXHJcbmNvbnN0IEJvb2tDcmVhdGU9KCk9PntcclxuICAgIGNvbnN0IFtib29rVGl0bGUsIHNldEJvb2tOYW1lXSA9IHVzZVN0YXRlKCcnKVxyXG4gICAgY29uc3QgW2Vycm9ycywgc2V0RXJyb3JzXT11c2VTdGF0ZShbXSk7XHJcblxyXG4gICAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlU3VibWl0KGUpe1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgIGNvbnN0IHJlcz1hd2FpdCBmZXRjaChgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19CQUNLRU5EX1VSTH0vYXBpL2Jvb2tzYCx7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBhY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgICAgICdjb250ZW50LXR5cGUnOidhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYm9keTpKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogYm9va1RpdGxlXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYocmVzLm9rKXtcclxuXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPWF3YWl0IHJlcy5qc29uKClcclxuICAgICAgICAgICAgc2V0RXJyb3JzKGRhdGEuZXJyb3JzKSBcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICA8dGl0bGU+Qm9vayBDcmF0ZTwvdGl0bGU+XHJcbiAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJDcmVhciBsaWJyb3NcIiAvPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgIDxoMT5Cb29rQ3JlYXRlPC9oMT5cclxuICAgICAgICAgICAgPHA+e2Jvb2tUaXRsZX08L3A+XHJcbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSk9PnNldEJvb2tOYW1lKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Ym9va1RpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uPkVudmlhcjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAge2Vycm9ycy50aXRsZSAmJiAoPHNwYW4gc3R5bGU9e3tjb2xvcjogJ3JlZCcsZGlzcGxheTonYmxvY2snfX0+e2Vycm9ycy50aXRsZX08L3NwYW4+KX1cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL2xpYnJvc1wiPkJvb2sgTGlzdDwvTGluaz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIFxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCb29rQ3JlYXRlIl0sIm5hbWVzIjpbIkhlYWQiLCJMaW5rIiwidXNlU3RhdGUiLCJzdHlsZXMiLCJCb29rQ3JlYXRlIiwiYm9va1RpdGxlIiwic2V0Qm9va05hbWUiLCJlcnJvcnMiLCJzZXRFcnJvcnMiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJyZXMiLCJmZXRjaCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19CQUNLRU5EX1VSTCIsIm1ldGhvZCIsImhlYWRlcnMiLCJhY2NlcHQiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInRpdGxlIiwib2siLCJkYXRhIiwianNvbiIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsImgxIiwicCIsImZvcm0iLCJvblN1Ym1pdCIsImlucHV0Iiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJ2YWx1ZSIsInR5cGUiLCJidXR0b24iLCJzcGFuIiwic3R5bGUiLCJjb2xvciIsImRpc3BsYXkiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/libros/crear.js\n"));

/***/ })

});