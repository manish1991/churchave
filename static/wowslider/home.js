// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 8.6
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
jQuery.extend(jQuery.easing, {
    easeInOutSine: function(j, i, b, c, d) {
        return -c / 2 * (Math.cos(Math.PI * i / d) - 1) + b
    }
});
// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 8.6
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
function ws_blast(q, j, m) {
    var e = jQuery;
    var i = e(this);
    var f = m.find(".ws_list");
    var a = q.distance || 1;
    var g = e("<div>").addClass("ws_effect ws_blast");
    var c = e("<div>").addClass("ws_zoom").appendTo(g);
    var k = e("<div>").addClass("ws_parts").appendTo(g);
    m.css({
        overflow: "visible"
    }).append(g);
    g.css({
        position: "absolute",
        left: 0,
        top: 0,
        width: "100%",
        height: "100%",
        "z-index": 8
    });
    var d = q.cols;
    var p = q.rows;
    var l = [];
    var b = [];

    function h(u, r, s, t) {
        if (q.support.transform && q.support.transition) {
            if (typeof r.left === "number" || typeof r.top === "number") {
                r.transform = "translate3d(" + (typeof r.left === "number" ? r.left : 0) + "px," + (typeof r.top === "number" ? r.top : 0) + "px,0)"
            }
            delete r.left;
            delete r.top;
            if (s) {
                r.transition = "all " + s + "ms ease-in-out"
            } else {
                r.transition = ""
            }
            u.css(r);
            if (t) {
                u.on("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function() {
                    t();
                    u.off("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd")
                })
            }
        } else {
            delete r.transfrom;
            delete r.transition;
            if (s) {
                u.animate(r, {
                    queue: false,
                    duration: q.duration,
                    complete: t ? t : 0
                })
            } else {
                u.stop(1).css(r)
            }
        }
    }

    function n(r) {
        var w = Math.max((q.width || g.width()) / (q.height || g.height()) || 3, 3);
        d = d || Math.round(w < 1 ? 3 : 3 * w);
        p = p || Math.round(w < 1 ? 3 / w : 3);
        for (var u = 0; u < d * p; u++) {
            var v = u % d;
            var t = Math.floor(u / d);
            e([b[u] = document.createElement("div"), l[u] = document.createElement("div")]).css({
                position: "absolute",
                overflow: "hidden"
            }).appendTo(k).append(e("<img>").css({
                position: "absolute"
            }))
        }
        l = e(l);
        b = e(b);
        o(l, r);
        o(b, r, true);
        var s = {
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            overflow: "hidden"
        };
        c.css(s).append(e("<img>").css(s))
    }

    function o(t, u, s, r, w, z) {
        var v = g.width();
        var x = g.height();
        var y = {
            left: e(window).scrollLeft(),
            top: e(window).scrollTop(),
            width: e(window).width(),
            height: e(window).height()
        };
        e(t).each(function(F) {
            var E = F % d;
            var C = Math.floor(F / d);
            if (s) {
                var I = a * v * (2 * Math.random() - 1) + v / 2;
                var G = a * x * (2 * Math.random() - 1) + x / 2;
                var H = g.offset();
                H.left += I;
                H.top += G;
                if (H.left < y.left) {
                    I -= H.left + y.left
                }
                if (H.top < y.top) {
                    G -= H.top + y.top
                }
                var D = (y.left + y.width) - H.left - v / d;
                if (0 > D) {
                    I += D
                }
                var B = (y.top + y.height) - H.top - x / p;
                if (0 > B) {
                    G += B
                }
            } else {
                var I = v * E / d;
                var G = x * C / p
            }
            e(this).find("img").css({
                left: -(v * E / d) + u.marginLeft,
                top: -(x * C / p) + u.marginTop,
                width: u.width,
                height: u.height
            });
            var A = {
                left: I,
                top: G,
                width: v / d,
                height: x / p
            };
            if (w) {
                e.extend(A, w)
            }
            if (r) {
                h(e(this), A, q.duration, (F === 0 && z) ? z : 0)
            } else {
                h(e(this), A)
            }
        })
    }
    this.go = function(s, u) {
        var v = e(j[u]),
            r = {
                width: v.width(),
                height: v.height(),
                marginTop: parseFloat(v.css("marginTop")),
                marginLeft: parseFloat(v.css("marginLeft"))
            };
        if (!l.length) {
            n(r)
        }
        l.find("img").attr("src", j.get(u).src);
        h(l, {
            opacity: 1,
            zIndex: 3
        });
        b.find("img").attr("src", j.get(s).src);
        h(b, {
            opacity: 0,
            zIndex: 2
        });
        c.find("img").attr("src", j.get(u).src);
        h(c.find("img"), {
            transform: "scale(1)"
        });
        g.show();
        f.hide();
        o(b, r, false, true, {
            opacity: 1
        });
        o(l, r, true, true, {
            opacity: 0
        }, function() {
            i.trigger("effectEnd");
            g.hide()
        });
        h(c.find("img"), {
            transform: "scale(2)"
        }, q.duration, 0);
        var t = b;
        b = l;
        l = t
    }
}; // -----------------------------------------------------------------------------------

