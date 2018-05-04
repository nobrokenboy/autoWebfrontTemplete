/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./application/scripts/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./application/scripts/app.js":
/*!************************************!*\
  !*** ./application/scripts/app.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _index = __webpack_require__(/*! ./lib/utils/index */ \"./application/scripts/lib/utils/index.js\");\n\nvar _index2 = _interopRequireDefault(_index);\n\nvar _index3 = __webpack_require__(/*! ./lib/components/index */ \"./application/scripts/lib/components/index.js\");\n\nvar _index4 = _interopRequireDefault(_index3);\n\nvar _index5 = __webpack_require__(/*! ./lib/interface/index */ \"./application/scripts/lib/interface/index.js\");\n\nvar _index6 = _interopRequireDefault(_index5);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nwindow._ = _index2.default;\nwindow.vueCompontent = _index4.default;\nwindow.ask = _index6.default;\n\n//# sourceURL=webpack:///./application/scripts/app.js?");

/***/ }),

/***/ "./application/scripts/lib/components/dataLoadingPanel.js":
/*!****************************************************************!*\
  !*** ./application/scripts/lib/components/dataLoadingPanel.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = {\n    template: \"<div class=\\\"data-loading-panel\\\" v-show=\\\"status\\\">\\n        <div class=\\\"panel\\\">\\n          <div class=\\\"bg\\\"></div>\\n          <div class=\\\"content\\\"><a v-show=\\\"btnClose!='hide'\\\" class=\\\"close\\\" @click=\\\"close\\\"></a>\\n          <div class=\\\"spinner\\\">\\n              <div class=\\\"dot1\\\"></div>\\n              <div class=\\\"dot2\\\"></div>\\n            </div>\\n          </div>\\n        </div>\\n      </div>\",\n    props: [\"status\", \"btnClose\"],\n    methods: {\n        close: function close() {\n            this.$emit(\"close\");\n        }\n    }\n};\n\n//# sourceURL=webpack:///./application/scripts/lib/components/dataLoadingPanel.js?");

/***/ }),

/***/ "./application/scripts/lib/components/dropBox.js":
/*!*******************************************************!*\
  !*** ./application/scripts/lib/components/dropBox.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = {\n    template: \"<div class=\\\"ui-drop-box\\\">\\n    <div class=\\\"tc\\\">\\n        <p></p>\\n        <i class=\\\"icon-loading\\\" :class=\\\"{'hide':showIcon}\\\"></i>\\n        <p v-show=\\\"showText\\\">\\u91CA\\u653E\\u5237\\u65B0</p>\\n    </div>\\n    <div class=\\\"drop-panel\\\"><slot></slot></div>\\n    <div class=\\\"loading-spinner\\\" v-show=\\\"!rollFlag\\\">\\n        <div class=\\\"spinner\\\">\\n          <div class=\\\"bounce1\\\"></div>\\n          <div class=\\\"bounce2\\\"></div>\\n          <div class=\\\"bounce3\\\"></div>\\n        </div>\\n    </div>\\n</div>\",\n    props: [\"rollFlag\"],\n    data: function data() {\n        return {\n            showText: false,\n            showIcon: true\n        };\n    },\n    mounted: function mounted() {\n        var _this = this;\n\n        var panel = $(this.$el).find(\".drop-panel\");\n        var load = $(this.$el).find(\".icon-loading\");\n        var _window = $(window);\n        var _body = $(\"body\");\n        var flag = false,\n            touchY = 0,\n            currentY = 0,\n            moveTime = 0;\n        panel.bind(\"touchstart\", function (e) {\n            _this.showIcon = false;\n            if ((document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop) == 0) {\n                flag = true;\n            }\n            touchY = e.touches[0].screenY;\n        });\n        panel.bind(\"touchmove\", function (e) {\n            if (flag) {\n                if (moveTime == 0 && e.touches[0].screenY - touchY < 0) {\n                    return;\n                }\n                e.preventDefault();\n                currentY = currentY + e.touches[0].screenY - touchY;\n                if (currentY <= 0) {\n                    moveTime--;\n                    return;\n                }\n                moveTime++;\n                load.css(\"transform\", \"rotate(\" + currentY + \"deg)\");\n                load.css(\"webkitTransform\", \"rotate(\" + currentY + \"deg)\");\n                panel.css(\"transform\", \"translateY(\" + currentY + \"px)\");\n                panel.css(\"webkitTransform\", \"translateY(\" + currentY + \"px)\");\n                touchY = e.touches[0].screenY;\n                if (currentY >= 150) {\n                    _this.showText = true;\n                } else {\n                    _this.showText = false;\n                }\n            }\n        });\n        panel.bind(\"touchend\", function (e) {\n            if (flag) {\n                flag = false;\n                if (_this.showText) {\n                    _this.$emit(\"pull\");\n                }\n                currentY = 0;\n                moveTime = 0;\n                _this.showText = false;\n                panel.addClass(\"reset\");\n                load.css(\"transform\", \"rotate(\" + currentY + \"deg)\");\n                load.css(\"webkitTransform\", \"rotate(\" + currentY + \"deg)\");\n                panel.css(\"transform\", \"translateY(\" + currentY + \"px)\");\n                panel.css(\"webkitTransform\", \"translateY(\" + currentY + \"px)\");\n                setTimeout(function (e) {\n                    _this.showIcon = true;\n                    panel.removeClass(\"reset\");\n                }, 300);\n            }\n            //判断是否在最底部，加载更多\n            if (_body.get(0).scrollHeight - _window.height() - _window.scrollTop() <= 10 && !_this.rollFlag) {\n                _this.$emit(\"roll\");\n            }\n        });\n    }\n};\n\n//# sourceURL=webpack:///./application/scripts/lib/components/dropBox.js?");

/***/ }),

