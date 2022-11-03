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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst BookCreate = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const [bookTitle, setBookName] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\");\n    const [errors, setErrors] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);\n    async function handleSubmit(e) {\n        e.preventDefault();\n        const res = await fetch(\"\".concat(\"http://localhost:8000\", \"/api/books\"), {\n            method: \"POST\",\n            headers: {\n                accept: \"application/json\",\n                \"content-type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                title: bookTitle\n            })\n        });\n        if (res.ok) {\n            setErrors([]);\n            setBookName([]);\n            return router.push(\"/libros\");\n        } else {\n            const data = await res.json();\n            setErrors(data.errors);\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Book Crate\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\xampp\\\\htdocs\\\\Aprendible\\\\books\\\\frontend\\\\pages\\\\libros\\\\crear.js\",\n                        lineNumber: 37,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Crear libros\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\xampp\\\\htdocs\\\\Aprendible\\\\books\\\\frontend\\\\pages\\\\libros\\\\crear.js\",\n                        lineNumber: 38,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\xampp\\\\htdocs\\\\Aprendible\\\\books\\\\frontend\\\\pages\\\\libros\\\\crear.js\",\n                lineNumber: 36,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"BookCreate\"\n            }, void 0, false, {\n                fileName: \"C:\\\\xampp\\\\htdocs\\\\Aprendible\\\\books\\\\frontend\\\\pages\\\\libros\\\\crear.js\",\n                lineNumber: 40,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: bookTitle\n            }, void 0, false, {\n                fileName: \"C:\\\\xampp\\\\htdocs\\\\Aprendible\\\\books\\\\frontend\\\\pages\\\\libros\\\\crear.js\",\n                lineNumber: 41,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        onChange: (e)=>setBookName(e.target.value),\n                        value: bookTitle,\n                        type: \"text\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\xampp\\\\htdocs\\\\Aprendible\\\\books\\\\frontend\\\\pages\\\\libros\\\\crear.js\",\n                        lineNumber: 43,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        children: \"Enviar\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\xampp\\\\htdocs\\\\Aprendible\\\\books\\\\frontend\\\\pages\\\\libros\\\\crear.js\",\n                        lineNumber: 48,\n                        columnNumber: 17\n                    }, undefined),\n                    errors.title && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        style: {\n                            color: \"red\",\n                            display: \"block\"\n                        },\n                        children: errors.title\n                    }, void 0, false, {\n                        fileName: \"C:\\\\xampp\\\\htdocs\\\\Aprendible\\\\books\\\\frontend\\\\pages\\\\libros\\\\crear.js\",\n                        lineNumber: 49,\n                        columnNumber: 35\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\xampp\\\\htdocs\\\\Aprendible\\\\books\\\\frontend\\\\pages\\\\libros\\\\crear.js\",\n                lineNumber: 42,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                href: \"/libros\",\n                children: \"Book List\"\n            }, void 0, false, {\n                fileName: \"C:\\\\xampp\\\\htdocs\\\\Aprendible\\\\books\\\\frontend\\\\pages\\\\libros\\\\crear.js\",\n                lineNumber: 51,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\xampp\\\\htdocs\\\\Aprendible\\\\books\\\\frontend\\\\pages\\\\libros\\\\crear.js\",\n        lineNumber: 35,\n        columnNumber: 9\n    }, undefined);\n};\n_s(BookCreate, \"oJHCeNAnbIa4upCNptauHnCHvlU=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = BookCreate;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BookCreate);\nvar _c;\n$RefreshReg$(_c, \"BookCreate\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9saWJyb3MvY3JlYXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOztBQUE0QjtBQUNBO0FBQ21CO0FBQ2Y7QUFDaUI7QUFFakQsTUFBTU0sYUFBVyxJQUFJOztJQUNqQixNQUFNQyxTQUFRSixzREFBU0E7SUFDdkIsTUFBTSxDQUFDSyxXQUFXQyxZQUFZLEdBQUdMLCtDQUFRQSxDQUFDO0lBQzFDLE1BQU0sQ0FBQ00sUUFBUUMsVUFBVSxHQUFDUCwrQ0FBUUEsQ0FBQyxFQUFFO0lBRXJDLGVBQWVRLGFBQWFDLENBQUMsRUFBQztRQUMxQkEsRUFBRUMsY0FBYztRQUNoQixNQUFNQyxNQUFJLE1BQU1DLE1BQU0sR0FBdUMsT0FBcENDLHVCQUFtQyxFQUFDLGVBQVk7WUFDckVHLFFBQVE7WUFDUkMsU0FBUztnQkFDTEMsUUFBUTtnQkFDUixnQkFBZTtZQUNuQjtZQUNBQyxNQUFLQyxLQUFLQyxTQUFTLENBQUM7Z0JBQ2hCQyxPQUFPbEI7WUFDWDtRQUNKO1FBQ0EsSUFBR08sSUFBSVksRUFBRSxFQUFDO1lBQ05oQixVQUFVLEVBQUU7WUFDWkYsWUFBWSxFQUFFO1lBQ2QsT0FBT0YsT0FBT3FCLElBQUksQ0FBQztRQUN2QixPQUFLO1lBQ0QsTUFBTUMsT0FBTSxNQUFNZCxJQUFJZSxJQUFJO1lBQzFCbkIsVUFBVWtCLEtBQUtuQixNQUFNO1FBQ3pCLENBQUM7SUFDTDtJQUVBLHFCQUNJLDhEQUFDcUI7UUFBSUMsV0FBVzNCLDBFQUFnQjs7MEJBQzVCLDhEQUFDTCxrREFBSUE7O2tDQUNMLDhEQUFDMEI7a0NBQU07Ozs7OztrQ0FDUCw4REFBQ1E7d0JBQUtDLE1BQUs7d0JBQWNDLFNBQVE7Ozs7Ozs7Ozs7OzswQkFFakMsOERBQUNDOzBCQUFHOzs7Ozs7MEJBQ0osOERBQUNDOzBCQUFHOUI7Ozs7OzswQkFDSiw4REFBQytCO2dCQUFLQyxVQUFVNUI7O2tDQUNaLDhEQUFDNkI7d0JBQ0dDLFVBQVUsQ0FBQzdCLElBQUlKLFlBQVlJLEVBQUU4QixNQUFNLENBQUNDLEtBQUs7d0JBQ3pDQSxPQUFPcEM7d0JBQ1BxQyxNQUFLOzs7Ozs7a0NBRVQsOERBQUNDO2tDQUFPOzs7Ozs7b0JBQ1BwQyxPQUFPZ0IsS0FBSyxrQkFBSyw4REFBQ3FCO3dCQUFLQyxPQUFPOzRCQUFDQyxPQUFPOzRCQUFNQyxTQUFRO3dCQUFPO2tDQUFJeEMsT0FBT2dCLEtBQUs7Ozs7Ozs7Ozs7OzswQkFFaEYsOERBQUN6QixrREFBSUE7Z0JBQUNrRCxNQUFLOzBCQUFVOzs7Ozs7Ozs7Ozs7QUFJakM7R0FoRE03Qzs7UUFDWUgsa0RBQVNBOzs7S0FEckJHO0FBa0ROLCtEQUFlQSxVQUFVQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2xpYnJvcy9jcmVhci5qcz8xMmI1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIlxyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCJcclxuaW1wb3J0IHsgUm91dGVyLCB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIlxyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcclxuXHJcbmNvbnN0IEJvb2tDcmVhdGU9KCk9PntcclxuICAgIGNvbnN0IHJvdXRlcj0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCBbYm9va1RpdGxlLCBzZXRCb29rTmFtZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbZXJyb3JzLCBzZXRFcnJvcnNdPXVzZVN0YXRlKFtdKTtcclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiBoYW5kbGVTdWJtaXQoZSl7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgY29uc3QgcmVzPWF3YWl0IGZldGNoKGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0JBQ0tFTkRfVVJMfS9hcGkvYm9va3NgLHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIGFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAgICAgJ2NvbnRlbnQtdHlwZSc6J2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBib2R5OkpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBib29rVGl0bGVcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZihyZXMub2spe1xyXG4gICAgICAgICAgICBzZXRFcnJvcnMoW10pXHJcbiAgICAgICAgICAgIHNldEJvb2tOYW1lKFtdKVxyXG4gICAgICAgICAgICByZXR1cm4gcm91dGVyLnB1c2goJy9saWJyb3MnKVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBjb25zdCBkYXRhID1hd2FpdCByZXMuanNvbigpXHJcbiAgICAgICAgICAgIHNldEVycm9ycyhkYXRhLmVycm9ycykgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgPHRpdGxlPkJvb2sgQ3JhdGU8L3RpdGxlPlxyXG4gICAgICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiQ3JlYXIgbGlicm9zXCIgLz5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICA8aDE+Qm9va0NyZWF0ZTwvaDE+XHJcbiAgICAgICAgICAgIDxwPntib29rVGl0bGV9PC9wPlxyXG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpPT5zZXRCb29rTmFtZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Jvb2tUaXRsZX1cclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbj5FbnZpYXI8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIHtlcnJvcnMudGl0bGUgJiYgKDxzcGFuIHN0eWxlPXt7Y29sb3I6ICdyZWQnLGRpc3BsYXk6J2Jsb2NrJ319PntlcnJvcnMudGl0bGV9PC9zcGFuPil9XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9saWJyb3NcIj5Cb29rIExpc3Q8L0xpbms+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICBcclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQm9va0NyZWF0ZSJdLCJuYW1lcyI6WyJIZWFkIiwiTGluayIsIlJvdXRlciIsInVzZVJvdXRlciIsInVzZVN0YXRlIiwic3R5bGVzIiwiQm9va0NyZWF0ZSIsInJvdXRlciIsImJvb2tUaXRsZSIsInNldEJvb2tOYW1lIiwiZXJyb3JzIiwic2V0RXJyb3JzIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwicmVzIiwiZmV0Y2giLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfQkFDS0VORF9VUkwiLCJtZXRob2QiLCJoZWFkZXJzIiwiYWNjZXB0IiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0aXRsZSIsIm9rIiwicHVzaCIsImRhdGEiLCJqc29uIiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwiaDEiLCJwIiwiZm9ybSIsIm9uU3VibWl0IiwiaW5wdXQiLCJvbkNoYW5nZSIsInRhcmdldCIsInZhbHVlIiwidHlwZSIsImJ1dHRvbiIsInNwYW4iLCJzdHlsZSIsImNvbG9yIiwiZGlzcGxheSIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/libros/crear.js\n"));

/***/ })

});