/*!
 *  @preserve
 *
 *  @module     iframe-resizer/parent 5.1.5 (iife)
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
  const e = "[iframe-resizer]";
  const t = (t) =>
      `${e}[${(function (e) {
        return window.top === window.self
          ? `Parent page: ${e}`
          : window?.parentIFrame?.getId
          ? `${window.parentIFrame.getId()}: ${e}`
          : `Nested parent page: ${e}`;
      })(t)}]`,
    i = (e, i, ...n) => window?.console[e](t(i), ...n),
    n = (e, ...t) => i("warn", e, ...t),
    o = (t, i) =>
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
        )(
          (
            (t) =>
            (...i) =>
              [`${e}[${t}]`, ...i].join(" ")
          )(t)
        )(i)
      ),
    r = "5.1.5",
    a = "[iFrameSizer]",
    s = a.length,
    l = Object.freeze({
      max: 1,
      scroll: 1,
      bodyScroll: 1,
      documentElementScroll: 1,
    }),
    c = (e, t, i, n) => e.addEventListener(t, i, n || !1),
    d = (e, t, i) => e.removeEventListener(t, i, !1),
    u = (e) => {
      if (!e) return "";
      let t = -559038744,
        i = 1103547984;
      for (let n, o = 0; o < e.length; o++)
        (n = e.codePointAt(o)),
          (t = Math.imul(t ^ n, 2246822519)),
          (i = Math.imul(i ^ n, 3266489917));
      return (
        (t ^= Math.imul(t ^ (i >>> 15), 1935289751)),
        (i ^= Math.imul(i ^ (t >>> 15), 3405138345)),
        (t ^= i >>> 16),
        (i ^= t >>> 16),
        (2097152 * (i >>> 0) + (t >>> 11)).toString(36)
      );
    },
    f = (e) =>
      e.replaceAll(/[A-Za-z]/g, (e) =>
        String.fromCodePoint(
          (e <= "Z" ? 90 : 122) >= (e = e.codePointAt(0) + 19) ? e : e - 26
        )
      ),
    p = [
      "<iy><yi>Puchspk Spjluzl Rlf</><iy><iy>",
      "<iy><yi>Tpzzpun Spjluzl Rlf</><iy><iy>",
      "Aopz spiyhyf pz hchpshisl dpao ivao Jvttlyjphs huk Vwlu-Zvbyjl spjluzlz.<iy><iy><i>Jvttlyjphs Spjluzl</><iy>Mvy jvttlyjphs bzl, <p>pmyhtl-ylzpgly</> ylxbpylz h svd jvza vul aptl spjluzl mll. Mvy tvyl pumvythapvu cpzpa <b>oaawz://pmyhtl-ylzpgly.jvt/wypjpun</>.<iy><iy><i>Vwlu Zvbyjl Spjluzl</><iy>Pm fvb hyl bzpun aopz spiyhyf pu h uvu-jvttlyjphs vwlu zvbyjl wyvqlja aolu fvb jhu bzl pa mvy myll bukly aol alytz vm aol NWS C3 Spjluzl. Av jvumpyt fvb hjjlwa aolzl alytz, wslhzl zla aol <i>spjluzl</> rlf pu <p>pmyhtl-ylzpgly</> vwapvuz av <i>NWSc3</>.<iy><iy>Mvy tvyl pumvythapvu wslhzl zll: <b>oaawz://pmyhtl-ylzpgly.jvt/nws</>",
      "<i>NWSc3 Spjluzl Clyzpvu</><iy><iy>Aopz clyzpvu vm <p>pmyhtl-ylzpgly</> pz ilpun bzlk bukly aol alytz vm aol <i>NWS C3</> spjluzl. Aopz spjluzl hssvdz fvb av bzl <p>pmyhtl-ylzpgly</> pu Vwlu Zvbyjl wyvqljaz, iba pa ylxbpylz fvby wyvqlja av il wbispj, wyvcpkl haaypibapvu huk il spjluzlk bukly clyzpvu 3 vy shaly vm aol NUB Nlulyhs Wbispj Spjluzl.<iy><iy>Pm fvb hyl bzpun aopz spiyhyf pu h uvu-vwlu zvbyjl wyvqlja vy dlizpal, fvb dpss ullk av wbyjohzl h svd jvza vul aptl jvttlyjphs spjluzl.<iy><iy>Mvy tvyl pumvythapvu cpzpa <b>oaawz://pmyhtl-ylzpgly.jvt/wypjpun</>.",
    ],
    m = ["NWSc3", "zvsv", "wyv", "ibzpulzz", "vlt"],
    h = Object.fromEntries(
      [
        "2cgs7fdf4xb",
        "1c9ctcccr4z",
        "1q2pc4eebgb",
        "ueokt0969w",
        "w2zxchhgqz",
        "1umuxblj2e5",
      ].map((e, t) => [e, Math.max(0, t - 1)])
    ),
    y = (e) => f(p[e]);
  var g = (e) => {
    const t = e[f("spjluzl")];
    if (!t) return -1;
    const i = t.split("-");
    let n = (function (e = "") {
      let t = -2;
      const i = u(f(e));
      return i in h && (t = h[i]), t;
    })(i[0]);
    return 0 === n || ((e) => e[2] === u(e[0] + e[1]))(i) || (n = -2), n;
  };
  var w = {};
  var b = Object.freeze({
      autoResize: !0,
      bodyBackground: null,
      bodyMargin: null,
      bodyPadding: null,
      checkOrigin: !0,
      direction: "vertical",
      inPageLinks: !1,
      heightCalculationMethod: "auto",
      id: "iFrameResizer",
      log: !1,
      license: void 0,
      mouseEvents: !0,
      offsetHeight: null,
      offsetWidth: null,
      postMessageTarget: null,
      sameDomain: !1,
      scrolling: !1,
      sizeHeight: !0,
      sizeWidth: !1,
      warningTimeout: 5e3,
      tolerance: 0,
      waitForLoad: !1,
      widthCalculationMethod: "auto",
      onClose: () => !0,
      onClosed() {},
      onInit: !1,
      onMessage: null,
      onMouseEnter() {},
      onMouseLeave() {},
      onReady: (e) => {
        "function" == typeof w[e.id].onInit &&
          (o(
            e.id,
            "\n[31;1mDeprecated Option[m\n\nThe [1monInit()[m function is deprecated and has been replaced with [1monReady()[m. It will be removed in a future version of iFrame Resizer.\n      "
          ),
          w[e.id].onInit(e));
      },
      onResized() {},
      onScroll: () => !0,
    }),
    v = { position: null, version: r };
  function z(e) {
    function t() {
      x(H), M(), C("onResized", H);
    }
    function i(e) {
      if ("border-box" !== e.boxSizing) return 0;
      return (
        (e.paddingTop ? parseInt(e.paddingTop, 10) : 0) +
        (e.paddingBottom ? parseInt(e.paddingBottom, 10) : 0)
      );
    }
    function l(e) {
      if ("border-box" !== e.boxSizing) return 0;
      return (
        (e.borderTopWidth ? parseInt(e.borderTopWidth, 10) : 0) +
        (e.borderBottomWidth ? parseInt(e.borderBottomWidth, 10) : 0)
      );
    }
    function u(e) {
      return L.slice(L.indexOf(":") + 7 + e);
    }
    const f = (e, t) => (i, n) => {
        const o = {};
        var r, a;
        (r = function () {
          S(`Send ${e} (${i})`, `${e}:${t()}`, n);
        }),
          o[(a = n)] ||
            (r(),
            (o[a] = requestAnimationFrame(() => {
              o[a] = null;
            })));
      },
      p = (e, t) => () => {
        const i = (t) => () => {
          w[r] ? e(t, r) : o();
        };
        function n(e, t) {
          t(window, "scroll", i("scroll")),
            t(window, "resize", i("resize window"));
        }
        function o() {
          n(0, d), a.disconnect(), s.disconnect();
        }
        const r = P,
          a = new ResizeObserver(i("page observed")),
          s = new ResizeObserver(i("iframe observed"));
        n(0, c),
          a.observe(document.body, {
            attributes: !0,
            childList: !0,
            subtree: !0,
          }),
          s.observe(w[r].iframe, {
            attributes: !0,
            childList: !1,
            subtree: !1,
          }),
          w[r] && (w[r][`stop${t}`] = o);
      },
      m = (e) => () => {
        e in w[P] && (w[P][e](), delete w[P][e]);
      },
      h = f("pageInfo", function () {
        const e = document.body.getBoundingClientRect(),
          t = H.iframe.getBoundingClientRect(),
          { scrollY: i, scrollX: n, innerHeight: o, innerWidth: r } = window,
          { clientHeight: a, clientWidth: s } = document.documentElement;
        return JSON.stringify({
          iframeHeight: t.height,
          iframeWidth: t.width,
          clientHeight: Math.max(a, o || 0),
          clientWidth: Math.max(s, r || 0),
          offsetTop: parseInt(t.top - e.top, 10),
          offsetLeft: parseInt(t.left - e.left, 10),
          scrollTop: i,
          scrollLeft: n,
          documentHeight: a,
          documentWidth: s,
          windowHeight: o,
          windowWidth: r,
        });
      }),
      y = f("parentInfo", function () {
        const { iframe: e } = H,
          { scrollWidth: t, scrollHeight: i } = document.documentElement,
          {
            width: n,
            height: o,
            offsetLeft: r,
            offsetTop: a,
            pageLeft: s,
            pageTop: l,
            scale: c,
          } = window.visualViewport;
        return JSON.stringify({
          iframe: e.getBoundingClientRect(),
          document: { scrollWidth: t, scrollHeight: i },
          viewport: {
            width: n,
            height: o,
            offsetLeft: r,
            offsetTop: a,
            pageLeft: s,
            pageTop: l,
            scale: c,
          },
        });
      }),
      g = p(h, "PageInfo"),
      b = p(y, "ParentInfo"),
      z = m("stopPageInfo"),
      k = m("stopParentInfo");
    function W(e) {
      const t = e.getBoundingClientRect();
      return (
        $(),
        {
          x: Number(t.left) + Number(v.position.x),
          y: Number(t.top) + Number(v.position.y),
        }
      );
    }
    function F(e) {
      const t = e ? W(H.iframe) : { x: 0, y: 0 };
      let i = ((e, t) => ({ x: e.width + t.x, y: e.height + t.y }))(H, t);
      window.top === window.self
        ? ((v.position = i), O(P))
        : window.parentIFrame
        ? window.parentIFrame["scrollTo" + (e ? "Offset" : "")](i.x, i.y)
        : n(
            P,
            "Unable to scroll to requested position, window.parentIFrame not found"
          );
    }
    function O(e) {
      const { x: t, y: i } = v.position,
        n = w[e]?.iframe;
      !1 !== C("onScroll", { iframe: n, top: i, left: t, x: t, y: i })
        ? M()
        : R();
    }
    function A(e) {
      let t = {};
      if (0 === H.width && 0 === H.height) {
        const e = u(9).split(":");
        t = { x: e[1], y: e[0] };
      } else t = { x: H.width, y: H.height };
      C(e, {
        iframe: H.iframe,
        screenX: Number(t.x),
        screenY: Number(t.y),
        type: H.type,
      });
    }
    const C = (e, t) => j(P, e, t);
    let L = e.data,
      H = {},
      P = null;
    "[iFrameResizerChild]Ready" !== L
      ? a === `${L}`.slice(0, s) &&
        L.slice(s).split(":")[0] in w &&
        ((H = (function () {
          const e = L.slice(s).split(":"),
            t = e[1] ? Number(e[1]) : 0,
            n = w[e[0]]?.iframe,
            o = getComputedStyle(n);
          return {
            iframe: n,
            id: e[0],
            height: t + i(o) + l(o),
            width: Number(e[2]),
            type: e[3],
            msg: e[4],
          };
        })()),
        (P = H.id),
        P
          ? ((function (e) {
              if (!w[e])
                throw new Error(
                  `${H.type} No settings for ${e}. Message was: ${L}`
                );
            })(P),
            H.type in { true: 1, false: 1, undefined: 1 } ||
              ((w[P].loaded = !0),
              (function () {
                let e = !0;
                return (
                  null === H.iframe &&
                    (n(P, `The iframe (${H.id}) was not found.`), (e = !1)),
                  e
                );
              })() &&
                (function () {
                  const { origin: t, sameDomain: i } = e;
                  if (i) return !0;
                  let n = w[P]?.checkOrigin;
                  if (
                    n &&
                    "null" != `${t}` &&
                    !(n.constructor === Array
                      ? (function () {
                          let e = 0,
                            i = !1;
                          for (; e < n.length; e++)
                            if (n[e] === t) {
                              i = !0;
                              break;
                            }
                          return i;
                        })()
                      : (function () {
                          const e = w[P]?.remoteHost;
                          return t === e;
                        })())
                  )
                    throw new Error(
                      `Unexpected message received from: ${t} for ${H.iframe.id}. Message was: ${e.data}. This error can be disabled by setting the checkOrigin: false option or by providing of array of trusted domains.`
                    );
                  return !0;
                })() &&
                (function () {
                  switch (
                    (w[P]?.firstRun && w[P] && (w[P].firstRun = !1), H.type)
                  ) {
                    case "close":
                      T(H.iframe);
                      break;
                    case "message":
                      (i = u(6)),
                        C("onMessage", {
                          iframe: H.iframe,
                          message: JSON.parse(i),
                        });
                      break;
                    case "mouseenter":
                      A("onMouseEnter");
                      break;
                    case "mouseleave":
                      A("onMouseLeave");
                      break;
                    case "autoResize":
                      w[P].autoResize = JSON.parse(u(9));
                      break;
                    case "scrollBy":
                      !(function () {
                        const e = H.width,
                          t = H.height;
                        (window.parentIframe || window).scrollBy(e, t);
                      })();
                      break;
                    case "scrollTo":
                      F(!1);
                      break;
                    case "scrollToOffset":
                      F(!0);
                      break;
                    case "pageInfo":
                      h("start", P), g();
                      break;
                    case "parentInfo":
                      y("start", P), b();
                      break;
                    case "pageInfoStop":
                      z();
                      break;
                    case "parentInfoStop":
                      k();
                      break;
                    case "inPageLink":
                      !(function (e) {
                        const t = e.split("#")[1] || "",
                          i = decodeURIComponent(t);
                        let n =
                          document.getElementById(i) ||
                          document.getElementsByName(i)[0];
                        n
                          ? (function () {
                              const e = W(n);
                              (v.position = { x: e.x, y: e.y }), O(P);
                            })()
                          : window.top !== window.self &&
                            window.parentIFrame &&
                            window.parentIFrame.moveToAnchor(t);
                      })(u(9));
                      break;
                    case "title":
                      !(function (e, t) {
                        w[t]?.syncTitle && (w[t].iframe.title = e);
                      })(H.msg, P);
                      break;
                    case "reset":
                      I(H);
                      break;
                    case "init":
                      t(),
                        (function (e) {
                          try {
                            w[e].sameDomain =
                              !!w[e]?.iframe?.contentWindow
                                ?.iframeChildListener;
                          } catch (t) {
                            w[e].sameDomain = !1;
                          }
                        })(P),
                        (e = H.msg) !== r &&
                          (void 0 !== e ||
                            o(
                              P,
                              "<rb>Legacy version detected in iframe</>\n\nDetected legacy version of child page script. It is recommended to update the page in the iframe to use <b>@iframe-resizer/child</>.\n\nSee <u>https://iframe-resizer.com/setup/#child-page-setup</> for more details.\n"
                            )),
                        (N = !0),
                        C("onReady", H.iframe);
                      break;
                    default:
                      if (0 === H.width && 0 === H.height)
                        return void n(
                          `Unsupported message received (${H.type}), this is likely due to the iframe containing a later version of iframe-resizer than the parent page`
                        );
                      if (0 === H.width || 0 === H.height) return;
                      if (document.hidden) return;
                      t();
                  }
                  var e, i;
                })()))
          : n(
              "iframeResizer received messageData without id, message was: ",
              L
            ))
      : Object.keys(w).forEach((e) => {
          w[e].mode >= 0 && S("iFrame requested init", E(e), e);
        });
  }
  function j(e, t, i) {
    let n = null,
      o = null;
    if (w[e]) {
      if (((n = w[e][t]), "function" != typeof n))
        throw new TypeError(`${t} on iFrame[${e}] is not a function`);
      o = n(i);
    }
    return o;
  }
  function k(e) {
    const t = e.id;
    delete w[t];
  }
  function T(e) {
    const t = e.id;
    if (!1 !== j(t, "onClose", t)) {
      try {
        e.parentNode && e.remove();
      } catch (e) {
        n(e);
      }
      j(t, "onClosed", t), k(e);
    }
  }
  function $(e) {
    null === v.position &&
      (v.position = { x: window.scrollX, y: window.scrollY });
  }
  function R() {
    v.position = null;
  }
  function M(e) {
    null !== v.position && (window.scrollTo(v.position.x, v.position.y), R());
  }
  function I(e) {
    $(e.id), x(e), S("reset", "reset", e.id);
  }
  function x(e) {
    const t = e.id;
    function i(t) {
      const i = `${e[t]}px`;
      e.iframe.style[t] = i;
    }
    w[t].sizeHeight && i("height"), w[t].sizeWidth && i("width");
  }
  function S(e, t, i, r) {
    w[i] &&
      (w[i]?.postMessageTarget
        ? (function () {
            const { postMessageTarget: e, targetOrigin: n } = w[i];
            if (w[i].sameDomain)
              try {
                return void w[i].iframe.contentWindow.iframeChildListener(
                  a + t
                );
              } catch (e) {}
            e.postMessage(a + t, n);
          })()
        : n(i, `[${e}] IFrame(${i}) not found`),
      r &&
        w[i]?.warningTimeout &&
        (w[i].msgTimeout = setTimeout(function () {
          void 0 !== w[i] &&
            (w[i].loaded ||
              w[i].loadErrorShown ||
              ((w[i].loadErrorShown = !0),
              o(
                i,
                `\n<rb>No response from iFrame</>\n            \nThe iframe (<i>${i}</>) has not responded within ${
                  w[i].warningTimeout / 1e3
                } seconds. Check <b>@iframe-resizer/child</> package has been loaded in the iframe.\n\nThis message can be ignored if everything is working, or you can set the <b>warningTimeout</> option to a higher value or zero to suppress this warning.\n`
              )));
        }, w[i].warningTimeout)));
  }
  function E(e) {
    const t = w[e];
    return [
      e,
      "8",
      t.sizeWidth,
      t.log,
      "32",
      !0,
      t.autoResize,
      t.bodyMargin,
      t.heightCalculationMethod,
      t.bodyBackground,
      t.bodyPadding,
      t.tolerance,
      t.inPageLinks,
      "child",
      t.widthCalculationMethod,
      t.mouseEvents,
      t.offsetHeight,
      t.offsetWidth,
      t.sizeHeight,
      t.license,
      v.version,
      t.mode,
    ].join(":");
  }
  let W = 0,
    N = !1,
    F = !1;
  var O = (e) => (t) => {
    function a(e) {
      if (!e) return {};
      if ("object" != typeof e) throw new TypeError("Options is not an object");
      return (
        ("sizeWidth" in e || "sizeHeight" in e || "autoResize" in e) &&
          o(
            d,
            '<rb>Deprecated Option</>\n\nThe <b>sizeWidth</>, <b>sizeHeight</> and <b>autoResize</> options have been replaced with new <b>direction</> option which expects values of <i>"vertical"</>, <i>"horizontal"</> or <i>"horizontal"</>.\n'
          ),
        e
      );
    }
    function s(e) {
      const t = w[e]?.iframe?.title;
      return "" === t || void 0 === t;
    }
    const d = (function (i) {
      if (i && "string" != typeof i)
        throw new TypeError("Invalid id for iFrame. Expected String");
      return (
        ("" !== i && i) ||
          ((t.id = i =
            (function () {
              let t = e?.id || b.id + W++;
              return null !== document.getElementById(t) && (t += W++), t;
            })()),
          (e || {}).log),
        i
      );
    })(t.id);
    return (
      d in w && "iFrameResizer" in t
        ? n(d, "Ignored iFrame, already setup.")
        : ((function (e) {
            var i, n;
            (w[d] = {
              iframe: t,
              firstRun: !0,
              remoteHost: t?.src.split("/").slice(0, 3).join("/"),
              ...b,
              ...a(e),
              mode: g(e),
              syncTitle: s(d),
            }),
              (function () {
                if ("horizontal" === w[d].direction)
                  return (w[d].sizeWidth = !0), void (w[d].sizeHeight = !1);
                if ("none" === w[d].direction)
                  return (
                    (w[d].sizeWidth = !1),
                    (w[d].sizeHeight = !1),
                    void (w[d].autoResize = !1)
                  );
                if ("vertical" !== w[d].direction)
                  throw new TypeError(
                    d,
                    `Direction value of "${w[d].direction}" is not valid`
                  );
              })(),
              (i = e?.offset),
              i &&
                ("vertical" === w[d].direction
                  ? (w[d].offsetHeight = i)
                  : (w[d].offsetWidth = i)),
              null === w[d].postMessageTarget &&
                (w[d].postMessageTarget = t.contentWindow),
              (w[d].targetOrigin =
                !0 === w[d].checkOrigin
                  ? "" === (n = w[d].remoteHost) ||
                    null !== n.match(/^(about:blank|javascript:|file:\/\/)/)
                    ? "*"
                    : n
                  : "*");
          })(e),
          (function () {
            const { mode: e } = w[d];
            e < 0 && o("Parent", `${y(e + 2)}${y(2)}`),
              F ||
                e < 0 ||
                ((F = !0),
                ((e, ...t) => {
                  i("info", e, ...t);
                })(`v${r} (${((e) => f(m[e]))(e)})`),
                e < 1 && o("Parent", y(3)));
          })(),
          C(),
          (function () {
            switch (
              ((t.style.overflow = !1 === w[d]?.scrolling ? "hidden" : "auto"),
              w[d]?.scrolling)
            ) {
              case "omit":
                break;
              case !0:
                t.scrolling = "yes";
                break;
              case !1:
                t.scrolling = "no";
                break;
              default:
                t.scrolling = w[d] ? w[d].scrolling : "no";
            }
          })(),
          (function () {
            const { bodyMargin: e } = w[d];
            ("number" != typeof e && "0" !== e) || (w[d].bodyMargin = `${e}px`);
          })(),
          (function (e) {
            const { id: i } = t;
            -1 !== w[i].mode &&
              -2 !== w[i].mode &&
              (c(t, "load", function () {
                S("iFrame.onload", `${e}:${N}`, i, !0),
                  (function () {
                    const e = w[d]?.firstRun,
                      i = w[d]?.heightCalculationMethod in l;
                    !e &&
                      i &&
                      I({ iframe: t, height: 0, width: 0, type: "init" });
                  })();
              }),
              !1 === w[i].waitForLoad && S("init", `${e}:${N}`, i, !0));
          })(E(d)),
          (function () {
            if (w[d]) {
              const e = {
                close: T.bind(null, w[d].iframe),
                disconnect: k.bind(null, w[d].iframe),
                removeListeners() {
                  o(
                    d,
                    "\n<rb>Deprecated Method Name</>\n\nThe [removeListeners()</> method has been renamed to [disconnect()</>.\n"
                  ),
                    this.disconnect();
                },
                resize: S.bind(null, "Window resize", "resize", d),
                moveToAnchor(e) {
                  S("Move to anchor", `moveToAnchor:${e}`, d);
                },
                sendMessage(e) {
                  S("Send Message", `message:${(e = JSON.stringify(e))}`, d);
                },
              };
              (w[d].iframe.iframeResizer = e), (w[d].iframe.iFrameResizer = e);
            }
          })()),
      t?.iFrameResizer
    );
  };
  function A() {
    !1 === document.hidden &&
      (function (e, t) {
        const i = (e) => w[e]?.autoResize && !w[e]?.firstRun;
        Object.keys(w).forEach(function (n) {
          i(n) && S(e, t, n);
        });
      })("Tab Visible", "resize");
  }
  const C = ((e) => {
      let t = !1;
      return function () {
        return t ? void 0 : ((t = !0), Reflect.apply(e, this, arguments));
      };
    })(() => {
      c(window, "message", z),
        c(document, "visibilitychange", A),
        (window.iframeParentListener = (e) => z({ data: e, sameDomain: !0 }));
    }),
    L = "[iframeResizer] ";
  (window.iframeResize = (function () {
    function e(e) {
      switch (!0) {
        case !e:
          throw new TypeError(`${L}iframe is not defined`);
        case !e.tagName:
          throw new TypeError(`${L}Not a valid DOM element`);
        case "IFRAME" !== e.tagName.toUpperCase():
          throw new TypeError(
            `${L}Expected <IFRAME> tag, found <${e.tagName}>`
          );
        default:
          t(e), i.push(e);
      }
    }
    let t, i;
    return function (n, o) {
      if ("undefined" == typeof window) return [];
      switch (((t = O(n)), (i = []), typeof o)) {
        case "undefined":
        case "string":
          document.querySelectorAll(o || "iframe").forEach(e);
          break;
        case "object":
          e(o);
          break;
        default:
          throw new TypeError(`${L}Unexpected data type (${typeof o})`);
      }
      return Object.freeze(i);
    };
  })()),
    (window.iFrameResize = function (...e) {
      o("", "Deprecated: iFrameResize(), please use iframeResize()"),
        window.iframeResize(...e);
    });
})();