/***/ "./application/scripts/lib/components/formValidation.js":
/*!**************************************************************!*\
  !*** ./application/scripts/lib/components/formValidation.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar validateGroup = {\n    template: \"<div>\\n        <slot></slot>\\n        <a @click=\\\"testify\\\">\\n            <slot name=\\\"submit\\\"></slot>\\n        </a>\\n    </div>\",\n    props: [\"value\"],\n    data: function data() {\n        return {\n            name: \"validate-group\",\n            maxLabel: 0,\n            vailFlag: false\n        };\n    },\n    mounted: function mounted() {\n        _.forEach(this.$children, function (o) {\n            if (o.name == \"validate-field\") {\n                $(o.$el).on('animationend webkitAnimationEnd oAnimationEnd', function (e) {\n                    _.removeClass(o.$el, \"shake\");\n                });\n            }\n        });\n        // _.forEach(this.$children,o=>{\n        //     if(o.name==\"validate-field\"){\n        //         if(o.labelWidth>this.maxLabel){\n        //             this.maxLabel = o.labelWidth;\n        //         }\n        //     }\n        // })\n        // this.setChildWidth();\n        // $(window).on(\"resize\",e=>{\n        //     this.setChildWidth();\n        // })\n    },\n\n    methods: {\n        testify: function testify() {\n            var losers = [];\n            _.forEach(this.$children, function (o) {\n                if (o.name == \"validate-field\") {\n                    if (o.valiResult) {\n                        losers.push(o);\n                    }\n                }\n            });\n            if (losers.length > 0) {\n                losers[0].valiBlock();\n                _.addClass(losers[0].$el, \"shake\");\n            }\n        },\n        setChildWidth: function setChildWidth() {\n            var _this = this;\n\n            _.forEach(this.$children, function (o) {\n                if (o.name == \"validate-field\") {\n                    o.setLabelWidth(_this.maxLabel);\n                }\n            });\n        },\n        vailAllForm: function vailAllForm() {\n            var _this2 = this;\n\n            this.vailFlag = false;\n            _.forEach(this.$children, function (o) {\n                if (o.name == \"validate-field\") {\n                    // console.log(o.valiResult)\n                    if (o.valiResult) {\n                        _this2.vailFlag = true;\n                    }\n                }\n            });\n\n            // console.log(this.vailFlag)\n            this.$emit(\"input\", this.vailFlag);\n        }\n    }\n};\n\nvar validateField = {\n    template: \"<div class=\\\"ui-validate-field\\\" @click=\\\"focusField\\\">\\n    <div class=\\\"clearfix field\\\">\\n        <div class=\\\"label\\\">{{uiLabel}}</div>\\n        <div class=\\\"slot\\\">\\n            <div class=\\\"pd-l-s pd-r-s\\\"><slot name=\\\"text\\\"></slot></div>\\n        </div>\\n    </div>\\n    <slot name=\\\"area\\\"></slot>\\n    <div class=\\\"error-panel\\\"><slot name=\\\"error\\\"></slot></div>\\n</div>\",\n    props: [\"uiLabel\", \"valiValue\", \"valiRegex\"],\n    data: function data() {\n        return {\n            name: \"validate-field\",\n            labelWidth: 0,\n            field: {},\n            label: {},\n            slot: {},\n            errorPanel: {},\n            valiError: false,\n            valiResult: true\n        };\n    },\n\n    computed: {\n        inputField: function inputField() {\n            var input = $(this.$el).find(\"input\");\n            if (input.length > 0) {\n                return input;\n            } else {\n                input = $(this.$el).find(\"textarea\");\n                if (input.length > 0) {\n                    return input;\n                } else {\n                    return false;\n                }\n            }\n        }\n    },\n    watch: {\n        valiValue: function valiValue(n) {\n            switch (this.valiRegex) {\n                case \"require\":\n                    if (_.isEmpty(n)) {\n                        this.valiBlock();\n                    } else {\n                        this.valiPass();\n                    }\n                    break;\n                case \"tel\":\n                    if (!/^1[0-9]{10}$/.test(n)) {\n                        this.valiBlock();\n                    } else {\n                        this.valiPass();\n                    }\n                    break;\n                case \"date\":\n                    var time = n.split(\"-\");\n                    //判断是否数字\n                    if (isNaN(time[0])) {\n                        this.valiBlock();\n                        break;\n                    }\n                    //判断年份是否在区间里面\n                    if (time[0] <= 1900 || time[0] >= 2099) {\n                        this.valiBlock();\n                        break;\n                    }\n                    //判断是否时间戳\n                    time = Date.parse(n);\n                    if (isNaN(time)) {\n                        this.valiBlock();\n                    } else {\n                        this.valiPass();\n                    }\n                    break;\n                case \"alipay\":\n                    if (/^(([^<>()[\\]\\\\.,;:\\s@\\\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\\\"]+)*)|(\\\".+\\\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/.test(n) || /^1[0-9]{10}$/.test(n)) {\n                        this.valiPass();\n                    } else {\n                        this.valiBlock();\n                    }\n                    break;\n            }\n            this.$parent.vailAllForm();\n        }\n    },\n    mounted: function mounted() {\n        if (this.valiRegex) {\n            this.valiResult = true;\n        } else {\n            this.valiResult = false;\n        }\n        this.field = $(this.$el).find(\".field\");\n        this.label = $(this.$el).find(\".label\");\n        this.slot = $(this.$el).find(\".slot\");\n        this.errorPanel = $(this.$el).find(\".error-panel\");\n        this.labelWidth = this.label.width();\n    },\n\n    methods: {\n        focusField: function focusField() {\n            if (this.inputField) {\n                this.inputField.focus();\n            }\n        },\n        setLabelWidth: function setLabelWidth(w) {\n            this.label.width(w);\n            this.slot.width(this.field.width() - w);\n        },\n        valiPass: function valiPass() {\n            if (this.valiResult || this.valiError) {\n                this.errorPanel.animate({\n                    \"height\": 0\n                });\n            }\n            this.valiError = false;\n            this.valiResult = false;\n        },\n        valiBlock: function valiBlock() {\n            if (!this.valiResult || !this.valiError) {\n                var height = this.errorPanel.css(\"height\", \"auto\").height();\n                this.errorPanel.height(0);\n                this.errorPanel.animate({\n                    \"height\": height + \"px\"\n                });\n            }\n            this.valiError = true;\n            this.valiResult = true;\n        }\n    }\n\n};\n\nmodule.exports = {\n    validateGroup: validateGroup,\n    validateField: validateField\n};\n\n//# sourceURL=webpack:///./application/scripts/lib/components/formValidation.js?");

/***/ }),

