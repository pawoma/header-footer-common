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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.build.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/footer/footer.html":
/*!********************************!*\
  !*** ./src/footer/footer.html ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<!-- 公共尾部 -->\\r\\n<div class=\\\"footer_advantage\\\">\\r\\n  <div class=\\\"wt_footer_inner\\\">\\r\\n    <img src=\\\"http://retail.sks.org/public/assets/img/base.cac6ca72.png\\\">\\r\\n  </div>\\r\\n</div>\\r\\n\\r\\n<div class=\\\"wt_footer\\\">\\r\\n  <div class=\\\"wt_footer_inner\\\">\\r\\n    <div class=\\\"wt_footer_intro clearfix\\\">\\r\\n      <p class=\\\"logo\\\">\\r\\n         千杨旅游网<span class=\\\"text\\\">优质旅游产品聚集地</span>\\r\\n      </p>\\r\\n      <div class=\\\"tell\\\">\\r\\n        全国客服电话：<span>400-025-8066</span>\\r\\n      </div>\\r\\n    </div>\\r\\n    <div class=\\\"wt_footer_line\\\">\\r\\n\\t\\t\\t<div class=\\\"wt_footer_link\\\">\\r\\n\\t\\t\\t\\t<a class=\\\"item\\\" href=\\\"//portal.qianyangly.com\\\" target=\\\"_blank\\\">关于我们</a><span class=\\\"line\\\">|</span>\\r\\n        <a class=\\\"item\\\" href=\\\"#\\\">联系我们</a><span class=\\\"line\\\">|</span>\\r\\n        <a class=\\\"item\\\" href=\\\"//reg.qianyangly.com\\\" target=\\\"_blank\\\">供应商入驻</a><span class=\\\"line\\\">|</span>\\r\\n        <a class=\\\"item\\\" href=\\\"//reg.qianyangly.com/retail.html\\\" target=\\\"_blank\\\">零售商入驻</a><span class=\\\"line\\\">|</span>\\r\\n        <a class=\\\"item\\\" href=\\\"#\\\">帮助中心</a><span class=\\\"line\\\">|</span>\\r\\n\\t\\t\\t</div>\\r\\n      <div class=\\\"wt_footer_rights\\\">\\r\\n        <a class=\\\"item\\\" href=\\\"#\\\">Copyright © 2018 千杨旅游</a><span class=\\\"line\\\">|</span>\\r\\n        <a class=\\\"item\\\" href=\\\"//www.miitbeian.gov.cn/\\\" target=\\\"_blank\\\">苏ICP备17068031号-2</a>\\r\\n      </div>\\r\\n    </div>\\r\\n  </div>\\r\\n</div>\\r\\n\";\n\n//# sourceURL=webpack:///./src/footer/footer.html?");

/***/ }),

/***/ "./src/footer/footer.less":
/*!********************************!*\
  !*** ./src/footer/footer.less ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./src/footer/footer.less?");

/***/ }),

