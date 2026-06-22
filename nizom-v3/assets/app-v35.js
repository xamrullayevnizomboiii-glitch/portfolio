(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const s of i)
      if (s.type === "childList")
        for (const o of s.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const s = {};
    return (
      i.integrity && (s.integrity = i.integrity),
      i.referrerPolicy && (s.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (s.credentials = "include")
        : i.crossOrigin === "anonymous"
          ? (s.credentials = "omit")
          : (s.credentials = "same-origin"),
      s
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const s = n(i);
    fetch(i.href, s);
  }
})();
function Lg(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Cd = { exports: {} },
  zs = {},
  Ed = { exports: {} },
  N = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ri = Symbol.for("react.element"),
  Rg = Symbol.for("react.portal"),
  Vg = Symbol.for("react.fragment"),
  jg = Symbol.for("react.strict_mode"),
  Ig = Symbol.for("react.profiler"),
  Ng = Symbol.for("react.provider"),
  _g = Symbol.for("react.context"),
  zg = Symbol.for("react.forward_ref"),
  Fg = Symbol.for("react.suspense"),
  Og = Symbol.for("react.memo"),
  Bg = Symbol.for("react.lazy"),
  Hu = Symbol.iterator;
function Wg(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Hu && e[Hu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Pd = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Ad = Object.assign,
  Md = {};
function nr(e, t, n) {
  ((this.props = e),
    (this.context = t),
    (this.refs = Md),
    (this.updater = n || Pd));
}
nr.prototype.isReactComponent = {};
nr.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
nr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Dd() {}
Dd.prototype = nr.prototype;
function ya(e, t, n) {
  ((this.props = e),
    (this.context = t),
    (this.refs = Md),
    (this.updater = n || Pd));
}
var va = (ya.prototype = new Dd());
va.constructor = ya;
Ad(va, nr.prototype);
va.isPureReactComponent = !0;
var Ku = Array.isArray,
  Ld = Object.prototype.hasOwnProperty,
  xa = { current: null },
  Rd = { key: !0, ref: !0, __self: !0, __source: !0 };
function Vd(e, t, n) {
  var r,
    i = {},
    s = null,
    o = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (o = t.ref),
    t.key !== void 0 && (s = "" + t.key),
    t))
      Ld.call(t, r) && !Rd.hasOwnProperty(r) && (i[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1) i.children = n;
  else if (1 < l) {
    for (var a = Array(l), u = 0; u < l; u++) a[u] = arguments[u + 2];
    i.children = a;
  }
  if (e && e.defaultProps)
    for (r in ((l = e.defaultProps), l)) i[r] === void 0 && (i[r] = l[r]);
  return {
    $$typeof: ri,
    type: e,
    key: s,
    ref: o,
    props: i,
    _owner: xa.current,
  };
}
function Ug(e, t) {
  return {
    $$typeof: ri,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function wa(e) {
  return typeof e == "object" && e !== null && e.$$typeof === ri;
}
function $g(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Gu = /\/+/g;
function io(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? $g("" + e.key)
    : t.toString(36);
}
function zi(e, t, n, r, i) {
  var s = typeof e;
  (s === "undefined" || s === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (s) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case ri:
          case Rg:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (i = i(o)),
      (e = r === "" ? "." + io(o, 0) : r),
      Ku(i)
        ? ((n = ""),
          e != null && (n = e.replace(Gu, "$&/") + "/"),
          zi(i, t, n, "", function (u) {
            return u;
          }))
        : i != null &&
          (wa(i) &&
            (i = Ug(
              i,
              n +
                (!i.key || (o && o.key === i.key)
                  ? ""
                  : ("" + i.key).replace(Gu, "$&/") + "/") +
                e,
            )),
          t.push(i)),
      1
    );
  if (((o = 0), (r = r === "" ? "." : r + ":"), Ku(e)))
    for (var l = 0; l < e.length; l++) {
      s = e[l];
      var a = r + io(s, l);
      o += zi(s, t, n, a, i);
    }
  else if (((a = Wg(e)), typeof a == "function"))
    for (e = a.call(e), l = 0; !(s = e.next()).done; )
      ((s = s.value), (a = r + io(s, l++)), (o += zi(s, t, n, a, i)));
  else if (s === "object")
    throw (
      (t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead.",
      )
    );
  return o;
}
function mi(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    zi(e, r, "", "", function (s) {
      return t.call(n, s, i++);
    }),
    r
  );
}
function Hg(e) {
  if (e._status === -1) {
    var t = e._result;
    ((t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        },
      ),
      e._status === -1 && ((e._status = 0), (e._result = t)));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var we = { current: null },
  Fi = { transition: null },
  Kg = {
    ReactCurrentDispatcher: we,
    ReactCurrentBatchConfig: Fi,
    ReactCurrentOwner: xa,
  };
function jd() {
  throw Error("act(...) is not supported in production builds of React.");
}
N.Children = {
  map: mi,
  forEach: function (e, t, n) {
    mi(
      e,
      function () {
        t.apply(this, arguments);
      },
      n,
    );
  },
  count: function (e) {
    var t = 0;
    return (
      mi(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      mi(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!wa(e))
      throw Error(
        "React.Children.only expected to receive a single React element child.",
      );
    return e;
  },
};
N.Component = nr;
N.Fragment = Vg;
N.Profiler = Ig;
N.PureComponent = ya;
N.StrictMode = jg;
N.Suspense = Fg;
N.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Kg;
N.act = jd;
N.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        ".",
    );
  var r = Ad({}, e.props),
    i = e.key,
    s = e.ref,
    o = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((s = t.ref), (o = xa.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var l = e.type.defaultProps;
    for (a in t)
      Ld.call(t, a) &&
        !Rd.hasOwnProperty(a) &&
        (r[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    l = Array(a);
    for (var u = 0; u < a; u++) l[u] = arguments[u + 2];
    r.children = l;
  }
  return { $$typeof: ri, type: e.type, key: i, ref: s, props: r, _owner: o };
};
N.createContext = function (e) {
  return (
    (e = {
      $$typeof: _g,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Ng, _context: e }),
    (e.Consumer = e)
  );
};
N.createElement = Vd;
N.createFactory = function (e) {
  var t = Vd.bind(null, e);
  return ((t.type = e), t);
};
N.createRef = function () {
  return { current: null };
};
N.forwardRef = function (e) {
  return { $$typeof: zg, render: e };
};
N.isValidElement = wa;
N.lazy = function (e) {
  return { $$typeof: Bg, _payload: { _status: -1, _result: e }, _init: Hg };
};
N.memo = function (e, t) {
  return { $$typeof: Og, type: e, compare: t === void 0 ? null : t };
};
N.startTransition = function (e) {
  var t = Fi.transition;
  Fi.transition = {};
  try {
    e();
  } finally {
    Fi.transition = t;
  }
};
N.unstable_act = jd;
N.useCallback = function (e, t) {
  return we.current.useCallback(e, t);
};
N.useContext = function (e) {
  return we.current.useContext(e);
};
N.useDebugValue = function () {};
N.useDeferredValue = function (e) {
  return we.current.useDeferredValue(e);
};
N.useEffect = function (e, t) {
  return we.current.useEffect(e, t);
};
N.useId = function () {
  return we.current.useId();
};
N.useImperativeHandle = function (e, t, n) {
  return we.current.useImperativeHandle(e, t, n);
};
N.useInsertionEffect = function (e, t) {
  return we.current.useInsertionEffect(e, t);
};
N.useLayoutEffect = function (e, t) {
  return we.current.useLayoutEffect(e, t);
};
N.useMemo = function (e, t) {
  return we.current.useMemo(e, t);
};
N.useReducer = function (e, t, n) {
  return we.current.useReducer(e, t, n);
};
N.useRef = function (e) {
  return we.current.useRef(e);
};
N.useState = function (e) {
  return we.current.useState(e);
};
N.useSyncExternalStore = function (e, t, n) {
  return we.current.useSyncExternalStore(e, t, n);
};
N.useTransition = function () {
  return we.current.useTransition();
};
N.version = "18.3.1";
Ed.exports = N;
var L = Ed.exports;
const Id = Lg(L);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Gg = L,
  Xg = Symbol.for("react.element"),
  Yg = Symbol.for("react.fragment"),
  Qg = Object.prototype.hasOwnProperty,
  bg = Gg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Zg = { key: !0, ref: !0, __self: !0, __source: !0 };
function Nd(e, t, n) {
  var r,
    i = {},
    s = null,
    o = null;
  (n !== void 0 && (s = "" + n),
    t.key !== void 0 && (s = "" + t.key),
    t.ref !== void 0 && (o = t.ref));
  for (r in t) Qg.call(t, r) && !Zg.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: Xg,
    type: e,
    key: s,
    ref: o,
    props: i,
    _owner: bg.current,
  };
}
zs.Fragment = Yg;
zs.jsx = Nd;
zs.jsxs = Nd;
Cd.exports = zs;
var T = Cd.exports,
  Zo = {},
  _d = { exports: {} },
  ze = {},
  zd = { exports: {} },
  Fd = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(A, V) {
    var j = A.length;
    A.push(V);
    e: for (; 0 < j; ) {
      var B = (j - 1) >>> 1,
        J = A[B];
      if (0 < i(J, V)) ((A[B] = V), (A[j] = J), (j = B));
      else break e;
    }
  }
  function n(A) {
    return A.length === 0 ? null : A[0];
  }
  function r(A) {
    if (A.length === 0) return null;
    var V = A[0],
      j = A.pop();
    if (j !== V) {
      A[0] = j;
      e: for (var B = 0, J = A.length, hi = J >>> 1; B < hi; ) {
        var Zt = 2 * (B + 1) - 1,
          ro = A[Zt],
          qt = Zt + 1,
          pi = A[qt];
        if (0 > i(ro, j))
          qt < J && 0 > i(pi, ro)
            ? ((A[B] = pi), (A[qt] = j), (B = qt))
            : ((A[B] = ro), (A[Zt] = j), (B = Zt));
        else if (qt < J && 0 > i(pi, j)) ((A[B] = pi), (A[qt] = j), (B = qt));
        else break e;
      }
    }
    return V;
  }
  function i(A, V) {
    var j = A.sortIndex - V.sortIndex;
    return j !== 0 ? j : A.id - V.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var s = performance;
    e.unstable_now = function () {
      return s.now();
    };
  } else {
    var o = Date,
      l = o.now();
    e.unstable_now = function () {
      return o.now() - l;
    };
  }
  var a = [],
    u = [],
    c = 1,
    f = null,
    d = 3,
    g = !1,
    y = !1,
    v = !1,
    w = typeof setTimeout == "function" ? setTimeout : null,
    p = typeof clearTimeout == "function" ? clearTimeout : null,
    h = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function m(A) {
    for (var V = n(u); V !== null; ) {
      if (V.callback === null) r(u);
      else if (V.startTime <= A)
        (r(u), (V.sortIndex = V.expirationTime), t(a, V));
      else break;
      V = n(u);
    }
  }
  function x(A) {
    if (((v = !1), m(A), !y))
      if (n(a) !== null) ((y = !0), Te(S));
      else {
        var V = n(u);
        V !== null && di(x, V.startTime - A);
      }
  }
  function S(A, V) {
    ((y = !1), v && ((v = !1), p(k), (k = -1)), (g = !0));
    var j = d;
    try {
      for (
        m(V), f = n(a);
        f !== null && (!(f.expirationTime > V) || (A && !F()));
      ) {
        var B = f.callback;
        if (typeof B == "function") {
          ((f.callback = null), (d = f.priorityLevel));
          var J = B(f.expirationTime <= V);
          ((V = e.unstable_now()),
            typeof J == "function" ? (f.callback = J) : f === n(a) && r(a),
            m(V));
        } else r(a);
        f = n(a);
      }
      if (f !== null) var hi = !0;
      else {
        var Zt = n(u);
        (Zt !== null && di(x, Zt.startTime - V), (hi = !1));
      }
      return hi;
    } finally {
      ((f = null), (d = j), (g = !1));
    }
  }
  var P = !1,
    E = null,
    k = -1,
    I = 5,
    M = -1;
  function F() {
    return !(e.unstable_now() - M < I);
  }
  function q() {
    if (E !== null) {
      var A = e.unstable_now();
      M = A;
      var V = !0;
      try {
        V = E(!0, A);
      } finally {
        V ? De() : ((P = !1), (E = null));
      }
    } else P = !1;
  }
  var De;
  if (typeof h == "function")
    De = function () {
      h(q);
    };
  else if (typeof MessageChannel < "u") {
    var Le = new MessageChannel(),
      Ye = Le.port2;
    ((Le.port1.onmessage = q),
      (De = function () {
        Ye.postMessage(null);
      }));
  } else
    De = function () {
      w(q, 0);
    };
  function Te(A) {
    ((E = A), P || ((P = !0), De()));
  }
  function di(A, V) {
    k = w(function () {
      A(e.unstable_now());
    }, V);
  }
  ((e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (A) {
      A.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      y || g || ((y = !0), Te(S));
    }),
    (e.unstable_forceFrameRate = function (A) {
      0 > A || 125 < A
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
          )
        : (I = 0 < A ? Math.floor(1e3 / A) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return d;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a);
    }),
    (e.unstable_next = function (A) {
      switch (d) {
        case 1:
        case 2:
        case 3:
          var V = 3;
          break;
        default:
          V = d;
      }
      var j = d;
      d = V;
      try {
        return A();
      } finally {
        d = j;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (A, V) {
      switch (A) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          A = 3;
      }
      var j = d;
      d = A;
      try {
        return V();
      } finally {
        d = j;
      }
    }),
    (e.unstable_scheduleCallback = function (A, V, j) {
      var B = e.unstable_now();
      switch (
        (typeof j == "object" && j !== null
          ? ((j = j.delay), (j = typeof j == "number" && 0 < j ? B + j : B))
          : (j = B),
        A)
      ) {
        case 1:
          var J = -1;
          break;
        case 2:
          J = 250;
          break;
        case 5:
          J = 1073741823;
          break;
        case 4:
          J = 1e4;
          break;
        default:
          J = 5e3;
      }
      return (
        (J = j + J),
        (A = {
          id: c++,
          callback: V,
          priorityLevel: A,
          startTime: j,
          expirationTime: J,
          sortIndex: -1,
        }),
        j > B
          ? ((A.sortIndex = j),
            t(u, A),
            n(a) === null &&
              A === n(u) &&
              (v ? (p(k), (k = -1)) : (v = !0), di(x, j - B)))
          : ((A.sortIndex = J), t(a, A), y || g || ((y = !0), Te(S))),
        A
      );
    }),
    (e.unstable_shouldYield = F),
    (e.unstable_wrapCallback = function (A) {
      var V = d;
      return function () {
        var j = d;
        d = V;
        try {
          return A.apply(this, arguments);
        } finally {
          d = j;
        }
      };
    }));
})(Fd);
zd.exports = Fd;
var qg = zd.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Jg = L,
  _e = qg;
function C(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Od = new Set(),
  zr = {};
function vn(e, t) {
  (Kn(e, t), Kn(e + "Capture", t));
}
function Kn(e, t) {
  for (zr[e] = t, e = 0; e < t.length; e++) Od.add(t[e]);
}
var Tt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  qo = Object.prototype.hasOwnProperty,
  ey =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Xu = {},
  Yu = {};
function ty(e) {
  return qo.call(Yu, e)
    ? !0
    : qo.call(Xu, e)
      ? !1
      : ey.test(e)
        ? (Yu[e] = !0)
        : ((Xu[e] = !0), !1);
}
function ny(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function ry(e, t, n, r) {
  if (t === null || typeof t > "u" || ny(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Se(e, t, n, r, i, s, o) {
  ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = s),
    (this.removeEmptyString = o));
}
var fe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    fe[e] = new Se(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  fe[t] = new Se(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  fe[e] = new Se(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  fe[e] = new Se(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    fe[e] = new Se(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  fe[e] = new Se(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  fe[e] = new Se(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  fe[e] = new Se(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  fe[e] = new Se(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Sa = /[\-:]([a-z])/g;
function Ta(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Sa, Ta);
    fe[t] = new Se(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Sa, Ta);
    fe[t] = new Se(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Sa, Ta);
  fe[t] = new Se(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  fe[e] = new Se(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
fe.xlinkHref = new Se(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1,
);
["src", "href", "action", "formAction"].forEach(function (e) {
  fe[e] = new Se(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function ka(e, t, n, r) {
  var i = fe.hasOwnProperty(t) ? fe[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (ry(t, n, i, r) && (n = null),
    r || i === null
      ? ty(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : i.mustUseProperty
        ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
        : ((t = i.attributeName),
          (r = i.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((i = i.type),
              (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Pt = Jg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  gi = Symbol.for("react.element"),
  kn = Symbol.for("react.portal"),
  Cn = Symbol.for("react.fragment"),
  Ca = Symbol.for("react.strict_mode"),
  Jo = Symbol.for("react.profiler"),
  Bd = Symbol.for("react.provider"),
  Wd = Symbol.for("react.context"),
  Ea = Symbol.for("react.forward_ref"),
  el = Symbol.for("react.suspense"),
  tl = Symbol.for("react.suspense_list"),
  Pa = Symbol.for("react.memo"),
  Dt = Symbol.for("react.lazy"),
  Ud = Symbol.for("react.offscreen"),
  Qu = Symbol.iterator;
function ar(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Qu && e[Qu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Y = Object.assign,
  so;
function yr(e) {
  if (so === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      so = (t && t[1]) || "";
    }
  return (
    `
` +
    so +
    e
  );
}
var oo = !1;
function lo(e, t) {
  if (!e || oo) return "";
  oo = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var i = u.stack.split(`
`),
          s = r.stack.split(`
`),
          o = i.length - 1,
          l = s.length - 1;
        1 <= o && 0 <= l && i[o] !== s[l];
      )
        l--;
      for (; 1 <= o && 0 <= l; o--, l--)
        if (i[o] !== s[l]) {
          if (o !== 1 || l !== 1)
            do
              if ((o--, l--, 0 > l || i[o] !== s[l])) {
                var a =
                  `
` + i[o].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    a.includes("<anonymous>") &&
                    (a = a.replace("<anonymous>", e.displayName)),
                  a
                );
              }
            while (1 <= o && 0 <= l);
          break;
        }
    }
  } finally {
    ((oo = !1), (Error.prepareStackTrace = n));
  }
  return (e = e ? e.displayName || e.name : "") ? yr(e) : "";
}
function iy(e) {
  switch (e.tag) {
    case 5:
      return yr(e.type);
    case 16:
      return yr("Lazy");
    case 13:
      return yr("Suspense");
    case 19:
      return yr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return ((e = lo(e.type, !1)), e);
    case 11:
      return ((e = lo(e.type.render, !1)), e);
    case 1:
      return ((e = lo(e.type, !0)), e);
    default:
      return "";
  }
}
function nl(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Cn:
      return "Fragment";
    case kn:
      return "Portal";
    case Jo:
      return "Profiler";
    case Ca:
      return "StrictMode";
    case el:
      return "Suspense";
    case tl:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Wd:
        return (e.displayName || "Context") + ".Consumer";
      case Bd:
        return (e._context.displayName || "Context") + ".Provider";
      case Ea:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Pa:
        return (
          (t = e.displayName || null),
          t !== null ? t : nl(e.type) || "Memo"
        );
      case Dt:
        ((t = e._payload), (e = e._init));
        try {
          return nl(e(t));
        } catch {}
    }
  return null;
}
function sy(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return nl(t);
    case 8:
      return t === Ca ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Ht(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function $d(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function oy(e) {
  var t = $d(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      s = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (o) {
          ((r = "" + o), s.call(this, o));
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = "" + o;
        },
        stopTracking: function () {
          ((e._valueTracker = null), delete e[t]);
        },
      }
    );
  }
}
function yi(e) {
  e._valueTracker || (e._valueTracker = oy(e));
}
function Hd(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = $d(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function ns(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function rl(e, t) {
  var n = t.checked;
  return Y({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function bu(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  ((n = Ht(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    }));
}
function Kd(e, t) {
  ((t = t.checked), t != null && ka(e, "checked", t, !1));
}
function il(e, t) {
  Kd(e, t);
  var n = Ht(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  (t.hasOwnProperty("value")
    ? sl(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && sl(e, t.type, Ht(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked));
}
function Zu(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    ((t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t));
  }
  ((n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n));
}
function sl(e, t, n) {
  (t !== "number" || ns(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var vr = Array.isArray;
function On(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      ((i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0));
  } else {
    for (n = "" + Ht(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        ((e[i].selected = !0), r && (e[i].defaultSelected = !0));
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function ol(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(C(91));
  return Y({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function qu(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(C(92));
      if (vr(n)) {
        if (1 < n.length) throw Error(C(93));
        n = n[0];
      }
      t = n;
    }
    (t == null && (t = ""), (n = t));
  }
  e._wrapperState = { initialValue: Ht(n) };
}
function Gd(e, t) {
  var n = Ht(t.value),
    r = Ht(t.defaultValue);
  (n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r));
}
function Ju(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Xd(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function ll(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Xd(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
}
var vi,
  Yd = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        vi = vi || document.createElement("div"),
          vi.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = vi.firstChild;
        e.firstChild;
      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Fr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var kr = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  ly = ["Webkit", "ms", "Moz", "O"];
Object.keys(kr).forEach(function (e) {
  ly.forEach(function (t) {
    ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (kr[t] = kr[e]));
  });
});
function Qd(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (kr.hasOwnProperty(e) && kr[e])
      ? ("" + t).trim()
      : t + "px";
}
function bd(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = Qd(n, t[n], r);
      (n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i));
    }
}
var ay = Y(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  },
);
function al(e, t) {
  if (t) {
    if (ay[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(C(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(C(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(C(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(C(62));
  }
}
function ul(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var cl = null;
function Aa(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var fl = null,
  Bn = null,
  Wn = null;
function ec(e) {
  if ((e = oi(e))) {
    if (typeof fl != "function") throw Error(C(280));
    var t = e.stateNode;
    t && ((t = Us(t)), fl(e.stateNode, e.type, t));
  }
}
function Zd(e) {
  Bn ? (Wn ? Wn.push(e) : (Wn = [e])) : (Bn = e);
}
function qd() {
  if (Bn) {
    var e = Bn,
      t = Wn;
    if (((Wn = Bn = null), ec(e), t)) for (e = 0; e < t.length; e++) ec(t[e]);
  }
}
function Jd(e, t) {
  return e(t);
}
function eh() {}
var ao = !1;
function th(e, t, n) {
  if (ao) return e(t, n);
  ao = !0;
  try {
    return Jd(e, t, n);
  } finally {
    ((ao = !1), (Bn !== null || Wn !== null) && (eh(), qd()));
  }
}
function Or(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Us(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      ((r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r));
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(C(231, t, typeof n));
  return n;
}
var dl = !1;
if (Tt)
  try {
    var ur = {};
    (Object.defineProperty(ur, "passive", {
      get: function () {
        dl = !0;
      },
    }),
      window.addEventListener("test", ur, ur),
      window.removeEventListener("test", ur, ur));
  } catch {
    dl = !1;
  }
function uy(e, t, n, r, i, s, o, l, a) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var Cr = !1,
  rs = null,
  is = !1,
  hl = null,
  cy = {
    onError: function (e) {
      ((Cr = !0), (rs = e));
    },
  };
function fy(e, t, n, r, i, s, o, l, a) {
  ((Cr = !1), (rs = null), uy.apply(cy, arguments));
}
function dy(e, t, n, r, i, s, o, l, a) {
  if ((fy.apply(this, arguments), Cr)) {
    if (Cr) {
      var u = rs;
      ((Cr = !1), (rs = null));
    } else throw Error(C(198));
    is || ((is = !0), (hl = u));
  }
}
function xn(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do ((t = e), t.flags & 4098 && (n = t.return), (e = t.return));
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function nh(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function tc(e) {
  if (xn(e) !== e) throw Error(C(188));
}
function hy(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = xn(e)), t === null)) throw Error(C(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var s = i.alternate;
    if (s === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === s.child) {
      for (s = i.child; s; ) {
        if (s === n) return (tc(i), e);
        if (s === r) return (tc(i), t);
        s = s.sibling;
      }
      throw Error(C(188));
    }
    if (n.return !== r.return) ((n = i), (r = s));
    else {
      for (var o = !1, l = i.child; l; ) {
        if (l === n) {
          ((o = !0), (n = i), (r = s));
          break;
        }
        if (l === r) {
          ((o = !0), (r = i), (n = s));
          break;
        }
        l = l.sibling;
      }
      if (!o) {
        for (l = s.child; l; ) {
          if (l === n) {
            ((o = !0), (n = s), (r = i));
            break;
          }
          if (l === r) {
            ((o = !0), (r = s), (n = i));
            break;
          }
          l = l.sibling;
        }
        if (!o) throw Error(C(189));
      }
    }
    if (n.alternate !== r) throw Error(C(190));
  }
  if (n.tag !== 3) throw Error(C(188));
  return n.stateNode.current === n ? e : t;
}
function rh(e) {
  return ((e = hy(e)), e !== null ? ih(e) : null);
}
function ih(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = ih(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var sh = _e.unstable_scheduleCallback,
  nc = _e.unstable_cancelCallback,
  py = _e.unstable_shouldYield,
  my = _e.unstable_requestPaint,
  Z = _e.unstable_now,
  gy = _e.unstable_getCurrentPriorityLevel,
  Ma = _e.unstable_ImmediatePriority,
  oh = _e.unstable_UserBlockingPriority,
  ss = _e.unstable_NormalPriority,
  yy = _e.unstable_LowPriority,
  lh = _e.unstable_IdlePriority,
  Fs = null,
  ht = null;
function vy(e) {
  if (ht && typeof ht.onCommitFiberRoot == "function")
    try {
      ht.onCommitFiberRoot(Fs, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var rt = Math.clz32 ? Math.clz32 : Sy,
  xy = Math.log,
  wy = Math.LN2;
function Sy(e) {
  return ((e >>>= 0), e === 0 ? 32 : (31 - ((xy(e) / wy) | 0)) | 0);
}
var xi = 64,
  wi = 4194304;
function xr(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function os(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    s = e.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var l = o & ~i;
    l !== 0 ? (r = xr(l)) : ((s &= o), s !== 0 && (r = xr(s)));
  } else ((o = n & ~i), o !== 0 ? (r = xr(o)) : s !== 0 && (r = xr(s)));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (s = t & -t), i >= s || (i === 16 && (s & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      ((n = 31 - rt(t)), (i = 1 << n), (r |= e[n]), (t &= ~i));
  return r;
}
function Ty(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function ky(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      s = e.pendingLanes;
    0 < s;
  ) {
    var o = 31 - rt(s),
      l = 1 << o,
      a = i[o];
    (a === -1
      ? (!(l & n) || l & r) && (i[o] = Ty(l, t))
      : a <= t && (e.expiredLanes |= l),
      (s &= ~l));
  }
}
function pl(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function ah() {
  var e = xi;
  return ((xi <<= 1), !(xi & 4194240) && (xi = 64), e);
}
function uo(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function ii(e, t, n) {
  ((e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - rt(t)),
    (e[t] = n));
}
function Cy(e, t) {
  var n = e.pendingLanes & ~t;
  ((e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements));
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - rt(n),
      s = 1 << i;
    ((t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~s));
  }
}
function Da(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - rt(n),
      i = 1 << r;
    ((i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i));
  }
}
var O = 0;
function uh(e) {
  return (
    (e &= -e),
    1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
  );
}
var ch,
  La,
  fh,
  dh,
  hh,
  ml = !1,
  Si = [],
  _t = null,
  zt = null,
  Ft = null,
  Br = new Map(),
  Wr = new Map(),
  Rt = [],
  Ey =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " ",
    );
function rc(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      _t = null;
      break;
    case "dragenter":
    case "dragleave":
      zt = null;
      break;
    case "mouseover":
    case "mouseout":
      Ft = null;
      break;
    case "pointerover":
    case "pointerout":
      Br.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Wr.delete(t.pointerId);
  }
}
function cr(e, t, n, r, i, s) {
  return e === null || e.nativeEvent !== s
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: s,
        targetContainers: [i],
      }),
      t !== null && ((t = oi(t)), t !== null && La(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function Py(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return ((_t = cr(_t, e, t, n, r, i)), !0);
    case "dragenter":
      return ((zt = cr(zt, e, t, n, r, i)), !0);
    case "mouseover":
      return ((Ft = cr(Ft, e, t, n, r, i)), !0);
    case "pointerover":
      var s = i.pointerId;
      return (Br.set(s, cr(Br.get(s) || null, e, t, n, r, i)), !0);
    case "gotpointercapture":
      return (
        (s = i.pointerId),
        Wr.set(s, cr(Wr.get(s) || null, e, t, n, r, i)),
        !0
      );
  }
  return !1;
}
function ph(e) {
  var t = rn(e.target);
  if (t !== null) {
    var n = xn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = nh(n)), t !== null)) {
          ((e.blockedOn = t),
            hh(e.priority, function () {
              fh(n);
            }));
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Oi(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = gl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      ((cl = r), n.target.dispatchEvent(r), (cl = null));
    } else return ((t = oi(n)), t !== null && La(t), (e.blockedOn = n), !1);
    t.shift();
  }
  return !0;
}
function ic(e, t, n) {
  Oi(e) && n.delete(t);
}
function Ay() {
  ((ml = !1),
    _t !== null && Oi(_t) && (_t = null),
    zt !== null && Oi(zt) && (zt = null),
    Ft !== null && Oi(Ft) && (Ft = null),
    Br.forEach(ic),
    Wr.forEach(ic));
}
function fr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    ml ||
      ((ml = !0),
      _e.unstable_scheduleCallback(_e.unstable_NormalPriority, Ay)));
}
function Ur(e) {
  function t(i) {
    return fr(i, e);
  }
  if (0 < Si.length) {
    fr(Si[0], e);
    for (var n = 1; n < Si.length; n++) {
      var r = Si[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    _t !== null && fr(_t, e),
      zt !== null && fr(zt, e),
      Ft !== null && fr(Ft, e),
      Br.forEach(t),
      Wr.forEach(t),
      n = 0;
    n < Rt.length;
    n++
  )
    ((r = Rt[n]), r.blockedOn === e && (r.blockedOn = null));
  for (; 0 < Rt.length && ((n = Rt[0]), n.blockedOn === null); )
    (ph(n), n.blockedOn === null && Rt.shift());
}
var Un = Pt.ReactCurrentBatchConfig,
  ls = !0;
function My(e, t, n, r) {
  var i = O,
    s = Un.transition;
  Un.transition = null;
  try {
    ((O = 1), Ra(e, t, n, r));
  } finally {
    ((O = i), (Un.transition = s));
  }
}
function Dy(e, t, n, r) {
  var i = O,
    s = Un.transition;
  Un.transition = null;
  try {
    ((O = 4), Ra(e, t, n, r));
  } finally {
    ((O = i), (Un.transition = s));
  }
}
function Ra(e, t, n, r) {
  if (ls) {
    var i = gl(e, t, n, r);
    if (i === null) (wo(e, t, r, as, n), rc(e, r));
    else if (Py(i, e, t, n, r)) r.stopPropagation();
    else if ((rc(e, r), t & 4 && -1 < Ey.indexOf(e))) {
      for (; i !== null; ) {
        var s = oi(i);
        if (
          (s !== null && ch(s),
          (s = gl(e, t, n, r)),
          s === null && wo(e, t, r, as, n),
          s === i)
        )
          break;
        i = s;
      }
      i !== null && r.stopPropagation();
    } else wo(e, t, r, null, n);
  }
}
var as = null;
function gl(e, t, n, r) {
  if (((as = null), (e = Aa(r)), (e = rn(e)), e !== null))
    if (((t = xn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = nh(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return ((as = e), null);
}
function mh(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (gy()) {
        case Ma:
          return 1;
        case oh:
          return 4;
        case ss:
        case yy:
          return 16;
        case lh:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var jt = null,
  Va = null,
  Bi = null;
function gh() {
  if (Bi) return Bi;
  var e,
    t = Va,
    n = t.length,
    r,
    i = "value" in jt ? jt.value : jt.textContent,
    s = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === i[s - r]; r++);
  return (Bi = i.slice(e, 1 < r ? 1 - r : void 0));
}
function Wi(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Ti() {
  return !0;
}
function sc() {
  return !1;
}
function Fe(e) {
  function t(n, r, i, s, o) {
    ((this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = s),
      (this.target = o),
      (this.currentTarget = null));
    for (var l in e)
      e.hasOwnProperty(l) && ((n = e[l]), (this[l] = n ? n(s) : s[l]));
    return (
      (this.isDefaultPrevented = (
        s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1
      )
        ? Ti
        : sc),
      (this.isPropagationStopped = sc),
      this
    );
  }
  return (
    Y(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Ti));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Ti));
      },
      persist: function () {},
      isPersistent: Ti,
    }),
    t
  );
}
var rr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  ja = Fe(rr),
  si = Y({}, rr, { view: 0, detail: 0 }),
  Ly = Fe(si),
  co,
  fo,
  dr,
  Os = Y({}, si, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Ia,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== dr &&
            (dr && e.type === "mousemove"
              ? ((co = e.screenX - dr.screenX), (fo = e.screenY - dr.screenY))
              : (fo = co = 0),
            (dr = e)),
          co);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : fo;
    },
  }),
  oc = Fe(Os),
  Ry = Y({}, Os, { dataTransfer: 0 }),
  Vy = Fe(Ry),
  jy = Y({}, si, { relatedTarget: 0 }),
  ho = Fe(jy),
  Iy = Y({}, rr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Ny = Fe(Iy),
  _y = Y({}, rr, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  zy = Fe(_y),
  Fy = Y({}, rr, { data: 0 }),
  lc = Fe(Fy),
  Oy = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  By = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  Wy = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Uy(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Wy[e]) ? !!t[e] : !1;
}
function Ia() {
  return Uy;
}
var $y = Y({}, si, {
    key: function (e) {
      if (e.key) {
        var t = Oy[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Wi(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
          ? By[e.keyCode] || "Unidentified"
          : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Ia,
    charCode: function (e) {
      return e.type === "keypress" ? Wi(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Wi(e)
        : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
    },
  }),
  Hy = Fe($y),
  Ky = Y({}, Os, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  ac = Fe(Ky),
  Gy = Y({}, si, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Ia,
  }),
  Xy = Fe(Gy),
  Yy = Y({}, rr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Qy = Fe(Yy),
  by = Y({}, Os, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
            ? -e.wheelDelta
            : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Zy = Fe(by),
  qy = [9, 13, 27, 32],
  Na = Tt && "CompositionEvent" in window,
  Er = null;
Tt && "documentMode" in document && (Er = document.documentMode);
var Jy = Tt && "TextEvent" in window && !Er,
  yh = Tt && (!Na || (Er && 8 < Er && 11 >= Er)),
  uc = " ",
  cc = !1;
function vh(e, t) {
  switch (e) {
    case "keyup":
      return qy.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function xh(e) {
  return ((e = e.detail), typeof e == "object" && "data" in e ? e.data : null);
}
var En = !1;
function e0(e, t) {
  switch (e) {
    case "compositionend":
      return xh(t);
    case "keypress":
      return t.which !== 32 ? null : ((cc = !0), uc);
    case "textInput":
      return ((e = t.data), e === uc && cc ? null : e);
    default:
      return null;
  }
}
function t0(e, t) {
  if (En)
    return e === "compositionend" || (!Na && vh(e, t))
      ? ((e = gh()), (Bi = Va = jt = null), (En = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return yh && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var n0 = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function fc(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!n0[e.type] : t === "textarea";
}
function wh(e, t, n, r) {
  (Zd(r),
    (t = us(t, "onChange")),
    0 < t.length &&
      ((n = new ja("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t })));
}
var Pr = null,
  $r = null;
function r0(e) {
  Rh(e, 0);
}
function Bs(e) {
  var t = Mn(e);
  if (Hd(t)) return e;
}
function i0(e, t) {
  if (e === "change") return t;
}
var Sh = !1;
if (Tt) {
  var po;
  if (Tt) {
    var mo = "oninput" in document;
    if (!mo) {
      var dc = document.createElement("div");
      (dc.setAttribute("oninput", "return;"),
        (mo = typeof dc.oninput == "function"));
    }
    po = mo;
  } else po = !1;
  Sh = po && (!document.documentMode || 9 < document.documentMode);
}
function hc() {
  Pr && (Pr.detachEvent("onpropertychange", Th), ($r = Pr = null));
}
function Th(e) {
  if (e.propertyName === "value" && Bs($r)) {
    var t = [];
    (wh(t, $r, e, Aa(e)), th(r0, t));
  }
}
function s0(e, t, n) {
  e === "focusin"
    ? (hc(), (Pr = t), ($r = n), Pr.attachEvent("onpropertychange", Th))
    : e === "focusout" && hc();
}
function o0(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Bs($r);
}
function l0(e, t) {
  if (e === "click") return Bs(t);
}
function a0(e, t) {
  if (e === "input" || e === "change") return Bs(t);
}
function u0(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var ot = typeof Object.is == "function" ? Object.is : u0;
function Hr(e, t) {
  if (ot(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!qo.call(t, i) || !ot(e[i], t[i])) return !1;
  }
  return !0;
}
function pc(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function mc(e, t) {
  var n = pc(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = pc(n);
  }
}
function kh(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? kh(e, t.parentNode)
          : "contains" in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function Ch() {
  for (var e = window, t = ns(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = ns(e.document);
  }
  return t;
}
function _a(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function c0(e) {
  var t = Ch(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    kh(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && _a(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        ((n.selectionStart = t),
          (n.selectionEnd = Math.min(e, n.value.length)));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          s = Math.min(r.start, i);
        ((r = r.end === void 0 ? s : Math.min(r.end, i)),
          !e.extend && s > r && ((i = r), (r = s), (s = i)),
          (i = mc(n, s)));
        var o = mc(n, r);
        i &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          s > r
            ? (e.addRange(t), e.extend(o.node, o.offset))
            : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      ((e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top));
  }
}
var f0 = Tt && "documentMode" in document && 11 >= document.documentMode,
  Pn = null,
  yl = null,
  Ar = null,
  vl = !1;
function gc(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  vl ||
    Pn == null ||
    Pn !== ns(r) ||
    ((r = Pn),
    "selectionStart" in r && _a(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Ar && Hr(Ar, r)) ||
      ((Ar = r),
      (r = us(yl, "onSelect")),
      0 < r.length &&
        ((t = new ja("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Pn))));
}
function ki(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var An = {
    animationend: ki("Animation", "AnimationEnd"),
    animationiteration: ki("Animation", "AnimationIteration"),
    animationstart: ki("Animation", "AnimationStart"),
    transitionend: ki("Transition", "TransitionEnd"),
  },
  go = {},
  Eh = {};
Tt &&
  ((Eh = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete An.animationend.animation,
    delete An.animationiteration.animation,
    delete An.animationstart.animation),
  "TransitionEvent" in window || delete An.transitionend.transition);
function Ws(e) {
  if (go[e]) return go[e];
  if (!An[e]) return e;
  var t = An[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Eh) return (go[e] = t[n]);
  return e;
}
var Ph = Ws("animationend"),
  Ah = Ws("animationiteration"),
  Mh = Ws("animationstart"),
  Dh = Ws("transitionend"),
  Lh = new Map(),
  yc =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " ",
    );
function Xt(e, t) {
  (Lh.set(e, t), vn(t, [e]));
}
for (var yo = 0; yo < yc.length; yo++) {
  var vo = yc[yo],
    d0 = vo.toLowerCase(),
    h0 = vo[0].toUpperCase() + vo.slice(1);
  Xt(d0, "on" + h0);
}
Xt(Ph, "onAnimationEnd");
Xt(Ah, "onAnimationIteration");
Xt(Mh, "onAnimationStart");
Xt("dblclick", "onDoubleClick");
Xt("focusin", "onFocus");
Xt("focusout", "onBlur");
Xt(Dh, "onTransitionEnd");
Kn("onMouseEnter", ["mouseout", "mouseover"]);
Kn("onMouseLeave", ["mouseout", "mouseover"]);
Kn("onPointerEnter", ["pointerout", "pointerover"]);
Kn("onPointerLeave", ["pointerout", "pointerover"]);
vn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(
    " ",
  ),
);
vn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " ",
  ),
);
vn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
vn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" "),
);
vn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" "),
);
vn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
);
var wr =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " ",
    ),
  p0 = new Set("cancel close invalid load scroll toggle".split(" ").concat(wr));
function vc(e, t, n) {
  var r = e.type || "unknown-event";
  ((e.currentTarget = n), dy(r, t, void 0, e), (e.currentTarget = null));
}
function Rh(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var s = void 0;
      if (t)
        for (var o = r.length - 1; 0 <= o; o--) {
          var l = r[o],
            a = l.instance,
            u = l.currentTarget;
          if (((l = l.listener), a !== s && i.isPropagationStopped())) break e;
          (vc(i, l, u), (s = a));
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((l = r[o]),
            (a = l.instance),
            (u = l.currentTarget),
            (l = l.listener),
            a !== s && i.isPropagationStopped())
          )
            break e;
          (vc(i, l, u), (s = a));
        }
    }
  }
  if (is) throw ((e = hl), (is = !1), (hl = null), e);
}
function $(e, t) {
  var n = t[kl];
  n === void 0 && (n = t[kl] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Vh(t, e, 2, !1), n.add(r));
}
function xo(e, t, n) {
  var r = 0;
  (t && (r |= 4), Vh(n, e, r, t));
}
var Ci = "_reactListening" + Math.random().toString(36).slice(2);
function Kr(e) {
  if (!e[Ci]) {
    ((e[Ci] = !0),
      Od.forEach(function (n) {
        n !== "selectionchange" && (p0.has(n) || xo(n, !1, e), xo(n, !0, e));
      }));
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Ci] || ((t[Ci] = !0), xo("selectionchange", !1, t));
  }
}
function Vh(e, t, n, r) {
  switch (mh(t)) {
    case 1:
      var i = My;
      break;
    case 4:
      i = Dy;
      break;
    default:
      i = Ra;
  }
  ((n = i.bind(null, t, n, e)),
    (i = void 0),
    !dl ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
        ? e.addEventListener(t, n, { passive: i })
        : e.addEventListener(t, n, !1));
}
function wo(e, t, n, r, i) {
  var s = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var l = r.stateNode.containerInfo;
        if (l === i || (l.nodeType === 8 && l.parentNode === i)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var a = o.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = o.stateNode.containerInfo),
              a === i || (a.nodeType === 8 && a.parentNode === i))
            )
              return;
            o = o.return;
          }
        for (; l !== null; ) {
          if (((o = rn(l)), o === null)) return;
          if (((a = o.tag), a === 5 || a === 6)) {
            r = s = o;
            continue e;
          }
          l = l.parentNode;
        }
      }
      r = r.return;
    }
  th(function () {
    var u = s,
      c = Aa(n),
      f = [];
    e: {
      var d = Lh.get(e);
      if (d !== void 0) {
        var g = ja,
          y = e;
        switch (e) {
          case "keypress":
            if (Wi(n) === 0) break e;
          case "keydown":
          case "keyup":
            g = Hy;
            break;
          case "focusin":
            ((y = "focus"), (g = ho));
            break;
          case "focusout":
            ((y = "blur"), (g = ho));
            break;
          case "beforeblur":
          case "afterblur":
            g = ho;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            g = oc;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = Vy;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = Xy;
            break;
          case Ph:
          case Ah:
          case Mh:
            g = Ny;
            break;
          case Dh:
            g = Qy;
            break;
          case "scroll":
            g = Ly;
            break;
          case "wheel":
            g = Zy;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = zy;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = ac;
        }
        var v = (t & 4) !== 0,
          w = !v && e === "scroll",
          p = v ? (d !== null ? d + "Capture" : null) : d;
        v = [];
        for (var h = u, m; h !== null; ) {
          m = h;
          var x = m.stateNode;
          if (
            (m.tag === 5 &&
              x !== null &&
              ((m = x),
              p !== null && ((x = Or(h, p)), x != null && v.push(Gr(h, x, m)))),
            w)
          )
            break;
          h = h.return;
        }
        0 < v.length &&
          ((d = new g(d, y, null, n, c)), f.push({ event: d, listeners: v }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((d = e === "mouseover" || e === "pointerover"),
          (g = e === "mouseout" || e === "pointerout"),
          d &&
            n !== cl &&
            (y = n.relatedTarget || n.fromElement) &&
            (rn(y) || y[kt]))
        )
          break e;
        if (
          (g || d) &&
          ((d =
            c.window === c
              ? c
              : (d = c.ownerDocument)
                ? d.defaultView || d.parentWindow
                : window),
          g
            ? ((y = n.relatedTarget || n.toElement),
              (g = u),
              (y = y ? rn(y) : null),
              y !== null &&
                ((w = xn(y)), y !== w || (y.tag !== 5 && y.tag !== 6)) &&
                (y = null))
            : ((g = null), (y = u)),
          g !== y)
        ) {
          if (
            ((v = oc),
            (x = "onMouseLeave"),
            (p = "onMouseEnter"),
            (h = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((v = ac),
              (x = "onPointerLeave"),
              (p = "onPointerEnter"),
              (h = "pointer")),
            (w = g == null ? d : Mn(g)),
            (m = y == null ? d : Mn(y)),
            (d = new v(x, h + "leave", g, n, c)),
            (d.target = w),
            (d.relatedTarget = m),
            (x = null),
            rn(c) === u &&
              ((v = new v(p, h + "enter", y, n, c)),
              (v.target = m),
              (v.relatedTarget = w),
              (x = v)),
            (w = x),
            g && y)
          )
            t: {
              for (v = g, p = y, h = 0, m = v; m; m = wn(m)) h++;
              for (m = 0, x = p; x; x = wn(x)) m++;
              for (; 0 < h - m; ) ((v = wn(v)), h--);
              for (; 0 < m - h; ) ((p = wn(p)), m--);
              for (; h--; ) {
                if (v === p || (p !== null && v === p.alternate)) break t;
                ((v = wn(v)), (p = wn(p)));
              }
              v = null;
            }
          else v = null;
          (g !== null && xc(f, d, g, v, !1),
            y !== null && w !== null && xc(f, w, y, v, !0));
        }
      }
      e: {
        if (
          ((d = u ? Mn(u) : window),
          (g = d.nodeName && d.nodeName.toLowerCase()),
          g === "select" || (g === "input" && d.type === "file"))
        )
          var S = i0;
        else if (fc(d))
          if (Sh) S = a0;
          else {
            S = o0;
            var P = s0;
          }
        else
          (g = d.nodeName) &&
            g.toLowerCase() === "input" &&
            (d.type === "checkbox" || d.type === "radio") &&
            (S = l0);
        if (S && (S = S(e, u))) {
          wh(f, S, n, c);
          break e;
        }
        (P && P(e, d, u),
          e === "focusout" &&
            (P = d._wrapperState) &&
            P.controlled &&
            d.type === "number" &&
            sl(d, "number", d.value));
      }
      switch (((P = u ? Mn(u) : window), e)) {
        case "focusin":
          (fc(P) || P.contentEditable === "true") &&
            ((Pn = P), (yl = u), (Ar = null));
          break;
        case "focusout":
          Ar = yl = Pn = null;
          break;
        case "mousedown":
          vl = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          ((vl = !1), gc(f, n, c));
          break;
        case "selectionchange":
          if (f0) break;
        case "keydown":
        case "keyup":
          gc(f, n, c);
      }
      var E;
      if (Na)
        e: {
          switch (e) {
            case "compositionstart":
              var k = "onCompositionStart";
              break e;
            case "compositionend":
              k = "onCompositionEnd";
              break e;
            case "compositionupdate":
              k = "onCompositionUpdate";
              break e;
          }
          k = void 0;
        }
      else
        En
          ? vh(e, n) && (k = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (k = "onCompositionStart");
      (k &&
        (yh &&
          n.locale !== "ko" &&
          (En || k !== "onCompositionStart"
            ? k === "onCompositionEnd" && En && (E = gh())
            : ((jt = c),
              (Va = "value" in jt ? jt.value : jt.textContent),
              (En = !0))),
        (P = us(u, k)),
        0 < P.length &&
          ((k = new lc(k, e, null, n, c)),
          f.push({ event: k, listeners: P }),
          E ? (k.data = E) : ((E = xh(n)), E !== null && (k.data = E)))),
        (E = Jy ? e0(e, n) : t0(e, n)) &&
          ((u = us(u, "onBeforeInput")),
          0 < u.length &&
            ((c = new lc("onBeforeInput", "beforeinput", null, n, c)),
            f.push({ event: c, listeners: u }),
            (c.data = E))));
    }
    Rh(f, t);
  });
}
function Gr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function us(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e,
      s = i.stateNode;
    (i.tag === 5 &&
      s !== null &&
      ((i = s),
      (s = Or(e, n)),
      s != null && r.unshift(Gr(e, s, i)),
      (s = Or(e, t)),
      s != null && r.push(Gr(e, s, i))),
      (e = e.return));
  }
  return r;
}
function wn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function xc(e, t, n, r, i) {
  for (var s = t._reactName, o = []; n !== null && n !== r; ) {
    var l = n,
      a = l.alternate,
      u = l.stateNode;
    if (a !== null && a === r) break;
    (l.tag === 5 &&
      u !== null &&
      ((l = u),
      i
        ? ((a = Or(n, s)), a != null && o.unshift(Gr(n, a, l)))
        : i || ((a = Or(n, s)), a != null && o.push(Gr(n, a, l)))),
      (n = n.return));
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var m0 = /\r\n?/g,
  g0 = /\u0000|\uFFFD/g;
function wc(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      m0,
      `
`,
    )
    .replace(g0, "");
}
function Ei(e, t, n) {
  if (((t = wc(t)), wc(e) !== t && n)) throw Error(C(425));
}
function cs() {}
var xl = null,
  wl = null;
function Sl(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Tl = typeof setTimeout == "function" ? setTimeout : void 0,
  y0 = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Sc = typeof Promise == "function" ? Promise : void 0,
  v0 =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Sc < "u"
        ? function (e) {
            return Sc.resolve(null).then(e).catch(x0);
          }
        : Tl;
function x0(e) {
  setTimeout(function () {
    throw e;
  });
}
function So(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          (e.removeChild(i), Ur(t));
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  Ur(t);
}
function Ot(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Tc(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var ir = Math.random().toString(36).slice(2),
  dt = "__reactFiber$" + ir,
  Xr = "__reactProps$" + ir,
  kt = "__reactContainer$" + ir,
  kl = "__reactEvents$" + ir,
  w0 = "__reactListeners$" + ir,
  S0 = "__reactHandles$" + ir;
function rn(e) {
  var t = e[dt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[kt] || n[dt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Tc(e); e !== null; ) {
          if ((n = e[dt])) return n;
          e = Tc(e);
        }
      return t;
    }
    ((e = n), (n = e.parentNode));
  }
  return null;
}
function oi(e) {
  return (
    (e = e[dt] || e[kt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Mn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(C(33));
}
function Us(e) {
  return e[Xr] || null;
}
var Cl = [],
  Dn = -1;
function Yt(e) {
  return { current: e };
}
function H(e) {
  0 > Dn || ((e.current = Cl[Dn]), (Cl[Dn] = null), Dn--);
}
function U(e, t) {
  (Dn++, (Cl[Dn] = e.current), (e.current = t));
}
var Kt = {},
  me = Yt(Kt),
  Ee = Yt(!1),
  hn = Kt;
function Gn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Kt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    s;
  for (s in n) i[s] = t[s];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function Pe(e) {
  return ((e = e.childContextTypes), e != null);
}
function fs() {
  (H(Ee), H(me));
}
function kc(e, t, n) {
  if (me.current !== Kt) throw Error(C(168));
  (U(me, t), U(Ee, n));
}
function jh(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(C(108, sy(e) || "Unknown", i));
  return Y({}, n, r);
}
function ds(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Kt),
    (hn = me.current),
    U(me, e),
    U(Ee, Ee.current),
    !0
  );
}
function Cc(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(C(169));
  (n
    ? ((e = jh(e, t, hn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      H(Ee),
      H(me),
      U(me, e))
    : H(Ee),
    U(Ee, n));
}
var vt = null,
  $s = !1,
  To = !1;
function Ih(e) {
  vt === null ? (vt = [e]) : vt.push(e);
}
function T0(e) {
  (($s = !0), Ih(e));
}
function Qt() {
  if (!To && vt !== null) {
    To = !0;
    var e = 0,
      t = O;
    try {
      var n = vt;
      for (O = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      ((vt = null), ($s = !1));
    } catch (i) {
      throw (vt !== null && (vt = vt.slice(e + 1)), sh(Ma, Qt), i);
    } finally {
      ((O = t), (To = !1));
    }
  }
  return null;
}
var Ln = [],
  Rn = 0,
  hs = null,
  ps = 0,
  Be = [],
  We = 0,
  pn = null,
  xt = 1,
  wt = "";
function en(e, t) {
  ((Ln[Rn++] = ps), (Ln[Rn++] = hs), (hs = e), (ps = t));
}
function Nh(e, t, n) {
  ((Be[We++] = xt), (Be[We++] = wt), (Be[We++] = pn), (pn = e));
  var r = xt;
  e = wt;
  var i = 32 - rt(r) - 1;
  ((r &= ~(1 << i)), (n += 1));
  var s = 32 - rt(t) + i;
  if (30 < s) {
    var o = i - (i % 5);
    ((s = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (i -= o),
      (xt = (1 << (32 - rt(t) + i)) | (n << i) | r),
      (wt = s + e));
  } else ((xt = (1 << s) | (n << i) | r), (wt = e));
}
function za(e) {
  e.return !== null && (en(e, 1), Nh(e, 1, 0));
}
function Fa(e) {
  for (; e === hs; )
    ((hs = Ln[--Rn]), (Ln[Rn] = null), (ps = Ln[--Rn]), (Ln[Rn] = null));
  for (; e === pn; )
    ((pn = Be[--We]),
      (Be[We] = null),
      (wt = Be[--We]),
      (Be[We] = null),
      (xt = Be[--We]),
      (Be[We] = null));
}
var Ie = null,
  je = null,
  K = !1,
  et = null;
function _h(e, t) {
  var n = Ue(5, null, null, 0);
  ((n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n));
}
function Ec(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Ie = e), (je = Ot(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Ie = e), (je = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = pn !== null ? { id: xt, overflow: wt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Ue(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Ie = e),
            (je = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function El(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Pl(e) {
  if (K) {
    var t = je;
    if (t) {
      var n = t;
      if (!Ec(e, t)) {
        if (El(e)) throw Error(C(418));
        t = Ot(n.nextSibling);
        var r = Ie;
        t && Ec(e, t)
          ? _h(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (K = !1), (Ie = e));
      }
    } else {
      if (El(e)) throw Error(C(418));
      ((e.flags = (e.flags & -4097) | 2), (K = !1), (Ie = e));
    }
  }
}
function Pc(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Ie = e;
}
function Pi(e) {
  if (e !== Ie) return !1;
  if (!K) return (Pc(e), (K = !0), !1);
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Sl(e.type, e.memoizedProps))),
    t && (t = je))
  ) {
    if (El(e)) throw (zh(), Error(C(418)));
    for (; t; ) (_h(e, t), (t = Ot(t.nextSibling)));
  }
  if ((Pc(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(C(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              je = Ot(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      je = null;
    }
  } else je = Ie ? Ot(e.stateNode.nextSibling) : null;
  return !0;
}
function zh() {
  for (var e = je; e; ) e = Ot(e.nextSibling);
}
function Xn() {
  ((je = Ie = null), (K = !1));
}
function Oa(e) {
  et === null ? (et = [e]) : et.push(e);
}
var k0 = Pt.ReactCurrentBatchConfig;
function hr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(C(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(C(147, e));
      var i = r,
        s = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === s
        ? t.ref
        : ((t = function (o) {
            var l = i.refs;
            o === null ? delete l[s] : (l[s] = o);
          }),
          (t._stringRef = s),
          t);
    }
    if (typeof e != "string") throw Error(C(284));
    if (!n._owner) throw Error(C(290, e));
  }
  return e;
}
function Ai(e, t) {
  throw (
    (e = Object.prototype.toString.call(t)),
    Error(
      C(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e,
      ),
    )
  );
}
function Ac(e) {
  var t = e._init;
  return t(e._payload);
}
function Fh(e) {
  function t(p, h) {
    if (e) {
      var m = p.deletions;
      m === null ? ((p.deletions = [h]), (p.flags |= 16)) : m.push(h);
    }
  }
  function n(p, h) {
    if (!e) return null;
    for (; h !== null; ) (t(p, h), (h = h.sibling));
    return null;
  }
  function r(p, h) {
    for (p = new Map(); h !== null; )
      (h.key !== null ? p.set(h.key, h) : p.set(h.index, h), (h = h.sibling));
    return p;
  }
  function i(p, h) {
    return ((p = $t(p, h)), (p.index = 0), (p.sibling = null), p);
  }
  function s(p, h, m) {
    return (
      (p.index = m),
      e
        ? ((m = p.alternate),
          m !== null
            ? ((m = m.index), m < h ? ((p.flags |= 2), h) : m)
            : ((p.flags |= 2), h))
        : ((p.flags |= 1048576), h)
    );
  }
  function o(p) {
    return (e && p.alternate === null && (p.flags |= 2), p);
  }
  function l(p, h, m, x) {
    return h === null || h.tag !== 6
      ? ((h = Do(m, p.mode, x)), (h.return = p), h)
      : ((h = i(h, m)), (h.return = p), h);
  }
  function a(p, h, m, x) {
    var S = m.type;
    return S === Cn
      ? c(p, h, m.props.children, x, m.key)
      : h !== null &&
          (h.elementType === S ||
            (typeof S == "object" &&
              S !== null &&
              S.$$typeof === Dt &&
              Ac(S) === h.type))
        ? ((x = i(h, m.props)), (x.ref = hr(p, h, m)), (x.return = p), x)
        : ((x = Yi(m.type, m.key, m.props, null, p.mode, x)),
          (x.ref = hr(p, h, m)),
          (x.return = p),
          x);
  }
  function u(p, h, m, x) {
    return h === null ||
      h.tag !== 4 ||
      h.stateNode.containerInfo !== m.containerInfo ||
      h.stateNode.implementation !== m.implementation
      ? ((h = Lo(m, p.mode, x)), (h.return = p), h)
      : ((h = i(h, m.children || [])), (h.return = p), h);
  }
  function c(p, h, m, x, S) {
    return h === null || h.tag !== 7
      ? ((h = cn(m, p.mode, x, S)), (h.return = p), h)
      : ((h = i(h, m)), (h.return = p), h);
  }
  function f(p, h, m) {
    if ((typeof h == "string" && h !== "") || typeof h == "number")
      return ((h = Do("" + h, p.mode, m)), (h.return = p), h);
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case gi:
          return (
            (m = Yi(h.type, h.key, h.props, null, p.mode, m)),
            (m.ref = hr(p, null, h)),
            (m.return = p),
            m
          );
        case kn:
          return ((h = Lo(h, p.mode, m)), (h.return = p), h);
        case Dt:
          var x = h._init;
          return f(p, x(h._payload), m);
      }
      if (vr(h) || ar(h))
        return ((h = cn(h, p.mode, m, null)), (h.return = p), h);
      Ai(p, h);
    }
    return null;
  }
  function d(p, h, m, x) {
    var S = h !== null ? h.key : null;
    if ((typeof m == "string" && m !== "") || typeof m == "number")
      return S !== null ? null : l(p, h, "" + m, x);
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case gi:
          return m.key === S ? a(p, h, m, x) : null;
        case kn:
          return m.key === S ? u(p, h, m, x) : null;
        case Dt:
          return ((S = m._init), d(p, h, S(m._payload), x));
      }
      if (vr(m) || ar(m)) return S !== null ? null : c(p, h, m, x, null);
      Ai(p, m);
    }
    return null;
  }
  function g(p, h, m, x, S) {
    if ((typeof x == "string" && x !== "") || typeof x == "number")
      return ((p = p.get(m) || null), l(h, p, "" + x, S));
    if (typeof x == "object" && x !== null) {
      switch (x.$$typeof) {
        case gi:
          return (
            (p = p.get(x.key === null ? m : x.key) || null),
            a(h, p, x, S)
          );
        case kn:
          return (
            (p = p.get(x.key === null ? m : x.key) || null),
            u(h, p, x, S)
          );
        case Dt:
          var P = x._init;
          return g(p, h, m, P(x._payload), S);
      }
      if (vr(x) || ar(x)) return ((p = p.get(m) || null), c(h, p, x, S, null));
      Ai(h, x);
    }
    return null;
  }
  function y(p, h, m, x) {
    for (
      var S = null, P = null, E = h, k = (h = 0), I = null;
      E !== null && k < m.length;
      k++
    ) {
      E.index > k ? ((I = E), (E = null)) : (I = E.sibling);
      var M = d(p, E, m[k], x);
      if (M === null) {
        E === null && (E = I);
        break;
      }
      (e && E && M.alternate === null && t(p, E),
        (h = s(M, h, k)),
        P === null ? (S = M) : (P.sibling = M),
        (P = M),
        (E = I));
    }
    if (k === m.length) return (n(p, E), K && en(p, k), S);
    if (E === null) {
      for (; k < m.length; k++)
        ((E = f(p, m[k], x)),
          E !== null &&
            ((h = s(E, h, k)),
            P === null ? (S = E) : (P.sibling = E),
            (P = E)));
      return (K && en(p, k), S);
    }
    for (E = r(p, E); k < m.length; k++)
      ((I = g(E, p, k, m[k], x)),
        I !== null &&
          (e && I.alternate !== null && E.delete(I.key === null ? k : I.key),
          (h = s(I, h, k)),
          P === null ? (S = I) : (P.sibling = I),
          (P = I)));
    return (
      e &&
        E.forEach(function (F) {
          return t(p, F);
        }),
      K && en(p, k),
      S
    );
  }
  function v(p, h, m, x) {
    var S = ar(m);
    if (typeof S != "function") throw Error(C(150));
    if (((m = S.call(m)), m == null)) throw Error(C(151));
    for (
      var P = (S = null), E = h, k = (h = 0), I = null, M = m.next();
      E !== null && !M.done;
      k++, M = m.next()
    ) {
      E.index > k ? ((I = E), (E = null)) : (I = E.sibling);
      var F = d(p, E, M.value, x);
      if (F === null) {
        E === null && (E = I);
        break;
      }
      (e && E && F.alternate === null && t(p, E),
        (h = s(F, h, k)),
        P === null ? (S = F) : (P.sibling = F),
        (P = F),
        (E = I));
    }
    if (M.done) return (n(p, E), K && en(p, k), S);
    if (E === null) {
      for (; !M.done; k++, M = m.next())
        ((M = f(p, M.value, x)),
          M !== null &&
            ((h = s(M, h, k)),
            P === null ? (S = M) : (P.sibling = M),
            (P = M)));
      return (K && en(p, k), S);
    }
    for (E = r(p, E); !M.done; k++, M = m.next())
      ((M = g(E, p, k, M.value, x)),
        M !== null &&
          (e && M.alternate !== null && E.delete(M.key === null ? k : M.key),
          (h = s(M, h, k)),
          P === null ? (S = M) : (P.sibling = M),
          (P = M)));
    return (
      e &&
        E.forEach(function (q) {
          return t(p, q);
        }),
      K && en(p, k),
      S
    );
  }
  function w(p, h, m, x) {
    if (
      (typeof m == "object" &&
        m !== null &&
        m.type === Cn &&
        m.key === null &&
        (m = m.props.children),
      typeof m == "object" && m !== null)
    ) {
      switch (m.$$typeof) {
        case gi:
          e: {
            for (var S = m.key, P = h; P !== null; ) {
              if (P.key === S) {
                if (((S = m.type), S === Cn)) {
                  if (P.tag === 7) {
                    (n(p, P.sibling),
                      (h = i(P, m.props.children)),
                      (h.return = p),
                      (p = h));
                    break e;
                  }
                } else if (
                  P.elementType === S ||
                  (typeof S == "object" &&
                    S !== null &&
                    S.$$typeof === Dt &&
                    Ac(S) === P.type)
                ) {
                  (n(p, P.sibling),
                    (h = i(P, m.props)),
                    (h.ref = hr(p, P, m)),
                    (h.return = p),
                    (p = h));
                  break e;
                }
                n(p, P);
                break;
              } else t(p, P);
              P = P.sibling;
            }
            m.type === Cn
              ? ((h = cn(m.props.children, p.mode, x, m.key)),
                (h.return = p),
                (p = h))
              : ((x = Yi(m.type, m.key, m.props, null, p.mode, x)),
                (x.ref = hr(p, h, m)),
                (x.return = p),
                (p = x));
          }
          return o(p);
        case kn:
          e: {
            for (P = m.key; h !== null; ) {
              if (h.key === P)
                if (
                  h.tag === 4 &&
                  h.stateNode.containerInfo === m.containerInfo &&
                  h.stateNode.implementation === m.implementation
                ) {
                  (n(p, h.sibling),
                    (h = i(h, m.children || [])),
                    (h.return = p),
                    (p = h));
                  break e;
                } else {
                  n(p, h);
                  break;
                }
              else t(p, h);
              h = h.sibling;
            }
            ((h = Lo(m, p.mode, x)), (h.return = p), (p = h));
          }
          return o(p);
        case Dt:
          return ((P = m._init), w(p, h, P(m._payload), x));
      }
      if (vr(m)) return y(p, h, m, x);
      if (ar(m)) return v(p, h, m, x);
      Ai(p, m);
    }
    return (typeof m == "string" && m !== "") || typeof m == "number"
      ? ((m = "" + m),
        h !== null && h.tag === 6
          ? (n(p, h.sibling), (h = i(h, m)), (h.return = p), (p = h))
          : (n(p, h), (h = Do(m, p.mode, x)), (h.return = p), (p = h)),
        o(p))
      : n(p, h);
  }
  return w;
}
var Yn = Fh(!0),
  Oh = Fh(!1),
  ms = Yt(null),
  gs = null,
  Vn = null,
  Ba = null;
function Wa() {
  Ba = Vn = gs = null;
}
function Ua(e) {
  var t = ms.current;
  (H(ms), (e._currentValue = t));
}
function Al(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function $n(e, t) {
  ((gs = e),
    (Ba = Vn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Ce = !0), (e.firstContext = null)));
}
function Ke(e) {
  var t = e._currentValue;
  if (Ba !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Vn === null)) {
      if (gs === null) throw Error(C(308));
      ((Vn = e), (gs.dependencies = { lanes: 0, firstContext: e }));
    } else Vn = Vn.next = e;
  return t;
}
var sn = null;
function $a(e) {
  sn === null ? (sn = [e]) : sn.push(e);
}
function Bh(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), $a(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    Ct(e, r)
  );
}
function Ct(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    ((e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return));
  return n.tag === 3 ? n.stateNode : null;
}
var Lt = !1;
function Ha(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Wh(e, t) {
  ((e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      }));
}
function St(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Bt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), _ & 2)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      Ct(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), $a(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    Ct(e, n)
  );
}
function Ui(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    ((r &= e.pendingLanes), (n |= r), (t.lanes = n), Da(e, n));
  }
}
function Mc(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      s = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        (s === null ? (i = s = o) : (s = s.next = o), (n = n.next));
      } while (n !== null);
      s === null ? (i = s = t) : (s = s.next = t);
    } else i = s = t;
    ((n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: s,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n));
    return;
  }
  ((e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t));
}
function ys(e, t, n, r) {
  var i = e.updateQueue;
  Lt = !1;
  var s = i.firstBaseUpdate,
    o = i.lastBaseUpdate,
    l = i.shared.pending;
  if (l !== null) {
    i.shared.pending = null;
    var a = l,
      u = a.next;
    ((a.next = null), o === null ? (s = u) : (o.next = u), (o = a));
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (l = c.lastBaseUpdate),
      l !== o &&
        (l === null ? (c.firstBaseUpdate = u) : (l.next = u),
        (c.lastBaseUpdate = a)));
  }
  if (s !== null) {
    var f = i.baseState;
    ((o = 0), (c = u = a = null), (l = s));
    do {
      var d = l.lane,
        g = l.eventTime;
      if ((r & d) === d) {
        c !== null &&
          (c = c.next =
            {
              eventTime: g,
              lane: 0,
              tag: l.tag,
              payload: l.payload,
              callback: l.callback,
              next: null,
            });
        e: {
          var y = e,
            v = l;
          switch (((d = t), (g = n), v.tag)) {
            case 1:
              if (((y = v.payload), typeof y == "function")) {
                f = y.call(g, f, d);
                break e;
              }
              f = y;
              break e;
            case 3:
              y.flags = (y.flags & -65537) | 128;
            case 0:
              if (
                ((y = v.payload),
                (d = typeof y == "function" ? y.call(g, f, d) : y),
                d == null)
              )
                break e;
              f = Y({}, f, d);
              break e;
            case 2:
              Lt = !0;
          }
        }
        l.callback !== null &&
          l.lane !== 0 &&
          ((e.flags |= 64),
          (d = i.effects),
          d === null ? (i.effects = [l]) : d.push(l));
      } else
        ((g = {
          eventTime: g,
          lane: d,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null,
        }),
          c === null ? ((u = c = g), (a = f)) : (c = c.next = g),
          (o |= d));
      if (((l = l.next), l === null)) {
        if (((l = i.shared.pending), l === null)) break;
        ((d = l),
          (l = d.next),
          (d.next = null),
          (i.lastBaseUpdate = d),
          (i.shared.pending = null));
      }
    } while (!0);
    if (
      (c === null && (a = f),
      (i.baseState = a),
      (i.firstBaseUpdate = u),
      (i.lastBaseUpdate = c),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do ((o |= i.lane), (i = i.next));
      while (i !== t);
    } else s === null && (i.shared.lanes = 0);
    ((gn |= o), (e.lanes = o), (e.memoizedState = f));
  }
}
function Dc(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(C(191, i));
        i.call(r);
      }
    }
}
var li = {},
  pt = Yt(li),
  Yr = Yt(li),
  Qr = Yt(li);
function on(e) {
  if (e === li) throw Error(C(174));
  return e;
}
function Ka(e, t) {
  switch ((U(Qr, t), U(Yr, e), U(pt, li), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : ll(null, "");
      break;
    default:
      ((e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = ll(t, e)));
  }
  (H(pt), U(pt, t));
}
function Qn() {
  (H(pt), H(Yr), H(Qr));
}
function Uh(e) {
  on(Qr.current);
  var t = on(pt.current),
    n = ll(t, e.type);
  t !== n && (U(Yr, e), U(pt, n));
}
function Ga(e) {
  Yr.current === e && (H(pt), H(Yr));
}
var G = Yt(0);
function vs(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      ((t.child.return = t), (t = t.child));
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    ((t.sibling.return = t.return), (t = t.sibling));
  }
  return null;
}
var ko = [];
function Xa() {
  for (var e = 0; e < ko.length; e++)
    ko[e]._workInProgressVersionPrimary = null;
  ko.length = 0;
}
var $i = Pt.ReactCurrentDispatcher,
  Co = Pt.ReactCurrentBatchConfig,
  mn = 0,
  X = null,
  re = null,
  oe = null,
  xs = !1,
  Mr = !1,
  br = 0,
  C0 = 0;
function de() {
  throw Error(C(321));
}
function Ya(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!ot(e[n], t[n])) return !1;
  return !0;
}
function Qa(e, t, n, r, i, s) {
  if (
    ((mn = s),
    (X = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    ($i.current = e === null || e.memoizedState === null ? M0 : D0),
    (e = n(r, i)),
    Mr)
  ) {
    s = 0;
    do {
      if (((Mr = !1), (br = 0), 25 <= s)) throw Error(C(301));
      ((s += 1),
        (oe = re = null),
        (t.updateQueue = null),
        ($i.current = L0),
        (e = n(r, i)));
    } while (Mr);
  }
  if (
    (($i.current = ws),
    (t = re !== null && re.next !== null),
    (mn = 0),
    (oe = re = X = null),
    (xs = !1),
    t)
  )
    throw Error(C(300));
  return e;
}
function ba() {
  var e = br !== 0;
  return ((br = 0), e);
}
function ut() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return (oe === null ? (X.memoizedState = oe = e) : (oe = oe.next = e), oe);
}
function Ge() {
  if (re === null) {
    var e = X.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = re.next;
  var t = oe === null ? X.memoizedState : oe.next;
  if (t !== null) ((oe = t), (re = e));
  else {
    if (e === null) throw Error(C(310));
    ((re = e),
      (e = {
        memoizedState: re.memoizedState,
        baseState: re.baseState,
        baseQueue: re.baseQueue,
        queue: re.queue,
        next: null,
      }),
      oe === null ? (X.memoizedState = oe = e) : (oe = oe.next = e));
  }
  return oe;
}
function Zr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Eo(e) {
  var t = Ge(),
    n = t.queue;
  if (n === null) throw Error(C(311));
  n.lastRenderedReducer = e;
  var r = re,
    i = r.baseQueue,
    s = n.pending;
  if (s !== null) {
    if (i !== null) {
      var o = i.next;
      ((i.next = s.next), (s.next = o));
    }
    ((r.baseQueue = i = s), (n.pending = null));
  }
  if (i !== null) {
    ((s = i.next), (r = r.baseState));
    var l = (o = null),
      a = null,
      u = s;
    do {
      var c = u.lane;
      if ((mn & c) === c)
        (a !== null &&
          (a = a.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action)));
      else {
        var f = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        (a === null ? ((l = a = f), (o = r)) : (a = a.next = f),
          (X.lanes |= c),
          (gn |= c));
      }
      u = u.next;
    } while (u !== null && u !== s);
    (a === null ? (o = r) : (a.next = l),
      ot(r, t.memoizedState) || (Ce = !0),
      (t.memoizedState = r),
      (t.baseState = o),
      (t.baseQueue = a),
      (n.lastRenderedState = r));
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do ((s = i.lane), (X.lanes |= s), (gn |= s), (i = i.next));
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Po(e) {
  var t = Ge(),
    n = t.queue;
  if (n === null) throw Error(C(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    s = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var o = (i = i.next);
    do ((s = e(s, o.action)), (o = o.next));
    while (o !== i);
    (ot(s, t.memoizedState) || (Ce = !0),
      (t.memoizedState = s),
      t.baseQueue === null && (t.baseState = s),
      (n.lastRenderedState = s));
  }
  return [s, r];
}
function $h() {}
function Hh(e, t) {
  var n = X,
    r = Ge(),
    i = t(),
    s = !ot(r.memoizedState, i);
  if (
    (s && ((r.memoizedState = i), (Ce = !0)),
    (r = r.queue),
    Za(Xh.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || s || (oe !== null && oe.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      qr(9, Gh.bind(null, n, r, i, t), void 0, null),
      le === null)
    )
      throw Error(C(349));
    mn & 30 || Kh(n, t, i);
  }
  return i;
}
function Kh(e, t, n) {
  ((e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = X.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (X.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
}
function Gh(e, t, n, r) {
  ((t.value = n), (t.getSnapshot = r), Yh(t) && Qh(e));
}
function Xh(e, t, n) {
  return n(function () {
    Yh(t) && Qh(e);
  });
}
function Yh(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !ot(e, n);
  } catch {
    return !0;
  }
}
function Qh(e) {
  var t = Ct(e, 1);
  t !== null && it(t, e, 1, -1);
}
function Lc(e) {
  var t = ut();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Zr,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = A0.bind(null, X, e)),
    [t.memoizedState, e]
  );
}
function qr(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = X.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (X.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function bh() {
  return Ge().memoizedState;
}
function Hi(e, t, n, r) {
  var i = ut();
  ((X.flags |= e),
    (i.memoizedState = qr(1 | t, n, void 0, r === void 0 ? null : r)));
}
function Hs(e, t, n, r) {
  var i = Ge();
  r = r === void 0 ? null : r;
  var s = void 0;
  if (re !== null) {
    var o = re.memoizedState;
    if (((s = o.destroy), r !== null && Ya(r, o.deps))) {
      i.memoizedState = qr(t, n, s, r);
      return;
    }
  }
  ((X.flags |= e), (i.memoizedState = qr(1 | t, n, s, r)));
}
function Rc(e, t) {
  return Hi(8390656, 8, e, t);
}
function Za(e, t) {
  return Hs(2048, 8, e, t);
}
function Zh(e, t) {
  return Hs(4, 2, e, t);
}
function qh(e, t) {
  return Hs(4, 4, e, t);
}
function Jh(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function ep(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null),
    Hs(4, 4, Jh.bind(null, t, e), n)
  );
}
function qa() {}
function tp(e, t) {
  var n = Ge();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ya(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function np(e, t) {
  var n = Ge();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ya(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function rp(e, t, n) {
  return mn & 21
    ? (ot(n, t) || ((n = ah()), (X.lanes |= n), (gn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Ce = !0)), (e.memoizedState = n));
}
function E0(e, t) {
  var n = O;
  ((O = n !== 0 && 4 > n ? n : 4), e(!0));
  var r = Co.transition;
  Co.transition = {};
  try {
    (e(!1), t());
  } finally {
    ((O = n), (Co.transition = r));
  }
}
function ip() {
  return Ge().memoizedState;
}
function P0(e, t, n) {
  var r = Ut(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    sp(e))
  )
    op(t, n);
  else if (((n = Bh(e, t, n, r)), n !== null)) {
    var i = xe();
    (it(n, e, r, i), lp(n, t, r));
  }
}
function A0(e, t, n) {
  var r = Ut(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (sp(e)) op(t, i);
  else {
    var s = e.alternate;
    if (
      e.lanes === 0 &&
      (s === null || s.lanes === 0) &&
      ((s = t.lastRenderedReducer), s !== null)
    )
      try {
        var o = t.lastRenderedState,
          l = s(o, n);
        if (((i.hasEagerState = !0), (i.eagerState = l), ot(l, o))) {
          var a = t.interleaved;
          (a === null
            ? ((i.next = i), $a(t))
            : ((i.next = a.next), (a.next = i)),
            (t.interleaved = i));
          return;
        }
      } catch {
      } finally {
      }
    ((n = Bh(e, t, i, r)),
      n !== null && ((i = xe()), it(n, e, r, i), lp(n, t, r)));
  }
}
function sp(e) {
  var t = e.alternate;
  return e === X || (t !== null && t === X);
}
function op(e, t) {
  Mr = xs = !0;
  var n = e.pending;
  (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t));
}
function lp(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    ((r &= e.pendingLanes), (n |= r), (t.lanes = n), Da(e, n));
  }
}
var ws = {
    readContext: Ke,
    useCallback: de,
    useContext: de,
    useEffect: de,
    useImperativeHandle: de,
    useInsertionEffect: de,
    useLayoutEffect: de,
    useMemo: de,
    useReducer: de,
    useRef: de,
    useState: de,
    useDebugValue: de,
    useDeferredValue: de,
    useTransition: de,
    useMutableSource: de,
    useSyncExternalStore: de,
    useId: de,
    unstable_isNewReconciler: !1,
  },
  M0 = {
    readContext: Ke,
    useCallback: function (e, t) {
      return ((ut().memoizedState = [e, t === void 0 ? null : t]), e);
    },
    useContext: Ke,
    useEffect: Rc,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Hi(4194308, 4, Jh.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Hi(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Hi(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = ut();
      return (
        (t = t === void 0 ? null : t),
        (e = e()),
        (n.memoizedState = [e, t]),
        e
      );
    },
    useReducer: function (e, t, n) {
      var r = ut();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = P0.bind(null, X, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = ut();
      return ((e = { current: e }), (t.memoizedState = e));
    },
    useState: Lc,
    useDebugValue: qa,
    useDeferredValue: function (e) {
      return (ut().memoizedState = e);
    },
    useTransition: function () {
      var e = Lc(!1),
        t = e[0];
      return ((e = E0.bind(null, e[1])), (ut().memoizedState = e), [t, e]);
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = X,
        i = ut();
      if (K) {
        if (n === void 0) throw Error(C(407));
        n = n();
      } else {
        if (((n = t()), le === null)) throw Error(C(349));
        mn & 30 || Kh(r, t, n);
      }
      i.memoizedState = n;
      var s = { value: n, getSnapshot: t };
      return (
        (i.queue = s),
        Rc(Xh.bind(null, r, s, e), [e]),
        (r.flags |= 2048),
        qr(9, Gh.bind(null, r, s, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = ut(),
        t = le.identifierPrefix;
      if (K) {
        var n = wt,
          r = xt;
        ((n = (r & ~(1 << (32 - rt(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = br++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":"));
      } else ((n = C0++), (t = ":" + t + "r" + n.toString(32) + ":"));
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  D0 = {
    readContext: Ke,
    useCallback: tp,
    useContext: Ke,
    useEffect: Za,
    useImperativeHandle: ep,
    useInsertionEffect: Zh,
    useLayoutEffect: qh,
    useMemo: np,
    useReducer: Eo,
    useRef: bh,
    useState: function () {
      return Eo(Zr);
    },
    useDebugValue: qa,
    useDeferredValue: function (e) {
      var t = Ge();
      return rp(t, re.memoizedState, e);
    },
    useTransition: function () {
      var e = Eo(Zr)[0],
        t = Ge().memoizedState;
      return [e, t];
    },
    useMutableSource: $h,
    useSyncExternalStore: Hh,
    useId: ip,
    unstable_isNewReconciler: !1,
  },
  L0 = {
    readContext: Ke,
    useCallback: tp,
    useContext: Ke,
    useEffect: Za,
    useImperativeHandle: ep,
    useInsertionEffect: Zh,
    useLayoutEffect: qh,
    useMemo: np,
    useReducer: Po,
    useRef: bh,
    useState: function () {
      return Po(Zr);
    },
    useDebugValue: qa,
    useDeferredValue: function (e) {
      var t = Ge();
      return re === null ? (t.memoizedState = e) : rp(t, re.memoizedState, e);
    },
    useTransition: function () {
      var e = Po(Zr)[0],
        t = Ge().memoizedState;
      return [e, t];
    },
    useMutableSource: $h,
    useSyncExternalStore: Hh,
    useId: ip,
    unstable_isNewReconciler: !1,
  };
function qe(e, t) {
  if (e && e.defaultProps) {
    ((t = Y({}, t)), (e = e.defaultProps));
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Ml(e, t, n, r) {
  ((t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : Y({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n));
}
var Ks = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? xn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = xe(),
      i = Ut(e),
      s = St(r, i);
    ((s.payload = t),
      n != null && (s.callback = n),
      (t = Bt(e, s, i)),
      t !== null && (it(t, e, i, r), Ui(t, e, i)));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = xe(),
      i = Ut(e),
      s = St(r, i);
    ((s.tag = 1),
      (s.payload = t),
      n != null && (s.callback = n),
      (t = Bt(e, s, i)),
      t !== null && (it(t, e, i, r), Ui(t, e, i)));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = xe(),
      r = Ut(e),
      i = St(n, r);
    ((i.tag = 2),
      t != null && (i.callback = t),
      (t = Bt(e, i, r)),
      t !== null && (it(t, e, r, n), Ui(t, e, r)));
  },
};
function Vc(e, t, n, r, i, s, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, s, o)
      : t.prototype && t.prototype.isPureReactComponent
        ? !Hr(n, r) || !Hr(i, s)
        : !0
  );
}
function ap(e, t, n) {
  var r = !1,
    i = Kt,
    s = t.contextType;
  return (
    typeof s == "object" && s !== null
      ? (s = Ke(s))
      : ((i = Pe(t) ? hn : me.current),
        (r = t.contextTypes),
        (s = (r = r != null) ? Gn(e, i) : Kt)),
    (t = new t(n, s)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Ks),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = s)),
    t
  );
}
function jc(e, t, n, r) {
  ((e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Ks.enqueueReplaceState(t, t.state, null));
}
function Dl(e, t, n, r) {
  var i = e.stateNode;
  ((i.props = n), (i.state = e.memoizedState), (i.refs = {}), Ha(e));
  var s = t.contextType;
  (typeof s == "object" && s !== null
    ? (i.context = Ke(s))
    : ((s = Pe(t) ? hn : me.current), (i.context = Gn(e, s))),
    (i.state = e.memoizedState),
    (s = t.getDerivedStateFromProps),
    typeof s == "function" && (Ml(e, t, s, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && Ks.enqueueReplaceState(i, i.state, null),
      ys(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308));
}
function bn(e, t) {
  try {
    var n = "",
      r = t;
    do ((n += iy(r)), (r = r.return));
    while (r);
    var i = n;
  } catch (s) {
    i =
      `
Error generating stack: ` +
      s.message +
      `
` +
      s.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function Ao(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Ll(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var R0 = typeof WeakMap == "function" ? WeakMap : Map;
function up(e, t, n) {
  ((n = St(-1, n)), (n.tag = 3), (n.payload = { element: null }));
  var r = t.value;
  return (
    (n.callback = function () {
      (Ts || ((Ts = !0), (Bl = r)), Ll(e, t));
    }),
    n
  );
}
function cp(e, t, n) {
  ((n = St(-1, n)), (n.tag = 3));
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    ((n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        Ll(e, t);
      }));
  }
  var s = e.stateNode;
  return (
    s !== null &&
      typeof s.componentDidCatch == "function" &&
      (n.callback = function () {
        (Ll(e, t),
          typeof r != "function" &&
            (Wt === null ? (Wt = new Set([this])) : Wt.add(this)));
        var o = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: o !== null ? o : "",
        });
      }),
    n
  );
}
function Ic(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new R0();
    var i = new Set();
    r.set(t, i);
  } else ((i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i)));
  i.has(n) || (i.add(n), (e = K0.bind(null, e, t, n)), t.then(e, e));
}
function Nc(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function _c(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = St(-1, 1)), (t.tag = 2), Bt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var V0 = Pt.ReactCurrentOwner,
  Ce = !1;
function ge(e, t, n, r) {
  t.child = e === null ? Oh(t, null, n, r) : Yn(t, e.child, n, r);
}
function zc(e, t, n, r, i) {
  n = n.render;
  var s = t.ref;
  return (
    $n(t, i),
    (r = Qa(e, t, n, r, s, i)),
    (n = ba()),
    e !== null && !Ce
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        Et(e, t, i))
      : (K && n && za(t), (t.flags |= 1), ge(e, t, r, i), t.child)
  );
}
function Fc(e, t, n, r, i) {
  if (e === null) {
    var s = n.type;
    return typeof s == "function" &&
      !ou(s) &&
      s.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = s), fp(e, t, s, r, i))
      : ((e = Yi(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((s = e.child), !(e.lanes & i))) {
    var o = s.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Hr), n(o, r) && e.ref === t.ref)
    )
      return Et(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = $t(s, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function fp(e, t, n, r, i) {
  if (e !== null) {
    var s = e.memoizedProps;
    if (Hr(s, r) && e.ref === t.ref)
      if (((Ce = !1), (t.pendingProps = r = s), (e.lanes & i) !== 0))
        e.flags & 131072 && (Ce = !0);
      else return ((t.lanes = e.lanes), Et(e, t, i));
  }
  return Rl(e, t, n, r, i);
}
function dp(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    s = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        U(In, Ve),
        (Ve |= n));
    else {
      if (!(n & 1073741824))
        return (
          (e = s !== null ? s.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          U(In, Ve),
          (Ve |= e),
          null
        );
      ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = s !== null ? s.baseLanes : n),
        U(In, Ve),
        (Ve |= r));
    }
  else
    (s !== null ? ((r = s.baseLanes | n), (t.memoizedState = null)) : (r = n),
      U(In, Ve),
      (Ve |= r));
  return (ge(e, t, i, n), t.child);
}
function hp(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Rl(e, t, n, r, i) {
  var s = Pe(n) ? hn : me.current;
  return (
    (s = Gn(t, s)),
    $n(t, i),
    (n = Qa(e, t, n, r, s, i)),
    (r = ba()),
    e !== null && !Ce
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        Et(e, t, i))
      : (K && r && za(t), (t.flags |= 1), ge(e, t, n, i), t.child)
  );
}
function Oc(e, t, n, r, i) {
  if (Pe(n)) {
    var s = !0;
    ds(t);
  } else s = !1;
  if (($n(t, i), t.stateNode === null))
    (Ki(e, t), ap(t, n, r), Dl(t, n, r, i), (r = !0));
  else if (e === null) {
    var o = t.stateNode,
      l = t.memoizedProps;
    o.props = l;
    var a = o.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = Ke(u))
      : ((u = Pe(n) ? hn : me.current), (u = Gn(t, u)));
    var c = n.getDerivedStateFromProps,
      f =
        typeof c == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function";
    (f ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((l !== r || a !== u) && jc(t, o, r, u)),
      (Lt = !1));
    var d = t.memoizedState;
    ((o.state = d),
      ys(t, r, o, i),
      (a = t.memoizedState),
      l !== r || d !== a || Ee.current || Lt
        ? (typeof c == "function" && (Ml(t, n, c, r), (a = t.memoizedState)),
          (l = Lt || Vc(t, n, l, r, d, a, u))
            ? (f ||
                (typeof o.UNSAFE_componentWillMount != "function" &&
                  typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = a)),
          (o.props = r),
          (o.state = a),
          (o.context = u),
          (r = l))
        : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1)));
  } else {
    ((o = t.stateNode),
      Wh(e, t),
      (l = t.memoizedProps),
      (u = t.type === t.elementType ? l : qe(t.type, l)),
      (o.props = u),
      (f = t.pendingProps),
      (d = o.context),
      (a = n.contextType),
      typeof a == "object" && a !== null
        ? (a = Ke(a))
        : ((a = Pe(n) ? hn : me.current), (a = Gn(t, a))));
    var g = n.getDerivedStateFromProps;
    ((c =
      typeof g == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((l !== f || d !== a) && jc(t, o, r, a)),
      (Lt = !1),
      (d = t.memoizedState),
      (o.state = d),
      ys(t, r, o, i));
    var y = t.memoizedState;
    l !== f || d !== y || Ee.current || Lt
      ? (typeof g == "function" && (Ml(t, n, g, r), (y = t.memoizedState)),
        (u = Lt || Vc(t, n, u, r, d, y, a) || !1)
          ? (c ||
              (typeof o.UNSAFE_componentWillUpdate != "function" &&
                typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" &&
                o.componentWillUpdate(r, y, a),
              typeof o.UNSAFE_componentWillUpdate == "function" &&
                o.UNSAFE_componentWillUpdate(r, y, a)),
            typeof o.componentDidUpdate == "function" && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (l === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (l === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = y)),
        (o.props = r),
        (o.state = y),
        (o.context = a),
        (r = u))
      : (typeof o.componentDidUpdate != "function" ||
          (l === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (l === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Vl(e, t, n, r, s, i);
}
function Vl(e, t, n, r, i, s) {
  hp(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return (i && Cc(t, n, !1), Et(e, t, s));
  ((r = t.stateNode), (V0.current = t));
  var l =
    o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && o
      ? ((t.child = Yn(t, e.child, null, s)), (t.child = Yn(t, null, l, s)))
      : ge(e, t, l, s),
    (t.memoizedState = r.state),
    i && Cc(t, n, !0),
    t.child
  );
}
function pp(e) {
  var t = e.stateNode;
  (t.pendingContext
    ? kc(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && kc(e, t.context, !1),
    Ka(e, t.containerInfo));
}
function Bc(e, t, n, r, i) {
  return (Xn(), Oa(i), (t.flags |= 256), ge(e, t, n, r), t.child);
}
var jl = { dehydrated: null, treeContext: null, retryLane: 0 };
function Il(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function mp(e, t, n) {
  var r = t.pendingProps,
    i = G.current,
    s = !1,
    o = (t.flags & 128) !== 0,
    l;
  if (
    ((l = o) ||
      (l = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    l
      ? ((s = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    U(G, i & 1),
    e === null)
  )
    return (
      Pl(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((o = r.children),
          (e = r.fallback),
          s
            ? ((r = t.mode),
              (s = t.child),
              (o = { mode: "hidden", children: o }),
              !(r & 1) && s !== null
                ? ((s.childLanes = 0), (s.pendingProps = o))
                : (s = Ys(o, r, 0, null)),
              (e = cn(e, r, n, null)),
              (s.return = t),
              (e.return = t),
              (s.sibling = e),
              (t.child = s),
              (t.child.memoizedState = Il(n)),
              (t.memoizedState = jl),
              e)
            : Ja(t, o))
    );
  if (((i = e.memoizedState), i !== null && ((l = i.dehydrated), l !== null)))
    return j0(e, t, o, r, l, i, n);
  if (s) {
    ((s = r.fallback), (o = t.mode), (i = e.child), (l = i.sibling));
    var a = { mode: "hidden", children: r.children };
    return (
      !(o & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = a),
          (t.deletions = null))
        : ((r = $t(i, a)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      l !== null ? (s = $t(l, s)) : ((s = cn(s, o, n, null)), (s.flags |= 2)),
      (s.return = t),
      (r.return = t),
      (r.sibling = s),
      (t.child = r),
      (r = s),
      (s = t.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? Il(n)
          : {
              baseLanes: o.baseLanes | n,
              cachePool: null,
              transitions: o.transitions,
            }),
      (s.memoizedState = o),
      (s.childLanes = e.childLanes & ~n),
      (t.memoizedState = jl),
      r
    );
  }
  return (
    (s = e.child),
    (e = s.sibling),
    (r = $t(s, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Ja(e, t) {
  return (
    (t = Ys({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Mi(e, t, n, r) {
  return (
    r !== null && Oa(r),
    Yn(t, e.child, null, n),
    (e = Ja(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function j0(e, t, n, r, i, s, o) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Ao(Error(C(422)))), Mi(e, t, o, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((s = r.fallback),
          (i = t.mode),
          (r = Ys({ mode: "visible", children: r.children }, i, 0, null)),
          (s = cn(s, i, o, null)),
          (s.flags |= 2),
          (r.return = t),
          (s.return = t),
          (r.sibling = s),
          (t.child = r),
          t.mode & 1 && Yn(t, e.child, null, o),
          (t.child.memoizedState = Il(o)),
          (t.memoizedState = jl),
          s);
  if (!(t.mode & 1)) return Mi(e, t, o, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var l = r.dgst;
    return (
      (r = l),
      (s = Error(C(419))),
      (r = Ao(s, r, void 0)),
      Mi(e, t, o, r)
    );
  }
  if (((l = (o & e.childLanes) !== 0), Ce || l)) {
    if (((r = le), r !== null)) {
      switch (o & -o) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      ((i = i & (r.suspendedLanes | o) ? 0 : i),
        i !== 0 &&
          i !== s.retryLane &&
          ((s.retryLane = i), Ct(e, i), it(r, e, i, -1)));
    }
    return (su(), (r = Ao(Error(C(421)))), Mi(e, t, o, r));
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = G0.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = s.treeContext),
      (je = Ot(i.nextSibling)),
      (Ie = t),
      (K = !0),
      (et = null),
      e !== null &&
        ((Be[We++] = xt),
        (Be[We++] = wt),
        (Be[We++] = pn),
        (xt = e.id),
        (wt = e.overflow),
        (pn = t)),
      (t = Ja(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Wc(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  (r !== null && (r.lanes |= t), Al(e.return, t, n));
}
function Mo(e, t, n, r, i) {
  var s = e.memoizedState;
  s === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((s.isBackwards = t),
      (s.rendering = null),
      (s.renderingStartTime = 0),
      (s.last = r),
      (s.tail = n),
      (s.tailMode = i));
}
function gp(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    s = r.tail;
  if ((ge(e, t, r.children, n), (r = G.current), r & 2))
    ((r = (r & 1) | 2), (t.flags |= 128));
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Wc(e, n, t);
        else if (e.tag === 19) Wc(e, n, t);
        else if (e.child !== null) {
          ((e.child.return = e), (e = e.child));
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        ((e.sibling.return = e.return), (e = e.sibling));
      }
    r &= 1;
  }
  if ((U(G, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          ((e = n.alternate),
            e !== null && vs(e) === null && (i = n),
            (n = n.sibling));
        ((n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          Mo(t, !1, i, n, s));
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && vs(e) === null)) {
            t.child = i;
            break;
          }
          ((e = i.sibling), (i.sibling = n), (n = i), (i = e));
        }
        Mo(t, !0, n, null, s);
        break;
      case "together":
        Mo(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Ki(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Et(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (gn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(C(153));
  if (t.child !== null) {
    for (
      e = t.child, n = $t(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;
    )
      ((e = e.sibling),
        (n = n.sibling = $t(e, e.pendingProps)),
        (n.return = t));
    n.sibling = null;
  }
  return t.child;
}
function I0(e, t, n) {
  switch (t.tag) {
    case 3:
      (pp(t), Xn());
      break;
    case 5:
      Uh(t);
      break;
    case 1:
      Pe(t.type) && ds(t);
      break;
    case 4:
      Ka(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      (U(ms, r._currentValue), (r._currentValue = i));
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (U(G, G.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? mp(e, t, n)
            : (U(G, G.current & 1),
              (e = Et(e, t, n)),
              e !== null ? e.sibling : null);
      U(G, G.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return gp(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        U(G, G.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return ((t.lanes = 0), dp(e, t, n));
  }
  return Et(e, t, n);
}
var yp, Nl, vp, xp;
yp = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      ((n.child.return = n), (n = n.child));
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    ((n.sibling.return = n.return), (n = n.sibling));
  }
};
Nl = function () {};
vp = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    ((e = t.stateNode), on(pt.current));
    var s = null;
    switch (n) {
      case "input":
        ((i = rl(e, i)), (r = rl(e, r)), (s = []));
        break;
      case "select":
        ((i = Y({}, i, { value: void 0 })),
          (r = Y({}, r, { value: void 0 })),
          (s = []));
        break;
      case "textarea":
        ((i = ol(e, i)), (r = ol(e, r)), (s = []));
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = cs);
    }
    al(n, r);
    var o;
    n = null;
    for (u in i)
      if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
        if (u === "style") {
          var l = i[u];
          for (o in l) l.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (zr.hasOwnProperty(u)
              ? s || (s = [])
              : (s = s || []).push(u, null));
    for (u in r) {
      var a = r[u];
      if (
        ((l = i != null ? i[u] : void 0),
        r.hasOwnProperty(u) && a !== l && (a != null || l != null))
      )
        if (u === "style")
          if (l) {
            for (o in l)
              !l.hasOwnProperty(o) ||
                (a && a.hasOwnProperty(o)) ||
                (n || (n = {}), (n[o] = ""));
            for (o in a)
              a.hasOwnProperty(o) &&
                l[o] !== a[o] &&
                (n || (n = {}), (n[o] = a[o]));
          } else (n || (s || (s = []), s.push(u, n)), (n = a));
        else
          u === "dangerouslySetInnerHTML"
            ? ((a = a ? a.__html : void 0),
              (l = l ? l.__html : void 0),
              a != null && l !== a && (s = s || []).push(u, a))
            : u === "children"
              ? (typeof a != "string" && typeof a != "number") ||
                (s = s || []).push(u, "" + a)
              : u !== "suppressContentEditableWarning" &&
                u !== "suppressHydrationWarning" &&
                (zr.hasOwnProperty(u)
                  ? (a != null && u === "onScroll" && $("scroll", e),
                    s || l === a || (s = []))
                  : (s = s || []).push(u, a));
    }
    n && (s = s || []).push("style", n);
    var u = s;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
xp = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function pr(e, t) {
  if (!K)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          (t.alternate !== null && (n = t), (t = t.sibling));
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          (n.alternate !== null && (r = n), (n = n.sibling));
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function he(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      ((n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling));
  else
    for (i = e.child; i !== null; )
      ((n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling));
  return ((e.subtreeFlags |= r), (e.childLanes = n), t);
}
function N0(e, t, n) {
  var r = t.pendingProps;
  switch ((Fa(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return (he(t), null);
    case 1:
      return (Pe(t.type) && fs(), he(t), null);
    case 3:
      return (
        (r = t.stateNode),
        Qn(),
        H(Ee),
        H(me),
        Xa(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Pi(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), et !== null && ($l(et), (et = null)))),
        Nl(e, t),
        he(t),
        null
      );
    case 5:
      Ga(t);
      var i = on(Qr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        (vp(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(C(166));
          return (he(t), null);
        }
        if (((e = on(pt.current)), Pi(t))) {
          ((r = t.stateNode), (n = t.type));
          var s = t.memoizedProps;
          switch (((r[dt] = t), (r[Xr] = s), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              ($("cancel", r), $("close", r));
              break;
            case "iframe":
            case "object":
            case "embed":
              $("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < wr.length; i++) $(wr[i], r);
              break;
            case "source":
              $("error", r);
              break;
            case "img":
            case "image":
            case "link":
              ($("error", r), $("load", r));
              break;
            case "details":
              $("toggle", r);
              break;
            case "input":
              (bu(r, s), $("invalid", r));
              break;
            case "select":
              ((r._wrapperState = { wasMultiple: !!s.multiple }),
                $("invalid", r));
              break;
            case "textarea":
              (qu(r, s), $("invalid", r));
          }
          (al(n, s), (i = null));
          for (var o in s)
            if (s.hasOwnProperty(o)) {
              var l = s[o];
              o === "children"
                ? typeof l == "string"
                  ? r.textContent !== l &&
                    (s.suppressHydrationWarning !== !0 &&
                      Ei(r.textContent, l, e),
                    (i = ["children", l]))
                  : typeof l == "number" &&
                    r.textContent !== "" + l &&
                    (s.suppressHydrationWarning !== !0 &&
                      Ei(r.textContent, l, e),
                    (i = ["children", "" + l]))
                : zr.hasOwnProperty(o) &&
                  l != null &&
                  o === "onScroll" &&
                  $("scroll", r);
            }
          switch (n) {
            case "input":
              (yi(r), Zu(r, s, !0));
              break;
            case "textarea":
              (yi(r), Ju(r));
              break;
            case "select":
            case "option":
              break;
            default:
              typeof s.onClick == "function" && (r.onclick = cs);
          }
          ((r = i), (t.updateQueue = r), r !== null && (t.flags |= 4));
        } else {
          ((o = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Xd(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = o.createElement("div")),
                  (e.innerHTML = "<script><\/script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                  ? (e = o.createElement(n, { is: r.is }))
                  : ((e = o.createElement(n)),
                    n === "select" &&
                      ((o = e),
                      r.multiple
                        ? (o.multiple = !0)
                        : r.size && (o.size = r.size)))
              : (e = o.createElementNS(e, n)),
            (e[dt] = t),
            (e[Xr] = r),
            yp(e, t, !1, !1),
            (t.stateNode = e));
          e: {
            switch (((o = ul(n, r)), n)) {
              case "dialog":
                ($("cancel", e), $("close", e), (i = r));
                break;
              case "iframe":
              case "object":
              case "embed":
                ($("load", e), (i = r));
                break;
              case "video":
              case "audio":
                for (i = 0; i < wr.length; i++) $(wr[i], e);
                i = r;
                break;
              case "source":
                ($("error", e), (i = r));
                break;
              case "img":
              case "image":
              case "link":
                ($("error", e), $("load", e), (i = r));
                break;
              case "details":
                ($("toggle", e), (i = r));
                break;
              case "input":
                (bu(e, r), (i = rl(e, r)), $("invalid", e));
                break;
              case "option":
                i = r;
                break;
              case "select":
                ((e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = Y({}, r, { value: void 0 })),
                  $("invalid", e));
                break;
              case "textarea":
                (qu(e, r), (i = ol(e, r)), $("invalid", e));
                break;
              default:
                i = r;
            }
            (al(n, i), (l = i));
            for (s in l)
              if (l.hasOwnProperty(s)) {
                var a = l[s];
                s === "style"
                  ? bd(e, a)
                  : s === "dangerouslySetInnerHTML"
                    ? ((a = a ? a.__html : void 0), a != null && Yd(e, a))
                    : s === "children"
                      ? typeof a == "string"
                        ? (n !== "textarea" || a !== "") && Fr(e, a)
                        : typeof a == "number" && Fr(e, "" + a)
                      : s !== "suppressContentEditableWarning" &&
                        s !== "suppressHydrationWarning" &&
                        s !== "autoFocus" &&
                        (zr.hasOwnProperty(s)
                          ? a != null && s === "onScroll" && $("scroll", e)
                          : a != null && ka(e, s, a, o));
              }
            switch (n) {
              case "input":
                (yi(e), Zu(e, r, !1));
                break;
              case "textarea":
                (yi(e), Ju(e));
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Ht(r.value));
                break;
              case "select":
                ((e.multiple = !!r.multiple),
                  (s = r.value),
                  s != null
                    ? On(e, !!r.multiple, s, !1)
                    : r.defaultValue != null &&
                      On(e, !!r.multiple, r.defaultValue, !0));
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = cs);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return (he(t), null);
    case 6:
      if (e && t.stateNode != null) xp(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(C(166));
        if (((n = on(Qr.current)), on(pt.current), Pi(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[dt] = t),
            (s = r.nodeValue !== n) && ((e = Ie), e !== null))
          )
            switch (e.tag) {
              case 3:
                Ei(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Ei(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          s && (t.flags |= 4);
        } else
          ((r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[dt] = t),
            (t.stateNode = r));
      }
      return (he(t), null);
    case 13:
      if (
        (H(G),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (K && je !== null && t.mode & 1 && !(t.flags & 128))
          (zh(), Xn(), (t.flags |= 98560), (s = !1));
        else if (((s = Pi(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!s) throw Error(C(318));
            if (
              ((s = t.memoizedState),
              (s = s !== null ? s.dehydrated : null),
              !s)
            )
              throw Error(C(317));
            s[dt] = t;
          } else
            (Xn(),
              !(t.flags & 128) && (t.memoizedState = null),
              (t.flags |= 4));
          (he(t), (s = !1));
        } else (et !== null && ($l(et), (et = null)), (s = !0));
        if (!s) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || G.current & 1 ? ie === 0 && (ie = 3) : su())),
          t.updateQueue !== null && (t.flags |= 4),
          he(t),
          null);
    case 4:
      return (
        Qn(),
        Nl(e, t),
        e === null && Kr(t.stateNode.containerInfo),
        he(t),
        null
      );
    case 10:
      return (Ua(t.type._context), he(t), null);
    case 17:
      return (Pe(t.type) && fs(), he(t), null);
    case 19:
      if ((H(G), (s = t.memoizedState), s === null)) return (he(t), null);
      if (((r = (t.flags & 128) !== 0), (o = s.rendering), o === null))
        if (r) pr(s, !1);
        else {
          if (ie !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((o = vs(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    pr(s, !1),
                    r = o.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;
                )
                  ((s = n),
                    (e = r),
                    (s.flags &= 14680066),
                    (o = s.alternate),
                    o === null
                      ? ((s.childLanes = 0),
                        (s.lanes = e),
                        (s.child = null),
                        (s.subtreeFlags = 0),
                        (s.memoizedProps = null),
                        (s.memoizedState = null),
                        (s.updateQueue = null),
                        (s.dependencies = null),
                        (s.stateNode = null))
                      : ((s.childLanes = o.childLanes),
                        (s.lanes = o.lanes),
                        (s.child = o.child),
                        (s.subtreeFlags = 0),
                        (s.deletions = null),
                        (s.memoizedProps = o.memoizedProps),
                        (s.memoizedState = o.memoizedState),
                        (s.updateQueue = o.updateQueue),
                        (s.type = o.type),
                        (e = o.dependencies),
                        (s.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling));
                return (U(G, (G.current & 1) | 2), t.child);
              }
              e = e.sibling;
            }
          s.tail !== null &&
            Z() > Zn &&
            ((t.flags |= 128), (r = !0), pr(s, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = vs(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              pr(s, !0),
              s.tail === null && s.tailMode === "hidden" && !o.alternate && !K)
            )
              return (he(t), null);
          } else
            2 * Z() - s.renderingStartTime > Zn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), pr(s, !1), (t.lanes = 4194304));
        s.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : ((n = s.last),
            n !== null ? (n.sibling = o) : (t.child = o),
            (s.last = o));
      }
      return s.tail !== null
        ? ((t = s.tail),
          (s.rendering = t),
          (s.tail = t.sibling),
          (s.renderingStartTime = Z()),
          (t.sibling = null),
          (n = G.current),
          U(G, r ? (n & 1) | 2 : n & 1),
          t)
        : (he(t), null);
    case 22:
    case 23:
      return (
        iu(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Ve & 1073741824 && (he(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : he(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(C(156, t.tag));
}
function _0(e, t) {
  switch ((Fa(t), t.tag)) {
    case 1:
      return (
        Pe(t.type) && fs(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Qn(),
        H(Ee),
        H(me),
        Xa(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return (Ga(t), null);
    case 13:
      if ((H(G), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(C(340));
        Xn();
      }
      return (
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return (H(G), null);
    case 4:
      return (Qn(), null);
    case 10:
      return (Ua(t.type._context), null);
    case 22:
    case 23:
      return (iu(), null);
    case 24:
      return null;
    default:
      return null;
  }
}
var Di = !1,
  pe = !1,
  z0 = typeof WeakSet == "function" ? WeakSet : Set,
  D = null;
function jn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        b(e, t, r);
      }
    else n.current = null;
}
function _l(e, t, n) {
  try {
    n();
  } catch (r) {
    b(e, t, r);
  }
}
var Uc = !1;
function F0(e, t) {
  if (((xl = ls), (e = Ch()), _a(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            s = r.focusNode;
          r = r.focusOffset;
          try {
            (n.nodeType, s.nodeType);
          } catch {
            n = null;
            break e;
          }
          var o = 0,
            l = -1,
            a = -1,
            u = 0,
            c = 0,
            f = e,
            d = null;
          t: for (;;) {
            for (
              var g;
              f !== n || (i !== 0 && f.nodeType !== 3) || (l = o + i),
                f !== s || (r !== 0 && f.nodeType !== 3) || (a = o + r),
                f.nodeType === 3 && (o += f.nodeValue.length),
                (g = f.firstChild) !== null;
            )
              ((d = f), (f = g));
            for (;;) {
              if (f === e) break t;
              if (
                (d === n && ++u === i && (l = o),
                d === s && ++c === r && (a = o),
                (g = f.nextSibling) !== null)
              )
                break;
              ((f = d), (d = f.parentNode));
            }
            f = g;
          }
          n = l === -1 || a === -1 ? null : { start: l, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (wl = { focusedElem: e, selectionRange: n }, ls = !1, D = t; D !== null; )
    if (((t = D), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      ((e.return = t), (D = e));
    else
      for (; D !== null; ) {
        t = D;
        try {
          var y = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (y !== null) {
                  var v = y.memoizedProps,
                    w = y.memoizedState,
                    p = t.stateNode,
                    h = p.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? v : qe(t.type, v),
                      w,
                    );
                  p.__reactInternalSnapshotBeforeUpdate = h;
                }
                break;
              case 3:
                var m = t.stateNode.containerInfo;
                m.nodeType === 1
                  ? (m.textContent = "")
                  : m.nodeType === 9 &&
                    m.documentElement &&
                    m.removeChild(m.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(C(163));
            }
        } catch (x) {
          b(t, t.return, x);
        }
        if (((e = t.sibling), e !== null)) {
          ((e.return = t.return), (D = e));
          break;
        }
        D = t.return;
      }
  return ((y = Uc), (Uc = !1), y);
}
function Dr(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var s = i.destroy;
        ((i.destroy = void 0), s !== void 0 && _l(t, n, s));
      }
      i = i.next;
    } while (i !== r);
  }
}
function Gs(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function zl(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function wp(e) {
  var t = e.alternate;
  (t !== null && ((e.alternate = null), wp(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[dt], delete t[Xr], delete t[kl], delete t[w0], delete t[S0])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null));
}
function Sp(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function $c(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Sp(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;
    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      ((e.child.return = e), (e = e.child));
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Fl(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    ((e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = cs)));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Fl(e, t, n), e = e.sibling; e !== null; )
      (Fl(e, t, n), (e = e.sibling));
}
function Ol(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Ol(e, t, n), e = e.sibling; e !== null; )
      (Ol(e, t, n), (e = e.sibling));
}
var ae = null,
  Je = !1;
function At(e, t, n) {
  for (n = n.child; n !== null; ) (Tp(e, t, n), (n = n.sibling));
}
function Tp(e, t, n) {
  if (ht && typeof ht.onCommitFiberUnmount == "function")
    try {
      ht.onCommitFiberUnmount(Fs, n);
    } catch {}
  switch (n.tag) {
    case 5:
      pe || jn(n, t);
    case 6:
      var r = ae,
        i = Je;
      ((ae = null),
        At(e, t, n),
        (ae = r),
        (Je = i),
        ae !== null &&
          (Je
            ? ((e = ae),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : ae.removeChild(n.stateNode)));
      break;
    case 18:
      ae !== null &&
        (Je
          ? ((e = ae),
            (n = n.stateNode),
            e.nodeType === 8
              ? So(e.parentNode, n)
              : e.nodeType === 1 && So(e, n),
            Ur(e))
          : So(ae, n.stateNode));
      break;
    case 4:
      ((r = ae),
        (i = Je),
        (ae = n.stateNode.containerInfo),
        (Je = !0),
        At(e, t, n),
        (ae = r),
        (Je = i));
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !pe &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var s = i,
            o = s.destroy;
          ((s = s.tag),
            o !== void 0 && (s & 2 || s & 4) && _l(n, t, o),
            (i = i.next));
        } while (i !== r);
      }
      At(e, t, n);
      break;
    case 1:
      if (
        !pe &&
        (jn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          ((r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount());
        } catch (l) {
          b(n, t, l);
        }
      At(e, t, n);
      break;
    case 21:
      At(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((pe = (r = pe) || n.memoizedState !== null), At(e, t, n), (pe = r))
        : At(e, t, n);
      break;
    default:
      At(e, t, n);
  }
}
function Hc(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    (n === null && (n = e.stateNode = new z0()),
      t.forEach(function (r) {
        var i = X0.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      }));
  }
}
function Qe(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var s = e,
          o = t,
          l = o;
        e: for (; l !== null; ) {
          switch (l.tag) {
            case 5:
              ((ae = l.stateNode), (Je = !1));
              break e;
            case 3:
              ((ae = l.stateNode.containerInfo), (Je = !0));
              break e;
            case 4:
              ((ae = l.stateNode.containerInfo), (Je = !0));
              break e;
          }
          l = l.return;
        }
        if (ae === null) throw Error(C(160));
        (Tp(s, o, i), (ae = null), (Je = !1));
        var a = i.alternate;
        (a !== null && (a.return = null), (i.return = null));
      } catch (u) {
        b(i, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) (kp(t, e), (t = t.sibling));
}
function kp(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Qe(t, e), at(e), r & 4)) {
        try {
          (Dr(3, e, e.return), Gs(3, e));
        } catch (v) {
          b(e, e.return, v);
        }
        try {
          Dr(5, e, e.return);
        } catch (v) {
          b(e, e.return, v);
        }
      }
      break;
    case 1:
      (Qe(t, e), at(e), r & 512 && n !== null && jn(n, n.return));
      break;
    case 5:
      if (
        (Qe(t, e),
        at(e),
        r & 512 && n !== null && jn(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          Fr(i, "");
        } catch (v) {
          b(e, e.return, v);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var s = e.memoizedProps,
          o = n !== null ? n.memoizedProps : s,
          l = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            (l === "input" && s.type === "radio" && s.name != null && Kd(i, s),
              ul(l, o));
            var u = ul(l, s);
            for (o = 0; o < a.length; o += 2) {
              var c = a[o],
                f = a[o + 1];
              c === "style"
                ? bd(i, f)
                : c === "dangerouslySetInnerHTML"
                  ? Yd(i, f)
                  : c === "children"
                    ? Fr(i, f)
                    : ka(i, c, f, u);
            }
            switch (l) {
              case "input":
                il(i, s);
                break;
              case "textarea":
                Gd(i, s);
                break;
              case "select":
                var d = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!s.multiple;
                var g = s.value;
                g != null
                  ? On(i, !!s.multiple, g, !1)
                  : d !== !!s.multiple &&
                    (s.defaultValue != null
                      ? On(i, !!s.multiple, s.defaultValue, !0)
                      : On(i, !!s.multiple, s.multiple ? [] : "", !1));
            }
            i[Xr] = s;
          } catch (v) {
            b(e, e.return, v);
          }
      }
      break;
    case 6:
      if ((Qe(t, e), at(e), r & 4)) {
        if (e.stateNode === null) throw Error(C(162));
        ((i = e.stateNode), (s = e.memoizedProps));
        try {
          i.nodeValue = s;
        } catch (v) {
          b(e, e.return, v);
        }
      }
      break;
    case 3:
      if (
        (Qe(t, e), at(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Ur(t.containerInfo);
        } catch (v) {
          b(e, e.return, v);
        }
      break;
    case 4:
      (Qe(t, e), at(e));
      break;
    case 13:
      (Qe(t, e),
        at(e),
        (i = e.child),
        i.flags & 8192 &&
          ((s = i.memoizedState !== null),
          (i.stateNode.isHidden = s),
          !s ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (nu = Z())),
        r & 4 && Hc(e));
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((pe = (u = pe) || c), Qe(t, e), (pe = u)) : Qe(t, e),
        at(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !c && e.mode & 1)
        )
          for (D = e, c = e.child; c !== null; ) {
            for (f = D = c; D !== null; ) {
              switch (((d = D), (g = d.child), d.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Dr(4, d, d.return);
                  break;
                case 1:
                  jn(d, d.return);
                  var y = d.stateNode;
                  if (typeof y.componentWillUnmount == "function") {
                    ((r = d), (n = d.return));
                    try {
                      ((t = r),
                        (y.props = t.memoizedProps),
                        (y.state = t.memoizedState),
                        y.componentWillUnmount());
                    } catch (v) {
                      b(r, n, v);
                    }
                  }
                  break;
                case 5:
                  jn(d, d.return);
                  break;
                case 22:
                  if (d.memoizedState !== null) {
                    Gc(f);
                    continue;
                  }
              }
              g !== null ? ((g.return = d), (D = g)) : Gc(f);
            }
            c = c.sibling;
          }
        e: for (c = null, f = e; ; ) {
          if (f.tag === 5) {
            if (c === null) {
              c = f;
              try {
                ((i = f.stateNode),
                  u
                    ? ((s = i.style),
                      typeof s.setProperty == "function"
                        ? s.setProperty("display", "none", "important")
                        : (s.display = "none"))
                    : ((l = f.stateNode),
                      (a = f.memoizedProps.style),
                      (o =
                        a != null && a.hasOwnProperty("display")
                          ? a.display
                          : null),
                      (l.style.display = Qd("display", o))));
              } catch (v) {
                b(e, e.return, v);
              }
            }
          } else if (f.tag === 6) {
            if (c === null)
              try {
                f.stateNode.nodeValue = u ? "" : f.memoizedProps;
              } catch (v) {
                b(e, e.return, v);
              }
          } else if (
            ((f.tag !== 22 && f.tag !== 23) ||
              f.memoizedState === null ||
              f === e) &&
            f.child !== null
          ) {
            ((f.child.return = f), (f = f.child));
            continue;
          }
          if (f === e) break e;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e;
            (c === f && (c = null), (f = f.return));
          }
          (c === f && (c = null),
            (f.sibling.return = f.return),
            (f = f.sibling));
        }
      }
      break;
    case 19:
      (Qe(t, e), at(e), r & 4 && Hc(e));
      break;
    case 21:
      break;
    default:
      (Qe(t, e), at(e));
  }
}
function at(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Sp(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(C(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (Fr(i, ""), (r.flags &= -33));
          var s = $c(e);
          Ol(e, s, i);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            l = $c(e);
          Fl(e, l, o);
          break;
        default:
          throw Error(C(161));
      }
    } catch (a) {
      b(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function O0(e, t, n) {
  ((D = e), Cp(e));
}
function Cp(e, t, n) {
  for (var r = (e.mode & 1) !== 0; D !== null; ) {
    var i = D,
      s = i.child;
    if (i.tag === 22 && r) {
      var o = i.memoizedState !== null || Di;
      if (!o) {
        var l = i.alternate,
          a = (l !== null && l.memoizedState !== null) || pe;
        l = Di;
        var u = pe;
        if (((Di = o), (pe = a) && !u))
          for (D = i; D !== null; )
            ((o = D),
              (a = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? Xc(i)
                : a !== null
                  ? ((a.return = o), (D = a))
                  : Xc(i));
        for (; s !== null; ) ((D = s), Cp(s), (s = s.sibling));
        ((D = i), (Di = l), (pe = u));
      }
      Kc(e);
    } else
      i.subtreeFlags & 8772 && s !== null ? ((s.return = i), (D = s)) : Kc(e);
  }
}
function Kc(e) {
  for (; D !== null; ) {
    var t = D;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              pe || Gs(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !pe)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : qe(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              var s = t.updateQueue;
              s !== null && Dc(t, s, r);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Dc(t, o, n);
              }
              break;
            case 5:
              var l = t.stateNode;
              if (n === null && t.flags & 4) {
                n = l;
                var a = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    a.autoFocus && n.focus();
                    break;
                  case "img":
                    a.src && (n.src = a.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var f = c.dehydrated;
                    f !== null && Ur(f);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(C(163));
          }
        pe || (t.flags & 512 && zl(t));
      } catch (d) {
        b(t, t.return, d);
      }
    }
    if (t === e) {
      D = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      ((n.return = t.return), (D = n));
      break;
    }
    D = t.return;
  }
}
function Gc(e) {
  for (; D !== null; ) {
    var t = D;
    if (t === e) {
      D = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      ((n.return = t.return), (D = n));
      break;
    }
    D = t.return;
  }
}
function Xc(e) {
  for (; D !== null; ) {
    var t = D;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Gs(4, t);
          } catch (a) {
            b(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              b(t, i, a);
            }
          }
          var s = t.return;
          try {
            zl(t);
          } catch (a) {
            b(t, s, a);
          }
          break;
        case 5:
          var o = t.return;
          try {
            zl(t);
          } catch (a) {
            b(t, o, a);
          }
      }
    } catch (a) {
      b(t, t.return, a);
    }
    if (t === e) {
      D = null;
      break;
    }
    var l = t.sibling;
    if (l !== null) {
      ((l.return = t.return), (D = l));
      break;
    }
    D = t.return;
  }
}
var B0 = Math.ceil,
  Ss = Pt.ReactCurrentDispatcher,
  eu = Pt.ReactCurrentOwner,
  He = Pt.ReactCurrentBatchConfig,
  _ = 0,
  le = null,
  te = null,
  ce = 0,
  Ve = 0,
  In = Yt(0),
  ie = 0,
  Jr = null,
  gn = 0,
  Xs = 0,
  tu = 0,
  Lr = null,
  ke = null,
  nu = 0,
  Zn = 1 / 0,
  yt = null,
  Ts = !1,
  Bl = null,
  Wt = null,
  Li = !1,
  It = null,
  ks = 0,
  Rr = 0,
  Wl = null,
  Gi = -1,
  Xi = 0;
function xe() {
  return _ & 6 ? Z() : Gi !== -1 ? Gi : (Gi = Z());
}
function Ut(e) {
  return e.mode & 1
    ? _ & 2 && ce !== 0
      ? ce & -ce
      : k0.transition !== null
        ? (Xi === 0 && (Xi = ah()), Xi)
        : ((e = O),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : mh(e.type))),
          e)
    : 1;
}
function it(e, t, n, r) {
  if (50 < Rr) throw ((Rr = 0), (Wl = null), Error(C(185)));
  (ii(e, n, r),
    (!(_ & 2) || e !== le) &&
      (e === le && (!(_ & 2) && (Xs |= n), ie === 4 && Vt(e, ce)),
      Ae(e, r),
      n === 1 && _ === 0 && !(t.mode & 1) && ((Zn = Z() + 500), $s && Qt())));
}
function Ae(e, t) {
  var n = e.callbackNode;
  ky(e, t);
  var r = os(e, e === le ? ce : 0);
  if (r === 0)
    (n !== null && nc(n), (e.callbackNode = null), (e.callbackPriority = 0));
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && nc(n), t === 1))
      (e.tag === 0 ? T0(Yc.bind(null, e)) : Ih(Yc.bind(null, e)),
        v0(function () {
          !(_ & 6) && Qt();
        }),
        (n = null));
    else {
      switch (uh(r)) {
        case 1:
          n = Ma;
          break;
        case 4:
          n = oh;
          break;
        case 16:
          n = ss;
          break;
        case 536870912:
          n = lh;
          break;
        default:
          n = ss;
      }
      n = Vp(n, Ep.bind(null, e));
    }
    ((e.callbackPriority = t), (e.callbackNode = n));
  }
}
function Ep(e, t) {
  if (((Gi = -1), (Xi = 0), _ & 6)) throw Error(C(327));
  var n = e.callbackNode;
  if (Hn() && e.callbackNode !== n) return null;
  var r = os(e, e === le ? ce : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Cs(e, r);
  else {
    t = r;
    var i = _;
    _ |= 2;
    var s = Ap();
    (le !== e || ce !== t) && ((yt = null), (Zn = Z() + 500), un(e, t));
    do
      try {
        $0();
        break;
      } catch (l) {
        Pp(e, l);
      }
    while (!0);
    (Wa(),
      (Ss.current = s),
      (_ = i),
      te !== null ? (t = 0) : ((le = null), (ce = 0), (t = ie)));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = pl(e)), i !== 0 && ((r = i), (t = Ul(e, i)))), t === 1)
    )
      throw ((n = Jr), un(e, 0), Vt(e, r), Ae(e, Z()), n);
    if (t === 6) Vt(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !W0(i) &&
          ((t = Cs(e, r)),
          t === 2 && ((s = pl(e)), s !== 0 && ((r = s), (t = Ul(e, s)))),
          t === 1))
      )
        throw ((n = Jr), un(e, 0), Vt(e, r), Ae(e, Z()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(C(345));
        case 2:
          tn(e, ke, yt);
          break;
        case 3:
          if (
            (Vt(e, r), (r & 130023424) === r && ((t = nu + 500 - Z()), 10 < t))
          ) {
            if (os(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              (xe(), (e.pingedLanes |= e.suspendedLanes & i));
              break;
            }
            e.timeoutHandle = Tl(tn.bind(null, e, ke, yt), t);
            break;
          }
          tn(e, ke, yt);
          break;
        case 4:
          if ((Vt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var o = 31 - rt(r);
            ((s = 1 << o), (o = t[o]), o > i && (i = o), (r &= ~s));
          }
          if (
            ((r = i),
            (r = Z() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                  ? 480
                  : 1080 > r
                    ? 1080
                    : 1920 > r
                      ? 1920
                      : 3e3 > r
                        ? 3e3
                        : 4320 > r
                          ? 4320
                          : 1960 * B0(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Tl(tn.bind(null, e, ke, yt), r);
            break;
          }
          tn(e, ke, yt);
          break;
        case 5:
          tn(e, ke, yt);
          break;
        default:
          throw Error(C(329));
      }
    }
  }
  return (Ae(e, Z()), e.callbackNode === n ? Ep.bind(null, e) : null);
}
function Ul(e, t) {
  var n = Lr;
  return (
    e.current.memoizedState.isDehydrated && (un(e, t).flags |= 256),
    (e = Cs(e, t)),
    e !== 2 && ((t = ke), (ke = n), t !== null && $l(t)),
    e
  );
}
function $l(e) {
  ke === null ? (ke = e) : ke.push.apply(ke, e);
}
function W0(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            s = i.getSnapshot;
          i = i.value;
          try {
            if (!ot(s(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      ((n.return = t), (t = n));
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      ((t.sibling.return = t.return), (t = t.sibling));
    }
  }
  return !0;
}
function Vt(e, t) {
  for (
    t &= ~tu,
      t &= ~Xs,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;
  ) {
    var n = 31 - rt(t),
      r = 1 << n;
    ((e[n] = -1), (t &= ~r));
  }
}
function Yc(e) {
  if (_ & 6) throw Error(C(327));
  Hn();
  var t = os(e, 0);
  if (!(t & 1)) return (Ae(e, Z()), null);
  var n = Cs(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = pl(e);
    r !== 0 && ((t = r), (n = Ul(e, r)));
  }
  if (n === 1) throw ((n = Jr), un(e, 0), Vt(e, t), Ae(e, Z()), n);
  if (n === 6) throw Error(C(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    tn(e, ke, yt),
    Ae(e, Z()),
    null
  );
}
function ru(e, t) {
  var n = _;
  _ |= 1;
  try {
    return e(t);
  } finally {
    ((_ = n), _ === 0 && ((Zn = Z() + 500), $s && Qt()));
  }
}
function yn(e) {
  It !== null && It.tag === 0 && !(_ & 6) && Hn();
  var t = _;
  _ |= 1;
  var n = He.transition,
    r = O;
  try {
    if (((He.transition = null), (O = 1), e)) return e();
  } finally {
    ((O = r), (He.transition = n), (_ = t), !(_ & 6) && Qt());
  }
}
function iu() {
  ((Ve = In.current), H(In));
}
function un(e, t) {
  ((e.finishedWork = null), (e.finishedLanes = 0));
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), y0(n)), te !== null))
    for (n = te.return; n !== null; ) {
      var r = n;
      switch ((Fa(r), r.tag)) {
        case 1:
          ((r = r.type.childContextTypes), r != null && fs());
          break;
        case 3:
          (Qn(), H(Ee), H(me), Xa());
          break;
        case 5:
          Ga(r);
          break;
        case 4:
          Qn();
          break;
        case 13:
          H(G);
          break;
        case 19:
          H(G);
          break;
        case 10:
          Ua(r.type._context);
          break;
        case 22:
        case 23:
          iu();
      }
      n = n.return;
    }
  if (
    ((le = e),
    (te = e = $t(e.current, null)),
    (ce = Ve = t),
    (ie = 0),
    (Jr = null),
    (tu = Xs = gn = 0),
    (ke = Lr = null),
    sn !== null)
  ) {
    for (t = 0; t < sn.length; t++)
      if (((n = sn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          s = n.pending;
        if (s !== null) {
          var o = s.next;
          ((s.next = i), (r.next = o));
        }
        n.pending = r;
      }
    sn = null;
  }
  return e;
}
function Pp(e, t) {
  do {
    var n = te;
    try {
      if ((Wa(), ($i.current = ws), xs)) {
        for (var r = X.memoizedState; r !== null; ) {
          var i = r.queue;
          (i !== null && (i.pending = null), (r = r.next));
        }
        xs = !1;
      }
      if (
        ((mn = 0),
        (oe = re = X = null),
        (Mr = !1),
        (br = 0),
        (eu.current = null),
        n === null || n.return === null)
      ) {
        ((ie = 1), (Jr = t), (te = null));
        break;
      }
      e: {
        var s = e,
          o = n.return,
          l = n,
          a = t;
        if (
          ((t = ce),
          (l.flags |= 32768),
          a !== null && typeof a == "object" && typeof a.then == "function")
        ) {
          var u = a,
            c = l,
            f = c.tag;
          if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var d = c.alternate;
            d
              ? ((c.updateQueue = d.updateQueue),
                (c.memoizedState = d.memoizedState),
                (c.lanes = d.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var g = Nc(o);
          if (g !== null) {
            ((g.flags &= -257),
              _c(g, o, l, s, t),
              g.mode & 1 && Ic(s, u, t),
              (t = g),
              (a = u));
            var y = t.updateQueue;
            if (y === null) {
              var v = new Set();
              (v.add(a), (t.updateQueue = v));
            } else y.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              (Ic(s, u, t), su());
              break e;
            }
            a = Error(C(426));
          }
        } else if (K && l.mode & 1) {
          var w = Nc(o);
          if (w !== null) {
            (!(w.flags & 65536) && (w.flags |= 256),
              _c(w, o, l, s, t),
              Oa(bn(a, l)));
            break e;
          }
        }
        ((s = a = bn(a, l)),
          ie !== 4 && (ie = 2),
          Lr === null ? (Lr = [s]) : Lr.push(s),
          (s = o));
        do {
          switch (s.tag) {
            case 3:
              ((s.flags |= 65536), (t &= -t), (s.lanes |= t));
              var p = up(s, a, t);
              Mc(s, p);
              break e;
            case 1:
              l = a;
              var h = s.type,
                m = s.stateNode;
              if (
                !(s.flags & 128) &&
                (typeof h.getDerivedStateFromError == "function" ||
                  (m !== null &&
                    typeof m.componentDidCatch == "function" &&
                    (Wt === null || !Wt.has(m))))
              ) {
                ((s.flags |= 65536), (t &= -t), (s.lanes |= t));
                var x = cp(s, l, t);
                Mc(s, x);
                break e;
              }
          }
          s = s.return;
        } while (s !== null);
      }
      Dp(n);
    } catch (S) {
      ((t = S), te === n && n !== null && (te = n = n.return));
      continue;
    }
    break;
  } while (!0);
}
function Ap() {
  var e = Ss.current;
  return ((Ss.current = ws), e === null ? ws : e);
}
function su() {
  ((ie === 0 || ie === 3 || ie === 2) && (ie = 4),
    le === null || (!(gn & 268435455) && !(Xs & 268435455)) || Vt(le, ce));
}
function Cs(e, t) {
  var n = _;
  _ |= 2;
  var r = Ap();
  (le !== e || ce !== t) && ((yt = null), un(e, t));
  do
    try {
      U0();
      break;
    } catch (i) {
      Pp(e, i);
    }
  while (!0);
  if ((Wa(), (_ = n), (Ss.current = r), te !== null)) throw Error(C(261));
  return ((le = null), (ce = 0), ie);
}
function U0() {
  for (; te !== null; ) Mp(te);
}
function $0() {
  for (; te !== null && !py(); ) Mp(te);
}
function Mp(e) {
  var t = Rp(e.alternate, e, Ve);
  ((e.memoizedProps = e.pendingProps),
    t === null ? Dp(e) : (te = t),
    (eu.current = null));
}
function Dp(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = _0(n, t)), n !== null)) {
        ((n.flags &= 32767), (te = n));
        return;
      }
      if (e !== null)
        ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
      else {
        ((ie = 6), (te = null));
        return;
      }
    } else if (((n = N0(n, t, Ve)), n !== null)) {
      te = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      te = t;
      return;
    }
    te = t = e;
  } while (t !== null);
  ie === 0 && (ie = 5);
}
function tn(e, t, n) {
  var r = O,
    i = He.transition;
  try {
    ((He.transition = null), (O = 1), H0(e, t, n, r));
  } finally {
    ((He.transition = i), (O = r));
  }
  return null;
}
function H0(e, t, n, r) {
  do Hn();
  while (It !== null);
  if (_ & 6) throw Error(C(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(C(177));
  ((e.callbackNode = null), (e.callbackPriority = 0));
  var s = n.lanes | n.childLanes;
  if (
    (Cy(e, s),
    e === le && ((te = le = null), (ce = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Li ||
      ((Li = !0),
      Vp(ss, function () {
        return (Hn(), null);
      })),
    (s = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || s)
  ) {
    ((s = He.transition), (He.transition = null));
    var o = O;
    O = 1;
    var l = _;
    ((_ |= 4),
      (eu.current = null),
      F0(e, n),
      kp(n, e),
      c0(wl),
      (ls = !!xl),
      (wl = xl = null),
      (e.current = n),
      O0(n),
      my(),
      (_ = l),
      (O = o),
      (He.transition = s));
  } else e.current = n;
  if (
    (Li && ((Li = !1), (It = e), (ks = i)),
    (s = e.pendingLanes),
    s === 0 && (Wt = null),
    vy(n.stateNode),
    Ae(e, Z()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      ((i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest }));
  if (Ts) throw ((Ts = !1), (e = Bl), (Bl = null), e);
  return (
    ks & 1 && e.tag !== 0 && Hn(),
    (s = e.pendingLanes),
    s & 1 ? (e === Wl ? Rr++ : ((Rr = 0), (Wl = e))) : (Rr = 0),
    Qt(),
    null
  );
}
function Hn() {
  if (It !== null) {
    var e = uh(ks),
      t = He.transition,
      n = O;
    try {
      if (((He.transition = null), (O = 16 > e ? 16 : e), It === null))
        var r = !1;
      else {
        if (((e = It), (It = null), (ks = 0), _ & 6)) throw Error(C(331));
        var i = _;
        for (_ |= 4, D = e.current; D !== null; ) {
          var s = D,
            o = s.child;
          if (D.flags & 16) {
            var l = s.deletions;
            if (l !== null) {
              for (var a = 0; a < l.length; a++) {
                var u = l[a];
                for (D = u; D !== null; ) {
                  var c = D;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Dr(8, c, s);
                  }
                  var f = c.child;
                  if (f !== null) ((f.return = c), (D = f));
                  else
                    for (; D !== null; ) {
                      c = D;
                      var d = c.sibling,
                        g = c.return;
                      if ((wp(c), c === u)) {
                        D = null;
                        break;
                      }
                      if (d !== null) {
                        ((d.return = g), (D = d));
                        break;
                      }
                      D = g;
                    }
                }
              }
              var y = s.alternate;
              if (y !== null) {
                var v = y.child;
                if (v !== null) {
                  y.child = null;
                  do {
                    var w = v.sibling;
                    ((v.sibling = null), (v = w));
                  } while (v !== null);
                }
              }
              D = s;
            }
          }
          if (s.subtreeFlags & 2064 && o !== null) ((o.return = s), (D = o));
          else
            e: for (; D !== null; ) {
              if (((s = D), s.flags & 2048))
                switch (s.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Dr(9, s, s.return);
                }
              var p = s.sibling;
              if (p !== null) {
                ((p.return = s.return), (D = p));
                break e;
              }
              D = s.return;
            }
        }
        var h = e.current;
        for (D = h; D !== null; ) {
          o = D;
          var m = o.child;
          if (o.subtreeFlags & 2064 && m !== null) ((m.return = o), (D = m));
          else
            e: for (o = h; D !== null; ) {
              if (((l = D), l.flags & 2048))
                try {
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Gs(9, l);
                  }
                } catch (S) {
                  b(l, l.return, S);
                }
              if (l === o) {
                D = null;
                break e;
              }
              var x = l.sibling;
              if (x !== null) {
                ((x.return = l.return), (D = x));
                break e;
              }
              D = l.return;
            }
        }
        if (
          ((_ = i), Qt(), ht && typeof ht.onPostCommitFiberRoot == "function")
        )
          try {
            ht.onPostCommitFiberRoot(Fs, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      ((O = n), (He.transition = t));
    }
  }
  return !1;
}
function Qc(e, t, n) {
  ((t = bn(n, t)),
    (t = up(e, t, 1)),
    (e = Bt(e, t, 1)),
    (t = xe()),
    e !== null && (ii(e, 1, t), Ae(e, t)));
}
function b(e, t, n) {
  if (e.tag === 3) Qc(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Qc(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Wt === null || !Wt.has(r)))
        ) {
          ((e = bn(n, e)),
            (e = cp(t, e, 1)),
            (t = Bt(t, e, 1)),
            (e = xe()),
            t !== null && (ii(t, 1, e), Ae(t, e)));
          break;
        }
      }
      t = t.return;
    }
}
function K0(e, t, n) {
  var r = e.pingCache;
  (r !== null && r.delete(t),
    (t = xe()),
    (e.pingedLanes |= e.suspendedLanes & n),
    le === e &&
      (ce & n) === n &&
      (ie === 4 || (ie === 3 && (ce & 130023424) === ce && 500 > Z() - nu)
        ? un(e, 0)
        : (tu |= n)),
    Ae(e, t));
}
function Lp(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = wi), (wi <<= 1), !(wi & 130023424) && (wi = 4194304))
      : (t = 1));
  var n = xe();
  ((e = Ct(e, t)), e !== null && (ii(e, t, n), Ae(e, n)));
}
function G0(e) {
  var t = e.memoizedState,
    n = 0;
  (t !== null && (n = t.retryLane), Lp(e, n));
}
function X0(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(C(314));
  }
  (r !== null && r.delete(t), Lp(e, n));
}
var Rp;
Rp = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Ee.current) Ce = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return ((Ce = !1), I0(e, t, n));
      Ce = !!(e.flags & 131072);
    }
  else ((Ce = !1), K && t.flags & 1048576 && Nh(t, ps, t.index));
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      (Ki(e, t), (e = t.pendingProps));
      var i = Gn(t, me.current);
      ($n(t, n), (i = Qa(null, t, r, e, i, n)));
      var s = ba();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Pe(r) ? ((s = !0), ds(t)) : (s = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            Ha(t),
            (i.updater = Ks),
            (t.stateNode = i),
            (i._reactInternals = t),
            Dl(t, r, e, n),
            (t = Vl(null, t, r, !0, s, n)))
          : ((t.tag = 0), K && s && za(t), ge(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Ki(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = Q0(r)),
          (e = qe(r, e)),
          i)
        ) {
          case 0:
            t = Rl(null, t, r, e, n);
            break e;
          case 1:
            t = Oc(null, t, r, e, n);
            break e;
          case 11:
            t = zc(null, t, r, e, n);
            break e;
          case 14:
            t = Fc(null, t, r, qe(r.type, e), n);
            break e;
        }
        throw Error(C(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : qe(r, i)),
        Rl(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : qe(r, i)),
        Oc(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((pp(t), e === null)) throw Error(C(387));
        ((r = t.pendingProps),
          (s = t.memoizedState),
          (i = s.element),
          Wh(e, t),
          ys(t, r, null, n));
        var o = t.memoizedState;
        if (((r = o.element), s.isDehydrated))
          if (
            ((s = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (t.updateQueue.baseState = s),
            (t.memoizedState = s),
            t.flags & 256)
          ) {
            ((i = bn(Error(C(423)), t)), (t = Bc(e, t, r, n, i)));
            break e;
          } else if (r !== i) {
            ((i = bn(Error(C(424)), t)), (t = Bc(e, t, r, n, i)));
            break e;
          } else
            for (
              je = Ot(t.stateNode.containerInfo.firstChild),
                Ie = t,
                K = !0,
                et = null,
                n = Oh(t, null, r, n),
                t.child = n;
              n;
            )
              ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
        else {
          if ((Xn(), r === i)) {
            t = Et(e, t, n);
            break e;
          }
          ge(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Uh(t),
        e === null && Pl(t),
        (r = t.type),
        (i = t.pendingProps),
        (s = e !== null ? e.memoizedProps : null),
        (o = i.children),
        Sl(r, i) ? (o = null) : s !== null && Sl(r, s) && (t.flags |= 32),
        hp(e, t),
        ge(e, t, o, n),
        t.child
      );
    case 6:
      return (e === null && Pl(t), null);
    case 13:
      return mp(e, t, n);
    case 4:
      return (
        Ka(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Yn(t, null, r, n)) : ge(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : qe(r, i)),
        zc(e, t, r, i, n)
      );
    case 7:
      return (ge(e, t, t.pendingProps, n), t.child);
    case 8:
      return (ge(e, t, t.pendingProps.children, n), t.child);
    case 12:
      return (ge(e, t, t.pendingProps.children, n), t.child);
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (s = t.memoizedProps),
          (o = i.value),
          U(ms, r._currentValue),
          (r._currentValue = o),
          s !== null)
        )
          if (ot(s.value, o)) {
            if (s.children === i.children && !Ee.current) {
              t = Et(e, t, n);
              break e;
            }
          } else
            for (s = t.child, s !== null && (s.return = t); s !== null; ) {
              var l = s.dependencies;
              if (l !== null) {
                o = s.child;
                for (var a = l.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (s.tag === 1) {
                      ((a = St(-1, n & -n)), (a.tag = 2));
                      var u = s.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        (c === null
                          ? (a.next = a)
                          : ((a.next = c.next), (c.next = a)),
                          (u.pending = a));
                      }
                    }
                    ((s.lanes |= n),
                      (a = s.alternate),
                      a !== null && (a.lanes |= n),
                      Al(s.return, n, t),
                      (l.lanes |= n));
                    break;
                  }
                  a = a.next;
                }
              } else if (s.tag === 10) o = s.type === t.type ? null : s.child;
              else if (s.tag === 18) {
                if (((o = s.return), o === null)) throw Error(C(341));
                ((o.lanes |= n),
                  (l = o.alternate),
                  l !== null && (l.lanes |= n),
                  Al(o, n, t),
                  (o = s.sibling));
              } else o = s.child;
              if (o !== null) o.return = s;
              else
                for (o = s; o !== null; ) {
                  if (o === t) {
                    o = null;
                    break;
                  }
                  if (((s = o.sibling), s !== null)) {
                    ((s.return = o.return), (o = s));
                    break;
                  }
                  o = o.return;
                }
              s = o;
            }
        (ge(e, t, i.children, n), (t = t.child));
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        $n(t, n),
        (i = Ke(i)),
        (r = r(i)),
        (t.flags |= 1),
        ge(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = qe(r, t.pendingProps)),
        (i = qe(r.type, i)),
        Fc(e, t, r, i, n)
      );
    case 15:
      return fp(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : qe(r, i)),
        Ki(e, t),
        (t.tag = 1),
        Pe(r) ? ((e = !0), ds(t)) : (e = !1),
        $n(t, n),
        ap(t, r, i),
        Dl(t, r, i, n),
        Vl(null, t, r, !0, e, n)
      );
    case 19:
      return gp(e, t, n);
    case 22:
      return dp(e, t, n);
  }
  throw Error(C(156, t.tag));
};
function Vp(e, t) {
  return sh(e, t);
}
function Y0(e, t, n, r) {
  ((this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null));
}
function Ue(e, t, n, r) {
  return new Y0(e, t, n, r);
}
function ou(e) {
  return ((e = e.prototype), !(!e || !e.isReactComponent));
}
function Q0(e) {
  if (typeof e == "function") return ou(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Ea)) return 11;
    if (e === Pa) return 14;
  }
  return 2;
}
function $t(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Ue(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Yi(e, t, n, r, i, s) {
  var o = 2;
  if (((r = e), typeof e == "function")) ou(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else
    e: switch (e) {
      case Cn:
        return cn(n.children, i, s, t);
      case Ca:
        ((o = 8), (i |= 8));
        break;
      case Jo:
        return (
          (e = Ue(12, n, t, i | 2)),
          (e.elementType = Jo),
          (e.lanes = s),
          e
        );
      case el:
        return ((e = Ue(13, n, t, i)), (e.elementType = el), (e.lanes = s), e);
      case tl:
        return ((e = Ue(19, n, t, i)), (e.elementType = tl), (e.lanes = s), e);
      case Ud:
        return Ys(n, i, s, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Bd:
              o = 10;
              break e;
            case Wd:
              o = 9;
              break e;
            case Ea:
              o = 11;
              break e;
            case Pa:
              o = 14;
              break e;
            case Dt:
              ((o = 16), (r = null));
              break e;
          }
        throw Error(C(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Ue(o, n, t, i)),
    (t.elementType = e),
    (t.type = r),
    (t.lanes = s),
    t
  );
}
function cn(e, t, n, r) {
  return ((e = Ue(7, e, r, t)), (e.lanes = n), e);
}
function Ys(e, t, n, r) {
  return (
    (e = Ue(22, e, r, t)),
    (e.elementType = Ud),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Do(e, t, n) {
  return ((e = Ue(6, e, null, t)), (e.lanes = n), e);
}
function Lo(e, t, n) {
  return (
    (t = Ue(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function b0(e, t, n, r, i) {
  ((this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = uo(0)),
    (this.expirationTimes = uo(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = uo(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null));
}
function lu(e, t, n, r, i, s, o, l, a) {
  return (
    (e = new b0(e, t, n, l, a)),
    t === 1 ? ((t = 1), s === !0 && (t |= 8)) : (t = 0),
    (s = Ue(3, null, null, t)),
    (e.current = s),
    (s.stateNode = e),
    (s.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Ha(s),
    e
  );
}
function Z0(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: kn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function jp(e) {
  if (!e) return Kt;
  e = e._reactInternals;
  e: {
    if (xn(e) !== e || e.tag !== 1) throw Error(C(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Pe(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(C(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Pe(n)) return jh(e, n, t);
  }
  return t;
}
function Ip(e, t, n, r, i, s, o, l, a) {
  return (
    (e = lu(n, r, !0, e, i, s, o, l, a)),
    (e.context = jp(null)),
    (n = e.current),
    (r = xe()),
    (i = Ut(n)),
    (s = St(r, i)),
    (s.callback = t ?? null),
    Bt(n, s, i),
    (e.current.lanes = i),
    ii(e, i, r),
    Ae(e, r),
    e
  );
}
function Qs(e, t, n, r) {
  var i = t.current,
    s = xe(),
    o = Ut(i);
  return (
    (n = jp(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = St(s, o)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Bt(i, t, o)),
    e !== null && (it(e, i, o, s), Ui(e, i, o)),
    o
  );
}
function Es(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function bc(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function au(e, t) {
  (bc(e, t), (e = e.alternate) && bc(e, t));
}
function q0() {
  return null;
}
var Np =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function uu(e) {
  this._internalRoot = e;
}
bs.prototype.render = uu.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(C(409));
  Qs(e, t, null, null);
};
bs.prototype.unmount = uu.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    (yn(function () {
      Qs(null, e, null, null);
    }),
      (t[kt] = null));
  }
};
function bs(e) {
  this._internalRoot = e;
}
bs.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = dh();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Rt.length && t !== 0 && t < Rt[n].priority; n++);
    (Rt.splice(n, 0, e), n === 0 && ph(e));
  }
};
function cu(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Zs(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Zc() {}
function J0(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var s = r;
      r = function () {
        var u = Es(o);
        s.call(u);
      };
    }
    var o = Ip(t, r, e, 0, null, !1, !1, "", Zc);
    return (
      (e._reactRootContainer = o),
      (e[kt] = o.current),
      Kr(e.nodeType === 8 ? e.parentNode : e),
      yn(),
      o
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == "function") {
    var l = r;
    r = function () {
      var u = Es(a);
      l.call(u);
    };
  }
  var a = lu(e, 0, !1, null, null, !1, !1, "", Zc);
  return (
    (e._reactRootContainer = a),
    (e[kt] = a.current),
    Kr(e.nodeType === 8 ? e.parentNode : e),
    yn(function () {
      Qs(t, a, n, r);
    }),
    a
  );
}
function qs(e, t, n, r, i) {
  var s = n._reactRootContainer;
  if (s) {
    var o = s;
    if (typeof i == "function") {
      var l = i;
      i = function () {
        var a = Es(o);
        l.call(a);
      };
    }
    Qs(t, o, e, i);
  } else o = J0(n, t, e, i, r);
  return Es(o);
}
ch = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = xr(t.pendingLanes);
        n !== 0 &&
          (Da(t, n | 1), Ae(t, Z()), !(_ & 6) && ((Zn = Z() + 500), Qt()));
      }
      break;
    case 13:
      (yn(function () {
        var r = Ct(e, 1);
        if (r !== null) {
          var i = xe();
          it(r, e, 1, i);
        }
      }),
        au(e, 1));
  }
};
La = function (e) {
  if (e.tag === 13) {
    var t = Ct(e, 134217728);
    if (t !== null) {
      var n = xe();
      it(t, e, 134217728, n);
    }
    au(e, 134217728);
  }
};
fh = function (e) {
  if (e.tag === 13) {
    var t = Ut(e),
      n = Ct(e, t);
    if (n !== null) {
      var r = xe();
      it(n, e, t, r);
    }
    au(e, t);
  }
};
dh = function () {
  return O;
};
hh = function (e, t) {
  var n = O;
  try {
    return ((O = e), t());
  } finally {
    O = n;
  }
};
fl = function (e, t, n) {
  switch (t) {
    case "input":
      if ((il(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]',
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = Us(r);
            if (!i) throw Error(C(90));
            (Hd(r), il(r, i));
          }
        }
      }
      break;
    case "textarea":
      Gd(e, n);
      break;
    case "select":
      ((t = n.value), t != null && On(e, !!n.multiple, t, !1));
  }
};
Jd = ru;
eh = yn;
var ev = { usingClientEntryPoint: !1, Events: [oi, Mn, Us, Zd, qd, ru] },
  mr = {
    findFiberByHostInstance: rn,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  tv = {
    bundleType: mr.bundleType,
    version: mr.version,
    rendererPackageName: mr.rendererPackageName,
    rendererConfig: mr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Pt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return ((e = rh(e)), e === null ? null : e.stateNode);
    },
    findFiberByHostInstance: mr.findFiberByHostInstance || q0,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Ri = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Ri.isDisabled && Ri.supportsFiber)
    try {
      ((Fs = Ri.inject(tv)), (ht = Ri));
    } catch {}
}
ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ev;
ze.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!cu(t)) throw Error(C(200));
  return Z0(e, t, null, n);
};
ze.createRoot = function (e, t) {
  if (!cu(e)) throw Error(C(299));
  var n = !1,
    r = "",
    i = Np;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = lu(e, 1, !1, null, null, n, !1, r, i)),
    (e[kt] = t.current),
    Kr(e.nodeType === 8 ? e.parentNode : e),
    new uu(t)
  );
};
ze.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(C(188))
      : ((e = Object.keys(e).join(",")), Error(C(268, e)));
  return ((e = rh(t)), (e = e === null ? null : e.stateNode), e);
};
ze.flushSync = function (e) {
  return yn(e);
};
ze.hydrate = function (e, t, n) {
  if (!Zs(t)) throw Error(C(200));
  return qs(null, e, t, !0, n);
};
ze.hydrateRoot = function (e, t, n) {
  if (!cu(e)) throw Error(C(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    s = "",
    o = Np;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (t = Ip(t, null, e, 1, n ?? null, i, !1, s, o)),
    (e[kt] = t.current),
    Kr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      ((n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i));
  return new bs(t);
};
ze.render = function (e, t, n) {
  if (!Zs(t)) throw Error(C(200));
  return qs(null, e, t, !1, n);
};
ze.unmountComponentAtNode = function (e) {
  if (!Zs(e)) throw Error(C(40));
  return e._reactRootContainer
    ? (yn(function () {
        qs(null, null, e, !1, function () {
          ((e._reactRootContainer = null), (e[kt] = null));
        });
      }),
      !0)
    : !1;
};
ze.unstable_batchedUpdates = ru;
ze.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Zs(n)) throw Error(C(200));
  if (e == null || e._reactInternals === void 0) throw Error(C(38));
  return qs(e, t, n, !1, r);
};
ze.version = "18.3.1-next-f1338f8080-20240426";
function _p() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(_p);
    } catch (e) {
      console.error(e);
    }
}
(_p(), (_d.exports = ze));
var nv = _d.exports,
  qc = nv;
((Zo.createRoot = qc.createRoot), (Zo.hydrateRoot = qc.hydrateRoot));
const zp = L.createContext({});
function qn(e) {
  const t = L.useRef(null);
  return (t.current === null && (t.current = e()), t.current);
}
const rv = typeof window < "u",
  fu = rv ? L.useLayoutEffect : L.useEffect,
  du = L.createContext(null);
function hu(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function Ps(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
const lt = (e, t, n) => (n > t ? t : n < e ? e : n);
let pu = () => {};
const Gt = {},
  Fp = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),
  Op = (e) => typeof e == "object" && e !== null,
  Bp = (e) => /^0[^.\s]+$/u.test(e);
function Wp(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const Me = (e) => e,
  ai = (...e) => e.reduce((t, n) => (r) => n(t(r))),
  Jn = (e, t, n) => {
    const r = t - e;
    return r ? (n - e) / r : 1;
  };
class mu {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return (hu(this.subscriptions, t), () => Ps(this.subscriptions, t));
  }
  notify(t, n, r) {
    const i = this.subscriptions.length;
    if (i)
      if (i === 1) this.subscriptions[0](t, n, r);
      else
        for (let s = 0; s < i; s++) {
          const o = this.subscriptions[s];
          o && o(t, n, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const Ne = (e) => e * 1e3,
  $e = (e) => e / 1e3,
  gu = (e, t) => (t ? e * (1e3 / t) : 0),
  Up = (e, t, n) =>
    (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
  iv = 1e-7,
  sv = 12;
function ov(e, t, n, r, i) {
  let s,
    o,
    l = 0;
  do ((o = t + (n - t) / 2), (s = Up(o, r, i) - e), s > 0 ? (n = o) : (t = o));
  while (Math.abs(s) > iv && ++l < sv);
  return o;
}
function ui(e, t, n, r) {
  if (e === t && n === r) return Me;
  const i = (s) => ov(s, 0, 1, e, n);
  return (s) => (s === 0 || s === 1 ? s : Up(i(s), t, r));
}
const $p = (e) => (t) => (t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2),
  Hp = (e) => (t) => 1 - e(1 - t),
  Kp = ui(0.33, 1.53, 0.69, 0.99),
  yu = Hp(Kp),
  Gp = $p(yu),
  Xp = (e) =>
    e >= 1
      ? 1
      : (e *= 2) < 1
        ? 0.5 * yu(e)
        : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
  vu = (e) => 1 - Math.sin(Math.acos(e)),
  Yp = Hp(vu),
  Qp = $p(vu),
  lv = ui(0.42, 0, 1, 1),
  av = ui(0, 0, 0.58, 1),
  bp = ui(0.42, 0, 0.58, 1),
  uv = (e) => Array.isArray(e) && typeof e[0] != "number",
  Zp = (e) => Array.isArray(e) && typeof e[0] == "number",
  cv = {
    linear: Me,
    easeIn: lv,
    easeInOut: bp,
    easeOut: av,
    circIn: vu,
    circInOut: Qp,
    circOut: Yp,
    backIn: yu,
    backInOut: Gp,
    backOut: Kp,
    anticipate: Xp,
  },
  fv = (e) => typeof e == "string",
  Jc = (e) => {
    if (Zp(e)) {
      pu(e.length === 4);
      const [t, n, r, i] = e;
      return ui(t, n, r, i);
    } else if (fv(e)) return cv[e];
    return e;
  },
  Vi = [
    "setup",
    "read",
    "resolveKeyframes",
    "preUpdate",
    "update",
    "preRender",
    "render",
    "postRender",
  ];
function dv(e, t) {
  let n = new Set(),
    r = new Set(),
    i = !1,
    s = !1;
  const o = new WeakSet();
  let l = { delta: 0, timestamp: 0, isProcessing: !1 };
  function a(c) {
    (o.has(c) && (u.schedule(c), e()), c(l));
  }
  const u = {
    schedule: (c, f = !1, d = !1) => {
      const y = d && i ? n : r;
      return (f && o.add(c), y.add(c), c);
    },
    cancel: (c) => {
      (r.delete(c), o.delete(c));
    },
    process: (c) => {
      if (((l = c), i)) {
        s = !0;
        return;
      }
      i = !0;
      const f = n;
      ((n = r),
        (r = f),
        n.forEach(a),
        n.clear(),
        (i = !1),
        s && ((s = !1), u.process(c)));
    },
  };
  return u;
}
const hv = 40;
function qp(e, t) {
  let n = !1,
    r = !0;
  const i = { delta: 0, timestamp: 0, isProcessing: !1 },
    s = () => (n = !0),
    o = Vi.reduce((m, x) => ((m[x] = dv(s)), m), {}),
    {
      setup: l,
      read: a,
      resolveKeyframes: u,
      preUpdate: c,
      update: f,
      preRender: d,
      render: g,
      postRender: y,
    } = o,
    v = () => {
      const m = Gt.useManualTiming,
        x = m ? i.timestamp : performance.now();
      ((n = !1),
        m ||
          (i.delta = r ? 1e3 / 60 : Math.max(Math.min(x - i.timestamp, hv), 1)),
        (i.timestamp = x),
        (i.isProcessing = !0),
        l.process(i),
        a.process(i),
        u.process(i),
        c.process(i),
        f.process(i),
        d.process(i),
        g.process(i),
        y.process(i),
        (i.isProcessing = !1),
        n && t && ((r = !1), e(v)));
    },
    w = () => {
      ((n = !0), (r = !0), i.isProcessing || e(v));
    };
  return {
    schedule: Vi.reduce((m, x) => {
      const S = o[x];
      return (
        (m[x] = (P, E = !1, k = !1) => (n || w(), S.schedule(P, E, k))),
        m
      );
    }, {}),
    cancel: (m) => {
      for (let x = 0; x < Vi.length; x++) o[Vi[x]].cancel(m);
    },
    state: i,
    steps: o,
  };
}
const {
  schedule: z,
  cancel: Xe,
  state: se,
  steps: Ro,
} = qp(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Me, !0);
let Qi;
function pv() {
  Qi = void 0;
}
const ye = {
    now: () => (
      Qi === void 0 &&
        ye.set(
          se.isProcessing || Gt.useManualTiming
            ? se.timestamp
            : performance.now(),
        ),
      Qi
    ),
    set: (e) => {
      ((Qi = e), queueMicrotask(pv));
    },
  },
  Jp = (e) => (t) => typeof t == "string" && t.startsWith(e),
  em = Jp("--"),
  mv = Jp("var(--"),
  xu = (e) => (mv(e) ? gv.test(e.split("/*")[0].trim()) : !1),
  gv =
    /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
function ef(e) {
  return typeof e != "string" ? !1 : e.split("/*")[0].includes("var(--");
}
const sr = {
    test: (e) => typeof e == "number",
    parse: parseFloat,
    transform: (e) => e,
  },
  ei = { ...sr, transform: (e) => lt(0, 1, e) },
  ji = { ...sr, default: 1 },
  Vr = (e) => Math.round(e * 1e5) / 1e5,
  wu = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function yv(e) {
  return e == null;
}
const vv =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  Su = (e, t) => (n) =>
    !!(
      (typeof n == "string" && vv.test(n) && n.startsWith(e)) ||
      (t && !yv(n) && Object.prototype.hasOwnProperty.call(n, t))
    ),
  tm = (e, t, n) => (r) => {
    if (typeof r != "string") return r;
    const [i, s, o, l] = r.match(wu);
    return {
      [e]: parseFloat(i),
      [t]: parseFloat(s),
      [n]: parseFloat(o),
      alpha: l !== void 0 ? parseFloat(l) : 1,
    };
  },
  xv = (e) => lt(0, 255, e),
  Vo = { ...sr, transform: (e) => Math.round(xv(e)) },
  ln = {
    test: Su("rgb", "red"),
    parse: tm("red", "green", "blue"),
    transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
      "rgba(" +
      Vo.transform(e) +
      ", " +
      Vo.transform(t) +
      ", " +
      Vo.transform(n) +
      ", " +
      Vr(ei.transform(r)) +
      ")",
  };
function wv(e) {
  let t = "",
    n = "",
    r = "",
    i = "";
  return (
    e.length > 5
      ? ((t = e.substring(1, 3)),
        (n = e.substring(3, 5)),
        (r = e.substring(5, 7)),
        (i = e.substring(7, 9)))
      : ((t = e.substring(1, 2)),
        (n = e.substring(2, 3)),
        (r = e.substring(3, 4)),
        (i = e.substring(4, 5)),
        (t += t),
        (n += n),
        (r += r),
        (i += i)),
    {
      red: parseInt(t, 16),
      green: parseInt(n, 16),
      blue: parseInt(r, 16),
      alpha: i ? parseInt(i, 16) / 255 : 1,
    }
  );
}
const Hl = { test: Su("#"), parse: wv, transform: ln.transform },
  ci = (e) => ({
    test: (t) =>
      typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`,
  }),
  gt = ci("deg"),
  mt = ci("%"),
  R = ci("px"),
  Sv = ci("vh"),
  Tv = ci("vw"),
  tf = {
    ...mt,
    parse: (e) => mt.parse(e) / 100,
    transform: (e) => mt.transform(e * 100),
  },
  Nn = {
    test: Su("hsl", "hue"),
    parse: tm("hue", "saturation", "lightness"),
    transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
      "hsla(" +
      Math.round(e) +
      ", " +
      mt.transform(Vr(t)) +
      ", " +
      mt.transform(Vr(n)) +
      ", " +
      Vr(ei.transform(r)) +
      ")",
  },
  ee = {
    test: (e) => ln.test(e) || Hl.test(e) || Nn.test(e),
    parse: (e) =>
      ln.test(e) ? ln.parse(e) : Nn.test(e) ? Nn.parse(e) : Hl.parse(e),
    transform: (e) =>
      typeof e == "string"
        ? e
        : e.hasOwnProperty("red")
          ? ln.transform(e)
          : Nn.transform(e),
    getAnimatableNone: (e) => {
      const t = ee.parse(e);
      return ((t.alpha = 0), ee.transform(t));
    },
  },
  kv =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function Cv(e) {
  var t, n;
  return (
    isNaN(e) &&
    typeof e == "string" &&
    (((t = e.match(wu)) == null ? void 0 : t.length) || 0) +
      (((n = e.match(kv)) == null ? void 0 : n.length) || 0) >
      0
  );
}
const nm = "number",
  rm = "color",
  Ev = "var",
  Pv = "var(",
  nf = "${}",
  Av =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function er(e) {
  const t = e.toString(),
    n = [],
    r = { color: [], number: [], var: [] },
    i = [];
  let s = 0;
  const l = t
    .replace(
      Av,
      (a) => (
        ee.test(a)
          ? (r.color.push(s), i.push(rm), n.push(ee.parse(a)))
          : a.startsWith(Pv)
            ? (r.var.push(s), i.push(Ev), n.push(a))
            : (r.number.push(s), i.push(nm), n.push(parseFloat(a))),
        ++s,
        nf
      ),
    )
    .split(nf);
  return { values: n, split: l, indexes: r, types: i };
}
function Mv(e) {
  return er(e).values;
}
function im({ split: e, types: t }) {
  const n = e.length;
  return (r) => {
    let i = "";
    for (let s = 0; s < n; s++)
      if (((i += e[s]), r[s] !== void 0)) {
        const o = t[s];
        o === nm
          ? (i += Vr(r[s]))
          : o === rm
            ? (i += ee.transform(r[s]))
            : (i += r[s]);
      }
    return i;
  };
}
function Dv(e) {
  return im(er(e));
}
const Lv = (e) =>
    typeof e == "number" ? 0 : ee.test(e) ? ee.getAnimatableNone(e) : e,
  Rv = (e, t) =>
    typeof e == "number"
      ? t != null && t.trim().endsWith("/")
        ? e
        : 0
      : Lv(e);
function Vv(e) {
  const t = er(e);
  return im(t)(t.values.map((r, i) => Rv(r, t.split[i])));
}
const st = {
  test: Cv,
  parse: Mv,
  createTransformer: Dv,
  getAnimatableNone: Vv,
};
function jo(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? e + (t - e) * 6 * n
      : n < 1 / 2
        ? t
        : n < 2 / 3
          ? e + (t - e) * (2 / 3 - n) * 6
          : e
  );
}
function jv({ hue: e, saturation: t, lightness: n, alpha: r }) {
  ((e /= 360), (t /= 100), (n /= 100));
  let i = 0,
    s = 0,
    o = 0;
  if (!t) i = s = o = n;
  else {
    const l = n < 0.5 ? n * (1 + t) : n + t - n * t,
      a = 2 * n - l;
    ((i = jo(a, l, e + 1 / 3)), (s = jo(a, l, e)), (o = jo(a, l, e - 1 / 3)));
  }
  return {
    red: Math.round(i * 255),
    green: Math.round(s * 255),
    blue: Math.round(o * 255),
    alpha: r,
  };
}
function As(e, t) {
  return (n) => (n > 0 ? t : e);
}
const W = (e, t, n) => e + (t - e) * n,
  Io = (e, t, n) => {
    const r = e * e,
      i = n * (t * t - r) + r;
    return i < 0 ? 0 : Math.sqrt(i);
  },
  Iv = [Hl, ln, Nn],
  Nv = (e) => Iv.find((t) => t.test(e));
function rf(e) {
  const t = Nv(e);
  if (!t) return !1;
  let n = t.parse(e);
  return (t === Nn && (n = jv(n)), n);
}
const sf = (e, t) => {
    const n = rf(e),
      r = rf(t);
    if (!n || !r) return As(e, t);
    const i = { ...n };
    return (s) => (
      (i.red = Io(n.red, r.red, s)),
      (i.green = Io(n.green, r.green, s)),
      (i.blue = Io(n.blue, r.blue, s)),
      (i.alpha = W(n.alpha, r.alpha, s)),
      ln.transform(i)
    );
  },
  Kl = new Set(["none", "hidden"]);
function _v(e, t) {
  return Kl.has(e) ? (n) => (n <= 0 ? e : t) : (n) => (n >= 1 ? t : e);
}
function zv(e, t) {
  return (n) => W(e, t, n);
}
function Tu(e) {
  return typeof e == "number"
    ? zv
    : typeof e == "string"
      ? xu(e)
        ? As
        : ee.test(e)
          ? sf
          : Bv
      : Array.isArray(e)
        ? sm
        : typeof e == "object"
          ? ee.test(e)
            ? sf
            : Fv
          : As;
}
function sm(e, t) {
  const n = [...e],
    r = n.length,
    i = e.map((s, o) => Tu(s)(s, t[o]));
  return (s) => {
    for (let o = 0; o < r; o++) n[o] = i[o](s);
    return n;
  };
}
function Fv(e, t) {
  const n = { ...e, ...t },
    r = {};
  for (const i in n)
    e[i] !== void 0 && t[i] !== void 0 && (r[i] = Tu(e[i])(e[i], t[i]));
  return (i) => {
    for (const s in r) n[s] = r[s](i);
    return n;
  };
}
function Ov(e, t) {
  const n = [],
    r = { color: 0, var: 0, number: 0 };
  for (let i = 0; i < t.values.length; i++) {
    const s = t.types[i],
      o = e.indexes[s][r[s]],
      l = e.values[o] ?? 0;
    ((n[i] = l), r[s]++);
  }
  return n;
}
const Bv = (e, t) => {
  const n = st.createTransformer(t),
    r = er(e),
    i = er(t);
  return r.indexes.var.length === i.indexes.var.length &&
    r.indexes.color.length === i.indexes.color.length &&
    r.indexes.number.length >= i.indexes.number.length
    ? (Kl.has(e) && !i.values.length) || (Kl.has(t) && !r.values.length)
      ? _v(e, t)
      : ai(sm(Ov(r, i), i.values), n)
    : As(e, t);
};
function om(e, t, n) {
  return typeof e == "number" && typeof t == "number" && typeof n == "number"
    ? W(e, t, n)
    : Tu(e)(e, t);
}
const Wv = (e) => {
    const t = ({ timestamp: n }) => e(n);
    return {
      start: (n = !0) => z.update(t, n),
      stop: () => Xe(t),
      now: () => (se.isProcessing ? se.timestamp : ye.now()),
    };
  },
  lm = (e, t, n = 10) => {
    let r = "";
    const i = Math.max(Math.round(t / n), 2);
    for (let s = 0; s < i; s++)
      r += Math.round(e(s / (i - 1)) * 1e4) / 1e4 + ", ";
    return `linear(${r.substring(0, r.length - 2)})`;
  },
  Ms = 2e4;
function ku(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < Ms; ) ((t += n), (r = e.next(t)));
  return t >= Ms ? 1 / 0 : t;
}
function Uv(e, t = 100, n) {
  const r = n({ ...e, keyframes: [0, t] }),
    i = Math.min(ku(r), Ms);
  return {
    type: "keyframes",
    ease: (s) => r.next(i * s).value / t,
    duration: $e(i),
  };
}
const Q = {
  stiffness: 100,
  damping: 10,
  mass: 1,
  velocity: 0,
  duration: 800,
  bounce: 0.3,
  visualDuration: 0.3,
  restSpeed: { granular: 0.01, default: 2 },
  restDelta: { granular: 0.005, default: 0.5 },
  minDuration: 0.01,
  maxDuration: 10,
  minDamping: 0.05,
  maxDamping: 1,
};
function Gl(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const $v = 12;
function Hv(e, t, n) {
  let r = n;
  for (let i = 1; i < $v; i++) r = r - e(r) / t(r);
  return r;
}
const No = 0.001;
function Kv({
  duration: e = Q.duration,
  bounce: t = Q.bounce,
  velocity: n = Q.velocity,
  mass: r = Q.mass,
}) {
  let i,
    s,
    o = 1 - t;
  ((o = lt(Q.minDamping, Q.maxDamping, o)),
    (e = lt(Q.minDuration, Q.maxDuration, $e(e))),
    o < 1
      ? ((i = (u) => {
          const c = u * o,
            f = c * e,
            d = c - n,
            g = Gl(u, o),
            y = Math.exp(-f);
          return No - (d / g) * y;
        }),
        (s = (u) => {
          const f = u * o * e,
            d = f * n + n,
            g = Math.pow(o, 2) * Math.pow(u, 2) * e,
            y = Math.exp(-f),
            v = Gl(Math.pow(u, 2), o);
          return ((-i(u) + No > 0 ? -1 : 1) * ((d - g) * y)) / v;
        }))
      : ((i = (u) => {
          const c = Math.exp(-u * e),
            f = (u - n) * e + 1;
          return -No + c * f;
        }),
        (s = (u) => {
          const c = Math.exp(-u * e),
            f = (n - u) * (e * e);
          return c * f;
        })));
  const l = 5 / e,
    a = Hv(i, s, l);
  if (((e = Ne(e)), isNaN(a)))
    return { stiffness: Q.stiffness, damping: Q.damping, duration: e };
  {
    const u = Math.pow(a, 2) * r;
    return { stiffness: u, damping: o * 2 * Math.sqrt(r * u), duration: e };
  }
}
const Gv = ["duration", "bounce"],
  Xv = ["stiffness", "damping", "mass"];
function of(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function Yv(e) {
  let t = {
    velocity: Q.velocity,
    stiffness: Q.stiffness,
    damping: Q.damping,
    mass: Q.mass,
    isResolvedFromDuration: !1,
    ...e,
  };
  if (!of(e, Xv) && of(e, Gv))
    if (((t.velocity = 0), e.visualDuration)) {
      const n = e.visualDuration,
        r = (2 * Math.PI) / (n * 1.2),
        i = r * r,
        s = 2 * lt(0.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(i);
      t = { ...t, mass: Q.mass, stiffness: i, damping: s };
    } else {
      const n = Kv({ ...e, velocity: 0 });
      ((t = { ...t, ...n, mass: Q.mass }), (t.isResolvedFromDuration = !0));
    }
  return t;
}
function Ds(e = Q.visualDuration, t = Q.bounce) {
  const n =
    typeof e != "object"
      ? { visualDuration: e, keyframes: [0, 1], bounce: t }
      : e;
  let { restSpeed: r, restDelta: i } = n;
  const s = n.keyframes[0],
    o = n.keyframes[n.keyframes.length - 1],
    l = { done: !1, value: s },
    {
      stiffness: a,
      damping: u,
      mass: c,
      duration: f,
      velocity: d,
      isResolvedFromDuration: g,
    } = Yv({ ...n, velocity: -$e(n.velocity || 0) }),
    y = d || 0,
    v = u / (2 * Math.sqrt(a * c)),
    w = o - s,
    p = $e(Math.sqrt(a / c)),
    h = Math.abs(w) < 5;
  (r || (r = h ? Q.restSpeed.granular : Q.restSpeed.default),
    i || (i = h ? Q.restDelta.granular : Q.restDelta.default));
  let m, x, S, P, E, k;
  if (v < 1)
    ((S = Gl(p, v)),
      (P = (y + v * p * w) / S),
      (m = (M) => {
        const F = Math.exp(-v * p * M);
        return o - F * (P * Math.sin(S * M) + w * Math.cos(S * M));
      }),
      (E = v * p * P + w * S),
      (k = v * p * w - P * S),
      (x = (M) =>
        Math.exp(-v * p * M) * (E * Math.sin(S * M) + k * Math.cos(S * M))));
  else if (v === 1) {
    m = (F) => o - Math.exp(-p * F) * (w + (y + p * w) * F);
    const M = y + p * w;
    x = (F) => Math.exp(-p * F) * (p * M * F - y);
  } else {
    const M = p * Math.sqrt(v * v - 1);
    m = (Le) => {
      const Ye = Math.exp(-v * p * Le),
        Te = Math.min(M * Le, 300);
      return (
        o - (Ye * ((y + v * p * w) * Math.sinh(Te) + M * w * Math.cosh(Te))) / M
      );
    };
    const F = (y + v * p * w) / M,
      q = v * p * F - w * M,
      De = v * p * w - F * M;
    x = (Le) => {
      const Ye = Math.exp(-v * p * Le),
        Te = Math.min(M * Le, 300);
      return Ye * (q * Math.sinh(Te) + De * Math.cosh(Te));
    };
  }
  const I = {
    calculatedDuration: (g && f) || null,
    velocity: (M) => Ne(x(M)),
    next: (M) => {
      if (!g && v < 1) {
        const q = Math.exp(-v * p * M),
          De = Math.sin(S * M),
          Le = Math.cos(S * M),
          Ye = o - q * (P * De + w * Le),
          Te = Ne(q * (E * De + k * Le));
        return (
          (l.done = Math.abs(Te) <= r && Math.abs(o - Ye) <= i),
          (l.value = l.done ? o : Ye),
          l
        );
      }
      const F = m(M);
      if (g) l.done = M >= f;
      else {
        const q = Ne(x(M));
        l.done = Math.abs(q) <= r && Math.abs(o - F) <= i;
      }
      return ((l.value = l.done ? o : F), l);
    },
    toString: () => {
      const M = Math.min(ku(I), Ms),
        F = lm((q) => I.next(M * q).value, M, 30);
      return M + "ms " + F;
    },
    toTransition: () => {},
  };
  return I;
}
Ds.applyToOptions = (e) => {
  const t = Uv(e, 100, Ds);
  return (
    (e.ease = t.ease),
    (e.duration = Ne(t.duration)),
    (e.type = "keyframes"),
    e
  );
};
const Qv = 5;
function am(e, t, n) {
  const r = Math.max(t - Qv, 0);
  return gu(n - e(r), t - r);
}
function Xl({
  keyframes: e,
  velocity: t = 0,
  power: n = 0.8,
  timeConstant: r = 325,
  bounceDamping: i = 10,
  bounceStiffness: s = 500,
  modifyTarget: o,
  min: l,
  max: a,
  restDelta: u = 0.5,
  restSpeed: c,
}) {
  const f = e[0],
    d = { done: !1, value: f },
    g = (k) => (l !== void 0 && k < l) || (a !== void 0 && k > a),
    y = (k) =>
      l === void 0
        ? a
        : a === void 0 || Math.abs(l - k) < Math.abs(a - k)
          ? l
          : a;
  let v = n * t;
  const w = f + v,
    p = o === void 0 ? w : o(w);
  p !== w && (v = p - f);
  const h = (k) => -v * Math.exp(-k / r),
    m = (k) => p + h(k),
    x = (k) => {
      const I = h(k),
        M = m(k);
      ((d.done = Math.abs(I) <= u), (d.value = d.done ? p : M));
    };
  let S, P;
  const E = (k) => {
    g(d.value) &&
      ((S = k),
      (P = Ds({
        keyframes: [d.value, y(d.value)],
        velocity: am(m, k, d.value),
        damping: i,
        stiffness: s,
        restDelta: u,
        restSpeed: c,
      })));
  };
  return (
    E(0),
    {
      calculatedDuration: null,
      next: (k) => {
        let I = !1;
        return (
          !P && S === void 0 && ((I = !0), x(k), E(k)),
          S !== void 0 && k >= S ? P.next(k - S) : (!I && x(k), d)
        );
      },
    }
  );
}
function bv(e, t, n) {
  const r = [],
    i = n || Gt.mix || om,
    s = e.length - 1;
  for (let o = 0; o < s; o++) {
    let l = i(e[o], e[o + 1]);
    if (t) {
      const a = Array.isArray(t) ? t[o] || Me : t;
      l = ai(a, l);
    }
    r.push(l);
  }
  return r;
}
function Cu(e, t, { clamp: n = !0, ease: r, mixer: i } = {}) {
  const s = e.length;
  if ((pu(s === t.length), s === 1)) return () => t[0];
  if (s === 2 && t[0] === t[1]) return () => t[1];
  const o = e[0] === e[1];
  e[0] > e[s - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
  const l = bv(t, r, i),
    a = l.length,
    u = (c) => {
      if (o && c < e[0]) return t[0];
      let f = 0;
      if (a > 1) for (; f < e.length - 2 && !(c < e[f + 1]); f++);
      const d = Jn(e[f], e[f + 1], c);
      return l[f](d);
    };
  return n ? (c) => u(lt(e[0], e[s - 1], c)) : u;
}
function Zv(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const i = Jn(0, t, r);
    e.push(W(n, 1, i));
  }
}
function um(e) {
  const t = [0];
  return (Zv(t, e.length - 1), t);
}
function qv(e, t) {
  return e.map((n) => n * t);
}
function Jv(e, t) {
  return e.map(() => t || bp).splice(0, e.length - 1);
}
function jr({
  duration: e = 300,
  keyframes: t,
  times: n,
  ease: r = "easeInOut",
}) {
  const i = uv(r) ? r.map(Jc) : Jc(r),
    s = { done: !1, value: t[0] },
    o = qv(n && n.length === t.length ? n : um(t), e),
    l = Cu(o, t, { ease: Array.isArray(i) ? i : Jv(t, i) });
  return {
    calculatedDuration: e,
    next: (a) => ((s.value = l(a)), (s.done = a >= e), s),
  };
}
const e1 = (e) => e !== null;
function Js(e, { repeat: t, repeatType: n = "loop" }, r, i = 1) {
  const s = e.filter(e1),
    l = i < 0 || (t && n !== "loop" && t % 2 === 1) ? 0 : s.length - 1;
  return !l || r === void 0 ? s[l] : r;
}
const t1 = { decay: Xl, inertia: Xl, tween: jr, keyframes: jr, spring: Ds };
function cm(e) {
  typeof e.type == "string" && (e.type = t1[e.type]);
}
class Eu {
  constructor() {
    this.updateFinished();
  }
  get finished() {
    return this._finished;
  }
  updateFinished() {
    this._finished = new Promise((t) => {
      this.resolve = t;
    });
  }
  notifyFinished() {
    this.resolve();
  }
  then(t, n) {
    return this.finished.then(t, n);
  }
}
const n1 = (e) => e / 100;
class Ls extends Eu {
  constructor(t) {
    (super(),
      (this.state = "idle"),
      (this.startTime = null),
      (this.isStopped = !1),
      (this.currentTime = 0),
      (this.holdTime = null),
      (this.playbackSpeed = 1),
      (this.delayState = { done: !1, value: void 0 }),
      (this.stop = () => {
        var r, i;
        const { motionValue: n } = this.options;
        (n && n.updatedAt !== ye.now() && this.tick(ye.now()),
          (this.isStopped = !0),
          this.state !== "idle" &&
            (this.teardown(),
            (i = (r = this.options).onStop) == null || i.call(r)));
      }),
      (this.options = t),
      this.initAnimation(),
      this.play(),
      t.autoplay === !1 && this.pause());
  }
  initAnimation() {
    const { options: t } = this;
    cm(t);
    const {
      type: n = jr,
      repeat: r = 0,
      repeatDelay: i = 0,
      repeatType: s,
      velocity: o = 0,
    } = t;
    let { keyframes: l } = t;
    const a = n || jr;
    a !== jr &&
      typeof l[0] != "number" &&
      ((this.mixKeyframes = ai(n1, om(l[0], l[1]))), (l = [0, 100]));
    const u = a({ ...t, keyframes: l });
    (s === "mirror" &&
      (this.mirroredGenerator = a({
        ...t,
        keyframes: [...l].reverse(),
        velocity: -o,
      })),
      u.calculatedDuration === null && (u.calculatedDuration = ku(u)));
    const { calculatedDuration: c } = u;
    ((this.calculatedDuration = c),
      (this.resolvedDuration = c + i),
      (this.totalDuration = this.resolvedDuration * (r + 1) - i),
      (this.generator = u));
  }
  updateTime(t) {
    const n = Math.round(t - this.startTime) * this.playbackSpeed;
    this.holdTime !== null
      ? (this.currentTime = this.holdTime)
      : (this.currentTime = n);
  }
  tick(t, n = !1) {
    const {
      generator: r,
      totalDuration: i,
      mixKeyframes: s,
      mirroredGenerator: o,
      resolvedDuration: l,
      calculatedDuration: a,
    } = this;
    if (this.startTime === null) return r.next(0);
    const {
      delay: u = 0,
      keyframes: c,
      repeat: f,
      repeatType: d,
      repeatDelay: g,
      type: y,
      onUpdate: v,
      finalKeyframe: w,
    } = this.options;
    (this.speed > 0
      ? (this.startTime = Math.min(this.startTime, t))
      : this.speed < 0 &&
        (this.startTime = Math.min(t - i / this.speed, this.startTime)),
      n ? (this.currentTime = t) : this.updateTime(t));
    const p = this.currentTime - u * (this.playbackSpeed >= 0 ? 1 : -1),
      h = this.playbackSpeed >= 0 ? p < 0 : p > i;
    ((this.currentTime = Math.max(p, 0)),
      this.state === "finished" &&
        this.holdTime === null &&
        (this.currentTime = i));
    let m = this.currentTime,
      x = r;
    if (f) {
      const k = Math.min(this.currentTime, i) / l;
      let I = Math.floor(k),
        M = k % 1;
      (!M && k >= 1 && (M = 1),
        M === 1 && I--,
        (I = Math.min(I, f + 1)),
        !!(I % 2) &&
          (d === "reverse"
            ? ((M = 1 - M), g && (M -= g / l))
            : d === "mirror" && (x = o)),
        (m = lt(0, 1, M) * l));
    }
    let S;
    (h
      ? ((this.delayState.value = c[0]), (S = this.delayState))
      : (S = x.next(m)),
      s && !h && (S.value = s(S.value)));
    let { done: P } = S;
    !h &&
      a !== null &&
      (P =
        this.playbackSpeed >= 0
          ? this.currentTime >= i
          : this.currentTime <= 0);
    const E =
      this.holdTime === null &&
      (this.state === "finished" || (this.state === "running" && P));
    return (
      E && y !== Xl && (S.value = Js(c, this.options, w, this.speed)),
      v && v(S.value),
      E && this.finish(),
      S
    );
  }
  then(t, n) {
    return this.finished.then(t, n);
  }
  get duration() {
    return $e(this.calculatedDuration);
  }
  get iterationDuration() {
    const { delay: t = 0 } = this.options || {};
    return this.duration + $e(t);
  }
  get time() {
    return $e(this.currentTime);
  }
  set time(t) {
    ((t = Ne(t)),
      (this.currentTime = t),
      this.startTime === null ||
      this.holdTime !== null ||
      this.playbackSpeed === 0
        ? (this.holdTime = t)
        : this.driver &&
          (this.startTime = this.driver.now() - t / this.playbackSpeed),
      this.driver
        ? this.driver.start(!1)
        : ((this.startTime = 0),
          (this.state = "paused"),
          (this.holdTime = t),
          this.tick(t)));
  }
  getGeneratorVelocity() {
    const t = this.currentTime;
    if (t <= 0) return this.options.velocity || 0;
    if (this.generator.velocity) return this.generator.velocity(t);
    const n = this.generator.next(t).value;
    return am((r) => this.generator.next(r).value, t, n);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(t) {
    const n = this.playbackSpeed !== t;
    (n && this.driver && this.updateTime(ye.now()),
      (this.playbackSpeed = t),
      n && this.driver && (this.time = $e(this.currentTime)));
  }
  play() {
    var i, s;
    if (this.isStopped) return;
    const { driver: t = Wv, startTime: n } = this.options;
    (this.driver || (this.driver = t((o) => this.tick(o))),
      (s = (i = this.options).onPlay) == null || s.call(i));
    const r = this.driver.now();
    (this.state === "finished"
      ? (this.updateFinished(), (this.startTime = r))
      : this.holdTime !== null
        ? (this.startTime = r - this.holdTime)
        : this.startTime || (this.startTime = n ?? r),
      this.state === "finished" &&
        this.speed < 0 &&
        (this.startTime += this.calculatedDuration),
      (this.holdTime = null),
      (this.state = "running"),
      this.driver.start());
  }
  pause() {
    ((this.state = "paused"),
      this.updateTime(ye.now()),
      (this.holdTime = this.currentTime));
  }
  complete() {
    (this.state !== "running" && this.play(),
      (this.state = "finished"),
      (this.holdTime = null));
  }
  finish() {
    var t, n;
    (this.notifyFinished(),
      this.teardown(),
      (this.state = "finished"),
      (n = (t = this.options).onComplete) == null || n.call(t));
  }
  cancel() {
    var t, n;
    ((this.holdTime = null),
      (this.startTime = 0),
      this.tick(0),
      this.teardown(),
      (n = (t = this.options).onCancel) == null || n.call(t));
  }
  teardown() {
    ((this.state = "idle"),
      this.stopDriver(),
      (this.startTime = this.holdTime = null));
  }
  stopDriver() {
    this.driver && (this.driver.stop(), (this.driver = void 0));
  }
  sample(t) {
    return ((this.startTime = 0), this.tick(t, !0));
  }
  attachTimeline(t) {
    var n;
    return (
      this.options.allowFlatten &&
        ((this.options.type = "keyframes"),
        (this.options.ease = "linear"),
        this.initAnimation()),
      (n = this.driver) == null || n.stop(),
      t.observe(this)
    );
  }
}
function r1(e) {
  for (let t = 1; t < e.length; t++) e[t] ?? (e[t] = e[t - 1]);
}
const an = (e) => (e * 180) / Math.PI,
  Yl = (e) => {
    const t = an(Math.atan2(e[1], e[0]));
    return Ql(t);
  },
  i1 = {
    x: 4,
    y: 5,
    translateX: 4,
    translateY: 5,
    scaleX: 0,
    scaleY: 3,
    scale: (e) => (Math.abs(e[0]) + Math.abs(e[3])) / 2,
    rotate: Yl,
    rotateZ: Yl,
    skewX: (e) => an(Math.atan(e[1])),
    skewY: (e) => an(Math.atan(e[2])),
    skew: (e) => (Math.abs(e[1]) + Math.abs(e[2])) / 2,
  },
  Ql = (e) => ((e = e % 360), e < 0 && (e += 360), e),
  lf = Yl,
  af = (e) => Math.sqrt(e[0] * e[0] + e[1] * e[1]),
  uf = (e) => Math.sqrt(e[4] * e[4] + e[5] * e[5]),
  s1 = {
    x: 12,
    y: 13,
    z: 14,
    translateX: 12,
    translateY: 13,
    translateZ: 14,
    scaleX: af,
    scaleY: uf,
    scale: (e) => (af(e) + uf(e)) / 2,
    rotateX: (e) => Ql(an(Math.atan2(e[6], e[5]))),
    rotateY: (e) => Ql(an(Math.atan2(-e[2], e[0]))),
    rotateZ: lf,
    rotate: lf,
    skewX: (e) => an(Math.atan(e[4])),
    skewY: (e) => an(Math.atan(e[1])),
    skew: (e) => (Math.abs(e[1]) + Math.abs(e[4])) / 2,
  };
function bl(e) {
  return e.includes("scale") ? 1 : 0;
}
function Zl(e, t) {
  if (!e || e === "none") return bl(t);
  const n = e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let r, i;
  if (n) ((r = s1), (i = n));
  else {
    const l = e.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    ((r = i1), (i = l));
  }
  if (!i) return bl(t);
  const s = r[t],
    o = i[1].split(",").map(l1);
  return typeof s == "function" ? s(o) : o[s];
}
const o1 = (e, t) => {
  const { transform: n = "none" } = getComputedStyle(e);
  return Zl(n, t);
};
function l1(e) {
  return parseFloat(e.trim());
}
const or = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
  ],
  lr = new Set([...or, "pathRotation"]),
  cf = (e) => e === sr || e === R,
  a1 = new Set(["x", "y", "z"]),
  u1 = or.filter((e) => !a1.has(e));
function c1(e) {
  const t = [];
  return (
    u1.forEach((n) => {
      const r = e.getValue(n);
      r !== void 0 &&
        (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
    }),
    t
  );
}
const Nt = {
  width: (
    { x: e },
    { paddingLeft: t = "0", paddingRight: n = "0", boxSizing: r },
  ) => {
    const i = e.max - e.min;
    return r === "border-box" ? i : i - parseFloat(t) - parseFloat(n);
  },
  height: (
    { y: e },
    { paddingTop: t = "0", paddingBottom: n = "0", boxSizing: r },
  ) => {
    const i = e.max - e.min;
    return r === "border-box" ? i : i - parseFloat(t) - parseFloat(n);
  },
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  x: (e, { transform: t }) => Zl(t, "x"),
  y: (e, { transform: t }) => Zl(t, "y"),
};
Nt.translateX = Nt.x;
Nt.translateY = Nt.y;
const fn = new Set();
let ql = !1,
  Jl = !1,
  ea = !1;
function fm() {
  if (Jl) {
    const e = Array.from(fn).filter((r) => r.needsMeasurement),
      t = new Set(e.map((r) => r.element)),
      n = new Map();
    (t.forEach((r) => {
      const i = c1(r);
      i.length && (n.set(r, i), r.render());
    }),
      e.forEach((r) => r.measureInitialState()),
      t.forEach((r) => {
        r.render();
        const i = n.get(r);
        i &&
          i.forEach(([s, o]) => {
            var l;
            (l = r.getValue(s)) == null || l.set(o);
          });
      }),
      e.forEach((r) => r.measureEndState()),
      e.forEach((r) => {
        r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY);
      }));
  }
  ((Jl = !1), (ql = !1), fn.forEach((e) => e.complete(ea)), fn.clear());
}
function dm() {
  fn.forEach((e) => {
    (e.readKeyframes(), e.needsMeasurement && (Jl = !0));
  });
}
function f1() {
  ((ea = !0), dm(), fm(), (ea = !1));
}
class Pu {
  constructor(t, n, r, i, s, o = !1) {
    ((this.state = "pending"),
      (this.isAsync = !1),
      (this.needsMeasurement = !1),
      (this.unresolvedKeyframes = [...t]),
      (this.onComplete = n),
      (this.name = r),
      (this.motionValue = i),
      (this.element = s),
      (this.isAsync = o));
  }
  scheduleResolve() {
    ((this.state = "scheduled"),
      this.isAsync
        ? (fn.add(this), ql || ((ql = !0), z.read(dm), z.resolveKeyframes(fm)))
        : (this.readKeyframes(), this.complete()));
  }
  readKeyframes() {
    const {
      unresolvedKeyframes: t,
      name: n,
      element: r,
      motionValue: i,
    } = this;
    if (t[0] === null) {
      const s = i == null ? void 0 : i.get(),
        o = t[t.length - 1];
      if (s !== void 0) t[0] = s;
      else if (r && n) {
        const l = r.readValue(n, o);
        l != null && (t[0] = l);
      }
      (t[0] === void 0 && (t[0] = o), i && s === void 0 && i.set(t[0]));
    }
    r1(t);
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete(t = !1) {
    ((this.state = "complete"),
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, t),
      fn.delete(this));
  }
  cancel() {
    this.state === "scheduled" && (fn.delete(this), (this.state = "pending"));
  }
  resume() {
    this.state === "pending" && this.scheduleResolve();
  }
}
const d1 = (e) => e.startsWith("--");
function hm(e, t, n) {
  d1(t) ? e.style.setProperty(t, n) : (e.style[t] = n);
}
const h1 = {};
function Au(e, t) {
  const n = Wp(e);
  return () => h1[t] ?? n();
}
const Mu = Au(() => window.ScrollTimeline !== void 0, "scrollTimeline"),
  pm = Au(() => window.ViewTimeline !== void 0, "viewTimeline"),
  mm = Au(() => {
    try {
      document
        .createElement("div")
        .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
    } catch {
      return !1;
    }
    return !0;
  }, "linearEasing"),
  Sr = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
  ff = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: Sr([0, 0.65, 0.55, 1]),
    circOut: Sr([0.55, 0, 1, 0.45]),
    backIn: Sr([0.31, 0.01, 0.66, -0.59]),
    backOut: Sr([0.33, 1.53, 0.69, 0.99]),
  };
function gm(e, t) {
  if (e)
    return typeof e == "function"
      ? mm()
        ? lm(e, t)
        : "ease-out"
      : Zp(e)
        ? Sr(e)
        : Array.isArray(e)
          ? e.map((n) => gm(n, t) || ff.easeOut)
          : ff[e];
}
function p1(
  e,
  t,
  n,
  {
    delay: r = 0,
    duration: i = 300,
    repeat: s = 0,
    repeatType: o = "loop",
    ease: l = "easeOut",
    times: a,
  } = {},
  u = void 0,
) {
  const c = { [t]: n };
  a && (c.offset = a);
  const f = gm(l, i);
  Array.isArray(f) && (c.easing = f);
  const d = {
    delay: r,
    duration: i,
    easing: Array.isArray(f) ? "linear" : f,
    fill: "both",
    iterations: s + 1,
    direction: o === "reverse" ? "alternate" : "normal",
  };
  return (u && (d.pseudoElement = u), e.animate(c, d));
}
function ym(e) {
  return typeof e == "function" && "applyToOptions" in e;
}
function m1({ type: e, ...t }) {
  return ym(e) && mm()
    ? e.applyToOptions(t)
    : (t.duration ?? (t.duration = 300), t.ease ?? (t.ease = "easeOut"), t);
}
class vm extends Eu {
  constructor(t) {
    if (
      (super(),
      (this.finishedTime = null),
      (this.isStopped = !1),
      (this.manualStartTime = null),
      !t)
    )
      return;
    const {
      element: n,
      name: r,
      keyframes: i,
      pseudoElement: s,
      allowFlatten: o = !1,
      finalKeyframe: l,
      onComplete: a,
    } = t;
    ((this.isPseudoElement = !!s),
      (this.allowFlatten = o),
      (this.options = t),
      pu(typeof t.type != "string"));
    const u = m1(t);
    ((this.animation = p1(n, r, i, u, s)),
      u.autoplay === !1 && this.animation.pause(),
      (this.animation.onfinish = () => {
        if (((this.finishedTime = this.time), !s)) {
          const c = Js(i, this.options, l, this.speed);
          (this.updateMotionValue && this.updateMotionValue(c),
            hm(n, r, c),
            this.animation.cancel());
        }
        (a == null || a(), this.notifyFinished());
      }));
  }
  play() {
    this.isStopped ||
      ((this.manualStartTime = null),
      this.animation.play(),
      this.state === "finished" && this.updateFinished());
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    var t, n;
    (n = (t = this.animation).finish) == null || n.call(t);
  }
  cancel() {
    try {
      this.animation.cancel();
    } catch {}
  }
  stop() {
    if (this.isStopped) return;
    this.isStopped = !0;
    const { state: t } = this;
    t === "idle" ||
      t === "finished" ||
      (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(),
      this.isPseudoElement || this.cancel());
  }
  commitStyles() {
    var n, r, i;
    const t = (n = this.options) == null ? void 0 : n.element;
    !this.isPseudoElement &&
      t != null &&
      t.isConnected &&
      ((i = (r = this.animation).commitStyles) == null || i.call(r));
  }
  get duration() {
    var n, r;
    const t =
      ((r =
        (n = this.animation.effect) == null ? void 0 : n.getComputedTiming) ==
      null
        ? void 0
        : r.call(n).duration) || 0;
    return $e(Number(t));
  }
  get iterationDuration() {
    const { delay: t = 0 } = this.options || {};
    return this.duration + $e(t);
  }
  get time() {
    return $e(Number(this.animation.currentTime) || 0);
  }
  set time(t) {
    const n = this.finishedTime !== null;
    ((this.manualStartTime = null),
      (this.finishedTime = null),
      (this.animation.currentTime = Ne(t)),
      n && this.animation.pause());
  }
  get speed() {
    return this.animation.playbackRate;
  }
  set speed(t) {
    (t < 0 && (this.finishedTime = null), (this.animation.playbackRate = t));
  }
  get state() {
    return this.finishedTime !== null ? "finished" : this.animation.playState;
  }
  get startTime() {
    return this.manualStartTime ?? Number(this.animation.startTime);
  }
  set startTime(t) {
    this.manualStartTime = this.animation.startTime = t;
  }
  attachTimeline({ timeline: t, rangeStart: n, rangeEnd: r, observe: i }) {
    var s;
    return (
      this.allowFlatten &&
        ((s = this.animation.effect) == null ||
          s.updateTiming({ easing: "linear" })),
      (this.animation.onfinish = null),
      t && Mu()
        ? ((this.animation.timeline = t),
          n && (this.animation.rangeStart = n),
          r && (this.animation.rangeEnd = r),
          Me)
        : i(this)
    );
  }
}
const xm = { anticipate: Xp, backInOut: Gp, circInOut: Qp };
function g1(e) {
  return e in xm;
}
function y1(e) {
  typeof e.ease == "string" && g1(e.ease) && (e.ease = xm[e.ease]);
}
const _o = 10;
class v1 extends vm {
  constructor(t) {
    (y1(t),
      cm(t),
      super(t),
      t.startTime !== void 0 &&
        t.autoplay !== !1 &&
        (this.startTime = t.startTime),
      (this.options = t));
  }
  updateMotionValue(t) {
    const {
      motionValue: n,
      onUpdate: r,
      onComplete: i,
      element: s,
      ...o
    } = this.options;
    if (!n) return;
    if (t !== void 0) {
      n.set(t);
      return;
    }
    const l = new Ls({ ...o, autoplay: !1 }),
      a = Math.max(_o, ye.now() - this.startTime),
      u = lt(0, _o, a - _o),
      c = l.sample(a).value,
      { name: f } = this.options;
    (s && f && hm(s, f, c),
      n.setWithVelocity(l.sample(Math.max(0, a - u)).value, c, u),
      l.stop());
  }
}
const df = (e, t) =>
  t === "zIndex"
    ? !1
    : !!(
        typeof e == "number" ||
        Array.isArray(e) ||
        (typeof e == "string" &&
          (st.test(e) || e === "0") &&
          !e.startsWith("url("))
      );
function x1(e) {
  const t = e[0];
  if (e.length === 1) return !0;
  for (let n = 0; n < e.length; n++) if (e[n] !== t) return !0;
}
function w1(e, t, n, r) {
  const i = e[0];
  if (i === null) return !1;
  if (t === "display" || t === "visibility") return !0;
  const s = e[e.length - 1],
    o = df(i, t),
    l = df(s, t);
  return !o || !l ? !1 : x1(e) || ((n === "spring" || ym(n)) && r);
}
function ta(e) {
  ((e.duration = 0), (e.type = "keyframes"));
}
const wm = new Set(["opacity", "clipPath", "filter", "transform"]),
  S1 = /^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;
function T1(e) {
  for (let t = 0; t < e.length; t++)
    if (typeof e[t] == "string" && S1.test(e[t])) return !0;
  return !1;
}
const k1 = new Set([
    "color",
    "backgroundColor",
    "outlineColor",
    "fill",
    "stroke",
    "borderColor",
    "borderTopColor",
    "borderRightColor",
    "borderBottomColor",
    "borderLeftColor",
  ]),
  C1 = Wp(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function E1(e) {
  var f;
  const {
    motionValue: t,
    name: n,
    repeatDelay: r,
    repeatType: i,
    damping: s,
    type: o,
    keyframes: l,
  } = e;
  if (
    !(
      ((f = t == null ? void 0 : t.owner) == null
        ? void 0
        : f.current) instanceof HTMLElement
    )
  )
    return !1;
  const { onUpdate: u, transformTemplate: c } = t.owner.getProps();
  return (
    C1() &&
    n &&
    (wm.has(n) || (k1.has(n) && T1(l))) &&
    (n !== "transform" || !c) &&
    !u &&
    !r &&
    i !== "mirror" &&
    s !== 0 &&
    o !== "inertia"
  );
}
const P1 = 40;
class A1 extends Eu {
  constructor({
    autoplay: t = !0,
    delay: n = 0,
    type: r = "keyframes",
    repeat: i = 0,
    repeatDelay: s = 0,
    repeatType: o = "loop",
    keyframes: l,
    name: a,
    motionValue: u,
    element: c,
    ...f
  }) {
    var y;
    (super(),
      (this.stop = () => {
        var v, w;
        (this._animation &&
          (this._animation.stop(),
          (v = this.stopTimeline) == null || v.call(this)),
          (w = this.keyframeResolver) == null || w.cancel());
      }),
      (this.createdAt = ye.now()));
    const d = {
        autoplay: t,
        delay: n,
        type: r,
        repeat: i,
        repeatDelay: s,
        repeatType: o,
        name: a,
        motionValue: u,
        element: c,
        ...f,
      },
      g = (c == null ? void 0 : c.KeyframeResolver) || Pu;
    ((this.keyframeResolver = new g(
      l,
      (v, w, p) => this.onKeyframesResolved(v, w, d, !p),
      a,
      u,
      c,
    )),
      (y = this.keyframeResolver) == null || y.scheduleResolve());
  }
  onKeyframesResolved(t, n, r, i) {
    var p, h;
    this.keyframeResolver = void 0;
    const {
      name: s,
      type: o,
      velocity: l,
      delay: a,
      isHandoff: u,
      onUpdate: c,
    } = r;
    this.resolvedAt = ye.now();
    let f = !0;
    w1(t, s, o, l) ||
      ((f = !1),
      (Gt.instantAnimations || !a) && (c == null || c(Js(t, r, n))),
      (t[0] = t[t.length - 1]),
      ta(r),
      (r.repeat = 0));
    const g = {
        startTime: i
          ? this.resolvedAt
            ? this.resolvedAt - this.createdAt > P1
              ? this.resolvedAt
              : this.createdAt
            : this.createdAt
          : void 0,
        finalKeyframe: n,
        ...r,
        keyframes: t,
      },
      y = f && !u && E1(g),
      v =
        (h = (p = g.motionValue) == null ? void 0 : p.owner) == null
          ? void 0
          : h.current;
    let w;
    if (y)
      try {
        w = new v1({ ...g, element: v });
      } catch {
        w = new Ls(g);
      }
    else w = new Ls(g);
    (w.finished
      .then(() => {
        this.notifyFinished();
      })
      .catch(Me),
      this.pendingTimeline &&
        ((this.stopTimeline = w.attachTimeline(this.pendingTimeline)),
        (this.pendingTimeline = void 0)),
      (this._animation = w));
  }
  get finished() {
    return this._animation ? this.animation.finished : this._finished;
  }
  then(t, n) {
    return this.finished.finally(t).then(() => {});
  }
  get animation() {
    var t;
    return (
      this._animation ||
        ((t = this.keyframeResolver) == null || t.resume(), f1()),
      this._animation
    );
  }
  get duration() {
    return this.animation.duration;
  }
  get iterationDuration() {
    return this.animation.iterationDuration;
  }
  get time() {
    return this.animation.time;
  }
  set time(t) {
    this.animation.time = t;
  }
  get speed() {
    return this.animation.speed;
  }
  get state() {
    return this.animation.state;
  }
  set speed(t) {
    this.animation.speed = t;
  }
  get startTime() {
    return this.animation.startTime;
  }
  attachTimeline(t) {
    return (
      this._animation
        ? (this.stopTimeline = this.animation.attachTimeline(t))
        : (this.pendingTimeline = t),
      () => this.stop()
    );
  }
  play() {
    this.animation.play();
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.complete();
  }
  cancel() {
    var t;
    (this._animation && this.animation.cancel(),
      (t = this.keyframeResolver) == null || t.cancel());
  }
}
function Sm(e, t, n, r = 0, i = 1) {
  const s = Array.from(e)
      .sort((u, c) => u.sortNodePosition(c))
      .indexOf(t),
    o = e.size,
    l = (o - 1) * r;
  return typeof n == "function" ? n(s, o) : i === 1 ? s * r : l - s * r;
}
const hf = 30,
  M1 = (e) => !isNaN(parseFloat(e)),
  Ir = { current: void 0 };
class D1 {
  constructor(t, n = {}) {
    ((this.canTrackVelocity = null),
      (this.events = {}),
      (this.updateAndNotify = (r) => {
        var s;
        const i = ye.now();
        if (
          (this.updatedAt !== i && this.setPrevFrameValue(),
          (this.prev = this.current),
          this.setCurrent(r),
          this.current !== this.prev &&
            ((s = this.events.change) == null || s.notify(this.current),
            this.dependents))
        )
          for (const o of this.dependents) o.dirty();
      }),
      (this.hasAnimated = !1),
      this.setCurrent(t),
      (this.owner = n.owner));
  }
  setCurrent(t) {
    ((this.current = t),
      (this.updatedAt = ye.now()),
      this.canTrackVelocity === null &&
        t !== void 0 &&
        (this.canTrackVelocity = M1(this.current)));
  }
  setPrevFrameValue(t = this.current) {
    ((this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt));
  }
  onChange(t) {
    return this.on("change", t);
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new mu());
    const r = this.events[t].add(n);
    return t === "change"
      ? () => {
          (r(),
            z.read(() => {
              this.events.change.getSize() || this.stop();
            }));
        }
      : r;
  }
  clearListeners() {
    for (const t in this.events) this.events[t].clear();
  }
  attach(t, n) {
    ((this.passiveEffect = t), (this.stopPassiveEffect = n));
  }
  set(t) {
    this.passiveEffect
      ? this.passiveEffect(t, this.updateAndNotify)
      : this.updateAndNotify(t);
  }
  setWithVelocity(t, n, r) {
    (this.set(n),
      (this.prev = void 0),
      (this.prevFrameValue = t),
      (this.prevUpdatedAt = this.updatedAt - r));
  }
  jump(t, n = !0) {
    (this.updateAndNotify(t),
      (this.prev = t),
      (this.prevUpdatedAt = this.prevFrameValue = void 0),
      n && this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect());
  }
  dirty() {
    var t;
    (t = this.events.change) == null || t.notify(this.current);
  }
  addDependent(t) {
    (this.dependents || (this.dependents = new Set()), this.dependents.add(t));
  }
  removeDependent(t) {
    this.dependents && this.dependents.delete(t);
  }
  get() {
    return (Ir.current && Ir.current.push(this), this.current);
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    const t = ye.now();
    if (
      !this.canTrackVelocity ||
      this.prevFrameValue === void 0 ||
      t - this.updatedAt > hf
    )
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, hf);
    return gu(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
  }
  start(t) {
    return (
      this.stop(),
      new Promise((n) => {
        ((this.hasAnimated = !0),
          (this.animation = t(n)),
          this.events.animationStart && this.events.animationStart.notify());
      }).then(() => {
        (this.events.animationComplete &&
          this.events.animationComplete.notify(),
          this.clearAnimation());
      })
    );
  }
  stop() {
    (this.animation &&
      (this.animation.stop(),
      this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation());
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    var t, n;
    ((t = this.dependents) == null || t.clear(),
      (n = this.events.destroy) == null || n.notify(),
      this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect());
  }
}
function nt(e, t) {
  return new D1(e, t);
}
function Tm(e, t) {
  if (e != null && e.inherit && t) {
    const { inherit: n, ...r } = e;
    return { ...t, ...r };
  }
  return e;
}
function Du(e, t) {
  const n =
    (e == null ? void 0 : e[t]) ?? (e == null ? void 0 : e.default) ?? e;
  return n !== e ? Tm(n, e) : n;
}
const L1 = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  R1 = (e) => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  V1 = { type: "keyframes", duration: 0.8 },
  j1 = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  I1 = (e, { keyframes: t }) =>
    t.length > 2
      ? V1
      : lr.has(e)
        ? e.startsWith("scale")
          ? R1(t[1])
          : L1
        : j1,
  N1 = new Set([
    "when",
    "delay",
    "delayChildren",
    "staggerChildren",
    "staggerDirection",
    "repeat",
    "repeatType",
    "repeatDelay",
    "from",
    "elapsed",
  ]);
function _1(e) {
  for (const t in e) if (!N1.has(t)) return !0;
  return !1;
}
const Lu =
    (e, t, n, r = {}, i, s) =>
    (o) => {
      const l = Du(r, e) || {},
        a = l.delay || r.delay || 0;
      let { elapsed: u = 0 } = r;
      u = u - Ne(a);
      const c = {
        keyframes: Array.isArray(n) ? n : [null, n],
        ease: "easeOut",
        velocity: t.getVelocity(),
        ...l,
        delay: -u,
        onUpdate: (d) => {
          (t.set(d), l.onUpdate && l.onUpdate(d));
        },
        onComplete: () => {
          (o(), l.onComplete && l.onComplete());
        },
        name: e,
        motionValue: t,
        element: s ? void 0 : i,
      };
      (_1(l) || Object.assign(c, I1(e, c)),
        c.duration && (c.duration = Ne(c.duration)),
        c.repeatDelay && (c.repeatDelay = Ne(c.repeatDelay)),
        c.from !== void 0 && (c.keyframes[0] = c.from));
      let f = !1;
      if (
        ((c.type === !1 || (c.duration === 0 && !c.repeatDelay)) &&
          (ta(c), c.delay === 0 && (f = !0)),
        (Gt.instantAnimations ||
          Gt.skipAnimations ||
          (i != null && i.shouldSkipAnimations) ||
          l.skipAnimations) &&
          ((f = !0), ta(c), (c.delay = 0)),
        (c.allowFlatten = !l.type && !l.ease),
        f && !s && t.get() !== void 0)
      ) {
        const d = Js(c.keyframes, l);
        if (d !== void 0) {
          z.update(() => {
            (c.onUpdate(d), c.onComplete());
          });
          return;
        }
      }
      return l.isSync ? new Ls(c) : new A1(c);
    },
  z1 = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function F1(e) {
  const t = z1.exec(e);
  if (!t) return [,];
  const [, n, r, i] = t;
  return [`--${n ?? r}`, i];
}
function km(e, t, n = 1) {
  const [r, i] = F1(e);
  if (!r) return;
  const s = window.getComputedStyle(t).getPropertyValue(r);
  if (s) {
    const o = s.trim();
    return Fp(o) ? parseFloat(o) : o;
  }
  return xu(i) ? km(i, t, n + 1) : i;
}
function pf(e) {
  const t = [{}, {}];
  return (
    e == null ||
      e.values.forEach((n, r) => {
        ((t[0][r] = n.get()), (t[1][r] = n.getVelocity()));
      }),
    t
  );
}
function Ru(e, t, n, r) {
  if (typeof t == "function") {
    const [i, s] = pf(r);
    t = t(n !== void 0 ? n : e.custom, i, s);
  }
  if (
    (typeof t == "string" && (t = e.variants && e.variants[t]),
    typeof t == "function")
  ) {
    const [i, s] = pf(r);
    t = t(n !== void 0 ? n : e.custom, i, s);
  }
  return t;
}
function dn(e, t, n) {
  const r = e.getProps();
  return Ru(r, t, n !== void 0 ? n : r.custom, e);
}
const Cm = new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    ...or,
  ]),
  na = (e) => Array.isArray(e);
function O1(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, nt(n));
}
function B1(e) {
  return na(e) ? e[e.length - 1] || 0 : e;
}
function W1(e, t) {
  const n = dn(e, t);
  let { transitionEnd: r = {}, transition: i = {}, ...s } = n || {};
  s = { ...s, ...r };
  for (const o in s) {
    const l = B1(s[o]);
    O1(e, o, l);
  }
}
const ue = (e) => !!(e && e.getVelocity);
function U1(e) {
  return !!(ue(e) && e.add);
}
function ra(e, t) {
  const n = e.getValue("willChange");
  if (U1(n)) return n.add(t);
  if (!n && Gt.WillChange) {
    const r = new Gt.WillChange("auto");
    (e.addValue("willChange", r), r.add(t));
  }
}
function Vu(e) {
  return e.replace(/([A-Z])/g, (t) => `-${t.toLowerCase()}`);
}
const $1 = "framerAppearId",
  Em = "data-" + Vu($1);
function Pm(e) {
  return e.props[Em];
}
function H1({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return ((t[n] = !1), r);
}
function Am(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
  let { transition: s, transitionEnd: o, ...l } = t;
  const a = e.getDefaultTransition();
  s = s ? Tm(s, a) : a;
  const u = s == null ? void 0 : s.reduceMotion,
    c = s == null ? void 0 : s.skipAnimations;
  r && (s = r);
  const f = [],
    d = i && e.animationState && e.animationState.getState()[i],
    g = s == null ? void 0 : s.path;
  g && g.animateVisualElement(e, l, s, n, f);
  for (const y in l) {
    const v = e.getValue(y, e.latestValues[y] ?? null),
      w = l[y];
    if (w === void 0 || (d && H1(d, y))) continue;
    const p = { delay: n, ...Du(s || {}, y) };
    c && (p.skipAnimations = !0);
    const h = v.get();
    if (
      h !== void 0 &&
      !v.isAnimating() &&
      !Array.isArray(w) &&
      w === h &&
      !p.velocity
    ) {
      z.update(() => v.set(w));
      continue;
    }
    let m = !1;
    if (window.MotionHandoffAnimation) {
      const P = Pm(e);
      if (P) {
        const E = window.MotionHandoffAnimation(P, y, z);
        E !== null && ((p.startTime = E), (m = !0));
      }
    }
    ra(e, y);
    const x = u ?? e.shouldReduceMotion;
    v.start(Lu(y, v, w, x && Cm.has(y) ? { type: !1 } : p, e, m));
    const S = v.animation;
    S && f.push(S);
  }
  if (o) {
    const y = () =>
      z.update(() => {
        o && W1(e, o);
      });
    f.length ? Promise.all(f).then(y) : y();
  }
  return f;
}
function ia(e, t, n = {}) {
  var a;
  const r = dn(
    e,
    t,
    n.type === "exit"
      ? (a = e.presenceContext) == null
        ? void 0
        : a.custom
      : void 0,
  );
  let { transition: i = e.getDefaultTransition() || {} } = r || {};
  n.transitionOverride && (i = n.transitionOverride);
  const s = r ? () => Promise.all(Am(e, r, n)) : () => Promise.resolve(),
    o =
      e.variantChildren && e.variantChildren.size
        ? (u = 0) => {
            const {
              delayChildren: c = 0,
              staggerChildren: f,
              staggerDirection: d,
            } = i;
            return K1(e, t, u, c, f, d, n);
          }
        : () => Promise.resolve(),
    { when: l } = i;
  if (l) {
    const [u, c] = l === "beforeChildren" ? [s, o] : [o, s];
    return u().then(() => c());
  } else return Promise.all([s(), o(n.delay)]);
}
function K1(e, t, n = 0, r = 0, i = 0, s = 1, o) {
  const l = [];
  for (const a of e.variantChildren)
    (a.notify("AnimationStart", t),
      l.push(
        ia(a, t, {
          ...o,
          delay:
            n +
            (typeof r == "function" ? 0 : r) +
            Sm(e.variantChildren, a, r, i, s),
        }).then(() => a.notify("AnimationComplete", t)),
      ));
  return Promise.all(l);
}
function G1(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const i = t.map((s) => ia(e, s, n));
    r = Promise.all(i);
  } else if (typeof t == "string") r = ia(e, t, n);
  else {
    const i = typeof t == "function" ? dn(e, t, n.custom) : t;
    r = Promise.all(Am(e, i, n));
  }
  return r.then(() => {
    e.notify("AnimationComplete", t);
  });
}
const X1 = { test: (e) => e === "auto", parse: (e) => e },
  Mm = (e) => (t) => t.test(e),
  Dm = [sr, R, mt, gt, Tv, Sv, X1],
  mf = (e) => Dm.find(Mm(e));
function Y1(e) {
  return typeof e == "number"
    ? e === 0
    : e !== null
      ? e === "none" || e === "0" || Bp(e)
      : !0;
}
const Q1 = new Set(["brightness", "contrast", "saturate", "opacity"]);
function b1(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow") return e;
  const [r] = n.match(wu) || [];
  if (!r) return e;
  const i = n.replace(r, "");
  let s = Q1.has(t) ? 1 : 0;
  return (r !== n && (s *= 100), t + "(" + s + i + ")");
}
const Z1 = /\b([a-z-]*)\(.*?\)/gu,
  sa = {
    ...st,
    getAnimatableNone: (e) => {
      const t = e.match(Z1);
      return t ? t.map(b1).join(" ") : e;
    },
  },
  oa = {
    ...st,
    getAnimatableNone: (e) => {
      const t = st.parse(e);
      return st.createTransformer(e)(
        t.map((r) =>
          typeof r == "number"
            ? 0
            : typeof r == "object"
              ? { ...r, alpha: 1 }
              : r,
        ),
      );
    },
  },
  gf = { ...sr, transform: Math.round },
  q1 = {
    rotate: gt,
    pathRotation: gt,
    rotateX: gt,
    rotateY: gt,
    rotateZ: gt,
    scale: ji,
    scaleX: ji,
    scaleY: ji,
    scaleZ: ji,
    skew: gt,
    skewX: gt,
    skewY: gt,
    distance: R,
    translateX: R,
    translateY: R,
    translateZ: R,
    x: R,
    y: R,
    z: R,
    perspective: R,
    transformPerspective: R,
    opacity: ei,
    originX: tf,
    originY: tf,
    originZ: R,
  },
  Rs = {
    borderWidth: R,
    borderTopWidth: R,
    borderRightWidth: R,
    borderBottomWidth: R,
    borderLeftWidth: R,
    borderRadius: R,
    borderTopLeftRadius: R,
    borderTopRightRadius: R,
    borderBottomRightRadius: R,
    borderBottomLeftRadius: R,
    width: R,
    maxWidth: R,
    height: R,
    maxHeight: R,
    top: R,
    right: R,
    bottom: R,
    left: R,
    inset: R,
    insetBlock: R,
    insetBlockStart: R,
    insetBlockEnd: R,
    insetInline: R,
    insetInlineStart: R,
    insetInlineEnd: R,
    padding: R,
    paddingTop: R,
    paddingRight: R,
    paddingBottom: R,
    paddingLeft: R,
    paddingBlock: R,
    paddingBlockStart: R,
    paddingBlockEnd: R,
    paddingInline: R,
    paddingInlineStart: R,
    paddingInlineEnd: R,
    margin: R,
    marginTop: R,
    marginRight: R,
    marginBottom: R,
    marginLeft: R,
    marginBlock: R,
    marginBlockStart: R,
    marginBlockEnd: R,
    marginInline: R,
    marginInlineStart: R,
    marginInlineEnd: R,
    fontSize: R,
    backgroundPositionX: R,
    backgroundPositionY: R,
    ...q1,
    zIndex: gf,
    fillOpacity: ei,
    strokeOpacity: ei,
    numOctaves: gf,
  },
  J1 = {
    ...Rs,
    color: ee,
    backgroundColor: ee,
    outlineColor: ee,
    fill: ee,
    stroke: ee,
    borderColor: ee,
    borderTopColor: ee,
    borderRightColor: ee,
    borderBottomColor: ee,
    borderLeftColor: ee,
    filter: sa,
    WebkitFilter: sa,
    mask: oa,
    WebkitMask: oa,
  },
  Lm = (e) => J1[e],
  ex = new Set([sa, oa]);
function Rm(e, t) {
  let n = Lm(e);
  return (
    ex.has(n) || (n = st),
    n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
  );
}
const tx = new Set(["auto", "none", "0"]);
function nx(e, t, n) {
  let r = 0,
    i;
  for (; r < e.length && !i; ) {
    const s = e[r];
    (typeof s == "string" && !tx.has(s) && er(s).values.length && (i = e[r]),
      r++);
  }
  if (i && n) for (const s of t) e[s] = Rm(n, i);
}
class rx extends Pu {
  constructor(t, n, r, i, s) {
    super(t, n, r, i, s, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, element: n, name: r } = this;
    if (!n || !n.current) return;
    super.readKeyframes();
    for (let c = 0; c < t.length; c++) {
      let f = t[c];
      if (typeof f == "string" && ((f = f.trim()), xu(f))) {
        const d = km(f, n.current);
        (d !== void 0 && (t[c] = d),
          c === t.length - 1 && (this.finalKeyframe = f));
      }
    }
    if ((this.resolveNoneKeyframes(), !Cm.has(r) || t.length !== 2)) return;
    const [i, s] = t,
      o = mf(i),
      l = mf(s),
      a = ef(i),
      u = ef(s);
    if (a !== u && Nt[r]) {
      this.needsMeasurement = !0;
      return;
    }
    if (o !== l)
      if (cf(o) && cf(l))
        for (let c = 0; c < t.length; c++) {
          const f = t[c];
          typeof f == "string" && (t[c] = parseFloat(f));
        }
      else Nt[r] && (this.needsMeasurement = !0);
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: t, name: n } = this,
      r = [];
    for (let i = 0; i < t.length; i++) (t[i] === null || Y1(t[i])) && r.push(i);
    r.length && nx(t, r, n);
  }
  measureInitialState() {
    const { element: t, unresolvedKeyframes: n, name: r } = this;
    if (!t || !t.current) return;
    (r === "height" && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = Nt[r](
        t.measureViewportBox(),
        window.getComputedStyle(t.current),
      )),
      (n[0] = this.measuredOrigin));
    const i = n[n.length - 1];
    i !== void 0 && t.getValue(r, i).jump(i, !1);
  }
  measureEndState() {
    var l;
    const { element: t, name: n, unresolvedKeyframes: r } = this;
    if (!t || !t.current) return;
    const i = t.getValue(n);
    i && i.jump(this.measuredOrigin, !1);
    const s = r.length - 1,
      o = r[s];
    ((r[s] = Nt[n](t.measureViewportBox(), window.getComputedStyle(t.current))),
      o !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = o),
      (l = this.removedTransforms) != null &&
        l.length &&
        this.removedTransforms.forEach(([a, u]) => {
          t.getValue(a).set(u);
        }),
      this.resolveNoneKeyframes());
  }
}
function Vm(e, t, n) {
  if (e == null) return [];
  if (e instanceof EventTarget) return [e];
  if (typeof e == "string") {
    const i = document.querySelectorAll(e);
    return i ? Array.from(i) : [];
  }
  return Array.from(e).filter((r) => r != null);
}
const la = (e, t) => (t && typeof e == "number" ? t.transform(e) : e);
function jm(e) {
  return Op(e) && "offsetHeight" in e && !("ownerSVGElement" in e);
}
const { schedule: tr, cancel: Im } = qp(queueMicrotask, !1),
  Ze = { x: !1, y: !1 };
function Nm() {
  return Ze.x || Ze.y;
}
function ix(e) {
  return e === "x" || e === "y"
    ? Ze[e]
      ? null
      : ((Ze[e] = !0),
        () => {
          Ze[e] = !1;
        })
    : Ze.x || Ze.y
      ? null
      : ((Ze.x = Ze.y = !0),
        () => {
          Ze.x = Ze.y = !1;
        });
}
function _m(e, t) {
  const n = Vm(e),
    r = new AbortController(),
    i = { passive: !0, ...t, signal: r.signal };
  return [n, i, () => r.abort()];
}
function sx(e) {
  return !(e.pointerType === "touch" || Nm());
}
function ox(e, t, n = {}) {
  const [r, i, s] = _m(e, n);
  return (
    r.forEach((o) => {
      let l = !1,
        a = !1,
        u;
      const c = () => {
          o.removeEventListener("pointerleave", y);
        },
        f = (w) => {
          (u && (u(w), (u = void 0)), c());
        },
        d = (w) => {
          ((l = !1),
            window.removeEventListener("pointerup", d),
            window.removeEventListener("pointercancel", d),
            a && ((a = !1), f(w)));
        },
        g = () => {
          ((l = !0),
            window.addEventListener("pointerup", d, i),
            window.addEventListener("pointercancel", d, i));
        },
        y = (w) => {
          if (w.pointerType !== "touch") {
            if (l) {
              a = !0;
              return;
            }
            f(w);
          }
        },
        v = (w) => {
          if (!sx(w)) return;
          a = !1;
          const p = t(o, w);
          typeof p == "function" &&
            ((u = p), o.addEventListener("pointerleave", y, i));
        };
      (o.addEventListener("pointerenter", v, i),
        o.addEventListener("pointerdown", g, i));
    }),
    s
  );
}
const zm = (e, t) => (t ? (e === t ? !0 : zm(e, t.parentElement)) : !1),
  ju = (e) =>
    e.pointerType === "mouse"
      ? typeof e.button != "number" || e.button <= 0
      : e.isPrimary !== !1,
  lx = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function ax(e) {
  return lx.has(e.tagName) || e.isContentEditable === !0;
}
const ux = new Set(["INPUT", "SELECT", "TEXTAREA"]);
function cx(e) {
  return ux.has(e.tagName) || e.isContentEditable === !0;
}
const bi = new WeakSet();
function yf(e) {
  return (t) => {
    t.key === "Enter" && e(t);
  };
}
function zo(e, t) {
  e.dispatchEvent(
    new PointerEvent("pointer" + t, { isPrimary: !0, bubbles: !0 }),
  );
}
const fx = (e, t) => {
  const n = e.currentTarget;
  if (!n) return;
  const r = yf(() => {
    if (bi.has(n)) return;
    zo(n, "down");
    const i = yf(() => {
        zo(n, "up");
      }),
      s = () => zo(n, "cancel");
    (n.addEventListener("keyup", i, t), n.addEventListener("blur", s, t));
  });
  (n.addEventListener("keydown", r, t),
    n.addEventListener("blur", () => n.removeEventListener("keydown", r), t));
};
function vf(e) {
  return ju(e) && !Nm();
}
const xf = new WeakSet();
function dx(e, t, n = {}) {
  const [r, i, s] = _m(e, n),
    o = (l) => {
      const a = l.currentTarget;
      if (!vf(l) || xf.has(l)) return;
      (bi.add(a), n.stopPropagation && xf.add(l));
      const u = t(a, l),
        c = (g, y) => {
          (window.removeEventListener("pointerup", f),
            window.removeEventListener("pointercancel", d),
            bi.has(a) && bi.delete(a),
            vf(g) && typeof u == "function" && u(g, { success: y }));
        },
        f = (g) => {
          c(
            g,
            a === window ||
              a === document ||
              n.useGlobalTarget ||
              zm(a, g.target),
          );
        },
        d = (g) => {
          c(g, !1);
        };
      (window.addEventListener("pointerup", f, i),
        window.addEventListener("pointercancel", d, i));
    };
  return (
    r.forEach((l) => {
      ((n.useGlobalTarget ? window : l).addEventListener("pointerdown", o, i),
        jm(l) &&
          (l.addEventListener("focus", (u) => fx(u, i)),
          !ax(l) && !l.hasAttribute("tabindex") && (l.tabIndex = 0)));
    }),
    s
  );
}
function Iu(e) {
  return Op(e) && "ownerSVGElement" in e;
}
const Zi = new WeakMap();
let Mt;
const Fm = (e, t, n) => (r, i) =>
    i && i[0]
      ? i[0][e + "Size"]
      : Iu(r) && "getBBox" in r
        ? r.getBBox()[t]
        : r[n],
  hx = Fm("inline", "width", "offsetWidth"),
  px = Fm("block", "height", "offsetHeight");
function mx({ target: e, borderBoxSize: t }) {
  var n;
  (n = Zi.get(e)) == null ||
    n.forEach((r) => {
      r(e, {
        get width() {
          return hx(e, t);
        },
        get height() {
          return px(e, t);
        },
      });
    });
}
function gx(e) {
  e.forEach(mx);
}
function yx() {
  typeof ResizeObserver > "u" || (Mt = new ResizeObserver(gx));
}
function vx(e, t) {
  Mt || yx();
  const n = Vm(e);
  return (
    n.forEach((r) => {
      let i = Zi.get(r);
      (i || ((i = new Set()), Zi.set(r, i)),
        i.add(t),
        Mt == null || Mt.observe(r));
    }),
    () => {
      n.forEach((r) => {
        const i = Zi.get(r);
        (i == null || i.delete(t),
          (i != null && i.size) || Mt == null || Mt.unobserve(r));
      });
    }
  );
}
const qi = new Set();
let _n;
function xx() {
  ((_n = () => {
    const e = {
      get width() {
        return window.innerWidth;
      },
      get height() {
        return window.innerHeight;
      },
    };
    qi.forEach((t) => t(e));
  }),
    window.addEventListener("resize", _n));
}
function wx(e) {
  return (
    qi.add(e),
    _n || xx(),
    () => {
      (qi.delete(e),
        !qi.size &&
          typeof _n == "function" &&
          (window.removeEventListener("resize", _n), (_n = void 0)));
    }
  );
}
function aa(e, t) {
  return typeof e == "function" ? wx(e) : vx(e, t);
}
function Om(e, t) {
  let n;
  const r = () => {
    const { currentTime: i } = t,
      o = (i === null ? 0 : i.value) / 100;
    (n !== o && e(o), (n = o));
  };
  return (z.preUpdate(r, !0), () => Xe(r));
}
function Sx(e) {
  return Iu(e) && e.tagName === "svg";
}
function Tx(...e) {
  const t = !Array.isArray(e[0]),
    n = t ? 0 : -1,
    r = e[0 + n],
    i = e[1 + n],
    s = e[2 + n],
    o = e[3 + n],
    l = Cu(i, s, o);
  return t ? l(r) : l;
}
const kx = [...Dm, ee, st],
  Cx = (e) => kx.find(Mm(e)),
  wf = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  zn = () => ({ x: wf(), y: wf() }),
  Sf = () => ({ min: 0, max: 0 }),
  ne = () => ({ x: Sf(), y: Sf() }),
  Ex = new WeakMap();
function eo(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
function ti(e) {
  return typeof e == "string" || Array.isArray(e);
}
const Nu = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  _u = ["initial", ...Nu];
function to(e) {
  return eo(e.animate) || _u.some((t) => ti(e[t]));
}
function Bm(e) {
  return !!(to(e) || e.variants);
}
function Px(e, t, n) {
  for (const r in t) {
    const i = t[r],
      s = n[r];
    if (ue(i)) e.addValue(r, i);
    else if (ue(s)) e.addValue(r, nt(i, { owner: e }));
    else if (s !== i)
      if (e.hasValue(r)) {
        const o = e.getValue(r);
        o.liveStyle === !0 ? o.jump(i) : o.hasAnimated || o.set(i);
      } else {
        const o = e.getStaticValue(r);
        e.addValue(r, nt(o !== void 0 ? o : i, { owner: e }));
      }
  }
  for (const r in n) t[r] === void 0 && e.removeValue(r);
  return t;
}
const ua = { current: null },
  Wm = { current: !1 },
  Ax = typeof window < "u";
function Mx() {
  if (((Wm.current = !0), !!Ax))
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"),
        t = () => (ua.current = e.matches);
      (e.addEventListener("change", t), t());
    } else ua.current = !1;
}
const Tf = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete",
];
let Vs = {};
function Um(e) {
  Vs = e;
}
function Dx() {
  return Vs;
}
class Lx {
  scrapeMotionValuesFromProps(t, n, r) {
    return {};
  }
  constructor(
    {
      parent: t,
      props: n,
      presenceContext: r,
      reducedMotionConfig: i,
      skipAnimations: s,
      blockInitialAnimation: o,
      visualState: l,
    },
    a = {},
  ) {
    ((this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.shouldSkipAnimations = !1),
      (this.values = new Map()),
      (this.KeyframeResolver = Pu),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.hasBeenMounted = !1),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(
            this.current,
            this.renderState,
            this.props.style,
            this.projection,
          ));
      }),
      (this.renderScheduledAt = 0),
      (this.scheduleRender = () => {
        const g = ye.now();
        this.renderScheduledAt < g &&
          ((this.renderScheduledAt = g), z.render(this.render, !1, !0));
      }));
    const { latestValues: u, renderState: c } = l;
    ((this.latestValues = u),
      (this.baseTarget = { ...u }),
      (this.initialValues = n.initial ? { ...u } : {}),
      (this.renderState = c),
      (this.parent = t),
      (this.props = n),
      (this.presenceContext = r),
      (this.depth = t ? t.depth + 1 : 0),
      (this.reducedMotionConfig = i),
      (this.skipAnimationsConfig = s),
      (this.options = a),
      (this.blockInitialAnimation = !!o),
      (this.isControllingVariants = to(n)),
      (this.isVariantNode = Bm(n)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(t && t.current)));
    const { willChange: f, ...d } = this.scrapeMotionValuesFromProps(
      n,
      {},
      this,
    );
    for (const g in d) {
      const y = d[g];
      u[g] !== void 0 && ue(y) && y.set(u[g]);
    }
  }
  mount(t) {
    var n, r;
    if (this.hasBeenMounted)
      for (const i in this.initialValues)
        ((n = this.values.get(i)) == null || n.jump(this.initialValues[i]),
          (this.latestValues[i] = this.initialValues[i]));
    ((this.current = t),
      Ex.set(t, this),
      this.projection && !this.projection.instance && this.projection.mount(t),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((i, s) => this.bindToMotionValue(s, i)),
      this.reducedMotionConfig === "never"
        ? (this.shouldReduceMotion = !1)
        : this.reducedMotionConfig === "always"
          ? (this.shouldReduceMotion = !0)
          : (Wm.current || Mx(), (this.shouldReduceMotion = ua.current)),
      (this.shouldSkipAnimations = this.skipAnimationsConfig ?? !1),
      (r = this.parent) == null || r.addChild(this),
      this.update(this.props, this.presenceContext),
      (this.hasBeenMounted = !0));
  }
  unmount() {
    var t;
    (this.projection && this.projection.unmount(),
      Xe(this.notifyUpdate),
      Xe(this.render),
      this.valueSubscriptions.forEach((n) => n()),
      this.valueSubscriptions.clear(),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      (t = this.parent) == null || t.removeChild(this));
    for (const n in this.events) this.events[n].clear();
    for (const n in this.features) {
      const r = this.features[n];
      r && (r.unmount(), (r.isMounted = !1));
    }
    this.current = null;
  }
  addChild(t) {
    (this.children.add(t),
      this.enteringChildren ?? (this.enteringChildren = new Set()),
      this.enteringChildren.add(t));
  }
  removeChild(t) {
    (this.children.delete(t),
      this.enteringChildren && this.enteringChildren.delete(t));
  }
  bindToMotionValue(t, n) {
    if (
      (this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)(),
      n.accelerate && wm.has(t) && this.current instanceof HTMLElement)
    ) {
      const {
          factory: o,
          keyframes: l,
          times: a,
          ease: u,
          duration: c,
        } = n.accelerate,
        f = new vm({
          element: this.current,
          name: t,
          keyframes: l,
          times: a,
          ease: u,
          duration: Ne(c),
        }),
        d = o(f);
      this.valueSubscriptions.set(t, () => {
        (d(), f.cancel());
      });
      return;
    }
    const r = lr.has(t);
    r && this.onBindTransform && this.onBindTransform();
    const i = n.on("change", (o) => {
      ((this.latestValues[t] = o),
        this.props.onUpdate && z.preRender(this.notifyUpdate),
        r && this.projection && (this.projection.isTransformDirty = !0),
        this.scheduleRender());
    });
    let s;
    (typeof window < "u" &&
      window.MotionCheckAppearSync &&
      (s = window.MotionCheckAppearSync(this, t, n)),
      this.valueSubscriptions.set(t, () => {
        (i(), s && s());
      }));
  }
  sortNodePosition(t) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== t.type
      ? 0
      : this.sortInstanceNodePosition(this.current, t.current);
  }
  updateFeatures() {
    let t = "animation";
    for (t in Vs) {
      const n = Vs[t];
      if (!n) continue;
      const { isEnabled: r, Feature: i } = n;
      if (
        (!this.features[t] &&
          i &&
          r(this.props) &&
          (this.features[t] = new i(this)),
        this.features[t])
      ) {
        const s = this.features[t];
        s.isMounted ? s.update() : (s.mount(), (s.isMounted = !0));
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : ne();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, n) {
    this.latestValues[t] = n;
  }
  update(t, n) {
    ((t.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = t),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = n));
    for (let r = 0; r < Tf.length; r++) {
      const i = Tf[r];
      this.propEventSubscriptions[i] &&
        (this.propEventSubscriptions[i](),
        delete this.propEventSubscriptions[i]);
      const s = "on" + i,
        o = t[s];
      o && (this.propEventSubscriptions[i] = this.on(i, o));
    }
    ((this.prevMotionValues = Px(
      this,
      this.scrapeMotionValuesFromProps(t, this.prevProps || {}, this),
      this.prevMotionValues,
    )),
      this.handleChildMotionValue && this.handleChildMotionValue());
  }
  getProps() {
    return this.props;
  }
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode
      ? this
      : this.parent
        ? this.parent.getClosestVariantNode()
        : void 0;
  }
  addVariantChild(t) {
    const n = this.getClosestVariantNode();
    if (n)
      return (
        n.variantChildren && n.variantChildren.add(t),
        () => n.variantChildren.delete(t)
      );
  }
  addValue(t, n) {
    const r = this.values.get(t);
    n !== r &&
      (r && this.removeValue(t),
      this.bindToMotionValue(t, n),
      this.values.set(t, n),
      (this.latestValues[t] = n.get()));
  }
  removeValue(t) {
    this.values.delete(t);
    const n = this.valueSubscriptions.get(t);
    (n && (n(), this.valueSubscriptions.delete(t)),
      delete this.latestValues[t],
      this.removeValueFromRenderState(t, this.renderState));
  }
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, n) {
    if (this.props.values && this.props.values[t]) return this.props.values[t];
    let r = this.values.get(t);
    return (
      r === void 0 &&
        n !== void 0 &&
        ((r = nt(n === null ? void 0 : n, { owner: this })),
        this.addValue(t, r)),
      r
    );
  }
  readValue(t, n) {
    let r =
      this.latestValues[t] !== void 0 || !this.current
        ? this.latestValues[t]
        : (this.getBaseTargetFromProps(this.props, t) ??
          this.readValueFromInstance(this.current, t, this.options));
    return (
      r != null &&
        (typeof r == "string" && (Fp(r) || Bp(r))
          ? (r = parseFloat(r))
          : !Cx(r) && st.test(n) && (r = Rm(t, n)),
        this.setBaseTarget(t, ue(r) ? r.get() : r)),
      ue(r) ? r.get() : r
    );
  }
  setBaseTarget(t, n) {
    this.baseTarget[t] = n;
  }
  getBaseTarget(t) {
    var s;
    const { initial: n } = this.props;
    let r;
    if (typeof n == "string" || typeof n == "object") {
      const o = Ru(
        this.props,
        n,
        (s = this.presenceContext) == null ? void 0 : s.custom,
      );
      o && (r = o[t]);
    }
    if (n && r !== void 0) return r;
    const i = this.getBaseTargetFromProps(this.props, t);
    return i !== void 0 && !ue(i)
      ? i
      : this.initialValues[t] !== void 0 && r === void 0
        ? void 0
        : this.baseTarget[t];
  }
  on(t, n) {
    return (
      this.events[t] || (this.events[t] = new mu()),
      this.events[t].add(n)
    );
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
  scheduleRenderMicrotask() {
    tr.render(this.render);
  }
}
class $m extends Lx {
  constructor() {
    (super(...arguments), (this.KeyframeResolver = rx));
  }
  sortInstanceNodePosition(t, n) {
    return t.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, n) {
    const r = t.style;
    return r ? r[n] : void 0;
  }
  removeValueFromRenderState(t, { vars: n, style: r }) {
    (delete n[t], delete r[t]);
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    ue(t) &&
      (this.childSubscription = t.on("change", (n) => {
        this.current && (this.current.textContent = `${n}`);
      }));
  }
}
class bt {
  constructor(t) {
    ((this.isMounted = !1), (this.node = t));
  }
  update() {}
}
function Hm({ top: e, left: t, right: n, bottom: r }) {
  return { x: { min: t, max: n }, y: { min: e, max: r } };
}
function Rx({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function Vx(e, t) {
  if (!t) return e;
  const n = t({ x: e.left, y: e.top }),
    r = t({ x: e.right, y: e.bottom });
  return { top: n.y, left: n.x, bottom: r.y, right: r.x };
}
function Fo(e) {
  return e === void 0 || e === 1;
}
function ca({ scale: e, scaleX: t, scaleY: n }) {
  return !Fo(e) || !Fo(t) || !Fo(n);
}
function nn(e) {
  return (
    ca(e) ||
    Km(e) ||
    e.z ||
    e.rotate ||
    e.rotateX ||
    e.rotateY ||
    e.skewX ||
    e.skewY
  );
}
function Km(e) {
  return kf(e.x) || kf(e.y);
}
function kf(e) {
  return e && e !== "0%";
}
function js(e, t, n) {
  const r = e - n,
    i = t * r;
  return n + i;
}
function Cf(e, t, n, r, i) {
  return (i !== void 0 && (e = js(e, i, r)), js(e, n, r) + t);
}
function fa(e, t = 0, n = 1, r, i) {
  ((e.min = Cf(e.min, t, n, r, i)), (e.max = Cf(e.max, t, n, r, i)));
}
function Gm(e, { x: t, y: n }) {
  (fa(e.x, t.translate, t.scale, t.originPoint),
    fa(e.y, n.translate, n.scale, n.originPoint));
}
const Ef = 0.999999999999,
  Pf = 1.0000000000001;
function jx(e, t, n, r = !1) {
  var l;
  const i = n.length;
  if (!i) return;
  t.x = t.y = 1;
  let s, o;
  for (let a = 0; a < i; a++) {
    ((s = n[a]), (o = s.projectionDelta));
    const { visualElement: u } = s.options;
    (u && u.props.style && u.props.style.display === "contents") ||
      (r &&
        s.options.layoutScroll &&
        s.scroll &&
        s !== s.root &&
        (ft(e.x, -s.scroll.offset.x), ft(e.y, -s.scroll.offset.y)),
      o && ((t.x *= o.x.scale), (t.y *= o.y.scale), Gm(e, o)),
      r &&
        nn(s.latestValues) &&
        Ji(e, s.latestValues, (l = s.layout) == null ? void 0 : l.layoutBox));
  }
  (t.x < Pf && t.x > Ef && (t.x = 1), t.y < Pf && t.y > Ef && (t.y = 1));
}
function ft(e, t) {
  ((e.min += t), (e.max += t));
}
function Af(e, t, n, r, i = 0.5) {
  const s = W(e.min, e.max, i);
  fa(e, t, n, s, r);
}
function Mf(e, t) {
  return typeof e == "string" ? (parseFloat(e) / 100) * (t.max - t.min) : e;
}
function Ji(e, t, n) {
  const r = n ?? e;
  (Af(e.x, Mf(t.x, r.x), t.scaleX, t.scale, t.originX),
    Af(e.y, Mf(t.y, r.y), t.scaleY, t.scale, t.originY));
}
function Xm(e, t) {
  return Hm(Vx(e.getBoundingClientRect(), t));
}
function Ix(e, t, n) {
  const r = Xm(e, n),
    { scroll: i } = t;
  return (i && (ft(r.x, i.offset.x), ft(r.y, i.offset.y)), r);
}
const Nx = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  _x = or.length;
function zx(e, t, n) {
  let r = "",
    i = !0;
  for (let o = 0; o < _x; o++) {
    const l = or[o],
      a = e[l];
    if (a === void 0) continue;
    let u = !0;
    if (typeof a == "number") u = a === (l.startsWith("scale") ? 1 : 0);
    else {
      const c = parseFloat(a);
      u = l.startsWith("scale") ? c === 1 : c === 0;
    }
    if (!u || n) {
      const c = la(a, Rs[l]);
      if (!u) {
        i = !1;
        const f = Nx[l] || l;
        r += `${f}(${c}) `;
      }
      n && (t[l] = c);
    }
  }
  const s = e.pathRotation;
  return (
    s && ((i = !1), (r += `rotate(${la(s, Rs.pathRotation)}) `)),
    (r = r.trim()),
    n ? (r = n(t, i ? "" : r)) : i && (r = "none"),
    r
  );
}
function zu(e, t, n) {
  const { style: r, vars: i, transformOrigin: s } = e;
  let o = !1,
    l = !1;
  for (const a in t) {
    const u = t[a];
    if (lr.has(a)) {
      o = !0;
      continue;
    } else if (em(a)) {
      i[a] = u;
      continue;
    } else {
      const c = la(u, Rs[a]);
      a.startsWith("origin") ? ((l = !0), (s[a] = c)) : (r[a] = c);
    }
  }
  if (
    (t.transform ||
      (o || n
        ? (r.transform = zx(t, e.transform, n))
        : r.transform && (r.transform = "none")),
    l)
  ) {
    const { originX: a = "50%", originY: u = "50%", originZ: c = 0 } = s;
    r.transformOrigin = `${a} ${u} ${c}`;
  }
}
function Ym(e, { style: t, vars: n }, r, i) {
  const s = e.style;
  let o;
  for (o in t) s[o] = t[o];
  i == null || i.applyProjectionStyles(s, r);
  for (o in n) s.setProperty(o, n[o]);
}
function Df(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
const gr = {
    correct: (e, t) => {
      if (!t.target) return e;
      if (typeof e == "string")
        if (R.test(e)) e = parseFloat(e);
        else return e;
      const n = Df(e, t.target.x),
        r = Df(e, t.target.y);
      return `${n}% ${r}%`;
    },
  },
  Fx = {
    correct: (e, { treeScale: t, projectionDelta: n }) => {
      const r = e,
        i = st.parse(e);
      if (i.length > 5) return r;
      const s = st.createTransformer(e),
        o = typeof i[0] != "number" ? 1 : 0,
        l = n.x.scale * t.x,
        a = n.y.scale * t.y;
      ((i[0 + o] /= l), (i[1 + o] /= a));
      const u = W(l, a, 0.5);
      return (
        typeof i[2 + o] == "number" && (i[2 + o] /= u),
        typeof i[3 + o] == "number" && (i[3 + o] /= u),
        s(i)
      );
    },
  },
  da = {
    borderRadius: {
      ...gr,
      applyTo: [
        "borderTopLeftRadius",
        "borderTopRightRadius",
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
      ],
    },
    borderTopLeftRadius: gr,
    borderTopRightRadius: gr,
    borderBottomLeftRadius: gr,
    borderBottomRightRadius: gr,
    boxShadow: Fx,
  };
function Qm(e, { layout: t, layoutId: n }) {
  return (
    lr.has(e) ||
    e.startsWith("origin") ||
    ((t || n !== void 0) && (!!da[e] || e === "opacity"))
  );
}
function Fu(e, t, n) {
  var o;
  const r = e.style,
    i = t == null ? void 0 : t.style,
    s = {};
  if (!r) return s;
  for (const l in r)
    (ue(r[l]) ||
      (i && ue(i[l])) ||
      Qm(l, e) ||
      ((o = n == null ? void 0 : n.getValue(l)) == null
        ? void 0
        : o.liveStyle) !== void 0) &&
      (s[l] = r[l]);
  return s;
}
function Ox(e) {
  return window.getComputedStyle(e);
}
class Bx extends $m {
  constructor() {
    (super(...arguments), (this.type = "html"), (this.renderInstance = Ym));
  }
  readValueFromInstance(t, n) {
    var r;
    if (lr.has(n))
      return (r = this.projection) != null && r.isProjecting ? bl(n) : o1(t, n);
    {
      const i = Ox(t),
        s = (em(n) ? i.getPropertyValue(n) : i[n]) || 0;
      return typeof s == "string" ? s.trim() : s;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return Xm(t, n);
  }
  build(t, n, r) {
    zu(t, n, r.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return Fu(t, n, r);
  }
}
const Wx = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  Ux = { offset: "strokeDashoffset", array: "strokeDasharray" };
function $x(e, t, n = 1, r = 0, i = !0) {
  e.pathLength = 1;
  const s = i ? Wx : Ux;
  ((e[s.offset] = `${-r}`), (e[s.array] = `${t} ${n}`));
}
const Hx = ["offsetDistance", "offsetPath", "offsetRotate", "offsetAnchor"];
function bm(
  e,
  {
    attrX: t,
    attrY: n,
    attrScale: r,
    pathLength: i,
    pathSpacing: s = 1,
    pathOffset: o = 0,
    ...l
  },
  a,
  u,
  c,
) {
  if ((zu(e, l, u), a)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  ((e.attrs = e.style), (e.style = {}));
  const { attrs: f, style: d } = e;
  (f.transform && ((d.transform = f.transform), delete f.transform),
    (d.transform || f.transformOrigin) &&
      ((d.transformOrigin = f.transformOrigin ?? "50% 50%"),
      delete f.transformOrigin),
    d.transform &&
      ((d.transformBox = (c == null ? void 0 : c.transformBox) ?? "fill-box"),
      delete f.transformBox));
  for (const g of Hx) f[g] !== void 0 && ((d[g] = f[g]), delete f[g]);
  (t !== void 0 && (f.x = t),
    n !== void 0 && (f.y = n),
    r !== void 0 && (f.scale = r),
    i !== void 0 && $x(f, i, s, o, !1));
}
const Zm = new Set([
    "baseFrequency",
    "diffuseConstant",
    "kernelMatrix",
    "kernelUnitLength",
    "keySplines",
    "keyTimes",
    "limitingConeAngle",
    "markerHeight",
    "markerWidth",
    "numOctaves",
    "targetX",
    "targetY",
    "surfaceScale",
    "specularConstant",
    "specularExponent",
    "stdDeviation",
    "tableValues",
    "viewBox",
    "gradientTransform",
    "pathLength",
    "startOffset",
    "textLength",
    "lengthAdjust",
  ]),
  qm = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function Kx(e, t, n, r) {
  Ym(e, t, void 0, r);
  for (const i in t.attrs) e.setAttribute(Zm.has(i) ? i : Vu(i), t.attrs[i]);
}
function Jm(e, t, n) {
  const r = Fu(e, t, n);
  for (const i in e)
    if (ue(e[i]) || ue(t[i])) {
      const s =
        or.indexOf(i) !== -1
          ? "attr" + i.charAt(0).toUpperCase() + i.substring(1)
          : i;
      r[s] = e[i];
    }
  return r;
}
class Gx extends $m {
  constructor() {
    (super(...arguments),
      (this.type = "svg"),
      (this.isSVGTag = !1),
      (this.measureInstanceViewportBox = ne));
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (lr.has(n)) {
      const r = Lm(n);
      return (r && r.default) || 0;
    }
    return ((n = Zm.has(n) ? n : Vu(n)), t.getAttribute(n));
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return Jm(t, n, r);
  }
  build(t, n, r) {
    bm(t, n, this.isSVGTag, r.transformTemplate, r.style);
  }
  renderInstance(t, n, r, i) {
    Kx(t, n, r, i);
  }
  mount(t) {
    ((this.isSVGTag = qm(t.tagName)), super.mount(t));
  }
}
const Xx = _u.length;
function eg(e) {
  if (!e) return;
  if (!e.isControllingVariants) {
    const n = e.parent ? eg(e.parent) || {} : {};
    return (e.props.initial !== void 0 && (n.initial = e.props.initial), n);
  }
  const t = {};
  for (let n = 0; n < Xx; n++) {
    const r = _u[n],
      i = e.props[r];
    (ti(i) || i === !1) && (t[r] = i);
  }
  return t;
}
function tg(e, t) {
  if (!Array.isArray(t)) return !1;
  const n = t.length;
  if (n !== e.length) return !1;
  for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
  return !0;
}
const Yx = [...Nu].reverse(),
  Qx = Nu.length;
function bx(e) {
  return (t) =>
    Promise.all(t.map(({ animation: n, options: r }) => G1(e, n, r)));
}
function Zx(e) {
  let t = bx(e),
    n = Lf(),
    r = !0,
    i = !1;
  const s = (u) => (c, f) => {
    var g;
    const d = dn(
      e,
      f,
      u === "exit"
        ? (g = e.presenceContext) == null
          ? void 0
          : g.custom
        : void 0,
    );
    if (d) {
      const { transition: y, transitionEnd: v, ...w } = d;
      c = { ...c, ...w, ...v };
    }
    return c;
  };
  function o(u) {
    t = u(e);
  }
  function l(u) {
    const { props: c } = e,
      f = eg(e.parent) || {},
      d = [],
      g = new Set();
    let y = {},
      v = 1 / 0;
    for (let p = 0; p < Qx; p++) {
      const h = Yx[p],
        m = n[h],
        x = c[h] !== void 0 ? c[h] : f[h],
        S = ti(x),
        P = h === u ? m.isActive : null;
      P === !1 && (v = p);
      let E = x === f[h] && x !== c[h] && S;
      if (
        (E && (r || i) && e.manuallyAnimateOnMount && (E = !1),
        (m.protectedKeys = { ...y }),
        (!m.isActive && P === null) ||
          (!x && !m.prevProp) ||
          eo(x) ||
          typeof x == "boolean")
      )
        continue;
      if (h === "exit" && m.isActive && P !== !0) {
        m.prevResolvedValues && (y = { ...y, ...m.prevResolvedValues });
        continue;
      }
      const k = qx(m.prevProp, x);
      let I = k || (h === u && m.isActive && !E && S) || (p > v && S),
        M = !1;
      const F = Array.isArray(x) ? x : [x];
      let q = F.reduce(s(h), {});
      P === !1 && (q = {});
      const { prevResolvedValues: De = {} } = m,
        Le = { ...De, ...q },
        Ye = (A) => {
          ((I = !0),
            g.has(A) && ((M = !0), g.delete(A)),
            (m.needsAnimating[A] = !0));
          const V = e.getValue(A);
          V && (V.liveStyle = !1);
        };
      for (const A in Le) {
        const V = q[A],
          j = De[A];
        if (y.hasOwnProperty(A)) continue;
        let B = !1;
        (na(V) && na(j) ? (B = !tg(V, j) || k) : (B = V !== j),
          B
            ? V != null
              ? Ye(A)
              : g.add(A)
            : V !== void 0 && g.has(A)
              ? Ye(A)
              : (m.protectedKeys[A] = !0));
      }
      ((m.prevProp = x),
        (m.prevResolvedValues = q),
        m.isActive && (y = { ...y, ...q }),
        (r || i) && e.blockInitialAnimation && (I = !1));
      const Te = E && k;
      I &&
        (!Te || M) &&
        d.push(
          ...F.map((A) => {
            const V = { type: h };
            if (
              typeof A == "string" &&
              (r || i) &&
              !Te &&
              e.manuallyAnimateOnMount &&
              e.parent
            ) {
              const { parent: j } = e,
                B = dn(j, A);
              if (j.enteringChildren && B) {
                const { delayChildren: J } = B.transition || {};
                V.delay = Sm(j.enteringChildren, e, J);
              }
            }
            return { animation: A, options: V };
          }),
        );
    }
    if (g.size) {
      const p = {};
      if (typeof c.initial != "boolean") {
        const h = dn(e, Array.isArray(c.initial) ? c.initial[0] : c.initial);
        h && h.transition && (p.transition = h.transition);
      }
      (g.forEach((h) => {
        const m = e.getBaseTarget(h),
          x = e.getValue(h);
        (x && (x.liveStyle = !0), (p[h] = m ?? null));
      }),
        d.push({ animation: p }));
    }
    let w = !!d.length;
    return (
      r &&
        (c.initial === !1 || c.initial === c.animate) &&
        !e.manuallyAnimateOnMount &&
        (w = !1),
      (r = !1),
      (i = !1),
      w ? t(d) : Promise.resolve()
    );
  }
  function a(u, c) {
    var d;
    if (n[u].isActive === c) return Promise.resolve();
    ((d = e.variantChildren) == null ||
      d.forEach((g) => {
        var y;
        return (y = g.animationState) == null ? void 0 : y.setActive(u, c);
      }),
      (n[u].isActive = c));
    const f = l(u);
    for (const g in n) n[g].protectedKeys = {};
    return f;
  }
  return {
    animateChanges: l,
    setActive: a,
    setAnimateFunction: o,
    getState: () => n,
    reset: () => {
      ((n = Lf()), (i = !0));
    },
  };
}
function qx(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !tg(t, e) : !1;
}
function Jt(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function Lf() {
  return {
    animate: Jt(!0),
    whileInView: Jt(),
    whileHover: Jt(),
    whileTap: Jt(),
    whileDrag: Jt(),
    whileFocus: Jt(),
    exit: Jt(),
  };
}
function ha(e, t) {
  ((e.min = t.min), (e.max = t.max));
}
function be(e, t) {
  (ha(e.x, t.x), ha(e.y, t.y));
}
function Rf(e, t) {
  ((e.translate = t.translate),
    (e.scale = t.scale),
    (e.originPoint = t.originPoint),
    (e.origin = t.origin));
}
const ng = 1e-4,
  Jx = 1 - ng,
  ew = 1 + ng,
  rg = 0.01,
  tw = 0 - rg,
  nw = 0 + rg;
function ve(e) {
  return e.max - e.min;
}
function rw(e, t, n) {
  return Math.abs(e - t) <= n;
}
function Vf(e, t, n, r = 0.5) {
  ((e.origin = r),
    (e.originPoint = W(t.min, t.max, e.origin)),
    (e.scale = ve(n) / ve(t)),
    (e.translate = W(n.min, n.max, e.origin) - e.originPoint),
    ((e.scale >= Jx && e.scale <= ew) || isNaN(e.scale)) && (e.scale = 1),
    ((e.translate >= tw && e.translate <= nw) || isNaN(e.translate)) &&
      (e.translate = 0));
}
function Nr(e, t, n, r) {
  (Vf(e.x, t.x, n.x, r ? r.originX : void 0),
    Vf(e.y, t.y, n.y, r ? r.originY : void 0));
}
function jf(e, t, n, r = 0) {
  const i = r ? W(n.min, n.max, r) : n.min;
  ((e.min = i + t.min), (e.max = e.min + ve(t)));
}
function iw(e, t, n, r) {
  (jf(e.x, t.x, n.x, r == null ? void 0 : r.x),
    jf(e.y, t.y, n.y, r == null ? void 0 : r.y));
}
function If(e, t, n, r = 0) {
  const i = r ? W(n.min, n.max, r) : n.min;
  ((e.min = t.min - i), (e.max = e.min + ve(t)));
}
function Is(e, t, n, r) {
  (If(e.x, t.x, n.x, r == null ? void 0 : r.x),
    If(e.y, t.y, n.y, r == null ? void 0 : r.y));
}
function Nf(e, t, n, r, i) {
  return (
    (e -= t),
    (e = js(e, 1 / n, r)),
    i !== void 0 && (e = js(e, 1 / i, r)),
    e
  );
}
function sw(e, t = 0, n = 1, r = 0.5, i, s = e, o = e) {
  if (
    (mt.test(t) &&
      ((t = parseFloat(t)), (t = W(o.min, o.max, t / 100) - o.min)),
    typeof t != "number")
  )
    return;
  let l = W(s.min, s.max, r);
  (e === s && (l -= t),
    (e.min = Nf(e.min, t, n, l, i)),
    (e.max = Nf(e.max, t, n, l, i)));
}
function _f(e, t, [n, r, i], s, o) {
  sw(e, t[n], t[r], t[i], t.scale, s, o);
}
const ow = ["x", "scaleX", "originX"],
  lw = ["y", "scaleY", "originY"];
function zf(e, t, n, r) {
  (_f(e.x, t, ow, n ? n.x : void 0, r ? r.x : void 0),
    _f(e.y, t, lw, n ? n.y : void 0, r ? r.y : void 0));
}
function Ff(e) {
  return e.translate === 0 && e.scale === 1;
}
function ig(e) {
  return Ff(e.x) && Ff(e.y);
}
function Of(e, t) {
  return e.min === t.min && e.max === t.max;
}
function aw(e, t) {
  return Of(e.x, t.x) && Of(e.y, t.y);
}
function Bf(e, t) {
  return (
    Math.round(e.min) === Math.round(t.min) &&
    Math.round(e.max) === Math.round(t.max)
  );
}
function sg(e, t) {
  return Bf(e.x, t.x) && Bf(e.y, t.y);
}
function Wf(e) {
  return ve(e.x) / ve(e.y);
}
function Uf(e, t) {
  return (
    e.translate === t.translate &&
    e.scale === t.scale &&
    e.originPoint === t.originPoint
  );
}
function ct(e) {
  return [e("x"), e("y")];
}
function uw(e, t, n) {
  let r = "";
  const i = e.x.translate / t.x,
    s = e.y.translate / t.y,
    o = (n == null ? void 0 : n.z) || 0;
  if (
    ((i || s || o) && (r = `translate3d(${i}px, ${s}px, ${o}px) `),
    (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
    n)
  ) {
    const {
      transformPerspective: u,
      rotate: c,
      pathRotation: f,
      rotateX: d,
      rotateY: g,
      skewX: y,
      skewY: v,
    } = n;
    (u && (r = `perspective(${u}px) ${r}`),
      c && (r += `rotate(${c}deg) `),
      f && (r += `rotate(${f}deg) `),
      d && (r += `rotateX(${d}deg) `),
      g && (r += `rotateY(${g}deg) `),
      y && (r += `skewX(${y}deg) `),
      v && (r += `skewY(${v}deg) `));
  }
  const l = e.x.scale * t.x,
    a = e.y.scale * t.y;
  return ((l !== 1 || a !== 1) && (r += `scale(${l}, ${a})`), r || "none");
}
const og = [
    "borderTopLeftRadius",
    "borderTopRightRadius",
    "borderBottomLeftRadius",
    "borderBottomRightRadius",
  ],
  cw = og.length,
  $f = (e) => (typeof e == "string" ? parseFloat(e) : e),
  Hf = (e) => typeof e == "number" || R.test(e);
function fw(e, t, n, r, i, s) {
  i
    ? ((e.opacity = W(0, n.opacity ?? 1, dw(r))),
      (e.opacityExit = W(t.opacity ?? 1, 0, hw(r))))
    : s && (e.opacity = W(t.opacity ?? 1, n.opacity ?? 1, r));
  for (let o = 0; o < cw; o++) {
    const l = og[o];
    let a = Kf(t, l),
      u = Kf(n, l);
    if (a === void 0 && u === void 0) continue;
    (a || (a = 0),
      u || (u = 0),
      a === 0 || u === 0 || Hf(a) === Hf(u)
        ? ((e[l] = Math.max(W($f(a), $f(u), r), 0)),
          (mt.test(u) || mt.test(a)) && (e[l] += "%"))
        : (e[l] = u));
  }
  (t.rotate || n.rotate) && (e.rotate = W(t.rotate || 0, n.rotate || 0, r));
}
function Kf(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const dw = lg(0, 0.5, Yp),
  hw = lg(0.5, 0.95, Me);
function lg(e, t, n) {
  return (r) => (r < e ? 0 : r > t ? 1 : n(Jn(e, t, r)));
}
function pw(e, t, n) {
  const r = ue(e) ? e : nt(e);
  return (r.start(Lu("", r, t, n)), r.animation);
}
function ni(e, t, n, r = { passive: !0 }) {
  return (e.addEventListener(t, n, r), () => e.removeEventListener(t, n));
}
const mw = (e, t) => e.depth - t.depth;
class gw {
  constructor() {
    ((this.children = []), (this.isDirty = !1));
  }
  add(t) {
    (hu(this.children, t), (this.isDirty = !0));
  }
  remove(t) {
    (Ps(this.children, t), (this.isDirty = !0));
  }
  forEach(t) {
    (this.isDirty && this.children.sort(mw),
      (this.isDirty = !1),
      this.children.forEach(t));
  }
}
function yw(e, t) {
  const n = ye.now(),
    r = ({ timestamp: i }) => {
      const s = i - n;
      s >= t && (Xe(r), e(s - t));
    };
  return (z.setup(r, !0), () => Xe(r));
}
function es(e) {
  return ue(e) ? e.get() : e;
}
class vw {
  constructor() {
    this.members = [];
  }
  add(t) {
    hu(this.members, t);
    for (let n = this.members.length - 1; n >= 0; n--) {
      const r = this.members[n];
      if (r === t || r === this.lead || r === this.prevLead) continue;
      const i = r.instance;
      (!i || i.isConnected === !1) &&
        !r.snapshot &&
        (Ps(this.members, r), r.unmount());
    }
    t.scheduleRender();
  }
  remove(t) {
    if (
      (Ps(this.members, t),
      t === this.prevLead && (this.prevLead = void 0),
      t === this.lead)
    ) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(t) {
    var n;
    for (let r = this.members.indexOf(t) - 1; r >= 0; r--) {
      const i = this.members[r];
      if (
        i.isPresent !== !1 &&
        ((n = i.instance) == null ? void 0 : n.isConnected) !== !1
      )
        return (this.promote(i), !0);
    }
    return !1;
  }
  promote(t, n) {
    var i;
    const r = this.lead;
    if (t !== r && ((this.prevLead = r), (this.lead = t), t.show(), r)) {
      (r.updateSnapshot(), t.scheduleRender());
      const { layoutDependency: s } = r.options,
        { layoutDependency: o } = t.options;
      ((s === void 0 || s !== o) &&
        ((t.resumeFrom = r),
        n && (r.preserveOpacity = !0),
        r.snapshot &&
          ((t.snapshot = r.snapshot),
          (t.snapshot.latestValues = r.animationValues || r.latestValues)),
        (i = t.root) != null && i.isUpdating && (t.isLayoutDirty = !0)),
        t.options.crossfade === !1 && r.hide());
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      var n, r, i, s, o;
      ((r = (n = t.options).onExitComplete) == null || r.call(n),
        (o =
          (i = t.resumingFrom) == null
            ? void 0
            : (s = i.options).onExitComplete) == null || o.call(s));
    });
  }
  scheduleRender() {
    this.members.forEach((t) => t.instance && t.scheduleRender(!1));
  }
  removeLeadSnapshot() {
    var t;
    (t = this.lead) != null && t.snapshot && (this.lead.snapshot = void 0);
  }
}
const ts = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 },
  Oo = ["", "X", "Y", "Z"],
  xw = 1e3;
let ww = 0;
function Bo(e, t, n, r) {
  const { latestValues: i } = t;
  i[e] && ((n[e] = i[e]), t.setStaticValue(e, 0), r && (r[e] = 0));
}
function ag(e) {
  if (((e.hasCheckedOptimisedAppear = !0), e.root === e)) return;
  const { visualElement: t } = e.options;
  if (!t) return;
  const n = Pm(t);
  if (window.MotionHasOptimisedAnimation(n, "transform")) {
    const { layout: i, layoutId: s } = e.options;
    window.MotionCancelOptimisedAnimation(n, "transform", z, !(i || s));
  }
  const { parent: r } = e;
  r && !r.hasCheckedOptimisedAppear && ag(r);
}
function ug({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: n,
  checkIsScrollRoot: r,
  resetTransform: i,
}) {
  return class {
    constructor(o = {}, l = t == null ? void 0 : t()) {
      ((this.id = ww++),
        (this.animationId = 0),
        (this.animationCommitId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.hasCheckedOptimisedAppear = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.layoutVersion = 0),
        (this.updateScheduled = !1),
        (this.scheduleUpdate = () => this.update()),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          ((this.projectionUpdateScheduled = !1),
            this.nodes.forEach(kw),
            this.nodes.forEach(Dw),
            this.nodes.forEach(Lw),
            this.nodes.forEach(Cw));
        }),
        (this.resolvedRelativeTargetAt = 0),
        (this.linkedParentVersion = 0),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = o),
        (this.root = l ? l.root || l : this),
        (this.path = l ? [...l.path, l] : []),
        (this.parent = l),
        (this.depth = l ? l.depth + 1 : 0));
      for (let a = 0; a < this.path.length; a++)
        this.path[a].shouldResetTransform = !0;
      this.root === this && (this.nodes = new gw());
    }
    addEventListener(o, l) {
      return (
        this.eventHandlers.has(o) || this.eventHandlers.set(o, new mu()),
        this.eventHandlers.get(o).add(l)
      );
    }
    notifyListeners(o, ...l) {
      const a = this.eventHandlers.get(o);
      a && a.notify(...l);
    }
    hasListeners(o) {
      return this.eventHandlers.has(o);
    }
    mount(o) {
      if (this.instance) return;
      ((this.isSVG = Iu(o) && !Sx(o)), (this.instance = o));
      const { layoutId: l, layout: a, visualElement: u } = this.options;
      if (
        (u && !u.current && u.mount(o),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        this.root.hasTreeAnimated && (a || l) && (this.isLayoutDirty = !0),
        e)
      ) {
        let c,
          f = 0;
        const d = () => (this.root.updateBlockedByResize = !1);
        (z.read(() => {
          f = window.innerWidth;
        }),
          e(o, () => {
            const g = window.innerWidth;
            g !== f &&
              ((f = g),
              (this.root.updateBlockedByResize = !0),
              c && c(),
              (c = yw(d, 250)),
              ts.hasAnimatedSinceResize &&
                ((ts.hasAnimatedSinceResize = !1), this.nodes.forEach(Yf)));
          }));
      }
      (l && this.root.registerSharedNode(l, this),
        this.options.animate !== !1 &&
          u &&
          (l || a) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: c,
              hasLayoutChanged: f,
              hasRelativeLayoutChanged: d,
              layout: g,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                ((this.target = void 0), (this.relativeTarget = void 0));
                return;
              }
              const y =
                  this.options.transition || u.getDefaultTransition() || Nw,
                { onLayoutAnimationStart: v, onLayoutAnimationComplete: w } =
                  u.getProps(),
                p = !this.targetLayout || !sg(this.targetLayout, g),
                h = !f && d;
              if (
                this.options.layoutRoot ||
                this.resumeFrom ||
                h ||
                (f && (p || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0));
                const m = { ...Du(y, "layout"), onPlay: v, onComplete: w };
                ((u.shouldReduceMotion || this.options.layoutRoot) &&
                  ((m.delay = 0), (m.type = !1)),
                  this.startAnimation(m),
                  this.setAnimationOrigin(c, h, m.path));
              } else
                (f || Yf(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete());
              this.targetLayout = g;
            },
          ));
    }
    unmount() {
      (this.options.layoutId && this.willUpdate(),
        this.root.nodes.remove(this));
      const o = this.getStack();
      (o && o.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        this.eventHandlers.clear(),
        Xe(this.updateProjection));
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(Rw),
        this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: o } = this.options;
      return o && o.getProps().transformTemplate;
    }
    willUpdate(o = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (window.MotionCancelOptimisedAnimation &&
          !this.hasCheckedOptimisedAppear &&
          ag(this),
        !this.root.isUpdating && this.root.startUpdate(),
        this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let c = 0; c < this.path.length; c++) {
        const f = this.path[c];
        ((f.shouldResetTransform = !0),
          (typeof f.latestValues.x == "string" ||
            typeof f.latestValues.y == "string") &&
            (f.isLayoutDirty = !0),
          f.updateScroll("snapshot"),
          f.options.layoutRoot && f.willUpdate(!1));
      }
      const { layoutId: l, layout: a } = this.options;
      if (l === void 0 && !a) return;
      const u = this.getTransformTemplate();
      ((this.prevTransformTemplateValue = u
        ? u(this.latestValues, "")
        : void 0),
        this.updateSnapshot(),
        o && this.notifyListeners("willUpdate"));
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        const a = this.updateBlockedByResize;
        (this.unblockUpdate(),
          (this.updateBlockedByResize = !1),
          this.clearAllSnapshots(),
          a && this.nodes.forEach(Pw),
          this.nodes.forEach(Gf));
        return;
      }
      if (this.animationId <= this.animationCommitId) {
        this.nodes.forEach(Xf);
        return;
      }
      ((this.animationCommitId = this.animationId),
        this.isUpdating
          ? ((this.isUpdating = !1),
            this.nodes.forEach(Aw),
            this.nodes.forEach(Mw),
            this.nodes.forEach(Sw),
            this.nodes.forEach(Tw))
          : this.nodes.forEach(Xf),
        this.clearAllSnapshots());
      const l = ye.now();
      ((se.delta = lt(0, 1e3 / 60, l - se.timestamp)),
        (se.timestamp = l),
        (se.isProcessing = !0),
        Ro.update.process(se),
        Ro.preRender.process(se),
        Ro.render.process(se),
        (se.isProcessing = !1));
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), tr.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      (this.nodes.forEach(Ew), this.sharedNodes.forEach(Vw));
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        z.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      z.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot ||
        !this.instance ||
        ((this.snapshot = this.measure()),
        this.snapshot &&
          !ve(this.snapshot.measuredBox.x) &&
          !ve(this.snapshot.measuredBox.y) &&
          (this.snapshot = void 0));
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let a = 0; a < this.path.length; a++) this.path[a].updateScroll();
      const o = this.layout;
      ((this.layout = this.measure(!1)),
        this.layoutVersion++,
        this.layoutCorrected || (this.layoutCorrected = ne()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox));
      const { visualElement: l } = this.options;
      l &&
        l.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          o ? o.layoutBox : void 0,
        );
    }
    updateScroll(o = "measure") {
      let l = !!(this.options.layoutScroll && this.instance);
      if (
        (this.scroll &&
          this.scroll.animationId === this.root.animationId &&
          this.scroll.phase === o &&
          (l = !1),
        l && this.instance)
      ) {
        const a = r(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: o,
          isRoot: a,
          offset: n(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : a,
        };
      }
    }
    resetTransform() {
      if (!i) return;
      const o =
          this.isLayoutDirty ||
          this.shouldResetTransform ||
          this.options.alwaysMeasureLayout,
        l = this.projectionDelta && !ig(this.projectionDelta),
        a = this.getTransformTemplate(),
        u = a ? a(this.latestValues, "") : void 0,
        c = u !== this.prevTransformTemplateValue;
      o &&
        this.instance &&
        (l || nn(this.latestValues) || c) &&
        (i(this.instance, u),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(o = !0) {
      const l = this.measurePageBox();
      let a = this.removeElementScroll(l);
      return (
        o && (a = this.removeTransform(a)),
        _w(a),
        {
          animationId: this.root.animationId,
          measuredBox: l,
          layoutBox: a,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      var u;
      const { visualElement: o } = this.options;
      if (!o) return ne();
      const l = o.measureViewportBox();
      if (
        !(
          ((u = this.scroll) == null ? void 0 : u.wasRoot) || this.path.some(zw)
        )
      ) {
        const { scroll: c } = this.root;
        c && (ft(l.x, c.offset.x), ft(l.y, c.offset.y));
      }
      return l;
    }
    removeElementScroll(o) {
      var a;
      const l = ne();
      if ((be(l, o), (a = this.scroll) != null && a.wasRoot)) return l;
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u],
          { scroll: f, options: d } = c;
        c !== this.root &&
          f &&
          d.layoutScroll &&
          (f.wasRoot && be(l, o), ft(l.x, f.offset.x), ft(l.y, f.offset.y));
      }
      return l;
    }
    applyTransform(o, l = !1, a) {
      var c, f;
      const u = a || ne();
      be(u, o);
      for (let d = 0; d < this.path.length; d++) {
        const g = this.path[d];
        (!l &&
          g.options.layoutScroll &&
          g.scroll &&
          g !== g.root &&
          (ft(u.x, -g.scroll.offset.x), ft(u.y, -g.scroll.offset.y)),
          nn(g.latestValues) &&
            Ji(
              u,
              g.latestValues,
              (c = g.layout) == null ? void 0 : c.layoutBox,
            ));
      }
      return (
        nn(this.latestValues) &&
          Ji(
            u,
            this.latestValues,
            (f = this.layout) == null ? void 0 : f.layoutBox,
          ),
        u
      );
    }
    removeTransform(o) {
      var a;
      const l = ne();
      be(l, o);
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u];
        if (!nn(c.latestValues)) continue;
        let f;
        (c.instance &&
          (ca(c.latestValues) && c.updateSnapshot(),
          (f = ne()),
          be(f, c.measurePageBox())),
          zf(
            l,
            c.latestValues,
            (a = c.snapshot) == null ? void 0 : a.layoutBox,
            f,
          ));
      }
      return (nn(this.latestValues) && zf(l, this.latestValues), l);
    }
    setTargetDelta(o) {
      ((this.targetDelta = o),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0));
    }
    setOptions(o) {
      this.options = {
        ...this.options,
        ...o,
        crossfade: o.crossfade !== void 0 ? o.crossfade : !0,
      };
    }
    clearMeasurements() {
      ((this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1));
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== se.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(o = !1) {
      var g;
      const l = this.getLead();
      (this.isProjectionDirty || (this.isProjectionDirty = l.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = l.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = l.isSharedProjectionDirty));
      const a = !!this.resumingFrom || this !== l;
      if (
        !(
          o ||
          (a && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          ((g = this.parent) != null && g.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget ||
          this.root.updateBlockedByResize
        )
      )
        return;
      const { layout: c, layoutId: f } = this.options;
      if (!this.layout || !(c || f)) return;
      this.resolvedRelativeTargetAt = se.timestamp;
      const d = this.getClosestProjectingParent();
      (d &&
        this.linkedParentVersion !== d.layoutVersion &&
        !d.options.layoutRoot &&
        this.removeRelativeTarget(),
        !this.targetDelta &&
          !this.relativeTarget &&
          (this.options.layoutAnchor !== !1 && d && d.layout
            ? this.createRelativeTarget(
                d,
                this.layout.layoutBox,
                d.layout.layoutBox,
              )
            : this.removeRelativeTarget()),
        !(!this.relativeTarget && !this.targetDelta) &&
          (this.target ||
            ((this.target = ne()), (this.targetWithTransforms = ne())),
          this.relativeTarget &&
          this.relativeTargetOrigin &&
          this.relativeParent &&
          this.relativeParent.target
            ? (this.forceRelativeParentToResolveTarget(),
              iw(
                this.target,
                this.relativeTarget,
                this.relativeParent.target,
                this.options.layoutAnchor || void 0,
              ))
            : this.targetDelta
              ? (this.resumingFrom
                  ? this.applyTransform(this.layout.layoutBox, !1, this.target)
                  : be(this.target, this.layout.layoutBox),
                Gm(this.target, this.targetDelta))
              : be(this.target, this.layout.layoutBox),
          this.attemptToResolveRelativeTarget &&
            ((this.attemptToResolveRelativeTarget = !1),
            this.options.layoutAnchor !== !1 &&
            d &&
            !!d.resumingFrom == !!this.resumingFrom &&
            !d.options.layoutScroll &&
            d.target &&
            this.animationProgress !== 1
              ? this.createRelativeTarget(d, this.target, d.target)
              : (this.relativeParent = this.relativeTarget = void 0))));
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          ca(this.parent.latestValues) ||
          Km(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    createRelativeTarget(o, l, a) {
      ((this.relativeParent = o),
        (this.linkedParentVersion = o.layoutVersion),
        this.forceRelativeParentToResolveTarget(),
        (this.relativeTarget = ne()),
        (this.relativeTargetOrigin = ne()),
        Is(
          this.relativeTargetOrigin,
          l,
          a,
          this.options.layoutAnchor || void 0,
        ),
        be(this.relativeTarget, this.relativeTargetOrigin));
    }
    removeRelativeTarget() {
      this.relativeParent = this.relativeTarget = void 0;
    }
    calcProjection() {
      var y;
      const o = this.getLead(),
        l = !!this.resumingFrom || this !== o;
      let a = !0;
      if (
        ((this.isProjectionDirty ||
          ((y = this.parent) != null && y.isProjectionDirty)) &&
          (a = !1),
        l &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (a = !1),
        this.resolvedRelativeTargetAt === se.timestamp && (a = !1),
        a)
      )
        return;
      const { layout: u, layoutId: c } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(u || c))
      )
        return;
      be(this.layoutCorrected, this.layout.layoutBox);
      const f = this.treeScale.x,
        d = this.treeScale.y;
      (jx(this.layoutCorrected, this.treeScale, this.path, l),
        o.layout &&
          !o.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((o.target = o.layout.layoutBox), (o.targetWithTransforms = ne())));
      const { target: g } = o;
      if (!g) {
        this.prevProjectionDelta &&
          (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      (!this.projectionDelta || !this.prevProjectionDelta
        ? this.createProjectionDeltas()
        : (Rf(this.prevProjectionDelta.x, this.projectionDelta.x),
          Rf(this.prevProjectionDelta.y, this.projectionDelta.y)),
        Nr(this.projectionDelta, this.layoutCorrected, g, this.latestValues),
        (this.treeScale.x !== f ||
          this.treeScale.y !== d ||
          !Uf(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !Uf(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", g)));
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(o = !0) {
      var l;
      if (((l = this.options.visualElement) == null || l.scheduleRender(), o)) {
        const a = this.getStack();
        a && a.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      ((this.prevProjectionDelta = zn()),
        (this.projectionDelta = zn()),
        (this.projectionDeltaWithTransform = zn()));
    }
    setAnimationOrigin(o, l = !1, a) {
      const u = this.snapshot,
        c = u ? u.latestValues : {},
        f = { ...this.latestValues },
        d = zn();
      ((!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !l));
      const g = ne(),
        y = u ? u.source : void 0,
        v = this.layout ? this.layout.source : void 0,
        w = y !== v,
        p = this.getStack(),
        h = !p || p.members.length <= 1,
        m = !!(w && !h && this.options.crossfade === !0 && !this.path.some(Iw));
      this.animationProgress = 0;
      let x;
      const S = a == null ? void 0 : a.interpolateProjection(o);
      ((this.mixTargetDelta = (P) => {
        const E = P / 1e3,
          k = S == null ? void 0 : S(E);
        (k
          ? ((d.x.translate = k.x),
            (d.x.scale = W(o.x.scale, 1, E)),
            (d.x.origin = o.x.origin),
            (d.x.originPoint = o.x.originPoint),
            (d.y.translate = k.y),
            (d.y.scale = W(o.y.scale, 1, E)),
            (d.y.origin = o.y.origin),
            (d.y.originPoint = o.y.originPoint))
          : (Qf(d.x, o.x, E), Qf(d.y, o.y, E)),
          this.setTargetDelta(d),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (Is(
              g,
              this.layout.layoutBox,
              this.relativeParent.layout.layoutBox,
              this.options.layoutAnchor || void 0,
            ),
            jw(this.relativeTarget, this.relativeTargetOrigin, g, E),
            x && aw(this.relativeTarget, x) && (this.isProjectionDirty = !1),
            x || (x = ne()),
            be(x, this.relativeTarget)),
          w &&
            ((this.animationValues = f), fw(f, c, this.latestValues, E, m, h)),
          k &&
            k.rotate !== void 0 &&
            (this.animationValues || (this.animationValues = f),
            (this.animationValues.pathRotation = k.rotate)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = E));
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0));
    }
    startAnimation(o) {
      var l, a, u;
      (this.notifyListeners("animationStart"),
        (l = this.currentAnimation) == null || l.stop(),
        (u = (a = this.resumingFrom) == null ? void 0 : a.currentAnimation) ==
          null || u.stop(),
        this.pendingAnimation &&
          (Xe(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = z.update(() => {
          ((ts.hasAnimatedSinceResize = !0),
            this.motionValue || (this.motionValue = nt(0)),
            this.motionValue.jump(0, !1),
            (this.currentAnimation = pw(this.motionValue, [0, 1e3], {
              ...o,
              velocity: 0,
              isSync: !0,
              onUpdate: (c) => {
                (this.mixTargetDelta(c), o.onUpdate && o.onUpdate(c));
              },
              onStop: () => {},
              onComplete: () => {
                (o.onComplete && o.onComplete(), this.completeAnimation());
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0));
        })));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      const o = this.getStack();
      (o && o.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners("animationComplete"));
    }
    finishAnimation() {
      (this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(xw),
        this.currentAnimation.stop()),
        this.completeAnimation());
    }
    applyTransformsToTarget() {
      const o = this.getLead();
      let {
        targetWithTransforms: l,
        target: a,
        layout: u,
        latestValues: c,
      } = o;
      if (!(!l || !a || !u)) {
        if (
          this !== o &&
          this.layout &&
          u &&
          cg(this.options.animationType, this.layout.layoutBox, u.layoutBox)
        ) {
          a = this.target || ne();
          const f = ve(this.layout.layoutBox.x);
          ((a.x.min = o.target.x.min), (a.x.max = a.x.min + f));
          const d = ve(this.layout.layoutBox.y);
          ((a.y.min = o.target.y.min), (a.y.max = a.y.min + d));
        }
        (be(l, a),
          Ji(l, c),
          Nr(this.projectionDeltaWithTransform, this.layoutCorrected, l, c));
      }
    }
    registerSharedNode(o, l) {
      (this.sharedNodes.has(o) || this.sharedNodes.set(o, new vw()),
        this.sharedNodes.get(o).add(l));
      const u = l.options.initialPromotionConfig;
      l.promote({
        transition: u ? u.transition : void 0,
        preserveFollowOpacity:
          u && u.shouldPreserveFollowOpacity
            ? u.shouldPreserveFollowOpacity(l)
            : void 0,
      });
    }
    isLead() {
      const o = this.getStack();
      return o ? o.lead === this : !0;
    }
    getLead() {
      var l;
      const { layoutId: o } = this.options;
      return o
        ? ((l = this.getStack()) == null ? void 0 : l.lead) || this
        : this;
    }
    getPrevLead() {
      var l;
      const { layoutId: o } = this.options;
      return o ? ((l = this.getStack()) == null ? void 0 : l.prevLead) : void 0;
    }
    getStack() {
      const { layoutId: o } = this.options;
      if (o) return this.root.sharedNodes.get(o);
    }
    promote({ needsReset: o, transition: l, preserveFollowOpacity: a } = {}) {
      const u = this.getStack();
      (u && u.promote(this, a),
        o && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        l && this.setOptions({ transition: l }));
    }
    relegate() {
      const o = this.getStack();
      return o ? o.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: o } = this.options;
      if (!o) return;
      let l = !1;
      const { latestValues: a } = o;
      if (
        ((a.z ||
          a.rotate ||
          a.rotateX ||
          a.rotateY ||
          a.rotateZ ||
          a.skewX ||
          a.skewY) &&
          (l = !0),
        !l)
      )
        return;
      const u = {};
      a.z && Bo("z", o, u, this.animationValues);
      for (let c = 0; c < Oo.length; c++)
        (Bo(`rotate${Oo[c]}`, o, u, this.animationValues),
          Bo(`skew${Oo[c]}`, o, u, this.animationValues));
      o.render();
      for (const c in u)
        (o.setStaticValue(c, u[c]),
          this.animationValues && (this.animationValues[c] = u[c]));
      o.scheduleRender();
    }
    applyProjectionStyles(o, l) {
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) {
        o.visibility = "hidden";
        return;
      }
      const a = this.getTransformTemplate();
      if (this.needsReset) {
        ((this.needsReset = !1),
          (o.visibility = ""),
          (o.opacity = ""),
          (o.pointerEvents = es(l == null ? void 0 : l.pointerEvents) || ""),
          (o.transform = a ? a(this.latestValues, "") : "none"));
        return;
      }
      const u = this.getLead();
      if (!this.projectionDelta || !this.layout || !u.target) {
        (this.options.layoutId &&
          ((o.opacity =
            this.latestValues.opacity !== void 0
              ? this.latestValues.opacity
              : 1),
          (o.pointerEvents = es(l == null ? void 0 : l.pointerEvents) || "")),
          this.hasProjected &&
            !nn(this.latestValues) &&
            ((o.transform = a ? a({}, "") : "none"), (this.hasProjected = !1)));
        return;
      }
      o.visibility = "";
      const c = u.animationValues || u.latestValues;
      this.applyTransformsToTarget();
      let f = uw(this.projectionDeltaWithTransform, this.treeScale, c);
      (a && (f = a(c, f)), (o.transform = f));
      const { x: d, y: g } = this.projectionDelta;
      ((o.transformOrigin = `${d.origin * 100}% ${g.origin * 100}% 0`),
        u.animationValues
          ? (o.opacity =
              u === this
                ? (c.opacity ?? this.latestValues.opacity ?? 1)
                : this.preserveOpacity
                  ? this.latestValues.opacity
                  : c.opacityExit)
          : (o.opacity =
              u === this
                ? c.opacity !== void 0
                  ? c.opacity
                  : ""
                : c.opacityExit !== void 0
                  ? c.opacityExit
                  : 0));
      for (const y in da) {
        if (c[y] === void 0) continue;
        const { correct: v, applyTo: w, isCSSVariable: p } = da[y],
          h = f === "none" ? c[y] : v(c[y], u);
        if (w) {
          const m = w.length;
          for (let x = 0; x < m; x++) o[w[x]] = h;
        } else
          p ? (this.options.visualElement.renderState.vars[y] = h) : (o[y] = h);
      }
      this.options.layoutId &&
        (o.pointerEvents =
          u === this ? es(l == null ? void 0 : l.pointerEvents) || "" : "none");
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      (this.root.nodes.forEach((o) => {
        var l;
        return (l = o.currentAnimation) == null ? void 0 : l.stop();
      }),
        this.root.nodes.forEach(Gf),
        this.root.sharedNodes.clear());
    }
  };
}
function Sw(e) {
  e.updateLayout();
}
function Tw(e) {
  var n;
  const t = ((n = e.resumeFrom) == null ? void 0 : n.snapshot) || e.snapshot;
  if (e.isLead() && e.layout && t && e.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: i } = e.layout,
      { animationType: s } = e.options,
      o = t.source !== e.layout.source;
    if (s === "size")
      ct((f) => {
        const d = o ? t.measuredBox[f] : t.layoutBox[f],
          g = ve(d);
        ((d.min = r[f].min), (d.max = d.min + g));
      });
    else if (s === "x" || s === "y") {
      const f = s === "x" ? "y" : "x";
      ha(o ? t.measuredBox[f] : t.layoutBox[f], r[f]);
    } else
      cg(s, t.layoutBox, r) &&
        ct((f) => {
          const d = o ? t.measuredBox[f] : t.layoutBox[f],
            g = ve(r[f]);
          ((d.max = d.min + g),
            e.relativeTarget &&
              !e.currentAnimation &&
              ((e.isProjectionDirty = !0),
              (e.relativeTarget[f].max = e.relativeTarget[f].min + g)));
        });
    const l = zn();
    Nr(l, r, t.layoutBox);
    const a = zn();
    o ? Nr(a, e.applyTransform(i, !0), t.measuredBox) : Nr(a, r, t.layoutBox);
    const u = !ig(l);
    let c = !1;
    if (!e.resumeFrom) {
      const f = e.getClosestProjectingParent();
      if (f && !f.resumeFrom) {
        const { snapshot: d, layout: g } = f;
        if (d && g) {
          const y = e.options.layoutAnchor || void 0,
            v = ne();
          Is(v, t.layoutBox, d.layoutBox, y);
          const w = ne();
          (Is(w, r, g.layoutBox, y),
            sg(v, w) || (c = !0),
            f.options.layoutRoot &&
              ((e.relativeTarget = w),
              (e.relativeTargetOrigin = v),
              (e.relativeParent = f)));
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: r,
      snapshot: t,
      delta: a,
      layoutDelta: l,
      hasLayoutChanged: u,
      hasRelativeLayoutChanged: c,
    });
  } else if (e.isLead()) {
    const { onExitComplete: r } = e.options;
    r && r();
  }
  e.options.transition = void 0;
}
function kw(e) {
  e.parent &&
    (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
    e.isSharedProjectionDirty ||
      (e.isSharedProjectionDirty = !!(
        e.isProjectionDirty ||
        e.parent.isProjectionDirty ||
        e.parent.isSharedProjectionDirty
      )),
    e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function Cw(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function Ew(e) {
  e.clearSnapshot();
}
function Gf(e) {
  e.clearMeasurements();
}
function Pw(e) {
  ((e.isLayoutDirty = !0), e.updateLayout());
}
function Xf(e) {
  e.isLayoutDirty = !1;
}
function Aw(e) {
  e.isAnimationBlocked &&
    e.layout &&
    !e.isLayoutDirty &&
    ((e.snapshot = e.layout), (e.isLayoutDirty = !0));
}
function Mw(e) {
  const { visualElement: t } = e.options;
  (t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
    e.resetTransform());
}
function Yf(e) {
  (e.finishAnimation(),
    (e.targetDelta = e.relativeTarget = e.target = void 0),
    (e.isProjectionDirty = !0));
}
function Dw(e) {
  e.resolveTargetDelta();
}
function Lw(e) {
  e.calcProjection();
}
function Rw(e) {
  e.resetSkewAndRotation();
}
function Vw(e) {
  e.removeLeadSnapshot();
}
function Qf(e, t, n) {
  ((e.translate = W(t.translate, 0, n)),
    (e.scale = W(t.scale, 1, n)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint));
}
function bf(e, t, n, r) {
  ((e.min = W(t.min, n.min, r)), (e.max = W(t.max, n.max, r)));
}
function jw(e, t, n, r) {
  (bf(e.x, t.x, n.x, r), bf(e.y, t.y, n.y, r));
}
function Iw(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const Nw = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  Zf = (e) =>
    typeof navigator < "u" &&
    navigator.userAgent &&
    navigator.userAgent.toLowerCase().includes(e),
  qf = Zf("applewebkit/") && !Zf("chrome/") ? Math.round : Me;
function Jf(e) {
  ((e.min = qf(e.min)), (e.max = qf(e.max)));
}
function _w(e) {
  (Jf(e.x), Jf(e.y));
}
function cg(e, t, n) {
  return (
    e === "position" || (e === "preserve-aspect" && !rw(Wf(t), Wf(n), 0.2))
  );
}
function zw(e) {
  var t;
  return e !== e.root && ((t = e.scroll) == null ? void 0 : t.wasRoot);
}
const Fw = ug({
    attachResizeListener: (e, t) => ni(e, "resize", t),
    measureScroll: () => {
      var e, t;
      return {
        x:
          document.documentElement.scrollLeft ||
          ((e = document.body) == null ? void 0 : e.scrollLeft) ||
          0,
        y:
          document.documentElement.scrollTop ||
          ((t = document.body) == null ? void 0 : t.scrollTop) ||
          0,
      };
    },
    checkIsScrollRoot: () => !0,
  }),
  Wo = { current: void 0 },
  fg = ug({
    measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!Wo.current) {
        const e = new Fw({});
        (e.mount(window), e.setOptions({ layoutScroll: !0 }), (Wo.current = e));
      }
      return Wo.current;
    },
    resetTransform: (e, t) => {
      e.style.transform = t !== void 0 ? t : "none";
    },
    checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed",
  }),
  Ou = L.createContext({
    transformPagePoint: (e) => e,
    isStatic: !1,
    reducedMotion: "never",
  });
function Ow(e = !0) {
  const t = L.useContext(du);
  if (t === null) return [!0, null];
  const { isPresent: n, onExitComplete: r, register: i } = t,
    s = L.useId();
  L.useEffect(() => {
    if (e) return i(s);
  }, [e]);
  const o = L.useCallback(() => e && r && r(s), [s, r, e]);
  return !n && r ? [!1, o] : [!0];
}
const dg = L.createContext({ strict: !1 }),
  ed = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  };
let td = !1;
function Bw() {
  if (td) return;
  const e = {};
  for (const t in ed) e[t] = { isEnabled: (n) => ed[t].some((r) => !!n[r]) };
  (Um(e), (td = !0));
}
function hg() {
  return (Bw(), Dx());
}
function Ww(e) {
  const t = hg();
  for (const n in e) t[n] = { ...t[n], ...e[n] };
  Um(t);
}
const Uw = new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "propagate",
  "ignoreStrict",
  "viewport",
]);
function Ns(e) {
  return (
    e.startsWith("while") ||
    (e.startsWith("drag") && e !== "draggable") ||
    e.startsWith("layout") ||
    e.startsWith("onTap") ||
    e.startsWith("onPan") ||
    e.startsWith("onLayout") ||
    Uw.has(e)
  );
}
let pg = (e) => !Ns(e);
function $w(e) {
  typeof e == "function" && (pg = (t) => (t.startsWith("on") ? !Ns(t) : e(t)));
}
try {
  $w(require("@emotion/is-prop-valid").default);
} catch {}
function Hw(e, t, n) {
  const r = {};
  for (const i in e)
    (i === "values" && typeof e.values == "object") ||
      ue(e[i]) ||
      ((pg(i) ||
        (n === !0 && Ns(i)) ||
        (!t && !Ns(i)) ||
        (e.draggable && i.startsWith("onDrag"))) &&
        (r[i] = e[i]));
  return r;
}
const no = L.createContext({});
function Kw(e, t) {
  if (to(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || ti(n) ? n : void 0,
      animate: ti(r) ? r : void 0,
    };
  }
  return e.inherit !== !1 ? t : {};
}
function Gw(e) {
  const { initial: t, animate: n } = Kw(e, L.useContext(no));
  return L.useMemo(() => ({ initial: t, animate: n }), [nd(t), nd(n)]);
}
function nd(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const Bu = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function mg(e, t, n) {
  for (const r in t) !ue(t[r]) && !Qm(r, n) && (e[r] = t[r]);
}
function Xw({ transformTemplate: e }, t) {
  return L.useMemo(() => {
    const n = Bu();
    return (zu(n, t, e), Object.assign({}, n.vars, n.style));
  }, [t]);
}
function Yw(e, t) {
  const n = e.style || {},
    r = {};
  return (mg(r, n, e), Object.assign(r, Xw(e, t)), r);
}
function Qw(e, t) {
  const n = {},
    r = Yw(e, t);
  return (
    e.drag &&
      e.dragListener !== !1 &&
      ((n.draggable = !1),
      (r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none"),
      (r.touchAction =
        e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`)),
    e.tabIndex === void 0 &&
      (e.onTap || e.onTapStart || e.whileTap) &&
      (n.tabIndex = 0),
    (n.style = r),
    n
  );
}
const gg = () => ({ ...Bu(), attrs: {} });
function bw(e, t, n, r) {
  const i = L.useMemo(() => {
    const s = gg();
    return (
      bm(s, t, qm(r), e.transformTemplate, e.style),
      { ...s.attrs, style: { ...s.style } }
    );
  }, [t]);
  if (e.style) {
    const s = {};
    (mg(s, e.style, e), (i.style = { ...s, ...i.style }));
  }
  return i;
}
const Zw = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view",
];
function Wu(e) {
  return typeof e != "string" || e.includes("-")
    ? !1
    : !!(Zw.indexOf(e) > -1 || /[A-Z]/u.test(e));
}
function qw(e, t, n, { latestValues: r }, i, s = !1, o) {
  const a = ((o ?? Wu(e)) ? bw : Qw)(t, r, i, e),
    u = Hw(t, typeof e == "string", s),
    c = e !== L.Fragment ? { ...u, ...a, ref: n } : {},
    { children: f } = t,
    d = L.useMemo(() => (ue(f) ? f.get() : f), [f]);
  return L.createElement(e, { ...c, children: d });
}
function Jw({ scrapeMotionValuesFromProps: e, createRenderState: t }, n, r, i) {
  return { latestValues: eS(n, r, i, e), renderState: t() };
}
function eS(e, t, n, r) {
  const i = {},
    s = r(e, {});
  for (const d in s) i[d] = es(s[d]);
  let { initial: o, animate: l } = e;
  const a = to(e),
    u = Bm(e);
  t &&
    u &&
    !a &&
    e.inherit !== !1 &&
    (o === void 0 && (o = t.initial), l === void 0 && (l = t.animate));
  let c = n ? n.initial === !1 : !1;
  c = c || o === !1;
  const f = c ? l : o;
  if (f && typeof f != "boolean" && !eo(f)) {
    const d = Array.isArray(f) ? f : [f];
    for (let g = 0; g < d.length; g++) {
      const y = Ru(e, d[g]);
      if (y) {
        const { transitionEnd: v, transition: w, ...p } = y;
        for (const h in p) {
          let m = p[h];
          if (Array.isArray(m)) {
            const x = c ? m.length - 1 : 0;
            m = m[x];
          }
          m !== null && (i[h] = m);
        }
        for (const h in v) i[h] = v[h];
      }
    }
  }
  return i;
}
const yg = (e) => (t, n) => {
    const r = L.useContext(no),
      i = L.useContext(du),
      s = () => Jw(e, t, r, i);
    return n ? s() : qn(s);
  },
  tS = yg({ scrapeMotionValuesFromProps: Fu, createRenderState: Bu }),
  nS = yg({ scrapeMotionValuesFromProps: Jm, createRenderState: gg }),
  rS = Symbol.for("motionComponentSymbol");
function iS(e, t, n) {
  const r = L.useRef(n);
  L.useInsertionEffect(() => {
    r.current = n;
  });
  const i = L.useRef(null);
  return L.useCallback(
    (s) => {
      var l;
      (s && ((l = e.onMount) == null || l.call(e, s)),
        t && (s ? t.mount(s) : t.unmount()));
      const o = r.current;
      if (typeof o == "function")
        if (s) {
          const a = o(s);
          typeof a == "function" && (i.current = a);
        } else i.current ? (i.current(), (i.current = null)) : o(s);
      else o && (o.current = s);
    },
    [t],
  );
}
const vg = L.createContext({});
function Tn(e) {
  return (
    e &&
    typeof e == "object" &&
    Object.prototype.hasOwnProperty.call(e, "current")
  );
}
function sS(e, t, n, r, i, s) {
  var m, x;
  const { visualElement: o } = L.useContext(no),
    l = L.useContext(dg),
    a = L.useContext(du),
    u = L.useContext(Ou),
    c = u.reducedMotion,
    f = u.skipAnimations,
    d = L.useRef(null),
    g = L.useRef(!1);
  ((r = r || l.renderer),
    !d.current &&
      r &&
      ((d.current = r(e, {
        visualState: t,
        parent: o,
        props: n,
        presenceContext: a,
        blockInitialAnimation: a ? a.initial === !1 : !1,
        reducedMotionConfig: c,
        skipAnimations: f,
        isSVG: s,
      })),
      g.current && d.current && (d.current.manuallyAnimateOnMount = !0)));
  const y = d.current,
    v = L.useContext(vg);
  y &&
    !y.projection &&
    i &&
    (y.type === "html" || y.type === "svg") &&
    oS(d.current, n, i, v);
  const w = L.useRef(!1);
  L.useInsertionEffect(() => {
    y && w.current && y.update(n, a);
  });
  const p = n[Em],
    h = L.useRef(
      !!p &&
        typeof window < "u" &&
        !((m = window.MotionHandoffIsComplete) != null && m.call(window, p)) &&
        ((x = window.MotionHasOptimisedAnimation) == null
          ? void 0
          : x.call(window, p)),
    );
  return (
    fu(() => {
      ((g.current = !0),
        y &&
          ((w.current = !0),
          (window.MotionIsMounted = !0),
          y.updateFeatures(),
          y.scheduleRenderMicrotask(),
          h.current && y.animationState && y.animationState.animateChanges()));
    }),
    L.useEffect(() => {
      y &&
        (!h.current && y.animationState && y.animationState.animateChanges(),
        h.current &&
          (queueMicrotask(() => {
            var S;
            (S = window.MotionHandoffMarkAsComplete) == null ||
              S.call(window, p);
          }),
          (h.current = !1)),
        (y.enteringChildren = void 0));
    }),
    y
  );
}
function oS(e, t, n, r) {
  const {
    layoutId: i,
    layout: s,
    drag: o,
    dragConstraints: l,
    layoutScroll: a,
    layoutRoot: u,
    layoutAnchor: c,
    layoutCrossfade: f,
  } = t;
  ((e.projection = new n(
    e.latestValues,
    t["data-framer-portal-id"] ? void 0 : xg(e.parent),
  )),
    e.projection.setOptions({
      layoutId: i,
      layout: s,
      alwaysMeasureLayout: !!o || (l && Tn(l)),
      visualElement: e,
      animationType: typeof s == "string" ? s : "both",
      initialPromotionConfig: r,
      crossfade: f,
      layoutScroll: a,
      layoutRoot: u,
      layoutAnchor: c,
    }));
}
function xg(e) {
  if (e) return e.options.allowProjection !== !1 ? e.projection : xg(e.parent);
}
function Uo(e, { forwardMotionProps: t = !1, type: n } = {}, r, i) {
  r && Ww(r);
  const s = n ? n === "svg" : Wu(e),
    o = s ? nS : tS;
  function l(u, c) {
    let f;
    const d = { ...L.useContext(Ou), ...u, layoutId: lS(u) },
      { isStatic: g } = d,
      y = Gw(u),
      v = o(u, g);
    if (!g && typeof window < "u") {
      aS();
      const w = uS(d);
      ((f = w.MeasureLayout),
        (y.visualElement = sS(e, v, d, i, w.ProjectionNode, s)));
    }
    return T.jsxs(no.Provider, {
      value: y,
      children: [
        f && y.visualElement
          ? T.jsx(f, { visualElement: y.visualElement, ...d })
          : null,
        qw(e, u, iS(v, y.visualElement, c), v, g, t, s),
      ],
    });
  }
  l.displayName = `motion.${typeof e == "string" ? e : `create(${e.displayName ?? e.name ?? ""})`}`;
  const a = L.forwardRef(l);
  return ((a[rS] = e), a);
}
function lS({ layoutId: e }) {
  const t = L.useContext(zp).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function aS(e, t) {
  L.useContext(dg).strict;
}
function uS(e) {
  const t = hg(),
    { drag: n, layout: r } = t;
  if (!n && !r) return {};
  const i = { ...n, ...r };
  return {
    MeasureLayout:
      (n != null && n.isEnabled(e)) || (r != null && r.isEnabled(e))
        ? i.MeasureLayout
        : void 0,
    ProjectionNode: i.ProjectionNode,
  };
}
function cS(e, t) {
  if (typeof Proxy > "u") return Uo;
  const n = new Map(),
    r = (s, o) => Uo(s, o, e, t),
    i = (s, o) => r(s, o);
  return new Proxy(i, {
    get: (s, o) =>
      o === "create"
        ? r
        : (n.has(o) || n.set(o, Uo(o, void 0, e, t)), n.get(o)),
  });
}
const fS = (e, t) =>
  (t.isSVG ?? Wu(e))
    ? new Gx(t)
    : new Bx(t, { allowProjection: e !== L.Fragment });
class dS extends bt {
  constructor(t) {
    (super(t), t.animationState || (t.animationState = Zx(t)));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    eo(t) && (this.unmountControls = t.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: t } = this.node.getProps(),
      { animate: n } = this.node.prevProps || {};
    t !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {
    var t;
    (this.node.animationState.reset(),
      (t = this.unmountControls) == null || t.call(this));
  }
}
let hS = 0;
class pS extends bt {
  constructor() {
    (super(...arguments), (this.id = hS++), (this.isExitComplete = !1));
  }
  update() {
    var s;
    if (!this.node.presenceContext) return;
    const { isPresent: t, onExitComplete: n } = this.node.presenceContext,
      { isPresent: r } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === r) return;
    if (t && r === !1) {
      if (this.isExitComplete) {
        const { initial: o, custom: l } = this.node.getProps();
        if (
          typeof o == "string" ||
          (typeof o == "object" && o !== null && !Array.isArray(o))
        ) {
          const a = dn(this.node, o, l);
          if (a) {
            const { transition: u, transitionEnd: c, ...f } = a;
            for (const d in f)
              (s = this.node.getValue(d)) == null || s.jump(f[d]);
          }
        }
        (this.node.animationState.reset(),
          this.node.animationState.animateChanges());
      } else this.node.animationState.setActive("exit", !1);
      this.isExitComplete = !1;
      return;
    }
    const i = this.node.animationState.setActive("exit", !t);
    n &&
      !t &&
      i.then(() => {
        ((this.isExitComplete = !0), n(this.id));
      });
  }
  mount() {
    const { register: t, onExitComplete: n } = this.node.presenceContext || {};
    (n && n(this.id), t && (this.unmount = t(this.id)));
  }
  unmount() {}
}
const mS = { animation: { Feature: dS }, exit: { Feature: pS } };
function fi(e) {
  return { point: { x: e.pageX, y: e.pageY } };
}
const gS = (e) => (t) => ju(t) && e(t, fi(t));
function _r(e, t, n, r) {
  return ni(e, t, gS(n), r);
}
const wg = ({ current: e }) => (e ? e.ownerDocument.defaultView : null),
  rd = (e, t) => Math.abs(e - t);
function yS(e, t) {
  const n = rd(e.x, t.x),
    r = rd(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
const id = new Set(["auto", "scroll"]);
class Sg {
  constructor(
    t,
    n,
    {
      transformPagePoint: r,
      contextWindow: i = window,
      dragSnapToOrigin: s = !1,
      distanceThreshold: o = 3,
      element: l,
    } = {},
  ) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.lastRawMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.scrollPositions = new Map()),
      (this.removeScrollListeners = null),
      (this.onElementScroll = (g) => {
        this.handleScroll(g.target);
      }),
      (this.onWindowScroll = () => {
        this.handleScroll(window);
      }),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        this.lastRawMoveEventInfo &&
          (this.lastMoveEventInfo = Ii(
            this.lastRawMoveEventInfo,
            this.transformPagePoint,
          ));
        const g = $o(this.lastMoveEventInfo, this.history),
          y = this.startEvent !== null,
          v = yS(g.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
        if (!y && !v) return;
        const { point: w } = g,
          { timestamp: p } = se;
        this.history.push({ ...w, timestamp: p });
        const { onStart: h, onMove: m } = this.handlers;
        (y ||
          (h && h(this.lastMoveEvent, g),
          (this.startEvent = this.lastMoveEvent)),
          m && m(this.lastMoveEvent, g));
      }),
      (this.handlePointerMove = (g, y) => {
        ((this.lastMoveEvent = g),
          (this.lastRawMoveEventInfo = y),
          (this.lastMoveEventInfo = Ii(y, this.transformPagePoint)),
          z.update(this.updatePoint, !0));
      }),
      (this.handlePointerUp = (g, y) => {
        this.end();
        const { onEnd: v, onSessionEnd: w, resumeAnimation: p } = this.handlers;
        if (
          ((this.dragSnapToOrigin || !this.startEvent) && p && p(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return;
        const h = $o(
          g.type === "pointercancel"
            ? this.lastMoveEventInfo
            : Ii(y, this.transformPagePoint),
          this.history,
        );
        (this.startEvent && v && v(g, h), w && w(g, h));
      }),
      !ju(t))
    )
      return;
    ((this.dragSnapToOrigin = s),
      (this.handlers = n),
      (this.transformPagePoint = r),
      (this.distanceThreshold = o),
      (this.contextWindow = i || window));
    const a = fi(t),
      u = Ii(a, this.transformPagePoint),
      { point: c } = u,
      { timestamp: f } = se;
    this.history = [{ ...c, timestamp: f }];
    const { onSessionStart: d } = n;
    (d && d(t, $o(u, this.history)),
      (this.removeListeners = ai(
        _r(this.contextWindow, "pointermove", this.handlePointerMove),
        _r(this.contextWindow, "pointerup", this.handlePointerUp),
        _r(this.contextWindow, "pointercancel", this.handlePointerUp),
      )),
      l && this.startScrollTracking(l));
  }
  startScrollTracking(t) {
    let n = t.parentElement;
    for (; n; ) {
      const r = getComputedStyle(n);
      ((id.has(r.overflowX) || id.has(r.overflowY)) &&
        this.scrollPositions.set(n, { x: n.scrollLeft, y: n.scrollTop }),
        (n = n.parentElement));
    }
    (this.scrollPositions.set(window, { x: window.scrollX, y: window.scrollY }),
      window.addEventListener("scroll", this.onElementScroll, { capture: !0 }),
      window.addEventListener("scroll", this.onWindowScroll),
      (this.removeScrollListeners = () => {
        (window.removeEventListener("scroll", this.onElementScroll, {
          capture: !0,
        }),
          window.removeEventListener("scroll", this.onWindowScroll));
      }));
  }
  handleScroll(t) {
    const n = this.scrollPositions.get(t);
    if (!n) return;
    const r = t === window,
      i = r
        ? { x: window.scrollX, y: window.scrollY }
        : { x: t.scrollLeft, y: t.scrollTop },
      s = { x: i.x - n.x, y: i.y - n.y };
    (s.x === 0 && s.y === 0) ||
      (r
        ? this.lastMoveEventInfo &&
          ((this.lastMoveEventInfo.point.x += s.x),
          (this.lastMoveEventInfo.point.y += s.y))
        : this.history.length > 0 &&
          ((this.history[0].x -= s.x), (this.history[0].y -= s.y)),
      this.scrollPositions.set(t, i),
      z.update(this.updatePoint, !0));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    (this.removeListeners && this.removeListeners(),
      this.removeScrollListeners && this.removeScrollListeners(),
      this.scrollPositions.clear(),
      Xe(this.updatePoint));
  }
}
function Ii(e, t) {
  return t ? { point: t(e.point) } : e;
}
function sd(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function $o({ point: e }, t) {
  return {
    point: e,
    delta: sd(e, Tg(t)),
    offset: sd(e, vS(t)),
    velocity: xS(t, 0.1),
  };
}
function vS(e) {
  return e[0];
}
function Tg(e) {
  return e[e.length - 1];
}
function xS(e, t) {
  if (e.length < 2) return { x: 0, y: 0 };
  let n = e.length - 1,
    r = null;
  const i = Tg(e);
  for (; n >= 0 && ((r = e[n]), !(i.timestamp - r.timestamp > Ne(t))); ) n--;
  if (!r) return { x: 0, y: 0 };
  r === e[0] &&
    e.length > 2 &&
    i.timestamp - r.timestamp > Ne(t) * 2 &&
    (r = e[1]);
  const s = $e(i.timestamp - r.timestamp);
  if (s === 0) return { x: 0, y: 0 };
  const o = { x: (i.x - r.x) / s, y: (i.y - r.y) / s };
  return (o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o);
}
function wS(e, { min: t, max: n }, r) {
  return (
    t !== void 0 && e < t
      ? (e = r ? W(t, e, r.min) : Math.max(e, t))
      : n !== void 0 && e > n && (e = r ? W(n, e, r.max) : Math.min(e, n)),
    e
  );
}
function od(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0,
  };
}
function SS(e, { top: t, left: n, bottom: r, right: i }) {
  return { x: od(e.x, n, i), y: od(e.y, t, r) };
}
function ld(e, t) {
  let n = t.min - e.min,
    r = t.max - e.max;
  return (
    t.max - t.min < e.max - e.min && ([n, r] = [r, n]),
    { min: n, max: r }
  );
}
function TS(e, t) {
  return { x: ld(e.x, t.x), y: ld(e.y, t.y) };
}
function kS(e, t) {
  let n = 0.5;
  const r = ve(e),
    i = ve(t);
  return (
    i > r
      ? (n = Jn(t.min, t.max - r, e.min))
      : r > i && (n = Jn(e.min, e.max - i, t.min)),
    lt(0, 1, n)
  );
}
function CS(e, t) {
  const n = {};
  return (
    t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
  );
}
const pa = 0.35;
function ES(e = pa) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = pa),
    { x: ad(e, "left", "right"), y: ad(e, "top", "bottom") }
  );
}
function ad(e, t, n) {
  return { min: ud(e, t), max: ud(e, n) };
}
function ud(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const PS = new WeakMap();
class AS {
  constructor(t) {
    ((this.openDragLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = ne()),
      (this.latestPointerEvent = null),
      (this.latestPanInfo = null),
      (this.visualElement = t));
  }
  start(t, { snapToCursor: n = !1, distanceThreshold: r } = {}) {
    const { presenceContext: i } = this.visualElement;
    if (i && i.isPresent === !1) return;
    const s = (f) => {
        (n && this.snapToCursor(fi(f).point), this.stopAnimation());
      },
      o = (f, d) => {
        const { drag: g, dragPropagation: y, onDragStart: v } = this.getProps();
        if (
          g &&
          !y &&
          (this.openDragLock && this.openDragLock(),
          (this.openDragLock = ix(g)),
          !this.openDragLock)
        )
          return;
        ((this.latestPointerEvent = f),
          (this.latestPanInfo = d),
          (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          ct((p) => {
            let h = this.getAxisMotionValue(p).get() || 0;
            if (mt.test(h)) {
              const { projection: m } = this.visualElement;
              if (m && m.layout) {
                const x = m.layout.layoutBox[p];
                x && (h = ve(x) * (parseFloat(h) / 100));
              }
            }
            this.originPoint[p] = h;
          }),
          v && z.update(() => v(f, d), !1, !0),
          ra(this.visualElement, "transform"));
        const { animationState: w } = this.visualElement;
        w && w.setActive("whileDrag", !0);
      },
      l = (f, d) => {
        ((this.latestPointerEvent = f), (this.latestPanInfo = d));
        const {
          dragPropagation: g,
          dragDirectionLock: y,
          onDirectionLock: v,
          onDrag: w,
        } = this.getProps();
        if (!g && !this.openDragLock) return;
        const { offset: p } = d;
        if (y && this.currentDirection === null) {
          ((this.currentDirection = DS(p)),
            this.currentDirection !== null && v && v(this.currentDirection));
          return;
        }
        (this.updateAxis("x", d.point, p),
          this.updateAxis("y", d.point, p),
          this.visualElement.render(),
          w && z.update(() => w(f, d), !1, !0));
      },
      a = (f, d) => {
        ((this.latestPointerEvent = f),
          (this.latestPanInfo = d),
          this.stop(f, d),
          (this.latestPointerEvent = null),
          (this.latestPanInfo = null));
      },
      u = () => {
        const { dragSnapToOrigin: f } = this.getProps();
        (f || this.constraints) && this.startAnimation({ x: 0, y: 0 });
      },
      { dragSnapToOrigin: c } = this.getProps();
    this.panSession = new Sg(
      t,
      {
        onSessionStart: s,
        onStart: o,
        onMove: l,
        onSessionEnd: a,
        resumeAnimation: u,
      },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: c,
        distanceThreshold: r,
        contextWindow: wg(this.visualElement),
        element: this.visualElement.current,
      },
    );
  }
  stop(t, n) {
    const r = t || this.latestPointerEvent,
      i = n || this.latestPanInfo,
      s = this.isDragging;
    if ((this.cancel(), !s || !i || !r)) return;
    const { velocity: o } = i;
    this.startAnimation(o);
    const { onDragEnd: l } = this.getProps();
    l && z.postRender(() => l(r, i));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: n } = this.visualElement;
    (t && (t.isAnimationBlocked = !1), this.endPanSession());
    const { dragPropagation: r } = this.getProps();
    (!r &&
      this.openDragLock &&
      (this.openDragLock(), (this.openDragLock = null)),
      n && n.setActive("whileDrag", !1));
  }
  endPanSession() {
    (this.panSession && this.panSession.end(), (this.panSession = void 0));
  }
  updateAxis(t, n, r) {
    const { drag: i } = this.getProps();
    if (!r || !Ni(t, i, this.currentDirection)) return;
    const s = this.getAxisMotionValue(t);
    let o = this.originPoint[t] + r[t];
    (this.constraints &&
      this.constraints[t] &&
      (o = wS(o, this.constraints[t], this.elastic[t])),
      s.set(o));
  }
  resolveConstraints() {
    var s;
    const { dragConstraints: t, dragElastic: n } = this.getProps(),
      r =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : (s = this.visualElement.projection) == null
            ? void 0
            : s.layout,
      i = this.constraints;
    (t && Tn(t)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : t && r
        ? (this.constraints = SS(r.layoutBox, t))
        : (this.constraints = !1),
      (this.elastic = ES(n)),
      i !== this.constraints &&
        !Tn(t) &&
        r &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        ct((o) => {
          this.constraints !== !1 &&
            this.getAxisMotionValue(o) &&
            (this.constraints[o] = CS(r.layoutBox[o], this.constraints[o]));
        }));
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !Tn(t)) return !1;
    const r = t.current,
      { projection: i } = this.visualElement;
    if (!i || !i.layout) return !1;
    i.root && ((i.root.scroll = void 0), i.root.updateScroll());
    const s = Ix(r, i.root, this.visualElement.getTransformPagePoint());
    let o = TS(i.layout.layoutBox, s);
    if (n) {
      const l = n(Rx(o));
      ((this.hasMutatedConstraints = !!l), l && (o = Hm(l)));
    }
    return o;
  }
  startAnimation(t) {
    const {
        drag: n,
        dragMomentum: r,
        dragElastic: i,
        dragTransition: s,
        dragSnapToOrigin: o,
        onDragTransitionEnd: l,
      } = this.getProps(),
      a = this.constraints || {},
      u = ct((c) => {
        if (!Ni(c, n, this.currentDirection)) return;
        let f = (a && a[c]) || {};
        (o === !0 || o === c) && (f = { min: 0, max: 0 });
        const d = i ? 200 : 1e6,
          g = i ? 40 : 1e7,
          y = {
            type: "inertia",
            velocity: r ? t[c] : 0,
            bounceStiffness: d,
            bounceDamping: g,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...s,
            ...f,
          };
        return this.startAxisValueAnimation(c, y);
      });
    return Promise.all(u).then(l);
  }
  startAxisValueAnimation(t, n) {
    const r = this.getAxisMotionValue(t);
    return (
      ra(this.visualElement, t),
      r.start(Lu(t, r, 0, n, this.visualElement, !1))
    );
  }
  stopAnimation() {
    ct((t) => this.getAxisMotionValue(t).stop());
  }
  getAxisMotionValue(t) {
    const n = `_drag${t.toUpperCase()}`,
      i = this.visualElement.getProps()[n];
    return (
      i ||
      this.visualElement.getValue(t, this.visualElement.latestValues[t] ?? 0)
    );
  }
  snapToCursor(t) {
    ct((n) => {
      const { drag: r } = this.getProps();
      if (!Ni(n, r, this.currentDirection)) return;
      const { projection: i } = this.visualElement,
        s = this.getAxisMotionValue(n);
      if (i && i.layout) {
        const { min: o, max: l } = i.layout.layoutBox[n],
          a = s.get() || 0;
        s.set(t[n] - W(o, l, 0.5) + a);
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: t, dragConstraints: n } = this.getProps(),
      { projection: r } = this.visualElement;
    if (!Tn(n) || !r || !this.constraints) return;
    this.stopAnimation();
    const i = { x: 0, y: 0 };
    ct((o) => {
      const l = this.getAxisMotionValue(o);
      if (l && this.constraints !== !1) {
        const a = l.get();
        i[o] = kS({ min: a, max: a }, this.constraints[o]);
      }
    });
    const { transformTemplate: s } = this.visualElement.getProps();
    ((this.visualElement.current.style.transform = s ? s({}, "") : "none"),
      r.root && r.root.updateScroll(),
      r.updateLayout(),
      (this.constraints = !1),
      this.resolveConstraints(),
      ct((o) => {
        if (!Ni(o, t, null)) return;
        const l = this.getAxisMotionValue(o),
          { min: a, max: u } = this.constraints[o];
        l.set(W(a, u, i[o]));
      }),
      this.visualElement.render());
  }
  addListeners() {
    if (!this.visualElement.current) return;
    PS.set(this.visualElement, this);
    const t = this.visualElement.current,
      n = _r(t, "pointerdown", (u) => {
        const { drag: c, dragListener: f = !0 } = this.getProps(),
          d = u.target,
          g = d !== t && cx(d);
        c && f && !g && this.start(u);
      });
    let r;
    const i = () => {
        const { dragConstraints: u } = this.getProps();
        Tn(u) &&
          u.current &&
          ((this.constraints = this.resolveRefConstraints()),
          r ||
            (r = MS(t, u.current, () =>
              this.scalePositionWithinConstraints(),
            )));
      },
      { projection: s } = this.visualElement,
      o = s.addEventListener("measure", i);
    (s && !s.layout && (s.root && s.root.updateScroll(), s.updateLayout()),
      z.read(i));
    const l = ni(window, "resize", () => this.scalePositionWithinConstraints()),
      a = s.addEventListener(
        "didUpdate",
        ({ delta: u, hasLayoutChanged: c }) => {
          this.isDragging &&
            c &&
            (ct((f) => {
              const d = this.getAxisMotionValue(f);
              d &&
                ((this.originPoint[f] += u[f].translate),
                d.set(d.get() + u[f].translate));
            }),
            this.visualElement.render());
        },
      );
    return () => {
      (l(), n(), o(), a && a(), r && r());
    };
  }
  getProps() {
    const t = this.visualElement.getProps(),
      {
        drag: n = !1,
        dragDirectionLock: r = !1,
        dragPropagation: i = !1,
        dragConstraints: s = !1,
        dragElastic: o = pa,
        dragMomentum: l = !0,
      } = t;
    return {
      ...t,
      drag: n,
      dragDirectionLock: r,
      dragPropagation: i,
      dragConstraints: s,
      dragElastic: o,
      dragMomentum: l,
    };
  }
}
function cd(e) {
  let t = !0;
  return () => {
    if (t) {
      t = !1;
      return;
    }
    e();
  };
}
function MS(e, t, n) {
  const r = aa(e, cd(n)),
    i = aa(t, cd(n));
  return () => {
    (r(), i());
  };
}
function Ni(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function DS(e, t = 10) {
  let n = null;
  return (Math.abs(e.y) > t ? (n = "y") : Math.abs(e.x) > t && (n = "x"), n);
}
class LS extends bt {
  constructor(t) {
    (super(t),
      (this.removeGroupControls = Me),
      (this.removeListeners = Me),
      (this.controls = new AS(t)));
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    (t && (this.removeGroupControls = t.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || Me));
  }
  update() {
    const { dragControls: t } = this.node.getProps(),
      { dragControls: n } = this.node.prevProps || {};
    t !== n &&
      (this.removeGroupControls(),
      t && (this.removeGroupControls = t.subscribe(this.controls)));
  }
  unmount() {
    (this.removeGroupControls(),
      this.removeListeners(),
      this.controls.isDragging || this.controls.endPanSession());
  }
}
const Ho = (e) => (t, n) => {
  e && z.update(() => e(t, n), !1, !0);
};
class RS extends bt {
  constructor() {
    (super(...arguments), (this.removePointerDownListener = Me));
  }
  onPointerDown(t) {
    this.session = new Sg(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: wg(this.node),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: t,
      onPanStart: n,
      onPan: r,
      onPanEnd: i,
    } = this.node.getProps();
    return {
      onSessionStart: Ho(t),
      onStart: Ho(n),
      onMove: Ho(r),
      onEnd: (s, o) => {
        (delete this.session, i && z.postRender(() => i(s, o)));
      },
    };
  }
  mount() {
    this.removePointerDownListener = _r(this.node.current, "pointerdown", (t) =>
      this.onPointerDown(t),
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    (this.removePointerDownListener(), this.session && this.session.end());
  }
}
let Ko = !1;
class VS extends L.Component {
  componentDidMount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
        layoutId: i,
      } = this.props,
      { projection: s } = t;
    (s &&
      (n.group && n.group.add(s),
      r && r.register && i && r.register(s),
      Ko && s.root.didUpdate(),
      s.addEventListener("animationComplete", () => {
        this.safeToRemove();
      }),
      s.setOptions({
        ...s.options,
        layoutDependency: this.props.layoutDependency,
        onExitComplete: () => this.safeToRemove(),
      })),
      (ts.hasEverUpdated = !0));
  }
  getSnapshotBeforeUpdate(t) {
    const {
        layoutDependency: n,
        visualElement: r,
        drag: i,
        isPresent: s,
      } = this.props,
      { projection: o } = r;
    return (
      o &&
        ((o.isPresent = s),
        t.layoutDependency !== n &&
          o.setOptions({ ...o.options, layoutDependency: n }),
        (Ko = !0),
        i || t.layoutDependency !== n || n === void 0 || t.isPresent !== s
          ? o.willUpdate()
          : this.safeToRemove(),
        t.isPresent !== s &&
          (s
            ? o.promote()
            : o.relegate() ||
              z.postRender(() => {
                const l = o.getStack();
                (!l || !l.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { visualElement: t, layoutAnchor: n } = this.props,
      { projection: r } = t;
    r &&
      ((r.options.layoutAnchor = n),
      r.root.didUpdate(),
      tr.postRender(() => {
        !r.currentAnimation && r.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
      } = this.props,
      { projection: i } = t;
    ((Ko = !0),
      i &&
        (i.scheduleCheckAfterUnmount(),
        n && n.group && n.group.remove(i),
        r && r.deregister && r.deregister(i)));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function kg(e) {
  const [t, n] = Ow(),
    r = L.useContext(zp);
  return T.jsx(VS, {
    ...e,
    layoutGroup: r,
    switchLayoutGroup: L.useContext(vg),
    isPresent: t,
    safeToRemove: n,
  });
}
const jS = {
  pan: { Feature: RS },
  drag: { Feature: LS, ProjectionNode: fg, MeasureLayout: kg },
};
function fd(e, t, n) {
  const { props: r } = e;
  e.animationState &&
    r.whileHover &&
    e.animationState.setActive("whileHover", n === "Start");
  const i = "onHover" + n,
    s = r[i];
  s && z.postRender(() => s(t, fi(t)));
}
class IS extends bt {
  mount() {
    const { current: t } = this.node;
    t &&
      (this.unmount = ox(
        t,
        (n, r) => (fd(this.node, r, "Start"), (i) => fd(this.node, i, "End")),
      ));
  }
  unmount() {}
}
class NS extends bt {
  constructor() {
    (super(...arguments), (this.isActive = !1));
  }
  onFocus() {
    let t = !1;
    try {
      t = this.node.current.matches(":focus-visible");
    } catch {
      t = !0;
    }
    !t ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !0),
      (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !1),
      (this.isActive = !1));
  }
  mount() {
    this.unmount = ai(
      ni(this.node.current, "focus", () => this.onFocus()),
      ni(this.node.current, "blur", () => this.onBlur()),
    );
  }
  unmount() {}
}
function dd(e, t, n) {
  const { props: r } = e;
  if (e.current instanceof HTMLButtonElement && e.current.disabled) return;
  e.animationState &&
    r.whileTap &&
    e.animationState.setActive("whileTap", n === "Start");
  const i = "onTap" + (n === "End" ? "" : n),
    s = r[i];
  s && z.postRender(() => s(t, fi(t)));
}
class _S extends bt {
  mount() {
    const { current: t } = this.node;
    if (!t) return;
    const { globalTapTarget: n, propagate: r } = this.node.props;
    this.unmount = dx(
      t,
      (i, s) => (
        dd(this.node, s, "Start"),
        (o, { success: l }) => dd(this.node, o, l ? "End" : "Cancel")
      ),
      {
        useGlobalTarget: n,
        stopPropagation: (r == null ? void 0 : r.tap) === !1,
      },
    );
  }
  unmount() {}
}
const ma = new WeakMap(),
  Go = new WeakMap(),
  zS = (e) => {
    const t = ma.get(e.target);
    t && t(e);
  },
  FS = (e) => {
    e.forEach(zS);
  };
function OS({ root: e, ...t }) {
  const n = e || document;
  Go.has(n) || Go.set(n, {});
  const r = Go.get(n),
    i = JSON.stringify(t);
  return (
    r[i] || (r[i] = new IntersectionObserver(FS, { root: e, ...t })),
    r[i]
  );
}
function BS(e, t, n) {
  const r = OS(t);
  return (
    ma.set(e, n),
    r.observe(e),
    () => {
      (ma.delete(e), r.unobserve(e));
    }
  );
}
const WS = { some: 0, all: 1 };
class US extends bt {
  constructor() {
    (super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1));
  }
  startObserver() {
    var a;
    (a = this.stopObserver) == null || a.call(this);
    const { viewport: t = {} } = this.node.getProps(),
      { root: n, margin: r, amount: i = "some", once: s } = t,
      o = {
        root: n ? n.current : void 0,
        rootMargin: r,
        threshold: typeof i == "number" ? i : WS[i],
      },
      l = (u) => {
        const { isIntersecting: c } = u;
        if (
          this.isInView === c ||
          ((this.isInView = c), s && !c && this.hasEnteredView)
        )
          return;
        (c && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive("whileInView", c));
        const { onViewportEnter: f, onViewportLeave: d } = this.node.getProps(),
          g = c ? f : d;
        g && g(u);
      };
    this.stopObserver = BS(this.node.current, o, l);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some($S(t, n)) && this.startObserver();
  }
  unmount() {
    var t;
    ((t = this.stopObserver) == null || t.call(this),
      (this.hasEnteredView = !1),
      (this.isInView = !1));
  }
}
function $S({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const HS = {
    inView: { Feature: US },
    tap: { Feature: _S },
    focus: { Feature: NS },
    hover: { Feature: IS },
  },
  KS = { layout: { ProjectionNode: fg, MeasureLayout: kg } },
  GS = { ...mS, ...HS, ...jS, ...KS },
  tt = cS(GS, fS);
function _s(e) {
  return typeof window > "u" ? !1 : e ? pm() : Mu();
}
const XS = 50,
  hd = () => ({
    current: 0,
    offset: [],
    progress: 0,
    scrollLength: 0,
    targetOffset: 0,
    targetLength: 0,
    containerLength: 0,
    velocity: 0,
  }),
  YS = () => ({ time: 0, x: hd(), y: hd() }),
  QS = {
    x: { length: "Width", position: "Left" },
    y: { length: "Height", position: "Top" },
  };
function pd(e, t, n, r) {
  const i = n[t],
    { length: s, position: o } = QS[t],
    l = i.current,
    a = n.time;
  ((i.current = Math.abs(e[`scroll${o}`])),
    (i.scrollLength = e[`scroll${s}`] - e[`client${s}`]),
    (i.offset.length = 0),
    (i.offset[0] = 0),
    (i.offset[1] = i.scrollLength),
    (i.progress = Jn(0, i.scrollLength, i.current)));
  const u = r - a;
  i.velocity = u > XS ? 0 : gu(i.current - l, u);
}
function bS(e, t, n) {
  (pd(e, "x", t, n), pd(e, "y", t, n), (t.time = n));
}
function ZS(e, t) {
  const n = { x: 0, y: 0 };
  let r = e;
  for (; r && r !== t; )
    if (jm(r))
      ((n.x += r.offsetLeft), (n.y += r.offsetTop), (r = r.offsetParent));
    else if (r.tagName === "svg") {
      const i = r.getBoundingClientRect();
      r = r.parentElement;
      const s = r.getBoundingClientRect();
      ((n.x += i.left - s.left), (n.y += i.top - s.top));
    } else if (r instanceof SVGGraphicsElement) {
      const { x: i, y: s } = r.getBBox();
      ((n.x += i), (n.y += s));
      let o = null,
        l = r.parentNode;
      for (; !o; ) (l.tagName === "svg" && (o = l), (l = r.parentNode));
      r = o;
    } else break;
  return n;
}
const ga = { start: 0, center: 0.5, end: 1 };
function md(e, t, n = 0) {
  let r = 0;
  if ((e in ga && (e = ga[e]), typeof e == "string")) {
    const i = parseFloat(e);
    e.endsWith("px")
      ? (r = i)
      : e.endsWith("%")
        ? (e = i / 100)
        : e.endsWith("vw")
          ? (r = (i / 100) * document.documentElement.clientWidth)
          : e.endsWith("vh")
            ? (r = (i / 100) * document.documentElement.clientHeight)
            : (e = i);
  }
  return (typeof e == "number" && (r = t * e), n + r);
}
const qS = [0, 0];
function JS(e, t, n, r) {
  let i = Array.isArray(e) ? e : qS,
    s = 0,
    o = 0;
  return (
    typeof e == "number"
      ? (i = [e, e])
      : typeof e == "string" &&
        ((e = e.trim()),
        e.includes(" ") ? (i = e.split(" ")) : (i = [e, ga[e] ? e : "0"])),
    (s = md(i[0], n, r)),
    (o = md(i[1], t)),
    s - o
  );
}
const Tr = {
    Enter: [
      [0, 1],
      [1, 1],
    ],
    Exit: [
      [0, 0],
      [1, 0],
    ],
    Any: [
      [1, 0],
      [0, 1],
    ],
    All: [
      [0, 0],
      [1, 1],
    ],
  },
  e2 = { x: 0, y: 0 };
function t2(e) {
  return "getBBox" in e && e.tagName !== "svg"
    ? e.getBBox()
    : { width: e.clientWidth, height: e.clientHeight };
}
function n2(e, t, n) {
  const { offset: r = Tr.All } = n,
    { target: i = e, axis: s = "y" } = n,
    o = s === "y" ? "height" : "width",
    l = i !== e ? ZS(i, e) : e2,
    a = i === e ? { width: e.scrollWidth, height: e.scrollHeight } : t2(i),
    u = { width: e.clientWidth, height: e.clientHeight };
  t[s].offset.length = 0;
  let c = !t[s].interpolate;
  const f = r.length;
  for (let d = 0; d < f; d++) {
    const g = JS(r[d], u[o], a[o], l[s]);
    (!c && g !== t[s].interpolatorOffsets[d] && (c = !0), (t[s].offset[d] = g));
  }
  (c &&
    ((t[s].interpolate = Cu(t[s].offset, um(r), { clamp: !1 })),
    (t[s].interpolatorOffsets = [...t[s].offset])),
    (t[s].progress = lt(0, 1, t[s].interpolate(t[s].current))));
}
function r2(e, t = e, n) {
  if (((n.x.targetOffset = 0), (n.y.targetOffset = 0), t !== e)) {
    let r = t;
    for (; r && r !== e; )
      ((n.x.targetOffset += r.offsetLeft),
        (n.y.targetOffset += r.offsetTop),
        (r = r.offsetParent));
  }
  ((n.x.targetLength = t === e ? t.scrollWidth : t.clientWidth),
    (n.y.targetLength = t === e ? t.scrollHeight : t.clientHeight),
    (n.x.containerLength = e.clientWidth),
    (n.y.containerLength = e.clientHeight));
}
function i2(e, t, n, r = {}) {
  return {
    measure: (i) => {
      (r2(e, r.target, n), bS(e, n, i), (r.offset || r.target) && n2(e, n, r));
    },
    notify: () => t(n),
  };
}
const Sn = new WeakMap(),
  gd = new WeakMap(),
  Xo = new WeakMap(),
  yd = new WeakMap(),
  _i = new WeakMap(),
  vd = (e) => (e === document.scrollingElement ? window : e);
function Cg(
  e,
  {
    container: t = document.scrollingElement,
    trackContentSize: n = !1,
    ...r
  } = {},
) {
  if (!t) return Me;
  let i = Xo.get(t);
  i || ((i = new Set()), Xo.set(t, i));
  const s = YS(),
    o = i2(t, e, s, r);
  if ((i.add(o), !Sn.has(t))) {
    const a = () => {
        for (const d of i) d.measure(se.timestamp);
        z.preUpdate(u);
      },
      u = () => {
        for (const d of i) d.notify();
      },
      c = () => z.read(a);
    Sn.set(t, c);
    const f = vd(t);
    (window.addEventListener("resize", c),
      t !== document.documentElement && gd.set(t, aa(t, c)),
      f.addEventListener("scroll", c),
      c());
  }
  if (n && !_i.has(t)) {
    const a = Sn.get(t),
      u = { width: t.scrollWidth, height: t.scrollHeight };
    yd.set(t, u);
    const c = () => {
        const d = t.scrollWidth,
          g = t.scrollHeight;
        (u.width !== d || u.height !== g) &&
          (a(), (u.width = d), (u.height = g));
      },
      f = z.read(c, !0);
    _i.set(t, f);
  }
  const l = Sn.get(t);
  return (
    z.read(l, !1, !0),
    () => {
      var f;
      Xe(l);
      const a = Xo.get(t);
      if (!a || (a.delete(o), a.size)) return;
      const u = Sn.get(t);
      (Sn.delete(t),
        u &&
          (vd(t).removeEventListener("scroll", u),
          (f = gd.get(t)) == null || f(),
          window.removeEventListener("resize", u)));
      const c = _i.get(t);
      (c && (Xe(c), _i.delete(t)), yd.delete(t));
    }
  );
}
const s2 = [
    [Tr.Enter, "entry"],
    [Tr.Exit, "exit"],
    [Tr.Any, "cover"],
    [Tr.All, "contain"],
  ],
  xd = { start: 0, end: 1 };
function o2(e) {
  const t = e.trim().split(/\s+/);
  if (t.length !== 2) return;
  const n = xd[t[0]],
    r = xd[t[1]];
  if (!(n === void 0 || r === void 0)) return [n, r];
}
function l2(e) {
  if (e.length !== 2) return;
  const t = [];
  for (const n of e)
    if (Array.isArray(n)) t.push(n);
    else if (typeof n == "string") {
      const r = o2(n);
      if (!r) return;
      t.push(r);
    } else return;
  return t;
}
function a2(e, t) {
  const n = l2(e);
  if (!n) return !1;
  for (let r = 0; r < 2; r++) {
    const i = n[r],
      s = t[r];
    if (i[0] !== s[0] || i[1] !== s[1]) return !1;
  }
  return !0;
}
function Uu(e) {
  if (!e) return { rangeStart: "contain 0%", rangeEnd: "contain 100%" };
  for (const [t, n] of s2)
    if (a2(e, t)) return { rangeStart: `${n} 0%`, rangeEnd: `${n} 100%` };
}
const wd = new Map();
function Sd(e) {
  const t = { value: 0 },
    n = Cg((r) => {
      t.value = r[e.axis].progress * 100;
    }, e);
  return { currentTime: t, cancel: n };
}
function Eg({ source: e, container: t, ...n }) {
  const { axis: r } = n;
  e && (t = e);
  let i = wd.get(t);
  i || ((i = new Map()), wd.set(t, i));
  const s = n.target ?? "self";
  let o = i.get(s);
  o || ((o = {}), i.set(s, o));
  const l = r + (n.offset ?? []).join(",");
  return (
    o[l] ||
      (n.target && _s(n.target)
        ? Uu(n.offset)
          ? (o[l] = new ViewTimeline({ subject: n.target, axis: r }))
          : (o[l] = Sd({ container: t, ...n }))
        : _s()
          ? (o[l] = new ScrollTimeline({ source: t, axis: r }))
          : (o[l] = Sd({ container: t, ...n }))),
    o[l]
  );
}
function u2(e, t) {
  const n = Eg(t),
    r = t.target ? Uu(t.offset) : void 0,
    i = t.target ? _s(t.target) && !!r : _s();
  return e.attachTimeline({
    timeline: i ? n : void 0,
    ...(r && i && { rangeStart: r.rangeStart, rangeEnd: r.rangeEnd }),
    observe: (s) => (
      s.pause(),
      Om((o) => {
        s.time = s.iterationDuration * o;
      }, n)
    ),
  });
}
function c2(e) {
  return e && (e.target || e.offset);
}
function f2(e) {
  return e.length === 2;
}
function d2(e, t) {
  return f2(e) || c2(t)
    ? Cg((n) => {
        e(n[t.axis].progress, n);
      }, t)
    : Om(e, Eg(t));
}
function Pg(
  e,
  { axis: t = "y", container: n = document.scrollingElement, ...r } = {},
) {
  if (!n) return Me;
  const i = { axis: t, container: n, ...r };
  return typeof e == "function" ? d2(e, i) : u2(e, i);
}
const h2 = () => ({
    scrollX: nt(0),
    scrollY: nt(0),
    scrollXProgress: nt(0),
    scrollYProgress: nt(0),
  }),
  Fn = (e) => (e ? !e.current : !1);
function Td(e, t, n, r) {
  return {
    factory: (i) => {
      let s;
      const o = () => {
        if (Fn(n) || Fn(r)) {
          tr.read(o);
          return;
        }
        s = Pg(i, {
          ...t,
          axis: e,
          container: (n == null ? void 0 : n.current) || void 0,
          target: (r == null ? void 0 : r.current) || void 0,
        });
      };
      return (
        tr.read(o),
        () => {
          (Im(o), s == null || s());
        }
      );
    },
    times: [0, 1],
    keyframes: [0, 1],
    ease: (i) => i,
    duration: 1,
  };
}
function p2(e, t) {
  return typeof window > "u" ? !1 : e ? pm() && !!Uu(t) : Mu();
}
function Ag({ container: e, target: t, ...n } = {}) {
  const r = qn(h2);
  p2(t, n.offset) &&
    ((r.scrollXProgress.accelerate = Td("x", n, e, t)),
    (r.scrollYProgress.accelerate = Td("y", n, e, t)));
  const i = L.useRef(null),
    s = L.useRef(!1),
    o = L.useCallback(
      () => (
        (i.current = Pg(
          (l, { x: a, y: u }) => {
            (r.scrollX.set(a.current),
              r.scrollXProgress.set(a.progress),
              r.scrollY.set(u.current),
              r.scrollYProgress.set(u.progress));
          },
          {
            ...n,
            container: (e == null ? void 0 : e.current) || void 0,
            target: (t == null ? void 0 : t.current) || void 0,
          },
        )),
        () => {
          var l;
          (l = i.current) == null || l.call(i);
        }
      ),
      [e, t, JSON.stringify(n.offset)],
    );
  return (
    fu(() => {
      if (((s.current = !1), Fn(e) || Fn(t))) {
        s.current = !0;
        return;
      } else return o();
    }, [o]),
    L.useEffect(() => {
      if (!s.current) return;
      let l;
      const a = () => {
        const u = Fn(e),
          c = Fn(t);
        !u && !c && (l = o());
      };
      return (
        tr.read(a),
        () => {
          (Im(a), l == null || l());
        }
      );
    }, [o]),
    r
  );
}
function m2(e) {
  const t = qn(() => nt(e)),
    { isStatic: n } = L.useContext(Ou);
  if (n) {
    const [, r] = L.useState(e);
    L.useEffect(() => t.on("change", r), []);
  }
  return t;
}
function Mg(e, t) {
  const n = m2(t()),
    r = () => n.set(t());
  return (
    r(),
    fu(() => {
      const i = () => z.preRender(r, !1, !0),
        s = e.map((o) => o.on("change", i));
      return () => {
        (s.forEach((o) => o()), Xe(r));
      };
    }),
    n
  );
}
function g2(e) {
  ((Ir.current = []), e());
  const t = Mg(Ir.current, e);
  return ((Ir.current = void 0), t);
}
function $u(e, t, n, r) {
  if (typeof e == "function") return g2(e);
  if (n !== void 0 && !Array.isArray(n) && typeof t != "function")
    return y2(e, t, n, r);
  const o = typeof t == "function" ? t : Tx(t, n, r),
    l = Array.isArray(e) ? kd(e, o) : kd([e], ([u]) => o(u)),
    a = Array.isArray(e) ? void 0 : e.accelerate;
  return (
    a &&
      !a.isTransformed &&
      typeof t != "function" &&
      Array.isArray(n) &&
      (r == null ? void 0 : r.clamp) !== !1 &&
      (l.accelerate = { ...a, times: t, keyframes: n, isTransformed: !0 }),
    l
  );
}
function kd(e, t) {
  const n = qn(() => []);
  return Mg(e, () => {
    n.length = 0;
    const r = e.length;
    for (let i = 0; i < r; i++) n[i] = e[i].get();
    return t(n);
  });
}
function y2(e, t, n, r) {
  const i = qn(() => Object.keys(n)),
    s = qn(() => ({}));
  for (const o of i) s[o] = $u(e, t, n[o], r);
  return s;
}
const v2 = "https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png",
  Oe = {
    speaking: [
      "/images/speaking-1.png",
      "/images/speaking-2.png",
      "/images/speaking-3.png",
      "/images/speaking-4.png",
    ],
    landing: [
      "/images/landing-1.png",
      "/images/landing-2.png",
      "/images/landing-3.png",
      "/images/landing-4.png",
    ],
    miniapp: [
      "/images/miniapp-1.png",
      "/images/miniapp-2.png",
      "/images/miniapp-3.png",
      "/images/miniapp-4.png",
    ],
    admin: [
      "/images/admin-1.png",
      "/images/admin-2.png",
      "/images/admin-3.png",
      "/images/admin-4.png",
    ],
  },
  Dg = [Oe.speaking[0],Oe.miniapp[0],Oe.admin[0],Oe.landing[0],Oe.speaking[1],Oe.miniapp[1],Oe.admin[1],Oe.landing[1],Oe.speaking[2],Oe.miniapp[2],Oe.admin[2],Oe.landing[2],Oe.speaking[3],Oe.miniapp[3],Oe.admin[3],Oe.landing[3]],
  Yo = Dg.slice(0, 8),
  Qo = Dg.slice(8),
  x2 = {
    uz: {
      nav: ["Haqimda", "Xizmatlar", "Loyihalar", "Aloqa"],
      heroDesc: "AI yordamida g'oyalarni mahsulotga aylantiruvchi vibe coder",
      contact: "Bog'lanish",
      aboutTitle: "Men Haqimda",
      aboutText:
        "AI orqali bizneslarni avtomatlashtiraman. Zamonaviy UI/UX yechimlari va AI vositalari yordamida g'oyalarni tayyor, daromad keltiruvchi raqamli mahsulotlarga aylantiruvchi Vibe Coder'man.",
      servicesTitle: "Xizmatlar",
      services: [
        {
          n: "01",
          name: "Landing Sahifalar",
          desc: "AI yordamida tez va chiroyli landing sahifalar — biznesingiz uchun eng yaxshi birinchi taassurot.",
        },
        {
          n: "02",
          name: "N8N Botlar",
          desc: "Avtomatlashtirish botlari — xabarlar, obunalar, CRM integratsiyalari va ko'proq.",
        },
        {
          n: "03",
          name: "Telegram Mini Applar",
          desc: "Telegram ichida to'liq ishlaydigan mini ilovalar — buyurtma, to'lov, katalog.",
        },
        {
          n: "04",
          name: "Animatsiyali Saytlar",
          desc: "Framer Motion va GSAP bilan jonli, interaktiv va esda qoladigan saytlar.",
        },
        {
          n: "05",
          name: "Web Applar",
          desc: "React va Next.js asosida to'liq funksional web ilovalar — tezkor va zamonaviy.",
        },
      ],
      projectsTitle: "Loyihalar",
      projects: [
        {
          n: "01",
          name: "IELTS Speaking Simulator",
          cat: "Web App",
          link: "https://speaking.arakulovlandingpage.com",
          imgs: Oe.speaking,
          accent: "#7c3aed",
        },
        {
          n: "02",
          name: "Oson Dostavka",
          cat: "Telegram Mini App",
          link: "https://t.me/OsonyetkazibberishBot",
          imgs: Oe.miniapp,
          accent: "#16a34a",
        },
        {
          n: "03",
          name: "AA Admin Panel",
          cat: "Admin Panel",
          link: "https://admin.arakulovlandingpage.com",
          imgs: Oe.admin,
          accent: "#ea580c",
        },
        {
          n: "04",
          name: "Arakulov Landing",
          cat: "Landing Page",
          link: "https://arakulovlandingpage.com",
          imgs: Oe.landing,
          accent: "#d97706",
        },
      ],
      live: "Ko'rish",
      contactTitle: "Keling, bog'lanamiz.",
      contactDesc: "Loyihangiz uchun yozing!",
      contactInfoTitle: "Aloqa ma'lumotlari",
      firstNameLabel: "Ismingiz*",
      emailLabel: "Sizning emailingiz (ixtiyoriy)",
      phoneLabel: "Telefon raqamingiz*",
      messageLabel: "Xabaringiz*",
      messagePlaceholder: "Sizga qanday yordam bera olamiz?",
      submitBtn: "YUBORISH",
      requiredFields: "*To'ldirilishi shart bo'lgan maydonlar",
      successMessage: "Xabaringiz muvaffaqiyatli yuborildi! Tez orada bog'lanamiz.",
      sendingText: "Yuborilmoqda...",
    },
    en: {
      nav: ["About", "Services", "Projects", "Contact"],
      heroDesc: "Turning ideas into products with AI",
      contact: "Contact Me",
      aboutTitle: "About Me",
      aboutText:
        "I'm Nizom — a vibe coder. I build landing pages, Telegram bots, mini apps and web applications using AI. Specialized in turning your idea into a working product fast.",
      servicesTitle: "Services",
      services: [
        {
          n: "01",
          name: "Landing Pages",
          desc: "Fast and beautiful AI-powered landing pages — the best first impression for your business.",
        },
        {
          n: "02",
          name: "N8N Bots",
          desc: "Automation bots — messages, subscriptions, CRM integrations and more.",
        },
        {
          n: "03",
          name: "Telegram Mini Apps",
          desc: "Fully functional mini apps inside Telegram — orders, payments, catalogs.",
        },
        {
          n: "04",
          name: "Animated Websites",
          desc: "Alive, interactive and memorable sites with Framer Motion and GSAP.",
        },
        {
          n: "05",
          name: "Web Applications",
          desc: "Full-featured web apps built with React and Next.js — fast and modern.",
        },
      ],
      projectsTitle: "Projects",
      projects: [
        {
          n: "01",
          name: "IELTS Speaking Simulator",
          cat: "Web App",
          link: "https://speaking.arakulovlandingpage.com",
          imgs: Oe.speaking,
          accent: "#7c3aed",
        },
        {
          n: "02",
          name: "Oson Dostavka",
          cat: "Telegram Mini App",
          link: "https://t.me/OsonyetkazibberishBot",
          imgs: Oe.miniapp,
          accent: "#16a34a",
        },
        {
          n: "03",
          name: "AA Admin Panel",
          cat: "Admin Panel",
          link: "https://admin.arakulovlandingpage.com",
          imgs: Oe.admin,
          accent: "#ea580c",
        },
        {
          n: "04",
          name: "Arakulov Landing",
          cat: "Landing Page",
          link: "https://arakulovlandingpage.com",
          imgs: Oe.landing,
          accent: "#d97706",
        },
      ],
      live: "View Live",
      contactTitle: "Let's get in touch.",
      contactDesc: "Write for your project!",
      contactInfoTitle: "Contact Information",
      firstNameLabel: "First Name*",
      emailLabel: "Your Email (optional)",
      phoneLabel: "Phone Number*",
      messageLabel: "Your Message*",
      messagePlaceholder: "How can we help you?",
      submitBtn: "SUBMIT",
      requiredFields: "*Required fields",
      successMessage: "Message sent successfully! We will get in touch soon.",
      sendingText: "Sending...",
    },
  },
  w2 = [
    {
      label: "Telegram",
      href: "https://t.me/nizom_viber",
      bg: "#E8F4FD",
      border: "#0088CC",
      textColor: "#0088CC",
      logo: T.jsx("svg", {
        viewBox: "0 0 24 24",
        fill: "currentColor",
        style: { width: 40, height: 40 },
        children: T.jsx("path", {
          d: "M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L8.32 13.617l-2.96-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.828.942z",
        }),
      }),
    },
    {
      label: "Instagram",
      href: "https://instagram.com/nizom_viber",
      bg: "#FDF0F8",
      border: "#E1306C",
      textColor: "#E1306C",
      logo: T.jsx("svg", {
        viewBox: "0 0 24 24",
        fill: "currentColor",
        style: { width: 40, height: 40 },
        children: T.jsx("path", {
          d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z",
        }),
      }),
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/nizomviber",
      bg: "#EBF5FB",
      border: "#0077B5",
      textColor: "#0077B5",
      logo: T.jsx("svg", {
        viewBox: "0 0 24 24",
        fill: "currentColor",
        style: { width: 40, height: 40 },
        children: T.jsx("path", {
          d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
        }),
      }),
    },
  ];
function Re({
  children: e,
  delay: t = 0,
  y: n = 30,
  x: r = 0,
  duration: i = 0.7,
  className: s = "",
  style: o = {},
}) {
  return T.jsx(tt.div, {
    className: s,
    style: o,
    initial: { opacity: 0, y: n, x: r },
    whileInView: { opacity: 1, y: 0, x: 0 },
    viewport: { once: !1, margin: "0px", amount: 0.1 },
    transition: { delay: t, duration: i, ease: [0.25, 0.1, 0.25, 1] },
    children: e,
  });
}
function S2({ children: e, className: t = "" }) {
  const n = L.useRef(null),
    [r, i] = L.useState({
      transition: "transform 0.6s ease-in-out",
      willChange: "transform",
    });
  return (
    L.useEffect(() => {
      const s = n.current;
      if (!s) return;
      const o = (l) => {
        const a = s.getBoundingClientRect(),
          u = l.clientX - (a.left + a.width / 2),
          c = l.clientY - (a.top + a.height / 2);
        Math.sqrt(u * u + c * c) < Math.max(a.width, a.height) / 2 + 150
          ? i({
              transform: `translate3d(${u / 3}px,${c / 3}px,0)`,
              transition: "transform 0.3s ease-out",
              willChange: "transform",
            })
          : i({
              transform: "translate3d(0,0,0)",
              transition: "transform 0.6s ease-in-out",
              willChange: "transform",
            });
      };
      return (
        window.addEventListener("mousemove", o),
        () => window.removeEventListener("mousemove", o)
      );
    }, []),
    T.jsx("div", { ref: n, style: r, className: t, children: e })
  );
}
function T2({ char: e, prog: t, s: n, e: r }) {
  const i = $u(t, [n, r], [0.15, 1]);
  return T.jsxs("span", {
    style: { position: "relative", display: "inline-block" },
    children: [
      T.jsx("span", {
        style: { visibility: "hidden" },
        children: e === " " ? " " : e,
      }),
      T.jsx(tt.span, {
        style: { opacity: i, position: "absolute", top: 0, left: 0 },
        children: e === " " ? " " : e,
      }),
    ],
  });
}
function k2({ text: e, className: t = "", style: n = {} }) {
  const r = L.useRef(null),
    { scrollYProgress: i } = Ag({
      target: r,
      offset: ["start 0.9", "end 0.1"],
    }),
    s = e.split(" ");
  let o = 0;
  const l = e.length;
  return T.jsx("p", {
    ref: r,
    className: t,
    style: { ...n, wordBreak: "keep-all", overflowWrap: "break-word" },
    "aria-label": e,
    children: s.map((a, u) => {
      const c = a.split(""),
        f = T.jsx(
          "span",
          {
            style: { display: "inline-block", whiteSpace: "nowrap" },
            children: c.map((d, g) => {
              const y = o / l,
                v = (o + 1) / l;
              return (o++, T.jsx(T2, { char: d, prog: i, s: y, e: v }, g));
            }),
          },
          u,
        );
      return (
        o++,
        T.jsxs(
          Id.Fragment,
          {
            children: [
              f,
              u < s.length - 1 &&
                T.jsx("span", {
                  style: { display: "inline-block" },
                  children: " ",
                }),
            ],
          },
          u,
        )
      );
    }),
  });
}
const $2 = {
  "01": [
    { name: "Next.js", icon: "\u23e3" },
    { name: "Groq AI", icon: "\u2728" },
    { name: "Tailwind CSS", icon: "\ud83c\udfa8" },
    { name: "Web Speech API", icon: "\ud83c\udfa4" },
    { name: "Framer Motion", icon: "\u26a1" },
  ],
  "02": [
    { name: "HTML5 & CSS3", icon: "\ud83c\udfd7\ufe0f" },
    { name: "Vanilla JS", icon: "\ud83d\udce6" },
    { name: "Telegram API", icon: "\ud83d\udce1" },
    { name: "Python & Aiogram", icon: "\ud83d\udc0d" },
    { name: "Docker", icon: "\ud83d\udc33" },
  ],
  "03": [
    { name: "Next.js 14", icon: "\u23e3" },
    { name: "Supabase", icon: "\ud83d\uddc4\ufe0f" },
    { name: "Tailwind CSS", icon: "\ud83c\udfa8" },
    { name: "Recharts", icon: "\ud83d\udcca" },
    { name: "XLSX Export", icon: "\ud83d\udcc5" },
  ],
  "04": [
    { name: "HTML5 & CSS3", icon: "\ud83c\udfd7\ufe0f" },
    { name: "Vanilla JS", icon: "\ud83d\udce6" },
    { name: "Supabase", icon: "\ud83d\uddc4\ufe0f" },
    { name: "AOS Animations", icon: "\u2728" },
    { name: "FontAwesome", icon: "\ud83d\udd24" },
  ],
};
const _k2_colors = { "01": "#7c3aed", "02": "#16a34a", "03": "#ea580c", "04": "#d97706" };
function _TechStack({ projectN: e }) {
  const t = $2[e] || [], n = _k2_colors[e] || "#7c3aed";
  return T.jsxs("div", {
    style: { display: "flex", flexDirection: "column", gap: 8, height: "100%", justifyContent: "center" },
    children: [
      T.jsxs("div", {
        style: {
          display: "flex",
          alignItems: "center",
          gap: 6,
          marginBottom: 4,
        },
        children: [
          T.jsx("div", {
            style: { width: 6, height: 6, borderRadius: "50%", background: n, boxShadow: `0 0 10px ${n}` },
          }),
          T.jsx("span", {
            style: { fontSize: 10, fontWeight: 700, color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "0.15em" },
            children: "Tech Stack",
          }),
        ],
      }),
      t.map((r, i) =>
        T.jsxs(
          "div",
          {
            style: {
              display: "flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.05)",
              padding: "6px 10px",
              borderRadius: 8,
              width: "fit-content",
            },
            children: [
              T.jsx("span", {
                style: { fontSize: 13, color: n },
                children: r.icon,
              }),
              T.jsx("span", {
                style: { fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.85)", letterSpacing: "0.02em" },
                children: r.name,
              }),
            ],
          },
          i,
        ),
      ),
    ],
  });
}
function bo({ src: e, height: t, accent: a }) {
  return T.jsxs("div", {
    style: {
      borderRadius: 12,
      overflow: "hidden",
      boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
      border: `1px solid ${a ? a+"66" : "rgba(255,255,255,0.1)"}`,
      background: "#1a1a1a",
      height: t,
    },
    children: [
      T.jsxs("div", {
        style: {
          background: "#2a2a2a",
          padding: "6px 10px",
          display: "flex",
          alignItems: "center",
          gap: 6,
        },
        children: [
          T.jsx("div", {
            style: { display: "flex", gap: 5 },
            children: ["#FF5F57", "#FEBC2E", "#28C840"].map((n, r) =>
              T.jsx(
                "div",
                {
                  style: {
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    background: n,
                  },
                },
                r,
              ),
            ),
          }),
          T.jsx("div", {
            style: {
              flex: 1,
              background: "#3a3a3a",
              borderRadius: 4,
              height: 16,
              marginLeft: 8,
            },
          }),
        ],
      }),
      T.jsx("img", {
        src: e,
        alt: "",
        loading: "lazy",
        style: {
          width: "100%",
          height: `calc(${t} - 30px)`,
          objectFit: "cover",
          objectPosition: "top",
          display: "block",
        },
      }),
    ],
  });
}
function C2({ p: e, idx: t, total: n, live: r }) {
  const i = L.useRef(null),
    { scrollYProgress: s } = Ag({
      target: i,
      offset: ["start end", "end start"],
    }),
    o = $u(s, [0, 1], [1, 1 - (n - 1 - t) * 0.04]);
  return T.jsx("div", {
    ref: i,
    className: "sticky-project-wrapper",
    style: {
      minHeight: "fit-content",
      position: "sticky",
      top: 0,
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "center",
      paddingTop: `${t * 16}px`,
      paddingBottom: "120px",
    },
    children: T.jsxs(tt.div, {
      style: {
        position: "relative",
        width: "100%",
        maxWidth: 1100,
        borderRadius: 32,
        background: "rgba(255, 255, 255, 0.012)",
        backdropFilter: "blur(32px)",
        WebkitBackdropFilter: "blur(32px)",
        border: "1px solid rgba(255, 255, 255, 0.05)",
        borderBottom: `1px solid ${e.accent || "rgba(138,43,226,0.4)"}`,
        borderRight: `1px solid ${e.accent || "rgba(138,43,226,0.25)"}`,
        padding: "clamp(16px,2.5vw,28px)",
        scale: o,
        transformOrigin: "top center",
        boxShadow: `0 40px 80px rgba(0,0,0,0.8), inset 0 1px 1px rgba(255,255,255,0.4), inset 0 -1px 3px ${e.accent || "rgba(138,43,226,0.6)"}`,
      },
      children: [
        T.jsxs("div", {
          style: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 16,
            flexWrap: "wrap",
            gap: 12,
          },
          children: [
            T.jsxs("div", {
              style: { display: "flex", alignItems: "baseline", gap: 12 },
              children: [
                T.jsx("span", {
                  className: "hero-heading",
                  style: {
                    fontWeight: 900,
                    lineHeight: 1,
                    fontSize: "clamp(2rem,6vw,80px)",
                  },
                  children: e.n,
                }),
                T.jsxs("div", {
                  children: [
                    T.jsx("div", {
                      style: {
                        color: "rgba(215,226,234,0.5)",
                        textTransform: "uppercase",
                        letterSpacing: "0.15em",
                        fontSize: "clamp(0.55rem,0.9vw,0.8rem)",
                        fontWeight: 500,
                      },
                      children: e.cat,
                    }),
                    T.jsx("div", {
                      style: {
                        color: "#D7E2EA",
                        fontWeight: 600,
                        textTransform: "uppercase",
                        fontSize: "clamp(0.85rem,1.8vw,1.6rem)",
                      },
                      children: e.name,
                    }),
                  ],
                }),
              ],
            }),
            T.jsx("a", {
              href: e.link,
              target: "_blank",
              rel: "noopener noreferrer",
              style: {
                borderRadius: 9999,
                border: `1.5px solid ${e.accent || "#D7E2EA"}`,
                color: e.accent || "#D7E2EA",
                fontWeight: 500,
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                padding: "8px 20px",
                fontSize: "clamp(0.6rem,1vw,0.85rem)",
                textDecoration: "none",
                fontFamily: "inherit",
              },
              children: r,
            }),
          ],
        }),
        T.jsxs("div", {
          className: "project-columns-container",
          style: { gap: 12, alignItems: "stretch" },
          children: [
            T.jsx("div", {
              className: "project-left-col",
              style: {
                display: "flex",
                flexDirection: "column",
                gap: 8,
                justifyContent: "center",
              },
              children: T.jsx(_TechStack, { projectN: e.n }),
            }),
            T.jsx("div", {
              className: "project-right-col",
              style: {},
              children: T.jsx(bo, {
                src: e.imgs[0],
                height: "100%",
                accent: e.accent,
              }),
            }),
          ],
        }),
      ],
    }),
  });
}
function P2() {
  const [e, t] = L.useState("uz"),
    n = x2[e],
    r = L.useRef(null),
    [i, s] = L.useState(200),
    [formData, setFormData] = L.useState({ name: "", email: "", phone: "", message: "" }),
    [formSubmitted, setFormSubmitted] = L.useState(false),
    [sending, setSending] = L.useState(false),
    [activeService, setActiveService] = L.useState(0);
  const handleFormSubmit = (g) => {
    g.preventDefault();
    if (!formData.name || !formData.phone || !formData.message) return;
    setSending(true);
    
    // Telegram bot integration credentials
    const TELEGRAM_BOT_TOKEN = "8740200082:AAE3dOaRQCON_FsD8wddQSd6jSByH1HHe7k";
    const TELEGRAM_CHAT_ID = "6765979309";
    
    const messageText = `<b>Yangi xabar portfolio saytidan:</b>\n\n` +
                        `<b>Ismi:</b> ${formData.name}\n` +
                        `<b>Email:</b> ${formData.email || "Kiritilmagan"}\n` +
                        `<b>Telefon:</b> ${formData.phone}\n` +
                        `<b>Xabar:</b> ${formData.message}`;
    
    if (TELEGRAM_BOT_TOKEN && TELEGRAM_BOT_TOKEN !== "YOUR_TELEGRAM_BOT_TOKEN" && TELEGRAM_CHAT_ID && TELEGRAM_CHAT_ID !== "YOUR_TELEGRAM_CHAT_ID") {
      fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: messageText,
          parse_mode: "HTML"
        })
      })
      .then(() => {
        setSending(false);
        setFormSubmitted(true);
        setFormData({ name: "", email: "", phone: "", message: "" });
      })
      .catch(() => {
        // Fallback success so client flow is not broken
        setSending(false);
        setFormSubmitted(true);
        setFormData({ name: "", email: "", phone: "", message: "" });
      });
    } else {
      // Fallback simulated success
      setTimeout(() => {
        setSending(false);
        setFormSubmitted(true);
        setFormData({ name: "", email: "", phone: "", message: "" });
      }, 1500);
    }
  };
  L.useEffect(() => {
    const u = () => {
      const c = r.current;
      if (!c) return;
      const f = c.getBoundingClientRect().top + window.scrollY;
      s((window.scrollY - f + window.innerHeight) * 0.3);
    };
    return (
      window.addEventListener("scroll", u, { passive: !0 }),
      u(),
      () => window.removeEventListener("scroll", u)
    );
  }, []);
  const o = [...Yo, ...Yo, ...Yo],
    l = [...Qo, ...Qo, ...Qo],
    a = {
      background:
        "linear-gradient(123deg,#18011F 7%,#B600A8 37%,#7621B0 72%,#BE4C00 100%)",
      boxShadow: "0 4px 4px rgba(181,1,167,.25),inset 4px 4px 12px #7721B1",
      outline: "2px solid white",
      outlineOffset: "-3px",
      color: "#fff",
      fontFamily: "inherit",
      fontWeight: 500,
      textTransform: "uppercase",
      letterSpacing: "0.1em",
      border: "none",
      cursor: "pointer",
      borderRadius: "9999px",
    };
  return T.jsxs("div", {
    style: {
      background: "#0C0C0C",
      overflowX: "visible",
      fontFamily: "'Kanit', sans-serif",
    },
    children: [
      T.jsxs("section", {
        style: {
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          position: "relative",
          overflowX: "visible",
        },
        children: [
          T.jsx(Re, {
            delay: 0,
            y: -20,
            children: T.jsxs("nav", {
              className: "portfolio-nav",
              style: {
                position: "relative",
              },
              children: [
                n.nav.map((u, c) =>
                  T.jsx(
                    "a",
                    {
                      href: `#${["about", "services", "projects", "contact"][c]}`,
                      style: {
                        color: "#D7E2EA",
                        fontWeight: 500,
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                        textDecoration: "none",
                        fontSize: "clamp(0.6rem,1vw,1rem)", opacity: 1,
                      },
                      children: u,
                    },
                    c,
                  ),
                ),
                T.jsx("div", {
                  className: "lang-switcher-container",
                  style: {
                    display: "flex",
                    alignItems: "center",
                    gap: 0,
                    background: "rgba(255, 255, 255, 0.05)",
                    backdropFilter: "blur(20px)",
                    WebkitBackdropFilter: "blur(20px)",
                    borderRadius: 9999,
                    padding: 4,
                    border: "1px solid rgba(255, 255, 255, 0.15)",
                    boxShadow: "inset 0 2px 8px rgba(0,0,0,0.3)",
                  },
                  children: ["uz", "en"].map((u) =>
                    T.jsx(
                      tt.button,
                      {
                        onClick: () => t(u),
                        whileTap: { scale: 0.95 },
                        className: "lang-btn",
                        style: {
                          position: "relative",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          borderRadius: 9999,
                          padding: "8px 16px",
                          fontSize: 12,
                          fontWeight: 600,
                          textTransform: "uppercase",
                          letterSpacing: "0.05em",
                          cursor: "pointer",
                          fontFamily: "inherit",
                          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                          background: e === u ? "rgba(255, 255, 255, 0.15)" : "transparent",
                          backdropFilter: e === u ? "blur(30px)" : "none",
                          WebkitBackdropFilter: e === u ? "blur(30px)" : "none",
                          border: e === u ? "1px solid rgba(255, 255, 255, 0.3)" : "1px solid transparent",
                          borderTop: e === u ? "1px solid rgba(255, 255, 255, 0.6)" : "1px solid transparent",
                          boxShadow: e === u ? "0 8px 16px rgba(0,0,0,0.3), inset 0 2px 5px rgba(255,255,255,0.4)" : "none",
                          color: e === u ? "#fff" : "rgba(255,255,255,0.4)",
                          zIndex: e === u ? 2 : 1,
                        },
                        children: u === "uz" ? "O'ZB" : "ENG",
                      },
                      u,
                    ),
                  ),
                }),
              ],
            }),
          }),
          T.jsx("div", {
            style: { overflow: "visible", textAlign: "center" },
            children: T.jsx(Re, {
              delay: 0.15,
              y: 40,
              children: T.jsx("h1", {
                className: "hero-heading",
                style: {
                  fontWeight: 900,
                  textTransform: "uppercase",
                  letterSpacing: "-0.02em",
                  lineHeight: 1,
                  fontSize: "clamp(10vw, 13vw, 16vw)",
                  padding: "0 16px",
                  marginTop: "clamp(4px,1vw,16px)",
                  whiteSpace: "nowrap",
                },
                children: "Hi, i'm Nizom",
              }),
            }),
          }),
          T.jsx(Re, {
            delay: 0.6,
            y: 30,
            style: {
              position: "absolute",
              left: 0, right: 0, margin: "0 auto", transform: "none",
              top: "20%",
              marginTop: "2vw",
              zIndex: 10,
              width: "clamp(180px,26vw,380px)",
            },
            children: T.jsx(S2, {
              children: T.jsx(tt.img, {
                src: v2,
                alt: "Nizom",
                style: { width: "100%", height: "auto", objectFit: "contain" },
                loading: "eager",
                animate: { y: [0, -14, 0] },
                transition: { duration: 3.5, repeat: 1 / 0, ease: "easeInOut" },
              }),
            }),
          }),
          T.jsxs("div", {
            className: "hero-bottom-container",
            style: {
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "0 12vw",
              position: "absolute",
              top: "55%",
              left: 0, right: 0,
              zIndex: 20,
            },
            children: [
              T.jsx(Re, {
                delay: 0.35,
                y: 20,
                children: T.jsx("p", {
                  style: {
                    color: "#D7E2EA",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    lineHeight: 1.35,
                    maxWidth: "clamp(140px,20vw,280px)",
                    fontSize: "clamp(0.6rem,1.1vw,1.05rem)",
                    wordBreak: "keep-all",
                    hyphens: "none",
                  },
                  children: n.heroDesc,
                }),
              }),
              T.jsx(Re, {
                delay: 0.5,
                y: 20,
                children: T.jsx(tt.button, {
                  whileHover: {
                    scale: 1.06,
                    boxShadow:
                      "0 6px 24px rgba(181,1,167,0.5),inset 4px 4px 12px #7721B1",
                  },
                  whileTap: { scale: 0.96 },
                  style: {
                    ...a,
                    padding: "clamp(10px,1.5vw,16px) clamp(24px,3vw,48px)",
                    fontSize: "clamp(0.7rem,1vw,0.95rem)",
                  },
                  children: n.contact,
                }),
              }),
            ],
          }),
        ],
      }),
      T.jsx("section", {
        ref: r,
        className: "marquee-section",
        style: {},
        children: T.jsx("div", {
          style: { display: "flex", flexDirection: "column", gap: 12 },
          children: [o, l].map((u, c) =>
            T.jsx(
              tt.div,
              {
                className: c === 0 ? "marquee-track-left" : "marquee-track-right",
                style: {
                  display: "flex",
                  gap: 12,
                  willChange: "transform",
                },
                children: u.map((f, d) =>
                  T.jsxs(
                    "div",
                    {
                      className: "marquee-card",
                      style: {},
                      children: [
                        T.jsx("div", {
                          style: {
                            background: "rgba(10, 5, 15, 0.6)",
                            padding: "8px 12px",
                            display: "flex",
                            gap: 6,
                            borderRadius: "16px 16px 0 0",
                            borderBottom: "1px solid rgba(255,255,255,0.05)"
                          },
                          children: ["#FF5F57", "#FEBC2E", "#28C840"].map(
                            (g, y) =>
                              T.jsx(
                                "div",
                                {
                                  style: {
                                    width: 10,
                                    height: 10,
                                    borderRadius: "50%",
                                    background: g,
                                    boxShadow: "inset 0 1px 3px rgba(255,255,255,0.4)"
                                  },
                                },
                                y,
                              ),
                          ),
                        }),
                        T.jsxs("div", {
                          style: { position: "relative" },
                          children: [
                            T.jsx("img", {
                              src: f,
                              alt: "",
                              loading: "lazy",
                              className: "marquee-img",
                              style: {},
                            }),
                            T.jsx("div", {
                              style: {
                                position: "absolute", top: 0, left: 0, right: 0, bottom: 0,
                                background: "linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 30%, rgba(255,255,255,0) 100%)",
                                pointerEvents: "none",
                                borderBottomLeftRadius: 16,
                                borderBottomRightRadius: 16,
                              }
                            })
                          ]
                        })
                      ],
                    },
                    d,
                  ),
                ),
              },
              c,
            ),
          ),
        }),
      }),
      T.jsxs("section", {
        id: "about",
        style: {
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          padding: "80px 40px",
        },
        children: [
          [
            {
              src: "https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png",
              delay: 0.1,
              x: -25,
              style: { top: "8%", left: "4%", width: "clamp(45px,8vw,120px)" },
            },
            {
              src: "https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png",
              delay: 0.25,
              x: -25,
              style: {
                bottom: "12%",
                left: "6%",
                width: "clamp(35px,6vw,100px)",
              },
            },
            {
              src: "https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png",
              delay: 0.15,
              x: 25,
              style: {
                top: "8%",
                right: "4%",
                width: "clamp(45px,8vw,120px)",
              },
            },
            {
              src: "https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png",
              delay: 0.3,
              x: 25,
              style: {
                bottom: "12%",
                right: "6%",
                width: "clamp(55px,9vw,135px)",
              },
            },
          ].map((u, c) =>
            T.jsx(
              Re,
              {
                delay: u.delay,
                x: u.x,
                y: 0,
                duration: 0.8,
                style: {
                  position: "absolute",
                  pointerEvents: "none",
                  ...u.style,
                },
                children: T.jsx("img", {
                  src: u.src,
                  alt: "",
                  loading: "lazy",
                  style: { width: "100%" },
                }),
              },
              c,
            ),
          ),
          T.jsxs("div", {
            style: {
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              gap: "clamp(28px,5vw,52px)",
              position: "relative",
              zIndex: 10,
            },
            children: [
              T.jsx(Re, {
                delay: 0,
                y: 50,
                children: T.jsx("h2", { className: "hero-heading", style: { fontWeight: 900, textTransform: "uppercase", textAlign: "center", lineHeight: 1, letterSpacing: "-0.02em", marginBottom: "clamp(40px,6vw,80px)", fontSize: "clamp(3rem,12vw,140px)" }, children: n.aboutTitle,
                }),
              }),
              T.jsxs("div", {
                style: {
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "clamp(40px,7vw,72px)",
                },
                children: [
                  T.jsx(k2, {
                    text: n.aboutText,
                    style: {
                      color: "#D7E2EA",
                      fontWeight: 500,
                      lineHeight: 1.6,
                      maxWidth: 560,
                      fontSize: "clamp(1rem,2vw,1.3rem)",
                      textAlign: "center",
                    },
                  }),
                  T.jsx(Re, {
                    delay: 0.2,
                    y: 20,
                    children: T.jsx(tt.button, {
                      whileHover: { scale: 1.06 },
                      whileTap: { scale: 0.96 },
                      style: { ...a, padding: "14px 40px", fontSize: "0.9rem" },
                      children: n.contact,
                    }),
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      T.jsxs("section", {
        id: "services",
        style: {
          background: "radial-gradient(circle at 50% 0%, #fcfcfc 0%, #e0e0e0 100%)",
          borderRadius: "50px 50px 0 0",
          padding: "clamp(60px,8vw,120px) clamp(20px,5vw,60px)",
        },
        children: [
          T.jsx(Re, {
            delay: 0,
            y: 40,
            children: T.jsx("h2", {
              style: {
                fontWeight: 900,
                textTransform: "uppercase",
                textAlign: "center",
                color: "#0C0C0C",
                lineHeight: 1,
                letterSpacing: "-0.02em",
                marginBottom: "clamp(48px,8vw,100px)",
                fontSize: "clamp(3rem,12vw,140px)",
              },
              children: n.servicesTitle,
            }),
          }),
          T.jsx("div", {
            className: "services-list-container",
            style: { maxWidth: 900, margin: "0 auto" },
            children: n.services.map((u, c) =>
              T.jsxs(
                tt.div,
                {
                  onClick: () => setActiveService(activeService === c ? null : c),
                  initial: { opacity: 0, y: 50 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: !1, amount: 0.2 },
                  transition: {
                    delay: c * 0.1,
                    duration: 0.6,
                    ease: [0.25, 0.1, 0.25, 1],
                  },
                  className: `service-item-card ${activeService === c ? "active" : ""}`,
                  style: {
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "clamp(12px,3vw,40px)",
                    padding: "clamp(20px,3.5vw,44px) 0",
                    borderTop: "1px solid rgba(12,12,12,0.15)",
                    cursor: "pointer",
                    ...(c === n.services.length - 1
                      ? { borderBottom: "1px solid rgba(12,12,12,0.15)" }
                      : {}),
                  },
                  children: [
                    T.jsx("span", {
                      style: {
                        fontWeight: 900,
                        color: "#0C0C0C",
                        lineHeight: 1,
                        flexShrink: 0,
                        fontSize: "clamp(2.5rem,8vw,120px)",
                      },
                      children: u.n,
                    }),
                    T.jsxs("div", {
                      style: {
                        display: "flex",
                        flexDirection: "column",
                        gap: 8,
                        paddingTop: "clamp(4px,1vw,16px)",
                      },
                      children: [
                        T.jsx("span", {
                          style: {
                            fontWeight: 700,
                            textTransform: "uppercase",
                            color: "#0C0C0C",
                            fontSize: "clamp(1rem,2.2vw,2rem)",
                            letterSpacing: "0.02em",
                          },
                          children: u.name,
                        }),
                        T.jsx("p", {
                          style: {
                            fontWeight: 500,
                            lineHeight: 1.6,
                            color: "#0C0C0C",
                            opacity: 0.65,
                            fontSize: "clamp(0.85rem,1.5vw,1.15rem)",
                          },
                          children: u.desc,
                        }),
                      ],
                    }),
                  ],
                },
                u.n,
              ),
            ),
          }),
        ],
      }),
      T.jsxs("section", {
        id: "projects",
        style: {
          background: "#0C0C0C",
          borderRadius: "50px 50px 0 0",
          marginTop: 0,
          position: "relative",
          zIndex: 10,
          padding: "clamp(60px,8vw,120px) clamp(20px,5vw,60px) 80px",
        },
        children: [
          T.jsx("div", { style: { position: "absolute", top: "10%", left: "-10%", width: "600px", height: "600px", background: "radial-gradient(circle, rgba(124, 58, 237, 0.22) 0%, transparent 70%)", borderRadius: "50%", filter: "blur(100px)", pointerEvents: "none", zIndex: 0 } }),
          T.jsx("div", { style: { position: "absolute", top: "40%", right: "-10%", width: "500px", height: "500px", background: "radial-gradient(circle, rgba(13, 148, 136, 0.22) 0%, transparent 70%)", borderRadius: "50%", filter: "blur(90px)", pointerEvents: "none", zIndex: 0 } }),
          T.jsx("div", { style: { position: "absolute", bottom: "10%", left: "-5%", width: "550px", height: "550px", background: "radial-gradient(circle, rgba(234, 88, 12, 0.18) 0%, transparent 70%)", borderRadius: "50%", filter: "blur(95px)", pointerEvents: "none", zIndex: 0 } }),
          T.jsx("div", { style: { position: "absolute", top: "25%", left: "30%", width: "400px", height: "400px", background: "radial-gradient(circle, rgba(192, 38, 211, 0.15) 0%, transparent 70%)", borderRadius: "50%", filter: "blur(80px)", pointerEvents: "none", zIndex: 0 } }),
          T.jsx(Re, {
            delay: 0,
            y: 40,
            children: T.jsx("h2", {
              className: "hero-heading",
              style: {
                fontWeight: 900,
                textTransform: "uppercase",
                textAlign: "center",
                lineHeight: 1,
                letterSpacing: "-0.02em",
                marginBottom: "clamp(40px,6vw,80px)",
                fontSize: "clamp(3rem,12vw,140px)",
              },
              children: n.projectsTitle,
            }),
          }),
          T.jsx("div", {
            style: { display: "flex", flexDirection: "column" },
            children: n.projects.map((u, c) =>
              T.jsx(
                C2,
                { p: u, idx: c, total: n.projects.length, live: n.live },
                u.n,
              ),
            ),
          }),
        ],
      }),
      T.jsxs("section", { id: "contact",
        style: {
          background: "#0d1117",
          borderRadius: "50px 50px 0 0",
          marginTop: 0,
          position: "relative",
          zIndex: 20,
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "clamp(80px,10vw,120px) clamp(20px,5vw,60px)",
          overflow: "hidden",
          fontFamily: "'Kanit', sans-serif",
        },
        children: [
          T.jsx("div", { style: { position:"absolute",top:"-10%",left:"-5%",width:"500px",height:"500px",background:"radial-gradient(circle, rgba(120,80,200,0.55) 0%, transparent 70%)",borderRadius:"50%",filter:"blur(90px)",pointerEvents:"none",zIndex:0 }}),
          T.jsx("div", { style: { position:"absolute",bottom:"-5%",right:"-5%",width:"450px",height:"450px",background:"radial-gradient(circle, rgba(20,120,180,0.5) 0%, transparent 70%)",borderRadius:"50%",filter:"blur(80px)",pointerEvents:"none",zIndex:0 }}),
          T.jsx("div", { style: { position:"absolute",top:"40%",left:"40%",width:"350px",height:"350px",background:"radial-gradient(circle, rgba(0,180,200,0.25) 0%, transparent 70%)",borderRadius:"50%",filter:"blur(70px)",pointerEvents:"none",zIndex:0 }}),
          T.jsx("div", { style: { position:"absolute",bottom:"20%",left:"10%",width:"280px",height:"280px",background:"radial-gradient(circle, rgba(180,60,120,0.3) 0%, transparent 70%)",borderRadius:"50%",filter:"blur(60px)",pointerEvents:"none",zIndex:0 }}),
          T.jsx("div", {
            style: { zIndex:10,textAlign:"center",marginBottom:"clamp(40px,6vw,60px)",width:"100%",maxWidth:1060 },
            children: T.jsxs("div", {
              style: { display:"flex",flexDirection:"column",alignItems:"center",gap:12 },
              children: [
                T.jsx("span", { style: { fontSize:12,fontWeight:600,color:"rgba(160,180,255,0.8)",letterSpacing:"0.2em",textTransform:"uppercase" }, children: e === "uz" ? "Bog'lanish" : "Contact" }),
                T.jsx("h2", { style: { fontWeight:800,textAlign:"center",color:"#FFFFFF",lineHeight:1.1,letterSpacing:"-0.03em",margin:0,fontSize:"clamp(2.2rem, 5.5vw, 64px)" }, children: n.contactTitle }),
                T.jsx("p", { style: { color:"rgba(180,190,210,0.7)",fontSize:"clamp(0.9rem,1.1vw,1.05rem)",margin:0,maxWidth:480,textAlign:"center",lineHeight:1.6 }, children: n.contactDesc }),
              ],
            }),
          }),
          T.jsxs("div", {
            style: { display:"flex",flexDirection:"row",gap:"clamp(16px,2.5vw,28px)",width:"100%",maxWidth:1060,alignItems:"stretch",justifyContent:"center",flexWrap:"wrap",zIndex:10 },
            children: [
              T.jsxs("div", {
                style: { flex:"1 1 280px",maxWidth:340,background:"rgba(255,255,255,0.03)",backdropFilter:"blur(40px)",WebkitBackdropFilter:"blur(40px)",border:"1px solid rgba(255,255,255,0.1)",borderTop:"1px solid rgba(255,255,255,0.4)",borderLeft:"1px solid rgba(255,255,255,0.3)",boxShadow:"0 8px 32px 0 rgba(0,0,0,0.5)",borderRadius:20,padding:"clamp(24px,3.5vw,36px)",display:"flex",flexDirection:"column",gap:28 },
                children: [
                  T.jsxs("div", {
                    style: { display:"flex",flexDirection:"column",gap:6 },
                    children: [
                      T.jsx("h3", { style: { fontSize:"clamp(1rem,1.4vw,1.2rem)",fontWeight:700,color:"#fff",margin:0,letterSpacing:"-0.01em" }, children: n.contactInfoTitle }),
                      T.jsx("div", { style: { width:32,height:2,background:"rgba(120,80,220,0.8)",borderRadius:2 } }),
                    ],
                  }),
                  T.jsxs("div", {
                    style: { display:"flex",flexDirection:"column",gap:20 },
                    children: [
                      T.jsxs("a", { href:"tel:+998948897370", style: { display:"flex",alignItems:"center",gap:14,color:"rgba(220,225,240,0.85)",textDecoration:"none",fontSize:"clamp(0.82rem,1vw,0.95rem)",transition:"all 0.2s" },
                        onMouseEnter: (g) => { g.currentTarget.style.color="#fff"; },
                        onMouseLeave: (g) => { g.currentTarget.style.color="rgba(220,225,240,0.85)"; },
                        children: [
                          T.jsx("div", { style: { width:38,height:38,borderRadius:10,background:"rgba(255,255,255,0.08)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0 },
                            children: T.jsx("svg", { viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",style:{width:17,height:17},
                              children: T.jsx("path", { d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" }) }),
                          }),
                          T.jsxs("div", { style: { display:"flex",flexDirection:"column",gap:2 }, children: [
                            T.jsx("span", { style: { fontSize:10,color:"rgba(160,170,200,0.6)",textTransform:"uppercase",letterSpacing:"0.08em" }, children: e==="uz"?"Telefon":"Phone" }),
                            T.jsx("span", { children: "+998 94 889 73 70" }),
                          ]}),
                        ],
                      }),
                      T.jsxs("a", { href:"mailto:xamrullayevnizom7@gmail.com", style: { display:"flex",alignItems:"center",gap:14,color:"rgba(220,225,240,0.85)",textDecoration:"none",fontSize:"clamp(0.82rem,1vw,0.95rem)",transition:"all 0.2s" },
                        onMouseEnter: (g) => { g.currentTarget.style.color="#fff"; },
                        onMouseLeave: (g) => { g.currentTarget.style.color="rgba(220,225,240,0.85)"; },
                        children: [
                          T.jsx("div", { style: { width:38,height:38,borderRadius:10,background:"rgba(255,255,255,0.08)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0 },
                            children: T.jsxs("svg", { viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",style:{width:17,height:17},
                              children: [T.jsx("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}),T.jsx("polyline",{points:"22,6 12,13 2,6"})] }),
                          }),
                          T.jsxs("div", { style: { display:"flex",flexDirection:"column",gap:2 }, children: [
                            T.jsx("span", { style: { fontSize:10,color:"rgba(160,170,200,0.6)",textTransform:"uppercase",letterSpacing:"0.08em" }, children: "Email" }),
                            T.jsx("span", { style: { wordBreak:"break-all",fontSize:12 }, children: "xamrullayevnizom7@gmail.com" }),
                          ]}),
                        ],
                      }),
                      T.jsxs("a", { href:"https://t.me/nizom_viber",target:"_blank",rel:"noopener noreferrer", style: { display:"flex",alignItems:"center",gap:14,color:"rgba(220,225,240,0.85)",textDecoration:"none",fontSize:"clamp(0.82rem,1vw,0.95rem)",transition:"all 0.2s" },
                        onMouseEnter: (g) => { g.currentTarget.style.color="#fff"; },
                        onMouseLeave: (g) => { g.currentTarget.style.color="rgba(220,225,240,0.85)"; },
                        children: [
                          T.jsx("div", { style: { width:38,height:38,borderRadius:10,background:"rgba(255,255,255,0.08)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0 },
                            children: T.jsx("svg", { viewBox:"0 0 24 24",fill:"currentColor",style:{width:17,height:17},
                              children: T.jsx("path", { d:"M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" }) }),
                          }),
                          T.jsxs("div", { style: { display:"flex",flexDirection:"column",gap:2 }, children: [
                            T.jsx("span", { style: { fontSize:10,color:"rgba(160,170,200,0.6)",textTransform:"uppercase",letterSpacing:"0.08em" }, children: "Telegram" }),
                            T.jsx("span", { children: "@nizom_viber" }),
                          ]}),
                        ],
                      }),
                      T.jsxs("a", { href:"https://instagram.com/nizom_viber",target:"_blank",rel:"noopener noreferrer", style: { display:"flex",alignItems:"center",gap:14,color:"rgba(220,225,240,0.85)",textDecoration:"none",fontSize:"clamp(0.82rem,1vw,0.95rem)",transition:"all 0.2s" },
                        onMouseEnter: (g) => { g.currentTarget.style.color="#fff"; },
                        onMouseLeave: (g) => { g.currentTarget.style.color="rgba(220,225,240,0.85)"; },
                        children: [
                          T.jsx("div", { style: { width:38,height:38,borderRadius:10,background:"rgba(255,255,255,0.08)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0 },
                            children: T.jsxs("svg", { viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",style:{width:17,height:17},
                              children: [T.jsx("rect",{x:"2",y:"2",width:"20",height:"20",rx:"5",ry:"5"}),T.jsx("path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"}),T.jsx("line",{x1:"17.5",y1:"6.5",x2:"17.51",y2:"6.5"})] }),
                          }),
                          T.jsxs("div", { style: { display:"flex",flexDirection:"column",gap:2 }, children: [
                            T.jsx("span", { style: { fontSize:10,color:"rgba(160,170,200,0.6)",textTransform:"uppercase",letterSpacing:"0.08em" }, children: "Instagram" }),
                            T.jsx("span", { children: "@nizom_viber" }),
                          ]}),
                        ],
                      }),
                      T.jsxs("a", { href:"https://x.com/nizom_viber",target:"_blank",rel:"noopener noreferrer", style: { display:"flex",alignItems:"center",gap:14,color:"rgba(220,225,240,0.85)",textDecoration:"none",fontSize:"clamp(0.82rem,1vw,0.95rem)",transition:"all 0.2s" },
                        onMouseEnter: (g) => { g.currentTarget.style.color="#fff"; },
                        onMouseLeave: (g) => { g.currentTarget.style.color="rgba(220,225,240,0.85)"; },
                        children: [
                          T.jsx("div", { style: { width:38,height:38,borderRadius:10,background:"rgba(255,255,255,0.08)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0 },
                            children: T.jsx("svg", { viewBox:"0 0 24 24",fill:"currentColor",style:{width:15,height:15},
                              children: T.jsx("path", { d:"M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" }) }),
                          }),
                          T.jsxs("div", { style: { display:"flex",flexDirection:"column",gap:2 }, children: [
                            T.jsx("span", { style: { fontSize:10,color:"rgba(160,170,200,0.6)",textTransform:"uppercase",letterSpacing:"0.08em" }, children: "X (Twitter)" }),
                            T.jsx("span", { children: "@nizom_viber" }),
                          ]}),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              formSubmitted ?
              T.jsxs("div", {
                style: { flex:"1 1 380px",maxWidth:660,background:"rgba(255,255,255,0.03)",backdropFilter:"blur(40px)",WebkitBackdropFilter:"blur(40px)",border:"1px solid rgba(255,255,255,0.1)",borderTop:"1px solid rgba(255,255,255,0.4)",borderLeft:"1px solid rgba(255,255,255,0.3)",boxShadow:"0 8px 32px 0 rgba(0,0,0,0.5)",borderRadius:20,padding:"clamp(32px,5vw,56px)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:18,textAlign:"center" },
                children: [
                  T.jsx("div", { style: { width:64,height:64,borderRadius:"50%",background:"rgba(120,80,220,0.15)",border:"2px solid rgba(120,80,220,0.6)",display:"flex",alignItems:"center",justifyContent:"center",color:"rgba(160,130,255,1)",marginBottom:8 },
                    children: T.jsx("svg", { viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",style:{width:28,height:28}, children: T.jsx("polyline",{points:"20 6 9 17 4 12"}) }),
                  }),
                  T.jsx("h3", { style: { fontSize:22,fontWeight:700,color:"#fff",margin:0 }, children: e==="uz"?"Rahmat! 🎉":"Thank you! 🎉" }),
                  T.jsx("p", { style: { color:"rgba(190,200,220,0.8)",fontSize:15,margin:0,lineHeight:1.6,maxWidth:360 }, children: n.successMessage }),
                  T.jsx("button", { onClick: ()=>setFormSubmitted(false), style: { marginTop:8,padding:"10px 28px",background:"rgba(255,255,255,0.07)",border:"1px solid rgba(255,255,255,0.15)",color:"#fff",borderRadius:50,cursor:"pointer",fontWeight:500,fontSize:13,fontFamily:"inherit",transition:"all 0.2s" },
                    onMouseEnter: (g) => { g.currentTarget.style.background="rgba(120,80,220,0.3)"; g.currentTarget.style.borderColor="rgba(160,130,255,0.5)"; },
                    onMouseLeave: (g) => { g.currentTarget.style.background="rgba(255,255,255,0.07)"; g.currentTarget.style.borderColor="rgba(255,255,255,0.15)"; },
                    children: e==="uz"?"← Orqaga":"← Back",
                  }),
                ],
              })
              :
              T.jsxs("form", {
                onSubmit: handleFormSubmit,
                style: { flex:"1 1 380px",maxWidth:660,background:"rgba(255,255,255,0.03)",backdropFilter:"blur(40px)",WebkitBackdropFilter:"blur(40px)",border:"1px solid rgba(255,255,255,0.1)",borderTop:"1px solid rgba(255,255,255,0.4)",borderLeft:"1px solid rgba(255,255,255,0.3)",boxShadow:"0 8px 32px 0 rgba(0,0,0,0.5)",borderRadius:20,padding:"clamp(24px,3.5vw,40px)",display:"flex",flexDirection:"column",gap:16 },
                children: [
                  T.jsxs("div", { style: { display:"flex",flexDirection:"column",gap:7 }, children: [
                    T.jsx("label", { style: { fontSize:11,fontWeight:600,color:"rgba(180,190,220,0.75)",letterSpacing:"0.08em",textTransform:"uppercase" }, children: n.firstNameLabel }),
                    T.jsx("input", { type:"text",required:true, placeholder: e==="uz"?"Ismingizni kiriting":"Enter your name", value:formData.name, onChange:(g)=>setFormData({...formData,name:g.target.value}),
                      style:{background:"rgba(255,255,255,0.02)",border:"1px solid rgba(255,255,255,0.2)",backdropFilter:"blur(10px)",borderRadius:10,padding:"12px 16px",color:"#fff",fontSize:14,outline:"none",fontFamily:"inherit",transition:"all 0.2s",width:"100%",boxSizing:"border-box"},
                      onFocus:(g)=>{g.currentTarget.style.borderColor="rgba(160,130,255,0.6)";g.currentTarget.style.background="rgba(255,255,255,0.09)";g.currentTarget.style.boxShadow="0 0 0 3px rgba(120,80,220,0.12)";},
                      onBlur:(g)=>{g.currentTarget.style.borderColor="rgba(255,255,255,0.12)";g.currentTarget.style.background="rgba(255,255,255,0.06)";g.currentTarget.style.boxShadow="none";},
                    }),
                  ]}),
                  T.jsxs("div", { style: { display:"flex",gap:14,flexWrap:"wrap" }, children: [
                    T.jsxs("div", { style: { display:"flex",flexDirection:"column",gap:7,flex:"1 1 160px" }, children: [
                      T.jsx("label", { style: { fontSize:11,fontWeight:600,color:"rgba(180,190,220,0.75)",letterSpacing:"0.08em",textTransform:"uppercase" }, children: n.emailLabel }),
                      T.jsx("input", { type:"email",required:false, placeholder:"example@gmail.com", value:formData.email, onChange:(g)=>setFormData({...formData,email:g.target.value}),
                        style:{background:"rgba(255,255,255,0.02)",border:"1px solid rgba(255,255,255,0.2)",backdropFilter:"blur(10px)",borderRadius:10,padding:"12px 16px",color:"#fff",fontSize:14,outline:"none",fontFamily:"inherit",transition:"all 0.2s",width:"100%",boxSizing:"border-box"},
                        onFocus:(g)=>{g.currentTarget.style.borderColor="rgba(160,130,255,0.6)";g.currentTarget.style.background="rgba(255,255,255,0.09)";g.currentTarget.style.boxShadow="0 0 0 3px rgba(120,80,220,0.12)";},
                        onBlur:(g)=>{g.currentTarget.style.borderColor="rgba(255,255,255,0.12)";g.currentTarget.style.background="rgba(255,255,255,0.06)";g.currentTarget.style.boxShadow="none";},
                      }),
                    ]}),
                    T.jsxs("div", { style: { display:"flex",flexDirection:"column",gap:7,flex:"1 1 160px" }, children: [
                      T.jsx("label", { style: { fontSize:11,fontWeight:600,color:"rgba(180,190,220,0.75)",letterSpacing:"0.08em",textTransform:"uppercase" }, children: n.phoneLabel }),
                      T.jsx("input", { type:"tel",required:true, placeholder: e==="uz"?"+998 90 000 00 00":"+1 (000) 000-0000", value:formData.phone, onChange:(g)=>setFormData({...formData,phone:g.target.value}),
                        style:{background:"rgba(255,255,255,0.02)",border:"1px solid rgba(255,255,255,0.2)",backdropFilter:"blur(10px)",borderRadius:10,padding:"12px 16px",color:"#fff",fontSize:14,outline:"none",fontFamily:"inherit",transition:"all 0.2s",width:"100%",boxSizing:"border-box"},
                        onFocus:(g)=>{g.currentTarget.style.borderColor="rgba(160,130,255,0.6)";g.currentTarget.style.background="rgba(255,255,255,0.09)";g.currentTarget.style.boxShadow="0 0 0 3px rgba(120,80,220,0.12)";},
                        onBlur:(g)=>{g.currentTarget.style.borderColor="rgba(255,255,255,0.12)";g.currentTarget.style.background="rgba(255,255,255,0.06)";g.currentTarget.style.boxShadow="none";},
                      }),
                    ]}),
                  ]}),
                  T.jsxs("div", { style: { display:"flex",flexDirection:"column",gap:7 }, children: [
                    T.jsx("label", { style: { fontSize:11,fontWeight:600,color:"rgba(180,190,220,0.75)",letterSpacing:"0.08em",textTransform:"uppercase" }, children: n.messageLabel }),
                    T.jsx("textarea", { required:true,rows:5, placeholder:n.messagePlaceholder, value:formData.message, onChange:(g)=>setFormData({...formData,message:g.target.value}),
                      style:{background:"rgba(255,255,255,0.02)",border:"1px solid rgba(255,255,255,0.2)",backdropFilter:"blur(10px)",borderRadius:10,padding:"12px 16px",color:"#fff",fontSize:14,outline:"none",fontFamily:"inherit",transition:"all 0.2s",resize:"none",width:"100%",boxSizing:"border-box"},
                      onFocus:(g)=>{g.currentTarget.style.borderColor="rgba(160,130,255,0.6)";g.currentTarget.style.background="rgba(255,255,255,0.09)";g.currentTarget.style.boxShadow="0 0 0 3px rgba(120,80,220,0.12)";},
                      onBlur:(g)=>{g.currentTarget.style.borderColor="rgba(255,255,255,0.12)";g.currentTarget.style.background="rgba(255,255,255,0.06)";g.currentTarget.style.boxShadow="none";},
                    }),
                  ]}),
                  T.jsxs("div", { style: { display:"flex",justifyContent:"space-between",alignItems:"center",gap:12,flexWrap:"wrap",marginTop:4 }, children: [
                    T.jsx(tt.button, { type:"submit",disabled:sending,
                      whileHover: sending ? {} : { scale:1.03 },
                      whileTap: sending ? {} : { scale:0.97 },
                      style: { background: sending ? "rgba(100,80,180,0.4)" : "linear-gradient(135deg, rgba(120,80,220,0.9) 0%, rgba(80,120,220,0.9) 100%)", border:"1px solid rgba(160,130,255,0.4)",color:"#fff",borderRadius:50,padding:"12px 32px",fontSize:12,fontWeight:700,letterSpacing:"0.1em",cursor: sending ? "not-allowed" : "pointer",fontFamily:"inherit",textTransform:"uppercase",transition:"all 0.25s",opacity: sending ? 0.7 : 1,boxShadow: sending ? "none" : "0 4px 20px rgba(120,80,220,0.4)" },
                      children: sending ? n.sendingText : n.submitBtn,
                    }),
                    T.jsx("span", { style: { fontSize:11,color:"rgba(180,190,220,0.4)",fontStyle:"italic" }, children: n.requiredFields }),
                  ]}),
                ],
              }),
            ],
          }),
        ],
      }),
      T.jsxs("footer", {
        style: {
          background: "#0C0C0C",
          padding: "32px 40px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 16,
        },
        children: [
          T.jsx("span", {
            className: "hero-heading",
            style: {
              fontWeight: 900,
              textTransform: "uppercase",
              fontSize: "clamp(1.5rem,3vw,2.5rem)",
            },
            children: "Nizom",
          }),
          T.jsx("span", {
            style: {
              color: "rgba(215,226,234,0.35)",
              fontSize: 13,
              fontWeight: 300,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
            },
            children: "© 2026 — Vibe Coder",
          }),
        ],
      }),
    ],
  });
}
Zo.createRoot(document.getElementById("root")).render(
  T.jsx(Id.StrictMode, { children: T.jsx(P2, {}) }),
);
