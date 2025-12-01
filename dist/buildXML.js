"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = main;
exports.generateXML = generateXML;
exports.getPermaLink = getPermaLink;
var _fsExtra = _interopRequireDefault(require("fs-extra"));
var _path = _interopRequireDefault(require("path"));
var _reactStaticProMax = require("react-static-pro-max");
var _excluded = ["loc", "hreflang"];
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
var REGEX_TO_GET_LAST_SLASH = /\/{1,}$/gm;
var defaultGetUrlAttributes = function defaultGetUrlAttributes(route, _ref) {
  var prefixPath = _ref.prefixPath;
  var _route$sitemap = route.sitemap,
    _route$sitemap2 = _route$sitemap === void 0 ? {} : _route$sitemap,
    loc = _route$sitemap2.loc,
    hreflang = _route$sitemap2.hreflang,
    rest = _objectWithoutProperties(_route$sitemap2, _excluded);
  return _objectSpread({
    loc: getPermaLink(loc || route.path, prefixPath)
  }, rest);
};
function main(_x, _x2) {
  return _main.apply(this, arguments);
}
function _main() {
  _main = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(state, options) {
    var chalk, _state$config, DIST, disableRoutePrefixing, siteRoot, publicPath, staging, prefixPath, filename, xml;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.n) {
        case 0:
          chalk = require("chalk");
          _state$config = state.config, DIST = _state$config.paths.DIST, disableRoutePrefixing = _state$config.disableRoutePrefixing, siteRoot = _state$config.siteRoot, publicPath = _state$config.publicPath, staging = state.staging;
          prefixPath = disableRoutePrefixing ? siteRoot : publicPath;
          filename = staging ? 'sitemap.staging.xml' : 'sitemap.xml';
          console.log("Generating ".concat(filename, "..."));
          xml = generateXML(state, options, prefixPath);
          _context.n = 1;
          return _fsExtra["default"].writeFile(_path["default"].join(DIST, filename), xml);
        case 1:
          console.log(chalk.green("[\u2713] ".concat(filename, " generated")));
        case 2:
          return _context.a(2);
      }
    }, _callee);
  }));
  return _main.apply(this, arguments);
}
function generateXML(state) {
  var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
    _ref2$getAttributes = _ref2.getAttributes,
    getAttributes = _ref2$getAttributes === void 0 ? function () {
      return {};
    } : _ref2$getAttributes;
  var prefixPath = arguments.length > 2 ? arguments[2] : undefined;
  var config = state.config,
    routes = state.routes,
    staging = state.staging;
  if (!prefixPath) {
    throw new Error('The sitemap url prefix cannot be empty or undefined!');
  }
  var xmlRoutes = routes.filter(function (r) {
    // Don't include the 404 page
    if (r.path === '404') {
      return false;
    }
    // Don't include routes with noindex: true
    if (r.sitemap && r.sitemap.noindex) {
      return false;
    }
    return true;
  }) // Leave out noindex routes
  .map(function (route) {
    var attributes = _objectSpread(_objectSpread(_objectSpread({}, defaultGetUrlAttributes(route, {
      config: config,
      prefixPath: prefixPath
    })), getAttributes(route, {
      config: config,
      prefixPath: prefixPath
    })), {}, {
      noindex: undefined
    });
    var attributesArr = [];
    Object.keys(attributes).forEach(function (key) {
      if (typeof attributes[key] !== 'undefined') {
        attributesArr.push({
          key: key,
          value: attributes[key]
        });
      }
    });
    var hrefLangLinks = (route.sitemap && route.sitemap.hreflang ? buildHrefLangLinks(route.sitemap.hreflang, prefixPath) : []).join(staging ? '\n' : '');
    return ['<url>', xmlArrayOutput(attributesArr, staging), hrefLangLinks, '</url>'].join(staging ? '\n' : '');
  }).join(staging ? '\n' : '');
  return ["<?xml version=\"1.0\" encoding=\"UTF-8\"?>", "<urlset xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\" xmlns:image=\"http://www.google.com/schemas/sitemap-image/1.1\" xmlns:xhtml=\"http://www.w3.org/1999/xhtml\">", xmlRoutes, "</urlset>"].join(staging ? '\n' : '');
}
function getPermaLink(path, prefixPath) {
  var permalink = "".concat(prefixPath).concat((0, _reactStaticProMax.pathJoin)(path));
  return "".concat(permalink, "/").replace(REGEX_TO_GET_LAST_SLASH, '/');
}
function checkNestedValue(value) {
  if (!value) return false;
  if (_typeof(value) === 'object' && value !== null) {
    return true;
  }
  return false;
}
function convertNestedValue(values, staging) {
  var _values = [];
  Object.keys(values).forEach(function (key) {
    if (typeof values[key] !== 'undefined') {
      _values.push({
        key: key,
        value: values[key]
      });
    }
  });
  return xmlArrayOutput(_values, staging);
}
function encode(val) {
  return String(val).replace(/[<>&'"]/g, function (c) {
    switch (c) {
      case '<':
        return '&lt;';
      case '>':
        return '&gt;';
      case '&':
        return '&amp;';
      case "'":
        return '&apos;';
      case '"':
        return '&quot;';
      default:
        throw new Error('XML encoding failed');
    }
  });
}
function buildHrefLangLinks(hrefLangConfig, prefixPath) {
  return hrefLangConfig.map(function (_ref3) {
    var language = _ref3.language,
      url = _ref3.url;
    return "<xhtml:link rel=\"alternate\" hreflang=\"".concat(language, "\" href=\"").concat(getPermaLink(url, prefixPath), "\" />");
  });
}
function xmlArrayOutput(values, staging) {
  return _toConsumableArray(values.map(function (_ref4) {
    var key = _ref4.key,
      value = _ref4.value;
    return "<".concat(key, ">").concat(checkNestedValue(value) ? convertNestedValue(value, staging) : encode(value), "</").concat(key, ">");
  })).join(staging ? '\n' : '');
}