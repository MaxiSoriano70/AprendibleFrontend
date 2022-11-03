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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst BookCreate = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const [bookTitle, setBookName] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\");\n    const [errors, setErrors] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);\n    const [submitting, setSubmitting] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    async function handleSubmit(e) {\n        e.preventDefault();\n        setSubmitting(true);\n        const res = await fetch(\"\".concat(\"http://localhost:8000\", \"/api/books\"), {\n            method: \"POST\",\n            headers: {\n                accept: \"application/json\",\n                \"content-type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                title: bookTitle\n            })\n        });\n        if (res.ok) {\n            setErrors([]);\n            setBookName([]);\n            return router.push(\"/libros\");\n        }\n        const data = await res.json();\n        setErrors(data.errors);\n        setSubmitting(false);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Book Crate\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\xampp\\\\htdocs\\\\Aprendible\\\\books\\\\frontend\\\\pages\\\\libros\\\\crear.js\",\n                        lineNumber: 39,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Crear libros\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\xampp\\\\htdocs\\\\Aprendible\\\\books\\\\frontend\\\\pages\\\\libros\\\\crear.js\",\n                        lineNumber: 40,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\xampp\\\\htdocs\\\\Aprendible\\\\books\\\\frontend\\\\pages\\\\libros\\\\crear.js\",\n                lineNumber: 38,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"BookCreate\"\n            }, void 0, false, {\n                fileName: \"C:\\\\xampp\\\\htdocs\\\\Aprendible\\\\books\\\\frontend\\\\pages\\\\libros\\\\crear.js\",\n                lineNumber: 42,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: bookTitle\n            }, void 0, false, {\n                fileName: \"C:\\\\xampp\\\\htdocs\\\\Aprendible\\\\books\\\\frontend\\\\pages\\\\libros\\\\crear.js\",\n                lineNumber: 43,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        onChange: (e)=>setBookName(e.target.value),\n                        value: bookTitle,\n                        disabled: submitting,\n                        type: \"text\",\n                        \"data-cy\": \"input-book-title\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\xampp\\\\htdocs\\\\Aprendible\\\\books\\\\frontend\\\\pages\\\\libros\\\\crear.js\",\n                        lineNumber: 45,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        disabled: submitting,\n                        \"data-cy\": \"button-submit-book\",\n                        children: submitting ? \"Enviando...\" : \"Enviar\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\xampp\\\\htdocs\\\\Aprendible\\\\books\\\\frontend\\\\pages\\\\libros\\\\crear.js\",\n                        lineNumber: 52,\n                        columnNumber: 17\n                    }, undefined),\n                    errors.title && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        style: {\n                            color: \"red\",\n                            display: \"block\"\n                        },\n                        children: errors.title\n                    }, void 0, false, {\n                        fileName: \"C:\\\\xampp\\\\htdocs\\\\Aprendible\\\\books\\\\frontend\\\\pages\\\\libros\\\\crear.js\",\n                        lineNumber: 58,\n                        columnNumber: 35\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\xampp\\\\htdocs\\\\Aprendible\\\\books\\\\frontend\\\\pages\\\\libros\\\\crear.js\",\n                lineNumber: 44,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                href: \"/libros\",\n                children: \"Book List\"\n            }, void 0, false, {\n                fileName: \"C:\\\\xampp\\\\htdocs\\\\Aprendible\\\\books\\\\frontend\\\\pages\\\\libros\\\\crear.js\",\n                lineNumber: 60,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\xampp\\\\htdocs\\\\Aprendible\\\\books\\\\frontend\\\\pages\\\\libros\\\\crear.js\",\n        lineNumber: 37,\n        columnNumber: 9\n    }, undefined);\n};\n_s(BookCreate, \"nXaXJ0Pyk1pJTJ5DXlJx4FNuAAc=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = BookCreate;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BookCreate);\nvar _c;\n$RefreshReg$(_c, \"BookCreate\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9saWJyb3MvY3JlYXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOztBQUE0QjtBQUNBO0FBQ21CO0FBQ2Y7QUFDaUI7QUFFakQsTUFBTU0sYUFBVyxJQUFJOztJQUNqQixNQUFNQyxTQUFRSixzREFBU0E7SUFDdkIsTUFBTSxDQUFDSyxXQUFXQyxZQUFZLEdBQUdMLCtDQUFRQSxDQUFDO0lBQzFDLE1BQU0sQ0FBQ00sUUFBUUMsVUFBVSxHQUFDUCwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ3JDLE1BQU0sQ0FBQ1EsWUFBWUMsY0FBYyxHQUFDVCwrQ0FBUUEsQ0FBQyxLQUFLO0lBRWhELGVBQWVVLGFBQWFDLENBQUMsRUFBQztRQUMxQkEsRUFBRUMsY0FBYztRQUNoQkgsY0FBYyxJQUFJO1FBQ2xCLE1BQU1JLE1BQUksTUFBTUMsTUFBTSxHQUF1QyxPQUFwQ0MsdUJBQW1DLEVBQUMsZUFBWTtZQUNyRUcsUUFBUTtZQUNSQyxTQUFTO2dCQUNMQyxRQUFRO2dCQUNSLGdCQUFlO1lBQ25CO1lBQ0FDLE1BQUtDLEtBQUtDLFNBQVMsQ0FBQztnQkFDaEJDLE9BQU9wQjtZQUNYO1FBQ0o7UUFDQSxJQUFHUyxJQUFJWSxFQUFFLEVBQUM7WUFDTmxCLFVBQVUsRUFBRTtZQUNaRixZQUFZLEVBQUU7WUFDZCxPQUFPRixPQUFPdUIsSUFBSSxDQUFDO1FBQ3ZCLENBQUM7UUFDRCxNQUFNQyxPQUFNLE1BQU1kLElBQUllLElBQUk7UUFDMUJyQixVQUFVb0IsS0FBS3JCLE1BQU07UUFDckJHLGNBQWMsS0FBSztJQUN2QjtJQUVBLHFCQUNJLDhEQUFDb0I7UUFBSUMsV0FBVzdCLDBFQUFnQjs7MEJBQzVCLDhEQUFDTCxrREFBSUE7O2tDQUNMLDhEQUFDNEI7a0NBQU07Ozs7OztrQ0FDUCw4REFBQ1E7d0JBQUtDLE1BQUs7d0JBQWNDLFNBQVE7Ozs7Ozs7Ozs7OzswQkFFakMsOERBQUNDOzBCQUFHOzs7Ozs7MEJBQ0osOERBQUNDOzBCQUFHaEM7Ozs7OzswQkFDSiw4REFBQ2lDO2dCQUFLQyxVQUFVNUI7O2tDQUNaLDhEQUFDNkI7d0JBQ0dDLFVBQVUsQ0FBQzdCLElBQUlOLFlBQVlNLEVBQUU4QixNQUFNLENBQUNDLEtBQUs7d0JBQ3pDQSxPQUFPdEM7d0JBQ1B1QyxVQUFVbkM7d0JBQ1ZvQyxNQUFLO3dCQUNMQyxXQUFROzs7Ozs7a0NBRVosOERBQUNDO3dCQUNHSCxVQUFVbkM7d0JBQ1ZxQyxXQUFRO2tDQUVQckMsYUFBVyxnQkFBYyxRQUFROzs7Ozs7b0JBRXJDRixPQUFPa0IsS0FBSyxrQkFBSyw4REFBQ3VCO3dCQUFLQyxPQUFPOzRCQUFDQyxPQUFPOzRCQUFNQyxTQUFRO3dCQUFPO2tDQUFJNUMsT0FBT2tCLEtBQUs7Ozs7Ozs7Ozs7OzswQkFFaEYsOERBQUMzQixrREFBSUE7Z0JBQUNzRCxNQUFLOzBCQUFVOzs7Ozs7Ozs7Ozs7QUFJakM7R0F6RE1qRDs7UUFDWUgsa0RBQVNBOzs7S0FEckJHO0FBMkROLCtEQUFlQSxVQUFVQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2xpYnJvcy9jcmVhci5qcz8xMmI1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIlxyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCJcclxuaW1wb3J0IHsgUm91dGVyLCB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIlxyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcclxuXHJcbmNvbnN0IEJvb2tDcmVhdGU9KCk9PntcclxuICAgIGNvbnN0IHJvdXRlcj0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCBbYm9va1RpdGxlLCBzZXRCb29rTmFtZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbZXJyb3JzLCBzZXRFcnJvcnNdPXVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtzdWJtaXR0aW5nLCBzZXRTdWJtaXR0aW5nXT11c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlU3VibWl0KGUpe1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBzZXRTdWJtaXR0aW5nKHRydWUpO1xyXG4gICAgICAgIGNvbnN0IHJlcz1hd2FpdCBmZXRjaChgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19CQUNLRU5EX1VSTH0vYXBpL2Jvb2tzYCx7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBhY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgICAgICdjb250ZW50LXR5cGUnOidhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYm9keTpKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogYm9va1RpdGxlXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYocmVzLm9rKXtcclxuICAgICAgICAgICAgc2V0RXJyb3JzKFtdKTtcclxuICAgICAgICAgICAgc2V0Qm9va05hbWUoW10pO1xyXG4gICAgICAgICAgICByZXR1cm4gcm91dGVyLnB1c2goJy9saWJyb3MnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgZGF0YSA9YXdhaXQgcmVzLmpzb24oKTtcclxuICAgICAgICBzZXRFcnJvcnMoZGF0YS5lcnJvcnMpO1xyXG4gICAgICAgIHNldFN1Ym1pdHRpbmcoZmFsc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgPHRpdGxlPkJvb2sgQ3JhdGU8L3RpdGxlPlxyXG4gICAgICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiQ3JlYXIgbGlicm9zXCIgLz5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICA8aDE+Qm9va0NyZWF0ZTwvaDE+XHJcbiAgICAgICAgICAgIDxwPntib29rVGl0bGV9PC9wPlxyXG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpPT5zZXRCb29rTmFtZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Jvb2tUaXRsZX1cclxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17c3VibWl0dGluZ31cclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1jeT1cImlucHV0LWJvb2stdGl0bGVcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3N1Ym1pdHRpbmcgfVxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtY3k9XCJidXR0b24tc3VibWl0LWJvb2tcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHtzdWJtaXR0aW5nPydFbnZpYW5kby4uLic6J0Vudmlhcid9XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIHtlcnJvcnMudGl0bGUgJiYgKDxzcGFuIHN0eWxlPXt7Y29sb3I6ICdyZWQnLGRpc3BsYXk6J2Jsb2NrJ319PntlcnJvcnMudGl0bGV9PC9zcGFuPil9XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9saWJyb3NcIj5Cb29rIExpc3Q8L0xpbms+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICBcclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQm9va0NyZWF0ZSJdLCJuYW1lcyI6WyJIZWFkIiwiTGluayIsIlJvdXRlciIsInVzZVJvdXRlciIsInVzZVN0YXRlIiwic3R5bGVzIiwiQm9va0NyZWF0ZSIsInJvdXRlciIsImJvb2tUaXRsZSIsInNldEJvb2tOYW1lIiwiZXJyb3JzIiwic2V0RXJyb3JzIiwic3VibWl0dGluZyIsInNldFN1Ym1pdHRpbmciLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJyZXMiLCJmZXRjaCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19CQUNLRU5EX1VSTCIsIm1ldGhvZCIsImhlYWRlcnMiLCJhY2NlcHQiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInRpdGxlIiwib2siLCJwdXNoIiwiZGF0YSIsImpzb24iLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJoMSIsInAiLCJmb3JtIiwib25TdWJtaXQiLCJpbnB1dCIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwidmFsdWUiLCJkaXNhYmxlZCIsInR5cGUiLCJkYXRhLWN5IiwiYnV0dG9uIiwic3BhbiIsInN0eWxlIiwiY29sb3IiLCJkaXNwbGF5IiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/libros/crear.js\n"));

/***/ })

});