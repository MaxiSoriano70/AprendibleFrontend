"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/libros/[bid]/editar",{

/***/ "./pages/libros/[bid]/editar.js":
/*!**************************************!*\
  !*** ./pages/libros/[bid]/editar.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst BookEdit = (param)=>{\n    let { book  } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const [bookTitle, setBookName] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(book.title);\n    const [errors, setErrors] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);\n    const [submitting, setSubmitting] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    async function handleSubmit(e) {\n        e.preventDefault();\n        setSubmitting(true);\n        const res = await fetch(\"\".concat(\"http://localhost:8000\", \"/api/books/\").concat(book.id), {\n            method: \"POST\",\n            headers: {\n                accept: \"application/json\",\n                \"content-type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                title: bookTitle,\n                _method: \"PATCH\"\n            })\n        });\n        if (res.ok) {\n            setErrors([]);\n            setBookName([]);\n            return router.push(\"/libros\");\n        }\n        const data = await res.json();\n        setErrors(data.errors);\n        setSubmitting(false);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Book Edit\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\xampp\\\\htdocs\\\\Aprendible\\\\books\\\\frontend\\\\pages\\\\libros\\\\[bid]\\\\editar.js\",\n                        lineNumber: 50,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Editar libros\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\xampp\\\\htdocs\\\\Aprendible\\\\books\\\\frontend\\\\pages\\\\libros\\\\[bid]\\\\editar.js\",\n                        lineNumber: 51,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\xampp\\\\htdocs\\\\Aprendible\\\\books\\\\frontend\\\\pages\\\\libros\\\\[bid]\\\\editar.js\",\n                lineNumber: 49,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"BookEdit\"\n            }, void 0, false, {\n                fileName: \"C:\\\\xampp\\\\htdocs\\\\Aprendible\\\\books\\\\frontend\\\\pages\\\\libros\\\\[bid]\\\\editar.js\",\n                lineNumber: 53,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: bookTitle\n            }, void 0, false, {\n                fileName: \"C:\\\\xampp\\\\htdocs\\\\Aprendible\\\\books\\\\frontend\\\\pages\\\\libros\\\\[bid]\\\\editar.js\",\n                lineNumber: 54,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        onChange: (e)=>setBookName(e.target.value),\n                        value: bookTitle,\n                        disabled: submitting,\n                        type: \"text\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\xampp\\\\htdocs\\\\Aprendible\\\\books\\\\frontend\\\\pages\\\\libros\\\\[bid]\\\\editar.js\",\n                        lineNumber: 56,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        disabled: submitting,\n                        children: submitting ? \"Enviando...\" : \"Enviar\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\xampp\\\\htdocs\\\\Aprendible\\\\books\\\\frontend\\\\pages\\\\libros\\\\[bid]\\\\editar.js\",\n                        lineNumber: 62,\n                        columnNumber: 17\n                    }, undefined),\n                    errors.title && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        style: {\n                            color: \"red\",\n                            display: \"block\"\n                        },\n                        children: errors.title\n                    }, void 0, false, {\n                        fileName: \"C:\\\\xampp\\\\htdocs\\\\Aprendible\\\\books\\\\frontend\\\\pages\\\\libros\\\\[bid]\\\\editar.js\",\n                        lineNumber: 63,\n                        columnNumber: 35\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\xampp\\\\htdocs\\\\Aprendible\\\\books\\\\frontend\\\\pages\\\\libros\\\\[bid]\\\\editar.js\",\n                lineNumber: 55,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                href: \"/libros\",\n                children: \"Book List\"\n            }, void 0, false, {\n                fileName: \"C:\\\\xampp\\\\htdocs\\\\Aprendible\\\\books\\\\frontend\\\\pages\\\\libros\\\\[bid]\\\\editar.js\",\n                lineNumber: 65,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\xampp\\\\htdocs\\\\Aprendible\\\\books\\\\frontend\\\\pages\\\\libros\\\\[bid]\\\\editar.js\",\n        lineNumber: 48,\n        columnNumber: 9\n    }, undefined);\n};\n_s(BookEdit, \"FiJzAdZBQXtAPPjitf2O2AGXMn8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = BookEdit;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BookEdit);\nvar _c;\n$RefreshReg$(_c, \"BookEdit\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9saWJyb3MvW2JpZF0vZWRpdGFyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFBNEI7QUFDQTtBQUNtQjtBQUNmO0FBQ29CO0FBWXBELE1BQU1NLFdBQVMsU0FBVTtRQUFULEVBQUNDLEtBQUksRUFBQzs7SUFDbEIsTUFBTUMsU0FBUUwsc0RBQVNBO0lBQ3ZCLE1BQU0sQ0FBQ00sV0FBV0MsWUFBWSxHQUFHTiwrQ0FBUUEsQ0FBQ0csS0FBS0ksS0FBSztJQUNwRCxNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBQ1QsK0NBQVFBLENBQUMsRUFBRTtJQUNyQyxNQUFNLENBQUNVLFlBQVlDLGNBQWMsR0FBQ1gsK0NBQVFBLENBQUMsS0FBSztJQUVoRCxlQUFlWSxhQUFhQyxDQUFDLEVBQUM7UUFDMUJBLEVBQUVDLGNBQWM7UUFDaEJILGNBQWMsSUFBSTtRQUNsQixNQUFNSSxNQUFJLE1BQU1DLE1BQU0sR0FBb0RiLE9BQWpEYyx1QkFBbUMsRUFBQyxlQUFxQixPQUFSZCxLQUFLaUIsRUFBRSxHQUFHO1lBQ2hGQyxRQUFRO1lBQ1JDLFNBQVM7Z0JBQ0xDLFFBQVE7Z0JBQ1IsZ0JBQWU7WUFDbkI7WUFDQUMsTUFBS0MsS0FBS0MsU0FBUyxDQUFDO2dCQUNoQm5CLE9BQU9GO2dCQUNQc0IsU0FBUztZQUNiO1FBQ0o7UUFDQSxJQUFHWixJQUFJYSxFQUFFLEVBQUM7WUFDTm5CLFVBQVUsRUFBRTtZQUNaSCxZQUFZLEVBQUU7WUFDZCxPQUFPRixPQUFPeUIsSUFBSSxDQUFDO1FBQ3ZCLENBQUM7UUFDRCxNQUFNQyxPQUFNLE1BQU1mLElBQUlnQixJQUFJO1FBQzFCdEIsVUFBVXFCLEtBQUt0QixNQUFNO1FBQ3JCRyxjQUFjLEtBQUs7SUFDdkI7SUFFQSxxQkFDSSw4REFBQ3FCO1FBQUlDLFdBQVdoQywwRUFBZ0I7OzBCQUM1Qiw4REFBQ0wsa0RBQUlBOztrQ0FDTCw4REFBQ1c7a0NBQU07Ozs7OztrQ0FDUCw4REFBQzRCO3dCQUFLQyxNQUFLO3dCQUFjQyxTQUFROzs7Ozs7Ozs7Ozs7MEJBRWpDLDhEQUFDQzswQkFBRzs7Ozs7OzBCQUNKLDhEQUFDQzswQkFBR2xDOzs7Ozs7MEJBQ0osOERBQUNtQztnQkFBS0MsVUFBVTdCOztrQ0FDWiw4REFBQzhCO3dCQUNHQyxVQUFVLENBQUM5QixJQUFJUCxZQUFZTyxFQUFFK0IsTUFBTSxDQUFDQyxLQUFLO3dCQUN6Q0EsT0FBT3hDO3dCQUNQeUMsVUFBVXBDO3dCQUNWcUMsTUFBSzs7Ozs7O2tDQUVULDhEQUFDQzt3QkFBT0YsVUFBVXBDO2tDQUFjQSxhQUFXLGdCQUFjLFFBQVE7Ozs7OztvQkFDaEVGLE9BQU9ELEtBQUssa0JBQUssOERBQUMwQzt3QkFBS0MsT0FBTzs0QkFBQ0MsT0FBTzs0QkFBTUMsU0FBUTt3QkFBTztrQ0FBSTVDLE9BQU9ELEtBQUs7Ozs7Ozs7Ozs7OzswQkFFaEYsOERBQUNWLGtEQUFJQTtnQkFBQ3dELE1BQUs7MEJBQVU7Ozs7Ozs7Ozs7OztBQUlqQztHQXBETW5EOztRQUNZSCxrREFBU0E7OztLQURyQkc7O0FBc0ROLCtEQUFlQSxRQUFRQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2xpYnJvcy9bYmlkXS9lZGl0YXIuanM/NTFkOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCJcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiXHJcbmltcG9ydCB7IFJvdXRlciwgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCJcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uLy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKHtwYXJhbXN9KXtcclxuICAgIGNvbnN0IHJlcz1hd2FpdCBmZXRjaChgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19CQUNLRU5EX1VSTH0vYXBpL2Jvb2tzLyR7cGFyYW1zLmJpZH1gKTtcclxuICAgIGNvbnN0IGRhdGE9YXdhaXQgcmVzLmpzb24oKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcHJvcHM6e1xyXG4gICAgICAgICAgICBib29rOiBkYXRhXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBCb29rRWRpdD0oe2Jvb2t9KT0+e1xyXG4gICAgY29uc3Qgcm91dGVyPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IFtib29rVGl0bGUsIHNldEJvb2tOYW1lXSA9IHVzZVN0YXRlKGJvb2sudGl0bGUpO1xyXG4gICAgY29uc3QgW2Vycm9ycywgc2V0RXJyb3JzXT11c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbc3VibWl0dGluZywgc2V0U3VibWl0dGluZ109dXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdChlKXtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgc2V0U3VibWl0dGluZyh0cnVlKTtcclxuICAgICAgICBjb25zdCByZXM9YXdhaXQgZmV0Y2goYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQkFDS0VORF9VUkx9L2FwaS9ib29rcy8ke2Jvb2suaWR9YCx7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBhY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgICAgICdjb250ZW50LXR5cGUnOidhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYm9keTpKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogYm9va1RpdGxlLFxyXG4gICAgICAgICAgICAgICAgX21ldGhvZDogJ1BBVENIJ1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmKHJlcy5vayl7XHJcbiAgICAgICAgICAgIHNldEVycm9ycyhbXSk7XHJcbiAgICAgICAgICAgIHNldEJvb2tOYW1lKFtdKTtcclxuICAgICAgICAgICAgcmV0dXJuIHJvdXRlci5wdXNoKCcvbGlicm9zJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGRhdGEgPWF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICAgICAgc2V0RXJyb3JzKGRhdGEuZXJyb3JzKTtcclxuICAgICAgICBzZXRTdWJtaXR0aW5nKGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgIDx0aXRsZT5Cb29rIEVkaXQ8L3RpdGxlPlxyXG4gICAgICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiRWRpdGFyIGxpYnJvc1wiIC8+XHJcbiAgICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgICAgPGgxPkJvb2tFZGl0PC9oMT5cclxuICAgICAgICAgICAgPHA+e2Jvb2tUaXRsZX08L3A+XHJcbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSk9PnNldEJvb2tOYW1lKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Ym9va1RpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtzdWJtaXR0aW5nfVxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGRpc2FibGVkPXtzdWJtaXR0aW5nIH0+e3N1Ym1pdHRpbmc/J0VudmlhbmRvLi4uJzonRW52aWFyJ308L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIHtlcnJvcnMudGl0bGUgJiYgKDxzcGFuIHN0eWxlPXt7Y29sb3I6ICdyZWQnLGRpc3BsYXk6J2Jsb2NrJ319PntlcnJvcnMudGl0bGV9PC9zcGFuPil9XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9saWJyb3NcIj5Cb29rIExpc3Q8L0xpbms+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICBcclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQm9va0VkaXQiXSwibmFtZXMiOlsiSGVhZCIsIkxpbmsiLCJSb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsInN0eWxlcyIsIkJvb2tFZGl0IiwiYm9vayIsInJvdXRlciIsImJvb2tUaXRsZSIsInNldEJvb2tOYW1lIiwidGl0bGUiLCJlcnJvcnMiLCJzZXRFcnJvcnMiLCJzdWJtaXR0aW5nIiwic2V0U3VibWl0dGluZyIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInJlcyIsImZldGNoIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0JBQ0tFTkRfVVJMIiwiaWQiLCJtZXRob2QiLCJoZWFkZXJzIiwiYWNjZXB0IiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJfbWV0aG9kIiwib2siLCJwdXNoIiwiZGF0YSIsImpzb24iLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJoMSIsInAiLCJmb3JtIiwib25TdWJtaXQiLCJpbnB1dCIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwidmFsdWUiLCJkaXNhYmxlZCIsInR5cGUiLCJidXR0b24iLCJzcGFuIiwic3R5bGUiLCJjb2xvciIsImRpc3BsYXkiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/libros/[bid]/editar.js\n"));

/***/ })

});