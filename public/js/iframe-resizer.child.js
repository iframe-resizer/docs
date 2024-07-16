/*!
 *  @preserve
 *
 *  @module     iframe-resizer/child 5.1.5 (iife)
 *
 *  @license    GPL-3.0 for non-commercial use only.
 *              For commercial use, you must purchase a license from
 *              https://iframe-resizer.com/pricing
 *
 *  @desciption Keep same and cross domain iFrames sized to their content
 *
 *  @author     David J. Bradshaw <info@iframe-resizer.com>
 *
 *  @see        {@link https://iframe-resizer.com}
 *
 *  @copyright  (c) 2013 - 2024, David J. Bradshaw. All rights reserved.
 */

!(function () {
  "use strict";
  const e = "5.1.5",
    t = 10,
    n = "data-iframe-size";
  const o = (e, t, n, o) => e.addEventListener(t, n, o || !1),
    i = (e, t, n) => e.removeEventListener(t, n, !1),
    r = [
      "<iy><yi>Puchspk Spjluzl Rlf</><iy><iy>",
      "<iy><yi>Tpzzpun Spjluzl Rlf</><iy><iy>",
      "Aopz spiyhyf pz hchpshisl dpao ivao Jvttlyjphs huk Vwlu-Zvbyjl spjluzlz.<iy><iy><i>Jvttlyjphs Spjluzl</><iy>Mvy jvttlyjphs bzl, <p>pmyhtl-ylzpgly</> ylxbpylz h svd jvza vul aptl spjluzl mll. Mvy tvyl pumvythapvu cpzpa <b>oaawz://pmyhtl-ylzpgly.jvt/wypjpun</>.<iy><iy><i>Vwlu Zvbyjl Spjluzl</><iy>Pm fvb hyl bzpun aopz spiyhyf pu h uvu-jvttlyjphs vwlu zvbyjl wyvqlja aolu fvb jhu bzl pa mvy myll bukly aol alytz vm aol NWS C3 Spjluzl. Av jvumpyt fvb hjjlwa aolzl alytz, wslhzl zla aol <i>spjluzl</> rlf pu <p>pmyhtl-ylzpgly</> vwapvuz av <i>NWSc3</>.<iy><iy>Mvy tvyl pumvythapvu wslhzl zll: <b>oaawz://pmyhtl-ylzpgly.jvt/nws</>",
      "<i>NWSc3 Spjluzl Clyzpvu</><iy><iy>Aopz clyzpvu vm <p>pmyhtl-ylzpgly</> pz ilpun bzlk bukly aol alytz vm aol <i>NWS C3</> spjluzl. Aopz spjluzl hssvdz fvb av bzl <p>pmyhtl-ylzpgly</> pu Vwlu Zvbyjl wyvqljaz, iba pa ylxbpylz fvby wyvqlja av il wbispj, wyvcpkl haaypibapvu huk il spjluzlk bukly clyzpvu 3 vy shaly vm aol NUB Nlulyhs Wbispj Spjluzl.<iy><iy>Pm fvb hyl bzpun aopz spiyhyf pu h uvu-vwlu zvbyjl wyvqlja vy dlizpal, fvb dpss ullk av wbyjohzl h svd jvza vul aptl jvttlyjphs spjluzl.<iy><iy>Mvy tvyl pumvythapvu cpzpa <b>oaawz://pmyhtl-ylzpgly.jvt/wypjpun</>.",
    ];
  Object.fromEntries(
    [
      "2cgs7fdf4xb",
      "1c9ctcccr4z",
      "1q2pc4eebgb",
      "ueokt0969w",
      "w2zxchhgqz",
      "1umuxblj2e5",
    ].map((e, t) => [e, Math.max(0, t - 1)])
  );
  const a = (e) =>
      ((e) =>
        e.replaceAll(/[A-Za-z]/g, (e) =>
          String.fromCodePoint(
            (e <= "Z" ? 90 : 122) >= (e = e.codePointAt(0) + 19) ? e : e - 26
          )
        ))(r[e]),
    l = {
      contentVisibilityAuto: !0,
      opacityProperty: !0,
      visibilityProperty: !0,
    },
    c = {
      height: () => (
        de("Custom height calculation function not defined"), He.auto()
      ),
      width: () => (
        de("Custom width calculation function not defined"), Ue.auto()
      ),
    },
    s = {
      bodyOffset: 1,
      bodyScroll: 1,
      offset: 1,
      documentElementOffset: 1,
      documentElementScroll: 1,
      documentElementBoundingClientRect: 1,
      max: 1,
      min: 1,
      grow: 1,
      lowestElement: 1,
    },
    u = 128,
    d = {},
    m = "checkVisibility" in window,
    f = "auto",
    p = "[iFrameSizer]",
    h = p.length,
    y = { max: 1, min: 1, bodyScroll: 1, documentElementScroll: 1 },
    g = ["body"],
    v = "scroll";
  let b,
    w,
    z = !0,
    S = "",
    $ = 0,
    j = "",
    E = null,
    P = "",
    O = !0,
    M = !1,
    A = null,
    C = !0,
    T = !1,
    k = 1,
    I = f,
    x = !0,
    N = "",
    R = {},
    B = !0,
    q = !1,
    L = 0,
    W = !1,
    D = "",
    H = "child",
    U = null,
    F = !1,
    V = "",
    J = window.parent,
    Z = "*",
    Q = 0,
    X = !1,
    Y = "",
    G = 1,
    K = v,
    _ = window,
    ee = () => {
      de("onMessage function not defined");
    },
    te = () => {},
    ne = null,
    oe = null;
  const ie = (e) => "" != `${e}` && void 0 !== e,
    re = new WeakSet(),
    ae = (e) => "object" == typeof e && re.add(e);
  function le(e) {
    switch (!0) {
      case !ie(e):
        return "";
      case ie(e.id):
        return `${e.nodeName.toUpperCase()}#${e.id}`;
      case ie(e.name):
        return `${e.nodeName.toUpperCase()} (${e.name})`;
      default:
        return (
          e.nodeName.toUpperCase() + (ie(e.className) ? `.${e.className}` : "")
        );
    }
  }
  function ce(e, t = 30) {
    const n = e?.outerHTML?.toString();
    return n
      ? n.length < t
        ? n
        : `${n.slice(0, t).replaceAll("\n", " ")}...`
      : e;
  }
  const se = (...e) => [`[iframe-resizer][${D}]`, ...e].join(" "),
    ue = (...e) => console?.info(se(...e)),
    de = (...e) => console?.warn(se(...e)),
    me = (...e) =>
      console?.warn(
        (
          (e) => (t) =>
            window.chrome
              ? e(
                  t
                    .replaceAll("<br>", "\n")
                    .replaceAll("<rb>", "[31;1m")
                    .replaceAll("</>", "[m")
                    .replaceAll("<b>", "[1m")
                    .replaceAll("<i>", "[3m")
                    .replaceAll("<u>", "[4m")
                )
              : e(t.replaceAll("<br>", "\n").replaceAll(/<[/a-z]+>/gi, ""))
        )(se)(...e)
      ),
    fe = (e) => me(e);
  function pe() {
    !(function () {
      try {
        F = "iframeParentListener" in window.parent;
      } catch (e) {}
    })(),
      (function () {
        const e = (e) => "true" === e,
          t = N.slice(h).split(":");
        (D = t[0]),
          ($ = void 0 === t[1] ? $ : Number(t[1])),
          (M = void 0 === t[2] ? M : e(t[2])),
          (q = void 0 === t[3] ? q : e(t[3])),
          (z = void 0 === t[6] ? z : e(t[6])),
          (j = t[7]),
          (I = void 0 === t[8] ? I : t[8]),
          (S = t[9]),
          (P = t[10]),
          (Q = void 0 === t[11] ? Q : Number(t[11])),
          (R.enable = void 0 !== t[12] && e(t[12])),
          (H = void 0 === t[13] ? H : t[13]),
          (K = void 0 === t[14] ? K : t[14]),
          (W = void 0 === t[15] ? W : e(t[15])),
          (b = void 0 === t[16] ? b : Number(t[16])),
          (w = void 0 === t[17] ? w : Number(t[17])),
          (O = void 0 === t[18] ? O : e(t[18])),
          t[19],
          (Y = t[20] || Y),
          (L = void 0 === t[21] ? L : Number(t[21]));
      })(),
      (function () {
        function e() {
          const e = window.iframeResizer || window.iFrameResizer;
          (ee = e?.onMessage || ee),
            (te = e?.onReady || te),
            "number" == typeof e?.offset &&
              (O && (b = e?.offset), M && (w = e?.offset)),
            Object.prototype.hasOwnProperty.call(e, "sizeSelector") &&
              (V = e.sizeSelector),
            (Z = e?.targetOrigin || Z),
            (I = e?.heightCalculationMethod || I),
            (K = e?.widthCalculationMethod || K);
        }
        function t(e, t) {
          return "function" == typeof e && ((c[t] = e), (e = "custom")), e;
        }
        if (1 === L) return;
        "iFrameResizer" in window &&
          Object === window.iFrameResizer.constructor &&
          (e(), (I = t(I, "height")), (K = t(K, "width")));
      })(),
      (function () {
        void 0 === j && (j = `${$}px`);
        he(
          "margin",
          (function (e, t) {
            t.includes("-") &&
              (de(`Negative CSS value ignored for ${e}`), (t = ""));
            return t;
          })("margin", j)
        );
      })(),
      he("background", S),
      he("padding", P),
      (function () {
        const e = document.createElement("div");
        (e.style.clear = "both"),
          (e.style.display = "block"),
          (e.style.height = "0"),
          document.body.append(e);
      })(),
      (function () {
        const e = (e) => e.style.setProperty("height", "auto", "important");
        e(document.documentElement), e(document.body);
      })(),
      ye(),
      L < 0
        ? fe(`${a(L + 2)}${a(2)}`)
        : Y.codePointAt(0) > 4 || (L < 2 && fe(a(3))),
      (function () {
        if (!Y || "" === Y || "false" === Y)
          return void me(
            "<rb>Legacy version detected on parent page</>\n\nDetected legacy version of parent page script. It is recommended to update the parent page to use <b>@iframe-resizer/parent</>.\n\nSee <u>https://iframe-resizer.com/setup/</> for more details.\n"
          );
        Y !== e &&
          me(
            `<rb>Version mismatch</>\n\nThe parent and child pages are running different versions of <i>iframe resizer</>.\n\nParent page: ${Y} - Child page: ${e}.\n`
          );
      })(),
      ze(),
      Se(),
      (function () {
        let e = !1;
        const t = (t) =>
          document.querySelectorAll(`[${t}]`).forEach((o) => {
            (e = !0), o.removeAttribute(t), o.setAttribute(n, null);
          });
        t("data-iframe-height"),
          t("data-iframe-width"),
          e &&
            me(
              "<rb>Deprecated Attributes</>\n          \nThe <b>data-iframe-height</> and <b>data-iframe-width</> attributes have been deprecated and replaced with the single <b>data-iframe-size</> attribute. Use of the old attributes will be removed in a future version of <i>iframe-resizer</>."
            );
      })(),
      document.querySelectorAll(`[${n}]`).length > 0 &&
        ("auto" === I && (I = "autoOverflow"),
        "auto" === K && (K = "autoOverflow")),
      be(),
      (function () {
        if (1 === L) return;
        (_.parentIframe = Object.freeze({
          autoResize: (e) => (
            !0 === e && !1 === z
              ? ((z = !0), $e())
              : !1 === e &&
                !0 === z &&
                ((z = !1), ve("remove"), U?.disconnect(), E?.disconnect()),
            Xe(0, 0, "autoResize", JSON.stringify(z)),
            z
          ),
          close() {
            Xe(0, 0, "close");
          },
          getId: () => D,
          getPageInfo(e) {
            if ("function" == typeof e)
              return (
                (ne = e),
                Xe(0, 0, "pageInfo"),
                void me(
                  "<rb>Deprecated Method</>\n          \nThe <b>getPageInfo()</> method has been deprecated and replaced with  <b>getParentProps()</>. Use of this method will be removed in a future version of <i>iframe-resizer</>.\n"
                )
              );
            (ne = null), Xe(0, 0, "pageInfoStop");
          },
          getParentProps(e) {
            if ("function" != typeof e)
              throw new TypeError(
                "parentIFrame.getParentProps(callback) callback not a function"
              );
            return (
              (oe = e),
              Xe(0, 0, "parentInfo"),
              () => {
                (oe = null), Xe(0, 0, "parentInfoStop");
              }
            );
          },
          getParentProperties(e) {
            me(
              "<rb>Renamed Method</>\n          \nThe <b>getParentProperties()</> method has been renamed <b>getParentProps()</>. Use of the old name will be removed in a future version of <i>iframe-resizer</>.\n"
            ),
              this.getParentProps(e);
          },
          moveToAnchor(e) {
            R.findTarget(e);
          },
          reset() {
            Qe();
          },
          scrollBy(e, t) {
            Xe(t, e, "scrollBy");
          },
          scrollTo(e, t) {
            Xe(t, e, "scrollTo");
          },
          scrollToOffset(e, t) {
            Xe(t, e, "scrollToOffset");
          },
          sendMessage(e, t) {
            Xe(0, 0, "message", JSON.stringify(e), t);
          },
          setHeightCalculationMethod(e) {
            (I = e), ze();
          },
          setWidthCalculationMethod(e) {
            (K = e), Se();
          },
          setTargetOrigin(e) {
            Z = e;
          },
          resize(e, t) {
            Ve(
              "size",
              `parentIFrame.size(${`${e || ""}${t ? `,${t}` : ""}`})`,
              e,
              t
            );
          },
          size(e, t) {
            me(
              "<rb>Deprecated Method</>\n          \nThe <b>size()</> method has been deprecated and replaced with  <b>resize()</>. Use of this method will be removed in a future version of <i>iframe-resizer</>.\n"
            ),
              this.resize(e, t);
          },
        })),
          (_.parentIFrame = _.parentIframe);
      })(),
      (function () {
        if (!0 !== W) return;
        function e(e) {
          Xe(0, 0, e.type, `${e.screenY}:${e.screenX}`);
        }
        function t(t, n) {
          o(window.document, t, e);
        }
        t("mouseenter"), t("mouseleave");
      })(),
      $e(),
      (R = (function () {
        const e = () => ({
          x: document.documentElement.scrollLeft,
          y: document.documentElement.scrollTop,
        });
        function n(n) {
          const o = n.getBoundingClientRect(),
            i = e();
          return {
            x: parseInt(o.left, t) + parseInt(i.x, t),
            y: parseInt(o.top, t) + parseInt(i.y, t),
          };
        }
        function i(e) {
          function t(e) {
            const t = n(e);
            Xe(t.y, t.x, "scrollToOffset");
          }
          const o = e.split("#")[1] || e,
            i = decodeURIComponent(o),
            r = document.getElementById(i) || document.getElementsByName(i)[0];
          void 0 === r ? Xe(0, 0, "inPageLink", `#${o}`) : t(r);
        }
        function r() {
          const { hash: e, href: t } = window.location;
          "" !== e && "#" !== e && i(t);
        }
        function a() {
          function e(e) {
            function t(e) {
              e.preventDefault(), i(this.getAttribute("href"));
            }
            "#" !== e.getAttribute("href") && o(e, "click", t);
          }
          document.querySelectorAll('a[href^="#"]').forEach(e);
        }
        function l() {
          o(window, "hashchange", r);
        }
        function c() {
          setTimeout(r, u);
        }
        function s() {
          a(), l(), c();
        }
        R.enable &&
          (1 === L
            ? me(
                "In page linking requires a Professional or Business license. Please see https://iframe-resizer.com/pricing for more details."
              )
            : s());
        return { findTarget: i };
      })()),
      ae(document.documentElement),
      ae(document.body),
      Ve("init", "Init message from host page", void 0, void 0, e),
      document.title &&
        "" !== document.title &&
        Xe(0, 0, "title", document.title),
      te(),
      (B = !1);
  }
  function he(e, t) {
    void 0 !== t &&
      "" !== t &&
      "null" !== t &&
      document.body.style.setProperty(e, t);
  }
  function ye() {
    "" !== V &&
      document.querySelectorAll(V).forEach((e) => {
        e.dataset.iframeSize = !0;
      });
  }
  function ge(e) {
    ({
      add(t) {
        function n() {
          Ve(e.eventName, e.eventType);
        }
        (d[t] = n), o(window, t, n, { passive: !0 });
      },
      remove(e) {
        const t = d[e];
        delete d[e], i(window, e, t);
      },
    })[e.method](e.eventName);
  }
  function ve(e) {
    ge({ method: e, eventType: "After Print", eventName: "afterprint" }),
      ge({ method: e, eventType: "Before Print", eventName: "beforeprint" }),
      ge({
        method: e,
        eventType: "Ready State Change",
        eventName: "readystatechange",
      });
  }
  function be() {
    const e = document.querySelectorAll(`[${n}]`);
    (T = e.length > 0), (A = T ? e : Re(document)());
  }
  function we(e, t, n, o) {
    return (
      t !== e &&
        (e in n ||
          (de(`${e} is not a valid option for ${o}CalculationMethod.`),
          (e = t)),
        e in s &&
          me(
            `<rb>Deprecated ${o}CalculationMethod (${e})</>\n\nThis version of <i>iframe-resizer</> can auto detect the most suitable ${o} calculation method. It is recommended that you remove this option.`
          )),
      e
    );
  }
  function ze() {
    I = we(I, f, He, "height");
  }
  function Se() {
    K = we(K, v, Ue, "width");
  }
  function $e() {
    !0 === z &&
      (ve("add"),
      (E = (function () {
        function e(e) {
          e.forEach(Te), ye(), be();
        }
        function t() {
          const t = new window.MutationObserver(e),
            n = document.querySelector("body"),
            o = {
              attributes: !1,
              attributeOldValue: !1,
              characterData: !1,
              characterDataOldValue: !1,
              childList: !0,
              subtree: !0,
            };
          return t.observe(n, o), t;
        }
        const n = t();
        return {
          disconnect() {
            n.disconnect();
          },
        };
      })()),
      (U = new ResizeObserver(Ee)),
      Ce(window.document));
  }
  let je;
  function Ee(e) {
    if (!Array.isArray(e) || 0 === e.length) return;
    const t = e[0].target;
    (je = () => Ve("resizeObserver", `Resize Observed: ${le(t)}`)),
      setTimeout(() => {
        je && je(), (je = void 0);
      }, 0);
  }
  const Pe = (e) => {
      const t = getComputedStyle(e);
      return "" !== t?.position && "static" !== t?.position;
    },
    Oe = () => [...Re(document)()].filter(Pe),
    Me = new WeakSet();
  function Ae(e) {
    e && (Me.has(e) || (U.observe(e), Me.add(e)));
  }
  function Ce(e) {
    [...Oe(), ...g.flatMap((t) => e.querySelector(t))].forEach(Ae);
  }
  function Te(e) {
    "childList" === e.type && Ce(e.target);
  }
  let ke = 4,
    Ie = 4;
  function xe(e) {
    const t = (n = e).charAt(0).toUpperCase() + n.slice(1);
    var n;
    let o = 0,
      i = A.length,
      r = document.documentElement,
      a = T ? 0 : document.documentElement.getBoundingClientRect().bottom,
      c = performance.now();
    var s;
    A.forEach((t) => {
      T || !m || t.checkVisibility(l)
        ? ((o =
            t.getBoundingClientRect()[e] +
            parseFloat(getComputedStyle(t).getPropertyValue(`margin-${e}`))),
          o > a && ((a = o), (r = t)))
        : (i -= 1);
    }),
      (c = performance.now() - c),
      i > 1 &&
        ((s = r),
        re.has(s) ||
          (ae(s), ue(`\nHeight calculated from: ${le(s)} (${ce(s)})`)));
    const u = `\nParsed ${i} element${1 === i ? "" : "s"} in ${c.toPrecision(
      3
    )}ms\n${t} ${
      T ? "tagged " : ""
    }element found at: ${a}px\nPosition calculated from HTML element: ${le(
      r
    )} (${ce(r, 100)})`;
    return (
      c < 4 ||
        i < 99 ||
        T ||
        B ||
        (ke < c &&
          ke < Ie &&
          ((ke = 1.2 * c),
          me(
            `<rb>Performance Warning</>\n\nCalculating the page size took an excessive amount of time. To improve performance add the <b>data-iframe-size</> attribute to the ${e} most element on the page.\n${u}`
          ))),
      (Ie = c),
      a
    );
  }
  const Ne = (e) => [
      e.bodyOffset(),
      e.bodyScroll(),
      e.documentElementOffset(),
      e.documentElementScroll(),
      e.documentElementBoundingClientRect(),
    ],
    Re = (e) => () =>
      e.querySelectorAll(
        "* :not(head):not(meta):not(base):not(title):not(script):not(link):not(style):not(map):not(area):not(option):not(optgroup):not(template):not(track):not(wbr):not(nobr)"
      );
  let Be = !1;
  function qe({
    ceilBoundingSize: e,
    dimension: t,
    getDimension: n,
    isHeight: o,
    scrollSize: i,
  }) {
    if (!Be) return (Be = !0), n.taggedElement();
    const r = o ? "bottom" : "right";
    return (
      me(
        `<rb>Detected content overflowing html element</>\n    \nThis causes <i>iframe-resizer</> to fall back to checking the position of every element on the page in order to calculate the correct dimensions of the iframe. Inspecting the size, ${r} margin, and position of every visible HTML element will have a performance impact on more complex pages. \n\nTo fix this issue, and remove this warning, you can either ensure the content of the page does not overflow the <b><HTML></> element or alternatively you can add the attribute <b>data-iframe-size</> to the elements on the page that you want <i>iframe-resizer</> to use when calculating the dimensions of the iframe. \n  \nWhen present the ${r} margin of the ${
          o ? "lowest" : "right most"
        } element with a <b>data-iframe-size</> attribute will be used to set the ${t} of the iframe.\n\nMore info: https://iframe-resizer.com/performance.\n\n(Page size: ${i} > document size: ${e})`
      ),
      o ? (I = "autoOverflow") : (K = "autoOverflow"),
      n.taggedElement()
    );
  }
  const Le = { height: 0, width: 0 },
    We = { height: 0, width: 0 };
  function De(e, t) {
    function n() {
      return (We[i] = r), (Le[i] = c), r;
    }
    const o = e === He,
      i = o ? "height" : "width",
      r = e.documentElementBoundingClientRect(),
      a = Math.ceil(r),
      l = Math.floor(r),
      c = ((e) => e.documentElementScroll() + Math.max(0, e.getOffset()))(e);
    switch (!0) {
      case !e.enabled():
        return c;
      case !t && 0 === We[i] && 0 === Le[i]:
        if (e.taggedElement(!0) <= a) return n();
        break;
      case X && r === We[i] && c === Le[i]:
        return Math.max(r, c);
      case 0 === r:
        return c;
      case !t && r !== We[i] && c <= Le[i]:
        return n();
      case !o:
        return t
          ? e.taggedElement()
          : qe({
              ceilBoundingSize: a,
              dimension: i,
              getDimension: e,
              isHeight: o,
              scrollSize: c,
            });
      case !t && r < We[i]:
      case c === l || c === a:
      case r > c:
        return n();
      case !t:
        return qe({
          ceilBoundingSize: a,
          dimension: i,
          getDimension: e,
          isHeight: o,
          scrollSize: c,
        });
    }
    return Math.max(e.taggedElement(), n());
  }
  const He = {
      enabled: () => O,
      getOffset: () => b,
      type: "height",
      auto: () => De(He, !1),
      autoOverflow: () => De(He, !0),
      bodyOffset: () => {
        const { body: e } = document,
          n = getComputedStyle(e);
        return (
          e.offsetHeight +
          parseInt(n.marginTop, t) +
          parseInt(n.marginBottom, t)
        );
      },
      bodyScroll: () => document.body.scrollHeight,
      offset: () => He.bodyOffset(),
      custom: () => c.height(),
      documentElementOffset: () => document.documentElement.offsetHeight,
      documentElementScroll: () => document.documentElement.scrollHeight,
      documentElementBoundingClientRect: () =>
        document.documentElement.getBoundingClientRect().bottom,
      max: () => Math.max(...Ne(He)),
      min: () => Math.min(...Ne(He)),
      grow: () => He.max(),
      lowestElement: () => xe("bottom"),
      taggedElement: () => xe("bottom"),
    },
    Ue = {
      enabled: () => M,
      getOffset: () => w,
      type: "width",
      auto: () => De(Ue, !1),
      autoOverflow: () => De(Ue, !0),
      bodyScroll: () => document.body.scrollWidth,
      bodyOffset: () => document.body.offsetWidth,
      custom: () => c.width(),
      documentElementScroll: () => document.documentElement.scrollWidth,
      documentElementOffset: () => document.documentElement.offsetWidth,
      documentElementBoundingClientRect: () =>
        document.documentElement.getBoundingClientRect().right,
      max: () => Math.max(...Ne(Ue)),
      min: () => Math.min(...Ne(Ue)),
      rightMostElement: () => xe("right"),
      scroll: () => Math.max(Ue.bodyScroll(), Ue.documentElementScroll()),
      taggedElement: () => xe("right"),
    };
  function Fe(e, t, n, o, i) {
    let r, a;
    !(function () {
      const e = (e, t) => !(Math.abs(e - t) <= Q);
      return (
        (r = void 0 === n ? He[I]() : n),
        (a = void 0 === o ? Ue[K]() : o),
        (O && e(k, r)) || (M && e(G, a))
      );
    })() && "init" !== e
      ? !(e in { init: 1, size: 1 }) && ((O && I in y) || (M && K in y)) && Qe()
      : (Je(), (k = r), (G = a), Xe(k, G, e, i));
  }
  function Ve(e, t, n, o, i) {
    document.hidden || Fe(e, 0, n, o, i);
  }
  function Je() {
    X ||
      ((X = !0),
      requestAnimationFrame(() => {
        X = !1;
      }));
  }
  function Ze(e) {
    (k = He[I]()), (G = Ue[K]()), Xe(k, G, e);
  }
  function Qe(e) {
    const t = I;
    (I = f), Je(), Ze("reset"), (I = t);
  }
  function Xe(e, t, n, o, i) {
    L < -1 ||
      (void 0 !== i || (i = Z),
      (function () {
        const r = `${D}:${`${e + (b || 0)}:${t + (w || 0)}`}:${n}${
          void 0 === o ? "" : `:${o}`
        }`;
        F ? window.parent.iframeParentListener(p + r) : J.postMessage(p + r, i);
      })());
  }
  function Ye(e) {
    const t = {
        init: function () {
          (N = e.data),
            (J = e.source),
            pe(),
            (C = !1),
            setTimeout(() => {
              x = !1;
            }, u);
        },
        reset() {
          x || Ze("resetPage");
        },
        resize() {
          Ve("resizeParent");
        },
        moveToAnchor() {
          R.findTarget(o());
        },
        inPageLink() {
          this.moveToAnchor();
        },
        pageInfo() {
          const e = o();
          ne ? ne(JSON.parse(e)) : Xe(0, 0, "pageInfoStop");
        },
        parentInfo() {
          const e = o();
          oe ? oe(Object.freeze(JSON.parse(e))) : Xe(0, 0, "parentInfoStop");
        },
        message() {
          const e = o();
          ee(JSON.parse(e));
        },
      },
      n = () => e.data.split("]")[1].split(":")[0],
      o = () => e.data.slice(e.data.indexOf(":") + 1),
      i = () =>
        "iframeResize" in window ||
        (void 0 !== window.jQuery && "" in window.jQuery.prototype),
      r = () => e.data.split(":")[2] in { true: 1, false: 1 };
    p === `${e.data}`.slice(0, h) &&
      (!1 !== C
        ? r() && t.init()
        : (function () {
            const o = n();
            o in t
              ? t[o]()
              : i() || r() || de(`Unexpected message (${e.data})`);
          })());
  }
  function Ge() {
    "loading" !== document.readyState &&
      window.parent.postMessage("[iFrameResizerChild]Ready", "*");
  }
  function Ke(e) {
    return Ye(e), _;
  }
  "undefined" != typeof window &&
    ((window.iframeChildListener = (e) => Ye({ data: e, sameDomain: !0 })),
    o(window, "message", Ye),
    o(window, "readystatechange", Ge),
    Ge());
  try {
    top?.document?.getElementById("banner") &&
      ((_ = {}),
      (window.mockMsgListener = Ke),
      i(window, "message", Ye),
      define([], () => Ke));
  } catch (e) {}
})();