/***/ "./src/header/header.html":
/*!********************************!*\
  !*** ./src/header/header.html ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<div class=\\\"header\\\">\\r\\n  <div class=\\\"header_top scrollspy-nav\\\" data-am-sticky>\\r\\n    <div class=\\\"header_inner clearfix\\\">\\r\\n      <div class=\\\"header_logo clearfix\\\"><a href=\\\"/views\\\"><img src=\\\"http://retail.sks.org/public/assets/img/logo.bea6a75a.png\\\" /></a><span\\r\\n          class=\\\"line\\\"></span></div>\\r\\n      <ul class=\\\"index_top_nav clearfix\\\">\\r\\n        <li class=\\\"top_nav_item\\\"></li>\\r\\n        <li class=\\\"top_nav_item\\\"><a class=\\\"nav-link\\\" href=\\\"/views/order.html\\\" target=\\\"_blank\\\">订单</a></li>\\r\\n        <li class=\\\"top_nav_item\\\"><a class=\\\"nav-link\\\" href=\\\"/views/index.html\\\" target=\\\"_blank\\\">产品</a></li>\\r\\n        <li class=\\\"am-dropdown top_nav_item\\\" data-am-dropdown>\\r\\n          <a class=\\\"nav-link am-dropdown-toggle\\\" href=\\\"#\\\" data-am-dropdown-toggle>财务\\r\\n          </a>\\r\\n          <ul class=\\\"am-dropdown-content\\\">\\r\\n            <li>\\r\\n              <a class=\\\"s_nav-link\\\" href=\\\"/views/financeManage.html\\\" target=\\\"_blank\\\">财务信息</a>\\r\\n            </li>\\r\\n            <li>\\r\\n              <a class=\\\"s_nav-link\\\" href=\\\"/views/invoiceManage.html\\\" target=\\\"_blank\\\">发票信息</a>\\r\\n            </li>\\r\\n          </ul>\\r\\n        </li>\\r\\n        <li class=\\\"top_nav_item order-sign_nav\\\" style=\\\"display: none\\\"><a class=\\\"nav-link\\\" href=\\\"/views/sign/signManager.html\\\"\\r\\n            target=\\\"_blank\\\">订单签约</a></li>\\r\\n      </ul>\\r\\n      <ul class=\\\"index_top_right clearfix\\\">\\r\\n        <li class=\\\"top_right_nav wt_last am-dropdown t_r_account\\\" data-am-dropdown>\\r\\n          <a class=\\\"nav_link am-dropdown-toggle\\\" data-am-dropdown-toggle><i class=\\\"iconfont icon-wode\\\"></i>我的账号</a>\\r\\n          <ul class=\\\"am-dropdown-content\\\">\\r\\n            <li><a href=\\\"/views/persCenter.html\\\">个人中心</a></li>\\r\\n            <li><a href=\\\"/views/favor.html\\\">我的收藏</a></li>\\r\\n            <li><a href=\\\"javascript:;\\\" class=\\\"J-logout\\\">退出</a></li>\\r\\n          </ul>\\r\\n        </li>\\r\\n      </ul>\\r\\n    </div>\\r\\n    <div class=\\\"header_top_shadow\\\"></div>\\r\\n  </div>\\r\\n</div>\";\n\n//# sourceURL=webpack:///./src/header/header.html?");

/***/ }),

/***/ "./src/header/header.js":
/*!******************************!*\
  !*** ./src/header/header.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = {\n  bind: function bind() {\n    // * 用户登出\n    $('.J-logout').on('click', function () {\n      gAjax('logout', {}, function (data) {\n        if (data && data.success) {\n          console.log('已登出！');\n          window.location.href = '/views/login.html';\n        }\n      });\n    });\n    $('.menu_list').on('click', function () {\n      $(this).find('.second_menu').show();\n    });\n  },\n  init: function init() {\n    this.checkSignatureStatus();\n    // this.bind();\n  },\n  checkSignatureStatus: function checkSignatureStatus() {\n    console.log('checkSignatureStatus');\n    // gAjax('checkSignatureStatus', {}, res => {\n    //   if (res) {\n    //     $('.order-sign_nav').show();\n    //   }\n    // });\n  }\n};\n\n//# sourceURL=webpack:///./src/header/header.js?");

/***/ }),

/***/ "./src/header/header.less":
/*!********************************!*\
  !*** ./src/header/header.less ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./src/header/header.less?");

/***/ }),

/***/ "./src/index.build.js":
/*!****************************!*\
  !*** ./src/index.build.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _header = __webpack_require__(/*! ./header/header.html */ \"./src/header/header.html\");\n\nvar _header2 = _interopRequireDefault(_header);\n\nvar _footer = __webpack_require__(/*! ./footer/footer.html */ \"./src/footer/footer.html\");\n\nvar _footer2 = _interopRequireDefault(_footer);\n\nvar _header3 = __webpack_require__(/*! ./header/header.js */ \"./src/header/header.js\");\n\nvar _header4 = _interopRequireDefault(_header3);\n\n__webpack_require__(/*! ./header/header.less */ \"./src/header/header.less\");\n\n__webpack_require__(/*! ./footer/footer.less */ \"./src/footer/footer.less\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nmodule.exports = _header2.default;\n\n//# sourceURL=webpack:///./src/index.build.js?");

/***/ })

/******/ });