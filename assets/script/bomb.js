/* !
 * hydrogen-js-sdk
 * Bmob.min.js v2.2.3
 * updated date 3/13/2020
 */
! function(e, t) { "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.Bmob = t() : e.Bmob = t() }("undefined" != typeof self ? self : this, function() {
    return function(e) {
        var t = {};

        function n(r) { if (t[r]) return t[r].exports; var o = t[r] = { i: r, l: !1, exports: {} }; return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports }
        return n.m = e, n.c = t, n.d = function(e, t, r) { n.o(e, t) || Object.defineProperty(e, t, { configurable: !1, enumerable: !0, get: r }) }, n.n = function(e) { var t = e && e.__esModule ? function() { return e.default } : function() { return e }; return n.d(t, "a", t), t }, n.o = function(e, t) { return Object.prototype.hasOwnProperty.call(e, t) }, n.p = "", n(n.s = 81)
    }([function(e, t) { var n = e.exports = { version: "2.6.8" }; "number" == typeof __e && (__e = n) }, function(e, t, n) {
        "use strict";
        (function(t) {
            var r = n(28),
                o = t.Bmob || {};
            o.utils = r, o._config = r.getConfig(), o.initialize = function(e, t, n) { t.length > 6 && console.warn("Bmob初始化失败，2.0以上版本SDK请使用API安全码初始化，文档地址：https://bmob.github.io/hydrogen-js-sdk/#/?id=初始化"), o._config.secretKey = e, o._config.securityCode = t, o._config.applicationMasterKey = n }, o.debug = function(e) { o._config.deBug = e, o._config = r.getConfig(e) }, e.exports = o
        }).call(t, n(53))
    }, function(e, t) { var n = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(); "number" == typeof __g && (__g = n) }, function(e, t, n) {
        var r = n(44)("wks"),
            o = n(31),
            i = n(2).Symbol,
            a = "function" == typeof i;
        (e.exports = function(e) { return r[e] || (r[e] = a && i[e] || (a ? i : o)("Symbol." + e)) }).store = r
    }, function(e, t, n) { e.exports = { default: n(112), __esModule: !0 } }, function(e, t, n) {
        "use strict";
        var r, o = n(27),
            i = (r = o) && r.__esModule ? r : { default: r };
        var a = n(74),
            u = n(130),
            s = Object.prototype.toString;

        function c(e) { return "[object Array]" === s.call(e) }

        function f(e) { return null !== e && "object" === (void 0 === e ? "undefined" : (0, i.default)(e)) }

        function l(e) { return "[object Function]" === s.call(e) }

        function p(e, t) {
            if (null !== e && void 0 !== e)
                if ("object" !== (void 0 === e ? "undefined" : (0, i.default)(e)) && (e = [e]), c(e))
                    for (var n = 0, r = e.length; n < r; n++) t.call(null, e[n], n, e);
                else
                    for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.call(null, e[o], o, e)
        }
        e.exports = {
            isArray: c,
            isArrayBuffer: function(e) { return "[object ArrayBuffer]" === s.call(e) },
            isBuffer: u,
            isFormData: function(e) { return "undefined" != typeof FormData && e instanceof FormData },
            isArrayBufferView: function(e) { return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && e.buffer instanceof ArrayBuffer },
            isString: function(e) { return "string" == typeof e },
            isNumber: function(e) { return "number" == typeof e },
            isObject: f,
            isUndefined: function(e) { return void 0 === e },
            isDate: function(e) { return "[object Date]" === s.call(e) },
            isFile: function(e) { return "[object File]" === s.call(e) },
            isBlob: function(e) { return "[object Blob]" === s.call(e) },
            isFunction: l,
            isStream: function(e) { return f(e) && l(e.pipe) },
            isURLSearchParams: function(e) { return "undefined" != typeof URLSearchParams && e instanceof URLSearchParams },
            isStandardBrowserEnv: function() { return ("undefined" == typeof navigator || "ReactNative" !== navigator.product) && "undefined" != typeof window && "undefined" != typeof document },
            forEach: p,
            merge: function e() {
                var t = {};

                function n(n, r) { "object" === (0, i.default)(t[r]) && "object" === (void 0 === n ? "undefined" : (0, i.default)(n)) ? t[r] = e(t[r], n): t[r] = n }
                for (var r = 0, o = arguments.length; r < o; r++) p(arguments[r], n);
                return t
            },
            extend: function(e, t, n) { return p(t, function(t, r) { e[r] = n && "function" == typeof t ? a(t, n) : t }), e },
            trim: function(e) { return e.replace(/^\s*/, "").replace(/\s*$/, "") }
        }
    }, function(e, t, n) {
        var r = n(2),
            o = n(0),
            i = n(22),
            a = n(16),
            u = n(17),
            s = function(e, t, n) {
                var c, f, l, p = e & s.F,
                    d = e & s.G,
                    h = e & s.S,
                    v = e & s.P,
                    y = e & s.B,
                    m = e & s.W,
                    g = d ? o : o[t] || (o[t] = {}),
                    w = g.prototype,
                    b = d ? r : h ? r[t] : (r[t] || {}).prototype;
                for (c in d && (n = t), n)(f = !p && b && void 0 !== b[c]) && u(g, c) || (l = f ? b[c] : n[c], g[c] = d && "function" != typeof b[c] ? n[c] : y && f ? i(l, r) : m && b[c] == l ? function(e) {
                    var t = function(t, n, r) {
                        if (this instanceof e) {
                            switch (arguments.length) {
                                case 0:
                                    return new e;
                                case 1:
                                    return new e(t);
                                case 2:
                                    return new e(t, n)
                            }
                            return new e(t, n, r)
                        }
                        return e.apply(this, arguments)
                    };
                    return t.prototype = e.prototype, t
                }(l) : v && "function" == typeof l ? i(Function.call, l) : l, v && ((g.virtual || (g.virtual = {}))[c] = l, e & s.R && w && !w[c] && a(w, c, l)))
            };
        s.F = 1, s.G = 2, s.S = 4, s.P = 8, s.B = 16, s.W = 32, s.U = 64, s.R = 128, e.exports = s
    }, function(e, t, n) {
        var r = n(15);
        e.exports = function(e) { if (!r(e)) throw TypeError(e + " is not an object!"); return e }
    }, function(e, t, n) {
        "use strict";
        e.exports = { isObject: function(e) { return "[object Object]" === Object.prototype.toString.call(e) }, isNumber: function(e) { return "[object Number]" === Object.prototype.toString.call(e) }, isString: function(e) { return "[object String]" === Object.prototype.toString.call(e) }, isUndefined: function(e) { return "[object Undefined]" === Object.prototype.toString.call(e) }, isBoolean: function(e) { return "[object Boolean]" === Object.prototype.toString.call(e) }, isArray: function(e) { return "[object Array]" === Object.prototype.toString.call(e) }, isFunction: function(e) { return "[object Function]" === Object.prototype.toString.call(e) } }
    }, function(e, t, n) { e.exports = { default: n(90), __esModule: !0 } }, function(e, t, n) { e.exports = !n(19)(function() { return 7 != Object.defineProperty({}, "a", { get: function() { return 7 } }).a }) }, function(e, t, n) {
        "use strict";
        var r = i(n(12)),
            o = i(n(13));

        function i(e) { return e && e.__esModule ? e : { default: e } }
        var a = function() {
            function e(t, n) {
                (0, r.default)(this, e);
                var o = new Error;
                return o.code = t, o.message = n ? "Bmob.Error:{code:" + t + ", message:" + n + "}" : "Bmob.Error:{code:" + t + ", message:" + this.errorMsg(t) + "}", o
            }
            return (0, o.default)(e, [{
                key: "errorMsg",
                value: function(e) {
                    switch (e) {
                        case 415:
                            return "incorrect parameter type.";
                        case 416:
                            return "Parameter is null.";
                        case 417:
                            return "There is no upload content.";
                        case 418:
                            return "Log in failure.";
                        case 419:
                            return "Bmob.GeoPoint location error.";
                        default:
                            return "unknown error"
                    }
                }
            }]), e
        }();
        e.exports = a
    }, function(e, t, n) {
        "use strict";
        t.__esModule = !0, t.default = function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }
    }, function(e, t, n) {
        "use strict";
        t.__esModule = !0;
        var r, o = n(86),
            i = (r = o) && r.__esModule ? r : { default: r };
        t.default = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), (0, i.default)(e, r.key, r)
                }
            }
            return function(t, n, r) { return n && e(t.prototype, n), r && e(t, r), t }
        }()
    }, function(e, t, n) {
        var r = n(7),
            o = n(54),
            i = n(40),
            a = Object.defineProperty;
        t.f = n(10) ? Object.defineProperty : function(e, t, n) {
            if (r(e), t = i(t, !0), r(n), o) try { return a(e, t, n) } catch (e) {}
            if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
            return "value" in n && (e[t] = n.value), e
        }
    }, function(e, t) { e.exports = function(e) { return "object" == typeof e ? null !== e : "function" == typeof e } }, function(e, t, n) {
        var r = n(14),
            o = n(30);
        e.exports = n(10) ? function(e, t, n) { return r.f(e, t, o(1, n)) } : function(e, t, n) { return e[t] = n, e }
    }, function(e, t) {
        var n = {}.hasOwnProperty;
        e.exports = function(e, t) { return n.call(e, t) }
    }, function(e, t, n) {
        "use strict";
        var r = void 0,
            o = n(28).getAppType();
        "h5" === o ? r = n(73) : "wx" === o ? r = n(147) : "hap" === o ? r = n(148) : "nodejs" === o && (r = n(73)), e.exports = r
    }, function(e, t) { e.exports = function(e) { try { return !!e() } catch (e) { return !0 } } }, function(e, t, n) {
        var r = n(58),
            o = n(41);
        e.exports = function(e) { return r(o(e)) }
    }, function(e, t) { e.exports = {} }, function(e, t, n) {
        var r = n(29);
        e.exports = function(e, t, n) {
            if (r(e), void 0 === t) return e;
            switch (n) {
                case 1:
                    return function(n) { return e.call(t, n) };
                case 2:
                    return function(n, r) { return e.call(t, n, r) };
                case 3:
                    return function(n, r, o) { return e.call(t, n, r, o) }
            }
            return function() { return e.apply(t, arguments) }
        }
    }, function(e, t, n) {
        var r = n(41);
        e.exports = function(e) { return Object(r(e)) }
    }, function(e, t, n) {
        var r = n(57),
            o = n(45);
        e.exports = Object.keys || function(e) { return r(e, o) }
    }, function(e, t) {
        var n = {}.toString;
        e.exports = function(e) { return n.call(e).slice(8, -1) }
    }, function(e, t) { e.exports = !0 }, function(e, t, n) {
        "use strict";
        t.__esModule = !0;
        var r = a(n(95)),
            o = a(n(103)),
            i = "function" == typeof o.default && "symbol" == typeof r.default ? function(e) { return typeof e } : function(e) { return e && "function" == typeof o.default && e.constructor === o.default && e !== o.default.prototype ? "symbol" : typeof e };

        function a(e) { return e && e.__esModule ? e : { default: e } }
        t.default = "function" == typeof o.default && "symbol" === i(r.default) ? function(e) { return void 0 === e ? "undefined" : i(e) } : function(e) { return e && "function" == typeof o.default && e.constructor === o.default && e !== o.default.prototype ? "symbol" : void 0 === e ? "undefined" : i(e) }
    }, function(e, t, n) {
        "use strict";
        (function(t) {
            var r = void 0;
            r = n(82);
            var o = function() { return !0 === (arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && (r.host = n(84).host), r };
            e.exports = {
                randomString: function() { for (var e = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"], t = "", n = 0; n < 16; n++) t += e[parseInt(61 * Math.random())]; return t },
                getConfig: o,
                getAppType: function() {
                    var e = o(),
                        n = void 0;
                    return "undefined" != typeof wx && (n = "wx"), "undefined" != typeof window && "string" != typeof n && (n = "h5"), void 0 !== t && "string" != typeof n && (n = "nodejs"), 3 === e.type && "string" != typeof n && (n = "hap"), n
                }
            }
        }).call(t, n(38))
    }, function(e, t) { e.exports = function(e) { if ("function" != typeof e) throw TypeError(e + " is not a function!"); return e } }, function(e, t) { e.exports = function(e, t) { return { enumerable: !(1 & e), configurable: !(2 & e), writable: !(4 & e), value: t } } }, function(e, t) {
        var n = 0,
            r = Math.random();
        e.exports = function(e) { return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++n + r).toString(36)) }
    }, function(e, t, n) {
        "use strict";
        var r = n(97)(!0);
        n(61)(String, "String", function(e) { this._t = String(e), this._i = 0 }, function() {
            var e, t = this._t,
                n = this._i;
            return n >= t.length ? { value: void 0, done: !0 } : (e = r(t, n), this._i += e.length, { value: e, done: !1 })
        })
    }, function(e, t, n) {
        var r = n(14).f,
            o = n(17),
            i = n(3)("toStringTag");
        e.exports = function(e, t, n) { e && !o(e = n ? e : e.prototype, i) && r(e, i, { configurable: !0, value: t }) }
    }, function(e, t, n) {
        n(100);
        for (var r = n(2), o = n(16), i = n(21), a = n(3)("toStringTag"), u = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","), s = 0; s < u.length; s++) {
            var c = u[s],
                f = r[c],
                l = f && f.prototype;
            l && !l[a] && o(l, a, c), i[c] = i.Array
        }
    }, function(e, t) { t.f = {}.propertyIsEnumerable }, function(e, t, n) { e.exports = { default: n(126), __esModule: !0 } }, function(e, t, n) {
        "use strict";

        function r(e, t) { var n = (65535 & e) + (65535 & t); return (e >> 16) + (t >> 16) + (n >> 16) << 16 | 65535 & n }

        function o(e, t, n, o, i, a) { return r((u = r(r(t, e), r(o, a))) << (s = i) | u >>> 32 - s, n); var u, s }

        function i(e, t, n, r, i, a, u) { return o(t & n | ~t & r, e, t, i, a, u) }

        function a(e, t, n, r, i, a, u) { return o(t & r | n & ~r, e, t, i, a, u) }

        function u(e, t, n, r, i, a, u) { return o(t ^ n ^ r, e, t, i, a, u) }

        function s(e, t, n, r, i, a, u) { return o(n ^ (t | ~r), e, t, i, a, u) }

        function c(e) {
            for (var t = 1732584193, n = -271733879, o = -1732584194, c = 271733878, f = 0; f < e.length; f += 16) {
                var l = t,
                    p = n,
                    d = o,
                    h = c;
                n = s(n = s(n = s(n = s(n = u(n = u(n = u(n = u(n = a(n = a(n = a(n = a(n = i(n = i(n = i(n = i(n, o = i(o, c = i(c, t = i(t, n, o, c, e[f + 0], 7, -680876936), n, o, e[f + 1], 12, -389564586), t, n, e[f + 2], 17, 606105819), c, t, e[f + 3], 22, -1044525330), o = i(o, c = i(c, t = i(t, n, o, c, e[f + 4], 7, -176418897), n, o, e[f + 5], 12, 1200080426), t, n, e[f + 6], 17, -1473231341), c, t, e[f + 7], 22, -45705983), o = i(o, c = i(c, t = i(t, n, o, c, e[f + 8], 7, 1770035416), n, o, e[f + 9], 12, -1958414417), t, n, e[f + 10], 17, -42063), c, t, e[f + 11], 22, -1990404162), o = i(o, c = i(c, t = i(t, n, o, c, e[f + 12], 7, 1804603682), n, o, e[f + 13], 12, -40341101), t, n, e[f + 14], 17, -1502002290), c, t, e[f + 15], 22, 1236535329), o = a(o, c = a(c, t = a(t, n, o, c, e[f + 1], 5, -165796510), n, o, e[f + 6], 9, -1069501632), t, n, e[f + 11], 14, 643717713), c, t, e[f + 0], 20, -373897302), o = a(o, c = a(c, t = a(t, n, o, c, e[f + 5], 5, -701558691), n, o, e[f + 10], 9, 38016083), t, n, e[f + 15], 14, -660478335), c, t, e[f + 4], 20, -405537848), o = a(o, c = a(c, t = a(t, n, o, c, e[f + 9], 5, 568446438), n, o, e[f + 14], 9, -1019803690), t, n, e[f + 3], 14, -187363961), c, t, e[f + 8], 20, 1163531501), o = a(o, c = a(c, t = a(t, n, o, c, e[f + 13], 5, -1444681467), n, o, e[f + 2], 9, -51403784), t, n, e[f + 7], 14, 1735328473), c, t, e[f + 12], 20, -1926607734), o = u(o, c = u(c, t = u(t, n, o, c, e[f + 5], 4, -378558), n, o, e[f + 8], 11, -2022574463), t, n, e[f + 11], 16, 1839030562), c, t, e[f + 14], 23, -35309556), o = u(o, c = u(c, t = u(t, n, o, c, e[f + 1], 4, -1530992060), n, o, e[f + 4], 11, 1272893353), t, n, e[f + 7], 16, -155497632), c, t, e[f + 10], 23, -1094730640), o = u(o, c = u(c, t = u(t, n, o, c, e[f + 13], 4, 681279174), n, o, e[f + 0], 11, -358537222), t, n, e[f + 3], 16, -722521979), c, t, e[f + 6], 23, 76029189), o = u(o, c = u(c, t = u(t, n, o, c, e[f + 9], 4, -640364487), n, o, e[f + 12], 11, -421815835), t, n, e[f + 15], 16, 530742520), c, t, e[f + 2], 23, -995338651), o = s(o, c = s(c, t = s(t, n, o, c, e[f + 0], 6, -198630844), n, o, e[f + 7], 10, 1126891415), t, n, e[f + 14], 15, -1416354905), c, t, e[f + 5], 21, -57434055), o = s(o, c = s(c, t = s(t, n, o, c, e[f + 12], 6, 1700485571), n, o, e[f + 3], 10, -1894986606), t, n, e[f + 10], 15, -1051523), c, t, e[f + 1], 21, -2054922799), o = s(o, c = s(c, t = s(t, n, o, c, e[f + 8], 6, 1873313359), n, o, e[f + 15], 10, -30611744), t, n, e[f + 6], 15, -1560198380), c, t, e[f + 13], 21, 1309151649), o = s(o, c = s(c, t = s(t, n, o, c, e[f + 4], 6, -145523070), n, o, e[f + 11], 10, -1120210379), t, n, e[f + 2], 15, 718787259), c, t, e[f + 9], 21, -343485551), t = r(t, l), n = r(n, p), o = r(o, d), c = r(c, h)
            }
            return [t, n, o, c]
        }

        function f(e) { for (var t = "", n = 0; n < 4 * e.length; n++) t += "0123456789abcdef".charAt(e[n >> 2] >> n % 4 * 8 + 4 & 15) + "0123456789abcdef".charAt(e[n >> 2] >> n % 4 * 8 & 15); return t }

        function l(e) { for (var t = 1 + (e.length + 8 >> 6), n = new Array(16 * t), r = 0; r < 16 * t; r++) n[r] = 0; for (r = 0; r < e.length; r++) n[r >> 2] |= (255 & e.charCodeAt(r)) << r % 4 * 8; return n[r >> 2] |= 128 << r % 4 * 8, n[16 * t - 2] = 8 * e.length, n }

        function p(e) { "string" == typeof e && (e = function(e) { e = unescape(encodeURIComponent(e)); for (var t = [], n = 0; n < e.length; n++) t.push(e[n].charCodeAt(0)); return new Uint8Array(t) }(e)); for (var t = 1 + (e.length + 8 >> 6), n = new Array(16 * t), r = 0; r < 16 * t; r++) n[r] = 0; for (r = 0; r < e.length; r++) n[r >> 2] |= (255 & e[r]) << r % 4 * 8; return n[r >> 2] |= 128 << r % 4 * 8, n[16 * t - 2] = 8 * e.length, n }
        e.exports = { hexMD5: function(e) { return f(c(l(e))) }, utf8MD5: function(e) { return f(c(p(e))) } }
    }, function(e, t) {
        var n, r, o = e.exports = {};

        function i() { throw new Error("setTimeout has not been defined") }

        function a() { throw new Error("clearTimeout has not been defined") }

        function u(e) { if (n === setTimeout) return setTimeout(e, 0); if ((n === i || !n) && setTimeout) return n = setTimeout, setTimeout(e, 0); try { return n(e, 0) } catch (t) { try { return n.call(null, e, 0) } catch (t) { return n.call(this, e, 0) } } }! function() { try { n = "function" == typeof setTimeout ? setTimeout : i } catch (e) { n = i } try { r = "function" == typeof clearTimeout ? clearTimeout : a } catch (e) { r = a } }();
        var s, c = [],
            f = !1,
            l = -1;

        function p() { f && s && (f = !1, s.length ? c = s.concat(c) : l = -1, c.length && d()) }

        function d() {
            if (!f) {
                var e = u(p);
                f = !0;
                for (var t = c.length; t;) {
                    for (s = c, c = []; ++l < t;) s && s[l].run();
                    l = -1, t = c.length
                }
                s = null, f = !1,
                    function(e) { if (r === clearTimeout) return clearTimeout(e); if ((r === a || !r) && clearTimeout) return r = clearTimeout, clearTimeout(e); try { r(e) } catch (t) { try { return r.call(null, e) } catch (t) { return r.call(this, e) } } }(e)
            }
        }

        function h(e, t) { this.fun = e, this.array = t }

        function v() {}
        o.nextTick = function(e) {
            var t = new Array(arguments.length - 1);
            if (arguments.length > 1)
                for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
            c.push(new h(e, t)), 1 !== c.length || f || u(d)
        }, h.prototype.run = function() { this.fun.apply(null, this.array) }, o.title = "browser", o.browser = !0, o.env = {}, o.argv = [], o.version = "", o.versions = {}, o.on = v, o.addListener = v, o.once = v, o.off = v, o.removeListener = v, o.removeAllListeners = v, o.emit = v, o.prependListener = v, o.prependOnceListener = v, o.listeners = function(e) { return [] }, o.binding = function(e) { throw new Error("process.binding is not supported") }, o.cwd = function() { return "/" }, o.chdir = function(e) { throw new Error("process.chdir is not supported") }, o.umask = function() { return 0 }
    }, function(e, t, n) {
        var r = n(15),
            o = n(2).document,
            i = r(o) && r(o.createElement);
        e.exports = function(e) { return i ? o.createElement(e) : {} }
    }, function(e, t, n) {
        var r = n(15);
        e.exports = function(e, t) { if (!r(e)) return e; var n, o; if (t && "function" == typeof(n = e.toString) && !r(o = n.call(e))) return o; if ("function" == typeof(n = e.valueOf) && !r(o = n.call(e))) return o; if (!t && "function" == typeof(n = e.toString) && !r(o = n.call(e))) return o; throw TypeError("Can't convert object to primitive value") }
    }, function(e, t) { e.exports = function(e) { if (void 0 == e) throw TypeError("Can't call method on  " + e); return e } }, function(e, t) {
        var n = Math.ceil,
            r = Math.floor;
        e.exports = function(e) { return isNaN(e = +e) ? 0 : (e > 0 ? r : n)(e) }
    }, function(e, t, n) {
        var r = n(44)("keys"),
            o = n(31);
        e.exports = function(e) { return r[e] || (r[e] = o(e)) }
    }, function(e, t, n) {
        var r = n(0),
            o = n(2),
            i = o["__core-js_shared__"] || (o["__core-js_shared__"] = {});
        (e.exports = function(e, t) { return i[e] || (i[e] = void 0 !== t ? t : {}) })("versions", []).push({ version: r.version, mode: n(26) ? "pure" : "global", copyright: "© 2019 Denis Pushkarev (zloirock.ru)" })
    }, function(e, t) { e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",") }, function(e, t, n) {
        var r = n(7),
            o = n(99),
            i = n(45),
            a = n(43)("IE_PROTO"),
            u = function() {},
            s = function() {
                var e, t = n(39)("iframe"),
                    r = i.length;
                for (t.style.display = "none", n(63).appendChild(t), t.src = "javascript:", (e = t.contentWindow.document).open(), e.write("<script>document.F=Object<\/script>"), e.close(), s = e.F; r--;) delete s.prototype[i[r]];
                return s()
            };
        e.exports = Object.create || function(e, t) { var n; return null !== e ? (u.prototype = r(e), n = new u, u.prototype = null, n[a] = e) : n = s(), void 0 === t ? n : o(n, t) }
    }, function(e, t, n) { t.f = n(3) }, function(e, t, n) {
        var r = n(2),
            o = n(0),
            i = n(26),
            a = n(47),
            u = n(14).f;
        e.exports = function(e) { var t = o.Symbol || (o.Symbol = i ? {} : r.Symbol || {}); "_" == e.charAt(0) || e in t || u(t, e, { value: a.f(e) }) }
    }, function(e, t) { t.f = Object.getOwnPropertySymbols }, function(e, t, n) {
        var r = n(25),
            o = n(3)("toStringTag"),
            i = "Arguments" == r(function() { return arguments }());
        e.exports = function(e) { var t, n, a; return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof(n = function(e, t) { try { return e[t] } catch (e) {} }(t = Object(e), o)) ? n : i ? r(t) : "Object" == (a = r(t)) && "function" == typeof t.callee ? "Arguments" : a }
    }, function(e, t, n) {
        "use strict";
        var r = n(29);
        e.exports.f = function(e) {
            return new function(e) {
                var t, n;
                this.promise = new e(function(e, r) {
                    if (void 0 !== t || void 0 !== n) throw TypeError("Bad Promise constructor");
                    t = e, n = r
                }), this.resolve = r(t), this.reject = r(n)
            }(e)
        }
    }, function(e, t, n) {
        "use strict";
        (function(t) {
            var r, o = n(9),
                i = (r = o) && r.__esModule ? r : { default: r };
            var a = n(5),
                u = n(132),
                s = { "Content-Type": "application/x-www-form-urlencoded" };

            function c(e, t) {!a.isUndefined(e) && a.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t) }
            var f, l = {
                adapter: ("undefined" != typeof XMLHttpRequest ? f = n(75) : void 0 !== t && (f = n(75)), f),
                transformRequest: [function(e, t) { return u(t, "Content-Type"), a.isFormData(e) || a.isArrayBuffer(e) || a.isBuffer(e) || a.isStream(e) || a.isFile(e) || a.isBlob(e) ? e : a.isArrayBufferView(e) ? e.buffer : a.isURLSearchParams(e) ? (c(t, "application/x-www-form-urlencoded;charset=utf-8"), e.toString()) : a.isObject(e) ? (c(t, "application/json;charset=utf-8"), (0, i.default)(e)) : e }],
                transformResponse: [function(e) {
                    if ("string" == typeof e) try { e = JSON.parse(e) } catch (e) {}
                    return e
                }],
                timeout: 0,
                xsrfCookieName: "XSRF-TOKEN",
                xsrfHeaderName: "X-XSRF-TOKEN",
                maxContentLength: -1,
                validateStatus: function(e) { return e >= 200 && e < 300 }
            };
            l.headers = { common: { Accept: "application/json, text/plain, */*" } }, a.forEach(["delete", "get", "head"], function(e) { l.headers[e] = {} }), a.forEach(["post", "put", "patch"], function(e) { l.headers[e] = a.merge(s) }), e.exports = l
        }).call(t, n(38))
    }, function(e, t) {
        var n;
        n = function() { return this }();
        try { n = n || Function("return this")() || (0, eval)("this") } catch (e) { "object" == typeof window && (n = window) }
        e.exports = n
    }, function(e, t, n) { e.exports = !n(10) && !n(19)(function() { return 7 != Object.defineProperty(n(39)("div"), "a", { get: function() { return 7 } }).a }) }, function(e, t, n) {
        "use strict";
        var r = f(n(9)),
            o = f(n(56)),
            i = f(n(27)),
            a = f(n(4)),
            u = f(n(36)),
            s = f(n(12)),
            c = f(n(13));

        function f(e) { return e && e.__esModule ? e : { default: e } }
        var l = n(1),
            p = n(18),
            d = n(8),
            h = d.isObject,
            v = d.isString,
            y = d.isNumber,
            m = d.isUndefined,
            g = d.isArray,
            w = n(11),
            b = n(79),
            _ = function() {
                function e(t) {
                    (0, s.default)(this, e), this.tableName = l._config.parameters.QUERY + "/" + t, this.className = t, this.init(), this.addArray = {}, this.setData = {}
                }
                return (0, c.default)(e, [{ key: "init", value: function() { this.queryData = {}, this.location = {}, this.andData = {}, this.orData = {}, this.stat = {}, this.limitNum = 100, this.skipNum = 0, this.includes = "", this.queryReilation = {}, this.orders = null, this.keys = null } }, {
                    key: "get",
                    value: function(e) {
                        var t = this;
                        if (!v(e)) throw new w(415);
                        var n = {},
                            r = {},
                            o = {},
                            i = {},
                            s = function(e, t) {
                                if (!v(e) || !g(t)) throw new w(415);
                                i[e] = { __op: "Add", objects: t }
                            },
                            c = function(e, t) {
                                if (!v(e) || !g(t)) throw new w(415);
                                i[e] = { __op: "AddUnique", objects: t }
                            },
                            f = function(e, t) {
                                if (!v(e) || !g(t)) throw new w(415);
                                i[e] = { __op: "Remove", objects: t }
                            },
                            l = function(e) {
                                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
                                if (!v(e) || !y(t)) throw new w(415);
                                r[e] = { __op: "Increment", amount: t }
                            },
                            d = function(t) {
                                if (!v(e)) throw new w(415);
                                o[t] = { __op: "Delete" }
                            },
                            h = function(e, t) {
                                if (!v(e) || m(t)) throw new w(415);
                                var r = t.filename,
                                    o = t.cdn,
                                    i = t.url;
                                m(r) || m(o) || m(i) ? n[e] = t : n[e] = { __type: "File", group: o, filename: r, url: i }
                            },
                            _ = function() {
                                var s = (0, u.default)(o, n, r, i);
                                return "_User" === t.className ? new a.default(function(n, r) {
                                    p(t.tableName + "/" + e, "put", s).then(function(e) {
                                        var r = t.current(),
                                            o = (0, u.default)(r, s);
                                        b.save("bmob", o), n(e)
                                    }).catch(function(e) { r(e) })
                                }) : p(t.tableName + "/" + e, "put", s)
                            },
                            S = {};
                        return "" !== this.includes && (S.include = this.includes), new a.default(function(n, r) { p(t.tableName + "/" + e, "get", S).then(function(r) { Object.defineProperty(r, "set", { value: h }), Object.defineProperty(r, "unset", { value: d }), Object.defineProperty(r, "save", { value: _ }), Object.defineProperty(r, "increment", { value: l }), Object.defineProperty(r, "add", { value: s }), Object.defineProperty(r, "remove", { value: f }), Object.defineProperty(r, "addUnique", { value: c }), Object.defineProperty(r, "destroy", { value: function() { return t.destroy(e) } }), n(r) }).catch(function(e) { r(e) }) })
                    }
                }, { key: "destroy", value: function(e) { if (!v(e)) throw new w(415); return p(this.tableName + "/" + e, "delete") } }, {
                    key: "set",
                    value: function(e, t) {
                        if (!v(e) || m(t)) throw new w(415, e + "字段参数,类型不正确");
                        var n = t.filename,
                            r = t.cdn,
                            o = t.url;
                        m(n) || m(r) || m(o) ? this.setData[e] = t : this.setData[e] = { __type: "File", group: r, filename: n, url: o }
                    }
                }, {
                    key: "add",
                    value: function(e, t) {
                        if (!v(e) || !g(t)) throw new w(415);
                        this.addArray[e] = { __op: "Add", objects: t }
                    }
                }, {
                    key: "addUnique",
                    value: function(e, t) {
                        if (!v(e) || !g(t)) throw new w(415);
                        this.addArray[e] = { __op: "AddUnique", objects: t }
                    }
                }, { key: "current", value: function() { if ("hap" !== l.type) { var e = b.fetch("bmob"); return "object" === (void 0 === e ? "undefined" : (0, i.default)(e)) ? e : JSON.parse(e) } return new a.default(function(e, t) { return b.fetch("bmob").then(function(t) { e(t) }).catch(function(e) { t(e) }) }) } }, {
                    key: "updateStorage",
                    value: function(e) {
                        var t = this;
                        if (!v(e)) throw new w(415);
                        return new a.default(function(n, r) {
                            var o = t.current();
                            if (!o) throw new w(415);
                            t.get(e).then(function(e) {
                                var t = (0, u.default)(o, e);
                                b.save("bmob", t), n(e)
                            }).catch(function(e) { console.log(e), r(e) })
                        })
                    }
                }, {
                    key: "save",
                    value: function() {
                        var e = this,
                            t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        if (!h(t)) throw new w(415);
                        var n = this.setData.id ? "PUT" : "POST",
                            r = this.setData.id ? this.setData.id : "";
                        delete this.setData.id;
                        var o = (0, u.default)(t, this.setData, this.addArray);
                        return new a.default(function(t, i) {
                            p(e.tableName + "/" + r, n, o).then(function(n) {
                                if (e.addArray = {}, e.setData = {}, "_User" === e.className) {
                                    var r = e.current(),
                                        i = (0, u.default)(r, o);
                                    b.save("bmob", i)
                                }
                                t(n)
                            }).catch(function(e) { i(e) })
                        })
                    }
                }, {
                    key: "saveAll",
                    value: function(e) {
                        var t = this;
                        if (!g(e)) throw new w(415);
                        if (e.length < 1) throw new w(416);
                        var n = void 0,
                            r = void 0,
                            o = "put",
                            i = [];
                        e.map(function(e) { return "/undefined" === (n = "/" + e.objectId) && (n = "", o = "post"), r = { method: o, path: "" + t.tableName + n, body: e.setData }, i.push(r), e });
                        var a = { requests: i },
                            u = l._config.parameters.BATCH;
                        return p(u, "POST", a)
                    }
                }, {
                    key: "withinKilometers",
                    value: function(e, t) {
                        var n = t.latitude,
                            r = t.longitude,
                            o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100,
                            i = {};
                        return i[e] = { $nearSphere: { __type: "GeoPoint", latitude: n, longitude: r }, $maxDistanceInKilometers: o }, this.location = i, i
                    }
                }, {
                    key: "withinGeoBox",
                    value: function(e, t, n) {
                        var r = t.latitude,
                            o = t.longitude,
                            i = {};
                        return i[e] = { $within: { $box: [{ __type: "GeoPoint", latitude: r, longitude: o }, { __type: "GeoPoint", latitude: n.latitude, longitude: n.longitude }] } }, this.location = i, i
                    }
                }, { key: "statTo", value: function(e, t) { if (!v(e)) throw new w(415); return this.stat[e] = t, this.stat } }, {
                    key: "equalTo",
                    value: function(e, t, n) {
                        if (!v(e)) throw new w(415);
                        var r = function(e, t, n) {
                            var r = {},
                                o = null;
                            switch (o = "createdAt" === e || "updateAt" === e ? { __type: "Date", iso: n } : n, t) {
                                case "==":
                                case "===":
                                    r[e] = o;
                                    break;
                                case "!=":
                                    r[e] = { $ne: o };
                                    break;
                                case "<":
                                    r[e] = { $lt: o };
                                    break;
                                case "<=":
                                    r[e] = { $lte: o };
                                    break;
                                case ">":
                                    r[e] = { $gt: o };
                                    break;
                                case ">=":
                                    r[e] = { $gte: o };
                                    break;
                                default:
                                    throw new w(415)
                            }
                            return r
                        }(e, t, n);
                        return (0, o.default)(this.queryData).length ? m(this.queryData.$and) ? this.queryData = { $and: [this.queryData, r] } : this.queryData.$and.push(r) : this.queryData = r, r
                    }
                }, { key: "containedIn", value: function(e, t) { if (!v(e) || !g(t)) throw new w(415); return S.call(this, e, "$in", t) } }, { key: "notContainedIn", value: function(e, t) { if (!v(e) || !g(t)) throw new w(415); return S.call(this, e, "$nin", t) } }, { key: "exists", value: function(e) { if (!v(e)) throw new w(415); return S.call(this, e, "$exists", !0) } }, { key: "doesNotExist", value: function(e) { if (!v(e)) throw new w(415); return S.call(this, e, "$exists", !1) } }, {
                    key: "or",
                    value: function() {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        t.map(function(e, t) { if (!h(e)) throw new w(415) });
                        var o = this.queryData.$and;
                        if (!m(o)) {
                            for (var i = 0; i < o.length; i++)
                                for (var a = 0; a < t.length; a++)(0, r.default)(o[i]) === (0, r.default)(t[a]) && this.queryData.$and.splice(i, 1);
                            o.length || delete this.queryData.$and
                        }
                        this.orData = { $or: t }
                    }
                }, {
                    key: "and",
                    value: function() {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        t.map(function(e, t) { if (!h(e)) throw new w(415) }), this.andData = { $and: t }
                    }
                }, {
                    key: "limit",
                    value: function(e) {
                        if (!y(e)) throw new w(415);
                        e > 1e3 && (e = 1e3), this.limitNum = e
                    }
                }, {
                    key: "skip",
                    value: function(e) {
                        if (!y(e)) throw new w(415);
                        this.skipNum = e
                    }
                }, {
                    key: "order",
                    value: function() {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        t.map(function(e) { if (!v(e)) throw new w(415) }), this.orders = t.join(",")
                    }
                }, {
                    key: "include",
                    value: function() {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        t.map(function(e) { if (!v(e)) throw new w(415) }), this.includes = t.join(",")
                    }
                }, {
                    key: "select",
                    value: function() {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        t.map(function(e) { if (!v(e)) throw new w(415) }), this.keys = t.join(",")
                    }
                }, {
                    key: "field",
                    value: function(e, t) {
                        if (!v(e) || !v(t)) throw new w(415);
                        this.queryReilation.where = { $relatedTo: { object: { __type: "Pointer", className: this.className, objectId: t }, key: e } }
                    }
                }, {
                    key: "relation",
                    value: function(e) {
                        if (!v(e)) throw new w(415);
                        e = "_User" === e ? "users" : "classes/" + e, this.queryReilation.count = 1;
                        var t = (0, u.default)(this.getParams(), this.queryReilation);
                        return new a.default(function(n, r) { p("/1/" + e, "get", t).then(function(e) { n(e) }).catch(function(e) { r(e) }) })
                    }
                }, { key: "getParams", value: function() { var e = {}; for (var t in (0, o.default)(this.queryData).length && (e.where = this.queryData), (0, o.default)(this.location).length && (e.where = (0, u.default)(this.location, this.queryData)), (0, o.default)(this.andData).length && (e.where = (0, u.default)(this.andData, this.queryData)), (0, o.default)(this.orData).length && (e.where = (0, u.default)(this.orData, this.queryData)), e.limit = this.limitNum, e.skip = this.skipNum, e.include = this.includes, e.order = this.orders, e.keys = this.keys, (0, o.default)(this.stat).length && (e = (0, u.default)(e, this.stat)), e)(e.hasOwnProperty(t) && null === e[t] || 0 === e[t] || "" === e[t]) && delete e[t]; return e } }, {
                    key: "find",
                    value: function() {
                        var e = this,
                            t = {},
                            n = {},
                            r = this.getParams(),
                            o = function(e, n) {
                                if (!e || m(n)) throw new w(415);
                                t[e] = n
                            },
                            i = function() {
                                var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "updata";
                                if (console.log(r), n.length < 1) throw new w(416);
                                var o = void 0,
                                    i = void 0,
                                    a = "put",
                                    u = [];
                                n.map(function(n) { return "/undefined" === (o = "/" + n.objectId) && (o = "", a = "post"), i = { method: a, path: "" + e.tableName + o, body: t }, "delete" === r && (i = { method: "DELETE", path: "" + e.tableName + o }), u.push(i), n });
                                var s = { requests: u },
                                    c = l._config.parameters.BATCH;
                                return p(c, "POST", s)
                            };
                        return new a.default(function(t, a) {
                            p("" + e.tableName, "get", r).then(function(a) {
                                var u = a.results;
                                r.hasOwnProperty("count") && (u = a), e.init(), Object.defineProperty(u, "set", { value: o }), Object.defineProperty(u, "saveAll", { value: function() { return i() } }), Object.defineProperty(u, "destroyAll", { value: function() { return i("delete") } }), n = u, t(u)
                            }).catch(function(e) { a(e) })
                        })
                    }
                }, {
                    key: "count",
                    value: function() {
                        var e = this,
                            t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                            n = {};
                        return (0, o.default)(this.queryData).length && (n.where = this.queryData), (0, o.default)(this.andData).length && (n.where = (0, u.default)(this.andData, this.queryData)), (0, o.default)(this.orData).length && (n.where = (0, u.default)(this.orData, this.queryData)), n.count = 1, n.limit = t, new a.default(function(t, r) {
                            p(e.tableName, "get", n).then(function(e) {
                                var n = e.count;
                                t(n)
                            }).catch(function(e) { r(e) })
                        })
                    }
                }]), e
            }();

        function S(e, t, n) {
            var r = {},
                i = {};
            i[t] = n, r[e] = i;
            var a = r;
            return (0, o.default)(this.queryData).length ? m(this.queryData.$and) ? this.queryData = { $and: [this.queryData, a] } : this.queryData.$and.push(a) : this.queryData = a, a
        }
        e.exports = _
    }, function(e, t, n) { e.exports = { default: n(91), __esModule: !0 } }, function(e, t, n) {
        var r = n(17),
            o = n(20),
            i = n(93)(!1),
            a = n(43)("IE_PROTO");
        e.exports = function(e, t) {
            var n, u = o(e),
                s = 0,
                c = [];
            for (n in u) n != a && r(u, n) && c.push(n);
            for (; t.length > s;) r(u, n = t[s++]) && (~i(c, n) || c.push(n));
            return c
        }
    }, function(e, t, n) {
        var r = n(25);
        e.exports = Object("z").propertyIsEnumerable(0) ? Object : function(e) { return "String" == r(e) ? e.split("") : Object(e) }
    }, function(e, t, n) {
        var r = n(42),
            o = Math.min;
        e.exports = function(e) { return e > 0 ? o(r(e), 9007199254740991) : 0 }
    }, function(e, t, n) {
        var r = n(6),
            o = n(0),
            i = n(19);
        e.exports = function(e, t) {
            var n = (o.Object || {})[e] || Object[e],
                a = {};
            a[e] = t(n), r(r.S + r.F * i(function() { n(1) }), "Object", a)
        }
    }, function(e, t, n) {
        "use strict";
        var r = n(26),
            o = n(6),
            i = n(62),
            a = n(16),
            u = n(21),
            s = n(98),
            c = n(33),
            f = n(64),
            l = n(3)("iterator"),
            p = !([].keys && "next" in [].keys()),
            d = function() { return this };
        e.exports = function(e, t, n, h, v, y, m) {
            s(n, t, h);
            var g, w, b, _ = function(e) {
                    if (!p && e in T) return T[e];
                    switch (e) {
                        case "keys":
                        case "values":
                            return function() { return new n(this, e) }
                    }
                    return function() { return new n(this, e) }
                },
                S = t + " Iterator",
                x = "values" == v,
                E = !1,
                T = e.prototype,
                k = T[l] || T["@@iterator"] || v && T[v],
                O = k || _(v),
                j = v ? x ? _("entries") : O : void 0,
                A = "Array" == t && T.entries || k;
            if (A && (b = f(A.call(new e))) !== Object.prototype && b.next && (c(b, S, !0), r || "function" == typeof b[l] || a(b, l, d)), x && k && "values" !== k.name && (E = !0, O = function() { return k.call(this) }), r && !m || !p && !E && T[l] || a(T, l, O), u[t] = O, u[S] = d, v)
                if (g = { values: x ? O : _("values"), keys: y ? O : _("keys"), entries: j }, m)
                    for (w in g) w in T || i(T, w, g[w]);
                else o(o.P + o.F * (p || E), t, g);
            return g
        }
    }, function(e, t, n) { e.exports = n(16) }, function(e, t, n) {
        var r = n(2).document;
        e.exports = r && r.documentElement
    }, function(e, t, n) {
        var r = n(17),
            o = n(23),
            i = n(43)("IE_PROTO"),
            a = Object.prototype;
        e.exports = Object.getPrototypeOf || function(e) { return e = o(e), r(e, i) ? e[i] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? a : null }
    }, function(e, t, n) {
        var r = n(57),
            o = n(45).concat("length", "prototype");
        t.f = Object.getOwnPropertyNames || function(e) { return r(e, o) }
    }, function(e, t, n) {
        var r = n(35),
            o = n(30),
            i = n(20),
            a = n(40),
            u = n(17),
            s = n(54),
            c = Object.getOwnPropertyDescriptor;
        t.f = n(10) ? c : function(e, t) {
            if (e = i(e), t = a(t, !0), s) try { return c(e, t) } catch (e) {}
            if (u(e, t)) return o(!r.f.call(e, t), e[t])
        }
    }, function(e, t) {}, function(e, t, n) {
        var r = n(50),
            o = n(3)("iterator"),
            i = n(21);
        e.exports = n(0).getIteratorMethod = function(e) { if (void 0 != e) return e[o] || e["@@iterator"] || i[r(e)] }
    }, function(e, t, n) {
        var r = n(7),
            o = n(29),
            i = n(3)("species");
        e.exports = function(e, t) { var n, a = r(e).constructor; return void 0 === a || void 0 == (n = r(a)[i]) ? t : o(n) }
    }, function(e, t, n) {
        var r, o, i, a = n(22),
            u = n(118),
            s = n(63),
            c = n(39),
            f = n(2),
            l = f.process,
            p = f.setImmediate,
            d = f.clearImmediate,
            h = f.MessageChannel,
            v = f.Dispatch,
            y = 0,
            m = {},
            g = function() {
                var e = +this;
                if (m.hasOwnProperty(e)) {
                    var t = m[e];
                    delete m[e], t()
                }
            },
            w = function(e) { g.call(e.data) };
        p && d || (p = function(e) { for (var t = [], n = 1; arguments.length > n;) t.push(arguments[n++]); return m[++y] = function() { u("function" == typeof e ? e : Function(e), t) }, r(y), y }, d = function(e) { delete m[e] }, "process" == n(25)(l) ? r = function(e) { l.nextTick(a(g, e, 1)) } : v && v.now ? r = function(e) { v.now(a(g, e, 1)) } : h ? (i = (o = new h).port2, o.port1.onmessage = w, r = a(i.postMessage, i, 1)) : f.addEventListener && "function" == typeof postMessage && !f.importScripts ? (r = function(e) { f.postMessage(e + "", "*") }, f.addEventListener("message", w, !1)) : r = "onreadystatechange" in c("script") ? function(e) { s.appendChild(c("script")).onreadystatechange = function() { s.removeChild(this), g.call(e) } } : function(e) { setTimeout(a(g, e, 1), 0) }), e.exports = { set: p, clear: d }
    }, function(e, t) { e.exports = function(e) { try { return { e: !1, v: e() } } catch (e) { return { e: !0, v: e } } } }, function(e, t, n) {
        var r = n(7),
            o = n(15),
            i = n(51);
        e.exports = function(e, t) { if (r(e), o(t) && t.constructor === e) return t; var n = i.f(e); return (0, n.resolve)(t), n.promise }
    }, function(e, t, n) {
        "use strict";
        var r = i(n(4)),
            o = i(n(9));

        function i(e) { return e && e.__esModule ? e : { default: e } }
        var a = n(129),
            u = n(1),
            s = n(37);
        e.exports = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "get",
                i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            return new r.default(function(r, c) {
                void 0 === u.User && (u = n(1));
                var f = function(e, t, n, r) {
                        var i = "wechatApp";
                        "nodejs" === u.type && (i = "cloudcode");
                        var a = Math.round((new Date).getTime() / 1e3),
                            c = "get" === n || "delete" === n ? "" : (0, o.default)(r),
                            f = u.utils.randomString(),
                            l = { "content-type": "application/json", "X-Bmob-SDK-Type": i, "X-Bmob-Safe-Sign": s.utf8MD5(t + a + e.securityCode + f + c + e.serverVersion), "X-Bmob-Safe-Timestamp": a, "X-Bmob-Noncestr-Key": f, "X-Bmob-SDK-Version": e.serverVersion, "X-Bmob-Secret-Key": e.secretKey };
                        return e.applicationMasterKey && (l["X-Bmob-Master-Key"] = e.applicationMasterKey), l
                    }(u._config, e, t, i),
                    l = u.User.current();
                l && (f["X-Bmob-Session-Token"] = l.sessionToken);
                var p = a.create({ baseURL: u._config.host, headers: f, validateStatus: function(e) { return e < 500 } }),
                    d = { url: e, method: t };
                "get" === d.method ? d.params = i : d.data = i, !0 === u._config.deBug && (console.log("host:", u._config.host), console.log("parma:", i)), p(d).then(function(e) {
                    var t = e.data;
                    (t.code && t.error || t.error) && c(t), r(t)
                }).catch(function(e) { c(e) })
            })
        }
    }, function(e, t, n) {
        "use strict";
        e.exports = function(e, t) { return function() { for (var n = new Array(arguments.length), r = 0; r < n.length; r++) n[r] = arguments[r]; return e.apply(t, n) } }
    }, function(e, t, n) {
        "use strict";
        (function(t) {
            var r, o = n(4),
                i = (r = o) && r.__esModule ? r : { default: r };
            var a = n(5),
                u = n(133),
                s = n(135),
                c = n(136),
                f = n(137),
                l = n(76),
                p = "undefined" != typeof window && window.btoa && window.btoa.bind(window) || n(138);
            e.exports = function(e) {
                return new i.default(function(r, o) {
                    var i = e.data,
                        d = e.headers;
                    a.isFormData(i) && delete d["Content-Type"];
                    var h = new XMLHttpRequest,
                        v = "onreadystatechange",
                        y = !1;
                    if ("test" === t.env.NODE_ENV || "undefined" == typeof window || !window.XDomainRequest || "withCredentials" in h || f(e.url) || (h = new window.XDomainRequest, v = "onload", y = !0, h.onprogress = function() {}, h.ontimeout = function() {}), e.auth) {
                        var m = e.auth.username || "",
                            g = e.auth.password || "";
                        d.Authorization = "Basic " + p(m + ":" + g)
                    }
                    if (h.open(e.method.toUpperCase(), s(e.url, e.params, e.paramsSerializer), !0), h.timeout = e.timeout, h[v] = function() {
                            if (h && (4 === h.readyState || y) && (0 !== h.status || h.responseURL && 0 === h.responseURL.indexOf("file:"))) {
                                var t = "getAllResponseHeaders" in h ? c(h.getAllResponseHeaders()) : null,
                                    n = { data: e.responseType && "text" !== e.responseType ? h.response : h.responseText, status: 1223 === h.status ? 204 : h.status, statusText: 1223 === h.status ? "No Content" : h.statusText, headers: t, config: e, request: h };
                                u(r, o, n), h = null
                            }
                        }, h.onerror = function() { o(l("Network Error", e, null, h)), h = null }, h.ontimeout = function() { o(l("timeout of " + e.timeout + "ms exceeded", e, "ECONNABORTED", h)), h = null }, a.isStandardBrowserEnv()) {
                        var w = n(139),
                            b = (e.withCredentials || f(e.url)) && e.xsrfCookieName ? w.read(e.xsrfCookieName) : void 0;
                        b && (d[e.xsrfHeaderName] = b)
                    }
                    if ("setRequestHeader" in h && a.forEach(d, function(e, t) { void 0 === i && "content-type" === t.toLowerCase() ? delete d[t] : h.setRequestHeader(t, e) }), e.withCredentials && (h.withCredentials = !0), e.responseType) try { h.responseType = e.responseType } catch (t) { if ("json" !== e.responseType) throw t }
                    "function" == typeof e.onDownloadProgress && h.addEventListener("progress", e.onDownloadProgress), "function" == typeof e.onUploadProgress && h.upload && h.upload.addEventListener("progress", e.onUploadProgress), e.cancelToken && e.cancelToken.promise.then(function(e) { h && (h.abort(), o(e), h = null) }), void 0 === i && (i = null), h.send(i)
                })
            }
        }).call(t, n(38))
    }, function(e, t, n) {
        "use strict";
        var r = n(134);
        e.exports = function(e, t, n, o, i) { var a = new Error(e); return r(a, t, n, o, i) }
    }, function(e, t, n) {
        "use strict";
        e.exports = function(e) { return !(!e || !e.__CANCEL__) }
    }, function(e, t, n) {
        "use strict";

        function r(e) { this.message = e }
        r.prototype.toString = function() { return "Cancel" + (this.message ? ": " + this.message : "") }, r.prototype.__CANCEL__ = !0, e.exports = r
    }, function(e, t, n) {
        "use strict";
        var r = void 0,
            o = n(28).getAppType();
        "h5" === o ? r = n(149) : "wx" === o ? r = n(150) : "hap" === o ? r = n(151) : "nodejs" === o && (r = n(152)), e.exports = r
    }, function(e, t, n) { e.exports = { default: n(167), __esModule: !0 } }, function(e, t, n) {
        "use strict";
        (function(t) {
            var r = n(1),
                o = n(85),
                i = n(89),
                a = n(55),
                u = n(153),
                s = n(166),
                c = n(169),
                f = n(170),
                l = n(175),
                p = l.generateCode,
                d = l.getAccessToken,
                h = l.sendWeAppMessage,
                v = l.refund,
                y = l.notifyMsg,
                m = l.functions,
                g = l.timestamp,
                w = l.requestPasswordReset,
                b = l.resetPasswordBySmsCode,
                _ = l.updateUserPassword,
                S = l.geoPoint,
                x = l.checkMsg,
                E = l.push,
                T = n(176),
                k = T.requestSmsCode,
                O = T.verifySmsCode;
            r.GeoPoint = S, r.generateCode = p, r.getAccessToken = d, r.sendWeAppMessage = h, r.refund = v, r.checkMsg = x, r.notifyMsg = y, r.requestSmsCode = k, r.verifySmsCode = O, r.run = r.functions = m, r.timestamp = g, r.requestPasswordReset = w, r.resetPasswordBySmsCode = b, r.updateUserPassword = _, r.push = E, r.Pay = new c, r.User = new u, r.Socket = function(e) { return new f(e) }, r.Query = function(e) { return new a(e) }, r.File = function(e, t) { return new s(e, t) }, r.request = n(18), r.type = r.utils.getAppType(), r.Pointer = function(e) { return new o(e) }, r.Relation = function(e) { return new i(e) }, "wx" === r.type ? "undefined" != typeof tt ? tt.Bmob = r : wx.Bmob = r : "h5" === r.type ? window.Bmob = r : "hap" === r.type ? t.Bmob = r : "nodejs" === r.type && (t.Bmob = r), e.exports = r
        }).call(t, n(53))
    }, function(e, t, n) {
        "use strict";
        var r = void 0;
        try { r = "v" + n(83).version } catch (e) { r = "v1.0.0" }
        e.exports = { host: "https://api.bmobcloud.com", secretKey: "", securityCode: "", applicationMasterKey: "", parameters: { GENERATECODE: "/1/wechatApp/qr/generatecode", GETACCESSTOKEN: "/1/wechatApp/getAccessToken", SENDWEAPPMESSAGE: "/1/wechatApp/SendWeAppMessage", NOTIFYMSG: "/1/wechatApp/notifyMsg", REFUND: "/1/pay/refund", REQUESTSMSCODE: "/1/requestSmsCode", VERIFYSMSCODE: "/1/verifySmsCode", FUNCTIONS: "/1/functions", REQUESTPASSWORDRESET: "/1/requestPasswordReset", RESETPASSWORDBYSMSCODE: "/1/resetPasswordBySmsCode", UPDATEUSERPASSWORD: "/1/updateUserPassword", PUSH: "/1/push", FILES: "/2/files", FILESCHECK: "/1/wechatApp/checkImg", DELFILES: "/2/cdnBatchDelete", TIMESTAMP: "/1/timestamp", LOGIN: "/1/login", REGISTER: "/1/users", REQUEST_EMAIL_VERIFY: "/1/requestEmailVerify", USERS: "/1/users", PAY: "/1/pay", WECHAT_APP: "/1/wechatApp/", BATCH: "/1/batch", CHECK_MSG: "/1/wechatApp/checkMsg", DECRYPTION: "/1/wechatApp/decryption", QUERY: "/1/classes" }, version: r, serverVersion: 10, deBug: !1, type: 3 }
    }, function(e, t) { e.exports = { name: "hydrogen-js-sdk", version: "2.2.3", description: "Bmob SDK", main: "./index.js", typings: "./index.d.ts", scripts: { test: 'echo "Error: no test specified" && exit 1', build: "webpack --config config/prod.env.js", watch: "webpack --watch --config config/prod.env.js", dev: "webpack-dev-server --config config/dev.env.js" }, repository: { type: "git", url: "git+https://github.com/bmob/hydrogen-js-sdk.git" }, author: "Bmob", license: "ISC", bugs: { url: "https://github.com/bmob/hydrogen-js-sdk/issues" }, homepage: "https://github.com/bmob/hydrogen-js-sdk#readme", dependencies: { "babel-runtime": "^6.26.0", "node.extend": "^2.0.0", webpack: "^3.12.0" }, devDependencies: { "babel-core": "^6.26.3", "babel-loader": "^7.1.5", "babel-plugin-transform-runtime": "^6.23.0", "babel-preset-es2015": "^6.24.1", "clean-webpack-plugin": "^0.1.19", eslint: "^4.19.1", "eslint-config-standard": "^11.0.0", "eslint-friendly-formatter": "^4.0.1", "eslint-loader": "^2.0.0", "eslint-plugin-import": "^2.12.0", "eslint-plugin-node": "^6.0.1", "eslint-plugin-promise": "^3.7.0", "eslint-plugin-standard": "^3.1.0", "html-webpack-plugin": "^2.30.1", "uglifyjs-webpack-plugin": "^1.2.5", "webpack-dev-server": "^2.11.2" }, directories: { doc: "docs" }, keywords: ["Bmob"] } }, function(e, t, n) {
        "use strict";
        e.exports = { host: "https://apitest.bmob.cn", applicationId: "", applicationKey: "", parameters: { GENERATECODE: "/1/wechatApp/qr/generatecode", GETACCESSTOKEN: "/1/wechatApp/getAccessToken", SENDWEAPPMESSAGE: "/1/wechatApp/SendWeAppMessage", NOTIFYMSG: "/1/wechatApp/notifyMsg", REFUND: "/1/pay/refund", REQUESTSMSCODE: "/1/requestSmsCode", VERIFYSMSCODE: "/1/verifySmsCode", FUNCTIONS: "/1/functions", REQUESTPASSWORDRESET: "/1/requestPasswordReset", RESETPASSWORDBYSMSCODE: "/1/resetPasswordBySmsCode", UPDATEUSERPASSWORD: "/1/updateUserPassword", PUSH: "/1/push", FILES: "/2/files", FILESCHECK: "/1/wechatApp/checkImg", DELFILES: "/2/cdnBatchDelete", TIMESTAMP: "/1/timestamp", LOGIN: "/1/login", REGISTER: "/1/users", REQUEST_EMAIL_VERIFY: "/1/requestEmailVerify", USERS: "/1/users", PAY: "/1/pay", WECHAT_APP: "/1/wechatApp/", BATCH: "/1/batch", CHECK_MSG: "/1/wechatApp/checkMsg", DECRYPTION: "/1/wechatApp/decryption", QUERY: "/1/classes" }, version: 1, serverVersion: 10, deBug: !1, type: 1 }
    }, function(e, t, n) {
        "use strict";
        var r = i(n(12)),
            o = i(n(13));

        function i(e) { return e && e.__esModule ? e : { default: e } }
        var a = n(8).isString,
            u = n(11),
            s = function() {
                function e(t) {
                    if ((0, r.default)(this, e), !a(t)) throw new u(415);
                    this.tableName = t
                }
                return (0, o.default)(e, [{ key: "set", value: function(e) { if (!a(e)) throw new u(415); return { __type: "Pointer", className: this.tableName, objectId: e } } }]), e
            }();
        e.exports = s
    }, function(e, t, n) { e.exports = { default: n(87), __esModule: !0 } }, function(e, t, n) {
        n(88);
        var r = n(0).Object;
        e.exports = function(e, t, n) { return r.defineProperty(e, t, n) }
    }, function(e, t, n) {
        var r = n(6);
        r(r.S + r.F * !n(10), "Object", { defineProperty: n(14).f })
    }, function(e, t, n) {
        "use strict";
        var r = i(n(12)),
            o = i(n(13));

        function i(e) { return e && e.__esModule ? e : { default: e } }
        var a = n(8),
            u = a.isString,
            s = a.isArray,
            c = n(11),
            f = function() {
                function e(t) {
                    if ((0, r.default)(this, e), !u(t)) throw new c(415);
                    this.tableName = t
                }
                return (0, o.default)(e, [{ key: "add", value: function(e) { return l.call(this, e, "AddRelation") } }, { key: "remove", value: function(e) { return l.call(this, e, "RemoveRelation") } }]), e
            }();

        function l(e, t) {
            var n = this;
            if (u(e)) return { __op: t, objects: [{ __type: "Pointer", className: this.tableName, objectId: e }] };
            if (s(e)) {
                var r = [];
                return e.map(function(e) {
                    if (!u(e)) throw new c(415);
                    r.push({ __type: "Pointer", className: n.tableName, objectId: e })
                }), { __op: t, objects: r }
            }
            throw new c(415)
        }
        e.exports = f
    }, function(e, t, n) {
        var r = n(0),
            o = r.JSON || (r.JSON = { stringify: JSON.stringify });
        e.exports = function(e) { return o.stringify.apply(o, arguments) }
    }, function(e, t, n) { n(92), e.exports = n(0).Object.keys }, function(e, t, n) {
        var r = n(23),
            o = n(24);
        n(60)("keys", function() { return function(e) { return o(r(e)) } })
    }, function(e, t, n) {
        var r = n(20),
            o = n(59),
            i = n(94);
        e.exports = function(e) {
            return function(t, n, a) {
                var u, s = r(t),
                    c = o(s.length),
                    f = i(a, c);
                if (e && n != n) {
                    for (; c > f;)
                        if ((u = s[f++]) != u) return !0
                } else
                    for (; c > f; f++)
                        if ((e || f in s) && s[f] === n) return e || f || 0; return !e && -1
            }
        }
    }, function(e, t, n) {
        var r = n(42),
            o = Math.max,
            i = Math.min;
        e.exports = function(e, t) { return (e = r(e)) < 0 ? o(e + t, 0) : i(e, t) }
    }, function(e, t, n) { e.exports = { default: n(96), __esModule: !0 } }, function(e, t, n) { n(32), n(34), e.exports = n(47).f("iterator") }, function(e, t, n) {
        var r = n(42),
            o = n(41);
        e.exports = function(e) {
            return function(t, n) {
                var i, a, u = String(o(t)),
                    s = r(n),
                    c = u.length;
                return s < 0 || s >= c ? e ? "" : void 0 : (i = u.charCodeAt(s)) < 55296 || i > 56319 || s + 1 === c || (a = u.charCodeAt(s + 1)) < 56320 || a > 57343 ? e ? u.charAt(s) : i : e ? u.slice(s, s + 2) : a - 56320 + (i - 55296 << 10) + 65536
            }
        }
    }, function(e, t, n) {
        "use strict";
        var r = n(46),
            o = n(30),
            i = n(33),
            a = {};
        n(16)(a, n(3)("iterator"), function() { return this }), e.exports = function(e, t, n) { e.prototype = r(a, { next: o(1, n) }), i(e, t + " Iterator") }
    }, function(e, t, n) {
        var r = n(14),
            o = n(7),
            i = n(24);
        e.exports = n(10) ? Object.defineProperties : function(e, t) { o(e); for (var n, a = i(t), u = a.length, s = 0; u > s;) r.f(e, n = a[s++], t[n]); return e }
    }, function(e, t, n) {
        "use strict";
        var r = n(101),
            o = n(102),
            i = n(21),
            a = n(20);
        e.exports = n(61)(Array, "Array", function(e, t) { this._t = a(e), this._i = 0, this._k = t }, function() {
            var e = this._t,
                t = this._k,
                n = this._i++;
            return !e || n >= e.length ? (this._t = void 0, o(1)) : o(0, "keys" == t ? n : "values" == t ? e[n] : [n, e[n]])
        }, "values"), i.Arguments = i.Array, r("keys"), r("values"), r("entries")
    }, function(e, t) { e.exports = function() {} }, function(e, t) { e.exports = function(e, t) { return { value: t, done: !!e } } }, function(e, t, n) { e.exports = { default: n(104), __esModule: !0 } }, function(e, t, n) { n(105), n(67), n(110), n(111), e.exports = n(0).Symbol }, function(e, t, n) {
        "use strict";
        var r = n(2),
            o = n(17),
            i = n(10),
            a = n(6),
            u = n(62),
            s = n(106).KEY,
            c = n(19),
            f = n(44),
            l = n(33),
            p = n(31),
            d = n(3),
            h = n(47),
            v = n(48),
            y = n(107),
            m = n(108),
            g = n(7),
            w = n(15),
            b = n(23),
            _ = n(20),
            S = n(40),
            x = n(30),
            E = n(46),
            T = n(109),
            k = n(66),
            O = n(49),
            j = n(14),
            A = n(24),
            D = k.f,
            P = j.f,
            M = T.f,
            C = r.Symbol,
            R = r.JSON,
            N = R && R.stringify,
            I = d("_hidden"),
            B = d("toPrimitive"),
            q = {}.propertyIsEnumerable,
            U = f("symbol-registry"),
            L = f("symbols"),
            F = f("op-symbols"),
            K = Object.prototype,
            X = "function" == typeof C && !!O.f,
            G = r.QObject,
            V = !G || !G.prototype || !G.prototype.findChild,
            W = i && c(function() { return 7 != E(P({}, "a", { get: function() { return P(this, "a", { value: 7 }).a } })).a }) ? function(e, t, n) {
                var r = D(K, t);
                r && delete K[t], P(e, t, n), r && e !== K && P(K, t, r)
            } : P,
            H = function(e) { var t = L[e] = E(C.prototype); return t._k = e, t },
            $ = X && "symbol" == typeof C.iterator ? function(e) { return "symbol" == typeof e } : function(e) { return e instanceof C },
            Y = function(e, t, n) { return e === K && Y(F, t, n), g(e), t = S(t, !0), g(n), o(L, t) ? (n.enumerable ? (o(e, I) && e[I][t] && (e[I][t] = !1), n = E(n, { enumerable: x(0, !1) })) : (o(e, I) || P(e, I, x(1, {})), e[I][t] = !0), W(e, t, n)) : P(e, t, n) },
            J = function(e, t) { g(e); for (var n, r = y(t = _(t)), o = 0, i = r.length; i > o;) Y(e, n = r[o++], t[n]); return e },
            Q = function(e) { var t = q.call(this, e = S(e, !0)); return !(this === K && o(L, e) && !o(F, e)) && (!(t || !o(this, e) || !o(L, e) || o(this, I) && this[I][e]) || t) },
            z = function(e, t) { if (e = _(e), t = S(t, !0), e !== K || !o(L, t) || o(F, t)) { var n = D(e, t); return !n || !o(L, t) || o(e, I) && e[I][t] || (n.enumerable = !0), n } },
            Z = function(e) { for (var t, n = M(_(e)), r = [], i = 0; n.length > i;) o(L, t = n[i++]) || t == I || t == s || r.push(t); return r },
            ee = function(e) { for (var t, n = e === K, r = M(n ? F : _(e)), i = [], a = 0; r.length > a;) !o(L, t = r[a++]) || n && !o(K, t) || i.push(L[t]); return i };
        X || (u((C = function() {
            if (this instanceof C) throw TypeError("Symbol is not a constructor!");
            var e = p(arguments.length > 0 ? arguments[0] : void 0),
                t = function(n) { this === K && t.call(F, n), o(this, I) && o(this[I], e) && (this[I][e] = !1), W(this, e, x(1, n)) };
            return i && V && W(K, e, { configurable: !0, set: t }), H(e)
        }).prototype, "toString", function() { return this._k }), k.f = z, j.f = Y, n(65).f = T.f = Z, n(35).f = Q, O.f = ee, i && !n(26) && u(K, "propertyIsEnumerable", Q, !0), h.f = function(e) { return H(d(e)) }), a(a.G + a.W + a.F * !X, { Symbol: C });
        for (var te = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), ne = 0; te.length > ne;) d(te[ne++]);
        for (var re = A(d.store), oe = 0; re.length > oe;) v(re[oe++]);
        a(a.S + a.F * !X, "Symbol", {
            for: function(e) { return o(U, e += "") ? U[e] : U[e] = C(e) },
            keyFor: function(e) {
                if (!$(e)) throw TypeError(e + " is not a symbol!");
                for (var t in U)
                    if (U[t] === e) return t
            },
            useSetter: function() { V = !0 },
            useSimple: function() { V = !1 }
        }), a(a.S + a.F * !X, "Object", { create: function(e, t) { return void 0 === t ? E(e) : J(E(e), t) }, defineProperty: Y, defineProperties: J, getOwnPropertyDescriptor: z, getOwnPropertyNames: Z, getOwnPropertySymbols: ee });
        var ie = c(function() { O.f(1) });
        a(a.S + a.F * ie, "Object", { getOwnPropertySymbols: function(e) { return O.f(b(e)) } }), R && a(a.S + a.F * (!X || c(function() { var e = C(); return "[null]" != N([e]) || "{}" != N({ a: e }) || "{}" != N(Object(e)) })), "JSON", { stringify: function(e) { for (var t, n, r = [e], o = 1; arguments.length > o;) r.push(arguments[o++]); if (n = t = r[1], (w(t) || void 0 !== e) && !$(e)) return m(t) || (t = function(e, t) { if ("function" == typeof n && (t = n.call(this, e, t)), !$(t)) return t }), r[1] = t, N.apply(R, r) } }), C.prototype[B] || n(16)(C.prototype, B, C.prototype.valueOf), l(C, "Symbol"), l(Math, "Math", !0), l(r.JSON, "JSON", !0)
    }, function(e, t, n) {
        var r = n(31)("meta"),
            o = n(15),
            i = n(17),
            a = n(14).f,
            u = 0,
            s = Object.isExtensible || function() { return !0 },
            c = !n(19)(function() { return s(Object.preventExtensions({})) }),
            f = function(e) { a(e, r, { value: { i: "O" + ++u, w: {} } }) },
            l = e.exports = {
                KEY: r,
                NEED: !1,
                fastKey: function(e, t) {
                    if (!o(e)) return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e;
                    if (!i(e, r)) {
                        if (!s(e)) return "F";
                        if (!t) return "E";
                        f(e)
                    }
                    return e[r].i
                },
                getWeak: function(e, t) {
                    if (!i(e, r)) {
                        if (!s(e)) return !0;
                        if (!t) return !1;
                        f(e)
                    }
                    return e[r].w
                },
                onFreeze: function(e) { return c && l.NEED && s(e) && !i(e, r) && f(e), e }
            }
    }, function(e, t, n) {
        var r = n(24),
            o = n(49),
            i = n(35);
        e.exports = function(e) {
            var t = r(e),
                n = o.f;
            if (n)
                for (var a, u = n(e), s = i.f, c = 0; u.length > c;) s.call(e, a = u[c++]) && t.push(a);
            return t
        }
    }, function(e, t, n) {
        var r = n(25);
        e.exports = Array.isArray || function(e) { return "Array" == r(e) }
    }, function(e, t, n) {
        var r = n(20),
            o = n(65).f,
            i = {}.toString,
            a = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
        e.exports.f = function(e) { return a && "[object Window]" == i.call(e) ? function(e) { try { return o(e) } catch (e) { return a.slice() } }(e) : o(r(e)) }
    }, function(e, t, n) { n(48)("asyncIterator") }, function(e, t, n) { n(48)("observable") }, function(e, t, n) { n(67), n(32), n(34), n(113), n(124), n(125), e.exports = n(0).Promise }, function(e, t, n) {
        "use strict";
        var r, o, i, a, u = n(26),
            s = n(2),
            c = n(22),
            f = n(50),
            l = n(6),
            p = n(15),
            d = n(29),
            h = n(114),
            v = n(115),
            y = n(69),
            m = n(70).set,
            g = n(119)(),
            w = n(51),
            b = n(71),
            _ = n(120),
            S = n(72),
            x = s.TypeError,
            E = s.process,
            T = E && E.versions,
            k = T && T.v8 || "",
            O = s.Promise,
            j = "process" == f(E),
            A = function() {},
            D = o = w.f,
            P = !! function() {
                try {
                    var e = O.resolve(1),
                        t = (e.constructor = {})[n(3)("species")] = function(e) { e(A, A) };
                    return (j || "function" == typeof PromiseRejectionEvent) && e.then(A) instanceof t && 0 !== k.indexOf("6.6") && -1 === _.indexOf("Chrome/66")
                } catch (e) {}
            }(),
            M = function(e) { var t; return !(!p(e) || "function" != typeof(t = e.then)) && t },
            C = function(e, t) {
                if (!e._n) {
                    e._n = !0;
                    var n = e._c;
                    g(function() {
                        for (var r = e._v, o = 1 == e._s, i = 0, a = function(t) {
                                var n, i, a, u = o ? t.ok : t.fail,
                                    s = t.resolve,
                                    c = t.reject,
                                    f = t.domain;
                                try { u ? (o || (2 == e._h && I(e), e._h = 1), !0 === u ? n = r : (f && f.enter(), n = u(r), f && (f.exit(), a = !0)), n === t.promise ? c(x("Promise-chain cycle")) : (i = M(n)) ? i.call(n, s, c) : s(n)) : c(r) } catch (e) { f && !a && f.exit(), c(e) }
                            }; n.length > i;) a(n[i++]);
                        e._c = [], e._n = !1, t && !e._h && R(e)
                    })
                }
            },
            R = function(e) {
                m.call(s, function() {
                    var t, n, r, o = e._v,
                        i = N(e);
                    if (i && (t = b(function() { j ? E.emit("unhandledRejection", o, e) : (n = s.onunhandledrejection) ? n({ promise: e, reason: o }) : (r = s.console) && r.error && r.error("Unhandled promise rejection", o) }), e._h = j || N(e) ? 2 : 1), e._a = void 0, i && t.e) throw t.v
                })
            },
            N = function(e) { return 1 !== e._h && 0 === (e._a || e._c).length },
            I = function(e) {
                m.call(s, function() {
                    var t;
                    j ? E.emit("rejectionHandled", e) : (t = s.onrejectionhandled) && t({ promise: e, reason: e._v })
                })
            },
            B = function(e) {
                var t = this;
                t._d || (t._d = !0, (t = t._w || t)._v = e, t._s = 2, t._a || (t._a = t._c.slice()), C(t, !0))
            },
            q = function(e) {
                var t, n = this;
                if (!n._d) {
                    n._d = !0, n = n._w || n;
                    try {
                        if (n === e) throw x("Promise can't be resolved itself");
                        (t = M(e)) ? g(function() { var r = { _w: n, _d: !1 }; try { t.call(e, c(q, r, 1), c(B, r, 1)) } catch (e) { B.call(r, e) } }): (n._v = e, n._s = 1, C(n, !1))
                    } catch (e) { B.call({ _w: n, _d: !1 }, e) }
                }
            };
        P || (O = function(e) { h(this, O, "Promise", "_h"), d(e), r.call(this); try { e(c(q, this, 1), c(B, this, 1)) } catch (e) { B.call(this, e) } }, (r = function(e) { this._c = [], this._a = void 0, this._s = 0, this._d = !1, this._v = void 0, this._h = 0, this._n = !1 }).prototype = n(121)(O.prototype, { then: function(e, t) { var n = D(y(this, O)); return n.ok = "function" != typeof e || e, n.fail = "function" == typeof t && t, n.domain = j ? E.domain : void 0, this._c.push(n), this._a && this._a.push(n), this._s && C(this, !1), n.promise }, catch: function(e) { return this.then(void 0, e) } }), i = function() {
            var e = new r;
            this.promise = e, this.resolve = c(q, e, 1), this.reject = c(B, e, 1)
        }, w.f = D = function(e) { return e === O || e === a ? new i(e) : o(e) }), l(l.G + l.W + l.F * !P, { Promise: O }), n(33)(O, "Promise"), n(122)("Promise"), a = n(0).Promise, l(l.S + l.F * !P, "Promise", { reject: function(e) { var t = D(this); return (0, t.reject)(e), t.promise } }), l(l.S + l.F * (u || !P), "Promise", { resolve: function(e) { return S(u && this === a ? O : this, e) } }), l(l.S + l.F * !(P && n(123)(function(e) { O.all(e).catch(A) })), "Promise", {
            all: function(e) {
                var t = this,
                    n = D(t),
                    r = n.resolve,
                    o = n.reject,
                    i = b(function() {
                        var n = [],
                            i = 0,
                            a = 1;
                        v(e, !1, function(e) {
                            var u = i++,
                                s = !1;
                            n.push(void 0), a++, t.resolve(e).then(function(e) { s || (s = !0, n[u] = e, --a || r(n)) }, o)
                        }), --a || r(n)
                    });
                return i.e && o(i.v), n.promise
            },
            race: function(e) {
                var t = this,
                    n = D(t),
                    r = n.reject,
                    o = b(function() { v(e, !1, function(e) { t.resolve(e).then(n.resolve, r) }) });
                return o.e && r(o.v), n.promise
            }
        })
    }, function(e, t) { e.exports = function(e, t, n, r) { if (!(e instanceof t) || void 0 !== r && r in e) throw TypeError(n + ": incorrect invocation!"); return e } }, function(e, t, n) {
        var r = n(22),
            o = n(116),
            i = n(117),
            a = n(7),
            u = n(59),
            s = n(68),
            c = {},
            f = {};
        (t = e.exports = function(e, t, n, l, p) {
            var d, h, v, y, m = p ? function() { return e } : s(e),
                g = r(n, l, t ? 2 : 1),
                w = 0;
            if ("function" != typeof m) throw TypeError(e + " is not iterable!");
            if (i(m)) {
                for (d = u(e.length); d > w; w++)
                    if ((y = t ? g(a(h = e[w])[0], h[1]) : g(e[w])) === c || y === f) return y
            } else
                for (v = m.call(e); !(h = v.next()).done;)
                    if ((y = o(v, g, h.value, t)) === c || y === f) return y
        }).BREAK = c, t.RETURN = f
    }, function(e, t, n) {
        var r = n(7);
        e.exports = function(e, t, n, o) { try { return o ? t(r(n)[0], n[1]) : t(n) } catch (t) { var i = e.return; throw void 0 !== i && r(i.call(e)), t } }
    }, function(e, t, n) {
        var r = n(21),
            o = n(3)("iterator"),
            i = Array.prototype;
        e.exports = function(e) { return void 0 !== e && (r.Array === e || i[o] === e) }
    }, function(e, t) {
        e.exports = function(e, t, n) {
            var r = void 0 === n;
            switch (t.length) {
                case 0:
                    return r ? e() : e.call(n);
                case 1:
                    return r ? e(t[0]) : e.call(n, t[0]);
                case 2:
                    return r ? e(t[0], t[1]) : e.call(n, t[0], t[1]);
                case 3:
                    return r ? e(t[0], t[1], t[2]) : e.call(n, t[0], t[1], t[2]);
                case 4:
                    return r ? e(t[0], t[1], t[2], t[3]) : e.call(n, t[0], t[1], t[2], t[3])
            }
            return e.apply(n, t)
        }
    }, function(e, t, n) {
        var r = n(2),
            o = n(70).set,
            i = r.MutationObserver || r.WebKitMutationObserver,
            a = r.process,
            u = r.Promise,
            s = "process" == n(25)(a);
        e.exports = function() {
            var e, t, n, c = function() {
                var r, o;
                for (s && (r = a.domain) && r.exit(); e;) { o = e.fn, e = e.next; try { o() } catch (r) { throw e ? n() : t = void 0, r } }
                t = void 0, r && r.enter()
            };
            if (s) n = function() { a.nextTick(c) };
            else if (!i || r.navigator && r.navigator.standalone)
                if (u && u.resolve) {
                    var f = u.resolve(void 0);
                    n = function() { f.then(c) }
                } else n = function() { o.call(r, c) };
            else {
                var l = !0,
                    p = document.createTextNode("");
                new i(c).observe(p, { characterData: !0 }), n = function() { p.data = l = !l }
            }
            return function(r) {
                var o = { fn: r, next: void 0 };
                t && (t.next = o), e || (e = o, n()), t = o
            }
        }
    }, function(e, t, n) {
        var r = n(2).navigator;
        e.exports = r && r.userAgent || ""
    }, function(e, t, n) {
        var r = n(16);
        e.exports = function(e, t, n) { for (var o in t) n && e[o] ? e[o] = t[o] : r(e, o, t[o]); return e }
    }, function(e, t, n) {
        "use strict";
        var r = n(2),
            o = n(0),
            i = n(14),
            a = n(10),
            u = n(3)("species");
        e.exports = function(e) {
            var t = "function" == typeof o[e] ? o[e] : r[e];
            a && t && !t[u] && i.f(t, u, { configurable: !0, get: function() { return this } })
        }
    }, function(e, t, n) {
        var r = n(3)("iterator"),
            o = !1;
        try {
            var i = [7][r]();
            i.return = function() { o = !0 }, Array.from(i, function() { throw 2 })
        } catch (e) {}
        e.exports = function(e, t) {
            if (!t && !o) return !1;
            var n = !1;
            try {
                var i = [7],
                    a = i[r]();
                a.next = function() { return { done: n = !0 } }, i[r] = function() { return a }, e(i)
            } catch (e) {}
            return n
        }
    }, function(e, t, n) {
        "use strict";
        var r = n(6),
            o = n(0),
            i = n(2),
            a = n(69),
            u = n(72);
        r(r.P + r.R, "Promise", {
            finally: function(e) {
                var t = a(this, o.Promise || i.Promise),
                    n = "function" == typeof e;
                return this.then(n ? function(n) { return u(t, e()).then(function() { return n }) } : e, n ? function(n) { return u(t, e()).then(function() { throw n }) } : e)
            }
        })
    }, function(e, t, n) {
        "use strict";
        var r = n(6),
            o = n(51),
            i = n(71);
        r(r.S, "Promise", {
            try: function(e) {
                var t = o.f(this),
                    n = i(e);
                return (n.e ? t.reject : t.resolve)(n.v), t.promise
            }
        })
    }, function(e, t, n) { n(127), e.exports = n(0).Object.assign }, function(e, t, n) {
        var r = n(6);
        r(r.S + r.F, "Object", { assign: n(128) })
    }, function(e, t, n) {
        "use strict";
        var r = n(10),
            o = n(24),
            i = n(49),
            a = n(35),
            u = n(23),
            s = n(58),
            c = Object.assign;
        e.exports = !c || n(19)(function() {
            var e = {},
                t = {},
                n = Symbol(),
                r = "abcdefghijklmnopqrst";
            return e[n] = 7, r.split("").forEach(function(e) { t[e] = e }), 7 != c({}, e)[n] || Object.keys(c({}, t)).join("") != r
        }) ? function(e, t) {
            for (var n = u(e), c = arguments.length, f = 1, l = i.f, p = a.f; c > f;)
                for (var d, h = s(arguments[f++]), v = l ? o(h).concat(l(h)) : o(h), y = v.length, m = 0; y > m;) d = v[m++], r && !p.call(h, d) || (n[d] = h[d]);
            return n
        } : c
    }, function(e, t, n) {
        "use strict";
        var r, o = n(4),
            i = (r = o) && r.__esModule ? r : { default: r };
        var a = n(5),
            u = n(74),
            s = n(131),
            c = n(52);

        function f(e) {
            var t = new s(e),
                n = u(s.prototype.request, t);
            return a.extend(n, s.prototype, t), a.extend(n, t), n
        }
        var l = f(c);
        l.Axios = s, l.create = function(e) { return f(a.merge(c, e)) }, l.Cancel = n(78), l.CancelToken = n(145), l.isCancel = n(77), l.all = function(e) { return i.default.all(e) }, l.spread = n(146), e.exports = l, e.exports.default = l
    }, function(e, t, n) {
        "use strict";
        /*!
         * Determine if an object is a Buffer
         *
         * @author   Feross Aboukhadijeh <https://feross.org>
         * @license  MIT
         */
        function r(e) { return !!e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e) }
        e.exports = function(e) { return null != e && (r(e) || function(e) { return "function" == typeof e.readFloatLE && "function" == typeof e.slice && r(e.slice(0, 0)) }(e) || !!e._isBuffer) }
    }, function(e, t, n) {
        "use strict";
        var r, o = n(4),
            i = (r = o) && r.__esModule ? r : { default: r };
        var a = n(52),
            u = n(5),
            s = n(140),
            c = n(141);

        function f(e) { this.defaults = e, this.interceptors = { request: new s, response: new s } }
        f.prototype.request = function(e) {
            "string" == typeof e && (e = u.merge({ url: arguments[0] }, arguments[1])), (e = u.merge(a, { method: "get" }, this.defaults, e)).method = e.method.toLowerCase();
            var t = [c, void 0],
                n = i.default.resolve(e);
            for (this.interceptors.request.forEach(function(e) { t.unshift(e.fulfilled, e.rejected) }), this.interceptors.response.forEach(function(e) { t.push(e.fulfilled, e.rejected) }); t.length;) n = n.then(t.shift(), t.shift());
            return n
        }, u.forEach(["delete", "get", "head", "options"], function(e) { f.prototype[e] = function(t, n) { return this.request(u.merge(n || {}, { method: e, url: t })) } }), u.forEach(["post", "put", "patch"], function(e) { f.prototype[e] = function(t, n, r) { return this.request(u.merge(r || {}, { method: e, url: t, data: n })) } }), e.exports = f
    }, function(e, t, n) {
        "use strict";
        var r = n(5);
        e.exports = function(e, t) { r.forEach(e, function(n, r) { r !== t && r.toUpperCase() === t.toUpperCase() && (e[t] = n, delete e[r]) }) }
    }, function(e, t, n) {
        "use strict";
        var r = n(76);
        e.exports = function(e, t, n) {
            var o = n.config.validateStatus;
            n.status && o && !o(n.status) ? t(r("Request failed with status code " + n.status, n.config, null, n.request, n)) : e(n)
        }
    }, function(e, t, n) {
        "use strict";
        e.exports = function(e, t, n, r, o) { return e.config = t, n && (e.code = n), e.request = r, e.response = o, e }
    }, function(e, t, n) {
        "use strict";
        var r, o = n(9),
            i = (r = o) && r.__esModule ? r : { default: r };
        var a = n(5);

        function u(e) { return encodeURIComponent(e).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]") }
        e.exports = function(e, t, n) {
            if (!t) return e;
            var r;
            if (n) r = n(t);
            else if (a.isURLSearchParams(t)) r = t.toString();
            else {
                var o = [];
                a.forEach(t, function(e, t) { null !== e && void 0 !== e && (a.isArray(e) ? t += "[]" : e = [e], a.forEach(e, function(e) { a.isDate(e) ? e = e.toISOString() : a.isObject(e) && (e = (0, i.default)(e)), o.push(u(t) + "=" + u(e)) })) }), r = o.join("&")
            }
            return r && (e += (-1 === e.indexOf("?") ? "?" : "&") + r), e
        }
    }, function(e, t, n) {
        "use strict";
        var r = n(5),
            o = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];
        e.exports = function(e) {
            var t, n, i, a = {};
            return e ? (r.forEach(e.split("\n"), function(e) {
                if (i = e.indexOf(":"), t = r.trim(e.substr(0, i)).toLowerCase(), n = r.trim(e.substr(i + 1)), t) {
                    if (a[t] && o.indexOf(t) >= 0) return;
                    a[t] = "set-cookie" === t ? (a[t] ? a[t] : []).concat([n]) : a[t] ? a[t] + ", " + n : n
                }
            }), a) : a
        }
    }, function(e, t, n) {
        "use strict";
        var r = n(5);
        e.exports = r.isStandardBrowserEnv() ? function() {
            var e, t = /(msie|trident)/i.test(navigator.userAgent),
                n = document.createElement("a");

            function o(e) { var r = e; return t && (n.setAttribute("href", r), r = n.href), n.setAttribute("href", r), { href: n.href, protocol: n.protocol ? n.protocol.replace(/:$/, "") : "", host: n.host, search: n.search ? n.search.replace(/^\?/, "") : "", hash: n.hash ? n.hash.replace(/^#/, "") : "", hostname: n.hostname, port: n.port, pathname: "/" === n.pathname.charAt(0) ? n.pathname : "/" + n.pathname } }
            return e = o(window.location.href),
                function(t) { var n = r.isString(t) ? o(t) : t; return n.protocol === e.protocol && n.host === e.host }
        }() : function() { return !0 }
    }, function(e, t, n) {
        "use strict";
        var r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

        function o() { this.message = "String contains an invalid character" }
        o.prototype = new Error, o.prototype.code = 5, o.prototype.name = "InvalidCharacterError", e.exports = function(e) {
            for (var t, n, i = String(e), a = "", u = 0, s = r; i.charAt(0 | u) || (s = "=", u % 1); a += s.charAt(63 & t >> 8 - u % 1 * 8)) {
                if ((n = i.charCodeAt(u += .75)) > 255) throw new o;
                t = t << 8 | n
            }
            return a
        }
    }, function(e, t, n) {
        "use strict";
        var r = n(5);
        e.exports = r.isStandardBrowserEnv() ? {
            write: function(e, t, n, o, i, a) {
                var u = [];
                u.push(e + "=" + encodeURIComponent(t)), r.isNumber(n) && u.push("expires=" + new Date(n).toGMTString()), r.isString(o) && u.push("path=" + o), r.isString(i) && u.push("domain=" + i), !0 === a && u.push("secure"), document.cookie = u.join("; ")
            },
            read: function(e) { var t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)")); return t ? decodeURIComponent(t[3]) : null },
            remove: function(e) { this.write(e, "", Date.now() - 864e5) }
        } : { write: function() {}, read: function() { return null }, remove: function() {} }
    }, function(e, t, n) {
        "use strict";
        var r = n(5);

        function o() { this.handlers = [] }
        o.prototype.use = function(e, t) { return this.handlers.push({ fulfilled: e, rejected: t }), this.handlers.length - 1 }, o.prototype.eject = function(e) { this.handlers[e] && (this.handlers[e] = null) }, o.prototype.forEach = function(e) { r.forEach(this.handlers, function(t) { null !== t && e(t) }) }, e.exports = o
    }, function(e, t, n) {
        "use strict";
        var r, o = n(4),
            i = (r = o) && r.__esModule ? r : { default: r };
        var a = n(5),
            u = n(142),
            s = n(77),
            c = n(52),
            f = n(143),
            l = n(144);

        function p(e) { e.cancelToken && e.cancelToken.throwIfRequested() }
        e.exports = function(e) { return p(e), e.baseURL && !f(e.url) && (e.url = l(e.baseURL, e.url)), e.headers = e.headers || {}, e.data = u(e.data, e.headers, e.transformRequest), e.headers = a.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers || {}), a.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function(t) { delete e.headers[t] }), (e.adapter || c.adapter)(e).then(function(t) { return p(e), t.data = u(t.data, t.headers, e.transformResponse), t }, function(t) { return s(t) || (p(e), t && t.response && (t.response.data = u(t.response.data, t.response.headers, e.transformResponse))), i.default.reject(t) }) }
    }, function(e, t, n) {
        "use strict";
        var r = n(5);
        e.exports = function(e, t, n) { return r.forEach(n, function(n) { e = n(e, t) }), e }
    }, function(e, t, n) {
        "use strict";
        e.exports = function(e) { return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e) }
    }, function(e, t, n) {
        "use strict";
        e.exports = function(e, t) { return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e }
    }, function(e, t, n) {
        "use strict";
        var r, o = n(4),
            i = (r = o) && r.__esModule ? r : { default: r };
        var a = n(78);

        function u(e) {
            if ("function" != typeof e) throw new TypeError("executor must be a function.");
            var t;
            this.promise = new i.default(function(e) { t = e });
            var n = this;
            e(function(e) { n.reason || (n.reason = new a(e), t(n.reason)) })
        }
        u.prototype.throwIfRequested = function() { if (this.reason) throw this.reason }, u.source = function() { var e; return { token: new u(function(t) { e = t }), cancel: e } }, e.exports = u
    }, function(e, t, n) {
        "use strict";
        e.exports = function(e) { return function(t) { return e.apply(null, t) } }
    }, function(e, t, n) {
        "use strict";
        var r = i(n(4)),
            o = i(n(9));

        function i(e) { return e && e.__esModule ? e : { default: e } }
        var a = n(1),
            u = n(37),
            s = "wechatApp";
        "undefined" != typeof tt ? s = "toutiao" : "undefined" != typeof qq && (s = "qqApp");
        e.exports = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "get",
                i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            return new r.default(function(r, c) {
                var f = function(e, t, n, r) {
                    var i = Math.round((new Date).getTime() / 1e3),
                        c = a.utils.randomString(),
                        f = "get" === n || "delete" === n ? "" : (0, o.default)(r),
                        l = u.utf8MD5(t + i + e.securityCode + c + f + e.serverVersion),
                        p = { "content-type": "application/json", "X-Bmob-SDK-Type": s, "X-Bmob-Safe-Sign": l, "X-Bmob-Safe-Timestamp": i, "X-Bmob-Noncestr-Key": c, "X-Bmob-SDK-Version": e.serverVersion, "X-Bmob-Secret-Key": e.secretKey };
                    return e.applicationMasterKey && (p["X-Bmob-Master-Key"] = e.applicationMasterKey), p
                }(a._config, e, t, i);
                void 0 === a.User && (a = n(1));
                var l = a.User.current();
                l && (f["X-Bmob-Session-Token"] = l.sessionToken), !0 === a._config.deBug && (console.log("host:", a._config.host), console.log("parma:", i)), wx.request({
                    url: a._config.host + e,
                    method: t,
                    data: i,
                    header: f,
                    success: function(e) {
                        (e.data.code && e.data.error || e.data.error) && c(e.data), r(e.data)
                    },
                    fail: function(e) { console.log(e), c(e) }
                })
            })
        }
    }, function(e, t, n) {
        "use strict";
        var r = a(n(27)),
            o = a(n(4)),
            i = a(n(9));

        function a(e) { return e && e.__esModule ? e : { default: e } }
        var u = n(1),
            s = n(37);
        e.exports = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "get",
                a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            return new o.default(function(o, c) {
                var f = function(e, t, n, r) {
                    var o = Math.round((new Date).getTime() / 1e3),
                        a = u.utils.randomString(),
                        c = "get" === n || "delete" === n ? "" : (0, i.default)(r),
                        f = { "content-type": "application/json", "X-Bmob-SDK-Type": "wechatApp", "X-Bmob-Safe-Sign": s.utf8md5(t + o + e.securityCode + a + c + e.serverVersion), "X-Bmob-Safe-Timestamp": o, "X-Bmob-Noncestr-Key": a, "X-Bmob-SDK-Version": e.serverVersion, "X-Bmob-Secret-Key": e.secretKey };
                    return e.applicationMasterKey && (f["X-Bmob-Master-Key"] = e.applicationMasterKey), f
                }(u._config, e, t, a);
                void 0 === u.User && (u = n(1));
                var l = u.User.current();
                l && (f["X-Bmob-Session-Token"] = l.sessionToken), "object" === (void 0 === a ? "undefined" : (0, r.default)(a)) && (a = (0, i.default)(a)), "require('@system.fetch')".fetch({
                    url: u._config.host + e,
                    header: f,
                    method: t,
                    data: a,
                    success: function(e) {
                        var t = JSON.parse(e.data);
                        t.code && c(t), o(t)
                    },
                    fail: function(e, t) { console.log("handling fail, code = " + t), c(e) }
                })
            })
        }
    }, function(e, t, n) {
        "use strict";
        var r, o = n(9),
            i = (r = o) && r.__esModule ? r : { default: r };
        var a = n(8).isString,
            u = void 0;
        u = "undefined" != typeof cc ? cc.sys.localStorage : localStorage;
        var s = {
            save: function(e, t) {
                if (!a(e) || !t) throw new Error(415);
                u.setItem(e, (0, i.default)(t))
            },
            fetch: function(e) { if (!a(e)) throw new Error(415); return JSON.parse(u.getItem(e)) || null },
            remove: function(e) {
                if (!a(e)) throw new Error(415);
                u.removeItem(e)
            },
            clear: function() { u.clear() }
        };
        e.exports = s
    }, function(e, t, n) {
        "use strict";
        var r, o = n(9),
            i = (r = o) && r.__esModule ? r : { default: r };
        var a = n(8),
            u = a.isString,
            s = a.isObject,
            c = { save: function(e, t) { if (!u(e) || !t) throw new Error(415); return t = s(t) ? (0, i.default)(t) : t, wx.setStorageSync(e, t) }, fetch: function(e) { if (!u(e)) throw new Error(415); return wx.getStorageSync(e) || null }, remove: function(e) { if (!u(e)) throw new Error(415); return wx.removeStorageSync(e) }, clear: function() { return wx.clearStorageSync() } };
        e.exports = c
    }, function(e, t, n) {
        "use strict";
        var r = i(n(4)),
            o = i(n(9));

        function i(e) { return e && e.__esModule ? e : { default: e } }
        var a = n(8).isString,
            u = "xxrequire('@system.storage')xx",
            s = {
                save: function(e, t) {
                    if (!a(e) || !t) throw new Error(415);
                    u.set({ key: e, value: (0, o.default)(t), success: function(e) { return console.log("handling success"), e }, fail: function(e, t) { console.log("handling fail, code = " + t) } })
                },
                fetch: function(e) { if (!a(e)) throw new Error(415); return new r.default(function(t, n) { return u.get({ key: e, success: function(e) { t(e || null) }, fail: function(e, t) { console.log("handling fail, code = " + t), n(e) } }) }) },
                remove: function(e) {
                    if (!a(e)) throw new Error(415);
                    u.delete({ key: e, success: function(e) { console.log("handling success") }, fail: function(e, t) { console.log("handling fail, code = " + t) } })
                },
                clear: function() { u.clear({ success: function(e) { console.log("handling success") }, fail: function(e, t) { console.log("handling fail, code = " + t) } }) }
            };
        e.exports = s
    }, function(e, t, n) {
        "use strict";
        e.exports = { save: function(e, t) {}, fetch: function(e) { return null }, remove: function(e) {}, clear: function() {} }
    }, function(e, t, n) {
        "use strict";
        var r = f(n(4)),
            o = f(n(36)),
            i = f(n(154)),
            a = f(n(12)),
            u = f(n(13)),
            s = f(n(157)),
            c = f(n(158));

        function f(e) { return e && e.__esModule ? e : { default: e } }
        var l = n(18),
            p = n(79),
            d = n(55),
            h = n(1),
            v = n(11),
            y = n(8),
            m = y.isObject,
            g = y.isString,
            w = y.isNumber,
            b = function(e) {
                function t() {
                    (0, a.default)(this, t);
                    return (0, s.default)(this, (t.__proto__ || (0, i.default)(t)).call(this, "_User"))
                }
                return (0, c.default)(t, e), (0, u.default)(t, [{
                    key: "set",
                    value: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                        g(e) && (this.setData[e] = t)
                    }
                }, {
                    key: "requestEmailVerify",
                    value: function(e) {
                        if (!g(e)) throw new v(415);
                        this.setData = (0, o.default)({}, { email: e }), console.log(this.setData);
                        var t = h._config.parameters.REQUEST_EMAIL_VERIFY;
                        return l(t, "post", this.setData)
                    }
                }, {
                    key: "register",
                    value: function(e) {
                        if (!m(e)) throw new v(415);
                        this.setData = (0, o.default)({}, e);
                        var t = h._config.parameters.REGISTER;
                        return l(t, "post", this.setData)
                    }
                }, {
                    key: "login",
                    value: function(e, t) {
                        var n = this;
                        if (!g(e) || !g(t)) throw new v(415);
                        this.setData = (0, o.default)({}, { username: e, password: t });
                        var i = h._config.parameters.LOGIN;
                        return new r.default(function(e, t) { l(i, "get", n.setData).then(function(t) { p.save("bmob", t), e(t) }).catch(function(e) { t(e) }) })
                    }
                }, { key: "logout", value: function() { p.clear() } }, { key: "users", value: function() { var e = h._config.parameters.USERS; return l(e, "get") } }, {
                    key: "decryption",
                    value: function(e) {
                        var t = this;
                        return new r.default(function(n, r) {
                            var o = e.iv ? e.iv : e.detail.iv,
                                i = e.encryptedData ? e.encryptedData : e.detail.encryptedData,
                                a = t.current(),
                                u = { sessionKey: "undefined" != typeof tt ? a.authData.toutiao.session_key : "undefined" != typeof qq ? a.authData.qqapp.session_key : a.authData.weapp.session_key, encryptedData: i, iv: o },
                                s = h._config.parameters.DECRYPTION;
                            l(s, "POST", u).then(function(e) { n(e) }).catch(function(e) { r(e) })
                        })
                    }
                }, {
                    key: "signOrLoginByMobilePhone",
                    value: function(e, t) {
                        if (!w(e) || !w(t)) throw new v(415);
                        this.setData = (0, o.default)({}, { mobilePhoneNumber: e, smsCode: t });
                        var n = h._config.parameters.LOGIN;
                        return l(n, "get", this.setData)
                    }
                }, {
                    key: "requestOpenId",
                    value: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                            n = h._config.parameters.WECHAT_APP;
                        return l(n + e, "POST", { anonymous_code: t })
                    }
                }, {
                    key: "linkWith",
                    value: function(e) {
                        var t = { authData: e },
                            n = h._config.parameters.USERS;
                        return l(n, "POST", t)
                    }
                }, {
                    key: "loginWithWeapp",
                    value: function(e) {
                        var t = this,
                            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                            o = arguments[2];
                        return new r.default(function(r, i) {
                            t.requestOpenId(e, n).then(function(e) {
                                var n = { weapp: e };
                                if ("undefined" != typeof tt && (delete e.error, n = { toutiao: e }), "undefined" != typeof qq && (delete e.errcode, delete e.errmsg, n = { qqapp: e }), "openid" === o) r(e);
                                else {
                                    var i = t.linkWith(n);
                                    r(i)
                                }
                            }).catch(function(e) { i(e) })
                        })
                    }
                }, {
                    key: "upInfo",
                    value: function(e) {
                        var t = this;
                        if (!m(e)) throw new v(415);
                        return new r.default(function(n, r) {
                            var o = e.nickName,
                                i = e.avatarUrl,
                                a = t.current();
                            if (!a) throw new v(415);
                            var u = p.fetch("openid");
                            t.get(a.objectId).then(function(e) { e.set("nickName", o), e.set("userPic", i), e.set("openid", u), e.save().then(function(e) { n(e) }).catch(function(e) { console.log(e), r(e) }) }).catch(function(e) { console.log(e), r(e) })
                        })
                    }
                }, { key: "openId", value: function() { this.auth("openid") } }, {
                    key: "auth",
                    value: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                            t = this;
                        return new r.default(function(n, r) {
                            var o = function() {
                                wx.login({
                                    success: function(o) {
                                        var i = "";
                                        "undefined" != typeof tt && (i = o.anonymousCode), t.loginWithWeapp(o.code, i, e).then(function(e) {
                                            if (e.error) throw new v(415);
                                            var t = void 0;
                                            t = "undefined" != typeof tt ? e.authData.toutiao.openid : "undefined" != typeof qq ? e.authData.qqapp.openid : e.authData.weapp.openid, p.save("openid", t), p.save("bmob", e), n(e)
                                        }, function(e) { r(e) })
                                    }
                                })
                            };
                            wx.checkSession({
                                success: function() {
                                    var e = t.current();
                                    if (null === e) { r("登陆错误，请在Bmob后台填写小程序AppSecret。") }
                                    n(e), o()
                                },
                                fail: function() { o() }
                            })
                        })
                    }
                }]), t
            }(d);
        e.exports = b
    }, function(e, t, n) { e.exports = { default: n(155), __esModule: !0 } }, function(e, t, n) { n(156), e.exports = n(0).Object.getPrototypeOf }, function(e, t, n) {
        var r = n(23),
            o = n(64);
        n(60)("getPrototypeOf", function() { return function(e) { return o(r(e)) } })
    }, function(e, t, n) {
        "use strict";
        t.__esModule = !0;
        var r, o = n(27),
            i = (r = o) && r.__esModule ? r : { default: r };
        t.default = function(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" !== (void 0 === t ? "undefined" : (0, i.default)(t)) && "function" != typeof t ? e : t }
    }, function(e, t, n) {
        "use strict";
        t.__esModule = !0;
        var r = a(n(159)),
            o = a(n(163)),
            i = a(n(27));

        function a(e) { return e && e.__esModule ? e : { default: e } }
        t.default = function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === t ? "undefined" : (0, i.default)(t)));
            e.prototype = (0, o.default)(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (r.default ? (0, r.default)(e, t) : e.__proto__ = t)
        }
    }, function(e, t, n) { e.exports = { default: n(160), __esModule: !0 } }, function(e, t, n) { n(161), e.exports = n(0).Object.setPrototypeOf }, function(e, t, n) {
        var r = n(6);
        r(r.S, "Object", { setPrototypeOf: n(162).set })
    }, function(e, t, n) {
        var r = n(15),
            o = n(7),
            i = function(e, t) { if (o(e), !r(t) && null !== t) throw TypeError(t + ": can't set as prototype!") };
        e.exports = {
            set: Object.setPrototypeOf || ("__proto__" in {} ? function(e, t, r) {
                try {
                    (r = n(22)(Function.call, n(66).f(Object.prototype, "__proto__").set, 2))(e, []), t = !(e instanceof Array)
                } catch (e) { t = !0 }
                return function(e, n) { return i(e, n), t ? e.__proto__ = n : r(e, n), e }
            }({}, !1) : void 0),
            check: i
        }
    }, function(e, t, n) { e.exports = { default: n(164), __esModule: !0 } }, function(e, t, n) {
        n(165);
        var r = n(0).Object;
        e.exports = function(e, t) { return r.create(e, t) }
    }, function(e, t, n) {
        var r = n(6);
        r(r.S, "Object", { create: n(46) })
    }, function(e, t, n) {
        "use strict";
        var r = s(n(80)),
            o = s(n(36)),
            i = s(n(4)),
            a = s(n(12)),
            u = s(n(13));

        function s(e) { return e && e.__esModule ? e : { default: e } }
        var c = n(18),
            f = n(1),
            l = n(11),
            p = n(28),
            d = n(37),
            h = n(8),
            v = h.isString,
            y = h.isArray,
            m = [],
            g = function() {
                function e(t, n) {
                    if ((0, a.default)(this, e), t && n) {
                        if (!v(t)) throw new l(415);
                        var r = t.substring(t.lastIndexOf(".") + 1);
                        m.push({ name: t, route: f._config.parameters.FILES + "/" + f._config.secretKey + "." + r, data: n })
                    }
                }
                return (0, u.default)(e, [{
                    key: "fileUpload",
                    value: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                            t = this;
                        return new i.default(function(i, a) {
                            void 0 === f.User && (f = n(1));
                            var u = "bmob",
                                s = f.User.current();
                            s && (u = s.sessionToken);
                            var c = [],
                                l = Math.round((new Date).getTime() / 1e3),
                                p = f.utils.randomString(),
                                h = m[0].route;
                            "wxc" === e && (h = h.replace(f._config.parameters.FILES, f._config.parameters.FILESCHECK));
                            var v = { "content-type": "application/json", "X-Bmob-SDK-Type": "wechatApp", "X-Bmob-Safe-Sign": d.utf8md5(h + l + f._config.securityCode + p), "X-Bmob-Safe-Timestamp": l, "X-Bmob-Noncestr-Key": p, "X-Bmob-Session-Token": u, "X-Bmob-Secret-Key": f._config.secretKey },
                                y = (0, o.default)({ _ContentType: "text/plain", mime_type: "text/plain", category: "wechatApp", _ClientVersion: "js3.6.1", _InstallationId: "bmob" }, v),
                                g = !0,
                                w = !1,
                                b = void 0;
                            try {
                                for (var _, S = (0, r.default)(m); !(g = (_ = S.next()).done); g = !0) {
                                    var x = _.value,
                                        E = x.route;
                                    "wxc" === e && (E = x.route.replace(f._config.parameters.FILES, f._config.parameters.FILESCHECK)), console.log(x.route, f._config.parameters.FILESCHECK, "ror"), wx.uploadFile({ url: f._config.host + E, filePath: x.data, name: "file", header: v, formData: y, success: function(n) { var r = JSON.parse(n.data); "wxc" === e ? "ok" === r.msg ? i(t.fileUpload()) : a(r) : (c.push(r), c.length === m.length && (m = [], i(c), a(c))) }, fail: function(e) { c.push(e) } })
                                }
                            } catch (e) { w = !0, b = e } finally { try {!g && S.return && S.return() } finally { if (w) throw b } }
                        })
                    }
                }, { key: "imgSecCheck", value: function() { if (!m.length) throw new l(417); return this.fileUpload("wxc") } }, {
                    key: "save",
                    value: function() {
                        if (!m.length) throw new l(417);
                        var e = void 0,
                            t = p.getAppType();
                        if ("h5" === t || "nodejs" === t) e = new i.default(function(e, t) {
                            var n = [],
                                o = !0,
                                i = !1,
                                a = void 0;
                            try {
                                for (var u, s = (0, r.default)(m); !(o = (u = s.next()).done); o = !0) {
                                    var f = u.value;
                                    c(f.route, "post", f.data).then(function(r) { n.push(r), n.length === m.length && (m = [], e(n), t(n)) }).catch(function(e) { n.push(e) })
                                }
                            } catch (e) { i = !0, a = e } finally { try {!o && s.return && s.return() } finally { if (i) throw a } }
                        });
                        else {
                            if ("wx" === t) { if (!m.length) throw new l(417); return this.fileUpload("wx") }
                            "hap" === t && (e = new i.default(function(e, t) {
                                void 0 === f.User && (f = n(1));
                                var i = "bmob",
                                    a = f.User.current();
                                a && (i = a.sessionToken);
                                var u = [],
                                    s = Math.round((new Date).getTime() / 1e3),
                                    c = f.utils.randomString(),
                                    l = m[0].route;
                                console.log("rand", c, f, l);
                                var p = { "content-type": "application/json", "X-Bmob-SDK-Type": "wechatApp", "X-Bmob-Safe-Sign": d.utf8md5(l + s + f._config.securityCode + c), "X-Bmob-Safe-Timestamp": s, "X-Bmob-Noncestr-Key": c, "X-Bmob-Session-Token": i, "X-Bmob-Secret-Key": f._config.secretKey },
                                    h = (0, o.default)({ _ContentType: "text/plain", mime_type: "text/plain", category: "wechatApp", _ClientVersion: "js3.6.1", _InstallationId: "bmob" }, p),
                                    v = !0,
                                    y = !1,
                                    g = void 0;
                                try {
                                    for (var w, b = (0, r.default)(m); !(v = (w = b.next()).done); v = !0) {
                                        var _ = w.value;
                                        "xxrequire('@system.request')xx".upload({
                                            url: f._config.host + _.route,
                                            files: [{ uri: _.data, name: "file", filename: _.name }],
                                            header: { "X-Bmob-SDK-Type": "wechatApp" },
                                            data: h,
                                            success: function(n) {
                                                console.log("handling success" + u);
                                                var r = n.data;
                                                u.push(r), u.length === m.length && (m = [], e(u), t(u))
                                            },
                                            fail: function(e, t) { console.log("handling fail, code = " + t) }
                                        })
                                    }
                                } catch (e) { y = !0, g = e } finally { try {!v && b.return && b.return() } finally { if (y) throw g } }
                            }))
                        }
                        return e
                    }
                }, { key: "destroy", value: function(e) { if (v(e)) return c(f._config.parameters.FILES + "/upyun/" + e.split(".com/")[1], "delete"); if (y(e)) { var t = []; return e.map(function(e) { t.push(e.split(".com/")[1]) }), c(f._config.parameters.DELFILES, "post", { upyun: t }) } throw new l(415) } }]), e
            }();
        e.exports = g
    }, function(e, t, n) { n(34), n(32), e.exports = n(168) }, function(e, t, n) {
        var r = n(7),
            o = n(68);
        e.exports = n(0).getIterator = function(e) { var t = o(e); if ("function" != typeof t) throw TypeError(e + " is not iterable!"); return r(t.call(e)) }
    }, function(e, t, n) {
        "use strict";
        var r = i(n(12)),
            o = i(n(13));

        function i(e) { return e && e.__esModule ? e : { default: e } }
        var a = n(18),
            u = n(1),
            s = n(11),
            c = function() {
                function e() {
                    (0, r.default)(this, e)
                }
                return (0, o.default)(e, [{
                    key: "weApp",
                    value: function(e, t, n) {
                        var r = wx.getStorageSync("openid");
                        if (!(e && t && n && r)) throw new s(416);
                        var o = { order_price: e, product_name: t, body: n, open_id: r, pay_type: 4 },
                            i = u._config.parameters.PAY;
                        return a(i, "post", o)
                    }
                }]), e
            }();
        e.exports = c
    }, function(t, n, r) {
        "use strict";
        var o = l(r(56)),
            i = l(r(4)),
            a = l(r(9)),
            u = l(r(12)),
            s = l(r(13)),
            c = l(r(171)),
            f = l(r(36));

        function l(e) { return e && e.__esModule ? e : { default: e } }
        var p = r(11),
            d = {
                setup: function(e) {
                    var t = [];
                    (0, f.default)(e, {
                        on: function(e, n) { "function" == typeof n && t.push([e, n]) },
                        emit: function(e) {
                            for (var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) r[o - 1] = arguments[o];
                            t.forEach(function(t) {
                                var n = (0, c.default)(t, 2),
                                    o = n[0],
                                    i = n[1];
                                return e === o && i.apply(void 0, r)
                            })
                        },
                        removeAllListeners: function() { t = [] }
                    })
                }
            };
        t.exports = function() {
            function t() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                if ((0, u.default)(this, t), "" === e) throw new p(415);
                this.config = { host: "wss.bmobcloud.com" }, d.setup(this.emitter = {}), this.applicationId = e, this.initialize()
            }
            return (0, s.default)(t, [{
                key: "handshake",
                value: function() {
                    var t = "https://" + this.config.host + "/socket.io/1/?t=" + (new Date).getTime(),
                        n = (0, a.default)({});
                    return new i.default(function(r, o) {
                        wx.request({
                            method: "GET",
                            url: t,
                            data: n,
                            header: { "content-type": "text/plain" },
                            success: function(t) {
                                return t.data && t.data.statusCode ? r("request error", e) : 200 !== t.statusCode ? r("request error", e) : r(function(e) {
                                    if (!(e instanceof p)) return e.split(":")[0];
                                    self.connecting = !1, self.onError(e.message)
                                }(t.data))
                            },
                            fail: function(e) { return r("request error", e) }
                        })
                    })
                }
            }, {
                key: "initialize",
                value: function() {
                    var e = this;
                    return this.emitter.removeAllListeners(), this.handshake().then(function(t) {
                        try {
                            var n = e.connect("wss://" + e.config.host + "/socket.io/1/websocket/" + t, {});
                            console.log(n, "connectObj"), n.then(function(e) { console.log(e, "res-res") })
                        } catch (e) { throw console.error({ connectError: e }), e }
                    }), this.on("close", function() { console.log("连接已中断"), setTimeout(function() { return e.initialize() }, 5e3) }), new i.default(function(t, n) {
                        e.on("server_pub", function(t) {
                            switch (t.action) {
                                case "updateTable":
                                    e.onUpdateTable(t.tableName, t.data);
                                    break;
                                case "updateRow":
                                    e.onUpdateRow(t.tableName, t.objectId, t.data);
                                    break;
                                case "deleteTable":
                                    e.onDeleteTable(t.tableName, t.data);
                                    break;
                                case "deleteRow":
                                    e.onDeleteRow(t.tableName, t.objectId, t.data)
                            }
                        }), e.on("client_send_data", function(t) { e.onInitListen() })
                    })
                }
            }, { key: "onInitListen", value: function() {} }, {
                key: "connect",
                value: function(e, t) {
                    var n = this,
                        r = (0, o.default)(t).map(function(e) { return e + "=" + encodeURIComponent(t[e]) }).join("&"),
                        a = e.indexOf("?") > -1 ? "&" : "?";
                    return e = [e, r].join(a), new i.default(function(r, o) {
                        wx.onSocketOpen(r), wx.onSocketError(o), wx.onSocketMessage(function(e) {
                            try {
                                var t = e.data;
                                if ("2:::" === t.slice(0, 4) && n.emit(!1, !0), null === (t = t.slice(4)) || "" === t) return;
                                var r = function(e) { var t = JSON.parse(e); return { name: t.name, args: t.args } }(t),
                                    o = r.name,
                                    i = r.args,
                                    a = null == i ? "" : JSON.parse(i[0]);
                                n.emitter.emit(o, a)
                            } catch (t) { console.log("Handle packet failed: " + e.data, t) }
                        }), wx.onSocketClose(function() { return n.emitter.emit("close") }), wx.connectSocket({ url: e, header: t })
                    })
                }
            }, { key: "on", value: function(e, t) { this.emitter.on(e, t) } }, { key: "emit", value: function(e, t) { t = void 0 === t ? "5:::" : "2:::", e = e ? (0, a.default)(e) : "", wx.sendSocketMessage({ data: t + e }) } }, { key: "emitData", value: function(e, t) { return { name: e, args: [t = (0, a.default)(t)] } } }, {
                key: "updateTable",
                value: function(e) {
                    var t = { appKey: this.applicationId, tableName: e, objectId: "", action: "updateTable" };
                    t = this.emitData("client_sub", t), this.emit(t)
                }
            }, {
                key: "unsubUpdateTable",
                value: function(e) {
                    var t = { appKey: this.applicationId, tableName: e, objectId: "", action: "unsub_updateTable" };
                    t = this.emitData("client_sub", t), this.emit(t)
                }
            }, {
                key: "updateRow",
                value: function(e, t) {
                    var n = { appKey: this.applicationId, tableName: e, objectId: t, action: "updateRow" };
                    n = this.emitData("client_sub", n), this.emit(n)
                }
            }, {
                key: "unsubUpdateRow",
                value: function(e, t) {
                    var n = { appKey: this.applicationId, tableName: e, objectId: t, action: "unsub_updateRow" };
                    n = this.emitData("client_sub", n), this.emit(n)
                }
            }, {
                key: "deleteTable",
                value: function(e) {
                    var t = { appKey: this.applicationId, tableName: e, objectId: "", action: "deleteTable" };
                    t = this.emitData("client_sub", t), this.emit(t)
                }
            }, {
                key: "unsubDeleteTable",
                value: function(e) {
                    var t = { appKey: this.applicationId, tableName: e, objectId: "", action: "unsub_deleteTable" };
                    t = this.emitData("client_sub", t), this.emit(t)
                }
            }, {
                key: "deleteRow",
                value: function(e, t) {
                    var n = { appKey: this.applicationId, tableName: e, objectId: t, action: "deleteRow" };
                    n = this.emitData("client_sub", n), this.emit(n)
                }
            }, {
                key: "unsubDeleteRow",
                value: function(e, t) {
                    var n = { appKey: this.applicationId, tableName: e, objectId: t, action: "unsub_deleteRow" };
                    n = this.emitData("client_sub", n), this.emit(n)
                }
            }, { key: "onUpdateTable", value: function(e, t) {} }, { key: "onUpdateRow", value: function(e, t, n) {} }, { key: "onDeleteTable", value: function(e, t) {} }, { key: "onDeleteRow", value: function(e, t, n) {} }]), t
        }()
    }, function(e, t, n) {
        "use strict";
        t.__esModule = !0;
        var r = i(n(172)),
            o = i(n(80));

        function i(e) { return e && e.__esModule ? e : { default: e } }
        t.default = function() {
            return function(e, t) {
                if (Array.isArray(e)) return e;
                if ((0, r.default)(Object(e))) return function(e, t) {
                    var n = [],
                        r = !0,
                        i = !1,
                        a = void 0;
                    try { for (var u, s = (0, o.default)(e); !(r = (u = s.next()).done) && (n.push(u.value), !t || n.length !== t); r = !0); } catch (e) { i = !0, a = e } finally { try {!r && s.return && s.return() } finally { if (i) throw a } }
                    return n
                }(e, t);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
        }()
    }, function(e, t, n) { e.exports = { default: n(173), __esModule: !0 } }, function(e, t, n) { n(34), n(32), e.exports = n(174) }, function(e, t, n) {
        var r = n(50),
            o = n(3)("iterator"),
            i = n(21);
        e.exports = n(0).isIterable = function(e) { var t = Object(e); return void 0 !== t[o] || "@@iterator" in t || i.hasOwnProperty(r(t)) }
    }, function(e, t, n) {
        "use strict";
        var r, o = n(4),
            i = (r = o) && r.__esModule ? r : { default: r };
        var a = n(18),
            u = n(1),
            s = n(11),
            c = n(8),
            f = c.isObject,
            l = c.isString;
        e.exports = {
            generateCode: function(e) { if (!f(e)) throw new s(415); var t = u._config.parameters.GENERATECODE; return a(t, "post", e) },
            getAccessToken: function() { var e = u._config.parameters.GETACCESSTOKEN; return a(e, "get") },
            sendWeAppMessage: function(e) { if (!f(e)) throw new s(415); var t = u._config.parameters.SENDWEAPPMESSAGE; return a(t, "post", e) },
            refund: function(e) { if (!f(e)) throw new s(415); var t = u._config.parameters.REFUND; return a(t, "post", e) },
            notifyMsg: function(e) { if (!f(e)) throw new s(415); var t = u._config.parameters.NOTIFYMSG; return a(t, "post", e) },
            functions: function(e, t) { if (t || (t = {}), !l(e)) throw new s(415); var n = u._config.parameters.FUNCTIONS + "/" + e; return new i.default(function(e, r) { a(n, "post", t).then(function(t) { var n = t.result; try { e(JSON.parse(n)) } catch (t) { e(n) } }).catch(function(e) { r(e) }) }) },
            timestamp: function() { var e = u._config.parameters.TIMESTAMP; return a(e, "get") },
            requestPasswordReset: function(e) { if (!f(e)) throw new s(415); var t = u._config.parameters.REQUESTPASSWORDRESET; return a(t, "post", e) },
            resetPasswordBySmsCode: function(e, t) { if (!l(e)) throw new s(415); var n = u._config.parameters.RESETPASSWORDBYSMSCODE + "/" + e; return a(n, "put", t) },
            updateUserPassword: function(e, t) { if (!f(t) || !l(e)) throw new s(415); var n = u._config.parameters.UPDATEUSERPASSWORD + "/" + e; return a(n, "put", t) },
            geoPoint: function(e) {
                var t = e.latitude,
                    n = e.longitude;
                return function(e, t) { if (e < -90) throw new s(419); if (e > 90) throw new s(419); if (t < -180) throw new s(419); if (t > 180) throw new s(419) }(t, n), { __type: "GeoPoint", latitude: t, longitude: n }
            },
            checkMsg: function(e) { if (!l(e)) throw new s(415); var t = "" + u._config.parameters.CHECK_MSG; return a(t, "post", { content: e }) },
            push: function(e) { if (!f(e)) throw new s(415); var t = u._config.parameters.PUSH; return a(t, "post", e) }
        }
    }, function(e, t, n) {
        "use strict";
        var r = n(18),
            o = n(1),
            i = n(11),
            a = n(8),
            u = a.isObject,
            s = a.isString;
        e.exports = { requestSmsCode: function(e, t) { if (!u(e)) throw new i(415); var n = o._config.parameters.REQUESTSMSCODE; return r(n, "post", e) }, verifySmsCode: function(e, t, n) { if (!s(e)) throw new i(415); if (!u(t)) throw new i(415); var a = o._config.parameters.VERIFYSMSCODE + "/" + e; return r(a, "post", t) } }
    }])
});