/***/ "./application/scripts/lib/components/index.js":
/*!*****************************************************!*\
  !*** ./application/scripts/lib/components/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _formValidation = __webpack_require__(/*! ./formValidation */ \"./application/scripts/lib/components/formValidation.js\");\n\nvar _formValidation2 = _interopRequireDefault(_formValidation);\n\nvar _dropBox = __webpack_require__(/*! ./dropBox */ \"./application/scripts/lib/components/dropBox.js\");\n\nvar _dropBox2 = _interopRequireDefault(_dropBox);\n\nvar _dataLoadingPanel = __webpack_require__(/*! ./dataLoadingPanel */ \"./application/scripts/lib/components/dataLoadingPanel.js\");\n\nvar _dataLoadingPanel2 = _interopRequireDefault(_dataLoadingPanel);\n\nvar _uiModal = __webpack_require__(/*! ./ui-modal */ \"./application/scripts/lib/components/ui-modal.js\");\n\nvar _uiModal2 = _interopRequireDefault(_uiModal);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nmodule.exports = {\n    formValidation: _formValidation2.default,\n    dropBox: _dropBox2.default,\n    loadPanel: _dataLoadingPanel2.default,\n    uiModal: _uiModal2.default\n};\n\n//# sourceURL=webpack:///./application/scripts/lib/components/index.js?");