function ws_domino(m, i, k) {
    $ = jQuery;
    var h = $(this);
    var c = m.columns || 5,
        l = m.rows || 2,
        d = m.centerRow || 2,
        g = m.centerColumn || 2;
    var f = $("<div>").addClass("ws_effect ws_domino").css({
        position: "absolute",
        width: "100%",
        height: "100%",
        top: 0,
        overflow: "hidden"
    }).appendTo(k);
    var b = $("<div>").addClass("ws_zoom").appendTo(f);
    var j = $("<div>").addClass("ws_parts").appendTo(f);
    var e = k.find(".ws_list");
    var a;
    this.go = function(y, x) {
        function z() {
            j.find("img").stop(1, 1);
            j.empty();
            b.empty();
            a = 0
        }
        z();
        var s = $(i.get(x));
        s = {
            width: s.width(),
            height: s.height(),
            marginTop: parseFloat(s.css("marginTop")),
            marginLeft: parseFloat(s.css("marginLeft"))
        };
        var D = $(i.get(x)).clone().appendTo(b).css({
            position: "absolute",
            top: 0,
            left: 0
        }).css(s);
        var p = f.width();
        var o = f.height();
        var w = Math.floor(p / c);
        var v = Math.floor(o / l);
        var t = p - w * (c - 1);
        var E = o - v * (l - 1);

        function I(L, K) {
            return Math.random() * (K - L + 1) + L
        }
        e.hide();
        var u = [];
        for (var C = 0; C < l; C++) {
            u[C] = [];
            for (var B = 0; B < c; B++) {
                var q = m.duration * (1 - Math.abs((d * g - C * B) / (2 * l * c)));
                var F = B < c - 1 ? w : t;
                var n = C < l - 1 ? v : E;
                u[C][B] = $("<div>").css({
                    width: F,
                    height: n,
                    position: "absolute",
                    top: C * v,
                    left: B * w,
                    overflow: "hidden"
                });
                var H = I(C - 2, C + 2);
                var G = I(B - 2, B + 2);
                u[C][B].appendTo(j);
                var J = $(i.get(y)).clone().appendTo(u[C][B]).css(s);
                var A = {
                    top: -H * v,
                    left: -G * w,
                    opacity: 0
                };
                var r = {
                    top: -C * v,
                    left: -B * w,
                    opacity: 1
                };
                if (m.support.transform && m.support.transition) {
                    A.translate = [A.left, A.top, 0];
                    r.translate = [r.left, r.top, 0];
                    delete A.top;
                    delete A.left;
                    delete r.top;
                    delete r.left
                }
                wowAnimate(J.css({
                    position: "absolute"
                }), A, r, q, "easeInOutSine", function() {
                    a++;
                    if (a == l * c) {
                        z();
                        e.stop(1, 1);
                        h.trigger("effectEnd")
                    }
                })
            }
        }
        wowAnimate(D, {
            scale: 1
        }, {
            scale: 1.6
        }, m.duration, m.duration * 0.2, "easeInOutSine")
    }
}; // -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 8.6
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
jQuery("#wowslider-container1").wowSlider({
    effect: "blast",
    prev: "",
    next: "",
    duration: 20 * 100,
    delay: 20 * 100,
    width: 830,
    height: 360,
    autoPlay: true,
    autoPlayVideo: false,
    playPause: true,
    stopOnHover: false,
    loop: false,
    bullets: 1,
    caption: false,
    captionEffect: "traces",
    controls: false,
    controlsThumb: false,
    responsive: 1,
    fullScreen: true,
    gestures: 2,
    onBeforeStep: 0,
    images: 0
});