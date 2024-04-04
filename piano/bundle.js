/*! jQuery v3.4.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(t, e) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
        if (!t.document)
            throw new Error("jQuery requires a window with a document");
        return e(t)
    }
    : e(t)
}("undefined" != typeof window ? window : this, (function(t, e) {
    "use strict";
    var i = []
      , n = t.document
      , r = Object.getPrototypeOf
      , s = i.slice
      , o = i.concat
      , a = i.push
      , h = i.indexOf
      , c = {}
      , l = c.toString
      , u = c.hasOwnProperty
      , p = u.toString
      , d = p.call(Object)
      , f = {}
      , g = function(t) {
        return "function" == typeof t && "number" != typeof t.nodeType
    }
      , y = function(t) {
        return null != t && t === t.window
    }
      , m = {
        type: !0,
        src: !0,
        nonce: !0,
        noModule: !0
    };
    function _(t, e, i) {
        var r, s, o = (i = i || n).createElement("script");
        if (o.text = t,
        e)
            for (r in m)
                (s = e[r] || e.getAttribute && e.getAttribute(r)) && o.setAttribute(r, s);
        i.head.appendChild(o).parentNode.removeChild(o)
    }
    function v(t) {
        return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? c[l.call(t)] || "object" : typeof t
    }
    var b = "3.4.1"
      , w = function(t, e) {
        return new w.fn.init(t,e)
    }
      , x = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    function T(t) {
        var e = !!t && "length"in t && t.length
          , i = v(t);
        return !g(t) && !y(t) && ("array" === i || 0 === e || "number" == typeof e && 0 < e && e - 1 in t)
    }
    w.fn = w.prototype = {
        jquery: b,
        constructor: w,
        length: 0,
        toArray: function() {
            return s.call(this)
        },
        get: function(t) {
            return null == t ? s.call(this) : t < 0 ? this[t + this.length] : this[t]
        },
        pushStack: function(t) {
            var e = w.merge(this.constructor(), t);
            return e.prevObject = this,
            e
        },
        each: function(t) {
            return w.each(this, t)
        },
        map: function(t) {
            return this.pushStack(w.map(this, (function(e, i) {
                return t.call(e, i, e)
            }
            )))
        },
        slice: function() {
            return this.pushStack(s.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(t) {
            var e = this.length
              , i = +t + (t < 0 ? e : 0);
            return this.pushStack(0 <= i && i < e ? [this[i]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: a,
        sort: i.sort,
        splice: i.splice
    },
    w.extend = w.fn.extend = function() {
        var t, e, i, n, r, s, o = arguments[0] || {}, a = 1, h = arguments.length, c = !1;
        for ("boolean" == typeof o && (c = o,
        o = arguments[a] || {},
        a++),
        "object" == typeof o || g(o) || (o = {}),
        a === h && (o = this,
        a--); a < h; a++)
            if (null != (t = arguments[a]))
                for (e in t)
                    n = t[e],
                    "__proto__" !== e && o !== n && (c && n && (w.isPlainObject(n) || (r = Array.isArray(n))) ? (i = o[e],
                    s = r && !Array.isArray(i) ? [] : r || w.isPlainObject(i) ? i : {},
                    r = !1,
                    o[e] = w.extend(c, s, n)) : void 0 !== n && (o[e] = n));
        return o
    }
    ,
    w.extend({
        expando: "jQuery" + (b + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(t) {
            throw new Error(t)
        },
        noop: function() {},
        isPlainObject: function(t) {
            var e, i;
            return !(!t || "[object Object]" !== l.call(t) || (e = r(t)) && ("function" != typeof (i = u.call(e, "constructor") && e.constructor) || p.call(i) !== d))
        },
        isEmptyObject: function(t) {
            var e;
            for (e in t)
                return !1;
            return !0
        },
        globalEval: function(t, e) {
            _(t, {
                nonce: e && e.nonce
            })
        },
        each: function(t, e) {
            var i, n = 0;
            if (T(t))
                for (i = t.length; n < i && !1 !== e.call(t[n], n, t[n]); n++)
                    ;
            else
                for (n in t)
                    if (!1 === e.call(t[n], n, t[n]))
                        break;
            return t
        },
        trim: function(t) {
            return null == t ? "" : (t + "").replace(x, "")
        },
        makeArray: function(t, e) {
            var i = e || [];
            return null != t && (T(Object(t)) ? w.merge(i, "string" == typeof t ? [t] : t) : a.call(i, t)),
            i
        },
        inArray: function(t, e, i) {
            return null == e ? -1 : h.call(e, t, i)
        },
        merge: function(t, e) {
            for (var i = +e.length, n = 0, r = t.length; n < i; n++)
                t[r++] = e[n];
            return t.length = r,
            t
        },
        grep: function(t, e, i) {
            for (var n = [], r = 0, s = t.length, o = !i; r < s; r++)
                !e(t[r], r) !== o && n.push(t[r]);
            return n
        },
        map: function(t, e, i) {
            var n, r, s = 0, a = [];
            if (T(t))
                for (n = t.length; s < n; s++)
                    null != (r = e(t[s], s, i)) && a.push(r);
            else
                for (s in t)
                    null != (r = e(t[s], s, i)) && a.push(r);
            return o.apply([], a)
        },
        guid: 1,
        support: f
    }),
    "function" == typeof Symbol && (w.fn[Symbol.iterator] = i[Symbol.iterator]),
    w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), (function(t, e) {
        c["[object " + e + "]"] = e.toLowerCase()
    }
    ));
    var S = function(t) {
        var e, i, n, r, s, o, a, h, c, l, u, p, d, f, g, y, m, _, v, b = "sizzle" + 1 * new Date, w = t.document, x = 0, T = 0, S = ht(), C = ht(), A = ht(), k = ht(), E = function(t, e) {
            return t === e && (u = !0),
            0
        }, O = {}.hasOwnProperty, P = [], R = P.pop, N = P.push, I = P.push, L = P.slice, B = function(t, e) {
            for (var i = 0, n = t.length; i < n; i++)
                if (t[i] === e)
                    return i;
            return -1
        }, D = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", F = "[\\x20\\t\\r\\n\\f]", M = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+", j = "\\[" + F + "*(" + M + ")(?:" + F + "*([*^$|!~]?=)" + F + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + M + "))|)" + F + "*\\]", W = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + j + ")*)|.*)\\)|)", U = new RegExp(F + "+","g"), q = new RegExp("^" + F + "+|((?:^|[^\\\\])(?:\\\\.)*)" + F + "+$","g"), V = new RegExp("^" + F + "*," + F + "*"), z = new RegExp("^" + F + "*([>+~]|" + F + ")" + F + "*"), G = new RegExp(F + "|>"), H = new RegExp(W), X = new RegExp("^" + M + "$"), Y = {
            ID: new RegExp("^#(" + M + ")"),
            CLASS: new RegExp("^\\.(" + M + ")"),
            TAG: new RegExp("^(" + M + "|[*])"),
            ATTR: new RegExp("^" + j),
            PSEUDO: new RegExp("^" + W),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + F + "*(even|odd|(([+-]|)(\\d*)n|)" + F + "*(?:([+-]|)" + F + "*(\\d+)|))" + F + "*\\)|)","i"),
            bool: new RegExp("^(?:" + D + ")$","i"),
            needsContext: new RegExp("^" + F + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + F + "*((?:-\\d)?\\d*)" + F + "*\\)|)(?=[^-]|$)","i")
        }, J = /HTML$/i, Q = /^(?:input|select|textarea|button)$/i, K = /^h\d$/i, Z = /^[^{]+\{\s*\[native \w/, $ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, tt = /[+~]/, et = new RegExp("\\\\([\\da-f]{1,6}" + F + "?|(" + F + ")|.)","ig"), it = function(t, e, i) {
            var n = "0x" + e - 65536;
            return n != n || i ? e : n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
        }, nt = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, rt = function(t, e) {
            return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
        }, st = function() {
            p()
        }, ot = bt((function(t) {
            return !0 === t.disabled && "fieldset" === t.nodeName.toLowerCase()
        }
        ), {
            dir: "parentNode",
            next: "legend"
        });
        try {
            I.apply(P = L.call(w.childNodes), w.childNodes),
            P[w.childNodes.length].nodeType
        } catch (e) {
            I = {
                apply: P.length ? function(t, e) {
                    N.apply(t, L.call(e))
                }
                : function(t, e) {
                    for (var i = t.length, n = 0; t[i++] = e[n++]; )
                        ;
                    t.length = i - 1
                }
            }
        }
        function at(t, e, n, r) {
            var s, a, c, l, u, f, m, _ = e && e.ownerDocument, x = e ? e.nodeType : 9;
            if (n = n || [],
            "string" != typeof t || !t || 1 !== x && 9 !== x && 11 !== x)
                return n;
            if (!r && ((e ? e.ownerDocument || e : w) !== d && p(e),
            e = e || d,
            g)) {
                if (11 !== x && (u = $.exec(t)))
                    if (s = u[1]) {
                        if (9 === x) {
                            if (!(c = e.getElementById(s)))
                                return n;
                            if (c.id === s)
                                return n.push(c),
                                n
                        } else if (_ && (c = _.getElementById(s)) && v(e, c) && c.id === s)
                            return n.push(c),
                            n
                    } else {
                        if (u[2])
                            return I.apply(n, e.getElementsByTagName(t)),
                            n;
                        if ((s = u[3]) && i.getElementsByClassName && e.getElementsByClassName)
                            return I.apply(n, e.getElementsByClassName(s)),
                            n
                    }
                if (i.qsa && !k[t + " "] && (!y || !y.test(t)) && (1 !== x || "object" !== e.nodeName.toLowerCase())) {
                    if (m = t,
                    _ = e,
                    1 === x && G.test(t)) {
                        for ((l = e.getAttribute("id")) ? l = l.replace(nt, rt) : e.setAttribute("id", l = b),
                        a = (f = o(t)).length; a--; )
                            f[a] = "#" + l + " " + vt(f[a]);
                        m = f.join(","),
                        _ = tt.test(t) && mt(e.parentNode) || e
                    }
                    try {
                        return I.apply(n, _.querySelectorAll(m)),
                        n
                    } catch (e) {
                        k(t, !0)
                    } finally {
                        l === b && e.removeAttribute("id")
                    }
                }
            }
            return h(t.replace(q, "$1"), e, n, r)
        }
        function ht() {
            var t = [];
            return function e(i, r) {
                return t.push(i + " ") > n.cacheLength && delete e[t.shift()],
                e[i + " "] = r
            }
        }
        function ct(t) {
            return t[b] = !0,
            t
        }
        function lt(t) {
            var e = d.createElement("fieldset");
            try {
                return !!t(e)
            } catch (t) {
                return !1
            } finally {
                e.parentNode && e.parentNode.removeChild(e),
                e = null
            }
        }
        function ut(t, e) {
            for (var i = t.split("|"), r = i.length; r--; )
                n.attrHandle[i[r]] = e
        }
        function pt(t, e) {
            var i = e && t
              , n = i && 1 === t.nodeType && 1 === e.nodeType && t.sourceIndex - e.sourceIndex;
            if (n)
                return n;
            if (i)
                for (; i = i.nextSibling; )
                    if (i === e)
                        return -1;
            return t ? 1 : -1
        }
        function dt(t) {
            return function(e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t
            }
        }
        function ft(t) {
            return function(e) {
                var i = e.nodeName.toLowerCase();
                return ("input" === i || "button" === i) && e.type === t
            }
        }
        function gt(t) {
            return function(e) {
                return "form"in e ? e.parentNode && !1 === e.disabled ? "label"in e ? "label"in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ot(e) === t : e.disabled === t : "label"in e && e.disabled === t
            }
        }
        function yt(t) {
            return ct((function(e) {
                return e = +e,
                ct((function(i, n) {
                    for (var r, s = t([], i.length, e), o = s.length; o--; )
                        i[r = s[o]] && (i[r] = !(n[r] = i[r]))
                }
                ))
            }
            ))
        }
        function mt(t) {
            return t && void 0 !== t.getElementsByTagName && t
        }
        for (e in i = at.support = {},
        s = at.isXML = function(t) {
            var e = t.namespaceURI
              , i = (t.ownerDocument || t).documentElement;
            return !J.test(e || i && i.nodeName || "HTML")
        }
        ,
        p = at.setDocument = function(t) {
            var e, r, o = t ? t.ownerDocument || t : w;
            return o !== d && 9 === o.nodeType && o.documentElement && (f = (d = o).documentElement,
            g = !s(d),
            w !== d && (r = d.defaultView) && r.top !== r && (r.addEventListener ? r.addEventListener("unload", st, !1) : r.attachEvent && r.attachEvent("onunload", st)),
            i.attributes = lt((function(t) {
                return t.className = "i",
                !t.getAttribute("className")
            }
            )),
            i.getElementsByTagName = lt((function(t) {
                return t.appendChild(d.createComment("")),
                !t.getElementsByTagName("*").length
            }
            )),
            i.getElementsByClassName = Z.test(d.getElementsByClassName),
            i.getById = lt((function(t) {
                return f.appendChild(t).id = b,
                !d.getElementsByName || !d.getElementsByName(b).length
            }
            )),
            i.getById ? (n.filter.ID = function(t) {
                var e = t.replace(et, it);
                return function(t) {
                    return t.getAttribute("id") === e
                }
            }
            ,
            n.find.ID = function(t, e) {
                if (void 0 !== e.getElementById && g) {
                    var i = e.getElementById(t);
                    return i ? [i] : []
                }
            }
            ) : (n.filter.ID = function(t) {
                var e = t.replace(et, it);
                return function(t) {
                    var i = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
                    return i && i.value === e
                }
            }
            ,
            n.find.ID = function(t, e) {
                if (void 0 !== e.getElementById && g) {
                    var i, n, r, s = e.getElementById(t);
                    if (s) {
                        if ((i = s.getAttributeNode("id")) && i.value === t)
                            return [s];
                        for (r = e.getElementsByName(t),
                        n = 0; s = r[n++]; )
                            if ((i = s.getAttributeNode("id")) && i.value === t)
                                return [s]
                    }
                    return []
                }
            }
            ),
            n.find.TAG = i.getElementsByTagName ? function(t, e) {
                return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : i.qsa ? e.querySelectorAll(t) : void 0
            }
            : function(t, e) {
                var i, n = [], r = 0, s = e.getElementsByTagName(t);
                if ("*" === t) {
                    for (; i = s[r++]; )
                        1 === i.nodeType && n.push(i);
                    return n
                }
                return s
            }
            ,
            n.find.CLASS = i.getElementsByClassName && function(t, e) {
                if (void 0 !== e.getElementsByClassName && g)
                    return e.getElementsByClassName(t)
            }
            ,
            m = [],
            y = [],
            (i.qsa = Z.test(d.querySelectorAll)) && (lt((function(t) {
                f.appendChild(t).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                t.querySelectorAll("[msallowcapture^='']").length && y.push("[*^$]=" + F + "*(?:''|\"\")"),
                t.querySelectorAll("[selected]").length || y.push("\\[" + F + "*(?:value|" + D + ")"),
                t.querySelectorAll("[id~=" + b + "-]").length || y.push("~="),
                t.querySelectorAll(":checked").length || y.push(":checked"),
                t.querySelectorAll("a#" + b + "+*").length || y.push(".#.+[+~]")
            }
            )),
            lt((function(t) {
                t.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var e = d.createElement("input");
                e.setAttribute("type", "hidden"),
                t.appendChild(e).setAttribute("name", "D"),
                t.querySelectorAll("[name=d]").length && y.push("name" + F + "*[*^$|!~]?="),
                2 !== t.querySelectorAll(":enabled").length && y.push(":enabled", ":disabled"),
                f.appendChild(t).disabled = !0,
                2 !== t.querySelectorAll(":disabled").length && y.push(":enabled", ":disabled"),
                t.querySelectorAll("*,:x"),
                y.push(",.*:")
            }
            ))),
            (i.matchesSelector = Z.test(_ = f.matches || f.webkitMatchesSelector || f.mozMatchesSelector || f.oMatchesSelector || f.msMatchesSelector)) && lt((function(t) {
                i.disconnectedMatch = _.call(t, "*"),
                _.call(t, "[s!='']:x"),
                m.push("!=", W)
            }
            )),
            y = y.length && new RegExp(y.join("|")),
            m = m.length && new RegExp(m.join("|")),
            e = Z.test(f.compareDocumentPosition),
            v = e || Z.test(f.contains) ? function(t, e) {
                var i = 9 === t.nodeType ? t.documentElement : t
                  , n = e && e.parentNode;
                return t === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(n)))
            }
            : function(t, e) {
                if (e)
                    for (; e = e.parentNode; )
                        if (e === t)
                            return !0;
                return !1
            }
            ,
            E = e ? function(t, e) {
                if (t === e)
                    return u = !0,
                    0;
                var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
                return n || (1 & (n = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || !i.sortDetached && e.compareDocumentPosition(t) === n ? t === d || t.ownerDocument === w && v(w, t) ? -1 : e === d || e.ownerDocument === w && v(w, e) ? 1 : l ? B(l, t) - B(l, e) : 0 : 4 & n ? -1 : 1)
            }
            : function(t, e) {
                if (t === e)
                    return u = !0,
                    0;
                var i, n = 0, r = t.parentNode, s = e.parentNode, o = [t], a = [e];
                if (!r || !s)
                    return t === d ? -1 : e === d ? 1 : r ? -1 : s ? 1 : l ? B(l, t) - B(l, e) : 0;
                if (r === s)
                    return pt(t, e);
                for (i = t; i = i.parentNode; )
                    o.unshift(i);
                for (i = e; i = i.parentNode; )
                    a.unshift(i);
                for (; o[n] === a[n]; )
                    n++;
                return n ? pt(o[n], a[n]) : o[n] === w ? -1 : a[n] === w ? 1 : 0
            }
            ),
            d
        }
        ,
        at.matches = function(t, e) {
            return at(t, null, null, e)
        }
        ,
        at.matchesSelector = function(t, e) {
            if ((t.ownerDocument || t) !== d && p(t),
            i.matchesSelector && g && !k[e + " "] && (!m || !m.test(e)) && (!y || !y.test(e)))
                try {
                    var n = _.call(t, e);
                    if (n || i.disconnectedMatch || t.document && 11 !== t.document.nodeType)
                        return n
                } catch (t) {
                    k(e, !0)
                }
            return 0 < at(e, d, null, [t]).length
        }
        ,
        at.contains = function(t, e) {
            return (t.ownerDocument || t) !== d && p(t),
            v(t, e)
        }
        ,
        at.attr = function(t, e) {
            (t.ownerDocument || t) !== d && p(t);
            var r = n.attrHandle[e.toLowerCase()]
              , s = r && O.call(n.attrHandle, e.toLowerCase()) ? r(t, e, !g) : void 0;
            return void 0 !== s ? s : i.attributes || !g ? t.getAttribute(e) : (s = t.getAttributeNode(e)) && s.specified ? s.value : null
        }
        ,
        at.escape = function(t) {
            return (t + "").replace(nt, rt)
        }
        ,
        at.error = function(t) {
            throw new Error("Syntax error, unrecognized expression: " + t)
        }
        ,
        at.uniqueSort = function(t) {
            var e, n = [], r = 0, s = 0;
            if (u = !i.detectDuplicates,
            l = !i.sortStable && t.slice(0),
            t.sort(E),
            u) {
                for (; e = t[s++]; )
                    e === t[s] && (r = n.push(s));
                for (; r--; )
                    t.splice(n[r], 1)
            }
            return l = null,
            t
        }
        ,
        r = at.getText = function(t) {
            var e, i = "", n = 0, s = t.nodeType;
            if (s) {
                if (1 === s || 9 === s || 11 === s) {
                    if ("string" == typeof t.textContent)
                        return t.textContent;
                    for (t = t.firstChild; t; t = t.nextSibling)
                        i += r(t)
                } else if (3 === s || 4 === s)
                    return t.nodeValue
            } else
                for (; e = t[n++]; )
                    i += r(e);
            return i
        }
        ,
        (n = at.selectors = {
            cacheLength: 50,
            createPseudo: ct,
            match: Y,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(t) {
                    return t[1] = t[1].replace(et, it),
                    t[3] = (t[3] || t[4] || t[5] || "").replace(et, it),
                    "~=" === t[2] && (t[3] = " " + t[3] + " "),
                    t.slice(0, 4)
                },
                CHILD: function(t) {
                    return t[1] = t[1].toLowerCase(),
                    "nth" === t[1].slice(0, 3) ? (t[3] || at.error(t[0]),
                    t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])),
                    t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && at.error(t[0]),
                    t
                },
                PSEUDO: function(t) {
                    var e, i = !t[6] && t[2];
                    return Y.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : i && H.test(i) && (e = o(i, !0)) && (e = i.indexOf(")", i.length - e) - i.length) && (t[0] = t[0].slice(0, e),
                    t[2] = i.slice(0, e)),
                    t.slice(0, 3))
                }
            },
            filter: {
                TAG: function(t) {
                    var e = t.replace(et, it).toLowerCase();
                    return "*" === t ? function() {
                        return !0
                    }
                    : function(t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e
                    }
                },
                CLASS: function(t) {
                    var e = S[t + " "];
                    return e || (e = new RegExp("(^|" + F + ")" + t + "(" + F + "|$)")) && S(t, (function(t) {
                        return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "")
                    }
                    ))
                },
                ATTR: function(t, e, i) {
                    return function(n) {
                        var r = at.attr(n, t);
                        return null == r ? "!=" === e : !e || (r += "",
                        "=" === e ? r === i : "!=" === e ? r !== i : "^=" === e ? i && 0 === r.indexOf(i) : "*=" === e ? i && -1 < r.indexOf(i) : "$=" === e ? i && r.slice(-i.length) === i : "~=" === e ? -1 < (" " + r.replace(U, " ") + " ").indexOf(i) : "|=" === e && (r === i || r.slice(0, i.length + 1) === i + "-"))
                    }
                },
                CHILD: function(t, e, i, n, r) {
                    var s = "nth" !== t.slice(0, 3)
                      , o = "last" !== t.slice(-4)
                      , a = "of-type" === e;
                    return 1 === n && 0 === r ? function(t) {
                        return !!t.parentNode
                    }
                    : function(e, i, h) {
                        var c, l, u, p, d, f, g = s !== o ? "nextSibling" : "previousSibling", y = e.parentNode, m = a && e.nodeName.toLowerCase(), _ = !h && !a, v = !1;
                        if (y) {
                            if (s) {
                                for (; g; ) {
                                    for (p = e; p = p[g]; )
                                        if (a ? p.nodeName.toLowerCase() === m : 1 === p.nodeType)
                                            return !1;
                                    f = g = "only" === t && !f && "nextSibling"
                                }
                                return !0
                            }
                            if (f = [o ? y.firstChild : y.lastChild],
                            o && _) {
                                for (v = (d = (c = (l = (u = (p = y)[b] || (p[b] = {}))[p.uniqueID] || (u[p.uniqueID] = {}))[t] || [])[0] === x && c[1]) && c[2],
                                p = d && y.childNodes[d]; p = ++d && p && p[g] || (v = d = 0) || f.pop(); )
                                    if (1 === p.nodeType && ++v && p === e) {
                                        l[t] = [x, d, v];
                                        break
                                    }
                            } else if (_ && (v = d = (c = (l = (u = (p = e)[b] || (p[b] = {}))[p.uniqueID] || (u[p.uniqueID] = {}))[t] || [])[0] === x && c[1]),
                            !1 === v)
                                for (; (p = ++d && p && p[g] || (v = d = 0) || f.pop()) && ((a ? p.nodeName.toLowerCase() !== m : 1 !== p.nodeType) || !++v || (_ && ((l = (u = p[b] || (p[b] = {}))[p.uniqueID] || (u[p.uniqueID] = {}))[t] = [x, v]),
                                p !== e)); )
                                    ;
                            return (v -= r) === n || v % n == 0 && 0 <= v / n
                        }
                    }
                },
                PSEUDO: function(t, e) {
                    var i, r = n.pseudos[t] || n.setFilters[t.toLowerCase()] || at.error("unsupported pseudo: " + t);
                    return r[b] ? r(e) : 1 < r.length ? (i = [t, t, "", e],
                    n.setFilters.hasOwnProperty(t.toLowerCase()) ? ct((function(t, i) {
                        for (var n, s = r(t, e), o = s.length; o--; )
                            t[n = B(t, s[o])] = !(i[n] = s[o])
                    }
                    )) : function(t) {
                        return r(t, 0, i)
                    }
                    ) : r
                }
            },
            pseudos: {
                not: ct((function(t) {
                    var e = []
                      , i = []
                      , n = a(t.replace(q, "$1"));
                    return n[b] ? ct((function(t, e, i, r) {
                        for (var s, o = n(t, null, r, []), a = t.length; a--; )
                            (s = o[a]) && (t[a] = !(e[a] = s))
                    }
                    )) : function(t, r, s) {
                        return e[0] = t,
                        n(e, null, s, i),
                        e[0] = null,
                        !i.pop()
                    }
                }
                )),
                has: ct((function(t) {
                    return function(e) {
                        return 0 < at(t, e).length
                    }
                }
                )),
                contains: ct((function(t) {
                    return t = t.replace(et, it),
                    function(e) {
                        return -1 < (e.textContent || r(e)).indexOf(t)
                    }
                }
                )),
                lang: ct((function(t) {
                    return X.test(t || "") || at.error("unsupported lang: " + t),
                    t = t.replace(et, it).toLowerCase(),
                    function(e) {
                        var i;
                        do {
                            if (i = g ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                                return (i = i.toLowerCase()) === t || 0 === i.indexOf(t + "-")
                        } while ((e = e.parentNode) && 1 === e.nodeType);
                        return !1
                    }
                }
                )),
                target: function(e) {
                    var i = t.location && t.location.hash;
                    return i && i.slice(1) === e.id
                },
                root: function(t) {
                    return t === f
                },
                focus: function(t) {
                    return t === d.activeElement && (!d.hasFocus || d.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                },
                enabled: gt(!1),
                disabled: gt(!0),
                checked: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && !!t.checked || "option" === e && !!t.selected
                },
                selected: function(t) {
                    return t.parentNode && t.parentNode.selectedIndex,
                    !0 === t.selected
                },
                empty: function(t) {
                    for (t = t.firstChild; t; t = t.nextSibling)
                        if (t.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(t) {
                    return !n.pseudos.empty(t)
                },
                header: function(t) {
                    return K.test(t.nodeName)
                },
                input: function(t) {
                    return Q.test(t.nodeName)
                },
                button: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && "button" === t.type || "button" === e
                },
                text: function(t) {
                    var e;
                    return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                },
                first: yt((function() {
                    return [0]
                }
                )),
                last: yt((function(t, e) {
                    return [e - 1]
                }
                )),
                eq: yt((function(t, e, i) {
                    return [i < 0 ? i + e : i]
                }
                )),
                even: yt((function(t, e) {
                    for (var i = 0; i < e; i += 2)
                        t.push(i);
                    return t
                }
                )),
                odd: yt((function(t, e) {
                    for (var i = 1; i < e; i += 2)
                        t.push(i);
                    return t
                }
                )),
                lt: yt((function(t, e, i) {
                    for (var n = i < 0 ? i + e : e < i ? e : i; 0 <= --n; )
                        t.push(n);
                    return t
                }
                )),
                gt: yt((function(t, e, i) {
                    for (var n = i < 0 ? i + e : i; ++n < e; )
                        t.push(n);
                    return t
                }
                ))
            }
        }).pseudos.nth = n.pseudos.eq,
        {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            n.pseudos[e] = dt(e);
        for (e in {
            submit: !0,
            reset: !0
        })
            n.pseudos[e] = ft(e);
        function _t() {}
        function vt(t) {
            for (var e = 0, i = t.length, n = ""; e < i; e++)
                n += t[e].value;
            return n
        }
        function bt(t, e, i) {
            var n = e.dir
              , r = e.next
              , s = r || n
              , o = i && "parentNode" === s
              , a = T++;
            return e.first ? function(e, i, r) {
                for (; e = e[n]; )
                    if (1 === e.nodeType || o)
                        return t(e, i, r);
                return !1
            }
            : function(e, i, h) {
                var c, l, u, p = [x, a];
                if (h) {
                    for (; e = e[n]; )
                        if ((1 === e.nodeType || o) && t(e, i, h))
                            return !0
                } else
                    for (; e = e[n]; )
                        if (1 === e.nodeType || o)
                            if (l = (u = e[b] || (e[b] = {}))[e.uniqueID] || (u[e.uniqueID] = {}),
                            r && r === e.nodeName.toLowerCase())
                                e = e[n] || e;
                            else {
                                if ((c = l[s]) && c[0] === x && c[1] === a)
                                    return p[2] = c[2];
                                if ((l[s] = p)[2] = t(e, i, h))
                                    return !0
                            }
                return !1
            }
        }
        function wt(t) {
            return 1 < t.length ? function(e, i, n) {
                for (var r = t.length; r--; )
                    if (!t[r](e, i, n))
                        return !1;
                return !0
            }
            : t[0]
        }
        function xt(t, e, i, n, r) {
            for (var s, o = [], a = 0, h = t.length, c = null != e; a < h; a++)
                (s = t[a]) && (i && !i(s, n, r) || (o.push(s),
                c && e.push(a)));
            return o
        }
        function Tt(t, e, i, n, r, s) {
            return n && !n[b] && (n = Tt(n)),
            r && !r[b] && (r = Tt(r, s)),
            ct((function(s, o, a, h) {
                var c, l, u, p = [], d = [], f = o.length, g = s || function(t, e, i) {
                    for (var n = 0, r = e.length; n < r; n++)
                        at(t, e[n], i);
                    return i
                }(e || "*", a.nodeType ? [a] : a, []), y = !t || !s && e ? g : xt(g, p, t, a, h), m = i ? r || (s ? t : f || n) ? [] : o : y;
                if (i && i(y, m, a, h),
                n)
                    for (c = xt(m, d),
                    n(c, [], a, h),
                    l = c.length; l--; )
                        (u = c[l]) && (m[d[l]] = !(y[d[l]] = u));
                if (s) {
                    if (r || t) {
                        if (r) {
                            for (c = [],
                            l = m.length; l--; )
                                (u = m[l]) && c.push(y[l] = u);
                            r(null, m = [], c, h)
                        }
                        for (l = m.length; l--; )
                            (u = m[l]) && -1 < (c = r ? B(s, u) : p[l]) && (s[c] = !(o[c] = u))
                    }
                } else
                    m = xt(m === o ? m.splice(f, m.length) : m),
                    r ? r(null, o, m, h) : I.apply(o, m)
            }
            ))
        }
        function St(t) {
            for (var e, i, r, s = t.length, o = n.relative[t[0].type], a = o || n.relative[" "], h = o ? 1 : 0, l = bt((function(t) {
                return t === e
            }
            ), a, !0), u = bt((function(t) {
                return -1 < B(e, t)
            }
            ), a, !0), p = [function(t, i, n) {
                var r = !o && (n || i !== c) || ((e = i).nodeType ? l(t, i, n) : u(t, i, n));
                return e = null,
                r
            }
            ]; h < s; h++)
                if (i = n.relative[t[h].type])
                    p = [bt(wt(p), i)];
                else {
                    if ((i = n.filter[t[h].type].apply(null, t[h].matches))[b]) {
                        for (r = ++h; r < s && !n.relative[t[r].type]; r++)
                            ;
                        return Tt(1 < h && wt(p), 1 < h && vt(t.slice(0, h - 1).concat({
                            value: " " === t[h - 2].type ? "*" : ""
                        })).replace(q, "$1"), i, h < r && St(t.slice(h, r)), r < s && St(t = t.slice(r)), r < s && vt(t))
                    }
                    p.push(i)
                }
            return wt(p)
        }
        return _t.prototype = n.filters = n.pseudos,
        n.setFilters = new _t,
        o = at.tokenize = function(t, e) {
            var i, r, s, o, a, h, c, l = C[t + " "];
            if (l)
                return e ? 0 : l.slice(0);
            for (a = t,
            h = [],
            c = n.preFilter; a; ) {
                for (o in i && !(r = V.exec(a)) || (r && (a = a.slice(r[0].length) || a),
                h.push(s = [])),
                i = !1,
                (r = z.exec(a)) && (i = r.shift(),
                s.push({
                    value: i,
                    type: r[0].replace(q, " ")
                }),
                a = a.slice(i.length)),
                n.filter)
                    !(r = Y[o].exec(a)) || c[o] && !(r = c[o](r)) || (i = r.shift(),
                    s.push({
                        value: i,
                        type: o,
                        matches: r
                    }),
                    a = a.slice(i.length));
                if (!i)
                    break
            }
            return e ? a.length : a ? at.error(t) : C(t, h).slice(0)
        }
        ,
        a = at.compile = function(t, e) {
            var i, r, s, a, h, l, u = [], f = [], y = A[t + " "];
            if (!y) {
                for (e || (e = o(t)),
                i = e.length; i--; )
                    (y = St(e[i]))[b] ? u.push(y) : f.push(y);
                (y = A(t, (r = f,
                a = 0 < (s = u).length,
                h = 0 < r.length,
                l = function(t, e, i, o, l) {
                    var u, f, y, m = 0, _ = "0", v = t && [], b = [], w = c, T = t || h && n.find.TAG("*", l), S = x += null == w ? 1 : Math.random() || .1, C = T.length;
                    for (l && (c = e === d || e || l); _ !== C && null != (u = T[_]); _++) {
                        if (h && u) {
                            for (f = 0,
                            e || u.ownerDocument === d || (p(u),
                            i = !g); y = r[f++]; )
                                if (y(u, e || d, i)) {
                                    o.push(u);
                                    break
                                }
                            l && (x = S)
                        }
                        a && ((u = !y && u) && m--,
                        t && v.push(u))
                    }
                    if (m += _,
                    a && _ !== m) {
                        for (f = 0; y = s[f++]; )
                            y(v, b, e, i);
                        if (t) {
                            if (0 < m)
                                for (; _--; )
                                    v[_] || b[_] || (b[_] = R.call(o));
                            b = xt(b)
                        }
                        I.apply(o, b),
                        l && !t && 0 < b.length && 1 < m + s.length && at.uniqueSort(o)
                    }
                    return l && (x = S,
                    c = w),
                    v
                }
                ,
                a ? ct(l) : l))).selector = t
            }
            return y
        }
        ,
        h = at.select = function(t, e, i, r) {
            var s, h, c, l, u, p = "function" == typeof t && t, d = !r && o(t = p.selector || t);
            if (i = i || [],
            1 === d.length) {
                if (2 < (h = d[0] = d[0].slice(0)).length && "ID" === (c = h[0]).type && 9 === e.nodeType && g && n.relative[h[1].type]) {
                    if (!(e = (n.find.ID(c.matches[0].replace(et, it), e) || [])[0]))
                        return i;
                    p && (e = e.parentNode),
                    t = t.slice(h.shift().value.length)
                }
                for (s = Y.needsContext.test(t) ? 0 : h.length; s-- && (c = h[s],
                !n.relative[l = c.type]); )
                    if ((u = n.find[l]) && (r = u(c.matches[0].replace(et, it), tt.test(h[0].type) && mt(e.parentNode) || e))) {
                        if (h.splice(s, 1),
                        !(t = r.length && vt(h)))
                            return I.apply(i, r),
                            i;
                        break
                    }
            }
            return (p || a(t, d))(r, e, !g, i, !e || tt.test(t) && mt(e.parentNode) || e),
            i
        }
        ,
        i.sortStable = b.split("").sort(E).join("") === b,
        i.detectDuplicates = !!u,
        p(),
        i.sortDetached = lt((function(t) {
            return 1 & t.compareDocumentPosition(d.createElement("fieldset"))
        }
        )),
        lt((function(t) {
            return t.innerHTML = "<a href='#'></a>",
            "#" === t.firstChild.getAttribute("href")
        }
        )) || ut("type|href|height|width", (function(t, e, i) {
            if (!i)
                return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
        }
        )),
        i.attributes && lt((function(t) {
            return t.innerHTML = "<input/>",
            t.firstChild.setAttribute("value", ""),
            "" === t.firstChild.getAttribute("value")
        }
        )) || ut("value", (function(t, e, i) {
            if (!i && "input" === t.nodeName.toLowerCase())
                return t.defaultValue
        }
        )),
        lt((function(t) {
            return null == t.getAttribute("disabled")
        }
        )) || ut(D, (function(t, e, i) {
            var n;
            if (!i)
                return !0 === t[e] ? e.toLowerCase() : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
        }
        )),
        at
    }(t);
    w.find = S,
    w.expr = S.selectors,
    w.expr[":"] = w.expr.pseudos,
    w.uniqueSort = w.unique = S.uniqueSort,
    w.text = S.getText,
    w.isXMLDoc = S.isXML,
    w.contains = S.contains,
    w.escapeSelector = S.escape;
    var C = function(t, e, i) {
        for (var n = [], r = void 0 !== i; (t = t[e]) && 9 !== t.nodeType; )
            if (1 === t.nodeType) {
                if (r && w(t).is(i))
                    break;
                n.push(t)
            }
        return n
    }
      , A = function(t, e) {
        for (var i = []; t; t = t.nextSibling)
            1 === t.nodeType && t !== e && i.push(t);
        return i
    }
      , k = w.expr.match.needsContext;
    function E(t, e) {
        return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
    }
    var O = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    function P(t, e, i) {
        return g(e) ? w.grep(t, (function(t, n) {
            return !!e.call(t, n, t) !== i
        }
        )) : e.nodeType ? w.grep(t, (function(t) {
            return t === e !== i
        }
        )) : "string" != typeof e ? w.grep(t, (function(t) {
            return -1 < h.call(e, t) !== i
        }
        )) : w.filter(e, t, i)
    }
    w.filter = function(t, e, i) {
        var n = e[0];
        return i && (t = ":not(" + t + ")"),
        1 === e.length && 1 === n.nodeType ? w.find.matchesSelector(n, t) ? [n] : [] : w.find.matches(t, w.grep(e, (function(t) {
            return 1 === t.nodeType
        }
        )))
    }
    ,
    w.fn.extend({
        find: function(t) {
            var e, i, n = this.length, r = this;
            if ("string" != typeof t)
                return this.pushStack(w(t).filter((function() {
                    for (e = 0; e < n; e++)
                        if (w.contains(r[e], this))
                            return !0
                }
                )));
            for (i = this.pushStack([]),
            e = 0; e < n; e++)
                w.find(t, r[e], i);
            return 1 < n ? w.uniqueSort(i) : i
        },
        filter: function(t) {
            return this.pushStack(P(this, t || [], !1))
        },
        not: function(t) {
            return this.pushStack(P(this, t || [], !0))
        },
        is: function(t) {
            return !!P(this, "string" == typeof t && k.test(t) ? w(t) : t || [], !1).length
        }
    });
    var R, N = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (w.fn.init = function(t, e, i) {
        var r, s;
        if (!t)
            return this;
        if (i = i || R,
        "string" == typeof t) {
            if (!(r = "<" === t[0] && ">" === t[t.length - 1] && 3 <= t.length ? [null, t, null] : N.exec(t)) || !r[1] && e)
                return !e || e.jquery ? (e || i).find(t) : this.constructor(e).find(t);
            if (r[1]) {
                if (e = e instanceof w ? e[0] : e,
                w.merge(this, w.parseHTML(r[1], e && e.nodeType ? e.ownerDocument || e : n, !0)),
                O.test(r[1]) && w.isPlainObject(e))
                    for (r in e)
                        g(this[r]) ? this[r](e[r]) : this.attr(r, e[r]);
                return this
            }
            return (s = n.getElementById(r[2])) && (this[0] = s,
            this.length = 1),
            this
        }
        return t.nodeType ? (this[0] = t,
        this.length = 1,
        this) : g(t) ? void 0 !== i.ready ? i.ready(t) : t(w) : w.makeArray(t, this)
    }
    ).prototype = w.fn,
    R = w(n);
    var I = /^(?:parents|prev(?:Until|All))/
      , L = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    function B(t, e) {
        for (; (t = t[e]) && 1 !== t.nodeType; )
            ;
        return t
    }
    w.fn.extend({
        has: function(t) {
            var e = w(t, this)
              , i = e.length;
            return this.filter((function() {
                for (var t = 0; t < i; t++)
                    if (w.contains(this, e[t]))
                        return !0
            }
            ))
        },
        closest: function(t, e) {
            var i, n = 0, r = this.length, s = [], o = "string" != typeof t && w(t);
            if (!k.test(t))
                for (; n < r; n++)
                    for (i = this[n]; i && i !== e; i = i.parentNode)
                        if (i.nodeType < 11 && (o ? -1 < o.index(i) : 1 === i.nodeType && w.find.matchesSelector(i, t))) {
                            s.push(i);
                            break
                        }
            return this.pushStack(1 < s.length ? w.uniqueSort(s) : s)
        },
        index: function(t) {
            return t ? "string" == typeof t ? h.call(w(t), this[0]) : h.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(t, e) {
            return this.pushStack(w.uniqueSort(w.merge(this.get(), w(t, e))))
        },
        addBack: function(t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }
    }),
    w.each({
        parent: function(t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e : null
        },
        parents: function(t) {
            return C(t, "parentNode")
        },
        parentsUntil: function(t, e, i) {
            return C(t, "parentNode", i)
        },
        next: function(t) {
            return B(t, "nextSibling")
        },
        prev: function(t) {
            return B(t, "previousSibling")
        },
        nextAll: function(t) {
            return C(t, "nextSibling")
        },
        prevAll: function(t) {
            return C(t, "previousSibling")
        },
        nextUntil: function(t, e, i) {
            return C(t, "nextSibling", i)
        },
        prevUntil: function(t, e, i) {
            return C(t, "previousSibling", i)
        },
        siblings: function(t) {
            return A((t.parentNode || {}).firstChild, t)
        },
        children: function(t) {
            return A(t.firstChild)
        },
        contents: function(t) {
            return void 0 !== t.contentDocument ? t.contentDocument : (E(t, "template") && (t = t.content || t),
            w.merge([], t.childNodes))
        }
    }, (function(t, e) {
        w.fn[t] = function(i, n) {
            var r = w.map(this, e, i);
            return "Until" !== t.slice(-5) && (n = i),
            n && "string" == typeof n && (r = w.filter(n, r)),
            1 < this.length && (L[t] || w.uniqueSort(r),
            I.test(t) && r.reverse()),
            this.pushStack(r)
        }
    }
    ));
    var D = /[^\x20\t\r\n\f]+/g;
    function F(t) {
        return t
    }
    function M(t) {
        throw t
    }
    function j(t, e, i, n) {
        var r;
        try {
            t && g(r = t.promise) ? r.call(t).done(e).fail(i) : t && g(r = t.then) ? r.call(t, e, i) : e.apply(void 0, [t].slice(n))
        } catch (t) {
            i.apply(void 0, [t])
        }
    }
    w.Callbacks = function(t) {
        var e, i;
        t = "string" == typeof t ? (e = t,
        i = {},
        w.each(e.match(D) || [], (function(t, e) {
            i[e] = !0
        }
        )),
        i) : w.extend({}, t);
        var n, r, s, o, a = [], h = [], c = -1, l = function() {
            for (o = o || t.once,
            s = n = !0; h.length; c = -1)
                for (r = h.shift(); ++c < a.length; )
                    !1 === a[c].apply(r[0], r[1]) && t.stopOnFalse && (c = a.length,
                    r = !1);
            t.memory || (r = !1),
            n = !1,
            o && (a = r ? [] : "")
        }, u = {
            add: function() {
                return a && (r && !n && (c = a.length - 1,
                h.push(r)),
                function e(i) {
                    w.each(i, (function(i, n) {
                        g(n) ? t.unique && u.has(n) || a.push(n) : n && n.length && "string" !== v(n) && e(n)
                    }
                    ))
                }(arguments),
                r && !n && l()),
                this
            },
            remove: function() {
                return w.each(arguments, (function(t, e) {
                    for (var i; -1 < (i = w.inArray(e, a, i)); )
                        a.splice(i, 1),
                        i <= c && c--
                }
                )),
                this
            },
            has: function(t) {
                return t ? -1 < w.inArray(t, a) : 0 < a.length
            },
            empty: function() {
                return a && (a = []),
                this
            },
            disable: function() {
                return o = h = [],
                a = r = "",
                this
            },
            disabled: function() {
                return !a
            },
            lock: function() {
                return o = h = [],
                r || n || (a = r = ""),
                this
            },
            locked: function() {
                return !!o
            },
            fireWith: function(t, e) {
                return o || (e = [t, (e = e || []).slice ? e.slice() : e],
                h.push(e),
                n || l()),
                this
            },
            fire: function() {
                return u.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!s
            }
        };
        return u
    }
    ,
    w.extend({
        Deferred: function(e) {
            var i = [["notify", "progress", w.Callbacks("memory"), w.Callbacks("memory"), 2], ["resolve", "done", w.Callbacks("once memory"), w.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", w.Callbacks("once memory"), w.Callbacks("once memory"), 1, "rejected"]]
              , n = "pending"
              , r = {
                state: function() {
                    return n
                },
                always: function() {
                    return s.done(arguments).fail(arguments),
                    this
                },
                catch: function(t) {
                    return r.then(null, t)
                },
                pipe: function() {
                    var t = arguments;
                    return w.Deferred((function(e) {
                        w.each(i, (function(i, n) {
                            var r = g(t[n[4]]) && t[n[4]];
                            s[n[1]]((function() {
                                var t = r && r.apply(this, arguments);
                                t && g(t.promise) ? t.promise().progress(e.notify).done(e.resolve).fail(e.reject) : e[n[0] + "With"](this, r ? [t] : arguments)
                            }
                            ))
                        }
                        )),
                        t = null
                    }
                    )).promise()
                },
                then: function(e, n, r) {
                    var s = 0;
                    function o(e, i, n, r) {
                        return function() {
                            var a = this
                              , h = arguments
                              , c = function() {
                                var t, c;
                                if (!(e < s)) {
                                    if ((t = n.apply(a, h)) === i.promise())
                                        throw new TypeError("Thenable self-resolution");
                                    c = t && ("object" == typeof t || "function" == typeof t) && t.then,
                                    g(c) ? r ? c.call(t, o(s, i, F, r), o(s, i, M, r)) : (s++,
                                    c.call(t, o(s, i, F, r), o(s, i, M, r), o(s, i, F, i.notifyWith))) : (n !== F && (a = void 0,
                                    h = [t]),
                                    (r || i.resolveWith)(a, h))
                                }
                            }
                              , l = r ? c : function() {
                                try {
                                    c()
                                } catch (t) {
                                    w.Deferred.exceptionHook && w.Deferred.exceptionHook(t, l.stackTrace),
                                    s <= e + 1 && (n !== M && (a = void 0,
                                    h = [t]),
                                    i.rejectWith(a, h))
                                }
                            }
                            ;
                            e ? l() : (w.Deferred.getStackHook && (l.stackTrace = w.Deferred.getStackHook()),
                            t.setTimeout(l))
                        }
                    }
                    return w.Deferred((function(t) {
                        i[0][3].add(o(0, t, g(r) ? r : F, t.notifyWith)),
                        i[1][3].add(o(0, t, g(e) ? e : F)),
                        i[2][3].add(o(0, t, g(n) ? n : M))
                    }
                    )).promise()
                },
                promise: function(t) {
                    return null != t ? w.extend(t, r) : r
                }
            }
              , s = {};
            return w.each(i, (function(t, e) {
                var o = e[2]
                  , a = e[5];
                r[e[1]] = o.add,
                a && o.add((function() {
                    n = a
                }
                ), i[3 - t][2].disable, i[3 - t][3].disable, i[0][2].lock, i[0][3].lock),
                o.add(e[3].fire),
                s[e[0]] = function() {
                    return s[e[0] + "With"](this === s ? void 0 : this, arguments),
                    this
                }
                ,
                s[e[0] + "With"] = o.fireWith
            }
            )),
            r.promise(s),
            e && e.call(s, s),
            s
        },
        when: function(t) {
            var e = arguments.length
              , i = e
              , n = Array(i)
              , r = s.call(arguments)
              , o = w.Deferred()
              , a = function(t) {
                return function(i) {
                    n[t] = this,
                    r[t] = 1 < arguments.length ? s.call(arguments) : i,
                    --e || o.resolveWith(n, r)
                }
            };
            if (e <= 1 && (j(t, o.done(a(i)).resolve, o.reject, !e),
            "pending" === o.state() || g(r[i] && r[i].then)))
                return o.then();
            for (; i--; )
                j(r[i], a(i), o.reject);
            return o.promise()
        }
    });
    var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    w.Deferred.exceptionHook = function(e, i) {
        t.console && t.console.warn && e && W.test(e.name) && t.console.warn("jQuery.Deferred exception: " + e.message, e.stack, i)
    }
    ,
    w.readyException = function(e) {
        t.setTimeout((function() {
            throw e
        }
        ))
    }
    ;
    var U = w.Deferred();
    function q() {
        n.removeEventListener("DOMContentLoaded", q),
        t.removeEventListener("load", q),
        w.ready()
    }
    w.fn.ready = function(t) {
        return U.then(t).catch((function(t) {
            w.readyException(t)
        }
        )),
        this
    }
    ,
    w.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(t) {
            (!0 === t ? --w.readyWait : w.isReady) || (w.isReady = !0) !== t && 0 < --w.readyWait || U.resolveWith(n, [w])
        }
    }),
    w.ready.then = U.then,
    "complete" === n.readyState || "loading" !== n.readyState && !n.documentElement.doScroll ? t.setTimeout(w.ready) : (n.addEventListener("DOMContentLoaded", q),
    t.addEventListener("load", q));
    var V = function(t, e, i, n, r, s, o) {
        var a = 0
          , h = t.length
          , c = null == i;
        if ("object" === v(i))
            for (a in r = !0,
            i)
                V(t, e, a, i[a], !0, s, o);
        else if (void 0 !== n && (r = !0,
        g(n) || (o = !0),
        c && (o ? (e.call(t, n),
        e = null) : (c = e,
        e = function(t, e, i) {
            return c.call(w(t), i)
        }
        )),
        e))
            for (; a < h; a++)
                e(t[a], i, o ? n : n.call(t[a], a, e(t[a], i)));
        return r ? t : c ? e.call(t) : h ? e(t[0], i) : s
    }
      , z = /^-ms-/
      , G = /-([a-z])/g;
    function H(t, e) {
        return e.toUpperCase()
    }
    function X(t) {
        return t.replace(z, "ms-").replace(G, H)
    }
    var Y = function(t) {
        return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
    };
    function J() {
        this.expando = w.expando + J.uid++
    }
    J.uid = 1,
    J.prototype = {
        cache: function(t) {
            var e = t[this.expando];
            return e || (e = {},
            Y(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
                value: e,
                configurable: !0
            }))),
            e
        },
        set: function(t, e, i) {
            var n, r = this.cache(t);
            if ("string" == typeof e)
                r[X(e)] = i;
            else
                for (n in e)
                    r[X(n)] = e[n];
            return r
        },
        get: function(t, e) {
            return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][X(e)]
        },
        access: function(t, e, i) {
            return void 0 === e || e && "string" == typeof e && void 0 === i ? this.get(t, e) : (this.set(t, e, i),
            void 0 !== i ? i : e)
        },
        remove: function(t, e) {
            var i, n = t[this.expando];
            if (void 0 !== n) {
                if (void 0 !== e) {
                    i = (e = Array.isArray(e) ? e.map(X) : (e = X(e))in n ? [e] : e.match(D) || []).length;
                    for (; i--; )
                        delete n[e[i]]
                }
                (void 0 === e || w.isEmptyObject(n)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando])
            }
        },
        hasData: function(t) {
            var e = t[this.expando];
            return void 0 !== e && !w.isEmptyObject(e)
        }
    };
    var Q = new J
      , K = new J
      , Z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
      , $ = /[A-Z]/g;
    function tt(t, e, i) {
        var n, r;
        if (void 0 === i && 1 === t.nodeType)
            if (n = "data-" + e.replace($, "-$&").toLowerCase(),
            "string" == typeof (i = t.getAttribute(n))) {
                try {
                    i = "true" === (r = i) || "false" !== r && ("null" === r ? null : r === +r + "" ? +r : Z.test(r) ? JSON.parse(r) : r)
                } catch (t) {}
                K.set(t, e, i)
            } else
                i = void 0;
        return i
    }
    w.extend({
        hasData: function(t) {
            return K.hasData(t) || Q.hasData(t)
        },
        data: function(t, e, i) {
            return K.access(t, e, i)
        },
        removeData: function(t, e) {
            K.remove(t, e)
        },
        _data: function(t, e, i) {
            return Q.access(t, e, i)
        },
        _removeData: function(t, e) {
            Q.remove(t, e)
        }
    }),
    w.fn.extend({
        data: function(t, e) {
            var i, n, r, s = this[0], o = s && s.attributes;
            if (void 0 === t) {
                if (this.length && (r = K.get(s),
                1 === s.nodeType && !Q.get(s, "hasDataAttrs"))) {
                    for (i = o.length; i--; )
                        o[i] && 0 === (n = o[i].name).indexOf("data-") && (n = X(n.slice(5)),
                        tt(s, n, r[n]));
                    Q.set(s, "hasDataAttrs", !0)
                }
                return r
            }
            return "object" == typeof t ? this.each((function() {
                K.set(this, t)
            }
            )) : V(this, (function(e) {
                var i;
                if (s && void 0 === e)
                    return void 0 !== (i = K.get(s, t)) ? i : void 0 !== (i = tt(s, t)) ? i : void 0;
                this.each((function() {
                    K.set(this, t, e)
                }
                ))
            }
            ), null, e, 1 < arguments.length, null, !0)
        },
        removeData: function(t) {
            return this.each((function() {
                K.remove(this, t)
            }
            ))
        }
    }),
    w.extend({
        queue: function(t, e, i) {
            var n;
            if (t)
                return e = (e || "fx") + "queue",
                n = Q.get(t, e),
                i && (!n || Array.isArray(i) ? n = Q.access(t, e, w.makeArray(i)) : n.push(i)),
                n || []
        },
        dequeue: function(t, e) {
            e = e || "fx";
            var i = w.queue(t, e)
              , n = i.length
              , r = i.shift()
              , s = w._queueHooks(t, e);
            "inprogress" === r && (r = i.shift(),
            n--),
            r && ("fx" === e && i.unshift("inprogress"),
            delete s.stop,
            r.call(t, (function() {
                w.dequeue(t, e)
            }
            ), s)),
            !n && s && s.empty.fire()
        },
        _queueHooks: function(t, e) {
            var i = e + "queueHooks";
            return Q.get(t, i) || Q.access(t, i, {
                empty: w.Callbacks("once memory").add((function() {
                    Q.remove(t, [e + "queue", i])
                }
                ))
            })
        }
    }),
    w.fn.extend({
        queue: function(t, e) {
            var i = 2;
            return "string" != typeof t && (e = t,
            t = "fx",
            i--),
            arguments.length < i ? w.queue(this[0], t) : void 0 === e ? this : this.each((function() {
                var i = w.queue(this, t, e);
                w._queueHooks(this, t),
                "fx" === t && "inprogress" !== i[0] && w.dequeue(this, t)
            }
            ))
        },
        dequeue: function(t) {
            return this.each((function() {
                w.dequeue(this, t)
            }
            ))
        },
        clearQueue: function(t) {
            return this.queue(t || "fx", [])
        },
        promise: function(t, e) {
            var i, n = 1, r = w.Deferred(), s = this, o = this.length, a = function() {
                --n || r.resolveWith(s, [s])
            };
            for ("string" != typeof t && (e = t,
            t = void 0),
            t = t || "fx"; o--; )
                (i = Q.get(s[o], t + "queueHooks")) && i.empty && (n++,
                i.empty.add(a));
            return a(),
            r.promise(e)
        }
    });
    var et = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
      , it = new RegExp("^(?:([+-])=|)(" + et + ")([a-z%]*)$","i")
      , nt = ["Top", "Right", "Bottom", "Left"]
      , rt = n.documentElement
      , st = function(t) {
        return w.contains(t.ownerDocument, t)
    }
      , ot = {
        composed: !0
    };
    rt.getRootNode && (st = function(t) {
        return w.contains(t.ownerDocument, t) || t.getRootNode(ot) === t.ownerDocument
    }
    );
    var at = function(t, e) {
        return "none" === (t = e || t).style.display || "" === t.style.display && st(t) && "none" === w.css(t, "display")
    }
      , ht = function(t, e, i, n) {
        var r, s, o = {};
        for (s in e)
            o[s] = t.style[s],
            t.style[s] = e[s];
        for (s in r = i.apply(t, n || []),
        e)
            t.style[s] = o[s];
        return r
    };
    function ct(t, e, i, n) {
        var r, s, o = 20, a = n ? function() {
            return n.cur()
        }
        : function() {
            return w.css(t, e, "")
        }
        , h = a(), c = i && i[3] || (w.cssNumber[e] ? "" : "px"), l = t.nodeType && (w.cssNumber[e] || "px" !== c && +h) && it.exec(w.css(t, e));
        if (l && l[3] !== c) {
            for (h /= 2,
            c = c || l[3],
            l = +h || 1; o--; )
                w.style(t, e, l + c),
                (1 - s) * (1 - (s = a() / h || .5)) <= 0 && (o = 0),
                l /= s;
            l *= 2,
            w.style(t, e, l + c),
            i = i || []
        }
        return i && (l = +l || +h || 0,
        r = i[1] ? l + (i[1] + 1) * i[2] : +i[2],
        n && (n.unit = c,
        n.start = l,
        n.end = r)),
        r
    }
    var lt = {};
    function ut(t, e) {
        for (var i, n, r, s, o, a, h, c = [], l = 0, u = t.length; l < u; l++)
            (n = t[l]).style && (i = n.style.display,
            e ? ("none" === i && (c[l] = Q.get(n, "display") || null,
            c[l] || (n.style.display = "")),
            "" === n.style.display && at(n) && (c[l] = (h = o = s = void 0,
            o = (r = n).ownerDocument,
            a = r.nodeName,
            (h = lt[a]) || (s = o.body.appendChild(o.createElement(a)),
            h = w.css(s, "display"),
            s.parentNode.removeChild(s),
            "none" === h && (h = "block"),
            lt[a] = h)))) : "none" !== i && (c[l] = "none",
            Q.set(n, "display", i)));
        for (l = 0; l < u; l++)
            null != c[l] && (t[l].style.display = c[l]);
        return t
    }
    w.fn.extend({
        show: function() {
            return ut(this, !0)
        },
        hide: function() {
            return ut(this)
        },
        toggle: function(t) {
            return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each((function() {
                at(this) ? w(this).show() : w(this).hide()
            }
            ))
        }
    });
    var pt = /^(?:checkbox|radio)$/i
      , dt = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i
      , ft = /^$|^module$|\/(?:java|ecma)script/i
      , gt = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    function yt(t, e) {
        var i;
        return i = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || "*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || "*") : [],
        void 0 === e || e && E(t, e) ? w.merge([t], i) : i
    }
    function mt(t, e) {
        for (var i = 0, n = t.length; i < n; i++)
            Q.set(t[i], "globalEval", !e || Q.get(e[i], "globalEval"))
    }
    gt.optgroup = gt.option,
    gt.tbody = gt.tfoot = gt.colgroup = gt.caption = gt.thead,
    gt.th = gt.td;
    var _t, vt, bt = /<|&#?\w+;/;
    function wt(t, e, i, n, r) {
        for (var s, o, a, h, c, l, u = e.createDocumentFragment(), p = [], d = 0, f = t.length; d < f; d++)
            if ((s = t[d]) || 0 === s)
                if ("object" === v(s))
                    w.merge(p, s.nodeType ? [s] : s);
                else if (bt.test(s)) {
                    for (o = o || u.appendChild(e.createElement("div")),
                    a = (dt.exec(s) || ["", ""])[1].toLowerCase(),
                    h = gt[a] || gt._default,
                    o.innerHTML = h[1] + w.htmlPrefilter(s) + h[2],
                    l = h[0]; l--; )
                        o = o.lastChild;
                    w.merge(p, o.childNodes),
                    (o = u.firstChild).textContent = ""
                } else
                    p.push(e.createTextNode(s));
        for (u.textContent = "",
        d = 0; s = p[d++]; )
            if (n && -1 < w.inArray(s, n))
                r && r.push(s);
            else if (c = st(s),
            o = yt(u.appendChild(s), "script"),
            c && mt(o),
            i)
                for (l = 0; s = o[l++]; )
                    ft.test(s.type || "") && i.push(s);
        return u
    }
    _t = n.createDocumentFragment().appendChild(n.createElement("div")),
    (vt = n.createElement("input")).setAttribute("type", "radio"),
    vt.setAttribute("checked", "checked"),
    vt.setAttribute("name", "t"),
    _t.appendChild(vt),
    f.checkClone = _t.cloneNode(!0).cloneNode(!0).lastChild.checked,
    _t.innerHTML = "<textarea>x</textarea>",
    f.noCloneChecked = !!_t.cloneNode(!0).lastChild.defaultValue;
    var xt = /^key/
      , Tt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
      , St = /^([^.]*)(?:\.(.+)|)/;
    function Ct() {
        return !0
    }
    function At() {
        return !1
    }
    function kt(t, e) {
        return t === function() {
            try {
                return n.activeElement
            } catch (t) {}
        }() == ("focus" === e)
    }
    function Et(t, e, i, n, r, s) {
        var o, a;
        if ("object" == typeof e) {
            for (a in "string" != typeof i && (n = n || i,
            i = void 0),
            e)
                Et(t, a, i, n, e[a], s);
            return t
        }
        if (null == n && null == r ? (r = i,
        n = i = void 0) : null == r && ("string" == typeof i ? (r = n,
        n = void 0) : (r = n,
        n = i,
        i = void 0)),
        !1 === r)
            r = At;
        else if (!r)
            return t;
        return 1 === s && (o = r,
        (r = function(t) {
            return w().off(t),
            o.apply(this, arguments)
        }
        ).guid = o.guid || (o.guid = w.guid++)),
        t.each((function() {
            w.event.add(this, e, r, n, i)
        }
        ))
    }
    function Ot(t, e, i) {
        i ? (Q.set(t, e, !1),
        w.event.add(t, e, {
            namespace: !1,
            handler: function(t) {
                var n, r, o = Q.get(this, e);
                if (1 & t.isTrigger && this[e]) {
                    if (o.length)
                        (w.event.special[e] || {}).delegateType && t.stopPropagation();
                    else if (o = s.call(arguments),
                    Q.set(this, e, o),
                    n = i(this, e),
                    this[e](),
                    o !== (r = Q.get(this, e)) || n ? Q.set(this, e, !1) : r = {},
                    o !== r)
                        return t.stopImmediatePropagation(),
                        t.preventDefault(),
                        r.value
                } else
                    o.length && (Q.set(this, e, {
                        value: w.event.trigger(w.extend(o[0], w.Event.prototype), o.slice(1), this)
                    }),
                    t.stopImmediatePropagation())
            }
        })) : void 0 === Q.get(t, e) && w.event.add(t, e, Ct)
    }
    w.event = {
        global: {},
        add: function(t, e, i, n, r) {
            var s, o, a, h, c, l, u, p, d, f, g, y = Q.get(t);
            if (y)
                for (i.handler && (i = (s = i).handler,
                r = s.selector),
                r && w.find.matchesSelector(rt, r),
                i.guid || (i.guid = w.guid++),
                (h = y.events) || (h = y.events = {}),
                (o = y.handle) || (o = y.handle = function(e) {
                    return void 0 !== w && w.event.triggered !== e.type ? w.event.dispatch.apply(t, arguments) : void 0
                }
                ),
                c = (e = (e || "").match(D) || [""]).length; c--; )
                    d = g = (a = St.exec(e[c]) || [])[1],
                    f = (a[2] || "").split(".").sort(),
                    d && (u = w.event.special[d] || {},
                    d = (r ? u.delegateType : u.bindType) || d,
                    u = w.event.special[d] || {},
                    l = w.extend({
                        type: d,
                        origType: g,
                        data: n,
                        handler: i,
                        guid: i.guid,
                        selector: r,
                        needsContext: r && w.expr.match.needsContext.test(r),
                        namespace: f.join(".")
                    }, s),
                    (p = h[d]) || ((p = h[d] = []).delegateCount = 0,
                    u.setup && !1 !== u.setup.call(t, n, f, o) || t.addEventListener && t.addEventListener(d, o)),
                    u.add && (u.add.call(t, l),
                    l.handler.guid || (l.handler.guid = i.guid)),
                    r ? p.splice(p.delegateCount++, 0, l) : p.push(l),
                    w.event.global[d] = !0)
        },
        remove: function(t, e, i, n, r) {
            var s, o, a, h, c, l, u, p, d, f, g, y = Q.hasData(t) && Q.get(t);
            if (y && (h = y.events)) {
                for (c = (e = (e || "").match(D) || [""]).length; c--; )
                    if (d = g = (a = St.exec(e[c]) || [])[1],
                    f = (a[2] || "").split(".").sort(),
                    d) {
                        for (u = w.event.special[d] || {},
                        p = h[d = (n ? u.delegateType : u.bindType) || d] || [],
                        a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        o = s = p.length; s--; )
                            l = p[s],
                            !r && g !== l.origType || i && i.guid !== l.guid || a && !a.test(l.namespace) || n && n !== l.selector && ("**" !== n || !l.selector) || (p.splice(s, 1),
                            l.selector && p.delegateCount--,
                            u.remove && u.remove.call(t, l));
                        o && !p.length && (u.teardown && !1 !== u.teardown.call(t, f, y.handle) || w.removeEvent(t, d, y.handle),
                        delete h[d])
                    } else
                        for (d in h)
                            w.event.remove(t, d + e[c], i, n, !0);
                w.isEmptyObject(h) && Q.remove(t, "handle events")
            }
        },
        dispatch: function(t) {
            var e, i, n, r, s, o, a = w.event.fix(t), h = new Array(arguments.length), c = (Q.get(this, "events") || {})[a.type] || [], l = w.event.special[a.type] || {};
            for (h[0] = a,
            e = 1; e < arguments.length; e++)
                h[e] = arguments[e];
            if (a.delegateTarget = this,
            !l.preDispatch || !1 !== l.preDispatch.call(this, a)) {
                for (o = w.event.handlers.call(this, a, c),
                e = 0; (r = o[e++]) && !a.isPropagationStopped(); )
                    for (a.currentTarget = r.elem,
                    i = 0; (s = r.handlers[i++]) && !a.isImmediatePropagationStopped(); )
                        a.rnamespace && !1 !== s.namespace && !a.rnamespace.test(s.namespace) || (a.handleObj = s,
                        a.data = s.data,
                        void 0 !== (n = ((w.event.special[s.origType] || {}).handle || s.handler).apply(r.elem, h)) && !1 === (a.result = n) && (a.preventDefault(),
                        a.stopPropagation()));
                return l.postDispatch && l.postDispatch.call(this, a),
                a.result
            }
        },
        handlers: function(t, e) {
            var i, n, r, s, o, a = [], h = e.delegateCount, c = t.target;
            if (h && c.nodeType && !("click" === t.type && 1 <= t.button))
                for (; c !== this; c = c.parentNode || this)
                    if (1 === c.nodeType && ("click" !== t.type || !0 !== c.disabled)) {
                        for (s = [],
                        o = {},
                        i = 0; i < h; i++)
                            void 0 === o[r = (n = e[i]).selector + " "] && (o[r] = n.needsContext ? -1 < w(r, this).index(c) : w.find(r, this, null, [c]).length),
                            o[r] && s.push(n);
                        s.length && a.push({
                            elem: c,
                            handlers: s
                        })
                    }
            return c = this,
            h < e.length && a.push({
                elem: c,
                handlers: e.slice(h)
            }),
            a
        },
        addProp: function(t, e) {
            Object.defineProperty(w.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: g(e) ? function() {
                    if (this.originalEvent)
                        return e(this.originalEvent)
                }
                : function() {
                    if (this.originalEvent)
                        return this.originalEvent[t]
                }
                ,
                set: function(e) {
                    Object.defineProperty(this, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: e
                    })
                }
            })
        },
        fix: function(t) {
            return t[w.expando] ? t : new w.Event(t)
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                setup: function(t) {
                    var e = this || t;
                    return pt.test(e.type) && e.click && E(e, "input") && Ot(e, "click", Ct),
                    !1
                },
                trigger: function(t) {
                    var e = this || t;
                    return pt.test(e.type) && e.click && E(e, "input") && Ot(e, "click"),
                    !0
                },
                _default: function(t) {
                    var e = t.target;
                    return pt.test(e.type) && e.click && E(e, "input") && Q.get(e, "click") || E(e, "a")
                }
            },
            beforeunload: {
                postDispatch: function(t) {
                    void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                }
            }
        }
    },
    w.removeEvent = function(t, e, i) {
        t.removeEventListener && t.removeEventListener(e, i)
    }
    ,
    w.Event = function(t, e) {
        if (!(this instanceof w.Event))
            return new w.Event(t,e);
        t && t.type ? (this.originalEvent = t,
        this.type = t.type,
        this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? Ct : At,
        this.target = t.target && 3 === t.target.nodeType ? t.target.parentNode : t.target,
        this.currentTarget = t.currentTarget,
        this.relatedTarget = t.relatedTarget) : this.type = t,
        e && w.extend(this, e),
        this.timeStamp = t && t.timeStamp || Date.now(),
        this[w.expando] = !0
    }
    ,
    w.Event.prototype = {
        constructor: w.Event,
        isDefaultPrevented: At,
        isPropagationStopped: At,
        isImmediatePropagationStopped: At,
        isSimulated: !1,
        preventDefault: function() {
            var t = this.originalEvent;
            this.isDefaultPrevented = Ct,
            t && !this.isSimulated && t.preventDefault()
        },
        stopPropagation: function() {
            var t = this.originalEvent;
            this.isPropagationStopped = Ct,
            t && !this.isSimulated && t.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var t = this.originalEvent;
            this.isImmediatePropagationStopped = Ct,
            t && !this.isSimulated && t.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    w.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(t) {
            var e = t.button;
            return null == t.which && xt.test(t.type) ? null != t.charCode ? t.charCode : t.keyCode : !t.which && void 0 !== e && Tt.test(t.type) ? 1 & e ? 1 : 2 & e ? 3 : 4 & e ? 2 : 0 : t.which
        }
    }, w.event.addProp),
    w.each({
        focus: "focusin",
        blur: "focusout"
    }, (function(t, e) {
        w.event.special[t] = {
            setup: function() {
                return Ot(this, t, kt),
                !1
            },
            trigger: function() {
                return Ot(this, t),
                !0
            },
            delegateType: e
        }
    }
    )),
    w.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, (function(t, e) {
        w.event.special[t] = {
            delegateType: e,
            bindType: e,
            handle: function(t) {
                var i, n = t.relatedTarget, r = t.handleObj;
                return n && (n === this || w.contains(this, n)) || (t.type = r.origType,
                i = r.handler.apply(this, arguments),
                t.type = e),
                i
            }
        }
    }
    )),
    w.fn.extend({
        on: function(t, e, i, n) {
            return Et(this, t, e, i, n)
        },
        one: function(t, e, i, n) {
            return Et(this, t, e, i, n, 1)
        },
        off: function(t, e, i) {
            var n, r;
            if (t && t.preventDefault && t.handleObj)
                return n = t.handleObj,
                w(t.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler),
                this;
            if ("object" == typeof t) {
                for (r in t)
                    this.off(r, e, t[r]);
                return this
            }
            return !1 !== e && "function" != typeof e || (i = e,
            e = void 0),
            !1 === i && (i = At),
            this.each((function() {
                w.event.remove(this, t, i, e)
            }
            ))
        }
    });
    var Pt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi
      , Rt = /<script|<style|<link/i
      , Nt = /checked\s*(?:[^=]|=\s*.checked.)/i
      , It = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    function Lt(t, e) {
        return E(t, "table") && E(11 !== e.nodeType ? e : e.firstChild, "tr") && w(t).children("tbody")[0] || t
    }
    function Bt(t) {
        return t.type = (null !== t.getAttribute("type")) + "/" + t.type,
        t
    }
    function Dt(t) {
        return "true/" === (t.type || "").slice(0, 5) ? t.type = t.type.slice(5) : t.removeAttribute("type"),
        t
    }
    function Ft(t, e) {
        var i, n, r, s, o, a, h, c;
        if (1 === e.nodeType) {
            if (Q.hasData(t) && (s = Q.access(t),
            o = Q.set(e, s),
            c = s.events))
                for (r in delete o.handle,
                o.events = {},
                c)
                    for (i = 0,
                    n = c[r].length; i < n; i++)
                        w.event.add(e, r, c[r][i]);
            K.hasData(t) && (a = K.access(t),
            h = w.extend({}, a),
            K.set(e, h))
        }
    }
    function Mt(t, e, i, n) {
        e = o.apply([], e);
        var r, s, a, h, c, l, u = 0, p = t.length, d = p - 1, y = e[0], m = g(y);
        if (m || 1 < p && "string" == typeof y && !f.checkClone && Nt.test(y))
            return t.each((function(r) {
                var s = t.eq(r);
                m && (e[0] = y.call(this, r, s.html())),
                Mt(s, e, i, n)
            }
            ));
        if (p && (s = (r = wt(e, t[0].ownerDocument, !1, t, n)).firstChild,
        1 === r.childNodes.length && (r = s),
        s || n)) {
            for (h = (a = w.map(yt(r, "script"), Bt)).length; u < p; u++)
                c = r,
                u !== d && (c = w.clone(c, !0, !0),
                h && w.merge(a, yt(c, "script"))),
                i.call(t[u], c, u);
            if (h)
                for (l = a[a.length - 1].ownerDocument,
                w.map(a, Dt),
                u = 0; u < h; u++)
                    c = a[u],
                    ft.test(c.type || "") && !Q.access(c, "globalEval") && w.contains(l, c) && (c.src && "module" !== (c.type || "").toLowerCase() ? w._evalUrl && !c.noModule && w._evalUrl(c.src, {
                        nonce: c.nonce || c.getAttribute("nonce")
                    }) : _(c.textContent.replace(It, ""), c, l))
        }
        return t
    }
    function jt(t, e, i) {
        for (var n, r = e ? w.filter(e, t) : t, s = 0; null != (n = r[s]); s++)
            i || 1 !== n.nodeType || w.cleanData(yt(n)),
            n.parentNode && (i && st(n) && mt(yt(n, "script")),
            n.parentNode.removeChild(n));
        return t
    }
    w.extend({
        htmlPrefilter: function(t) {
            return t.replace(Pt, "<$1></$2>")
        },
        clone: function(t, e, i) {
            var n, r, s, o, a, h, c, l = t.cloneNode(!0), u = st(t);
            if (!(f.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || w.isXMLDoc(t)))
                for (o = yt(l),
                n = 0,
                r = (s = yt(t)).length; n < r; n++)
                    a = s[n],
                    "input" === (c = (h = o[n]).nodeName.toLowerCase()) && pt.test(a.type) ? h.checked = a.checked : "input" !== c && "textarea" !== c || (h.defaultValue = a.defaultValue);
            if (e)
                if (i)
                    for (s = s || yt(t),
                    o = o || yt(l),
                    n = 0,
                    r = s.length; n < r; n++)
                        Ft(s[n], o[n]);
                else
                    Ft(t, l);
            return 0 < (o = yt(l, "script")).length && mt(o, !u && yt(t, "script")),
            l
        },
        cleanData: function(t) {
            for (var e, i, n, r = w.event.special, s = 0; void 0 !== (i = t[s]); s++)
                if (Y(i)) {
                    if (e = i[Q.expando]) {
                        if (e.events)
                            for (n in e.events)
                                r[n] ? w.event.remove(i, n) : w.removeEvent(i, n, e.handle);
                        i[Q.expando] = void 0
                    }
                    i[K.expando] && (i[K.expando] = void 0)
                }
        }
    }),
    w.fn.extend({
        detach: function(t) {
            return jt(this, t, !0)
        },
        remove: function(t) {
            return jt(this, t)
        },
        text: function(t) {
            return V(this, (function(t) {
                return void 0 === t ? w.text(this) : this.empty().each((function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t)
                }
                ))
            }
            ), null, t, arguments.length)
        },
        append: function() {
            return Mt(this, arguments, (function(t) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Lt(this, t).appendChild(t)
            }
            ))
        },
        prepend: function() {
            return Mt(this, arguments, (function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = Lt(this, t);
                    e.insertBefore(t, e.firstChild)
                }
            }
            ))
        },
        before: function() {
            return Mt(this, arguments, (function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this)
            }
            ))
        },
        after: function() {
            return Mt(this, arguments, (function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
            }
            ))
        },
        empty: function() {
            for (var t, e = 0; null != (t = this[e]); e++)
                1 === t.nodeType && (w.cleanData(yt(t, !1)),
                t.textContent = "");
            return this
        },
        clone: function(t, e) {
            return t = null != t && t,
            e = null == e ? t : e,
            this.map((function() {
                return w.clone(this, t, e)
            }
            ))
        },
        html: function(t) {
            return V(this, (function(t) {
                var e = this[0] || {}
                  , i = 0
                  , n = this.length;
                if (void 0 === t && 1 === e.nodeType)
                    return e.innerHTML;
                if ("string" == typeof t && !Rt.test(t) && !gt[(dt.exec(t) || ["", ""])[1].toLowerCase()]) {
                    t = w.htmlPrefilter(t);
                    try {
                        for (; i < n; i++)
                            1 === (e = this[i] || {}).nodeType && (w.cleanData(yt(e, !1)),
                            e.innerHTML = t);
                        e = 0
                    } catch (t) {}
                }
                e && this.empty().append(t)
            }
            ), null, t, arguments.length)
        },
        replaceWith: function() {
            var t = [];
            return Mt(this, arguments, (function(e) {
                var i = this.parentNode;
                w.inArray(this, t) < 0 && (w.cleanData(yt(this)),
                i && i.replaceChild(e, this))
            }
            ), t)
        }
    }),
    w.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, (function(t, e) {
        w.fn[t] = function(t) {
            for (var i, n = [], r = w(t), s = r.length - 1, o = 0; o <= s; o++)
                i = o === s ? this : this.clone(!0),
                w(r[o])[e](i),
                a.apply(n, i.get());
            return this.pushStack(n)
        }
    }
    ));
    var Wt = new RegExp("^(" + et + ")(?!px)[a-z%]+$","i")
      , Ut = function(e) {
        var i = e.ownerDocument.defaultView;
        return i && i.opener || (i = t),
        i.getComputedStyle(e)
    }
      , qt = new RegExp(nt.join("|"),"i");
    function Vt(t, e, i) {
        var n, r, s, o, a = t.style;
        return (i = i || Ut(t)) && ("" !== (o = i.getPropertyValue(e) || i[e]) || st(t) || (o = w.style(t, e)),
        !f.pixelBoxStyles() && Wt.test(o) && qt.test(e) && (n = a.width,
        r = a.minWidth,
        s = a.maxWidth,
        a.minWidth = a.maxWidth = a.width = o,
        o = i.width,
        a.width = n,
        a.minWidth = r,
        a.maxWidth = s)),
        void 0 !== o ? o + "" : o
    }
    function zt(t, e) {
        return {
            get: function() {
                if (!t())
                    return (this.get = e).apply(this, arguments);
                delete this.get
            }
        }
    }
    !function() {
        function e() {
            if (l) {
                c.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",
                l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",
                rt.appendChild(c).appendChild(l);
                var e = t.getComputedStyle(l);
                r = "1%" !== e.top,
                h = 12 === i(e.marginLeft),
                l.style.right = "60%",
                a = 36 === i(e.right),
                s = 36 === i(e.width),
                l.style.position = "absolute",
                o = 12 === i(l.offsetWidth / 3),
                rt.removeChild(c),
                l = null
            }
        }
        function i(t) {
            return Math.round(parseFloat(t))
        }
        var r, s, o, a, h, c = n.createElement("div"), l = n.createElement("div");
        l.style && (l.style.backgroundClip = "content-box",
        l.cloneNode(!0).style.backgroundClip = "",
        f.clearCloneStyle = "content-box" === l.style.backgroundClip,
        w.extend(f, {
            boxSizingReliable: function() {
                return e(),
                s
            },
            pixelBoxStyles: function() {
                return e(),
                a
            },
            pixelPosition: function() {
                return e(),
                r
            },
            reliableMarginLeft: function() {
                return e(),
                h
            },
            scrollboxSize: function() {
                return e(),
                o
            }
        }))
    }();
    var Gt = ["Webkit", "Moz", "ms"]
      , Ht = n.createElement("div").style
      , Xt = {};
    function Yt(t) {
        return w.cssProps[t] || Xt[t] || (t in Ht ? t : Xt[t] = function(t) {
            for (var e = t[0].toUpperCase() + t.slice(1), i = Gt.length; i--; )
                if ((t = Gt[i] + e)in Ht)
                    return t
        }(t) || t)
    }
    var Jt = /^(none|table(?!-c[ea]).+)/
      , Qt = /^--/
      , Kt = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
      , Zt = {
        letterSpacing: "0",
        fontWeight: "400"
    };
    function $t(t, e, i) {
        var n = it.exec(e);
        return n ? Math.max(0, n[2] - (i || 0)) + (n[3] || "px") : e
    }
    function te(t, e, i, n, r, s) {
        var o = "width" === e ? 1 : 0
          , a = 0
          , h = 0;
        if (i === (n ? "border" : "content"))
            return 0;
        for (; o < 4; o += 2)
            "margin" === i && (h += w.css(t, i + nt[o], !0, r)),
            n ? ("content" === i && (h -= w.css(t, "padding" + nt[o], !0, r)),
            "margin" !== i && (h -= w.css(t, "border" + nt[o] + "Width", !0, r))) : (h += w.css(t, "padding" + nt[o], !0, r),
            "padding" !== i ? h += w.css(t, "border" + nt[o] + "Width", !0, r) : a += w.css(t, "border" + nt[o] + "Width", !0, r));
        return !n && 0 <= s && (h += Math.max(0, Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - s - h - a - .5)) || 0),
        h
    }
    function ee(t, e, i) {
        var n = Ut(t)
          , r = (!f.boxSizingReliable() || i) && "border-box" === w.css(t, "boxSizing", !1, n)
          , s = r
          , o = Vt(t, e, n)
          , a = "offset" + e[0].toUpperCase() + e.slice(1);
        if (Wt.test(o)) {
            if (!i)
                return o;
            o = "auto"
        }
        return (!f.boxSizingReliable() && r || "auto" === o || !parseFloat(o) && "inline" === w.css(t, "display", !1, n)) && t.getClientRects().length && (r = "border-box" === w.css(t, "boxSizing", !1, n),
        (s = a in t) && (o = t[a])),
        (o = parseFloat(o) || 0) + te(t, e, i || (r ? "border" : "content"), s, n, o) + "px"
    }
    function ie(t, e, i, n, r) {
        return new ie.prototype.init(t,e,i,n,r)
    }
    w.extend({
        cssHooks: {
            opacity: {
                get: function(t, e) {
                    if (e) {
                        var i = Vt(t, "opacity");
                        return "" === i ? "1" : i
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function(t, e, i, n) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var r, s, o, a = X(e), h = Qt.test(e), c = t.style;
                if (h || (e = Yt(a)),
                o = w.cssHooks[e] || w.cssHooks[a],
                void 0 === i)
                    return o && "get"in o && void 0 !== (r = o.get(t, !1, n)) ? r : c[e];
                "string" == (s = typeof i) && (r = it.exec(i)) && r[1] && (i = ct(t, e, r),
                s = "number"),
                null != i && i == i && ("number" !== s || h || (i += r && r[3] || (w.cssNumber[a] ? "" : "px")),
                f.clearCloneStyle || "" !== i || 0 !== e.indexOf("background") || (c[e] = "inherit"),
                o && "set"in o && void 0 === (i = o.set(t, i, n)) || (h ? c.setProperty(e, i) : c[e] = i))
            }
        },
        css: function(t, e, i, n) {
            var r, s, o, a = X(e);
            return Qt.test(e) || (e = Yt(a)),
            (o = w.cssHooks[e] || w.cssHooks[a]) && "get"in o && (r = o.get(t, !0, i)),
            void 0 === r && (r = Vt(t, e, n)),
            "normal" === r && e in Zt && (r = Zt[e]),
            "" === i || i ? (s = parseFloat(r),
            !0 === i || isFinite(s) ? s || 0 : r) : r
        }
    }),
    w.each(["height", "width"], (function(t, e) {
        w.cssHooks[e] = {
            get: function(t, i, n) {
                if (i)
                    return !Jt.test(w.css(t, "display")) || t.getClientRects().length && t.getBoundingClientRect().width ? ee(t, e, n) : ht(t, Kt, (function() {
                        return ee(t, e, n)
                    }
                    ))
            },
            set: function(t, i, n) {
                var r, s = Ut(t), o = !f.scrollboxSize() && "absolute" === s.position, a = (o || n) && "border-box" === w.css(t, "boxSizing", !1, s), h = n ? te(t, e, n, a, s) : 0;
                return a && o && (h -= Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - parseFloat(s[e]) - te(t, e, "border", !1, s) - .5)),
                h && (r = it.exec(i)) && "px" !== (r[3] || "px") && (t.style[e] = i,
                i = w.css(t, e)),
                $t(0, i, h)
            }
        }
    }
    )),
    w.cssHooks.marginLeft = zt(f.reliableMarginLeft, (function(t, e) {
        if (e)
            return (parseFloat(Vt(t, "marginLeft")) || t.getBoundingClientRect().left - ht(t, {
                marginLeft: 0
            }, (function() {
                return t.getBoundingClientRect().left
            }
            ))) + "px"
    }
    )),
    w.each({
        margin: "",
        padding: "",
        border: "Width"
    }, (function(t, e) {
        w.cssHooks[t + e] = {
            expand: function(i) {
                for (var n = 0, r = {}, s = "string" == typeof i ? i.split(" ") : [i]; n < 4; n++)
                    r[t + nt[n] + e] = s[n] || s[n - 2] || s[0];
                return r
            }
        },
        "margin" !== t && (w.cssHooks[t + e].set = $t)
    }
    )),
    w.fn.extend({
        css: function(t, e) {
            return V(this, (function(t, e, i) {
                var n, r, s = {}, o = 0;
                if (Array.isArray(e)) {
                    for (n = Ut(t),
                    r = e.length; o < r; o++)
                        s[e[o]] = w.css(t, e[o], !1, n);
                    return s
                }
                return void 0 !== i ? w.style(t, e, i) : w.css(t, e)
            }
            ), t, e, 1 < arguments.length)
        }
    }),
    ((w.Tween = ie).prototype = {
        constructor: ie,
        init: function(t, e, i, n, r, s) {
            this.elem = t,
            this.prop = i,
            this.easing = r || w.easing._default,
            this.options = e,
            this.start = this.now = this.cur(),
            this.end = n,
            this.unit = s || (w.cssNumber[i] ? "" : "px")
        },
        cur: function() {
            var t = ie.propHooks[this.prop];
            return t && t.get ? t.get(this) : ie.propHooks._default.get(this)
        },
        run: function(t) {
            var e, i = ie.propHooks[this.prop];
            return this.options.duration ? this.pos = e = w.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t,
            this.now = (this.end - this.start) * e + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            i && i.set ? i.set(this) : ie.propHooks._default.set(this),
            this
        }
    }).init.prototype = ie.prototype,
    (ie.propHooks = {
        _default: {
            get: function(t) {
                var e;
                return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = w.css(t.elem, t.prop, "")) && "auto" !== e ? e : 0
            },
            set: function(t) {
                w.fx.step[t.prop] ? w.fx.step[t.prop](t) : 1 !== t.elem.nodeType || !w.cssHooks[t.prop] && null == t.elem.style[Yt(t.prop)] ? t.elem[t.prop] = t.now : w.style(t.elem, t.prop, t.now + t.unit)
            }
        }
    }).scrollTop = ie.propHooks.scrollLeft = {
        set: function(t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
        }
    },
    w.easing = {
        linear: function(t) {
            return t
        },
        swing: function(t) {
            return .5 - Math.cos(t * Math.PI) / 2
        },
        _default: "swing"
    },
    w.fx = ie.prototype.init,
    w.fx.step = {};
    var ne, re, se, oe, ae = /^(?:toggle|show|hide)$/, he = /queueHooks$/;
    function ce() {
        re && (!1 === n.hidden && t.requestAnimationFrame ? t.requestAnimationFrame(ce) : t.setTimeout(ce, w.fx.interval),
        w.fx.tick())
    }
    function le() {
        return t.setTimeout((function() {
            ne = void 0
        }
        )),
        ne = Date.now()
    }
    function ue(t, e) {
        var i, n = 0, r = {
            height: t
        };
        for (e = e ? 1 : 0; n < 4; n += 2 - e)
            r["margin" + (i = nt[n])] = r["padding" + i] = t;
        return e && (r.opacity = r.width = t),
        r
    }
    function pe(t, e, i) {
        for (var n, r = (de.tweeners[e] || []).concat(de.tweeners["*"]), s = 0, o = r.length; s < o; s++)
            if (n = r[s].call(i, e, t))
                return n
    }
    function de(t, e, i) {
        var n, r, s = 0, o = de.prefilters.length, a = w.Deferred().always((function() {
            delete h.elem
        }
        )), h = function() {
            if (r)
                return !1;
            for (var e = ne || le(), i = Math.max(0, c.startTime + c.duration - e), n = 1 - (i / c.duration || 0), s = 0, o = c.tweens.length; s < o; s++)
                c.tweens[s].run(n);
            return a.notifyWith(t, [c, n, i]),
            n < 1 && o ? i : (o || a.notifyWith(t, [c, 1, 0]),
            a.resolveWith(t, [c]),
            !1)
        }, c = a.promise({
            elem: t,
            props: w.extend({}, e),
            opts: w.extend(!0, {
                specialEasing: {},
                easing: w.easing._default
            }, i),
            originalProperties: e,
            originalOptions: i,
            startTime: ne || le(),
            duration: i.duration,
            tweens: [],
            createTween: function(e, i) {
                var n = w.Tween(t, c.opts, e, i, c.opts.specialEasing[e] || c.opts.easing);
                return c.tweens.push(n),
                n
            },
            stop: function(e) {
                var i = 0
                  , n = e ? c.tweens.length : 0;
                if (r)
                    return this;
                for (r = !0; i < n; i++)
                    c.tweens[i].run(1);
                return e ? (a.notifyWith(t, [c, 1, 0]),
                a.resolveWith(t, [c, e])) : a.rejectWith(t, [c, e]),
                this
            }
        }), l = c.props;
        for (function(t, e) {
            var i, n, r, s, o;
            for (i in t)
                if (r = e[n = X(i)],
                s = t[i],
                Array.isArray(s) && (r = s[1],
                s = t[i] = s[0]),
                i !== n && (t[n] = s,
                delete t[i]),
                (o = w.cssHooks[n]) && "expand"in o)
                    for (i in s = o.expand(s),
                    delete t[n],
                    s)
                        i in t || (t[i] = s[i],
                        e[i] = r);
                else
                    e[n] = r
        }(l, c.opts.specialEasing); s < o; s++)
            if (n = de.prefilters[s].call(c, t, l, c.opts))
                return g(n.stop) && (w._queueHooks(c.elem, c.opts.queue).stop = n.stop.bind(n)),
                n;
        return w.map(l, pe, c),
        g(c.opts.start) && c.opts.start.call(t, c),
        c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always),
        w.fx.timer(w.extend(h, {
            elem: t,
            anim: c,
            queue: c.opts.queue
        })),
        c
    }
    w.Animation = w.extend(de, {
        tweeners: {
            "*": [function(t, e) {
                var i = this.createTween(t, e);
                return ct(i.elem, t, it.exec(e), i),
                i
            }
            ]
        },
        tweener: function(t, e) {
            g(t) ? (e = t,
            t = ["*"]) : t = t.match(D);
            for (var i, n = 0, r = t.length; n < r; n++)
                i = t[n],
                de.tweeners[i] = de.tweeners[i] || [],
                de.tweeners[i].unshift(e)
        },
        prefilters: [function(t, e, i) {
            var n, r, s, o, a, h, c, l, u = "width"in e || "height"in e, p = this, d = {}, f = t.style, g = t.nodeType && at(t), y = Q.get(t, "fxshow");
            for (n in i.queue || (null == (o = w._queueHooks(t, "fx")).unqueued && (o.unqueued = 0,
            a = o.empty.fire,
            o.empty.fire = function() {
                o.unqueued || a()
            }
            ),
            o.unqueued++,
            p.always((function() {
                p.always((function() {
                    o.unqueued--,
                    w.queue(t, "fx").length || o.empty.fire()
                }
                ))
            }
            ))),
            e)
                if (r = e[n],
                ae.test(r)) {
                    if (delete e[n],
                    s = s || "toggle" === r,
                    r === (g ? "hide" : "show")) {
                        if ("show" !== r || !y || void 0 === y[n])
                            continue;
                        g = !0
                    }
                    d[n] = y && y[n] || w.style(t, n)
                }
            if ((h = !w.isEmptyObject(e)) || !w.isEmptyObject(d))
                for (n in u && 1 === t.nodeType && (i.overflow = [f.overflow, f.overflowX, f.overflowY],
                null == (c = y && y.display) && (c = Q.get(t, "display")),
                "none" === (l = w.css(t, "display")) && (c ? l = c : (ut([t], !0),
                c = t.style.display || c,
                l = w.css(t, "display"),
                ut([t]))),
                ("inline" === l || "inline-block" === l && null != c) && "none" === w.css(t, "float") && (h || (p.done((function() {
                    f.display = c
                }
                )),
                null == c && (l = f.display,
                c = "none" === l ? "" : l)),
                f.display = "inline-block")),
                i.overflow && (f.overflow = "hidden",
                p.always((function() {
                    f.overflow = i.overflow[0],
                    f.overflowX = i.overflow[1],
                    f.overflowY = i.overflow[2]
                }
                ))),
                h = !1,
                d)
                    h || (y ? "hidden"in y && (g = y.hidden) : y = Q.access(t, "fxshow", {
                        display: c
                    }),
                    s && (y.hidden = !g),
                    g && ut([t], !0),
                    p.done((function() {
                        for (n in g || ut([t]),
                        Q.remove(t, "fxshow"),
                        d)
                            w.style(t, n, d[n])
                    }
                    ))),
                    h = pe(g ? y[n] : 0, n, p),
                    n in y || (y[n] = h.start,
                    g && (h.end = h.start,
                    h.start = 0))
        }
        ],
        prefilter: function(t, e) {
            e ? de.prefilters.unshift(t) : de.prefilters.push(t)
        }
    }),
    w.speed = function(t, e, i) {
        var n = t && "object" == typeof t ? w.extend({}, t) : {
            complete: i || !i && e || g(t) && t,
            duration: t,
            easing: i && e || e && !g(e) && e
        };
        return w.fx.off ? n.duration = 0 : "number" != typeof n.duration && (n.duration in w.fx.speeds ? n.duration = w.fx.speeds[n.duration] : n.duration = w.fx.speeds._default),
        null != n.queue && !0 !== n.queue || (n.queue = "fx"),
        n.old = n.complete,
        n.complete = function() {
            g(n.old) && n.old.call(this),
            n.queue && w.dequeue(this, n.queue)
        }
        ,
        n
    }
    ,
    w.fn.extend({
        fadeTo: function(t, e, i, n) {
            return this.filter(at).css("opacity", 0).show().end().animate({
                opacity: e
            }, t, i, n)
        },
        animate: function(t, e, i, n) {
            var r = w.isEmptyObject(t)
              , s = w.speed(e, i, n)
              , o = function() {
                var e = de(this, w.extend({}, t), s);
                (r || Q.get(this, "finish")) && e.stop(!0)
            };
            return o.finish = o,
            r || !1 === s.queue ? this.each(o) : this.queue(s.queue, o)
        },
        stop: function(t, e, i) {
            var n = function(t) {
                var e = t.stop;
                delete t.stop,
                e(i)
            };
            return "string" != typeof t && (i = e,
            e = t,
            t = void 0),
            e && !1 !== t && this.queue(t || "fx", []),
            this.each((function() {
                var e = !0
                  , r = null != t && t + "queueHooks"
                  , s = w.timers
                  , o = Q.get(this);
                if (r)
                    o[r] && o[r].stop && n(o[r]);
                else
                    for (r in o)
                        o[r] && o[r].stop && he.test(r) && n(o[r]);
                for (r = s.length; r--; )
                    s[r].elem !== this || null != t && s[r].queue !== t || (s[r].anim.stop(i),
                    e = !1,
                    s.splice(r, 1));
                !e && i || w.dequeue(this, t)
            }
            ))
        },
        finish: function(t) {
            return !1 !== t && (t = t || "fx"),
            this.each((function() {
                var e, i = Q.get(this), n = i[t + "queue"], r = i[t + "queueHooks"], s = w.timers, o = n ? n.length : 0;
                for (i.finish = !0,
                w.queue(this, t, []),
                r && r.stop && r.stop.call(this, !0),
                e = s.length; e--; )
                    s[e].elem === this && s[e].queue === t && (s[e].anim.stop(!0),
                    s.splice(e, 1));
                for (e = 0; e < o; e++)
                    n[e] && n[e].finish && n[e].finish.call(this);
                delete i.finish
            }
            ))
        }
    }),
    w.each(["toggle", "show", "hide"], (function(t, e) {
        var i = w.fn[e];
        w.fn[e] = function(t, n, r) {
            return null == t || "boolean" == typeof t ? i.apply(this, arguments) : this.animate(ue(e, !0), t, n, r)
        }
    }
    )),
    w.each({
        slideDown: ue("show"),
        slideUp: ue("hide"),
        slideToggle: ue("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, (function(t, e) {
        w.fn[t] = function(t, i, n) {
            return this.animate(e, t, i, n)
        }
    }
    )),
    w.timers = [],
    w.fx.tick = function() {
        var t, e = 0, i = w.timers;
        for (ne = Date.now(); e < i.length; e++)
            (t = i[e])() || i[e] !== t || i.splice(e--, 1);
        i.length || w.fx.stop(),
        ne = void 0
    }
    ,
    w.fx.timer = function(t) {
        w.timers.push(t),
        w.fx.start()
    }
    ,
    w.fx.interval = 13,
    w.fx.start = function() {
        re || (re = !0,
        ce())
    }
    ,
    w.fx.stop = function() {
        re = null
    }
    ,
    w.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    w.fn.delay = function(e, i) {
        return e = w.fx && w.fx.speeds[e] || e,
        i = i || "fx",
        this.queue(i, (function(i, n) {
            var r = t.setTimeout(i, e);
            n.stop = function() {
                t.clearTimeout(r)
            }
        }
        ))
    }
    ,
    se = n.createElement("input"),
    oe = n.createElement("select").appendChild(n.createElement("option")),
    se.type = "checkbox",
    f.checkOn = "" !== se.value,
    f.optSelected = oe.selected,
    (se = n.createElement("input")).value = "t",
    se.type = "radio",
    f.radioValue = "t" === se.value;
    var fe, ge = w.expr.attrHandle;
    w.fn.extend({
        attr: function(t, e) {
            return V(this, w.attr, t, e, 1 < arguments.length)
        },
        removeAttr: function(t) {
            return this.each((function() {
                w.removeAttr(this, t)
            }
            ))
        }
    }),
    w.extend({
        attr: function(t, e, i) {
            var n, r, s = t.nodeType;
            if (3 !== s && 8 !== s && 2 !== s)
                return void 0 === t.getAttribute ? w.prop(t, e, i) : (1 === s && w.isXMLDoc(t) || (r = w.attrHooks[e.toLowerCase()] || (w.expr.match.bool.test(e) ? fe : void 0)),
                void 0 !== i ? null === i ? void w.removeAttr(t, e) : r && "set"in r && void 0 !== (n = r.set(t, i, e)) ? n : (t.setAttribute(e, i + ""),
                i) : r && "get"in r && null !== (n = r.get(t, e)) ? n : null == (n = w.find.attr(t, e)) ? void 0 : n)
        },
        attrHooks: {
            type: {
                set: function(t, e) {
                    if (!f.radioValue && "radio" === e && E(t, "input")) {
                        var i = t.value;
                        return t.setAttribute("type", e),
                        i && (t.value = i),
                        e
                    }
                }
            }
        },
        removeAttr: function(t, e) {
            var i, n = 0, r = e && e.match(D);
            if (r && 1 === t.nodeType)
                for (; i = r[n++]; )
                    t.removeAttribute(i)
        }
    }),
    fe = {
        set: function(t, e, i) {
            return !1 === e ? w.removeAttr(t, i) : t.setAttribute(i, i),
            i
        }
    },
    w.each(w.expr.match.bool.source.match(/\w+/g), (function(t, e) {
        var i = ge[e] || w.find.attr;
        ge[e] = function(t, e, n) {
            var r, s, o = e.toLowerCase();
            return n || (s = ge[o],
            ge[o] = r,
            r = null != i(t, e, n) ? o : null,
            ge[o] = s),
            r
        }
    }
    ));
    var ye = /^(?:input|select|textarea|button)$/i
      , me = /^(?:a|area)$/i;
    function _e(t) {
        return (t.match(D) || []).join(" ")
    }
    function ve(t) {
        return t.getAttribute && t.getAttribute("class") || ""
    }
    function be(t) {
        return Array.isArray(t) ? t : "string" == typeof t && t.match(D) || []
    }
    w.fn.extend({
        prop: function(t, e) {
            return V(this, w.prop, t, e, 1 < arguments.length)
        },
        removeProp: function(t) {
            return this.each((function() {
                delete this[w.propFix[t] || t]
            }
            ))
        }
    }),
    w.extend({
        prop: function(t, e, i) {
            var n, r, s = t.nodeType;
            if (3 !== s && 8 !== s && 2 !== s)
                return 1 === s && w.isXMLDoc(t) || (e = w.propFix[e] || e,
                r = w.propHooks[e]),
                void 0 !== i ? r && "set"in r && void 0 !== (n = r.set(t, i, e)) ? n : t[e] = i : r && "get"in r && null !== (n = r.get(t, e)) ? n : t[e]
        },
        propHooks: {
            tabIndex: {
                get: function(t) {
                    var e = w.find.attr(t, "tabindex");
                    return e ? parseInt(e, 10) : ye.test(t.nodeName) || me.test(t.nodeName) && t.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }),
    f.optSelected || (w.propHooks.selected = {
        get: function(t) {
            var e = t.parentNode;
            return e && e.parentNode && e.parentNode.selectedIndex,
            null
        },
        set: function(t) {
            var e = t.parentNode;
            e && (e.selectedIndex,
            e.parentNode && e.parentNode.selectedIndex)
        }
    }),
    w.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], (function() {
        w.propFix[this.toLowerCase()] = this
    }
    )),
    w.fn.extend({
        addClass: function(t) {
            var e, i, n, r, s, o, a, h = 0;
            if (g(t))
                return this.each((function(e) {
                    w(this).addClass(t.call(this, e, ve(this)))
                }
                ));
            if ((e = be(t)).length)
                for (; i = this[h++]; )
                    if (r = ve(i),
                    n = 1 === i.nodeType && " " + _e(r) + " ") {
                        for (o = 0; s = e[o++]; )
                            n.indexOf(" " + s + " ") < 0 && (n += s + " ");
                        r !== (a = _e(n)) && i.setAttribute("class", a)
                    }
            return this
        },
        removeClass: function(t) {
            var e, i, n, r, s, o, a, h = 0;
            if (g(t))
                return this.each((function(e) {
                    w(this).removeClass(t.call(this, e, ve(this)))
                }
                ));
            if (!arguments.length)
                return this.attr("class", "");
            if ((e = be(t)).length)
                for (; i = this[h++]; )
                    if (r = ve(i),
                    n = 1 === i.nodeType && " " + _e(r) + " ") {
                        for (o = 0; s = e[o++]; )
                            for (; -1 < n.indexOf(" " + s + " "); )
                                n = n.replace(" " + s + " ", " ");
                        r !== (a = _e(n)) && i.setAttribute("class", a)
                    }
            return this
        },
        toggleClass: function(t, e) {
            var i = typeof t
              , n = "string" === i || Array.isArray(t);
            return "boolean" == typeof e && n ? e ? this.addClass(t) : this.removeClass(t) : g(t) ? this.each((function(i) {
                w(this).toggleClass(t.call(this, i, ve(this), e), e)
            }
            )) : this.each((function() {
                var e, r, s, o;
                if (n)
                    for (r = 0,
                    s = w(this),
                    o = be(t); e = o[r++]; )
                        s.hasClass(e) ? s.removeClass(e) : s.addClass(e);
                else
                    void 0 !== t && "boolean" !== i || ((e = ve(this)) && Q.set(this, "__className__", e),
                    this.setAttribute && this.setAttribute("class", e || !1 === t ? "" : Q.get(this, "__className__") || ""))
            }
            ))
        },
        hasClass: function(t) {
            var e, i, n = 0;
            for (e = " " + t + " "; i = this[n++]; )
                if (1 === i.nodeType && -1 < (" " + _e(ve(i)) + " ").indexOf(e))
                    return !0;
            return !1
        }
    });
    var we = /\r/g;
    w.fn.extend({
        val: function(t) {
            var e, i, n, r = this[0];
            return arguments.length ? (n = g(t),
            this.each((function(i) {
                var r;
                1 === this.nodeType && (null == (r = n ? t.call(this, i, w(this).val()) : t) ? r = "" : "number" == typeof r ? r += "" : Array.isArray(r) && (r = w.map(r, (function(t) {
                    return null == t ? "" : t + ""
                }
                ))),
                (e = w.valHooks[this.type] || w.valHooks[this.nodeName.toLowerCase()]) && "set"in e && void 0 !== e.set(this, r, "value") || (this.value = r))
            }
            ))) : r ? (e = w.valHooks[r.type] || w.valHooks[r.nodeName.toLowerCase()]) && "get"in e && void 0 !== (i = e.get(r, "value")) ? i : "string" == typeof (i = r.value) ? i.replace(we, "") : null == i ? "" : i : void 0
        }
    }),
    w.extend({
        valHooks: {
            option: {
                get: function(t) {
                    var e = w.find.attr(t, "value");
                    return null != e ? e : _e(w.text(t))
                }
            },
            select: {
                get: function(t) {
                    var e, i, n, r = t.options, s = t.selectedIndex, o = "select-one" === t.type, a = o ? null : [], h = o ? s + 1 : r.length;
                    for (n = s < 0 ? h : o ? s : 0; n < h; n++)
                        if (((i = r[n]).selected || n === s) && !i.disabled && (!i.parentNode.disabled || !E(i.parentNode, "optgroup"))) {
                            if (e = w(i).val(),
                            o)
                                return e;
                            a.push(e)
                        }
                    return a
                },
                set: function(t, e) {
                    for (var i, n, r = t.options, s = w.makeArray(e), o = r.length; o--; )
                        ((n = r[o]).selected = -1 < w.inArray(w.valHooks.option.get(n), s)) && (i = !0);
                    return i || (t.selectedIndex = -1),
                    s
                }
            }
        }
    }),
    w.each(["radio", "checkbox"], (function() {
        w.valHooks[this] = {
            set: function(t, e) {
                if (Array.isArray(e))
                    return t.checked = -1 < w.inArray(w(t).val(), e)
            }
        },
        f.checkOn || (w.valHooks[this].get = function(t) {
            return null === t.getAttribute("value") ? "on" : t.value
        }
        )
    }
    )),
    f.focusin = "onfocusin"in t;
    var xe = /^(?:focusinfocus|focusoutblur)$/
      , Te = function(t) {
        t.stopPropagation()
    };
    w.extend(w.event, {
        trigger: function(e, i, r, s) {
            var o, a, h, c, l, p, d, f, m = [r || n], _ = u.call(e, "type") ? e.type : e, v = u.call(e, "namespace") ? e.namespace.split(".") : [];
            if (a = f = h = r = r || n,
            3 !== r.nodeType && 8 !== r.nodeType && !xe.test(_ + w.event.triggered) && (-1 < _.indexOf(".") && (_ = (v = _.split(".")).shift(),
            v.sort()),
            l = _.indexOf(":") < 0 && "on" + _,
            (e = e[w.expando] ? e : new w.Event(_,"object" == typeof e && e)).isTrigger = s ? 2 : 3,
            e.namespace = v.join("."),
            e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
            e.result = void 0,
            e.target || (e.target = r),
            i = null == i ? [e] : w.makeArray(i, [e]),
            d = w.event.special[_] || {},
            s || !d.trigger || !1 !== d.trigger.apply(r, i))) {
                if (!s && !d.noBubble && !y(r)) {
                    for (c = d.delegateType || _,
                    xe.test(c + _) || (a = a.parentNode); a; a = a.parentNode)
                        m.push(a),
                        h = a;
                    h === (r.ownerDocument || n) && m.push(h.defaultView || h.parentWindow || t)
                }
                for (o = 0; (a = m[o++]) && !e.isPropagationStopped(); )
                    f = a,
                    e.type = 1 < o ? c : d.bindType || _,
                    (p = (Q.get(a, "events") || {})[e.type] && Q.get(a, "handle")) && p.apply(a, i),
                    (p = l && a[l]) && p.apply && Y(a) && (e.result = p.apply(a, i),
                    !1 === e.result && e.preventDefault());
                return e.type = _,
                s || e.isDefaultPrevented() || d._default && !1 !== d._default.apply(m.pop(), i) || !Y(r) || l && g(r[_]) && !y(r) && ((h = r[l]) && (r[l] = null),
                w.event.triggered = _,
                e.isPropagationStopped() && f.addEventListener(_, Te),
                r[_](),
                e.isPropagationStopped() && f.removeEventListener(_, Te),
                w.event.triggered = void 0,
                h && (r[l] = h)),
                e.result
            }
        },
        simulate: function(t, e, i) {
            var n = w.extend(new w.Event, i, {
                type: t,
                isSimulated: !0
            });
            w.event.trigger(n, null, e)
        }
    }),
    w.fn.extend({
        trigger: function(t, e) {
            return this.each((function() {
                w.event.trigger(t, e, this)
            }
            ))
        },
        triggerHandler: function(t, e) {
            var i = this[0];
            if (i)
                return w.event.trigger(t, e, i, !0)
        }
    }),
    f.focusin || w.each({
        focus: "focusin",
        blur: "focusout"
    }, (function(t, e) {
        var i = function(t) {
            w.event.simulate(e, t.target, w.event.fix(t))
        };
        w.event.special[e] = {
            setup: function() {
                var n = this.ownerDocument || this
                  , r = Q.access(n, e);
                r || n.addEventListener(t, i, !0),
                Q.access(n, e, (r || 0) + 1)
            },
            teardown: function() {
                var n = this.ownerDocument || this
                  , r = Q.access(n, e) - 1;
                r ? Q.access(n, e, r) : (n.removeEventListener(t, i, !0),
                Q.remove(n, e))
            }
        }
    }
    ));
    var Se = t.location
      , Ce = Date.now()
      , Ae = /\?/;
    w.parseXML = function(e) {
        var i;
        if (!e || "string" != typeof e)
            return null;
        try {
            i = (new t.DOMParser).parseFromString(e, "text/xml")
        } catch (e) {
            i = void 0
        }
        return i && !i.getElementsByTagName("parsererror").length || w.error("Invalid XML: " + e),
        i
    }
    ;
    var ke = /\[\]$/
      , Ee = /\r?\n/g
      , Oe = /^(?:submit|button|image|reset|file)$/i
      , Pe = /^(?:input|select|textarea|keygen)/i;
    function Re(t, e, i, n) {
        var r;
        if (Array.isArray(e))
            w.each(e, (function(e, r) {
                i || ke.test(t) ? n(t, r) : Re(t + "[" + ("object" == typeof r && null != r ? e : "") + "]", r, i, n)
            }
            ));
        else if (i || "object" !== v(e))
            n(t, e);
        else
            for (r in e)
                Re(t + "[" + r + "]", e[r], i, n)
    }
    w.param = function(t, e) {
        var i, n = [], r = function(t, e) {
            var i = g(e) ? e() : e;
            n[n.length] = encodeURIComponent(t) + "=" + encodeURIComponent(null == i ? "" : i)
        };
        if (null == t)
            return "";
        if (Array.isArray(t) || t.jquery && !w.isPlainObject(t))
            w.each(t, (function() {
                r(this.name, this.value)
            }
            ));
        else
            for (i in t)
                Re(i, t[i], e, r);
        return n.join("&")
    }
    ,
    w.fn.extend({
        serialize: function() {
            return w.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map((function() {
                var t = w.prop(this, "elements");
                return t ? w.makeArray(t) : this
            }
            )).filter((function() {
                var t = this.type;
                return this.name && !w(this).is(":disabled") && Pe.test(this.nodeName) && !Oe.test(t) && (this.checked || !pt.test(t))
            }
            )).map((function(t, e) {
                var i = w(this).val();
                return null == i ? null : Array.isArray(i) ? w.map(i, (function(t) {
                    return {
                        name: e.name,
                        value: t.replace(Ee, "\r\n")
                    }
                }
                )) : {
                    name: e.name,
                    value: i.replace(Ee, "\r\n")
                }
            }
            )).get()
        }
    });
    var Ne = /%20/g
      , Ie = /#.*$/
      , Le = /([?&])_=[^&]*/
      , Be = /^(.*?):[ \t]*([^\r\n]*)$/gm
      , De = /^(?:GET|HEAD)$/
      , Fe = /^\/\//
      , Me = {}
      , je = {}
      , We = "*/".concat("*")
      , Ue = n.createElement("a");
    function qe(t) {
        return function(e, i) {
            "string" != typeof e && (i = e,
            e = "*");
            var n, r = 0, s = e.toLowerCase().match(D) || [];
            if (g(i))
                for (; n = s[r++]; )
                    "+" === n[0] ? (n = n.slice(1) || "*",
                    (t[n] = t[n] || []).unshift(i)) : (t[n] = t[n] || []).push(i)
        }
    }
    function Ve(t, e, i, n) {
        var r = {}
          , s = t === je;
        function o(a) {
            var h;
            return r[a] = !0,
            w.each(t[a] || [], (function(t, a) {
                var c = a(e, i, n);
                return "string" != typeof c || s || r[c] ? s ? !(h = c) : void 0 : (e.dataTypes.unshift(c),
                o(c),
                !1)
            }
            )),
            h
        }
        return o(e.dataTypes[0]) || !r["*"] && o("*")
    }
    function ze(t, e) {
        var i, n, r = w.ajaxSettings.flatOptions || {};
        for (i in e)
            void 0 !== e[i] && ((r[i] ? t : n || (n = {}))[i] = e[i]);
        return n && w.extend(!0, t, n),
        t
    }
    Ue.href = Se.href,
    w.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Se.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Se.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": We,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": w.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(t, e) {
            return e ? ze(ze(t, w.ajaxSettings), e) : ze(w.ajaxSettings, t)
        },
        ajaxPrefilter: qe(Me),
        ajaxTransport: qe(je),
        ajax: function(e, i) {
            "object" == typeof e && (i = e,
            e = void 0),
            i = i || {};
            var r, s, o, a, h, c, l, u, p, d, f = w.ajaxSetup({}, i), g = f.context || f, y = f.context && (g.nodeType || g.jquery) ? w(g) : w.event, m = w.Deferred(), _ = w.Callbacks("once memory"), v = f.statusCode || {}, b = {}, x = {}, T = "canceled", S = {
                readyState: 0,
                getResponseHeader: function(t) {
                    var e;
                    if (l) {
                        if (!a)
                            for (a = {}; e = Be.exec(o); )
                                a[e[1].toLowerCase() + " "] = (a[e[1].toLowerCase() + " "] || []).concat(e[2]);
                        e = a[t.toLowerCase() + " "]
                    }
                    return null == e ? null : e.join(", ")
                },
                getAllResponseHeaders: function() {
                    return l ? o : null
                },
                setRequestHeader: function(t, e) {
                    return null == l && (t = x[t.toLowerCase()] = x[t.toLowerCase()] || t,
                    b[t] = e),
                    this
                },
                overrideMimeType: function(t) {
                    return null == l && (f.mimeType = t),
                    this
                },
                statusCode: function(t) {
                    var e;
                    if (t)
                        if (l)
                            S.always(t[S.status]);
                        else
                            for (e in t)
                                v[e] = [v[e], t[e]];
                    return this
                },
                abort: function(t) {
                    var e = t || T;
                    return r && r.abort(e),
                    C(0, e),
                    this
                }
            };
            if (m.promise(S),
            f.url = ((e || f.url || Se.href) + "").replace(Fe, Se.protocol + "//"),
            f.type = i.method || i.type || f.method || f.type,
            f.dataTypes = (f.dataType || "*").toLowerCase().match(D) || [""],
            null == f.crossDomain) {
                c = n.createElement("a");
                try {
                    c.href = f.url,
                    c.href = c.href,
                    f.crossDomain = Ue.protocol + "//" + Ue.host != c.protocol + "//" + c.host
                } catch (e) {
                    f.crossDomain = !0
                }
            }
            if (f.data && f.processData && "string" != typeof f.data && (f.data = w.param(f.data, f.traditional)),
            Ve(Me, f, i, S),
            l)
                return S;
            for (p in (u = w.event && f.global) && 0 == w.active++ && w.event.trigger("ajaxStart"),
            f.type = f.type.toUpperCase(),
            f.hasContent = !De.test(f.type),
            s = f.url.replace(Ie, ""),
            f.hasContent ? f.data && f.processData && 0 === (f.contentType || "").indexOf("application/x-www-form-urlencoded") && (f.data = f.data.replace(Ne, "+")) : (d = f.url.slice(s.length),
            f.data && (f.processData || "string" == typeof f.data) && (s += (Ae.test(s) ? "&" : "?") + f.data,
            delete f.data),
            !1 === f.cache && (s = s.replace(Le, "$1"),
            d = (Ae.test(s) ? "&" : "?") + "_=" + Ce++ + d),
            f.url = s + d),
            f.ifModified && (w.lastModified[s] && S.setRequestHeader("If-Modified-Since", w.lastModified[s]),
            w.etag[s] && S.setRequestHeader("If-None-Match", w.etag[s])),
            (f.data && f.hasContent && !1 !== f.contentType || i.contentType) && S.setRequestHeader("Content-Type", f.contentType),
            S.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + We + "; q=0.01" : "") : f.accepts["*"]),
            f.headers)
                S.setRequestHeader(p, f.headers[p]);
            if (f.beforeSend && (!1 === f.beforeSend.call(g, S, f) || l))
                return S.abort();
            if (T = "abort",
            _.add(f.complete),
            S.done(f.success),
            S.fail(f.error),
            r = Ve(je, f, i, S)) {
                if (S.readyState = 1,
                u && y.trigger("ajaxSend", [S, f]),
                l)
                    return S;
                f.async && 0 < f.timeout && (h = t.setTimeout((function() {
                    S.abort("timeout")
                }
                ), f.timeout));
                try {
                    l = !1,
                    r.send(b, C)
                } catch (e) {
                    if (l)
                        throw e;
                    C(-1, e)
                }
            } else
                C(-1, "No Transport");
            function C(e, i, n, a) {
                var c, p, d, b, x, T = i;
                l || (l = !0,
                h && t.clearTimeout(h),
                r = void 0,
                o = a || "",
                S.readyState = 0 < e ? 4 : 0,
                c = 200 <= e && e < 300 || 304 === e,
                n && (b = function(t, e, i) {
                    for (var n, r, s, o, a = t.contents, h = t.dataTypes; "*" === h[0]; )
                        h.shift(),
                        void 0 === n && (n = t.mimeType || e.getResponseHeader("Content-Type"));
                    if (n)
                        for (r in a)
                            if (a[r] && a[r].test(n)) {
                                h.unshift(r);
                                break
                            }
                    if (h[0]in i)
                        s = h[0];
                    else {
                        for (r in i) {
                            if (!h[0] || t.converters[r + " " + h[0]]) {
                                s = r;
                                break
                            }
                            o || (o = r)
                        }
                        s = s || o
                    }
                    if (s)
                        return s !== h[0] && h.unshift(s),
                        i[s]
                }(f, S, n)),
                b = function(t, e, i, n) {
                    var r, s, o, a, h, c = {}, l = t.dataTypes.slice();
                    if (l[1])
                        for (o in t.converters)
                            c[o.toLowerCase()] = t.converters[o];
                    for (s = l.shift(); s; )
                        if (t.responseFields[s] && (i[t.responseFields[s]] = e),
                        !h && n && t.dataFilter && (e = t.dataFilter(e, t.dataType)),
                        h = s,
                        s = l.shift())
                            if ("*" === s)
                                s = h;
                            else if ("*" !== h && h !== s) {
                                if (!(o = c[h + " " + s] || c["* " + s]))
                                    for (r in c)
                                        if ((a = r.split(" "))[1] === s && (o = c[h + " " + a[0]] || c["* " + a[0]])) {
                                            !0 === o ? o = c[r] : !0 !== c[r] && (s = a[0],
                                            l.unshift(a[1]));
                                            break
                                        }
                                if (!0 !== o)
                                    if (o && t.throws)
                                        e = o(e);
                                    else
                                        try {
                                            e = o(e)
                                        } catch (t) {
                                            return {
                                                state: "parsererror",
                                                error: o ? t : "No conversion from " + h + " to " + s
                                            }
                                        }
                            }
                    return {
                        state: "success",
                        data: e
                    }
                }(f, b, S, c),
                c ? (f.ifModified && ((x = S.getResponseHeader("Last-Modified")) && (w.lastModified[s] = x),
                (x = S.getResponseHeader("etag")) && (w.etag[s] = x)),
                204 === e || "HEAD" === f.type ? T = "nocontent" : 304 === e ? T = "notmodified" : (T = b.state,
                p = b.data,
                c = !(d = b.error))) : (d = T,
                !e && T || (T = "error",
                e < 0 && (e = 0))),
                S.status = e,
                S.statusText = (i || T) + "",
                c ? m.resolveWith(g, [p, T, S]) : m.rejectWith(g, [S, T, d]),
                S.statusCode(v),
                v = void 0,
                u && y.trigger(c ? "ajaxSuccess" : "ajaxError", [S, f, c ? p : d]),
                _.fireWith(g, [S, T]),
                u && (y.trigger("ajaxComplete", [S, f]),
                --w.active || w.event.trigger("ajaxStop")))
            }
            return S
        },
        getJSON: function(t, e, i) {
            return w.get(t, e, i, "json")
        },
        getScript: function(t, e) {
            return w.get(t, void 0, e, "script")
        }
    }),
    w.each(["get", "post"], (function(t, e) {
        w[e] = function(t, i, n, r) {
            return g(i) && (r = r || n,
            n = i,
            i = void 0),
            w.ajax(w.extend({
                url: t,
                type: e,
                dataType: r,
                data: i,
                success: n
            }, w.isPlainObject(t) && t))
        }
    }
    )),
    w._evalUrl = function(t, e) {
        return w.ajax({
            url: t,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: {
                "text script": function() {}
            },
            dataFilter: function(t) {
                w.globalEval(t, e)
            }
        })
    }
    ,
    w.fn.extend({
        wrapAll: function(t) {
            var e;
            return this[0] && (g(t) && (t = t.call(this[0])),
            e = w(t, this[0].ownerDocument).eq(0).clone(!0),
            this[0].parentNode && e.insertBefore(this[0]),
            e.map((function() {
                for (var t = this; t.firstElementChild; )
                    t = t.firstElementChild;
                return t
            }
            )).append(this)),
            this
        },
        wrapInner: function(t) {
            return g(t) ? this.each((function(e) {
                w(this).wrapInner(t.call(this, e))
            }
            )) : this.each((function() {
                var e = w(this)
                  , i = e.contents();
                i.length ? i.wrapAll(t) : e.append(t)
            }
            ))
        },
        wrap: function(t) {
            var e = g(t);
            return this.each((function(i) {
                w(this).wrapAll(e ? t.call(this, i) : t)
            }
            ))
        },
        unwrap: function(t) {
            return this.parent(t).not("body").each((function() {
                w(this).replaceWith(this.childNodes)
            }
            )),
            this
        }
    }),
    w.expr.pseudos.hidden = function(t) {
        return !w.expr.pseudos.visible(t)
    }
    ,
    w.expr.pseudos.visible = function(t) {
        return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length)
    }
    ,
    w.ajaxSettings.xhr = function() {
        try {
            return new t.XMLHttpRequest
        } catch (t) {}
    }
    ;
    var Ge = {
        0: 200,
        1223: 204
    }
      , He = w.ajaxSettings.xhr();
    f.cors = !!He && "withCredentials"in He,
    f.ajax = He = !!He,
    w.ajaxTransport((function(e) {
        var i, n;
        if (f.cors || He && !e.crossDomain)
            return {
                send: function(r, s) {
                    var o, a = e.xhr();
                    if (a.open(e.type, e.url, e.async, e.username, e.password),
                    e.xhrFields)
                        for (o in e.xhrFields)
                            a[o] = e.xhrFields[o];
                    for (o in e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType),
                    e.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest"),
                    r)
                        a.setRequestHeader(o, r[o]);
                    i = function(t) {
                        return function() {
                            i && (i = n = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null,
                            "abort" === t ? a.abort() : "error" === t ? "number" != typeof a.status ? s(0, "error") : s(a.status, a.statusText) : s(Ge[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                                binary: a.response
                            } : {
                                text: a.responseText
                            }, a.getAllResponseHeaders()))
                        }
                    }
                    ,
                    a.onload = i(),
                    n = a.onerror = a.ontimeout = i("error"),
                    void 0 !== a.onabort ? a.onabort = n : a.onreadystatechange = function() {
                        4 === a.readyState && t.setTimeout((function() {
                            i && n()
                        }
                        ))
                    }
                    ,
                    i = i("abort");
                    try {
                        a.send(e.hasContent && e.data || null)
                    } catch (r) {
                        if (i)
                            throw r
                    }
                },
                abort: function() {
                    i && i()
                }
            }
    }
    )),
    w.ajaxPrefilter((function(t) {
        t.crossDomain && (t.contents.script = !1)
    }
    )),
    w.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(t) {
                return w.globalEval(t),
                t
            }
        }
    }),
    w.ajaxPrefilter("script", (function(t) {
        void 0 === t.cache && (t.cache = !1),
        t.crossDomain && (t.type = "GET")
    }
    )),
    w.ajaxTransport("script", (function(t) {
        var e, i;
        if (t.crossDomain || t.scriptAttrs)
            return {
                send: function(r, s) {
                    e = w("<script>").attr(t.scriptAttrs || {}).prop({
                        charset: t.scriptCharset,
                        src: t.url
                    }).on("load error", i = function(t) {
                        e.remove(),
                        i = null,
                        t && s("error" === t.type ? 404 : 200, t.type)
                    }
                    ),
                    n.head.appendChild(e[0])
                },
                abort: function() {
                    i && i()
                }
            }
    }
    ));
    var Xe, Ye = [], Je = /(=)\?(?=&|$)|\?\?/;
    w.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var t = Ye.pop() || w.expando + "_" + Ce++;
            return this[t] = !0,
            t
        }
    }),
    w.ajaxPrefilter("json jsonp", (function(e, i, n) {
        var r, s, o, a = !1 !== e.jsonp && (Je.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Je.test(e.data) && "data");
        if (a || "jsonp" === e.dataTypes[0])
            return r = e.jsonpCallback = g(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback,
            a ? e[a] = e[a].replace(Je, "$1" + r) : !1 !== e.jsonp && (e.url += (Ae.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
            e.converters["script json"] = function() {
                return o || w.error(r + " was not called"),
                o[0]
            }
            ,
            e.dataTypes[0] = "json",
            s = t[r],
            t[r] = function() {
                o = arguments
            }
            ,
            n.always((function() {
                void 0 === s ? w(t).removeProp(r) : t[r] = s,
                e[r] && (e.jsonpCallback = i.jsonpCallback,
                Ye.push(r)),
                o && g(s) && s(o[0]),
                o = s = void 0
            }
            )),
            "script"
    }
    )),
    f.createHTMLDocument = ((Xe = n.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>",
    2 === Xe.childNodes.length),
    w.parseHTML = function(t, e, i) {
        return "string" != typeof t ? [] : ("boolean" == typeof e && (i = e,
        e = !1),
        e || (f.createHTMLDocument ? ((r = (e = n.implementation.createHTMLDocument("")).createElement("base")).href = n.location.href,
        e.head.appendChild(r)) : e = n),
        o = !i && [],
        (s = O.exec(t)) ? [e.createElement(s[1])] : (s = wt([t], e, o),
        o && o.length && w(o).remove(),
        w.merge([], s.childNodes)));
        var r, s, o
    }
    ,
    w.fn.load = function(t, e, i) {
        var n, r, s, o = this, a = t.indexOf(" ");
        return -1 < a && (n = _e(t.slice(a)),
        t = t.slice(0, a)),
        g(e) ? (i = e,
        e = void 0) : e && "object" == typeof e && (r = "POST"),
        0 < o.length && w.ajax({
            url: t,
            type: r || "GET",
            dataType: "html",
            data: e
        }).done((function(t) {
            s = arguments,
            o.html(n ? w("<div>").append(w.parseHTML(t)).find(n) : t)
        }
        )).always(i && function(t, e) {
            o.each((function() {
                i.apply(this, s || [t.responseText, e, t])
            }
            ))
        }
        ),
        this
    }
    ,
    w.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], (function(t, e) {
        w.fn[e] = function(t) {
            return this.on(e, t)
        }
    }
    )),
    w.expr.pseudos.animated = function(t) {
        return w.grep(w.timers, (function(e) {
            return t === e.elem
        }
        )).length
    }
    ,
    w.offset = {
        setOffset: function(t, e, i) {
            var n, r, s, o, a, h, c = w.css(t, "position"), l = w(t), u = {};
            "static" === c && (t.style.position = "relative"),
            a = l.offset(),
            s = w.css(t, "top"),
            h = w.css(t, "left"),
            ("absolute" === c || "fixed" === c) && -1 < (s + h).indexOf("auto") ? (o = (n = l.position()).top,
            r = n.left) : (o = parseFloat(s) || 0,
            r = parseFloat(h) || 0),
            g(e) && (e = e.call(t, i, w.extend({}, a))),
            null != e.top && (u.top = e.top - a.top + o),
            null != e.left && (u.left = e.left - a.left + r),
            "using"in e ? e.using.call(t, u) : l.css(u)
        }
    },
    w.fn.extend({
        offset: function(t) {
            if (arguments.length)
                return void 0 === t ? this : this.each((function(e) {
                    w.offset.setOffset(this, t, e)
                }
                ));
            var e, i, n = this[0];
            return n ? n.getClientRects().length ? (e = n.getBoundingClientRect(),
            i = n.ownerDocument.defaultView,
            {
                top: e.top + i.pageYOffset,
                left: e.left + i.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var t, e, i, n = this[0], r = {
                    top: 0,
                    left: 0
                };
                if ("fixed" === w.css(n, "position"))
                    e = n.getBoundingClientRect();
                else {
                    for (e = this.offset(),
                    i = n.ownerDocument,
                    t = n.offsetParent || i.documentElement; t && (t === i.body || t === i.documentElement) && "static" === w.css(t, "position"); )
                        t = t.parentNode;
                    t && t !== n && 1 === t.nodeType && ((r = w(t).offset()).top += w.css(t, "borderTopWidth", !0),
                    r.left += w.css(t, "borderLeftWidth", !0))
                }
                return {
                    top: e.top - r.top - w.css(n, "marginTop", !0),
                    left: e.left - r.left - w.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map((function() {
                for (var t = this.offsetParent; t && "static" === w.css(t, "position"); )
                    t = t.offsetParent;
                return t || rt
            }
            ))
        }
    }),
    w.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, (function(t, e) {
        var i = "pageYOffset" === e;
        w.fn[t] = function(n) {
            return V(this, (function(t, n, r) {
                var s;
                if (y(t) ? s = t : 9 === t.nodeType && (s = t.defaultView),
                void 0 === r)
                    return s ? s[e] : t[n];
                s ? s.scrollTo(i ? s.pageXOffset : r, i ? r : s.pageYOffset) : t[n] = r
            }
            ), t, n, arguments.length)
        }
    }
    )),
    w.each(["top", "left"], (function(t, e) {
        w.cssHooks[e] = zt(f.pixelPosition, (function(t, i) {
            if (i)
                return i = Vt(t, e),
                Wt.test(i) ? w(t).position()[e] + "px" : i
        }
        ))
    }
    )),
    w.each({
        Height: "height",
        Width: "width"
    }, (function(t, e) {
        w.each({
            padding: "inner" + t,
            content: e,
            "": "outer" + t
        }, (function(i, n) {
            w.fn[n] = function(r, s) {
                var o = arguments.length && (i || "boolean" != typeof r)
                  , a = i || (!0 === r || !0 === s ? "margin" : "border");
                return V(this, (function(e, i, r) {
                    var s;
                    return y(e) ? 0 === n.indexOf("outer") ? e["inner" + t] : e.document.documentElement["client" + t] : 9 === e.nodeType ? (s = e.documentElement,
                    Math.max(e.body["scroll" + t], s["scroll" + t], e.body["offset" + t], s["offset" + t], s["client" + t])) : void 0 === r ? w.css(e, i, a) : w.style(e, i, r, a)
                }
                ), e, o ? r : void 0, o)
            }
        }
        ))
    }
    )),
    w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), (function(t, e) {
        w.fn[e] = function(t, i) {
            return 0 < arguments.length ? this.on(e, null, t, i) : this.trigger(e)
        }
    }
    )),
    w.fn.extend({
        hover: function(t, e) {
            return this.mouseenter(t).mouseleave(e || t)
        }
    }),
    w.fn.extend({
        bind: function(t, e, i) {
            return this.on(t, null, e, i)
        },
        unbind: function(t, e) {
            return this.off(t, null, e)
        },
        delegate: function(t, e, i, n) {
            return this.on(e, t, i, n)
        },
        undelegate: function(t, e, i) {
            return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", i)
        }
    }),
    w.proxy = function(t, e) {
        var i, n, r;
        if ("string" == typeof e && (i = t[e],
        e = t,
        t = i),
        g(t))
            return n = s.call(arguments, 2),
            (r = function() {
                return t.apply(e || this, n.concat(s.call(arguments)))
            }
            ).guid = t.guid = t.guid || w.guid++,
            r
    }
    ,
    w.holdReady = function(t) {
        t ? w.readyWait++ : w.ready(!0)
    }
    ,
    w.isArray = Array.isArray,
    w.parseJSON = JSON.parse,
    w.nodeName = E,
    w.isFunction = g,
    w.isWindow = y,
    w.camelCase = X,
    w.type = v,
    w.now = Date.now,
    w.isNumeric = function(t) {
        var e = w.type(t);
        return ("number" === e || "string" === e) && !isNaN(t - parseFloat(t))
    }
    ,
    "function" == typeof define && define.amd && define("jquery", [], (function() {
        return w
    }
    ));
    var Qe = t.jQuery
      , Ke = t.$;
    return w.noConflict = function(e) {
        return t.$ === w && (t.$ = Ke),
        e && t.jQuery === w && (t.jQuery = Qe),
        w
    }
    ,
    e || (t.jQuery = t.$ = w),
    w
}
));
var cr = {
    plugins_: {},
    behaviors: {}
};
"function" != typeof Object.getPrototypeOf && (Object.getPrototypeOf = "object" == typeof "test".__proto__ ? function(t) {
    return t.__proto__
}
: function(t) {
    return t.constructor.prototype
}
),
function() {
    function t(t, e) {
        this.x = t,
        this.y = e,
        cr.seal(this)
    }
    function e(t, e, i, n) {
        this.set(t, e, i, n),
        cr.seal(this)
    }
    function i() {
        this.tlx = 0,
        this.tly = 0,
        this.trx = 0,
        this.try_ = 0,
        this.brx = 0,
        this.bry = 0,
        this.blx = 0,
        this.bly = 0,
        cr.seal(this)
    }
    cr.logexport = function(t) {
        window.console && window.console.log && window.console.log(t)
    }
    ,
    cr.logerror = function(t) {
        window.console && window.console.error && window.console.error(t)
    }
    ,
    cr.seal = function(t) {
        return t
    }
    ,
    cr.freeze = function(t) {
        return t
    }
    ,
    cr.is_undefined = function(t) {
        return void 0 === t
    }
    ,
    cr.is_number = function(t) {
        return "number" == typeof t
    }
    ,
    cr.is_string = function(t) {
        return "string" == typeof t
    }
    ,
    cr.isPOT = function(t) {
        return t > 0 && 0 == (t - 1 & t)
    }
    ,
    cr.nextHighestPowerOfTwo = function(t) {
        --t;
        for (var e = 1; e < 32; e <<= 1)
            t |= t >> e;
        return t + 1
    }
    ,
    cr.abs = function(t) {
        return t < 0 ? -t : t
    }
    ,
    cr.max = function(t, e) {
        return t > e ? t : e
    }
    ,
    cr.min = function(t, e) {
        return t < e ? t : e
    }
    ,
    cr.PI = Math.PI,
    cr.round = function(t) {
        return t + .5 | 0
    }
    ,
    cr.floor = function(t) {
        return t >= 0 ? 0 | t : (0 | t) - 1
    }
    ,
    cr.ceil = function(t) {
        var e = 0 | t;
        return e === t ? e : e + 1
    }
    ,
    t.prototype.offset = function(t, e) {
        return this.x += t,
        this.y += e,
        this
    }
    ,
    t.prototype.mul = function(t, e) {
        return this.x *= t,
        this.y *= e,
        this
    }
    ,
    cr.vector2 = t,
    cr.segments_intersect = function(t, e, i, n, r, s, o, a) {
        var h, c, l, u, p, d, f, g;
        if (t < i ? (c = t,
        h = i) : (c = i,
        h = t),
        r < o ? (d = r,
        p = o) : (d = o,
        p = r),
        h < d || c > p)
            return !1;
        if (e < n ? (u = e,
        l = n) : (u = n,
        l = e),
        s < a ? (g = s,
        f = a) : (g = a,
        f = s),
        l < g || u > f)
            return !1;
        var y = r - t + o - i
          , m = s - e + a - n
          , _ = i - t
          , v = n - e
          , b = o - r
          , w = a - s
          , x = cr.abs(v * b - w * _)
          , T = b * m - w * y;
        if (cr.abs(T) > x)
            return !1;
        var S = _ * m - v * y;
        return cr.abs(S) <= x
    }
    ,
    e.prototype.set = function(t, e, i, n) {
        this.left = t,
        this.top = e,
        this.right = i,
        this.bottom = n
    }
    ,
    e.prototype.copy = function(t) {
        this.left = t.left,
        this.top = t.top,
        this.right = t.right,
        this.bottom = t.bottom
    }
    ,
    e.prototype.width = function() {
        return this.right - this.left
    }
    ,
    e.prototype.height = function() {
        return this.bottom - this.top
    }
    ,
    e.prototype.offset = function(t, e) {
        return this.left += t,
        this.top += e,
        this.right += t,
        this.bottom += e,
        this
    }
    ,
    e.prototype.normalize = function() {
        var t = 0;
        this.left > this.right && (t = this.left,
        this.left = this.right,
        this.right = t),
        this.top > this.bottom && (t = this.top,
        this.top = this.bottom,
        this.bottom = t)
    }
    ,
    e.prototype.intersects_rect = function(t) {
        return !(t.right < this.left || t.bottom < this.top || t.left > this.right || t.top > this.bottom)
    }
    ,
    e.prototype.intersects_rect_off = function(t, e, i) {
        return !(t.right + e < this.left || t.bottom + i < this.top || t.left + e > this.right || t.top + i > this.bottom)
    }
    ,
    e.prototype.contains_pt = function(t, e) {
        return t >= this.left && t <= this.right && e >= this.top && e <= this.bottom
    }
    ,
    e.prototype.equals = function(t) {
        return this.left === t.left && this.top === t.top && this.right === t.right && this.bottom === t.bottom
    }
    ,
    cr.rect = e,
    i.prototype.set_from_rect = function(t) {
        this.tlx = t.left,
        this.tly = t.top,
        this.trx = t.right,
        this.try_ = t.top,
        this.brx = t.right,
        this.bry = t.bottom,
        this.blx = t.left,
        this.bly = t.bottom
    }
    ,
    i.prototype.set_from_rotated_rect = function(t, e) {
        if (0 === e)
            this.set_from_rect(t);
        else {
            var i = Math.sin(e)
              , n = Math.cos(e)
              , r = t.left * i
              , s = t.top * i
              , o = t.right * i
              , a = t.bottom * i
              , h = t.left * n
              , c = t.top * n
              , l = t.right * n
              , u = t.bottom * n;
            this.tlx = h - s,
            this.tly = c + r,
            this.trx = l - s,
            this.try_ = c + o,
            this.brx = l - a,
            this.bry = u + o,
            this.blx = h - a,
            this.bly = u + r
        }
    }
    ,
    i.prototype.offset = function(t, e) {
        return this.tlx += t,
        this.tly += e,
        this.trx += t,
        this.try_ += e,
        this.brx += t,
        this.bry += e,
        this.blx += t,
        this.bly += e,
        this
    }
    ;
    var n = 0
      , r = 0;
    function s(t, e, i, s) {
        t < e ? i < s ? (n = t < i ? t : i,
        r = e > s ? e : s) : (n = t < s ? t : s,
        r = e > i ? e : i) : i < s ? (n = e < i ? e : i,
        r = t > s ? t : s) : (n = e < s ? e : s,
        r = t > i ? t : i)
    }
    i.prototype.bounding_box = function(t) {
        s(this.tlx, this.trx, this.brx, this.blx),
        t.left = n,
        t.right = r,
        s(this.tly, this.try_, this.bry, this.bly),
        t.top = n,
        t.bottom = r
    }
    ,
    i.prototype.contains_pt = function(t, e) {
        var i, n, r, s = this.tlx, o = this.tly, a = this.trx - s, h = this.try_ - o, c = this.brx - s, l = this.bry - o, u = t - s, p = e - o, d = c * c + l * l, f = c * u + l * p, g = 1 / ((i = a * a + h * h) * d - (n = a * c + h * l) * n), y = (d * (r = a * u + h * p) - n * f) * g, m = (i * f - n * r) * g;
        return y >= 0 && m > 0 && y + m < 1 || (m = ((i = (a = this.blx - s) * a + (h = this.bly - o) * h) * f - (n = a * c + h * l) * (r = a * u + h * p)) * (g = 1 / (i * d - n * n)),
        (y = (d * r - n * f) * g) >= 0 && m > 0 && y + m < 1)
    }
    ,
    i.prototype.at = function(t, e) {
        if (e)
            switch (t) {
            case 0:
                return this.tlx;
            case 1:
                return this.trx;
            case 2:
                return this.brx;
            case 3:
                return this.blx;
            case 4:
            default:
                return this.tlx
            }
        else
            switch (t) {
            case 0:
                return this.tly;
            case 1:
                return this.try_;
            case 2:
                return this.bry;
            case 3:
                return this.bly;
            case 4:
            default:
                return this.tly
            }
    }
    ,
    i.prototype.midX = function() {
        return (this.tlx + this.trx + this.brx + this.blx) / 4
    }
    ,
    i.prototype.midY = function() {
        return (this.tly + this.try_ + this.bry + this.bly) / 4
    }
    ,
    i.prototype.intersects_segment = function(t, e, i, n) {
        if (this.contains_pt(t, e) || this.contains_pt(i, n))
            return !0;
        var r, s, o, a, h;
        for (h = 0; h < 4; h++)
            if (r = this.at(h, !0),
            s = this.at(h, !1),
            o = this.at(h + 1, !0),
            a = this.at(h + 1, !1),
            cr.segments_intersect(t, e, i, n, r, s, o, a))
                return !0;
        return !1
    }
    ,
    i.prototype.intersects_quad = function(t) {
        var e, i, n, r, s, o, a, h, c, l, u = t.midX(), p = t.midY();
        if (this.contains_pt(u, p))
            return !0;
        if (u = this.midX(),
        p = this.midY(),
        t.contains_pt(u, p))
            return !0;
        for (c = 0; c < 4; c++)
            for (l = 0; l < 4; l++)
                if (e = this.at(c, !0),
                i = this.at(c, !1),
                n = this.at(c + 1, !0),
                r = this.at(c + 1, !1),
                s = t.at(l, !0),
                o = t.at(l, !1),
                a = t.at(l + 1, !0),
                h = t.at(l + 1, !1),
                cr.segments_intersect(e, i, n, r, s, o, a, h))
                    return !0;
        return !1
    }
    ,
    cr.quad = i,
    cr.RGB = function(t, e, i) {
        return Math.max(Math.min(t, 255), 0) | Math.max(Math.min(e, 255), 0) << 8 | Math.max(Math.min(i, 255), 0) << 16
    }
    ,
    cr.GetRValue = function(t) {
        return 255 & t
    }
    ,
    cr.GetGValue = function(t) {
        return (65280 & t) >> 8
    }
    ,
    cr.GetBValue = function(t) {
        return (16711680 & t) >> 16
    }
    ,
    cr.shallowCopy = function(t, e, i) {
        var n;
        for (n in e)
            e.hasOwnProperty(n) && (t[n] = e[n]);
        return t
    }
    ,
    cr.arrayRemove = function(t, e) {
        var i, n;
        if (!((e = cr.floor(e)) < 0 || e >= t.length)) {
            for (i = e,
            n = t.length - 1; i < n; i++)
                t[i] = t[i + 1];
            cr.truncateArray(t, n)
        }
    }
    ,
    cr.truncateArray = function(t, e) {
        t.length = e
    }
    ,
    cr.clearArray = function(t) {
        cr.truncateArray(t, 0)
    }
    ,
    cr.shallowAssignArray = function(t, e) {
        var i, n;
        for (cr.clearArray(t),
        i = 0,
        n = e.length; i < n; ++i)
            t[i] = e[i]
    }
    ,
    cr.appendArray = function(t, e) {
        t.push.apply(t, e)
    }
    ,
    cr.fastIndexOf = function(t, e) {
        var i, n;
        for (i = 0,
        n = t.length; i < n; ++i)
            if (t[i] === e)
                return i;
        return -1
    }
    ,
    cr.arrayFindRemove = function(t, e) {
        var i = cr.fastIndexOf(t, e);
        -1 !== i && cr.arrayRemove(t, i)
    }
    ,
    cr.clamp = function(t, e, i) {
        return t < e ? e : t > i ? i : t
    }
    ,
    cr.to_radians = function(t) {
        return t / (180 / cr.PI)
    }
    ,
    cr.to_degrees = function(t) {
        return t * (180 / cr.PI)
    }
    ,
    cr.clamp_angle_degrees = function(t) {
        return (t %= 360) < 0 && (t += 360),
        t
    }
    ,
    cr.clamp_angle = function(t) {
        return (t %= 2 * cr.PI) < 0 && (t += 2 * cr.PI),
        t
    }
    ,
    cr.to_clamped_degrees = function(t) {
        return cr.clamp_angle_degrees(cr.to_degrees(t))
    }
    ,
    cr.to_clamped_radians = function(t) {
        return cr.clamp_angle(cr.to_radians(t))
    }
    ,
    cr.angleTo = function(t, e, i, n) {
        var r = i - t
          , s = n - e;
        return Math.atan2(s, r)
    }
    ,
    cr.angleDiff = function(t, e) {
        if (t === e)
            return 0;
        var i = Math.sin(t)
          , n = Math.cos(t)
          , r = i * Math.sin(e) + n * Math.cos(e);
        return r >= 1 ? 0 : r <= -1 ? cr.PI : Math.acos(r)
    }
    ,
    cr.angleRotate = function(t, e, i) {
        var n = Math.sin(t)
          , r = Math.cos(t)
          , s = Math.sin(e)
          , o = Math.cos(e);
        return Math.acos(n * s + r * o) > i ? r * s - n * o > 0 ? cr.clamp_angle(t + i) : cr.clamp_angle(t - i) : cr.clamp_angle(e)
    }
    ,
    cr.angleClockwise = function(t, e) {
        var i = Math.sin(t);
        return Math.cos(t) * Math.sin(e) - i * Math.cos(e) <= 0
    }
    ,
    cr.rotatePtAround = function(t, e, i, n, r, s) {
        if (0 === i)
            return s ? t : e;
        var o = Math.sin(i)
          , a = Math.cos(i)
          , h = (t -= n) * o;
        return t = t * a - (e -= r) * o,
        e = e * a + h,
        t += n,
        e += r,
        s ? t : e
    }
    ,
    cr.distanceTo = function(t, e, i, n) {
        var r = i - t
          , s = n - e;
        return Math.sqrt(r * r + s * s)
    }
    ,
    cr.xor = function(t, e) {
        return !t != !e
    }
    ,
    cr.lerp = function(t, e, i) {
        return t + (e - t) * i
    }
    ,
    cr.unlerp = function(t, e, i) {
        return t === e ? 0 : (i - t) / (e - t)
    }
    ,
    cr.anglelerp = function(t, e, i) {
        var n = cr.angleDiff(t, e);
        return cr.angleClockwise(e, t) ? t + n * i : t - n * i
    }
    ,
    cr.qarp = function(t, e, i, n) {
        return cr.lerp(cr.lerp(t, e, n), cr.lerp(e, i, n), n)
    }
    ,
    cr.cubic = function(t, e, i, n, r) {
        return cr.lerp(cr.qarp(t, e, i, r), cr.qarp(e, i, n, r), r)
    }
    ,
    cr.cosp = function(t, e, i) {
        return (t + e + (t - e) * Math.cos(i * Math.PI)) / 2
    }
    ,
    cr.hasAnyOwnProperty = function(t) {
        var e;
        for (e in t)
            if (t.hasOwnProperty(e))
                return !0;
        return !1
    }
    ,
    cr.wipe = function(t) {
        var e;
        for (e in t)
            t.hasOwnProperty(e) && delete t[e]
    }
    ;
    var o = +new Date;
    cr.performance_now = function() {
        if (void 0 !== window.performance) {
            var t = window.performance;
            if (void 0 !== t.now)
                return t.now();
            if (void 0 !== t.webkitNow)
                return t.webkitNow();
            if (void 0 !== t.mozNow)
                return t.mozNow();
            if (void 0 !== t.msNow)
                return t.msNow()
        }
        return Date.now() - o
    }
    ;
    var a = !1
      , h = !1
      , c = !1;
    "undefined" != typeof window && (a = !(/chrome/i.test(navigator.userAgent) || /chromium/i.test(navigator.userAgent)) && /safari/i.test(navigator.userAgent),
    h = /(iphone|ipod|ipad)/i.test(navigator.userAgent),
    c = window.c2ejecta);
    var l = !a && !c && !h && "undefined" != typeof Set && void 0 !== Set.prototype.forEach;
    function u() {
        this.s = null,
        this.items = null,
        this.item_count = 0,
        l && (this.s = new Set),
        this.values_cache = [],
        this.cache_valid = !0,
        cr.seal(this)
    }
    u.prototype.contains = function(t) {
        return !this.isEmpty() && (l ? this.s.has(t) : this.items && this.items.hasOwnProperty(t))
    }
    ,
    u.prototype.add = function(t) {
        if (l)
            this.s.has(t) || (this.s.add(t),
            this.cache_valid = !1);
        else {
            var e = t.toString()
              , i = this.items;
            i ? i.hasOwnProperty(e) || (i[e] = t,
            this.item_count++,
            this.cache_valid = !1) : (this.items = {},
            this.items[e] = t,
            this.item_count = 1,
            this.cache_valid = !1)
        }
    }
    ,
    u.prototype.remove = function(t) {
        if (!this.isEmpty())
            if (l)
                this.s.has(t) && (this.s.delete(t),
                this.cache_valid = !1);
            else if (this.items) {
                var e = t.toString()
                  , i = this.items;
                i.hasOwnProperty(e) && (delete i[e],
                this.item_count--,
                this.cache_valid = !1)
            }
    }
    ,
    u.prototype.clear = function() {
        this.isEmpty() || (l ? this.s.clear() : (this.items = null,
        this.item_count = 0),
        cr.clearArray(this.values_cache),
        this.cache_valid = !0)
    }
    ,
    u.prototype.isEmpty = function() {
        return 0 === this.count()
    }
    ,
    u.prototype.count = function() {
        return l ? this.s.size : this.item_count
    }
    ;
    var p = null
      , d = 0;
    function f(t) {
        p[d++] = t
    }
    u.prototype.update_cache = function() {
        if (!this.cache_valid) {
            if (l)
                cr.clearArray(this.values_cache),
                p = this.values_cache,
                d = 0,
                this.s.forEach(f),
                p = null,
                d = 0;
            else {
                var t = this.values_cache;
                cr.clearArray(t);
                var e, i = 0, n = this.items;
                if (n)
                    for (e in n)
                        n.hasOwnProperty(e) && (t[i++] = n[e])
            }
            this.cache_valid = !0
        }
    }
    ,
    u.prototype.valuesRef = function() {
        return this.update_cache(),
        this.values_cache
    }
    ,
    cr.ObjectSet = u;
    var g = new cr.ObjectSet;
    function y() {
        this.c = 0,
        this.y = 0,
        this.t = 0,
        this.sum = 0,
        cr.seal(this)
    }
    function m(t) {
        this.pts_cache = [],
        this.bboxLeft = 0,
        this.bboxTop = 0,
        this.bboxRight = 0,
        this.bboxBottom = 0,
        this.convexpolys = null,
        this.set_pts(t),
        cr.seal(this)
    }
    function _(t, e) {
        this.cellwidth = t,
        this.cellheight = e,
        this.cells = {}
    }
    function v(t, e) {
        this.cellwidth = t,
        this.cellheight = e,
        this.cells = {}
    }
    cr.removeArrayDuplicates = function(t) {
        var e, i;
        for (e = 0,
        i = t.length; e < i; ++e)
            g.add(t[e]);
        cr.shallowAssignArray(t, g.valuesRef()),
        g.clear()
    }
    ,
    cr.arrayRemoveAllFromObjectSet = function(t, e) {
        l ? cr.arrayRemoveAll_set(t, e.s) : cr.arrayRemoveAll_arr(t, e.valuesRef())
    }
    ,
    cr.arrayRemoveAll_set = function(t, e) {
        var i, n, r, s;
        for (i = 0,
        n = 0,
        r = t.length; i < r; ++i)
            s = t[i],
            e.has(s) || (t[n++] = s);
        cr.truncateArray(t, n)
    }
    ,
    cr.arrayRemoveAll_arr = function(t, e) {
        var i, n, r, s;
        for (i = 0,
        n = 0,
        r = t.length; i < r; ++i)
            s = t[i],
            -1 === cr.fastIndexOf(e, s) && (t[n++] = s);
        cr.truncateArray(t, n)
    }
    ,
    y.prototype.add = function(t) {
        this.y = t - this.c,
        this.t = this.sum + this.y,
        this.c = this.t - this.sum - this.y,
        this.sum = this.t
    }
    ,
    y.prototype.reset = function() {
        this.c = 0,
        this.y = 0,
        this.t = 0,
        this.sum = 0
    }
    ,
    cr.KahanAdder = y,
    cr.regexp_escape = function(t) {
        return t.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")
    }
    ,
    m.prototype.set_pts = function(t) {
        this.pts_array = t,
        this.pts_count = t.length / 2,
        this.pts_cache.length = t.length,
        this.cache_width = -1,
        this.cache_height = -1,
        this.cache_angle = 0
    }
    ,
    m.prototype.is_empty = function() {
        return !this.pts_array.length
    }
    ,
    m.prototype.update_bbox = function() {
        for (var t, e, i, n = this.pts_cache, r = n[0], s = r, o = n[1], a = o, h = 1, c = this.pts_count; h < c; ++h)
            (t = n[i = 2 * h]) < r && (r = t),
            t > s && (s = t),
            (e = n[i + 1]) < o && (o = e),
            e > a && (a = e);
        this.bboxLeft = r,
        this.bboxRight = s,
        this.bboxTop = o,
        this.bboxBottom = a
    }
    ,
    m.prototype.set_from_rect = function(t, e, i) {
        this.pts_cache.length = 8,
        this.pts_count = 4;
        var n = this.pts_cache;
        n[0] = t.left - e,
        n[1] = t.top - i,
        n[2] = t.right - e,
        n[3] = t.top - i,
        n[4] = t.right - e,
        n[5] = t.bottom - i,
        n[6] = t.left - e,
        n[7] = t.bottom - i,
        this.cache_width = t.right - t.left,
        this.cache_height = t.bottom - t.top,
        this.update_bbox()
    }
    ,
    m.prototype.set_from_quad = function(t, e, i, n, r) {
        this.pts_cache.length = 8,
        this.pts_count = 4;
        var s = this.pts_cache;
        s[0] = t.tlx - e,
        s[1] = t.tly - i,
        s[2] = t.trx - e,
        s[3] = t.try_ - i,
        s[4] = t.brx - e,
        s[5] = t.bry - i,
        s[6] = t.blx - e,
        s[7] = t.bly - i,
        this.cache_width = n,
        this.cache_height = r,
        this.update_bbox()
    }
    ,
    m.prototype.set_from_poly = function(t) {
        this.pts_count = t.pts_count,
        cr.shallowAssignArray(this.pts_cache, t.pts_cache),
        this.bboxLeft = t.bboxLeft,
        this.bboxTop,
        t.bboxTop,
        this.bboxRight = t.bboxRight,
        this.bboxBottom = t.bboxBottom
    }
    ,
    m.prototype.cache_poly = function(t, e, i) {
        if (this.cache_width !== t || this.cache_height !== e || this.cache_angle !== i) {
            var n, r, s, o, a, h;
            this.cache_width = t,
            this.cache_height = e,
            this.cache_angle = i;
            var c = 0
              , l = 1
              , u = this.pts_array
              , p = this.pts_cache;
            for (0 !== i && (c = Math.sin(i),
            l = Math.cos(i)),
            n = 0,
            o = this.pts_count; n < o; n++)
                s = (r = 2 * n) + 1,
                a = u[r] * t,
                h = u[s] * e,
                p[r] = a * l - h * c,
                p[s] = h * l + a * c;
            this.update_bbox()
        }
    }
    ,
    m.prototype.contains_pt = function(t, e) {
        var i = this.pts_cache;
        if (t === i[0] && e === i[1])
            return !0;
        var n, r, s, o, a, h, c, l = this.pts_count, u = this.bboxLeft - 110, p = this.bboxTop - 101, d = this.bboxRight + 131, f = this.bboxBottom + 120, g = 0, y = 0;
        for (n = 0; n < l; n++)
            s = (n + 1) % l * 2,
            o = i[r = 2 * n],
            a = i[r + 1],
            h = i[s],
            c = i[s + 1],
            cr.segments_intersect(u, p, t, e, o, a, h, c) && g++,
            cr.segments_intersect(d, f, t, e, o, a, h, c) && y++;
        return g % 2 == 1 || y % 2 == 1
    }
    ,
    m.prototype.intersects_poly = function(t, e, i) {
        var n, r, s, o, a, h, c, l, u, p, d, f, g, y, m, _, v = t.pts_cache, b = this.pts_cache;
        if (this.contains_pt(v[0] + e, v[1] + i))
            return !0;
        if (t.contains_pt(b[0] - e, b[1] - i))
            return !0;
        for (n = 0,
        o = this.pts_count; n < o; n++)
            for (s = (n + 1) % o * 2,
            u = b[r = 2 * n],
            p = b[r + 1],
            d = b[s],
            f = b[s + 1],
            a = 0,
            l = t.pts_count; a < l; a++)
                if (c = (a + 1) % l * 2,
                g = v[h = 2 * a] + e,
                y = v[h + 1] + i,
                m = v[c] + e,
                _ = v[c + 1] + i,
                cr.segments_intersect(u, p, d, f, g, y, m, _))
                    return !0;
        return !1
    }
    ,
    m.prototype.intersects_segment = function(t, e, i, n, r, s) {
        var o, a, h, c, l, u, p, d, f = this.pts_cache;
        if (this.contains_pt(i - t, n - e))
            return !0;
        for (o = 0,
        a = this.pts_count; o < a; o++)
            if (c = (o + 1) % a * 2,
            l = f[h = 2 * o] + t,
            u = f[h + 1] + e,
            p = f[c] + t,
            d = f[c + 1] + e,
            cr.segments_intersect(i, n, r, s, l, u, p, d))
                return !0;
        return !1
    }
    ,
    m.prototype.mirror = function(t) {
        var e, i, n;
        for (e = 0,
        i = this.pts_count; e < i; ++e)
            n = 2 * e,
            this.pts_cache[n] = 2 * t - this.pts_cache[n]
    }
    ,
    m.prototype.flip = function(t) {
        var e, i, n;
        for (e = 0,
        i = this.pts_count; e < i; ++e)
            n = 2 * e + 1,
            this.pts_cache[n] = 2 * t - this.pts_cache[n]
    }
    ,
    m.prototype.diag = function() {
        var t, e, i, n, r;
        for (t = 0,
        e = this.pts_count; t < e; ++t)
            n = (i = 2 * t) + 1,
            r = this.pts_cache[i],
            this.pts_cache[i] = this.pts_cache[n],
            this.pts_cache[n] = r
    }
    ,
    cr.CollisionPoly = m,
    _.prototype.totalCellCount = 0,
    _.prototype.getCell = function(t, e, i) {
        var n, r = this.cells[t];
        return r ? (n = r[e]) || (i ? (n = w(this, t, e),
        this.cells[t][e] = n,
        n) : null) : i ? (n = w(this, t, e),
        this.cells[t] = {},
        this.cells[t][e] = n,
        n) : null
    }
    ,
    _.prototype.XToCell = function(t) {
        return cr.floor(t / this.cellwidth)
    }
    ,
    _.prototype.YToCell = function(t) {
        return cr.floor(t / this.cellheight)
    }
    ,
    _.prototype.update = function(t, e, i) {
        var n, r, s, o, a;
        if (e)
            for (n = e.left,
            r = e.right; n <= r; ++n)
                for (s = e.top,
                o = e.bottom; s <= o; ++s)
                    i && i.contains_pt(n, s) || (a = this.getCell(n, s, !1)) && (a.remove(t),
                    a.isEmpty() && (x(a),
                    this.cells[n][s] = null));
        if (i)
            for (n = i.left,
            r = i.right; n <= r; ++n)
                for (s = i.top,
                o = i.bottom; s <= o; ++s)
                    e && e.contains_pt(n, s) || this.getCell(n, s, !0).insert(t)
    }
    ,
    _.prototype.queryRange = function(t, e) {
        var i, n, r, s, o, a;
        for (i = this.XToCell(t.left),
        r = this.YToCell(t.top),
        n = this.XToCell(t.right),
        o = this.YToCell(t.bottom); i <= n; ++i)
            for (s = r; s <= o; ++s)
                (a = this.getCell(i, s, !1)) && a.dump(e)
    }
    ,
    cr.SparseGrid = _,
    v.prototype.totalCellCount = 0,
    v.prototype.getCell = function(t, e, i) {
        var n, r = this.cells[t];
        return r ? (n = r[e]) || (i ? (n = C(this, t, e),
        this.cells[t][e] = n,
        n) : null) : i ? (n = C(this, t, e),
        this.cells[t] = {},
        this.cells[t][e] = n,
        n) : null
    }
    ,
    v.prototype.XToCell = function(t) {
        return cr.floor(t / this.cellwidth)
    }
    ,
    v.prototype.YToCell = function(t) {
        return cr.floor(t / this.cellheight)
    }
    ,
    v.prototype.update = function(t, e, i) {
        var n, r, s, o, a;
        if (e)
            for (n = e.left,
            r = e.right; n <= r; ++n)
                for (s = e.top,
                o = e.bottom; s <= o; ++s)
                    i && i.contains_pt(n, s) || (a = this.getCell(n, s, !1)) && (a.remove(t),
                    a.isEmpty() && (A(a),
                    this.cells[n][s] = null));
        if (i)
            for (n = i.left,
            r = i.right; n <= r; ++n)
                for (s = i.top,
                o = i.bottom; s <= o; ++s)
                    e && e.contains_pt(n, s) || this.getCell(n, s, !0).insert(t)
    }
    ,
    v.prototype.queryRange = function(t, e, i, n, r) {
        var s, o, a, h, c, l;
        for (s = this.XToCell(t),
        a = this.YToCell(e),
        o = this.XToCell(i),
        c = this.YToCell(n); s <= o; ++s)
            for (h = a; h <= c; ++h)
                (l = this.getCell(s, h, !1)) && l.dump(r)
    }
    ,
    v.prototype.markRangeChanged = function(t) {
        var e, i, n, r, s, o;
        for (e = t.left,
        n = t.top,
        i = t.right,
        s = t.bottom; e <= i; ++e)
            for (r = n; r <= s; ++r)
                (o = this.getCell(e, r, !1)) && (o.is_sorted = !1)
    }
    ,
    cr.RenderGrid = v;
    var b = [];
    function w(t, e, i) {
        var n;
        return _.prototype.totalCellCount++,
        b.length ? ((n = b.pop()).grid = t,
        n.x = e,
        n.y = i,
        n) : new cr.GridCell(t,e,i)
    }
    function x(t) {
        _.prototype.totalCellCount--,
        t.objects.clear(),
        b.length < 1e3 && b.push(t)
    }
    function T(t, e, i) {
        this.grid = t,
        this.x = e,
        this.y = i,
        this.objects = new cr.ObjectSet
    }
    T.prototype.isEmpty = function() {
        return this.objects.isEmpty()
    }
    ,
    T.prototype.insert = function(t) {
        this.objects.add(t)
    }
    ,
    T.prototype.remove = function(t) {
        this.objects.remove(t)
    }
    ,
    T.prototype.dump = function(t) {
        cr.appendArray(t, this.objects.valuesRef())
    }
    ,
    cr.GridCell = T;
    var S = [];
    function C(t, e, i) {
        var n;
        return v.prototype.totalCellCount++,
        S.length ? ((n = S.pop()).grid = t,
        n.x = e,
        n.y = i,
        n) : new cr.RenderCell(t,e,i)
    }
    function A(t) {
        v.prototype.totalCellCount--,
        t.reset(),
        S.length < 1e3 && S.push(t)
    }
    function k(t, e, i) {
        this.grid = t,
        this.x = e,
        this.y = i,
        this.objects = [],
        this.is_sorted = !0,
        this.pending_removal = new cr.ObjectSet,
        this.any_pending_removal = !1
    }
    function E(t, e) {
        return t.zindex - e.zindex
    }
    k.prototype.isEmpty = function() {
        return !this.objects.length || !(this.objects.length > this.pending_removal.count()) && (this.flush_pending(),
        !0)
    }
    ,
    k.prototype.insert = function(t) {
        if (this.pending_removal.contains(t))
            return this.pending_removal.remove(t),
            void (this.pending_removal.isEmpty() && (this.any_pending_removal = !1));
        this.objects.length ? (this.objects[this.objects.length - 1].get_zindex() > t.get_zindex() && (this.is_sorted = !1),
        this.objects.push(t)) : (this.objects.push(t),
        this.is_sorted = !0)
    }
    ,
    k.prototype.remove = function(t) {
        this.pending_removal.add(t),
        this.any_pending_removal = !0,
        this.pending_removal.count() >= 30 && this.flush_pending()
    }
    ,
    k.prototype.flush_pending = function() {
        this.any_pending_removal && (this.pending_removal.count() !== this.objects.length ? (cr.arrayRemoveAllFromObjectSet(this.objects, this.pending_removal),
        this.pending_removal.clear(),
        this.any_pending_removal = !1) : this.reset())
    }
    ,
    k.prototype.ensure_sorted = function() {
        this.is_sorted || (this.objects.sort(E),
        this.is_sorted = !0)
    }
    ,
    k.prototype.reset = function() {
        cr.clearArray(this.objects),
        this.is_sorted = !0,
        this.pending_removal.clear(),
        this.any_pending_removal = !1
    }
    ,
    k.prototype.dump = function(t) {
        this.flush_pending(),
        this.ensure_sorted(),
        this.objects.length && t.push(this.objects)
    }
    ,
    cr.RenderCell = k;
    var O = ["lighter", "xor", "copy", "destination-over", "source-in", "destination-in", "source-out", "destination-out", "source-atop", "destination-atop"];
    cr.effectToCompositeOp = function(t) {
        return t <= 0 || t >= 11 ? "source-over" : O[t - 1]
    }
    ,
    cr.setGLBlend = function(t, e, i) {
        if (i)
            switch (t.srcBlend = i.ONE,
            t.destBlend = i.ONE_MINUS_SRC_ALPHA,
            e) {
            case 1:
                t.srcBlend = i.ONE,
                t.destBlend = i.ONE;
                break;
            case 2:
                break;
            case 3:
                t.srcBlend = i.ONE,
                t.destBlend = i.ZERO;
                break;
            case 4:
                t.srcBlend = i.ONE_MINUS_DST_ALPHA,
                t.destBlend = i.ONE;
                break;
            case 5:
                t.srcBlend = i.DST_ALPHA,
                t.destBlend = i.ZERO;
                break;
            case 6:
                t.srcBlend = i.ZERO,
                t.destBlend = i.SRC_ALPHA;
                break;
            case 7:
                t.srcBlend = i.ONE_MINUS_DST_ALPHA,
                t.destBlend = i.ZERO;
                break;
            case 8:
                t.srcBlend = i.ZERO,
                t.destBlend = i.ONE_MINUS_SRC_ALPHA;
                break;
            case 9:
                t.srcBlend = i.DST_ALPHA,
                t.destBlend = i.ONE_MINUS_SRC_ALPHA;
                break;
            case 10:
                t.srcBlend = i.ONE_MINUS_DST_ALPHA,
                t.destBlend = i.SRC_ALPHA
            }
    }
    ,
    cr.round6dp = function(t) {
        return Math.round(1e6 * t) / 1e6
    }
    ,
    cr.equals_nocase = function(t, e) {
        return "string" == typeof t && "string" == typeof e && (t.length === e.length && (t === e || t.toLowerCase() === e.toLowerCase()))
    }
    ,
    cr.isCanvasInputEvent = function(t) {
        var e = t.target;
        return !e || (e === document || e === window || (!(!document || !document.body || e !== document.body) || !!cr.equals_nocase(e.tagName, "canvas")))
    }
}();
var MatrixArray = "undefined" != typeof Float32Array ? Float32Array : Array
  , glMatrixArrayType = MatrixArray
  , vec3 = {}
  , mat3 = {}
  , mat4 = {}
  , quat4 = {};
vec3.create = function(t) {
    var e = new MatrixArray(3);
    return t && (e[0] = t[0],
    e[1] = t[1],
    e[2] = t[2]),
    e
}
,
vec3.set = function(t, e) {
    return e[0] = t[0],
    e[1] = t[1],
    e[2] = t[2],
    e
}
,
vec3.add = function(t, e, i) {
    return i && t !== i ? (i[0] = t[0] + e[0],
    i[1] = t[1] + e[1],
    i[2] = t[2] + e[2],
    i) : (t[0] += e[0],
    t[1] += e[1],
    t[2] += e[2],
    t)
}
,
vec3.subtract = function(t, e, i) {
    return i && t !== i ? (i[0] = t[0] - e[0],
    i[1] = t[1] - e[1],
    i[2] = t[2] - e[2],
    i) : (t[0] -= e[0],
    t[1] -= e[1],
    t[2] -= e[2],
    t)
}
,
vec3.negate = function(t, e) {
    return e || (e = t),
    e[0] = -t[0],
    e[1] = -t[1],
    e[2] = -t[2],
    e
}
,
vec3.scale = function(t, e, i) {
    return i && t !== i ? (i[0] = t[0] * e,
    i[1] = t[1] * e,
    i[2] = t[2] * e,
    i) : (t[0] *= e,
    t[1] *= e,
    t[2] *= e,
    t)
}
,
vec3.normalize = function(t, e) {
    e || (e = t);
    var i = t[0]
      , n = t[1]
      , r = t[2]
      , s = Math.sqrt(i * i + n * n + r * r);
    return s ? 1 === s ? (e[0] = i,
    e[1] = n,
    e[2] = r,
    e) : (s = 1 / s,
    e[0] = i * s,
    e[1] = n * s,
    e[2] = r * s,
    e) : (e[0] = 0,
    e[1] = 0,
    e[2] = 0,
    e)
}
,
vec3.cross = function(t, e, i) {
    i || (i = t);
    var n = t[0]
      , r = t[1]
      , s = (t = t[2],
    e[0])
      , o = e[1];
    e = e[2];
    return i[0] = r * e - t * o,
    i[1] = t * s - n * e,
    i[2] = n * o - r * s,
    i
}
,
vec3.length = function(t) {
    var e = t[0]
      , i = t[1];
    t = t[2];
    return Math.sqrt(e * e + i * i + t * t)
}
,
vec3.dot = function(t, e) {
    return t[0] * e[0] + t[1] * e[1] + t[2] * e[2]
}
,
vec3.direction = function(t, e, i) {
    i || (i = t);
    var n = t[0] - e[0]
      , r = t[1] - e[1];
    t = t[2] - e[2];
    return (e = Math.sqrt(n * n + r * r + t * t)) ? (e = 1 / e,
    i[0] = n * e,
    i[1] = r * e,
    i[2] = t * e,
    i) : (i[0] = 0,
    i[1] = 0,
    i[2] = 0,
    i)
}
,
vec3.lerp = function(t, e, i, n) {
    return n || (n = t),
    n[0] = t[0] + i * (e[0] - t[0]),
    n[1] = t[1] + i * (e[1] - t[1]),
    n[2] = t[2] + i * (e[2] - t[2]),
    n
}
,
vec3.str = function(t) {
    return "[" + t[0] + ", " + t[1] + ", " + t[2] + "]"
}
,
mat3.create = function(t) {
    var e = new MatrixArray(9);
    return t && (e[0] = t[0],
    e[1] = t[1],
    e[2] = t[2],
    e[3] = t[3],
    e[4] = t[4],
    e[5] = t[5],
    e[6] = t[6],
    e[7] = t[7],
    e[8] = t[8]),
    e
}
,
mat3.set = function(t, e) {
    return e[0] = t[0],
    e[1] = t[1],
    e[2] = t[2],
    e[3] = t[3],
    e[4] = t[4],
    e[5] = t[5],
    e[6] = t[6],
    e[7] = t[7],
    e[8] = t[8],
    e
}
,
mat3.identity = function(t) {
    return t[0] = 1,
    t[1] = 0,
    t[2] = 0,
    t[3] = 0,
    t[4] = 1,
    t[5] = 0,
    t[6] = 0,
    t[7] = 0,
    t[8] = 1,
    t
}
,
mat3.transpose = function(t, e) {
    if (!e || t === e) {
        var i = t[1]
          , n = t[2]
          , r = t[5];
        return t[1] = t[3],
        t[2] = t[6],
        t[3] = i,
        t[5] = t[7],
        t[6] = n,
        t[7] = r,
        t
    }
    return e[0] = t[0],
    e[1] = t[3],
    e[2] = t[6],
    e[3] = t[1],
    e[4] = t[4],
    e[5] = t[7],
    e[6] = t[2],
    e[7] = t[5],
    e[8] = t[8],
    e
}
,
mat3.toMat4 = function(t, e) {
    return e || (e = mat4.create()),
    e[15] = 1,
    e[14] = 0,
    e[13] = 0,
    e[12] = 0,
    e[11] = 0,
    e[10] = t[8],
    e[9] = t[7],
    e[8] = t[6],
    e[7] = 0,
    e[6] = t[5],
    e[5] = t[4],
    e[4] = t[3],
    e[3] = 0,
    e[2] = t[2],
    e[1] = t[1],
    e[0] = t[0],
    e
}
,
mat3.str = function(t) {
    return "[" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ", " + t[4] + ", " + t[5] + ", " + t[6] + ", " + t[7] + ", " + t[8] + "]"
}
,
mat4.create = function(t) {
    var e = new MatrixArray(16);
    return t && (e[0] = t[0],
    e[1] = t[1],
    e[2] = t[2],
    e[3] = t[3],
    e[4] = t[4],
    e[5] = t[5],
    e[6] = t[6],
    e[7] = t[7],
    e[8] = t[8],
    e[9] = t[9],
    e[10] = t[10],
    e[11] = t[11],
    e[12] = t[12],
    e[13] = t[13],
    e[14] = t[14],
    e[15] = t[15]),
    e
}
,
mat4.set = function(t, e) {
    return e[0] = t[0],
    e[1] = t[1],
    e[2] = t[2],
    e[3] = t[3],
    e[4] = t[4],
    e[5] = t[5],
    e[6] = t[6],
    e[7] = t[7],
    e[8] = t[8],
    e[9] = t[9],
    e[10] = t[10],
    e[11] = t[11],
    e[12] = t[12],
    e[13] = t[13],
    e[14] = t[14],
    e[15] = t[15],
    e
}
,
mat4.identity = function(t) {
    return t[0] = 1,
    t[1] = 0,
    t[2] = 0,
    t[3] = 0,
    t[4] = 0,
    t[5] = 1,
    t[6] = 0,
    t[7] = 0,
    t[8] = 0,
    t[9] = 0,
    t[10] = 1,
    t[11] = 0,
    t[12] = 0,
    t[13] = 0,
    t[14] = 0,
    t[15] = 1,
    t
}
,
mat4.transpose = function(t, e) {
    if (!e || t === e) {
        var i = t[1]
          , n = t[2]
          , r = t[3]
          , s = t[6]
          , o = t[7]
          , a = t[11];
        return t[1] = t[4],
        t[2] = t[8],
        t[3] = t[12],
        t[4] = i,
        t[6] = t[9],
        t[7] = t[13],
        t[8] = n,
        t[9] = s,
        t[11] = t[14],
        t[12] = r,
        t[13] = o,
        t[14] = a,
        t
    }
    return e[0] = t[0],
    e[1] = t[4],
    e[2] = t[8],
    e[3] = t[12],
    e[4] = t[1],
    e[5] = t[5],
    e[6] = t[9],
    e[7] = t[13],
    e[8] = t[2],
    e[9] = t[6],
    e[10] = t[10],
    e[11] = t[14],
    e[12] = t[3],
    e[13] = t[7],
    e[14] = t[11],
    e[15] = t[15],
    e
}
,
mat4.determinant = function(t) {
    var e = t[0]
      , i = t[1]
      , n = t[2]
      , r = t[3]
      , s = t[4]
      , o = t[5]
      , a = t[6]
      , h = t[7]
      , c = t[8]
      , l = t[9]
      , u = t[10]
      , p = t[11]
      , d = t[12]
      , f = t[13]
      , g = t[14];
    return d * l * a * r - c * f * a * r - d * o * u * r + s * f * u * r + c * o * g * r - s * l * g * r - d * l * n * h + c * f * n * h + d * i * u * h - e * f * u * h - c * i * g * h + e * l * g * h + d * o * n * p - s * f * n * p - d * i * a * p + e * f * a * p + s * i * g * p - e * o * g * p - c * o * n * (t = t[15]) + s * l * n * t + c * i * a * t - e * l * a * t - s * i * u * t + e * o * u * t
}
,
mat4.inverse = function(t, e) {
    e || (e = t);
    var i = t[0]
      , n = t[1]
      , r = t[2]
      , s = t[3]
      , o = t[4]
      , a = t[5]
      , h = t[6]
      , c = t[7]
      , l = t[8]
      , u = t[9]
      , p = t[10]
      , d = t[11]
      , f = t[12]
      , g = t[13]
      , y = t[14]
      , m = t[15]
      , _ = i * a - n * o
      , v = i * h - r * o
      , b = i * c - s * o
      , w = n * h - r * a
      , x = n * c - s * a
      , T = r * c - s * h
      , S = l * g - u * f
      , C = l * y - p * f
      , A = l * m - d * f
      , k = u * y - p * g
      , E = u * m - d * g
      , O = p * m - d * y
      , P = 1 / (_ * O - v * E + b * k + w * A - x * C + T * S);
    return e[0] = (a * O - h * E + c * k) * P,
    e[1] = (-n * O + r * E - s * k) * P,
    e[2] = (g * T - y * x + m * w) * P,
    e[3] = (-u * T + p * x - d * w) * P,
    e[4] = (-o * O + h * A - c * C) * P,
    e[5] = (i * O - r * A + s * C) * P,
    e[6] = (-f * T + y * b - m * v) * P,
    e[7] = (l * T - p * b + d * v) * P,
    e[8] = (o * E - a * A + c * S) * P,
    e[9] = (-i * E + n * A - s * S) * P,
    e[10] = (f * x - g * b + m * _) * P,
    e[11] = (-l * x + u * b - d * _) * P,
    e[12] = (-o * k + a * C - h * S) * P,
    e[13] = (i * k - n * C + r * S) * P,
    e[14] = (-f * w + g * v - y * _) * P,
    e[15] = (l * w - u * v + p * _) * P,
    e
}
,
mat4.toRotationMat = function(t, e) {
    return e || (e = mat4.create()),
    e[0] = t[0],
    e[1] = t[1],
    e[2] = t[2],
    e[3] = t[3],
    e[4] = t[4],
    e[5] = t[5],
    e[6] = t[6],
    e[7] = t[7],
    e[8] = t[8],
    e[9] = t[9],
    e[10] = t[10],
    e[11] = t[11],
    e[12] = 0,
    e[13] = 0,
    e[14] = 0,
    e[15] = 1,
    e
}
,
mat4.toMat3 = function(t, e) {
    return e || (e = mat3.create()),
    e[0] = t[0],
    e[1] = t[1],
    e[2] = t[2],
    e[3] = t[4],
    e[4] = t[5],
    e[5] = t[6],
    e[6] = t[8],
    e[7] = t[9],
    e[8] = t[10],
    e
}
,
mat4.toInverseMat3 = function(t, e) {
    var i = t[0]
      , n = t[1]
      , r = t[2]
      , s = t[4]
      , o = t[5]
      , a = t[6]
      , h = t[8]
      , c = t[9]
      , l = t[10]
      , u = l * o - a * c
      , p = -l * s + a * h
      , d = c * s - o * h
      , f = i * u + n * p + r * d;
    return f ? (f = 1 / f,
    e || (e = mat3.create()),
    e[0] = u * f,
    e[1] = (-l * n + r * c) * f,
    e[2] = (a * n - r * o) * f,
    e[3] = p * f,
    e[4] = (l * i - r * h) * f,
    e[5] = (-a * i + r * s) * f,
    e[6] = d * f,
    e[7] = (-c * i + n * h) * f,
    e[8] = (o * i - n * s) * f,
    e) : null
}
,
mat4.multiply = function(t, e, i) {
    i || (i = t);
    var n = t[0]
      , r = t[1]
      , s = t[2]
      , o = t[3]
      , a = t[4]
      , h = t[5]
      , c = t[6]
      , l = t[7]
      , u = t[8]
      , p = t[9]
      , d = t[10]
      , f = t[11]
      , g = t[12]
      , y = t[13]
      , m = t[14]
      , _ = (t = t[15],
    e[0])
      , v = e[1]
      , b = e[2]
      , w = e[3]
      , x = e[4]
      , T = e[5]
      , S = e[6]
      , C = e[7]
      , A = e[8]
      , k = e[9]
      , E = e[10]
      , O = e[11]
      , P = e[12]
      , R = e[13]
      , N = e[14];
    e = e[15];
    return i[0] = _ * n + v * a + b * u + w * g,
    i[1] = _ * r + v * h + b * p + w * y,
    i[2] = _ * s + v * c + b * d + w * m,
    i[3] = _ * o + v * l + b * f + w * t,
    i[4] = x * n + T * a + S * u + C * g,
    i[5] = x * r + T * h + S * p + C * y,
    i[6] = x * s + T * c + S * d + C * m,
    i[7] = x * o + T * l + S * f + C * t,
    i[8] = A * n + k * a + E * u + O * g,
    i[9] = A * r + k * h + E * p + O * y,
    i[10] = A * s + k * c + E * d + O * m,
    i[11] = A * o + k * l + E * f + O * t,
    i[12] = P * n + R * a + N * u + e * g,
    i[13] = P * r + R * h + N * p + e * y,
    i[14] = P * s + R * c + N * d + e * m,
    i[15] = P * o + R * l + N * f + e * t,
    i
}
,
mat4.multiplyVec3 = function(t, e, i) {
    i || (i = e);
    var n = e[0]
      , r = e[1];
    e = e[2];
    return i[0] = t[0] * n + t[4] * r + t[8] * e + t[12],
    i[1] = t[1] * n + t[5] * r + t[9] * e + t[13],
    i[2] = t[2] * n + t[6] * r + t[10] * e + t[14],
    i
}
,
mat4.multiplyVec4 = function(t, e, i) {
    i || (i = e);
    var n = e[0]
      , r = e[1]
      , s = e[2];
    e = e[3];
    return i[0] = t[0] * n + t[4] * r + t[8] * s + t[12] * e,
    i[1] = t[1] * n + t[5] * r + t[9] * s + t[13] * e,
    i[2] = t[2] * n + t[6] * r + t[10] * s + t[14] * e,
    i[3] = t[3] * n + t[7] * r + t[11] * s + t[15] * e,
    i
}
,
mat4.translate = function(t, e, i) {
    var n, r, s, o, a, h, c, l, u, p, d, f, g = e[0], y = e[1];
    e = e[2];
    return i && t !== i ? (n = t[0],
    r = t[1],
    s = t[2],
    o = t[3],
    a = t[4],
    h = t[5],
    c = t[6],
    l = t[7],
    u = t[8],
    p = t[9],
    d = t[10],
    f = t[11],
    i[0] = n,
    i[1] = r,
    i[2] = s,
    i[3] = o,
    i[4] = a,
    i[5] = h,
    i[6] = c,
    i[7] = l,
    i[8] = u,
    i[9] = p,
    i[10] = d,
    i[11] = f,
    i[12] = n * g + a * y + u * e + t[12],
    i[13] = r * g + h * y + p * e + t[13],
    i[14] = s * g + c * y + d * e + t[14],
    i[15] = o * g + l * y + f * e + t[15],
    i) : (t[12] = t[0] * g + t[4] * y + t[8] * e + t[12],
    t[13] = t[1] * g + t[5] * y + t[9] * e + t[13],
    t[14] = t[2] * g + t[6] * y + t[10] * e + t[14],
    t[15] = t[3] * g + t[7] * y + t[11] * e + t[15],
    t)
}
,
mat4.scale = function(t, e, i) {
    var n = e[0]
      , r = e[1];
    e = e[2];
    return i && t !== i ? (i[0] = t[0] * n,
    i[1] = t[1] * n,
    i[2] = t[2] * n,
    i[3] = t[3] * n,
    i[4] = t[4] * r,
    i[5] = t[5] * r,
    i[6] = t[6] * r,
    i[7] = t[7] * r,
    i[8] = t[8] * e,
    i[9] = t[9] * e,
    i[10] = t[10] * e,
    i[11] = t[11] * e,
    i[12] = t[12],
    i[13] = t[13],
    i[14] = t[14],
    i[15] = t[15],
    i) : (t[0] *= n,
    t[1] *= n,
    t[2] *= n,
    t[3] *= n,
    t[4] *= r,
    t[5] *= r,
    t[6] *= r,
    t[7] *= r,
    t[8] *= e,
    t[9] *= e,
    t[10] *= e,
    t[11] *= e,
    t)
}
,
mat4.rotate = function(t, e, i, n) {
    var r, s, o, a, h, c, l, u, p, d, f, g, y, m, _, v, b, w, x, T, S = i[0], C = i[1], A = (i = i[2],
    Math.sqrt(S * S + C * C + i * i));
    return A ? (1 !== A && (S *= A = 1 / A,
    C *= A,
    i *= A),
    r = Math.sin(e),
    o = 1 - (s = Math.cos(e)),
    e = t[0],
    A = t[1],
    a = t[2],
    h = t[3],
    c = t[4],
    l = t[5],
    u = t[6],
    p = t[7],
    d = t[8],
    f = t[9],
    g = t[10],
    y = t[11],
    m = S * S * o + s,
    _ = C * S * o + i * r,
    v = i * S * o - C * r,
    b = S * C * o - i * r,
    w = C * C * o + s,
    x = i * C * o + S * r,
    T = S * i * o + C * r,
    S = C * i * o - S * r,
    C = i * i * o + s,
    n ? t !== n && (n[12] = t[12],
    n[13] = t[13],
    n[14] = t[14],
    n[15] = t[15]) : n = t,
    n[0] = e * m + c * _ + d * v,
    n[1] = A * m + l * _ + f * v,
    n[2] = a * m + u * _ + g * v,
    n[3] = h * m + p * _ + y * v,
    n[4] = e * b + c * w + d * x,
    n[5] = A * b + l * w + f * x,
    n[6] = a * b + u * w + g * x,
    n[7] = h * b + p * w + y * x,
    n[8] = e * T + c * S + d * C,
    n[9] = A * T + l * S + f * C,
    n[10] = a * T + u * S + g * C,
    n[11] = h * T + p * S + y * C,
    n) : null
}
,
mat4.rotateX = function(t, e, i) {
    var n = Math.sin(e)
      , r = (e = Math.cos(e),
    t[4])
      , s = t[5]
      , o = t[6]
      , a = t[7]
      , h = t[8]
      , c = t[9]
      , l = t[10]
      , u = t[11];
    return i ? t !== i && (i[0] = t[0],
    i[1] = t[1],
    i[2] = t[2],
    i[3] = t[3],
    i[12] = t[12],
    i[13] = t[13],
    i[14] = t[14],
    i[15] = t[15]) : i = t,
    i[4] = r * e + h * n,
    i[5] = s * e + c * n,
    i[6] = o * e + l * n,
    i[7] = a * e + u * n,
    i[8] = r * -n + h * e,
    i[9] = s * -n + c * e,
    i[10] = o * -n + l * e,
    i[11] = a * -n + u * e,
    i
}
,
mat4.rotateY = function(t, e, i) {
    var n = Math.sin(e)
      , r = (e = Math.cos(e),
    t[0])
      , s = t[1]
      , o = t[2]
      , a = t[3]
      , h = t[8]
      , c = t[9]
      , l = t[10]
      , u = t[11];
    return i ? t !== i && (i[4] = t[4],
    i[5] = t[5],
    i[6] = t[6],
    i[7] = t[7],
    i[12] = t[12],
    i[13] = t[13],
    i[14] = t[14],
    i[15] = t[15]) : i = t,
    i[0] = r * e + h * -n,
    i[1] = s * e + c * -n,
    i[2] = o * e + l * -n,
    i[3] = a * e + u * -n,
    i[8] = r * n + h * e,
    i[9] = s * n + c * e,
    i[10] = o * n + l * e,
    i[11] = a * n + u * e,
    i
}
,
mat4.rotateZ = function(t, e, i) {
    var n = Math.sin(e)
      , r = (e = Math.cos(e),
    t[0])
      , s = t[1]
      , o = t[2]
      , a = t[3]
      , h = t[4]
      , c = t[5]
      , l = t[6]
      , u = t[7];
    return i ? t !== i && (i[8] = t[8],
    i[9] = t[9],
    i[10] = t[10],
    i[11] = t[11],
    i[12] = t[12],
    i[13] = t[13],
    i[14] = t[14],
    i[15] = t[15]) : i = t,
    i[0] = r * e + h * n,
    i[1] = s * e + c * n,
    i[2] = o * e + l * n,
    i[3] = a * e + u * n,
    i[4] = r * -n + h * e,
    i[5] = s * -n + c * e,
    i[6] = o * -n + l * e,
    i[7] = a * -n + u * e,
    i
}
,
mat4.frustum = function(t, e, i, n, r, s, o) {
    o || (o = mat4.create());
    var a = e - t
      , h = n - i
      , c = s - r;
    return o[0] = 2 * r / a,
    o[1] = 0,
    o[2] = 0,
    o[3] = 0,
    o[4] = 0,
    o[5] = 2 * r / h,
    o[6] = 0,
    o[7] = 0,
    o[8] = (e + t) / a,
    o[9] = (n + i) / h,
    o[10] = -(s + r) / c,
    o[11] = -1,
    o[12] = 0,
    o[13] = 0,
    o[14] = -s * r * 2 / c,
    o[15] = 0,
    o
}
,
mat4.perspective = function(t, e, i, n, r) {
    return e *= t = i * Math.tan(t * Math.PI / 360),
    mat4.frustum(-e, e, -t, t, i, n, r)
}
,
mat4.ortho = function(t, e, i, n, r, s, o) {
    o || (o = mat4.create());
    var a = e - t
      , h = n - i
      , c = s - r;
    return o[0] = 2 / a,
    o[1] = 0,
    o[2] = 0,
    o[3] = 0,
    o[4] = 0,
    o[5] = 2 / h,
    o[6] = 0,
    o[7] = 0,
    o[8] = 0,
    o[9] = 0,
    o[10] = -2 / c,
    o[11] = 0,
    o[12] = -(t + e) / a,
    o[13] = -(n + i) / h,
    o[14] = -(s + r) / c,
    o[15] = 1,
    o
}
,
mat4.lookAt = function(t, e, i, n) {
    n || (n = mat4.create());
    var r, s, o, a, h, c, l, u, p = t[0], d = t[1];
    t = t[2];
    return s = i[0],
    o = i[1],
    r = i[2],
    i = e[1],
    c = e[2],
    p === e[0] && d === i && t === c ? mat4.identity(n) : (i = p - e[0],
    c = d - e[1],
    l = t - e[2],
    e = o * (l *= u = 1 / Math.sqrt(i * i + c * c + l * l)) - r * (c *= u),
    r = r * (i *= u) - s * l,
    s = s * c - o * i,
    (u = Math.sqrt(e * e + r * r + s * s)) ? (e *= u = 1 / u,
    r *= u,
    s *= u) : s = r = e = 0,
    o = c * s - l * r,
    a = l * e - i * s,
    h = i * r - c * e,
    (u = Math.sqrt(o * o + a * a + h * h)) ? (o *= u = 1 / u,
    a *= u,
    h *= u) : h = a = o = 0,
    n[0] = e,
    n[1] = o,
    n[2] = i,
    n[3] = 0,
    n[4] = r,
    n[5] = a,
    n[6] = c,
    n[7] = 0,
    n[8] = s,
    n[9] = h,
    n[10] = l,
    n[11] = 0,
    n[12] = -(e * p + r * d + s * t),
    n[13] = -(o * p + a * d + h * t),
    n[14] = -(i * p + c * d + l * t),
    n[15] = 1,
    n)
}
,
mat4.fromRotationTranslation = function(t, e, i) {
    i || (i = mat4.create());
    var n = t[0]
      , r = t[1]
      , s = t[2]
      , o = t[3]
      , a = n + n
      , h = r + r
      , c = s + s
      , l = (t = n * a,
    n * h);
    n *= c;
    var u = r * h;
    return r *= c,
    s *= c,
    a *= o,
    h *= o,
    o *= c,
    i[0] = 1 - (u + s),
    i[1] = l + o,
    i[2] = n - h,
    i[3] = 0,
    i[4] = l - o,
    i[5] = 1 - (t + s),
    i[6] = r + a,
    i[7] = 0,
    i[8] = n + h,
    i[9] = r - a,
    i[10] = 1 - (t + u),
    i[11] = 0,
    i[12] = e[0],
    i[13] = e[1],
    i[14] = e[2],
    i[15] = 1,
    i
}
,
mat4.str = function(t) {
    return "[" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ", " + t[4] + ", " + t[5] + ", " + t[6] + ", " + t[7] + ", " + t[8] + ", " + t[9] + ", " + t[10] + ", " + t[11] + ", " + t[12] + ", " + t[13] + ", " + t[14] + ", " + t[15] + "]"
}
,
quat4.create = function(t) {
    var e = new MatrixArray(4);
    return t && (e[0] = t[0],
    e[1] = t[1],
    e[2] = t[2],
    e[3] = t[3]),
    e
}
,
quat4.set = function(t, e) {
    return e[0] = t[0],
    e[1] = t[1],
    e[2] = t[2],
    e[3] = t[3],
    e
}
,
quat4.calculateW = function(t, e) {
    var i = t[0]
      , n = t[1]
      , r = t[2];
    return e && t !== e ? (e[0] = i,
    e[1] = n,
    e[2] = r,
    e[3] = -Math.sqrt(Math.abs(1 - i * i - n * n - r * r)),
    e) : (t[3] = -Math.sqrt(Math.abs(1 - i * i - n * n - r * r)),
    t)
}
,
quat4.inverse = function(t, e) {
    return e && t !== e ? (e[0] = -t[0],
    e[1] = -t[1],
    e[2] = -t[2],
    e[3] = t[3],
    e) : (t[0] *= -1,
    t[1] *= -1,
    t[2] *= -1,
    t)
}
,
quat4.length = function(t) {
    var e = t[0]
      , i = t[1]
      , n = t[2];
    t = t[3];
    return Math.sqrt(e * e + i * i + n * n + t * t)
}
,
quat4.normalize = function(t, e) {
    e || (e = t);
    var i = t[0]
      , n = t[1]
      , r = t[2]
      , s = t[3]
      , o = Math.sqrt(i * i + n * n + r * r + s * s);
    return 0 === o ? (e[0] = 0,
    e[1] = 0,
    e[2] = 0,
    e[3] = 0,
    e) : (o = 1 / o,
    e[0] = i * o,
    e[1] = n * o,
    e[2] = r * o,
    e[3] = s * o,
    e)
}
,
quat4.multiply = function(t, e, i) {
    i || (i = t);
    var n = t[0]
      , r = t[1]
      , s = t[2]
      , o = (t = t[3],
    e[0])
      , a = e[1]
      , h = e[2];
    e = e[3];
    return i[0] = n * e + t * o + r * h - s * a,
    i[1] = r * e + t * a + s * o - n * h,
    i[2] = s * e + t * h + n * a - r * o,
    i[3] = t * e - n * o - r * a - s * h,
    i
}
,
quat4.multiplyVec3 = function(t, e, i) {
    i || (i = e);
    var n = e[0]
      , r = e[1]
      , s = e[2]
      , o = (e = t[0],
    t[1])
      , a = t[2]
      , h = (t = t[3]) * n + o * s - a * r
      , c = t * r + a * n - e * s
      , l = t * s + e * r - o * n;
    n = -e * n - o * r - a * s;
    return i[0] = h * t + n * -e + c * -a - l * -o,
    i[1] = c * t + n * -o + l * -e - h * -a,
    i[2] = l * t + n * -a + h * -o - c * -e,
    i
}
,
quat4.toMat3 = function(t, e) {
    e || (e = mat3.create());
    var i = t[0]
      , n = t[1]
      , r = t[2]
      , s = t[3]
      , o = i + i
      , a = n + n
      , h = r + r
      , c = i * o
      , l = i * a;
    i *= h;
    var u = n * a;
    return n *= h,
    r *= h,
    o *= s,
    a *= s,
    s *= h,
    e[0] = 1 - (u + r),
    e[1] = l + s,
    e[2] = i - a,
    e[3] = l - s,
    e[4] = 1 - (c + r),
    e[5] = n + o,
    e[6] = i + a,
    e[7] = n - o,
    e[8] = 1 - (c + u),
    e
}
,
quat4.toMat4 = function(t, e) {
    e || (e = mat4.create());
    var i = t[0]
      , n = t[1]
      , r = t[2]
      , s = t[3]
      , o = i + i
      , a = n + n
      , h = r + r
      , c = i * o
      , l = i * a;
    i *= h;
    var u = n * a;
    return n *= h,
    r *= h,
    o *= s,
    a *= s,
    s *= h,
    e[0] = 1 - (u + r),
    e[1] = l + s,
    e[2] = i - a,
    e[3] = 0,
    e[4] = l - s,
    e[5] = 1 - (c + r),
    e[6] = n + o,
    e[7] = 0,
    e[8] = i + a,
    e[9] = n - o,
    e[10] = 1 - (c + u),
    e[11] = 0,
    e[12] = 0,
    e[13] = 0,
    e[14] = 0,
    e[15] = 1,
    e
}
,
quat4.slerp = function(t, e, i, n) {
    n || (n = t);
    var r, s, o = t[0] * e[0] + t[1] * e[1] + t[2] * e[2] + t[3] * e[3];
    return Math.abs(o) >= 1 ? (n !== t && (n[0] = t[0],
    n[1] = t[1],
    n[2] = t[2],
    n[3] = t[3]),
    n) : (r = Math.acos(o),
    s = Math.sqrt(1 - o * o),
    Math.abs(s) < .001 ? (n[0] = .5 * t[0] + .5 * e[0],
    n[1] = .5 * t[1] + .5 * e[1],
    n[2] = .5 * t[2] + .5 * e[2],
    n[3] = .5 * t[3] + .5 * e[3],
    n) : (o = Math.sin((1 - i) * r) / s,
    i = Math.sin(i * r) / s,
    n[0] = t[0] * o + e[0] * i,
    n[1] = t[1] * o + e[1] * i,
    n[2] = t[2] * o + e[2] * i,
    n[3] = t[3] * o + e[3] * i,
    n))
}
,
quat4.str = function(t) {
    return "[" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + "]"
}
,
function() {
    var t = mat4.create();
    function e(t, e, i) {
        this.isIE = /msie/i.test(navigator.userAgent) || /trident/i.test(navigator.userAgent),
        this.width = 0,
        this.height = 0,
        this.enableFrontToBack = !!i,
        this.isEarlyZPass = !1,
        this.isBatchInEarlyZPass = !1,
        this.currentZ = 0,
        this.zNear = 1,
        this.zFar = 1e3,
        this.zIncrement = (this.zFar - this.zNear) / 32768,
        this.zA = this.zFar / (this.zFar - this.zNear),
        this.zB = this.zFar * this.zNear / (this.zNear - this.zFar),
        this.kzA = 65536 * this.zA,
        this.kzB = 65536 * this.zB,
        this.cam = vec3.create([0, 0, 100]),
        this.look = vec3.create([0, 0, 0]),
        this.up = vec3.create([0, 1, 0]),
        this.worldScale = vec3.create([1, 1, 1]),
        this.enable_mipmaps = !0,
        this.matP = mat4.create(),
        this.matMV = mat4.create(),
        this.lastMV = mat4.create(),
        this.currentMV = mat4.create(),
        this.gl = t,
        this.version = 0 === this.gl.getParameter(this.gl.VERSION).indexOf("WebGL 2") ? 2 : 1,
        this.initState()
    }
    function i(t, e, i) {
        this.gl = t,
        this.shaderProgram = e,
        this.name = i,
        this.locAPos = t.getAttribLocation(e, "aPos"),
        this.locATex = t.getAttribLocation(e, "aTex"),
        this.locMatP = t.getUniformLocation(e, "matP"),
        this.locMatMV = t.getUniformLocation(e, "matMV"),
        this.locOpacity = t.getUniformLocation(e, "opacity"),
        this.locColorFill = t.getUniformLocation(e, "colorFill"),
        this.locSamplerFront = t.getUniformLocation(e, "samplerFront"),
        this.locSamplerBack = t.getUniformLocation(e, "samplerBack"),
        this.locDestStart = t.getUniformLocation(e, "destStart"),
        this.locDestEnd = t.getUniformLocation(e, "destEnd"),
        this.locSeconds = t.getUniformLocation(e, "seconds"),
        this.locPixelWidth = t.getUniformLocation(e, "pixelWidth"),
        this.locPixelHeight = t.getUniformLocation(e, "pixelHeight"),
        this.locLayerScale = t.getUniformLocation(e, "layerScale"),
        this.locLayerAngle = t.getUniformLocation(e, "layerAngle"),
        this.locViewOrigin = t.getUniformLocation(e, "viewOrigin"),
        this.locScrollPos = t.getUniformLocation(e, "scrollPos"),
        this.hasAnyOptionalUniforms = !!(this.locPixelWidth || this.locPixelHeight || this.locSeconds || this.locSamplerBack || this.locDestStart || this.locDestEnd || this.locLayerScale || this.locLayerAngle || this.locViewOrigin || this.locScrollPos),
        this.lpPixelWidth = -999,
        this.lpPixelHeight = -999,
        this.lpOpacity = 1,
        this.lpDestStartX = 0,
        this.lpDestStartY = 0,
        this.lpDestEndX = 1,
        this.lpDestEndY = 1,
        this.lpLayerScale = 1,
        this.lpLayerAngle = 0,
        this.lpViewOriginX = 0,
        this.lpViewOriginY = 0,
        this.lpScrollPosX = 0,
        this.lpScrollPosY = 0,
        this.lpSeconds = 0,
        this.lastCustomParams = [],
        this.lpMatMV = mat4.create(),
        this.locOpacity && t.uniform1f(this.locOpacity, 1),
        this.locColorFill && t.uniform4f(this.locColorFill, 1, 1, 1, 1),
        this.locSamplerFront && t.uniform1i(this.locSamplerFront, 0),
        this.locSamplerBack && t.uniform1i(this.locSamplerBack, 1),
        this.locDestStart && t.uniform2f(this.locDestStart, 0, 0),
        this.locDestEnd && t.uniform2f(this.locDestEnd, 1, 1),
        this.locLayerScale && t.uniform1f(this.locLayerScale, 1),
        this.locLayerAngle && t.uniform1f(this.locLayerAngle, 0),
        this.locViewOrigin && t.uniform2f(this.locViewOrigin, 0, 0),
        this.locScrollPos && t.uniform2f(this.locScrollPos, 0, 0),
        this.locSeconds && t.uniform1f(this.locSeconds, 0),
        this.hasCurrentMatMV = !1
    }
    function n(t, e) {
        return t[0] === e[0] && t[1] === e[1] && t[2] === e[2] && t[3] === e[3] && t[4] === e[4] && t[5] === e[5] && t[6] === e[6] && t[7] === e[7] && t[8] === e[8] && t[9] === e[9] && t[10] === e[10] && t[11] === e[11] && t[12] === e[12] && t[13] === e[13] && t[14] === e[14] && t[15] === e[15]
    }
    function r(t, e) {
        this.type = t,
        this.glwrap = e,
        this.gl = e.gl,
        this.opacityParam = 0,
        this.startIndex = 0,
        this.indexCount = 0,
        this.texParam = null,
        this.mat4param = null,
        this.shaderParams = [],
        cr.seal(this)
    }
    e.prototype.initState = function() {
        var t, e = this.gl;
        for (this.lastOpacity = 1,
        this.lastTexture0 = null,
        this.lastTexture1 = null,
        this.currentOpacity = 1,
        e.clearColor(0, 0, 0, 0),
        e.clear(e.COLOR_BUFFER_BIT),
        e.enable(e.BLEND),
        e.blendFunc(e.ONE, e.ONE_MINUS_SRC_ALPHA),
        e.disable(e.CULL_FACE),
        e.disable(e.STENCIL_TEST),
        e.disable(e.DITHER),
        this.enableFrontToBack ? (e.enable(e.DEPTH_TEST),
        e.depthFunc(e.LEQUAL)) : e.disable(e.DEPTH_TEST),
        this.maxTextureSize = e.getParameter(e.MAX_TEXTURE_SIZE),
        this.lastSrcBlend = e.ONE,
        this.lastDestBlend = e.ONE_MINUS_SRC_ALPHA,
        this.vertexData = new Float32Array(8e3 * (this.enableFrontToBack ? 3 : 2)),
        this.texcoordData = new Float32Array(16e3),
        this.pointData = new Float32Array(32e3),
        this.pointBuffer = e.createBuffer(),
        e.bindBuffer(e.ARRAY_BUFFER, this.pointBuffer),
        e.bufferData(e.ARRAY_BUFFER, this.pointData.byteLength, e.DYNAMIC_DRAW),
        this.vertexBuffers = new Array(4),
        this.texcoordBuffers = new Array(4),
        t = 0; t < 4; t++)
            this.vertexBuffers[t] = e.createBuffer(),
            e.bindBuffer(e.ARRAY_BUFFER, this.vertexBuffers[t]),
            e.bufferData(e.ARRAY_BUFFER, this.vertexData.byteLength, e.DYNAMIC_DRAW),
            this.texcoordBuffers[t] = e.createBuffer(),
            e.bindBuffer(e.ARRAY_BUFFER, this.texcoordBuffers[t]),
            e.bufferData(e.ARRAY_BUFFER, this.texcoordData.byteLength, e.DYNAMIC_DRAW);
        this.curBuffer = 0,
        this.indexBuffer = e.createBuffer(),
        e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
        var i = new Uint16Array(12e3);
        t = 0;
        for (var n, r, s = 0; t < 12e3; )
            i[t++] = s,
            i[t++] = s + 1,
            i[t++] = s + 2,
            i[t++] = s,
            i[t++] = s + 2,
            i[t++] = s + 3,
            s += 4;
        e.bufferData(e.ELEMENT_ARRAY_BUFFER, i, e.STATIC_DRAW),
        this.vertexPtr = 0,
        this.texPtr = 0,
        this.pointPtr = 0,
        this.shaderPrograms = [],
        n = ["varying mediump vec2 vTex;", "uniform lowp float opacity;", "uniform lowp sampler2D samplerFront;", "void main(void) {", "\tgl_FragColor = texture2D(samplerFront, vTex);", "\tgl_FragColor *= opacity;", "}"].join("\n"),
        r = this.enableFrontToBack ? ["attribute highp vec3 aPos;", "attribute mediump vec2 aTex;", "varying mediump vec2 vTex;", "uniform highp mat4 matP;", "uniform highp mat4 matMV;", "void main(void) {", "\tgl_Position = matP * matMV * vec4(aPos.x, aPos.y, aPos.z, 1.0);", "\tvTex = aTex;", "}"].join("\n") : ["attribute highp vec2 aPos;", "attribute mediump vec2 aTex;", "varying mediump vec2 vTex;", "uniform highp mat4 matP;", "uniform highp mat4 matMV;", "void main(void) {", "\tgl_Position = matP * matMV * vec4(aPos.x, aPos.y, 0.0, 1.0);", "\tvTex = aTex;", "}"].join("\n");
        var o = this.createShaderProgram({
            src: n
        }, r, "<default>");
        this.shaderPrograms.push(o),
        n = ["uniform mediump sampler2D samplerFront;", "varying lowp float opacity;", "void main(void) {", "\tgl_FragColor = texture2D(samplerFront, gl_PointCoord);", "\tgl_FragColor *= opacity;", "}"].join("\n");
        var a = ["attribute vec4 aPos;", "varying float opacity;", "uniform mat4 matP;", "uniform mat4 matMV;", "void main(void) {", "\tgl_Position = matP * matMV * vec4(aPos.x, aPos.y, 0.0, 1.0);", "\tgl_PointSize = aPos.z;", "\topacity = aPos.w;", "}"].join("\n");
        o = this.createShaderProgram({
            src: n
        }, a, "<point>"),
        this.shaderPrograms.push(o),
        n = ["varying mediump vec2 vTex;", "uniform lowp sampler2D samplerFront;", "void main(void) {", "\tif (texture2D(samplerFront, vTex).a < 1.0)", "\t\tdiscard;", "}"].join("\n");
        o = this.createShaderProgram({
            src: n
        }, r, "<earlyz>");
        this.shaderPrograms.push(o),
        n = ["uniform lowp vec4 colorFill;", "void main(void) {", "\tgl_FragColor = colorFill;", "}"].join("\n");
        o = this.createShaderProgram({
            src: n
        }, r, "<fill>");
        for (var h in this.shaderPrograms.push(o),
        cr.shaders)
            cr.shaders.hasOwnProperty(h) && this.shaderPrograms.push(this.createShaderProgram(cr.shaders[h], r, h));
        e.activeTexture(e.TEXTURE0),
        e.bindTexture(e.TEXTURE_2D, null),
        this.batch = [],
        this.batchPtr = 0,
        this.hasQuadBatchTop = !1,
        this.hasPointBatchTop = !1,
        this.lastProgram = -1,
        this.currentProgram = -1,
        this.currentShader = null,
        this.fbo = e.createFramebuffer(),
        this.renderToTex = null,
        this.depthBuffer = null,
        this.attachedDepthBuffer = !1,
        this.enableFrontToBack && (this.depthBuffer = e.createRenderbuffer()),
        this.tmpVec3 = vec3.create([0, 0, 0]);
        var c = e.getParameter(e.ALIASED_POINT_SIZE_RANGE);
        this.minPointSize = c[0],
        this.maxPointSize = c[1],
        this.maxPointSize > 2048 && (this.maxPointSize = 2048),
        this.switchProgram(0),
        cr.seal(this)
    }
    ,
    i.prototype.updateMatMV = function(t) {
        n(this.lpMatMV, t) || (mat4.set(t, this.lpMatMV),
        this.gl.uniformMatrix4fv(this.locMatMV, !1, t))
    }
    ,
    e.prototype.createShaderProgram = function(t, e, n) {
        var r = this.gl
          , s = r.createShader(r.FRAGMENT_SHADER);
        if (r.shaderSource(s, t.src),
        r.compileShader(s),
        !r.getShaderParameter(s, r.COMPILE_STATUS)) {
            var o = r.getShaderInfoLog(s);
            throw r.deleteShader(s),
            new Error("error compiling fragment shader: " + o)
        }
        var a = r.createShader(r.VERTEX_SHADER);
        if (r.shaderSource(a, e),
        r.compileShader(a),
        !r.getShaderParameter(a, r.COMPILE_STATUS)) {
            o = r.getShaderInfoLog(a);
            throw r.deleteShader(s),
            r.deleteShader(a),
            new Error("error compiling vertex shader: " + o)
        }
        var h = r.createProgram();
        if (r.attachShader(h, s),
        r.attachShader(h, a),
        r.linkProgram(h),
        !r.getProgramParameter(h, r.LINK_STATUS)) {
            o = r.getProgramInfoLog(h);
            throw r.deleteShader(s),
            r.deleteShader(a),
            r.deleteProgram(h),
            new Error("error linking shader program: " + o)
        }
        r.useProgram(h),
        r.deleteShader(s),
        r.deleteShader(a);
        var c, l, u = new i(r,h,n);
        for (u.extendBoxHorizontal = t.extendBoxHorizontal || 0,
        u.extendBoxVertical = t.extendBoxVertical || 0,
        u.crossSampling = !!t.crossSampling,
        u.preservesOpaqueness = !!t.preservesOpaqueness,
        u.animated = !!t.animated,
        u.parameters = t.parameters || [],
        c = 0,
        l = u.parameters.length; c < l; c++)
            u.parameters[c][1] = r.getUniformLocation(h, u.parameters[c][0]),
            u.lastCustomParams.push(0),
            r.uniform1f(u.parameters[c][1], 0);
        return cr.seal(u),
        u
    }
    ,
    e.prototype.getShaderIndex = function(t) {
        var e, i;
        for (e = 0,
        i = this.shaderPrograms.length; e < i; e++)
            if (this.shaderPrograms[e].name === t)
                return e;
        return -1
    }
    ,
    e.prototype.project = function(t, e, i) {
        var n = this.matMV
          , r = this.matP
          , s = [0, 0, 0, 0, 0, 0, 0, 0];
        s[0] = n[0] * t + n[4] * e + n[12],
        s[1] = n[1] * t + n[5] * e + n[13],
        s[2] = n[2] * t + n[6] * e + n[14],
        s[3] = n[3] * t + n[7] * e + n[15],
        s[4] = r[0] * s[0] + r[4] * s[1] + r[8] * s[2] + r[12] * s[3],
        s[5] = r[1] * s[0] + r[5] * s[1] + r[9] * s[2] + r[13] * s[3],
        s[6] = r[2] * s[0] + r[6] * s[1] + r[10] * s[2] + r[14] * s[3],
        s[7] = -s[2],
        0 !== s[7] && (s[7] = 1 / s[7],
        s[4] *= s[7],
        s[5] *= s[7],
        s[6] *= s[7],
        i[0] = (.5 * s[4] + .5) * this.width,
        i[1] = (.5 * s[5] + .5) * this.height)
    }
    ,
    e.prototype.setSize = function(t, e, i) {
        if (this.width !== t || this.height !== e || i) {
            this.endBatch();
            var n, r, s, o = this.gl;
            if (this.width = t,
            this.height = e,
            o.viewport(0, 0, t, e),
            mat4.lookAt(this.cam, this.look, this.up, this.matMV),
            this.enableFrontToBack)
                mat4.ortho(-t / 2, t / 2, e / 2, -e / 2, this.zNear, this.zFar, this.matP),
                this.worldScale[0] = 1,
                this.worldScale[1] = 1;
            else {
                mat4.perspective(45, t / e, this.zNear, this.zFar, this.matP);
                var a = [0, 0]
                  , h = [0, 0];
                this.project(0, 0, a),
                this.project(1, 1, h),
                this.worldScale[0] = 1 / (h[0] - a[0]),
                this.worldScale[1] = -1 / (h[1] - a[1])
            }
            for (n = 0,
            r = this.shaderPrograms.length; n < r; n++)
                (s = this.shaderPrograms[n]).hasCurrentMatMV = !1,
                s.locMatP && (o.useProgram(s.shaderProgram),
                o.uniformMatrix4fv(s.locMatP, !1, this.matP));
            o.useProgram(this.shaderPrograms[this.lastProgram].shaderProgram),
            o.bindTexture(o.TEXTURE_2D, null),
            o.activeTexture(o.TEXTURE1),
            o.bindTexture(o.TEXTURE_2D, null),
            o.activeTexture(o.TEXTURE0),
            this.lastTexture0 = null,
            this.lastTexture1 = null,
            this.depthBuffer && (o.bindFramebuffer(o.FRAMEBUFFER, this.fbo),
            o.bindRenderbuffer(o.RENDERBUFFER, this.depthBuffer),
            o.renderbufferStorage(o.RENDERBUFFER, o.DEPTH_COMPONENT16, this.width, this.height),
            this.attachedDepthBuffer || (o.framebufferRenderbuffer(o.FRAMEBUFFER, o.DEPTH_ATTACHMENT, o.RENDERBUFFER, this.depthBuffer),
            this.attachedDepthBuffer = !0),
            o.bindRenderbuffer(o.RENDERBUFFER, null),
            o.bindFramebuffer(o.FRAMEBUFFER, null),
            this.renderToTex = null)
        }
    }
    ,
    e.prototype.resetModelView = function() {
        mat4.lookAt(this.cam, this.look, this.up, this.matMV),
        mat4.scale(this.matMV, this.worldScale)
    }
    ,
    e.prototype.translate = function(t, e) {
        0 === t && 0 === e || (this.tmpVec3[0] = t,
        this.tmpVec3[1] = e,
        this.tmpVec3[2] = 0,
        mat4.translate(this.matMV, this.tmpVec3))
    }
    ,
    e.prototype.scale = function(t, e) {
        1 === t && 1 === e || (this.tmpVec3[0] = t,
        this.tmpVec3[1] = e,
        this.tmpVec3[2] = 1,
        mat4.scale(this.matMV, this.tmpVec3))
    }
    ,
    e.prototype.rotateZ = function(t) {
        0 !== t && mat4.rotateZ(this.matMV, t)
    }
    ,
    e.prototype.updateModelView = function() {
        if (!n(this.lastMV, this.matMV)) {
            var t = this.pushBatch();
            t.type = 5,
            t.mat4param ? mat4.set(this.matMV, t.mat4param) : t.mat4param = mat4.create(this.matMV),
            mat4.set(this.matMV, this.lastMV),
            this.hasQuadBatchTop = !1,
            this.hasPointBatchTop = !1
        }
    }
    ,
    e.prototype.setEarlyZIndex = function(t) {
        this.enableFrontToBack && (t > 32760 && (t = 32760),
        this.currentZ = this.cam[2] - this.zNear - t * this.zIncrement)
    }
    ,
    r.prototype.doSetEarlyZPass = function() {
        var t = this.gl
          , e = this.glwrap;
        0 !== this.startIndex ? (t.depthMask(!0),
        t.colorMask(!1, !1, !1, !1),
        t.disable(t.BLEND),
        t.bindFramebuffer(t.FRAMEBUFFER, e.fbo),
        t.framebufferTexture2D(t.FRAMEBUFFER, t.COLOR_ATTACHMENT0, t.TEXTURE_2D, null, 0),
        t.clear(t.DEPTH_BUFFER_BIT),
        t.bindFramebuffer(t.FRAMEBUFFER, null),
        e.isBatchInEarlyZPass = !0) : (t.depthMask(!1),
        t.colorMask(!0, !0, !0, !0),
        t.enable(t.BLEND),
        e.isBatchInEarlyZPass = !1)
    }
    ,
    r.prototype.doSetTexture = function() {
        this.gl.bindTexture(this.gl.TEXTURE_2D, this.texParam)
    }
    ,
    r.prototype.doSetTexture1 = function() {
        var t = this.gl;
        t.activeTexture(t.TEXTURE1),
        t.bindTexture(t.TEXTURE_2D, this.texParam),
        t.activeTexture(t.TEXTURE0)
    }
    ,
    r.prototype.doSetOpacity = function() {
        var t = this.opacityParam
          , e = this.glwrap;
        e.currentOpacity = t;
        var i = e.currentShader;
        i.locOpacity && i.lpOpacity !== t && (i.lpOpacity = t,
        this.gl.uniform1f(i.locOpacity, t))
    }
    ,
    r.prototype.doQuad = function() {
        this.gl.drawElements(this.gl.TRIANGLES, this.indexCount, this.gl.UNSIGNED_SHORT, this.startIndex)
    }
    ,
    r.prototype.doSetBlend = function() {
        this.gl.blendFunc(this.startIndex, this.indexCount)
    }
    ,
    r.prototype.doUpdateModelView = function() {
        var t, e, i, n = this.glwrap.shaderPrograms, r = this.glwrap.currentProgram;
        for (t = 0,
        e = n.length; t < e; t++)
            i = n[t],
            t === r && i.locMatMV ? (i.updateMatMV(this.mat4param),
            i.hasCurrentMatMV = !0) : i.hasCurrentMatMV = !1;
        mat4.set(this.mat4param, this.glwrap.currentMV)
    }
    ,
    r.prototype.doRenderToTexture = function() {
        var t = this.gl
          , e = this.glwrap;
        this.texParam ? (e.lastTexture1 === this.texParam && (t.activeTexture(t.TEXTURE1),
        t.bindTexture(t.TEXTURE_2D, null),
        e.lastTexture1 = null,
        t.activeTexture(t.TEXTURE0)),
        t.bindFramebuffer(t.FRAMEBUFFER, e.fbo),
        e.isBatchInEarlyZPass || t.framebufferTexture2D(t.FRAMEBUFFER, t.COLOR_ATTACHMENT0, t.TEXTURE_2D, this.texParam, 0)) : (e.enableFrontToBack || t.framebufferTexture2D(t.FRAMEBUFFER, t.COLOR_ATTACHMENT0, t.TEXTURE_2D, null, 0),
        t.bindFramebuffer(t.FRAMEBUFFER, null))
    }
    ,
    r.prototype.doClear = function() {
        var t = this.gl
          , e = this.startIndex;
        0 === e ? (t.clearColor(this.mat4param[0], this.mat4param[1], this.mat4param[2], this.mat4param[3]),
        t.clear(t.COLOR_BUFFER_BIT)) : 1 === e ? (t.enable(t.SCISSOR_TEST),
        t.scissor(this.mat4param[0], this.mat4param[1], this.mat4param[2], this.mat4param[3]),
        t.clearColor(0, 0, 0, 0),
        t.clear(t.COLOR_BUFFER_BIT),
        t.disable(t.SCISSOR_TEST)) : t.clear(t.DEPTH_BUFFER_BIT)
    }
    ,
    r.prototype.doSetDepthTestEnabled = function() {
        var t = this.gl;
        0 !== this.startIndex ? t.enable(t.DEPTH_TEST) : t.disable(t.DEPTH_TEST)
    }
    ,
    r.prototype.doPoints = function() {
        var t = this.gl
          , e = this.glwrap;
        e.enableFrontToBack && t.disable(t.DEPTH_TEST);
        var i = e.shaderPrograms[1];
        t.useProgram(i.shaderProgram),
        !i.hasCurrentMatMV && i.locMatMV && (i.updateMatMV(e.currentMV),
        i.hasCurrentMatMV = !0),
        t.enableVertexAttribArray(i.locAPos),
        t.bindBuffer(t.ARRAY_BUFFER, e.pointBuffer),
        t.vertexAttribPointer(i.locAPos, 4, t.FLOAT, !1, 0, 0),
        t.drawArrays(t.POINTS, this.startIndex / 4, this.indexCount),
        i = e.currentShader,
        t.useProgram(i.shaderProgram),
        i.locAPos >= 0 && (t.enableVertexAttribArray(i.locAPos),
        t.bindBuffer(t.ARRAY_BUFFER, e.vertexBuffers[e.curBuffer]),
        t.vertexAttribPointer(i.locAPos, e.enableFrontToBack ? 3 : 2, t.FLOAT, !1, 0, 0)),
        i.locATex >= 0 && (t.enableVertexAttribArray(i.locATex),
        t.bindBuffer(t.ARRAY_BUFFER, e.texcoordBuffers[e.curBuffer]),
        t.vertexAttribPointer(i.locATex, 2, t.FLOAT, !1, 0, 0)),
        e.enableFrontToBack && t.enable(t.DEPTH_TEST)
    }
    ,
    r.prototype.doSetProgram = function() {
        var t = this.gl
          , e = this.glwrap
          , i = e.shaderPrograms[this.startIndex];
        e.currentProgram = this.startIndex,
        e.currentShader = i,
        t.useProgram(i.shaderProgram),
        !i.hasCurrentMatMV && i.locMatMV && (i.updateMatMV(e.currentMV),
        i.hasCurrentMatMV = !0),
        i.locOpacity && i.lpOpacity !== e.currentOpacity && (i.lpOpacity = e.currentOpacity,
        t.uniform1f(i.locOpacity, e.currentOpacity)),
        i.locAPos >= 0 && (t.enableVertexAttribArray(i.locAPos),
        t.bindBuffer(t.ARRAY_BUFFER, e.vertexBuffers[e.curBuffer]),
        t.vertexAttribPointer(i.locAPos, e.enableFrontToBack ? 3 : 2, t.FLOAT, !1, 0, 0)),
        i.locATex >= 0 && (t.enableVertexAttribArray(i.locATex),
        t.bindBuffer(t.ARRAY_BUFFER, e.texcoordBuffers[e.curBuffer]),
        t.vertexAttribPointer(i.locATex, 2, t.FLOAT, !1, 0, 0))
    }
    ,
    r.prototype.doSetColor = function() {
        var t = this.glwrap.currentShader
          , e = this.mat4param;
        this.gl.uniform4f(t.locColorFill, e[0], e[1], e[2], e[3])
    }
    ,
    r.prototype.doSetProgramParameters = function() {
        var t, e, i = this.glwrap.currentShader, n = this.gl, r = this.mat4param;
        i.locSamplerBack && this.glwrap.lastTexture1 !== this.texParam && (n.activeTexture(n.TEXTURE1),
        n.bindTexture(n.TEXTURE_2D, this.texParam),
        this.glwrap.lastTexture1 = this.texParam,
        n.activeTexture(n.TEXTURE0));
        var s, o = r[0];
        if (i.locPixelWidth && o !== i.lpPixelWidth && (i.lpPixelWidth = o,
        n.uniform1f(i.locPixelWidth, o)),
        o = r[1],
        i.locPixelHeight && o !== i.lpPixelHeight && (i.lpPixelHeight = o,
        n.uniform1f(i.locPixelHeight, o)),
        o = r[2],
        s = r[3],
        !i.locDestStart || o === i.lpDestStartX && s === i.lpDestStartY || (i.lpDestStartX = o,
        i.lpDestStartY = s,
        n.uniform2f(i.locDestStart, o, s)),
        o = r[4],
        s = r[5],
        !i.locDestEnd || o === i.lpDestEndX && s === i.lpDestEndY || (i.lpDestEndX = o,
        i.lpDestEndY = s,
        n.uniform2f(i.locDestEnd, o, s)),
        o = r[6],
        i.locLayerScale && o !== i.lpLayerScale && (i.lpLayerScale = o,
        n.uniform1f(i.locLayerScale, o)),
        o = r[7],
        i.locLayerAngle && o !== i.lpLayerAngle && (i.lpLayerAngle = o,
        n.uniform1f(i.locLayerAngle, o)),
        o = r[8],
        s = r[9],
        !i.locViewOrigin || o === i.lpViewOriginX && s === i.lpViewOriginY || (i.lpViewOriginX = o,
        i.lpViewOriginY = s,
        n.uniform2f(i.locViewOrigin, o, s)),
        o = r[10],
        s = r[11],
        !i.locScrollPos || o === i.lpScrollPosX && s === i.lpScrollPosY || (i.lpScrollPosX = o,
        i.lpScrollPosY = s,
        n.uniform2f(i.locScrollPos, o, s)),
        o = r[12],
        i.locSeconds && o !== i.lpSeconds && (i.lpSeconds = o,
        n.uniform1f(i.locSeconds, o)),
        i.parameters.length)
            for (t = 0,
            e = i.parameters.length; t < e; t++)
                (o = this.shaderParams[t]) !== i.lastCustomParams[t] && (i.lastCustomParams[t] = o,
                n.uniform1f(i.parameters[t][1], o))
    }
    ,
    e.prototype.pushBatch = function() {
        return this.batchPtr === this.batch.length && this.batch.push(new r(0,this)),
        this.batch[this.batchPtr++]
    }
    ,
    e.prototype.endBatch = function() {
        if (0 !== this.batchPtr && !this.gl.isContextLost()) {
            var t, e, i, n = this.gl;
            if (this.pointPtr > 0 && (n.bindBuffer(n.ARRAY_BUFFER, this.pointBuffer),
            n.bufferSubData(n.ARRAY_BUFFER, 0, this.pointData.subarray(0, this.pointPtr)),
            r && r.locAPos >= 0 && "<point>" === r.name && n.vertexAttribPointer(r.locAPos, 4, n.FLOAT, !1, 0, 0)),
            this.vertexPtr > 0) {
                var r = this.currentShader;
                n.bindBuffer(n.ARRAY_BUFFER, this.vertexBuffers[this.curBuffer]),
                n.bufferSubData(n.ARRAY_BUFFER, 0, this.vertexData.subarray(0, this.vertexPtr)),
                r && r.locAPos >= 0 && "<point>" !== r.name && n.vertexAttribPointer(r.locAPos, this.enableFrontToBack ? 3 : 2, n.FLOAT, !1, 0, 0),
                n.bindBuffer(n.ARRAY_BUFFER, this.texcoordBuffers[this.curBuffer]),
                n.bufferSubData(n.ARRAY_BUFFER, 0, this.texcoordData.subarray(0, this.texPtr)),
                r && r.locATex >= 0 && "<point>" !== r.name && n.vertexAttribPointer(r.locATex, 2, n.FLOAT, !1, 0, 0)
            }
            for (t = 0,
            e = this.batchPtr; t < e; t++)
                switch ((i = this.batch[t]).type) {
                case 1:
                    i.doQuad();
                    break;
                case 2:
                    i.doSetTexture();
                    break;
                case 3:
                    i.doSetOpacity();
                    break;
                case 4:
                    i.doSetBlend();
                    break;
                case 5:
                    i.doUpdateModelView();
                    break;
                case 6:
                    i.doRenderToTexture();
                    break;
                case 7:
                    i.doClear();
                    break;
                case 8:
                    i.doPoints();
                    break;
                case 9:
                    i.doSetProgram();
                    break;
                case 10:
                    i.doSetProgramParameters();
                    break;
                case 11:
                    i.doSetTexture1();
                    break;
                case 12:
                    i.doSetColor();
                    break;
                case 13:
                    i.doSetDepthTestEnabled();
                    break;
                case 14:
                    i.doSetEarlyZPass()
                }
            this.batchPtr = 0,
            this.vertexPtr = 0,
            this.texPtr = 0,
            this.pointPtr = 0,
            this.hasQuadBatchTop = !1,
            this.hasPointBatchTop = !1,
            this.isBatchInEarlyZPass = !1,
            this.curBuffer++,
            this.curBuffer >= 4 && (this.curBuffer = 0)
        }
    }
    ,
    e.prototype.setOpacity = function(t) {
        if (t !== this.lastOpacity && !this.isEarlyZPass) {
            var e = this.pushBatch();
            e.type = 3,
            e.opacityParam = t,
            this.lastOpacity = t,
            this.hasQuadBatchTop = !1,
            this.hasPointBatchTop = !1
        }
    }
    ,
    e.prototype.setTexture = function(t) {
        if (t !== this.lastTexture0) {
            var e = this.pushBatch();
            e.type = 2,
            e.texParam = t,
            this.lastTexture0 = t,
            this.hasQuadBatchTop = !1,
            this.hasPointBatchTop = !1
        }
    }
    ,
    e.prototype.setBlend = function(t, e) {
        if ((t !== this.lastSrcBlend || e !== this.lastDestBlend) && !this.isEarlyZPass) {
            var i = this.pushBatch();
            i.type = 4,
            i.startIndex = t,
            i.indexCount = e,
            this.lastSrcBlend = t,
            this.lastDestBlend = e,
            this.hasQuadBatchTop = !1,
            this.hasPointBatchTop = !1
        }
    }
    ,
    e.prototype.isPremultipliedAlphaBlend = function() {
        return this.lastSrcBlend === this.gl.ONE && this.lastDestBlend === this.gl.ONE_MINUS_SRC_ALPHA
    }
    ,
    e.prototype.setAlphaBlend = function() {
        this.setBlend(this.gl.ONE, this.gl.ONE_MINUS_SRC_ALPHA)
    }
    ,
    e.prototype.setNoPremultiplyAlphaBlend = function() {
        this.setBlend(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA)
    }
    ;
    e.prototype.quad = function(t, e, i, n, r, s, o, a) {
        this.vertexPtr >= 15992 && this.endBatch();
        var h = this.vertexPtr
          , c = this.texPtr
          , l = this.vertexData
          , u = this.texcoordData
          , p = this.currentZ;
        if (this.hasQuadBatchTop)
            this.batch[this.batchPtr - 1].indexCount += 6;
        else {
            var d = this.pushBatch();
            d.type = 1,
            d.startIndex = this.enableFrontToBack ? h : h / 2 * 3,
            d.indexCount = 6,
            this.hasQuadBatchTop = !0,
            this.hasPointBatchTop = !1
        }
        this.enableFrontToBack ? (l[h++] = t,
        l[h++] = e,
        l[h++] = p,
        l[h++] = i,
        l[h++] = n,
        l[h++] = p,
        l[h++] = r,
        l[h++] = s,
        l[h++] = p,
        l[h++] = o,
        l[h++] = a,
        l[h++] = p) : (l[h++] = t,
        l[h++] = e,
        l[h++] = i,
        l[h++] = n,
        l[h++] = r,
        l[h++] = s,
        l[h++] = o,
        l[h++] = a),
        u[c++] = 0,
        u[c++] = 0,
        u[c++] = 1,
        u[c++] = 0,
        u[c++] = 1,
        u[c++] = 1,
        u[c++] = 0,
        u[c++] = 1,
        this.vertexPtr = h,
        this.texPtr = c
    }
    ,
    e.prototype.quadTex = function(t, e, i, n, r, s, o, a, h) {
        this.vertexPtr >= 15992 && this.endBatch();
        var c = this.vertexPtr
          , l = this.texPtr
          , u = this.vertexData
          , p = this.texcoordData
          , d = this.currentZ;
        if (this.hasQuadBatchTop)
            this.batch[this.batchPtr - 1].indexCount += 6;
        else {
            var f = this.pushBatch();
            f.type = 1,
            f.startIndex = this.enableFrontToBack ? c : c / 2 * 3,
            f.indexCount = 6,
            this.hasQuadBatchTop = !0,
            this.hasPointBatchTop = !1
        }
        var g = h.left
          , y = h.top
          , m = h.right
          , _ = h.bottom;
        this.enableFrontToBack ? (u[c++] = t,
        u[c++] = e,
        u[c++] = d,
        u[c++] = i,
        u[c++] = n,
        u[c++] = d,
        u[c++] = r,
        u[c++] = s,
        u[c++] = d,
        u[c++] = o,
        u[c++] = a,
        u[c++] = d) : (u[c++] = t,
        u[c++] = e,
        u[c++] = i,
        u[c++] = n,
        u[c++] = r,
        u[c++] = s,
        u[c++] = o,
        u[c++] = a),
        p[l++] = g,
        p[l++] = y,
        p[l++] = m,
        p[l++] = y,
        p[l++] = m,
        p[l++] = _,
        p[l++] = g,
        p[l++] = _,
        this.vertexPtr = c,
        this.texPtr = l
    }
    ,
    e.prototype.quadTexUV = function(t, e, i, n, r, s, o, a, h, c, l, u, p, d, f, g) {
        this.vertexPtr >= 15992 && this.endBatch();
        var y = this.vertexPtr
          , m = this.texPtr
          , _ = this.vertexData
          , v = this.texcoordData
          , b = this.currentZ;
        if (this.hasQuadBatchTop)
            this.batch[this.batchPtr - 1].indexCount += 6;
        else {
            var w = this.pushBatch();
            w.type = 1,
            w.startIndex = this.enableFrontToBack ? y : y / 2 * 3,
            w.indexCount = 6,
            this.hasQuadBatchTop = !0,
            this.hasPointBatchTop = !1
        }
        this.enableFrontToBack ? (_[y++] = t,
        _[y++] = e,
        _[y++] = b,
        _[y++] = i,
        _[y++] = n,
        _[y++] = b,
        _[y++] = r,
        _[y++] = s,
        _[y++] = b,
        _[y++] = o,
        _[y++] = a,
        _[y++] = b) : (_[y++] = t,
        _[y++] = e,
        _[y++] = i,
        _[y++] = n,
        _[y++] = r,
        _[y++] = s,
        _[y++] = o,
        _[y++] = a),
        v[m++] = h,
        v[m++] = c,
        v[m++] = l,
        v[m++] = u,
        v[m++] = p,
        v[m++] = d,
        v[m++] = f,
        v[m++] = g,
        this.vertexPtr = y,
        this.texPtr = m
    }
    ,
    e.prototype.convexPoly = function(t) {
        var e, i, n, r, s, o, a, h, c = t.length / 2 - 2, l = c - 1, u = t[0], p = t[1];
        for (e = 0; e < c; e += 2)
            n = t[(i = 2 * e) + 2],
            r = t[i + 3],
            s = t[i + 4],
            o = t[i + 5],
            e === l ? this.quad(u, p, n, r, s, o, s, o) : (a = t[i + 6],
            h = t[i + 7],
            this.quad(u, p, n, r, s, o, a, h))
    }
    ;
    e.prototype.point = function(t, e, i, n) {
        this.pointPtr >= 7996 && this.endBatch();
        var r = this.pointPtr
          , s = this.pointData;
        if (this.hasPointBatchTop)
            this.batch[this.batchPtr - 1].indexCount++;
        else {
            var o = this.pushBatch();
            o.type = 8,
            o.startIndex = r,
            o.indexCount = 1,
            this.hasPointBatchTop = !0,
            this.hasQuadBatchTop = !1
        }
        s[r++] = t,
        s[r++] = e,
        s[r++] = i,
        s[r++] = n,
        this.pointPtr = r
    }
    ,
    e.prototype.switchProgram = function(t) {
        if (this.lastProgram !== t) {
            var e = this.shaderPrograms[t];
            if (!e) {
                if (0 === this.lastProgram)
                    return;
                t = 0,
                e = this.shaderPrograms[0]
            }
            var i = this.pushBatch();
            i.type = 9,
            i.startIndex = t,
            this.lastProgram = t,
            this.hasQuadBatchTop = !1,
            this.hasPointBatchTop = !1
        }
    }
    ,
    e.prototype.programUsesDest = function(t) {
        var e = this.shaderPrograms[t];
        return !(!e.locDestStart && !e.locDestEnd)
    }
    ,
    e.prototype.programUsesCrossSampling = function(t) {
        var e = this.shaderPrograms[t];
        return !!(e.locDestStart || e.locDestEnd || e.crossSampling)
    }
    ,
    e.prototype.programPreservesOpaqueness = function(t) {
        return this.shaderPrograms[t].preservesOpaqueness
    }
    ,
    e.prototype.programExtendsBox = function(t) {
        var e = this.shaderPrograms[t];
        return 0 !== e.extendBoxHorizontal || 0 !== e.extendBoxVertical
    }
    ,
    e.prototype.getProgramBoxExtendHorizontal = function(t) {
        return this.shaderPrograms[t].extendBoxHorizontal
    }
    ,
    e.prototype.getProgramBoxExtendVertical = function(t) {
        return this.shaderPrograms[t].extendBoxVertical
    }
    ,
    e.prototype.getProgramParameterType = function(t, e) {
        return this.shaderPrograms[t].parameters[e][2]
    }
    ,
    e.prototype.programIsAnimated = function(t) {
        return this.shaderPrograms[t].animated
    }
    ,
    e.prototype.setProgramParameters = function(t, e, i, n, r, s, o, a, h, c, l, u, p, d, f) {
        var g, y, m, _, v, b = this.shaderPrograms[this.lastProgram];
        if (b.hasAnyOptionalUniforms || f.length) {
            if ((m = this.pushBatch()).type = 10,
            m.mat4param ? mat4.set(this.matMV, m.mat4param) : m.mat4param = mat4.create(),
            (_ = m.mat4param)[0] = e,
            _[1] = i,
            _[2] = n,
            _[3] = r,
            _[4] = s,
            _[5] = o,
            _[6] = a,
            _[7] = h,
            _[8] = c,
            _[9] = l,
            _[10] = u,
            _[11] = p,
            _[12] = d,
            b.locSamplerBack ? m.texParam = t : m.texParam = null,
            f.length)
                for ((v = m.shaderParams).length = f.length,
                g = 0,
                y = f.length; g < y; g++)
                    v[g] = f[g];
            this.hasQuadBatchTop = !1,
            this.hasPointBatchTop = !1
        }
    }
    ,
    e.prototype.clear = function(t, e, i, n) {
        var r = this.pushBatch();
        r.type = 7,
        r.startIndex = 0,
        r.mat4param || (r.mat4param = mat4.create()),
        r.mat4param[0] = t,
        r.mat4param[1] = e,
        r.mat4param[2] = i,
        r.mat4param[3] = n,
        this.hasQuadBatchTop = !1,
        this.hasPointBatchTop = !1
    }
    ,
    e.prototype.clearRect = function(t, e, i, n) {
        if (!(i < 0 || n < 0)) {
            var r = this.pushBatch();
            r.type = 7,
            r.startIndex = 1,
            r.mat4param || (r.mat4param = mat4.create()),
            r.mat4param[0] = t,
            r.mat4param[1] = e,
            r.mat4param[2] = i,
            r.mat4param[3] = n,
            this.hasQuadBatchTop = !1,
            this.hasPointBatchTop = !1
        }
    }
    ,
    e.prototype.clearDepth = function() {
        var t = this.pushBatch();
        t.type = 7,
        t.startIndex = 2,
        this.hasQuadBatchTop = !1,
        this.hasPointBatchTop = !1
    }
    ,
    e.prototype.setEarlyZPass = function(t) {
        if (this.enableFrontToBack && (t = !!t,
        this.isEarlyZPass !== t)) {
            var e = this.pushBatch();
            e.type = 14,
            e.startIndex = t ? 1 : 0,
            this.hasQuadBatchTop = !1,
            this.hasPointBatchTop = !1,
            this.isEarlyZPass = t,
            this.renderToTex = null,
            this.isEarlyZPass ? this.switchProgram(2) : this.switchProgram(0)
        }
    }
    ,
    e.prototype.setDepthTestEnabled = function(t) {
        if (this.enableFrontToBack) {
            var e = this.pushBatch();
            e.type = 13,
            e.startIndex = t ? 1 : 0,
            this.hasQuadBatchTop = !1,
            this.hasPointBatchTop = !1
        }
    }
    ,
    e.prototype.fullscreenQuad = function() {
        mat4.set(this.lastMV, t),
        this.resetModelView(),
        this.updateModelView();
        var e = this.width / 2
          , i = this.height / 2;
        this.quad(-e, i, e, i, e, -i, -e, -i),
        mat4.set(t, this.matMV),
        this.updateModelView()
    }
    ,
    e.prototype.setColorFillMode = function(t, e, i, n) {
        this.switchProgram(3);
        var r = this.pushBatch();
        r.type = 12,
        r.mat4param || (r.mat4param = mat4.create()),
        r.mat4param[0] = t,
        r.mat4param[1] = e,
        r.mat4param[2] = i,
        r.mat4param[3] = n,
        this.hasQuadBatchTop = !1,
        this.hasPointBatchTop = !1
    }
    ,
    e.prototype.setTextureFillMode = function() {
        this.switchProgram(0)
    }
    ,
    e.prototype.restoreEarlyZMode = function() {
        this.switchProgram(2)
    }
    ,
    e.prototype.present = function() {
        this.endBatch(),
        this.gl.flush()
    }
    ;
    var s = []
      , o = {};
    e.prototype.contextLost = function() {
        cr.clearArray(s),
        o = {}
    }
    ;
    e.prototype.loadTexture = function(t, e, i, n, r, a) {
        e = !!e,
        i = !!i;
        var h = t.src + "," + e + "," + i + (e ? "," + r : "")
          , c = null;
        if (void 0 !== t.src && o.hasOwnProperty(h))
            return (c = o[h]).c2refcount++,
            c;
        this.endBatch();
        var l = this.gl
          , u = cr.isPOT(t.width) && cr.isPOT(t.height);
        c = l.createTexture(),
        l.bindTexture(l.TEXTURE_2D, c),
        l.pixelStorei(l.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !0);
        var p = l.RGBA
          , d = l.RGBA
          , f = l.UNSIGNED_BYTE;
        if (n && !this.isIE)
            switch (n) {
            case 1:
                p = l.RGB,
                d = l.RGB;
                break;
            case 2:
                f = l.UNSIGNED_SHORT_4_4_4_4;
                break;
            case 3:
                f = l.UNSIGNED_SHORT_5_5_5_1;
                break;
            case 4:
                p = l.RGB,
                d = l.RGB,
                f = l.UNSIGNED_SHORT_5_6_5
            }
        if (1 === this.version && !u && e) {
            var g = document.createElement("canvas");
            g.width = cr.nextHighestPowerOfTwo(t.width),
            g.height = cr.nextHighestPowerOfTwo(t.height);
            var y = g.getContext("2d");
            void 0 !== y.imageSmoothingEnabled ? y.imageSmoothingEnabled = i : (y.webkitImageSmoothingEnabled = i,
            y.mozImageSmoothingEnabled = i,
            y.msImageSmoothingEnabled = i),
            y.drawImage(t, 0, 0, t.width, t.height, 0, 0, g.width, g.height),
            l.texImage2D(l.TEXTURE_2D, 0, p, d, f, g)
        } else
            l.texImage2D(l.TEXTURE_2D, 0, p, d, f, t);
        return e ? "repeat-x" === r ? (l.texParameteri(l.TEXTURE_2D, l.TEXTURE_WRAP_S, l.REPEAT),
        l.texParameteri(l.TEXTURE_2D, l.TEXTURE_WRAP_T, l.CLAMP_TO_EDGE)) : "repeat-y" === r ? (l.texParameteri(l.TEXTURE_2D, l.TEXTURE_WRAP_S, l.CLAMP_TO_EDGE),
        l.texParameteri(l.TEXTURE_2D, l.TEXTURE_WRAP_T, l.REPEAT)) : (l.texParameteri(l.TEXTURE_2D, l.TEXTURE_WRAP_S, l.REPEAT),
        l.texParameteri(l.TEXTURE_2D, l.TEXTURE_WRAP_T, l.REPEAT)) : (l.texParameteri(l.TEXTURE_2D, l.TEXTURE_WRAP_S, l.CLAMP_TO_EDGE),
        l.texParameteri(l.TEXTURE_2D, l.TEXTURE_WRAP_T, l.CLAMP_TO_EDGE)),
        i ? (l.texParameteri(l.TEXTURE_2D, l.TEXTURE_MAG_FILTER, l.LINEAR),
        (u || this.version >= 2) && this.enable_mipmaps && !a ? (l.texParameteri(l.TEXTURE_2D, l.TEXTURE_MIN_FILTER, l.LINEAR_MIPMAP_LINEAR),
        l.generateMipmap(l.TEXTURE_2D)) : l.texParameteri(l.TEXTURE_2D, l.TEXTURE_MIN_FILTER, l.LINEAR)) : (l.texParameteri(l.TEXTURE_2D, l.TEXTURE_MAG_FILTER, l.NEAREST),
        l.texParameteri(l.TEXTURE_2D, l.TEXTURE_MIN_FILTER, l.NEAREST)),
        l.bindTexture(l.TEXTURE_2D, null),
        this.lastTexture0 = null,
        c.c2width = t.width,
        c.c2height = t.height,
        c.c2refcount = 1,
        c.c2texkey = h,
        s.push(c),
        o[h] = c,
        c
    }
    ,
    e.prototype.createEmptyTexture = function(t, e, i, n, r) {
        this.endBatch();
        var o = this.gl;
        this.isIE && (n = !1);
        var a = o.createTexture();
        return o.bindTexture(o.TEXTURE_2D, a),
        o.texImage2D(o.TEXTURE_2D, 0, o.RGBA, t, e, 0, o.RGBA, n ? o.UNSIGNED_SHORT_4_4_4_4 : o.UNSIGNED_BYTE, null),
        r ? (o.texParameteri(o.TEXTURE_2D, o.TEXTURE_WRAP_S, o.REPEAT),
        o.texParameteri(o.TEXTURE_2D, o.TEXTURE_WRAP_T, o.REPEAT)) : (o.texParameteri(o.TEXTURE_2D, o.TEXTURE_WRAP_S, o.CLAMP_TO_EDGE),
        o.texParameteri(o.TEXTURE_2D, o.TEXTURE_WRAP_T, o.CLAMP_TO_EDGE)),
        o.texParameteri(o.TEXTURE_2D, o.TEXTURE_MAG_FILTER, i ? o.LINEAR : o.NEAREST),
        o.texParameteri(o.TEXTURE_2D, o.TEXTURE_MIN_FILTER, i ? o.LINEAR : o.NEAREST),
        o.bindTexture(o.TEXTURE_2D, null),
        this.lastTexture0 = null,
        a.c2width = t,
        a.c2height = e,
        s.push(a),
        a
    }
    ,
    e.prototype.videoToTexture = function(t, e, i) {
        this.endBatch();
        var n = this.gl;
        this.isIE && (i = !1),
        n.bindTexture(n.TEXTURE_2D, e),
        n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !0);
        try {
            n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, i ? n.UNSIGNED_SHORT_4_4_4_4 : n.UNSIGNED_BYTE, t)
        } catch (t) {
            console && console.error && console.error("Error updating WebGL texture: ", t)
        }
        n.bindTexture(n.TEXTURE_2D, null),
        this.lastTexture0 = null
    }
    ,
    e.prototype.deleteTexture = function(t) {
        t && (void 0 !== t.c2refcount && t.c2refcount > 1 ? t.c2refcount-- : (this.endBatch(),
        t === this.lastTexture0 && (this.gl.bindTexture(this.gl.TEXTURE_2D, null),
        this.lastTexture0 = null),
        t === this.lastTexture1 && (this.gl.activeTexture(this.gl.TEXTURE1),
        this.gl.bindTexture(this.gl.TEXTURE_2D, null),
        this.gl.activeTexture(this.gl.TEXTURE0),
        this.lastTexture1 = null),
        cr.arrayFindRemove(s, t),
        void 0 !== t.c2texkey && delete o[t.c2texkey],
        this.gl.deleteTexture(t)))
    }
    ,
    e.prototype.estimateVRAM = function() {
        var t, e, i, n = this.width * this.height * 4 * 2;
        for (t = 0,
        e = s.length; t < e; t++)
            n += (i = s[t]).c2width * i.c2height * 4;
        return n
    }
    ,
    e.prototype.textureCount = function() {
        return s.length
    }
    ,
    e.prototype.setRenderingToTexture = function(t) {
        if (t !== this.renderToTex) {
            var e = this.pushBatch();
            e.type = 6,
            e.texParam = t,
            this.renderToTex = t,
            this.hasQuadBatchTop = !1,
            this.hasPointBatchTop = !1
        }
    }
    ,
    cr.GLWrap = e
}(),
function() {
    var t = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame;
    function e(t) {
        if (t && (t.getContext || t.dc) && !t.c2runtime) {
            t.c2runtime = this;
            var e = this;
            this.isCrosswalk = /crosswalk/i.test(navigator.userAgent) || /xwalk/i.test(navigator.userAgent) || !(void 0 === window.c2isCrosswalk || !window.c2isCrosswalk),
            this.isCordova = this.isCrosswalk || void 0 !== window.device && (void 0 !== window.device.cordova || void 0 !== window.device.phonegap) || void 0 !== window.c2iscordova && window.c2iscordova,
            this.isPhoneGap = this.isCordova,
            this.isDirectCanvas = !!t.dc,
            this.isAppMobi = void 0 !== window.AppMobi || this.isDirectCanvas,
            this.isCocoonJs = !!window.c2cocoonjs,
            this.isEjecta = !!window.c2ejecta,
            this.isCocoonJs && (CocoonJS.App.onSuspended.addEventListener((function() {
                e.setSuspended(!0)
            }
            )),
            CocoonJS.App.onActivated.addEventListener((function() {
                e.setSuspended(!1)
            }
            ))),
            this.isEjecta && (document.addEventListener("pagehide", (function() {
                e.setSuspended(!0)
            }
            )),
            document.addEventListener("pageshow", (function() {
                e.setSuspended(!1)
            }
            )),
            document.addEventListener("resize", (function() {
                e.setSize(window.innerWidth, window.innerHeight)
            }
            ))),
            this.isDomFree = this.isDirectCanvas || this.isCocoonJs || this.isEjecta,
            this.isMicrosoftEdge = /edge\//i.test(navigator.userAgent),
            this.isIE = (/msie/i.test(navigator.userAgent) || /trident/i.test(navigator.userAgent) || /iemobile/i.test(navigator.userAgent)) && !this.isMicrosoftEdge,
            this.isTizen = /tizen/i.test(navigator.userAgent),
            this.isAndroid = /android/i.test(navigator.userAgent) && !this.isTizen && !this.isIE && !this.isMicrosoftEdge,
            this.isiPhone = (/iphone/i.test(navigator.userAgent) || /ipod/i.test(navigator.userAgent)) && !this.isIE && !this.isMicrosoftEdge,
            this.isiPad = /ipad/i.test(navigator.userAgent),
            this.isiOS = this.isiPhone || this.isiPad || this.isEjecta,
            this.isiPhoneiOS6 = this.isiPhone && /os\s6/i.test(navigator.userAgent),
            this.isChrome = (/chrome/i.test(navigator.userAgent) || /chromium/i.test(navigator.userAgent)) && !this.isIE && !this.isMicrosoftEdge,
            this.isAmazonWebApp = /amazonwebappplatform/i.test(navigator.userAgent),
            this.isFirefox = /firefox/i.test(navigator.userAgent),
            this.isSafari = /safari/i.test(navigator.userAgent) && !this.isChrome && !this.isIE && !this.isMicrosoftEdge,
            this.isWindows = /windows/i.test(navigator.userAgent),
            this.isNWjs = void 0 !== window.c2nodewebkit || void 0 !== window.c2nwjs || /nodewebkit/i.test(navigator.userAgent) || /nwjs/i.test(navigator.userAgent),
            this.isNodeWebkit = this.isNWjs,
            this.isArcade = void 0 !== window.is_scirra_arcade,
            this.isWindows8App = !(void 0 === window.c2isWindows8 || !window.c2isWindows8),
            this.isWindows8Capable = !(void 0 === window.c2isWindows8Capable || !window.c2isWindows8Capable),
            this.isWindowsPhone8 = !(void 0 === window.c2isWindowsPhone8 || !window.c2isWindowsPhone8),
            this.isWindowsPhone81 = !(void 0 === window.c2isWindowsPhone81 || !window.c2isWindowsPhone81),
            this.isWindows10 = !!window.cr_windows10,
            this.isWinJS = this.isWindows8App || this.isWindows8Capable || this.isWindowsPhone81 || this.isWindows10,
            this.isBlackberry10 = !(void 0 === window.c2isBlackberry10 || !window.c2isBlackberry10),
            this.isAndroidStockBrowser = this.isAndroid && !this.isChrome && !this.isCrosswalk && !this.isFirefox && !this.isAmazonWebApp && !this.isDomFree,
            this.devicePixelRatio = 1,
            this.isMobile = this.isCordova || this.isCrosswalk || this.isAppMobi || this.isCocoonJs || this.isAndroid || this.isiOS || this.isWindowsPhone8 || this.isWindowsPhone81 || this.isBlackberry10 || this.isTizen || this.isEjecta,
            this.isMobile || (this.isMobile = /(blackberry|bb10|playbook|palm|symbian|nokia|windows\s+ce|phone|mobile|tablet|kindle|silk)/i.test(navigator.userAgent)),
            this.isWKWebView = !!(this.isiOS && this.isCordova && window.webkit),
            "undefined" == typeof cr_is_preview || this.isNWjs || "?nw" !== window.location.search && !/nodewebkit/i.test(navigator.userAgent) && !/nwjs/i.test(navigator.userAgent) || (this.isNWjs = !0),
            this.isDebug = "undefined" != typeof cr_is_preview && window.location.search.indexOf("debug") > -1,
            this.canvas = t,
            this.canvasdiv = document.getElementById("c2canvasdiv"),
            this.gl = null,
            this.glwrap = null,
            this.glUnmaskedRenderer = "(unavailable)",
            this.enableFrontToBack = !1,
            this.earlyz_index = 0,
            this.ctx = null,
            this.firstInFullscreen = !1,
            this.oldWidth = 0,
            this.oldHeight = 0,
            this.canvas.oncontextmenu = function(t) {
                return t.preventDefault && t.preventDefault(),
                !1
            }
            ,
            this.canvas.onselectstart = function(t) {
                return t.preventDefault && t.preventDefault(),
                !1
            }
            ,
            this.canvas.ontouchstart = function(t) {
                return t.preventDefault && t.preventDefault(),
                !1
            }
            ,
            this.isDirectCanvas && (window.c2runtime = this),
            this.isNWjs && (window.ondragover = function(t) {
                return t.preventDefault(),
                !1
            }
            ,
            window.ondrop = function(t) {
                return t.preventDefault(),
                !1
            }
            ,
            window.nwgui && window.nwgui.App.clearCache && window.nwgui.App.clearCache()),
            this.isAndroidStockBrowser && "undefined" != typeof jQuery && jQuery("canvas").parents("*").css("overflow", "visible"),
            this.width = t.width,
            this.height = t.height,
            this.draw_width = this.width,
            this.draw_height = this.height,
            this.cssWidth = this.width,
            this.cssHeight = this.height,
            this.lastWindowWidth = window.innerWidth,
            this.lastWindowHeight = window.innerHeight,
            this.forceCanvasAlpha = !1,
            this.redraw = !0,
            this.isSuspended = !1,
            Date.now || (Date.now = function() {
                return +new Date
            }
            ),
            this.plugins = [],
            this.types = {},
            this.types_by_index = [],
            this.behaviors = [],
            this.layouts = {},
            this.layouts_by_index = [],
            this.eventsheets = {},
            this.eventsheets_by_index = [],
            this.wait_for_textures = [],
            this.triggers_to_postinit = [],
            this.all_global_vars = [],
            this.all_local_vars = [],
            this.solidBehavior = null,
            this.jumpthruBehavior = null,
            this.shadowcasterBehavior = null,
            this.deathRow = {},
            this.hasPendingInstances = !1,
            this.isInClearDeathRow = !1,
            this.isInOnDestroy = 0,
            this.isRunningEvents = !1,
            this.isEndingLayout = !1,
            this.createRow = [],
            this.isLoadingState = !1,
            this.saveToSlot = "",
            this.loadFromSlot = "",
            this.loadFromJson = null,
            this.lastSaveJson = "",
            this.signalledContinuousPreview = !1,
            this.suspendDrawing = !1,
            this.fireOnCreateAfterLoad = [],
            this.dt = 0,
            this.dt1 = 0,
            this.minimumFramerate = 30,
            this.logictime = 0,
            this.cpuutilisation = 0,
            this.timescale = 1,
            this.kahanTime = new cr.KahanAdder,
            this.wallTime = new cr.KahanAdder,
            this.last_tick_time = 0,
            this.fps = 0,
            this.last_fps_time = 0,
            this.tickcount = 0,
            this.tickcount_nosave = 0,
            this.execcount = 0,
            this.framecount = 0,
            this.objectcount = 0,
            this.changelayout = null,
            this.destroycallbacks = [],
            this.event_stack = [],
            this.event_stack_index = -1,
            this.localvar_stack = [[]],
            this.localvar_stack_index = 0,
            this.trigger_depth = 0,
            this.pushEventStack(null),
            this.loop_stack = [],
            this.loop_stack_index = -1,
            this.next_uid = 0,
            this.next_puid = 0,
            this.layout_first_tick = !0,
            this.family_count = 0,
            this.suspend_events = [],
            this.raf_id = -1,
            this.timeout_id = -1,
            this.isloading = !0,
            this.loadingprogress = 0,
            this.isNodeFullscreen = !1,
            this.stackLocalCount = 0,
            this.audioInstance = null,
            this.had_a_click = !1,
            this.isInUserInputEvent = !1,
            this.objects_to_pretick = new cr.ObjectSet,
            this.objects_to_tick = new cr.ObjectSet,
            this.objects_to_tick2 = new cr.ObjectSet,
            this.registered_collisions = [],
            this.temp_poly = new cr.CollisionPoly([]),
            this.temp_poly2 = new cr.CollisionPoly([]),
            this.allGroups = [],
            this.groups_by_name = {},
            this.cndsBySid = {},
            this.actsBySid = {},
            this.varsBySid = {},
            this.blocksBySid = {},
            this.running_layout = null,
            this.layer_canvas = null,
            this.layer_ctx = null,
            this.layer_tex = null,
            this.layout_tex = null,
            this.layout_canvas = null,
            this.layout_ctx = null,
            this.is_WebGL_context_lost = !1,
            this.uses_background_blending = !1,
            this.fx_tex = [null, null],
            this.fullscreen_scaling = 0,
            this.files_subfolder = "",
            this.objectsByUid = {},
            this.loaderlogos = null,
            this.snapshotCanvas = null,
            this.snapshotData = "",
            this.objectRefTable = [],
            this.requestProjectData()
        }
    }
    e.prototype.requestProjectData = function() {
        var t = this;
        if (this.isWKWebView)
            this.fetchLocalFileViaCordovaAsText("/app/data.js", (function(e) {
                t.loadProject(JSON.parse(e))
            }
            ), (function(t) {
                alert("Error fetching data.js")
            }
            ));
        else {
            var e;
            e = this.isWindowsPhone8 ? new ActiveXObject("Microsoft.XMLHTTP") : new XMLHttpRequest;
            var i = "/app/data.js";
            (this.isWindows8App || this.isWindowsPhone8 || this.isWindowsPhone81 || this.isWindows10) && (i = "data.json"),
            e.open("GET", i, !0);
            var n = !1;
            if (!this.isDomFree && "response"in e && "responseType"in e)
                try {
                    e.responseType = "json",
                    n = "json" === e.responseType
                } catch (t) {
                    n = !1
                }
            if (!n && "responseType"in e)
                try {
                    e.responseType = "text"
                } catch (t) {}
            if ("overrideMimeType"in e)
                try {
                    e.overrideMimeType("application/json; charset=utf-8")
                } catch (t) {}
            this.isWindowsPhone8 ? e.onreadystatechange = function() {
                4 === e.readyState && t.loadProject(JSON.parse(e.responseText))
            }
            : (e.onload = function() {
                if (n)
                    t.loadProject(e.response);
                else if (t.isEjecta) {
                    var i = e.responseText;
                    i = i.substr(i.indexOf("{")),
                    t.loadProject(JSON.parse(i))
                } else
                    t.loadProject(JSON.parse(e.responseText))
            }
            ,
            e.onerror = function(t) {
                cr.logerror("Error requesting " + i + ":"),
                cr.logerror(t)
            }
            ),
            e.send()
        }
    }
    ,
    e.prototype.initRendererAndLoader = function() {
        var t, e, i, n, r, s, o, a, h, c, l, u = this;
        this.isRetina = (!this.isDomFree || this.isEjecta || this.isCordova) && this.useHighDpi && !this.isAndroidStockBrowser,
        0 === this.fullscreen_mode && this.isiOS && (this.isRetina = !1),
        this.devicePixelRatio = this.isRetina && (window.devicePixelRatio || window.webkitDevicePixelRatio || window.mozDevicePixelRatio || window.msDevicePixelRatio) || 1,
        "object" == typeof window.StatusBar && window.StatusBar.hide(),
        this.ClearDeathRow(),
        this.fullscreen_mode > 0 && this.setSize(window.innerWidth, window.innerHeight, !0),
        this.canvas.addEventListener("webglcontextlost", (function(t) {
            t.preventDefault(),
            u.onContextLost(),
            cr.logexport("[Construct 2] WebGL context lost"),
            window.cr_setSuspended(!0)
        }
        ), !1),
        this.canvas.addEventListener("webglcontextrestored", (function(t) {
            u.glwrap.initState(),
            u.glwrap.setSize(u.glwrap.width, u.glwrap.height, !0),
            u.layer_tex = null,
            u.layout_tex = null,
            u.fx_tex[0] = null,
            u.fx_tex[1] = null,
            u.onContextRestored(),
            u.redraw = !0,
            cr.logexport("[Construct 2] WebGL context restored"),
            window.cr_setSuspended(!1)
        }
        ), !1);
        try {
            this.enableWebGL && (this.isCocoonJs || this.isEjecta || !this.isDomFree) && (l = {
                alpha: !0,
                depth: !1,
                antialias: !1,
                powerPreference: "high-performance",
                failIfMajorPerformanceCaveat: !0
            },
            this.isAndroid || (this.gl = this.canvas.getContext("webgl2", l)),
            this.gl || (this.gl = this.canvas.getContext("webgl", l) || this.canvas.getContext("experimental-webgl", l)))
        } catch (t) {}
        if (this.gl) {
            this.gl.getParameter(this.gl.VERSION).indexOf("WebGL 2");
            var p = this.gl.getExtension("WEBGL_debug_renderer_info");
            if (p) {
                var d = this.gl.getParameter(p.UNMASKED_VENDOR_WEBGL)
                  , f = this.gl.getParameter(p.UNMASKED_RENDERER_WEBGL);
                this.glUnmaskedRenderer = f + " [" + d + "]"
            }
            for (this.enableFrontToBack && (this.glUnmaskedRenderer += " [front-to-back enabled]"),
            this.isDomFree || (this.overlay_canvas = document.createElement("canvas"),
            jQuery(this.overlay_canvas).appendTo(this.canvas.parentNode),
            this.overlay_canvas.oncontextmenu = function(t) {
                return !1
            }
            ,
            this.overlay_canvas.onselectstart = function(t) {
                return !1
            }
            ,
            this.overlay_canvas.width = Math.round(this.cssWidth * this.devicePixelRatio),
            this.overlay_canvas.height = Math.round(this.cssHeight * this.devicePixelRatio),
            jQuery(this.overlay_canvas).css({
                width: this.cssWidth + "px",
                height: this.cssHeight + "px"
            }),
            this.positionOverlayCanvas(),
            this.overlay_ctx = this.overlay_canvas.getContext("2d")),
            this.glwrap = new cr.GLWrap(this.gl,this.isMobile,this.enableFrontToBack),
            this.glwrap.setSize(this.canvas.width, this.canvas.height),
            this.glwrap.enable_mipmaps = 0 !== this.downscalingQuality,
            this.ctx = null,
            t = 0,
            e = this.types_by_index.length; t < e; t++)
                for (i = 0,
                n = (o = this.types_by_index[t]).effect_types.length; i < n; i++)
                    (a = o.effect_types[i]).shaderindex = this.glwrap.getShaderIndex(a.id),
                    a.preservesOpaqueness = this.glwrap.programPreservesOpaqueness(a.shaderindex),
                    this.uses_background_blending = this.uses_background_blending || this.glwrap.programUsesDest(a.shaderindex);
            for (t = 0,
            e = this.layouts_by_index.length; t < e; t++) {
                for (i = 0,
                n = (h = this.layouts_by_index[t]).effect_types.length; i < n; i++)
                    (a = h.effect_types[i]).shaderindex = this.glwrap.getShaderIndex(a.id),
                    a.preservesOpaqueness = this.glwrap.programPreservesOpaqueness(a.shaderindex);
                for (h.updateActiveEffects(),
                i = 0,
                n = h.layers.length; i < n; i++) {
                    for (r = 0,
                    s = (c = h.layers[i]).effect_types.length; r < s; r++)
                        (a = c.effect_types[r]).shaderindex = this.glwrap.getShaderIndex(a.id),
                        a.preservesOpaqueness = this.glwrap.programPreservesOpaqueness(a.shaderindex),
                        this.uses_background_blending = this.uses_background_blending || this.glwrap.programUsesDest(a.shaderindex);
                    c.updateActiveEffects()
                }
            }
        } else {
            if (this.fullscreen_mode > 0 && this.isDirectCanvas) {
                this.canvas = null,
                document.oncontextmenu = function(t) {
                    return !1
                }
                ,
                document.onselectstart = function(t) {
                    return !1
                }
                ,
                this.ctx = AppMobi.canvas.getContext("2d");
                try {
                    this.ctx.samplingMode = this.linearSampling ? "smooth" : "sharp",
                    this.ctx.globalScale = 1,
                    this.ctx.HTML5CompatibilityMode = !0,
                    this.ctx.imageSmoothingEnabled = this.linearSampling
                } catch (t) {}
                0 !== this.width && 0 !== this.height && (this.ctx.width = this.width,
                this.ctx.height = this.height)
            }
            this.ctx || (this.isCocoonJs ? (l = {
                antialias: !!this.linearSampling,
                alpha: !0
            },
            this.ctx = this.canvas.getContext("2d", l)) : (l = {
                alpha: !0
            },
            this.ctx = this.canvas.getContext("2d", l)),
            this.setCtxImageSmoothingEnabled(this.ctx, this.linearSampling)),
            this.overlay_canvas = null,
            this.overlay_ctx = null
        }
        if (this.tickFunc = function(t) {
            u.tick(!1, t)
        }
        ,
        window == window.top || this.isDomFree || this.isWinJS || this.isWindowsPhone8 || (document.addEventListener("mousedown", (function() {
            window.focus()
        }
        ), !0),
        document.addEventListener("touchstart", (function() {
            window.focus()
        }
        ), !0)),
        "undefined" != typeof cr_is_preview && (this.isCocoonJs && console.log("[Construct 2] In preview-over-wifi via CocoonJS mode"),
        window.location.search.indexOf("continuous") > -1 && (cr.logexport("Reloading for continuous preview"),
        this.loadFromSlot = "__c2_continuouspreview",
        this.suspendDrawing = !0),
        this.pauseOnBlur && !this.isMobile && (jQuery(window).focus((function() {
            u.setSuspended(!1)
        }
        )),
        jQuery(window).blur((function() {
            var t = window.parent;
            t && t.document.hasFocus() || u.setSuspended(!0)
        }
        )))),
        window.addEventListener("blur", (function() {
            u.onWindowBlur()
        }
        )),
        !this.isDomFree) {
            var g = function(t) {
                if (cr.isCanvasInputEvent(t) && document.activeElement && document.activeElement !== document.getElementsByTagName("body")[0] && document.activeElement.blur)
                    try {
                        document.activeElement.blur()
                    } catch (t) {}
            };
            "undefined" != typeof PointerEvent ? document.addEventListener("pointerdown", g) : window.navigator.msPointerEnabled ? document.addEventListener("MSPointerDown", g) : document.addEventListener("touchstart", g),
            document.addEventListener("mousedown", g)
        }
        0 === this.fullscreen_mode && this.isRetina && this.devicePixelRatio > 1 && this.setSize(this.original_width, this.original_height, !0),
        this.tryLockOrientation(),
        this.getready(),
        this.go(),
        this.extra = {},
        cr.seal(this)
    }
    ;
    e.prototype.setSize = function(t, e, i) {
        var n = 0
          , r = 0
          , s = 0
          , o = 0
          , a = 0;
        if (this.lastWindowWidth !== t || this.lastWindowHeight !== e || i) {
            this.lastWindowWidth = t,
            this.lastWindowHeight = e;
            var h, c, l = this.fullscreen_mode, u = (document.mozFullScreen || document.webkitIsFullScreen || !!document.msFullscreenElement || document.fullScreen || this.isNodeFullscreen) && !this.isCordova;
            if (u || 0 !== this.fullscreen_mode || i) {
                u && (l = this.fullscreen_scaling);
                var p = this.devicePixelRatio;
                l >= 4 ? (5 === l && 1 !== p && (t += 1,
                e += 1),
                (c = t / e) > (h = this.original_width / this.original_height) ? (s = e * h,
                5 === l ? ((a = s * p / this.original_width) > 1 ? a = Math.floor(a) : a < 1 && (a = 1 / Math.ceil(1 / a)),
                n = (t - (s = this.original_width * a / p)) / 2,
                r = (e - (o = this.original_height * a / p)) / 2,
                t = s,
                e = o) : (n = (t - s) / 2,
                t = s)) : (o = t / h,
                5 === l ? ((a = o * p / this.original_height) > 1 ? a = Math.floor(a) : a < 1 && (a = 1 / Math.ceil(1 / a)),
                n = (t - (s = this.original_width * a / p)) / 2,
                r = (e - (o = this.original_height * a / p)) / 2,
                t = s,
                e = o) : (r = (e - o) / 2,
                e = o))) : u && 0 === l && (n = Math.floor((t - this.original_width) / 2),
                r = Math.floor((e - this.original_height) / 2),
                t = this.original_width,
                e = this.original_height),
                l < 2 && (this.aspect_scale = p),
                this.cssWidth = Math.round(t),
                this.cssHeight = Math.round(e),
                this.width = Math.round(t * p),
                this.height = Math.round(e * p),
                this.redraw = !0,
                this.wantFullscreenScalingQuality ? (this.draw_width = this.width,
                this.draw_height = this.height,
                this.fullscreenScalingQuality = !0) : this.width < this.original_width && this.height < this.original_height || 1 === l ? (this.draw_width = this.width,
                this.draw_height = this.height,
                this.fullscreenScalingQuality = !0) : (this.draw_width = this.original_width,
                this.draw_height = this.original_height,
                this.fullscreenScalingQuality = !1,
                2 === l ? (h = this.original_width / this.original_height,
                (c = this.lastWindowWidth / this.lastWindowHeight) < h ? this.draw_width = this.draw_height * c : c > h && (this.draw_height = this.draw_width / c)) : 3 === l && (h = this.original_width / this.original_height,
                (c = this.lastWindowWidth / this.lastWindowHeight) > h ? this.draw_width = this.draw_height * c : c < h && (this.draw_height = this.draw_width / c))),
                this.canvasdiv && !this.isDomFree && (jQuery(this.canvasdiv).css({
                    width: Math.round(t) + "px",
                    height: Math.round(e) + "px",
                    "margin-left": Math.floor(n) + "px",
                    "margin-top": Math.floor(r) + "px"
                }),
                "undefined" != typeof cr_is_preview && jQuery("#borderwrap").css({
                    width: Math.round(t) + "px",
                    height: Math.round(e) + "px"
                })),
                this.canvas && (this.canvas.width = Math.round(t * p),
                this.canvas.height = Math.round(e * p),
                this.isEjecta ? (this.canvas.style.left = Math.floor(n) + "px",
                this.canvas.style.top = Math.floor(r) + "px",
                this.canvas.style.width = Math.round(t) + "px",
                this.canvas.style.height = Math.round(e) + "px") : this.isRetina && !this.isDomFree && (this.canvas.style.width = Math.round(t) + "px",
                this.canvas.style.height = Math.round(e) + "px")),
                this.overlay_canvas && (this.overlay_canvas.width = Math.round(t * p),
                this.overlay_canvas.height = Math.round(e * p),
                this.overlay_canvas.style.width = this.cssWidth + "px",
                this.overlay_canvas.style.height = this.cssHeight + "px"),
                this.glwrap && this.glwrap.setSize(Math.round(t * p), Math.round(e * p)),
                this.isDirectCanvas && this.ctx && (this.ctx.width = Math.round(t),
                this.ctx.height = Math.round(e)),
                this.ctx && this.setCtxImageSmoothingEnabled(this.ctx, this.linearSampling),
                this.tryLockOrientation(),
                this.isiPhone && !this.isCordova && window.scrollTo(0, 0)
            }
        }
    }
    ,
    e.prototype.tryLockOrientation = function() {
        if (this.autoLockOrientation && 0 !== this.orientations) {
            var t = "portrait";
            2 === this.orientations && (t = "landscape");
            try {
                screen.orientation && screen.orientation.lock ? screen.orientation.lock(t).catch((function() {}
                )) : screen.lockOrientation ? screen.lockOrientation(t) : screen.webkitLockOrientation ? screen.webkitLockOrientation(t) : screen.mozLockOrientation ? screen.mozLockOrientation(t) : screen.msLockOrientation && screen.msLockOrientation(t)
            } catch (t) {
                console && console.warn && console.warn("Failed to lock orientation: ", t)
            }
        }
    }
    ,
    e.prototype.onContextLost = function() {
        var t, e, i;
        for (this.glwrap.contextLost(),
        this.is_WebGL_context_lost = !0,
        t = 0,
        e = this.types_by_index.length; t < e; t++)
            (i = this.types_by_index[t]).onLostWebGLContext && i.onLostWebGLContext()
    }
    ,
    e.prototype.onContextRestored = function() {
        var t, e, i;
        for (this.is_WebGL_context_lost = !1,
        t = 0,
        e = this.types_by_index.length; t < e; t++)
            (i = this.types_by_index[t]).onRestoreWebGLContext && i.onRestoreWebGLContext()
    }
    ,
    e.prototype.positionOverlayCanvas = function() {
        if (!this.isDomFree) {
            var t = (document.mozFullScreen || document.webkitIsFullScreen || document.fullScreen || !!document.msFullscreenElement || this.isNodeFullscreen) && !this.isCordova ? jQuery(this.canvas).offset() : jQuery(this.canvas).position();
            t.position = "absolute",
            jQuery(this.overlay_canvas).css(t)
        }
    }
    ;
    var i = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.msCancelAnimationFrame || window.oCancelAnimationFrame;
    e.prototype.setSuspended = function(t) {
        var e, n;
        if (t && !this.isSuspended)
            for (cr.logexport("[Construct 2] Suspending"),
            this.isSuspended = !0,
            -1 !== this.raf_id && i && i(this.raf_id),
            -1 !== this.timeout_id && clearTimeout(this.timeout_id),
            e = 0,
            n = this.suspend_events.length; e < n; e++)
                this.suspend_events[e](!0);
        else if (!t && this.isSuspended) {
            for (cr.logexport("[Construct 2] Resuming"),
            this.isSuspended = !1,
            this.last_tick_time = cr.performance_now(),
            this.last_fps_time = cr.performance_now(),
            this.framecount = 0,
            this.logictime = 0,
            e = 0,
            n = this.suspend_events.length; e < n; e++)
                this.suspend_events[e](!1);
            this.tick(!1)
        }
    }
    ,
    e.prototype.addSuspendCallback = function(t) {
        this.suspend_events.push(t)
    }
    ,
    e.prototype.GetObjectReference = function(t) {
        return this.objectRefTable[t]
    }
    ,
    e.prototype.loadProject = function(t) {
        t && t.project || cr.logerror("Project model unavailable");
        var e, i, n, r, s, o, a, h, c, l, u, p, d, f = t.project;
        if (this.name = f[0],
        this.first_layout = f[1],
        this.fullscreen_mode = f[12],
        this.fullscreen_mode_set = f[12],
        this.original_width = f[10],
        this.original_height = f[11],
        this.parallax_x_origin = this.original_width / 2,
        this.parallax_y_origin = this.original_height / 2,
        this.isDomFree && !this.isEjecta && (f[12] >= 4 || 0 === f[12]) && (cr.logexport("[Construct 2] Letterbox scale fullscreen modes are not supported on this platform - falling back to 'Scale outer'"),
        this.fullscreen_mode = 3,
        this.fullscreen_mode_set = 3),
        this.uses_loader_layout = f[18],
        this.loaderstyle = f[19],
        0 === this.loaderstyle) {
            var g = new Image;
            g.crossOrigin = "anonymous",
            this.setImageSrc(g, "loading-logo.png"),
            this.loaderlogos = {
                logo: g
            }
        } else if (4 === this.loaderstyle) {
            var y = new Image;
            y.src = "";
            var m = new Image;
            m.src = "";
            var _ = new Image;
            _.src = "";
            var v = new Image;
            v.src = "";
            var b = new Image;
            b.src = "";
            var w = new Image;
            w.src = "";
            var x = new Image;
            x.src = "";
            var T = new Image;
            T.src = "";
            var S = new Image;
            S.src = "";
            var C = new Image;
            C.src = "";
            var A = new Image;
            A.src = "";
            var k = new Image;
            k.src = "",
            this.loaderlogos = {
                logo: [y, m, _, v],
                powered: [b, w, x, T],
                website: [S, C, A, k]
            }
        }
        for (this.next_uid = f[21],
        this.objectRefTable = cr.getObjectRefTable(),
        this.system = new cr.system_object(this),
        e = 0,
        i = f[2].length; e < i; e++)
            a = f[2][e],
            u = this.GetObjectReference(a[0]),
            cr.add_common_aces(a, u.prototype),
            (p = new u(this)).singleglobal = a[1],
            p.is_world = a[2],
            p.is_rotatable = a[5],
            p.must_predraw = a[9],
            p.onCreate && p.onCreate(),
            cr.seal(p),
            this.plugins.push(p);
        for (this.objectRefTable = cr.getObjectRefTable(),
        e = 0,
        i = f[3].length; e < i; e++) {
            for (a = f[3][e],
            d = this.GetObjectReference(a[1]),
            p = null,
            n = 0,
            r = this.plugins.length; n < r; n++)
                if (this.plugins[n]instanceof d) {
                    p = this.plugins[n];
                    break
                }
            var E = new p.Type(p);
            for (E.name = a[0],
            E.is_family = a[2],
            E.instvar_sids = a[3].slice(0),
            E.vars_count = a[3].length,
            E.behs_count = a[4],
            E.fx_count = a[5],
            E.sid = a[11],
            E.is_family ? (E.members = [],
            E.family_index = this.family_count++,
            E.families = null) : (E.members = null,
            E.family_index = -1,
            E.families = []),
            E.family_var_map = null,
            E.family_beh_map = null,
            E.family_fx_map = null,
            E.is_contained = !1,
            E.container = null,
            a[6] ? (E.texture_file = a[6][0],
            E.texture_filesize = a[6][1],
            E.texture_pixelformat = a[6][2]) : (E.texture_file = null,
            E.texture_filesize = 0,
            E.texture_pixelformat = 0),
            a[7] ? E.animations = a[7] : E.animations = null,
            E.index = e,
            E.instances = [],
            E.deadCache = [],
            E.solstack = [new cr.selection(E)],
            E.cur_sol = 0,
            E.default_instance = null,
            E.default_layerindex = 0,
            E.stale_iids = !0,
            E.updateIIDs = cr.type_updateIIDs,
            E.getFirstPicked = cr.type_getFirstPicked,
            E.getPairedInstance = cr.type_getPairedInstance,
            E.getCurrentSol = cr.type_getCurrentSol,
            E.pushCleanSol = cr.type_pushCleanSol,
            E.pushCopySol = cr.type_pushCopySol,
            E.popSol = cr.type_popSol,
            E.getBehaviorByName = cr.type_getBehaviorByName,
            E.getBehaviorIndexByName = cr.type_getBehaviorIndexByName,
            E.getEffectIndexByName = cr.type_getEffectIndexByName,
            E.applySolToContainer = cr.type_applySolToContainer,
            E.getInstanceByIID = cr.type_getInstanceByIID,
            E.collision_grid = new cr.SparseGrid(this.original_width,this.original_height),
            E.any_cell_changed = !0,
            E.any_instance_parallaxed = !1,
            E.extra = {},
            E.toString = cr.type_toString,
            E.behaviors = [],
            n = 0,
            r = a[8].length; n < r; n++) {
                h = a[8][n];
                var O = this.GetObjectReference(h[1])
                  , P = null;
                for (s = 0,
                o = this.behaviors.length; s < o; s++)
                    if (this.behaviors[s]instanceof O) {
                        P = this.behaviors[s];
                        break
                    }
                P || ((P = new O(this)).my_types = [],
                P.my_instances = new cr.ObjectSet,
                P.onCreate && P.onCreate(),
                cr.seal(P),
                this.behaviors.push(P),
                cr.behaviors.solid && P instanceof cr.behaviors.solid && (this.solidBehavior = P),
                cr.behaviors.jumpthru && P instanceof cr.behaviors.jumpthru && (this.jumpthruBehavior = P),
                cr.behaviors.shadowcaster && P instanceof cr.behaviors.shadowcaster && (this.shadowcasterBehavior = P)),
                -1 === P.my_types.indexOf(E) && P.my_types.push(E);
                var R = new P.Type(P,E);
                R.name = h[0],
                R.sid = h[2],
                R.onCreate(),
                cr.seal(R),
                E.behaviors.push(R)
            }
            for (E.global = a[9],
            E.isOnLoaderLayout = a[10],
            E.effect_types = [],
            n = 0,
            r = a[12].length; n < r; n++)
                E.effect_types.push({
                    id: a[12][n][0],
                    name: a[12][n][1],
                    shaderindex: -1,
                    preservesOpaqueness: !1,
                    active: !0,
                    index: n
                });
            if (E.tile_poly_data = a[13],
            this.uses_loader_layout && !E.is_family && !E.isOnLoaderLayout && p.is_world || (E.onCreate(),
            cr.seal(E)),
            E.name && (this.types[E.name] = E),
            this.types_by_index.push(E),
            p.singleglobal) {
                var N = new p.Instance(E);
                N.uid = this.next_uid++,
                N.puid = this.next_puid++,
                N.iid = 0,
                N.get_iid = cr.inst_get_iid,
                N.toString = cr.inst_toString,
                N.properties = a[14],
                N.onCreate(),
                cr.seal(N),
                E.instances.push(N),
                this.objectsByUid[N.uid.toString()] = N
            }
        }
        for (e = 0,
        i = f[4].length; e < i; e++) {
            var I, L = f[4][e], B = this.types_by_index[L[0]];
            for (n = 1,
            r = L.length; n < r; n++)
                (I = this.types_by_index[L[n]]).families.push(B),
                B.members.push(I)
        }
        for (e = 0,
        i = f[28].length; e < i; e++) {
            var D = f[28][e]
              , F = [];
            for (n = 0,
            r = D.length; n < r; n++)
                F.push(this.types_by_index[D[n]]);
            for (n = 0,
            r = F.length; n < r; n++)
                F[n].is_contained = !0,
                F[n].container = F
        }
        if (this.family_count > 0)
            for (e = 0,
            i = this.types_by_index.length; e < i; e++)
                if (!(c = this.types_by_index[e]).is_family && c.families.length) {
                    c.family_var_map = new Array(this.family_count),
                    c.family_beh_map = new Array(this.family_count),
                    c.family_fx_map = new Array(this.family_count);
                    var M = []
                      , j = 0
                      , W = 0
                      , U = 0;
                    for (n = 0,
                    r = c.families.length; n < r; n++)
                        for (l = c.families[n],
                        c.family_var_map[l.family_index] = j,
                        j += l.vars_count,
                        c.family_beh_map[l.family_index] = W,
                        W += l.behs_count,
                        c.family_fx_map[l.family_index] = U,
                        U += l.fx_count,
                        s = 0,
                        o = l.effect_types.length; s < o; s++)
                            M.push(cr.shallowCopy({}, l.effect_types[s]));
                    for (c.effect_types = M.concat(c.effect_types),
                    n = 0,
                    r = c.effect_types.length; n < r; n++)
                        c.effect_types[n].index = n
                }
        for (e = 0,
        i = f[5].length; e < i; e++) {
            a = f[5][e];
            var q = new cr.layout(this,a);
            cr.seal(q),
            this.layouts[q.name] = q,
            this.layouts_by_index.push(q)
        }
        for (e = 0,
        i = f[6].length; e < i; e++) {
            a = f[6][e];
            var V = new cr.eventsheet(this,a);
            cr.seal(V),
            this.eventsheets[V.name] = V,
            this.eventsheets_by_index.push(V)
        }
        for (e = 0,
        i = this.eventsheets_by_index.length; e < i; e++)
            this.eventsheets_by_index[e].postInit();
        for (e = 0,
        i = this.eventsheets_by_index.length; e < i; e++)
            this.eventsheets_by_index[e].updateDeepIncludes();
        for (e = 0,
        i = this.triggers_to_postinit.length; e < i; e++)
            this.triggers_to_postinit[e].postInit();
        cr.clearArray(this.triggers_to_postinit),
        this.audio_to_preload = f[7],
        this.files_subfolder = f[8],
        this.pixel_rounding = f[9],
        this.aspect_scale = 1,
        this.enableWebGL = f[13],
        this.linearSampling = f[14],
        this.clearBackground = f[15],
        this.versionstr = f[16],
        this.useHighDpi = f[17],
        this.orientations = f[20],
        this.autoLockOrientation = this.orientations > 0,
        this.pauseOnBlur = f[22],
        this.wantFullscreenScalingQuality = f[23],
        this.fullscreenScalingQuality = this.wantFullscreenScalingQuality,
        this.downscalingQuality = f[24],
        this.preloadSounds = f[25],
        this.projectName = f[26],
        this.enableFrontToBack = f[27] && !this.isIE,
        this.start_time = Date.now(),
        cr.clearArray(this.objectRefTable),
        this.initRendererAndLoader()
    }
    ;
    var n = !1
      , r = 0
      , s = [];
    e.prototype.queueImageLoad = function(t, e) {
        var i = this
          , n = function() {
            r--,
            i.maybeLoadNextImages()
        };
        t.addEventListener("load", n),
        t.addEventListener("error", n),
        s.push([t, e]),
        this.maybeLoadNextImages()
    }
    ,
    e.prototype.maybeLoadNextImages = function() {
        for (var t; s.length && r < 100; )
            r++,
            t = s.shift(),
            this.setImageSrc(t[0], t[1])
    }
    ,
    e.prototype.waitForImageLoad = function(t, e) {
        t.cocoonLazyLoad = !0,
        t.onerror = function(e) {
            t.c2error = !0,
            n = !0,
            console && console.error && console.error("Error loading image '" + t.src + "': ", e)
        }
        ,
        this.isEjecta ? t.src = e : t.src || ("undefined" != typeof XAPKReader ? XAPKReader.get(e, (function(e) {
            t.src = e
        }
        ), (function(i) {
            t.c2error = !0,
            n = !0,
            console && console.error && console.error("Error extracting image '" + e + "' from expansion file: ", i)
        }
        )) : (t.crossOrigin = "anonymous",
        this.queueImageLoad(t, e))),
        this.wait_for_textures.push(t)
    }
    ,
    e.prototype.findWaitingTexture = function(t) {
        var e, i;
        for (e = 0,
        i = this.wait_for_textures.length; e < i; e++)
            if (this.wait_for_textures[e].cr_src === t)
                return this.wait_for_textures[e];
        return null
    }
    ;
    var o = 0
      , a = !1;
    e.prototype.getready = function() {
        this.audioInstance && (o = this.audioInstance.setPreloadList(this.audio_to_preload))
    }
    ,
    e.prototype.areAllTexturesAndSoundsLoaded = function() {
        var t, e, i, n = o, r = 0, s = 0, h = !0;
        for (t = 0,
        e = this.wait_for_textures.length; t < e; t++) {
            var c = (i = this.wait_for_textures[t]).cr_filesize;
            (!c || c <= 0) && (c = 5e4),
            n += c,
            i.src && (i.complete || i.loaded) && !i.c2error ? r += c : h = !1
        }
        return h && this.preloadSounds && this.audioInstance && (a || (this.audioInstance.startPreloads(),
        a = !0),
        r += s = this.audioInstance.getPreloadedSize(),
        s < o && (h = !1)),
        this.progress = 0 == n ? 1 : r / n,
        h
    }
    ;
    var h = !1;
    e.prototype.go = function() {
        if (this.ctx || this.glwrap) {
            var e = this.ctx || this.overlay_ctx;
            this.overlay_canvas && this.positionOverlayCanvas();
            var i = window.innerWidth
              , r = window.innerHeight;
            this.lastWindowWidth === i && this.lastWindowHeight === r || this.setSize(i, r),
            this.progress = 0,
            this.last_progress = -1;
            var s = this;
            if (this.areAllTexturesAndSoundsLoaded() && (4 !== this.loaderstyle || h))
                this.go_loading_finished();
            else {
                var o = Date.now() - this.start_time;
                if (e) {
                    var a = this.width
                      , c = this.height
                      , l = this.devicePixelRatio;
                    if (this.loaderstyle < 3 && (this.isCocoonJs || o >= 500 && this.last_progress != this.progress)) {
                        e.clearRect(0, 0, a, c);
                        var u, p = a / 2, d = c / 2, f = 0 === this.loaderstyle && this.loaderlogos.logo.complete, g = 40 * l, y = 0, m = 80 * l;
                        if (f) {
                            var _ = this.loaderlogos.logo;
                            g = (m = _.width * l) / 2,
                            y = (u = _.height * l) / 2,
                            e.drawImage(_, cr.floor(p - g), cr.floor(d - y), m, u)
                        }
                        if (this.loaderstyle <= 1)
                            d += y + (f ? 12 * l : 0),
                            p -= g,
                            p = cr.floor(p) + .5,
                            d = cr.floor(d) + .5,
                            e.fillStyle = n ? "red" : "DodgerBlue",
                            e.fillRect(p, d, Math.floor(m * this.progress), 6 * l),
                            e.strokeStyle = "black",
                            e.strokeRect(p, d, m, 6 * l),
                            e.strokeStyle = "white",
                            e.strokeRect(p - 1 * l, d - 1 * l, m + 2 * l, 8 * l);
                        else if (2 === this.loaderstyle) {
                            e.font = this.isEjecta ? "12pt ArialMT" : "12pt Arial",
                            e.fillStyle = n ? "#f00" : "#999",
                            e.textBaseLine = "middle";
                            var v = Math.round(100 * this.progress) + "%"
                              , b = e.measureText ? e.measureText(v) : null
                              , w = b ? b.width : 0;
                            e.fillText(v, p - w / 2, d)
                        }
                        this.last_progress = this.progress
                    } else if (4 === this.loaderstyle)
                        return this.draw_c2_splash_loader(e),
                        void (t ? t((function() {
                            s.go()
                        }
                        )) : setTimeout((function() {
                            s.go()
                        }
                        ), 16))
                }
                setTimeout((function() {
                    s.go()
                }
                ), this.isCocoonJs ? 10 : 100)
            }
        }
    }
    ;
    var c = -1
      , l = "undefined" == typeof cr_is_preview ? 200 : 0
      , u = !0
      , p = !1
      , d = 0
      , f = 0
      , g = "undefined" == typeof cr_is_preview ? 3e3 : 0
      , y = null
      , m = null
      , _ = 0;
    function v(t, e) {
        return e <= 128 ? t[3] : e <= 256 ? t[2] : e <= 512 ? t[1] : t[0]
    }
    e.prototype.draw_c2_splash_loader = function(t) {
        if (!h) {
            for (var e = Math.ceil(this.width), i = Math.ceil(this.height), r = (this.devicePixelRatio,
            this.loaderlogos.logo), s = this.loaderlogos.powered, o = this.loaderlogos.website, a = 0; a < 4; ++a)
                if (!r[a].complete || !s[a].complete || !o[a].complete)
                    return;
            0 === _ && (c = Date.now());
            var b, w, x = Date.now(), T = !1, S = t;
            u || p ? (t.clearRect(0, 0, e, i),
            function(t, e) {
                y && y.width === t && y.height === e || ((y = document.createElement("canvas")).width = t,
                y.height = e,
                m = y.getContext("2d"))
            }(e, i),
            S = m,
            T = !0,
            u && 1 === _ && (c = Date.now())) : t.globalAlpha = 1,
            S.fillStyle = "#333333",
            S.fillRect(0, 0, e, i),
            this.cssHeight > 256 ? (w = .25 * (b = cr.clamp(.22 * i, 105, .6 * e)),
            S.drawImage(v(s, b), .5 * e - b / 2, .2 * i - w / 2, b, w),
            w = b = Math.min(.395 * i, .95 * e),
            S.drawImage(v(r, b), .5 * e - b / 2, .485 * i - w / 2, b, w),
            w = .25 * (b = cr.clamp(.22 * i, 105, .6 * e)),
            S.drawImage(v(o, b), .5 * e - b / 2, .868 * i - w / 2, b, w),
            S.fillStyle = "#3C3C3C",
            b = e,
            w = Math.max(.005 * i, 2),
            S.fillRect(0, .8 * i - w / 2, b, w),
            S.fillStyle = n ? "red" : "#E0FF65",
            b = e * this.progress,
            S.fillRect(.5 * e - b / 2, .8 * i - w / 2, b, w)) : (w = b = .55 * i,
            S.drawImage(v(r, b), .5 * e - b / 2, .45 * i - w / 2, b, w),
            S.fillStyle = "#3C3C3C",
            b = e,
            w = Math.max(.005 * i, 2),
            S.fillRect(0, .85 * i - w / 2, b, w),
            S.fillStyle = n ? "red" : "#E0FF65",
            b = e * this.progress,
            S.fillRect(.5 * e - b / 2, .85 * i - w / 2, b, w)),
            T && (u ? t.globalAlpha = 0 === _ ? 0 : Math.min((x - c) / 300, 1) : p && (t.globalAlpha = Math.max(1 - (x - f) / 300, 0)),
            t.drawImage(y, 0, 0, e, i)),
            u && x - c >= 300 && _ >= 2 && (u = !1,
            d = x),
            !u && x - d >= g && !p && this.progress >= 1 && (p = !0,
            f = x),
            (p && x - f >= 300 + l || "undefined" != typeof cr_is_preview && this.progress >= 1 && Date.now() - c < 500) && (h = !0,
            u = !1,
            p = !1,
            y = null,
            m = null,
            this.loaderlogos = null),
            ++_
        }
    }
    ,
    e.prototype.go_loading_finished = function() {
        var t, e, i;
        if (this.overlay_canvas && (this.canvas.parentNode.removeChild(this.overlay_canvas),
        this.overlay_ctx = null,
        this.overlay_canvas = null),
        this.start_time = Date.now(),
        this.last_fps_time = cr.performance_now(),
        this.uses_loader_layout)
            for (t = 0,
            e = this.types_by_index.length; t < e; t++)
                (i = this.types_by_index[t]).is_family || i.isOnLoaderLayout || !i.plugin.is_world || (i.onCreate(),
                cr.seal(i));
        else
            this.isloading = !1;
        for (t = 0,
        e = this.layouts_by_index.length; t < e; t++)
            this.layouts_by_index[t].createGlobalNonWorlds();
        if (this.fullscreen_mode >= 2) {
            var n = this.original_width / this.original_height
              , r = this.width / this.height;
            2 !== this.fullscreen_mode && r > n || 2 === this.fullscreen_mode && r < n ? this.aspect_scale = this.height / this.original_height : this.aspect_scale = this.width / this.original_width
        }
        for (this.first_layout ? this.layouts[this.first_layout].startRunning() : this.layouts_by_index[0].startRunning(),
        this.uses_loader_layout || (this.loadingprogress = 1,
        this.trigger(cr.system_object.prototype.cnds.OnLoadFinished, null),
        window.C2_RegisterSW && window.C2_RegisterSW()),
        navigator.splashscreen && navigator.splashscreen.hide && navigator.splashscreen.hide(),
        t = 0,
        e = this.types_by_index.length; t < e; t++)
            (i = this.types_by_index[t]).onAppBegin && i.onAppBegin();
        document.hidden || document.webkitHidden || document.mozHidden || document.msHidden ? window.cr_setSuspended(!0) : this.tick(!1),
        this.isDirectCanvas && AppMobi.webview.execute("onGameReady();")
    }
    ,
    e.prototype.tick = function(e, i, n) {
        if (this.running_layout) {
            var r = cr.performance_now()
              , s = r;
            if (n || !this.isSuspended || e) {
                e || (t ? this.raf_id = t(this.tickFunc) : this.timeout_id = setTimeout(this.tickFunc, this.isMobile ? 1 : 16));
                var o = i || r
                  , a = this.fullscreen_mode
                  , h = (document.mozFullScreen || document.webkitIsFullScreen || document.fullScreen || !!document.msFullscreenElement) && !this.isCordova;
                if ((h || this.isNodeFullscreen) && this.fullscreen_scaling > 0 && (a = this.fullscreen_scaling),
                a > 0) {
                    var c = window.innerWidth
                      , l = window.innerHeight;
                    this.lastWindowWidth === c && this.lastWindowHeight === l || this.setSize(c, l)
                }
                if (this.isDomFree || (h ? this.firstInFullscreen || (this.firstInFullscreen = !0) : this.firstInFullscreen ? (this.firstInFullscreen = !1,
                0 === this.fullscreen_mode && this.setSize(Math.round(this.oldWidth / this.devicePixelRatio), Math.round(this.oldHeight / this.devicePixelRatio), !0)) : (this.oldWidth = this.width,
                this.oldHeight = this.height)),
                this.isloading) {
                    var u = this.areAllTexturesAndSoundsLoaded();
                    this.loadingprogress = this.progress,
                    u && (this.isloading = !1,
                    this.progress = 1,
                    this.trigger(cr.system_object.prototype.cnds.OnLoadFinished, null),
                    window.C2_RegisterSW && window.C2_RegisterSW())
                }
                this.logic(o),
                !this.redraw && !this.isCocoonJs || this.is_WebGL_context_lost || this.suspendDrawing || e || (this.redraw = !1,
                this.glwrap ? this.drawGL() : this.draw(),
                this.snapshotCanvas && (this.canvas && this.canvas.toDataURL && (this.snapshotData = this.canvas.toDataURL(this.snapshotCanvas[0], this.snapshotCanvas[1]),
                window.cr_onSnapshot && window.cr_onSnapshot(this.snapshotData),
                this.trigger(cr.system_object.prototype.cnds.OnCanvasSnapshot, null)),
                this.snapshotCanvas = null)),
                this.hit_breakpoint || (this.tickcount++,
                this.tickcount_nosave++,
                this.execcount++,
                this.framecount++),
                this.logictime += cr.performance_now() - s
            }
        }
    }
    ,
    e.prototype.logic = function(t) {
        var e, i, n, r, s, o, a, h;
        t - this.last_fps_time >= 1e3 && (this.last_fps_time += 1e3,
        t - this.last_fps_time >= 1e3 && (this.last_fps_time = t),
        this.fps = this.framecount,
        this.framecount = 0,
        this.cpuutilisation = this.logictime,
        this.logictime = 0);
        var c = 0;
        if (0 !== this.last_tick_time) {
            var l = t - this.last_tick_time;
            l < 0 && (l = 0),
            c = l / 1e3,
            this.dt1 = c,
            this.dt1 > .5 ? this.dt1 = 0 : this.dt1 > 1 / this.minimumFramerate && (this.dt1 = 1 / this.minimumFramerate)
        }
        this.last_tick_time = t,
        this.dt = this.dt1 * this.timescale,
        this.kahanTime.add(this.dt),
        this.wallTime.add(c);
        var u = (document.mozFullScreen || document.webkitIsFullScreen || document.fullScreen || !!document.msFullscreenElement || this.isNodeFullscreen) && !this.isCordova;
        if (this.fullscreen_mode >= 2 || u && this.fullscreen_scaling > 0) {
            var p = this.original_width / this.original_height
              , d = this.width / this.height
              , f = this.fullscreen_mode;
            u && this.fullscreen_scaling > 0 && (f = this.fullscreen_scaling),
            this.aspect_scale = 2 !== f && d > p || 2 === f && d < p ? this.height / this.original_height : this.width / this.original_width,
            this.running_layout && (this.running_layout.scrollToX(this.running_layout.scrollX),
            this.running_layout.scrollToY(this.running_layout.scrollY))
        } else
            this.aspect_scale = this.isRetina ? this.devicePixelRatio : 1;
        this.ClearDeathRow(),
        this.isInOnDestroy++,
        this.system.runWaits(),
        this.isInOnDestroy--,
        this.ClearDeathRow(),
        this.isInOnDestroy++;
        var g = this.objects_to_pretick.valuesRef();
        for (e = 0,
        i = g.length; e < i; e++)
            g[e].pretick();
        for (e = 0,
        i = this.types_by_index.length; e < i; e++)
            if (!(a = this.types_by_index[e]).is_family && (a.behaviors.length || a.families.length))
                for (n = 0,
                r = a.instances.length; n < r; n++)
                    for (s = 0,
                    o = (y = a.instances[n]).behavior_insts.length; s < o; s++)
                        y.behavior_insts[s].tick();
        for (e = 0,
        i = this.types_by_index.length; e < i; e++)
            if (!(a = this.types_by_index[e]).is_family && (a.behaviors.length || a.families.length))
                for (n = 0,
                r = a.instances.length; n < r; n++)
                    for (s = 0,
                    o = (y = a.instances[n]).behavior_insts.length; s < o; s++)
                        (h = y.behavior_insts[s]).posttick && h.posttick();
        for (e = 0,
        i = (g = this.objects_to_tick.valuesRef()).length; e < i; e++)
            g[e].tick();
        for (this.isInOnDestroy--,
        this.handleSaveLoad(),
        e = 0; this.changelayout && e++ < 10; )
            this.doChangeLayout(this.changelayout);
        for (e = 0,
        i = this.eventsheets_by_index.length; e < i; e++)
            this.eventsheets_by_index[e].hasRun = !1;
        for (this.running_layout.event_sheet && this.running_layout.event_sheet.run(),
        cr.clearArray(this.registered_collisions),
        this.layout_first_tick = !1,
        this.isInOnDestroy++,
        e = 0,
        i = this.types_by_index.length; e < i; e++)
            if (!(a = this.types_by_index[e]).is_family && (a.behaviors.length || a.families.length))
                for (n = 0,
                r = a.instances.length; n < r; n++) {
                    var y;
                    for (s = 0,
                    o = (y = a.instances[n]).behavior_insts.length; s < o; s++)
                        (h = y.behavior_insts[s]).tick2 && h.tick2()
                }
        for (e = 0,
        i = (g = this.objects_to_tick2.valuesRef()).length; e < i; e++)
            g[e].tick2();
        this.isInOnDestroy--
    }
    ,
    e.prototype.onWindowBlur = function() {
        var t, e, i, n, r, s, o, a, h;
        for (t = 0,
        e = this.types_by_index.length; t < e; t++)
            if (!(o = this.types_by_index[t]).is_family)
                for (i = 0,
                n = o.instances.length; i < n; i++)
                    if ((a = o.instances[i]).onWindowBlur && a.onWindowBlur(),
                    a.behavior_insts)
                        for (r = 0,
                        s = a.behavior_insts.length; r < s; r++)
                            (h = a.behavior_insts[r]).onWindowBlur && h.onWindowBlur()
    }
    ,
    e.prototype.doChangeLayout = function(t) {
        var e, i, n, r = this.running_layout;
        if (this.running_layout.stopRunning(),
        this.glwrap)
            for (e = 0,
            i = this.types_by_index.length; e < i; e++)
                (n = this.types_by_index[e]).is_family || !n.unloadTextures || n.global && 0 !== n.instances.length || -1 !== t.initial_types.indexOf(n) || n.unloadTextures();
        r == t && cr.clearArray(this.system.waits),
        cr.clearArray(this.registered_collisions),
        this.runLayoutChangeMethods(!0),
        t.startRunning(),
        this.runLayoutChangeMethods(!1),
        this.redraw = !0,
        this.layout_first_tick = !0,
        this.ClearDeathRow()
    }
    ,
    e.prototype.runLayoutChangeMethods = function(t) {
        var e, i, n, r, s, o, a, h, c, l;
        for (e = 0,
        i = this.behaviors.length; e < i; e++)
            n = this.behaviors[e],
            t ? n.onBeforeLayoutChange && n.onBeforeLayoutChange() : n.onLayoutChange && n.onLayoutChange();
        for (e = 0,
        i = this.types_by_index.length; e < i; e++)
            if ((r = this.types_by_index[e]).global || r.plugin.singleglobal)
                for (s = 0,
                o = r.instances.length; s < o; s++)
                    if (a = r.instances[s],
                    t ? a.onBeforeLayoutChange && a.onBeforeLayoutChange() : a.onLayoutChange && a.onLayoutChange(),
                    a.behavior_insts)
                        for (h = 0,
                        c = a.behavior_insts.length; h < c; h++)
                            l = a.behavior_insts[h],
                            t ? l.onBeforeLayoutChange && l.onBeforeLayoutChange() : l.onLayoutChange && l.onLayoutChange()
    }
    ,
    e.prototype.pretickMe = function(t) {
        this.objects_to_pretick.add(t)
    }
    ,
    e.prototype.unpretickMe = function(t) {
        this.objects_to_pretick.remove(t)
    }
    ,
    e.prototype.tickMe = function(t) {
        this.objects_to_tick.add(t)
    }
    ,
    e.prototype.untickMe = function(t) {
        this.objects_to_tick.remove(t)
    }
    ,
    e.prototype.tick2Me = function(t) {
        this.objects_to_tick2.add(t)
    }
    ,
    e.prototype.untick2Me = function(t) {
        this.objects_to_tick2.remove(t)
    }
    ,
    e.prototype.getDt = function(t) {
        return t && -1 !== t.my_timescale ? this.dt1 * t.my_timescale : this.dt
    }
    ,
    e.prototype.draw = function() {
        this.running_layout.draw(this.ctx),
        this.isDirectCanvas && this.ctx.present()
    }
    ,
    e.prototype.drawGL = function() {
        this.enableFrontToBack && (this.earlyz_index = 1,
        this.running_layout.drawGL_earlyZPass(this.glwrap)),
        this.running_layout.drawGL(this.glwrap),
        this.glwrap.present()
    }
    ,
    e.prototype.addDestroyCallback = function(t) {
        t && this.destroycallbacks.push(t)
    }
    ,
    e.prototype.removeDestroyCallback = function(t) {
        cr.arrayFindRemove(this.destroycallbacks, t)
    }
    ,
    e.prototype.getObjectByUID = function(t) {
        var e = t.toString();
        return this.objectsByUid.hasOwnProperty(e) ? this.objectsByUid[e] : null
    }
    ;
    var b = [];
    e.prototype.DestroyInstance = function(t) {
        var e, i, n = t.type.name, r = null;
        if (this.deathRow.hasOwnProperty(n)) {
            if ((r = this.deathRow[n]).contains(t))
                return
        } else
            r = b.length ? b.pop() : new cr.ObjectSet,
            this.deathRow[n] = r;
        if (r.add(t),
        this.hasPendingInstances = !0,
        t.is_contained)
            for (e = 0,
            i = t.siblings.length; e < i; e++)
                this.DestroyInstance(t.siblings[e]);
        this.isInClearDeathRow && r.values_cache.push(t),
        this.isEndingLayout || (this.isInOnDestroy++,
        this.trigger(Object.getPrototypeOf(t.type.plugin).cnds.OnDestroyed, t),
        this.isInOnDestroy--)
    }
    ,
    e.prototype.ClearDeathRow = function() {
        if (this.hasPendingInstances) {
            var t, e, i, n, r, s;
            for (this.isInClearDeathRow = !0,
            i = 0,
            r = this.createRow.length; i < r; ++i)
                for ((e = (t = this.createRow[i]).type).instances.push(t),
                n = 0,
                s = e.families.length; n < s; ++n)
                    e.families[n].instances.push(t),
                    e.families[n].stale_iids = !0;
            cr.clearArray(this.createRow),
            this.IterateDeathRow(),
            cr.wipe(this.deathRow),
            this.isInClearDeathRow = !1,
            this.hasPendingInstances = !1
        }
    }
    ,
    e.prototype.IterateDeathRow = function() {
        for (var t in this.deathRow)
            this.deathRow.hasOwnProperty(t) && this.ClearDeathRowForType(this.deathRow[t])
    }
    ,
    e.prototype.ClearDeathRowForType = function(t) {
        var e, i, n, r, s, o, a, h, c = t.valuesRef(), l = c[0].type;
        for (cr.arrayRemoveAllFromObjectSet(l.instances, t),
        l.stale_iids = !0,
        0 === l.instances.length && (l.any_instance_parallaxed = !1),
        e = 0,
        i = l.families.length; e < i; ++e)
            o = l.families[e],
            cr.arrayRemoveAllFromObjectSet(o.instances, t),
            o.stale_iids = !0;
        for (e = 0,
        i = this.system.waits.length; e < i; ++e)
            if ((s = this.system.waits[e]).sols.hasOwnProperty(l.index) && cr.arrayRemoveAllFromObjectSet(s.sols[l.index].insts, t),
            !l.is_family)
                for (n = 0,
                r = l.families.length; n < r; ++n)
                    o = l.families[n],
                    s.sols.hasOwnProperty(o.index) && cr.arrayRemoveAllFromObjectSet(s.sols[o.index].insts, t);
        var u, p = c[0].layer;
        if (p) {
            if (p.useRenderCells)
                for (e = 0,
                i = (a = p.instances).length; e < i; ++e)
                    h = a[e],
                    t.contains(h) && (h.update_bbox(),
                    p.render_grid.update(h, h.rendercells, null),
                    h.rendercells.set(0, 0, -1, -1));
            cr.arrayRemoveAllFromObjectSet(p.instances, t),
            p.setZIndicesStaleFrom(0)
        }
        for (e = 0; e < c.length; ++e)
            this.ClearDeathRowForSingleInstance(c[e], l);
        (u = t).clear(),
        b.push(u),
        this.redraw = !0
    }
    ,
    e.prototype.ClearDeathRowForSingleInstance = function(t, e) {
        var i, n, r;
        for (i = 0,
        n = this.destroycallbacks.length; i < n; ++i)
            this.destroycallbacks[i](t);
        t.collcells && e.collision_grid.update(t, t.collcells, null);
        var s = t.layer;
        if (s && s.removeFromInstanceList(t, !0),
        t.behavior_insts)
            for (i = 0,
            n = t.behavior_insts.length; i < n; ++i)
                (r = t.behavior_insts[i]).onDestroy && r.onDestroy(),
                r.behavior.my_instances.remove(t);
        this.objects_to_pretick.remove(t),
        this.objects_to_tick.remove(t),
        this.objects_to_tick2.remove(t),
        t.onDestroy && t.onDestroy(),
        this.objectsByUid.hasOwnProperty(t.uid.toString()) && delete this.objectsByUid[t.uid.toString()],
        this.objectcount--,
        e.deadCache.length < 100 && e.deadCache.push(t)
    }
    ,
    e.prototype.createInstance = function(t, e, i, n) {
        if (t.is_family) {
            var r = cr.floor(Math.random() * t.members.length);
            return this.createInstance(t.members[r], e, i, n)
        }
        return t.default_instance ? this.createInstanceFromInit(t.default_instance, e, !1, i, n, !1) : null
    }
    ;
    var w = [];
    e.prototype.createInstanceFromInit = function(t, e, i, n, r, s) {
        var o, a, h, c, l;
        if (!t)
            return null;
        var u = this.types_by_index[t[1]]
          , p = u.plugin.is_world;
        if (this.isloading && p && !u.isOnLoaderLayout)
            return null;
        if (p && !this.glwrap && 11 === t[0][11])
            return null;
        var d, f = e;
        for (p || (e = null),
        u.deadCache.length ? ((d = u.deadCache.pop()).recycled = !0,
        u.plugin.Instance.call(d, u)) : (d = new u.plugin.Instance(u)).recycled = !1,
        !i || s || this.objectsByUid.hasOwnProperty(t[2].toString()) ? d.uid = this.next_uid++ : d.uid = t[2],
        this.objectsByUid[d.uid.toString()] = d,
        d.puid = this.next_puid++,
        d.iid = u.instances.length,
        o = 0,
        a = this.createRow.length; o < a; ++o)
            this.createRow[o].type === u && d.iid++;
        d.get_iid = cr.inst_get_iid,
        d.toString = cr.inst_toString;
        var g, y = t[3];
        if (d.recycled)
            cr.wipe(d.extra);
        else {
            if (d.extra = {},
            "undefined" != typeof cr_is_preview)
                for (d.instance_var_names = [],
                d.instance_var_names.length = y.length,
                o = 0,
                a = y.length; o < a; o++)
                    d.instance_var_names[o] = y[o][1];
            d.instance_vars = [],
            d.instance_vars.length = y.length
        }
        for (o = 0,
        a = y.length; o < a; o++)
            d.instance_vars[o] = y[o][0];
        if (p) {
            var m = t[0];
            if (d.x = cr.is_undefined(n) ? m[0] : n,
            d.y = cr.is_undefined(r) ? m[1] : r,
            d.z = m[2],
            d.width = m[3],
            d.height = m[4],
            d.depth = m[5],
            d.angle = m[6],
            d.opacity = m[7],
            d.hotspotX = m[8],
            d.hotspotY = m[9],
            d.blend_mode = m[10],
            l = m[11],
            !this.glwrap && u.effect_types.length && (d.blend_mode = l),
            d.compositeOp = cr.effectToCompositeOp(d.blend_mode),
            this.gl && cr.setGLBlend(d, d.blend_mode, this.gl),
            d.recycled) {
                for (o = 0,
                a = m[12].length; o < a; o++)
                    for (h = 0,
                    c = m[12][o].length; h < c; h++)
                        d.effect_params[o][h] = m[12][o][h];
                d.bbox.set(0, 0, 0, 0),
                d.collcells.set(0, 0, -1, -1),
                d.rendercells.set(0, 0, -1, -1),
                d.bquad.set_from_rect(d.bbox),
                cr.clearArray(d.bbox_changed_callbacks)
            } else {
                for (d.effect_params = m[12].slice(0),
                o = 0,
                a = d.effect_params.length; o < a; o++)
                    d.effect_params[o] = m[12][o].slice(0);
                d.active_effect_types = [],
                d.active_effect_flags = [],
                d.active_effect_flags.length = u.effect_types.length,
                d.bbox = new cr.rect(0,0,0,0),
                d.collcells = new cr.rect(0,0,-1,-1),
                d.rendercells = new cr.rect(0,0,-1,-1),
                d.bquad = new cr.quad,
                d.bbox_changed_callbacks = [],
                d.set_bbox_changed = cr.set_bbox_changed,
                d.add_bbox_changed_callback = cr.add_bbox_changed_callback,
                d.contains_pt = cr.inst_contains_pt,
                d.update_bbox = cr.update_bbox,
                d.update_render_cell = cr.update_render_cell,
                d.update_collision_cell = cr.update_collision_cell,
                d.get_zindex = cr.inst_get_zindex
            }
            for (d.tilemap_exists = !1,
            d.tilemap_width = 0,
            d.tilemap_height = 0,
            d.tilemap_data = null,
            14 === m.length && (d.tilemap_exists = !0,
            d.tilemap_width = m[13][0],
            d.tilemap_height = m[13][1],
            d.tilemap_data = m[13][2]),
            o = 0,
            a = u.effect_types.length; o < a; o++)
                d.active_effect_flags[o] = !0;
            d.shaders_preserve_opaqueness = !0,
            d.updateActiveEffects = cr.inst_updateActiveEffects,
            d.updateActiveEffects(),
            d.uses_shaders = !!d.active_effect_types.length,
            d.bbox_changed = !0,
            d.cell_changed = !0,
            u.any_cell_changed = !0,
            d.visible = !0,
            d.my_timescale = -1,
            d.layer = e,
            d.zindex = e.instances.length,
            d.earlyz_index = 0,
            void 0 === d.collision_poly && (d.collision_poly = null),
            d.collisionsEnabled = !0,
            this.redraw = !0
        }
        for (cr.clearArray(w),
        o = 0,
        a = u.families.length; o < a; o++)
            w.push.apply(w, u.families[o].behaviors);
        if (w.push.apply(w, u.behaviors),
        d.recycled)
            for (o = 0,
            a = w.length; o < a; o++) {
                var _ = w[o];
                for ((v = d.behavior_insts[o]).recycled = !0,
                _.behavior.Instance.call(v, _, d),
                h = 0,
                c = (g = t[4][o]).length; h < c; h++)
                    v.properties[h] = g[h];
                v.onCreate(),
                _.behavior.my_instances.add(d)
            }
        else
            for (d.behavior_insts = [],
            o = 0,
            a = w.length; o < a; o++) {
                var v;
                (v = new (_ = w[o]).behavior.Instance(_,d)).recycled = !1,
                v.properties = t[4][o].slice(0),
                v.onCreate(),
                cr.seal(v),
                d.behavior_insts.push(v),
                _.behavior.my_instances.add(d)
            }
        if (g = t[5],
        d.recycled)
            for (o = 0,
            a = g.length; o < a; o++)
                d.properties[o] = g[o];
        else
            d.properties = g.slice(0);
        if (this.createRow.push(d),
        this.hasPendingInstances = !0,
        e && (e.appendToInstanceList(d, !0),
        1 === e.parallaxX && 1 === e.parallaxY || (u.any_instance_parallaxed = !0)),
        this.objectcount++,
        u.is_contained) {
            if (d.is_contained = !0,
            d.recycled ? cr.clearArray(d.siblings) : d.siblings = [],
            !i && !s) {
                for (o = 0,
                a = u.container.length; o < a; o++)
                    if (u.container[o] !== u) {
                        if (!u.container[o].default_instance)
                            return null;
                        d.siblings.push(this.createInstanceFromInit(u.container[o].default_instance, f, !1, p ? d.x : n, p ? d.y : r, !0))
                    }
                for (o = 0,
                a = d.siblings.length; o < a; o++)
                    for (d.siblings[o].siblings.push(d),
                    h = 0; h < a; h++)
                        o !== h && d.siblings[o].siblings.push(d.siblings[h])
            }
        } else
            d.is_contained = !1,
            d.siblings = null;
        for (d.onCreate(),
        d.recycled || cr.seal(d),
        o = 0,
        a = d.behavior_insts.length; o < a; o++)
            d.behavior_insts[o].postCreate && d.behavior_insts[o].postCreate();
        return d
    }
    ,
    e.prototype.getLayerByName = function(t) {
        var e, i;
        for (e = 0,
        i = this.running_layout.layers.length; e < i; e++) {
            var n = this.running_layout.layers[e];
            if (cr.equals_nocase(n.name, t))
                return n
        }
        return null
    }
    ,
    e.prototype.getLayerByNumber = function(t) {
        return (t = cr.floor(t)) < 0 && (t = 0),
        t >= this.running_layout.layers.length && (t = this.running_layout.layers.length - 1),
        this.running_layout.layers[t]
    }
    ,
    e.prototype.getLayer = function(t) {
        return cr.is_number(t) ? this.getLayerByNumber(t) : this.getLayerByName(t.toString())
    }
    ,
    e.prototype.clearSol = function(t) {
        var e, i;
        for (e = 0,
        i = t.length; e < i; e++)
            t[e].getCurrentSol().select_all = !0
    }
    ,
    e.prototype.pushCleanSol = function(t) {
        var e, i;
        for (e = 0,
        i = t.length; e < i; e++)
            t[e].pushCleanSol()
    }
    ,
    e.prototype.pushCopySol = function(t) {
        var e, i;
        for (e = 0,
        i = t.length; e < i; e++)
            t[e].pushCopySol()
    }
    ,
    e.prototype.popSol = function(t) {
        var e, i;
        for (e = 0,
        i = t.length; e < i; e++)
            t[e].popSol()
    }
    ,
    e.prototype.updateAllCells = function(t) {
        if (t.any_cell_changed) {
            var e, i, n = t.instances;
            for (e = 0,
            i = n.length; e < i; ++e)
                n[e].update_collision_cell();
            var r = this.createRow;
            for (e = 0,
            i = r.length; e < i; ++e)
                r[e].type === t && r[e].update_collision_cell();
            t.any_cell_changed = !1
        }
    }
    ,
    e.prototype.getCollisionCandidates = function(t, e, i, n) {
        var r, s, o, a = !!t && (1 !== t.parallaxX || 1 !== t.parallaxY);
        if (e.is_family)
            for (r = 0,
            s = e.members.length; r < s; ++r)
                o = e.members[r],
                a || o.any_instance_parallaxed ? cr.appendArray(n, o.instances) : (this.updateAllCells(o),
                o.collision_grid.queryRange(i, n));
        else
            a || e.any_instance_parallaxed ? cr.appendArray(n, e.instances) : (this.updateAllCells(e),
            e.collision_grid.queryRange(i, n))
    }
    ,
    e.prototype.getTypesCollisionCandidates = function(t, e, i, n) {
        var r, s;
        for (r = 0,
        s = e.length; r < s; ++r)
            this.getCollisionCandidates(t, e[r], i, n)
    }
    ,
    e.prototype.getSolidCollisionCandidates = function(t, e, i) {
        var n = this.getSolidBehavior();
        if (!n)
            return null;
        this.getTypesCollisionCandidates(t, n.my_types, e, i)
    }
    ,
    e.prototype.getJumpthruCollisionCandidates = function(t, e, i) {
        var n = this.getJumpthruBehavior();
        if (!n)
            return null;
        this.getTypesCollisionCandidates(t, n.my_types, e, i)
    }
    ,
    e.prototype.testAndSelectCanvasPointOverlap = function(t, e, i, n) {
        var r, s, o, a, h, c, l, u = t.getCurrentSol(), p = this.getCurrentEventStack().current_event.orblock;
        if (u.select_all)
            for (n || (u.select_all = !1,
            cr.clearArray(u.instances)),
            r = 0,
            a = t.instances.length; r < a; r++)
                if ((o = t.instances[r]).update_bbox(),
                h = o.layer.canvasToLayer(e, i, !0),
                c = o.layer.canvasToLayer(e, i, !1),
                o.contains_pt(h, c)) {
                    if (n)
                        return !1;
                    u.instances.push(o)
                } else
                    p && u.else_instances.push(o);
        else {
            for (s = 0,
            r = 0,
            a = (l = p ? u.else_instances : u.instances).length; r < a; r++)
                if ((o = l[r]).update_bbox(),
                h = o.layer.canvasToLayer(e, i, !0),
                c = o.layer.canvasToLayer(e, i, !1),
                o.contains_pt(h, c)) {
                    if (n)
                        return !1;
                    p ? u.instances.push(o) : (u.instances[s] = u.instances[r],
                    s++)
                }
            n || (l.length = s)
        }
        return t.applySolToContainer(),
        !!n || u.hasObjects()
    }
    ,
    e.prototype.testOverlap = function(t, e) {
        if (!(t && e && t !== e && t.collisionsEnabled && e.collisionsEnabled))
            return !1;
        t.update_bbox(),
        e.update_bbox();
        var i, n, r, s, o, a, h, c, l, u, p = t.layer, d = e.layer;
        if (p !== d && (p.parallaxX !== d.parallaxX || d.parallaxY != d.parallaxY || p.scale !== d.scale || p.angle !== d.angle || p.zoomRate !== d.zoomRate)) {
            for (h = t.collision_poly && !t.collision_poly.is_empty(),
            c = e.collision_poly && !e.collision_poly.is_empty(),
            h ? (t.collision_poly.cache_poly(t.width, t.height, t.angle),
            this.temp_poly.set_from_poly(t.collision_poly)) : this.temp_poly.set_from_quad(t.bquad, t.x, t.y, t.width, t.height),
            l = this.temp_poly,
            c ? (e.collision_poly.cache_poly(e.width, e.height, e.angle),
            this.temp_poly2.set_from_poly(e.collision_poly)) : this.temp_poly2.set_from_quad(e.bquad, e.x, e.y, e.width, e.height),
            u = this.temp_poly2,
            i = 0,
            n = l.pts_count; i < n; i++)
                s = (r = 2 * i) + 1,
                o = l.pts_cache[r],
                a = l.pts_cache[s],
                l.pts_cache[r] = p.layerToCanvas(o + t.x, a + t.y, !0),
                l.pts_cache[s] = p.layerToCanvas(o + t.x, a + t.y, !1);
            for (l.update_bbox(),
            i = 0,
            n = u.pts_count; i < n; i++)
                s = (r = 2 * i) + 1,
                o = u.pts_cache[r],
                a = u.pts_cache[s],
                u.pts_cache[r] = d.layerToCanvas(o + e.x, a + e.y, !0),
                u.pts_cache[s] = d.layerToCanvas(o + e.x, a + e.y, !1);
            return u.update_bbox(),
            l.intersects_poly(u, 0, 0)
        }
        return !!t.bbox.intersects_rect(e.bbox) && (!!t.bquad.intersects_quad(e.bquad) && ((!t.tilemap_exists || !e.tilemap_exists) && (t.tilemap_exists ? this.testTilemapOverlap(t, e) : e.tilemap_exists ? this.testTilemapOverlap(e, t) : (h = t.collision_poly && !t.collision_poly.is_empty(),
        c = e.collision_poly && !e.collision_poly.is_empty(),
        !h && !c || (h ? (t.collision_poly.cache_poly(t.width, t.height, t.angle),
        l = t.collision_poly) : (this.temp_poly.set_from_quad(t.bquad, t.x, t.y, t.width, t.height),
        l = this.temp_poly),
        c ? (e.collision_poly.cache_poly(e.width, e.height, e.angle),
        u = e.collision_poly) : (this.temp_poly.set_from_quad(e.bquad, e.x, e.y, e.width, e.height),
        u = this.temp_poly),
        l.intersects_poly(u, e.x - t.x, e.y - t.y))))))
    }
    ;
    var x = new cr.quad
      , T = new cr.rect(0,0,0,0)
      , S = [];
    e.prototype.testTilemapOverlap = function(t, e) {
        var i, n, r, s, o = e.bbox, a = t.x, h = t.y;
        t.getCollisionRectCandidates(o, S);
        var c = S
          , l = e.collision_poly && !e.collision_poly.is_empty();
        for (i = 0,
        n = c.length; i < n; ++i)
            if (s = (r = c[i]).rc,
            o.intersects_rect_off(s, a, h) && (x.set_from_rect(s),
            x.offset(a, h),
            x.intersects_quad(e.bquad)))
                if (l) {
                    if (e.collision_poly.cache_poly(e.width, e.height, e.angle),
                    r.poly) {
                        if (r.poly.intersects_poly(e.collision_poly, e.x - (a + s.left), e.y - (h + s.top)))
                            return cr.clearArray(S),
                            !0
                    } else if (this.temp_poly.set_from_quad(x, 0, 0, s.right - s.left, s.bottom - s.top),
                    this.temp_poly.intersects_poly(e.collision_poly, e.x, e.y))
                        return cr.clearArray(S),
                        !0
                } else {
                    if (!r.poly)
                        return cr.clearArray(S),
                        !0;
                    if (this.temp_poly.set_from_quad(e.bquad, 0, 0, e.width, e.height),
                    r.poly.intersects_poly(this.temp_poly, -(a + s.left), -(h + s.top)))
                        return cr.clearArray(S),
                        !0
                }
        return cr.clearArray(S),
        !1
    }
    ,
    e.prototype.testRectOverlap = function(t, e) {
        if (!e || !e.collisionsEnabled)
            return !1;
        e.update_bbox();
        e.layer;
        if (!e.bbox.intersects_rect(t))
            return !1;
        if (e.tilemap_exists) {
            e.getCollisionRectCandidates(t, S);
            var i, n, r, s, o = S, a = e.x, h = e.y;
            for (i = 0,
            n = o.length; i < n; ++i)
                if (s = (r = o[i]).rc,
                t.intersects_rect_off(s, a, h)) {
                    if (!r.poly)
                        return cr.clearArray(S),
                        !0;
                    if (this.temp_poly.set_from_rect(t, 0, 0),
                    r.poly.intersects_poly(this.temp_poly, -(a + s.left), -(h + s.top)))
                        return cr.clearArray(S),
                        !0
                }
            return cr.clearArray(S),
            !1
        }
        return x.set_from_rect(t),
        !!e.bquad.intersects_quad(x) && (!(e.collision_poly && !e.collision_poly.is_empty()) || (e.collision_poly.cache_poly(e.width, e.height, e.angle),
        x.offset(-t.left, -t.top),
        this.temp_poly.set_from_quad(x, 0, 0, 1, 1),
        e.collision_poly.intersects_poly(this.temp_poly, t.left - e.x, t.top - e.y)))
    }
    ,
    e.prototype.testSegmentOverlap = function(t, e, i, n, r) {
        if (!r || !r.collisionsEnabled)
            return !1;
        r.update_bbox();
        r.layer;
        if (T.set(cr.min(t, i), cr.min(e, n), cr.max(t, i), cr.max(e, n)),
        !r.bbox.intersects_rect(T))
            return !1;
        if (r.tilemap_exists) {
            r.getCollisionRectCandidates(T, S);
            var s, o, a, h, c = S, l = r.x, u = r.y;
            for (s = 0,
            o = c.length; s < o; ++s)
                if (h = (a = c[s]).rc,
                T.intersects_rect_off(h, l, u) && (x.set_from_rect(h),
                x.offset(l, u),
                x.intersects_segment(t, e, i, n))) {
                    if (!a.poly)
                        return cr.clearArray(S),
                        !0;
                    if (a.poly.intersects_segment(l + h.left, u + h.top, t, e, i, n))
                        return cr.clearArray(S),
                        !0
                }
            return cr.clearArray(S),
            !1
        }
        return !!r.bquad.intersects_segment(t, e, i, n) && (!(r.collision_poly && !r.collision_poly.is_empty()) || (r.collision_poly.cache_poly(r.width, r.height, r.angle),
        r.collision_poly.intersects_segment(r.x, r.y, t, e, i, n)))
    }
    ,
    e.prototype.typeHasBehavior = function(t, e) {
        if (!e)
            return !1;
        var i, n, r, s, o;
        for (i = 0,
        n = t.behaviors.length; i < n; i++)
            if (t.behaviors[i].behavior instanceof e)
                return !0;
        if (!t.is_family)
            for (i = 0,
            n = t.families.length; i < n; i++)
                for (r = 0,
                s = (o = t.families[i]).behaviors.length; r < s; r++)
                    if (o.behaviors[r].behavior instanceof e)
                        return !0;
        return !1
    }
    ,
    e.prototype.typeHasNoSaveBehavior = function(t) {
        return this.typeHasBehavior(t, cr.behaviors.NoSave)
    }
    ,
    e.prototype.typeHasPersistBehavior = function(t) {
        return this.typeHasBehavior(t, cr.behaviors.Persist)
    }
    ,
    e.prototype.getSolidBehavior = function() {
        return this.solidBehavior
    }
    ,
    e.prototype.getJumpthruBehavior = function() {
        return this.jumpthruBehavior
    }
    ;
    var C = [];
    e.prototype.testOverlapSolid = function(t) {
        var e, i, n;
        for (t.update_bbox(),
        this.getSolidCollisionCandidates(t.layer, t.bbox, C),
        e = 0,
        i = C.length; e < i; ++e)
            if ((n = C[e]).extra.solidEnabled && this.testOverlap(t, n))
                return cr.clearArray(C),
                n;
        return cr.clearArray(C),
        null
    }
    ,
    e.prototype.testRectOverlapSolid = function(t) {
        var e, i, n;
        for (this.getSolidCollisionCandidates(null, t, C),
        e = 0,
        i = C.length; e < i; ++e)
            if ((n = C[e]).extra.solidEnabled && this.testRectOverlap(t, n))
                return cr.clearArray(C),
                n;
        return cr.clearArray(C),
        null
    }
    ;
    var A = [];
    e.prototype.testOverlapJumpThru = function(t, e) {
        var i, n, r, s = null;
        for (e && (s = A,
        cr.clearArray(s)),
        t.update_bbox(),
        this.getJumpthruCollisionCandidates(t.layer, t.bbox, C),
        i = 0,
        n = C.length; i < n; ++i)
            if ((r = C[i]).extra.jumpthruEnabled && this.testOverlap(t, r)) {
                if (!e)
                    return cr.clearArray(C),
                    r;
                s.push(r)
            }
        return cr.clearArray(C),
        s
    }
    ,
    e.prototype.pushOutSolid = function(t, e, i, n, r, s) {
        var o, a = n || 50, h = t.x, c = t.y, l = null, u = null;
        for (o = 0; o < a; o++)
            if (t.x = h + e * o,
            t.y = c + i * o,
            t.set_bbox_changed(),
            !this.testOverlap(t, l) && ((l = this.testOverlapSolid(t)) && (u = l),
            !l && (r && (l = s ? this.testOverlap(t, s) ? s : null : this.testOverlapJumpThru(t)) && (u = l),
            !l)))
                return u && this.pushInFractional(t, e, i, u, 16),
                !0;
        return t.x = h,
        t.y = c,
        t.set_bbox_changed(),
        !1
    }
    ,
    e.prototype.pushOutSolidAxis = function(t, e, i, n) {
        n = n || 50;
        var r, s, o, a = t.x, h = t.y, c = null, l = null;
        for (r = 0; r < n; ++r)
            for (s = 0; s < 2; ++s)
                if (o = 2 * s - 1,
                t.x = a + e * r * o,
                t.y = h + i * r * o,
                t.set_bbox_changed(),
                !this.testOverlap(t, c)) {
                    if (!(c = this.testOverlapSolid(t)))
                        return l && this.pushInFractional(t, e * o, i * o, l, 16),
                        !0;
                    l = c
                }
        return t.x = a,
        t.y = h,
        t.set_bbox_changed(),
        !1
    }
    ,
    e.prototype.pushOut = function(t, e, i, n, r) {
        var s, o = n || 50, a = t.x, h = t.y;
        for (s = 0; s < o; s++)
            if (t.x = a + e * s,
            t.y = h + i * s,
            t.set_bbox_changed(),
            !this.testOverlap(t, r))
                return !0;
        return t.x = a,
        t.y = h,
        t.set_bbox_changed(),
        !1
    }
    ,
    e.prototype.pushInFractional = function(t, e, i, n, r) {
        for (var s, o = 2, a = !1, h = !1, c = t.x, l = t.y; o <= r; )
            s = 1 / o,
            o *= 2,
            t.x += e * s * (a ? 1 : -1),
            t.y += i * s * (a ? 1 : -1),
            t.set_bbox_changed(),
            this.testOverlap(t, n) ? (a = !0,
            h = !0) : (a = !1,
            h = !1,
            c = t.x,
            l = t.y);
        h && (t.x = c,
        t.y = l,
        t.set_bbox_changed())
    }
    ,
    e.prototype.pushOutSolidNearest = function(t, e) {
        var i = cr.is_undefined(e) ? 100 : e
          , n = 0
          , r = t.x
          , s = t.y
          , o = 0
          , a = 0
          , h = 0
          , c = this.testOverlapSolid(t);
        if (!c)
            return !0;
        for (; n <= i; ) {
            switch (o) {
            case 0:
                a = 0,
                h = -1,
                n++;
                break;
            case 1:
                a = 1,
                h = -1;
                break;
            case 2:
                a = 1,
                h = 0;
                break;
            case 3:
                a = 1,
                h = 1;
                break;
            case 4:
                a = 0,
                h = 1;
                break;
            case 5:
                a = -1,
                h = 1;
                break;
            case 6:
                a = -1,
                h = 0;
                break;
            case 7:
                a = -1,
                h = -1
            }
            if (o = (o + 1) % 8,
            t.x = cr.floor(r + a * n),
            t.y = cr.floor(s + h * n),
            t.set_bbox_changed(),
            !this.testOverlap(t, c) && !(c = this.testOverlapSolid(t)))
                return !0
        }
        return t.x = r,
        t.y = s,
        t.set_bbox_changed(),
        !1
    }
    ,
    e.prototype.registerCollision = function(t, e) {
        t.collisionsEnabled && e.collisionsEnabled && this.registered_collisions.push([t, e])
    }
    ,
    e.prototype.addRegisteredCollisionCandidates = function(t, e, i) {
        var n, r, s, o;
        for (n = 0,
        r = this.registered_collisions.length; n < r; ++n) {
            if ((s = this.registered_collisions[n])[0] === t)
                o = s[1];
            else {
                if (s[1] !== t)
                    continue;
                o = s[0]
            }
            if (e.is_family) {
                if (-1 === e.members.indexOf(e))
                    continue
            } else if (o.type !== e)
                continue;
            -1 === i.indexOf(o) && i.push(o)
        }
    }
    ,
    e.prototype.checkRegisteredCollision = function(t, e) {
        var i, n, r;
        for (i = 0,
        n = this.registered_collisions.length; i < n; i++)
            if ((r = this.registered_collisions[i])[0] === t && r[1] === e || r[0] === e && r[1] === t)
                return !0;
        return !1
    }
    ,
    e.prototype.calculateSolidBounceAngle = function(t, e, i, n) {
        var r = t.x
          , s = t.y
          , o = cr.max(10, cr.distanceTo(e, i, r, s))
          , a = cr.angleTo(e, i, r, s)
          , h = n || this.testOverlapSolid(t);
        if (!h)
            return cr.clamp_angle(a + cr.PI);
        var c, l, u, p, d = h, f = cr.to_radians(5);
        for (c = 1; c < 36; c++)
            if (l = a - c * f,
            t.x = e + Math.cos(l) * o,
            t.y = i + Math.sin(l) * o,
            t.set_bbox_changed(),
            !this.testOverlap(t, d) && !(d = n ? null : this.testOverlapSolid(t))) {
                u = l;
                break
            }
        36 === c && (u = cr.clamp_angle(a + cr.PI));
        d = h;
        for (c = 1; c < 36; c++)
            if (l = a + c * f,
            t.x = e + Math.cos(l) * o,
            t.y = i + Math.sin(l) * o,
            t.set_bbox_changed(),
            !this.testOverlap(t, d) && !(d = n ? null : this.testOverlapSolid(t))) {
                p = l;
                break
            }
        if (36 === c && (p = cr.clamp_angle(a + cr.PI)),
        t.x = r,
        t.y = s,
        t.set_bbox_changed(),
        p === u)
            return p;
        var g, y = cr.angleDiff(p, u) / 2;
        g = cr.angleClockwise(p, u) ? cr.clamp_angle(u + y + cr.PI) : cr.clamp_angle(p + y);
        var m = Math.cos(a)
          , _ = Math.sin(a)
          , v = Math.cos(g)
          , b = Math.sin(g)
          , w = m * v + _ * b
          , x = m - 2 * w * v
          , T = _ - 2 * w * b;
        return cr.angleTo(0, 0, x, T)
    }
    ;
    var k = -1;
    function E() {
        try {
            return !!window.indexedDB
        } catch (t) {
            return !1
        }
    }
    function O(t) {
        t.target.result.createObjectStore("saves", {
            keyPath: "slot"
        })
    }
    function P() {
        cr.logexport("Reloading for continuous preview"),
        window.c2cocoonjs ? CocoonJS.App.reload() : window.location.search.indexOf("continuous") > -1 ? window.location.reload(!0) : window.location = window.location + "?continuous"
    }
    function R(t) {
        var e, i = {};
        for (e in t)
            if (t.hasOwnProperty(e)) {
                if (t[e]instanceof cr.ObjectSet)
                    continue;
                if (t[e] && void 0 !== t[e].c2userdata)
                    continue;
                if ("spriteCreatedDestroyCallback" === e)
                    continue;
                i[e] = t[e]
            }
        return i
    }
    e.prototype.trigger = function(t, e, i) {
        if (!this.running_layout)
            return !1;
        var n = this.running_layout.event_sheet;
        if (!n)
            return !1;
        var r, s, o, a = !1;
        k++;
        var h = n.deep_includes;
        for (s = 0,
        o = h.length; s < o; ++s)
            r = this.triggerOnSheet(t, e, h[s], i),
            a = a || r;
        return r = this.triggerOnSheet(t, e, n, i),
        k--,
        a = a || r
    }
    ,
    e.prototype.triggerOnSheet = function(t, e, i, n) {
        var r, s, o, a, h = !1;
        if (e)
            for (o = this.triggerOnSheetForTypeName(t, e, e.type.name, i, n),
            h = h || o,
            r = 0,
            s = (a = e.type.families).length; r < s; ++r)
                o = this.triggerOnSheetForTypeName(t, e, a[r].name, i, n),
                h = h || o;
        else
            o = this.triggerOnSheetForTypeName(t, e, "system", i, n),
            h = h || o;
        return h
    }
    ,
    e.prototype.triggerOnSheetForTypeName = function(t, e, i, n, r) {
        var s, o, a, h, c = !1, l = !1, u = void 0 !== r, p = (u ? n.fasttriggers : n.triggers)[i];
        if (!p)
            return c;
        var d, f = null;
        for (s = 0,
        o = p.length; s < o; ++s)
            if (p[s].method == t) {
                f = p[s].evs;
                break
            }
        if (!f)
            return c;
        if (!(d = u ? f[r] : f))
            return null;
        for (s = 0,
        o = d.length; s < o; s++)
            a = d[s][0],
            h = d[s][1],
            l = this.executeSingleTrigger(e, i, a, h),
            c = c || l;
        return c
    }
    ,
    e.prototype.executeSingleTrigger = function(t, e, i, n) {
        var r, s, o = !1;
        this.trigger_depth++;
        var a = this.getCurrentEventStack().current_event;
        a && this.pushCleanSol(a.solModifiersIncludingParents);
        var h = this.trigger_depth > 1;
        this.pushCleanSol(i.solModifiersIncludingParents),
        h && this.pushLocalVarStack();
        var c = this.pushEventStack(i);
        if (c.current_event = i,
        t) {
            var l = this.types[e].getCurrentSol();
            l.select_all = !1,
            cr.clearArray(l.instances),
            l.instances[0] = t,
            this.types[e].applySolToContainer()
        }
        var u = !0;
        if (i.parent) {
            for (var p = c.temp_parents_arr, d = i.parent; d; )
                p.push(d),
                d = d.parent;
            for (p.reverse(),
            r = 0,
            s = p.length; r < s; r++)
                if (!p[r].run_pretrigger()) {
                    u = !1;
                    break
                }
        }
        return u && (this.execcount++,
        i.orblock ? i.run_orblocktrigger(n) : i.run(),
        o = o || c.last_event_true),
        this.popEventStack(),
        h && this.popLocalVarStack(),
        this.popSol(i.solModifiersIncludingParents),
        a && this.popSol(a.solModifiersIncludingParents),
        this.hasPendingInstances && 0 === this.isInOnDestroy && 0 === k && !this.isRunningEvents && this.ClearDeathRow(),
        this.trigger_depth--,
        o
    }
    ,
    e.prototype.getCurrentCondition = function() {
        var t = this.getCurrentEventStack();
        return t.current_event.conditions[t.cndindex]
    }
    ,
    e.prototype.getCurrentConditionObjectType = function() {
        return this.getCurrentCondition().type
    }
    ,
    e.prototype.isCurrentConditionFirst = function() {
        return 0 === this.getCurrentEventStack().cndindex
    }
    ,
    e.prototype.getCurrentAction = function() {
        var t = this.getCurrentEventStack();
        return t.current_event.actions[t.actindex]
    }
    ,
    e.prototype.pushLocalVarStack = function() {
        this.localvar_stack_index++,
        this.localvar_stack_index >= this.localvar_stack.length && this.localvar_stack.push([])
    }
    ,
    e.prototype.popLocalVarStack = function() {
        this.localvar_stack_index--
    }
    ,
    e.prototype.getCurrentLocalVarStack = function() {
        return this.localvar_stack[this.localvar_stack_index]
    }
    ,
    e.prototype.pushEventStack = function(t) {
        this.event_stack_index++,
        this.event_stack_index >= this.event_stack.length && this.event_stack.push(new cr.eventStackFrame);
        var e = this.getCurrentEventStack();
        return e.reset(t),
        e
    }
    ,
    e.prototype.popEventStack = function() {
        this.event_stack_index--
    }
    ,
    e.prototype.getCurrentEventStack = function() {
        return this.event_stack[this.event_stack_index]
    }
    ,
    e.prototype.pushLoopStack = function(t) {
        this.loop_stack_index++,
        this.loop_stack_index >= this.loop_stack.length && this.loop_stack.push(cr.seal({
            name: t,
            index: 0,
            stopped: !1
        }));
        var e = this.getCurrentLoop();
        return e.name = t,
        e.index = 0,
        e.stopped = !1,
        e
    }
    ,
    e.prototype.popLoopStack = function() {
        this.loop_stack_index--
    }
    ,
    e.prototype.getCurrentLoop = function() {
        return this.loop_stack[this.loop_stack_index]
    }
    ,
    e.prototype.getEventVariableByName = function(t, e) {
        for (var i, n, r, s, o, a; e; ) {
            for (i = 0,
            n = e.subevents.length; i < n; i++)
                if ((a = e.subevents[i])instanceof cr.eventvariable && cr.equals_nocase(t, a.name))
                    return a;
            e = e.parent
        }
        for (i = 0,
        n = this.eventsheets_by_index.length; i < n; i++)
            for (r = 0,
            s = (o = this.eventsheets_by_index[i]).events.length; r < s; r++)
                if ((a = o.events[r])instanceof cr.eventvariable && cr.equals_nocase(t, a.name))
                    return a;
        return null
    }
    ,
    e.prototype.getLayoutBySid = function(t) {
        var e, i;
        for (e = 0,
        i = this.layouts_by_index.length; e < i; e++)
            if (this.layouts_by_index[e].sid === t)
                return this.layouts_by_index[e];
        return null
    }
    ,
    e.prototype.getObjectTypeBySid = function(t) {
        var e, i;
        for (e = 0,
        i = this.types_by_index.length; e < i; e++)
            if (this.types_by_index[e].sid === t)
                return this.types_by_index[e];
        return null
    }
    ,
    e.prototype.getGroupBySid = function(t) {
        var e, i;
        for (e = 0,
        i = this.allGroups.length; e < i; e++)
            if (this.allGroups[e].sid === t)
                return this.allGroups[e];
        return null
    }
    ,
    e.prototype.doCanvasSnapshot = function(t, e) {
        this.snapshotCanvas = [t, e],
        this.redraw = !0
    }
    ,
    e.prototype.signalContinuousPreview = function() {
        this.signalledContinuousPreview = !0
    }
    ,
    e.prototype.handleSaveLoad = function() {
        var t = this
          , e = this.saveToSlot
          , i = this.lastSaveJson
          , n = this.loadFromSlot
          , r = !1;
        if (this.signalledContinuousPreview && (r = !0,
        e = "__c2_continuouspreview",
        this.signalledContinuousPreview = !1),
        e.length) {
            if (this.ClearDeathRow(),
            i = this.saveToJSONString(),
            E() && !this.isCocoonJs)
                !function(t, e, i, n) {
                    try {
                        var r = indexedDB.open("_C2SaveStates");
                        r.onupgradeneeded = O,
                        r.onerror = n,
                        r.onsuccess = function(r) {
                            var s = r.target.result;
                            s.onerror = n,
                            s.transaction(["saves"], "readwrite").objectStore("saves").put({
                                slot: t,
                                data: e
                            }).onsuccess = i
                        }
                    } catch (t) {
                        n(t)
                    }
                }(e, i, (function() {
                    cr.logexport("Saved state to IndexedDB storage (" + i.length + " bytes)"),
                    t.lastSaveJson = i,
                    t.trigger(cr.system_object.prototype.cnds.OnSaveComplete, null),
                    t.lastSaveJson = "",
                    i = "",
                    r && P()
                }
                ), (function(n) {
                    try {
                        localStorage.setItem("__c2save_" + e, i),
                        cr.logexport("Saved state to WebStorage (" + i.length + " bytes)"),
                        t.lastSaveJson = i,
                        t.trigger(cr.system_object.prototype.cnds.OnSaveComplete, null),
                        t.lastSaveJson = "",
                        i = "",
                        r && P()
                    } catch (e) {
                        cr.logexport("Failed to save game state: " + n + "; " + e),
                        t.trigger(cr.system_object.prototype.cnds.OnSaveFailed, null)
                    }
                }
                ));
            else
                try {
                    localStorage.setItem("__c2save_" + e, i),
                    cr.logexport("Saved state to WebStorage (" + i.length + " bytes)"),
                    t.lastSaveJson = i,
                    this.trigger(cr.system_object.prototype.cnds.OnSaveComplete, null),
                    t.lastSaveJson = "",
                    i = "",
                    r && P()
                } catch (e) {
                    cr.logexport("Error saving to WebStorage: " + e),
                    t.trigger(cr.system_object.prototype.cnds.OnSaveFailed, null)
                }
            this.saveToSlot = "",
            this.loadFromSlot = "",
            this.loadFromJson = null
        }
        if (n.length) {
            if (E() && !this.isCocoonJs)
                !function(t, e, i) {
                    try {
                        var n = indexedDB.open("_C2SaveStates");
                        n.onupgradeneeded = O,
                        n.onerror = i,
                        n.onsuccess = function(n) {
                            var r = n.target.result;
                            r.onerror = i;
                            var s = r.transaction(["saves"]).objectStore("saves").get(t);
                            s.onsuccess = function(t) {
                                s.result ? e(s.result.data) : e(null)
                            }
                        }
                    } catch (t) {
                        i(t)
                    }
                }(n, (function(e) {
                    e ? (t.loadFromJson = e,
                    cr.logexport("Loaded state from IndexedDB storage (" + t.loadFromJson.length + " bytes)")) : (t.loadFromJson = localStorage.getItem("__c2save_" + n) || "",
                    cr.logexport("Loaded state from WebStorage (" + t.loadFromJson.length + " bytes)")),
                    t.suspendDrawing = !1,
                    t.loadFromJson || (t.loadFromJson = null,
                    t.trigger(cr.system_object.prototype.cnds.OnLoadFailed, null))
                }
                ), (function(e) {
                    t.loadFromJson = localStorage.getItem("__c2save_" + n) || "",
                    cr.logexport("Loaded state from WebStorage (" + t.loadFromJson.length + " bytes)"),
                    t.suspendDrawing = !1,
                    t.loadFromJson || (t.loadFromJson = null,
                    t.trigger(cr.system_object.prototype.cnds.OnLoadFailed, null))
                }
                ));
            else {
                try {
                    this.loadFromJson = localStorage.getItem("__c2save_" + n) || "",
                    cr.logexport("Loaded state from WebStorage (" + this.loadFromJson.length + " bytes)")
                } catch (t) {
                    this.loadFromJson = null
                }
                this.suspendDrawing = !1,
                t.loadFromJson || (t.loadFromJson = null,
                t.trigger(cr.system_object.prototype.cnds.OnLoadFailed, null))
            }
            this.loadFromSlot = "",
            this.saveToSlot = ""
        }
        null !== this.loadFromJson && (this.ClearDeathRow(),
        this.loadFromJSONString(this.loadFromJson) ? (this.lastSaveJson = this.loadFromJson,
        this.trigger(cr.system_object.prototype.cnds.OnLoadComplete, null),
        this.lastSaveJson = "") : t.trigger(cr.system_object.prototype.cnds.OnLoadFailed, null),
        this.loadFromJson = null)
    }
    ,
    e.prototype.saveToJSONString = function() {
        var t, e, i, n, r, s, o, a, h, c, l, u, p = {
            c2save: !0,
            version: 1,
            rt: {
                time: this.kahanTime.sum,
                walltime: this.wallTime.sum,
                timescale: this.timescale,
                tickcount: this.tickcount,
                execcount: this.execcount,
                next_uid: this.next_uid,
                running_layout: this.running_layout.sid,
                start_time_offset: Date.now() - this.start_time
            },
            types: {},
            layouts: {},
            events: {
                groups: {},
                cnds: {},
                acts: {},
                vars: {}
            }
        };
        for (t = 0,
        e = this.types_by_index.length; t < e; t++)
            if (!(r = this.types_by_index[t]).is_family && !this.typeHasNoSaveBehavior(r)) {
                for (o = {
                    instances: []
                },
                cr.hasAnyOwnProperty(r.extra) && (o.ex = R(r.extra)),
                i = 0,
                n = r.instances.length; i < n; i++)
                    o.instances.push(this.saveInstanceToJSON(r.instances[i]));
                p.types[r.sid.toString()] = o
            }
        for (t = 0,
        e = this.layouts_by_index.length; t < e; t++)
            s = this.layouts_by_index[t],
            p.layouts[s.sid.toString()] = s.saveToJSON();
        var d = p.events.groups;
        for (t = 0,
        e = this.allGroups.length; t < e; t++)
            d[(a = this.allGroups[t]).sid.toString()] = this.groups_by_name[a.group_name].group_active;
        var f = p.events.cnds;
        for (u in this.cndsBySid)
            this.cndsBySid.hasOwnProperty(u) && (h = this.cndsBySid[u],
            cr.hasAnyOwnProperty(h.extra) && (f[u] = {
                ex: R(h.extra)
            }));
        var g = p.events.acts;
        for (u in this.actsBySid)
            this.actsBySid.hasOwnProperty(u) && (c = this.actsBySid[u],
            cr.hasAnyOwnProperty(c.extra) && (g[u] = {
                ex: R(c.extra)
            }));
        var y = p.events.vars;
        for (u in this.varsBySid)
            this.varsBySid.hasOwnProperty(u) && ((l = this.varsBySid[u]).is_constant || l.parent && !l.is_static || (y[u] = l.data));
        return p.system = this.system.saveToJSON(),
        JSON.stringify(p)
    }
    ,
    e.prototype.refreshUidMap = function() {
        var t, e, i, n, r, s;
        for (this.objectsByUid = {},
        t = 0,
        e = this.types_by_index.length; t < e; t++)
            if (!(i = this.types_by_index[t]).is_family)
                for (n = 0,
                r = i.instances.length; n < r; n++)
                    s = i.instances[n],
                    this.objectsByUid[s.uid.toString()] = s
    }
    ,
    e.prototype.loadFromJSONString = function(t) {
        var e;
        try {
            e = JSON.parse(t)
        } catch (t) {
            return !1
        }
        if (!e.c2save)
            return !1;
        if (e.version > 1)
            return !1;
        this.isLoadingState = !0;
        var i = e.rt;
        this.kahanTime.reset(),
        this.kahanTime.sum = i.time,
        this.wallTime.reset(),
        this.wallTime.sum = i.walltime || 0,
        this.timescale = i.timescale,
        this.tickcount = i.tickcount,
        this.execcount = i.execcount,
        this.start_time = Date.now() - i.start_time_offset;
        var n, r, s, o, a, h, c, l, u, p, d, f, g, y, m, _, v, b = i.running_layout;
        if (b !== this.running_layout.sid) {
            var w = this.getLayoutBySid(b);
            if (!w)
                return;
            this.doChangeLayout(w)
        }
        var x = e.types;
        for (c in x)
            if (x.hasOwnProperty(c)) {
                if (!(l = this.getObjectTypeBySid(parseInt(c, 10))) || l.is_family || this.typeHasNoSaveBehavior(l))
                    continue;
                for (x[c].ex ? l.extra = x[c].ex : cr.wipe(l.extra),
                u = l.instances,
                p = x[c].instances,
                n = 0,
                r = cr.min(u.length, p.length); n < r; n++)
                    this.loadInstanceFromJSON(u[n], p[n]);
                for (n = p.length,
                r = u.length; n < r; n++)
                    this.DestroyInstance(u[n]);
                for (n = u.length,
                r = p.length; n < r; n++)
                    y = null,
                    l.plugin.is_world && !(y = this.running_layout.getLayerBySid(p[n].w.l)) || (d = this.createInstanceFromInit(l.default_instance, y, !1, 0, 0, !0),
                    this.loadInstanceFromJSON(d, p[n]));
                l.stale_iids = !0
            }
        this.ClearDeathRow(),
        this.refreshUidMap();
        var T = e.layouts;
        for (c in T)
            if (T.hasOwnProperty(c)) {
                if (!(g = this.getLayoutBySid(parseInt(c, 10))))
                    continue;
                g.loadFromJSON(T[c])
            }
        var S = e.events.groups;
        for (c in S)
            S.hasOwnProperty(c) && (m = this.getGroupBySid(parseInt(c, 10))) && this.groups_by_name[m.group_name] && this.groups_by_name[m.group_name].setGroupActive(S[c]);
        var C = e.events.cnds;
        for (c in this.cndsBySid)
            this.cndsBySid.hasOwnProperty(c) && (C.hasOwnProperty(c) ? this.cndsBySid[c].extra = C[c].ex : this.cndsBySid[c].extra = {});
        var A = e.events.acts;
        for (c in this.actsBySid)
            this.actsBySid.hasOwnProperty(c) && (A.hasOwnProperty(c) ? this.actsBySid[c].extra = A[c].ex : this.actsBySid[c].extra = {});
        var k = e.events.vars;
        for (c in k)
            k.hasOwnProperty(c) && this.varsBySid.hasOwnProperty(c) && (this.varsBySid[c].data = k[c]);
        for (this.next_uid = i.next_uid,
        this.isLoadingState = !1,
        n = 0,
        r = this.fireOnCreateAfterLoad.length; n < r; ++n)
            d = this.fireOnCreateAfterLoad[n],
            this.trigger(Object.getPrototypeOf(d.type.plugin).cnds.OnCreated, d);
        for (cr.clearArray(this.fireOnCreateAfterLoad),
        this.system.loadFromJSON(e.system),
        n = 0,
        r = this.types_by_index.length; n < r; n++)
            if (!(l = this.types_by_index[n]).is_family && !this.typeHasNoSaveBehavior(l))
                for (s = 0,
                o = l.instances.length; s < o; s++) {
                    if (d = l.instances[s],
                    l.is_contained)
                        for (_ = d.get_iid(),
                        cr.clearArray(d.siblings),
                        a = 0,
                        h = l.container.length; a < h; a++)
                            l !== (v = l.container[a]) && d.siblings.push(v.instances[_]);
                    if (d.afterLoad && d.afterLoad(),
                    d.behavior_insts)
                        for (a = 0,
                        h = d.behavior_insts.length; a < h; a++)
                            (f = d.behavior_insts[a]).afterLoad && f.afterLoad()
                }
        return this.redraw = !0,
        !0
    }
    ,
    e.prototype.saveInstanceToJSON = function(t, e) {
        var i, n, r, s, o, a = t.type, h = a.plugin, c = {};
        if (e ? c.c2 = !0 : c.uid = t.uid,
        cr.hasAnyOwnProperty(t.extra) && (c.ex = R(t.extra)),
        t.instance_vars && t.instance_vars.length)
            for (c.ivs = {},
            i = 0,
            n = t.instance_vars.length; i < n; i++)
                c.ivs[t.type.instvar_sids[i].toString()] = t.instance_vars[i];
        if (h.is_world) {
            if (r = {
                x: t.x,
                y: t.y,
                w: t.width,
                h: t.height,
                l: t.layer.sid,
                zi: t.get_zindex()
            },
            0 !== t.angle && (r.a = t.angle),
            1 !== t.opacity && (r.o = t.opacity),
            .5 !== t.hotspotX && (r.hX = t.hotspotX),
            .5 !== t.hotspotY && (r.hY = t.hotspotY),
            0 !== t.blend_mode && (r.bm = t.blend_mode),
            t.visible || (r.v = t.visible),
            t.collisionsEnabled || (r.ce = t.collisionsEnabled),
            -1 !== t.my_timescale && (r.mts = t.my_timescale),
            a.effect_types.length)
                for (r.fx = [],
                i = 0,
                n = a.effect_types.length; i < n; i++)
                    o = a.effect_types[i],
                    r.fx.push({
                        name: o.name,
                        active: t.active_effect_flags[o.index],
                        params: t.effect_params[o.index]
                    });
            c.w = r
        }
        if (t.behavior_insts && t.behavior_insts.length)
            for (c.behs = {},
            i = 0,
            n = t.behavior_insts.length; i < n; i++)
                (s = t.behavior_insts[i]).saveToJSON && (c.behs[s.type.sid.toString()] = s.saveToJSON());
        return t.saveToJSON && (c.data = t.saveToJSON()),
        c
    }
    ,
    e.prototype.getInstanceVarIndexBySid = function(t, e) {
        var i, n;
        for (i = 0,
        n = t.instvar_sids.length; i < n; i++)
            if (t.instvar_sids[i] === e)
                return i;
        return -1
    }
    ,
    e.prototype.getBehaviorIndexBySid = function(t, e) {
        var i, n;
        for (i = 0,
        n = t.behavior_insts.length; i < n; i++)
            if (t.behavior_insts[i].type.sid === e)
                return i;
        return -1
    }
    ,
    e.prototype.loadInstanceFromJSON = function(t, e, i) {
        var n, r, s, o, a, h, c, l, u, p, d, f = t.type, g = f.plugin;
        if (i) {
            if (!e.c2)
                return
        } else
            t.uid = e.uid;
        if (e.ex ? t.extra = e.ex : cr.wipe(t.extra),
        a = e.ivs)
            for (n in a)
                if (a.hasOwnProperty(n)) {
                    if ((o = this.getInstanceVarIndexBySid(f, parseInt(n, 10))) < 0 || o >= t.instance_vars.length)
                        continue;
                    null === (p = a[n]) && (p = NaN),
                    t.instance_vars[o] = p
                }
        if (g.is_world) {
            if (h = e.w,
            t.layer.sid !== h.l && (d = t.layer,
            t.layer = this.running_layout.getLayerBySid(h.l),
            t.layer ? (d.removeFromInstanceList(t, !0),
            t.layer.appendToInstanceList(t, !0),
            t.set_bbox_changed(),
            t.layer.setZIndicesStaleFrom(0)) : (t.layer = d,
            i || this.DestroyInstance(t))),
            t.x = h.x,
            t.y = h.y,
            t.width = h.w,
            t.height = h.h,
            t.zindex = h.zi,
            t.angle = h.hasOwnProperty("a") ? h.a : 0,
            t.opacity = h.hasOwnProperty("o") ? h.o : 1,
            t.hotspotX = h.hasOwnProperty("hX") ? h.hX : .5,
            t.hotspotY = h.hasOwnProperty("hY") ? h.hY : .5,
            t.visible = !h.hasOwnProperty("v") || h.v,
            t.collisionsEnabled = !h.hasOwnProperty("ce") || h.ce,
            t.my_timescale = h.hasOwnProperty("mts") ? h.mts : -1,
            t.blend_mode = h.hasOwnProperty("bm") ? h.bm : 0,
            t.compositeOp = cr.effectToCompositeOp(t.blend_mode),
            this.gl && cr.setGLBlend(t, t.blend_mode, this.gl),
            t.set_bbox_changed(),
            h.hasOwnProperty("fx"))
                for (r = 0,
                s = h.fx.length; r < s; r++)
                    (c = f.getEffectIndexByName(h.fx[r].name)) < 0 || (t.active_effect_flags[c] = h.fx[r].active,
                    t.effect_params[c] = h.fx[r].params);
            t.updateActiveEffects()
        }
        if (l = e.behs)
            for (n in l)
                if (l.hasOwnProperty(n)) {
                    if ((u = this.getBehaviorIndexBySid(t, parseInt(n, 10))) < 0)
                        continue;
                    t.behavior_insts[u].loadFromJSON(l[n])
                }
        e.data && t.loadFromJSON(e.data)
    }
    ,
    e.prototype.fetchLocalFileViaCordova = function(t, e, i) {
        var n = cordova.file.applicationDirectory + "www/" + t;
        window.resolveLocalFileSystemURL(n, (function(t) {
            t.file(e, i)
        }
        ), i)
    }
    ,
    e.prototype.fetchLocalFileViaCordovaAsText = function(t, e, i) {
        this.fetchLocalFileViaCordova(t, (function(t) {
            var n = new FileReader;
            n.onload = function(t) {
                e(t.target.result)
            }
            ,
            n.onerror = i,
            n.readAsText(t)
        }
        ), i)
    }
    ;
    var N = []
      , I = 0;
    e.prototype.maybeStartNextArrayBufferRead = function() {
        if (N.length && !(I >= 8)) {
            I++;
            var t = N.shift();
            this.doFetchLocalFileViaCordovaAsArrayBuffer(t.filename, t.successCallback, t.errorCallback)
        }
    }
    ,
    e.prototype.fetchLocalFileViaCordovaAsArrayBuffer = function(t, e, i) {
        var n = this;
        N.push({
            filename: t,
            successCallback: function(t) {
                I--,
                n.maybeStartNextArrayBufferRead(),
                e(t)
            },
            errorCallback: function(t) {
                I--,
                n.maybeStartNextArrayBufferRead(),
                i(t)
            }
        }),
        this.maybeStartNextArrayBufferRead()
    }
    ,
    e.prototype.doFetchLocalFileViaCordovaAsArrayBuffer = function(t, e, i) {
        this.fetchLocalFileViaCordova(t, (function(t) {
            var i = new FileReader;
            i.onload = function(t) {
                e(t.target.result)
            }
            ,
            i.readAsArrayBuffer(t)
        }
        ), i)
    }
    ,
    e.prototype.fetchLocalFileViaCordovaAsURL = function(t, e, i) {
        var n = ""
          , r = t.toLowerCase()
          , s = r.substr(r.length - 4)
          , o = r.substr(r.length - 5);
        ".mp4" === s ? n = "video/mp4" : ".webm" === o ? n = "video/webm" : ".m4a" === s ? n = "audio/mp4" : ".mp3" === s && (n = "audio/mpeg"),
        this.fetchLocalFileViaCordovaAsArrayBuffer(t, (function(t) {
            var i = new Blob([t],{
                type: n
            })
              , r = URL.createObjectURL(i);
            e(r)
        }
        ), i)
    }
    ,
    e.prototype.isAbsoluteUrl = function(t) {
        return /^(?:[a-z]+:)?\/\//.test(t) || "data:" === t.substr(0, 5) || "blob:" === t.substr(0, 5)
    }
    ,
    e.prototype.setImageSrc = function(t, e) {
        this.isWKWebView && !this.isAbsoluteUrl(e) ? this.fetchLocalFileViaCordovaAsURL(e, (function(e) {
            t.src = e
        }
        ), (function(t) {
            alert("Failed to load image: " + t)
        }
        )) : t.src = e
    }
    ,
    e.prototype.setCtxImageSmoothingEnabled = function(t, e) {
        void 0 !== t.imageSmoothingEnabled ? t.imageSmoothingEnabled = e : (t.webkitImageSmoothingEnabled = e,
        t.mozImageSmoothingEnabled = e,
        t.msImageSmoothingEnabled = e)
    }
    ,
    cr.runtime = e,
    cr.createRuntime = function(t) {
        return new e(document.getElementById(t))
    }
    ,
    cr.createDCRuntime = function(t, i) {
        return new e({
            dc: !0,
            width: t,
            height: i
        })
    }
    ,
    window.cr_createRuntime = cr.createRuntime,
    window.cr_createDCRuntime = cr.createDCRuntime,
    window.createCocoonJSRuntime = function() {
        window.c2cocoonjs = !0;
        var t = document.createElement("screencanvas") || document.createElement("canvas");
        t.screencanvas = !0,
        document.body.appendChild(t);
        var i = new e(t);
        return window.c2runtime = i,
        window.addEventListener("orientationchange", (function() {
            window.c2runtime.setSize(window.innerWidth, window.innerHeight)
        }
        )),
        window.c2runtime.setSize(window.innerWidth, window.innerHeight),
        i
    }
    ,
    window.createEjectaRuntime = function() {
        var t = new e(document.getElementById("canvas"));
        return window.c2runtime = t,
        window.c2runtime.setSize(window.innerWidth, window.innerHeight),
        t
    }
}(),
window.cr_getC2Runtime = function() {
    var t = document.getElementById("c2canvas");
    return t ? t.c2runtime : window.c2runtime ? window.c2runtime : null
}
,
window.cr_getSnapshot = function(t, e) {
    var i = window.cr_getC2Runtime();
    i && i.doCanvasSnapshot(t, e)
}
,
window.cr_sizeCanvas = function(t, e) {
    if (0 !== t && 0 !== e) {
        var i = window.cr_getC2Runtime();
        i && i.setSize(t, e)
    }
}
,
window.cr_setSuspended = function(t) {
    var e = window.cr_getC2Runtime();
    e && e.setSuspended(t)
}
,
function() {
    function t(t, e) {
        this.runtime = t,
        this.event_sheet = null,
        this.scrollX = this.runtime.original_width / 2,
        this.scrollY = this.runtime.original_height / 2,
        this.scale = 1,
        this.angle = 0,
        this.first_visit = !0,
        this.name = e[0],
        this.originalWidth = e[1],
        this.originalHeight = e[2],
        this.width = e[1],
        this.height = e[2],
        this.unbounded_scrolling = e[3],
        this.sheetname = e[4],
        this.sid = e[5];
        var i, n, r = e[6];
        for (this.layers = [],
        this.initial_types = [],
        i = 0,
        n = r.length; i < n; i++) {
            var s = new cr.layer(this,r[i]);
            s.number = i,
            cr.seal(s),
            this.layers.push(s)
        }
        var o = e[7];
        for (this.initial_nonworld = [],
        i = 0,
        n = o.length; i < n; i++) {
            var a = o[i]
              , h = this.runtime.types_by_index[a[1]];
            h.default_instance || (h.default_instance = a),
            this.initial_nonworld.push(a),
            -1 === this.initial_types.indexOf(h) && this.initial_types.push(h)
        }
        for (this.effect_types = [],
        this.active_effect_types = [],
        this.shaders_preserve_opaqueness = !0,
        this.effect_params = [],
        i = 0,
        n = e[8].length; i < n; i++)
            this.effect_types.push({
                id: e[8][i][0],
                name: e[8][i][1],
                shaderindex: -1,
                preservesOpaqueness: !1,
                active: !0,
                index: i
            }),
            this.effect_params.push(e[8][i][2].slice(0));
        this.updateActiveEffects(),
        this.rcTex = new cr.rect(0,0,1,1),
        this.rcTex2 = new cr.rect(0,0,1,1),
        this.persist_data = {}
    }
    t.prototype.saveObjectToPersist = function(t) {
        var e = t.type.sid.toString();
        this.persist_data.hasOwnProperty(e) || (this.persist_data[e] = []),
        this.persist_data[e].push(this.runtime.saveInstanceToJSON(t))
    }
    ,
    t.prototype.hasOpaqueBottomLayer = function() {
        var t = this.layers[0];
        return !t.transparent && 1 === t.opacity && !t.forceOwnTexture && t.visible
    }
    ,
    t.prototype.updateActiveEffects = function() {
        var t, e, i;
        for (cr.clearArray(this.active_effect_types),
        this.shaders_preserve_opaqueness = !0,
        t = 0,
        e = this.effect_types.length; t < e; t++)
            (i = this.effect_types[t]).active && (this.active_effect_types.push(i),
            i.preservesOpaqueness || (this.shaders_preserve_opaqueness = !1))
    }
    ,
    t.prototype.getEffectByName = function(t) {
        var e, i, n;
        for (e = 0,
        i = this.effect_types.length; e < i; e++)
            if ((n = this.effect_types[e]).name === t)
                return n;
        return null
    }
    ;
    var e = [];
    function i(t, e) {
        return t.zindex - e.zindex
    }
    var n = !0;
    t.prototype.startRunning = function() {
        var t, r, s, o, a, h, c, l, u, p, d, f, g, y;
        for (this.sheetname && (this.event_sheet = this.runtime.eventsheets[this.sheetname],
        this.event_sheet.updateDeepIncludes()),
        this.runtime.running_layout = this,
        this.width = this.originalWidth,
        this.height = this.originalHeight,
        this.scrollX = this.runtime.original_width / 2,
        this.scrollY = this.runtime.original_height / 2,
        t = 0,
        s = this.runtime.types_by_index.length; t < s; t++)
            if (!(a = this.runtime.types_by_index[t]).is_family)
                for (r = 0,
                o = (h = a.instances).length; r < o; r++)
                    if ((l = h[r]).layer) {
                        var m = l.layer.number;
                        m >= this.layers.length && (m = this.layers.length - 1),
                        l.layer = this.layers[m],
                        -1 === l.layer.instances.indexOf(l) && l.layer.instances.push(l),
                        l.layer.zindices_stale = !0
                    }
        if (!n)
            for (t = 0,
            s = this.layers.length; t < s; ++t)
                this.layers[t].instances.sort(i);
        for (cr.clearArray(e),
        this.boundScrolling(),
        t = 0,
        s = this.layers.length; t < s; t++)
            (y = this.layers[t]).createInitialInstances(),
            y.updateViewport(null);
        var _ = !1;
        if (!this.first_visit) {
            for (f in this.persist_data)
                if (this.persist_data.hasOwnProperty(f)) {
                    if (!(a = this.runtime.getObjectTypeBySid(parseInt(f, 10))) || a.is_family || !this.runtime.typeHasPersistBehavior(a))
                        continue;
                    for (t = 0,
                    s = (g = this.persist_data[f]).length; t < s; t++)
                        y = null,
                        a.plugin.is_world && !(y = this.getLayerBySid(g[t].w.l)) || (l = this.runtime.createInstanceFromInit(a.default_instance, y, !1, 0, 0, !0),
                        this.runtime.loadInstanceFromJSON(l, g[t]),
                        _ = !0,
                        e.push(l));
                    cr.clearArray(g)
                }
            for (t = 0,
            s = this.layers.length; t < s; t++)
                this.layers[t].instances.sort(i),
                this.layers[t].zindices_stale = !0
        }
        for (_ && (this.runtime.ClearDeathRow(),
        this.runtime.refreshUidMap()),
        t = 0; t < e.length; t++)
            if ((l = e[t]).type.is_contained)
                for (u = l.get_iid(),
                r = 0,
                o = l.type.container.length; r < o; r++)
                    p = l.type.container[r],
                    l.type !== p && (p.instances.length > u ? l.siblings.push(p.instances[u]) : p.default_instance && (d = this.runtime.createInstanceFromInit(p.default_instance, l.layer, !0, l.x, l.y, !0),
                    this.runtime.ClearDeathRow(),
                    p.updateIIDs(),
                    l.siblings.push(d),
                    e.push(d)));
        for (t = 0,
        s = this.initial_nonworld.length; t < s; t++)
            c = this.initial_nonworld[t],
            (a = this.runtime.types_by_index[c[1]]).is_contained || (l = this.runtime.createInstanceFromInit(this.initial_nonworld[t], null, !0));
        if (this.runtime.changelayout = null,
        this.runtime.ClearDeathRow(),
        this.runtime.ctx && !this.runtime.isDomFree)
            for (t = 0,
            s = this.runtime.types_by_index.length; t < s; t++)
                !(p = this.runtime.types_by_index[t]).is_family && p.instances.length && p.preloadCanvas2D && p.preloadCanvas2D(this.runtime.ctx);
        if (this.runtime.isLoadingState)
            cr.shallowAssignArray(this.runtime.fireOnCreateAfterLoad, e);
        else
            for (t = 0,
            s = e.length; t < s; t++)
                l = e[t],
                this.runtime.trigger(Object.getPrototypeOf(l.type.plugin).cnds.OnCreated, l);
        cr.clearArray(e),
        this.runtime.isLoadingState || this.runtime.trigger(cr.system_object.prototype.cnds.OnLayoutStart, null),
        this.first_visit = !1
    }
    ,
    t.prototype.createGlobalNonWorlds = function() {
        var t, e, i, n, r;
        for (t = 0,
        e = 0,
        i = this.initial_nonworld.length; t < i; t++)
            n = this.initial_nonworld[t],
            (r = this.runtime.types_by_index[n[1]]).global ? r.is_contained || this.runtime.createInstanceFromInit(n, null, !0) : (this.initial_nonworld[e] = n,
            e++);
        cr.truncateArray(this.initial_nonworld, e)
    }
    ,
    t.prototype.stopRunning = function() {
        var t, e, i, r, s, o, a;
        if (this.runtime.isLoadingState || this.runtime.trigger(cr.system_object.prototype.cnds.OnLayoutEnd, null),
        this.runtime.isEndingLayout = !0,
        cr.clearArray(this.runtime.system.waits),
        !this.first_visit)
            for (t = 0,
            e = this.layers.length; t < e; t++)
                for (this.layers[t].updateZIndices(),
                i = 0,
                r = (s = this.layers[t].instances).length; i < r; i++)
                    (o = s[i]).type.global || this.runtime.typeHasPersistBehavior(o.type) && this.saveObjectToPersist(o);
        for (t = 0,
        e = this.layers.length; t < e; t++) {
            for (i = 0,
            r = (s = this.layers[t].instances).length; i < r; i++)
                (o = s[i]).type.global || this.runtime.DestroyInstance(o);
            this.runtime.ClearDeathRow(),
            cr.clearArray(s),
            this.layers[t].zindices_stale = !0
        }
        for (t = 0,
        e = this.runtime.types_by_index.length; t < e; t++)
            if (!((a = this.runtime.types_by_index[t]).global || a.plugin.is_world || a.plugin.singleglobal || a.is_family)) {
                for (i = 0,
                r = a.instances.length; i < r; i++)
                    this.runtime.DestroyInstance(a.instances[i]);
                this.runtime.ClearDeathRow()
            }
        n = !1,
        this.runtime.isEndingLayout = !1
    }
    ;
    var r = new cr.rect(0,0,0,0);
    function s(t, e) {
        this.layout = t,
        this.runtime = t.runtime,
        this.instances = [],
        this.scale = 1,
        this.angle = 0,
        this.disableAngle = !1,
        this.tmprect = new cr.rect(0,0,0,0),
        this.tmpquad = new cr.quad,
        this.viewLeft = 0,
        this.viewRight = 0,
        this.viewTop = 0,
        this.viewBottom = 0,
        this.zindices_stale = !1,
        this.zindices_stale_from = -1,
        this.clear_earlyz_index = 0,
        this.name = e[0],
        this.index = e[1],
        this.sid = e[2],
        this.visible = e[3],
        this.background_color = e[4],
        this.transparent = e[5],
        this.parallaxX = e[6],
        this.parallaxY = e[7],
        this.opacity = e[8],
        this.forceOwnTexture = e[9],
        this.useRenderCells = e[10],
        this.zoomRate = e[11],
        this.blend_mode = e[12],
        this.effect_fallback = e[13],
        this.compositeOp = "source-over",
        this.srcBlend = 0,
        this.destBlend = 0,
        this.render_grid = null,
        this.last_render_list = a(),
        this.render_list_stale = !0,
        this.last_render_cells = new cr.rect(0,0,-1,-1),
        this.cur_render_cells = new cr.rect(0,0,-1,-1),
        this.useRenderCells && (this.render_grid = new cr.RenderGrid(this.runtime.original_width,this.runtime.original_height)),
        this.render_offscreen = !1;
        var i, n, r = e[14];
        for (this.startup_initial_instances = [],
        this.initial_instances = [],
        this.created_globals = [],
        i = 0,
        n = r.length; i < n; i++) {
            var s = r[i]
              , o = this.runtime.types_by_index[s[1]];
            o.default_instance || (o.default_instance = s,
            o.default_layerindex = this.index),
            this.initial_instances.push(s),
            -1 === this.layout.initial_types.indexOf(o) && this.layout.initial_types.push(o)
        }
        for (cr.shallowAssignArray(this.startup_initial_instances, this.initial_instances),
        this.effect_types = [],
        this.active_effect_types = [],
        this.shaders_preserve_opaqueness = !0,
        this.effect_params = [],
        i = 0,
        n = e[15].length; i < n; i++)
            this.effect_types.push({
                id: e[15][i][0],
                name: e[15][i][1],
                shaderindex: -1,
                preservesOpaqueness: !1,
                active: !0,
                index: i
            }),
            this.effect_params.push(e[15][i][2].slice(0));
        this.updateActiveEffects(),
        this.rcTex = new cr.rect(0,0,1,1),
        this.rcTex2 = new cr.rect(0,0,1,1)
    }
    t.prototype.recreateInitialObjects = function(t, e, i, n, s) {
        var o, a;
        for (r.set(e, i, n, s),
        o = 0,
        a = this.layers.length; o < a; o++)
            this.layers[o].recreateInitialObjects(t, r)
    }
    ,
    t.prototype.draw = function(t) {
        var e, i, n, r, s = t, o = !1, a = !this.runtime.fullscreenScalingQuality;
        for (a && (this.runtime.layout_canvas || (this.runtime.layout_canvas = document.createElement("canvas"),
        (e = this.runtime.layout_canvas).width = this.runtime.draw_width,
        e.height = this.runtime.draw_height,
        this.runtime.layout_ctx = e.getContext("2d"),
        o = !0),
        e = this.runtime.layout_canvas,
        s = this.runtime.layout_ctx,
        e.width !== this.runtime.draw_width && (e.width = this.runtime.draw_width,
        o = !0),
        e.height !== this.runtime.draw_height && (e.height = this.runtime.draw_height,
        o = !0),
        o && this.runtime.setCtxImageSmoothingEnabled(s, this.runtime.linearSampling)),
        s.globalAlpha = 1,
        s.globalCompositeOperation = "source-over",
        this.runtime.clearBackground && !this.hasOpaqueBottomLayer() && s.clearRect(0, 0, this.runtime.draw_width, this.runtime.draw_height),
        i = 0,
        n = this.layers.length; i < n; i++)
            (r = this.layers[i]).visible && r.opacity > 0 && 11 !== r.blend_mode && (r.instances.length || !r.transparent) ? r.draw(s) : r.updateViewport(null);
        a && t.drawImage(e, 0, 0, this.runtime.width, this.runtime.height)
    }
    ,
    t.prototype.drawGL_earlyZPass = function(t) {
        var e, i;
        for (t.setEarlyZPass(!0),
        this.runtime.layout_tex || (this.runtime.layout_tex = t.createEmptyTexture(this.runtime.draw_width, this.runtime.draw_height, this.runtime.linearSampling)),
        this.runtime.layout_tex.c2width === this.runtime.draw_width && this.runtime.layout_tex.c2height === this.runtime.draw_height || (t.deleteTexture(this.runtime.layout_tex),
        this.runtime.layout_tex = t.createEmptyTexture(this.runtime.draw_width, this.runtime.draw_height, this.runtime.linearSampling)),
        t.setRenderingToTexture(this.runtime.layout_tex),
        this.runtime.fullscreenScalingQuality || t.setSize(this.runtime.draw_width, this.runtime.draw_height),
        e = this.layers.length - 1; e >= 0; --e)
            (i = this.layers[e]).visible && 1 === i.opacity && i.shaders_preserve_opaqueness && 0 === i.blend_mode && (i.instances.length || !i.transparent) ? i.drawGL_earlyZPass(t) : i.updateViewport(null);
        t.setEarlyZPass(!1)
    }
    ,
    t.prototype.drawGL = function(t) {
        var e, i, n, r = this.active_effect_types.length > 0 || this.runtime.uses_background_blending || !this.runtime.fullscreenScalingQuality || this.runtime.enableFrontToBack;
        for (r ? (this.runtime.layout_tex || (this.runtime.layout_tex = t.createEmptyTexture(this.runtime.draw_width, this.runtime.draw_height, this.runtime.linearSampling)),
        this.runtime.layout_tex.c2width === this.runtime.draw_width && this.runtime.layout_tex.c2height === this.runtime.draw_height || (t.deleteTexture(this.runtime.layout_tex),
        this.runtime.layout_tex = t.createEmptyTexture(this.runtime.draw_width, this.runtime.draw_height, this.runtime.linearSampling)),
        t.setRenderingToTexture(this.runtime.layout_tex),
        this.runtime.fullscreenScalingQuality || t.setSize(this.runtime.draw_width, this.runtime.draw_height)) : this.runtime.layout_tex && (t.setRenderingToTexture(null),
        t.deleteTexture(this.runtime.layout_tex),
        this.runtime.layout_tex = null),
        this.runtime.clearBackground && !this.hasOpaqueBottomLayer() && t.clear(0, 0, 0, 0),
        e = 0,
        i = this.layers.length; e < i; e++)
            (n = this.layers[e]).visible && n.opacity > 0 && (n.instances.length || !n.transparent) ? n.drawGL(t) : n.updateViewport(null);
        if (r)
            if (0 === this.active_effect_types.length || 1 === this.active_effect_types.length && this.runtime.fullscreenScalingQuality) {
                if (1 === this.active_effect_types.length) {
                    var s = this.active_effect_types[0].index;
                    t.switchProgram(this.active_effect_types[0].shaderindex),
                    t.setProgramParameters(null, 1 / this.runtime.draw_width, 1 / this.runtime.draw_height, 0, 0, 1, 1, this.scale, this.angle, 0, 0, this.runtime.draw_width / 2, this.runtime.draw_height / 2, this.runtime.kahanTime.sum, this.effect_params[s]),
                    t.programIsAnimated(this.active_effect_types[0].shaderindex) && (this.runtime.redraw = !0)
                } else
                    t.switchProgram(0);
                this.runtime.fullscreenScalingQuality || t.setSize(this.runtime.width, this.runtime.height),
                t.setRenderingToTexture(null),
                t.setDepthTestEnabled(!1),
                t.setOpacity(1),
                t.setTexture(this.runtime.layout_tex),
                t.setAlphaBlend(),
                t.resetModelView(),
                t.updateModelView();
                var o = this.runtime.width / 2
                  , a = this.runtime.height / 2;
                t.quad(-o, a, o, a, o, -a, -o, -a),
                t.setTexture(null),
                t.setDepthTestEnabled(!0)
            } else
                this.renderEffectChain(t, null, null, null)
    }
    ,
    t.prototype.getRenderTarget = function() {
        return this.active_effect_types.length > 0 || this.runtime.uses_background_blending || !this.runtime.fullscreenScalingQuality || this.runtime.enableFrontToBack ? this.runtime.layout_tex : null
    }
    ,
    t.prototype.getMinLayerScale = function() {
        var t, e, i, n = this.layers[0].getScale();
        for (t = 1,
        e = this.layers.length; t < e; t++)
            0 === (i = this.layers[t]).parallaxX && 0 === i.parallaxY || i.getScale() < n && (n = i.getScale());
        return n
    }
    ,
    t.prototype.scrollToX = function(t) {
        if (!this.unbounded_scrolling) {
            var e = this.runtime.draw_width * (1 / this.getMinLayerScale()) / 2;
            t > this.width - e && (t = this.width - e),
            t < e && (t = e)
        }
        this.scrollX !== t && (this.scrollX = t,
        this.runtime.redraw = !0)
    }
    ,
    t.prototype.scrollToY = function(t) {
        if (!this.unbounded_scrolling) {
            var e = this.runtime.draw_height * (1 / this.getMinLayerScale()) / 2;
            t > this.height - e && (t = this.height - e),
            t < e && (t = e)
        }
        this.scrollY !== t && (this.scrollY = t,
        this.runtime.redraw = !0)
    }
    ,
    t.prototype.boundScrolling = function() {
        this.scrollToX(this.scrollX),
        this.scrollToY(this.scrollY)
    }
    ,
    t.prototype.renderEffectChain = function(t, e, i, n) {
        var r = i ? i.active_effect_types : e ? e.active_effect_types : this.active_effect_types
          , s = 1
          , o = 0
          , a = 0
          , h = 0
          , c = this.runtime.draw_width
          , l = this.runtime.draw_height;
        i ? (s = i.layer.getScale(),
        o = i.layer.getAngle(),
        a = i.layer.viewLeft,
        h = i.layer.viewTop,
        c = i.layer.viewRight,
        l = i.layer.viewBottom) : e && (s = e.getScale(),
        o = e.getAngle(),
        a = e.viewLeft,
        h = e.viewTop,
        c = e.viewRight,
        l = e.viewBottom);
        var u, p, d, f, g, y = this.runtime.fx_tex, m = 0, _ = 1, v = this.runtime.draw_width, b = this.runtime.draw_height, w = v / 2, x = b / 2, T = e ? e.rcTex : this.rcTex, S = e ? e.rcTex2 : this.rcTex2, C = 0, A = 0, k = 0, E = 0, O = v, P = v, R = b, N = b, I = 0, L = 0, B = i ? i.layer.getAngle() : 0;
        if (i) {
            for (u = 0,
            p = r.length; u < p; u++)
                I += t.getProgramBoxExtendHorizontal(r[u].shaderindex),
                L += t.getProgramBoxExtendVertical(r[u].shaderindex);
            var D = i.bbox;
            if (C = e.layerToCanvas(D.left, D.top, !0, !0),
            k = e.layerToCanvas(D.left, D.top, !1, !0),
            O = e.layerToCanvas(D.right, D.bottom, !0, !0),
            R = e.layerToCanvas(D.right, D.bottom, !1, !0),
            0 !== B) {
                var F = e.layerToCanvas(D.right, D.top, !0, !0)
                  , M = e.layerToCanvas(D.right, D.top, !1, !0)
                  , j = e.layerToCanvas(D.left, D.bottom, !0, !0)
                  , W = e.layerToCanvas(D.left, D.bottom, !1, !0);
                d = Math.min(C, O, F, j),
                O = Math.max(C, O, F, j),
                C = d,
                d = Math.min(k, R, M, W),
                R = Math.max(k, R, M, W),
                k = d
            }
            C -= I,
            k -= L,
            O += I,
            R += L,
            S.left = C / v,
            S.top = 1 - k / b,
            S.right = O / v,
            S.bottom = 1 - R / b,
            A = C = cr.floor(C),
            E = k = cr.floor(k),
            P = O = cr.ceil(O),
            N = R = cr.ceil(R),
            C < 0 && (C = 0),
            k < 0 && (k = 0),
            O > v && (O = v),
            R > b && (R = b),
            (A -= I) < 0 && (A = 0),
            (E -= L) < 0 && (E = 0),
            (P += I) > v && (P = v),
            (N += L) > b && (N = b),
            T.left = C / v,
            T.top = 1 - k / b,
            T.right = O / v,
            T.bottom = 1 - R / b
        } else
            T.left = S.left = 0,
            T.top = S.top = 0,
            T.right = S.right = 1,
            T.bottom = S.bottom = 1;
        var U = i && (t.programUsesDest(r[0].shaderindex) || 0 !== I || 0 !== L || 1 !== i.opacity || i.type.plugin.must_predraw) || e && !i && 1 !== e.opacity;
        t.setAlphaBlend(),
        U && (y[m] || (y[m] = t.createEmptyTexture(v, b, this.runtime.linearSampling)),
        y[m].c2width === v && y[m].c2height === b || (t.deleteTexture(y[m]),
        y[m] = t.createEmptyTexture(v, b, this.runtime.linearSampling)),
        t.switchProgram(0),
        t.setRenderingToTexture(y[m]),
        f = b - E - (g = N - E),
        t.clearRect(A, f, P - A, g),
        i ? i.drawGL(t) : (t.setTexture(this.runtime.layer_tex),
        t.setOpacity(e.opacity),
        t.resetModelView(),
        t.translate(-w, -x),
        t.updateModelView(),
        t.quadTex(C, R, O, R, O, k, C, k, T)),
        S.left = S.top = 0,
        S.right = S.bottom = 1,
        i && (d = T.top,
        T.top = T.bottom,
        T.bottom = d),
        m = 1,
        _ = 0),
        t.setOpacity(1);
        var q = r.length - 1
          , V = t.programUsesCrossSampling(r[q].shaderindex) || !e && !i && !this.runtime.fullscreenScalingQuality
          , z = 0;
        for (u = 0,
        p = r.length; u < p; u++) {
            if (y[m] || (y[m] = t.createEmptyTexture(v, b, this.runtime.linearSampling)),
            y[m].c2width === v && y[m].c2height === b || (t.deleteTexture(y[m]),
            y[m] = t.createEmptyTexture(v, b, this.runtime.linearSampling)),
            t.switchProgram(r[u].shaderindex),
            z = r[u].index,
            t.programIsAnimated(r[u].shaderindex) && (this.runtime.redraw = !0),
            0 != u || U)
                t.setProgramParameters(n, 1 / v, 1 / b, S.left, S.top, S.right, S.bottom, s, o, a, h, (a + c) / 2, (h + l) / 2, this.runtime.kahanTime.sum, i ? i.effect_params[z] : e ? e.effect_params[z] : this.effect_params[z]),
                t.setTexture(null),
                u !== q || V ? (t.setRenderingToTexture(y[m]),
                f = b - E - (g = N - E),
                t.clearRect(A, f, P - A, g)) : (i ? t.setBlend(i.srcBlend, i.destBlend) : e && t.setBlend(e.srcBlend, e.destBlend),
                t.setRenderingToTexture(n)),
                t.setTexture(y[_]),
                t.resetModelView(),
                t.translate(-w, -x),
                t.updateModelView(),
                t.quadTex(C, R, O, R, O, k, C, k, T),
                u !== q || V || t.setTexture(null);
            else {
                if (t.setRenderingToTexture(y[m]),
                f = b - E - (g = N - E),
                t.clearRect(A, f, P - A, g),
                i) {
                    var G, H;
                    if (i.curFrame && i.curFrame.texture_img) {
                        var X = i.curFrame.texture_img;
                        G = 1 / X.width,
                        H = 1 / X.height
                    } else
                        G = 1 / i.width,
                        H = 1 / i.height;
                    t.setProgramParameters(n, G, H, S.left, S.top, S.right, S.bottom, s, o, a, h, (a + c) / 2, (h + l) / 2, this.runtime.kahanTime.sum, i.effect_params[z]),
                    i.drawGL(t)
                } else
                    t.setProgramParameters(n, 1 / v, 1 / b, 0, 0, 1, 1, s, o, a, h, (a + c) / 2, (h + l) / 2, this.runtime.kahanTime.sum, e ? e.effect_params[z] : this.effect_params[z]),
                    t.setTexture(e ? this.runtime.layer_tex : this.runtime.layout_tex),
                    t.resetModelView(),
                    t.translate(-w, -x),
                    t.updateModelView(),
                    t.quadTex(C, R, O, R, O, k, C, k, T);
                S.left = S.top = 0,
                S.right = S.bottom = 1,
                i && !V && (d = R,
                R = k,
                k = d)
            }
            _ = 0 === (m = 0 === m ? 1 : 0) ? 1 : 0
        }
        V && (t.switchProgram(0),
        i ? t.setBlend(i.srcBlend, i.destBlend) : e ? t.setBlend(e.srcBlend, e.destBlend) : this.runtime.fullscreenScalingQuality || (t.setSize(this.runtime.width, this.runtime.height),
        w = this.runtime.width / 2,
        x = this.runtime.height / 2,
        C = 0,
        k = 0,
        O = this.runtime.width,
        R = this.runtime.height),
        t.setRenderingToTexture(n),
        t.setTexture(y[_]),
        t.resetModelView(),
        t.translate(-w, -x),
        t.updateModelView(),
        i && 1 === r.length && !U ? t.quadTex(C, k, O, k, O, R, C, R, T) : t.quadTex(C, R, O, R, O, k, C, k, T),
        t.setTexture(null))
    }
    ,
    t.prototype.getLayerBySid = function(t) {
        var e, i;
        for (e = 0,
        i = this.layers.length; e < i; e++)
            if (this.layers[e].sid === t)
                return this.layers[e];
        return null
    }
    ,
    t.prototype.saveToJSON = function() {
        var t, e, i, n, r = {
            sx: this.scrollX,
            sy: this.scrollY,
            s: this.scale,
            a: this.angle,
            w: this.width,
            h: this.height,
            fv: this.first_visit,
            persist: this.persist_data,
            fx: [],
            layers: {}
        };
        for (t = 0,
        e = this.effect_types.length; t < e; t++)
            n = this.effect_types[t],
            r.fx.push({
                name: n.name,
                active: n.active,
                params: this.effect_params[n.index]
            });
        for (t = 0,
        e = this.layers.length; t < e; t++)
            i = this.layers[t],
            r.layers[i.sid.toString()] = i.saveToJSON();
        return r
    }
    ,
    t.prototype.loadFromJSON = function(t) {
        var e, i, n, r, s;
        this.scrollX = t.sx,
        this.scrollY = t.sy,
        this.scale = t.s,
        this.angle = t.a,
        this.width = t.w,
        this.height = t.h,
        this.persist_data = t.persist,
        void 0 !== t.fv && (this.first_visit = t.fv);
        var o = t.fx;
        for (e = 0,
        i = o.length; e < i; e++)
            (n = this.getEffectByName(o[e].name)) && (n.active = o[e].active,
            this.effect_params[n.index] = o[e].params);
        this.updateActiveEffects();
        var a = t.layers;
        for (r in a)
            if (a.hasOwnProperty(r)) {
                if (!(s = this.getLayerBySid(parseInt(r, 10))))
                    continue;
                s.loadFromJSON(a[r])
            }
    }
    ,
    cr.layout = t,
    s.prototype.updateActiveEffects = function() {
        var t, e, i;
        for (cr.clearArray(this.active_effect_types),
        this.shaders_preserve_opaqueness = !0,
        t = 0,
        e = this.effect_types.length; t < e; t++)
            (i = this.effect_types[t]).active && (this.active_effect_types.push(i),
            i.preservesOpaqueness || (this.shaders_preserve_opaqueness = !1))
    }
    ,
    s.prototype.getEffectByName = function(t) {
        var e, i, n;
        for (e = 0,
        i = this.effect_types.length; e < i; e++)
            if ((n = this.effect_types[e]).name === t)
                return n;
        return null
    }
    ,
    s.prototype.createInitialInstances = function() {
        var t, i, n, r, s, o, a;
        for (t = 0,
        i = 0,
        n = this.initial_instances.length; t < n; t++) {
            if (s = this.initial_instances[t],
            o = this.runtime.types_by_index[s[1]],
            a = !0,
            !this.runtime.typeHasPersistBehavior(o) || this.layout.first_visit) {
                if (!(r = this.runtime.createInstanceFromInit(s, this, !0)))
                    continue;
                e.push(r),
                r.type.global && (a = !1,
                this.created_globals.push(r.uid))
            }
            a && (this.initial_instances[i] = this.initial_instances[t],
            i++)
        }
        this.initial_instances.length = i,
        this.runtime.ClearDeathRow(),
        !this.runtime.glwrap && this.effect_types.length && (this.blend_mode = this.effect_fallback),
        this.compositeOp = cr.effectToCompositeOp(this.blend_mode),
        this.runtime.gl && cr.setGLBlend(this, this.blend_mode, this.runtime.gl),
        this.render_list_stale = !0
    }
    ,
    s.prototype.recreateInitialObjects = function(t, e) {
        var i, n, r, s, o, a, h, c, l, u, p, d = this.runtime.types_by_index, f = t.is_family, g = t.members;
        for (i = 0,
        n = this.initial_instances.length; i < n; ++i)
            if (a = (o = (r = this.initial_instances[i])[0])[0],
            h = o[1],
            e.contains_pt(a, h)) {
                if ((s = d[r[1]]) !== t) {
                    if (!f)
                        continue;
                    if (g.indexOf(s) < 0)
                        continue
                }
                if (c = this.runtime.createInstanceFromInit(r, this, !1),
                this.runtime.isInOnDestroy++,
                this.runtime.trigger(Object.getPrototypeOf(s.plugin).cnds.OnCreated, c),
                c.is_contained)
                    for (l = 0,
                    u = c.siblings.length; l < u; l++)
                        p = c.siblings[i],
                        this.runtime.trigger(Object.getPrototypeOf(p.type.plugin).cnds.OnCreated, p);
                this.runtime.isInOnDestroy--
            }
    }
    ,
    s.prototype.removeFromInstanceList = function(t, e) {
        var i = cr.fastIndexOf(this.instances, t);
        i < 0 || (e && this.useRenderCells && t.rendercells && t.rendercells.right >= t.rendercells.left && (t.update_bbox(),
        this.render_grid.update(t, t.rendercells, null),
        t.rendercells.set(0, 0, -1, -1)),
        i === this.instances.length - 1 ? this.instances.pop() : (cr.arrayRemove(this.instances, i),
        this.setZIndicesStaleFrom(i)),
        this.render_list_stale = !0)
    }
    ,
    s.prototype.appendToInstanceList = function(t, e) {
        t.zindex = this.instances.length,
        this.instances.push(t),
        e && this.useRenderCells && t.rendercells && t.set_bbox_changed(),
        this.render_list_stale = !0
    }
    ,
    s.prototype.prependToInstanceList = function(t, e) {
        this.instances.unshift(t),
        this.setZIndicesStaleFrom(0),
        e && this.useRenderCells && t.rendercells && t.set_bbox_changed()
    }
    ,
    s.prototype.moveInstanceAdjacent = function(t, e, i) {
        var n = t.get_zindex()
          , r = e.get_zindex();
        cr.arrayRemove(this.instances, n),
        n < r && r--,
        i && r++,
        r === this.instances.length ? this.instances.push(t) : this.instances.splice(r, 0, t),
        this.setZIndicesStaleFrom(n < r ? n : r)
    }
    ,
    s.prototype.setZIndicesStaleFrom = function(t) {
        -1 === this.zindices_stale_from ? this.zindices_stale_from = t : t < this.zindices_stale_from && (this.zindices_stale_from = t),
        this.zindices_stale = !0,
        this.render_list_stale = !0
    }
    ,
    s.prototype.updateZIndices = function() {
        if (this.zindices_stale) {
            var t, e, i;
            if (-1 === this.zindices_stale_from && (this.zindices_stale_from = 0),
            this.useRenderCells)
                for (t = this.zindices_stale_from,
                e = this.instances.length; t < e; ++t)
                    (i = this.instances[t]).zindex = t,
                    this.render_grid.markRangeChanged(i.rendercells);
            else
                for (t = this.zindices_stale_from,
                e = this.instances.length; t < e; ++t)
                    this.instances[t].zindex = t;
            this.zindices_stale = !1,
            this.zindices_stale_from = -1
        }
    }
    ,
    s.prototype.getScale = function(t) {
        return this.getNormalScale() * (this.runtime.fullscreenScalingQuality || t ? this.runtime.aspect_scale : 1)
    }
    ,
    s.prototype.getNormalScale = function() {
        return (this.scale * this.layout.scale - 1) * this.zoomRate + 1
    }
    ,
    s.prototype.getAngle = function() {
        return this.disableAngle ? 0 : cr.clamp_angle(this.layout.angle + this.angle)
    }
    ;
    var o = [];
    function a() {
        return o.length ? o.pop() : []
    }
    function h(t) {
        cr.clearArray(t),
        o.push(t)
    }
    function c(t, e, i) {
        var n, r, s = 0, o = 0, a = 0, h = t.length, c = e.length;
        for (i.length = h + c; s < h && o < c; ++a)
            n = t[s],
            r = e[o],
            n.zindex < r.zindex ? (i[a] = n,
            ++s) : (i[a] = r,
            ++o);
        for (; s < h; ++s,
        ++a)
            i[a] = t[s];
        for (; o < c; ++o,
        ++a)
            i[a] = e[o]
    }
    var l = [];
    function u(t, e) {
        var i, n, r, s, o;
        for (i = 0,
        n = t.length; i < n - 1; i += 2)
            c(r = t[i], s = t[i + 1], o = a()),
            e || (h(r),
            h(s)),
            l.push(o);
        n % 2 == 1 && (e ? (r = a(),
        cr.shallowAssignArray(r, t[n - 1]),
        l.push(r)) : l.push(t[n - 1])),
        cr.shallowAssignArray(t, l),
        cr.clearArray(l)
    }
    var p = [];
    s.prototype.getRenderCellInstancesToDraw = function() {
        if (this.updateZIndices(),
        this.render_grid.queryRange(this.viewLeft, this.viewTop, this.viewRight, this.viewBottom, p),
        !p.length)
            return a();
        if (1 === p.length) {
            var t = a();
            return cr.shallowAssignArray(t, p[0]),
            cr.clearArray(p),
            t
        }
        var e = function(t) {
            for (var e = !0; t.length > 1; )
                u(t, e),
                e = !1;
            return t[0]
        }(p);
        return cr.clearArray(p),
        e
    }
    ,
    s.prototype.draw = function(t) {
        this.render_offscreen = this.forceOwnTexture || 1 !== this.opacity || 0 !== this.blend_mode;
        var e = this.runtime.canvas
          , i = t
          , n = !1;
        this.render_offscreen && (this.runtime.layer_canvas || (this.runtime.layer_canvas = document.createElement("canvas"),
        (e = this.runtime.layer_canvas).width = this.runtime.draw_width,
        e.height = this.runtime.draw_height,
        this.runtime.layer_ctx = e.getContext("2d"),
        n = !0),
        e = this.runtime.layer_canvas,
        i = this.runtime.layer_ctx,
        e.width !== this.runtime.draw_width && (e.width = this.runtime.draw_width,
        n = !0),
        e.height !== this.runtime.draw_height && (e.height = this.runtime.draw_height,
        n = !0),
        n && this.runtime.setCtxImageSmoothingEnabled(i, this.runtime.linearSampling),
        this.transparent && i.clearRect(0, 0, this.runtime.draw_width, this.runtime.draw_height)),
        i.globalAlpha = 1,
        i.globalCompositeOperation = "source-over",
        this.transparent || (i.fillStyle = "rgb(" + this.background_color[0] + "," + this.background_color[1] + "," + this.background_color[2] + ")",
        i.fillRect(0, 0, this.runtime.draw_width, this.runtime.draw_height)),
        i.save(),
        this.disableAngle = !0;
        var r = this.canvasToLayer(0, 0, !0, !0)
          , s = this.canvasToLayer(0, 0, !1, !0);
        this.disableAngle = !1,
        this.runtime.pixel_rounding && (r = Math.round(r),
        s = Math.round(s)),
        this.rotateViewport(r, s, i);
        var o, a = this.getScale();
        i.scale(a, a),
        i.translate(-r, -s),
        this.useRenderCells ? (this.cur_render_cells.left = this.render_grid.XToCell(this.viewLeft),
        this.cur_render_cells.top = this.render_grid.YToCell(this.viewTop),
        this.cur_render_cells.right = this.render_grid.XToCell(this.viewRight),
        this.cur_render_cells.bottom = this.render_grid.YToCell(this.viewBottom),
        this.render_list_stale || !this.cur_render_cells.equals(this.last_render_cells) ? (h(this.last_render_list),
        o = this.getRenderCellInstancesToDraw(),
        this.render_list_stale = !1,
        this.last_render_cells.copy(this.cur_render_cells)) : o = this.last_render_list) : o = this.instances;
        var c, l, u, p = null;
        for (c = 0,
        l = o.length; c < l; ++c)
            (u = o[c]) !== p && (this.drawInstance(u, i),
            p = u);
        this.useRenderCells && (this.last_render_list = o),
        i.restore(),
        this.render_offscreen && (t.globalCompositeOperation = this.compositeOp,
        t.globalAlpha = this.opacity,
        t.drawImage(e, 0, 0))
    }
    ,
    s.prototype.drawInstance = function(t, e) {
        if (t.visible && 0 !== t.width && 0 !== t.height) {
            t.update_bbox();
            var i = t.bbox;
            i.right < this.viewLeft || i.bottom < this.viewTop || i.left > this.viewRight || i.top > this.viewBottom || (e.globalCompositeOperation = t.compositeOp,
            t.draw(e))
        }
    }
    ,
    s.prototype.updateViewport = function(t) {
        this.disableAngle = !0;
        var e = this.canvasToLayer(0, 0, !0, !0)
          , i = this.canvasToLayer(0, 0, !1, !0);
        this.disableAngle = !1,
        this.runtime.pixel_rounding && (e = Math.round(e),
        i = Math.round(i)),
        this.rotateViewport(e, i, t)
    }
    ,
    s.prototype.rotateViewport = function(t, e, i) {
        var n, r = this.getScale();
        this.viewLeft = t,
        this.viewTop = e,
        this.viewRight = t + this.runtime.draw_width * (1 / r),
        this.viewBottom = e + this.runtime.draw_height * (1 / r),
        this.viewLeft > this.viewRight && (n = this.viewLeft,
        this.viewLeft = this.viewRight,
        this.viewRight = n),
        this.viewTop > this.viewBottom && (n = this.viewTop,
        this.viewTop = this.viewBottom,
        this.viewBottom = n);
        var s = this.getAngle();
        0 !== s && (i && (i.translate(this.runtime.draw_width / 2, this.runtime.draw_height / 2),
        i.rotate(-s),
        i.translate(this.runtime.draw_width / -2, this.runtime.draw_height / -2)),
        this.tmprect.set(this.viewLeft, this.viewTop, this.viewRight, this.viewBottom),
        this.tmprect.offset((this.viewLeft + this.viewRight) / -2, (this.viewTop + this.viewBottom) / -2),
        this.tmpquad.set_from_rotated_rect(this.tmprect, s),
        this.tmpquad.bounding_box(this.tmprect),
        this.tmprect.offset((this.viewLeft + this.viewRight) / 2, (this.viewTop + this.viewBottom) / 2),
        this.viewLeft = this.tmprect.left,
        this.viewTop = this.tmprect.top,
        this.viewRight = this.tmprect.right,
        this.viewBottom = this.tmprect.bottom)
    }
    ,
    s.prototype.drawGL_earlyZPass = function(t) {
        this.runtime.draw_width,
        this.runtime.draw_height;
        this.render_offscreen = this.forceOwnTexture,
        this.render_offscreen && (this.runtime.layer_tex || (this.runtime.layer_tex = t.createEmptyTexture(this.runtime.draw_width, this.runtime.draw_height, this.runtime.linearSampling)),
        this.runtime.layer_tex.c2width === this.runtime.draw_width && this.runtime.layer_tex.c2height === this.runtime.draw_height || (t.deleteTexture(this.runtime.layer_tex),
        this.runtime.layer_tex = t.createEmptyTexture(this.runtime.draw_width, this.runtime.draw_height, this.runtime.linearSampling)),
        t.setRenderingToTexture(this.runtime.layer_tex)),
        this.disableAngle = !0;
        var e = this.canvasToLayer(0, 0, !0, !0)
          , i = this.canvasToLayer(0, 0, !1, !0);
        this.disableAngle = !1,
        this.runtime.pixel_rounding && (e = Math.round(e),
        i = Math.round(i)),
        this.rotateViewport(e, i, null);
        var n, r = this.getScale();
        t.resetModelView(),
        t.scale(r, r),
        t.rotateZ(-this.getAngle()),
        t.translate((this.viewLeft + this.viewRight) / -2, (this.viewTop + this.viewBottom) / -2),
        t.updateModelView(),
        this.useRenderCells ? (this.cur_render_cells.left = this.render_grid.XToCell(this.viewLeft),
        this.cur_render_cells.top = this.render_grid.YToCell(this.viewTop),
        this.cur_render_cells.right = this.render_grid.XToCell(this.viewRight),
        this.cur_render_cells.bottom = this.render_grid.YToCell(this.viewBottom),
        this.render_list_stale || !this.cur_render_cells.equals(this.last_render_cells) ? (h(this.last_render_list),
        n = this.getRenderCellInstancesToDraw(),
        this.render_list_stale = !1,
        this.last_render_cells.copy(this.cur_render_cells)) : n = this.last_render_list) : n = this.instances;
        var s, o, a = null;
        for (s = n.length - 1; s >= 0; --s)
            (o = n[s]) !== a && (this.drawInstanceGL_earlyZPass(n[s], t),
            a = o);
        this.useRenderCells && (this.last_render_list = n),
        this.transparent || (this.clear_earlyz_index = this.runtime.earlyz_index++,
        t.setEarlyZIndex(this.clear_earlyz_index),
        t.setColorFillMode(1, 1, 1, 1),
        t.fullscreenQuad(),
        t.restoreEarlyZMode())
    }
    ,
    s.prototype.drawGL = function(t) {
        this.runtime.draw_width,
        this.runtime.draw_height;
        var e = 0
          , i = 0;
        this.render_offscreen = this.forceOwnTexture || 1 !== this.opacity || this.active_effect_types.length > 0 || 0 !== this.blend_mode,
        this.render_offscreen && (this.runtime.layer_tex || (this.runtime.layer_tex = t.createEmptyTexture(this.runtime.draw_width, this.runtime.draw_height, this.runtime.linearSampling)),
        this.runtime.layer_tex.c2width === this.runtime.draw_width && this.runtime.layer_tex.c2height === this.runtime.draw_height || (t.deleteTexture(this.runtime.layer_tex),
        this.runtime.layer_tex = t.createEmptyTexture(this.runtime.draw_width, this.runtime.draw_height, this.runtime.linearSampling)),
        t.setRenderingToTexture(this.runtime.layer_tex),
        this.transparent && t.clear(0, 0, 0, 0)),
        this.transparent || (this.runtime.enableFrontToBack ? (t.setEarlyZIndex(this.clear_earlyz_index),
        t.setColorFillMode(this.background_color[0] / 255, this.background_color[1] / 255, this.background_color[2] / 255, 1),
        t.fullscreenQuad(),
        t.setTextureFillMode()) : t.clear(this.background_color[0] / 255, this.background_color[1] / 255, this.background_color[2] / 255, 1)),
        this.disableAngle = !0;
        var n = this.canvasToLayer(0, 0, !0, !0)
          , r = this.canvasToLayer(0, 0, !1, !0);
        this.disableAngle = !1,
        this.runtime.pixel_rounding && (n = Math.round(n),
        r = Math.round(r)),
        this.rotateViewport(n, r, null);
        var s, o = this.getScale();
        t.resetModelView(),
        t.scale(o, o),
        t.rotateZ(-this.getAngle()),
        t.translate((this.viewLeft + this.viewRight) / -2, (this.viewTop + this.viewBottom) / -2),
        t.updateModelView(),
        this.useRenderCells ? (this.cur_render_cells.left = this.render_grid.XToCell(this.viewLeft),
        this.cur_render_cells.top = this.render_grid.YToCell(this.viewTop),
        this.cur_render_cells.right = this.render_grid.XToCell(this.viewRight),
        this.cur_render_cells.bottom = this.render_grid.YToCell(this.viewBottom),
        this.render_list_stale || !this.cur_render_cells.equals(this.last_render_cells) ? (h(this.last_render_list),
        s = this.getRenderCellInstancesToDraw(),
        this.render_list_stale = !1,
        this.last_render_cells.copy(this.cur_render_cells)) : s = this.last_render_list) : s = this.instances;
        var a, c, l, u = null;
        for (a = 0,
        c = s.length; a < c; ++a)
            (l = s[a]) !== u && (this.drawInstanceGL(s[a], t),
            u = l);
        if (this.useRenderCells && (this.last_render_list = s),
        this.render_offscreen)
            if (e = this.active_effect_types.length ? this.active_effect_types[0].shaderindex : 0,
            i = this.active_effect_types.length ? this.active_effect_types[0].index : 0,
            0 === this.active_effect_types.length || 1 === this.active_effect_types.length && !t.programUsesCrossSampling(e) && 1 === this.opacity) {
                1 === this.active_effect_types.length ? (t.switchProgram(e),
                t.setProgramParameters(this.layout.getRenderTarget(), 1 / this.runtime.draw_width, 1 / this.runtime.draw_height, 0, 0, 1, 1, o, this.getAngle(), this.viewLeft, this.viewTop, (this.viewLeft + this.viewRight) / 2, (this.viewTop + this.viewBottom) / 2, this.runtime.kahanTime.sum, this.effect_params[i]),
                t.programIsAnimated(e) && (this.runtime.redraw = !0)) : t.switchProgram(0),
                t.setRenderingToTexture(this.layout.getRenderTarget()),
                t.setOpacity(this.opacity),
                t.setTexture(this.runtime.layer_tex),
                t.setBlend(this.srcBlend, this.destBlend),
                t.resetModelView(),
                t.updateModelView();
                var p = this.runtime.draw_width / 2
                  , d = this.runtime.draw_height / 2;
                t.quad(-p, d, p, d, p, -d, -p, -d),
                t.setTexture(null)
            } else
                this.layout.renderEffectChain(t, this, null, this.layout.getRenderTarget())
    }
    ,
    s.prototype.drawInstanceGL = function(t, e) {
        if (t.visible && 0 !== t.width && 0 !== t.height) {
            t.update_bbox();
            var i = t.bbox;
            i.right < this.viewLeft || i.bottom < this.viewTop || i.left > this.viewRight || i.top > this.viewBottom || (e.setEarlyZIndex(t.earlyz_index),
            t.uses_shaders ? this.drawInstanceWithShadersGL(t, e) : (e.switchProgram(0),
            e.setBlend(t.srcBlend, t.destBlend),
            t.drawGL(e)))
        }
    }
    ,
    s.prototype.drawInstanceGL_earlyZPass = function(t, e) {
        if (t.visible && 0 !== t.width && 0 !== t.height) {
            t.update_bbox();
            var i = t.bbox;
            i.right < this.viewLeft || i.bottom < this.viewTop || i.left > this.viewRight || i.top > this.viewBottom || (t.earlyz_index = this.runtime.earlyz_index++,
            0 === t.blend_mode && 1 === t.opacity && t.shaders_preserve_opaqueness && t.drawGL_earlyZPass && (e.setEarlyZIndex(t.earlyz_index),
            t.drawGL_earlyZPass(e)))
        }
    }
    ,
    s.prototype.drawInstanceWithShadersGL = function(t, e) {
        var i = t.active_effect_types[0].shaderindex
          , n = t.active_effect_types[0].index
          , r = this.getScale();
        if (1 !== t.active_effect_types.length || e.programUsesCrossSampling(i) || e.programExtendsBox(i) || (t.angle || t.layer.getAngle()) && e.programUsesDest(i) || 1 !== t.opacity || t.type.plugin.must_predraw)
            this.layout.renderEffectChain(e, this, t, this.render_offscreen ? this.runtime.layer_tex : this.layout.getRenderTarget()),
            e.resetModelView(),
            e.scale(r, r),
            e.rotateZ(-this.getAngle()),
            e.translate((this.viewLeft + this.viewRight) / -2, (this.viewTop + this.viewBottom) / -2),
            e.updateModelView();
        else {
            e.switchProgram(i),
            e.setBlend(t.srcBlend, t.destBlend),
            e.programIsAnimated(i) && (this.runtime.redraw = !0);
            var s, o, a = 0, h = 0, c = 0, l = 0;
            if (e.programUsesDest(i)) {
                var u = t.bbox
                  , p = this.layerToCanvas(u.left, u.top, !0, !0)
                  , d = this.layerToCanvas(u.left, u.top, !1, !0)
                  , f = this.layerToCanvas(u.right, u.bottom, !0, !0)
                  , g = this.layerToCanvas(u.right, u.bottom, !1, !0);
                a = p / windowWidth,
                h = 1 - d / windowHeight,
                c = f / windowWidth,
                l = 1 - g / windowHeight
            }
            if (t.curFrame && t.curFrame.texture_img) {
                var y = t.curFrame.texture_img;
                s = 1 / y.width,
                o = 1 / y.height
            } else
                s = 1 / t.width,
                o = 1 / t.height;
            e.setProgramParameters(this.render_offscreen ? this.runtime.layer_tex : this.layout.getRenderTarget(), s, o, a, h, c, l, r, this.getAngle(), this.viewLeft, this.viewTop, (this.viewLeft + this.viewRight) / 2, (this.viewTop + this.viewBottom) / 2, this.runtime.kahanTime.sum, t.effect_params[n]),
            t.drawGL(e)
        }
    }
    ,
    s.prototype.canvasToLayer = function(t, e, i, n) {
        var r = this.runtime.devicePixelRatio;
        this.runtime.isRetina && (t *= r,
        e *= r);
        var s = this.runtime.parallax_x_origin
          , o = this.runtime.parallax_y_origin
          , a = (this.layout.scrollX - s) * this.parallaxX + s
          , h = (this.layout.scrollY - o) * this.parallaxY + o
          , c = a
          , l = h
          , u = 1 / this.getScale(!n);
        n ? (c -= this.runtime.draw_width * u / 2,
        l -= this.runtime.draw_height * u / 2) : (c -= this.runtime.width * u / 2,
        l -= this.runtime.height * u / 2),
        c += t * u,
        l += e * u;
        var p = this.getAngle();
        if (0 !== p) {
            c -= a,
            l -= h;
            var d = Math.cos(p)
              , f = Math.sin(p)
              , g = c * d - l * f;
            l = l * d + c * f,
            c = g,
            c += a,
            l += h
        }
        return i ? c : l
    }
    ,
    s.prototype.layerToCanvas = function(t, e, i, n) {
        var r = this.runtime.parallax_x_origin
          , s = this.runtime.parallax_y_origin
          , o = (this.layout.scrollX - r) * this.parallaxX + r
          , a = (this.layout.scrollY - s) * this.parallaxY + s
          , h = o
          , c = a
          , l = this.getAngle();
        if (0 !== l) {
            t -= o,
            e -= a;
            var u = Math.cos(-l)
              , p = Math.sin(-l)
              , d = t * u - e * p;
            e = e * u + t * p,
            t = d,
            t += o,
            e += a
        }
        var f = 1 / this.getScale(!n);
        n ? (h -= this.runtime.draw_width * f / 2,
        c -= this.runtime.draw_height * f / 2) : (h -= this.runtime.width * f / 2,
        c -= this.runtime.height * f / 2),
        h = (t - h) / f,
        c = (e - c) / f;
        var g = this.runtime.devicePixelRatio;
        return this.runtime.isRetina && !n && (h /= g,
        c /= g),
        i ? h : c
    }
    ,
    s.prototype.rotatePt = function(t, e, i) {
        if (0 === this.getAngle())
            return i ? t : e;
        var n = this.layerToCanvas(t, e, !0)
          , r = this.layerToCanvas(t, e, !1);
        this.disableAngle = !0;
        var s = this.canvasToLayer(n, r, !0)
          , o = this.canvasToLayer(n, r, !0);
        return this.disableAngle = !1,
        i ? s : o
    }
    ,
    s.prototype.saveToJSON = function() {
        var t, e, i, n = {
            s: this.scale,
            a: this.angle,
            vl: this.viewLeft,
            vt: this.viewTop,
            vr: this.viewRight,
            vb: this.viewBottom,
            v: this.visible,
            bc: this.background_color,
            t: this.transparent,
            px: this.parallaxX,
            py: this.parallaxY,
            o: this.opacity,
            zr: this.zoomRate,
            fx: [],
            cg: this.created_globals,
            instances: []
        };
        for (t = 0,
        e = this.effect_types.length; t < e; t++)
            i = this.effect_types[t],
            n.fx.push({
                name: i.name,
                active: i.active,
                params: this.effect_params[i.index]
            });
        return n
    }
    ,
    s.prototype.loadFromJSON = function(t) {
        var e, n, r, s;
        this.scale = t.s,
        this.angle = t.a,
        this.viewLeft = t.vl,
        this.viewTop = t.vt,
        this.viewRight = t.vr,
        this.viewBottom = t.vb,
        this.visible = t.v,
        this.background_color = t.bc,
        this.transparent = t.t,
        this.parallaxX = t.px,
        this.parallaxY = t.py,
        this.opacity = t.o,
        this.zoomRate = t.zr,
        this.created_globals = t.cg || [],
        cr.shallowAssignArray(this.initial_instances, this.startup_initial_instances);
        var o = new cr.ObjectSet;
        for (e = 0,
        r = this.created_globals.length; e < r; ++e)
            o.add(this.created_globals[e]);
        for (e = 0,
        n = 0,
        r = this.initial_instances.length; e < r; ++e)
            o.contains(this.initial_instances[e][2]) || (this.initial_instances[n] = this.initial_instances[e],
            ++n);
        cr.truncateArray(this.initial_instances, n);
        var a = t.fx;
        for (e = 0,
        r = a.length; e < r; e++)
            (s = this.getEffectByName(a[e].name)) && (s.active = a[e].active,
            this.effect_params[s.index] = a[e].params);
        this.updateActiveEffects(),
        this.instances.sort(i),
        this.zindices_stale = !0
    }
    ,
    cr.layer = s
}(),
function() {
    var t = [];
    function e(t, e) {
        var i, n = t.length;
        switch (n) {
        case 0:
            return !0;
        case 1:
            return t[0] === e[0];
        case 2:
            return t[0] === e[0] && t[1] === e[1];
        default:
            for (i = 0; i < n; i++)
                if (t[i] !== e[i])
                    return !1;
            return !0
        }
    }
    function i(t, e) {
        return t.index - e.index
    }
    function n(n) {
        var r, s, o, a, h;
        for (2 === n.length ? n[0].index > n[1].index && (a = n[0],
        n[0] = n[1],
        n[1] = a) : n.length > 2 && n.sort(i),
        n.length >= t.length && (t.length = n.length + 1),
        t[n.length] || (t[n.length] = []),
        r = 0,
        s = (h = t[n.length]).length; r < s; r++)
            if (e(n, o = h[r]))
                return o;
        return h.push(n),
        n
    }
    function r(t, e) {
        this.runtime = t,
        this.triggers = {},
        this.fasttriggers = {},
        this.hasRun = !1,
        this.includes = new cr.ObjectSet,
        this.deep_includes = [],
        this.already_included_sheets = [],
        this.name = e[0];
        var i, n, r = e[1];
        for (this.events = [],
        i = 0,
        n = r.length; i < n; i++)
            this.init_event(r[i], null, this.events)
    }
    function s(t) {
        this.type = t,
        this.instances = [],
        this.else_instances = [],
        this.select_all = !0
    }
    function o(t, e, i) {
        var n, r;
        this.sheet = t,
        this.parent = e,
        this.runtime = t.runtime,
        this.solModifiers = [],
        this.solModifiersIncludingParents = [],
        this.solWriterAfterCnds = !1,
        this.group = !1,
        this.initially_activated = !1,
        this.toplevelevent = !1,
        this.toplevelgroup = !1,
        this.has_else_block = !1,
        this.conditions = [],
        this.actions = [],
        this.subevents = [],
        this.group_name = "",
        this.group = !1,
        this.initially_activated = !1,
        this.group_active = !1,
        this.contained_includes = null,
        i[1] && (this.group_name = i[1][1].toLowerCase(),
        this.group = !0,
        this.initially_activated = !!i[1][0],
        this.contained_includes = [],
        this.group_active = this.initially_activated,
        this.runtime.allGroups.push(this),
        this.runtime.groups_by_name[this.group_name] = this),
        this.orblock = i[2],
        this.sid = i[4],
        this.group || (this.runtime.blocksBySid[this.sid.toString()] = this);
        var s = i[5];
        for (n = 0,
        r = s.length; n < r; n++) {
            var o = new cr.condition(this,s[n]);
            o.index = n,
            cr.seal(o),
            this.conditions.push(o),
            this.addSolModifier(o.type)
        }
        var a = i[6];
        for (n = 0,
        r = a.length; n < r; n++) {
            var h = new cr.action(this,a[n]);
            h.index = n,
            cr.seal(h),
            this.actions.push(h)
        }
        if (8 === i.length) {
            var c = i[7];
            for (n = 0,
            r = c.length; n < r; n++)
                this.sheet.init_event(c[n], this, this.subevents)
        }
        this.is_else_block = !1,
        this.conditions.length && (this.is_else_block = null == this.conditions[0].type && this.conditions[0].func == cr.system_object.prototype.cnds.Else)
    }
    function a(t, e) {
        var i, n, r;
        if (t && (-1 === e.indexOf(t) && e.push(t),
        t.is_contained))
            for (i = 0,
            n = t.container.length; i < n; i++)
                t !== (r = t.container[i]) && -1 === e.indexOf(r) && e.push(r)
    }
    function h(t, e) {
        if (this.block = t,
        this.sheet = t.sheet,
        this.runtime = t.runtime,
        this.parameters = [],
        this.results = [],
        this.extra = {},
        this.index = -1,
        this.anyParamVariesPerInstance = !1,
        this.func = this.runtime.GetObjectReference(e[1]),
        this.trigger = e[3] > 0,
        this.fasttrigger = 2 === e[3],
        this.looping = e[4],
        this.inverted = e[5],
        this.isstatic = e[6],
        this.sid = e[7],
        this.runtime.cndsBySid[this.sid.toString()] = this,
        -1 === e[0] ? (this.type = null,
        this.run = this.run_system,
        this.behaviortype = null,
        this.beh_index = -1) : (this.type = this.runtime.types_by_index[e[0]],
        this.isstatic ? this.run = this.run_static : this.run = this.run_object,
        e[2] ? (this.behaviortype = this.type.getBehaviorByName(e[2]),
        this.beh_index = this.type.getBehaviorIndexByName(e[2])) : (this.behaviortype = null,
        this.beh_index = -1),
        this.block.parent && this.block.parent.setSolWriterAfterCnds()),
        this.fasttrigger && (this.run = this.run_true),
        10 === e.length) {
            var i, n, r = e[9];
            for (i = 0,
            n = r.length; i < n; i++) {
                var s = new cr.parameter(this,r[i]);
                cr.seal(s),
                this.parameters.push(s)
            }
            this.results.length = r.length
        }
    }
    function c(t, e) {
        if (this.block = t,
        this.sheet = t.sheet,
        this.runtime = t.runtime,
        this.parameters = [],
        this.results = [],
        this.extra = {},
        this.index = -1,
        this.anyParamVariesPerInstance = !1,
        this.func = this.runtime.GetObjectReference(e[1]),
        -1 === e[0] ? (this.type = null,
        this.run = this.run_system,
        this.behaviortype = null,
        this.beh_index = -1) : (this.type = this.runtime.types_by_index[e[0]],
        this.run = this.run_object,
        e[2] ? (this.behaviortype = this.type.getBehaviorByName(e[2]),
        this.beh_index = this.type.getBehaviorIndexByName(e[2])) : (this.behaviortype = null,
        this.beh_index = -1)),
        this.sid = e[3],
        this.runtime.actsBySid[this.sid.toString()] = this,
        6 === e.length) {
            var i, n, r = e[5];
            for (i = 0,
            n = r.length; i < n; i++) {
                var s = new cr.parameter(this,r[i]);
                cr.seal(s),
                this.parameters.push(s)
            }
            this.results.length = r.length
        }
    }
    r.prototype.toString = function() {
        return this.name
    }
    ,
    r.prototype.init_event = function(t, e, i) {
        switch (t[0]) {
        case 0:
            var n, r, s = new cr.eventblock(this,e,t);
            if (cr.seal(s),
            s.orblock)
                for (i.push(s),
                n = 0,
                r = s.conditions.length; n < r; n++)
                    s.conditions[n].trigger && this.init_trigger(s, n);
            else
                s.is_trigger() ? this.init_trigger(s, 0) : i.push(s);
            break;
        case 1:
            var o = new cr.eventvariable(this,e,t);
            cr.seal(o),
            i.push(o);
            break;
        case 2:
            var a = new cr.eventinclude(this,e,t);
            cr.seal(a),
            i.push(a)
        }
    }
    ,
    r.prototype.postInit = function() {
        var t, e;
        for (t = 0,
        e = this.events.length; t < e; t++)
            this.events[t].postInit(t < e - 1 && this.events[t + 1].is_else_block)
    }
    ,
    r.prototype.updateDeepIncludes = function() {
        cr.clearArray(this.deep_includes),
        cr.clearArray(this.already_included_sheets),
        this.addDeepIncludes(this),
        cr.clearArray(this.already_included_sheets)
    }
    ,
    r.prototype.addDeepIncludes = function(t) {
        var e, i, n, r, s = t.deep_includes, o = t.already_included_sheets, a = this.includes.valuesRef();
        for (e = 0,
        i = a.length; e < i; ++e)
            r = (n = a[e]).include_sheet,
            !n.isActive() || t === r || o.indexOf(r) > -1 || (o.push(r),
            r.addDeepIncludes(t),
            s.push(r))
    }
    ,
    r.prototype.run = function(t) {
        var e, i;
        for (this.runtime.resuming_breakpoint || (this.hasRun = !0,
        t || (this.runtime.isRunningEvents = !0)),
        e = 0,
        i = this.events.length; e < i; e++) {
            var n = this.events[e];
            n.run(),
            this.runtime.clearSol(n.solModifiers),
            this.runtime.hasPendingInstances && this.runtime.ClearDeathRow()
        }
        t || (this.runtime.isRunningEvents = !1)
    }
    ,
    r.prototype.init_trigger = function(t, e) {
        t.orblock || this.runtime.triggers_to_postinit.push(t);
        var i, n = t.conditions[e];
        i = n.type ? n.type.name : "system";
        var r = n.fasttrigger
          , s = r ? this.fasttriggers : this.triggers;
        s[i] || (s[i] = []);
        var o = s[i]
          , a = n.func;
        if (r) {
            if (!n.parameters.length)
                return;
            var h, c = n.parameters[0];
            if (1 !== c.type || 2 !== c.expression.type)
                return;
            var l, u, p = c.expression.value.toLowerCase();
            for (l = 0,
            u = o.length; l < u; l++)
                if (o[l].method == a)
                    return void ((h = o[l].evs)[p] ? h[p].push([t, e]) : h[p] = [[t, e]]);
            (h = {})[p] = [[t, e]],
            o.push({
                method: a,
                evs: h
            })
        } else {
            for (l = 0,
            u = o.length; l < u; l++)
                if (o[l].method == a)
                    return void o[l].evs.push([t, e]);
            !function(t) {
                return !(!cr.plugins_.Sprite || t !== cr.plugins_.Sprite.prototype.cnds.OnFrameChanged)
            }(a) ? o.push({
                method: a,
                evs: [[t, e]]
            }) : o.unshift({
                method: a,
                evs: [[t, e]]
            })
        }
    }
    ,
    cr.eventsheet = r,
    s.prototype.hasObjects = function() {
        return this.select_all ? this.type.instances.length : this.instances.length
    }
    ,
    s.prototype.getObjects = function() {
        return this.select_all ? this.type.instances : this.instances
    }
    ,
    s.prototype.pick_one = function(t) {
        if (t)
            if (t.runtime.getCurrentEventStack().current_event.orblock) {
                this.select_all && (cr.clearArray(this.instances),
                cr.shallowAssignArray(this.else_instances, t.type.instances),
                this.select_all = !1);
                var e = this.else_instances.indexOf(t);
                -1 !== e && (this.instances.push(this.else_instances[e]),
                this.else_instances.splice(e, 1))
            } else
                this.select_all = !1,
                cr.clearArray(this.instances),
                this.instances[0] = t
    }
    ,
    cr.selection = s,
    window._c2hh_ = "AB394D2534318C636434565CA459B8A08F9ED9C9",
    o.prototype.postInit = function(t) {
        var e, i, r = this.parent;
        if (this.group)
            for (this.toplevelgroup = !0; r; ) {
                if (!r.group) {
                    this.toplevelgroup = !1;
                    break
                }
                r = r.parent
            }
        for (this.toplevelevent = !this.is_trigger() && (!this.parent || this.parent.group && this.parent.toplevelgroup),
        this.has_else_block = !!t,
        this.solModifiersIncludingParents = this.solModifiers.slice(0),
        r = this.parent; r; ) {
            for (e = 0,
            i = r.solModifiers.length; e < i; e++)
                this.addParentSolModifier(r.solModifiers[e]);
            r = r.parent
        }
        for (this.solModifiers = n(this.solModifiers),
        this.solModifiersIncludingParents = n(this.solModifiersIncludingParents),
        e = 0,
        i = this.conditions.length; e < i; e++)
            this.conditions[e].postInit();
        for (e = 0,
        i = this.actions.length; e < i; e++)
            this.actions[e].postInit();
        for (e = 0,
        i = this.subevents.length; e < i; e++)
            this.subevents[e].postInit(e < i - 1 && this.subevents[e + 1].is_else_block)
    }
    ,
    o.prototype.setGroupActive = function(t) {
        if (this.group_active !== !!t) {
            var e, i;
            for (this.group_active = !!t,
            e = 0,
            i = this.contained_includes.length; e < i; ++e)
                this.contained_includes[e].updateActive();
            i > 0 && this.runtime.running_layout.event_sheet && this.runtime.running_layout.event_sheet.updateDeepIncludes()
        }
    }
    ,
    o.prototype.addSolModifier = function(t) {
        a(t, this.solModifiers)
    }
    ,
    o.prototype.addParentSolModifier = function(t) {
        a(t, this.solModifiersIncludingParents)
    }
    ,
    o.prototype.setSolWriterAfterCnds = function() {
        this.solWriterAfterCnds = !0,
        this.parent && this.parent.setSolWriterAfterCnds()
    }
    ,
    o.prototype.is_trigger = function() {
        return !!this.conditions.length && this.conditions[0].trigger
    }
    ,
    o.prototype.run = function() {
        var t, e, i = !1, n = this.runtime, r = this.runtime.getCurrentEventStack();
        r.current_event = this;
        var s = this.conditions;
        if (this.is_else_block || (r.else_branch_ran = !1),
        this.orblock) {
            for (0 === s.length && (i = !0),
            r.cndindex = 0,
            t = s.length; r.cndindex < t; r.cndindex++)
                (e = s[r.cndindex]).trigger || e.run() && (i = !0);
            r.last_event_true = i,
            i && this.run_actions_and_subevents()
        } else {
            for (r.cndindex = 0,
            t = s.length; r.cndindex < t; r.cndindex++)
                if (!s[r.cndindex].run())
                    return r.last_event_true = !1,
                    void (this.toplevelevent && n.hasPendingInstances && n.ClearDeathRow());
            r.last_event_true = !0,
            this.run_actions_and_subevents()
        }
        this.end_run(r)
    }
    ,
    o.prototype.end_run = function(t) {
        t.last_event_true && this.has_else_block && (t.else_branch_ran = !0),
        this.toplevelevent && this.runtime.hasPendingInstances && this.runtime.ClearDeathRow()
    }
    ,
    o.prototype.run_orblocktrigger = function(t) {
        this.runtime.getCurrentEventStack().current_event = this,
        this.conditions[t].run() && (this.run_actions_and_subevents(),
        this.runtime.getCurrentEventStack().last_event_true = !0)
    }
    ,
    o.prototype.run_actions_and_subevents = function() {
        var t, e = this.runtime.getCurrentEventStack();
        for (e.actindex = 0,
        t = this.actions.length; e.actindex < t; e.actindex++)
            if (this.actions[e.actindex].run())
                return;
        this.run_subevents()
    }
    ,
    o.prototype.resume_actions_and_subevents = function() {
        var t, e = this.runtime.getCurrentEventStack();
        for (t = this.actions.length; e.actindex < t; e.actindex++)
            if (this.actions[e.actindex].run())
                return;
        this.run_subevents()
    }
    ,
    o.prototype.run_subevents = function() {
        if (this.subevents.length) {
            var t, e, i, n, r = this.subevents.length - 1;
            if (this.runtime.pushEventStack(this),
            this.solWriterAfterCnds)
                for (t = 0,
                e = this.subevents.length; t < e; t++)
                    i = this.subevents[t],
                    (n = !this.toplevelgroup || !this.group && t < r) && this.runtime.pushCopySol(i.solModifiers),
                    i.run(),
                    n ? this.runtime.popSol(i.solModifiers) : this.runtime.clearSol(i.solModifiers);
            else
                for (t = 0,
                e = this.subevents.length; t < e; t++)
                    this.subevents[t].run();
            this.runtime.popEventStack()
        }
    }
    ,
    o.prototype.run_pretrigger = function() {
        var t = this.runtime.getCurrentEventStack();
        t.current_event = this;
        var e, i = !1;
        for (t.cndindex = 0,
        e = this.conditions.length; t.cndindex < e; t.cndindex++)
            if (this.conditions[t.cndindex].run())
                i = !0;
            else if (!this.orblock)
                return !1;
        return !this.orblock || i
    }
    ,
    o.prototype.retrigger = function() {
        this.runtime.execcount++;
        var t, e = this.runtime.getCurrentEventStack().cndindex, i = this.runtime.pushEventStack(this);
        if (!this.orblock)
            for (i.cndindex = e + 1,
            t = this.conditions.length; i.cndindex < t; i.cndindex++)
                if (!this.conditions[i.cndindex].run())
                    return this.runtime.popEventStack(),
                    !1;
        return this.run_actions_and_subevents(),
        this.runtime.popEventStack(),
        !0
    }
    ,
    o.prototype.isFirstConditionOfType = function(t) {
        var e = t.index;
        if (0 === e)
            return !0;
        for (--e; e >= 0; --e)
            if (this.conditions[e].type === t.type)
                return !1;
        return !0
    }
    ,
    cr.eventblock = o,
    h.prototype.postInit = function() {
        var t, e, i;
        for (t = 0,
        e = this.parameters.length; t < e; t++)
            (i = this.parameters[t]).postInit(),
            i.variesPerInstance && (this.anyParamVariesPerInstance = !0)
    }
    ,
    h.prototype.run_true = function() {
        return !0
    }
    ,
    h.prototype.run_system = function() {
        var t, e;
        for (t = 0,
        e = this.parameters.length; t < e; t++)
            this.results[t] = this.parameters[t].get();
        return cr.xor(this.func.apply(this.runtime.system, this.results), this.inverted)
    }
    ,
    h.prototype.run_static = function() {
        var t, e;
        for (t = 0,
        e = this.parameters.length; t < e; t++)
            this.results[t] = this.parameters[t].get();
        var i = this.func.apply(this.behaviortype ? this.behaviortype : this.type, this.results);
        return this.type.applySolToContainer(),
        i
    }
    ,
    h.prototype.run_object = function() {
        var t, e, i, n, r, s, o, a, h, c, l, u, p = this.type, d = p.getCurrentSol(), f = this.block.orblock && !this.trigger, g = 0, y = p.is_contained, m = p.is_family, _ = p.family_index, v = this.beh_index, b = v > -1, w = this.anyParamVariesPerInstance, x = this.parameters, T = this.results, S = this.inverted, C = this.func;
        if (w)
            for (e = 0,
            r = x.length; e < r; ++e)
                (s = x[e]).variesPerInstance || (T[e] = s.get(0));
        else
            for (e = 0,
            r = x.length; e < r; ++e)
                T[e] = x[e].get(0);
        if (d.select_all) {
            for (cr.clearArray(d.instances),
            cr.clearArray(d.else_instances),
            t = 0,
            n = (l = p.instances).length; t < n; ++t) {
                if (a = l[t],
                w)
                    for (e = 0,
                    r = x.length; e < r; ++e)
                        (s = x[e]).variesPerInstance && (T[e] = s.get(t));
                b ? (g = 0,
                m && (g = a.type.family_beh_map[_]),
                o = C.apply(a.behavior_insts[v + g], T)) : o = C.apply(a, T),
                cr.xor(o, S) ? d.instances.push(a) : f && d.else_instances.push(a)
            }
            return p.finish && p.finish(!0),
            d.select_all = !1,
            p.applySolToContainer(),
            d.hasObjects()
        }
        i = 0;
        var A = f && !this.block.isFirstConditionOfType(this)
          , k = !1;
        for (t = 0,
        n = (l = A ? d.else_instances : d.instances).length; t < n; ++t) {
            if (a = l[t],
            w)
                for (e = 0,
                r = x.length; e < r; ++e)
                    (s = x[e]).variesPerInstance && (T[e] = s.get(t));
            if (b ? (g = 0,
            m && (g = a.type.family_beh_map[_]),
            o = C.apply(a.behavior_insts[v + g], T)) : o = C.apply(a, T),
            cr.xor(o, S))
                if (k = !0,
                A) {
                    if (d.instances.push(a),
                    y)
                        for (e = 0,
                        r = a.siblings.length; e < r; e++)
                            (h = a.siblings[e]).type.getCurrentSol().instances.push(h)
                } else {
                    if (l[i] = a,
                    y)
                        for (e = 0,
                        r = a.siblings.length; e < r; e++)
                            (h = a.siblings[e]).type.getCurrentSol().instances[i] = h;
                    i++
                }
            else if (A) {
                if (l[i] = a,
                y)
                    for (e = 0,
                    r = a.siblings.length; e < r; e++)
                        (h = a.siblings[e]).type.getCurrentSol().else_instances[i] = h;
                i++
            } else if (f && (d.else_instances.push(a),
            y))
                for (e = 0,
                r = a.siblings.length; e < r; e++)
                    (h = a.siblings[e]).type.getCurrentSol().else_instances.push(h)
        }
        if (cr.truncateArray(l, i),
        y)
            for (t = 0,
            n = (u = p.container).length; t < n; t++)
                c = u[t].getCurrentSol(),
                A ? cr.truncateArray(c.else_instances, i) : cr.truncateArray(c.instances, i);
        var E = k;
        if (A && !k)
            for (t = 0,
            n = d.instances.length; t < n; t++) {
                if (a = d.instances[t],
                w)
                    for (e = 0,
                    r = x.length; e < r; e++)
                        (s = x[e]).variesPerInstance && (T[e] = s.get(t));
                if (o = b ? C.apply(a.behavior_insts[v], T) : C.apply(a, T),
                cr.xor(o, S)) {
                    k = !0;
                    break
                }
            }
        return p.finish && p.finish(E || f),
        f ? k : d.hasObjects()
    }
    ,
    cr.condition = h,
    c.prototype.postInit = function() {
        var t, e, i;
        for (t = 0,
        e = this.parameters.length; t < e; t++)
            (i = this.parameters[t]).postInit(),
            i.variesPerInstance && (this.anyParamVariesPerInstance = !0)
    }
    ,
    c.prototype.run_system = function() {
        var t, e, i = this.runtime, n = this.parameters, r = this.results;
        for (t = 0,
        e = n.length; t < e; ++t)
            r[t] = n[t].get();
        return this.func.apply(i.system, r)
    }
    ,
    c.prototype.run_object = function() {
        var t, e, i, n, r, s, o, a = this.type, h = this.beh_index, c = a.family_index, l = this.anyParamVariesPerInstance, u = this.parameters, p = this.results, d = this.func, f = a.getCurrentSol().getObjects(), g = a.is_family, y = h > -1;
        if (l)
            for (e = 0,
            n = u.length; e < n; ++e)
                (r = u[e]).variesPerInstance || (p[e] = r.get(0));
        else
            for (e = 0,
            n = u.length; e < n; ++e)
                p[e] = u[e].get(0);
        for (t = 0,
        i = f.length; t < i; ++t) {
            if (s = f[t],
            l)
                for (e = 0,
                n = u.length; e < n; ++e)
                    (r = u[e]).variesPerInstance && (p[e] = r.get(t));
            y ? (o = 0,
            g && (o = s.type.family_beh_map[c]),
            d.apply(s.behavior_insts[h + o], p)) : d.apply(s, p)
        }
        return !1
    }
    ,
    cr.action = c;
    var l = []
      , u = -1;
    function p() {
        return u++,
        l.length === u && l.push(new cr.expvalue),
        l[u]
    }
    function d() {
        u--
    }
    function f(t, e) {
        var i, n, r;
        switch (this.owner = t,
        this.block = t.block,
        this.sheet = t.sheet,
        this.runtime = t.runtime,
        this.type = e[0],
        this.expression = null,
        this.solindex = 0,
        this.get = null,
        this.combosel = 0,
        this.layout = null,
        this.key = 0,
        this.object = null,
        this.index = 0,
        this.varname = null,
        this.eventvar = null,
        this.fileinfo = null,
        this.subparams = null,
        this.variadicret = null,
        this.subparams = null,
        this.variadicret = null,
        this.variesPerInstance = !1,
        e[0]) {
        case 0:
        case 7:
            this.expression = new cr.expNode(this,e[1]),
            this.solindex = 0,
            this.get = this.get_exp;
            break;
        case 1:
            this.expression = new cr.expNode(this,e[1]),
            this.solindex = 0,
            this.get = this.get_exp_str;
            break;
        case 5:
            this.expression = new cr.expNode(this,e[1]),
            this.solindex = 0,
            this.get = this.get_layer;
            break;
        case 3:
        case 8:
            this.combosel = e[1],
            this.get = this.get_combosel;
            break;
        case 6:
            this.layout = this.runtime.layouts[e[1]],
            this.get = this.get_layout;
            break;
        case 9:
            this.key = e[1],
            this.get = this.get_key;
            break;
        case 4:
            this.object = this.runtime.types_by_index[e[1]],
            this.get = this.get_object,
            this.block.addSolModifier(this.object),
            this.owner instanceof cr.action ? this.block.setSolWriterAfterCnds() : this.block.parent && this.block.parent.setSolWriterAfterCnds();
            break;
        case 10:
            this.index = e[1],
            t.type && t.type.is_family ? (this.get = this.get_familyvar,
            this.variesPerInstance = !0) : this.get = this.get_instvar;
            break;
        case 11:
            this.varname = e[1],
            this.eventvar = null,
            this.get = this.get_eventvar;
            break;
        case 2:
        case 12:
            this.fileinfo = e[1],
            this.get = this.get_audiofile;
            break;
        case 13:
            for (this.get = this.get_variadic,
            this.subparams = [],
            this.variadicret = [],
            i = 1,
            n = e.length; i < n; i++)
                r = new cr.parameter(this.owner,e[i]),
                cr.seal(r),
                this.subparams.push(r),
                this.variadicret.push(0)
        }
    }
    function g(t, e, i) {
        this.sheet = t,
        this.parent = e,
        this.runtime = t.runtime,
        this.solModifiers = [],
        this.name = i[1],
        this.vartype = i[2],
        this.initial = i[3],
        this.is_static = !!i[4],
        this.is_constant = !!i[5],
        this.sid = i[6],
        this.runtime.varsBySid[this.sid.toString()] = this,
        this.data = this.initial,
        this.parent ? (this.is_static || this.is_constant ? this.localIndex = -1 : this.localIndex = this.runtime.stackLocalCount++,
        this.runtime.all_local_vars.push(this)) : (this.localIndex = -1,
        this.runtime.all_global_vars.push(this))
    }
    function y(t, e, i) {
        this.sheet = t,
        this.parent = e,
        this.runtime = t.runtime,
        this.solModifiers = [],
        this.include_sheet = null,
        this.include_sheet_name = i[1],
        this.active = !0
    }
    function m() {
        this.temp_parents_arr = [],
        this.reset(null),
        cr.seal(this)
    }
    f.prototype.postInit = function() {
        var t, e;
        if (11 === this.type)
            this.eventvar = this.runtime.getEventVariableByName(this.varname, this.block.parent);
        else if (13 === this.type)
            for (t = 0,
            e = this.subparams.length; t < e; t++)
                this.subparams[t].postInit();
        this.expression && this.expression.postInit()
    }
    ,
    f.prototype.maybeVaryForType = function(t) {
        this.variesPerInstance || t && (t.plugin.singleglobal || (this.variesPerInstance = !0))
    }
    ,
    f.prototype.setVaries = function() {
        this.variesPerInstance = !0
    }
    ,
    f.prototype.get_exp = function(t) {
        this.solindex = t || 0;
        var e = p();
        return this.expression.get(e),
        d(),
        e.data
    }
    ,
    f.prototype.get_exp_str = function(t) {
        this.solindex = t || 0;
        var e = p();
        return this.expression.get(e),
        d(),
        cr.is_string(e.data) ? e.data : ""
    }
    ,
    f.prototype.get_object = function() {
        return this.object
    }
    ,
    f.prototype.get_combosel = function() {
        return this.combosel
    }
    ,
    f.prototype.get_layer = function(t) {
        this.solindex = t || 0;
        var e = p();
        return this.expression.get(e),
        d(),
        e.is_number() ? this.runtime.getLayerByNumber(e.data) : this.runtime.getLayerByName(e.data)
    }
    ,
    f.prototype.get_layout = function() {
        return this.layout
    }
    ,
    f.prototype.get_key = function() {
        return this.key
    }
    ,
    f.prototype.get_instvar = function() {
        return this.index
    }
    ,
    f.prototype.get_familyvar = function(t) {
        var e = t || 0
          , i = this.owner.type
          , n = null
          , r = i.getCurrentSol()
          , s = r.getObjects();
        if (s.length)
            n = s[e % s.length].type;
        else if (r.else_instances.length)
            n = r.else_instances[e % r.else_instances.length].type;
        else {
            if (!i.instances.length)
                return 0;
            n = i.instances[e % i.instances.length].type
        }
        return this.index + n.family_var_map[i.family_index]
    }
    ,
    f.prototype.get_eventvar = function() {
        return this.eventvar
    }
    ,
    f.prototype.get_audiofile = function() {
        return this.fileinfo
    }
    ,
    f.prototype.get_variadic = function() {
        var t, e;
        for (t = 0,
        e = this.subparams.length; t < e; t++)
            this.variadicret[t] = this.subparams[t].get();
        return this.variadicret
    }
    ,
    cr.parameter = f,
    g.prototype.postInit = function() {
        this.solModifiers = n(this.solModifiers)
    }
    ,
    g.prototype.setValue = function(t) {
        var e = this.runtime.getCurrentLocalVarStack();
        this.parent && !this.is_static && e ? (this.localIndex >= e.length && (e.length = this.localIndex + 1),
        e[this.localIndex] = t) : this.data = t
    }
    ,
    g.prototype.getValue = function() {
        var t = this.runtime.getCurrentLocalVarStack();
        return !this.parent || this.is_static || !t || this.is_constant ? this.data : this.localIndex >= t.length ? this.initial : void 0 === t[this.localIndex] ? this.initial : t[this.localIndex]
    }
    ,
    g.prototype.run = function() {
        !this.parent || this.is_static || this.is_constant || this.setValue(this.initial)
    }
    ,
    cr.eventvariable = g,
    y.prototype.toString = function() {
        return "include:" + this.include_sheet.toString()
    }
    ,
    y.prototype.postInit = function() {
        this.include_sheet = this.runtime.eventsheets[this.include_sheet_name],
        this.sheet.includes.add(this),
        this.solModifiers = n(this.solModifiers);
        for (var t = this.parent; t; )
            t.group && t.contained_includes.push(this),
            t = t.parent;
        this.updateActive()
    }
    ,
    y.prototype.run = function() {
        this.parent && this.runtime.pushCleanSol(this.runtime.types_by_index),
        this.include_sheet.hasRun || this.include_sheet.run(!0),
        this.parent && this.runtime.popSol(this.runtime.types_by_index)
    }
    ,
    y.prototype.updateActive = function() {
        for (var t = this.parent; t; ) {
            if (t.group && !t.group_active)
                return void (this.active = !1);
            t = t.parent
        }
        this.active = !0
    }
    ,
    y.prototype.isActive = function() {
        return this.active
    }
    ,
    cr.eventinclude = y,
    m.prototype.reset = function(t) {
        this.current_event = t,
        this.cndindex = 0,
        this.actindex = 0,
        cr.clearArray(this.temp_parents_arr),
        this.last_event_true = !1,
        this.else_branch_ran = !1,
        this.any_true_state = !1
    }
    ,
    m.prototype.isModifierAfterCnds = function() {
        return !!this.current_event.solWriterAfterCnds || this.cndindex < this.current_event.conditions.length - 1 && !!this.current_event.solModifiers.length
    }
    ,
    cr.eventStackFrame = m
}(),
function() {
    function t(t, e) {
        this.owner = t,
        this.runtime = t.runtime,
        this.type = e[0],
        this.get = [this.eval_int, this.eval_float, this.eval_string, this.eval_unaryminus, this.eval_add, this.eval_subtract, this.eval_multiply, this.eval_divide, this.eval_mod, this.eval_power, this.eval_and, this.eval_or, this.eval_equal, this.eval_notequal, this.eval_less, this.eval_lessequal, this.eval_greater, this.eval_greaterequal, this.eval_conditional, this.eval_system_exp, this.eval_object_exp, this.eval_instvar_exp, this.eval_behavior_exp, this.eval_eventvar_exp][this.type];
        var i, n, r = null;
        switch (this.value = null,
        this.first = null,
        this.second = null,
        this.third = null,
        this.func = null,
        this.results = null,
        this.parameters = null,
        this.object_type = null,
        this.beh_index = -1,
        this.instance_expr = null,
        this.varindex = -1,
        this.behavior_type = null,
        this.varname = null,
        this.eventvar = null,
        this.return_string = !1,
        this.type) {
        case 0:
        case 1:
        case 2:
            this.value = e[1];
            break;
        case 3:
            this.first = new cr.expNode(t,e[1]);
            break;
        case 18:
            this.first = new cr.expNode(t,e[1]),
            this.second = new cr.expNode(t,e[2]),
            this.third = new cr.expNode(t,e[3]);
            break;
        case 19:
            this.func = this.runtime.GetObjectReference(e[1]),
            this.func !== cr.system_object.prototype.exps.random && this.func !== cr.system_object.prototype.exps.choose || this.owner.setVaries(),
            this.results = [],
            this.parameters = [],
            3 === e.length ? (r = e[2],
            this.results.length = r.length + 1) : this.results.length = 1;
            break;
        case 20:
            this.object_type = this.runtime.types_by_index[e[1]],
            this.beh_index = -1,
            this.func = this.runtime.GetObjectReference(e[2]),
            this.return_string = e[3],
            cr.plugins_.Function && this.func === cr.plugins_.Function.prototype.exps.Call && this.owner.setVaries(),
            e[4] ? this.instance_expr = new cr.expNode(t,e[4]) : this.instance_expr = null,
            this.results = [],
            this.parameters = [],
            6 === e.length ? (r = e[5],
            this.results.length = r.length + 1) : this.results.length = 1;
            break;
        case 21:
            this.object_type = this.runtime.types_by_index[e[1]],
            this.return_string = e[2],
            e[3] ? this.instance_expr = new cr.expNode(t,e[3]) : this.instance_expr = null,
            this.varindex = e[4];
            break;
        case 22:
            this.object_type = this.runtime.types_by_index[e[1]],
            this.behavior_type = this.object_type.getBehaviorByName(e[2]),
            this.beh_index = this.object_type.getBehaviorIndexByName(e[2]),
            this.func = this.runtime.GetObjectReference(e[3]),
            this.return_string = e[4],
            e[5] ? this.instance_expr = new cr.expNode(t,e[5]) : this.instance_expr = null,
            this.results = [],
            this.parameters = [],
            7 === e.length ? (r = e[6],
            this.results.length = r.length + 1) : this.results.length = 1;
            break;
        case 23:
            this.varname = e[1],
            this.eventvar = null
        }
        if (this.owner.maybeVaryForType(this.object_type),
        this.type >= 4 && this.type <= 17 && (this.first = new cr.expNode(t,e[1]),
        this.second = new cr.expNode(t,e[2])),
        r)
            for (i = 0,
            n = r.length; i < n; i++)
                this.parameters.push(new cr.expNode(t,r[i]));
        cr.seal(this)
    }
    t.prototype.postInit = function() {
        var t, e;
        if (23 === this.type && (this.eventvar = this.owner.runtime.getEventVariableByName(this.varname, this.owner.block.parent)),
        this.first && this.first.postInit(),
        this.second && this.second.postInit(),
        this.third && this.third.postInit(),
        this.instance_expr && this.instance_expr.postInit(),
        this.parameters)
            for (t = 0,
            e = this.parameters.length; t < e; t++)
                this.parameters[t].postInit()
    }
    ;
    var e = []
      , i = -1;
    function n() {
        return ++i,
        e.length === i && e.push(new cr.expvalue),
        e[i]
    }
    function r() {
        --i
    }
    function s(t, e, i) {
        var n, r;
        for (n = 0,
        r = t.length; n < r; ++n)
            t[n].get(i),
            e[n + 1] = i.data
    }
    function o(t, e) {
        this.type = t || cr.exptype.Integer,
        this.data = e || 0,
        this.object_class = null,
        this.type == cr.exptype.Integer && (this.data = Math.floor(this.data)),
        cr.seal(this)
    }
    t.prototype.eval_system_exp = function(t) {
        var e = this.parameters
          , i = this.results;
        i[0] = t,
        s(e, i, n()),
        r(),
        this.func.apply(this.runtime.system, i)
    }
    ,
    t.prototype.eval_object_exp = function(t) {
        var e = this.object_type
          , i = this.results
          , o = this.parameters
          , a = this.instance_expr
          , h = this.func
          , c = this.owner.solindex
          , l = e.getCurrentSol()
          , u = l.getObjects();
        if (!u.length) {
            if (!l.else_instances.length)
                return void (this.return_string ? t.set_string("") : t.set_int(0));
            u = l.else_instances
        }
        i[0] = t,
        t.object_class = e;
        var p = n();
        s(o, i, p),
        a && (a.get(p),
        p.is_number() && (c = p.data,
        u = e.instances)),
        r();
        var d = u.length;
        (c >= d || c <= -d) && (c %= d),
        c < 0 && (c += d);
        h.apply(u[c], i)
    }
    ,
    t.prototype.eval_behavior_exp = function(t) {
        var e = this.object_type
          , i = this.results
          , o = this.parameters
          , a = this.instance_expr
          , h = this.beh_index
          , c = this.func
          , l = this.owner.solindex
          , u = e.getCurrentSol()
          , p = u.getObjects();
        if (!p.length) {
            if (!u.else_instances.length)
                return void (this.return_string ? t.set_string("") : t.set_int(0));
            p = u.else_instances
        }
        i[0] = t,
        t.object_class = e;
        var d = n();
        s(o, i, d),
        a && (a.get(d),
        d.is_number() && (l = d.data,
        p = e.instances)),
        r();
        var f = p.length;
        (l >= f || l <= -f) && (l %= f),
        l < 0 && (l += f);
        var g = p[l]
          , y = 0;
        e.is_family && (y = g.type.family_beh_map[e.family_index]);
        c.apply(g.behavior_insts[h + y], i)
    }
    ,
    t.prototype.eval_instvar_exp = function(t) {
        var e, i = this.instance_expr, s = this.object_type, o = this.varindex, a = this.owner.solindex, h = s.getCurrentSol(), c = h.getObjects();
        if (!c.length) {
            if (!h.else_instances.length)
                return void (this.return_string ? t.set_string("") : t.set_int(0));
            c = h.else_instances
        }
        if (i) {
            var l = n();
            if (i.get(l),
            l.is_number()) {
                a = l.data;
                var u = s.instances;
                0 !== u.length && (a %= u.length) < 0 && (a += u.length);
                var p = (e = s.getInstanceByIID(a)).instance_vars[o];
                return cr.is_string(p) ? t.set_string(p) : t.set_float(p),
                void r()
            }
            r()
        }
        var d = c.length;
        (a >= d || a <= -d) && (a %= d),
        a < 0 && (a += d),
        e = c[a];
        var f = 0;
        s.is_family && (f = e.type.family_var_map[s.family_index]);
        p = e.instance_vars[o + f];
        cr.is_string(p) ? t.set_string(p) : t.set_float(p)
    }
    ,
    t.prototype.eval_int = function(t) {
        t.type = cr.exptype.Integer,
        t.data = this.value
    }
    ,
    t.prototype.eval_float = function(t) {
        t.type = cr.exptype.Float,
        t.data = this.value
    }
    ,
    t.prototype.eval_string = function(t) {
        t.type = cr.exptype.String,
        t.data = this.value
    }
    ,
    t.prototype.eval_unaryminus = function(t) {
        this.first.get(t),
        t.is_number() && (t.data = -t.data)
    }
    ,
    t.prototype.eval_add = function(t) {
        this.first.get(t);
        var e = n();
        this.second.get(e),
        t.is_number() && e.is_number() && (t.data += e.data,
        e.is_float() && t.make_float()),
        r()
    }
    ,
    t.prototype.eval_subtract = function(t) {
        this.first.get(t);
        var e = n();
        this.second.get(e),
        t.is_number() && e.is_number() && (t.data -= e.data,
        e.is_float() && t.make_float()),
        r()
    }
    ,
    t.prototype.eval_multiply = function(t) {
        this.first.get(t);
        var e = n();
        this.second.get(e),
        t.is_number() && e.is_number() && (t.data *= e.data,
        e.is_float() && t.make_float()),
        r()
    }
    ,
    t.prototype.eval_divide = function(t) {
        this.first.get(t);
        var e = n();
        this.second.get(e),
        t.is_number() && e.is_number() && (t.data /= e.data,
        t.make_float()),
        r()
    }
    ,
    t.prototype.eval_mod = function(t) {
        this.first.get(t);
        var e = n();
        this.second.get(e),
        t.is_number() && e.is_number() && (t.data %= e.data,
        e.is_float() && t.make_float()),
        r()
    }
    ,
    t.prototype.eval_power = function(t) {
        this.first.get(t);
        var e = n();
        this.second.get(e),
        t.is_number() && e.is_number() && (t.data = Math.pow(t.data, e.data),
        e.is_float() && t.make_float()),
        r()
    }
    ,
    t.prototype.eval_and = function(t) {
        this.first.get(t);
        var e = n();
        this.second.get(e),
        e.is_string() || t.is_string() ? this.eval_and_stringconcat(t, e) : this.eval_and_logical(t, e),
        r()
    }
    ,
    t.prototype.eval_and_stringconcat = function(t, e) {
        t.is_string() && e.is_string() ? this.eval_and_stringconcat_str_str(t, e) : this.eval_and_stringconcat_num(t, e)
    }
    ,
    t.prototype.eval_and_stringconcat_str_str = function(t, e) {
        t.data += e.data
    }
    ,
    t.prototype.eval_and_stringconcat_num = function(t, e) {
        t.is_string() ? t.data += (Math.round(1e10 * e.data) / 1e10).toString() : t.set_string(t.data.toString() + e.data)
    }
    ,
    t.prototype.eval_and_logical = function(t, e) {
        t.set_int(t.data && e.data ? 1 : 0)
    }
    ,
    t.prototype.eval_or = function(t) {
        this.first.get(t);
        var e = n();
        this.second.get(e),
        t.is_number() && e.is_number() && (t.data || e.data ? t.set_int(1) : t.set_int(0)),
        r()
    }
    ,
    t.prototype.eval_conditional = function(t) {
        this.first.get(t),
        t.data ? this.second.get(t) : this.third.get(t)
    }
    ,
    t.prototype.eval_equal = function(t) {
        this.first.get(t);
        var e = n();
        this.second.get(e),
        t.set_int(t.data === e.data ? 1 : 0),
        r()
    }
    ,
    t.prototype.eval_notequal = function(t) {
        this.first.get(t);
        var e = n();
        this.second.get(e),
        t.set_int(t.data !== e.data ? 1 : 0),
        r()
    }
    ,
    t.prototype.eval_less = function(t) {
        this.first.get(t);
        var e = n();
        this.second.get(e),
        t.set_int(t.data < e.data ? 1 : 0),
        r()
    }
    ,
    t.prototype.eval_lessequal = function(t) {
        this.first.get(t);
        var e = n();
        this.second.get(e),
        t.set_int(t.data <= e.data ? 1 : 0),
        r()
    }
    ,
    t.prototype.eval_greater = function(t) {
        this.first.get(t);
        var e = n();
        this.second.get(e),
        t.set_int(t.data > e.data ? 1 : 0),
        r()
    }
    ,
    t.prototype.eval_greaterequal = function(t) {
        this.first.get(t);
        var e = n();
        this.second.get(e),
        t.set_int(t.data >= e.data ? 1 : 0),
        r()
    }
    ,
    t.prototype.eval_eventvar_exp = function(t) {
        var e = this.eventvar.getValue();
        cr.is_number(e) ? t.set_float(e) : t.set_string(e)
    }
    ,
    cr.expNode = t,
    o.prototype.is_int = function() {
        return this.type === cr.exptype.Integer
    }
    ,
    o.prototype.is_float = function() {
        return this.type === cr.exptype.Float
    }
    ,
    o.prototype.is_number = function() {
        return this.type === cr.exptype.Integer || this.type === cr.exptype.Float
    }
    ,
    o.prototype.is_string = function() {
        return this.type === cr.exptype.String
    }
    ,
    o.prototype.make_int = function() {
        this.is_int() || (this.is_float() ? this.data = Math.floor(this.data) : this.is_string() && (this.data = parseInt(this.data, 10)),
        this.type = cr.exptype.Integer)
    }
    ,
    o.prototype.make_float = function() {
        this.is_float() || (this.is_string() && (this.data = parseFloat(this.data)),
        this.type = cr.exptype.Float)
    }
    ,
    o.prototype.make_string = function() {
        this.is_string() || (this.data = this.data.toString(),
        this.type = cr.exptype.String)
    }
    ,
    o.prototype.set_int = function(t) {
        this.type = cr.exptype.Integer,
        this.data = Math.floor(t)
    }
    ,
    o.prototype.set_float = function(t) {
        this.type = cr.exptype.Float,
        this.data = t
    }
    ,
    o.prototype.set_string = function(t) {
        this.type = cr.exptype.String,
        this.data = t
    }
    ,
    o.prototype.set_any = function(t) {
        cr.is_number(t) ? (this.type = cr.exptype.Float,
        this.data = t) : cr.is_string(t) ? (this.type = cr.exptype.String,
        this.data = t.toString()) : (this.type = cr.exptype.Integer,
        this.data = 0)
    }
    ,
    cr.expvalue = o,
    cr.exptype = {
        Integer: 0,
        Float: 1,
        String: 2
    }
}(),
cr.system_object = function(t) {
    this.runtime = t,
    this.waits = []
}
,
cr.system_object.prototype.saveToJSON = function() {
    var t, e, i, n, r, s, o, a, h = {};
    h.waits = [];
    var c, l = h.waits;
    for (t = 0,
    e = this.waits.length; t < e; t++) {
        for (c = {
            t: (s = this.waits[t]).time,
            st: s.signaltag,
            s: s.signalled,
            ev: s.ev.sid,
            sm: [],
            sols: {}
        },
        s.ev.actions[s.actindex] && (c.act = s.ev.actions[s.actindex].sid),
        i = 0,
        n = s.solModifiers.length; i < n; i++)
            c.sm.push(s.solModifiers[i].sid);
        for (r in s.sols)
            if (s.sols.hasOwnProperty(r)) {
                for (o = this.runtime.types_by_index[parseInt(r, 10)],
                a = {
                    sa: s.sols[r].sa,
                    insts: []
                },
                i = 0,
                n = s.sols[r].insts.length; i < n; i++)
                    a.insts.push(s.sols[r].insts[i].uid);
                c.sols[o.sid.toString()] = a
            }
        l.push(c)
    }
    return h
}
,
cr.system_object.prototype.loadFromJSON = function(t) {
    var e, i, n, r, s, o, a, h, c, l, u, p, d, f = t.waits;
    for (cr.clearArray(this.waits),
    e = 0,
    i = f.length; e < i; e++)
        if (o = f[e],
        h = this.runtime.blocksBySid[o.ev.toString()]) {
            for (c = -1,
            n = 0,
            r = h.actions.length; n < r; n++)
                if (h.actions[n].sid === o.act) {
                    c = n;
                    break
                }
            if (-1 !== c) {
                for ((a = {}).sols = {},
                a.solModifiers = [],
                a.deleteme = !1,
                a.time = o.t,
                a.signaltag = o.st || "",
                a.signalled = !!o.s,
                a.ev = h,
                a.actindex = c,
                n = 0,
                r = o.sm.length; n < r; n++)
                    (l = this.runtime.getObjectTypeBySid(o.sm[n])) && a.solModifiers.push(l);
                for (s in o.sols)
                    if (o.sols.hasOwnProperty(s)) {
                        if (!(l = this.runtime.getObjectTypeBySid(parseInt(s, 10))))
                            continue;
                        for (p = {
                            sa: (u = o.sols[s]).sa,
                            insts: []
                        },
                        n = 0,
                        r = u.insts.length; n < r; n++)
                            (d = this.runtime.getObjectByUID(u.insts[n])) && p.insts.push(d);
                        a.sols[l.index.toString()] = p
                    }
                this.waits.push(a)
            }
        }
}
,
function() {
    var t = cr.system_object.prototype;
    function e() {}
    e.prototype.EveryTick = function() {
        return !0
    }
    ,
    e.prototype.OnLayoutStart = function() {
        return !0
    }
    ,
    e.prototype.OnLayoutEnd = function() {
        return !0
    }
    ,
    e.prototype.Compare = function(t, e, i) {
        return cr.do_cmp(t, e, i)
    }
    ,
    e.prototype.CompareTime = function(t, e) {
        var i = this.runtime.kahanTime.sum;
        if (0 === t) {
            var n = this.runtime.getCurrentCondition();
            return !n.extra.CompareTime_executed && i >= e && (n.extra.CompareTime_executed = !0,
            !0)
        }
        return cr.do_cmp(i, t, e)
    }
    ,
    e.prototype.LayerVisible = function(t) {
        return !!t && t.visible
    }
    ,
    e.prototype.LayerEmpty = function(t) {
        return !!t && !t.instances.length
    }
    ,
    e.prototype.LayerCmpOpacity = function(t, e, i) {
        return !!t && cr.do_cmp(100 * t.opacity, e, i)
    }
    ,
    e.prototype.Repeat = function(t) {
        var e, i = this.runtime.getCurrentEventStack(), n = i.current_event, r = i.isModifierAfterCnds(), s = this.runtime.pushLoopStack();
        if (r)
            for (e = 0; e < t && !s.stopped; e++)
                this.runtime.pushCopySol(n.solModifiers),
                s.index = e,
                n.retrigger(),
                this.runtime.popSol(n.solModifiers);
        else
            for (e = 0; e < t && !s.stopped; e++)
                s.index = e,
                n.retrigger();
        return this.runtime.popLoopStack(),
        !1
    }
    ,
    e.prototype.While = function(t) {
        var e, i = this.runtime.getCurrentEventStack(), n = i.current_event, r = i.isModifierAfterCnds(), s = this.runtime.pushLoopStack();
        if (r)
            for (e = 0; !s.stopped; e++)
                this.runtime.pushCopySol(n.solModifiers),
                s.index = e,
                n.retrigger() || (s.stopped = !0),
                this.runtime.popSol(n.solModifiers);
        else
            for (e = 0; !s.stopped; e++)
                s.index = e,
                n.retrigger() || (s.stopped = !0);
        return this.runtime.popLoopStack(),
        !1
    }
    ,
    e.prototype.For = function(t, e, i) {
        var n, r = this.runtime.getCurrentEventStack(), s = r.current_event, o = r.isModifierAfterCnds(), a = this.runtime.pushLoopStack(t);
        if (i < e)
            if (o)
                for (n = e; n >= i && !a.stopped; --n)
                    this.runtime.pushCopySol(s.solModifiers),
                    a.index = n,
                    s.retrigger(),
                    this.runtime.popSol(s.solModifiers);
            else
                for (n = e; n >= i && !a.stopped; --n)
                    a.index = n,
                    s.retrigger();
        else if (o)
            for (n = e; n <= i && !a.stopped; ++n)
                this.runtime.pushCopySol(s.solModifiers),
                a.index = n,
                s.retrigger(),
                this.runtime.popSol(s.solModifiers);
        else
            for (n = e; n <= i && !a.stopped; ++n)
                a.index = n,
                s.retrigger();
        return this.runtime.popLoopStack(),
        !1
    }
    ;
    var i = []
      , n = -1;
    function r(t, e) {
        var i = t.extra.c2_feo_val
          , n = e.extra.c2_feo_val;
        return cr.is_number(i) && cr.is_number(n) ? i - n : (i = "" + i) < (n = "" + n) ? -1 : i > n ? 1 : 0
    }
    e.prototype.ForEach = function(t) {
        var e = t.getCurrentSol();
        n++,
        i.length === n && i.push([]);
        var r = i[n];
        cr.shallowAssignArray(r, e.getObjects());
        var s, o, a, h, c, l, u, p = this.runtime.getCurrentEventStack(), d = p.current_event, f = p.isModifierAfterCnds(), g = this.runtime.pushLoopStack(), y = t.is_contained;
        if (f)
            for (s = 0,
            o = r.length; s < o && !g.stopped; s++) {
                if (this.runtime.pushCopySol(d.solModifiers),
                c = r[s],
                (e = t.getCurrentSol()).select_all = !1,
                cr.clearArray(e.instances),
                e.instances[0] = c,
                y)
                    for (a = 0,
                    h = c.siblings.length; a < h; a++)
                        (u = (l = c.siblings[a]).type.getCurrentSol()).select_all = !1,
                        cr.clearArray(u.instances),
                        u.instances[0] = l;
                g.index = s,
                d.retrigger(),
                this.runtime.popSol(d.solModifiers)
            }
        else
            for (e.select_all = !1,
            cr.clearArray(e.instances),
            s = 0,
            o = r.length; s < o && !g.stopped; s++) {
                if (c = r[s],
                e.instances[0] = c,
                y)
                    for (a = 0,
                    h = c.siblings.length; a < h; a++)
                        (u = (l = c.siblings[a]).type.getCurrentSol()).select_all = !1,
                        cr.clearArray(u.instances),
                        u.instances[0] = l;
                g.index = s,
                d.retrigger()
            }
        return cr.clearArray(r),
        this.runtime.popLoopStack(),
        n--,
        !1
    }
    ,
    e.prototype.ForEachOrdered = function(t, e, s) {
        var o = t.getCurrentSol();
        n++,
        i.length === n && i.push([]);
        var a = i[n];
        cr.shallowAssignArray(a, o.getObjects());
        var h, c, l, u, p, d, f, g = this.runtime.getCurrentEventStack(), y = g.current_event, m = this.runtime.getCurrentCondition(), _ = g.isModifierAfterCnds(), v = this.runtime.pushLoopStack();
        for (h = 0,
        c = a.length; h < c; h++)
            a[h].extra.c2_feo_val = m.parameters[1].get(h);
        a.sort(r),
        1 === s && a.reverse();
        var b = t.is_contained;
        if (_)
            for (h = 0,
            c = a.length; h < c && !v.stopped; h++) {
                if (this.runtime.pushCopySol(y.solModifiers),
                p = a[h],
                (o = t.getCurrentSol()).select_all = !1,
                cr.clearArray(o.instances),
                o.instances[0] = p,
                b)
                    for (l = 0,
                    u = p.siblings.length; l < u; l++)
                        (f = (d = p.siblings[l]).type.getCurrentSol()).select_all = !1,
                        cr.clearArray(f.instances),
                        f.instances[0] = d;
                v.index = h,
                y.retrigger(),
                this.runtime.popSol(y.solModifiers)
            }
        else
            for (o.select_all = !1,
            cr.clearArray(o.instances),
            h = 0,
            c = a.length; h < c && !v.stopped; h++) {
                if (p = a[h],
                o.instances[0] = p,
                b)
                    for (l = 0,
                    u = p.siblings.length; l < u; l++)
                        (f = (d = p.siblings[l]).type.getCurrentSol()).select_all = !1,
                        cr.clearArray(f.instances),
                        f.instances[0] = d;
                v.index = h,
                y.retrigger()
            }
        return cr.clearArray(a),
        this.runtime.popLoopStack(),
        n--,
        !1
    }
    ,
    e.prototype.PickByComparison = function(t, e, r, s) {
        var o, a, h, c;
        if (t) {
            n++,
            i.length === n && i.push([]);
            var l = i[n]
              , u = t.getCurrentSol();
            cr.shallowAssignArray(l, u.getObjects()),
            u.select_all && cr.clearArray(u.else_instances);
            var p = this.runtime.getCurrentCondition();
            for (o = 0,
            h = 0,
            a = l.length; o < a; o++)
                c = l[o],
                l[h] = c,
                e = p.parameters[1].get(o),
                s = p.parameters[3].get(o),
                cr.do_cmp(e, r, s) ? h++ : u.else_instances.push(c);
            return cr.truncateArray(l, h),
            u.select_all = !1,
            cr.shallowAssignArray(u.instances, l),
            cr.clearArray(l),
            n--,
            t.applySolToContainer(),
            !!u.instances.length
        }
    }
    ,
    e.prototype.PickByEvaluate = function(t, e) {
        var r, s, o, a;
        if (t) {
            n++,
            i.length === n && i.push([]);
            var h = i[n]
              , c = t.getCurrentSol();
            cr.shallowAssignArray(h, c.getObjects()),
            c.select_all && cr.clearArray(c.else_instances);
            var l = this.runtime.getCurrentCondition();
            for (r = 0,
            o = 0,
            s = h.length; r < s; r++)
                a = h[r],
                h[o] = a,
                l.parameters[1].get(r) ? o++ : c.else_instances.push(a);
            return cr.truncateArray(h, o),
            c.select_all = !1,
            cr.shallowAssignArray(c.instances, h),
            cr.clearArray(h),
            n--,
            t.applySolToContainer(),
            !!c.instances.length
        }
    }
    ,
    e.prototype.TriggerOnce = function() {
        var t = this.runtime.getCurrentCondition().extra;
        void 0 === t.TriggerOnce_lastTick && (t.TriggerOnce_lastTick = -1);
        var e = t.TriggerOnce_lastTick
          , i = this.runtime.tickcount;
        return t.TriggerOnce_lastTick = i,
        this.runtime.layout_first_tick || e !== i - 1
    }
    ,
    e.prototype.Every = function(t) {
        var e = this.runtime.getCurrentCondition()
          , i = e.extra.Every_lastTime || 0
          , n = this.runtime.kahanTime.sum;
        void 0 === e.extra.Every_seconds && (e.extra.Every_seconds = t);
        var r = e.extra.Every_seconds;
        return n >= i + r ? (e.extra.Every_lastTime = i + r,
        n >= e.extra.Every_lastTime + .04 && (e.extra.Every_lastTime = n),
        e.extra.Every_seconds = t,
        !0) : (n < i - .1 && (e.extra.Every_lastTime = n),
        !1)
    }
    ,
    e.prototype.PickNth = function(t, e) {
        if (!t)
            return !1;
        var i = t.getCurrentSol()
          , n = i.getObjects();
        if ((e = cr.floor(e)) < 0 || e >= n.length)
            return !1;
        var r = n[e];
        return i.pick_one(r),
        t.applySolToContainer(),
        !0
    }
    ,
    e.prototype.PickRandom = function(t) {
        if (!t)
            return !1;
        var e = t.getCurrentSol()
          , i = e.getObjects()
          , n = cr.floor(Math.random() * i.length);
        if (n >= i.length)
            return !1;
        var r = i[n];
        return e.pick_one(r),
        t.applySolToContainer(),
        !0
    }
    ,
    e.prototype.CompareVar = function(t, e, i) {
        return cr.do_cmp(t.getValue(), e, i)
    }
    ,
    e.prototype.IsGroupActive = function(t) {
        var e = this.runtime.groups_by_name[t.toLowerCase()];
        return e && e.group_active
    }
    ,
    e.prototype.IsPreview = function() {
        return "undefined" != typeof cr_is_preview
    }
    ,
    e.prototype.PickAll = function(t) {
        return !!t && (!!t.instances.length && (t.getCurrentSol().select_all = !0,
        t.applySolToContainer(),
        !0))
    }
    ,
    e.prototype.IsMobile = function() {
        return this.runtime.isMobile
    }
    ,
    e.prototype.CompareBetween = function(t, e, i) {
        return t >= e && t <= i
    }
    ,
    e.prototype.Else = function() {
        var t = this.runtime.getCurrentEventStack();
        return !t.else_branch_ran && !t.last_event_true
    }
    ,
    e.prototype.OnLoadFinished = function() {
        return !0
    }
    ,
    e.prototype.OnCanvasSnapshot = function() {
        return !0
    }
    ,
    e.prototype.EffectsSupported = function() {
        return !!this.runtime.glwrap
    }
    ,
    e.prototype.OnSaveComplete = function() {
        return !0
    }
    ,
    e.prototype.OnSaveFailed = function() {
        return !0
    }
    ,
    e.prototype.OnLoadComplete = function() {
        return !0
    }
    ,
    e.prototype.OnLoadFailed = function() {
        return !0
    }
    ,
    e.prototype.ObjectUIDExists = function(t) {
        return !!this.runtime.getObjectByUID(t)
    }
    ,
    e.prototype.IsOnPlatform = function(t) {
        var e = this.runtime;
        switch (t) {
        case 0:
            return !(e.isDomFree || e.isNodeWebkit || e.isCordova || e.isWinJS || e.isWindowsPhone8 || e.isBlackberry10 || e.isAmazonWebApp);
        case 1:
            return e.isiOS;
        case 2:
            return e.isAndroid;
        case 3:
            return e.isWindows8App;
        case 4:
            return e.isWindowsPhone8;
        case 5:
            return e.isBlackberry10;
        case 6:
            return e.isTizen;
        case 7:
            return e.isCocoonJs;
        case 8:
            return e.isCordova;
        case 9:
            return e.isArcade;
        case 10:
            return e.isNodeWebkit;
        case 11:
            return e.isCrosswalk;
        case 12:
            return e.isAmazonWebApp;
        case 13:
            return e.isWindows10;
        default:
            return !1
        }
    }
    ;
    var s = null
      , o = ""
      , a = "";
    function h(t, e) {
        return s && t === o && e === a || (s = new RegExp(t,e),
        o = t,
        a = e),
        s.lastIndex = 0,
        s
    }
    e.prototype.RegexTest = function(t, e, i) {
        return h(e, i).test(t)
    }
    ;
    var c = [];
    function l() {}
    e.prototype.PickOverlappingPoint = function(t, e, i) {
        if (!t)
            return !1;
        var n, r, s, o = t.getCurrentSol(), a = o.getObjects(), h = this.runtime.getCurrentEventStack().current_event.orblock, l = this.runtime.getCurrentCondition();
        for (o.select_all ? (cr.shallowAssignArray(c, a),
        cr.clearArray(o.else_instances),
        o.select_all = !1,
        cr.clearArray(o.instances)) : h ? (cr.shallowAssignArray(c, o.else_instances),
        cr.clearArray(o.else_instances)) : (cr.shallowAssignArray(c, a),
        cr.clearArray(o.instances)),
        n = 0,
        r = c.length; n < r; ++n)
            (s = c[n]).update_bbox(),
            cr.xor(s.contains_pt(e, i), l.inverted) ? o.instances.push(s) : o.else_instances.push(s);
        return t.applySolToContainer(),
        cr.xor(!!o.instances.length, l.inverted)
    }
    ,
    e.prototype.IsNaN = function(t) {
        return !!isNaN(t)
    }
    ,
    e.prototype.AngleWithin = function(t, e, i) {
        return cr.angleDiff(cr.to_radians(t), cr.to_radians(i)) <= cr.to_radians(e)
    }
    ,
    e.prototype.IsClockwiseFrom = function(t, e) {
        return cr.angleClockwise(cr.to_radians(t), cr.to_radians(e))
    }
    ,
    e.prototype.IsBetweenAngles = function(t, e, i) {
        var n = cr.to_clamped_radians(t)
          , r = cr.to_clamped_radians(e)
          , s = cr.to_clamped_radians(i);
        return !cr.angleClockwise(s, r) ? !(!cr.angleClockwise(n, r) && cr.angleClockwise(n, s)) : cr.angleClockwise(n, r) && !cr.angleClockwise(n, s)
    }
    ,
    e.prototype.IsValueType = function(t, e) {
        return "number" == typeof t ? 0 === e : 1 === e
    }
    ,
    t.cnds = new e,
    l.prototype.GoToLayout = function(t) {
        this.runtime.isloading || this.runtime.changelayout || (this.runtime.changelayout = t)
    }
    ,
    l.prototype.NextPrevLayout = function(t) {
        if (!this.runtime.isloading && !this.runtime.changelayout) {
            var e = this.runtime.layouts_by_index.indexOf(this.runtime.running_layout);
            if ((!t || 0 !== e) && (t || e !== this.runtime.layouts_by_index.length - 1)) {
                var i = this.runtime.layouts_by_index[e + (t ? -1 : 1)];
                this.runtime.changelayout = i
            }
        }
    }
    ,
    l.prototype.CreateObject = function(t, e, i, n) {
        if (e && t) {
            var r = this.runtime.createInstance(t, e, i, n);
            if (r) {
                var s, o, a;
                if (this.runtime.isInOnDestroy++,
                this.runtime.trigger(Object.getPrototypeOf(t.plugin).cnds.OnCreated, r),
                r.is_contained)
                    for (s = 0,
                    o = r.siblings.length; s < o; s++)
                        a = r.siblings[s],
                        this.runtime.trigger(Object.getPrototypeOf(a.type.plugin).cnds.OnCreated, a);
                this.runtime.isInOnDestroy--;
                var h = t.getCurrentSol();
                if (h.select_all = !1,
                cr.clearArray(h.instances),
                h.instances[0] = r,
                r.is_contained)
                    for (s = 0,
                    o = r.siblings.length; s < o; s++)
                        (h = (a = r.siblings[s]).type.getCurrentSol()).select_all = !1,
                        cr.clearArray(h.instances),
                        h.instances[0] = a
            }
        }
    }
    ,
    l.prototype.SetLayerVisible = function(t, e) {
        t && t.visible !== e && (t.visible = e,
        this.runtime.redraw = !0)
    }
    ,
    l.prototype.SetLayerOpacity = function(t, e) {
        t && (e = cr.clamp(e / 100, 0, 1),
        t.opacity !== e && (t.opacity = e,
        this.runtime.redraw = !0))
    }
    ,
    l.prototype.SetLayerScaleRate = function(t, e) {
        t && t.zoomRate !== e && (t.zoomRate = e,
        this.runtime.redraw = !0)
    }
    ,
    l.prototype.SetLayerForceOwnTexture = function(t, e) {
        t && (e = !!e,
        t.forceOwnTexture !== e && (t.forceOwnTexture = e,
        this.runtime.redraw = !0))
    }
    ,
    l.prototype.SetLayoutScale = function(t) {
        this.runtime.running_layout && this.runtime.running_layout.scale !== t && (this.runtime.running_layout.scale = t,
        this.runtime.running_layout.boundScrolling(),
        this.runtime.redraw = !0)
    }
    ,
    l.prototype.ScrollX = function(t) {
        this.runtime.running_layout.scrollToX(t)
    }
    ,
    l.prototype.ScrollY = function(t) {
        this.runtime.running_layout.scrollToY(t)
    }
    ,
    l.prototype.Scroll = function(t, e) {
        this.runtime.running_layout.scrollToX(t),
        this.runtime.running_layout.scrollToY(e)
    }
    ,
    l.prototype.ScrollToObject = function(t) {
        var e = t.getFirstPicked();
        e && (this.runtime.running_layout.scrollToX(e.x),
        this.runtime.running_layout.scrollToY(e.y))
    }
    ,
    l.prototype.SetVar = function(t, e) {
        0 === t.vartype ? cr.is_number(e) ? t.setValue(e) : t.setValue(parseFloat(e)) : 1 === t.vartype && t.setValue(e.toString())
    }
    ,
    l.prototype.AddVar = function(t, e) {
        0 === t.vartype ? cr.is_number(e) ? t.setValue(t.getValue() + e) : t.setValue(t.getValue() + parseFloat(e)) : 1 === t.vartype && t.setValue(t.getValue() + e.toString())
    }
    ,
    l.prototype.SubVar = function(t, e) {
        0 === t.vartype && (cr.is_number(e) ? t.setValue(t.getValue() - e) : t.setValue(t.getValue() - parseFloat(e)))
    }
    ,
    l.prototype.SetGroupActive = function(t, e) {
        var i = this.runtime.groups_by_name[t.toLowerCase()];
        if (i)
            switch (e) {
            case 0:
                i.setGroupActive(!1);
                break;
            case 1:
                i.setGroupActive(!0);
                break;
            case 2:
                i.setGroupActive(!i.group_active)
            }
    }
    ,
    l.prototype.SetTimescale = function(t) {
        var e = t;
        e < 0 && (e = 0),
        this.runtime.timescale = e
    }
    ,
    l.prototype.SetObjectTimescale = function(t, e) {
        var i = e;
        if (i < 0 && (i = 0),
        t) {
            var n, r, s = t.getCurrentSol().getObjects();
            for (n = 0,
            r = s.length; n < r; n++)
                s[n].my_timescale = i
        }
    }
    ,
    l.prototype.RestoreObjectTimescale = function(t) {
        if (!t)
            return !1;
        var e, i, n = t.getCurrentSol().getObjects();
        for (e = 0,
        i = n.length; e < i; e++)
            n[e].my_timescale = -1
    }
    ;
    var u = [];
    function p() {
        var t;
        return u.length ? t = u.pop() : ((t = {}).sols = {},
        t.solModifiers = []),
        t.deleteme = !1,
        t
    }
    function d(t) {
        cr.wipe(t.sols),
        cr.clearArray(t.solModifiers),
        u.push(t)
    }
    var f = [];
    function g() {
        var t;
        return f.length ? t = f.pop() : (t = {}).insts = [],
        t.sa = !1,
        t
    }
    function y(t) {
        cr.clearArray(t.insts),
        f.push(t)
    }
    function m(t, e) {
        var i = t[0] - e[0];
        return 0 !== i ? i : t[1] - e[1]
    }
    function _(t, e) {
        return t[1] - e[1]
    }
    function v() {}
    l.prototype.Wait = function(t) {
        if (!(t < 0)) {
            var e, i, n, r, s, o = this.runtime.getCurrentEventStack(), a = p();
            for (a.time = this.runtime.kahanTime.sum + t,
            a.signaltag = "",
            a.signalled = !1,
            a.ev = o.current_event,
            a.actindex = o.actindex + 1,
            e = 0,
            i = this.runtime.types_by_index.length; e < i; e++)
                (n = (r = this.runtime.types_by_index[e]).getCurrentSol()).select_all && -1 === o.current_event.solModifiers.indexOf(r) || (a.solModifiers.push(r),
                (s = g()).sa = n.select_all,
                cr.shallowAssignArray(s.insts, n.instances),
                a.sols[e.toString()] = s);
            return this.waits.push(a),
            !0
        }
    }
    ,
    l.prototype.WaitForSignal = function(t) {
        var e, i, n, r, s, o = this.runtime.getCurrentEventStack(), a = p();
        for (a.time = -1,
        a.signaltag = t.toLowerCase(),
        a.signalled = !1,
        a.ev = o.current_event,
        a.actindex = o.actindex + 1,
        e = 0,
        i = this.runtime.types_by_index.length; e < i; e++)
            (n = (r = this.runtime.types_by_index[e]).getCurrentSol()).select_all && -1 === o.current_event.solModifiers.indexOf(r) || (a.solModifiers.push(r),
            (s = g()).sa = n.select_all,
            cr.shallowAssignArray(s.insts, n.instances),
            a.sols[e.toString()] = s);
        return this.waits.push(a),
        !0
    }
    ,
    l.prototype.Signal = function(t) {
        var e, i, n, r = t.toLowerCase();
        for (e = 0,
        i = this.waits.length; e < i; ++e)
            -1 === (n = this.waits[e]).time && n.signaltag === r && (n.signalled = !0)
    }
    ,
    l.prototype.SetLayerScale = function(t, e) {
        t && t.scale !== e && (t.scale = e,
        this.runtime.redraw = !0)
    }
    ,
    l.prototype.ResetGlobals = function() {
        var t, e, i;
        for (t = 0,
        e = this.runtime.all_global_vars.length; t < e; t++)
            (i = this.runtime.all_global_vars[t]).data = i.initial
    }
    ,
    l.prototype.SetLayoutAngle = function(t) {
        t = cr.to_radians(t),
        t = cr.clamp_angle(t),
        this.runtime.running_layout && this.runtime.running_layout.angle !== t && (this.runtime.running_layout.angle = t,
        this.runtime.redraw = !0)
    }
    ,
    l.prototype.SetLayerAngle = function(t, e) {
        t && (e = cr.to_radians(e),
        e = cr.clamp_angle(e),
        t.angle !== e && (t.angle = e,
        this.runtime.redraw = !0))
    }
    ,
    l.prototype.SetLayerParallax = function(t, e, i) {
        if (t && (t.parallaxX !== e / 100 || t.parallaxY !== i / 100)) {
            if (t.parallaxX = e / 100,
            t.parallaxY = i / 100,
            1 !== t.parallaxX || 1 !== t.parallaxY) {
                var n, r, s = t.instances;
                for (n = 0,
                r = s.length; n < r; ++n)
                    s[n].type.any_instance_parallaxed = !0
            }
            this.runtime.redraw = !0
        }
    }
    ,
    l.prototype.SetLayerBackground = function(t, e) {
        if (t) {
            var i = cr.GetRValue(e)
              , n = cr.GetGValue(e)
              , r = cr.GetBValue(e);
            t.background_color[0] === i && t.background_color[1] === n && t.background_color[2] === r || (t.background_color[0] = i,
            t.background_color[1] = n,
            t.background_color[2] = r,
            this.runtime.redraw = !0)
        }
    }
    ,
    l.prototype.SetLayerTransparent = function(t, e) {
        t && !!e != !!t.transparent && (t.transparent = !!e,
        this.runtime.redraw = !0)
    }
    ,
    l.prototype.SetLayerBlendMode = function(t, e) {
        t && t.blend_mode !== e && (t.blend_mode = e,
        t.compositeOp = cr.effectToCompositeOp(t.blend_mode),
        this.runtime.gl && cr.setGLBlend(t, t.blend_mode, this.runtime.gl),
        this.runtime.redraw = !0)
    }
    ,
    l.prototype.StopLoop = function() {
        this.runtime.loop_stack_index < 0 || (this.runtime.getCurrentLoop().stopped = !0)
    }
    ,
    l.prototype.GoToLayoutByName = function(t) {
        var e;
        if (!this.runtime.isloading && !this.runtime.changelayout)
            for (e in this.runtime.layouts)
                if (this.runtime.layouts.hasOwnProperty(e) && cr.equals_nocase(e, t))
                    return void (this.runtime.changelayout = this.runtime.layouts[e])
    }
    ,
    l.prototype.RestartLayout = function(t) {
        var e, i, n;
        if (!this.runtime.isloading && (!this.runtime.changelayout && this.runtime.running_layout))
            for (this.runtime.changelayout = this.runtime.running_layout,
            e = 0,
            i = this.runtime.allGroups.length; e < i; e++)
                (n = this.runtime.allGroups[e]).setGroupActive(n.initially_activated)
    }
    ,
    l.prototype.SnapshotCanvas = function(t, e) {
        this.runtime.doCanvasSnapshot(0 === t ? "image/png" : "image/jpeg", e / 100)
    }
    ,
    l.prototype.SetCanvasSize = function(t, e) {
        if (!(t <= 0 || e <= 0)) {
            var i = this.runtime.fullscreen_mode;
            (document.mozFullScreen || document.webkitIsFullScreen || !!document.msFullscreenElement || document.fullScreen || this.runtime.isNodeFullscreen) && this.runtime.fullscreen_scaling > 0 && (i = this.runtime.fullscreen_scaling),
            0 === i ? this.runtime.setSize(t, e, !0) : (this.runtime.original_width = t,
            this.runtime.original_height = e,
            this.runtime.setSize(this.runtime.lastWindowWidth, this.runtime.lastWindowHeight, !0))
        }
    }
    ,
    l.prototype.SetLayoutEffectEnabled = function(t, e) {
        if (this.runtime.running_layout && this.runtime.glwrap) {
            var i = this.runtime.running_layout.getEffectByName(e);
            if (i) {
                var n = 1 === t;
                i.active != n && (i.active = n,
                this.runtime.running_layout.updateActiveEffects(),
                this.runtime.redraw = !0)
            }
        }
    }
    ,
    l.prototype.SetLayerEffectEnabled = function(t, e, i) {
        if (t && this.runtime.glwrap) {
            var n = t.getEffectByName(i);
            if (n) {
                var r = 1 === e;
                n.active != r && (n.active = r,
                t.updateActiveEffects(),
                this.runtime.redraw = !0)
            }
        }
    }
    ,
    l.prototype.SetLayoutEffectParam = function(t, e, i) {
        if (this.runtime.running_layout && this.runtime.glwrap) {
            var n = this.runtime.running_layout.getEffectByName(t);
            if (n) {
                var r = this.runtime.running_layout.effect_params[n.index];
                (e = Math.floor(e)) < 0 || e >= r.length || (1 === this.runtime.glwrap.getProgramParameterType(n.shaderindex, e) && (i /= 100),
                r[e] !== i && (r[e] = i,
                n.active && (this.runtime.redraw = !0)))
            }
        }
    }
    ,
    l.prototype.SetLayerEffectParam = function(t, e, i, n) {
        if (t && this.runtime.glwrap) {
            var r = t.getEffectByName(e);
            if (r) {
                var s = t.effect_params[r.index];
                (i = Math.floor(i)) < 0 || i >= s.length || (1 === this.runtime.glwrap.getProgramParameterType(r.shaderindex, i) && (n /= 100),
                s[i] !== n && (s[i] = n,
                r.active && (this.runtime.redraw = !0)))
            }
        }
    }
    ,
    l.prototype.SaveState = function(t) {
        this.runtime.saveToSlot = t
    }
    ,
    l.prototype.LoadState = function(t) {
        this.runtime.loadFromSlot = t
    }
    ,
    l.prototype.LoadStateJSON = function(t) {
        this.runtime.loadFromJson = t
    }
    ,
    l.prototype.SetHalfFramerateMode = function(t) {
        this.runtime.halfFramerateMode = 0 !== t
    }
    ,
    l.prototype.SetFullscreenQuality = function(t) {
        (document.mozFullScreen || document.webkitIsFullScreen || !!document.msFullscreenElement || document.fullScreen || this.isNodeFullscreen || 0 !== this.runtime.fullscreen_mode) && (this.runtime.wantFullscreenScalingQuality = 0 !== t,
        this.runtime.setSize(this.runtime.lastWindowWidth, this.runtime.lastWindowHeight, !0))
    }
    ,
    l.prototype.ResetPersisted = function() {
        var t, e;
        for (t = 0,
        e = this.runtime.layouts_by_index.length; t < e; ++t)
            this.runtime.layouts_by_index[t].persist_data = {},
            this.runtime.layouts_by_index[t].first_visit = !0
    }
    ,
    l.prototype.RecreateInitialObjects = function(t, e, i, n, r) {
        t && this.runtime.running_layout.recreateInitialObjects(t, e, i, n, r)
    }
    ,
    l.prototype.SetPixelRounding = function(t) {
        this.runtime.pixel_rounding = 0 !== t,
        this.runtime.redraw = !0
    }
    ,
    l.prototype.SetMinimumFramerate = function(t) {
        t < 1 && (t = 1),
        t > 120 && (t = 120),
        this.runtime.minimumFramerate = t
    }
    ,
    l.prototype.SortZOrderByInstVar = function(t, e) {
        if (t) {
            var i, n, r, s, o, a, h = t.getCurrentSol().getObjects(), c = [], l = [], u = this.runtime.running_layout, p = t.is_family, d = t.family_index;
            for (i = 0,
            n = h.length; i < n; ++i)
                (r = h[i]).layer && (s = p ? r.instance_vars[e + r.type.family_var_map[d]] : r.instance_vars[e],
                c.push([r.layer.index, r.get_zindex()]),
                l.push([r, s]));
            if (c.length)
                for (c.sort(m),
                l.sort(_),
                i = 0,
                n = c.length; i < n; ++i)
                    r = l[i][0],
                    o = u.layers[c[i][0]],
                    a = c[i][1],
                    o.instances[a] !== r && (o.instances[a] = r,
                    r.layer = o,
                    o.setZIndicesStaleFrom(a))
        }
    }
    ,
    t.acts = new l,
    v.prototype.int = function(t, e) {
        cr.is_string(e) ? (t.set_int(parseInt(e, 10)),
        isNaN(t.data) && (t.data = 0)) : t.set_int(e)
    }
    ,
    v.prototype.float = function(t, e) {
        cr.is_string(e) ? (t.set_float(parseFloat(e)),
        isNaN(t.data) && (t.data = 0)) : t.set_float(e)
    }
    ,
    v.prototype.str = function(t, e) {
        cr.is_string(e) ? t.set_string(e) : t.set_string(e.toString())
    }
    ,
    v.prototype.len = function(t, e) {
        t.set_int(e.length || 0)
    }
    ,
    v.prototype.random = function(t, e, i) {
        void 0 === i ? t.set_float(Math.random() * e) : t.set_float(Math.random() * (i - e) + e)
    }
    ,
    v.prototype.sqrt = function(t, e) {
        t.set_float(Math.sqrt(e))
    }
    ,
    v.prototype.abs = function(t, e) {
        t.set_float(Math.abs(e))
    }
    ,
    v.prototype.round = function(t, e) {
        t.set_int(Math.round(e))
    }
    ,
    v.prototype.floor = function(t, e) {
        t.set_int(Math.floor(e))
    }
    ,
    v.prototype.ceil = function(t, e) {
        t.set_int(Math.ceil(e))
    }
    ,
    v.prototype.sin = function(t, e) {
        t.set_float(Math.sin(cr.to_radians(e)))
    }
    ,
    v.prototype.cos = function(t, e) {
        t.set_float(Math.cos(cr.to_radians(e)))
    }
    ,
    v.prototype.tan = function(t, e) {
        t.set_float(Math.tan(cr.to_radians(e)))
    }
    ,
    v.prototype.asin = function(t, e) {
        t.set_float(cr.to_degrees(Math.asin(e)))
    }
    ,
    v.prototype.acos = function(t, e) {
        t.set_float(cr.to_degrees(Math.acos(e)))
    }
    ,
    v.prototype.atan = function(t, e) {
        t.set_float(cr.to_degrees(Math.atan(e)))
    }
    ,
    v.prototype.exp = function(t, e) {
        t.set_float(Math.exp(e))
    }
    ,
    v.prototype.ln = function(t, e) {
        t.set_float(Math.log(e))
    }
    ,
    v.prototype.log10 = function(t, e) {
        t.set_float(Math.log(e) / Math.LN10)
    }
    ,
    v.prototype.max = function(t) {
        var e, i, n, r = arguments[1];
        for ("number" != typeof r && (r = 0),
        e = 2,
        i = arguments.length; e < i; e++)
            "number" == typeof (n = arguments[e]) && r < n && (r = n);
        t.set_float(r)
    }
    ,
    v.prototype.min = function(t) {
        var e, i, n, r = arguments[1];
        for ("number" != typeof r && (r = 0),
        e = 2,
        i = arguments.length; e < i; e++)
            "number" == typeof (n = arguments[e]) && r > n && (r = n);
        t.set_float(r)
    }
    ,
    v.prototype.dt = function(t) {
        t.set_float(this.runtime.dt)
    }
    ,
    v.prototype.timescale = function(t) {
        t.set_float(this.runtime.timescale)
    }
    ,
    v.prototype.wallclocktime = function(t) {
        t.set_float((Date.now() - this.runtime.start_time) / 1e3)
    }
    ,
    v.prototype.time = function(t) {
        t.set_float(this.runtime.kahanTime.sum)
    }
    ,
    v.prototype.tickcount = function(t) {
        t.set_int(this.runtime.tickcount)
    }
    ,
    v.prototype.objectcount = function(t) {
        t.set_int(this.runtime.objectcount)
    }
    ,
    v.prototype.fps = function(t) {
        t.set_int(this.runtime.fps)
    }
    ,
    v.prototype.loopindex = function(t, e) {
        var i, n;
        if (this.runtime.loop_stack.length)
            if (e) {
                for (n = this.runtime.loop_stack_index; n >= 0; --n)
                    if ((i = this.runtime.loop_stack[n]).name === e)
                        return void t.set_int(i.index);
                t.set_int(0)
            } else
                i = this.runtime.getCurrentLoop(),
                t.set_int(i ? i.index : -1);
        else
            t.set_int(0)
    }
    ,
    v.prototype.distance = function(t, e, i, n, r) {
        t.set_float(cr.distanceTo(e, i, n, r))
    }
    ,
    v.prototype.angle = function(t, e, i, n, r) {
        t.set_float(cr.to_degrees(cr.angleTo(e, i, n, r)))
    }
    ,
    v.prototype.scrollx = function(t) {
        t.set_float(this.runtime.running_layout.scrollX)
    }
    ,
    v.prototype.scrolly = function(t) {
        t.set_float(this.runtime.running_layout.scrollY)
    }
    ,
    v.prototype.newline = function(t) {
        t.set_string("\n")
    }
    ,
    v.prototype.lerp = function(t, e, i, n) {
        t.set_float(cr.lerp(e, i, n))
    }
    ,
    v.prototype.qarp = function(t, e, i, n, r) {
        t.set_float(cr.qarp(e, i, n, r))
    }
    ,
    v.prototype.cubic = function(t, e, i, n, r, s) {
        t.set_float(cr.cubic(e, i, n, r, s))
    }
    ,
    v.prototype.cosp = function(t, e, i, n) {
        t.set_float(cr.cosp(e, i, n))
    }
    ,
    v.prototype.windowwidth = function(t) {
        t.set_int(this.runtime.width)
    }
    ,
    v.prototype.windowheight = function(t) {
        t.set_int(this.runtime.height)
    }
    ,
    v.prototype.uppercase = function(t, e) {
        t.set_string(cr.is_string(e) ? e.toUpperCase() : "")
    }
    ,
    v.prototype.lowercase = function(t, e) {
        t.set_string(cr.is_string(e) ? e.toLowerCase() : "")
    }
    ,
    v.prototype.clamp = function(t, e, i, n) {
        e < i ? t.set_float(i) : e > n ? t.set_float(n) : t.set_float(e)
    }
    ,
    v.prototype.layerscale = function(t, e) {
        var i = this.runtime.getLayer(e);
        i ? t.set_float(i.scale) : t.set_float(0)
    }
    ,
    v.prototype.layeropacity = function(t, e) {
        var i = this.runtime.getLayer(e);
        i ? t.set_float(100 * i.opacity) : t.set_float(0)
    }
    ,
    v.prototype.layerscalerate = function(t, e) {
        var i = this.runtime.getLayer(e);
        i ? t.set_float(i.zoomRate) : t.set_float(0)
    }
    ,
    v.prototype.layerparallaxx = function(t, e) {
        var i = this.runtime.getLayer(e);
        i ? t.set_float(100 * i.parallaxX) : t.set_float(0)
    }
    ,
    v.prototype.layerparallaxy = function(t, e) {
        var i = this.runtime.getLayer(e);
        i ? t.set_float(100 * i.parallaxY) : t.set_float(0)
    }
    ,
    v.prototype.layerindex = function(t, e) {
        var i = this.runtime.getLayer(e);
        i ? t.set_int(i.index) : t.set_int(-1)
    }
    ,
    v.prototype.layoutscale = function(t) {
        this.runtime.running_layout ? t.set_float(this.runtime.running_layout.scale) : t.set_float(0)
    }
    ,
    v.prototype.layoutangle = function(t) {
        t.set_float(cr.to_degrees(this.runtime.running_layout.angle))
    }
    ,
    v.prototype.layerangle = function(t, e) {
        var i = this.runtime.getLayer(e);
        i ? t.set_float(cr.to_degrees(i.angle)) : t.set_float(0)
    }
    ,
    v.prototype.layoutwidth = function(t) {
        t.set_int(this.runtime.running_layout.width)
    }
    ,
    v.prototype.layoutheight = function(t) {
        t.set_int(this.runtime.running_layout.height)
    }
    ,
    v.prototype.find = function(t, e, i) {
        cr.is_string(e) && cr.is_string(i) ? t.set_int(e.search(new RegExp(cr.regexp_escape(i),"i"))) : t.set_int(-1)
    }
    ,
    v.prototype.findcase = function(t, e, i) {
        cr.is_string(e) && cr.is_string(i) ? t.set_int(e.search(new RegExp(cr.regexp_escape(i),""))) : t.set_int(-1)
    }
    ,
    v.prototype.left = function(t, e, i) {
        t.set_string(cr.is_string(e) ? e.substr(0, i) : "")
    }
    ,
    v.prototype.right = function(t, e, i) {
        t.set_string(cr.is_string(e) ? e.substr(e.length - i) : "")
    }
    ,
    v.prototype.mid = function(t, e, i, n) {
        t.set_string(cr.is_string(e) ? e.substr(i, n) : "")
    }
    ,
    v.prototype.tokenat = function(t, e, i, n) {
        if (cr.is_string(e) && cr.is_string(n)) {
            var r = e.split(n)
              , s = cr.floor(i);
            s < 0 || s >= r.length ? t.set_string("") : t.set_string(r[s])
        } else
            t.set_string("")
    }
    ,
    v.prototype.tokencount = function(t, e, i) {
        cr.is_string(e) && e.length ? t.set_int(e.split(i).length) : t.set_int(0)
    }
    ,
    v.prototype.replace = function(t, e, i, n) {
        cr.is_string(e) && cr.is_string(i) && cr.is_string(n) ? t.set_string(e.replace(new RegExp(cr.regexp_escape(i),"gi"), n)) : t.set_string(cr.is_string(e) ? e : "")
    }
    ,
    v.prototype.trim = function(t, e) {
        t.set_string(cr.is_string(e) ? e.trim() : "")
    }
    ,
    v.prototype.pi = function(t) {
        t.set_float(cr.PI)
    }
    ,
    v.prototype.layoutname = function(t) {
        this.runtime.running_layout ? t.set_string(this.runtime.running_layout.name) : t.set_string("")
    }
    ,
    v.prototype.renderer = function(t) {
        t.set_string(this.runtime.gl ? "webgl" : "canvas2d")
    }
    ,
    v.prototype.rendererdetail = function(t) {
        t.set_string(this.runtime.glUnmaskedRenderer)
    }
    ,
    v.prototype.anglediff = function(t, e, i) {
        t.set_float(cr.to_degrees(cr.angleDiff(cr.to_radians(e), cr.to_radians(i))))
    }
    ,
    v.prototype.choose = function(t) {
        var e = cr.floor(Math.random() * (arguments.length - 1));
        t.set_any(arguments[e + 1])
    }
    ,
    v.prototype.rgb = function(t, e, i, n) {
        t.set_int(cr.RGB(e, i, n))
    }
    ,
    v.prototype.projectversion = function(t) {
        t.set_string(this.runtime.versionstr)
    }
    ,
    v.prototype.projectname = function(t) {
        t.set_string(this.runtime.projectName)
    }
    ,
    v.prototype.anglelerp = function(t, e, i, n) {
        e = cr.to_radians(e),
        i = cr.to_radians(i);
        var r = cr.angleDiff(e, i);
        cr.angleClockwise(i, e) ? t.set_float(cr.to_clamped_degrees(e + r * n)) : t.set_float(cr.to_clamped_degrees(e - r * n))
    }
    ,
    v.prototype.anglerotate = function(t, e, i, n) {
        e = cr.to_radians(e),
        i = cr.to_radians(i),
        n = cr.to_radians(n),
        t.set_float(cr.to_clamped_degrees(cr.angleRotate(e, i, n)))
    }
    ,
    v.prototype.zeropad = function(t, e, i) {
        var n = e < 0 ? "-" : "";
        e < 0 && (e = -e);
        for (var r = i - e.toString().length, s = 0; s < r; s++)
            n += "0";
        t.set_string(n + e.toString())
    }
    ,
    v.prototype.cpuutilisation = function(t) {
        t.set_float(this.runtime.cpuutilisation / 1e3)
    }
    ,
    v.prototype.viewportleft = function(t, e) {
        var i = this.runtime.getLayer(e);
        t.set_float(i ? i.viewLeft : 0)
    }
    ,
    v.prototype.viewporttop = function(t, e) {
        var i = this.runtime.getLayer(e);
        t.set_float(i ? i.viewTop : 0)
    }
    ,
    v.prototype.viewportright = function(t, e) {
        var i = this.runtime.getLayer(e);
        t.set_float(i ? i.viewRight : 0)
    }
    ,
    v.prototype.viewportbottom = function(t, e) {
        var i = this.runtime.getLayer(e);
        t.set_float(i ? i.viewBottom : 0)
    }
    ,
    v.prototype.loadingprogress = function(t) {
        t.set_float(this.runtime.loadingprogress)
    }
    ,
    v.prototype.unlerp = function(t, e, i, n) {
        t.set_float(cr.unlerp(e, i, n))
    }
    ,
    v.prototype.canvassnapshot = function(t) {
        t.set_string(this.runtime.snapshotData)
    }
    ,
    v.prototype.urlencode = function(t, e) {
        t.set_string(encodeURIComponent(e))
    }
    ,
    v.prototype.urldecode = function(t, e) {
        t.set_string(decodeURIComponent(e))
    }
    ,
    v.prototype.canvastolayerx = function(t, e, i, n) {
        var r = this.runtime.getLayer(e);
        t.set_float(r ? r.canvasToLayer(i, n, !0) : 0)
    }
    ,
    v.prototype.canvastolayery = function(t, e, i, n) {
        var r = this.runtime.getLayer(e);
        t.set_float(r ? r.canvasToLayer(i, n, !1) : 0)
    }
    ,
    v.prototype.layertocanvasx = function(t, e, i, n) {
        var r = this.runtime.getLayer(e);
        t.set_float(r ? r.layerToCanvas(i, n, !0) : 0)
    }
    ,
    v.prototype.layertocanvasy = function(t, e, i, n) {
        var r = this.runtime.getLayer(e);
        t.set_float(r ? r.layerToCanvas(i, n, !1) : 0)
    }
    ,
    v.prototype.savestatejson = function(t) {
        t.set_string(this.runtime.lastSaveJson)
    }
    ,
    v.prototype.imagememoryusage = function(t) {
        this.runtime.glwrap ? t.set_float(Math.round(100 * this.runtime.glwrap.estimateVRAM() / 1048576) / 100) : t.set_float(0)
    }
    ,
    v.prototype.regexsearch = function(t, e, i, n) {
        var r = h(i, n);
        t.set_int(e ? e.search(r) : -1)
    }
    ,
    v.prototype.regexreplace = function(t, e, i, n, r) {
        var s = h(i, n);
        t.set_string(e ? e.replace(s, r) : "")
    }
    ;
    var b = []
      , w = ""
      , x = ""
      , T = "";
    function S(t, e, i) {
        if (t !== w || e !== x || i !== T) {
            var n = h(e, i);
            b = t.match(n),
            w = t,
            x = e,
            T = i
        }
    }
    v.prototype.regexmatchcount = function(t, e, i, n) {
        h(i, n);
        S(e.toString(), i, n),
        t.set_int(b ? b.length : 0)
    }
    ,
    v.prototype.regexmatchat = function(t, e, i, n, r) {
        r = Math.floor(r);
        h(i, n);
        S(e.toString(), i, n),
        !b || r < 0 || r >= b.length ? t.set_string("") : t.set_string(b[r])
    }
    ,
    v.prototype.infinity = function(t) {
        t.set_float(1 / 0)
    }
    ,
    v.prototype.setbit = function(t, e, i, n) {
        e |= 0,
        i |= 0,
        n = 0 !== n ? 1 : 0,
        t.set_int(e & ~(1 << i) | n << i)
    }
    ,
    v.prototype.togglebit = function(t, e, i) {
        e |= 0,
        i |= 0,
        t.set_int(e ^ 1 << i)
    }
    ,
    v.prototype.getbit = function(t, e, i) {
        e |= 0,
        i |= 0,
        t.set_int(e & 1 << i ? 1 : 0)
    }
    ,
    v.prototype.originalwindowwidth = function(t) {
        t.set_int(this.runtime.original_width)
    }
    ,
    v.prototype.originalwindowheight = function(t) {
        t.set_int(this.runtime.original_height)
    }
    ,
    t.exps = new v,
    t.runWaits = function() {
        var t, e, i, n, r, s, o, a = this.runtime.getCurrentEventStack();
        for (t = 0,
        i = this.waits.length; t < i; t++) {
            if (-1 === (n = this.waits[t]).time) {
                if (!n.signalled)
                    continue
            } else if (n.time > this.runtime.kahanTime.sum)
                continue;
            for (r in a.current_event = n.ev,
            a.actindex = n.actindex,
            a.cndindex = 0,
            n.sols)
                n.sols.hasOwnProperty(r) && (s = this.runtime.types_by_index[parseInt(r, 10)].getCurrentSol(),
                o = n.sols[r],
                s.select_all = o.sa,
                cr.shallowAssignArray(s.instances, o.insts),
                y(o));
            n.ev.resume_actions_and_subevents(),
            this.runtime.clearSol(n.solModifiers),
            n.deleteme = !0
        }
        for (t = 0,
        e = 0,
        i = this.waits.length; t < i; t++)
            n = this.waits[t],
            this.waits[e] = n,
            n.deleteme ? d(n) : e++;
        cr.truncateArray(this.waits, e)
    }
}(),
function() {
    cr.add_common_aces = function(t, e) {
        var i = t[1]
          , n = t[3]
          , r = t[4]
          , s = t[5]
          , o = t[6]
          , a = t[7]
          , h = t[8];
        e.cnds || (e.cnds = {}),
        e.acts || (e.acts = {}),
        e.exps || (e.exps = {});
        var c = e.cnds
          , l = e.acts
          , u = e.exps;
        n && (c.CompareX = function(t, e) {
            return cr.do_cmp(this.x, t, e)
        }
        ,
        c.CompareY = function(t, e) {
            return cr.do_cmp(this.y, t, e)
        }
        ,
        c.IsOnScreen = function() {
            var t = this.layer;
            this.update_bbox();
            var e = this.bbox;
            return !(e.right < t.viewLeft || e.bottom < t.viewTop || e.left > t.viewRight || e.top > t.viewBottom)
        }
        ,
        c.IsOutsideLayout = function() {
            this.update_bbox();
            var t = this.bbox
              , e = this.runtime.running_layout;
            return t.right < 0 || t.bottom < 0 || t.left > e.width || t.top > e.height
        }
        ,
        c.PickDistance = function(t, e, i) {
            var n = this.getCurrentSol()
              , r = n.getObjects();
            if (!r.length)
                return !1;
            var s, o, a, h = r[0], c = h, l = cr.distanceTo(h.x, h.y, e, i);
            for (s = 1,
            o = r.length; s < o; s++)
                h = r[s],
                a = cr.distanceTo(h.x, h.y, e, i),
                (0 === t && a < l || 1 === t && a > l) && (l = a,
                c = h);
            return n.pick_one(c),
            !0
        }
        ,
        l.SetX = function(t) {
            this.x !== t && (this.x = t,
            this.set_bbox_changed())
        }
        ,
        l.SetY = function(t) {
            this.y !== t && (this.y = t,
            this.set_bbox_changed())
        }
        ,
        l.SetPos = function(t, e) {
            this.x === t && this.y === e || (this.x = t,
            this.y = e,
            this.set_bbox_changed())
        }
        ,
        l.SetPosToObject = function(t, e) {
            var i, n, r = t.getPairedInstance(this);
            r && (r.getImagePoint ? (i = r.getImagePoint(e, !0),
            n = r.getImagePoint(e, !1)) : (i = r.x,
            n = r.y),
            this.x === i && this.y === n || (this.x = i,
            this.y = n,
            this.set_bbox_changed()))
        }
        ,
        l.MoveForward = function(t) {
            0 !== t && (this.x += Math.cos(this.angle) * t,
            this.y += Math.sin(this.angle) * t,
            this.set_bbox_changed())
        }
        ,
        l.MoveAtAngle = function(t, e) {
            0 !== e && (this.x += Math.cos(cr.to_radians(t)) * e,
            this.y += Math.sin(cr.to_radians(t)) * e,
            this.set_bbox_changed())
        }
        ,
        u.X = function(t) {
            t.set_float(this.x)
        }
        ,
        u.Y = function(t) {
            t.set_float(this.y)
        }
        ,
        u.dt = function(t) {
            t.set_float(this.runtime.getDt(this))
        }
        ),
        r && (c.CompareWidth = function(t, e) {
            return cr.do_cmp(this.width, t, e)
        }
        ,
        c.CompareHeight = function(t, e) {
            return cr.do_cmp(this.height, t, e)
        }
        ,
        l.SetWidth = function(t) {
            this.width !== t && (this.width = t,
            this.set_bbox_changed())
        }
        ,
        l.SetHeight = function(t) {
            this.height !== t && (this.height = t,
            this.set_bbox_changed())
        }
        ,
        l.SetSize = function(t, e) {
            this.width === t && this.height === e || (this.width = t,
            this.height = e,
            this.set_bbox_changed())
        }
        ,
        u.Width = function(t) {
            t.set_float(this.width)
        }
        ,
        u.Height = function(t) {
            t.set_float(this.height)
        }
        ,
        u.BBoxLeft = function(t) {
            this.update_bbox(),
            t.set_float(this.bbox.left)
        }
        ,
        u.BBoxTop = function(t) {
            this.update_bbox(),
            t.set_float(this.bbox.top)
        }
        ,
        u.BBoxRight = function(t) {
            this.update_bbox(),
            t.set_float(this.bbox.right)
        }
        ,
        u.BBoxBottom = function(t) {
            this.update_bbox(),
            t.set_float(this.bbox.bottom)
        }
        ),
        s && (c.AngleWithin = function(t, e) {
            return cr.angleDiff(this.angle, cr.to_radians(e)) <= cr.to_radians(t)
        }
        ,
        c.IsClockwiseFrom = function(t) {
            return cr.angleClockwise(this.angle, cr.to_radians(t))
        }
        ,
        c.IsBetweenAngles = function(t, e) {
            var i = cr.to_clamped_radians(t)
              , n = cr.to_clamped_radians(e)
              , r = cr.clamp_angle(this.angle);
            return !cr.angleClockwise(n, i) ? !(!cr.angleClockwise(r, i) && cr.angleClockwise(r, n)) : cr.angleClockwise(r, i) && !cr.angleClockwise(r, n)
        }
        ,
        l.SetAngle = function(t) {
            var e = cr.to_radians(cr.clamp_angle_degrees(t));
            isNaN(e) || this.angle !== e && (this.angle = e,
            this.set_bbox_changed())
        }
        ,
        l.RotateClockwise = function(t) {
            0 === t || isNaN(t) || (this.angle += cr.to_radians(t),
            this.angle = cr.clamp_angle(this.angle),
            this.set_bbox_changed())
        }
        ,
        l.RotateCounterclockwise = function(t) {
            0 === t || isNaN(t) || (this.angle -= cr.to_radians(t),
            this.angle = cr.clamp_angle(this.angle),
            this.set_bbox_changed())
        }
        ,
        l.RotateTowardAngle = function(t, e) {
            var i = cr.angleRotate(this.angle, cr.to_radians(e), cr.to_radians(t));
            isNaN(i) || this.angle !== i && (this.angle = i,
            this.set_bbox_changed())
        }
        ,
        l.RotateTowardPosition = function(t, e, i) {
            var n = e - this.x
              , r = i - this.y
              , s = Math.atan2(r, n)
              , o = cr.angleRotate(this.angle, s, cr.to_radians(t));
            isNaN(o) || this.angle !== o && (this.angle = o,
            this.set_bbox_changed())
        }
        ,
        l.SetTowardPosition = function(t, e) {
            var i = t - this.x
              , n = e - this.y
              , r = Math.atan2(n, i);
            isNaN(r) || this.angle !== r && (this.angle = r,
            this.set_bbox_changed())
        }
        ,
        u.Angle = function(t) {
            t.set_float(cr.to_clamped_degrees(this.angle))
        }
        ),
        i || (c.CompareInstanceVar = function(t, e, i) {
            return cr.do_cmp(this.instance_vars[t], e, i)
        }
        ,
        c.IsBoolInstanceVarSet = function(t) {
            return this.instance_vars[t]
        }
        ,
        c.PickInstVarHiLow = function(t, e) {
            var i = this.getCurrentSol()
              , n = i.getObjects();
            if (!n.length)
                return !1;
            var r, s, o, a = n[0], h = a, c = a.instance_vars[e];
            for (r = 1,
            s = n.length; r < s; r++)
                o = (a = n[r]).instance_vars[e],
                (0 === t && o < c || 1 === t && o > c) && (c = o,
                h = a);
            return i.pick_one(h),
            !0
        }
        ,
        c.PickByUID = function(t) {
            var e, i, n, r, s, o, a;
            if (this.runtime.getCurrentCondition().inverted) {
                if ((a = this.getCurrentSol()).select_all) {
                    for (a.select_all = !1,
                    cr.clearArray(a.instances),
                    cr.clearArray(a.else_instances),
                    e = 0,
                    i = (o = this.instances).length; e < i; e++)
                        (r = o[e]).uid === t ? a.else_instances.push(r) : a.instances.push(r);
                    return this.applySolToContainer(),
                    !!a.instances.length
                }
                for (e = 0,
                n = 0,
                i = a.instances.length; e < i; e++)
                    r = a.instances[e],
                    a.instances[n] = r,
                    r.uid === t ? a.else_instances.push(r) : n++;
                return cr.truncateArray(a.instances, n),
                this.applySolToContainer(),
                !!a.instances.length
            }
            if (!(r = this.runtime.getObjectByUID(t)))
                return !1;
            if (!(a = this.getCurrentSol()).select_all && -1 === a.instances.indexOf(r))
                return !1;
            if (this.is_family) {
                for (e = 0,
                i = (s = r.type.families).length; e < i; e++)
                    if (s[e] === this)
                        return a.pick_one(r),
                        this.applySolToContainer(),
                        !0
            } else if (r.type === this)
                return a.pick_one(r),
                this.applySolToContainer(),
                !0;
            return !1
        }
        ,
        c.OnCreated = function() {
            return !0
        }
        ,
        c.OnDestroyed = function() {
            return !0
        }
        ,
        l.SetInstanceVar = function(t, e) {
            var i = this.instance_vars;
            cr.is_number(i[t]) ? cr.is_number(e) ? i[t] = e : i[t] = parseFloat(e) : cr.is_string(i[t]) && (cr.is_string(e) ? i[t] = e : i[t] = e.toString())
        }
        ,
        l.AddInstanceVar = function(t, e) {
            var i = this.instance_vars;
            cr.is_number(i[t]) ? cr.is_number(e) ? i[t] += e : i[t] += parseFloat(e) : cr.is_string(i[t]) && (cr.is_string(e) ? i[t] += e : i[t] += e.toString())
        }
        ,
        l.SubInstanceVar = function(t, e) {
            var i = this.instance_vars;
            cr.is_number(i[t]) && (cr.is_number(e) ? i[t] -= e : i[t] -= parseFloat(e))
        }
        ,
        l.SetBoolInstanceVar = function(t, e) {
            this.instance_vars[t] = e ? 1 : 0
        }
        ,
        l.ToggleBoolInstanceVar = function(t) {
            this.instance_vars[t] = 1 - this.instance_vars[t]
        }
        ,
        l.Destroy = function() {
            this.runtime.DestroyInstance(this)
        }
        ,
        l.LoadFromJsonString || (l.LoadFromJsonString = function(t) {
            var e, i, n, r;
            try {
                e = JSON.parse(t)
            } catch (t) {
                return
            }
            if (this.runtime.loadInstanceFromJSON(this, e, !0),
            this.afterLoad && this.afterLoad(),
            this.behavior_insts)
                for (i = 0,
                n = this.behavior_insts.length; i < n; ++i)
                    (r = this.behavior_insts[i]).afterLoad && r.afterLoad()
        }
        ),
        u.Count = function(t) {
            var e, i, n, r = t.object_class.instances.length;
            for (e = 0,
            i = this.runtime.createRow.length; e < i; e++)
                n = this.runtime.createRow[e],
                t.object_class.is_family ? n.type.families.indexOf(t.object_class) >= 0 && r++ : n.type === t.object_class && r++;
            t.set_int(r)
        }
        ,
        u.PickedCount = function(t) {
            t.set_int(t.object_class.getCurrentSol().getObjects().length)
        }
        ,
        u.UID = function(t) {
            t.set_int(this.uid)
        }
        ,
        u.IID = function(t) {
            t.set_int(this.get_iid())
        }
        ,
        u.AsJSON || (u.AsJSON = function(t) {
            t.set_string(JSON.stringify(this.runtime.saveInstanceToJSON(this, !0)))
        }
        )),
        o && (c.IsVisible = function() {
            return this.visible
        }
        ,
        l.SetVisible = function(t) {
            !t != !this.visible && (this.visible = !!t,
            this.runtime.redraw = !0)
        }
        ,
        c.CompareOpacity = function(t, e) {
            return cr.do_cmp(cr.round6dp(100 * this.opacity), t, e)
        }
        ,
        l.SetOpacity = function(t) {
            var e = t / 100;
            e < 0 ? e = 0 : e > 1 && (e = 1),
            e !== this.opacity && (this.opacity = e,
            this.runtime.redraw = !0)
        }
        ,
        u.Opacity = function(t) {
            t.set_float(cr.round6dp(100 * this.opacity))
        }
        ),
        a && (c.IsOnLayer = function(t) {
            return !!t && this.layer === t
        }
        ,
        c.PickTopBottom = function(t) {
            var e = this.getCurrentSol()
              , i = e.getObjects();
            if (!i.length)
                return !1;
            var n, r, s = i[0], o = s;
            for (n = 1,
            r = i.length; n < r; n++)
                s = i[n],
                0 === t ? (s.layer.index > o.layer.index || s.layer.index === o.layer.index && s.get_zindex() > o.get_zindex()) && (o = s) : (s.layer.index < o.layer.index || s.layer.index === o.layer.index && s.get_zindex() < o.get_zindex()) && (o = s);
            return e.pick_one(o),
            !0
        }
        ,
        l.MoveToTop = function() {
            var t = this.layer
              , e = t.instances;
            e.length && e[e.length - 1] === this || (t.removeFromInstanceList(this, !1),
            t.appendToInstanceList(this, !1),
            this.runtime.redraw = !0)
        }
        ,
        l.MoveToBottom = function() {
            var t = this.layer
              , e = t.instances;
            e.length && e[0] === this || (t.removeFromInstanceList(this, !1),
            t.prependToInstanceList(this, !1),
            this.runtime.redraw = !0)
        }
        ,
        l.MoveToLayer = function(t) {
            t && t != this.layer && (this.layer.removeFromInstanceList(this, !0),
            this.layer = t,
            t.appendToInstanceList(this, !0),
            this.runtime.redraw = !0)
        }
        ,
        l.ZMoveToObject = function(t, e) {
            var i = 0 === t;
            if (e) {
                var n = e.getFirstPicked(this);
                n && n.uid !== this.uid && (this.layer.index !== n.layer.index && (this.layer.removeFromInstanceList(this, !0),
                this.layer = n.layer,
                n.layer.appendToInstanceList(this, !0)),
                this.layer.moveInstanceAdjacent(this, n, i),
                this.runtime.redraw = !0)
            }
        }
        ,
        u.LayerNumber = function(t) {
            t.set_int(this.layer.number)
        }
        ,
        u.LayerName = function(t) {
            t.set_string(this.layer.name)
        }
        ,
        u.ZIndex = function(t) {
            t.set_int(this.get_zindex())
        }
        ),
        h && (l.SetEffectEnabled = function(t, e) {
            if (this.runtime.glwrap) {
                var i = this.type.getEffectIndexByName(e);
                if (!(i < 0)) {
                    var n = 1 === t;
                    this.active_effect_flags[i] !== n && (this.active_effect_flags[i] = n,
                    this.updateActiveEffects(),
                    this.runtime.redraw = !0)
                }
            }
        }
        ,
        l.SetEffectParam = function(t, e, i) {
            if (this.runtime.glwrap) {
                var n = this.type.getEffectIndexByName(t);
                if (!(n < 0)) {
                    var r = this.type.effect_types[n]
                      , s = this.effect_params[n];
                    (e = Math.floor(e)) < 0 || e >= s.length || (1 === this.runtime.glwrap.getProgramParameterType(r.shaderindex, e) && (i /= 100),
                    s[e] !== i && (s[e] = i,
                    r.active && (this.runtime.redraw = !0)))
                }
            }
        }
        )
    }
    ,
    cr.set_bbox_changed = function() {
        this.bbox_changed = !0,
        this.cell_changed = !0,
        this.type.any_cell_changed = !0,
        this.runtime.redraw = !0;
        var t, e, i = this.bbox_changed_callbacks;
        for (t = 0,
        e = i.length; t < e; ++t)
            i[t](this);
        this.layer.useRenderCells && this.update_bbox()
    }
    ,
    cr.add_bbox_changed_callback = function(t) {
        t && this.bbox_changed_callbacks.push(t)
    }
    ,
    cr.update_bbox = function() {
        if (this.bbox_changed) {
            var t = this.bbox
              , e = this.bquad;
            t.set(this.x, this.y, this.x + this.width, this.y + this.height),
            t.offset(-this.hotspotX * this.width, -this.hotspotY * this.height),
            this.angle ? (t.offset(-this.x, -this.y),
            e.set_from_rotated_rect(t, this.angle),
            e.offset(this.x, this.y),
            e.bounding_box(t)) : e.set_from_rect(t),
            t.normalize(),
            this.bbox_changed = !1,
            this.update_render_cell()
        }
    }
    ;
    var t = new cr.rect(0,0,0,0);
    cr.update_render_cell = function() {
        if (this.layer.useRenderCells) {
            var e = this.layer.render_grid
              , i = this.bbox;
            t.set(e.XToCell(i.left), e.YToCell(i.top), e.XToCell(i.right), e.YToCell(i.bottom)),
            this.rendercells.equals(t) || (this.rendercells.right < this.rendercells.left ? e.update(this, null, t) : e.update(this, this.rendercells, t),
            this.rendercells.copy(t),
            this.layer.render_list_stale = !0)
        }
    }
    ,
    cr.update_collision_cell = function() {
        if (this.cell_changed && this.collisionsEnabled) {
            this.update_bbox();
            var e = this.type.collision_grid
              , i = this.bbox;
            t.set(e.XToCell(i.left), e.YToCell(i.top), e.XToCell(i.right), e.YToCell(i.bottom)),
            this.collcells.equals(t) || (this.collcells.right < this.collcells.left ? e.update(this, null, t) : e.update(this, this.collcells, t),
            this.collcells.copy(t),
            this.cell_changed = !1)
        }
    }
    ,
    cr.inst_contains_pt = function(t, e) {
        return !!this.bbox.contains_pt(t, e) && (!!this.bquad.contains_pt(t, e) && (this.tilemap_exists ? this.testPointOverlapTile(t, e) : !(this.collision_poly && !this.collision_poly.is_empty()) || (this.collision_poly.cache_poly(this.width, this.height, this.angle),
        this.collision_poly.contains_pt(t - this.x, e - this.y))))
    }
    ,
    cr.inst_get_iid = function() {
        return this.type.updateIIDs(),
        this.iid
    }
    ,
    cr.inst_get_zindex = function() {
        return this.layer.updateZIndices(),
        this.zindex
    }
    ,
    cr.inst_updateActiveEffects = function() {
        var t, e, i;
        cr.clearArray(this.active_effect_types);
        var n = !0;
        for (t = 0,
        e = this.active_effect_flags.length; t < e; t++)
            this.active_effect_flags[t] && (i = this.type.effect_types[t],
            this.active_effect_types.push(i),
            i.preservesOpaqueness || (n = !1));
        this.uses_shaders = !!this.active_effect_types.length,
        this.shaders_preserve_opaqueness = n
    }
    ,
    cr.inst_toString = function() {
        return "Inst" + this.puid
    }
    ,
    cr.type_getFirstPicked = function(t) {
        var e, i, n;
        if (t && t.is_contained && t.type != this)
            for (e = 0,
            i = t.siblings.length; e < i; e++)
                if ((n = t.siblings[e]).type == this)
                    return n;
        var r = this.getCurrentSol().getObjects();
        return r.length ? r[0] : null
    }
    ,
    cr.type_getPairedInstance = function(t) {
        var e = this.getCurrentSol().getObjects();
        return e.length ? e[t.get_iid() % e.length] : null
    }
    ,
    cr.type_updateIIDs = function() {
        if (this.stale_iids && !this.is_family) {
            var t, e;
            for (t = 0,
            e = this.instances.length; t < e; t++)
                this.instances[t].iid = t;
            var i = t
              , n = this.runtime.createRow;
            for (t = 0,
            e = n.length; t < e; ++t)
                n[t].type === this && (n[t].iid = i++);
            this.stale_iids = !1
        }
    }
    ,
    cr.type_getInstanceByIID = function(t) {
        if (t < this.instances.length)
            return this.instances[t];
        t -= this.instances.length;
        var e, i, n = this.runtime.createRow;
        for (e = 0,
        i = n.length; e < i; ++e)
            if (n[e].type === this) {
                if (0 === t)
                    return n[e];
                --t
            }
        return null
    }
    ,
    cr.type_getCurrentSol = function() {
        return this.solstack[this.cur_sol]
    }
    ,
    cr.type_pushCleanSol = function() {
        this.cur_sol++,
        this.cur_sol === this.solstack.length ? this.solstack.push(new cr.selection(this)) : (this.solstack[this.cur_sol].select_all = !0,
        cr.clearArray(this.solstack[this.cur_sol].else_instances))
    }
    ,
    cr.type_pushCopySol = function() {
        this.cur_sol++,
        this.cur_sol === this.solstack.length && this.solstack.push(new cr.selection(this));
        var t = this.solstack[this.cur_sol]
          , e = this.solstack[this.cur_sol - 1];
        e.select_all ? t.select_all = !0 : (t.select_all = !1,
        cr.shallowAssignArray(t.instances, e.instances)),
        cr.clearArray(t.else_instances)
    }
    ,
    cr.type_popSol = function() {
        this.cur_sol--
    }
    ,
    cr.type_getBehaviorByName = function(t) {
        var e, i, n, r, s, o = 0;
        if (!this.is_family)
            for (e = 0,
            i = this.families.length; e < i; e++)
                for (n = 0,
                r = (s = this.families[e]).behaviors.length; n < r; n++) {
                    if (t === s.behaviors[n].name)
                        return this.extra.lastBehIndex = o,
                        s.behaviors[n];
                    o++
                }
        for (e = 0,
        i = this.behaviors.length; e < i; e++) {
            if (t === this.behaviors[e].name)
                return this.extra.lastBehIndex = o,
                this.behaviors[e];
            o++
        }
        return null
    }
    ,
    cr.type_getBehaviorIndexByName = function(t) {
        return this.getBehaviorByName(t) ? this.extra.lastBehIndex : -1
    }
    ,
    cr.type_getEffectIndexByName = function(t) {
        var e, i;
        for (e = 0,
        i = this.effect_types.length; e < i; e++)
            if (this.effect_types[e].name === t)
                return e;
        return -1
    }
    ,
    cr.type_applySolToContainer = function() {
        if (this.is_contained && !this.is_family) {
            var t, e, i, n, r, s, o;
            this.updateIIDs();
            var a = (s = this.getCurrentSol()).select_all
              , h = this.runtime.getCurrentEventStack()
              , c = h && h.current_event && h.current_event.orblock;
            for (t = 0,
            e = this.container.length; t < e; t++)
                if ((r = this.container[t]) !== this && (r.updateIIDs(),
                (o = r.getCurrentSol()).select_all = a,
                !a)) {
                    for (cr.clearArray(o.instances),
                    i = 0,
                    n = s.instances.length; i < n; ++i)
                        o.instances[i] = r.getInstanceByIID(s.instances[i].iid);
                    if (c)
                        for (cr.clearArray(o.else_instances),
                        i = 0,
                        n = s.else_instances.length; i < n; ++i)
                            o.else_instances[i] = r.getInstanceByIID(s.else_instances[i].iid)
                }
        }
    }
    ,
    cr.type_toString = function() {
        return "Type" + this.sid
    }
    ,
    cr.do_cmp = function(t, e, i) {
        if (void 0 === t || void 0 === i)
            return !1;
        switch (e) {
        case 0:
            return t === i;
        case 1:
            return t !== i;
        case 2:
            return t < i;
        case 3:
            return t <= i;
        case 4:
            return t > i;
        case 5:
            return t >= i;
        default:
            return !1
        }
    }
}(),
cr.shaders = {},
cr.plugins_.Audio = function(t) {
    this.runtime = t
}
,
function() {
    var t = cr.plugins_.Audio.prototype;
    t.Type = function(t) {
        this.plugin = t,
        this.runtime = t.runtime
    }
    ,
    t.Type.prototype.onCreate = function() {}
    ;
    var e = null
      , i = null
      , n = ""
      , r = ""
      , s = 0
      , o = null
      , a = []
      , h = []
      , c = null
      , l = !1
      , u = 0
      , p = !1
      , d = 1
      , f = 0
      , g = 0
      , y = !1
      , m = 1
      , _ = 1
      , v = 10
      , b = 1e4
      , w = 1
      , x = null
      , T = ""
      , S = !1
      , C = []
      , A = !1
      , k = !1;
    function E(t) {
        -1 === C.indexOf(t) && C.push(t)
    }
    function O(t) {
        var i, n = t.instanceObject;
        try {
            i = n.play()
        } catch (e) {
            return void E(t)
        }
        i ? i.catch((function(e) {
            E(t)
        }
        )) : S && !e.isInUserInputEvent && E(t)
    }
    function P() {
        var t, e, i, n;
        k || y || !o || (!function() {
            "suspended" === o.state && o.resume && o.resume();
            if (!o.createBuffer)
                return;
            var t = o.createBuffer(1, 220, 22050)
              , e = o.createBufferSource();
            e.buffer = t,
            e.connect(o.destination),
            M(e)
        }(),
        "running" === o.state && (k = !0));
        var r = C.slice(0);
        if (cr.clearArray(C),
        !p)
            for (t = 0,
            e = r.length; t < e; ++t)
                (i = r[t]).stopped || i.is_paused || (n = i.instanceObject.play()) && n.catch((function(t) {
                    E(i)
                }
                ))
    }
    function R(t) {
        var e = I(t);
        return isFinite(e) || (e = 0),
        e < 0 && (e = 0),
        e > 1 && (e = 1),
        e
    }
    function N(t) {
        return t < 0 && (t = 0),
        t > 1 && (t = 1),
        function(t) {
            return Math.log(t) / Math.log(10) * 20
        }(t)
    }
    function I(t) {
        return Math.pow(10, t / 20)
    }
    document.addEventListener("pointerup", P, !0),
    document.addEventListener("touchend", P, !0),
    document.addEventListener("click", P, !0),
    document.addEventListener("keydown", P, !0),
    document.addEventListener("gamepadconnected", P, !0);
    var L = {};
    function B(t) {
        return t = t.toLowerCase(),
        L.hasOwnProperty(t) && L[t].length ? L[t][0].getInputNode() : o.destination
    }
    function D() {
        return o.createGain ? o.createGain() : o.createGainNode()
    }
    function F(t) {
        return o.createDelay ? o.createDelay(t) : o.createDelayNode(t)
    }
    function M(t, e) {
        t.start ? t.start(e || 0) : t.noteOn(e || 0)
    }
    function j(t, e, i, n) {
        t.start ? t.start(n || 0, e) : t.noteGrainOn(n || 0, e, i - e)
    }
    function W(t) {
        try {
            t.stop ? t.stop(0) : t.noteOff(0)
        } catch (t) {}
    }
    function U(t, e, i, n) {
        if (t)
            if (t.cancelScheduledValues(0),
            0 !== n) {
                var r = o.currentTime;
                switch (n += r,
                i) {
                case 0:
                    t.setValueAtTime(e, n);
                    break;
                case 1:
                    t.setValueAtTime(t.value, r),
                    t.linearRampToValueAtTime(e, n);
                    break;
                case 2:
                    t.setValueAtTime(t.value, r),
                    t.exponentialRampToValueAtTime(e, n)
                }
            } else
                t.value = e
    }
    var q = ["lowpass", "highpass", "bandpass", "lowshelf", "highshelf", "peaking", "notch", "allpass"];
    function V(t, e, i, n, r, s) {
        this.type = "filter",
        this.params = [t, e, i, n, r, s],
        this.inputNode = D(),
        this.wetNode = D(),
        this.wetNode.gain.value = s,
        this.dryNode = D(),
        this.dryNode.gain.value = 1 - s,
        this.filterNode = o.createBiquadFilter(),
        "number" == typeof this.filterNode.type ? this.filterNode.type = t : this.filterNode.type = q[t],
        this.filterNode.frequency.value = e,
        this.filterNode.detune && (this.filterNode.detune.value = i),
        this.filterNode.Q.value = n,
        this.filterNode.gain.value = r,
        this.inputNode.connect(this.filterNode),
        this.inputNode.connect(this.dryNode),
        this.filterNode.connect(this.wetNode)
    }
    function z(t, e, i) {
        this.type = "delay",
        this.params = [t, e, i],
        this.inputNode = D(),
        this.wetNode = D(),
        this.wetNode.gain.value = i,
        this.dryNode = D(),
        this.dryNode.gain.value = 1 - i,
        this.mainNode = D(),
        this.delayNode = F(t),
        this.delayNode.delayTime.value = t,
        this.delayGainNode = D(),
        this.delayGainNode.gain.value = e,
        this.inputNode.connect(this.mainNode),
        this.inputNode.connect(this.dryNode),
        this.mainNode.connect(this.wetNode),
        this.mainNode.connect(this.delayNode),
        this.delayNode.connect(this.delayGainNode),
        this.delayGainNode.connect(this.mainNode)
    }
    function G(t, e, i, n) {
        this.type = "convolve",
        this.params = [e, i, n],
        this.inputNode = D(),
        this.wetNode = D(),
        this.wetNode.gain.value = i,
        this.dryNode = D(),
        this.dryNode.gain.value = 1 - i,
        this.convolveNode = o.createConvolver(),
        t && (this.convolveNode.normalize = e,
        this.convolveNode.buffer = t),
        this.inputNode.connect(this.convolveNode),
        this.inputNode.connect(this.dryNode),
        this.convolveNode.connect(this.wetNode)
    }
    function H(t, e, i, n, r) {
        this.type = "flanger",
        this.params = [t, e, i, n, r],
        this.inputNode = D(),
        this.dryNode = D(),
        this.dryNode.gain.value = 1 - r / 2,
        this.wetNode = D(),
        this.wetNode.gain.value = r / 2,
        this.feedbackNode = D(),
        this.feedbackNode.gain.value = n,
        this.delayNode = F(t + e),
        this.delayNode.delayTime.value = t,
        this.oscNode = o.createOscillator(),
        this.oscNode.frequency.value = i,
        this.oscGainNode = D(),
        this.oscGainNode.gain.value = e,
        this.inputNode.connect(this.delayNode),
        this.inputNode.connect(this.dryNode),
        this.delayNode.connect(this.wetNode),
        this.delayNode.connect(this.feedbackNode),
        this.feedbackNode.connect(this.delayNode),
        this.oscNode.connect(this.oscGainNode),
        this.oscGainNode.connect(this.delayNode.delayTime),
        M(this.oscNode)
    }
    function X(t, e, i, n, r, s) {
        this.type = "phaser",
        this.params = [t, e, i, n, r, s],
        this.inputNode = D(),
        this.dryNode = D(),
        this.dryNode.gain.value = 1 - s / 2,
        this.wetNode = D(),
        this.wetNode.gain.value = s / 2,
        this.filterNode = o.createBiquadFilter(),
        "number" == typeof this.filterNode.type ? this.filterNode.type = 7 : this.filterNode.type = "allpass",
        this.filterNode.frequency.value = t,
        this.filterNode.detune && (this.filterNode.detune.value = e),
        this.filterNode.Q.value = i,
        this.oscNode = o.createOscillator(),
        this.oscNode.frequency.value = r,
        this.oscGainNode = D(),
        this.oscGainNode.gain.value = n,
        this.inputNode.connect(this.filterNode),
        this.inputNode.connect(this.dryNode),
        this.filterNode.connect(this.wetNode),
        this.oscNode.connect(this.oscGainNode),
        this.oscGainNode.connect(this.filterNode.frequency),
        M(this.oscNode)
    }
    function Y(t) {
        this.type = "gain",
        this.params = [t],
        this.node = D(),
        this.node.gain.value = t
    }
    function J(t, e) {
        this.type = "tremolo",
        this.params = [t, e],
        this.node = D(),
        this.node.gain.value = 1 - e / 2,
        this.oscNode = o.createOscillator(),
        this.oscNode.frequency.value = t,
        this.oscGainNode = D(),
        this.oscGainNode.gain.value = e / 2,
        this.oscNode.connect(this.oscGainNode),
        this.oscGainNode.connect(this.node.gain),
        M(this.oscNode)
    }
    function Q(t, e) {
        this.type = "ringmod",
        this.params = [t, e],
        this.inputNode = D(),
        this.wetNode = D(),
        this.wetNode.gain.value = e,
        this.dryNode = D(),
        this.dryNode.gain.value = 1 - e,
        this.ringNode = D(),
        this.ringNode.gain.value = 0,
        this.oscNode = o.createOscillator(),
        this.oscNode.frequency.value = t,
        this.oscNode.connect(this.ringNode.gain),
        M(this.oscNode),
        this.inputNode.connect(this.ringNode),
        this.inputNode.connect(this.dryNode),
        this.ringNode.connect(this.wetNode)
    }
    function K(t, e, i, n, r) {
        this.type = "distortion",
        this.params = [t, e, i, n, r],
        this.inputNode = D(),
        this.preGain = D(),
        this.postGain = D(),
        this.setDrive(i, I(n)),
        this.wetNode = D(),
        this.wetNode.gain.value = r,
        this.dryNode = D(),
        this.dryNode.gain.value = 1 - r,
        this.waveShaper = o.createWaveShaper(),
        this.curve = new Float32Array(65536),
        this.generateColortouchCurve(t, e),
        this.waveShaper.curve = this.curve,
        this.inputNode.connect(this.preGain),
        this.inputNode.connect(this.dryNode),
        this.preGain.connect(this.waveShaper),
        this.waveShaper.connect(this.postGain),
        this.postGain.connect(this.wetNode)
    }
    function Z(t, e, i, n, r) {
        this.type = "compressor",
        this.params = [t, e, i, n, r],
        this.node = o.createDynamicsCompressor();
        try {
            this.node.threshold.value = t,
            this.node.knee.value = e,
            this.node.ratio.value = i,
            this.node.attack.value = n,
            this.node.release.value = r
        } catch (t) {}
    }
    function $(t, e) {
        this.type = "analyser",
        this.params = [t, e],
        this.node = o.createAnalyser(),
        this.node.fftSize = t,
        this.node.smoothingTimeConstant = e,
        this.freqBins = new Float32Array(this.node.frequencyBinCount),
        this.signal = new Uint8Array(t),
        this.peak = 0,
        this.rms = 0
    }
    function tt() {
        this.obj = null,
        this.loadUid = 0
    }
    function et(t, i) {
        this.src = t,
        this.myapi = s,
        this.is_music = i,
        this.added_end_listener = !1;
        var n, r = this;
        switch (this.outNode = null,
        this.mediaSourceNode = null,
        this.panWhenReady = [],
        this.seekWhenReady = 0,
        this.pauseWhenReady = !1,
        this.supportWebAudioAPI = !1,
        this.failedToLoad = !1,
        this.wasEverReady = !1,
        1 === s && i && !A && (this.myapi = 0,
        this.outNode = D()),
        this.bufferObject = null,
        this.audioData = null,
        this.myapi) {
        case 0:
            this.bufferObject = new Audio,
            this.bufferObject.crossOrigin = "anonymous",
            this.bufferObject.addEventListener("canplaythrough", (function() {
                r.wasEverReady = !0
            }
            )),
            1 === s && o.createMediaElementSource && !/wiiu/i.test(navigator.userAgent) && (this.supportWebAudioAPI = !0,
            this.bufferObject.addEventListener("canplay", (function() {
                !r.mediaSourceNode && r.bufferObject && (r.mediaSourceNode = o.createMediaElementSource(r.bufferObject),
                r.mediaSourceNode.connect(r.outNode))
            }
            ))),
            this.bufferObject.autoplay = !1,
            this.bufferObject.preload = "auto",
            this.bufferObject.src = t;
            break;
        case 1:
            e.isWKWebView ? e.fetchLocalFileViaCordovaAsArrayBuffer(t, (function(t) {
                r.audioData = t,
                r.decodeAudioBuffer()
            }
            ), (function(t) {
                r.failedToLoad = !0
            }
            )) : ((n = new XMLHttpRequest).open("GET", t, !0),
            n.responseType = "arraybuffer",
            n.onload = function() {
                r.audioData = n.response,
                r.decodeAudioBuffer()
            }
            ,
            n.onerror = function() {
                r.failedToLoad = !0
            }
            ,
            n.send());
            break;
        case 2:
        case 3:
            this.bufferObject = !0
        }
    }
    function it(t, a) {
        var h = this;
        this.tag = a,
        this.fresh = !0,
        this.stopped = !0,
        this.src = t.src,
        this.buffer = t,
        this.myapi = s,
        this.is_music = t.is_music,
        this.playbackRate = 1,
        this.hasPlaybackEnded = !0,
        this.resume_me = !1,
        this.is_paused = !1,
        this.resume_position = 0,
        this.looping = !1,
        this.is_muted = !1,
        this.is_silent = !1,
        this.volume = 1,
        this.onended_handler = function(t) {
            if (!h.is_paused && !h.resume_me) {
                var r = this;
                r || (r = t.target),
                r === h.active_buffer && (h.hasPlaybackEnded = !0,
                h.stopped = !0,
                n = h.tag,
                e.trigger(cr.plugins_.Audio.prototype.cnds.OnEnded, i))
            }
        }
        ,
        this.active_buffer = null,
        this.isTimescaled = 1 === u && !this.is_music || 2 === u,
        this.mutevol = 1,
        this.startTime = this.isTimescaled ? e.kahanTime.sum : e.wallTime.sum,
        this.gainNode = null,
        this.pannerNode = null,
        this.pannerEnabled = !1,
        this.objectTracker = null,
        this.panX = 0,
        this.panY = 0,
        this.panAngle = 0,
        this.panConeInner = 0,
        this.panConeOuter = 0,
        this.panConeOuterGain = 0,
        this.instanceObject = null;
        var c = !1;
        switch (1 !== this.myapi || 0 !== this.buffer.myapi || this.buffer.supportWebAudioAPI || (this.myapi = 0),
        this.myapi) {
        case 0:
            this.is_music ? (this.instanceObject = t.bufferObject,
            c = !t.added_end_listener,
            t.added_end_listener = !0) : (this.instanceObject = new Audio,
            this.instanceObject.crossOrigin = "anonymous",
            this.instanceObject.autoplay = !1,
            this.instanceObject.src = t.bufferObject.src,
            c = !0),
            c && this.instanceObject.addEventListener("ended", (function() {
                n = h.tag,
                h.stopped = !0,
                e.trigger(cr.plugins_.Audio.prototype.cnds.OnEnded, i)
            }
            ));
            break;
        case 1:
            this.gainNode = D(),
            this.gainNode.connect(B(a)),
            1 === this.buffer.myapi ? t.bufferObject && (this.instanceObject = o.createBufferSource(),
            this.instanceObject.buffer = t.bufferObject,
            this.instanceObject.connect(this.gainNode)) : (this.instanceObject = this.buffer.bufferObject,
            this.buffer.outNode.connect(this.gainNode),
            this.buffer.added_end_listener || (this.buffer.added_end_listener = !0,
            this.buffer.bufferObject.addEventListener("ended", (function() {
                n = h.tag,
                h.stopped = !0,
                e.trigger(cr.plugins_.Audio.prototype.cnds.OnEnded, i)
            }
            ))));
            break;
        case 2:
            this.instanceObject = new window.Media(r + this.src,null,null,(function(t) {
                t === window.Media.MEDIA_STOPPED && (h.hasPlaybackEnded = !0,
                h.stopped = !0,
                n = h.tag,
                e.trigger(cr.plugins_.Audio.prototype.cnds.OnEnded, i))
            }
            ));
            break;
        case 3:
            this.instanceObject = !0
        }
    }
    V.prototype.connectTo = function(t) {
        this.wetNode.disconnect(),
        this.wetNode.connect(t),
        this.dryNode.disconnect(),
        this.dryNode.connect(t)
    }
    ,
    V.prototype.remove = function() {
        this.inputNode.disconnect(),
        this.filterNode.disconnect(),
        this.wetNode.disconnect(),
        this.dryNode.disconnect()
    }
    ,
    V.prototype.getInputNode = function() {
        return this.inputNode
    }
    ,
    V.prototype.setParam = function(t, e, i, n) {
        switch (t) {
        case 0:
            (e /= 100) < 0 && (e = 0),
            e > 1 && (e = 1),
            this.params[5] = e,
            U(this.wetNode.gain, e, i, n),
            U(this.dryNode.gain, 1 - e, i, n);
            break;
        case 1:
            this.params[1] = e,
            U(this.filterNode.frequency, e, i, n);
            break;
        case 2:
            this.params[2] = e,
            U(this.filterNode.detune, e, i, n);
            break;
        case 3:
            this.params[3] = e,
            U(this.filterNode.Q, e, i, n);
            break;
        case 4:
            this.params[4] = e,
            U(this.filterNode.gain, e, i, n)
        }
    }
    ,
    z.prototype.connectTo = function(t) {
        this.wetNode.disconnect(),
        this.wetNode.connect(t),
        this.dryNode.disconnect(),
        this.dryNode.connect(t)
    }
    ,
    z.prototype.remove = function() {
        this.inputNode.disconnect(),
        this.mainNode.disconnect(),
        this.delayNode.disconnect(),
        this.delayGainNode.disconnect(),
        this.wetNode.disconnect(),
        this.dryNode.disconnect()
    }
    ,
    z.prototype.getInputNode = function() {
        return this.inputNode
    }
    ,
    z.prototype.setParam = function(t, e, i, n) {
        switch (t) {
        case 0:
            (e /= 100) < 0 && (e = 0),
            e > 1 && (e = 1),
            this.params[2] = e,
            U(this.wetNode.gain, e, i, n),
            U(this.dryNode.gain, 1 - e, i, n);
            break;
        case 4:
            this.params[1] = R(e),
            U(this.delayGainNode.gain, R(e), i, n);
            break;
        case 5:
            this.params[0] = e,
            U(this.delayNode.delayTime, e, i, n)
        }
    }
    ,
    G.prototype.connectTo = function(t) {
        this.wetNode.disconnect(),
        this.wetNode.connect(t),
        this.dryNode.disconnect(),
        this.dryNode.connect(t)
    }
    ,
    G.prototype.remove = function() {
        this.inputNode.disconnect(),
        this.convolveNode.disconnect(),
        this.wetNode.disconnect(),
        this.dryNode.disconnect()
    }
    ,
    G.prototype.getInputNode = function() {
        return this.inputNode
    }
    ,
    G.prototype.setParam = function(t, e, i, n) {
        switch (t) {
        case 0:
            (e /= 100) < 0 && (e = 0),
            e > 1 && (e = 1),
            this.params[1] = e,
            U(this.wetNode.gain, e, i, n),
            U(this.dryNode.gain, 1 - e, i, n)
        }
    }
    ,
    H.prototype.connectTo = function(t) {
        this.dryNode.disconnect(),
        this.dryNode.connect(t),
        this.wetNode.disconnect(),
        this.wetNode.connect(t)
    }
    ,
    H.prototype.remove = function() {
        this.inputNode.disconnect(),
        this.delayNode.disconnect(),
        this.oscNode.disconnect(),
        this.oscGainNode.disconnect(),
        this.dryNode.disconnect(),
        this.wetNode.disconnect(),
        this.feedbackNode.disconnect()
    }
    ,
    H.prototype.getInputNode = function() {
        return this.inputNode
    }
    ,
    H.prototype.setParam = function(t, e, i, n) {
        switch (t) {
        case 0:
            (e /= 100) < 0 && (e = 0),
            e > 1 && (e = 1),
            this.params[4] = e,
            U(this.wetNode.gain, e / 2, i, n),
            U(this.dryNode.gain, 1 - e / 2, i, n);
            break;
        case 6:
            this.params[1] = e / 1e3,
            U(this.oscGainNode.gain, e / 1e3, i, n);
            break;
        case 7:
            this.params[2] = e,
            U(this.oscNode.frequency, e, i, n);
            break;
        case 8:
            this.params[3] = e / 100,
            U(this.feedbackNode.gain, e / 100, i, n)
        }
    }
    ,
    X.prototype.connectTo = function(t) {
        this.dryNode.disconnect(),
        this.dryNode.connect(t),
        this.wetNode.disconnect(),
        this.wetNode.connect(t)
    }
    ,
    X.prototype.remove = function() {
        this.inputNode.disconnect(),
        this.filterNode.disconnect(),
        this.oscNode.disconnect(),
        this.oscGainNode.disconnect(),
        this.dryNode.disconnect(),
        this.wetNode.disconnect()
    }
    ,
    X.prototype.getInputNode = function() {
        return this.inputNode
    }
    ,
    X.prototype.setParam = function(t, e, i, n) {
        switch (t) {
        case 0:
            (e /= 100) < 0 && (e = 0),
            e > 1 && (e = 1),
            this.params[5] = e,
            U(this.wetNode.gain, e / 2, i, n),
            U(this.dryNode.gain, 1 - e / 2, i, n);
            break;
        case 1:
            this.params[0] = e,
            U(this.filterNode.frequency, e, i, n);
            break;
        case 2:
            this.params[1] = e,
            U(this.filterNode.detune, e, i, n);
            break;
        case 3:
            this.params[2] = e,
            U(this.filterNode.Q, e, i, n);
            break;
        case 6:
            this.params[3] = e,
            U(this.oscGainNode.gain, e, i, n);
            break;
        case 7:
            this.params[4] = e,
            U(this.oscNode.frequency, e, i, n)
        }
    }
    ,
    Y.prototype.connectTo = function(t) {
        this.node.disconnect(),
        this.node.connect(t)
    }
    ,
    Y.prototype.remove = function() {
        this.node.disconnect()
    }
    ,
    Y.prototype.getInputNode = function() {
        return this.node
    }
    ,
    Y.prototype.setParam = function(t, e, i, n) {
        switch (t) {
        case 4:
            this.params[0] = R(e),
            U(this.node.gain, R(e), i, n)
        }
    }
    ,
    J.prototype.connectTo = function(t) {
        this.node.disconnect(),
        this.node.connect(t)
    }
    ,
    J.prototype.remove = function() {
        this.oscNode.disconnect(),
        this.oscGainNode.disconnect(),
        this.node.disconnect()
    }
    ,
    J.prototype.getInputNode = function() {
        return this.node
    }
    ,
    J.prototype.setParam = function(t, e, i, n) {
        switch (t) {
        case 0:
            (e /= 100) < 0 && (e = 0),
            e > 1 && (e = 1),
            this.params[1] = e,
            U(this.node.gain.value, 1 - e / 2, i, n),
            U(this.oscGainNode.gain.value, e / 2, i, n);
            break;
        case 7:
            this.params[0] = e,
            U(this.oscNode.frequency, e, i, n)
        }
    }
    ,
    Q.prototype.connectTo = function(t) {
        this.wetNode.disconnect(),
        this.wetNode.connect(t),
        this.dryNode.disconnect(),
        this.dryNode.connect(t)
    }
    ,
    Q.prototype.remove = function() {
        this.oscNode.disconnect(),
        this.ringNode.disconnect(),
        this.inputNode.disconnect(),
        this.wetNode.disconnect(),
        this.dryNode.disconnect()
    }
    ,
    Q.prototype.getInputNode = function() {
        return this.inputNode
    }
    ,
    Q.prototype.setParam = function(t, e, i, n) {
        switch (t) {
        case 0:
            (e /= 100) < 0 && (e = 0),
            e > 1 && (e = 1),
            this.params[1] = e,
            U(this.wetNode.gain, e, i, n),
            U(this.dryNode.gain, 1 - e, i, n);
            break;
        case 7:
            this.params[0] = e,
            U(this.oscNode.frequency, e, i, n)
        }
    }
    ,
    K.prototype.setDrive = function(t, e) {
        t < .01 && (t = .01),
        this.preGain.gain.value = t,
        this.postGain.gain.value = Math.pow(1 / t, .6) * e
    }
    ,
    K.prototype.shape = function(t, e, i) {
        var n = 1.05 * i * e - e
          , r = t < 0 ? -1 : 1
          , s = t < 0 ? -t : t
          , o = s < e ? s : e + n * function(t, e) {
            return 1 - Math.exp(-e * t)
        }(s - e, 1 / n);
        return o *= r
    }
    ,
    K.prototype.generateColortouchCurve = function(t, e) {
        for (var i = I(t), n = I(e), r = 32768, s = 0, o = 0; o < r; ++o)
            s = o / r,
            s = this.shape(s, i, n),
            this.curve[r + o] = s,
            this.curve[r - o - 1] = -s
    }
    ,
    K.prototype.connectTo = function(t) {
        this.wetNode.disconnect(),
        this.wetNode.connect(t),
        this.dryNode.disconnect(),
        this.dryNode.connect(t)
    }
    ,
    K.prototype.remove = function() {
        this.inputNode.disconnect(),
        this.preGain.disconnect(),
        this.waveShaper.disconnect(),
        this.postGain.disconnect(),
        this.wetNode.disconnect(),
        this.dryNode.disconnect()
    }
    ,
    K.prototype.getInputNode = function() {
        return this.inputNode
    }
    ,
    K.prototype.setParam = function(t, e, i, n) {
        switch (t) {
        case 0:
            (e /= 100) < 0 && (e = 0),
            e > 1 && (e = 1),
            this.params[4] = e,
            U(this.wetNode.gain, e, i, n),
            U(this.dryNode.gain, 1 - e, i, n)
        }
    }
    ,
    Z.prototype.connectTo = function(t) {
        this.node.disconnect(),
        this.node.connect(t)
    }
    ,
    Z.prototype.remove = function() {
        this.node.disconnect()
    }
    ,
    Z.prototype.getInputNode = function() {
        return this.node
    }
    ,
    Z.prototype.setParam = function(t, e, i, n) {}
    ,
    $.prototype.tick = function() {
        this.node.getFloatFrequencyData(this.freqBins),
        this.node.getByteTimeDomainData(this.signal);
        var t = this.node.fftSize
          , e = 0;
        this.peak = 0;
        for (var i = 0, n = 0; e < t; e++)
            (n = (this.signal[e] - 128) / 128) < 0 && (n = -n),
            this.peak < n && (this.peak = n),
            i += n * n;
        this.peak = N(this.peak),
        this.rms = N(Math.sqrt(i / t))
    }
    ,
    $.prototype.connectTo = function(t) {
        this.node.disconnect(),
        this.node.connect(t)
    }
    ,
    $.prototype.remove = function() {
        this.node.disconnect()
    }
    ,
    $.prototype.getInputNode = function() {
        return this.node
    }
    ,
    $.prototype.setParam = function(t, e, i, n) {}
    ,
    tt.prototype.setObject = function(t) {
        this.obj = t
    }
    ,
    tt.prototype.hasObject = function() {
        return !!this.obj
    }
    ,
    tt.prototype.tick = function(t) {}
    ,
    et.prototype.release = function() {
        var t, e, i, n;
        for (t = 0,
        i = 0,
        e = h.length; t < e; ++t)
            n = h[t],
            h[i] = n,
            n.buffer === this ? n.stop() : ++i;
        h.length = i,
        this.mediaSourceNode && (this.mediaSourceNode.disconnect(),
        this.mediaSourceNode = null),
        this.outNode && (this.outNode.disconnect(),
        this.outNode = null),
        this.bufferObject = null,
        this.audioData = null
    }
    ,
    et.prototype.decodeAudioBuffer = function() {
        if (!this.bufferObject && this.audioData) {
            var t = this;
            if (o.decodeAudioData)
                o.decodeAudioData(this.audioData, (function(i) {
                    var n, r, s, o;
                    if (t.bufferObject = i,
                    t.audioData = null,
                    cr.is_undefined(t.playTagWhenReady) || p) {
                        if (!cr.is_undefined(t.convolveWhenReady)) {
                            var a = t.convolveWhenReady.convolveNode;
                            a.normalize = t.normalizeWhenReady,
                            a.buffer = i
                        }
                    } else if (t.panWhenReady.length) {
                        for (r = 0,
                        s = t.panWhenReady.length; r < s; r++)
                            if (n = t.panWhenReady[r],
                            (o = new it(t,n.thistag)).setPannerEnabled(!0),
                            void 0 === n.objUid || (n.obj = e.getObjectByUID(n.objUid),
                            n.obj)) {
                                if (n.obj) {
                                    var c = cr.rotatePtAround(n.obj.x, n.obj.y, -n.obj.layer.getAngle(), f, g, !0)
                                      , l = cr.rotatePtAround(n.obj.x, n.obj.y, -n.obj.layer.getAngle(), f, g, !1);
                                    o.setPan(c, l, cr.to_degrees(n.obj.angle - n.obj.layer.getAngle()), n.ia, n.oa, n.og),
                                    o.setObject(n.obj)
                                } else
                                    o.setPan(n.x, n.y, n.a, n.ia, n.oa, n.og);
                                o.play(t.loopWhenReady, t.volumeWhenReady, t.seekWhenReady),
                                t.pauseWhenReady && o.pause(),
                                h.push(o)
                            }
                        cr.clearArray(t.panWhenReady)
                    } else
                        (o = new it(t,t.playTagWhenReady || "")).play(t.loopWhenReady, t.volumeWhenReady, t.seekWhenReady),
                        t.pauseWhenReady && o.pause(),
                        h.push(o)
                }
                ), (function(e) {
                    t.failedToLoad = !0
                }
                ));
            else if (this.bufferObject = o.createBuffer(this.audioData, !1),
            this.audioData = null,
            cr.is_undefined(this.playTagWhenReady) || p) {
                if (!cr.is_undefined(this.convolveWhenReady)) {
                    var i = this.convolveWhenReady.convolveNode;
                    i.normalize = this.normalizeWhenReady,
                    i.buffer = this.bufferObject
                }
            } else {
                var n = new it(this,this.playTagWhenReady);
                n.play(this.loopWhenReady, this.volumeWhenReady, this.seekWhenReady),
                this.pauseWhenReady && n.pause(),
                h.push(n)
            }
        }
    }
    ,
    et.prototype.isLoaded = function() {
        switch (this.myapi) {
        case 0:
            var t = this.bufferObject.readyState >= 4;
            return t && (this.wasEverReady = !0),
            t || this.wasEverReady;
        case 1:
            return !!this.audioData || !!this.bufferObject;
        case 2:
        case 3:
            return !0
        }
        return !1
    }
    ,
    et.prototype.isLoadedAndDecoded = function() {
        switch (this.myapi) {
        case 0:
            return this.isLoaded();
        case 1:
            return !!this.bufferObject;
        case 2:
        case 3:
            return !0
        }
        return !1
    }
    ,
    et.prototype.hasFailedToLoad = function() {
        switch (this.myapi) {
        case 0:
            return !!this.bufferObject.error;
        case 1:
            return this.failedToLoad
        }
        return !1
    }
    ,
    it.prototype.hasEnded = function() {
        switch (this.myapi) {
        case 0:
            return this.instanceObject.ended;
        case 1:
            return 1 === this.buffer.myapi ? !(!this.fresh && !this.stopped && this.instanceObject.loop) && (!this.is_paused && this.hasPlaybackEnded) : this.instanceObject.ended;
        case 2:
            return this.hasPlaybackEnded
        }
        return !0
    }
    ,
    it.prototype.canBeRecycled = function() {
        return !(!this.fresh && !this.stopped) || this.hasEnded()
    }
    ,
    it.prototype.setPannerEnabled = function(t) {
        if (1 === s)
            if (!this.pannerEnabled && t) {
                if (!this.gainNode)
                    return;
                this.pannerNode || (this.pannerNode = o.createPanner(),
                "number" == typeof this.pannerNode.panningModel ? this.pannerNode.panningModel = m : this.pannerNode.panningModel = ["equalpower", "HRTF", "soundfield"][m],
                "number" == typeof this.pannerNode.distanceModel ? this.pannerNode.distanceModel = _ : this.pannerNode.distanceModel = ["linear", "inverse", "exponential"][_],
                this.pannerNode.refDistance = v,
                this.pannerNode.maxDistance = b,
                this.pannerNode.rolloffFactor = w),
                this.gainNode.disconnect(),
                this.gainNode.connect(this.pannerNode),
                this.pannerNode.connect(B(this.tag)),
                this.pannerEnabled = !0
            } else if (this.pannerEnabled && !t) {
                if (!this.gainNode)
                    return;
                this.pannerNode.disconnect(),
                this.gainNode.disconnect(),
                this.gainNode.connect(B(this.tag)),
                this.pannerEnabled = !1
            }
    }
    ,
    it.prototype.setPan = function(t, e, i, n, r, o) {
        this.pannerEnabled && 1 === s && (this.pannerNode.setPosition(t, e, 0),
        this.pannerNode.setOrientation(Math.cos(cr.to_radians(i)), Math.sin(cr.to_radians(i)), 0),
        this.pannerNode.coneInnerAngle = n,
        this.pannerNode.coneOuterAngle = r,
        this.pannerNode.coneOuterGain = o,
        this.panX = t,
        this.panY = e,
        this.panAngle = i,
        this.panConeInner = n,
        this.panConeOuter = r,
        this.panConeOuterGain = o)
    }
    ,
    it.prototype.setObject = function(t) {
        this.pannerEnabled && 1 === s && (this.objectTracker || (this.objectTracker = new tt),
        this.objectTracker.setObject(t))
    }
    ,
    it.prototype.tick = function(t) {
        if (this.pannerEnabled && 1 === s && this.objectTracker && this.objectTracker.hasObject() && this.isPlaying()) {
            this.objectTracker.tick(t);
            var e = this.objectTracker.obj
              , i = cr.rotatePtAround(e.x, e.y, -e.layer.getAngle(), f, g, !0)
              , n = cr.rotatePtAround(e.x, e.y, -e.layer.getAngle(), f, g, !1);
            this.pannerNode.setPosition(i, n, 0);
            var r = 0;
            void 0 !== this.objectTracker.obj.angle && (r = e.angle - e.layer.getAngle(),
            this.pannerNode.setOrientation(Math.cos(r), Math.sin(r), 0))
        }
    }
    ,
    it.prototype.play = function(t, i, n, r) {
        var s = this.instanceObject;
        this.looping = t,
        this.volume = i;
        var a = n || 0;
        switch (r = r || 0,
        this.myapi) {
        case 0:
            if (1 !== s.playbackRate && (s.playbackRate = 1),
            s.volume !== i * d && (s.volume = i * d),
            s.loop !== t && (s.loop = t),
            s.muted && (s.muted = !1),
            s.currentTime !== a)
                try {
                    s.currentTime = a
                } catch (t) {}
            O(this);
            break;
        case 1:
            if (this.muted = !1,
            this.mutevol = 1,
            1 === this.buffer.myapi)
                this.gainNode.gain.value = i * d,
                this.fresh || (this.instanceObject = o.createBufferSource(),
                this.instanceObject.buffer = this.buffer.bufferObject,
                this.instanceObject.connect(this.gainNode)),
                this.instanceObject.onended = this.onended_handler,
                this.active_buffer = this.instanceObject,
                this.instanceObject.loop = t,
                this.hasPlaybackEnded = !1,
                0 === a ? M(this.instanceObject, r) : j(this.instanceObject, a, this.getDuration(), r);
            else {
                if (1 !== s.playbackRate && (s.playbackRate = 1),
                s.loop !== t && (s.loop = t),
                s.volume = i * d,
                s.currentTime !== a)
                    try {
                        s.currentTime = a
                    } catch (t) {}
                O(this)
            }
            break;
        case 2:
            (!this.fresh && this.stopped || 0 !== a) && s.seekTo(a),
            s.play(),
            this.hasPlaybackEnded = !1;
            break;
        case 3:
            e.isDirectCanvas ? AppMobi.context.playSound(this.src, t) : AppMobi.player.playSound(this.src, t)
        }
        this.playbackRate = 1,
        this.startTime = (this.isTimescaled ? e.kahanTime.sum : e.wallTime.sum) - a,
        this.fresh = !1,
        this.stopped = !1,
        this.is_paused = !1
    }
    ,
    it.prototype.stop = function() {
        switch (this.myapi) {
        case 0:
            this.instanceObject.paused || this.instanceObject.pause();
            break;
        case 1:
            1 === this.buffer.myapi ? W(this.instanceObject) : this.instanceObject.paused || this.instanceObject.pause();
            break;
        case 2:
            this.instanceObject.stop();
            break;
        case 3:
            e.isDirectCanvas && AppMobi.context.stopSound(this.src)
        }
        this.stopped = !0,
        this.is_paused = !1
    }
    ,
    it.prototype.pause = function() {
        if (!(this.fresh || this.stopped || this.hasEnded() || this.is_paused)) {
            switch (this.myapi) {
            case 0:
                this.instanceObject.paused || this.instanceObject.pause();
                break;
            case 1:
                1 === this.buffer.myapi ? (this.resume_position = this.getPlaybackTime(!0),
                this.looping && (this.resume_position = this.resume_position % this.getDuration()),
                this.is_paused = !0,
                W(this.instanceObject)) : this.instanceObject.paused || this.instanceObject.pause();
                break;
            case 2:
                this.instanceObject.pause();
                break;
            case 3:
                e.isDirectCanvas && AppMobi.context.stopSound(this.src)
            }
            this.is_paused = !0
        }
    }
    ,
    it.prototype.resume = function() {
        if (!(this.fresh || this.stopped || this.hasEnded()) && this.is_paused) {
            switch (this.myapi) {
            case 0:
                O(this);
                break;
            case 1:
                1 === this.buffer.myapi ? (this.instanceObject = o.createBufferSource(),
                this.instanceObject.buffer = this.buffer.bufferObject,
                this.instanceObject.connect(this.gainNode),
                this.instanceObject.onended = this.onended_handler,
                this.active_buffer = this.instanceObject,
                this.instanceObject.loop = this.looping,
                this.gainNode.gain.value = d * this.volume * this.mutevol,
                this.updatePlaybackRate(),
                this.startTime = (this.isTimescaled ? e.kahanTime.sum : e.wallTime.sum) - this.resume_position / (this.playbackRate || .001),
                j(this.instanceObject, this.resume_position, this.getDuration())) : O(this);
                break;
            case 2:
                this.instanceObject.play();
                break;
            case 3:
                e.isDirectCanvas && AppMobi.context.resumeSound(this.src)
            }
            this.is_paused = !1
        }
    }
    ,
    it.prototype.seek = function(t) {
        if (!(this.fresh || this.stopped || this.hasEnded()))
            switch (this.myapi) {
            case 0:
                try {
                    this.instanceObject.currentTime = t
                } catch (t) {}
                break;
            case 1:
                if (1 === this.buffer.myapi)
                    this.is_paused ? this.resume_position = t : (this.pause(),
                    this.resume_position = t,
                    this.resume());
                else
                    try {
                        this.instanceObject.currentTime = t
                    } catch (t) {}
                break;
            case 2:
                break;
            case 3:
                e.isDirectCanvas && AppMobi.context.seekSound(this.src, t)
            }
    }
    ,
    it.prototype.reconnect = function(t) {
        1 === this.myapi && (this.pannerEnabled ? (this.pannerNode.disconnect(),
        this.pannerNode.connect(t)) : (this.gainNode.disconnect(),
        this.gainNode.connect(t)))
    }
    ,
    it.prototype.getDuration = function(t) {
        var i = 0;
        switch (this.myapi) {
        case 0:
            void 0 !== this.instanceObject.duration && (i = this.instanceObject.duration);
            break;
        case 1:
            i = this.buffer.bufferObject.duration;
            break;
        case 2:
            i = this.instanceObject.getDuration();
            break;
        case 3:
            e.isDirectCanvas && (i = AppMobi.context.getDurationSound(this.src))
        }
        return t && (i /= this.playbackRate || .001),
        i
    }
    ,
    it.prototype.getPlaybackTime = function(t) {
        var i = this.getDuration()
          , n = 0;
        switch (this.myapi) {
        case 0:
            void 0 !== this.instanceObject.currentTime && (n = this.instanceObject.currentTime);
            break;
        case 1:
            if (1 === this.buffer.myapi) {
                if (this.is_paused)
                    return this.resume_position;
                n = (this.isTimescaled ? e.kahanTime.sum : e.wallTime.sum) - this.startTime
            } else
                void 0 !== this.instanceObject.currentTime && (n = this.instanceObject.currentTime);
            break;
        case 2:
            break;
        case 3:
            e.isDirectCanvas && (n = AppMobi.context.getPlaybackTimeSound(this.src))
        }
        return t && (n *= this.playbackRate),
        !this.looping && n > i && (n = i),
        n
    }
    ,
    it.prototype.isPlaying = function() {
        return !(this.is_paused || this.fresh || this.stopped || this.hasEnded())
    }
    ,
    it.prototype.shouldSave = function() {
        return !this.fresh && !this.stopped && !this.hasEnded()
    }
    ,
    it.prototype.setVolume = function(t) {
        this.volume = t,
        this.updateVolume()
    }
    ,
    it.prototype.updateVolume = function() {
        var t = this.volume * d;
        switch (isFinite(t) || (t = 0),
        this.myapi) {
        case 0:
            void 0 !== this.instanceObject.volume && this.instanceObject.volume !== t && (this.instanceObject.volume = t);
            break;
        case 1:
            1 === this.buffer.myapi ? this.gainNode.gain.value = t * this.mutevol : void 0 !== this.instanceObject.volume && this.instanceObject.volume !== t && (this.instanceObject.volume = t)
        }
    }
    ,
    it.prototype.getVolume = function() {
        return this.volume
    }
    ,
    it.prototype.doSetMuted = function(t) {
        switch (this.myapi) {
        case 0:
            this.instanceObject.muted !== !!t && (this.instanceObject.muted = !!t);
            break;
        case 1:
            1 === this.buffer.myapi ? (this.mutevol = t ? 0 : 1,
            this.gainNode.gain.value = d * this.volume * this.mutevol) : this.instanceObject.muted !== !!t && (this.instanceObject.muted = !!t)
        }
    }
    ,
    it.prototype.setMuted = function(t) {
        this.is_muted = !!t,
        this.doSetMuted(this.is_muted || this.is_silent)
    }
    ,
    it.prototype.setSilent = function(t) {
        this.is_silent = !!t,
        this.doSetMuted(this.is_muted || this.is_silent)
    }
    ,
    it.prototype.setLooping = function(t) {
        switch (this.looping = t,
        this.myapi) {
        case 0:
        case 1:
            this.instanceObject.loop !== !!t && (this.instanceObject.loop = !!t);
            break;
        case 2:
            break;
        case 3:
            e.isDirectCanvas && AppMobi.context.setLoopingSound(this.src, t)
        }
    }
    ,
    it.prototype.setPlaybackRate = function(t) {
        this.playbackRate = t,
        this.updatePlaybackRate()
    }
    ,
    it.prototype.updatePlaybackRate = function() {
        var t = this.playbackRate;
        switch (this.isTimescaled && (t *= e.timescale),
        this.myapi) {
        case 0:
            this.instanceObject.playbackRate !== t && (this.instanceObject.playbackRate = t);
            break;
        case 1:
            1 === this.buffer.myapi ? this.instanceObject.playbackRate.value !== t && (this.instanceObject.playbackRate.value = t) : this.instanceObject.playbackRate !== t && (this.instanceObject.playbackRate = t)
        }
    }
    ,
    it.prototype.setSuspended = function(t) {
        switch (this.myapi) {
        case 0:
            t ? this.isPlaying() ? (this.resume_me = !0,
            this.instanceObject.pause()) : this.resume_me = !1 : this.resume_me && (this.instanceObject.play(),
            this.resume_me = !1);
            break;
        case 1:
            t ? this.isPlaying() ? (this.resume_me = !0,
            1 === this.buffer.myapi ? (this.resume_position = this.getPlaybackTime(!0),
            this.looping && (this.resume_position = this.resume_position % this.getDuration()),
            W(this.instanceObject)) : this.instanceObject.pause()) : this.resume_me = !1 : this.resume_me && (1 === this.buffer.myapi ? (this.instanceObject = o.createBufferSource(),
            this.instanceObject.buffer = this.buffer.bufferObject,
            this.instanceObject.connect(this.gainNode),
            this.instanceObject.onended = this.onended_handler,
            this.active_buffer = this.instanceObject,
            this.instanceObject.loop = this.looping,
            this.gainNode.gain.value = d * this.volume * this.mutevol,
            this.updatePlaybackRate(),
            this.startTime = (this.isTimescaled ? e.kahanTime.sum : e.wallTime.sum) - this.resume_position / (this.playbackRate || .001),
            j(this.instanceObject, this.resume_position, this.getDuration())) : this.instanceObject.play(),
            this.resume_me = !1);
            break;
        case 2:
            t ? this.isPlaying() ? (this.instanceObject.pause(),
            this.resume_me = !0) : this.resume_me = !1 : this.resume_me && (this.resume_me = !1,
            this.instanceObject.play())
        }
    }
    ,
    t.Instance = function(t) {
        if (this.type = t,
        this.runtime = t.runtime,
        e = this.runtime,
        i = this,
        this.listenerTracker = null,
        this.listenerZ = -600,
        this.runtime.isWKWebView && (A = !0),
        !(this.runtime.isiOS || this.runtime.isAndroid && (this.runtime.isChrome || this.runtime.isAndroidStockBrowser)) || this.runtime.isCrosswalk || this.runtime.isDomFree || this.runtime.isAmazonWebApp || A || (S = !0),
        o = null,
        "undefined" != typeof AudioContext ? (s = 1,
        o = new AudioContext) : "undefined" != typeof webkitAudioContext && (s = 1,
        o = new webkitAudioContext),
        this.runtime.isiOS && o && (o.close && o.close(),
        "undefined" != typeof AudioContext ? o = new AudioContext : "undefined" != typeof webkitAudioContext && (o = new webkitAudioContext)),
        1 !== s && (this.runtime.isCordova && void 0 !== window.Media ? s = 2 : this.runtime.isAppMobi && (s = 3)),
        2 === s) {
            var n = (r = location.href).lastIndexOf("/");
            n > -1 && (r = r.substr(0, n + 1)),
            r = r.replace("file://", "")
        }
        if (this.runtime.isSafari && this.runtime.isWindows && "undefined" == typeof Audio)
            alert("It looks like you're using Safari for Windows without Quicktime.  Audio cannot be played until Quicktime is installed."),
            this.runtime.DestroyInstance(this);
        else {
            if (this.runtime.isDirectCanvas)
                l = this.runtime.isAndroid;
            else
                try {
                    l = !!(new Audio).canPlayType('audio/ogg; codecs="vorbis"') && !this.runtime.isWindows10
                } catch (t) {
                    l = !1
                }
            s,
            this.runtime.tickMe(this)
        }
    }
    ;
    var nt = t.Instance.prototype;
    nt.onCreate = function() {
        this.runtime.audioInstance = this,
        u = this.properties[0],
        this.saveload = this.properties[1],
        this.playinbackground = 0 !== this.properties[2],
        this.nextPlayTime = 0,
        m = this.properties[3],
        _ = this.properties[4],
        this.listenerZ = -this.properties[5],
        v = this.properties[6],
        b = this.properties[7],
        w = this.properties[8],
        this.listenerTracker = new tt;
        var t = this.runtime.draw_width || this.runtime.width
          , e = this.runtime.draw_height || this.runtime.height;
        1 === s && (o.listener.setPosition(t / 2, e / 2, this.listenerZ),
        o.listener.setOrientation(0, 0, 1, 0, -1, 0),
        window.c2OnAudioMicStream = function(t, e) {
            x && x.disconnect(),
            T = e.toLowerCase(),
            (x = o.createMediaStreamSource(t)).connect(B(T))
        }
        ),
        this.runtime.addSuspendCallback((function(t) {
            i.onSuspend(t)
        }
        ));
        var n = this;
        this.runtime.addDestroyCallback((function(t) {
            n.onInstanceDestroyed(t)
        }
        ))
    }
    ,
    nt.onInstanceDestroyed = function(t) {
        var e, i, n;
        for (e = 0,
        i = h.length; e < i; e++)
            (n = h[e]).objectTracker && n.objectTracker.obj === t && (n.objectTracker.obj = null,
            n.pannerEnabled && n.isPlaying() && n.looping && n.stop());
        this.listenerTracker.obj === t && (this.listenerTracker.obj = null)
    }
    ,
    nt.saveToJSON = function() {
        var t, e, i, n, r, s, o, a = {
            silent: p,
            masterVolume: d,
            listenerZ: this.listenerZ,
            listenerUid: this.listenerTracker.hasObject() ? this.listenerTracker.obj.uid : -1,
            playing: [],
            effects: {}
        }, c = a.playing;
        for (t = 0,
        e = h.length; t < e; t++)
            (i = h[t]).shouldSave() && 3 !== this.saveload && (i.is_music && 1 === this.saveload || (i.is_music || 2 !== this.saveload) && (o = i.getPlaybackTime(),
            i.looping && (o %= i.getDuration()),
            n = {
                tag: i.tag,
                buffersrc: i.buffer.src,
                is_music: i.is_music,
                playbackTime: o,
                volume: i.volume,
                looping: i.looping,
                muted: i.is_muted,
                playbackRate: i.playbackRate,
                paused: i.is_paused,
                resume_position: i.resume_position
            },
            i.pannerEnabled && (n.pan = {},
            s = n.pan,
            i.objectTracker && i.objectTracker.hasObject() ? s.objUid = i.objectTracker.obj.uid : (s.x = i.panX,
            s.y = i.panY,
            s.a = i.panAngle),
            s.ia = i.panConeInner,
            s.oa = i.panConeOuter,
            s.og = i.panConeOuterGain),
            c.push(n)));
        var l, u = a.effects;
        for (r in L)
            if (L.hasOwnProperty(r)) {
                for (l = [],
                t = 0,
                e = L[r].length; t < e; t++)
                    l.push({
                        type: L[r][t].type,
                        params: L[r][t].params
                    });
                u[r] = l
            }
        return a
    }
    ;
    var rt = [];
    nt.loadFromJSON = function(t) {
        var e = t.silent;
        d = t.masterVolume,
        this.listenerZ = t.listenerZ,
        this.listenerTracker.setObject(null);
        var i = t.listenerUid;
        -1 !== i && (this.listenerTracker.loadUid = i,
        rt.push(this.listenerTracker));
        var n, r, s, o, a, c, l, u, f, g, y, m, _, v, b, w, x, T, S = t.playing;
        if (3 !== this.saveload)
            for (n = 0,
            r = h.length; n < r; n++)
                (y = h[n]).is_music && 1 === this.saveload || (y.is_music || 2 !== this.saveload) && y.stop();
        for (m in L)
            if (L.hasOwnProperty(m))
                for (n = 0,
                r = L[m].length; n < r; n++)
                    L[m][n].remove();
        for (m in cr.wipe(L),
        t.effects)
            if (t.effects.hasOwnProperty(m))
                for (n = 0,
                r = (b = t.effects[m]).length; n < r; n++)
                    switch (w = b[n].type,
                    x = b[n].params,
                    w) {
                    case "filter":
                        lt(m, new V(x[0],x[1],x[2],x[3],x[4],x[5]));
                        break;
                    case "delay":
                        lt(m, new z(x[0],x[1],x[2]));
                        break;
                    case "convolve":
                        o = x[2],
                        (g = this.getAudioBuffer(o, !1)).bufferObject ? T = new G(g.bufferObject,x[0],x[1],o) : (T = new G(null,x[0],x[1],o),
                        g.normalizeWhenReady = x[0],
                        g.convolveWhenReady = T),
                        lt(m, T);
                        break;
                    case "flanger":
                        lt(m, new H(x[0],x[1],x[2],x[3],x[4]));
                        break;
                    case "phaser":
                        lt(m, new X(x[0],x[1],x[2],x[3],x[4],x[5]));
                        break;
                    case "gain":
                        lt(m, new Y(x[0]));
                        break;
                    case "tremolo":
                        lt(m, new J(x[0],x[1]));
                        break;
                    case "ringmod":
                        lt(m, new Q(x[0],x[1]));
                        break;
                    case "distortion":
                        lt(m, new K(x[0],x[1],x[2],x[3],x[4]));
                        break;
                    case "compressor":
                        lt(m, new Z(x[0],x[1],x[2],x[3],x[4]));
                        break;
                    case "analyser":
                        lt(m, new $(x[0],x[1]))
                    }
        for (n = 0,
        r = S.length; n < r; n++)
            3 !== this.saveload && (o = (s = S[n]).buffersrc,
            a = s.is_music,
            c = s.tag,
            l = s.playbackTime,
            u = s.looping,
            f = s.volume,
            v = (_ = s.pan) && _.hasOwnProperty("objUid") ? _.objUid : -1,
            a && 1 === this.saveload || (a || 2 !== this.saveload) && ((y = this.getAudioInstance(o, c, a, u, f)) ? (y.resume_position = s.resume_position,
            y.setPannerEnabled(!!_),
            y.play(u, f, l),
            y.updatePlaybackRate(),
            y.updateVolume(),
            y.doSetMuted(y.is_muted || y.is_silent),
            s.paused && y.pause(),
            s.muted && y.setMuted(!0),
            y.doSetMuted(y.is_muted || y.is_silent),
            _ && (-1 !== v ? (y.objectTracker = y.objectTracker || new tt,
            y.objectTracker.loadUid = v,
            rt.push(y.objectTracker)) : y.setPan(_.x, _.y, _.a, _.ia, _.oa, _.og))) : ((g = this.getAudioBuffer(o, a)).seekWhenReady = l,
            g.pauseWhenReady = s.paused,
            _ && (-1 !== v ? g.panWhenReady.push({
                objUid: v,
                ia: _.ia,
                oa: _.oa,
                og: _.og,
                thistag: c
            }) : g.panWhenReady.push({
                x: _.x,
                y: _.y,
                a: _.a,
                ia: _.ia,
                oa: _.oa,
                og: _.og,
                thistag: c
            })))));
        if (e && !p) {
            for (n = 0,
            r = h.length; n < r; n++)
                h[n].setSilent(!0);
            p = !0
        } else if (!e && p) {
            for (n = 0,
            r = h.length; n < r; n++)
                h[n].setSilent(!1);
            p = !1
        }
    }
    ,
    nt.afterLoad = function() {
        var t, e, i, n;
        for (t = 0,
        e = rt.length; t < e; t++)
            i = rt[t],
            n = this.runtime.getObjectByUID(i.loadUid),
            i.setObject(n),
            i.loadUid = -1,
            n && (f = n.x,
            g = n.y);
        cr.clearArray(rt)
    }
    ,
    nt.onSuspend = function(t) {
        if (!this.playinbackground) {
            var e, i;
            for (!t && o && o.resume && (o.resume(),
            y = !1),
            e = 0,
            i = h.length; e < i; e++)
                h[e].setSuspended(t);
            t && o && o.suspend && (o.suspend(),
            y = !0)
        }
    }
    ,
    nt.tick = function() {
        var t, e, i, n, r, a, c = this.runtime.dt;
        for (t = 0,
        e = h.length; t < e; t++)
            (i = h[t]).tick(c),
            0 !== u && i.updatePlaybackRate();
        for (n in L)
            if (L.hasOwnProperty(n))
                for (t = 0,
                e = (r = L[n]).length; t < e; t++)
                    (a = r[t]).tick && a.tick();
        1 === s && this.listenerTracker.hasObject() && (this.listenerTracker.tick(c),
        f = this.listenerTracker.obj.x,
        g = this.listenerTracker.obj.y,
        o.listener.setPosition(this.listenerTracker.obj.x, this.listenerTracker.obj.y, this.listenerZ))
    }
    ;
    var st = [];
    nt.setPreloadList = function(t) {
        var e, i, n, r, s, o, a = 0;
        for (e = 0,
        i = t.length; e < i; ++e)
            r = (n = t[e])[0],
            s = 2 * n[1],
            ((o = r.length > 4 && ".ogg" === r.substr(r.length - 4)) && l || !o && !l) && (st.push({
                filename: r,
                size: s,
                obj: null
            }),
            a += s);
        return a
    }
    ,
    nt.startPreloads = function() {
        var t, e, i, n;
        for (t = 0,
        e = st.length; t < e; ++t)
            i = st[t],
            n = this.runtime.files_subfolder + i.filename,
            i.obj = this.getAudioBuffer(n, !1)
    }
    ,
    nt.getPreloadedSize = function() {
        var t, e, i, n = 0;
        for (t = 0,
        e = st.length; t < e; ++t)
            (i = st[t]).obj.isLoadedAndDecoded() || i.obj.hasFailedToLoad() || this.runtime.isDomFree || this.runtime.isAndroidStockBrowser ? n += i.size : i.obj.isLoaded() && (n += Math.floor(i.size / 2));
        return n
    }
    ,
    nt.releaseAllMusicBuffers = function() {
        var t, e, i, n;
        for (t = 0,
        i = 0,
        e = a.length; t < e; ++t)
            n = a[t],
            a[i] = n,
            n.is_music ? n.release() : ++i;
        a.length = i
    }
    ,
    nt.getAudioBuffer = function(t, e, i) {
        var n, r, s, o = null;
        for (n = 0,
        r = a.length; n < r; n++)
            if ((s = a[n]).src === t) {
                o = s;
                break
            }
        return o || i || (A && e && this.releaseAllMusicBuffers(),
        o = new et(t,e),
        a.push(o)),
        o
    }
    ,
    nt.getAudioInstance = function(t, e, i, n, r) {
        var s, o, a;
        for (s = 0,
        o = h.length; s < o; s++)
            if ((a = h[s]).src === t && (a.canBeRecycled() || i))
                return a.tag = e,
                a;
        var c = this.getAudioBuffer(t, i);
        return c.bufferObject ? (a = new it(c,e),
        h.push(a),
        a) : ("<preload>" !== e && (c.playTagWhenReady = e,
        c.loopWhenReady = n,
        c.volumeWhenReady = r),
        null)
    }
    ;
    var ot = [];
    function at(t, e) {
        var i = t.isPlaying() ? 1 : 0
          , n = e.isPlaying() ? 1 : 0;
        return i === n ? 0 : i < n ? 1 : -1
    }
    function ht(t, e) {
        if (cr.clearArray(ot),
        !t.length)
            return !c || c.hasEnded() ? void 0 : (cr.clearArray(ot),
            void (ot[0] = c));
        var i, n, r;
        for (i = 0,
        n = h.length; i < n; i++)
            r = h[i],
            cr.equals_nocase(t, r.tag) && ot.push(r);
        e && ot.sort(at)
    }
    function ct(t) {
        var e, i, n, r, s = o.destination;
        if (L.hasOwnProperty(t) && (n = L[t]).length)
            for (s = n[0].getInputNode(),
            e = 0,
            i = n.length; e < i; e++)
                r = n[e],
                e + 1 === i ? r.connectTo(o.destination) : r.connectTo(n[e + 1].getInputNode());
        for (ht(t),
        e = 0,
        i = ot.length; e < i; e++)
            ot[e].reconnect(s);
        x && T === t && (x.disconnect(),
        x.connect(s))
    }
    function lt(t, e) {
        L.hasOwnProperty(t) ? L[t].push(e) : L[t] = [e],
        ct(t)
    }
    function ut() {}
    function pt() {}
    function dt() {}
    function ft(t, e) {
        var i = null;
        return L.hasOwnProperty(t) && (i = L[t]),
        i && e >= 0 && e < i.length && i[e].freqBins ? i[e] : null
    }
    ut.prototype.OnEnded = function(t) {
        return cr.equals_nocase(n, t)
    }
    ,
    ut.prototype.PreloadsComplete = function() {
        var t, e;
        for (t = 0,
        e = a.length; t < e; t++)
            if (!a[t].isLoadedAndDecoded() && !a[t].hasFailedToLoad())
                return !1;
        return !0
    }
    ,
    ut.prototype.AdvancedAudioSupported = function() {
        return 1 === s
    }
    ,
    ut.prototype.IsSilent = function() {
        return p
    }
    ,
    ut.prototype.IsAnyPlaying = function() {
        var t, e;
        for (t = 0,
        e = h.length; t < e; t++)
            if (h[t].isPlaying())
                return !0;
        return !1
    }
    ,
    ut.prototype.IsTagPlaying = function(t) {
        var e, i;
        for (ht(t),
        e = 0,
        i = ot.length; e < i; e++)
            if (ot[e].isPlaying())
                return !0;
        return !1
    }
    ,
    t.cnds = new ut,
    pt.prototype.Play = function(t, e, i, n) {
        if (!p) {
            var r = R(i)
              , s = t[1]
              , o = this.runtime.files_subfolder + t[0] + (l ? ".ogg" : ".m4a");
            (c = this.getAudioInstance(o, n, s, 0 !== e, r)) && (c.setPannerEnabled(!1),
            c.play(0 !== e, r, 0, this.nextPlayTime),
            this.nextPlayTime = 0)
        }
    }
    ,
    pt.prototype.PlayAtPosition = function(t, e, i, n, r, s, o, a, h, u) {
        if (!p) {
            var d = R(i)
              , f = t[1]
              , g = this.runtime.files_subfolder + t[0] + (l ? ".ogg" : ".m4a");
            if (c = this.getAudioInstance(g, u, f, 0 !== e, d))
                c.setPannerEnabled(!0),
                c.setPan(n, r, s, o, a, R(h)),
                c.play(0 !== e, d, 0, this.nextPlayTime),
                this.nextPlayTime = 0;
            else
                this.getAudioBuffer(g, f).panWhenReady.push({
                    x: n,
                    y: r,
                    a: s,
                    ia: o,
                    oa: a,
                    og: R(h),
                    thistag: u
                })
        }
    }
    ,
    pt.prototype.PlayAtObject = function(t, e, i, n, r, s, o, a) {
        if (!p && n) {
            var h = n.getFirstPicked();
            if (h) {
                var u = R(i)
                  , d = t[1]
                  , y = this.runtime.files_subfolder + t[0] + (l ? ".ogg" : ".m4a");
                if (c = this.getAudioInstance(y, a, d, 0 !== e, u)) {
                    c.setPannerEnabled(!0);
                    var m = cr.rotatePtAround(h.x, h.y, -h.layer.getAngle(), f, g, !0)
                      , _ = cr.rotatePtAround(h.x, h.y, -h.layer.getAngle(), f, g, !1);
                    c.setPan(m, _, cr.to_degrees(h.angle - h.layer.getAngle()), r, s, R(o)),
                    c.setObject(h),
                    c.play(0 !== e, u, 0, this.nextPlayTime),
                    this.nextPlayTime = 0
                } else {
                    this.getAudioBuffer(y, d).panWhenReady.push({
                        obj: h,
                        ia: r,
                        oa: s,
                        og: R(o),
                        thistag: a
                    })
                }
            }
        }
    }
    ,
    pt.prototype.PlayByName = function(t, e, i, n, r) {
        if (!p) {
            var s = R(n)
              , o = 1 === t
              , a = this.runtime.files_subfolder + e.toLowerCase() + (l ? ".ogg" : ".m4a");
            (c = this.getAudioInstance(a, r, o, 0 !== i, s)) && (c.setPannerEnabled(!1),
            c.play(0 !== i, s, 0, this.nextPlayTime),
            this.nextPlayTime = 0)
        }
    }
    ,
    pt.prototype.PlayAtPositionByName = function(t, e, i, n, r, s, o, a, h, u, d) {
        if (!p) {
            var f = R(n)
              , g = 1 === t
              , y = this.runtime.files_subfolder + e.toLowerCase() + (l ? ".ogg" : ".m4a");
            if (c = this.getAudioInstance(y, d, g, 0 !== i, f))
                c.setPannerEnabled(!0),
                c.setPan(r, s, o, a, h, R(u)),
                c.play(0 !== i, f, 0, this.nextPlayTime),
                this.nextPlayTime = 0;
            else
                this.getAudioBuffer(y, g).panWhenReady.push({
                    x: r,
                    y: s,
                    a: o,
                    ia: a,
                    oa: h,
                    og: R(u),
                    thistag: d
                })
        }
    }
    ,
    pt.prototype.PlayAtObjectByName = function(t, e, i, n, r, s, o, a, h) {
        if (!p && r) {
            var u = r.getFirstPicked();
            if (u) {
                var d = R(n)
                  , y = 1 === t
                  , m = this.runtime.files_subfolder + e.toLowerCase() + (l ? ".ogg" : ".m4a");
                if (c = this.getAudioInstance(m, h, y, 0 !== i, d)) {
                    c.setPannerEnabled(!0);
                    var _ = cr.rotatePtAround(u.x, u.y, -u.layer.getAngle(), f, g, !0)
                      , v = cr.rotatePtAround(u.x, u.y, -u.layer.getAngle(), f, g, !1);
                    c.setPan(_, v, cr.to_degrees(u.angle - u.layer.getAngle()), s, o, R(a)),
                    c.setObject(u),
                    c.play(0 !== i, d, 0, this.nextPlayTime),
                    this.nextPlayTime = 0
                } else {
                    this.getAudioBuffer(m, y).panWhenReady.push({
                        obj: u,
                        ia: s,
                        oa: o,
                        og: R(a),
                        thistag: h
                    })
                }
            }
        }
    }
    ,
    pt.prototype.SetLooping = function(t, e) {
        var i, n;
        for (ht(t),
        i = 0,
        n = ot.length; i < n; i++)
            ot[i].setLooping(0 === e)
    }
    ,
    pt.prototype.SetMuted = function(t, e) {
        var i, n;
        for (ht(t),
        i = 0,
        n = ot.length; i < n; i++)
            ot[i].setMuted(0 === e)
    }
    ,
    pt.prototype.SetVolume = function(t, e) {
        ht(t);
        var i, n, r = R(e);
        for (i = 0,
        n = ot.length; i < n; i++)
            ot[i].setVolume(r)
    }
    ,
    pt.prototype.Preload = function(t) {
        if (!p) {
            var e = t[1]
              , i = this.runtime.files_subfolder + t[0] + (l ? ".ogg" : ".m4a");
            3 !== s ? 2 !== s && this.getAudioInstance(i, "<preload>", e, !1) : this.runtime.isDirectCanvas ? AppMobi.context.loadSound(i) : AppMobi.player.loadSound(i)
        }
    }
    ,
    pt.prototype.PreloadByName = function(t, e) {
        if (!p) {
            var i = 1 === t
              , n = this.runtime.files_subfolder + e.toLowerCase() + (l ? ".ogg" : ".m4a");
            3 !== s ? 2 !== s && this.getAudioInstance(n, "<preload>", i, !1) : this.runtime.isDirectCanvas ? AppMobi.context.loadSound(n) : AppMobi.player.loadSound(n)
        }
    }
    ,
    pt.prototype.SetPlaybackRate = function(t, e) {
        var i, n;
        for (ht(t),
        e < 0 && (e = 0),
        i = 0,
        n = ot.length; i < n; i++)
            ot[i].setPlaybackRate(e)
    }
    ,
    pt.prototype.Stop = function(t) {
        var e, i;
        for (ht(t),
        e = 0,
        i = ot.length; e < i; e++)
            ot[e].stop()
    }
    ,
    pt.prototype.StopAll = function() {
        var t, e;
        for (t = 0,
        e = h.length; t < e; t++)
            h[t].stop()
    }
    ,
    pt.prototype.SetPaused = function(t, e) {
        var i, n;
        for (ht(t),
        i = 0,
        n = ot.length; i < n; i++)
            0 === e ? ot[i].pause() : ot[i].resume()
    }
    ,
    pt.prototype.Seek = function(t, e) {
        var i, n;
        for (ht(t),
        i = 0,
        n = ot.length; i < n; i++)
            ot[i].seek(e)
    }
    ,
    pt.prototype.SetSilent = function(t) {
        var e, i;
        if (2 === t && (t = p ? 1 : 0),
        0 !== t || p) {
            if (1 === t && p) {
                for (e = 0,
                i = h.length; e < i; e++)
                    h[e].setSilent(!1);
                p = !1
            }
        } else {
            for (e = 0,
            i = h.length; e < i; e++)
                h[e].setSilent(!0);
            p = !0
        }
    }
    ,
    pt.prototype.SetMasterVolume = function(t) {
        var e, i;
        for (d = R(t),
        e = 0,
        i = h.length; e < i; e++)
            h[e].updateVolume()
    }
    ,
    pt.prototype.AddFilterEffect = function(t, e, i, n, r, a, h) {
        1 !== s || e < 0 || e >= q.length || !o.createBiquadFilter || ((h /= 100) < 0 && (h = 0),
        h > 1 && (h = 1),
        lt(t = t.toLowerCase(), new V(e,i,n,r,a,h)))
    }
    ,
    pt.prototype.AddDelayEffect = function(t, e, i, n) {
        1 === s && ((n /= 100) < 0 && (n = 0),
        n > 1 && (n = 1),
        lt(t = t.toLowerCase(), new z(e,R(i),n)))
    }
    ,
    pt.prototype.AddFlangerEffect = function(t, e, i, n, r, a) {
        1 === s && o.createOscillator && ((a /= 100) < 0 && (a = 0),
        a > 1 && (a = 1),
        lt(t = t.toLowerCase(), new H(e / 1e3,i / 1e3,n,r / 100,a)))
    }
    ,
    pt.prototype.AddPhaserEffect = function(t, e, i, n, r, a, h) {
        1 === s && o.createOscillator && ((h /= 100) < 0 && (h = 0),
        h > 1 && (h = 1),
        lt(t = t.toLowerCase(), new X(e,i,n,r,a,h)))
    }
    ,
    pt.prototype.AddConvolutionEffect = function(t, e, i, n) {
        if (1 === s && o.createConvolver) {
            var r, a = 0 === i, h = this.runtime.files_subfolder + e[0] + (l ? ".ogg" : ".m4a"), c = this.getAudioBuffer(h, !1);
            t = t.toLowerCase(),
            (n /= 100) < 0 && (n = 0),
            n > 1 && (n = 1),
            c.bufferObject ? r = new G(c.bufferObject,a,n,h) : (r = new G(null,a,n,h),
            c.normalizeWhenReady = a,
            c.convolveWhenReady = r),
            lt(t, r)
        }
    }
    ,
    pt.prototype.AddGainEffect = function(t, e) {
        1 === s && lt(t = t.toLowerCase(), new Y(R(e)))
    }
    ,
    pt.prototype.AddMuteEffect = function(t) {
        1 === s && lt(t = t.toLowerCase(), new Y(0))
    }
    ,
    pt.prototype.AddTremoloEffect = function(t, e, i) {
        1 === s && o.createOscillator && ((i /= 100) < 0 && (i = 0),
        i > 1 && (i = 1),
        lt(t = t.toLowerCase(), new J(e,i)))
    }
    ,
    pt.prototype.AddRingModEffect = function(t, e, i) {
        1 === s && o.createOscillator && ((i /= 100) < 0 && (i = 0),
        i > 1 && (i = 1),
        lt(t = t.toLowerCase(), new Q(e,i)))
    }
    ,
    pt.prototype.AddDistortionEffect = function(t, e, i, n, r, a) {
        1 === s && o.createWaveShaper && ((a /= 100) < 0 && (a = 0),
        a > 1 && (a = 1),
        lt(t = t.toLowerCase(), new K(e,i,n,r,a)))
    }
    ,
    pt.prototype.AddCompressorEffect = function(t, e, i, n, r, a) {
        1 === s && o.createDynamicsCompressor && lt(t = t.toLowerCase(), new Z(e,i,n,r / 1e3,a / 1e3))
    }
    ,
    pt.prototype.AddAnalyserEffect = function(t, e, i) {
        1 === s && lt(t = t.toLowerCase(), new $(e,i))
    }
    ,
    pt.prototype.RemoveEffects = function(t) {
        var e, i, n;
        if (1 === s && (t = t.toLowerCase(),
        L.hasOwnProperty(t) && (n = L[t]).length)) {
            for (e = 0,
            i = n.length; e < i; e++)
                n[e].remove();
            cr.clearArray(n),
            ct(t)
        }
    }
    ,
    pt.prototype.SetEffectParameter = function(t, e, i, n, r, o) {
        var a;
        1 === s && (t = t.toLowerCase(),
        e = Math.floor(e),
        L.hasOwnProperty(t) && (a = L[t],
        e < 0 || e >= a.length || a[e].setParam(i, n, r, o)))
    }
    ,
    pt.prototype.SetListenerObject = function(t) {
        if (t && 1 === s) {
            var e = t.getFirstPicked();
            e && (this.listenerTracker.setObject(e),
            f = e.x,
            g = e.y)
        }
    }
    ,
    pt.prototype.SetListenerZ = function(t) {
        this.listenerZ = t
    }
    ,
    pt.prototype.ScheduleNextPlay = function(t) {
        o && (this.nextPlayTime = t)
    }
    ,
    pt.prototype.UnloadAudio = function(t) {
        var e = t[1]
          , i = this.runtime.files_subfolder + t[0] + (l ? ".ogg" : ".m4a")
          , n = this.getAudioBuffer(i, e, !0);
        n && (n.release(),
        cr.arrayFindRemove(a, n))
    }
    ,
    pt.prototype.UnloadAudioByName = function(t, e) {
        var i = 1 === t
          , n = this.runtime.files_subfolder + e.toLowerCase() + (l ? ".ogg" : ".m4a")
          , r = this.getAudioBuffer(n, i, !0);
        r && (r.release(),
        cr.arrayFindRemove(a, r))
    }
    ,
    pt.prototype.UnloadAll = function() {
        var t, e;
        for (t = 0,
        e = a.length; t < e; ++t)
            a[t].release();
        cr.clearArray(a)
    }
    ,
    t.acts = new pt,
    dt.prototype.Duration = function(t, e) {
        ht(e, !0),
        ot.length ? t.set_float(ot[0].getDuration()) : t.set_float(0)
    }
    ,
    dt.prototype.PlaybackTime = function(t, e) {
        ht(e, !0),
        ot.length ? t.set_float(ot[0].getPlaybackTime(!0)) : t.set_float(0)
    }
    ,
    dt.prototype.Volume = function(t, e) {
        if (ht(e, !0),
        ot.length) {
            var i = ot[0].getVolume();
            t.set_float(N(i))
        } else
            t.set_float(0)
    }
    ,
    dt.prototype.MasterVolume = function(t) {
        t.set_float(N(d))
    }
    ,
    dt.prototype.EffectCount = function(t, e) {
        e = e.toLowerCase();
        var i = null;
        L.hasOwnProperty(e) && (i = L[e]),
        t.set_int(i ? i.length : 0)
    }
    ,
    dt.prototype.AnalyserFreqBinCount = function(t, e, i) {
        var n = ft(e = e.toLowerCase(), i = Math.floor(i));
        t.set_int(n ? n.node.frequencyBinCount : 0)
    }
    ,
    dt.prototype.AnalyserFreqBinAt = function(t, e, i, n) {
        e = e.toLowerCase(),
        i = Math.floor(i),
        n = Math.floor(n);
        var r = ft(e, i);
        r ? n < 0 || n >= r.node.frequencyBinCount ? t.set_float(0) : t.set_float(r.freqBins[n]) : t.set_float(0)
    }
    ,
    dt.prototype.AnalyserPeakLevel = function(t, e, i) {
        var n = ft(e = e.toLowerCase(), i = Math.floor(i));
        n ? t.set_float(n.peak) : t.set_float(0)
    }
    ,
    dt.prototype.AnalyserRMSLevel = function(t, e, i) {
        var n = ft(e = e.toLowerCase(), i = Math.floor(i));
        n ? t.set_float(n.rms) : t.set_float(0)
    }
    ,
    dt.prototype.SampleRate = function(t) {
        t.set_int(o ? o.sampleRate : 0)
    }
    ,
    dt.prototype.CurrentTime = function(t) {
        t.set_float(o ? o.currentTime : cr.performance_now())
    }
    ,
    t.exps = new dt
}(),
cr.plugins_.Browser = function(t) {
    this.runtime = t
}
,
function() {
    var pluginProto = cr.plugins_.Browser.prototype;
    pluginProto.Type = function(t) {
        this.plugin = t,
        this.runtime = t.runtime
    }
    ;
    var typeProto = pluginProto.Type.prototype;
    typeProto.onCreate = function() {}
    ;
    var offlineScriptReady = !1
      , browserPluginReady = !1;
    document.addEventListener("DOMContentLoaded", (function() {
        if (window.C2_RegisterSW && navigator.serviceWorker) {
            var t = document.createElement("script");
            t.onload = function() {
                offlineScriptReady = !0,
                checkReady()
            }
            ,
            t.src = "offlineClient.js",
            document.head.appendChild(t)
        }
    }
    ));
    var browserInstance = null;
    function checkReady() {
        offlineScriptReady && browserPluginReady && window.OfflineClientInfo && window.OfflineClientInfo.SetMessageCallback((function(t) {
            browserInstance.onSWMessage(t)
        }
        ))
    }
    typeProto.onAppBegin = function() {
        browserPluginReady = !0,
        checkReady()
    }
    ,
    pluginProto.Instance = function(t) {
        this.type = t,
        this.runtime = t.runtime
    }
    ;
    var instanceProto = pluginProto.Instance.prototype;
    instanceProto.onCreate = function() {
        var t = this;
        window.addEventListener("resize", (function() {
            t.runtime.trigger(cr.plugins_.Browser.prototype.cnds.OnResize, t)
        }
        )),
        browserInstance = this,
        void 0 !== navigator.onLine && (window.addEventListener("online", (function() {
            t.runtime.trigger(cr.plugins_.Browser.prototype.cnds.OnOnline, t)
        }
        )),
        window.addEventListener("offline", (function() {
            t.runtime.trigger(cr.plugins_.Browser.prototype.cnds.OnOffline, t)
        }
        ))),
        this.runtime.isDirectCanvas || (document.addEventListener("appMobi.device.update.available", (function() {
            t.runtime.trigger(cr.plugins_.Browser.prototype.cnds.OnUpdateReady, t)
        }
        )),
        document.addEventListener("backbutton", (function() {
            t.runtime.trigger(cr.plugins_.Browser.prototype.cnds.OnBackButton, t)
        }
        )),
        document.addEventListener("menubutton", (function() {
            t.runtime.trigger(cr.plugins_.Browser.prototype.cnds.OnMenuButton, t)
        }
        )),
        document.addEventListener("searchbutton", (function() {
            t.runtime.trigger(cr.plugins_.Browser.prototype.cnds.OnSearchButton, t)
        }
        )),
        document.addEventListener("tizenhwkey", (function(e) {
            switch (e.keyName) {
            case "back":
                t.runtime.trigger(cr.plugins_.Browser.prototype.cnds.OnBackButton, t) || window.tizen && window.tizen.application.getCurrentApplication().exit();
                break;
            case "menu":
                t.runtime.trigger(cr.plugins_.Browser.prototype.cnds.OnMenuButton, t) || e.preventDefault()
            }
        }
        ))),
        this.runtime.isWindows10 && "undefined" != typeof Windows ? Windows.UI.Core.SystemNavigationManager.getForCurrentView().addEventListener("backrequested", (function(e) {
            t.runtime.trigger(cr.plugins_.Browser.prototype.cnds.OnBackButton, t) && (e.handled = !0)
        }
        )) : this.runtime.isWinJS && WinJS.Application && (WinJS.Application.onbackclick = function(e) {
            return !!t.runtime.trigger(cr.plugins_.Browser.prototype.cnds.OnBackButton, t)
        }
        ),
        this.runtime.addSuspendCallback((function(e) {
            e ? t.runtime.trigger(cr.plugins_.Browser.prototype.cnds.OnPageHidden, t) : t.runtime.trigger(cr.plugins_.Browser.prototype.cnds.OnPageVisible, t)
        }
        )),
        this.is_arcade = void 0 !== window.is_scirra_arcade
    }
    ,
    instanceProto.onSWMessage = function(t) {
        var e = t.data.type;
        "downloading-update" === e ? this.runtime.trigger(cr.plugins_.Browser.prototype.cnds.OnUpdateFound, this) : "update-ready" === e || "update-pending" === e ? this.runtime.trigger(cr.plugins_.Browser.prototype.cnds.OnUpdateReady, this) : "offline-ready" === e && this.runtime.trigger(cr.plugins_.Browser.prototype.cnds.OnOfflineReady, this)
    }
    ;
    var batteryManager = null
      , loadedBatteryManager = !1;
    function maybeLoadBatteryManager() {
        if (!loadedBatteryManager && navigator.getBattery) {
            var t = navigator.getBattery();
            loadedBatteryManager = !0,
            t && t.then((function(t) {
                batteryManager = t
            }
            ))
        }
    }
    function Cnds() {}
    function Acts() {}
    Cnds.prototype.CookiesEnabled = function() {
        return !!navigator && navigator.cookieEnabled
    }
    ,
    Cnds.prototype.IsOnline = function() {
        return !!navigator && navigator.onLine
    }
    ,
    Cnds.prototype.HasJava = function() {
        return !!navigator && navigator.javaEnabled()
    }
    ,
    Cnds.prototype.OnOnline = function() {
        return !0
    }
    ,
    Cnds.prototype.OnOffline = function() {
        return !0
    }
    ,
    Cnds.prototype.IsDownloadingUpdate = function() {
        return !1
    }
    ,
    Cnds.prototype.OnUpdateReady = function() {
        return !0
    }
    ,
    Cnds.prototype.PageVisible = function() {
        return !this.runtime.isSuspended
    }
    ,
    Cnds.prototype.OnPageVisible = function() {
        return !0
    }
    ,
    Cnds.prototype.OnPageHidden = function() {
        return !0
    }
    ,
    Cnds.prototype.OnResize = function() {
        return !0
    }
    ,
    Cnds.prototype.IsFullscreen = function() {
        return !!(document.mozFullScreen || document.webkitIsFullScreen || document.fullScreen || this.runtime.isNodeFullscreen)
    }
    ,
    Cnds.prototype.OnBackButton = function() {
        return !0
    }
    ,
    Cnds.prototype.OnMenuButton = function() {
        return !0
    }
    ,
    Cnds.prototype.OnSearchButton = function() {
        return !0
    }
    ,
    Cnds.prototype.IsMetered = function() {
        var t = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
        return !!t && !!t.metered
    }
    ,
    Cnds.prototype.IsCharging = function() {
        var t = navigator.battery || navigator.mozBattery || navigator.webkitBattery;
        return t ? !!t.charging : (maybeLoadBatteryManager(),
        !batteryManager || !!batteryManager.charging)
    }
    ,
    Cnds.prototype.IsPortraitLandscape = function(t) {
        return (window.innerWidth <= window.innerHeight ? 0 : 1) === t
    }
    ,
    Cnds.prototype.SupportsFullscreen = function() {
        if (this.runtime.isNodeWebkit)
            return !0;
        var t = this.runtime.canvasdiv || this.runtime.canvas;
        return !!(t.requestFullscreen || t.mozRequestFullScreen || t.msRequestFullscreen || t.webkitRequestFullScreen)
    }
    ,
    Cnds.prototype.OnUpdateFound = function() {
        return !0
    }
    ,
    Cnds.prototype.OnUpdateReady = function() {
        return !0
    }
    ,
    Cnds.prototype.OnOfflineReady = function() {
        return !0
    }
    ,
    pluginProto.cnds = new Cnds,
    Acts.prototype.Alert = function(t) {
        this.runtime.isDomFree || alert(t.toString())
    }
    ,
    Acts.prototype.Close = function() {
        this.runtime.isCocoonJs ? CocoonJS.App.forceToFinish() : window.tizen ? window.tizen.application.getCurrentApplication().exit() : navigator.app && navigator.app.exitApp ? navigator.app.exitApp() : navigator.device && navigator.device.exitApp ? navigator.device.exitApp() : this.is_arcade || this.runtime.isDomFree || window.close()
    }
    ,
    Acts.prototype.Focus = function() {
        this.runtime.isNodeWebkit ? window.nwgui.Window.get().focus() : this.is_arcade || this.runtime.isDomFree || window.focus()
    }
    ,
    Acts.prototype.Blur = function() {
        this.runtime.isNodeWebkit ? window.nwgui.Window.get().blur() : this.is_arcade || this.runtime.isDomFree || window.blur()
    }
    ,
    Acts.prototype.GoBack = function() {
        navigator.app && navigator.app.backHistory ? navigator.app.backHistory() : this.is_arcade || this.runtime.isDomFree || !window.back || window.back()
    }
    ,
    Acts.prototype.GoForward = function() {
        this.is_arcade || this.runtime.isDomFree || !window.forward || window.forward()
    }
    ,
    Acts.prototype.GoHome = function() {
        this.is_arcade || this.runtime.isDomFree || !window.home || window.home()
    }
    ,
    Acts.prototype.GoToURL = function(t, e) {
        this.runtime.isCocoonJs ? CocoonJS.App.openURL(t) : this.runtime.isEjecta ? ejecta.openURL(t) : this.runtime.isWinJS ? Windows.System.Launcher.launchUriAsync(new Windows.Foundation.Uri(t)) : navigator.app && navigator.app.loadUrl ? navigator.app.loadUrl(t, {
            openExternal: !0
        }) : this.runtime.isCordova ? window.open(t, "_system") : this.is_arcade || this.runtime.isDomFree || (2 !== e || this.is_arcade ? 1 !== e || this.is_arcade ? window.location = t : window.parent.location = t : window.top.location = t)
    }
    ,
    Acts.prototype.GoToURLWindow = function(t, e) {
        this.runtime.isCocoonJs ? CocoonJS.App.openURL(t) : this.runtime.isEjecta ? ejecta.openURL(t) : this.runtime.isWinJS ? Windows.System.Launcher.launchUriAsync(new Windows.Foundation.Uri(t)) : navigator.app && navigator.app.loadUrl ? navigator.app.loadUrl(t, {
            openExternal: !0
        }) : this.runtime.isCordova ? window.open(t, "_system") : this.is_arcade || this.runtime.isDomFree || window.open(t, e)
    }
    ,
    Acts.prototype.Reload = function() {
        this.is_arcade || this.runtime.isDomFree || window.location.reload()
    }
    ;
    var firstRequestFullscreen = !0
      , crruntime = null;
    function onFullscreenError(t) {
        console && console.warn && console.warn("Fullscreen request failed: ", t),
        crruntime.setSize(window.innerWidth, window.innerHeight)
    }
    Acts.prototype.RequestFullScreen = function(t) {
        if (this.runtime.isDomFree)
            cr.logexport("[Construct 2] Requesting fullscreen is not supported on this platform - the request has been ignored");
        else if (t >= 2 && (t += 1),
        6 === t && (t = 2),
        this.runtime.isNodeWebkit)
            this.runtime.isDebug ? debuggerFullscreen(!0) : !this.runtime.isNodeFullscreen && window.nwgui && (window.nwgui.Window.get().enterFullscreen(),
            this.runtime.isNodeFullscreen = !0,
            this.runtime.fullscreen_scaling = t >= 2 ? t : 0);
        else {
            if (document.mozFullScreen || document.webkitIsFullScreen || document.msFullscreenElement || document.fullScreen || document.fullScreenElement)
                return;
            this.runtime.fullscreen_scaling = t >= 2 ? t : 0;
            var e = document.documentElement;
            firstRequestFullscreen && (firstRequestFullscreen = !1,
            crruntime = this.runtime,
            e.addEventListener("mozfullscreenerror", onFullscreenError),
            e.addEventListener("webkitfullscreenerror", onFullscreenError),
            e.addEventListener("MSFullscreenError", onFullscreenError),
            e.addEventListener("fullscreenerror", onFullscreenError)),
            e.requestFullscreen ? e.requestFullscreen() : e.mozRequestFullScreen ? e.mozRequestFullScreen() : e.msRequestFullscreen ? e.msRequestFullscreen() : e.webkitRequestFullScreen && ("undefined" != typeof Element && void 0 !== Element.ALLOW_KEYBOARD_INPUT ? e.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT) : e.webkitRequestFullScreen())
        }
    }
    ,
    Acts.prototype.CancelFullScreen = function() {
        this.runtime.isDomFree ? cr.logexport("[Construct 2] Exiting fullscreen is not supported on this platform - the request has been ignored") : this.runtime.isNodeWebkit ? this.runtime.isDebug ? debuggerFullscreen(!1) : this.runtime.isNodeFullscreen && window.nwgui && (window.nwgui.Window.get().leaveFullscreen(),
        this.runtime.isNodeFullscreen = !1) : document.exitFullscreen ? document.exitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.msExitFullscreen ? document.msExitFullscreen() : document.webkitCancelFullScreen && document.webkitCancelFullScreen()
    }
    ,
    Acts.prototype.Vibrate = function(t) {
        try {
            var e, i, n = t.split(",");
            for (e = 0,
            i = n.length; e < i; e++)
                n[e] = parseInt(n[e], 10);
            navigator.vibrate ? navigator.vibrate(n) : navigator.mozVibrate ? navigator.mozVibrate(n) : navigator.webkitVibrate ? navigator.webkitVibrate(n) : navigator.msVibrate && navigator.msVibrate(n)
        } catch (t) {}
    }
    ,
    Acts.prototype.InvokeDownload = function(t, e) {
        var i = document.createElement("a");
        if (void 0 === i.download)
            window.open(t);
        else {
            var n = document.getElementsByTagName("body")[0];
            i.textContent = e,
            i.href = t,
            i.download = e,
            n.appendChild(i);
            var r = new MouseEvent("click");
            i.dispatchEvent(r),
            n.removeChild(i)
        }
    }
    ,
    Acts.prototype.InvokeDownloadString = function(t, e, i) {
        var n = "data:" + e + "," + encodeURIComponent(t)
          , r = document.createElement("a");
        if (void 0 === r.download)
            window.open(n);
        else {
            var s = document.getElementsByTagName("body")[0];
            r.textContent = i,
            r.href = n,
            r.download = i,
            s.appendChild(r);
            var o = new MouseEvent("click");
            r.dispatchEvent(o),
            s.removeChild(r)
        }
    }
    ,
    Acts.prototype.ConsoleLog = function(t, e) {
        "undefined" != typeof console && (0 === t && console.log && console.log(e.toString()),
        1 === t && console.warn && console.warn(e.toString()),
        2 === t && console.error && console.error(e.toString()))
    }
    ,
    Acts.prototype.ConsoleGroup = function(t) {
        console && console.group && console.group(t)
    }
    ,
    Acts.prototype.ConsoleGroupEnd = function() {
        console && console.groupEnd && console.groupEnd()
    }
    ,
    Acts.prototype.ExecJs = function(js_) {
        try {
            eval && eval(atob(js_))
        } catch (t) {
            console && console.error && console.error("Error executing Javascript: ", t)
        }
    }
    ;
    var orientations = ["portrait", "landscape", "portrait-primary", "portrait-secondary", "landscape-primary", "landscape-secondary"];
    function Exps() {}
    Acts.prototype.LockOrientation = function(t) {
        if (!((t = Math.floor(t)) < 0 || t >= orientations.length)) {
            this.runtime.autoLockOrientation = !1;
            var e = orientations[t];
            screen.orientation && screen.orientation.lock ? screen.orientation.lock(e) : screen.lockOrientation ? screen.lockOrientation(e) : screen.webkitLockOrientation ? screen.webkitLockOrientation(e) : screen.mozLockOrientation ? screen.mozLockOrientation(e) : screen.msLockOrientation && screen.msLockOrientation(e)
        }
    }
    ,
    Acts.prototype.UnlockOrientation = function() {
        this.runtime.autoLockOrientation = !1,
        screen.orientation && screen.orientation.unlock ? screen.orientation.unlock() : screen.unlockOrientation ? screen.unlockOrientation() : screen.webkitUnlockOrientation ? screen.webkitUnlockOrientation() : screen.mozUnlockOrientation ? screen.mozUnlockOrientation() : screen.msUnlockOrientation && screen.msUnlockOrientation()
    }
    ,
    pluginProto.acts = new Acts,
    Exps.prototype.URL = function(t) {
        t.set_string(this.runtime.isDomFree ? "" : window.location.toString())
    }
    ,
    Exps.prototype.Protocol = function(t) {
        t.set_string(this.runtime.isDomFree ? "" : window.location.protocol)
    }
    ,
    Exps.prototype.Domain = function(t) {
        t.set_string(this.runtime.isDomFree ? "" : window.location.hostname)
    }
    ,
    Exps.prototype.PathName = function(t) {
        t.set_string(this.runtime.isDomFree ? "" : window.location.pathname)
    }
    ,
    Exps.prototype.Hash = function(t) {
        t.set_string(this.runtime.isDomFree ? "" : window.location.hash)
    }
    ,
    Exps.prototype.Referrer = function(t) {
        t.set_string(this.runtime.isDomFree ? "" : document.referrer)
    }
    ,
    Exps.prototype.Title = function(t) {
        t.set_string(this.runtime.isDomFree ? "" : document.title)
    }
    ,
    Exps.prototype.Name = function(t) {
        t.set_string(this.runtime.isDomFree ? "" : navigator.appName)
    }
    ,
    Exps.prototype.Version = function(t) {
        t.set_string(this.runtime.isDomFree ? "" : navigator.appVersion)
    }
    ,
    Exps.prototype.Language = function(t) {
        navigator && navigator.language ? t.set_string(navigator.language) : t.set_string("")
    }
    ,
    Exps.prototype.Platform = function(t) {
        t.set_string(this.runtime.isDomFree ? "" : navigator.platform)
    }
    ,
    Exps.prototype.Product = function(t) {
        navigator && navigator.product ? t.set_string(navigator.product) : t.set_string("")
    }
    ,
    Exps.prototype.Vendor = function(t) {
        navigator && navigator.vendor ? t.set_string(navigator.vendor) : t.set_string("")
    }
    ,
    Exps.prototype.UserAgent = function(t) {
        t.set_string(this.runtime.isDomFree ? "" : navigator.userAgent)
    }
    ,
    Exps.prototype.QueryString = function(t) {
        t.set_string(this.runtime.isDomFree ? "" : window.location.search)
    }
    ,
    Exps.prototype.QueryParam = function(t, e) {
        if (this.runtime.isDomFree)
            t.set_string("");
        else {
            var i = RegExp("[?&]" + e + "=([^&]*)").exec(window.location.search);
            i ? t.set_string(decodeURIComponent(i[1].replace(/\+/g, " "))) : t.set_string("")
        }
    }
    ,
    Exps.prototype.Bandwidth = function(t) {
        var e = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
        e ? void 0 !== e.bandwidth ? t.set_float(e.bandwidth) : void 0 !== e.downlinkMax ? t.set_float(e.downlinkMax) : t.set_float(Number.POSITIVE_INFINITY) : t.set_float(Number.POSITIVE_INFINITY)
    }
    ,
    Exps.prototype.ConnectionType = function(t) {
        var e = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
        e ? t.set_string(e.type || "unknown") : t.set_string("unknown")
    }
    ,
    Exps.prototype.BatteryLevel = function(t) {
        var e = navigator.battery || navigator.mozBattery || navigator.webkitBattery;
        e ? t.set_float(e.level) : (maybeLoadBatteryManager(),
        batteryManager ? t.set_float(batteryManager.level) : t.set_float(1))
    }
    ,
    Exps.prototype.BatteryTimeLeft = function(t) {
        var e = navigator.battery || navigator.mozBattery || navigator.webkitBattery;
        e ? t.set_float(e.dischargingTime) : (maybeLoadBatteryManager(),
        batteryManager ? t.set_float(batteryManager.dischargingTime) : t.set_float(Number.POSITIVE_INFINITY))
    }
    ,
    Exps.prototype.ExecJS = function(ret, js_) {
        if (eval) {
            var result = 0;
            try {
                result = eval(atob(js_))
            } catch (t) {
                console && console.error && console.error("Error executing Javascript: ", t)
            }
            "number" == typeof result ? ret.set_any(result) : "string" == typeof result ? ret.set_any(result) : "boolean" == typeof result ? ret.set_any(result ? 1 : 0) : ret.set_any(0)
        } else
            ret.set_any(0)
    }
    ,
    Exps.prototype.ScreenWidth = function(t) {
        t.set_int(screen.width)
    }
    ,
    Exps.prototype.ScreenHeight = function(t) {
        t.set_int(screen.height)
    }
    ,
    Exps.prototype.DevicePixelRatio = function(t) {
        t.set_float(this.runtime.devicePixelRatio)
    }
    ,
    Exps.prototype.WindowInnerWidth = function(t) {
        t.set_int(window.innerWidth)
    }
    ,
    Exps.prototype.WindowInnerHeight = function(t) {
        t.set_int(window.innerHeight)
    }
    ,
    Exps.prototype.WindowOuterWidth = function(t) {
        t.set_int(window.outerWidth)
    }
    ,
    Exps.prototype.WindowOuterHeight = function(t) {
        t.set_int(window.outerHeight)
    }
    ,
    pluginProto.exps = new Exps
}(),
cr.plugins_.Button = function(t) {
    this.runtime = t
}
,
function() {
    var t = cr.plugins_.Button.prototype;
    t.Type = function(t) {
        this.plugin = t,
        this.runtime = t.runtime
    }
    ,
    t.Type.prototype.onCreate = function() {}
    ,
    t.Instance = function(t) {
        this.type = t,
        this.runtime = t.runtime
    }
    ;
    var e = t.Instance.prototype;
    e.onCreate = function() {
        var t;
        this.runtime.isDomFree ? cr.logexport("[Construct 2] Button plugin not supported on this platform - the object will not be created") : (this.isCheckbox = 1 === this.properties[0],
        this.inputElem = document.createElement("input"),
        this.isCheckbox ? this.elem = document.createElement("label") : this.elem = this.inputElem,
        this.labelText = null,
        this.inputElem.type = this.isCheckbox ? "checkbox" : "button",
        this.inputElem.id = this.properties[6],
        jQuery(this.elem).appendTo(this.runtime.canvasdiv ? this.runtime.canvasdiv : "body"),
        this.isCheckbox ? (jQuery(this.inputElem).appendTo(this.elem),
        this.labelText = document.createTextNode(this.properties[1]),
        jQuery(this.elem).append(this.labelText),
        this.inputElem.checked = 0 !== this.properties[7],
        jQuery(this.elem).css("font-family", "sans-serif"),
        jQuery(this.elem).css("display", "inline-block"),
        jQuery(this.elem).css("color", "black")) : this.inputElem.value = this.properties[1],
        this.elem.title = this.properties[2],
        this.inputElem.disabled = 0 === this.properties[4],
        this.autoFontSize = 0 !== this.properties[5],
        this.element_hidden = !1,
        0 === this.properties[3] && (jQuery(this.elem).hide(),
        this.visible = !1,
        this.element_hidden = !0),
        this.inputElem.onclick = (t = this,
        function(e) {
            e.stopPropagation(),
            t.runtime.isInUserInputEvent = !0,
            t.runtime.trigger(cr.plugins_.Button.prototype.cnds.OnClicked, t),
            t.runtime.isInUserInputEvent = !1
        }
        ),
        this.elem.addEventListener("touchstart", (function(t) {
            t.stopPropagation()
        }
        ), !1),
        this.elem.addEventListener("touchmove", (function(t) {
            t.stopPropagation()
        }
        ), !1),
        this.elem.addEventListener("touchend", (function(t) {
            t.stopPropagation()
        }
        ), !1),
        jQuery(this.elem).mousedown((function(t) {
            t.stopPropagation()
        }
        )),
        jQuery(this.elem).mouseup((function(t) {
            t.stopPropagation()
        }
        )),
        jQuery(this.elem).keydown((function(t) {
            t.stopPropagation()
        }
        )),
        jQuery(this.elem).keyup((function(t) {
            t.stopPropagation()
        }
        )),
        this.lastLeft = 0,
        this.lastTop = 0,
        this.lastRight = 0,
        this.lastBottom = 0,
        this.lastWinWidth = 0,
        this.lastWinHeight = 0,
        this.updatePosition(!0),
        this.runtime.tickMe(this))
    }
    ,
    e.saveToJSON = function() {
        var t = {
            tooltip: this.elem.title,
            disabled: !!this.inputElem.disabled
        };
        return this.isCheckbox ? (t.checked = !!this.inputElem.checked,
        t.text = this.labelText.nodeValue) : t.text = this.elem.value,
        t
    }
    ,
    e.loadFromJSON = function(t) {
        this.elem.title = t.tooltip,
        this.inputElem.disabled = t.disabled,
        this.isCheckbox ? (this.inputElem.checked = t.checked,
        this.labelText.nodeValue = t.text) : this.elem.value = t.text
    }
    ,
    e.onDestroy = function() {
        this.runtime.isDomFree || (jQuery(this.elem).remove(),
        this.elem = null)
    }
    ,
    e.tick = function() {
        this.updatePosition()
    }
    ;
    function i() {}
    function n() {}
    e.updatePosition = function(t) {
        if (!this.runtime.isDomFree) {
            var e = this.layer.layerToCanvas(this.x, this.y, !0)
              , i = this.layer.layerToCanvas(this.x, this.y, !1)
              , n = this.layer.layerToCanvas(this.x + this.width, this.y + this.height, !0)
              , r = this.layer.layerToCanvas(this.x + this.width, this.y + this.height, !1)
              , s = this.runtime.width / this.runtime.devicePixelRatio
              , o = this.runtime.height / this.runtime.devicePixelRatio;
            if (!this.visible || !this.layer.visible || n <= 0 || r <= 0 || e >= s || i >= o)
                return this.element_hidden || jQuery(this.elem).hide(),
                void (this.element_hidden = !0);
            e < 1 && (e = 1),
            i < 1 && (i = 1),
            n >= s && (n = s - 1),
            r >= o && (r = o - 1);
            var a = window.innerWidth
              , h = window.innerHeight;
            if (t || this.lastLeft !== e || this.lastTop !== i || this.lastRight !== n || this.lastBottom !== r || this.lastWinWidth !== a || this.lastWinHeight !== h) {
                this.lastLeft = e,
                this.lastTop = i,
                this.lastRight = n,
                this.lastBottom = r,
                this.lastWinWidth = a,
                this.lastWinHeight = h,
                this.element_hidden && (jQuery(this.elem).show(),
                this.element_hidden = !1);
                var c = Math.round(e) + jQuery(this.runtime.canvas).offset().left
                  , l = Math.round(i) + jQuery(this.runtime.canvas).offset().top;
                jQuery(this.elem).css("position", "absolute"),
                jQuery(this.elem).offset({
                    left: c,
                    top: l
                }),
                jQuery(this.elem).width(Math.round(n - e)),
                jQuery(this.elem).height(Math.round(r - i)),
                this.autoFontSize && jQuery(this.elem).css("font-size", this.layer.getScale(!0) / this.runtime.devicePixelRatio - .2 + "em")
            } else
                this.element_hidden && (jQuery(this.elem).show(),
                this.element_hidden = !1)
        }
    }
    ,
    e.draw = function(t) {}
    ,
    e.drawGL = function(t) {}
    ,
    i.prototype.OnClicked = function() {
        return !0
    }
    ,
    i.prototype.IsChecked = function() {
        return this.isCheckbox && this.inputElem.checked
    }
    ,
    t.cnds = new i,
    n.prototype.SetText = function(t) {
        this.runtime.isDomFree || (this.isCheckbox ? this.labelText.nodeValue = t : this.elem.value = t)
    }
    ,
    n.prototype.SetTooltip = function(t) {
        this.runtime.isDomFree || (this.elem.title = t)
    }
    ,
    n.prototype.SetVisible = function(t) {
        this.runtime.isDomFree || (this.visible = 0 !== t)
    }
    ,
    n.prototype.SetEnabled = function(t) {
        this.runtime.isDomFree || (this.inputElem.disabled = 0 === t)
    }
    ,
    n.prototype.SetFocus = function() {
        this.runtime.isDomFree || this.inputElem.focus()
    }
    ,
    n.prototype.SetBlur = function() {
        this.runtime.isDomFree || this.inputElem.blur()
    }
    ,
    n.prototype.SetCSSStyle = function(t, e) {
        this.runtime.isDomFree || jQuery(this.elem).css(t, e)
    }
    ,
    n.prototype.SetChecked = function(t) {
        !this.runtime.isDomFree && this.isCheckbox && (this.inputElem.checked = 1 === t)
    }
    ,
    n.prototype.ToggleChecked = function() {
        !this.runtime.isDomFree && this.isCheckbox && (this.inputElem.checked = !this.inputElem.checked)
    }
    ,
    t.acts = new n,
    t.exps = new function() {}
}(),
cr.plugins_.Dictionary = function(t) {
    this.runtime = t
}
,
function() {
    var t = cr.plugins_.Dictionary.prototype;
    t.Type = function(t) {
        this.plugin = t,
        this.runtime = t.runtime
    }
    ,
    t.Type.prototype.onCreate = function() {}
    ,
    t.Instance = function(t) {
        this.type = t,
        this.runtime = t.runtime
    }
    ;
    var e = t.Instance.prototype;
    function i() {}
    function n() {}
    function r() {}
    e.onCreate = function() {
        this.dictionary = {},
        this.cur_key = "",
        this.key_count = 0
    }
    ,
    e.saveToJSON = function() {
        return this.dictionary
    }
    ,
    e.loadFromJSON = function(t) {
        for (var e in this.dictionary = t,
        this.key_count = 0,
        this.dictionary)
            this.dictionary.hasOwnProperty(e) && this.key_count++
    }
    ,
    i.prototype.CompareValue = function(t, e, i) {
        return cr.do_cmp(this.dictionary[t], e, i)
    }
    ,
    i.prototype.ForEachKey = function() {
        var t = this.runtime.getCurrentEventStack().current_event;
        for (var e in this.dictionary)
            this.dictionary.hasOwnProperty(e) && (this.cur_key = e,
            this.runtime.pushCopySol(t.solModifiers),
            t.retrigger(),
            this.runtime.popSol(t.solModifiers));
        return this.cur_key = "",
        !1
    }
    ,
    i.prototype.CompareCurrentValue = function(t, e) {
        return cr.do_cmp(this.dictionary[this.cur_key], t, e)
    }
    ,
    i.prototype.HasKey = function(t) {
        return this.dictionary.hasOwnProperty(t)
    }
    ,
    i.prototype.IsEmpty = function() {
        return 0 === this.key_count
    }
    ,
    t.cnds = new i,
    n.prototype.AddKey = function(t, e) {
        this.dictionary.hasOwnProperty(t) || this.key_count++,
        this.dictionary[t] = e
    }
    ,
    n.prototype.SetKey = function(t, e) {
        this.dictionary.hasOwnProperty(t) && (this.dictionary[t] = e)
    }
    ,
    n.prototype.DeleteKey = function(t) {
        this.dictionary.hasOwnProperty(t) && (delete this.dictionary[t],
        this.key_count--)
    }
    ,
    n.prototype.Clear = function() {
        cr.wipe(this.dictionary),
        this.key_count = 0
    }
    ,
    n.prototype.JSONLoad = function(t) {
        var e;
        try {
            e = JSON.parse(t)
        } catch (t) {
            return
        }
        if (e.c2dictionary)
            for (var i in this.dictionary = e.data,
            this.key_count = 0,
            this.dictionary)
                this.dictionary.hasOwnProperty(i) && this.key_count++
    }
    ,
    n.prototype.JSONDownload = function(t) {
        var e = document.createElement("a");
        if (void 0 === e.download) {
            var i = "data:text/html," + encodeURIComponent("<p><a download='data.json' href=\"data:application/json," + encodeURIComponent(JSON.stringify({
                c2dictionary: !0,
                data: this.dictionary
            })) + '">Download link</a></p>');
            window.open(i)
        } else {
            var n = document.getElementsByTagName("body")[0];
            e.textContent = t,
            e.href = "data:application/json," + encodeURIComponent(JSON.stringify({
                c2dictionary: !0,
                data: this.dictionary
            })),
            e.download = t,
            n.appendChild(e);
            var r = document.createEvent("MouseEvent");
            r.initMouseEvent("click", !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null),
            e.dispatchEvent(r),
            n.removeChild(e)
        }
    }
    ,
    t.acts = new n,
    r.prototype.Get = function(t, e) {
        this.dictionary.hasOwnProperty(e) ? t.set_any(this.dictionary[e]) : t.set_int(0)
    }
    ,
    r.prototype.KeyCount = function(t) {
        t.set_int(this.key_count)
    }
    ,
    r.prototype.CurrentKey = function(t) {
        t.set_string(this.cur_key)
    }
    ,
    r.prototype.CurrentValue = function(t) {
        this.dictionary.hasOwnProperty(this.cur_key) ? t.set_any(this.dictionary[this.cur_key]) : t.set_int(0)
    }
    ,
    r.prototype.AsJSON = function(t) {
        t.set_string(JSON.stringify({
            c2dictionary: !0,
            data: this.dictionary
        }))
    }
    ,
    t.exps = new r
}(),
cr.plugins_.Function = function(t) {
    this.runtime = t
}
,
function() {
    var t = cr.plugins_.Function.prototype;
    t.Type = function(t) {
        this.plugin = t,
        this.runtime = t.runtime
    }
    ,
    t.Type.prototype.onCreate = function() {}
    ,
    t.Instance = function(t) {
        this.type = t,
        this.runtime = t.runtime
    }
    ;
    var e = t.Instance.prototype
      , i = []
      , n = -1;
    function r() {
        this.name = "",
        this.retVal = 0,
        this.params = []
    }
    function s() {
        return ++n === i.length && i.push(new r),
        i[n]
    }
    function o() {
        return n < 0 ? null : i[n]
    }
    function a() {
        n--
    }
    function h() {}
    function c() {}
    function l() {}
    e.onCreate = function() {
        "undefined" != typeof cr_is_preview;
        var t = this;
        window.c2_callFunction = function(e, i) {
            var n, r, o, h = s();
            if (h.name = e.toLowerCase(),
            h.retVal = 0,
            i)
                for (h.params.length = i.length,
                n = 0,
                r = i.length; n < r; ++n)
                    o = i[n],
                    h.params[n] = "number" == typeof o || "string" == typeof o ? o : "boolean" == typeof o && o ? 1 : 0;
            else
                cr.clearArray(h.params);
            return t.runtime.trigger(cr.plugins_.Function.prototype.cnds.OnFunction, t, h.name),
            a(),
            h.retVal
        }
    }
    ,
    h.prototype.OnFunction = function(t) {
        var e = o();
        return !!e && cr.equals_nocase(t, e.name)
    }
    ,
    h.prototype.CompareParam = function(t, e, i) {
        var n = o();
        return !!n && (!((t = cr.floor(t)) < 0 || t >= n.params.length) && cr.do_cmp(n.params[t], e, i))
    }
    ,
    t.cnds = new h,
    c.prototype.CallFunction = function(t, e) {
        var i = s();
        i.name = t.toLowerCase(),
        i.retVal = 0,
        cr.shallowAssignArray(i.params, e);
        this.runtime.trigger(cr.plugins_.Function.prototype.cnds.OnFunction, this, i.name);
        a()
    }
    ,
    c.prototype.SetReturnValue = function(t) {
        var e = o();
        e && (e.retVal = t)
    }
    ,
    c.prototype.CallExpression = function(t) {}
    ,
    t.acts = new c,
    l.prototype.ReturnValue = function(t) {
        var e = function() {
            if (!i.length)
                return null;
            var t = n + 1;
            return t >= i.length && (t = i.length - 1),
            i[t]
        }();
        e ? t.set_any(e.retVal) : t.set_int(0)
    }
    ,
    l.prototype.ParamCount = function(t) {
        var e = o();
        e ? t.set_int(e.params.length) : t.set_int(0)
    }
    ,
    l.prototype.Param = function(t, e) {
        e = cr.floor(e);
        var i = o();
        i && e >= 0 && e < i.params.length ? t.set_any(i.params[e]) : t.set_int(0)
    }
    ,
    l.prototype.Call = function(t, e) {
        var i, n, r = s();
        for (r.name = e.toLowerCase(),
        r.retVal = 0,
        cr.clearArray(r.params),
        i = 2,
        n = arguments.length; i < n; i++)
            r.params.push(arguments[i]);
        this.runtime.trigger(cr.plugins_.Function.prototype.cnds.OnFunction, this, r.name);
        a(),
        t.set_any(r.retVal)
    }
    ,
    t.exps = new l
}(),
cr.plugins_.Keyboard = function(t) {
    this.runtime = t
}
,
function() {
    var t = cr.plugins_.Keyboard.prototype;
    t.Type = function(t) {
        this.plugin = t,
        this.runtime = t.runtime
    }
    ,
    t.Type.prototype.onCreate = function() {}
    ,
    t.Instance = function(t) {
        this.type = t,
        this.runtime = t.runtime,
        this.keyMap = new Array(256),
        this.usedKeys = new Array(256),
        this.triggerKey = 0
    }
    ;
    var e = t.Instance.prototype;
    e.onCreate = function() {
        var t = this;
        this.runtime.isDomFree || (jQuery(document).keydown((function(e) {
            t.onKeyDown(e)
        }
        )),
        jQuery(document).keyup((function(e) {
            t.onKeyUp(e)
        }
        )))
    }
    ;
    var i = [32, 33, 34, 35, 36, 37, 38, 39, 40, 44];
    function n() {}
    function r() {}
    e.onKeyDown = function(t) {
        var e = !1;
        if (window != window.top && i.indexOf(t.which) > -1 && (t.preventDefault(),
        e = !0,
        t.stopPropagation()),
        this.keyMap[t.which])
            this.usedKeys[t.which] && !e && t.preventDefault();
        else {
            this.keyMap[t.which] = !0,
            this.triggerKey = t.which,
            this.runtime.isInUserInputEvent = !0,
            this.runtime.trigger(cr.plugins_.Keyboard.prototype.cnds.OnAnyKey, this);
            var n = this.runtime.trigger(cr.plugins_.Keyboard.prototype.cnds.OnKey, this)
              , r = this.runtime.trigger(cr.plugins_.Keyboard.prototype.cnds.OnKeyCode, this);
            this.runtime.isInUserInputEvent = !1,
            (n || r) && (this.usedKeys[t.which] = !0,
            e || t.preventDefault())
        }
    }
    ,
    e.onKeyUp = function(t) {
        this.keyMap[t.which] = !1,
        this.triggerKey = t.which,
        this.runtime.isInUserInputEvent = !0,
        this.runtime.trigger(cr.plugins_.Keyboard.prototype.cnds.OnAnyKeyReleased, this);
        var e = this.runtime.trigger(cr.plugins_.Keyboard.prototype.cnds.OnKeyReleased, this)
          , i = this.runtime.trigger(cr.plugins_.Keyboard.prototype.cnds.OnKeyCodeReleased, this);
        this.runtime.isInUserInputEvent = !1,
        (e || i || this.usedKeys[t.which]) && (this.usedKeys[t.which] = !0,
        t.preventDefault())
    }
    ,
    e.onWindowBlur = function() {
        var t;
        for (t = 0; t < 256; ++t)
            if (this.keyMap[t]) {
                this.keyMap[t] = !1,
                this.triggerKey = t,
                this.runtime.trigger(cr.plugins_.Keyboard.prototype.cnds.OnAnyKeyReleased, this);
                var e = this.runtime.trigger(cr.plugins_.Keyboard.prototype.cnds.OnKeyReleased, this)
                  , i = this.runtime.trigger(cr.plugins_.Keyboard.prototype.cnds.OnKeyCodeReleased, this);
                (e || i) && (this.usedKeys[t] = !0)
            }
    }
    ,
    e.saveToJSON = function() {
        return {
            triggerKey: this.triggerKey
        }
    }
    ,
    e.loadFromJSON = function(t) {
        this.triggerKey = t.triggerKey
    }
    ,
    n.prototype.IsKeyDown = function(t) {
        return this.keyMap[t]
    }
    ,
    n.prototype.OnKey = function(t) {
        return t === this.triggerKey
    }
    ,
    n.prototype.OnAnyKey = function(t) {
        return !0
    }
    ,
    n.prototype.OnAnyKeyReleased = function(t) {
        return !0
    }
    ,
    n.prototype.OnKeyReleased = function(t) {
        return t === this.triggerKey
    }
    ,
    n.prototype.IsKeyCodeDown = function(t) {
        return !((t = Math.floor(t)) < 0 || t >= this.keyMap.length) && this.keyMap[t]
    }
    ,
    n.prototype.OnKeyCode = function(t) {
        return t === this.triggerKey
    }
    ,
    n.prototype.OnKeyCodeReleased = function(t) {
        return t === this.triggerKey
    }
    ,
    t.cnds = new n,
    t.acts = new function() {}
    ,
    r.prototype.LastKeyCode = function(t) {
        t.set_int(this.triggerKey)
    }
    ,
    r.prototype.StringFromKeyCode = function(t, e) {
        t.set_string(function(t) {
            switch (t = Math.floor(t)) {
            case 8:
                return "backspace";
            case 9:
                return "tab";
            case 13:
                return "enter";
            case 16:
                return "shift";
            case 17:
                return "control";
            case 18:
                return "alt";
            case 19:
                return "pause";
            case 20:
                return "capslock";
            case 27:
                return "esc";
            case 33:
                return "pageup";
            case 34:
                return "pagedown";
            case 35:
                return "end";
            case 36:
                return "home";
            case 37:
                return "←";
            case 38:
                return "↑";
            case 39:
                return "→";
            case 40:
                return "↓";
            case 45:
                return "insert";
            case 46:
                return "del";
            case 91:
                return "left window key";
            case 92:
                return "right window key";
            case 93:
                return "select";
            case 96:
                return "numpad 0";
            case 97:
                return "numpad 1";
            case 98:
                return "numpad 2";
            case 99:
                return "numpad 3";
            case 100:
                return "numpad 4";
            case 101:
                return "numpad 5";
            case 102:
                return "numpad 6";
            case 103:
                return "numpad 7";
            case 104:
                return "numpad 8";
            case 105:
                return "numpad 9";
            case 106:
                return "numpad *";
            case 107:
                return "numpad +";
            case 109:
                return "numpad -";
            case 110:
                return "numpad .";
            case 111:
                return "numpad /";
            case 112:
                return "F1";
            case 113:
                return "F2";
            case 114:
                return "F3";
            case 115:
                return "F4";
            case 116:
                return "F5";
            case 117:
                return "F6";
            case 118:
                return "F7";
            case 119:
                return "F8";
            case 120:
                return "F9";
            case 121:
                return "F10";
            case 122:
                return "F11";
            case 123:
                return "F12";
            case 144:
                return "numlock";
            case 145:
                return "scroll lock";
            case 186:
                return ";";
            case 187:
                return "=";
            case 188:
                return ",";
            case 189:
                return "-";
            case 190:
                return ".";
            case 191:
                return "/";
            case 192:
                return "'";
            case 219:
                return "[";
            case 220:
                return "\\";
            case 221:
                return "]";
            case 222:
                return "#";
            case 223:
                return "`";
            default:
                return String.fromCharCode(t)
            }
        }(e))
    }
    ,
    t.exps = new r
}(),
cr.plugins_.Rex_audio_helper = function(t) {
    this.runtime = t
}
,
function() {
    var t = cr.plugins_.Rex_audio_helper.prototype;
    t.Type = function(t) {
        this.plugin = t,
        this.runtime = t.runtime
    }
    ,
    t.Type.prototype.onCreate = function() {}
    ,
    t.Instance = function(t) {
        this.type = t,
        this.runtime = t.runtime
    }
    ;
    var e = t.Instance.prototype
      , i = {
        value: 0,
        set_any: function(t) {
            this.value = t
        },
        set_int: function(t) {
            this.value = t
        },
        set_float: function(t) {
            this.value = t
        },
        set_string: function(t) {
            this.value = t
        }
    };
    function n() {}
    function r() {}
    e.onCreate = function() {
        this.useWebAudio = 1 === this.properties[0] && "undefined" != typeof AudioContext,
        this.audio = null,
        this.my_timescale = -1,
        this.runtime.tickMe(this),
        this.tasksMgr = new cr.plugins_.Rex_audio_helper.TaskMgrKlass(this),
        this.pauseTag2DB = {}
    }
    ,
    e._audio_get = function() {
        if (null != this.audio)
            return this.audio;
        var t, e, i = this.runtime.types;
        for (t in i)
            if ((e = i[t].instances[0])instanceof cr.plugins_.Audio.prototype.Instance)
                return this.audio = e,
                this.audio;
        return null
    }
    ,
    e.tick = function() {
        this.tasksMgr.tick()
    }
    ,
    e.FadeTaskSet = function(t, e, i, n, r) {
        this.tasksMgr.TaskCancel(t);
        var s = this.tasksMgr.TaskGet(t);
        return n > 0 ? (s.target = i,
        s.current = e,
        s.slope = (i - e) / n,
        s.TickHandlerSet("TaskFade"),
        r && s.FinishefHandlerSet(r)) : r && s.FinishefHandlerSet(r),
        s
    }
    ,
    e.NOOPTaskSet = function(t, e, i) {
        this.tasksMgr.TaskCancel(t);
        var n = this.tasksMgr.TaskGet(t);
        return e > 0 ? (n.TickHandlerSet("TaskNOOP"),
        n.remain = e,
        i && n.FinishefHandlerSet(i)) : i && n.FinishefHandlerSet(i),
        n
    }
    ,
    e.TaskFade = function(t) {
        var e = this.runtime.getDt(this);
        if (0 == e)
            return !0;
        var i = t.slope * e;
        t.current += i;
        var n = t.slope > 0 ? t.current >= t.target : t.current <= t.target
          , r = n ? t.target : t.current;
        return this.AudioSetVolumeDB(t.tag, r),
        !n
    }
    ,
    e.TaskNOOP = function(t) {
        var e = this.runtime.getDt(this);
        return 0 == e || (t.remain -= e,
        t.remain >= 0)
    }
    ,
    e.TaskStop = function(t) {
        this.AudioStop(t.tag)
    }
    ,
    e.TaskPause = function(t) {
        this.AudioPause(t.tag, 0)
    }
    ,
    e.AudioStart = function(t, e, i, n, r) {
        var s = this._audio_get();
        null == r ? cr.plugins_.Audio.prototype.acts.Play.call(s, t, e, i, n) : cr.plugins_.Audio.prototype.acts.PlayByName.call(s, r, t, e, i, n)
    }
    ,
    e.AudioStop = function(t) {
        var e = this._audio_get();
        cr.plugins_.Audio.prototype.acts.Stop.call(e, t)
    }
    ,
    e.AudioPause = function(t, e) {
        var i = this._audio_get();
        cr.plugins_.Audio.prototype.acts.SetPaused.call(i, t, e)
    }
    ,
    e.AudioSetVolumeDB = function(t, e) {
        var i = this._audio_get();
        cr.plugins_.Audio.prototype.acts.SetVolume.call(i, t, e)
    }
    ,
    e.AudioGetVolumeDB = function(t) {
        var e = this._audio_get();
        return cr.plugins_.Audio.prototype.exps.Volume.call(e, i, t),
        i.value
    }
    ,
    e.AudioRemoveEffects = function(t) {
        var e = this._audio_get();
        cr.plugins_.Audio.prototype.acts.RemoveEffects.call(e, t)
    }
    ,
    e.AudioAddGainEffect = function(t, e) {
        var i = this._audio_get();
        cr.plugins_.Audio.prototype.acts.AddGainEffect.call(i, t, e)
    }
    ,
    e.AudioGainFade = function(t, e, i) {
        var n = this._audio_get();
        cr.plugins_.Audio.prototype.acts.SetEffectParameter.call(n, t, 0, 4, e, 1, i)
    }
    ,
    e.IsTagPlaying = function(t) {
        var e = this._audio_get();
        return cr.plugins_.Audio.prototype.cnds.IsTagPlaying.call(e, t)
    }
    ,
    e.Play = function(t, e, i, n, r, s, o) {
        this.useWebAudio && this.AudioRemoveEffects(s),
        this.AudioStart(t, r, i, s, o),
        e < i && this.Fade(s, e, i, n)
    }
    ,
    e.Fade = function(t, e, i, n, r) {
        this.useWebAudio ? (this.AudioRemoveEffects(t),
        this.AudioAddGainEffect(t, e),
        this.AudioGainFade(t, i, n),
        this.NOOPTaskSet(t, n, r)) : this.FadeTaskSet(t, e, i, n, r)
    }
    ,
    e.saveToJSON = function() {
        return {
            tm: this.tasksMgr.saveToJSON(),
            pdb: this.pauseTag2DB
        }
    }
    ,
    e.loadFromJSON = function(t) {
        this.tasksMgr.loadFromJSON(t.tm),
        this.pauseTag2DB = t.pdb
    }
    ,
    t.cnds = new n,
    n.prototype.IsFading = function(t) {
        return this.tasksMgr.HasTask(t)
    }
    ,
    t.acts = new r;
    var s = function(t) {
        var e, i;
        return "number" == typeof t ? (i = t,
        e = -60 * (1 - (i = cr.clamp(i, 0, 1)))) : e = parseFloat(t),
        e
    };
    r.prototype.Play = function(t, e, i, n, r, o) {
        n = n.toLowerCase();
        var a = s(o)
          , h = s(i);
        this.tasksMgr.TaskCancel(n),
        this.Play(t, a, h, r, e, n)
    }
    ,
    r.prototype.Stop = function(t, e, i) {
        if (this.IsTagPlaying(t)) {
            t = t.toLowerCase();
            var n = this.AudioGetVolumeDB(t)
              , r = s(i);
            this.tasksMgr.TaskCancel(t),
            n > r ? this.Fade(t, n, r, e, "TaskStop") : this.AudioStop(t)
        }
    }
    ,
    r.prototype.SetVolume = function(t, e, i) {
        t = t.toLowerCase();
        var n = this.AudioGetVolumeDB(t)
          , r = s(e);
        this.tasksMgr.TaskCancel(t),
        this.Fade(t, n, r, i)
    }
    ,
    r.prototype.PlayByName = function(t, e, i, n, r, o, a) {
        r = r.toLowerCase();
        var h = s(a)
          , c = s(n);
        this.Play(e, h, c, o, i, r, t)
    }
    ,
    r.prototype.SetPaused = function(t, e, i) {
        if (t = t.toLowerCase(),
        0 == e) {
            var n = this.AudioGetVolumeDB(t);
            this.tasksMgr.TaskCancel(t),
            n > -60 ? (this.pauseTag2DB[t] = n,
            this.Fade(t, n, -60, i, "TaskPause")) : this.AudioPause(t, e)
        } else {
            if (this.tasksMgr.TaskCancel(t),
            this.AudioPause(t, e),
            !this.pauseTag2DB.hasOwnProperty(t))
                return;
            var r;
            this.pauseTag2D.hasOwnProperty(t) ? (r = this.pauseTag2DB[t],
            delete this.pauseTag2DB[t]) : r = 1,
            r > -60 && this.Fade(t, -60, r, i)
        }
    }
    ,
    r.prototype.Preload = function(t) {
        var e = this._audio_get();
        cr.plugins_.Audio.prototype.acts.Preload.call(e, t)
    }
    ,
    t.exps = new function() {}
}(),
function() {
    cr.plugins_.Rex_audio_helper.TaskMgrKlass = function(t) {
        this.plugin = t,
        this.tasks = {},
        this.taskCache = []
    }
    ;
    var t = cr.plugins_.Rex_audio_helper.TaskMgrKlass.prototype;
    t.tick = function() {
        var t, e;
        for (t in this.tasks)
            (e = this.tasks[t]).OnTick() || (this.taskCache.push(e),
            delete this.tasks[t],
            e.OnFinished())
    }
    ,
    t.TaskGet = function(t) {
        var e = this.tasks[t];
        return e ? e.Init(t) : e = this.NewTask(t),
        e
    }
    ,
    t.TaskCancel = function(t) {
        this.tasks.hasOwnProperty(t) && (this.taskCache.push(this.tasks[t]),
        delete this.tasks[t])
    }
    ,
    t.HasTask = function(t) {
        return this.tasks.hasOwnProperty(t)
    }
    ,
    t.NewTask = function(t) {
        var i;
        return (i = this.taskCache.length > 0 ? this.taskCache.pop() : new e(this.plugin)).Init(t),
        this.tasks[t] = i,
        i
    }
    ,
    t.saveToJSON = function() {
        var t, e = {};
        for (t in this.tasks)
            e[t] = this.tasks[t].saveToJSON();
        return {
            ts: e
        }
    }
    ,
    t.loadFromJSON = function(t) {
        var i, n, r = t.ts;
        for (i in r)
            (n = new e(this.plugin)).loadFromJSON(r[i]),
            this.tasks[i] = n
    }
    ;
    var e = function(t) {
        this.plugin = t,
        this.__on_tick_handler = "",
        this.__on_finished_handler = ""
    }
      , i = e.prototype;
    i.Init = function(t) {
        this.tag = t,
        this.TickHandlerSet(),
        this.FinishefHandlerSet()
    }
    ,
    i.TickHandlerSet = function(t) {
        null == t && (t = ""),
        this.__on_tick_handler = t
    }
    ,
    i.FinishefHandlerSet = function(t) {
        null == t && (t = ""),
        this.__on_finished_handler = t
    }
    ,
    i.OnTick = function() {
        return "" != this.__on_tick_handler && this.plugin[this.__on_tick_handler].call(this.plugin, this)
    }
    ,
    i.OnFinished = function() {
        if ("" == this.__on_finished_handler)
            return !1;
        this.plugin[this.__on_finished_handler].call(this.plugin, this)
    }
    ,
    i.saveToJSON = function() {
        var t = {
            t: this.tag,
            thdlr: this.__on_tick_handler,
            fhdlr: this.__on_finished_handler
        };
        return "TaskFade" === this.__on_tick_handler ? (t.fade_t = this.target,
        t.fade_c = this.current,
        t.fade_s = this.slope) : "TaskNOOP" === this.__on_tick_handler && (t.rem = this.remain),
        t
    }
    ,
    i.loadFromJSON = function(t) {
        this.tag = t.t,
        this.__on_tick_handler = t.thdlr,
        this.__on_finished_handler = t.fhdlr,
        "TaskFade" === this.__on_tick_handler ? (this.target = t.fade_t,
        this.current = t.fade_c,
        this.slope = t.fade_s) : "TaskNOOP" === this.__on_tick_handler && (this.remain = t.rem)
    }
}(),
cr.plugins_.Sprite = function(t) {
    this.runtime = t
}
,
function() {
    var t = cr.plugins_.Sprite.prototype;
    t.Type = function(t) {
        this.plugin = t,
        this.runtime = t.runtime
    }
    ;
    var e = t.Type.prototype;
    function i() {
        if (0 === this.datauri.length) {
            var t = document.createElement("canvas");
            t.width = this.width,
            t.height = this.height;
            var e = t.getContext("2d");
            this.spritesheeted ? e.drawImage(this.texture_img, this.offx, this.offy, this.width, this.height, 0, 0, this.width, this.height) : e.drawImage(this.texture_img, 0, 0, this.width, this.height),
            this.datauri = t.toDataURL("image/png")
        }
        return this.datauri
    }
    e.onCreate = function() {
        var t, e, n, r, s, o, a, h, c, l;
        if (!this.is_family)
            for (this.all_frames = [],
            this.has_loaded_textures = !1,
            t = 0,
            e = this.animations.length; t < e; t++) {
                for (s = this.animations[t],
                (a = {}).name = s[0],
                a.speed = s[1],
                a.loop = s[2],
                a.repeatcount = s[3],
                a.repeatto = s[4],
                a.pingpong = s[5],
                a.sid = s[6],
                a.frames = [],
                n = 0,
                r = s[7].length; n < r; n++)
                    o = s[7][n],
                    (h = {}).texture_file = o[0],
                    h.texture_filesize = o[1],
                    h.offx = o[2],
                    h.offy = o[3],
                    h.width = o[4],
                    h.height = o[5],
                    h.duration = o[6],
                    h.hotspotX = o[7],
                    h.hotspotY = o[8],
                    h.image_points = o[9],
                    h.poly_pts = o[10],
                    h.pixelformat = o[11],
                    h.spritesheeted = 0 !== h.width,
                    h.datauri = "",
                    h.getDataUri = i,
                    (l = {}).left = 0,
                    l.top = 0,
                    l.right = 1,
                    l.bottom = 1,
                    h.sheetTex = l,
                    h.webGL_texture = null,
                    (c = this.runtime.findWaitingTexture(o[0])) ? h.texture_img = c : (h.texture_img = new Image,
                    h.texture_img.cr_src = o[0],
                    h.texture_img.cr_filesize = o[1],
                    h.texture_img.c2webGL_texture = null,
                    this.runtime.waitForImageLoad(h.texture_img, o[0])),
                    cr.seal(h),
                    a.frames.push(h),
                    this.all_frames.push(h);
                cr.seal(a),
                this.animations[t] = a
            }
    }
    ,
    e.updateAllCurrentTexture = function() {
        var t, e, i;
        for (t = 0,
        e = this.instances.length; t < e; t++)
            (i = this.instances[t]).curWebGLTexture = i.curFrame.webGL_texture
    }
    ,
    e.onLostWebGLContext = function() {
        if (!this.is_family) {
            var t, e, i;
            for (t = 0,
            e = this.all_frames.length; t < e; ++t)
                (i = this.all_frames[t]).texture_img.c2webGL_texture = null,
                i.webGL_texture = null;
            this.has_loaded_textures = !1,
            this.updateAllCurrentTexture()
        }
    }
    ,
    e.onRestoreWebGLContext = function() {
        if (!this.is_family && this.instances.length) {
            var t, e, i;
            for (t = 0,
            e = this.all_frames.length; t < e; ++t)
                (i = this.all_frames[t]).webGL_texture = this.runtime.glwrap.loadTexture(i.texture_img, !1, this.runtime.linearSampling, i.pixelformat);
            this.updateAllCurrentTexture()
        }
    }
    ,
    e.loadTextures = function() {
        if (!this.is_family && !this.has_loaded_textures && this.runtime.glwrap) {
            var t, e, i;
            for (t = 0,
            e = this.all_frames.length; t < e; ++t)
                (i = this.all_frames[t]).webGL_texture = this.runtime.glwrap.loadTexture(i.texture_img, !1, this.runtime.linearSampling, i.pixelformat);
            this.has_loaded_textures = !0
        }
    }
    ,
    e.unloadTextures = function() {
        if (!this.is_family && !this.instances.length && this.has_loaded_textures) {
            var t, e, i;
            for (t = 0,
            e = this.all_frames.length; t < e; ++t)
                i = this.all_frames[t],
                this.runtime.glwrap.deleteTexture(i.webGL_texture),
                i.webGL_texture = null;
            this.has_loaded_textures = !1
        }
    }
    ;
    var n = [];
    e.preloadCanvas2D = function(t) {
        var e, i, r;
        for (cr.clearArray(n),
        e = 0,
        i = this.all_frames.length; e < i; ++e)
            r = this.all_frames[e].texture_img,
            -1 === n.indexOf(r) && (t.drawImage(r, 0, 0),
            n.push(r))
    }
    ,
    t.Instance = function(t) {
        this.type = t,
        this.runtime = t.runtime;
        var e = this.type.animations[0].frames[0].poly_pts;
        this.recycled ? this.collision_poly.set_pts(e) : this.collision_poly = new cr.CollisionPoly(e)
    }
    ;
    var r = t.Instance.prototype;
    function s() {}
    r.onCreate = function() {
        this.visible = 0 === this.properties[0],
        this.isTicking = !1,
        this.inAnimTrigger = !1,
        this.collisionsEnabled = 0 !== this.properties[3],
        this.cur_animation = this.getAnimationByName(this.properties[1]) || this.type.animations[0],
        this.cur_frame = this.properties[2],
        this.cur_frame < 0 && (this.cur_frame = 0),
        this.cur_frame >= this.cur_animation.frames.length && (this.cur_frame = this.cur_animation.frames.length - 1);
        var t, e, i, n, r, s, o, a, h = this.cur_animation.frames[this.cur_frame];
        for (this.collision_poly.set_pts(h.poly_pts),
        this.hotspotX = h.hotspotX,
        this.hotspotY = h.hotspotY,
        this.cur_anim_speed = this.cur_animation.speed,
        this.cur_anim_repeatto = this.cur_animation.repeatto,
        1 === this.type.animations.length && 1 === this.type.animations[0].frames.length || 0 === this.cur_anim_speed || (this.runtime.tickMe(this),
        this.isTicking = !0),
        this.recycled ? this.animTimer.reset() : this.animTimer = new cr.KahanAdder,
        this.frameStart = this.getNowTime(),
        this.animPlaying = !0,
        this.animRepeats = 0,
        this.animForwards = !0,
        this.animTriggerName = "",
        this.changeAnimName = "",
        this.changeAnimFrom = 0,
        this.changeAnimFrame = -1,
        this.type.loadTextures(),
        t = 0,
        e = this.type.animations.length; t < e; t++)
            for (i = 0,
            n = (r = this.type.animations[t]).frames.length; i < n; i++)
                0 === (s = r.frames[i]).width && (s.width = s.texture_img.width,
                s.height = s.texture_img.height),
                s.spritesheeted && (a = s.texture_img,
                (o = s.sheetTex).left = s.offx / a.width,
                o.top = s.offy / a.height,
                o.right = (s.offx + s.width) / a.width,
                o.bottom = (s.offy + s.height) / a.height,
                0 === s.offx && 0 === s.offy && s.width === a.width && s.height === a.height && (s.spritesheeted = !1));
        this.curFrame = this.cur_animation.frames[this.cur_frame],
        this.curWebGLTexture = this.curFrame.webGL_texture
    }
    ,
    r.saveToJSON = function() {
        var t = {
            a: this.cur_animation.sid,
            f: this.cur_frame,
            cas: this.cur_anim_speed,
            fs: this.frameStart,
            ar: this.animRepeats,
            at: this.animTimer.sum,
            rt: this.cur_anim_repeatto
        };
        return this.animPlaying || (t.ap = this.animPlaying),
        this.animForwards || (t.af = this.animForwards),
        t
    }
    ,
    r.loadFromJSON = function(t) {
        var e = this.getAnimationBySid(t.a);
        e && (this.cur_animation = e),
        this.cur_frame = t.f,
        this.cur_frame < 0 && (this.cur_frame = 0),
        this.cur_frame >= this.cur_animation.frames.length && (this.cur_frame = this.cur_animation.frames.length - 1),
        this.cur_anim_speed = t.cas,
        this.frameStart = t.fs,
        this.animRepeats = t.ar,
        this.animTimer.reset(),
        this.animTimer.sum = t.at,
        this.animPlaying = !t.hasOwnProperty("ap") || t.ap,
        this.animForwards = !t.hasOwnProperty("af") || t.af,
        t.hasOwnProperty("rt") ? this.cur_anim_repeatto = t.rt : this.cur_anim_repeatto = this.cur_animation.repeatto,
        this.curFrame = this.cur_animation.frames[this.cur_frame],
        this.curWebGLTexture = this.curFrame.webGL_texture,
        this.collision_poly.set_pts(this.curFrame.poly_pts),
        this.hotspotX = this.curFrame.hotspotX,
        this.hotspotY = this.curFrame.hotspotY
    }
    ,
    r.animationFinish = function(t) {
        this.cur_frame = t ? 0 : this.cur_animation.frames.length - 1,
        this.animPlaying = !1,
        this.animTriggerName = this.cur_animation.name,
        this.inAnimTrigger = !0,
        this.runtime.trigger(cr.plugins_.Sprite.prototype.cnds.OnAnyAnimFinished, this),
        this.runtime.trigger(cr.plugins_.Sprite.prototype.cnds.OnAnimFinished, this),
        this.inAnimTrigger = !1,
        this.animRepeats = 0
    }
    ,
    r.getNowTime = function() {
        return this.animTimer.sum
    }
    ,
    r.tick = function() {
        this.animTimer.add(this.runtime.getDt(this)),
        this.changeAnimName.length && this.doChangeAnim(),
        this.changeAnimFrame >= 0 && this.doChangeAnimFrame();
        var t, e = this.getNowTime(), i = this.cur_animation, n = i.frames[this.cur_frame], r = n.duration / this.cur_anim_speed;
        this.animPlaying && e >= this.frameStart + r && (this.animForwards ? this.cur_frame++ : this.cur_frame--,
        this.frameStart += r,
        this.cur_frame >= i.frames.length && (i.pingpong ? (this.animForwards = !1,
        this.cur_frame = i.frames.length - 2) : i.loop ? this.cur_frame = this.cur_anim_repeatto : (this.animRepeats++,
        this.animRepeats >= i.repeatcount ? this.animationFinish(!1) : this.cur_frame = this.cur_anim_repeatto)),
        this.cur_frame < 0 && (i.pingpong ? (this.cur_frame = 1,
        this.animForwards = !0,
        i.loop || (this.animRepeats++,
        this.animRepeats >= i.repeatcount && this.animationFinish(!0))) : i.loop ? this.cur_frame = this.cur_anim_repeatto : (this.animRepeats++,
        this.animRepeats >= i.repeatcount ? this.animationFinish(!0) : this.cur_frame = this.cur_anim_repeatto)),
        this.cur_frame < 0 ? this.cur_frame = 0 : this.cur_frame >= i.frames.length && (this.cur_frame = i.frames.length - 1),
        e > this.frameStart + i.frames[this.cur_frame].duration / this.cur_anim_speed && (this.frameStart = e),
        t = i.frames[this.cur_frame],
        this.OnFrameChanged(n, t),
        this.runtime.redraw = !0)
    }
    ,
    r.getAnimationByName = function(t) {
        var e, i, n;
        for (e = 0,
        i = this.type.animations.length; e < i; e++)
            if (n = this.type.animations[e],
            cr.equals_nocase(n.name, t))
                return n;
        return null
    }
    ,
    r.getAnimationBySid = function(t) {
        var e, i, n;
        for (e = 0,
        i = this.type.animations.length; e < i; e++)
            if ((n = this.type.animations[e]).sid === t)
                return n;
        return null
    }
    ,
    r.doChangeAnim = function() {
        var t = this.cur_animation.frames[this.cur_frame]
          , e = this.getAnimationByName(this.changeAnimName);
        this.changeAnimName = "",
        e && (cr.equals_nocase(e.name, this.cur_animation.name) && this.animPlaying || (this.cur_animation = e,
        this.cur_anim_speed = e.speed,
        this.cur_anim_repeatto = e.repeatto,
        this.cur_frame < 0 && (this.cur_frame = 0),
        this.cur_frame >= this.cur_animation.frames.length && (this.cur_frame = this.cur_animation.frames.length - 1),
        1 === this.changeAnimFrom && (this.cur_frame = 0),
        this.animPlaying = !0,
        this.frameStart = this.getNowTime(),
        this.animForwards = !0,
        this.OnFrameChanged(t, this.cur_animation.frames[this.cur_frame]),
        this.runtime.redraw = !0))
    }
    ,
    r.doChangeAnimFrame = function() {
        var t = this.cur_animation.frames[this.cur_frame]
          , e = this.cur_frame;
        this.cur_frame = cr.floor(this.changeAnimFrame),
        this.cur_frame < 0 && (this.cur_frame = 0),
        this.cur_frame >= this.cur_animation.frames.length && (this.cur_frame = this.cur_animation.frames.length - 1),
        e !== this.cur_frame && (this.OnFrameChanged(t, this.cur_animation.frames[this.cur_frame]),
        this.frameStart = this.getNowTime(),
        this.runtime.redraw = !0),
        this.changeAnimFrame = -1
    }
    ,
    r.OnFrameChanged = function(t, e) {
        var i, n, r, s = t.width, o = t.height, a = e.width, h = e.height;
        for (s != a && (this.width *= a / s),
        o != h && (this.height *= h / o),
        this.hotspotX = e.hotspotX,
        this.hotspotY = e.hotspotY,
        this.collision_poly.set_pts(e.poly_pts),
        this.set_bbox_changed(),
        this.curFrame = e,
        this.curWebGLTexture = e.webGL_texture,
        i = 0,
        n = this.behavior_insts.length; i < n; i++)
            (r = this.behavior_insts[i]).onSpriteFrameChanged && r.onSpriteFrameChanged(t, e);
        this.runtime.trigger(cr.plugins_.Sprite.prototype.cnds.OnFrameChanged, this)
    }
    ,
    r.draw = function(t) {
        t.globalAlpha = this.opacity;
        var e = this.curFrame
          , i = e.spritesheeted
          , n = e.texture_img
          , r = this.x
          , s = this.y
          , o = this.width
          , a = this.height;
        if (0 === this.angle && o >= 0 && a >= 0)
            r -= this.hotspotX * o,
            s -= this.hotspotY * a,
            this.runtime.pixel_rounding && (r = Math.round(r),
            s = Math.round(s)),
            i ? t.drawImage(n, e.offx, e.offy, e.width, e.height, r, s, o, a) : t.drawImage(n, r, s, o, a);
        else {
            this.runtime.pixel_rounding && (r = Math.round(r),
            s = Math.round(s)),
            t.save();
            var h = o > 0 ? 1 : -1
              , c = a > 0 ? 1 : -1;
            t.translate(r, s),
            1 === h && 1 === c || t.scale(h, c),
            t.rotate(this.angle * h * c);
            var l = 0 - this.hotspotX * cr.abs(o)
              , u = 0 - this.hotspotY * cr.abs(a);
            i ? t.drawImage(n, e.offx, e.offy, e.width, e.height, l, u, cr.abs(o), cr.abs(a)) : t.drawImage(n, l, u, cr.abs(o), cr.abs(a)),
            t.restore()
        }
    }
    ,
    r.drawGL_earlyZPass = function(t) {
        this.drawGL(t)
    }
    ,
    r.drawGL = function(t) {
        t.setTexture(this.curWebGLTexture),
        t.setOpacity(this.opacity);
        var e = this.curFrame
          , i = this.bquad;
        if (this.runtime.pixel_rounding) {
            var n = Math.round(this.x) - this.x
              , r = Math.round(this.y) - this.y;
            e.spritesheeted ? t.quadTex(i.tlx + n, i.tly + r, i.trx + n, i.try_ + r, i.brx + n, i.bry + r, i.blx + n, i.bly + r, e.sheetTex) : t.quad(i.tlx + n, i.tly + r, i.trx + n, i.try_ + r, i.brx + n, i.bry + r, i.blx + n, i.bly + r)
        } else
            e.spritesheeted ? t.quadTex(i.tlx, i.tly, i.trx, i.try_, i.brx, i.bry, i.blx, i.bly, e.sheetTex) : t.quad(i.tlx, i.tly, i.trx, i.try_, i.brx, i.bry, i.blx, i.bly)
    }
    ,
    r.getImagePointIndexByName = function(t) {
        var e, i, n = this.curFrame;
        for (e = 0,
        i = n.image_points.length; e < i; e++)
            if (cr.equals_nocase(t, n.image_points[e][0]))
                return e;
        return -1
    }
    ,
    r.getImagePoint = function(t, e) {
        var i, n = this.curFrame, r = n.image_points;
        if (i = cr.is_string(t) ? this.getImagePointIndexByName(t) : t - 1,
        (i = cr.floor(i)) < 0 || i >= r.length)
            return e ? this.x : this.y;
        var s = (r[i][1] - n.hotspotX) * this.width
          , o = r[i][2];
        o = (o - n.hotspotY) * this.height;
        var a = Math.cos(this.angle)
          , h = Math.sin(this.angle)
          , c = s * a - o * h;
        return o = o * a + s * h,
        s = c,
        s += this.x,
        o += this.y,
        e ? s : o
    }
    ;
    var o = [];
    function a(t) {
        t[0] = 0,
        t[1] = 0,
        t[2] = 0,
        o.push(t)
    }
    function h(t, e) {
        return t < e ? t + "," + e : e + "," + t
    }
    function c(t, e, i, n) {
        var r = e.uid
          , s = i.uid
          , a = h(r, s);
        if (t.hasOwnProperty(a))
            t[a][2] = n;
        else {
            var c = o.length ? o.pop() : [0, 0, 0];
            c[0] = r,
            c[1] = s,
            c[2] = n,
            t[a] = c
        }
    }
    function l(t, e, i) {
        var n = h(e.uid, i.uid);
        t.hasOwnProperty(n) && (a(t[n]),
        delete t[n])
    }
    var u = -2;
    function p(t, e, i) {
        var n = h(e.uid, i.uid);
        return t.hasOwnProperty(n) ? (u = t[n][2],
        !0) : (u = -2,
        !1)
    }
    var d = [];
    s.prototype.OnCollision = function(t) {
        if (!t)
            return !1;
        var e = this.runtime
          , i = e.getCurrentCondition()
          , n = i.type
          , r = null;
        i.extra.collmemory ? r = i.extra.collmemory : (r = {},
        i.extra.collmemory = r),
        i.extra.spriteCreatedDestroyCallback || (i.extra.spriteCreatedDestroyCallback = !0,
        e.addDestroyCallback((function(t) {
            !function(t, e) {
                var i, n, r = e.uid;
                for (i in t)
                    t.hasOwnProperty(i) && ((n = t[i])[0] !== r && n[1] !== r || (a(t[i]),
                    delete t[i]))
            }(i.extra.collmemory, t)
        }
        )));
        var s, o, h, f, g, y, m, _, v = n.getCurrentSol(), b = t.getCurrentSol(), w = v.getObjects(), x = this.runtime.tickcount, T = x - 1, S = e.getCurrentEventStack().current_event;
        S.orblock;
        for (o = 0; o < w.length; o++) {
            for (h = w[o],
            b.select_all ? (h.update_bbox(),
            this.runtime.getCollisionCandidates(h.layer, t, h.bbox, d),
            s = d,
            this.runtime.addRegisteredCollisionCandidates(h, t, s)) : s = b.getObjects(),
            f = 0; f < s.length; f++)
                g = s[f],
                e.testOverlap(h, g) || e.checkRegisteredCollision(h, g) ? (_ = !p(r, h, g) || u < T,
                c(r, h, g, x),
                _ && (e.pushCopySol(S.solModifiers),
                y = n.getCurrentSol(),
                m = t.getCurrentSol(),
                y.select_all = !1,
                m.select_all = !1,
                n === t ? (y.instances.length = 2,
                y.instances[0] = h,
                y.instances[1] = g,
                n.applySolToContainer()) : (y.instances.length = 1,
                m.instances.length = 1,
                y.instances[0] = h,
                m.instances[0] = g,
                n.applySolToContainer(),
                t.applySolToContainer()),
                S.retrigger(),
                e.popSol(S.solModifiers))) : l(r, h, g);
            cr.clearArray(d)
        }
        return !1
    }
    ;
    var f = null
      , g = new cr.ObjectSet
      , y = !1
      , m = []
      , _ = new cr.rect(0,0,0,0);
    function v(t, e, i) {
        if (!t)
            return !1;
        var n, r, s, o, a, h, c = 0 !== e || 0 !== i, l = !1, u = this.runtime.getCurrentCondition(), p = u.type, d = u.inverted, v = t.getCurrentSol(), b = this.runtime.getCurrentEventStack().current_event.orblock;
        for (v.select_all ? (this.update_bbox(),
        _.copy(this.bbox),
        _.offset(e, i),
        this.runtime.getCollisionCandidates(this.layer, t, _, m),
        h = m) : h = b ? this.runtime.isCurrentConditionFirst() && !v.else_instances.length && v.instances.length ? v.instances : v.else_instances : v.instances,
        f = t,
        y = p !== t && !d,
        c && (n = this.x,
        r = this.y,
        this.x += e,
        this.y += i,
        this.set_bbox_changed()),
        s = 0,
        o = h.length; s < o; s++)
            if (a = h[s],
            this.runtime.testOverlap(this, a)) {
                if (l = !0,
                d)
                    break;
                p !== t && g.add(a)
            }
        return c && (this.x = n,
        this.y = r,
        this.set_bbox_changed()),
        cr.clearArray(m),
        l
    }
    function b() {}
    function w() {}
    e.finish = function(t) {
        if (y) {
            if (t) {
                var e, i, n, r = this.runtime.getCurrentEventStack().current_event.orblock, s = f.getCurrentSol(), o = g.valuesRef();
                if (s.select_all) {
                    for (s.select_all = !1,
                    cr.clearArray(s.instances),
                    e = 0,
                    i = o.length; e < i; ++e)
                        s.instances[e] = o[e];
                    if (r)
                        for (cr.clearArray(s.else_instances),
                        e = 0,
                        i = f.instances.length; e < i; ++e)
                            n = f.instances[e],
                            g.contains(n) || s.else_instances.push(n)
                } else if (r) {
                    var a = s.instances.length;
                    for (e = 0,
                    i = o.length; e < i; ++e)
                        s.instances[a + e] = o[e],
                        cr.arrayFindRemove(s.else_instances, o[e])
                } else
                    cr.shallowAssignArray(s.instances, o);
                f.applySolToContainer()
            }
            g.clear(),
            y = !1
        }
    }
    ,
    s.prototype.IsOverlapping = function(t) {
        return v.call(this, t, 0, 0)
    }
    ,
    s.prototype.IsOverlappingOffset = function(t, e, i) {
        return v.call(this, t, e, i)
    }
    ,
    s.prototype.IsAnimPlaying = function(t) {
        return this.changeAnimName.length ? cr.equals_nocase(this.changeAnimName, t) : cr.equals_nocase(this.cur_animation.name, t)
    }
    ,
    s.prototype.CompareFrame = function(t, e) {
        return cr.do_cmp(this.cur_frame, t, e)
    }
    ,
    s.prototype.CompareAnimSpeed = function(t, e) {
        var i = this.animForwards ? this.cur_anim_speed : -this.cur_anim_speed;
        return cr.do_cmp(i, t, e)
    }
    ,
    s.prototype.OnAnimFinished = function(t) {
        return cr.equals_nocase(this.animTriggerName, t)
    }
    ,
    s.prototype.OnAnyAnimFinished = function() {
        return !0
    }
    ,
    s.prototype.OnFrameChanged = function() {
        return !0
    }
    ,
    s.prototype.IsMirrored = function() {
        return this.width < 0
    }
    ,
    s.prototype.IsFlipped = function() {
        return this.height < 0
    }
    ,
    s.prototype.OnURLLoaded = function() {
        return !0
    }
    ,
    s.prototype.IsCollisionEnabled = function() {
        return this.collisionsEnabled
    }
    ,
    t.cnds = new s,
    b.prototype.Spawn = function(t, e, i) {
        if (t && e) {
            var n = this.runtime.createInstance(t, e, this.getImagePoint(i, !0), this.getImagePoint(i, !1));
            if (n) {
                var r, s, o;
                if (void 0 !== n.angle && (n.angle = this.angle,
                n.set_bbox_changed()),
                this.runtime.isInOnDestroy++,
                this.runtime.trigger(Object.getPrototypeOf(t.plugin).cnds.OnCreated, n),
                n.is_contained)
                    for (r = 0,
                    s = n.siblings.length; r < s; r++)
                        o = n.siblings[r],
                        this.runtime.trigger(Object.getPrototypeOf(o.type.plugin).cnds.OnCreated, o);
                this.runtime.isInOnDestroy--;
                var a, h = this.runtime.getCurrentAction(), c = !1;
                if ((cr.is_undefined(h.extra.Spawn_LastExec) || h.extra.Spawn_LastExec < this.runtime.execcount) && (c = !0,
                h.extra.Spawn_LastExec = this.runtime.execcount),
                t != this.type && ((a = t.getCurrentSol()).select_all = !1,
                c ? (cr.clearArray(a.instances),
                a.instances[0] = n) : a.instances.push(n),
                n.is_contained))
                    for (r = 0,
                    s = n.siblings.length; r < s; r++)
                        (a = (o = n.siblings[r]).type.getCurrentSol()).select_all = !1,
                        c ? (cr.clearArray(a.instances),
                        a.instances[0] = o) : a.instances.push(o)
            }
        }
    }
    ,
    b.prototype.SetEffect = function(t) {
        this.blend_mode = t,
        this.compositeOp = cr.effectToCompositeOp(t),
        cr.setGLBlend(this, t, this.runtime.gl),
        this.runtime.redraw = !0
    }
    ,
    b.prototype.StopAnim = function() {
        this.animPlaying = !1
    }
    ,
    b.prototype.StartAnim = function(t) {
        this.animPlaying = !0,
        this.frameStart = this.getNowTime(),
        1 === t && 0 !== this.cur_frame && (this.changeAnimFrame = 0,
        this.inAnimTrigger || this.doChangeAnimFrame()),
        this.isTicking || (this.runtime.tickMe(this),
        this.isTicking = !0)
    }
    ,
    b.prototype.SetAnim = function(t, e) {
        this.changeAnimName = t,
        this.changeAnimFrom = e,
        this.isTicking || (this.runtime.tickMe(this),
        this.isTicking = !0),
        this.inAnimTrigger || this.doChangeAnim()
    }
    ,
    b.prototype.SetAnimFrame = function(t) {
        this.changeAnimFrame = t,
        this.isTicking || (this.runtime.tickMe(this),
        this.isTicking = !0),
        this.inAnimTrigger || this.doChangeAnimFrame()
    }
    ,
    b.prototype.SetAnimSpeed = function(t) {
        this.cur_anim_speed = cr.abs(t),
        this.animForwards = t >= 0,
        this.isTicking || (this.runtime.tickMe(this),
        this.isTicking = !0)
    }
    ,
    b.prototype.SetAnimRepeatToFrame = function(t) {
        (t = Math.floor(t)) < 0 && (t = 0),
        t >= this.cur_animation.frames.length && (t = this.cur_animation.frames.length - 1),
        this.cur_anim_repeatto = t
    }
    ,
    b.prototype.SetMirrored = function(t) {
        var e = cr.abs(this.width) * (0 === t ? -1 : 1);
        this.width !== e && (this.width = e,
        this.set_bbox_changed())
    }
    ,
    b.prototype.SetFlipped = function(t) {
        var e = cr.abs(this.height) * (0 === t ? -1 : 1);
        this.height !== e && (this.height = e,
        this.set_bbox_changed())
    }
    ,
    b.prototype.SetScale = function(t) {
        var e = this.curFrame
          , i = this.width < 0 ? -1 : 1
          , n = this.height < 0 ? -1 : 1
          , r = e.width * t * i
          , s = e.height * t * n;
        this.width === r && this.height === s || (this.width = r,
        this.height = s,
        this.set_bbox_changed())
    }
    ,
    b.prototype.LoadURL = function(t, e, i) {
        var n = new Image
          , r = this
          , s = this.curFrame;
        n.onload = function() {
            if (s.texture_img.src === n.src)
                return r.runtime.glwrap && r.curFrame === s && (r.curWebGLTexture = s.webGL_texture),
                0 === e && (r.width = n.width,
                r.height = n.height,
                r.set_bbox_changed()),
                r.runtime.redraw = !0,
                void r.runtime.trigger(cr.plugins_.Sprite.prototype.cnds.OnURLLoaded, r);
            s.texture_img = n,
            s.offx = 0,
            s.offy = 0,
            s.width = n.width,
            s.height = n.height,
            s.spritesheeted = !1,
            s.datauri = "",
            s.pixelformat = 0,
            r.runtime.glwrap && (s.webGL_texture && r.runtime.glwrap.deleteTexture(s.webGL_texture),
            s.webGL_texture = r.runtime.glwrap.loadTexture(n, !1, r.runtime.linearSampling),
            r.curFrame === s && (r.curWebGLTexture = s.webGL_texture),
            r.type.updateAllCurrentTexture()),
            0 === e && (r.width = n.width,
            r.height = n.height,
            r.set_bbox_changed()),
            r.runtime.redraw = !0,
            r.runtime.trigger(cr.plugins_.Sprite.prototype.cnds.OnURLLoaded, r)
        }
        ,
        "data:" !== t.substr(0, 5) && 0 === i && (n.crossOrigin = "anonymous"),
        this.runtime.setImageSrc(n, t)
    }
    ,
    b.prototype.SetCollisions = function(t) {
        this.collisionsEnabled !== (0 !== t) && (this.collisionsEnabled = 0 !== t,
        this.collisionsEnabled ? this.set_bbox_changed() : (this.collcells.right >= this.collcells.left && this.type.collision_grid.update(this, this.collcells, null),
        this.collcells.set(0, 0, -1, -1)))
    }
    ,
    t.acts = new b,
    w.prototype.AnimationFrame = function(t) {
        t.set_int(this.cur_frame)
    }
    ,
    w.prototype.AnimationFrameCount = function(t) {
        t.set_int(this.cur_animation.frames.length)
    }
    ,
    w.prototype.AnimationName = function(t) {
        t.set_string(this.cur_animation.name)
    }
    ,
    w.prototype.AnimationSpeed = function(t) {
        t.set_float(this.animForwards ? this.cur_anim_speed : -this.cur_anim_speed)
    }
    ,
    w.prototype.ImagePointX = function(t, e) {
        t.set_float(this.getImagePoint(e, !0))
    }
    ,
    w.prototype.ImagePointY = function(t, e) {
        t.set_float(this.getImagePoint(e, !1))
    }
    ,
    w.prototype.ImagePointCount = function(t) {
        t.set_int(this.curFrame.image_points.length)
    }
    ,
    w.prototype.ImageWidth = function(t) {
        t.set_float(this.curFrame.width)
    }
    ,
    w.prototype.ImageHeight = function(t) {
        t.set_float(this.curFrame.height)
    }
    ,
    t.exps = new w
}(),
cr.plugins_.Text = function(t) {
    this.runtime = t
}
,
function() {
    var t = cr.plugins_.Text.prototype;
    t.onCreate = function() {
        t.acts.SetWidth = function(t) {
            this.width !== t && (this.width = t,
            this.text_changed = !0,
            this.set_bbox_changed())
        }
    }
    ,
    t.Type = function(t) {
        this.plugin = t,
        this.runtime = t.runtime
    }
    ;
    var e = t.Type.prototype;
    e.onCreate = function() {}
    ,
    e.onLostWebGLContext = function() {
        var t, e, i;
        if (!this.is_family)
            for (t = 0,
            e = this.instances.length; t < e; t++)
                (i = this.instances[t]).mycanvas = null,
                i.myctx = null,
                i.mytex = null
    }
    ,
    t.Instance = function(t) {
        this.type = t,
        this.runtime = t.runtime,
        this.recycled ? cr.clearArray(this.lines) : this.lines = [],
        this.text_changed = !0
    }
    ;
    var i = t.Instance.prototype
      , n = {};
    i.onCreate = function() {
        this.text = this.properties[0],
        this.visible = 0 === this.properties[1],
        this.font = this.properties[2],
        this.color = this.properties[3],
        this.halign = this.properties[4],
        this.valign = this.properties[5],
        this.wrapbyword = 0 === this.properties[7],
        this.lastwidth = this.width,
        this.lastwrapwidth = this.width,
        this.lastheight = this.height,
        this.line_height_offset = this.properties[8],
        this.facename = "",
        this.fontstyle = "",
        this.ptSize = 0,
        this.textWidth = 0,
        this.textHeight = 0,
        this.parseFont(),
        this.mycanvas = null,
        this.myctx = null,
        this.mytex = null,
        this.need_text_redraw = !1,
        this.last_render_tick = this.runtime.tickcount,
        this.recycled ? this.rcTex.set(0, 0, 1, 1) : this.rcTex = new cr.rect(0,0,1,1),
        this.runtime.glwrap && this.runtime.tickMe(this)
    }
    ,
    i.parseFont = function() {
        var t, e = this.font.split(" ");
        for (t = 0; t < e.length; t++)
            if ("pt" === e[t].substr(e[t].length - 2, 2)) {
                for (this.ptSize = parseInt(e[t].substr(0, e[t].length - 2)),
                this.pxHeight = Math.ceil(this.ptSize / 72 * 96) + 4,
                t > 0 && (this.fontstyle = e[t - 1]),
                this.facename = e[t + 1],
                t += 2; t < e.length; t++)
                    this.facename += " " + e[t];
                break
            }
    }
    ,
    i.saveToJSON = function() {
        return {
            t: this.text,
            f: this.font,
            c: this.color,
            ha: this.halign,
            va: this.valign,
            wr: this.wrapbyword,
            lho: this.line_height_offset,
            fn: this.facename,
            fs: this.fontstyle,
            ps: this.ptSize,
            pxh: this.pxHeight,
            tw: this.textWidth,
            th: this.textHeight,
            lrt: this.last_render_tick
        }
    }
    ,
    i.loadFromJSON = function(t) {
        this.text = t.t,
        this.font = t.f,
        this.color = t.c,
        this.halign = t.ha,
        this.valign = t.va,
        this.wrapbyword = t.wr,
        this.line_height_offset = t.lho,
        this.facename = t.fn,
        this.fontstyle = t.fs,
        this.ptSize = t.ps,
        this.pxHeight = t.pxh,
        this.textWidth = t.tw,
        this.textHeight = t.th,
        this.last_render_tick = t.lrt,
        this.text_changed = !0,
        this.lastwidth = this.width,
        this.lastwrapwidth = this.width,
        this.lastheight = this.height
    }
    ,
    i.tick = function() {
        if (this.runtime.glwrap && this.mytex && this.runtime.tickcount - this.last_render_tick >= 300) {
            var t = this.layer;
            this.update_bbox();
            var e = this.bbox;
            (e.right < t.viewLeft || e.bottom < t.viewTop || e.left > t.viewRight || e.top > t.viewBottom) && (this.runtime.glwrap.deleteTexture(this.mytex),
            this.mytex = null,
            this.myctx = null,
            this.mycanvas = null)
        }
    }
    ,
    i.onDestroy = function() {
        this.myctx = null,
        this.mycanvas = null,
        this.runtime.glwrap && this.mytex && this.runtime.glwrap.deleteTexture(this.mytex),
        this.mytex = null
    }
    ,
    i.updateFont = function() {
        this.font = this.fontstyle + " " + this.ptSize.toString() + "pt " + this.facename,
        this.text_changed = !0,
        this.runtime.redraw = !0
    }
    ,
    i.draw = function(t, e) {
        t.font = this.font,
        t.textBaseline = "top",
        t.fillStyle = this.color,
        t.globalAlpha = e ? 1 : this.opacity;
        var i = 1;
        e && (i = Math.abs(this.layer.getScale()),
        t.save(),
        t.scale(i, i)),
        (this.text_changed || this.width !== this.lastwrapwidth) && (this.type.plugin.WordWrap(this.text, this.lines, t, this.width, this.wrapbyword),
        this.text_changed = !1,
        this.lastwrapwidth = this.width),
        this.update_bbox();
        var n = e ? 0 : this.bquad.tlx
          , r = e ? 0 : this.bquad.tly;
        this.runtime.pixel_rounding && (n = n + .5 | 0,
        r = r + .5 | 0),
        0 === this.angle || e || (t.save(),
        t.translate(n, r),
        t.rotate(this.angle),
        n = 0,
        r = 0);
        var s, o, a = r + this.height, h = this.pxHeight;
        for (h += this.line_height_offset,
        1 === this.valign ? r += Math.max(this.height / 2 - this.lines.length * h / 2, 0) : 2 === this.valign && (r += Math.max(this.height - this.lines.length * h - 2, 0)),
        o = 0; o < this.lines.length && (s = n,
        1 === this.halign ? s = n + (this.width - this.lines[o].width) / 2 : 2 === this.halign && (s = n + (this.width - this.lines[o].width)),
        t.fillText(this.lines[o].text, s, r),
        !((r += h) >= a - h)); o++)
            ;
        (0 !== this.angle || e) && t.restore(),
        this.last_render_tick = this.runtime.tickcount
    }
    ,
    i.drawGL = function(t) {
        if (!(this.width < 1 || this.height < 1)) {
            var e = this.text_changed || this.need_text_redraw;
            this.need_text_redraw = !1;
            var i = this.layer.getScale()
              , n = this.layer.getAngle()
              , r = this.rcTex
              , s = i * this.width
              , o = i * this.height
              , a = Math.ceil(s)
              , h = Math.ceil(o)
              , c = Math.abs(a)
              , l = Math.abs(h)
              , u = this.runtime.draw_width / 2
              , p = this.runtime.draw_height / 2;
            this.myctx || (this.mycanvas = document.createElement("canvas"),
            this.mycanvas.width = c,
            this.mycanvas.height = l,
            this.lastwidth = c,
            this.lastheight = l,
            e = !0,
            this.myctx = this.mycanvas.getContext("2d")),
            c === this.lastwidth && l === this.lastheight || (this.mycanvas.width = c,
            this.mycanvas.height = l,
            this.mytex && (t.deleteTexture(this.mytex),
            this.mytex = null),
            e = !0),
            e && (this.myctx.clearRect(0, 0, c, l),
            this.draw(this.myctx, !0),
            this.mytex || (this.mytex = t.createEmptyTexture(c, l, this.runtime.linearSampling, this.runtime.isMobile)),
            t.videoToTexture(this.mycanvas, this.mytex, this.runtime.isMobile)),
            this.lastwidth = c,
            this.lastheight = l,
            t.setTexture(this.mytex),
            t.setOpacity(this.opacity),
            t.resetModelView(),
            t.translate(-u, -p),
            t.updateModelView();
            var d = this.bquad
              , f = this.layer.layerToCanvas(d.tlx, d.tly, !0, !0)
              , g = this.layer.layerToCanvas(d.tlx, d.tly, !1, !0)
              , y = this.layer.layerToCanvas(d.trx, d.try_, !0, !0)
              , m = this.layer.layerToCanvas(d.trx, d.try_, !1, !0)
              , _ = this.layer.layerToCanvas(d.brx, d.bry, !0, !0)
              , v = this.layer.layerToCanvas(d.brx, d.bry, !1, !0)
              , b = this.layer.layerToCanvas(d.blx, d.bly, !0, !0)
              , w = this.layer.layerToCanvas(d.blx, d.bly, !1, !0);
            if (this.runtime.pixel_rounding || 0 === this.angle && 0 === n) {
                var x = (f + .5 | 0) - f
                  , T = (g + .5 | 0) - g;
                f += x,
                g += T,
                y += x,
                m += T,
                _ += x,
                v += T,
                b += x,
                w += T
            }
            0 === this.angle && 0 === n ? (m = g,
            _ = y = f + a,
            b = f,
            w = v = g + h,
            r.right = 1,
            r.bottom = 1) : (r.right = s / a,
            r.bottom = o / h),
            t.quadTex(f, g, y, m, _, v, b, w, r),
            t.resetModelView(),
            t.scale(i, i),
            t.rotateZ(-this.layer.getAngle()),
            t.translate((this.layer.viewLeft + this.layer.viewRight) / -2, (this.layer.viewTop + this.layer.viewBottom) / -2),
            t.updateModelView(),
            this.last_render_tick = this.runtime.tickcount
        }
    }
    ;
    var r = [];
    t.TokeniseWords = function(t) {
        cr.clearArray(r);
        for (var e, i = "", n = 0; n < t.length; )
            if ("\n" === (e = t.charAt(n)))
                i.length && (r.push(i),
                i = ""),
                r.push("\n"),
                ++n;
            else if (" " === e || "\t" === e || "-" === e) {
                do {
                    i += t.charAt(n),
                    n++
                } while (n < t.length && (" " === t.charAt(n) || "\t" === t.charAt(n)));
                r.push(i),
                i = ""
            } else
                n < t.length && (i += e,
                n++);
        i.length && r.push(i)
    }
    ;
    var s = [];
    function o() {
        return s.length ? s.pop() : {}
    }
    function a(t) {
        s.push(t)
    }
    function h(t) {
        var e, i;
        for (e = 0,
        i = t.length; e < i; e++)
            a(t[e]);
        cr.clearArray(t)
    }
    function c(t) {
        return t.length && " " === t.charAt(t.length - 1) ? t.substring(0, t.length - 1) : t
    }
    function l() {}
    function u() {}
    function p() {}
    t.WordWrap = function(t, e, i, n, r) {
        if (t && t.length)
            if (n <= 2)
                h(e);
            else {
                if (t.length <= 100 && -1 === t.indexOf("\n")) {
                    var s = i.measureText(t).width;
                    if (s <= n)
                        return h(e),
                        e.push(o()),
                        e[0].text = t,
                        void (e[0].width = s)
                }
                this.WrapText(t, e, i, n, r)
            }
        else
            h(e)
    }
    ,
    t.WrapText = function(t, e, i, n, s) {
        var h;
        s ? (this.TokeniseWords(t),
        h = r) : h = t;
        var l, u, p, d = "", f = 0;
        for (u = 0; u < h.length; u++)
            "\n" !== h[u] ? (l = d,
            d += h[u],
            i.measureText(d).width >= n && (f >= e.length && e.push(o()),
            l = c(l),
            (p = e[f]).text = l,
            p.width = i.measureText(l).width,
            f++,
            d = h[u],
            s || " " !== d || (d = ""))) : (f >= e.length && e.push(o()),
            d = c(d),
            (p = e[f]).text = d,
            p.width = i.measureText(d).width,
            f++,
            d = "");
        for (d.length && (f >= e.length && e.push(o()),
        d = c(d),
        (p = e[f]).text = d,
        p.width = i.measureText(d).width,
        f++),
        u = f; u < e.length; u++)
            a(e[u]);
        e.length = f
    }
    ,
    l.prototype.CompareText = function(t, e) {
        return e ? this.text == t : cr.equals_nocase(this.text, t)
    }
    ,
    t.cnds = new l,
    u.prototype.SetText = function(t) {
        cr.is_number(t) && t < 1e9 && (t = Math.round(1e10 * t) / 1e10);
        var e = t.toString();
        this.text !== e && (this.text = e,
        this.text_changed = !0,
        this.runtime.redraw = !0)
    }
    ,
    u.prototype.AppendText = function(t) {
        cr.is_number(t) && (t = Math.round(1e10 * t) / 1e10);
        var e = t.toString();
        e && (this.text += e,
        this.text_changed = !0,
        this.runtime.redraw = !0)
    }
    ,
    u.prototype.SetFontFace = function(t, e) {
        var i = "";
        switch (e) {
        case 1:
            i = "bold";
            break;
        case 2:
            i = "italic";
            break;
        case 3:
            i = "bold italic"
        }
        t === this.facename && i === this.fontstyle || (this.facename = t,
        this.fontstyle = i,
        this.updateFont())
    }
    ,
    u.prototype.SetFontSize = function(t) {
        this.ptSize !== t && (this.ptSize = t,
        this.pxHeight = Math.ceil(this.ptSize / 72 * 96) + 4,
        this.updateFont())
    }
    ,
    u.prototype.SetFontColor = function(t) {
        var e = "rgb(" + cr.GetRValue(t).toString() + "," + cr.GetGValue(t).toString() + "," + cr.GetBValue(t).toString() + ")";
        e !== this.color && (this.color = e,
        this.need_text_redraw = !0,
        this.runtime.redraw = !0)
    }
    ,
    u.prototype.SetWebFont = function(t, e) {
        if (this.runtime.isDomFree)
            cr.logexport("[Construct 2] Text plugin: 'Set web font' not supported on this platform - the action has been ignored");
        else {
            var i = this
              , r = function() {
                i.runtime.redraw = !0,
                i.text_changed = !0
            };
            if (n.hasOwnProperty(e)) {
                var s = "'" + t + "'";
                if (this.facename === s)
                    return;
                this.facename = s,
                this.updateFont();
                for (var o = 1; o < 10; o++)
                    setTimeout(r, 100 * o),
                    setTimeout(r, 1e3 * o)
            } else {
                var a = document.createElement("link");
                a.href = e,
                a.rel = "stylesheet",
                a.type = "text/css",
                a.onload = r,
                document.getElementsByTagName("head")[0].appendChild(a),
                n[e] = !0,
                this.facename = "'" + t + "'",
                this.updateFont();
                for (o = 1; o < 10; o++)
                    setTimeout(r, 100 * o),
                    setTimeout(r, 1e3 * o)
            }
        }
    }
    ,
    u.prototype.SetEffect = function(t) {
        this.blend_mode = t,
        this.compositeOp = cr.effectToCompositeOp(t),
        cr.setGLBlend(this, t, this.runtime.gl),
        this.runtime.redraw = !0
    }
    ,
    t.acts = new u,
    p.prototype.Text = function(t) {
        t.set_string(this.text)
    }
    ,
    p.prototype.FaceName = function(t) {
        t.set_string(this.facename)
    }
    ,
    p.prototype.FaceSize = function(t) {
        t.set_int(this.ptSize)
    }
    ,
    p.prototype.TextWidth = function(t) {
        var e, i, n, r = 0;
        for (e = 0,
        i = this.lines.length; e < i; e++)
            r < (n = this.lines[e].width) && (r = n);
        t.set_int(r)
    }
    ,
    p.prototype.TextHeight = function(t) {
        t.set_int(this.lines.length * (this.pxHeight + this.line_height_offset) - this.line_height_offset)
    }
    ,
    t.exps = new p
}(),
cr.plugins_.Touch = function(t) {
    this.runtime = t
}
,
function() {
    var t = cr.plugins_.Touch.prototype;
    t.Type = function(t) {
        this.plugin = t,
        this.runtime = t.runtime
    }
    ,
    t.Type.prototype.onCreate = function() {}
    ,
    t.Instance = function(t) {
        this.type = t,
        this.runtime = t.runtime,
        this.touches = [],
        this.mouseDown = !1
    }
    ;
    var e = t.Instance.prototype
      , i = {
        left: 0,
        top: 0
    };
    e.findTouch = function(t) {
        var e, i;
        for (e = 0,
        i = this.touches.length; e < i; e++)
            if (this.touches[e].id === t)
                return e;
        return -1
    }
    ;
    var n = 0
      , r = 0
      , s = 0;
    function o(t) {
        n = t.x,
        r = t.y,
        s = t.z
    }
    var a = [];
    function h(t, e, i, n) {
        var r;
        return (r = a.length ? a.pop() : new l).init(t, e, i, n),
        r
    }
    function c(t) {
        a.length < 100 && a.push(t)
    }
    function l() {
        this.starttime = 0,
        this.time = 0,
        this.lasttime = 0,
        this.startx = 0,
        this.starty = 0,
        this.x = 0,
        this.y = 0,
        this.lastx = 0,
        this.lasty = 0,
        this.id = 0,
        this.startindex = 0,
        this.triggeredHold = !1,
        this.tooFarForHold = !1
    }
    l.prototype.init = function(t, e, i, n) {
        var r = cr.performance_now();
        this.time = r,
        this.lasttime = r,
        this.starttime = r,
        this.startx = t,
        this.starty = e,
        this.x = t,
        this.y = e,
        this.lastx = t,
        this.lasty = e,
        this.width = 0,
        this.height = 0,
        this.pressure = 0,
        this.id = i,
        this.startindex = n,
        this.triggeredHold = !1,
        this.tooFarForHold = !1
    }
    ,
    l.prototype.update = function(t, e, i, n, r, s) {
        this.lasttime = this.time,
        this.time = t,
        this.lastx = this.x,
        this.lasty = this.y,
        this.x = e,
        this.y = i,
        this.width = n,
        this.height = r,
        this.pressure = s,
        !this.tooFarForHold && cr.distanceTo(this.startx, this.starty, this.x, this.y) >= 15 && (this.tooFarForHold = !0)
    }
    ,
    l.prototype.maybeTriggerHold = function(t, e) {
        this.triggeredHold || cr.performance_now() - this.starttime >= 500 && !this.tooFarForHold && cr.distanceTo(this.startx, this.starty, this.x, this.y) < 15 && (this.triggeredHold = !0,
        t.trigger_index = this.startindex,
        t.trigger_id = this.id,
        t.getTouchIndex = e,
        t.runtime.trigger(cr.plugins_.Touch.prototype.cnds.OnHoldGesture, t),
        t.curTouchX = this.x,
        t.curTouchY = this.y,
        t.runtime.trigger(cr.plugins_.Touch.prototype.cnds.OnHoldGestureObject, t),
        t.getTouchIndex = 0)
    }
    ;
    var u = -1e3
      , p = -1e3
      , d = -1e4;
    l.prototype.maybeTriggerTap = function(t, e) {
        if (!this.triggeredHold) {
            var i = cr.performance_now();
            i - this.starttime <= 333 && !this.tooFarForHold && cr.distanceTo(this.startx, this.starty, this.x, this.y) < 15 && (t.trigger_index = this.startindex,
            t.trigger_id = this.id,
            t.getTouchIndex = e,
            i - d <= 666 && cr.distanceTo(u, p, this.x, this.y) < 25 ? (t.runtime.trigger(cr.plugins_.Touch.prototype.cnds.OnDoubleTapGesture, t),
            t.curTouchX = this.x,
            t.curTouchY = this.y,
            t.runtime.trigger(cr.plugins_.Touch.prototype.cnds.OnDoubleTapGestureObject, t),
            u = -1e3,
            p = -1e3,
            d = -1e4) : (t.runtime.trigger(cr.plugins_.Touch.prototype.cnds.OnTapGesture, t),
            t.curTouchX = this.x,
            t.curTouchY = this.y,
            t.runtime.trigger(cr.plugins_.Touch.prototype.cnds.OnTapGestureObject, t),
            u = this.x,
            p = this.y,
            d = i),
            t.getTouchIndex = 0)
        }
    }
    ,
    e.onCreate = function() {
        this,
        this.isWindows8 = !(void 0 === window.c2isWindows8 || !window.c2isWindows8),
        this.orient_alpha = 0,
        this.orient_beta = 0,
        this.orient_gamma = 0,
        this.acc_g_x = 0,
        this.acc_g_y = 0,
        this.acc_g_z = 0,
        this.acc_x = 0,
        this.acc_y = 0,
        this.acc_z = 0,
        this.curTouchX = 0,
        this.curTouchY = 0,
        this.trigger_index = 0,
        this.trigger_id = 0,
        this.trigger_permission = 0,
        this.getTouchIndex = 0,
        this.useMouseInput = 0 !== this.properties[0];
        var t = this.runtime.fullscreen_mode > 0 ? document : this.runtime.canvas
          , e = document;
        this.runtime.isDirectCanvas ? e = t = window.Canvas : this.runtime.isCocoonJs && (e = t = window);
        var i = this;
        if ("undefined" != typeof PointerEvent ? (t.addEventListener("pointerdown", (function(t) {
            i.onPointerStart(t)
        }
        ), !1),
        t.addEventListener("pointermove", (function(t) {
            i.onPointerMove(t)
        }
        ), !1),
        e.addEventListener("pointerup", (function(t) {
            i.onPointerEnd(t, !1)
        }
        ), !1),
        e.addEventListener("pointercancel", (function(t) {
            i.onPointerEnd(t, !0)
        }
        ), !1),
        this.runtime.canvas && (this.runtime.canvas.addEventListener("MSGestureHold", (function(t) {
            t.preventDefault()
        }
        ), !1),
        document.addEventListener("MSGestureHold", (function(t) {
            t.preventDefault()
        }
        ), !1),
        this.runtime.canvas.addEventListener("gesturehold", (function(t) {
            t.preventDefault()
        }
        ), !1),
        document.addEventListener("gesturehold", (function(t) {
            t.preventDefault()
        }
        ), !1))) : window.navigator.msPointerEnabled ? (t.addEventListener("MSPointerDown", (function(t) {
            i.onPointerStart(t)
        }
        ), !1),
        t.addEventListener("MSPointerMove", (function(t) {
            i.onPointerMove(t)
        }
        ), !1),
        e.addEventListener("MSPointerUp", (function(t) {
            i.onPointerEnd(t, !1)
        }
        ), !1),
        e.addEventListener("MSPointerCancel", (function(t) {
            i.onPointerEnd(t, !0)
        }
        ), !1),
        this.runtime.canvas && (this.runtime.canvas.addEventListener("MSGestureHold", (function(t) {
            t.preventDefault()
        }
        ), !1),
        document.addEventListener("MSGestureHold", (function(t) {
            t.preventDefault()
        }
        ), !1))) : (t.addEventListener("touchstart", (function(t) {
            i.onTouchStart(t)
        }
        ), !1),
        t.addEventListener("touchmove", (function(t) {
            i.onTouchMove(t)
        }
        ), !1),
        e.addEventListener("touchend", (function(t) {
            i.onTouchEnd(t, !1)
        }
        ), !1),
        e.addEventListener("touchcancel", (function(t) {
            i.onTouchEnd(t, !0)
        }
        ), !1)),
        this.isWindows8) {
            var n = function(t) {
                var e = t.reading;
                i.acc_x = e.accelerationX,
                i.acc_y = e.accelerationY,
                i.acc_z = e.accelerationZ
            }
              , r = function(t) {
                var e = t.reading;
                i.orient_alpha = e.yawDegrees,
                i.orient_beta = e.pitchDegrees,
                i.orient_gamma = e.rollDegrees
            }
              , s = Windows.Devices.Sensors.Accelerometer.getDefault();
            s && (s.reportInterval = Math.max(s.minimumReportInterval, 16),
            s.addEventListener("readingchanged", n));
            var a = Windows.Devices.Sensors.Inclinometer.getDefault();
            a && (a.reportInterval = Math.max(a.minimumReportInterval, 16),
            a.addEventListener("readingchanged", r)),
            document.addEventListener("visibilitychange", (function(t) {
                document.hidden || document.msHidden ? (s && s.removeEventListener("readingchanged", n),
                a && a.removeEventListener("readingchanged", r)) : (s && s.addEventListener("readingchanged", n),
                a && a.addEventListener("readingchanged", r))
            }
            ), !1)
        } else
            window.addEventListener("deviceorientation", (function(t) {
                i.orient_alpha = t.alpha || 0,
                i.orient_beta = t.beta || 0,
                i.orient_gamma = t.gamma || 0
            }
            ), !1),
            window.addEventListener("devicemotion", (function(t) {
                t.accelerationIncludingGravity && (i.acc_g_x = t.accelerationIncludingGravity.x || 0,
                i.acc_g_y = t.accelerationIncludingGravity.y || 0,
                i.acc_g_z = t.accelerationIncludingGravity.z || 0),
                t.acceleration && (i.acc_x = t.acceleration.x || 0,
                i.acc_y = t.acceleration.y || 0,
                i.acc_z = t.acceleration.z || 0)
            }
            ), !1);
        this.useMouseInput && !this.runtime.isDomFree && (jQuery(document).mousemove((function(t) {
            i.onMouseMove(t)
        }
        )),
        jQuery(document).mousedown((function(t) {
            i.onMouseDown(t)
        }
        )),
        jQuery(document).mouseup((function(t) {
            i.onMouseUp(t)
        }
        ))),
        !this.runtime.isiOS && this.runtime.isCordova && navigator.accelerometer && navigator.accelerometer.watchAcceleration && navigator.accelerometer.watchAcceleration(o, null, {
            frequency: 40
        }),
        this.runtime.tick2Me(this)
    }
    ,
    e.onPointerMove = function(t) {
        if (t.pointerType !== t.MSPOINTER_TYPE_MOUSE && "mouse" !== t.pointerType) {
            t.preventDefault && t.preventDefault();
            var e = this.findTouch(t.pointerId)
              , n = cr.performance_now();
            if (e >= 0) {
                var r = this.runtime.isDomFree ? i : jQuery(this.runtime.canvas).offset()
                  , s = this.touches[e];
                if (n - s.time < 2)
                    return;
                s.update(n, t.pageX - r.left, t.pageY - r.top, t.width || 0, t.height || 0, t.pressure || 0)
            }
        }
    }
    ,
    e.onPointerStart = function(t) {
        if (t.pointerType !== t.MSPOINTER_TYPE_MOUSE && "mouse" !== t.pointerType) {
            t.preventDefault && cr.isCanvasInputEvent(t) && t.preventDefault();
            var e = this.runtime.isDomFree ? i : jQuery(this.runtime.canvas).offset()
              , n = t.pageX - e.left
              , r = t.pageY - e.top;
            cr.performance_now();
            this.trigger_index = this.touches.length,
            this.trigger_id = t.pointerId,
            this.touches.push(h(n, r, t.pointerId, this.trigger_index)),
            this.runtime.isInUserInputEvent = !0,
            this.runtime.trigger(cr.plugins_.Touch.prototype.cnds.OnNthTouchStart, this),
            this.runtime.trigger(cr.plugins_.Touch.prototype.cnds.OnTouchStart, this),
            this.curTouchX = n,
            this.curTouchY = r,
            this.runtime.trigger(cr.plugins_.Touch.prototype.cnds.OnTouchObject, this),
            this.runtime.isInUserInputEvent = !1
        }
    }
    ,
    e.onPointerEnd = function(t, e) {
        if (t.pointerType !== t.MSPOINTER_TYPE_MOUSE && "mouse" !== t.pointerType) {
            t.preventDefault && cr.isCanvasInputEvent(t) && t.preventDefault();
            var i = this.findTouch(t.pointerId);
            this.trigger_index = i >= 0 ? this.touches[i].startindex : -1,
            this.trigger_id = i >= 0 ? this.touches[i].id : -1,
            this.runtime.isInUserInputEvent = !0,
            this.runtime.trigger(cr.plugins_.Touch.prototype.cnds.OnNthTouchEnd, this),
            this.runtime.trigger(cr.plugins_.Touch.prototype.cnds.OnTouchEnd, this),
            i >= 0 && (e || this.touches[i].maybeTriggerTap(this, i),
            c(this.touches[i]),
            this.touches.splice(i, 1)),
            this.runtime.isInUserInputEvent = !1
        }
    }
    ,
    e.onTouchMove = function(t) {
        t.preventDefault && t.preventDefault();
        var e, n, r, s, o = cr.performance_now();
        for (e = 0,
        n = t.changedTouches.length; e < n; e++) {
            r = t.changedTouches[e];
            var a = this.findTouch(r.identifier);
            if (a >= 0) {
                var h = this.runtime.isDomFree ? i : jQuery(this.runtime.canvas).offset();
                if (o - (s = this.touches[a]).time < 2)
                    continue;
                var c = 2 * (r.radiusX || r.webkitRadiusX || r.mozRadiusX || r.msRadiusX || 0)
                  , l = 2 * (r.radiusY || r.webkitRadiusY || r.mozRadiusY || r.msRadiusY || 0)
                  , u = r.force || r.webkitForce || r.mozForce || r.msForce || 0;
                s.update(o, r.pageX - h.left, r.pageY - h.top, c, l, u)
            }
        }
    }
    ,
    e.onTouchStart = function(t) {
        t.preventDefault && cr.isCanvasInputEvent(t) && t.preventDefault();
        var e, n, r, s = this.runtime.isDomFree ? i : jQuery(this.runtime.canvas).offset();
        cr.performance_now();
        for (this.runtime.isInUserInputEvent = !0,
        e = 0,
        n = t.changedTouches.length; e < n; e++)
            if (r = t.changedTouches[e],
            -1 === this.findTouch(r.identifier)) {
                var o = r.pageX - s.left
                  , a = r.pageY - s.top;
                this.trigger_index = this.touches.length,
                this.trigger_id = r.identifier,
                this.touches.push(h(o, a, r.identifier, this.trigger_index)),
                this.runtime.trigger(cr.plugins_.Touch.prototype.cnds.OnNthTouchStart, this),
                this.runtime.trigger(cr.plugins_.Touch.prototype.cnds.OnTouchStart, this),
                this.curTouchX = o,
                this.curTouchY = a,
                this.runtime.trigger(cr.plugins_.Touch.prototype.cnds.OnTouchObject, this)
            }
        this.runtime.isInUserInputEvent = !1
    }
    ,
    e.onTouchEnd = function(t, e) {
        var i, n, r, s;
        for (t.preventDefault && cr.isCanvasInputEvent(t) && t.preventDefault(),
        this.runtime.isInUserInputEvent = !0,
        i = 0,
        n = t.changedTouches.length; i < n; i++)
            r = t.changedTouches[i],
            (s = this.findTouch(r.identifier)) >= 0 && (this.trigger_index = this.touches[s].startindex,
            this.trigger_id = this.touches[s].id,
            this.runtime.trigger(cr.plugins_.Touch.prototype.cnds.OnNthTouchEnd, this),
            this.runtime.trigger(cr.plugins_.Touch.prototype.cnds.OnTouchEnd, this),
            e || this.touches[s].maybeTriggerTap(this, s),
            c(this.touches[s]),
            this.touches.splice(s, 1));
        this.runtime.isInUserInputEvent = !1
    }
    ,
    e.getAlpha = function() {
        return this.runtime.isCordova && 0 === this.orient_alpha && 0 !== s ? 90 * s : this.orient_alpha
    }
    ,
    e.getBeta = function() {
        return this.runtime.isCordova && 0 === this.orient_beta && 0 !== r ? 90 * r : this.orient_beta
    }
    ,
    e.getGamma = function() {
        return this.runtime.isCordova && 0 === this.orient_gamma && 0 !== n ? 90 * n : this.orient_gamma
    }
    ;
    function f(t) {
        return t.sourceCapabilities && t.sourceCapabilities.firesTouchEvents || t.originalEvent && t.originalEvent.sourceCapabilities && t.originalEvent.sourceCapabilities.firesTouchEvents
    }
    function g() {}
    e.onMouseDown = function(t) {
        if (!f(t)) {
            var e = {
                changedTouches: [{
                    pageX: t.pageX,
                    pageY: t.pageY,
                    identifier: 0
                }]
            };
            this.onTouchStart(e),
            this.mouseDown = !0
        }
    }
    ,
    e.onMouseMove = function(t) {
        if (this.mouseDown && !f(t)) {
            var e = {
                changedTouches: [{
                    pageX: t.pageX,
                    pageY: t.pageY,
                    identifier: 0
                }]
            };
            this.onTouchMove(e)
        }
    }
    ,
    e.onMouseUp = function(t) {
        if (t.preventDefault && this.runtime.had_a_click && !this.runtime.isMobile && t.preventDefault(),
        this.runtime.had_a_click = !0,
        !f(t)) {
            var e = {
                changedTouches: [{
                    pageX: t.pageX,
                    pageY: t.pageY,
                    identifier: 0
                }]
            };
            this.onTouchEnd(e),
            this.mouseDown = !1
        }
    }
    ,
    e.tick2 = function() {
        var t, e, i, n = cr.performance_now();
        for (t = 0,
        e = this.touches.length; t < e; ++t)
            (i = this.touches[t]).time <= n - 50 && (i.lasttime = n),
            i.maybeTriggerHold(this, t)
    }
    ,
    g.prototype.OnTouchStart = function() {
        return !0
    }
    ,
    g.prototype.OnTouchEnd = function() {
        return !0
    }
    ,
    g.prototype.IsInTouch = function() {
        return this.touches.length
    }
    ,
    g.prototype.OnTouchObject = function(t) {
        return !!t && this.runtime.testAndSelectCanvasPointOverlap(t, this.curTouchX, this.curTouchY, !1)
    }
    ;
    var y = [];
    function m() {}
    function _() {}
    g.prototype.IsTouchingObject = function(t) {
        if (!t)
            return !1;
        var e, i, n, r, s, o, a = t.getCurrentSol(), h = a.getObjects();
        for (n = 0,
        r = h.length; n < r; n++) {
            var c = h[n];
            for (c.update_bbox(),
            s = 0,
            o = this.touches.length; s < o; s++) {
                var l = this.touches[s];
                if (e = c.layer.canvasToLayer(l.x, l.y, !0),
                i = c.layer.canvasToLayer(l.x, l.y, !1),
                c.contains_pt(e, i)) {
                    y.push(c);
                    break
                }
            }
        }
        return !!y.length && (a.select_all = !1,
        cr.shallowAssignArray(a.instances, y),
        t.applySolToContainer(),
        cr.clearArray(y),
        !0)
    }
    ,
    g.prototype.CompareTouchSpeed = function(t, e, i) {
        if ((t = Math.floor(t)) < 0 || t >= this.touches.length)
            return !1;
        var n = this.touches[t]
          , r = cr.distanceTo(n.x, n.y, n.lastx, n.lasty)
          , s = (n.time - n.lasttime) / 1e3
          , o = 0;
        return s > 0 && (o = r / s),
        cr.do_cmp(o, e, i)
    }
    ,
    g.prototype.OrientationSupported = function() {
        return void 0 !== window.DeviceOrientationEvent
    }
    ,
    g.prototype.MotionSupported = function() {
        return void 0 !== window.DeviceMotionEvent
    }
    ,
    g.prototype.CompareOrientation = function(t, e, i) {
        var n = 0;
        return n = 0 === t ? this.getAlpha() : 1 === t ? this.getBeta() : this.getGamma(),
        cr.do_cmp(n, e, i)
    }
    ,
    g.prototype.CompareAcceleration = function(t, e, i) {
        var n = 0;
        return 0 === t ? n = this.acc_g_x : 1 === t ? n = this.acc_g_y : 2 === t ? n = this.acc_g_z : 3 === t ? n = this.acc_x : 4 === t ? n = this.acc_y : 5 === t && (n = this.acc_z),
        cr.do_cmp(n, e, i)
    }
    ,
    g.prototype.OnNthTouchStart = function(t) {
        return (t = Math.floor(t)) === this.trigger_index
    }
    ,
    g.prototype.OnNthTouchEnd = function(t) {
        return (t = Math.floor(t)) === this.trigger_index
    }
    ,
    g.prototype.HasNthTouch = function(t) {
        return t = Math.floor(t),
        this.touches.length >= t + 1
    }
    ,
    g.prototype.OnHoldGesture = function() {
        return !0
    }
    ,
    g.prototype.OnTapGesture = function() {
        return !0
    }
    ,
    g.prototype.OnDoubleTapGesture = function() {
        return !0
    }
    ,
    g.prototype.OnHoldGestureObject = function(t) {
        return !!t && this.runtime.testAndSelectCanvasPointOverlap(t, this.curTouchX, this.curTouchY, !1)
    }
    ,
    g.prototype.OnTapGestureObject = function(t) {
        return !!t && this.runtime.testAndSelectCanvasPointOverlap(t, this.curTouchX, this.curTouchY, !1)
    }
    ,
    g.prototype.OnDoubleTapGestureObject = function(t) {
        return !!t && this.runtime.testAndSelectCanvasPointOverlap(t, this.curTouchX, this.curTouchY, !1)
    }
    ,
    g.prototype.OnPermissionGranted = function(t) {
        return this.trigger_permission === t
    }
    ,
    g.prototype.OnPermissionDenied = function(t) {
        return this.trigger_permission === t
    }
    ,
    t.cnds = new g,
    m.prototype.RequestPermission = function(t) {
        var e = this
          , i = Promise.resolve(!0);
        0 === t ? window.DeviceOrientationEvent && window.DeviceOrientationEvent.requestPermission && (i = window.DeviceOrientationEvent.requestPermission().then((function(t) {
            return "granted" === t
        }
        ))) : window.DeviceMotionEvent && window.DeviceMotionEvent.requestPermission && (i = window.DeviceMotionEvent.requestPermission().then((function(t) {
            return "granted" === t
        }
        ))),
        i.then((function(i) {
            e.trigger_permission = t,
            i ? e.runtime.trigger(cr.plugins_.Touch.prototype.cnds.OnPermissionGranted, e) : e.runtime.trigger(cr.plugins_.Touch.prototype.cnds.OnPermissionDenied, e)
        }
        ))
    }
    ,
    t.acts = new m,
    _.prototype.TouchCount = function(t) {
        t.set_int(this.touches.length)
    }
    ,
    _.prototype.X = function(t, e) {
        var i, n, r, s, o, a = this.getTouchIndex;
        a < 0 || a >= this.touches.length ? t.set_float(0) : cr.is_undefined(e) ? (n = (i = this.runtime.getLayerByNumber(0)).scale,
        r = i.zoomRate,
        s = i.parallaxX,
        o = i.angle,
        i.scale = 1,
        i.zoomRate = 1,
        i.parallaxX = 1,
        i.angle = 0,
        t.set_float(i.canvasToLayer(this.touches[a].x, this.touches[a].y, !0)),
        i.scale = n,
        i.zoomRate = r,
        i.parallaxX = s,
        i.angle = o) : (i = cr.is_number(e) ? this.runtime.getLayerByNumber(e) : this.runtime.getLayerByName(e)) ? t.set_float(i.canvasToLayer(this.touches[a].x, this.touches[a].y, !0)) : t.set_float(0)
    }
    ,
    _.prototype.XAt = function(t, e, i) {
        var n, r, s, o, a;
        (e = Math.floor(e)) < 0 || e >= this.touches.length ? t.set_float(0) : cr.is_undefined(i) ? (r = (n = this.runtime.getLayerByNumber(0)).scale,
        s = n.zoomRate,
        o = n.parallaxX,
        a = n.angle,
        n.scale = 1,
        n.zoomRate = 1,
        n.parallaxX = 1,
        n.angle = 0,
        t.set_float(n.canvasToLayer(this.touches[e].x, this.touches[e].y, !0)),
        n.scale = r,
        n.zoomRate = s,
        n.parallaxX = o,
        n.angle = a) : (n = cr.is_number(i) ? this.runtime.getLayerByNumber(i) : this.runtime.getLayerByName(i)) ? t.set_float(n.canvasToLayer(this.touches[e].x, this.touches[e].y, !0)) : t.set_float(0)
    }
    ,
    _.prototype.XForID = function(t, e, i) {
        var n = this.findTouch(e);
        if (n < 0)
            t.set_float(0);
        else {
            var r, s, o, a, h, c = this.touches[n];
            cr.is_undefined(i) ? (s = (r = this.runtime.getLayerByNumber(0)).scale,
            o = r.zoomRate,
            a = r.parallaxX,
            h = r.angle,
            r.scale = 1,
            r.zoomRate = 1,
            r.parallaxX = 1,
            r.angle = 0,
            t.set_float(r.canvasToLayer(c.x, c.y, !0)),
            r.scale = s,
            r.zoomRate = o,
            r.parallaxX = a,
            r.angle = h) : (r = cr.is_number(i) ? this.runtime.getLayerByNumber(i) : this.runtime.getLayerByName(i)) ? t.set_float(r.canvasToLayer(c.x, c.y, !0)) : t.set_float(0)
        }
    }
    ,
    _.prototype.Y = function(t, e) {
        var i, n, r, s, o, a = this.getTouchIndex;
        a < 0 || a >= this.touches.length ? t.set_float(0) : cr.is_undefined(e) ? (n = (i = this.runtime.getLayerByNumber(0)).scale,
        r = i.zoomRate,
        s = i.parallaxY,
        o = i.angle,
        i.scale = 1,
        i.zoomRate = 1,
        i.parallaxY = 1,
        i.angle = 0,
        t.set_float(i.canvasToLayer(this.touches[a].x, this.touches[a].y, !1)),
        i.scale = n,
        i.zoomRate = r,
        i.parallaxY = s,
        i.angle = o) : (i = cr.is_number(e) ? this.runtime.getLayerByNumber(e) : this.runtime.getLayerByName(e)) ? t.set_float(i.canvasToLayer(this.touches[a].x, this.touches[a].y, !1)) : t.set_float(0)
    }
    ,
    _.prototype.YAt = function(t, e, i) {
        var n, r, s, o, a;
        (e = Math.floor(e)) < 0 || e >= this.touches.length ? t.set_float(0) : cr.is_undefined(i) ? (r = (n = this.runtime.getLayerByNumber(0)).scale,
        s = n.zoomRate,
        o = n.parallaxY,
        a = n.angle,
        n.scale = 1,
        n.zoomRate = 1,
        n.parallaxY = 1,
        n.angle = 0,
        t.set_float(n.canvasToLayer(this.touches[e].x, this.touches[e].y, !1)),
        n.scale = r,
        n.zoomRate = s,
        n.parallaxY = o,
        n.angle = a) : (n = cr.is_number(i) ? this.runtime.getLayerByNumber(i) : this.runtime.getLayerByName(i)) ? t.set_float(n.canvasToLayer(this.touches[e].x, this.touches[e].y, !1)) : t.set_float(0)
    }
    ,
    _.prototype.YForID = function(t, e, i) {
        var n = this.findTouch(e);
        if (n < 0)
            t.set_float(0);
        else {
            var r, s, o, a, h, c = this.touches[n];
            cr.is_undefined(i) ? (s = (r = this.runtime.getLayerByNumber(0)).scale,
            o = r.zoomRate,
            a = r.parallaxY,
            h = r.angle,
            r.scale = 1,
            r.zoomRate = 1,
            r.parallaxY = 1,
            r.angle = 0,
            t.set_float(r.canvasToLayer(c.x, c.y, !1)),
            r.scale = s,
            r.zoomRate = o,
            r.parallaxY = a,
            r.angle = h) : (r = cr.is_number(i) ? this.runtime.getLayerByNumber(i) : this.runtime.getLayerByName(i)) ? t.set_float(r.canvasToLayer(c.x, c.y, !1)) : t.set_float(0)
        }
    }
    ,
    _.prototype.AbsoluteX = function(t) {
        this.touches.length ? t.set_float(this.touches[0].x) : t.set_float(0)
    }
    ,
    _.prototype.AbsoluteXAt = function(t, e) {
        (e = Math.floor(e)) < 0 || e >= this.touches.length ? t.set_float(0) : t.set_float(this.touches[e].x)
    }
    ,
    _.prototype.AbsoluteXForID = function(t, e) {
        var i = this.findTouch(e);
        if (i < 0)
            t.set_float(0);
        else {
            var n = this.touches[i];
            t.set_float(n.x)
        }
    }
    ,
    _.prototype.AbsoluteY = function(t) {
        this.touches.length ? t.set_float(this.touches[0].y) : t.set_float(0)
    }
    ,
    _.prototype.AbsoluteYAt = function(t, e) {
        (e = Math.floor(e)) < 0 || e >= this.touches.length ? t.set_float(0) : t.set_float(this.touches[e].y)
    }
    ,
    _.prototype.AbsoluteYForID = function(t, e) {
        var i = this.findTouch(e);
        if (i < 0)
            t.set_float(0);
        else {
            var n = this.touches[i];
            t.set_float(n.y)
        }
    }
    ,
    _.prototype.SpeedAt = function(t, e) {
        if ((e = Math.floor(e)) < 0 || e >= this.touches.length)
            t.set_float(0);
        else {
            var i = this.touches[e]
              , n = cr.distanceTo(i.x, i.y, i.lastx, i.lasty)
              , r = (i.time - i.lasttime) / 1e3;
            r <= 0 ? t.set_float(0) : t.set_float(n / r)
        }
    }
    ,
    _.prototype.SpeedForID = function(t, e) {
        var i = this.findTouch(e);
        if (i < 0)
            t.set_float(0);
        else {
            var n = this.touches[i]
              , r = cr.distanceTo(n.x, n.y, n.lastx, n.lasty)
              , s = (n.time - n.lasttime) / 1e3;
            s <= 0 ? t.set_float(0) : t.set_float(r / s)
        }
    }
    ,
    _.prototype.AngleAt = function(t, e) {
        if ((e = Math.floor(e)) < 0 || e >= this.touches.length)
            t.set_float(0);
        else {
            var i = this.touches[e];
            t.set_float(cr.to_degrees(cr.angleTo(i.lastx, i.lasty, i.x, i.y)))
        }
    }
    ,
    _.prototype.AngleForID = function(t, e) {
        var i = this.findTouch(e);
        if (i < 0)
            t.set_float(0);
        else {
            var n = this.touches[i];
            t.set_float(cr.to_degrees(cr.angleTo(n.lastx, n.lasty, n.x, n.y)))
        }
    }
    ,
    _.prototype.Alpha = function(t) {
        t.set_float(this.getAlpha())
    }
    ,
    _.prototype.Beta = function(t) {
        t.set_float(this.getBeta())
    }
    ,
    _.prototype.Gamma = function(t) {
        t.set_float(this.getGamma())
    }
    ,
    _.prototype.AccelerationXWithG = function(t) {
        t.set_float(this.acc_g_x)
    }
    ,
    _.prototype.AccelerationYWithG = function(t) {
        t.set_float(this.acc_g_y)
    }
    ,
    _.prototype.AccelerationZWithG = function(t) {
        t.set_float(this.acc_g_z)
    }
    ,
    _.prototype.AccelerationX = function(t) {
        t.set_float(this.acc_x)
    }
    ,
    _.prototype.AccelerationY = function(t) {
        t.set_float(this.acc_y)
    }
    ,
    _.prototype.AccelerationZ = function(t) {
        t.set_float(this.acc_z)
    }
    ,
    _.prototype.TouchIndex = function(t) {
        t.set_int(this.trigger_index)
    }
    ,
    _.prototype.TouchID = function(t) {
        t.set_float(this.trigger_id)
    }
    ,
    _.prototype.WidthForID = function(t, e) {
        var i = this.findTouch(e);
        if (i < 0)
            t.set_float(0);
        else {
            var n = this.touches[i];
            t.set_float(n.width)
        }
    }
    ,
    _.prototype.HeightForID = function(t, e) {
        var i = this.findTouch(e);
        if (i < 0)
            t.set_float(0);
        else {
            var n = this.touches[i];
            t.set_float(n.height)
        }
    }
    ,
    _.prototype.PressureForID = function(t, e) {
        var i = this.findTouch(e);
        if (i < 0)
            t.set_float(0);
        else {
            var n = this.touches[i];
            t.set_float(n.pressure)
        }
    }
    ,
    t.exps = new _
}(),
cr.behaviors.Anchor = function(t) {
    this.runtime = t
}
,
function() {
    var t = cr.behaviors.Anchor.prototype;
    t.Type = function(t, e) {
        this.behavior = t,
        this.objtype = e,
        this.runtime = t.runtime
    }
    ,
    t.Type.prototype.onCreate = function() {}
    ,
    t.Instance = function(t, e) {
        this.type = t,
        this.behavior = t.behavior,
        this.inst = e,
        this.runtime = t.runtime
    }
    ;
    var e = t.Instance.prototype;
    function i() {}
    e.onCreate = function() {
        this.anch_left = this.properties[0],
        this.anch_top = this.properties[1],
        this.anch_right = this.properties[2],
        this.anch_bottom = this.properties[3],
        this.inst.update_bbox(),
        this.xleft = this.inst.bbox.left,
        this.ytop = this.inst.bbox.top,
        this.xright = this.runtime.original_width - this.inst.bbox.left,
        this.ybottom = this.runtime.original_height - this.inst.bbox.top,
        this.rdiff = this.runtime.original_width - this.inst.bbox.right,
        this.bdiff = this.runtime.original_height - this.inst.bbox.bottom,
        this.enabled = 0 !== this.properties[4]
    }
    ,
    e.saveToJSON = function() {
        return {
            xleft: this.xleft,
            ytop: this.ytop,
            xright: this.xright,
            ybottom: this.ybottom,
            rdiff: this.rdiff,
            bdiff: this.bdiff,
            enabled: this.enabled
        }
    }
    ,
    e.loadFromJSON = function(t) {
        this.xleft = t.xleft,
        this.ytop = t.ytop,
        this.xright = t.xright,
        this.ybottom = t.ybottom,
        this.rdiff = t.rdiff,
        this.bdiff = t.bdiff,
        this.enabled = t.enabled
    }
    ,
    e.tick = function() {
        if (this.enabled) {
            var t, e = this.inst.layer, i = this.inst, n = this.inst.bbox;
            0 === this.anch_left ? (i.update_bbox(),
            0 !== (t = e.viewLeft + this.xleft - n.left) && (i.x += t,
            i.set_bbox_changed())) : 1 === this.anch_left && (i.update_bbox(),
            0 !== (t = e.viewRight - this.xright - n.left) && (i.x += t,
            i.set_bbox_changed())),
            0 === this.anch_top ? (i.update_bbox(),
            0 !== (t = e.viewTop + this.ytop - n.top) && (i.y += t,
            i.set_bbox_changed())) : 1 === this.anch_top && (i.update_bbox(),
            0 !== (t = e.viewBottom - this.ybottom - n.top) && (i.y += t,
            i.set_bbox_changed())),
            1 === this.anch_right && (i.update_bbox(),
            0 !== (t = e.viewRight - this.rdiff - n.right) && (i.width += t,
            i.width < 0 && (i.width = 0),
            i.set_bbox_changed())),
            1 === this.anch_bottom && (i.update_bbox(),
            0 !== (t = e.viewBottom - this.bdiff - n.bottom) && (i.height += t,
            i.height < 0 && (i.height = 0),
            i.set_bbox_changed()))
        }
    }
    ,
    t.cnds = new function() {}
    ,
    i.prototype.SetEnabled = function(t) {
        this.enabled && 0 === t ? this.enabled = !1 : this.enabled || 0 === t || (this.inst.update_bbox(),
        this.xleft = this.inst.bbox.left,
        this.ytop = this.inst.bbox.top,
        this.xright = this.runtime.original_width - this.inst.bbox.left,
        this.ybottom = this.runtime.original_height - this.inst.bbox.top,
        this.rdiff = this.runtime.original_width - this.inst.bbox.right,
        this.bdiff = this.runtime.original_height - this.inst.bbox.bottom,
        this.enabled = !0)
    }
    ,
    t.acts = new i,
    t.exps = new function() {}
}(),
cr.behaviors.DragnDrop = function(t) {
    this.runtime = t;
    var e = this;
    this.runtime.isDomFree || (jQuery(document).mousemove((function(t) {
        e.onMouseMove(t)
    }
    )),
    jQuery(document).mousedown((function(t) {
        e.onMouseDown(t)
    }
    )),
    jQuery(document).mouseup((function(t) {
        e.onMouseUp(t)
    }
    )));
    var i = this.runtime.fullscreen_mode > 0 ? document : this.runtime.canvas;
    this.runtime.isDirectCanvas ? i = window.Canvas : this.runtime.isCocoonJs && (i = window),
    "undefined" != typeof PointerEvent ? (i.addEventListener("pointerdown", (function(t) {
        e.onPointerStart(t)
    }
    ), !1),
    i.addEventListener("pointermove", (function(t) {
        e.onPointerMove(t)
    }
    ), !1),
    i.addEventListener("pointerup", (function(t) {
        e.onPointerEnd(t)
    }
    ), !1),
    i.addEventListener("pointercancel", (function(t) {
        e.onPointerEnd(t)
    }
    ), !1)) : window.navigator.msPointerEnabled ? (i.addEventListener("MSPointerDown", (function(t) {
        e.onPointerStart(t)
    }
    ), !1),
    i.addEventListener("MSPointerMove", (function(t) {
        e.onPointerMove(t)
    }
    ), !1),
    i.addEventListener("MSPointerUp", (function(t) {
        e.onPointerEnd(t)
    }
    ), !1),
    i.addEventListener("MSPointerCancel", (function(t) {
        e.onPointerEnd(t)
    }
    ), !1)) : (i.addEventListener("touchstart", (function(t) {
        e.onTouchStart(t)
    }
    ), !1),
    i.addEventListener("touchmove", (function(t) {
        e.onTouchMove(t)
    }
    ), !1),
    i.addEventListener("touchend", (function(t) {
        e.onTouchEnd(t)
    }
    ), !1),
    i.addEventListener("touchcancel", (function(t) {
        e.onTouchEnd(t)
    }
    ), !1))
}
,
function() {
    var t = cr.behaviors.DragnDrop.prototype
      , e = {
        left: 0,
        top: 0
    };
    function i(e) {
        var i, n;
        for (i = 0,
        n = e.behavior_insts.length; i < n; i++)
            if (e.behavior_insts[i]instanceof t.Instance)
                return e.behavior_insts[i];
        return null
    }
    t.onMouseDown = function(t) {
        1 === t.which && this.onInputDown("leftmouse", t.pageX, t.pageY)
    }
    ,
    t.onMouseMove = function(t) {
        1 === t.which && this.onInputMove("leftmouse", t.pageX, t.pageY)
    }
    ,
    t.onMouseUp = function(t) {
        1 === t.which && this.onInputUp("leftmouse")
    }
    ,
    t.onTouchStart = function(t) {
        var e, i, n, r;
        for (t.preventDefault && cr.isCanvasInputEvent(t) && t.preventDefault(),
        e = 0,
        i = t.changedTouches.length; e < i; e++)
            r = (n = t.changedTouches[e]).identifier,
            this.onInputDown(r ? r.toString() : "<none>", n.pageX, n.pageY)
    }
    ,
    t.onTouchMove = function(t) {
        var e, i, n, r;
        for (t.preventDefault && t.preventDefault(),
        e = 0,
        i = t.changedTouches.length; e < i; e++)
            r = (n = t.changedTouches[e]).identifier,
            this.onInputMove(r ? r.toString() : "<none>", n.pageX, n.pageY)
    }
    ,
    t.onTouchEnd = function(t) {
        var e, i, n;
        for (t.preventDefault && cr.isCanvasInputEvent(t) && t.preventDefault(),
        e = 0,
        i = t.changedTouches.length; e < i; e++)
            n = t.changedTouches[e].identifier,
            this.onInputUp(n ? n.toString() : "<none>")
    }
    ,
    t.onPointerStart = function(t) {
        t.pointerType !== t.MSPOINTER_TYPE_MOUSE && "mouse" !== t.pointerType && (t.preventDefault && cr.isCanvasInputEvent(t) && t.preventDefault(),
        this.onInputDown(t.pointerId.toString(), t.pageX, t.pageY))
    }
    ,
    t.onPointerMove = function(t) {
        t.pointerType !== t.MSPOINTER_TYPE_MOUSE && "mouse" !== t.pointerType && (t.preventDefault && t.preventDefault(),
        this.onInputMove(t.pointerId.toString(), t.pageX, t.pageY))
    }
    ,
    t.onPointerEnd = function(t) {
        t.pointerType !== t.MSPOINTER_TYPE_MOUSE && "mouse" !== t.pointerType && (t.preventDefault && cr.isCanvasInputEvent(t) && t.preventDefault(),
        this.onInputUp(t.pointerId.toString()))
    }
    ,
    t.onInputDown = function(t, n, r) {
        var s, o, a, h, c, l, u, p, d = this.runtime.isDomFree ? e : jQuery(this.runtime.canvas).offset(), f = n - d.left, g = r - d.top, y = this.my_instances.valuesRef(), m = null;
        for (c = 0,
        l = y.length; c < l; c++)
            (u = i(p = y[c])).enabled && !u.dragging && (s = p.layer.canvasToLayer(f, g, !0),
            o = p.layer.canvasToLayer(f, g, !1),
            p.update_bbox(),
            p.contains_pt(s, o) && (m ? p.layer.index > m.layer.index ? (m = p,
            a = s,
            h = o) : p.layer.index === m.layer.index && p.get_zindex() > m.get_zindex() && (m = p,
            a = s,
            h = o) : (m = p,
            a = s,
            h = o)));
        m && i(m).onDown(t, a, h)
    }
    ,
    t.onInputMove = function(t, n, r) {
        var s, o, a, h, c, l, u = this.runtime.isDomFree ? e : jQuery(this.runtime.canvas).offset(), p = n - u.left, d = r - u.top, f = this.my_instances.valuesRef();
        for (a = 0,
        h = f.length; a < h; a++)
            !(c = i(l = f[a])).enabled || !c.dragging || c.dragging && c.dragsource !== t || (s = l.layer.canvasToLayer(p, d, !0),
            o = l.layer.canvasToLayer(p, d, !1),
            c.onMove(s, o))
    }
    ,
    t.onInputUp = function(t) {
        var e, n, r, s = this.my_instances.valuesRef();
        for (e = 0,
        n = s.length; e < n; e++)
            (r = i(s[e])).dragging && r.dragsource === t && r.onUp()
    }
    ,
    t.Type = function(t, e) {
        this.behavior = t,
        this.objtype = e,
        this.runtime = t.runtime
    }
    ,
    t.Type.prototype.onCreate = function() {}
    ,
    t.Instance = function(t, e) {
        this.type = t,
        this.behavior = t.behavior,
        this.inst = e,
        this.runtime = t.runtime
    }
    ;
    var n = t.Instance.prototype;
    function r() {}
    function s() {}
    n.onCreate = function() {
        this.dragging = !1,
        this.dx = 0,
        this.dy = 0,
        this.dragsource = "<none>",
        this.axes = this.properties[0],
        this.enabled = 0 !== this.properties[1]
    }
    ,
    n.saveToJSON = function() {
        return {
            enabled: this.enabled
        }
    }
    ,
    n.loadFromJSON = function(t) {
        this.enabled = t.enabled,
        this.dragging = !1
    }
    ,
    n.onDown = function(t, e, i) {
        this.dx = e - this.inst.x,
        this.dy = i - this.inst.y,
        this.dragging = !0,
        this.dragsource = t,
        this.runtime.isInUserInputEvent = !0,
        this.runtime.trigger(cr.behaviors.DragnDrop.prototype.cnds.OnDragStart, this.inst),
        this.runtime.isInUserInputEvent = !1
    }
    ,
    n.onMove = function(t, e) {
        var i = t - this.dx
          , n = e - this.dy;
        0 === this.axes ? this.inst.x === i && this.inst.y === n || (this.inst.x = i,
        this.inst.y = n,
        this.inst.set_bbox_changed()) : 1 === this.axes ? this.inst.x !== i && (this.inst.x = i,
        this.inst.set_bbox_changed()) : 2 === this.axes && this.inst.y !== n && (this.inst.y = n,
        this.inst.set_bbox_changed())
    }
    ,
    n.onUp = function() {
        this.dragging = !1,
        this.runtime.isInUserInputEvent = !0,
        this.runtime.trigger(cr.behaviors.DragnDrop.prototype.cnds.OnDrop, this.inst),
        this.runtime.isInUserInputEvent = !1
    }
    ,
    n.tick = function() {}
    ,
    r.prototype.IsDragging = function() {
        return this.dragging
    }
    ,
    r.prototype.OnDragStart = function() {
        return !0
    }
    ,
    r.prototype.OnDrop = function() {
        return !0
    }
    ,
    r.prototype.IsEnabled = function() {
        return !!this.enabled
    }
    ,
    t.cnds = new r,
    s.prototype.SetEnabled = function(t) {
        this.enabled = 0 !== t,
        this.enabled || (this.dragging = !1)
    }
    ,
    s.prototype.Drop = function() {
        this.dragging && this.onUp()
    }
    ,
    t.acts = new s,
    t.exps = new function() {}
}(),
cr.behaviors.Pin = function(t) {
    this.runtime = t
}
,
function() {
    var t = cr.behaviors.Pin.prototype;
    t.Type = function(t, e) {
        this.behavior = t,
        this.objtype = e,
        this.runtime = t.runtime
    }
    ,
    t.Type.prototype.onCreate = function() {}
    ,
    t.Instance = function(t, e) {
        this.type = t,
        this.behavior = t.behavior,
        this.inst = e,
        this.runtime = t.runtime
    }
    ;
    var e = t.Instance.prototype;
    function i() {}
    function n() {}
    function r() {}
    e.onCreate = function() {
        this.pinObject = null,
        this.pinObjectUid = -1,
        this.pinAngle = 0,
        this.pinDist = 0,
        this.myStartAngle = 0,
        this.theirStartAngle = 0,
        this.lastKnownAngle = 0,
        this.mode = 0;
        var t = this;
        this.recycled || (this.myDestroyCallback = function(e) {
            t.onInstanceDestroyed(e)
        }
        ),
        this.runtime.addDestroyCallback(this.myDestroyCallback)
    }
    ,
    e.saveToJSON = function() {
        return {
            uid: this.pinObject ? this.pinObject.uid : -1,
            pa: this.pinAngle,
            pd: this.pinDist,
            msa: this.myStartAngle,
            tsa: this.theirStartAngle,
            lka: this.lastKnownAngle,
            m: this.mode
        }
    }
    ,
    e.loadFromJSON = function(t) {
        this.pinObjectUid = t.uid,
        this.pinAngle = t.pa,
        this.pinDist = t.pd,
        this.myStartAngle = t.msa,
        this.theirStartAngle = t.tsa,
        this.lastKnownAngle = t.lka,
        this.mode = t.m
    }
    ,
    e.afterLoad = function() {
        -1 === this.pinObjectUid ? this.pinObject = null : this.pinObject = this.runtime.getObjectByUID(this.pinObjectUid),
        this.pinObjectUid = -1
    }
    ,
    e.onInstanceDestroyed = function(t) {
        this.pinObject == t && (this.pinObject = null)
    }
    ,
    e.onDestroy = function() {
        this.pinObject = null,
        this.runtime.removeDestroyCallback(this.myDestroyCallback)
    }
    ,
    e.tick = function() {}
    ,
    e.tick2 = function() {
        if (this.pinObject) {
            this.lastKnownAngle !== this.inst.angle && (this.myStartAngle = cr.clamp_angle(this.myStartAngle + (this.inst.angle - this.lastKnownAngle)));
            var t = this.inst.x
              , e = this.inst.y;
            if (3 === this.mode || 4 === this.mode) {
                var i = cr.distanceTo(this.inst.x, this.inst.y, this.pinObject.x, this.pinObject.y);
                if (i > this.pinDist || 4 === this.mode && i < this.pinDist) {
                    var n = cr.angleTo(this.pinObject.x, this.pinObject.y, this.inst.x, this.inst.y);
                    t = this.pinObject.x + Math.cos(n) * this.pinDist,
                    e = this.pinObject.y + Math.sin(n) * this.pinDist
                }
            } else
                t = this.pinObject.x + Math.cos(this.pinObject.angle + this.pinAngle) * this.pinDist,
                e = this.pinObject.y + Math.sin(this.pinObject.angle + this.pinAngle) * this.pinDist;
            var r = cr.clamp_angle(this.myStartAngle + (this.pinObject.angle - this.theirStartAngle));
            this.lastKnownAngle = r,
            0 !== this.mode && 1 !== this.mode && 3 !== this.mode && 4 !== this.mode || this.inst.x === t && this.inst.y === e || (this.inst.x = t,
            this.inst.y = e,
            this.inst.set_bbox_changed()),
            0 !== this.mode && 2 !== this.mode || this.inst.angle === r || (this.inst.angle = r,
            this.inst.set_bbox_changed())
        }
    }
    ,
    i.prototype.IsPinned = function() {
        return !!this.pinObject
    }
    ,
    t.cnds = new i,
    n.prototype.Pin = function(t, e) {
        if (t) {
            var i = t.getFirstPicked(this.inst);
            i && (this.pinObject = i,
            this.pinAngle = cr.angleTo(i.x, i.y, this.inst.x, this.inst.y) - i.angle,
            this.pinDist = cr.distanceTo(i.x, i.y, this.inst.x, this.inst.y),
            this.myStartAngle = this.inst.angle,
            this.lastKnownAngle = this.inst.angle,
            this.theirStartAngle = i.angle,
            this.mode = e)
        }
    }
    ,
    n.prototype.Unpin = function() {
        this.pinObject = null
    }
    ,
    t.acts = new n,
    r.prototype.PinnedUID = function(t) {
        t.set_int(this.pinObject ? this.pinObject.uid : -1)
    }
    ,
    t.exps = new r
}(),
cr.getObjectRefTable = function() {
    return [cr.plugins_.Audio, cr.plugins_.Button, cr.plugins_.Browser, cr.plugins_.Dictionary, cr.plugins_.Function, cr.plugins_.Keyboard, cr.plugins_.Touch, cr.plugins_.Text, cr.plugins_.Rex_audio_helper, cr.plugins_.Sprite, cr.behaviors.Anchor, cr.behaviors.DragnDrop, cr.behaviors.Pin, cr.system_object.prototype.cnds.EveryTick, cr.system_object.prototype.cnds.Compare, cr.system_object.prototype.exps.tickcount, cr.system_object.prototype.cnds.IsPreview, cr.plugins_.Text.prototype.acts.SetText, cr.system_object.prototype.exps.windowwidth, cr.system_object.prototype.exps.windowheight, cr.system_object.prototype.exps.layoutwidth, cr.system_object.prototype.exps.layoutheight, cr.system_object.prototype.exps.layerscale, cr.system_object.prototype.cnds.Else, cr.plugins_.Text.prototype.acts.Destroy, cr.plugins_.Browser.prototype.cnds.OnResize, cr.system_object.prototype.acts.Wait, cr.plugins_.Function.prototype.acts.CallFunction, cr.plugins_.Function.prototype.cnds.OnFunction, cr.plugins_.Function.prototype.exps.ParamCount, cr.system_object.prototype.cnds.IsValueType, cr.plugins_.Function.prototype.exps.Param, cr.system_object.prototype.cnds.CompareBetween, cr.system_object.prototype.acts.SetVar, cr.system_object.prototype.acts.AddVar, cr.system_object.prototype.acts.SubVar, cr.system_object.prototype.cnds.CompareVar, cr.system_object.prototype.cnds.PickAll, cr.plugins_.Sprite.prototype.acts.SetOpacity, cr.plugins_.Sprite.prototype.cnds.CompareInstanceVar, cr.behaviors.Pin.prototype.acts.Unpin, cr.plugins_.Sprite.prototype.acts.SetPosToObject, cr.behaviors.Pin.prototype.acts.Pin, cr.system_object.prototype.exps.round, cr.system_object.prototype.exps.min, cr.system_object.prototype.exps.max, cr.system_object.prototype.acts.SetLayerScale, cr.plugins_.Sprite.prototype.acts.SetX, cr.system_object.prototype.cnds.IsMobile, cr.plugins_.Sprite.prototype.acts.SetVisible, cr.plugins_.Sprite.prototype.exps.X, cr.plugins_.Sprite.prototype.exps.Width, cr.plugins_.Dictionary.prototype.exps.KeyCount, cr.plugins_.Dictionary.prototype.acts.JSONLoad, cr.plugins_.Sprite.prototype.acts.SetAnim, cr.plugins_.Dictionary.prototype.exps.Get, cr.system_object.prototype.cnds.IsGroupActive, cr.plugins_.Sprite.prototype.cnds.OnCreated, cr.plugins_.Sprite.prototype.exps.UID, cr.plugins_.Dictionary.prototype.cnds.IsEmpty, cr.plugins_.Dictionary.prototype.acts.AddKey, cr.plugins_.Sprite.prototype.cnds.PickByUID, cr.plugins_.Function.prototype.cnds.CompareParam, cr.plugins_.Dictionary.prototype.cnds.HasKey, cr.plugins_.Sprite.prototype.acts.SetInstanceVar, cr.plugins_.Sprite.prototype.exps.AnimationName, cr.plugins_.Function.prototype.exps.ReturnValue, cr.system_object.prototype.cnds.PickByComparison, cr.behaviors.Pin.prototype.exps.PinnedUID, cr.plugins_.Touch.prototype.cnds.IsTouchingObject, cr.plugins_.Keyboard.prototype.cnds.IsKeyCodeDown, cr.plugins_.Audio.prototype.exps.PlaybackTime, cr.plugins_.Audio.prototype.exps.Duration, cr.system_object.prototype.cnds.ForEach, cr.plugins_.Touch.prototype.cnds.OnTouchObject, cr.plugins_.Keyboard.prototype.cnds.OnAnyKey, cr.system_object.prototype.exps.str, cr.plugins_.Keyboard.prototype.exps.LastKeyCode, cr.system_object.prototype.exps.int, cr.system_object.prototype.exps.right, cr.system_object.prototype.exps.len, cr.system_object.prototype.exps.left, cr.system_object.prototype.cnds.PickByEvaluate, cr.plugins_.Keyboard.prototype.cnds.OnKey, cr.plugins_.Touch.prototype.cnds.OnTapGestureObject, cr.plugins_.Audio.prototype.acts.PlayByName, cr.plugins_.Audio.prototype.acts.SetPlaybackRate, cr.plugins_.Function.prototype.acts.SetReturnValue, cr.plugins_.Audio.prototype.acts.Stop, cr.plugins_.Rex_audio_helper.prototype.acts.Stop, cr.system_object.prototype.cnds.OnLayoutStart, cr.plugins_.Browser.prototype.exps.Language, cr.plugins_.Browser.prototype.acts.ExecJs]
}
;