/***/ }),

/***/ "./application/scripts/lib/components/ui-modal.js":
/*!********************************************************!*\
  !*** ./application/scripts/lib/components/ui-modal.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = {\n    template: \"<div class=\\\"ui-modalbox\\\">\\n    <transition name=\\\"fade\\\"><div class=\\\"overlay\\\" id=\\\"overlay\\\" v-show=\\\"status\\\"></div></transition>\\n        <div class=\\\"content\\\" :class=\\\"{'active':status}\\\">\\n            <div class=\\\"modal-header clearfix\\\">\\n                <a class=\\\"close\\\" @click=\\\"close\\\">\\n                    <svg viewBox=\\\"0 0 1024 1024\\\" version=\\\"1.1\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\"  xmlns:xlink=\\\"http://www.w3.org/1999/xlink\\\" width=\\\"16\\\" height=\\\"16\\\"><path class=\\\"close-fill\\\" d=\\\"M572.633359 511.999999 1009.831801 73.205942c15.956148-15.956148 15.956148-43.081598 0-60.633361s-43.081598-15.956148-60.633361 0L511.999999 451.366638 73.205942 14.168196c-15.956148-15.956148-43.081598-15.956148-60.633361 0s-15.956148 43.081598 0 60.633361L451.366638 511.999999 14.168196 950.794056c-15.956148 15.956148-15.956148 43.081598 0 60.633361s43.081598 15.956148 60.633361 0L511.999999 572.633359l438.794057 438.794057c15.956148 15.956148 43.081598 15.956148 60.633361 0s15.956148-43.081598 0-60.633361L572.633359 511.999999z\\\"></path></svg>\\n                </a>\\n            </div>\\n           <div class=\\\"modal-body\\\">\\n                <slot name=\\\"body\\\"></slot>\\n            </div>\\n            <div class=\\\"modal-foot\\\">\\n                <slot name=\\\"foot\\\"></slot>\\n            </div>\\n        </div>\\n</div>\",\n    watch: {\n        status: function status(n, o) {\n            if (n == true) {\n                document.body.style.overflow = \"hidden\";\n                document.body.style.width = \"100%\";\n                document.body.style.height = \"100%\";\n                document.body.addEventListener(\"touchmove\", this.bodyEvent); //防止body穿透点击\n            } else {\n                document.body.removeAttribute(\"style\");\n                document.body.style.width = \"auto\";\n                document.body.style.height = \"auto\";\n                document.body.removeEventListener(\"touchmove\", this.bodyEvent); //备注要写成句柄\n            }\n        }\n    },\n    props: [\"status\"],\n    methods: {\n        close: function close() {\n            this.$emit(\"close\", !this.status);\n        },\n        bodyEvent: function bodyEvent(e) {\n            e.preventDefault();\n        }\n    }\n\n};\n\n//# sourceURL=webpack:///./application/scripts/lib/components/ui-modal.js?");

/***/ }),

/***/ "./application/scripts/lib/interface/index.js":
/*!****************************************************!*\
  !*** ./application/scripts/lib/interface/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n//# sourceURL=webpack:///./application/scripts/lib/interface/index.js?");

/***/ }),

/***/ "./application/scripts/lib/utils/index.js":
/*!************************************************!*\
  !*** ./application/scripts/lib/utils/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n//# sourceURL=webpack:///./application/scripts/lib/utils/index.js?");

/***/ })

/******/ });