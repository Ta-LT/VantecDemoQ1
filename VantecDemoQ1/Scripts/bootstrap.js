function showWaitingWindow() {
    $("#divWaiting").show()
}
function hideWaitingWindow() {
    $("#divWaiting").hide()
}
function validateEmail(n) {
    var t = new RegExp("^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$");
    return t.test(n)
}
function NumInput() {
    $("[class*='num-input']").css("ime-mode", "disabled");
    $("[class*='num-input']").bind("keypress", function (n) {
        var i = new RegExp("^[0-9]+$")
            , t = String.fromCharCode(n.charCode ? n.charCode : n.which);
        if (!i.test(t) || $(this).val() == "" && t == "0")
            return n.preventDefault(),
                !1
    });
    $("[class*='num-input']").bind("keyup", function () {
        if ($(this).val() == "0")
            return $(this).val(""),
                !1
    })
}
function initvalid() {
    var n = $("#mainform").removeData("validator").removeData("unobtrusiveValidation");
    $.validator.unobtrusive.parse(n)
}
function AddDay(n, t) {
    var r, i;
    return n == "" ? "" : (r = 1,
        t != "" && (r = parseInt(t)),
        i = new Date(n),
        i.setDate(i.getDate() + r),
        i.toLocaleDateString("ja-jp"))
}
function removeError(n) {
    $(n).removeClass("input-validation-error");
    var t = $(n).next();
    t.hasClass("field-validation-error") && t.prop("tagName").toLowerCase() == "span" && t.remove()
}
function duedatechange(n) {
    setTimeout(function () {
        var r = n.closest(".order-pallet").find(".selectdatepicker"), u = r.val().trim(), f = n.val().trim(), i = n.closest(".clsDueDate").find(".delevery-date"), t;
        u != "" && f != "" ? (f <= u ? (n.addClass("input-validation-error"),
            i.show()) : (n.removeClass("input-validation-error"),
                r.removeClass("input-validation-error"),
                i.hide()),
            t = n.closest(".order-pallet").find(".selectdatepicker").parent().find(".field-validation-error"),
            t.addClass("field-validation-valid"),
            t.removeClass("field-validation-error"),
            t.html("")) : i.hide()
    }, 100)
}
function pickdatechange(n) {
    setTimeout(function () {
        var t = n.closest(".order-pallet").find(".selectdatepickerDueDate")
            , i = t.closest(".clsDueDate").find(".delevery-date")
            , r = t.closest(".clsDueDate").find(".field-validation-error");
        t.removeClass("input-validation-error");
        i.hide();
        r.hide()
    }, 100)
}
function validateDueDate() {
    $(".selectdatepickerDueDate").each(function () {
        duedatechange($(this))
    })
}
var timer, ParentSelector;
if ("undefined" == typeof jQuery)
    throw new Error("Bootstrap's JavaScript requires jQuery");
if (+function (n) {
    "use strict";
    var t = n.fn.jquery.split(" ")[0].split(".");
    if (t[0] < 2 && t[1] < 9 || 1 == t[0] && 9 == t[1] && t[2] < 1 || t[0] > 3)
        throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4");
}(jQuery),
    +function (n) {
        "use strict";
        function t() {
            var i = document.createElement("bootstrap")
                , n = {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd otransitionend",
                    transition: "transitionend"
                };
            for (var t in n)
                if (void 0 !== i.style[t])
                    return {
                        end: n[t]
                    };
            return !1
        }
        n.fn.emulateTransitionEnd = function (t) {
            var i = !1, u = this, r;
            n(this).one("bsTransitionEnd", function () {
                i = !0
            });
            return r = function () {
                i || n(u).trigger(n.support.transition.end)
            }
                ,
                setTimeout(r, t),
                this
        }
            ;
        n(function () {
            n.support.transition = t();
            n.support.transition && (n.event.special.bsTransitionEnd = {
                bindType: n.support.transition.end,
                delegateType: n.support.transition.end,
                handle: function (t) {
                    if (n(t.target).is(this))
                        return t.handleObj.handler.apply(this, arguments)
                }
            })
        })
    }(jQuery),
    +function (n) {
        "use strict";
        function u(i) {
            return this.each(function () {
                var r = n(this)
                    , u = r.data("bs.alert");
                u || r.data("bs.alert", u = new t(this));
                "string" == typeof i && u[i].call(r)
            })
        }
        var i = '[data-dismiss="alert"]', t = function (t) {
            n(t).on("click", i, this.close)
        }, r;
        t.VERSION = "3.3.7";
        t.TRANSITION_DURATION = 150;
        t.prototype.close = function (i) {
            function e() {
                r.detach().trigger("closed.bs.alert").remove()
            }
            var f = n(this), u = f.attr("data-target"), r;
            u || (u = f.attr("href"),
                u = u && u.replace(/.*(?=#[^\s]*$)/, ""));
            r = n("#" === u ? [] : u);
            i && i.preventDefault();
            r.length || (r = f.closest(".alert"));
            r.trigger(i = n.Event("close.bs.alert"));
            i.isDefaultPrevented() || (r.removeClass("in"),
                n.support.transition && r.hasClass("fade") ? r.one("bsTransitionEnd", e).emulateTransitionEnd(t.TRANSITION_DURATION) : e())
        }
            ;
        r = n.fn.alert;
        n.fn.alert = u;
        n.fn.alert.Constructor = t;
        n.fn.alert.noConflict = function () {
            return n.fn.alert = r,
                this
        }
            ;
        n(document).on("click.bs.alert.data-api", i, t.prototype.close)
    }(jQuery),
    +function (n) {
        "use strict";
        function i(i) {
            return this.each(function () {
                var u = n(this)
                    , r = u.data("bs.button")
                    , f = "object" == typeof i && i;
                r || u.data("bs.button", r = new t(this, f));
                "toggle" == i ? r.toggle() : i && r.setState(i)
            })
        }
        var t = function (i, r) {
            this.$element = n(i);
            this.options = n.extend({}, t.DEFAULTS, r);
            this.isLoading = !1
        }, r;
        t.VERSION = "3.3.7";
        t.DEFAULTS = {
            loadingText: "loading..."
        };
        t.prototype.setState = function (t) {
            var i = "disabled"
                , r = this.$element
                , f = r.is("input") ? "val" : "html"
                , u = r.data();
            t += "Text";
            null == u.resetText && r.data("resetText", r[f]());
            setTimeout(n.proxy(function () {
                r[f](null == u[t] ? this.options[t] : u[t]);
                "loadingText" == t ? (this.isLoading = !0,
                    r.addClass(i).attr(i, i).prop(i, !0)) : this.isLoading && (this.isLoading = !1,
                        r.removeClass(i).removeAttr(i).prop(i, !1))
            }, this), 0)
        }
            ;
        t.prototype.toggle = function () {
            var t = !0, i = this.$element.closest('[data-toggle="buttons"]'), n;
            i.length ? (n = this.$element.find("input"),
                "radio" == n.prop("type") ? (n.prop("checked") && (t = !1),
                    i.find(".active").removeClass("active"),
                    this.$element.addClass("active")) : "checkbox" == n.prop("type") && (n.prop("checked") !== this.$element.hasClass("active") && (t = !1),
                        this.$element.toggleClass("active")),
                n.prop("checked", this.$element.hasClass("active")),
                t && n.trigger("change")) : (this.$element.attr("aria-pressed", !this.$element.hasClass("active")),
                    this.$element.toggleClass("active"))
        }
            ;
        r = n.fn.button;
        n.fn.button = i;
        n.fn.button.Constructor = t;
        n.fn.button.noConflict = function () {
            return n.fn.button = r,
                this
        }
            ;
        n(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function (t) {
            var r = n(t.target).closest(".btn");
            i.call(r, "toggle");
            n(t.target).is('input[type="radio"], input[type="checkbox"]') || (t.preventDefault(),
                r.is("input,button") ? r.trigger("focus") : r.find("input:visible,button:visible").first().trigger("focus"))
        }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function (t) {
            n(t.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(t.type))
        })
    }(jQuery),
    +function (n) {
        "use strict";
        function i(i) {
            return this.each(function () {
                var u = n(this)
                    , r = u.data("bs.carousel")
                    , f = n.extend({}, t.DEFAULTS, u.data(), "object" == typeof i && i)
                    , e = "string" == typeof i ? i : f.slide;
                r || u.data("bs.carousel", r = new t(this, f));
                "number" == typeof i ? r.to(i) : e ? r[e]() : f.interval && r.pause().cycle()
            })
        }
        var t = function (t, i) {
            this.$element = n(t);
            this.$indicators = this.$element.find(".carousel-indicators");
            this.options = i;
            this.paused = null;
            this.sliding = null;
            this.interval = null;
            this.$active = null;
            this.$items = null;
            this.options.keyboard && this.$element.on("keydown.bs.carousel", n.proxy(this.keydown, this));
            "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", n.proxy(this.pause, this)).on("mouseleave.bs.carousel", n.proxy(this.cycle, this))
        }, u, r;
        t.VERSION = "3.3.7";
        t.TRANSITION_DURATION = 600;
        t.DEFAULTS = {
            interval: 5e3,
            pause: "hover",
            wrap: !0,
            keyboard: !0
        };
        t.prototype.keydown = function (n) {
            if (!/input|textarea/i.test(n.target.tagName)) {
                switch (n.which) {
                    case 37:
                        this.prev();
                        break;
                    case 39:
                        this.next();
                        break;
                    default:
                        return
                }
                n.preventDefault()
            }
        }
            ;
        t.prototype.cycle = function (t) {
            return t || (this.paused = !1),
                this.interval && clearInterval(this.interval),
                this.options.interval && !this.paused && (this.interval = setInterval(n.proxy(this.next, this), this.options.interval)),
                this
        }
            ;
        t.prototype.getItemIndex = function (n) {
            return this.$items = n.parent().children(".item"),
                this.$items.index(n || this.$active)
        }
            ;
        t.prototype.getItemForDirection = function (n, t) {
            var i = this.getItemIndex(t), f = "prev" == n && 0 === i || "next" == n && i == this.$items.length - 1, r, u;
            return f && !this.options.wrap ? t : (r = "prev" == n ? -1 : 1,
                u = (i + r) % this.$items.length,
                this.$items.eq(u))
        }
            ;
        t.prototype.to = function (n) {
            var i = this
                , t = this.getItemIndex(this.$active = this.$element.find(".item.active"));
            if (!(n > this.$items.length - 1 || n < 0))
                return this.sliding ? this.$element.one("slid.bs.carousel", function () {
                    i.to(n)
                }) : t == n ? this.pause().cycle() : this.slide(n > t ? "next" : "prev", this.$items.eq(n))
        }
            ;
        t.prototype.pause = function (t) {
            return t || (this.paused = !0),
                this.$element.find(".next, .prev").length && n.support.transition && (this.$element.trigger(n.support.transition.end),
                    this.cycle(!0)),
                this.interval = clearInterval(this.interval),
                this
        }
            ;
        t.prototype.next = function () {
            if (!this.sliding)
                return this.slide("next")
        }
            ;
        t.prototype.prev = function () {
            if (!this.sliding)
                return this.slide("prev")
        }
            ;
        t.prototype.slide = function (i, r) {
            var e = this.$element.find(".item.active"), u = r || this.getItemForDirection(i, e), l = this.interval, f = "next" == i ? "left" : "right", a = this, o, s, h, c;
            return u.hasClass("active") ? this.sliding = !1 : (o = u[0],
                s = n.Event("slide.bs.carousel", {
                    relatedTarget: o,
                    direction: f
                }),
                (this.$element.trigger(s),
                    !s.isDefaultPrevented()) ? ((this.sliding = !0,
                        l && this.pause(),
                        this.$indicators.length) && (this.$indicators.find(".active").removeClass("active"),
                            h = n(this.$indicators.children()[this.getItemIndex(u)]),
                            h && h.addClass("active")),
                        c = n.Event("slid.bs.carousel", {
                            relatedTarget: o,
                            direction: f
                        }),
                        n.support.transition && this.$element.hasClass("slide") ? (u.addClass(i),
                            u[0].offsetWidth,
                            e.addClass(f),
                            u.addClass(f),
                            e.one("bsTransitionEnd", function () {
                                u.removeClass([i, f].join(" ")).addClass("active");
                                e.removeClass(["active", f].join(" "));
                                a.sliding = !1;
                                setTimeout(function () {
                                    a.$element.trigger(c)
                                }, 0)
                            }).emulateTransitionEnd(t.TRANSITION_DURATION)) : (e.removeClass("active"),
                                u.addClass("active"),
                                this.sliding = !1,
                                this.$element.trigger(c)),
                        l && this.cycle(),
                        this) : void 0)
        }
            ;
        u = n.fn.carousel;
        n.fn.carousel = i;
        n.fn.carousel.Constructor = t;
        n.fn.carousel.noConflict = function () {
            return n.fn.carousel = u,
                this
        }
            ;
        r = function (t) {
            var o, r = n(this), u = n(r.attr("data-target") || (o = r.attr("href")) && o.replace(/.*(?=#[^\s]+$)/, "")), e, f;
            u.hasClass("carousel") && (e = n.extend({}, u.data(), r.data()),
                f = r.attr("data-slide-to"),
                f && (e.interval = !1),
                i.call(u, e),
                f && u.data("bs.carousel").to(f),
                t.preventDefault())
        }
            ;
        n(document).on("click.bs.carousel.data-api", "[data-slide]", r).on("click.bs.carousel.data-api", "[data-slide-to]", r);
        n(window).on("load", function () {
            n('[data-ride="carousel"]').each(function () {
                var t = n(this);
                i.call(t, t.data())
            })
        })
    }(jQuery),
    +function (n) {
        "use strict";
        function r(t) {
            var i, r = t.attr("data-target") || (i = t.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, "");
            return n(r)
        }
        function i(i) {
            return this.each(function () {
                var u = n(this)
                    , r = u.data("bs.collapse")
                    , f = n.extend({}, t.DEFAULTS, u.data(), "object" == typeof i && i);
                !r && f.toggle && /show|hide/.test(i) && (f.toggle = !1);
                r || u.data("bs.collapse", r = new t(this, f));
                "string" == typeof i && r[i]()
            })
        }
        var t = function (i, r) {
            this.$element = n(i);
            this.options = n.extend({}, t.DEFAULTS, r);
            this.$trigger = n('[data-toggle="collapse"][href="#' + i.id + '"],[data-toggle="collapse"][data-target="#' + i.id + '"]');
            this.transitioning = null;
            this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger);
            this.options.toggle && this.toggle()
        }, u;
        t.VERSION = "3.3.7";
        t.TRANSITION_DURATION = 350;
        t.DEFAULTS = {
            toggle: !0
        };
        t.prototype.dimension = function () {
            var n = this.$element.hasClass("width");
            return n ? "width" : "height"
        }
            ;
        t.prototype.show = function () {
            var f, r, e, u, o, s;
            if (!this.transitioning && !this.$element.hasClass("in") && (r = this.$parent && this.$parent.children(".panel").children(".in, .collapsing"),
                !(r && r.length && (f = r.data("bs.collapse"),
                    f && f.transitioning)) && (e = n.Event("show.bs.collapse"),
                        this.$element.trigger(e),
                        !e.isDefaultPrevented()))) {
                if (r && r.length && (i.call(r, "hide"),
                    f || r.data("bs.collapse", null)),
                    u = this.dimension(),
                    this.$element.removeClass("collapse").addClass("collapsing")[u](0).attr("aria-expanded", !0),
                    this.$trigger.removeClass("collapsed").attr("aria-expanded", !0),
                    this.transitioning = 1,
                    o = function () {
                        this.$element.removeClass("collapsing").addClass("collapse in")[u]("");
                        this.transitioning = 0;
                        this.$element.trigger("shown.bs.collapse")
                    }
                    ,
                    !n.support.transition)
                    return o.call(this);
                s = n.camelCase(["scroll", u].join("-"));
                this.$element.one("bsTransitionEnd", n.proxy(o, this)).emulateTransitionEnd(t.TRANSITION_DURATION)[u](this.$element[0][s])
            }
        }
            ;
        t.prototype.hide = function () {
            var r, i, u;
            if (!this.transitioning && this.$element.hasClass("in") && (r = n.Event("hide.bs.collapse"),
                this.$element.trigger(r),
                !r.isDefaultPrevented()))
                return i = this.dimension(),
                    this.$element[i](this.$element[i]())[0].offsetHeight,
                    this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1),
                    this.$trigger.addClass("collapsed").attr("aria-expanded", !1),
                    this.transitioning = 1,
                    u = function () {
                        this.transitioning = 0;
                        this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                    }
                    ,
                    n.support.transition ? void this.$element[i](0).one("bsTransitionEnd", n.proxy(u, this)).emulateTransitionEnd(t.TRANSITION_DURATION) : u.call(this)
        }
            ;
        t.prototype.toggle = function () {
            this[this.$element.hasClass("in") ? "hide" : "show"]()
        }
            ;
        t.prototype.getParent = function () {
            return n(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(n.proxy(function (t, i) {
                var u = n(i);
                this.addAriaAndCollapsedClass(r(u), u)
            }, this)).end()
        }
            ;
        t.prototype.addAriaAndCollapsedClass = function (n, t) {
            var i = n.hasClass("in");
            n.attr("aria-expanded", i);
            t.toggleClass("collapsed", !i).attr("aria-expanded", i)
        }
            ;
        u = n.fn.collapse;
        n.fn.collapse = i;
        n.fn.collapse.Constructor = t;
        n.fn.collapse.noConflict = function () {
            return n.fn.collapse = u,
                this
        }
            ;
        n(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (t) {
            var u = n(this);
            u.attr("data-target") || t.preventDefault();
            var f = r(u)
                , e = f.data("bs.collapse")
                , o = e ? "toggle" : u.data();
            i.call(f, o)
        })
    }(jQuery),
    +function (n) {
        "use strict";
        function r(t) {
            var i = t.attr("data-target"), r;
            return i || (i = t.attr("href"),
                i = i && /#[A-Za-z]/.test(i) && i.replace(/.*(?=#[^\s]*$)/, "")),
                r = i && n(i),
                r && r.length ? r : t.parent()
        }
        function u(t) {
            t && 3 === t.which || (n(o).remove(),
                n(i).each(function () {
                    var u = n(this)
                        , i = r(u)
                        , f = {
                            relatedTarget: this
                        };
                    i.hasClass("open") && (t && "click" == t.type && /input|textarea/i.test(t.target.tagName) && n.contains(i[0], t.target) || (i.trigger(t = n.Event("hide.bs.dropdown", f)),
                        t.isDefaultPrevented() || (u.attr("aria-expanded", "false"),
                            i.removeClass("open").trigger(n.Event("hidden.bs.dropdown", f)))))
                }))
        }
        function e(i) {
            return this.each(function () {
                var r = n(this)
                    , u = r.data("bs.dropdown");
                u || r.data("bs.dropdown", u = new t(this));
                "string" == typeof i && u[i].call(r)
            })
        }
        var o = ".dropdown-backdrop", i = '[data-toggle="dropdown"]', t = function (t) {
            n(t).on("click.bs.dropdown", this.toggle)
        }, f;
        t.VERSION = "3.3.7";
        t.prototype.toggle = function (t) {
            var f = n(this), i, o, e;
            if (!f.is(".disabled, :disabled")) {
                if (i = r(f),
                    o = i.hasClass("open"),
                    u(),
                    !o) {
                    if ("ontouchstart" in document.documentElement && !i.closest(".navbar-nav").length && n(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(n(this)).on("click", u),
                        e = {
                            relatedTarget: this
                        },
                        i.trigger(t = n.Event("show.bs.dropdown", e)),
                        t.isDefaultPrevented())
                        return;
                    f.trigger("focus").attr("aria-expanded", "true");
                    i.toggleClass("open").trigger(n.Event("shown.bs.dropdown", e))
                }
                return !1
            }
        }
            ;
        t.prototype.keydown = function (t) {
            var e, o, s, h, f, u;
            if (/(38|40|27|32)/.test(t.which) && !/input|textarea/i.test(t.target.tagName) && (e = n(this),
                t.preventDefault(),
                t.stopPropagation(),
                !e.is(".disabled, :disabled"))) {
                if (o = r(e),
                    s = o.hasClass("open"),
                    !s && 27 != t.which || s && 27 == t.which)
                    return 27 == t.which && o.find(i).trigger("focus"),
                        e.trigger("click");
                h = " li:not(.disabled):visible a";
                f = o.find(".dropdown-menu" + h);
                f.length && (u = f.index(t.target),
                    38 == t.which && u > 0 && u-- ,
                    40 == t.which && u < f.length - 1 && u++ ,
                    ~u || (u = 0),
                    f.eq(u).trigger("focus"))
            }
        }
            ;
        f = n.fn.dropdown;
        n.fn.dropdown = e;
        n.fn.dropdown.Constructor = t;
        n.fn.dropdown.noConflict = function () {
            return n.fn.dropdown = f,
                this
        }
            ;
        n(document).on("click.bs.dropdown.data-api", u).on("click.bs.dropdown.data-api", ".dropdown form", function (n) {
            n.stopPropagation()
        }).on("click.bs.dropdown.data-api", i, t.prototype.toggle).on("keydown.bs.dropdown.data-api", i, t.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", t.prototype.keydown)
    }(jQuery),
    +function (n) {
        "use strict";
        function i(i, r) {
            return this.each(function () {
                var f = n(this)
                    , u = f.data("bs.modal")
                    , e = n.extend({}, t.DEFAULTS, f.data(), "object" == typeof i && i);
                u || f.data("bs.modal", u = new t(this, e));
                "string" == typeof i ? u[i](r) : e.show && u.show(r)
            })
        }
        var t = function (t, i) {
            this.options = i;
            this.$body = n(document.body);
            this.$element = n(t);
            this.$dialog = this.$element.find(".modal-dialog");
            this.$backdrop = null;
            this.isShown = null;
            this.originalBodyPad = null;
            this.scrollbarWidth = 0;
            this.ignoreBackdropClick = !1;
            this.options.remote && this.$element.find(".modal-content").load(this.options.remote, n.proxy(function () {
                this.$element.trigger("loaded.bs.modal")
            }, this))
        }, r;
        t.VERSION = "3.3.7";
        t.TRANSITION_DURATION = 300;
        t.BACKDROP_TRANSITION_DURATION = 150;
        t.DEFAULTS = {
            backdrop: !0,
            keyboard: !0,
            show: !0
        };
        t.prototype.toggle = function (n) {
            return this.isShown ? this.hide() : this.show(n)
        }
            ;
        t.prototype.show = function (i) {
            var r = this
                , u = n.Event("show.bs.modal", {
                    relatedTarget: i
                });
            this.$element.trigger(u);
            this.isShown || u.isDefaultPrevented() || (this.isShown = !0,
                this.checkScrollbar(),
                this.setScrollbar(),
                this.$body.addClass("modal-open"),
                this.escape(),
                this.resize(),
                this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', n.proxy(this.hide, this)),
                this.$dialog.on("mousedown.dismiss.bs.modal", function () {
                    r.$element.one("mouseup.dismiss.bs.modal", function (t) {
                        n(t.target).is(r.$element) && (r.ignoreBackdropClick = !0)
                    })
                }),
                this.backdrop(function () {
                    var f = n.support.transition && r.$element.hasClass("fade"), u;
                    r.$element.parent().length || r.$element.appendTo(r.$body);
                    r.$element.show().scrollTop(0);
                    r.adjustDialog();
                    f && r.$element[0].offsetWidth;
                    r.$element.addClass("in");
                    r.enforceFocus();
                    u = n.Event("shown.bs.modal", {
                        relatedTarget: i
                    });
                    f ? r.$dialog.one("bsTransitionEnd", function () {
                        r.$element.trigger("focus").trigger(u)
                    }).emulateTransitionEnd(t.TRANSITION_DURATION) : r.$element.trigger("focus").trigger(u)
                }))
        }
            ;
        t.prototype.hide = function (i) {
            i && i.preventDefault();
            i = n.Event("hide.bs.modal");
            this.$element.trigger(i);
            this.isShown && !i.isDefaultPrevented() && (this.isShown = !1,
                this.escape(),
                this.resize(),
                n(document).off("focusin.bs.modal"),
                this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),
                this.$dialog.off("mousedown.dismiss.bs.modal"),
                n.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", n.proxy(this.hideModal, this)).emulateTransitionEnd(t.TRANSITION_DURATION) : this.hideModal())
        }
            ;
        t.prototype.enforceFocus = function () {
            n(document).off("focusin.bs.modal").on("focusin.bs.modal", n.proxy(function (n) {
                document === n.target || this.$element[0] === n.target || this.$element.has(n.target).length || this.$element.trigger("focus")
            }, this))
        }
            ;
        t.prototype.escape = function () {
            this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", n.proxy(function (n) {
                27 == n.which && this.hide()
            }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
        }
            ;
        t.prototype.resize = function () {
            this.isShown ? n(window).on("resize.bs.modal", n.proxy(this.handleUpdate, this)) : n(window).off("resize.bs.modal")
        }
            ;
        t.prototype.hideModal = function () {
            var n = this;
            this.$element.hide();
            this.backdrop(function () {
                n.$body.removeClass("modal-open");
                n.resetAdjustments();
                n.resetScrollbar();
                n.$element.trigger("hidden.bs.modal")
            })
        }
            ;
        t.prototype.removeBackdrop = function () {
            this.$backdrop && this.$backdrop.remove();
            this.$backdrop = null
        }
            ;
        t.prototype.backdrop = function (i) {
            var e = this, f = this.$element.hasClass("fade") ? "fade" : "", r, u;
            if (this.isShown && this.options.backdrop) {
                if (r = n.support.transition && f,
                    this.$backdrop = n(document.createElement("div")).addClass("modal-backdrop " + f).appendTo(this.$body),
                    this.$element.on("click.dismiss.bs.modal", n.proxy(function (n) {
                        return this.ignoreBackdropClick ? void (this.ignoreBackdropClick = !1) : void (n.target === n.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
                    }, this)),
                    r && this.$backdrop[0].offsetWidth,
                    this.$backdrop.addClass("in"),
                    !i)
                    return;
                r ? this.$backdrop.one("bsTransitionEnd", i).emulateTransitionEnd(t.BACKDROP_TRANSITION_DURATION) : i()
            } else
                !this.isShown && this.$backdrop ? (this.$backdrop.removeClass("in"),
                    u = function () {
                        e.removeBackdrop();
                        i && i()
                    }
                    ,
                    n.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", u).emulateTransitionEnd(t.BACKDROP_TRANSITION_DURATION) : u()) : i && i()
        }
            ;
        t.prototype.handleUpdate = function () {
            this.adjustDialog()
        }
            ;
        t.prototype.adjustDialog = function () {
            var n = this.$element[0].scrollHeight > document.documentElement.clientHeight;
            this.$element.css({
                paddingLeft: !this.bodyIsOverflowing && n ? this.scrollbarWidth : "",
                paddingRight: this.bodyIsOverflowing && !n ? this.scrollbarWidth : ""
            })
        }
            ;
        t.prototype.resetAdjustments = function () {
            this.$element.css({
                paddingLeft: "",
                paddingRight: ""
            })
        }
            ;
        t.prototype.checkScrollbar = function () {
            var n = window.innerWidth, t;
            n || (t = document.documentElement.getBoundingClientRect(),
                n = t.right - Math.abs(t.left));
            this.bodyIsOverflowing = document.body.clientWidth < n;
            this.scrollbarWidth = this.measureScrollbar()
        }
            ;
        t.prototype.setScrollbar = function () {
            var n = parseInt(this.$body.css("padding-right") || 0, 10);
            this.originalBodyPad = document.body.style.paddingRight || "";
            this.bodyIsOverflowing && this.$body.css("padding-right", n + this.scrollbarWidth)
        }
            ;
        t.prototype.resetScrollbar = function () {
            this.$body.css("padding-right", this.originalBodyPad)
        }
            ;
        t.prototype.measureScrollbar = function () {
            var n = document.createElement("div"), t;
            return n.className = "modal-scrollbar-measure",
                this.$body.append(n),
                t = n.offsetWidth - n.clientWidth,
                this.$body[0].removeChild(n),
                t
        }
            ;
        r = n.fn.modal;
        n.fn.modal = i;
        n.fn.modal.Constructor = t;
        n.fn.modal.noConflict = function () {
            return n.fn.modal = r,
                this
        }
            ;
        n(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (t) {
            var r = n(this)
                , f = r.attr("href")
                , u = n(r.attr("data-target") || f && f.replace(/.*(?=#[^\s]+$)/, ""))
                , e = u.data("bs.modal") ? "toggle" : n.extend({
                    remote: !/#/.test(f) && f
                }, u.data(), r.data());
            r.is("a") && t.preventDefault();
            u.one("show.bs.modal", function (n) {
                n.isDefaultPrevented() || u.one("hidden.bs.modal", function () {
                    r.is(":visible") && r.trigger("focus")
                })
            });
            i.call(u, e, this)
        })
    }(jQuery),
    +function (n) {
        "use strict";
        function r(i) {
            return this.each(function () {
                var u = n(this)
                    , r = u.data("bs.tooltip")
                    , f = "object" == typeof i && i;
                !r && /destroy|hide/.test(i) || (r || u.data("bs.tooltip", r = new t(this, f)),
                    "string" == typeof i && r[i]())
            })
        }
        var t = function (n, t) {
            this.type = null;
            this.options = null;
            this.enabled = null;
            this.timeout = null;
            this.hoverState = null;
            this.$element = null;
            this.inState = null;
            this.init("tooltip", n, t)
        }, i;
        t.VERSION = "3.3.7";
        t.TRANSITION_DURATION = 150;
        t.DEFAULTS = {
            animation: !0,
            placement: "top",
            selector: !1,
            template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"><\/div><div class="tooltip-inner"><\/div><\/div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !1,
            container: !1,
            viewport: {
                selector: "body",
                padding: 0
            }
        };
        t.prototype.init = function (t, i, r) {
            var f, e, u, o, s;
            if (this.enabled = !0,
                this.type = t,
                this.$element = n(i),
                this.options = this.getOptions(r),
                this.$viewport = this.options.viewport && n(n.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport),
                this.inState = {
                    click: !1,
                    hover: !1,
                    focus: !1
                },
                this.$element[0] instanceof document.constructor && !this.options.selector)
                throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
            for (f = this.options.trigger.split(" "),
                e = f.length; e--;)
                if (u = f[e],
                    "click" == u)
                    this.$element.on("click." + this.type, this.options.selector, n.proxy(this.toggle, this));
                else
                    "manual" != u && (o = "hover" == u ? "mouseenter" : "focusin",
                        s = "hover" == u ? "mouseleave" : "focusout",
                        this.$element.on(o + "." + this.type, this.options.selector, n.proxy(this.enter, this)),
                        this.$element.on(s + "." + this.type, this.options.selector, n.proxy(this.leave, this)));
            this.options.selector ? this._options = n.extend({}, this.options, {
                trigger: "manual",
                selector: ""
            }) : this.fixTitle()
        }
            ;
        t.prototype.getDefaults = function () {
            return t.DEFAULTS
        }
            ;
        t.prototype.getOptions = function (t) {
            return t = n.extend({}, this.getDefaults(), this.$element.data(), t),
                t.delay && "number" == typeof t.delay && (t.delay = {
                    show: t.delay,
                    hide: t.delay
                }),
                t
        }
            ;
        t.prototype.getDelegateOptions = function () {
            var t = {}
                , i = this.getDefaults();
            return this._options && n.each(this._options, function (n, r) {
                i[n] != r && (t[n] = r)
            }),
                t
        }
            ;
        t.prototype.enter = function (t) {
            var i = t instanceof this.constructor ? t : n(t.currentTarget).data("bs." + this.type);
            return i || (i = new this.constructor(t.currentTarget, this.getDelegateOptions()),
                n(t.currentTarget).data("bs." + this.type, i)),
                t instanceof n.Event && (i.inState["focusin" == t.type ? "focus" : "hover"] = !0),
                i.tip().hasClass("in") || "in" == i.hoverState ? void (i.hoverState = "in") : (clearTimeout(i.timeout),
                    i.hoverState = "in",
                    i.options.delay && i.options.delay.show ? void (i.timeout = setTimeout(function () {
                        "in" == i.hoverState && i.show()
                    }, i.options.delay.show)) : i.show())
        }
            ;
        t.prototype.isInStateTrue = function () {
            for (var n in this.inState)
                if (this.inState[n])
                    return !0;
            return !1
        }
            ;
        t.prototype.leave = function (t) {
            var i = t instanceof this.constructor ? t : n(t.currentTarget).data("bs." + this.type);
            if (i || (i = new this.constructor(t.currentTarget, this.getDelegateOptions()),
                n(t.currentTarget).data("bs." + this.type, i)),
                t instanceof n.Event && (i.inState["focusout" == t.type ? "focus" : "hover"] = !1),
                !i.isInStateTrue())
                return clearTimeout(i.timeout),
                    i.hoverState = "out",
                    i.options.delay && i.options.delay.hide ? void (i.timeout = setTimeout(function () {
                        "out" == i.hoverState && i.hide()
                    }, i.options.delay.hide)) : i.hide()
        }
            ;
        t.prototype.show = function () {
            var c = n.Event("show.bs." + this.type), l, p, e, w, h;
            if (this.hasContent() && this.enabled) {
                if (this.$element.trigger(c),
                    l = n.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]),
                    c.isDefaultPrevented() || !l)
                    return;
                var u = this
                    , r = this.tip()
                    , a = this.getUID(this.type);
                this.setContent();
                r.attr("id", a);
                this.$element.attr("aria-describedby", a);
                this.options.animation && r.addClass("fade");
                var i = "function" == typeof this.options.placement ? this.options.placement.call(this, r[0], this.$element[0]) : this.options.placement
                    , v = /\s?auto?\s?/i
                    , y = v.test(i);
                y && (i = i.replace(v, "") || "top");
                r.detach().css({
                    top: 0,
                    left: 0,
                    display: "block"
                }).addClass(i).data("bs." + this.type, this);
                this.options.container ? r.appendTo(this.options.container) : r.insertAfter(this.$element);
                this.$element.trigger("inserted.bs." + this.type);
                var f = this.getPosition()
                    , o = r[0].offsetWidth
                    , s = r[0].offsetHeight;
                y && (p = i,
                    e = this.getPosition(this.$viewport),
                    i = "bottom" == i && f.bottom + s > e.bottom ? "top" : "top" == i && f.top - s < e.top ? "bottom" : "right" == i && f.right + o > e.width ? "left" : "left" == i && f.left - o < e.left ? "right" : i,
                    r.removeClass(p).addClass(i));
                w = this.getCalculatedOffset(i, f, o, s);
                this.applyPlacement(w, i);
                h = function () {
                    var n = u.hoverState;
                    u.$element.trigger("shown.bs." + u.type);
                    u.hoverState = null;
                    "out" == n && u.leave(u)
                }
                    ;
                n.support.transition && this.$tip.hasClass("fade") ? r.one("bsTransitionEnd", h).emulateTransitionEnd(t.TRANSITION_DURATION) : h()
            }
        }
            ;
        t.prototype.applyPlacement = function (t, i) {
            var r = this.tip(), l = r[0].offsetWidth, e = r[0].offsetHeight, o = parseInt(r.css("margin-top"), 10), s = parseInt(r.css("margin-left"), 10), h, f, u;
            isNaN(o) && (o = 0);
            isNaN(s) && (s = 0);
            t.top += o;
            t.left += s;
            n.offset.setOffset(r[0], n.extend({
                using: function (n) {
                    r.css({
                        top: Math.round(n.top),
                        left: Math.round(n.left)
                    })
                }
            }, t), 0);
            r.addClass("in");
            h = r[0].offsetWidth;
            f = r[0].offsetHeight;
            "top" == i && f != e && (t.top = t.top + e - f);
            u = this.getViewportAdjustedDelta(i, t, h, f);
            u.left ? t.left += u.left : t.top += u.top;
            var c = /top|bottom/.test(i)
                , a = c ? 2 * u.left - l + h : 2 * u.top - e + f
                , v = c ? "offsetWidth" : "offsetHeight";
            r.offset(t);
            this.replaceArrow(a, r[0][v], c)
        }
            ;
        t.prototype.replaceArrow = function (n, t, i) {
            this.arrow().css(i ? "left" : "top", 50 * (1 - n / t) + "%").css(i ? "top" : "left", "")
        }
            ;
        t.prototype.setContent = function () {
            var n = this.tip()
                , t = this.getTitle();
            n.find(".tooltip-inner")[this.options.html ? "html" : "text"](t);
            n.removeClass("fade in top bottom left right")
        }
            ;
        t.prototype.hide = function (i) {
            function f() {
                "in" != r.hoverState && u.detach();
                r.$element && r.$element.removeAttr("aria-describedby").trigger("hidden.bs." + r.type);
                i && i()
            }
            var r = this
                , u = n(this.$tip)
                , e = n.Event("hide.bs." + this.type);
            if (this.$element.trigger(e),
                !e.isDefaultPrevented())
                return u.removeClass("in"),
                    n.support.transition && u.hasClass("fade") ? u.one("bsTransitionEnd", f).emulateTransitionEnd(t.TRANSITION_DURATION) : f(),
                    this.hoverState = null,
                    this
        }
            ;
        t.prototype.fixTitle = function () {
            var n = this.$element;
            (n.attr("title") || "string" != typeof n.attr("data-original-title")) && n.attr("data-original-title", n.attr("title") || "").attr("title", "")
        }
            ;
        t.prototype.hasContent = function () {
            return this.getTitle()
        }
            ;
        t.prototype.getPosition = function (t) {
            t = t || this.$element;
            var r = t[0]
                , u = "BODY" == r.tagName
                , i = r.getBoundingClientRect();
            null == i.width && (i = n.extend({}, i, {
                width: i.right - i.left,
                height: i.bottom - i.top
            }));
            var f = window.SVGElement && r instanceof window.SVGElement
                , e = u ? {
                    top: 0,
                    left: 0
                } : f ? null : t.offset()
                , o = {
                    scroll: u ? document.documentElement.scrollTop || document.body.scrollTop : t.scrollTop()
                }
                , s = u ? {
                    width: n(window).width(),
                    height: n(window).height()
                } : null;
            return n.extend({}, i, o, s, e)
        }
            ;
        t.prototype.getCalculatedOffset = function (n, t, i, r) {
            return "bottom" == n ? {
                top: t.top + t.height,
                left: t.left + t.width / 2 - i / 2
            } : "top" == n ? {
                top: t.top - r,
                left: t.left + t.width / 2 - i / 2
            } : "left" == n ? {
                top: t.top + t.height / 2 - r / 2,
                left: t.left - i
            } : {
                            top: t.top + t.height / 2 - r / 2,
                            left: t.left + t.width
                        }
        }
            ;
        t.prototype.getViewportAdjustedDelta = function (n, t, i, r) {
            var f = {
                top: 0,
                left: 0
            }, e, u, o, s, h, c;
            return this.$viewport ? (e = this.options.viewport && this.options.viewport.padding || 0,
                u = this.getPosition(this.$viewport),
                /right|left/.test(n) ? (o = t.top - e - u.scroll,
                    s = t.top + e - u.scroll + r,
                    o < u.top ? f.top = u.top - o : s > u.top + u.height && (f.top = u.top + u.height - s)) : (h = t.left - e,
                        c = t.left + e + i,
                        h < u.left ? f.left = u.left - h : c > u.right && (f.left = u.left + u.width - c)),
                f) : f
        }
            ;
        t.prototype.getTitle = function () {
            var t = this.$element
                , n = this.options;
            return t.attr("data-original-title") || ("function" == typeof n.title ? n.title.call(t[0]) : n.title)
        }
            ;
        t.prototype.getUID = function (n) {
            do
                n += ~~(1e6 * Math.random());
            while (document.getElementById(n)); return n
        }
            ;
        t.prototype.tip = function () {
            if (!this.$tip && (this.$tip = n(this.options.template),
                1 != this.$tip.length))
                throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
            return this.$tip
        }
            ;
        t.prototype.arrow = function () {
            return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
        }
            ;
        t.prototype.enable = function () {
            this.enabled = !0
        }
            ;
        t.prototype.disable = function () {
            this.enabled = !1
        }
            ;
        t.prototype.toggleEnabled = function () {
            this.enabled = !this.enabled
        }
            ;
        t.prototype.toggle = function (t) {
            var i = this;
            t && (i = n(t.currentTarget).data("bs." + this.type),
                i || (i = new this.constructor(t.currentTarget, this.getDelegateOptions()),
                    n(t.currentTarget).data("bs." + this.type, i)));
            t ? (i.inState.click = !i.inState.click,
                i.isInStateTrue() ? i.enter(i) : i.leave(i)) : i.tip().hasClass("in") ? i.leave(i) : i.enter(i)
        }
            ;
        t.prototype.destroy = function () {
            var n = this;
            clearTimeout(this.timeout);
            this.hide(function () {
                n.$element.off("." + n.type).removeData("bs." + n.type);
                n.$tip && n.$tip.detach();
                n.$tip = null;
                n.$arrow = null;
                n.$viewport = null;
                n.$element = null
            })
        }
            ;
        i = n.fn.tooltip;
        n.fn.tooltip = r;
        n.fn.tooltip.Constructor = t;
        n.fn.tooltip.noConflict = function () {
            return n.fn.tooltip = i,
                this
        }
    }(jQuery),
    +function (n) {
        "use strict";
        function r(i) {
            return this.each(function () {
                var u = n(this)
                    , r = u.data("bs.popover")
                    , f = "object" == typeof i && i;
                !r && /destroy|hide/.test(i) || (r || u.data("bs.popover", r = new t(this, f)),
                    "string" == typeof i && r[i]())
            })
        }
        var t = function (n, t) {
            this.init("popover", n, t)
        }, i;
        if (!n.fn.tooltip)
            throw new Error("Popover requires tooltip.js");
        t.VERSION = "3.3.7";
        t.DEFAULTS = n.extend({}, n.fn.tooltip.Constructor.DEFAULTS, {
            placement: "right",
            trigger: "click",
            content: "",
            template: '<div class="popover" role="tooltip"><div class="arrow"><\/div><h3 class="popover-title"><\/h3><div class="popover-content"><\/div><\/div>'
        });
        t.prototype = n.extend({}, n.fn.tooltip.Constructor.prototype);
        t.prototype.constructor = t;
        t.prototype.getDefaults = function () {
            return t.DEFAULTS
        }
            ;
        t.prototype.setContent = function () {
            var n = this.tip()
                , i = this.getTitle()
                , t = this.getContent();
            n.find(".popover-title")[this.options.html ? "html" : "text"](i);
            n.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof t ? "html" : "append" : "text"](t);
            n.removeClass("fade top bottom left right in");
            n.find(".popover-title").html() || n.find(".popover-title").hide()
        }
            ;
        t.prototype.hasContent = function () {
            return this.getTitle() || this.getContent()
        }
            ;
        t.prototype.getContent = function () {
            var t = this.$element
                , n = this.options;
            return t.attr("data-content") || ("function" == typeof n.content ? n.content.call(t[0]) : n.content)
        }
            ;
        t.prototype.arrow = function () {
            return this.$arrow = this.$arrow || this.tip().find(".arrow")
        }
            ;
        i = n.fn.popover;
        n.fn.popover = r;
        n.fn.popover.Constructor = t;
        n.fn.popover.noConflict = function () {
            return n.fn.popover = i,
                this
        }
    }(jQuery),
    +function (n) {
        "use strict";
        function t(i, r) {
            this.$body = n(document.body);
            this.$scrollElement = n(n(i).is(document.body) ? window : i);
            this.options = n.extend({}, t.DEFAULTS, r);
            this.selector = (this.options.target || "") + " .nav li > a";
            this.offsets = [];
            this.targets = [];
            this.activeTarget = null;
            this.scrollHeight = 0;
            this.$scrollElement.on("scroll.bs.scrollspy", n.proxy(this.process, this));
            this.refresh();
            this.process()
        }
        function i(i) {
            return this.each(function () {
                var u = n(this)
                    , r = u.data("bs.scrollspy")
                    , f = "object" == typeof i && i;
                r || u.data("bs.scrollspy", r = new t(this, f));
                "string" == typeof i && r[i]()
            })
        }
        t.VERSION = "3.3.7";
        t.DEFAULTS = {
            offset: 10
        };
        t.prototype.getScrollHeight = function () {
            return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
        }
            ;
        t.prototype.refresh = function () {
            var t = this
                , i = "offset"
                , r = 0;
            this.offsets = [];
            this.targets = [];
            this.scrollHeight = this.getScrollHeight();
            n.isWindow(this.$scrollElement[0]) || (i = "position",
                r = this.$scrollElement.scrollTop());
            this.$body.find(this.selector).map(function () {
                var f = n(this)
                    , u = f.data("target") || f.attr("href")
                    , t = /^#./.test(u) && n(u);
                return t && t.length && t.is(":visible") && [[t[i]().top + r, u]] || null
            }).sort(function (n, t) {
                return n[0] - t[0]
            }).each(function () {
                t.offsets.push(this[0]);
                t.targets.push(this[1])
            })
        }
            ;
        t.prototype.process = function () {
            var n, i = this.$scrollElement.scrollTop() + this.options.offset, f = this.getScrollHeight(), e = this.options.offset + f - this.$scrollElement.height(), t = this.offsets, r = this.targets, u = this.activeTarget;
            if (this.scrollHeight != f && this.refresh(),
                i >= e)
                return u != (n = r[r.length - 1]) && this.activate(n);
            if (u && i < t[0])
                return this.activeTarget = null,
                    this.clear();
            for (n = t.length; n--;)
                u != r[n] && i >= t[n] && (void 0 === t[n + 1] || i < t[n + 1]) && this.activate(r[n])
        }
            ;
        t.prototype.activate = function (t) {
            this.activeTarget = t;
            this.clear();
            var r = this.selector + '[data-target="' + t + '"],' + this.selector + '[href="' + t + '"]'
                , i = n(r).parents("li").addClass("active");
            i.parent(".dropdown-menu").length && (i = i.closest("li.dropdown").addClass("active"));
            i.trigger("activate.bs.scrollspy")
        }
            ;
        t.prototype.clear = function () {
            n(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
        }
            ;
        var r = n.fn.scrollspy;
        n.fn.scrollspy = i;
        n.fn.scrollspy.Constructor = t;
        n.fn.scrollspy.noConflict = function () {
            return n.fn.scrollspy = r,
                this
        }
            ;
        n(window).on("load.bs.scrollspy.data-api", function () {
            n('[data-spy="scroll"]').each(function () {
                var t = n(this);
                i.call(t, t.data())
            })
        })
    }(jQuery),
    +function (n) {
        "use strict";
        function r(i) {
            return this.each(function () {
                var u = n(this)
                    , r = u.data("bs.tab");
                r || u.data("bs.tab", r = new t(this));
                "string" == typeof i && r[i]()
            })
        }
        var t = function (t) {
            this.element = n(t)
        }, u, i;
        t.VERSION = "3.3.7";
        t.TRANSITION_DURATION = 150;
        t.prototype.show = function () {
            var t = this.element, f = t.closest("ul:not(.dropdown-menu)"), i = t.data("target"), u;
            if (i || (i = t.attr("href"),
                i = i && i.replace(/.*(?=#[^\s]*$)/, "")),
                !t.parent("li").hasClass("active")) {
                var r = f.find(".active:last a")
                    , e = n.Event("hide.bs.tab", {
                        relatedTarget: t[0]
                    })
                    , o = n.Event("show.bs.tab", {
                        relatedTarget: r[0]
                    });
                (r.trigger(e),
                    t.trigger(o),
                    o.isDefaultPrevented() || e.isDefaultPrevented()) || (u = n(i),
                        this.activate(t.closest("li"), f),
                        this.activate(u, u.parent(), function () {
                            r.trigger({
                                type: "hidden.bs.tab",
                                relatedTarget: t[0]
                            });
                            t.trigger({
                                type: "shown.bs.tab",
                                relatedTarget: r[0]
                            })
                        }))
            }
        }
            ;
        t.prototype.activate = function (i, r, u) {
            function e() {
                f.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1);
                i.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0);
                o ? (i[0].offsetWidth,
                    i.addClass("in")) : i.removeClass("fade");
                i.parent(".dropdown-menu").length && i.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0);
                u && u()
            }
            var f = r.find("> .active")
                , o = u && n.support.transition && (f.length && f.hasClass("fade") || !!r.find("> .fade").length);
            f.length && o ? f.one("bsTransitionEnd", e).emulateTransitionEnd(t.TRANSITION_DURATION) : e();
            f.removeClass("in")
        }
            ;
        u = n.fn.tab;
        n.fn.tab = r;
        n.fn.tab.Constructor = t;
        n.fn.tab.noConflict = function () {
            return n.fn.tab = u,
                this
        }
            ;
        i = function (t) {
            t.preventDefault();
            r.call(n(this), "show")
        }
            ;
        n(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', i).on("click.bs.tab.data-api", '[data-toggle="pill"]', i)
    }(jQuery),
    +function (n) {
        "use strict";
        function i(i) {
            return this.each(function () {
                var u = n(this)
                    , r = u.data("bs.affix")
                    , f = "object" == typeof i && i;
                r || u.data("bs.affix", r = new t(this, f));
                "string" == typeof i && r[i]()
            })
        }
        var t = function (i, r) {
            this.options = n.extend({}, t.DEFAULTS, r);
            this.$target = n(this.options.target).on("scroll.bs.affix.data-api", n.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", n.proxy(this.checkPositionWithEventLoop, this));
            this.$element = n(i);
            this.affixed = null;
            this.unpin = null;
            this.pinnedOffset = null;
            this.checkPosition()
        }, r;
        t.VERSION = "3.3.7";
        t.RESET = "affix affix-top affix-bottom";
        t.DEFAULTS = {
            offset: 0,
            target: window
        };
        t.prototype.getState = function (n, t, i, r) {
            var u = this.$target.scrollTop()
                , f = this.$element.offset()
                , e = this.$target.height();
            if (null != i && "top" == this.affixed)
                return u < i && "top";
            if ("bottom" == this.affixed)
                return null != i ? !(u + this.unpin <= f.top) && "bottom" : !(u + e <= n - r) && "bottom";
            var o = null == this.affixed
                , s = o ? u : f.top
                , h = o ? e : t;
            return null != i && u <= i ? "top" : null != r && s + h >= n - r && "bottom"
        }
            ;
        t.prototype.getPinnedOffset = function () {
            if (this.pinnedOffset)
                return this.pinnedOffset;
            this.$element.removeClass(t.RESET).addClass("affix");
            var n = this.$target.scrollTop()
                , i = this.$element.offset();
            return this.pinnedOffset = i.top - n
        }
            ;
        t.prototype.checkPositionWithEventLoop = function () {
            setTimeout(n.proxy(this.checkPosition, this), 1)
        }
            ;
        t.prototype.checkPosition = function () {
            var i, e, o;
            if (this.$element.is(":visible")) {
                var s = this.$element.height()
                    , r = this.options.offset
                    , f = r.top
                    , u = r.bottom
                    , h = Math.max(n(document).height(), n(document.body).height());
                if ("object" != typeof r && (u = f = r),
                    "function" == typeof f && (f = r.top(this.$element)),
                    "function" == typeof u && (u = r.bottom(this.$element)),
                    i = this.getState(h, s, f, u),
                    this.affixed != i) {
                    if (null != this.unpin && this.$element.css("top", ""),
                        e = "affix" + (i ? "-" + i : ""),
                        o = n.Event(e + ".bs.affix"),
                        this.$element.trigger(o),
                        o.isDefaultPrevented())
                        return;
                    this.affixed = i;
                    this.unpin = "bottom" == i ? this.getPinnedOffset() : null;
                    this.$element.removeClass(t.RESET).addClass(e).trigger(e.replace("affix", "affixed") + ".bs.affix")
                }
                "bottom" == i && this.$element.offset({
                    top: h - s - u
                })
            }
        }
            ;
        r = n.fn.affix;
        n.fn.affix = i;
        n.fn.affix.Constructor = t;
        n.fn.affix.noConflict = function () {
            return n.fn.affix = r,
                this
        }
            ;
        n(window).on("load", function () {
            n('[data-spy="affix"]').each(function () {
                var r = n(this)
                    , t = r.data();
                t.offset = t.offset || {};
                null != t.offsetBottom && (t.offset.bottom = t.offsetBottom);
                null != t.offsetTop && (t.offset.top = t.offsetTop);
                i.call(r, t)
            })
        })
    }(jQuery),
    function (n) {
        n.fn.extend({
            slimScroll: function (i) {
                var r = n.extend({
                    width: "auto",
                    height: "250px",
                    size: "7px",
                    color: "#000",
                    position: "right",
                    distance: "1px",
                    start: "top",
                    opacity: .4,
                    alwaysVisible: !1,
                    disableFadeOut: !1,
                    railVisible: !1,
                    railColor: "#333",
                    railOpacity: .2,
                    railDraggable: !0,
                    railClass: "slimScrollRail",
                    barClass: "slimScrollBar",
                    wrapperClass: "slimScrollDiv",
                    allowPageScroll: !1,
                    wheelStep: 20,
                    touchScrollStep: 200,
                    borderRadius: "7px",
                    railBorderRadius: "7px"
                }, i);
                return this.each(function () {
                    function p(t) {
                        if (v) {
                            t = t || window.event;
                            var i = 0;
                            t.wheelDelta && (i = -t.wheelDelta / 120);
                            t.detail && (i = t.detail / 3);
                            n(t.target || t.srcTarget || t.srcElement).closest("." + r.wrapperClass).is(u.parent()) && h(i, !0);
                            t.preventDefault && !s && t.preventDefault();
                            s || (t.returnValue = !1)
                        }
                    }
                    function h(n, t, i) {
                        s = !1;
                        var e = u.outerHeight() - f.outerHeight();
                        t && (t = parseInt(f.css("top")) + n * parseInt(r.wheelStep) / 100 * f.outerHeight(),
                            t = Math.min(Math.max(t, 0), e),
                            t = 0 < n ? Math.ceil(t) : Math.floor(t),
                            f.css({
                                top: t + "px"
                            }));
                        o = parseInt(f.css("top")) / (u.outerHeight() - f.outerHeight());
                        t = o * (u[0].scrollHeight - u.outerHeight());
                        i && (t = n,
                            n = t / u[0].scrollHeight * u.outerHeight(),
                            n = Math.min(Math.max(n, 0), e),
                            f.css({
                                top: n + "px"
                            }));
                        u.scrollTop(t);
                        u.trigger("slimscrolling", ~~t);
                        b();
                        l()
                    }
                    function w() {
                        y = Math.max(u.outerHeight() / u[0].scrollHeight * u.outerHeight(), 30);
                        f.css({
                            height: y + "px"
                        });
                        var n = y == u.outerHeight() ? "none" : "block";
                        f.css({
                            display: n
                        })
                    }
                    function b() {
                        w();
                        clearTimeout(nt);
                        o == ~~o ? (s = r.allowPageScroll,
                            tt != o && u.trigger("slimscroll", 0 == ~~o ? "top" : "bottom")) : s = !1;
                        tt = o;
                        y >= u.outerHeight() ? s = !0 : (f.stop(!0, !0).fadeIn("fast"),
                            r.railVisible && c.stop(!0, !0).fadeIn("fast"))
                    }
                    function l() {
                        r.alwaysVisible || (nt = setTimeout(function () {
                            r.disableFadeOut && v || k || d || (f.fadeOut("slow"),
                                c.fadeOut("slow"))
                        }, 1e3))
                    }
                    var v, k, d, nt, g, y, o, tt, s = !1, u = n(this), e;
                    if (u.parent().hasClass(r.wrapperClass)) {
                        var a = u.scrollTop()
                            , f = u.siblings("." + r.barClass)
                            , c = u.siblings("." + r.railClass);
                        if (w(),
                            n.isPlainObject(i)) {
                            if ("height" in i && "auto" == i.height ? (u.parent().css("height", "auto"),
                                u.css("height", "auto"),
                                e = u.parent().parent().height(),
                                u.parent().css("height", e),
                                u.css("height", e)) : "height" in i && (e = i.height,
                                    u.parent().css("height", e),
                                    u.css("height", e)),
                                "scrollTo" in i)
                                a = parseInt(r.scrollTo);
                            else if ("scrollBy" in i)
                                a += parseInt(r.scrollBy);
                            else if ("destroy" in i) {
                                f.remove();
                                c.remove();
                                u.unwrap();
                                return
                            }
                            h(a, !1, !0)
                        }
                    } else if (!(n.isPlainObject(i) && "destroy" in i)) {
                        r.height = "auto" == r.height ? u.parent().height() : r.height;
                        a = n("<div><\/div>").addClass(r.wrapperClass).css({
                            position: "relative",
                            overflow: "hidden",
                            width: r.width,
                            height: r.height
                        });
                        u.css({
                            overflow: "hidden",
                            width: r.width,
                            height: r.height
                        });
                        var c = n("<div><\/div>").addClass(r.railClass).css({
                            width: r.size,
                            height: "100%",
                            position: "absolute",
                            top: 0,
                            display: r.alwaysVisible && r.railVisible ? "block" : "none",
                            "border-radius": r.railBorderRadius,
                            background: r.railColor,
                            opacity: r.railOpacity,
                            zIndex: 90
                        })
                            , f = n("<div><\/div>").addClass(r.barClass).css({
                                background: r.color,
                                width: r.size,
                                position: "absolute",
                                top: 0,
                                opacity: r.opacity,
                                display: r.alwaysVisible ? "block" : "none",
                                "border-radius": r.borderRadius,
                                BorderRadius: r.borderRadius,
                                MozBorderRadius: r.borderRadius,
                                WebkitBorderRadius: r.borderRadius,
                                zIndex: 99
                            })
                            , e = "right" == r.position ? {
                                right: r.distance
                            } : {
                                    left: r.distance
                                };
                        c.css(e);
                        f.css(e);
                        u.wrap(a);
                        u.parent().append(f);
                        u.parent().append(c);
                        r.railDraggable && f.bind("mousedown", function (i) {
                            var r = n(document);
                            return d = !0,
                                t = parseFloat(f.css("top")),
                                pageY = i.pageY,
                                r.bind("mousemove.slimscroll", function (n) {
                                    currTop = t + n.pageY - pageY;
                                    f.css("top", currTop);
                                    h(0, f.position().top, !1)
                                }),
                                r.bind("mouseup.slimscroll", function () {
                                    d = !1;
                                    l();
                                    r.unbind(".slimscroll")
                                }),
                                !1
                        }).bind("selectstart.slimscroll", function (n) {
                            return n.stopPropagation(),
                                n.preventDefault(),
                                !1
                        });
                        c.hover(function () {
                            b()
                        }, function () {
                            l()
                        });
                        f.hover(function () {
                            k = !0
                        }, function () {
                            k = !1
                        });
                        u.hover(function () {
                            v = !0;
                            b();
                            l()
                        }, function () {
                            v = !1;
                            l()
                        });
                        u.bind("touchstart", function (n) {
                            n.originalEvent.touches.length && (g = n.originalEvent.touches[0].pageY)
                        });
                        u.bind("touchmove", function (n) {
                            s || n.originalEvent.preventDefault();
                            n.originalEvent.touches.length && (h((g - n.originalEvent.touches[0].pageY) / r.touchScrollStep, !0),
                                g = n.originalEvent.touches[0].pageY)
                        });
                        w();
                        "bottom" === r.start ? (f.css({
                            top: u.outerHeight() - f.outerHeight()
                        }),
                            h(0, !0)) : "top" !== r.start && (h(n(r.start).position().top, null, !0),
                                r.alwaysVisible || f.hide());
                        window.addEventListener ? (this.addEventListener("DOMMouseScroll", p, !1),
                            this.addEventListener("mousewheel", p, !1)) : document.attachEvent("onmousewheel", p)
                    }
                }),
                    this
            }
        });
        n.fn.extend({
            slimscroll: n.fn.slimScroll
        })
    }(jQuery),
    !function () {
        "use strict";
        function n(t, r) {
            function h(n, t) {
                return function () {
                    return n.apply(t, arguments)
                }
            }
            var o;
            if (r = r || {},
                this.trackingClick = !1,
                this.trackingClickStart = 0,
                this.targetElement = null,
                this.touchStartX = 0,
                this.touchStartY = 0,
                this.lastTouchIdentifier = 0,
                this.touchBoundary = r.touchBoundary || 10,
                this.layer = t,
                this.tapDelay = r.tapDelay || 200,
                this.tapTimeout = r.tapTimeout || 700,
                !n.notNeeded(t)) {
                for (var f = ["onMouse", "onClick", "onTouchStart", "onTouchMove", "onTouchEnd", "onTouchCancel"], e = this, u = 0, s = f.length; u < s; u++)
                    e[f[u]] = h(e[f[u]], e);
                i && (t.addEventListener("mouseover", this.onMouse, !0),
                    t.addEventListener("mousedown", this.onMouse, !0),
                    t.addEventListener("mouseup", this.onMouse, !0));
                t.addEventListener("click", this.onClick, !0);
                t.addEventListener("touchstart", this.onTouchStart, !1);
                t.addEventListener("touchmove", this.onTouchMove, !1);
                t.addEventListener("touchend", this.onTouchEnd, !1);
                t.addEventListener("touchcancel", this.onTouchCancel, !1);
                Event.prototype.stopImmediatePropagation || (t.removeEventListener = function (n, i, r) {
                    var u = Node.prototype.removeEventListener;
                    "click" === n ? u.call(t, n, i.hijacked || i, r) : u.call(t, n, i, r)
                }
                    ,
                    t.addEventListener = function (n, i, r) {
                        var u = Node.prototype.addEventListener;
                        "click" === n ? u.call(t, n, i.hijacked || (i.hijacked = function (n) {
                            n.propagationStopped || i(n)
                        }
                        ), r) : u.call(t, n, i, r)
                    }
                );
                "function" == typeof t.onclick && (o = t.onclick,
                    t.addEventListener("click", function (n) {
                        o(n)
                    }, !1),
                    t.onclick = null)
            }
        }
        var r = 0 <= navigator.userAgent.indexOf("Windows Phone")
            , i = 0 < navigator.userAgent.indexOf("Android") && !r
            , t = /iP(ad|hone|od)/.test(navigator.userAgent) && !r
            , u = t && /OS 4_\d(_\d)?/.test(navigator.userAgent)
            , f = t && /OS [6-7]_\d/.test(navigator.userAgent)
            , e = 0 < navigator.userAgent.indexOf("BB10");
        n.prototype.needsClick = function (n) {
            switch (n.nodeName.toLowerCase()) {
                case "button":
                case "select":
                case "textarea":
                    if (n.disabled)
                        return !0;
                    break;
                case "input":
                    if (t && "file" === n.type || n.disabled)
                        return !0;
                    break;
                case "label":
                case "iframe":
                case "video":
                    return !0
            }
            return /\bneedsclick\b/.test(n.className)
        }
            ;
        n.prototype.needsFocus = function (n) {
            switch (n.nodeName.toLowerCase()) {
                case "textarea":
                    return !0;
                case "select":
                    return !i;
                case "input":
                    switch (n.type) {
                        case "button":
                        case "checkbox":
                        case "file":
                        case "image":
                        case "radio":
                        case "submit":
                            return !1
                    }
                    return !n.disabled && !n.readOnly;
                default:
                    return /\bneedsfocus\b/.test(n.className)
            }
        }
            ;
        n.prototype.sendClick = function (n, t) {
            var r, i;
            document.activeElement && document.activeElement !== n && document.activeElement.blur();
            i = t.changedTouches[0];
            (r = document.createEvent("MouseEvents")).initMouseEvent(this.determineEventType(n), !0, !0, window, 1, i.screenX, i.screenY, i.clientX, i.clientY, !1, !1, !1, !1, 0, null);
            r.forwardedTouchEvent = !0;
            n.dispatchEvent(r)
        }
            ;
        n.prototype.determineEventType = function (n) {
            return i && "select" === n.tagName.toLowerCase() ? "mousedown" : "click"
        }
            ;
        n.prototype.focus = function (n) {
            var i;
            t && n.setSelectionRange && 0 !== n.type.indexOf("date") && "time" !== n.type && "month" !== n.type ? (i = n.value.length,
                n.setSelectionRange(i, i)) : n.focus()
        }
            ;
        n.prototype.updateScrollParent = function (n) {
            var i, t;
            if (!(i = n.fastClickScrollParent) || !i.contains(n)) {
                t = n;
                do {
                    if (t.scrollHeight > t.offsetHeight) {
                        i = t;
                        n.fastClickScrollParent = t;
                        break
                    }
                    t = t.parentElement
                } while (t)
            }
            i && (i.fastClickLastScrollTop = i.scrollTop)
        }
            ;
        n.prototype.getTargetElementFromEventTarget = function (n) {
            return n.nodeType === Node.TEXT_NODE ? n.parentNode : n
        }
            ;
        n.prototype.onTouchStart = function (n) {
            var r, i, f;
            if (1 < n.targetTouches.length)
                return !0;
            if (r = this.getTargetElementFromEventTarget(n.target),
                i = n.targetTouches[0],
                t) {
                if ((f = window.getSelection()).rangeCount && !f.isCollapsed)
                    return !0;
                if (!u) {
                    if (i.identifier && i.identifier === this.lastTouchIdentifier)
                        return n.preventDefault(),
                            !1;
                    this.lastTouchIdentifier = i.identifier;
                    this.updateScrollParent(r)
                }
            }
            return this.trackingClick = !0,
                this.trackingClickStart = n.timeStamp,
                this.targetElement = r,
                this.touchStartX = i.pageX,
                this.touchStartY = i.pageY,
                n.timeStamp - this.lastClickTime < this.tapDelay && n.preventDefault(),
                !0
        }
            ;
        n.prototype.touchHasMoved = function (n) {
            var t = n.changedTouches[0]
                , i = this.touchBoundary;
            return Math.abs(t.pageX - this.touchStartX) > i || Math.abs(t.pageY - this.touchStartY) > i
        }
            ;
        n.prototype.onTouchMove = function (n) {
            return this.trackingClick && (this.targetElement !== this.getTargetElementFromEventTarget(n.target) || this.touchHasMoved(n)) && (this.trackingClick = !1,
                this.targetElement = null),
                !0
        }
            ;
        n.prototype.findControl = function (n) {
            return void 0 !== n.control ? n.control : n.htmlFor ? document.getElementById(n.htmlFor) : n.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")
        }
            ;
        n.prototype.onTouchEnd = function (n) {
            var h, c, e, o, s, r = this.targetElement;
            if (!this.trackingClick)
                return !0;
            if (n.timeStamp - this.lastClickTime < this.tapDelay)
                return this.cancelNextClick = !0;
            if (n.timeStamp - this.trackingClickStart > this.tapTimeout)
                return !0;
            if (this.cancelNextClick = !1,
                this.lastClickTime = n.timeStamp,
                c = this.trackingClickStart,
                this.trackingClick = !1,
                this.trackingClickStart = 0,
                f && (s = n.changedTouches[0],
                    (r = document.elementFromPoint(s.pageX - window.pageXOffset, s.pageY - window.pageYOffset) || r).fastClickScrollParent = this.targetElement.fastClickScrollParent),
                "label" === (e = r.tagName.toLowerCase())) {
                if (h = this.findControl(r)) {
                    if (this.focus(r),
                        i)
                        return !1;
                    r = h
                }
            } else if (this.needsFocus(r))
                return 100 < n.timeStamp - c || t && window.top !== window && "input" === e ? this.targetElement = null : (this.focus(r),
                    this.sendClick(r, n),
                    t && "select" === e || (this.targetElement = null,
                        n.preventDefault())),
                    !1;
            return !(!t || u || !(o = r.fastClickScrollParent) || o.fastClickLastScrollTop === o.scrollTop) || (this.needsClick(r) || (n.preventDefault(),
                this.sendClick(r, n)),
                !1)
        }
            ;
        n.prototype.onTouchCancel = function () {
            this.trackingClick = !1;
            this.targetElement = null
        }
            ;
        n.prototype.onMouse = function (n) {
            return !this.targetElement || !!n.forwardedTouchEvent || !n.cancelable || !(!this.needsClick(this.targetElement) || this.cancelNextClick) || (n.stopImmediatePropagation ? n.stopImmediatePropagation() : n.propagationStopped = !0,
                n.stopPropagation(),
                n.preventDefault(),
                !1)
        }
            ;
        n.prototype.onClick = function (n) {
            var t;
            return this.trackingClick ? (this.targetElement = null,
                !(this.trackingClick = !1)) : "submit" === n.target.type && 0 === n.detail || ((t = this.onMouse(n)) || (this.targetElement = null),
                    t)
        }
            ;
        n.prototype.destroy = function () {
            var n = this.layer;
            i && (n.removeEventListener("mouseover", this.onMouse, !0),
                n.removeEventListener("mousedown", this.onMouse, !0),
                n.removeEventListener("mouseup", this.onMouse, !0));
            n.removeEventListener("click", this.onClick, !0);
            n.removeEventListener("touchstart", this.onTouchStart, !1);
            n.removeEventListener("touchmove", this.onTouchMove, !1);
            n.removeEventListener("touchend", this.onTouchEnd, !1);
            n.removeEventListener("touchcancel", this.onTouchCancel, !1)
        }
            ;
        n.notNeeded = function (n) {
            var t, r, u;
            return void 0 === window.ontouchstart ? !0 : (r = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1]) && (!i || (t = document.querySelector("meta[name=viewport]")) && (-1 !== t.content.indexOf("user-scalable=no") || 31 < r && document.documentElement.scrollWidth <= window.outerWidth)) ? !0 : e && 10 <= (u = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/))[1] && 3 <= u[2] && (t = document.querySelector("meta[name=viewport]")) && (-1 !== t.content.indexOf("user-scalable=no") || document.documentElement.scrollWidth <= window.outerWidth) ? !0 : "none" === n.style.msTouchAction || "manipulation" === n.style.touchAction || !!(27 <= +(/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1] && (t = document.querySelector("meta[name=viewport]")) && (-1 !== t.content.indexOf("user-scalable=no") || document.documentElement.scrollWidth <= window.outerWidth)) || "none" === n.style.touchAction || "manipulation" === n.style.touchAction
        }
            ;
        n.attach = function (t, i) {
            return new n(t, i)
        }
            ;
        "function" == typeof define && "object" == typeof define.amd && define.amd ? define(function () {
            return n
        }) : "undefined" != typeof module && module.exports ? (module.exports = n.attach,
            module.exports.FastClick = n) : window.FastClick = n
    }(),
    "undefined" == typeof jQuery)
    throw new Error("AdminLTE requires jQuery");
+function (n) {
    "use strict";
    function i(i) {
        return this.each(function () {
            var f = n(this), u = f.data(r), o;
            if (u || (o = n.extend({}, e, f.data(), "object" == typeof i && i),
                f.data(r, u = new t(f, o))),
                "string" == typeof u) {
                if (void 0 === u[i])
                    throw new Error("No method named " + i);
                u[i]()
            }
        })
    }
    var r = "lte.boxrefresh", e = {
        source: "",
        params: {},
        trigger: ".refresh-btn",
        content: ".box-body",
        loadInContent: !0,
        responseType: "",
        overlayTemplate: '<div class="overlay"><div class="fa fa-refresh fa-spin"><\/div><\/div>',
        onLoadStart: function () { },
        onLoadDone: function (n) {
            return n
        }
    }, u = {
        data: '[data-widget="box-refresh"]'
    }, t = function (t, i) {
        if (this.element = t,
            this.options = i,
            this.$overlay = n(i.overlay),
            "" === i.source)
            throw new Error("Source url was not defined. Please specify a url in your BoxRefresh source option.");
        this._setUpListeners();
        this.load()
    }, f;
    t.prototype.load = function () {
        this._addOverlay();
        this.options.onLoadStart.call(n(this));
        n.get(this.options.source, this.options.params, function (t) {
            this.options.loadInContent && n(this.options.content).html(t);
            this.options.onLoadDone.call(n(this), t);
            this._removeOverlay()
        }
            .bind(this), "" !== this.options.responseType && this.options.responseType)
    }
        ;
    t.prototype._setUpListeners = function () {
        n(this.element).on("click", u.trigger, function (n) {
            n && n.preventDefault();
            this.load()
        }
            .bind(this))
    }
        ;
    t.prototype._addOverlay = function () {
        n(this.element).append(this.$overlay)
    }
        ;
    t.prototype._removeOverlay = function () {
        n(this.element).remove(this.$overlay)
    }
        ;
    f = n.fn.boxRefresh;
    n.fn.boxRefresh = i;
    n.fn.boxRefresh.Constructor = t;
    n.fn.boxRefresh.noConflict = function () {
        return n.fn.boxRefresh = f,
            this
    }
        ;
    n(window).on("load", function () {
        n(u.data).each(function () {
            i.call(n(this))
        })
    })
}(jQuery),
    function (n) {
        "use strict";
        function u(t) {
            return this.each(function () {
                var r = n(this), u = r.data(f), e;
                if (u || (e = n.extend({}, s, r.data(), "object" == typeof t && t),
                    r.data(f, u = new i(r, e))),
                    "string" == typeof t) {
                    if (void 0 === u[t])
                        throw new Error("No method named " + t);
                    u[t]()
                }
            })
        }
        var f = "lte.boxwidget", s = {
            animationSpeed: 500,
            collapseTrigger: '[data-widget="collapse"]',
            removeTrigger: '[data-widget="remove"]',
            collapseIcon: "fa-minus",
            expandIcon: "fa-plus",
            removeIcon: "fa-times"
        }, t = {
            data: ".box",
            collapsed: ".collapsed-box",
            header: ".box-header",
            body: ".box-body",
            footer: ".box-footer",
            tools: ".box-tools"
        }, e = {
            collapsed: "collapsed-box"
        }, r = {
            collapsed: "collapsed.boxwidget",
            expanded: "expanded.boxwidget",
            removed: "removed.boxwidget"
        }, i = function (n, t) {
            this.element = n;
            this.options = t;
            this._setUpListeners()
        }, o;
        i.prototype.toggle = function () {
            n(this.element).is(t.collapsed) ? this.expand() : this.collapse()
        }
            ;
        i.prototype.expand = function () {
            var u = n.Event(r.expanded)
                , f = this.options.collapseIcon
                , i = this.options.expandIcon;
            n(this.element).removeClass(e.collapsed);
            n(this.element).children(t.header + ", " + t.body + ", " + t.footer).children(t.tools).find("." + i).removeClass(i).addClass(f);
            n(this.element).children(t.body + ", " + t.footer).slideDown(this.options.animationSpeed, function () {
                n(this.element).trigger(u)
            }
                .bind(this))
        }
            ;
        i.prototype.collapse = function () {
            var u = n.Event(r.collapsed)
                , i = this.options.collapseIcon
                , f = this.options.expandIcon;
            n(this.element).children(t.header + ", " + t.body + ", " + t.footer).children(t.tools).find("." + i).removeClass(i).addClass(f);
            n(this.element).children(t.body + ", " + t.footer).slideUp(this.options.animationSpeed, function () {
                n(this.element).addClass(e.collapsed);
                n(this.element).trigger(u)
            }
                .bind(this))
        }
            ;
        i.prototype.remove = function () {
            var t = n.Event(r.removed);
            n(this.element).slideUp(this.options.animationSpeed, function () {
                n(this.element).trigger(t);
                n(this.element).remove()
            }
                .bind(this))
        }
            ;
        i.prototype._setUpListeners = function () {
            var t = this;
            n(this.element).on("click", this.options.collapseTrigger, function (i) {
                return i && i.preventDefault(),
                    t.toggle(n(this)),
                    !1
            });
            n(this.element).on("click", this.options.removeTrigger, function (i) {
                return i && i.preventDefault(),
                    t.remove(n(this)),
                    !1
            })
        }
            ;
        o = n.fn.boxWidget;
        n.fn.boxWidget = u;
        n.fn.boxWidget.Constructor = i;
        n.fn.boxWidget.noConflict = function () {
            return n.fn.boxWidget = o,
                this
        }
            ;
        n(window).on("load", function () {
            n(t.data).each(function () {
                u.call(n(this))
            })
        })
    }(jQuery),
    function (n) {
        "use strict";
        function u(t) {
            return this.each(function () {
                var r = n(this), u = r.data(f), e;
                u || (e = n.extend({}, s, r.data(), "object" == typeof t && t),
                    r.data(f, u = new i(r, e)));
                "string" == typeof t && u.toggle()
            })
        }
        var f = "lte.controlsidebar", s = {
            slide: !0
        }, t = {
            sidebar: ".control-sidebar",
            data: '[data-toggle="control-sidebar"]',
            open: ".control-sidebar-open",
            bg: ".control-sidebar-bg",
            wrapper: ".wrapper",
            content: ".content-wrapper",
            boxed: ".layout-boxed"
        }, r = {
            open: "control-sidebar-open",
            fixed: "fixed"
        }, e = {
            collapsed: "collapsed.controlsidebar",
            expanded: "expanded.controlsidebar"
        }, i = function (n, t) {
            this.element = n;
            this.options = t;
            this.hasBindedResize = !1;
            this.init()
        }, o;
        i.prototype.init = function () {
            n(this.element).is(t.data) || n(this).on("click", this.toggle);
            this.fix();
            n(window).resize(function () {
                this.fix()
            }
                .bind(this))
        }
            ;
        i.prototype.toggle = function (i) {
            i && i.preventDefault();
            this.fix();
            n(t.sidebar).is(t.open) || n("body").is(t.open) ? this.collapse() : this.expand()
        }
            ;
        i.prototype.expand = function () {
            this.options.slide ? n(t.sidebar).addClass(r.open) : n("body").addClass(r.open);
            n(this.element).trigger(n.Event(e.expanded))
        }
            ;
        i.prototype.collapse = function () {
            n("body, " + t.sidebar).removeClass(r.open);
            n(this.element).trigger(n.Event(e.collapsed))
        }
            ;
        i.prototype.fix = function () {
            n("body").is(t.boxed) && this._fixForBoxed(n(t.bg))
        }
            ;
        i.prototype._fixForBoxed = function (i) {
            i.css({
                position: "absolute",
                height: n(t.wrapper).height()
            })
        }
            ;
        o = n.fn.controlSidebar;
        n.fn.controlSidebar = u;
        n.fn.controlSidebar.Constructor = i;
        n.fn.controlSidebar.noConflict = function () {
            return n.fn.controlSidebar = o,
                this
        }
            ;
        n(document).on("click", t.data, function (t) {
            t && t.preventDefault();
            u.call(n(this), "toggle")
        })
    }(jQuery),
    function (n) {
        "use strict";
        function i(i) {
            return this.each(function () {
                var u = n(this)
                    , f = u.data(r);
                f || u.data(r, f = new t(u));
                "string" == typeof i && f.toggle(u)
            })
        }
        var r = "lte.directchat", u = {
            data: '[data-widget="chat-pane-toggle"]',
            box: ".direct-chat"
        }, e = {
            open: "direct-chat-contacts-open"
        }, t = function (n) {
            this.element = n
        }, f;
        t.prototype.toggle = function (n) {
            n.parents(u.box).first().toggleClass(e.open)
        }
            ;
        f = n.fn.directChat;
        n.fn.directChat = i;
        n.fn.directChat.Constructor = t;
        n.fn.directChat.noConflict = function () {
            return n.fn.directChat = f,
                this
        }
            ;
        n(document).on("click", u.data, function (t) {
            t && t.preventDefault();
            i.call(n(this), "toggle")
        })
    }(jQuery),
    function (n) {
        "use strict";
        function u(t) {
            return this.each(function () {
                var u = n(this), r = u.data(f), e;
                if (r || (e = n.extend({}, o, u.data(), "object" == typeof t && t),
                    u.data(f, r = new i(e))),
                    "string" == typeof t) {
                    if (void 0 === r[t])
                        throw new Error("No method named " + t);
                    r[t]()
                }
            })
        }
        var f = "lte.layout", o = {
            slimscroll: !0,
            resetHeight: !0
        }, t = {
            wrapper: ".wrapper",
            contentWrapper: ".content-wrapper",
            layoutBoxed: ".layout-boxed",
            mainFooter: ".main-footer",
            mainHeader: ".main-header",
            sidebar: ".sidebar",
            controlSidebar: ".control-sidebar",
            fixed: ".fixed",
            sidebarMenu: ".sidebar-menu",
            logo: ".main-header .logo"
        }, r = {
            fixed: "fixed",
            holdTransition: "hold-transition"
        }, i = function (n) {
            this.options = n;
            this.bindedResize = !1;
            this.activate()
        }, e;
        i.prototype.activate = function () {
            this.fix();
            this.fixSidebar();
            n("body").removeClass(r.holdTransition);
            this.options.resetHeight && n("body, html, " + t.wrapper).css({
                height: "auto",
                "min-height": "100%"
            });
            this.bindedResize || (n(window).resize(function () {
                this.fix();
                this.fixSidebar();
                n(t.logo + ", " + t.sidebar).one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", function () {
                    this.fix();
                    this.fixSidebar()
                }
                    .bind(this))
            }
                .bind(this)),
                this.bindedResize = !0);
            n(t.sidebarMenu).on("expanded.tree", function () {
                this.fix();
                this.fixSidebar()
            }
                .bind(this));
            n(t.sidebarMenu).on("collapsed.tree", function () {
                this.fix();
                this.fixSidebar()
            }
                .bind(this))
        }
            ;
        i.prototype.fix = function () {
            var e, u;
            n(t.layoutBoxed + " > " + t.wrapper).css("overflow", "hidden");
            var o = n(t.mainFooter).outerHeight() || 0
                , h = n(t.mainHeader).outerHeight() || 0
                , s = h + o
                , i = n(window).height()
                , f = n(t.sidebar).height() || 0;
            n("body").hasClass(r.fixed) ? n(t.contentWrapper).css("min-height", i - o) : (i >= f ? (n(t.contentWrapper).css("min-height", i - s),
                e = i - s) : (n(t.contentWrapper).css("min-height", f),
                    e = f),
                u = n(t.controlSidebar),
                void 0 !== u && u.height() > e && n(t.contentWrapper).css("min-height", u.height()))
        }
            ;
        i.prototype.fixSidebar = function () {
            if (!n("body").hasClass(r.fixed))
                return void (void 0 !== n.fn.slimScroll && n(t.sidebar).slimScroll({
                    destroy: !0
                }).height("auto"));
            this.options.slimscroll && void 0 !== n.fn.slimScroll && n(t.sidebar).slimScroll({
                height: n(window).height() - n(t.mainHeader).height() + "px"
            })
        }
            ;
        e = n.fn.layout;
        n.fn.layout = u;
        n.fn.layout.Constuctor = i;
        n.fn.layout.noConflict = function () {
            return n.fn.layout = e,
                this
        }
            ;
        n(window).on("load", function () {
            u.call(n("body"))
        })
    }(jQuery),
    function (n) {
        "use strict";
        function f(t) {
            return this.each(function () {
                var i = n(this), u = i.data(e), f;
                u || (f = n.extend({}, s, i.data(), "object" == typeof t && t),
                    i.data(e, u = new r(f)));
                "toggle" === t && u.toggle()
            })
        }
        var e = "lte.pushmenu", s = {
            collapseScreenSize: 767,
            expandOnHover: !1,
            expandTransitionDelay: 200
        }, i = {
            collapsed: ".sidebar-collapse",
            open: ".sidebar-open",
            mainSidebar: ".main-sidebar",
            contentWrapper: ".content-wrapper",
            searchInput: ".sidebar-form .form-control",
            button: '[data-toggle="push-menu"]',
            mini: ".sidebar-mini",
            expanded: ".sidebar-expanded-on-hover",
            layoutFixed: ".fixed"
        }, t = {
            collapsed: "sidebar-collapse",
            open: "sidebar-open",
            mini: "sidebar-mini",
            expanded: "sidebar-expanded-on-hover",
            expandFeature: "sidebar-mini-expand-feature",
            layoutFixed: "fixed"
        }, u = {
            expanded: "expanded.pushMenu",
            collapsed: "collapsed.pushMenu"
        }, r = function (n) {
            this.options = n;
            this.init()
        }, o;
        r.prototype.init = function () {
            (this.options.expandOnHover || n("body").is(i.mini + i.layoutFixed)) && (this.expandOnHover(),
                n("body").addClass(t.expandFeature));
            n(i.contentWrapper).click(function () {
                n(window).width() <= this.options.collapseScreenSize && n("body").hasClass(t.open) && this.close()
            }
                .bind(this));
            n(i.searchInput).click(function (n) {
                n.stopPropagation()
            })
        }
            ;
        r.prototype.toggle = function () {
            var r = n(window).width()
                , i = !n("body").hasClass(t.collapsed);
            r <= this.options.collapseScreenSize && (i = n("body").hasClass(t.open));
            i ? this.close() : this.open()
        }
            ;
        r.prototype.open = function () {
            n(window).width() > this.options.collapseScreenSize ? n("body").removeClass(t.collapsed).trigger(n.Event(u.expanded)) : n("body").addClass(t.open).trigger(n.Event(u.expanded))
        }
            ;
        r.prototype.close = function () {
            n(window).width() > this.options.collapseScreenSize ? n("body").addClass(t.collapsed).trigger(n.Event(u.collapsed)) : n("body").removeClass(t.open + " " + t.collapsed).trigger(n.Event(u.collapsed))
        }
            ;
        r.prototype.expandOnHover = function () {
            n(i.mainSidebar).hover(function () {
                n("body").is(i.mini + i.collapsed) && n(window).width() > this.options.collapseScreenSize && this.expand()
            }
                .bind(this), function () {
                    n("body").is(i.expanded) && this.collapse()
                }
                    .bind(this))
        }
            ;
        r.prototype.expand = function () {
            setTimeout(function () {
                n("body").removeClass(t.collapsed).addClass(t.expanded)
            }, this.options.expandTransitionDelay)
        }
            ;
        r.prototype.collapse = function () {
            setTimeout(function () {
                n("body").removeClass(t.expanded).addClass(t.collapsed)
            }, this.options.expandTransitionDelay)
        }
            ;
        o = n.fn.pushMenu;
        n.fn.pushMenu = f;
        n.fn.pushMenu.Constructor = r;
        n.fn.pushMenu.noConflict = function () {
            return n.fn.pushMenu = o,
                this
        }
            ;
        n(document).on("click", i.button, function (t) {
            t.preventDefault();
            f.call(n(this), "toggle")
        });
        n(window).on("load", function () {
            f.call(n(i.button))
        })
    }(jQuery),
    function (n) {
        "use strict";
        function i(i) {
            return this.each(function () {
                var f = n(this), u = f.data(r), o;
                if (u || (o = n.extend({}, e, f.data(), "object" == typeof i && i),
                    f.data(r, u = new t(f, o))),
                    "string" == typeof u) {
                    if (void 0 === u[i])
                        throw new Error("No method named " + i);
                    u[i]()
                }
            })
        }
        var r = "lte.todolist", e = {
            onCheck: function (n) {
                return n
            },
            onUnCheck: function (n) {
                return n
            }
        }, u = {
            data: '[data-widget="todo-list"]'
        }, o = {
            done: "done"
        }, t = function (n, t) {
            this.element = n;
            this.options = t;
            this._setUpListeners()
        }, f;
        t.prototype.toggle = function (n) {
            if (n.parents(u.li).first().toggleClass(o.done),
                !n.prop("checked"))
                return void this.unCheck(n);
            this.check(n)
        }
            ;
        t.prototype.check = function (n) {
            this.options.onCheck.call(n)
        }
            ;
        t.prototype.unCheck = function (n) {
            this.options.onUnCheck.call(n)
        }
            ;
        t.prototype._setUpListeners = function () {
            var t = this;
            n(this.element).on("change ifChanged", "input:checkbox", function () {
                t.toggle(n(this))
            })
        }
            ;
        f = n.fn.todoList;
        n.fn.todoList = i;
        n.fn.todoList.Constructor = t;
        n.fn.todoList.noConflict = function () {
            return n.fn.todoList = f,
                this
        }
            ;
        n(window).on("load", function () {
            n(u.data).each(function () {
                i.call(n(this))
            })
        })
    }(jQuery),
    function (n) {
        "use strict";
        function u(t) {
            return this.each(function () {
                var r = n(this), u;
                r.data(f) || (u = n.extend({}, s, r.data(), "object" == typeof t && t),
                    r.data(f, new i(r, u)))
            })
        }
        var f = "lte.tree", s = {
            animationSpeed: 500,
            accordion: !0,
            followLink: !1,
            trigger: ".treeview a"
        }, t = {
            tree: ".tree",
            treeview: ".treeview",
            treeviewMenu: ".treeview-menu",
            open: ".menu-open, .active",
            li: "li",
            data: '[data-widget="tree"]',
            active: ".active"
        }, r = {
            open: "menu-open",
            tree: "tree"
        }, e = {
            collapsed: "collapsed.tree",
            expanded: "expanded.tree"
        }, i = function (i, u) {
            this.element = i;
            this.options = u;
            n(this.element).addClass(r.tree);
            n(t.treeview + t.active, this.element).addClass(r.open);
            this._setUpListeners()
        }, o;
        i.prototype.toggle = function (n, i) {
            var f = n.next(t.treeviewMenu)
                , u = n.parent()
                , e = u.hasClass(r.open);
            u.is(t.treeview) && (this.options.followLink && "#" !== n.attr("href") || i.preventDefault(),
                e ? this.collapse(f, u) : this.expand(f, u))
        }
            ;
        i.prototype.expand = function (i, u) {
            var s = n.Event(e.expanded), f, o;
            this.options.accordion && (f = u.siblings(t.open),
                o = f.children(t.treeviewMenu),
                this.collapse(o, f));
            u.addClass(r.open);
            i.slideDown(this.options.animationSpeed, function () {
                n(this.element).trigger(s)
            }
                .bind(this))
        }
            ;
        i.prototype.collapse = function (t, i) {
            var u = n.Event(e.collapsed);
            i.removeClass(r.open);
            t.slideUp(this.options.animationSpeed, function () {
                n(this.element).trigger(u)
            }
                .bind(this))
        }
            ;
        i.prototype._setUpListeners = function () {
            var t = this;
            n(this.element).on("click", this.options.trigger, function (i) {
                t.toggle(n(this), i)
            })
        }
            ;
        o = n.fn.tree;
        n.fn.tree = u;
        n.fn.tree.Constructor = i;
        n.fn.tree.noConflict = function () {
            return n.fn.tree = o,
                this
        }
            ;
        n(window).on("load", function () {
            n(t.data).each(function () {
                u.call(n(this))
            })
        })
    }(jQuery),
    function (n) {
        "function" == typeof define && define.amd ? define(["jquery"], function (t) {
            return n(t, window, document)
        }) : "object" == typeof exports ? module.exports = function (t, i) {
            return t || (t = window),
                i || (i = "undefined" != typeof window ? require("jquery") : require("jquery")(t)),
                n(i, t, t.document)
        }
                : n(jQuery, window, document)
    }(function (n, t, i, r) {
        function lt(t) {
            var i, r, u = {};
            n.each(t, function (n) {
                (i = n.match(/^([^A-Z]+?)([A-Z])/)) && -1 !== "a aa ai ao as b fn i m o s ".indexOf(i[1] + " ") && (r = n.replace(i[0], i[2].toLowerCase()),
                    u[r] = n,
                    "o" === i[1] && lt(t[n]))
            });
            t._hungarianMap = u
        }
        function g(t, i, u) {
            t._hungarianMap || lt(t);
            var f;
            n.each(i, function (e) {
                f = t._hungarianMap[e];
                f !== r && (u || i[f] === r) && ("o" === f.charAt(0) ? (i[f] || (i[f] = {}),
                    n.extend(!0, i[f], i[e]),
                    g(t[f], i[f], u)) : i[f] = i[e])
            })
        }
        function tr(n) {
            var t = u.defaults.oLanguage, i = t.sDecimal, r;
            i && dr(i);
            n && (r = n.sZeroRecords,
                !n.sEmptyTable && r && "No data available in table" === t.sEmptyTable && k(n, n, "sZeroRecords", "sEmptyTable"),
                !n.sLoadingRecords && r && "Loading..." === t.sLoadingRecords && k(n, n, "sZeroRecords", "sLoadingRecords"),
                n.sInfoThousands && (n.sThousands = n.sInfoThousands),
                (n = n.sDecimal) && i !== n && dr(n))
        }
        function lu(n) {
            if (p(n, "ordering", "bSort"),
                p(n, "orderMulti", "bSortMulti"),
                p(n, "orderClasses", "bSortClasses"),
                p(n, "orderCellsTop", "bSortCellsTop"),
                p(n, "order", "aaSorting"),
                p(n, "orderFixed", "aaSortingFixed"),
                p(n, "paging", "bPaginate"),
                p(n, "pagingType", "sPaginationType"),
                p(n, "pageLength", "iDisplayLength"),
                p(n, "searching", "bFilter"),
                "boolean" == typeof n.sScrollX && (n.sScrollX = n.sScrollX ? "100%" : ""),
                "boolean" == typeof n.scrollX && (n.scrollX = n.scrollX ? "100%" : ""),
                n = n.aoSearchCols)
                for (var t = 0, i = n.length; t < i; t++)
                    n[t] && g(u.models.oSearch, n[t])
        }
        function au(t) {
            p(t, "orderable", "bSortable");
            p(t, "orderData", "aDataSort");
            p(t, "orderSequence", "asSorting");
            p(t, "orderDataType", "sortDataType");
            var i = t.aDataSort;
            "number" != typeof i || n.isArray(i) || (t.aDataSort = [i])
        }
        function vu(i) {
            var r;
            if (!u.__browser) {
                r = {};
                u.__browser = r;
                var e = n("<div/>").css({
                    position: "fixed",
                    top: 0,
                    left: -1 * n(t).scrollLeft(),
                    height: 1,
                    width: 1,
                    overflow: "hidden"
                }).append(n("<div/>").css({
                    position: "absolute",
                    top: 1,
                    left: 1,
                    width: 100,
                    overflow: "scroll"
                }).append(n("<div/>").css({
                    width: "100%",
                    height: 10
                }))).appendTo("body")
                    , f = e.children()
                    , o = f.children();
                r.barWidth = f[0].offsetWidth - f[0].clientWidth;
                r.bScrollOversize = 100 === o[0].offsetWidth && 100 !== f[0].clientWidth;
                r.bScrollbarLeft = 1 !== Math.round(o.offset().left);
                r.bBounding = e[0].getBoundingClientRect().width ? !0 : !1;
                e.remove()
            }
            n.extend(i.oBrowser, u.__browser);
            i.oScroll.iBarWidth = u.__browser.barWidth
        }
        function yu(n, t, i, u, f, e) {
            var o, s = !1;
            for (i !== r && (o = i,
                s = !0); u !== f;)
                n.hasOwnProperty(u) && (o = s ? t(o, n[u], u, n) : n[u],
                    s = !0,
                    u += e);
            return o
        }
        function ir(t, r) {
            var f = u.defaults.column
                , e = t.aoColumns.length
                , f = n.extend({}, u.models.oColumn, f, {
                    nTh: r ? r : i.createElement("th"),
                    sTitle: f.sTitle ? f.sTitle : r ? r.innerHTML : "",
                    aDataSort: f.aDataSort ? f.aDataSort : [e],
                    mData: f.mData ? f.mData : e,
                    idx: e
                });
            t.aoColumns.push(f);
            f = t.aoPreSearchCols;
            f[e] = n.extend({}, u.models.oSearch, f[e]);
            ri(t, e, n(r).data())
        }
        function ri(t, i, f) {
            var i = t.aoColumns[i], e = t.oClasses, s = n(i.nTh), h;
            i.sWidthOrig || (i.sWidthOrig = s.attr("width") || null,
                h = (s.attr("style") || "").match(/width:\s*(\d+[pxem%]+)/),
                h && (i.sWidthOrig = h[1]));
            f !== r && null !== f && (au(f),
                g(u.defaults.column, f),
                f.mDataProp !== r && !f.mData && (f.mData = f.mDataProp),
                f.sType && (i._sManualType = f.sType),
                f.className && !f.sClass && (f.sClass = f.className),
                f.sClass && s.addClass(f.sClass),
                n.extend(i, f),
                k(i, f, "sWidth", "sWidthOrig"),
                f.iDataSort !== r && (i.aDataSort = [f.iDataSort]),
                k(i, f, "aDataSort"));
            var o = i.mData
                , l = ft(o)
                , c = i.mRender ? ft(i.mRender) : null
                , f = function (n) {
                    return "string" == typeof n && -1 !== n.indexOf("@")
                };
            i._bAttrSrc = n.isPlainObject(o) && (f(o.sort) || f(o.type) || f(o.filter));
            i._setter = null;
            i.fnGetData = function (n, t, i) {
                var u = l(n, t, r, i);
                return c && t ? c(u, t, n, i) : u
            }
                ;
            i.fnSetData = function (n, t, i) {
                return rt(o)(n, t, i)
            }
                ;
            "number" != typeof o && (t._rowReadObject = !0);
            t.oFeatures.bSort || (i.bSortable = !1,
                s.addClass(e.sSortableNone));
            t = -1 !== n.inArray("asc", i.asSorting);
            f = -1 !== n.inArray("desc", i.asSorting);
            !i.bSortable || !t && !f ? (i.sSortingClass = e.sSortableNone,
                i.sSortingClassJUI = "") : t && !f ? (i.sSortingClass = e.sSortableAsc,
                    i.sSortingClassJUI = e.sSortJUIAscAllowed) : !t && f ? (i.sSortingClass = e.sSortableDesc,
                        i.sSortingClassJUI = e.sSortJUIDescAllowed) : (i.sSortingClass = e.sSortable,
                            i.sSortingClassJUI = e.sSortJUI)
        }
        function at(n) {
            var t, i, r;
            if (!1 !== n.oFeatures.bAutoWidth)
                for (t = n.aoColumns,
                    ar(n),
                    i = 0,
                    r = t.length; i < r; i++)
                    t[i].nTh.style.width = t[i].sWidth;
            t = n.oScroll;
            ("" !== t.sY || "" !== t.sX) && ai(n);
            o(n, null, "column-sizing", [n])
        }
        function vt(n, t) {
            var i = ui(n, "bVisible");
            return "number" == typeof i[t] ? i[t] : null
        }
        function yt(t, i) {
            var r = ui(t, "bVisible")
                , r = n.inArray(i, r);
            return -1 !== r ? r : null
        }
        function ot(t) {
            var i = 0;
            return n.each(t.aoColumns, function (t, r) {
                r.bVisible && "none" !== n(r.nTh).css("display") && i++
            }),
                i
        }
        function ui(t, i) {
            var r = [];
            return n.map(t.aoColumns, function (n, t) {
                n[i] && r.push(t)
            }),
                r
        }
        function rr(n) {
            for (var c = n.aoColumns, p = n.aoData, h = u.ext.type.detect, e, a, i, v, t, o, s, f = 0, l = c.length; f < l; f++)
                if (t = c[f],
                    s = [],
                    !t.sType && t._sManualType)
                    t.sType = t._sManualType;
                else if (!t.sType) {
                    for (e = 0,
                        a = h.length; e < a; e++) {
                        for (i = 0,
                            v = p.length; i < v; i++) {
                            if (s[i] === r && (s[i] = y(n, i, f, "type")),
                                o = h[e](s[i], n),
                                !o && e !== h.length - 1)
                                break;
                            if ("html" === o)
                                break
                        }
                        if (o) {
                            t.sType = o;
                            break
                        }
                    }
                    t.sType || (t.sType = "string")
                }
        }
        function pu(t, i, u, f) {
            var s, o, a, c, v, h, l = t.aoColumns, e;
            if (i)
                for (s = i.length - 1; 0 <= s; s--)
                    for (h = i[s],
                        e = h.targets !== r ? h.targets : h.aTargets,
                        n.isArray(e) || (e = [e]),
                        o = 0,
                        a = e.length; o < a; o++)
                        if ("number" == typeof e[o] && 0 <= e[o]) {
                            for (; l.length <= e[o];)
                                ir(t);
                            f(e[o], h)
                        } else if ("number" == typeof e[o] && 0 > e[o])
                            f(l.length + e[o], h);
                        else if ("string" == typeof e[o])
                            for (c = 0,
                                v = l.length; c < v; c++)
                                ("_all" == e[o] || n(l[c].nTh).hasClass(e[o])) && f(c, h);
            if (u)
                for (s = 0,
                    t = u.length; s < t; s++)
                    f(s, u[s])
        }
        function it(t, i, f, e) {
            var o = t.aoData.length
                , s = n.extend(!0, {}, u.models.oRow, {
                    src: f ? "dom" : "data",
                    idx: o
                });
            s._aData = i;
            t.aoData.push(s);
            for (var c = t.aoColumns, h = 0, l = c.length; h < l; h++)
                c[h].sType = null;
            return t.aiDisplayMaster.push(o),
                i = t.rowIdFn(i),
                i !== r && (t.aIds[i] = s),
                (f || !t.oFeatures.bDeferRender) && or(t, o, f, e),
                o
        }
        function fi(t, i) {
            var r;
            return i instanceof n || (i = n(i)),
                i.map(function (n, i) {
                    return r = er(t, i),
                        it(t, r.data, i, r.cells)
                })
        }
        function y(n, t, i, u) {
            var h = n.iDraw
                , e = n.aoColumns[i]
                , s = n.aoData[t]._aData
                , o = e.sDefaultContent
                , f = e.fnGetData(s, u, {
                    settings: n,
                    row: t,
                    col: i
                });
            if (f === r)
                return n.iDrawError != h && null === o && (nt(n, 0, "Requested unknown parameter " + ("function" == typeof e.mData ? "{function}" : "'" + e.mData + "'") + " for row " + t + ", column " + i, 4),
                    n.iDrawError = h),
                    o;
            if ((f === s || null === f) && null !== o && u !== r)
                f = o;
            else if ("function" == typeof f)
                return f.call(s);
            return null === f && "display" == u ? "" : f
        }
        function wu(n, t, i, r) {
            n.aoColumns[i].fnSetData(n.aoData[t]._aData, r, {
                settings: n,
                row: t,
                col: i
            })
        }
        function ur(t) {
            return n.map(t.match(/(\\.|[^\.])+/g) || [""], function (n) {
                return n.replace(/\\\./g, ".")
            })
        }
        function ft(t) {
            var i, u;
            return n.isPlainObject(t) ? (i = {},
                n.each(t, function (n, t) {
                    t && (i[n] = ft(t))
                }),
                function (n, t, u, f) {
                    var e = i[t] || i._;
                    return e !== r ? e(n, t, u, f) : n
                }
            ) : null === t ? function (n) {
                return n
            }
                    : "function" == typeof t ? function (n, i, r, u) {
                        return t(n, i, r, u)
                    }
                        : "string" == typeof t && (-1 !== t.indexOf(".") || -1 !== t.indexOf("[") || -1 !== t.indexOf("(")) ? (u = function (t, i, f) {
                            var s, o, e, h;
                            if ("" !== f)
                                for (o = ur(f),
                                    e = 0,
                                    h = o.length; e < h; e++) {
                                    if (f = o[e].match(ti),
                                        s = o[e].match(ct),
                                        f) {
                                        if (o[e] = o[e].replace(ti, ""),
                                            "" !== o[e] && (t = t[o[e]]),
                                            s = [],
                                            o.splice(0, e + 1),
                                            o = o.join("."),
                                            n.isArray(t))
                                            for (e = 0,
                                                h = t.length; e < h; e++)
                                                s.push(u(t[e], i, o));
                                        t = f[0].substring(1, f[0].length - 1);
                                        t = "" === t ? s : s.join(t);
                                        break
                                    } else if (s) {
                                        o[e] = o[e].replace(ct, "");
                                        t = t[o[e]]();
                                        continue
                                    }
                                    if (null === t || t[o[e]] === r)
                                        return r;
                                    t = t[o[e]]
                                }
                            return t
                        }
                            ,
                            function (n, i) {
                                return u(n, i, t)
                            }
                        ) : function (n) {
                            return n[t]
                        }
        }
        function rt(t) {
            if (n.isPlainObject(t))
                return rt(t._);
            if (null === t)
                return function () { }
                    ;
            if ("function" == typeof t)
                return function (n, i, r) {
                    t(n, "set", i, r)
                }
                    ;
            if ("string" == typeof t && (-1 !== t.indexOf(".") || -1 !== t.indexOf("[") || -1 !== t.indexOf("("))) {
                var i = function (t, u, f) {
                    var f = ur(f), o, h, s, e, c;
                    for (o = f[f.length - 1],
                        e = 0,
                        c = f.length - 1; e < c; e++) {
                        if (h = f[e].match(ti),
                            s = f[e].match(ct),
                            h) {
                            if (f[e] = f[e].replace(ti, ""),
                                t[f[e]] = [],
                                o = f.slice(),
                                o.splice(0, e + 1),
                                h = o.join("."),
                                n.isArray(u))
                                for (s = 0,
                                    c = u.length; s < c; s++)
                                    o = {},
                                        i(o, u[s], h),
                                        t[f[e]].push(o);
                            else
                                t[f[e]] = u;
                            return
                        }
                        s && (f[e] = f[e].replace(ct, ""),
                            t = t[f[e]](u));
                        (null === t[f[e]] || t[f[e]] === r) && (t[f[e]] = {});
                        t = t[f[e]]
                    }
                    o.match(ct) ? t[o.replace(ct, "")](u) : t[o.replace(ti, "")] = u
                };
                return function (n, r) {
                    return i(n, r, t)
                }
            }
            return function (n, i) {
                n[t] = i
            }
        }
        function fr(n) {
            return b(n.aoData, "_aData")
        }
        function ei(n) {
            n.aoData.length = 0;
            n.aiDisplayMaster.length = 0;
            n.aiDisplay.length = 0;
            n.aIds = {}
        }
        function oi(n, t, i) {
            for (var f = -1, u = 0, e = n.length; u < e; u++)
                n[u] == t ? f = u : n[u] > t && n[u]--;
            -1 != f && i === r && n.splice(f, 1)
        }
        function pt(n, t, i, u) {
            var f = n.aoData[t], s, e = function (i, r) {
                for (; i.childNodes.length;)
                    i.removeChild(i.firstChild);
                i.innerHTML = y(n, t, r, "display")
            }, o;
            if ("dom" !== i && (i && "auto" !== i || "dom" !== f.src)) {
                if (o = f.anCells,
                    o)
                    if (u !== r)
                        e(o[u], u);
                    else
                        for (i = 0,
                            s = o.length; i < s; i++)
                            e(o[i], i)
            } else
                f._aData = er(n, f, u, u === r ? r : f._aData).data;
            if (f._aSortData = null,
                f._aFilterData = null,
                e = n.aoColumns,
                u !== r)
                e[u].sType = null;
            else {
                for (i = 0,
                    s = e.length; i < s; i++)
                    e[i].sType = null;
                sr(n, f)
            }
        }
        function er(t, i, u, f) {
            var s = [], e = i.firstChild, h, o, c = 0, l, p = t.aoColumns, v = t._rowReadObject, f = f !== r ? f : v ? {} : [], a = function (n, t) {
                if ("string" == typeof n) {
                    var i = n.indexOf("@");
                    -1 !== i && (i = n.substring(i + 1),
                        rt(n)(f, t.getAttribute(i)))
                }
            }, y = function (t) {
                (u === r || u === c) && (o = p[c],
                    l = n.trim(t.innerHTML),
                    o && o._bAttrSrc ? (rt(o.mData._)(f, l),
                        a(o.mData.sort, t),
                        a(o.mData.type, t),
                        a(o.mData.filter, t)) : v ? (o._setter || (o._setter = rt(o.mData)),
                            o._setter(f, l)) : f[c] = l);
                c++
            };
            if (e)
                for (; e;)
                    h = e.nodeName.toUpperCase(),
                        ("TD" == h || "TH" == h) && (y(e),
                            s.push(e)),
                        e = e.nextSibling;
            else
                for (s = i.anCells,
                    e = 0,
                    h = s.length; e < h; e++)
                    y(s[e]);
            return (i = i.firstChild ? i : i.nTr) && (i = i.getAttribute("id")) && rt(t.rowId)(f, i),
            {
                data: f,
                cells: s
            }
        }
        function or(t, r, u, f) {
            var c = t.aoData[r], v = c._aData, a = [], l, h, e, s, p;
            if (null === c.nTr) {
                for (l = u || i.createElement("tr"),
                    c.nTr = l,
                    c.anCells = a,
                    l._DT_RowIndex = r,
                    sr(t, c),
                    s = 0,
                    p = t.aoColumns.length; s < p; s++)
                    e = t.aoColumns[s],
                        h = u ? f[s] : i.createElement(e.sCellType),
                        h._DT_CellIndex = {
                            row: r,
                            column: s
                        },
                        a.push(h),
                        u && !e.mRender && e.mData === s || n.isPlainObject(e.mData) && e.mData._ === s + ".display" || (h.innerHTML = y(t, r, s, "display")),
                        e.sClass && (h.className += " " + e.sClass),
                        e.bVisible && !u ? l.appendChild(h) : !e.bVisible && u && h.parentNode.removeChild(h),
                        e.fnCreatedCell && e.fnCreatedCell.call(t.oInstance, h, y(t, r, s), v, r, s);
                o(t, "aoRowCreatedCallback", null, [l, v, r, a])
            }
            c.nTr.setAttribute("role", "row")
        }
        function sr(t, i) {
            var f = i.nTr, r = i._aData, u;
            f && (u = t.rowIdFn(r),
                u && (f.id = u),
                r.DT_RowClass && (u = r.DT_RowClass.split(" "),
                    i.__rowc = i.__rowc ? bi(i.__rowc.concat(u)) : u,
                    n(f).removeClass(i.__rowc.join(" ")).addClass(r.DT_RowClass)),
                r.DT_RowAttr && n(f).attr(r.DT_RowAttr),
                r.DT_RowData && n(f).data(r.DT_RowData))
        }
        function bu(t) {
            var r, e, u, c, i, f = t.nTHead, l = t.nTFoot, o = 0 === n("th, td", f).length, s = t.oClasses, h = t.aoColumns;
            for (o && (c = n("<tr/>").appendTo(f)),
                r = 0,
                e = h.length; r < e; r++)
                i = h[r],
                    u = n(i.nTh).addClass(i.sClass),
                    o && u.appendTo(c),
                    t.oFeatures.bSort && (u.addClass(i.sSortingClass),
                        !1 !== i.bSortable && (u.attr("tabindex", t.iTabIndex).attr("aria-controls", t.sTableId),
                            yr(t, i.nTh, r))),
                    i.sTitle != u[0].innerHTML && u.html(i.sTitle),
                    kr(t, "header")(t, u, i, s);
            if (o && bt(t.aoHeader, f),
                n(f).find(">tr").attr("role", "row"),
                n(f).find(">tr>th, >tr>td").addClass(s.sHeaderTH),
                n(l).find(">tr>th, >tr>td").addClass(s.sFooterTH),
                null !== l)
                for (t = t.aoFooter[0],
                    r = 0,
                    e = t.length; r < e; r++)
                    i = h[r],
                        i.nTf = t[r].cell,
                        i.sClass && n(i.nTf).addClass(i.sClass)
        }
        function wt(t, i, u) {
            var f, l, e, o = [], c = [], s = t.aoColumns.length, h;
            if (i) {
                for (u === r && (u = !1),
                    f = 0,
                    l = i.length; f < l; f++) {
                    for (o[f] = i[f].slice(),
                        o[f].nTr = i[f].nTr,
                        e = s - 1; 0 <= e; e--)
                        t.aoColumns[e].bVisible || u || o[f].splice(e, 1);
                    c.push([])
                }
                for (f = 0,
                    l = o.length; f < l; f++) {
                    if (t = o[f].nTr)
                        for (; e = t.firstChild;)
                            t.removeChild(e);
                    for (e = 0,
                        i = o[f].length; e < i; e++)
                        if (h = s = 1,
                            c[f][e] === r) {
                            for (t.appendChild(o[f][e].cell),
                                c[f][e] = 1; o[f + s] !== r && o[f][e].cell == o[f + s][e].cell;)
                                c[f + s][e] = 1,
                                    s++;
                            for (; o[f][e + h] !== r && o[f][e].cell == o[f][e + h].cell;) {
                                for (u = 0; u < s; u++)
                                    c[f + u][e + h] = 1;
                                h++
                            }
                            n(o[f][e].cell).attr("rowspan", s).attr("colspan", h)
                        }
                }
            }
        }
        function ut(t) {
            var c = o(t, "aoPreDrawCallback", "preDraw", [t]), i, a, y, e, p, b;
            if (-1 !== n.inArray(!1, c))
                w(t, !1);
            else {
                var c = []
                    , f = 0
                    , s = t.asStripeClasses
                    , k = s.length
                    , h = t.oLanguage
                    , i = t.iInitDisplayStart
                    , u = "ssp" == v(t)
                    , l = t.aiDisplay;
                if (t.bDrawing = !0,
                    i !== r && -1 !== i && (t._iDisplayStart = u ? i : i >= t.fnRecordsDisplay() ? 0 : i,
                        t.iInitDisplayStart = -1),
                    i = t._iDisplayStart,
                    a = t.fnDisplayEnd(),
                    t.bDeferLoading)
                    t.bDeferLoading = !1,
                        t.iDraw++ ,
                        w(t, !1);
                else if (u) {
                    if (!t.bDestroying && !du(t))
                        return
                } else
                    t.iDraw++;
                if (0 !== l.length)
                    for (h = u ? t.aoData.length : a,
                        u = u ? 0 : i; u < h; u++)
                        y = l[u],
                            e = t.aoData[y],
                            null === e.nTr && or(t, y),
                            p = e.nTr,
                            0 !== k && (b = s[f % k],
                                e._sRowStripe != b && (n(p).removeClass(e._sRowStripe).addClass(b),
                                    e._sRowStripe = b)),
                            o(t, "aoRowCallback", null, [p, e._aData, f, u, y]),
                            c.push(p),
                            f++;
                else
                    f = h.sZeroRecords,
                        1 == t.iDraw && "ajax" == v(t) ? f = h.sLoadingRecords : h.sEmptyTable && 0 === t.fnRecordsTotal() && (f = h.sEmptyTable),
                        c[0] = n("<tr/>", {
                            "class": k ? s[0] : ""
                        }).append(n("<td />", {
                            valign: "top",
                            colSpan: ot(t),
                            "class": t.oClasses.sRowEmpty
                        }).html(f))[0];
                o(t, "aoHeaderCallback", "header", [n(t.nTHead).children("tr")[0], fr(t), i, a, l]);
                o(t, "aoFooterCallback", "footer", [n(t.nTFoot).children("tr")[0], fr(t), i, a, l]);
                s = n(t.nTBody);
                s.children().detach();
                s.append(n(c));
                o(t, "aoDrawCallback", "draw", [t]);
                t.bSorted = !1;
                t.bFiltered = !1;
                t.bDrawing = !1
            }
        }
        function et(n, t) {
            var i = n.oFeatures
                , r = i.bFilter;
            i.bSort && df(n);
            r ? kt(n, n.oPreviousSearch) : n.aiDisplay = n.aiDisplayMaster.slice();
            !0 !== t && (n._iDisplayStart = 0);
            n._drawHold = t;
            ut(n);
            n._drawHold = !1
        }
        function ku(t) {
            var v = t.oClasses, y = n(t.nTable), y = n("<div/>").insertBefore(y), l = t.oFeatures, c = n("<div/>", {
                id: t.sTableId + "_wrapper",
                "class": v.sWrapper + (t.nTFoot ? "" : " " + v.sNoFooter)
            }), a, e, r, i, o, f, s, h;
            for (t.nHolding = y[0],
                t.nTableWrapper = c[0],
                t.nTableReinsertBefore = t.nTable.nextSibling,
                a = t.sDom.split(""),
                h = 0; h < a.length; h++) {
                if (e = null,
                    r = a[h],
                    "<" == r) {
                    if (i = n("<div/>")[0],
                        o = a[h + 1],
                        "'" == o || '"' == o) {
                        for (f = "",
                            s = 2; a[h + s] != o;)
                            f += a[h + s],
                                s++;
                        "H" == f ? f = v.sJUIHeader : "F" == f && (f = v.sJUIFooter);
                        -1 != f.indexOf(".") ? (o = f.split("."),
                            i.id = o[0].substr(1, o[0].length - 1),
                            i.className = o[1]) : "#" == f.charAt(0) ? i.id = f.substr(1, f.length - 1) : i.className = f;
                        h += s
                    }
                    c.append(i);
                    c = n(i)
                } else if (">" == r)
                    c = c.parent();
                else if ("l" == r && l.bPaginate && l.bLengthChange)
                    e = af(t);
                else if ("f" == r && l.bFilter)
                    e = tf(t);
                else if ("r" == r && l.bProcessing)
                    e = yf(t);
                else if ("t" == r)
                    e = pf(t);
                else if ("i" == r && l.bInfo)
                    e = hf(t);
                else if ("p" == r && l.bPaginate)
                    e = vf(t);
                else if (0 !== u.ext.feature.length)
                    for (i = u.ext.feature,
                        s = 0,
                        o = i.length; s < o; s++)
                        if (r == i[s].cFeature) {
                            e = i[s].fnInit(t);
                            break
                        }
                e && (i = t.aanFeatures,
                    i[r] || (i[r] = []),
                    i[r].push(e),
                    c.append(e))
            }
            y.replaceWith(c);
            t.nHolding = null
        }
        function bt(t, i) {
            var c = n(i).children("tr"), l, u, r, f, s, h, a, e, o, v;
            for (t.splice(0, t.length),
                r = 0,
                h = c.length; r < h; r++)
                t.push([]);
            for (r = 0,
                h = c.length; r < h; r++)
                for (l = c[r],
                    u = l.firstChild; u;) {
                    if ("TD" == u.nodeName.toUpperCase() || "TH" == u.nodeName.toUpperCase()) {
                        for (e = 1 * u.getAttribute("colspan"),
                            o = 1 * u.getAttribute("rowspan"),
                            e = !e || 0 === e || 1 === e ? 1 : e,
                            o = !o || 0 === o || 1 === o ? 1 : o,
                            f = 0,
                            s = t[r]; s[f];)
                            f++;
                        for (a = f,
                            v = 1 === e ? !0 : !1,
                            s = 0; s < e; s++)
                            for (f = 0; f < o; f++)
                                t[r + f][a + s] = {
                                    cell: u,
                                    unique: v
                                },
                                    t[r + f].nTr = l
                    }
                    u = u.nextSibling
                }
        }
        function si(n, t, i) {
            var u = [], t, f, r, e;
            for (i || (i = n.aoHeader,
                t && (i = [],
                    bt(i, t))),
                t = 0,
                f = i.length; t < f; t++)
                for (r = 0,
                    e = i[t].length; r < e; r++)
                    !i[t][r].unique || u[r] && n.bSortCellsTop || (u[r] = i[t][r].cell);
            return u
        }
        function hi(t, i, r) {
            var e, c, f, i;
            o(t, "aoServerParams", "serverParams", [i]);
            i && n.isArray(i) && (e = {},
                c = /(.*?)\[\]$/,
                n.each(i, function (n, t) {
                    var i = t.name.match(c);
                    i ? (i = i[0],
                        e[i] || (e[i] = []),
                        e[i].push(t.value)) : e[t.name] = t.value
                }),
                i = e);
            var s, u = t.ajax, l = t.oInstance, h = function (n) {
                o(t, null, "xhr", [t, n, t.jqXHR]);
                r(n)
            };
            n.isPlainObject(u) && u.data && (s = u.data,
                f = "function" == typeof s ? s(i, t) : s,
                i = "function" == typeof s && f ? f : n.extend(!0, i, f),
                delete u.data);
            f = {
                data: i,
                success: function (n) {
                    var i = n.error || n.sError;
                    i && nt(t, 0, i);
                    t.json = n;
                    h(n)
                },
                dataType: "json",
                cache: !1,
                type: t.sServerMethod,
                error: function (i, r) {
                    var u = o(t, null, "xhr", [t, null, t.jqXHR]);
                    -1 === n.inArray(!0, u) && ("parsererror" == r ? nt(t, 0, "Invalid JSON response", 1) : 4 === i.readyState && nt(t, 0, "Ajax error", 7));
                    w(t, !1)
                }
            };
            t.oAjaxData = i;
            o(t, null, "preXhr", [t, i]);
            t.fnServerData ? t.fnServerData.call(l, t.sAjaxSource, n.map(i, function (n, t) {
                return {
                    name: t,
                    value: n
                }
            }), h, t) : t.sAjaxSource || "string" == typeof u ? t.jqXHR = n.ajax(n.extend(f, {
                url: u || t.sAjaxSource
            })) : "function" == typeof u ? t.jqXHR = u.call(l, i, h, t) : (t.jqXHR = n.ajax(n.extend(f, u)),
                u.data = s)
        }
        function du(n) {
            return n.bAjaxDataGet ? (n.iDraw++ ,
                w(n, !0),
                hi(n, gu(n), function (t) {
                    nf(n, t)
                }),
                !1) : !0
        }
        function gu(t) {
            var e = t.aoColumns, v = e.length, s = t.oFeatures, l = t.oPreviousSearch, p = t.aoPreSearchCols, r, a = [], o, f, h, y = st(t), i, c;
            for (r = t._iDisplayStart,
                o = !1 !== s.bPaginate ? t._iDisplayLength : -1,
                i = function (n, t) {
                    a.push({
                        name: n,
                        value: t
                    })
                }
                ,
                i("sEcho", t.iDraw),
                i("iColumns", v),
                i("sColumns", b(e, "sName").join(",")),
                i("iDisplayStart", r),
                i("iDisplayLength", o),
                c = {
                    draw: t.iDraw,
                    columns: [],
                    order: [],
                    start: r,
                    length: o,
                    search: {
                        value: l.sSearch,
                        regex: l.bRegex
                    }
                },
                r = 0; r < v; r++)
                f = e[r],
                    h = p[r],
                    o = "function" == typeof f.mData ? "function" : f.mData,
                    c.columns.push({
                        data: o,
                        name: f.sName,
                        searchable: f.bSearchable,
                        orderable: f.bSortable,
                        search: {
                            value: h.sSearch,
                            regex: h.bRegex
                        }
                    }),
                    i("mDataProp_" + r, o),
                    s.bFilter && (i("sSearch_" + r, h.sSearch),
                        i("bRegex_" + r, h.bRegex),
                        i("bSearchable_" + r, f.bSearchable)),
                    s.bSort && i("bSortable_" + r, f.bSortable);
            return s.bFilter && (i("sSearch", l.sSearch),
                i("bRegex", l.bRegex)),
                s.bSort && (n.each(y, function (n, t) {
                    c.order.push({
                        column: t.col,
                        dir: t.dir
                    });
                    i("iSortCol_" + n, t.col);
                    i("sSortDir_" + n, t.dir)
                }),
                    i("iSortingCols", y.length)),
                e = u.ext.legacy.ajax,
                null === e ? t.sAjaxSource ? a : c : e ? a : c
        }
        function nf(n, t) {
            var f = ci(n, t)
                , i = t.sEcho !== r ? t.sEcho : t.draw
                , u = t.iTotalRecords !== r ? t.iTotalRecords : t.recordsTotal
                , e = t.iTotalDisplayRecords !== r ? t.iTotalDisplayRecords : t.recordsFiltered;
            if (i) {
                if (1 * i < n.iDraw)
                    return;
                n.iDraw = 1 * i
            }
            for (ei(n),
                n._iRecordsTotal = parseInt(u, 10),
                n._iRecordsDisplay = parseInt(e, 10),
                i = 0,
                u = f.length; i < u; i++)
                it(n, f[i]);
            n.aiDisplay = n.aiDisplayMaster.slice();
            n.bAjaxDataGet = !1;
            ut(n);
            n._bInitComplete || li(n, t);
            n.bAjaxDataGet = !0;
            w(n, !1)
        }
        function ci(t, i) {
            var u = n.isPlainObject(t.ajax) && t.ajax.dataSrc !== r ? t.ajax.dataSrc : t.sAjaxDataProp;
            return "data" === u ? i.aaData || i[u] : "" !== u ? ft(u)(i) : i
        }
        function tf(t) {
            var u = t.oClasses
                , s = t.sTableId
                , h = t.oLanguage
                , r = t.oPreviousSearch
                , o = t.aanFeatures
                , f = '<input type="search" class="' + u.sFilterInput + '"/>'
                , e = h.sSearch
                , e = e.match(/_INPUT_/) ? e.replace("_INPUT_", f) : e + f
                , u = n("<div/>", {
                    id: o.f ? null : s + "_filter",
                    "class": u.sFilter
                }).append(n("<label/>").append(e))
                , o = function () {
                    var n = this.value ? this.value : "";
                    n != r.sSearch && (kt(t, {
                        sSearch: n,
                        bRegex: r.bRegex,
                        bSmart: r.bSmart,
                        bCaseInsensitive: r.bCaseInsensitive
                    }),
                        t._iDisplayStart = 0,
                        ut(t))
                }
                , f = null !== t.searchDelay ? t.searchDelay : "ssp" === v(t) ? 400 : 0
                , c = n("input", u).val(r.sSearch).attr("placeholder", h.sSearchPlaceholder).on("keyup.DT search.DT input.DT paste.DT cut.DT", f ? ru(o, f) : o).on("keypress.DT", function (n) {
                    if (13 == n.keyCode)
                        return !1
                }).attr("aria-controls", s);
            n(t.nTable).on("search.dt.DT", function (n, u) {
                if (t === u)
                    try {
                        c[0] !== i.activeElement && c.val(r.sSearch)
                    } catch (f) { }
            });
            return u[0]
        }
        function kt(n, t, i) {
            var f = n.oPreviousSearch
                , u = n.aoPreSearchCols
                , e = function (n) {
                    f.sSearch = n.sSearch;
                    f.bRegex = n.bRegex;
                    f.bSmart = n.bSmart;
                    f.bCaseInsensitive = n.bCaseInsensitive
                };
            if (rr(n),
                "ssp" != v(n)) {
                for (ff(n, t.sSearch, i, t.bEscapeRegex !== r ? !t.bEscapeRegex : t.bRegex, t.bSmart, t.bCaseInsensitive),
                    e(t),
                    t = 0; t < u.length; t++)
                    uf(n, u[t].sSearch, t, u[t].bEscapeRegex !== r ? !u[t].bEscapeRegex : u[t].bRegex, u[t].bSmart, u[t].bCaseInsensitive);
                rf(n)
            } else
                e(t);
            n.bFiltered = !0;
            o(n, null, "search", [n])
        }
        function rf(t) {
            for (var s = u.ext.search, i = t.aiDisplay, e, r, o = 0, c = s.length; o < c; o++) {
                for (var h = [], f = 0, l = i.length; f < l; f++)
                    r = i[f],
                        e = t.aoData[r],
                        s[o](t, e._aFilterData, r, e._aData, f) && h.push(r);
                i.length = 0;
                n.merge(i, h)
            }
        }
        function uf(n, t, i, r, u, f) {
            if ("" !== t) {
                for (var o = [], e = n.aiDisplay, r = hr(t, r, u, f), u = 0; u < e.length; u++)
                    t = n.aoData[e[u]]._aFilterData[i],
                        r.test(t) && o.push(e[u]);
                n.aiDisplay = o
            }
        }
        function ff(n, t, i, r, f, e) {
            var r = hr(t, r, f, e), e = n.oPreviousSearch.sSearch, o = n.aiDisplayMaster, s, f = [];
            if (0 !== u.ext.search.length && (i = !0),
                s = ef(n),
                0 >= t.length)
                n.aiDisplay = o.slice();
            else {
                for ((s || i || e.length > t.length || 0 !== t.indexOf(e) || n.bSorted) && (n.aiDisplay = o.slice()),
                    t = n.aiDisplay,
                    i = 0; i < t.length; i++)
                    r.test(n.aoData[t[i]]._sFilterRow) && f.push(t[i]);
                n.aiDisplay = f
            }
        }
        function hr(t, i, r, u) {
            return t = i ? t : iu(t),
                r && (t = "^(?=.*?" + n.map(t.match(/"[^"]+"|[^ ]+/g) || [""], function (n) {
                    if ('"' === n.charAt(0))
                        var t = n.match(/^"(.*)"$/)
                            , n = t ? t[1] : n;
                    return n.replace('"', "")
                }).join(")(?=.*?") + ").*$"),
                RegExp(t, u ? "i" : "")
        }
        function ef(n) {
            var s = n.aoColumns, i, r, f, h, c, e, t, o, l = u.ext.type.search;
            for (i = !1,
                r = 0,
                h = n.aoData.length; r < h; r++)
                if (o = n.aoData[r],
                    !o._aFilterData) {
                    for (e = [],
                        f = 0,
                        c = s.length; f < c; f++)
                        i = s[f],
                            i.bSearchable ? (t = y(n, r, f, "filter"),
                                l[i.sType] && (t = l[i.sType](t)),
                                null === t && (t = ""),
                                "string" != typeof t && t.toString && (t = t.toString())) : t = "",
                            t.indexOf && -1 !== t.indexOf("&") && (ki.innerHTML = t,
                                t = ae ? ki.textContent : ki.innerText),
                            t.replace && (t = t.replace(/[\r\n]/g, "")),
                            e.push(t);
                    o._aFilterData = e;
                    o._sFilterRow = e.join("  ");
                    i = !0
                }
            return i
        }
        function of(n) {
            return {
                search: n.sSearch,
                smart: n.bSmart,
                regex: n.bRegex,
                caseInsensitive: n.bCaseInsensitive
            }
        }
        function sf(n) {
            return {
                sSearch: n.search,
                bSmart: n.smart,
                bRegex: n.regex,
                bCaseInsensitive: n.caseInsensitive
            }
        }
        function hf(t) {
            var i = t.sTableId
                , r = t.aanFeatures.i
                , u = n("<div/>", {
                    "class": t.oClasses.sInfo,
                    id: r ? null : i + "_info"
                });
            return r || (t.aoDrawCallback.push({
                fn: cf,
                sName: "information"
            }),
                u.attr("role", "status").attr("aria-live", "polite"),
                n(t.nTable).attr("aria-describedby", i + "_info")),
                u[0]
        }
        function cf(t) {
            var f = t.aanFeatures.i;
            if (0 !== f.length) {
                var i = t.oLanguage
                    , o = t._iDisplayStart + 1
                    , s = t.fnDisplayEnd()
                    , e = t.fnRecordsTotal()
                    , u = t.fnRecordsDisplay()
                    , r = u ? i.sInfo : i.sInfoEmpty;
                u !== e && (r += " " + i.sInfoFiltered);
                r += i.sInfoPostFix;
                r = lf(t, r);
                i = i.fnInfoCallback;
                null !== i && (r = i.call(t.oInstance, t, o, s, e, u, r));
                n(f).html(r)
            }
        }
        function lf(n, t) {
            var i = n.fnFormatNumber
                , u = n._iDisplayStart + 1
                , r = n._iDisplayLength
                , f = n.fnRecordsDisplay()
                , e = -1 === r;
            return t.replace(/_START_/g, i.call(n, u)).replace(/_END_/g, i.call(n, n.fnDisplayEnd())).replace(/_MAX_/g, i.call(n, n.fnRecordsTotal())).replace(/_TOTAL_/g, i.call(n, f)).replace(/_PAGE_/g, i.call(n, e ? 1 : Math.ceil(u / r))).replace(/_PAGES_/g, i.call(n, e ? 1 : Math.ceil(f / r)))
        }
        function dt(n) {
            var t, r, e = n.iInitDisplayStart, i = n.aoColumns, u, f;
            if (r = n.oFeatures,
                f = n.bDeferLoading,
                n.bInitialised) {
                for (ku(n),
                    bu(n),
                    wt(n, n.aoHeader),
                    wt(n, n.aoFooter),
                    w(n, !0),
                    r.bAutoWidth && ar(n),
                    t = 0,
                    r = i.length; t < r; t++)
                    u = i[t],
                        u.sWidth && (u.nTh.style.width = h(u.sWidth));
                o(n, null, "preInit", [n]);
                et(n);
                i = v(n);
                ("ssp" != i || f) && ("ajax" == i ? hi(n, [], function (i) {
                    var r = ci(n, i);
                    for (t = 0; t < r.length; t++)
                        it(n, r[t]);
                    n.iInitDisplayStart = e;
                    et(n);
                    w(n, !1);
                    li(n, i)
                }, n) : (w(n, !1),
                    li(n)))
            } else
                setTimeout(function () {
                    dt(n)
                }, 200)
        }
        function li(n, t) {
            n._bInitComplete = !0;
            (t || n.oInit.aaData) && at(n);
            o(n, null, "plugin-init", [n, t]);
            o(n, "aoInitComplete", "init", [n, t])
        }
        function cr(n, t) {
            var i = parseInt(t, 10);
            n._iDisplayLength = i;
            br(n);
            o(n, null, "length", [n, i])
        }
        function af(t) {
            for (var u, o = t.oClasses, e = t.sTableId, i = t.aLengthMenu, f = n.isArray(i[0]), s = f ? i[0] : i, i = f ? i[1] : i, f = n("<select/>", {
                name: e + "_length",
                "aria-controls": e,
                "class": o.sLengthSelect
            }), r = 0, h = s.length; r < h; r++)
                f[0][r] = new Option("number" == typeof i[r] ? t.fnFormatNumber(i[r]) : i[r], s[r]);
            u = n("<div><label/><\/div>").addClass(o.sLength);
            t.aanFeatures.l || (u[0].id = e + "_length");
            u.children().append(t.oLanguage.sLengthMenu.replace("_MENU_", f[0].outerHTML));
            n("select", u).val(t._iDisplayLength).on("change.DT", function () {
                cr(t, n(this).val());
                ut(t)
            });
            n(t.nTable).on("length.dt.DT", function (i, r, f) {
                t === r && n("select", u).val(f)
            });
            return u[0]
        }
        function vf(t) {
            var i = t.sPaginationType
                , r = u.ext.pager[i]
                , e = "function" == typeof r
                , o = function (n) {
                    ut(n)
                }
                , i = n("<div/>").addClass(t.oClasses.sPaging + i)[0]
                , f = t.aanFeatures;
            return e || r.fnInit(t, i, o),
                f.p || (i.id = t.sTableId + "_paginate",
                    t.aoDrawCallback.push({
                        fn: function (n) {
                            if (e)
                                for (var u = n._iDisplayStart, i = n._iDisplayLength, s = n.fnRecordsDisplay(), t = -1 === i, u = t ? 0 : Math.ceil(u / i), i = t ? 1 : Math.ceil(s / i), s = r(u, i), t = 0, h = f.p.length; t < h; t++)
                                    kr(n, "pageButton")(n, f.p[t], t, s, u, i);
                            else
                                r.fnUpdate(n, o)
                        },
                        sName: "pagination"
                    })),
                i
        }
        function lr(n, t, i) {
            var r = n._iDisplayStart
                , u = n._iDisplayLength
                , f = n.fnRecordsDisplay();
            return 0 === f || -1 === u ? r = 0 : "number" == typeof t ? (r = t * u,
                r > f && (r = 0)) : "first" == t ? r = 0 : "previous" == t ? (r = 0 <= u ? r - u : 0,
                    0 > r && (r = 0)) : "next" == t ? r + u < f && (r += u) : "last" == t ? r = Math.floor((f - 1) / u) * u : nt(n, 0, "Unknown paging action: " + t, 5),
                t = n._iDisplayStart !== r,
                n._iDisplayStart = r,
                t && (o(n, null, "page", [n]),
                    i && ut(n)),
                t
        }
        function yf(t) {
            return n("<div/>", {
                id: t.aanFeatures.r ? null : t.sTableId + "_processing",
                "class": t.oClasses.sProcessing
            }).html(t.oLanguage.sProcessing).insertBefore(t.nTable)[0]
        }
        function w(t, i) {
            t.oFeatures.bProcessing && n(t.aanFeatures.r).css("display", i ? "block" : "none");
            o(t, null, "processing", [t, i])
        }
        function pf(t) {
            var i = n(t.nTable), f;
            if (i.attr("role", "grid"),
                f = t.oScroll,
                "" === f.sX && "" === f.sY)
                return t.nTable;
            var r = f.sX
                , c = f.sY
                , u = t.oClasses
                , s = i.children("caption")
                , l = s.length ? s[0]._captionSide : null
                , e = n(i[0].cloneNode(!1))
                , y = n(i[0].cloneNode(!1))
                , o = i.children("tfoot");
            o.length || (o = null);
            e = n("<div/>", {
                "class": u.sScrollWrapper
            }).append(n("<div/>", {
                "class": u.sScrollHead
            }).css({
                overflow: "hidden",
                position: "relative",
                border: 0,
                width: r ? r ? h(r) : null : "100%"
            }).append(n("<div/>", {
                "class": u.sScrollHeadInner
            }).css({
                "box-sizing": "content-box",
                width: f.sXInner || "100%"
            }).append(e.removeAttr("id").css("margin-left", 0).append("top" === l ? s : null).append(i.children("thead"))))).append(n("<div/>", {
                "class": u.sScrollBody
            }).css({
                position: "relative",
                overflow: "auto",
                width: r ? h(r) : null
            }).append(i));
            o && e.append(n("<div/>", {
                "class": u.sScrollFoot
            }).css({
                overflow: "hidden",
                border: 0,
                width: r ? r ? h(r) : null : "100%"
            }).append(n("<div/>", {
                "class": u.sScrollFootInner
            }).append(y.removeAttr("id").css("margin-left", 0).append("bottom" === l ? s : null).append(i.children("tfoot")))));
            var i = e.children()
                , a = i[0]
                , u = i[1]
                , v = o ? i[2] : null;
            if (r)
                n(u).on("scroll.DT", function () {
                    var n = this.scrollLeft;
                    a.scrollLeft = n;
                    o && (v.scrollLeft = n)
                });
            return n(u).css(c && f.bCollapse ? "max-height" : "height", c),
                t.nScrollHead = a,
                t.nScrollBody = u,
                t.nScrollFoot = v,
                t.aoDrawCallback.push({
                    fn: ai,
                    sName: "scrolling"
                }),
                e[0]
        }
        function ai(t) {
            var f = t.oScroll, s = f.sX, v = f.sXInner, p = f.sY, f = f.iBarWidth, e = n(t.nScrollHead), pt = e[0].style, u = e.children("div"), et = u[0].style, wt = u.children("table"), u = t.nScrollBody, y = n(u), tt = u.style, it = n(t.nScrollFoot).children("div"), bt = it.children("table"), w = n(t.nTHead), i = n(t.nTable), ot = i[0], k = ot.style, c = t.nTFoot ? n(t.nTFoot) : null, st = t.oBrowser, rt = st.bScrollOversize, kt = b(t.aoColumns, "nTh"), l, o, a, g, ut = [], ft = [], ht = [], ct = [], lt, yt = function (n) {
                n = n.style;
                n.paddingTop = "0";
                n.paddingBottom = "0";
                n.borderTopWidth = "0";
                n.borderBottomWidth = "0";
                n.height = 0
            };
            o = u.scrollHeight > u.clientHeight;
            t.scrollBarVis !== o && t.scrollBarVis !== r ? (t.scrollBarVis = o,
                at(t)) : (t.scrollBarVis = o,
                    i.children("thead, tfoot").remove(),
                    c && (a = c.clone().prependTo(i),
                        l = c.find("tr"),
                        a = a.find("tr")),
                    g = w.clone().prependTo(i),
                    w = w.find("tr"),
                    o = g.find("tr"),
                    g.find("th, td").removeAttr("tabindex"),
                    s || (tt.width = "100%",
                        e[0].style.width = "100%"),
                    n.each(si(t, g), function (n, i) {
                        lt = vt(t, n);
                        i.style.width = t.aoColumns[lt].sWidth
                    }),
                    c && d(function (n) {
                        n.style.width = ""
                    }, a),
                    e = i.outerWidth(),
                    "" === s ? (k.width = "100%",
                        rt && (i.find("tbody").height() > u.offsetHeight || "scroll" == y.css("overflow-y")) && (k.width = h(i.outerWidth() - f)),
                        e = i.outerWidth()) : "" !== v && (k.width = h(v),
                            e = i.outerWidth()),
                    d(yt, o),
                    d(function (t) {
                        ht.push(t.innerHTML);
                        ut.push(h(n(t).css("width")))
                    }, o),
                    d(function (t, i) {
                        n.inArray(t, kt) !== -1 && (t.style.width = ut[i])
                    }, w),
                    n(o).height(0),
                    c && (d(yt, a),
                        d(function (t) {
                            ct.push(t.innerHTML);
                            ft.push(h(n(t).css("width")))
                        }, a),
                        d(function (n, t) {
                            n.style.width = ft[t]
                        }, l),
                        n(a).height(0)),
                    d(function (n, t) {
                        n.innerHTML = '<div class="dataTables_sizing">' + ht[t] + "<\/div>";
                        n.childNodes[0].style.height = "0";
                        n.childNodes[0].style.overflow = "hidden";
                        n.style.width = ut[t]
                    }, o),
                    c && d(function (n, t) {
                        n.innerHTML = '<div class="dataTables_sizing">' + ct[t] + "<\/div>";
                        n.childNodes[0].style.height = "0";
                        n.childNodes[0].style.overflow = "hidden";
                        n.style.width = ft[t]
                    }, a),
                    i.outerWidth() < e ? (l = u.scrollHeight > u.offsetHeight || "scroll" == y.css("overflow-y") ? e + f : e,
                        rt && (u.scrollHeight > u.offsetHeight || "scroll" == y.css("overflow-y")) && (k.width = h(l - f)),
                        ("" === s || "" !== v) && nt(t, 1, "Possible column misalignment", 6)) : l = "100%",
                    tt.width = h(l),
                    pt.width = h(l),
                    c && (t.nScrollFoot.style.width = h(l)),
                    !p && rt && (tt.height = h(ot.offsetHeight + f)),
                    s = i.outerWidth(),
                    wt[0].style.width = h(s),
                    et.width = h(s),
                    v = i.height() > u.clientHeight || "scroll" == y.css("overflow-y"),
                    p = "padding" + (st.bScrollbarLeft ? "Left" : "Right"),
                    et[p] = v ? f + "px" : "0px",
                    c && (bt[0].style.width = h(s),
                        it[0].style.width = h(s),
                        it[0].style[p] = v ? f + "px" : "0px"),
                    i.children("colgroup").insertBefore(i.children("thead")),
                    y.scroll(),
                    (t.bSorted || t.bFiltered) && !t._drawHold && (u.scrollTop = 0))
        }
        function d(n, t, i) {
            for (var e = 0, u = 0, o = t.length, r, f; u < o;) {
                for (r = t[u].firstChild,
                    f = i ? i[u].firstChild : null; r;)
                    1 === r.nodeType && (i ? n(r, f, e) : n(r, e),
                        e++),
                        r = r.nextSibling,
                        f = i ? f.nextSibling : null;
                u++
            }
        }
        function ar(i) {
            var s = i.nTable, a = i.aoColumns, p = i.oScroll, v = p.sY, y = p.sX, b = p.sXInner, u = a.length, o = ui(i, "bVisible"), c = n("th", i.nTHead), l = s.getAttribute("width"), e = s.parentNode, w = !1, r, f, k = i.oBrowser, p = k.bScrollOversize, d;
            for ((r = s.style.width) && -1 !== r.indexOf("%") && (l = r),
                r = 0; r < o.length; r++)
                f = a[o[r]],
                    null !== f.sWidth && (f.sWidth = wf(f.sWidthOrig, e),
                        w = !0);
            if (!p && (w || y || v || u != ot(i) || u != c.length)) {
                for (u = n(s).clone().css("visibility", "hidden").removeAttr("id"),
                    u.find("tbody tr").remove(),
                    d = n("<tr/>").appendTo(u.find("tbody")),
                    u.find("thead, tfoot").remove(),
                    u.append(n(i.nTHead).clone()).append(n(i.nTFoot).clone()),
                    u.find("tfoot th, tfoot td").css("width", ""),
                    c = si(i, u.find("thead")[0]),
                    r = 0; r < o.length; r++)
                    f = a[o[r]],
                        c[r].style.width = null !== f.sWidthOrig && "" !== f.sWidthOrig ? h(f.sWidthOrig) : "",
                        f.sWidthOrig && y && n(c[r]).append(n("<div/>").css({
                            width: f.sWidthOrig,
                            margin: 0,
                            padding: 0,
                            border: 0,
                            height: 1
                        }));
                if (i.aoData.length)
                    for (r = 0; r < o.length; r++)
                        w = o[r],
                            f = a[w],
                            n(bf(i, w)).clone(!1).append(f.sContentPadding).appendTo(d);
                for (n("[name]", u).removeAttr("name"),
                    f = n("<div/>").css(y || v ? {
                        position: "absolute",
                        top: 0,
                        left: 0,
                        height: 1,
                        right: 0,
                        overflow: "hidden"
                    } : {}).append(u).appendTo(e),
                    y && b ? u.width(b) : y ? (u.css("width", "auto"),
                        u.removeAttr("width"),
                        u.width() < e.clientWidth && l && u.width(e.clientWidth)) : v ? u.width(e.clientWidth) : l && u.width(l),
                    r = v = 0; r < o.length; r++)
                    e = n(c[r]),
                        b = e.outerWidth() - e.width(),
                        e = k.bBounding ? Math.ceil(c[r].getBoundingClientRect().width) : e.outerWidth(),
                        v += e,
                        a[o[r]].sWidth = h(e - b);
                s.style.width = h(v);
                f.remove()
            } else
                for (r = 0; r < u; r++)
                    o = vt(i, r),
                        null !== o && (a[o].sWidth = h(c.eq(r).width()));
            l && (s.style.width = h(l));
            (l || y) && !i._reszEvt && (s = function () {
                n(t).on("resize.DT-" + i.sInstance, ru(function () {
                    at(i)
                }))
            }
                ,
                p ? setTimeout(s, 1e3) : s(),
                i._reszEvt = !0)
        }
        function wf(t, r) {
            if (!t)
                return 0;
            var u = n("<div/>").css("width", h(t)).appendTo(r || i.body)
                , f = u[0].offsetWidth;
            return u.remove(),
                f
        }
        function bf(t, i) {
            var r = kf(t, i), u;
            return 0 > r ? null : (u = t.aoData[r],
                u.nTr ? u.anCells[i] : n("<td/>").html(y(t, r, i, "display"))[0])
        }
        function kf(n, t) {
            for (var i, u = -1, f = -1, r = 0, e = n.aoData.length; r < e; r++)
                i = y(n, r, t, "display") + "",
                    i = i.replace(ve, ""),
                    i = i.replace(/&nbsp;/g, " "),
                    i.length > u && (u = i.length,
                        f = r);
            return f
        }
        function h(n) {
            return null === n ? "0px" : "number" == typeof n ? 0 > n ? "0px" : n + "px" : n.match(/\d$/) ? n + "px" : n
        }
        function st(t) {
            var i, o, a = [], h = t.aoColumns, e, s, c, l, f;
            for (i = t.aaSortingFixed,
                o = n.isPlainObject(i),
                f = [],
                e = function (t) {
                    t.length && !n.isArray(t[0]) ? f.push(t) : n.merge(f, t)
                }
                ,
                n.isArray(i) && e(i),
                o && i.pre && e(i.pre),
                e(t.aaSorting),
                o && i.post && e(i.post),
                t = 0; t < f.length; t++)
                for (l = f[t][0],
                    e = h[l].aDataSort,
                    i = 0,
                    o = e.length; i < o; i++)
                    s = e[i],
                        c = h[s].sType || "string",
                        f[t]._idx === r && (f[t]._idx = n.inArray(f[t][1], h[s].asSorting)),
                        a.push({
                            src: l,
                            col: s,
                            dir: f[t][1],
                            index: f[t]._idx,
                            type: c,
                            formatter: u.ext.type.order[c + "-pre"]
                        });
            return a
        }
        function df(n) {
            var t, f, r = [], h = u.ext.type.order, e = n.aoData, c = 0, s, o = n.aiDisplayMaster, i;
            for (rr(n),
                i = st(n),
                t = 0,
                f = i.length; t < f; t++)
                s = i[t],
                    s.formatter && c++ ,
                    ne(n, s.col);
            if ("ssp" != v(n) && 0 !== i.length) {
                for (t = 0,
                    f = o.length; t < f; t++)
                    r[o[t]] = t;
                c === i.length ? o.sort(function (n, t) {
                    for (var u, f, s, h = i.length, c = e[n]._aSortData, l = e[t]._aSortData, o = 0; o < h; o++)
                        if (s = i[o],
                            u = c[s.col],
                            f = l[s.col],
                            u = u < f ? -1 : u > f ? 1 : 0,
                            0 !== u)
                            return "asc" === s.dir ? u : -u;
                    return u = r[n],
                        f = r[t],
                        u < f ? -1 : u > f ? 1 : 0
                }) : o.sort(function (n, t) {
                    for (var u, o, f, c = i.length, l = e[n]._aSortData, a = e[t]._aSortData, s = 0; s < c; s++)
                        if (f = i[s],
                            u = l[f.col],
                            o = a[f.col],
                            f = h[f.type + "-" + f.dir] || h["string-" + f.dir],
                            u = f(u, o),
                            0 !== u)
                            return u;
                    return u = r[n],
                        o = r[t],
                        u < o ? -1 : u > o ? 1 : 0
                })
            }
            n.bSorted = !0
        }
        function gf(n) {
            for (var u, f, e, t, o = n.aoColumns, i = st(n), n = n.oLanguage.oAria, r = 0, s = o.length; r < s; r++)
                t = o[r],
                    u = t.asSorting,
                    e = t.sTitle.replace(/<.*?>/g, ""),
                    f = t.nTh,
                    f.removeAttribute("aria-sort"),
                    t.bSortable && (0 < i.length && i[0].col == r ? (f.setAttribute("aria-sort", "asc" == i[0].dir ? "ascending" : "descending"),
                        t = u[i[0].index + 1] || u[0]) : t = u[0],
                        e += "asc" === t ? n.sSortAscending : n.sSortDescending),
                    f.setAttribute("aria-label", e)
        }
        function vr(t, i, u, f) {
            var e = t.aaSorting
                , o = t.aoColumns[i].asSorting
                , s = function (t, i) {
                    var u = t._idx;
                    return u === r && (u = n.inArray(t[1], o)),
                        u + 1 < o.length ? u + 1 : i ? null : 0
                };
            "number" == typeof e[0] && (e = t.aaSorting = [e]);
            u && t.oFeatures.bSortMulti ? (u = n.inArray(i, b(e, "0")),
                -1 !== u ? (i = s(e[u], !0),
                    null === i && 1 === e.length && (i = 0),
                    null === i ? e.splice(u, 1) : (e[u][1] = o[i],
                        e[u]._idx = i)) : (e.push([i, o[0], 0]),
                            e[e.length - 1]._idx = 0)) : e.length && e[0][0] == i ? (i = s(e[0]),
                                e.length = 1,
                                e[0][1] = o[i],
                                e[0]._idx = i) : (e.length = 0,
                                    e.push([i, o[0]]),
                                    e[0]._idx = 0);
            et(t);
            "function" == typeof f && f(t)
        }
        function yr(n, t, i, r) {
            var u = n.aoColumns[i];
            wr(t, {}, function (t) {
                !1 !== u.bSortable && (n.oFeatures.bProcessing ? (w(n, !0),
                    setTimeout(function () {
                        vr(n, i, t.shiftKey, r);
                        "ssp" !== v(n) && w(n, !1)
                    }, 0)) : vr(n, i, t.shiftKey, r))
            })
        }
        function vi(t) {
            var e = t.aLastSort, o = t.oClasses.sSortColumn, f = st(t), i = t.oFeatures, r, u;
            if (i.bSort && i.bSortClasses) {
                for (i = 0,
                    r = e.length; i < r; i++)
                    u = e[i].src,
                        n(b(t.aoData, "anCells", u)).removeClass(o + (2 > i ? i + 1 : 3));
                for (i = 0,
                    r = f.length; i < r; i++)
                    u = f[i].src,
                        n(b(t.aoData, "anCells", u)).addClass(o + (2 > i ? i + 1 : 3))
            }
            t.aLastSort = f
        }
        function ne(n, t) {
            var i = n.aoColumns[t], f = u.ext.order[i.sSortDataType], o;
            f && (o = f.call(n.oInstance, n, t, yt(n, t)));
            for (var e, s = u.ext.type.order[i.sType + "-pre"], r = 0, h = n.aoData.length; r < h; r++)
                (i = n.aoData[r],
                    i._aSortData || (i._aSortData = []),
                    !i._aSortData[t] || f) && (e = f ? o[r] : y(n, r, t, "sort"),
                        i._aSortData[t] = s ? s(e) : e)
        }
        function yi(t) {
            if (t.oFeatures.bStateSave && !t.bDestroying) {
                var i = {
                    time: +new Date,
                    start: t._iDisplayStart,
                    length: t._iDisplayLength,
                    order: n.extend(!0, [], t.aaSorting),
                    search: of(t.oPreviousSearch),
                    columns: n.map(t.aoColumns, function (n, i) {
                        return {
                            visible: n.bVisible,
                            search: of(t.aoPreSearchCols[i])
                        }
                    })
                };
                o(t, "aoStateSaveParams", "stateSaveParams", [t, i]);
                t.oSavedState = i;
                t.fnStateSaveCallback.call(t.oInstance, t, i)
            }
        }
        function te(t, i, u) {
            var f, h, e = t.aoColumns, i = function (i) {
                if (i && i.time) {
                    var s = o(t, "aoStateLoadParams", "stateLoadParams", [t, i]);
                    if (-1 === n.inArray(!1, s) && (s = t.iStateDuration,
                        !(0 < s && i.time < +new Date - 1e3 * s) && !(i.columns && e.length !== i.columns.length))) {
                        if (t.oLoadedState = n.extend(!0, {}, i),
                            i.start !== r && (t._iDisplayStart = i.start,
                                t.iInitDisplayStart = i.start),
                            i.length !== r && (t._iDisplayLength = i.length),
                            i.order !== r && (t.aaSorting = [],
                                n.each(i.order, function (n, i) {
                                    t.aaSorting.push(i[0] >= e.length ? [0, i[1]] : i)
                                })),
                            i.search !== r && n.extend(t.oPreviousSearch, sf(i.search)),
                            i.columns)
                            for (f = 0,
                                h = i.columns.length; f < h; f++)
                                s = i.columns[f],
                                    s.visible !== r && (e[f].bVisible = s.visible),
                                    s.search !== r && n.extend(t.aoPreSearchCols[f], sf(s.search));
                        o(t, "aoStateLoaded", "stateLoaded", [t, i])
                    }
                }
                u()
            }, s;
            t.oFeatures.bStateSave ? (s = t.fnStateLoadCallback.call(t.oInstance, t, i),
                s !== r && i(s)) : u()
        }
        function pi(t) {
            var i = u.settings
                , t = n.inArray(t, b(i, "nTable"));
            return -1 !== t ? i[t] : null
        }
        function nt(n, i, r, f) {
            if (r = "DataTables warning: " + (n ? "table id=" + n.sTableId + " - " : "") + r,
                f && (r += ". For more information about this error, please see http://datatables.net/tn/" + f),
                i)
                t.console && console.log && console.log(r);
            else if (i = u.ext,
                i = i.sErrMode || i.errMode,
                n && o(n, null, "error", [n, f, r]),
                "alert" == i)
                alert(r);
            else {
                if ("throw" == i)
                    throw Error(r);
                "function" == typeof i && i(n, f, r)
            }
        }
        function k(t, i, u, f) {
            n.isArray(u) ? n.each(u, function (r, u) {
                n.isArray(u) ? k(t, i, u[0], u[1]) : k(t, i, u)
            }) : (f === r && (f = u),
                i[u] !== r && (t[f] = i[u]))
        }
        function pr(t, i, r) {
            var f;
            for (var u in i)
                i.hasOwnProperty(u) && (f = i[u],
                    n.isPlainObject(f) ? (n.isPlainObject(t[u]) || (t[u] = {}),
                        n.extend(!0, t[u], f)) : t[u] = r && "data" !== u && "aaData" !== u && n.isArray(f) ? f.slice() : f);
            return t
        }
        function wr(t, i, r) {
            n(t).on("click.DT", i, function (i) {
                n(t).blur();
                r(i)
            }).on("keypress.DT", i, function (n) {
                13 === n.which && (n.preventDefault(),
                    r(n))
            }).on("selectstart.DT", function () {
                return !1
            })
        }
        function a(n, t, i, r) {
            i && n[t].push({
                fn: i,
                sName: r
            })
        }
        function o(t, i, r, u) {
            var f = [];
            return i && (f = n.map(t[i].slice().reverse(), function (n) {
                return n.fn.apply(t.oInstance, u)
            })),
                null !== r && (i = n.Event(r + ".dt"),
                    n(t.nTable).trigger(i, u),
                    f.push(i.result)),
                f
        }
        function br(n) {
            var t = n._iDisplayStart
                , r = n.fnDisplayEnd()
                , i = n._iDisplayLength;
            t >= r && (t = r - i);
            t -= t % i;
            (-1 === i || 0 > t) && (t = 0);
            n._iDisplayStart = t
        }
        function kr(t, i) {
            var r = t.renderer
                , f = u.ext.renderer[i];
            return n.isPlainObject(r) && r[i] ? f[r[i]] || f._ : "string" == typeof r ? f[r] || f._ : f._
        }
        function v(n) {
            return n.oFeatures.bServerSide ? "ssp" : n.ajax || n.sAjaxSource ? "ajax" : "dom"
        }
        function gt(n, t) {
            var i = []
                , i = cu.numbers_length
                , r = Math.floor(i / 2);
            return t <= i ? i = ht(0, t) : n <= r ? (i = ht(0, i - 2),
                i.push("ellipsis"),
                i.push(t - 1)) : (n >= t - 1 - r ? i = ht(t - (i - 2), t) : (i = ht(n - r + 2, n + r - 1),
                    i.push("ellipsis"),
                    i.push(t - 1)),
                    i.splice(0, 0, "ellipsis"),
                    i.splice(0, 0, 0)),
                i.DT_el = "span",
                i
        }
        function dr(t) {
            n.each({
                num: function (n) {
                    return ii(n, t)
                },
                "num-fmt": function (n) {
                    return ii(n, t, nu)
                },
                "html-num": function (n) {
                    return ii(n, t, wi)
                },
                "html-num-fmt": function (n) {
                    return ii(n, t, wi, nu)
                }
            }, function (n, i) {
                c.type.order[n + t + "-pre"] = i;
                n.match(/^html\-/) && (c.type.search[n + t] = c.type.search.html)
            })
        }
        function ie(n) {
            return function () {
                var t = [pi(this[u.ext.iApiIndex])].concat(Array.prototype.slice.call(arguments));
                return u.ext.internal[n].apply(this, t)
            }
        }
        var u = function (t) {
            var f;
            this.$ = function (n, t) {
                return this.api(!0).$(n, t)
            }
                ;
            this._ = function (n, t) {
                return this.api(!0).rows(n, t).data()
            }
                ;
            this.api = function (n) {
                return n ? new e(pi(this[c.iApiIndex])) : new e(this)
            }
                ;
            this.fnAddData = function (t, i) {
                var u = this.api(!0)
                    , f = n.isArray(t) && (n.isArray(t[0]) || n.isPlainObject(t[0])) ? u.rows.add(t) : u.row.add(t);
                return (i === r || i) && u.draw(),
                    f.flatten().toArray()
            }
                ;
            this.fnAdjustColumnSizing = function (n) {
                var t = this.api(!0).columns.adjust()
                    , i = t.settings()[0]
                    , u = i.oScroll;
                n === r || n ? t.draw(!1) : ("" !== u.sX || "" !== u.sY) && ai(i)
            }
                ;
            this.fnClearTable = function (n) {
                var t = this.api(!0).clear();
                (n === r || n) && t.draw()
            }
                ;
            this.fnClose = function (n) {
                this.api(!0).row(n).child.hide()
            }
                ;
            this.fnDeleteRow = function (n, t, i) {
                var u = this.api(!0)
                    , n = u.rows(n)
                    , f = n.settings()[0]
                    , e = f.aoData[n[0][0]];
                return n.remove(),
                    t && t.call(this, f, e),
                    (i === r || i) && u.draw(),
                    e
            }
                ;
            this.fnDestroy = function (n) {
                this.api(!0).destroy(n)
            }
                ;
            this.fnDraw = function (n) {
                this.api(!0).draw(n)
            }
                ;
            this.fnFilter = function (n, t, i, u, f, e) {
                f = this.api(!0);
                null === t || t === r ? f.search(n, i, u, e) : f.column(t).search(n, i, u, e);
                f.draw()
            }
                ;
            this.fnGetData = function (n, t) {
                var i = this.api(!0), u;
                return n !== r ? (u = n.nodeName ? n.nodeName.toLowerCase() : "",
                    t !== r || "td" == u || "th" == u ? i.cell(n, t).data() : i.row(n).data() || null) : i.data().toArray()
            }
                ;
            this.fnGetNodes = function (n) {
                var t = this.api(!0);
                return n !== r ? t.row(n).node() : t.rows().nodes().flatten().toArray()
            }
                ;
            this.fnGetPosition = function (n) {
                var i = this.api(!0)
                    , t = n.nodeName.toUpperCase();
                return "TR" == t ? i.row(n).index() : "TD" == t || "TH" == t ? (n = i.cell(n).index(),
                    [n.row, n.columnVisible, n.column]) : null
            }
                ;
            this.fnIsOpen = function (n) {
                return this.api(!0).row(n).child.isShown()
            }
                ;
            this.fnOpen = function (n, t, i) {
                return this.api(!0).row(n).child(t, i).show().child()[0]
            }
                ;
            this.fnPageChange = function (n, t) {
                var i = this.api(!0).page(n);
                (t === r || t) && i.draw(!1)
            }
                ;
            this.fnSetColumnVis = function (n, t, i) {
                n = this.api(!0).column(n).visible(t);
                (i === r || i) && n.columns.adjust().draw()
            }
                ;
            this.fnSettings = function () {
                return pi(this[c.iApiIndex])
            }
                ;
            this.fnSort = function (n) {
                this.api(!0).order(n).draw()
            }
                ;
            this.fnSortListener = function (n, t, i) {
                this.api(!0).order.listener(n, t, i)
            }
                ;
            this.fnUpdate = function (n, t, i, u, f) {
                var e = this.api(!0);
                return i === r || null === i ? e.row(t).data(n) : e.cell(t, i).data(n),
                    (f === r || f) && e.columns.adjust(),
                    (u === r || u) && e.draw(),
                    0
            }
                ;
            this.fnVersionCheck = c.fnVersionCheck;
            var i = this
                , s = t === r
                , h = this.length;
            s && (t = {});
            this.oApi = this.internal = c.internal;
            for (f in u.ext.internal)
                f && (this[f] = ie(f));
            return this.each(function () {
                var c = {}, e = 1 < h ? pr(c, t, !0) : t, l = 0, d, c = this.getAttribute("id"), ht = !1, w = u.defaults, y = n(this), p, b, ct, f, tt, rt, et, ut, ot;
                if ("table" != this.nodeName.toLowerCase())
                    nt(null, 0, "Non-table node initialisation (" + this.nodeName + ")", 2);
                else {
                    for (lu(w),
                        au(w.column),
                        g(w, w, !0),
                        g(w.column, w.column, !0),
                        g(w, n.extend(e, y.data())),
                        p = u.settings,
                        l = 0,
                        d = p.length; l < d; l++) {
                        if (b = p[l],
                            b.nTable == this || b.nTHead && b.nTHead.parentNode == this || b.nTFoot && b.nTFoot.parentNode == this) {
                            if (ct = e.bRetrieve !== r ? e.bRetrieve : w.bRetrieve,
                                s || ct)
                                return b.oInstance;
                            if (e.bDestroy !== r ? e.bDestroy : w.bDestroy) {
                                b.oInstance.fnDestroy();
                                break
                            } else {
                                nt(b, 0, "Cannot reinitialise DataTable", 3);
                                return
                            }
                        }
                        if (b.sTableId == this.id) {
                            p.splice(l, 1);
                            break
                        }
                    }
                    if ((null === c || "" === c) && (this.id = c = "DataTables_Table_" + u.ext._unique++),
                        f = n.extend(!0, {}, u.models.oSettings, {
                            sDestroyWidth: y[0].style.width,
                            sInstance: c,
                            sTableId: c
                        }),
                        f.nTable = this,
                        f.oApi = i.internal,
                        f.oInit = e,
                        p.push(f),
                        f.oInstance = 1 === i.length ? i : y.dataTable(),
                        lu(e),
                        tr(e.oLanguage),
                        e.aLengthMenu && !e.iDisplayLength && (e.iDisplayLength = n.isArray(e.aLengthMenu[0]) ? e.aLengthMenu[0][0] : e.aLengthMenu[0]),
                        e = pr(n.extend(!0, {}, w), e),
                        k(f.oFeatures, e, "bPaginate bLengthChange bFilter bSort bSortMulti bInfo bProcessing bAutoWidth bSortClasses bServerSide bDeferRender".split(" ")),
                        k(f, e, ["asStripeClasses", "ajax", "fnServerData", "fnFormatNumber", "sServerMethod", "aaSorting", "aaSortingFixed", "aLengthMenu", "sPaginationType", "sAjaxSource", "sAjaxDataProp", "iStateDuration", "sDom", "bSortCellsTop", "iTabIndex", "fnStateLoadCallback", "fnStateSaveCallback", "renderer", "searchDelay", "rowId", ["iCookieDuration", "iStateDuration"], ["oSearch", "oPreviousSearch"], ["aoSearchCols", "aoPreSearchCols"], ["iDisplayLength", "_iDisplayLength"]]),
                        k(f.oScroll, e, [["sScrollX", "sX"], ["sScrollXInner", "sXInner"], ["sScrollY", "sY"], ["bScrollCollapse", "bCollapse"]]),
                        k(f.oLanguage, e, "fnInfoCallback"),
                        a(f, "aoDrawCallback", e.fnDrawCallback, "user"),
                        a(f, "aoServerParams", e.fnServerParams, "user"),
                        a(f, "aoStateSaveParams", e.fnStateSaveParams, "user"),
                        a(f, "aoStateLoadParams", e.fnStateLoadParams, "user"),
                        a(f, "aoStateLoaded", e.fnStateLoaded, "user"),
                        a(f, "aoRowCallback", e.fnRowCallback, "user"),
                        a(f, "aoRowCreatedCallback", e.fnCreatedRow, "user"),
                        a(f, "aoHeaderCallback", e.fnHeaderCallback, "user"),
                        a(f, "aoFooterCallback", e.fnFooterCallback, "user"),
                        a(f, "aoInitComplete", e.fnInitComplete, "user"),
                        a(f, "aoPreDrawCallback", e.fnPreDrawCallback, "user"),
                        f.rowIdFn = ft(e.rowId),
                        vu(f),
                        tt = f.oClasses,
                        n.extend(tt, u.ext.classes, e.oClasses),
                        y.addClass(tt.sTable),
                        f.iInitDisplayStart === r && (f.iInitDisplayStart = e.iDisplayStart,
                            f._iDisplayStart = e.iDisplayStart),
                        null !== e.iDeferLoading && (f.bDeferLoading = !0,
                            c = n.isArray(e.iDeferLoading),
                            f._iRecordsDisplay = c ? e.iDeferLoading[0] : e.iDeferLoading,
                            f._iRecordsTotal = c ? e.iDeferLoading[1] : e.iDeferLoading),
                        rt = f.oLanguage,
                        n.extend(!0, rt, e.oLanguage),
                        rt.sUrl && (n.ajax({
                            dataType: "json",
                            url: rt.sUrl,
                            success: function (t) {
                                tr(t);
                                g(w.oLanguage, t);
                                n.extend(!0, rt, t);
                                dt(f)
                            },
                            error: function () {
                                dt(f)
                            }
                        }),
                            ht = !0),
                        null === e.asStripeClasses && (f.asStripeClasses = [tt.sStripeOdd, tt.sStripeEven]),
                        c = f.asStripeClasses,
                        et = y.children("tbody").find("tr").eq(0),
                        -1 !== n.inArray(!0, n.map(c, function (n) {
                            return et.hasClass(n)
                        })) && (n("tbody tr", this).removeClass(c.join(" ")),
                            f.asDestroyStripes = c.slice()),
                        c = [],
                        p = this.getElementsByTagName("thead"),
                        0 !== p.length && (bt(f.aoHeader, p[0]),
                            c = si(f)),
                        null === e.aoColumns)
                        for (p = [],
                            l = 0,
                            d = c.length; l < d; l++)
                            p.push(null);
                    else
                        p = e.aoColumns;
                    for (l = 0,
                        d = p.length; l < d; l++)
                        ir(f, c ? c[l] : null);
                    pu(f, e.aoColumnDefs, p, function (n, t) {
                        ri(f, n, t)
                    });
                    et.length && (ut = function (n, t) {
                        return n.getAttribute("data-" + t) !== null ? t : null
                    }
                        ,
                        n(et[0]).children("th, td").each(function (n, t) {
                            var e = f.aoColumns[n], i, u;
                            e.mData === n && (i = ut(t, "sort") || ut(t, "order"),
                                u = ut(t, "filter") || ut(t, "search"),
                                (i !== null || u !== null) && (e.mData = {
                                    _: n + ".display",
                                    sort: i !== null ? n + ".@data-" + i : r,
                                    type: i !== null ? n + ".@data-" + i : r,
                                    filter: u !== null ? n + ".@data-" + u : r
                                },
                                    ri(f, n)))
                        }));
                    ot = f.oFeatures;
                    c = function () {
                        var i, t;
                        if (e.aaSorting === r)
                            for (i = f.aaSorting,
                                l = 0,
                                d = i.length; l < d; l++)
                                i[l][1] = f.aoColumns[l].asSorting[0];
                        if (vi(f),
                            ot.bSort && a(f, "aoDrawCallback", function () {
                                if (f.bSorted) {
                                    var t = st(f)
                                        , i = {};
                                    n.each(t, function (n, t) {
                                        i[t.src] = t.dir
                                    });
                                    o(f, null, "order", [f, t, i]);
                                    gf(f)
                                }
                            }),
                            a(f, "aoDrawCallback", function () {
                                (f.bSorted || v(f) === "ssp" || ot.bDeferRender) && vi(f)
                            }, "sc"),
                            i = y.children("caption").each(function () {
                                this._captionSide = n(this).css("caption-side")
                            }),
                            t = y.children("thead"),
                            t.length === 0 && (t = n("<thead/>").appendTo(y)),
                            f.nTHead = t[0],
                            t = y.children("tbody"),
                            t.length === 0 && (t = n("<tbody/>").appendTo(y)),
                            f.nTBody = t[0],
                            t = y.children("tfoot"),
                            t.length === 0 && i.length > 0 && (f.oScroll.sX !== "" || f.oScroll.sY !== "") && (t = n("<tfoot/>").appendTo(y)),
                            t.length === 0 || t.children().length === 0 ? y.addClass(tt.sNoFooter) : t.length > 0 && (f.nTFoot = t[0],
                                bt(f.aoFooter, f.nTFoot)),
                            e.aaData)
                            for (l = 0; l < e.aaData.length; l++)
                                it(f, e.aaData[l]);
                        else
                            (f.bDeferLoading || v(f) == "dom") && fi(f, n(f.nTBody).children("tr"));
                        f.aiDisplay = f.aiDisplayMaster.slice();
                        f.bInitialised = !0;
                        ht === !1 && dt(f)
                    }
                        ;
                    e.bStateSave ? (ot.bStateSave = !0,
                        a(f, "aoDrawCallback", yi, "state_save"),
                        te(f, e, c)) : c()
                }
            }),
                i = null,
                this
        }, c, e, f, s, gr = {}, re = /[\r\n]/g, wi = /<.*?>/g, ce = /^\d{2,4}[\.\/\-]\d{1,2}[\.\/\-]\d{1,2}([T ]{1}\d{1,2}[:\.]\d{2}([\.:]\d{2})?)?$/, le = RegExp("(\\/|\\.|\\*|\\+|\\?|\\||\\(|\\)|\\[|\\]|\\{|\\}|\\\\|\\$|\\^|\\-)", "g"), nu = /[',$£€¥%\u2009\u202F\u20BD\u20a9\u20BArfkɃΞ]/gi, tt = function (n) {
            return !n || !0 === n || "-" === n ? !0 : !1
        }, ue = function (n) {
            var t = parseInt(n, 10);
            return !isNaN(t) && isFinite(n) ? t : null
        }, fe = function (n, t) {
            return gr[t] || (gr[t] = RegExp(iu(t), "g")),
                "string" == typeof n && "." !== t ? n.replace(/\./g, "").replace(gr[t], ".") : n
        }, tu = function (n, t, i) {
            var r = "string" == typeof n;
            return tt(n) ? !0 : (t && r && (n = fe(n, t)),
                i && r && (n = n.replace(nu, "")),
                !isNaN(parseFloat(n)) && isFinite(n))
        }, ee = function (n, t, i) {
            return tt(n) ? !0 : (tt(n) || "string" == typeof n) ? tu(n.replace(wi, ""), t, i) ? !0 : null : null
        }, b = function (n, t, i) {
            var f = []
                , u = 0
                , e = n.length;
            if (i !== r)
                for (; u < e; u++)
                    n[u] && n[u][t] && f.push(n[u][t][i]);
            else
                for (; u < e; u++)
                    n[u] && f.push(n[u][t]);
            return f
        }, ni = function (n, t, i, u) {
            var e = []
                , f = 0
                , o = t.length;
            if (u !== r)
                for (; f < o; f++)
                    n[t[f]][i] && e.push(n[t[f]][i][u]);
            else
                for (; f < o; f++)
                    e.push(n[t[f]][i]);
            return e
        }, ht = function (n, t) {
            var f = [], u, i;
            for (t === r ? (t = 0,
                u = n) : (u = t,
                    t = n),
                i = t; i < u; i++)
                f.push(i);
            return f
        }, oe = function (n) {
            for (var i = [], t = 0, r = n.length; t < r; t++)
                n[t] && i.push(n[t]);
            return i
        }, bi = function (n) {
            var t;
            n: {
                if (!(2 > n.length)) {
                    t = n.slice().sort();
                    for (var r = t[0], i = 1, f = t.length; i < f; i++) {
                        if (t[i] === r) {
                            t = !1;
                            break n
                        }
                        r = t[i]
                    }
                }
                t = !0
            }
            if (t)
                return n.slice();
            t = [];
            var f = n.length, u, e = 0, i = 0;
            n: for (; i < f; i++) {
                for (r = n[i],
                    u = 0; u < e; u++)
                    if (t[u] === r)
                        continue n;
                t.push(r);
                e++
            }
            return t
        }, uu, gi, su, he, hu, cu, ii, nr;
        u.util = {
            throttle: function (n, t) {
                var u = t !== r ? t : 200, i, f;
                return function () {
                    var t = this
                        , e = +new Date
                        , o = arguments;
                    i && e < i + u ? (clearTimeout(f),
                        f = setTimeout(function () {
                            i = r;
                            n.apply(t, o)
                        }, u)) : (i = e,
                            n.apply(t, o))
                }
            },
            escapeRegex: function (n) {
                return n.replace(le, "\\$1")
            }
        };
        var p = function (n, t, i) {
            n[t] !== r && (n[i] = n[t])
        }
            , ti = /\[.*?\]$/
            , ct = /\(\)$/
            , iu = u.util.escapeRegex
            , ki = n("<div>")[0]
            , ae = ki.textContent !== r
            , ve = /<.*?>/g
            , ru = u.util.throttle
            , se = []
            , l = Array.prototype
            , ye = function (t) {
                var i, r, f = u.settings, e = n.map(f, function (n) {
                    return n.nTable
                });
                if (t) {
                    if (t.nTable && t.oApi)
                        return [t];
                    if (t.nodeName && "table" === t.nodeName.toLowerCase())
                        return i = n.inArray(t, e),
                            -1 !== i ? [f[i]] : null;
                    if (t && "function" == typeof t.settings)
                        return t.settings().toArray();
                    "string" == typeof t ? r = n(t) : t instanceof n && (r = t)
                } else
                    return [];
                if (r)
                    return r.map(function () {
                        return i = n.inArray(this, e),
                            -1 !== i ? f[i] : null
                    }).toArray()
            };
        e = function (t, i) {
            var r, f, u, o;
            if (!(this instanceof e))
                return new e(t, i);
            if (r = [],
                f = function (n) {
                    (n = ye(n)) && (r = r.concat(n))
                }
                ,
                n.isArray(t))
                for (u = 0,
                    o = t.length; u < o; u++)
                    f(t[u]);
            else
                f(t);
            this.context = bi(r);
            i && n.merge(this, i);
            this.selector = {
                rows: null,
                cols: null,
                opts: null
            };
            e.extend(this, this, se)
        }
            ;
        u.Api = e;
        n.extend(e.prototype, {
            any: function () {
                return 0 !== this.count()
            },
            concat: l.concat,
            context: [],
            count: function () {
                return this.flatten().length
            },
            each: function (n) {
                for (var t = 0, i = this.length; t < i; t++)
                    n.call(this, this[t], t, this);
                return this
            },
            eq: function (n) {
                var t = this.context;
                return t.length > n ? new e(t[n], this[n]) : null
            },
            filter: function (n) {
                var i = [], t, r;
                if (l.filter)
                    i = l.filter.call(this, n, this);
                else
                    for (t = 0,
                        r = this.length; t < r; t++)
                        n.call(this, this[t], t, this) && i.push(this[t]);
                return new e(this.context, i)
            },
            flatten: function () {
                var n = [];
                return new e(this.context, n.concat.apply(n, this.toArray()))
            },
            join: l.join,
            indexOf: l.indexOf || function (n, t) {
                for (var i = t || 0, r = this.length; i < r; i++)
                    if (this[i] === n)
                        return i;
                return -1
            }
            ,
            iterator: function (n, t, i, u) {
                var h = [], o, f, y, c, p, s = this.context, w, v, a = this.selector, l;
                for ("string" == typeof n && (u = i,
                    i = t,
                    t = n,
                    n = !1),
                    f = 0,
                    y = s.length; f < y; f++)
                    if (l = new e(s[f]),
                        "table" === t)
                        o = i.call(l, s[f], f),
                            o !== r && h.push(o);
                    else if ("columns" === t || "rows" === t)
                        o = i.call(l, s[f], this[f], f),
                            o !== r && h.push(o);
                    else if ("column" === t || "column-rows" === t || "row" === t || "cell" === t)
                        for (v = this[f],
                            "column-rows" === t && (w = di(s[f], a.opts)),
                            c = 0,
                            p = v.length; c < p; c++)
                            o = v[c],
                                o = "cell" === t ? i.call(l, s[f], o.row, o.column, f, c) : i.call(l, s[f], o, f, c, w),
                                o !== r && h.push(o);
                return h.length || u ? (n = new e(s, n ? h.concat.apply([], h) : h),
                    t = n.selector,
                    t.rows = a.rows,
                    t.cols = a.cols,
                    t.opts = a.opts,
                    n) : this
            },
            lastIndexOf: l.lastIndexOf || function () {
                return this.indexOf.apply(this.toArray.reverse(), arguments)
            }
            ,
            length: 0,
            map: function (n) {
                var i = [], t, r;
                if (l.map)
                    i = l.map.call(this, n, this);
                else
                    for (t = 0,
                        r = this.length; t < r; t++)
                        i.push(n.call(this, this[t], t));
                return new e(this.context, i)
            },
            pluck: function (n) {
                return this.map(function (t) {
                    return t[n]
                })
            },
            pop: l.pop,
            push: l.push,
            reduce: l.reduce || function (n, t) {
                return yu(this, n, t, 0, this.length, 1)
            }
            ,
            reduceRight: l.reduceRight || function (n, t) {
                return yu(this, n, t, this.length - 1, -1, -1)
            }
            ,
            reverse: l.reverse,
            selector: null,
            shift: l.shift,
            slice: function () {
                return new e(this.context, this)
            },
            sort: l.sort,
            splice: l.splice,
            toArray: function () {
                return l.slice.call(this)
            },
            to$: function () {
                return n(this)
            },
            toJQuery: function () {
                return n(this)
            },
            unique: function () {
                return new e(this.context, bi(this))
            },
            unshift: l.unshift
        });
        e.extend = function (t, i, r) {
            if (r.length && i && (i instanceof e || i.__dt_wrapper))
                for (var u, s = function (n, t, i) {
                    return function () {
                        var r = t.apply(n, arguments);
                        return e.extend(r, r, i.methodExt),
                            r
                    }
                }, f = 0, o = r.length; f < o; f++)
                    u = r[f],
                        i[u.name] = "function" == typeof u.val ? s(t, u.val, u) : n.isPlainObject(u.val) ? {} : u.val,
                        i[u.name].__dt_wrapper = !0,
                        e.extend(t, i[u.name], u.propExt)
        }
            ;
        e.register = f = function (t, i) {
            var u, o, r, l;
            if (n.isArray(t))
                for (u = 0,
                    o = t.length; u < o; u++)
                    e.register(t[u], i);
            else
                for (var s = t.split("."), f = se, h, c, u = 0, o = s.length; u < o; u++) {
                    h = (c = -1 !== s[u].indexOf("()")) ? s[u].replace("()", "") : s[u];
                    n: {
                        for (r = 0,
                            l = f.length; r < l; r++)
                            if (f[r].name === h) {
                                r = f[r];
                                break n
                            }
                        r = null
                    }
                    r || (r = {
                        name: h,
                        val: {},
                        methodExt: [],
                        propExt: []
                    },
                        f.push(r));
                    u === o - 1 ? r.val = i : f = c ? r.methodExt : r.propExt
                }
        }
            ;
        e.registerPlural = s = function (t, i, u) {
            e.register(t, u);
            e.register(i, function () {
                var t = u.apply(this, arguments);
                return t === this ? this : t instanceof e ? t.length ? n.isArray(t[0]) ? new e(t.context, t[0]) : t[0] : r : t
            })
        }
            ;
        f("tables()", function (t) {
            var i, r, u, t;
            return t ? (i = e,
                r = this.context,
                "number" == typeof t ? t = [r[t]] : (u = n.map(r, function (n) {
                    return n.nTable
                }),
                    t = n(u).filter(t).map(function () {
                        var t = n.inArray(this, u);
                        return r[t]
                    }).toArray()),
                i = new i(t)) : i = this,
                i
        });
        f("table()", function (n) {
            var n = this.tables(n)
                , t = n.context;
            return t.length ? new e(t[0]) : n
        });
        s("tables().nodes()", "table().node()", function () {
            return this.iterator("table", function (n) {
                return n.nTable
            }, 1)
        });
        s("tables().body()", "table().body()", function () {
            return this.iterator("table", function (n) {
                return n.nTBody
            }, 1)
        });
        s("tables().header()", "table().header()", function () {
            return this.iterator("table", function (n) {
                return n.nTHead
            }, 1)
        });
        s("tables().footer()", "table().footer()", function () {
            return this.iterator("table", function (n) {
                return n.nTFoot
            }, 1)
        });
        s("tables().containers()", "table().container()", function () {
            return this.iterator("table", function (n) {
                return n.nTableWrapper
            }, 1)
        });
        f("draw()", function (n) {
            return this.iterator("table", function (t) {
                "page" === n ? ut(t) : ("string" == typeof n && (n = "full-hold" === n ? !1 : !0),
                    et(t, !1 === n))
            })
        });
        f("page()", function (n) {
            return n === r ? this.page.info().page : this.iterator("table", function (t) {
                lr(t, n)
            })
        });
        f("page.info()", function () {
            if (0 === this.context.length)
                return r;
            var n = this.context[0]
                , i = n._iDisplayStart
                , t = n.oFeatures.bPaginate ? n._iDisplayLength : -1
                , u = n.fnRecordsDisplay()
                , f = -1 === t;
            return {
                page: f ? 0 : Math.floor(i / t),
                pages: f ? 1 : Math.ceil(u / t),
                start: i,
                end: n.fnDisplayEnd(),
                length: t,
                recordsTotal: n.fnRecordsTotal(),
                recordsDisplay: u,
                serverSide: "ssp" === v(n)
            }
        });
        f("page.len()", function (n) {
            return n === r ? 0 !== this.context.length ? this.context[0]._iDisplayLength : r : this.iterator("table", function (t) {
                cr(t, n)
            })
        });
        uu = function (n, t, i) {
            var u, r;
            if (i) {
                u = new e(n);
                u.one("draw", function () {
                    i(u.ajax.json())
                })
            }
            "ssp" == v(n) ? et(n, t) : (w(n, !0),
                r = n.jqXHR,
                r && 4 !== r.readyState && r.abort(),
                hi(n, [], function (i) {
                    ei(n);
                    for (var i = ci(n, i), r = 0, u = i.length; r < u; r++)
                        it(n, i[r]);
                    et(n, t);
                    w(n, !1)
                }))
        }
            ;
        f("ajax.json()", function () {
            var n = this.context;
            if (0 < n.length)
                return n[0].json
        });
        f("ajax.params()", function () {
            var n = this.context;
            if (0 < n.length)
                return n[0].oAjaxData
        });
        f("ajax.reload()", function (n, t) {
            return this.iterator("table", function (i) {
                uu(i, !1 === t, n)
            })
        });
        f("ajax.url()", function (t) {
            var i = this.context;
            return t === r ? 0 === i.length ? r : (i = i[0],
                i.ajax ? n.isPlainObject(i.ajax) ? i.ajax.url : i.ajax : i.sAjaxSource) : this.iterator("table", function (i) {
                    n.isPlainObject(i.ajax) ? i.ajax.url = t : i.ajax = t
                })
        });
        f("ajax.url().load()", function (n, t) {
            return this.iterator("table", function (i) {
                uu(i, !1 === t, n)
            })
        });
        var fu = function (t, i, u, f, e) {
            var h = [], v, l, o, a, s, y;
            for (o = typeof i,
                i && "string" !== o && "function" !== o && i.length !== r || (i = [i]),
                o = 0,
                a = i.length; o < a; o++)
                for (l = i[o] && i[o].split && !i[o].match(/[\[\(:]/) ? i[o].split(",") : [i[o]],
                    s = 0,
                    y = l.length; s < y; s++)
                    (v = u("string" == typeof l[s] ? n.trim(l[s]) : l[s])) && v.length && (h = h.concat(v));
            if (t = c.selector[t],
                t.length)
                for (o = 0,
                    a = t.length; o < a; o++)
                    h = t[o](f, e, h);
            return bi(h)
        }
            , eu = function (t) {
                return t || (t = {}),
                    t.filter && t.search === r && (t.search = t.filter),
                    n.extend({
                        search: "none",
                        order: "current",
                        page: "all"
                    }, t)
            }
            , ou = function (n) {
                for (var t = 0, i = n.length; t < i; t++)
                    if (0 < n[t].length)
                        return n[0] = n[t],
                            n[0].length = 1,
                            n.length = 1,
                            n.context = [n.context[t]],
                            n;
                return n.length = 0,
                    n
            }
            , di = function (t, i) {
                var r, u, e, o = [], s = t.aiDisplay, f, h;
                if (e = t.aiDisplayMaster,
                    f = i.search,
                    r = i.order,
                    u = i.page,
                    "ssp" == v(t))
                    return "removed" === f ? [] : ht(0, e.length);
                if ("current" == u)
                    for (r = t._iDisplayStart,
                        u = t.fnDisplayEnd(); r < u; r++)
                        o.push(s[r]);
                else if ("current" == r || "applied" == r) {
                    if ("none" == f)
                        o = e.slice();
                    else if ("applied" == f)
                        o = s.slice();
                    else if ("removed" == f) {
                        for (h = {},
                            r = 0,
                            u = s.length; r < u; r++)
                            h[s[r]] = null;
                        o = n.map(e, function (n) {
                            return h.hasOwnProperty(n) ? null : n
                        })
                    }
                } else if ("index" == r || "original" == r)
                    for (r = 0,
                        u = t.aoData.length; r < u; r++)
                        "none" == f ? o.push(r) : (e = n.inArray(r, s),
                            (-1 === e && "removed" == f || 0 <= e && "applied" == f) && o.push(r));
                return o
            };
        return f("rows()", function (t, i) {
            t === r ? t = "" : n.isPlainObject(t) && (i = t,
                t = "");
            var i = eu(i)
                , u = this.iterator("table", function (u) {
                    var e = i, f;
                    return fu("row", t, function (t) {
                        var i = ue(t), o = u.aoData, s;
                        return i !== null && !e ? [i] : (f || (f = di(u, e)),
                            i !== null && n.inArray(i, f) !== -1) ? [i] : t === null || t === r || t === "" ? f : typeof t == "function" ? n.map(f, function (n) {
                                var i = o[n];
                                return t(n, i._aData, i.nTr) ? n : null
                            }) : t.nodeName ? (i = t._DT_RowIndex,
                                s = t._DT_CellIndex,
                                i !== r) ? o[i] && o[i].nTr === t ? [i] : [] : s ? o[s.row] && o[s.row].nTr === t ? [s.row] : [] : (i = n(t).closest("*[data-dt-row]"),
                                    i.length ? [i.data("dt-row")] : []) : typeof t == "string" && t.charAt(0) === "#" && (i = u.aIds[t.replace(/^#/, "")],
                                        i !== r) ? [i.idx] : (i = oe(ni(u.aoData, f, "nTr")),
                                            n(i).filter(t).map(function () {
                                                return this._DT_RowIndex
                                            }).toArray())
                    }, u, e)
                }, 1);
            return u.selector.rows = t,
                u.selector.opts = i,
                u
        }),
            f("rows().nodes()", function () {
                return this.iterator("row", function (n, t) {
                    return n.aoData[t].nTr || r
                }, 1)
            }),
            f("rows().data()", function () {
                return this.iterator(!0, "rows", function (n, t) {
                    return ni(n.aoData, t, "_aData")
                }, 1)
            }),
            s("rows().cache()", "row().cache()", function (n) {
                return this.iterator("row", function (t, i) {
                    var r = t.aoData[i];
                    return "search" === n ? r._aFilterData : r._aSortData
                }, 1)
            }),
            s("rows().invalidate()", "row().invalidate()", function (n) {
                return this.iterator("row", function (t, i) {
                    pt(t, i, n)
                })
            }),
            s("rows().indexes()", "row().index()", function () {
                return this.iterator("row", function (n, t) {
                    return t
                }, 1)
            }),
            s("rows().ids()", "row().id()", function (n) {
                for (var r, f, o, u = [], i = this.context, t = 0, s = i.length; t < s; t++)
                    for (r = 0,
                        f = this[t].length; r < f; r++)
                        o = i[t].rowIdFn(i[t].aoData[this[t][r]]._aData),
                            u.push((!0 === n ? "#" : "") + o);
                return new e(i, u)
            }),
            s("rows().remove()", "row().remove()", function () {
                var n = this;
                return this.iterator("row", function (t, i, u) {
                    var o = t.aoData, l = o[i], e, h, f, c, s;
                    for (o.splice(i, 1),
                        e = 0,
                        h = o.length; e < h; e++)
                        if (f = o[e],
                            s = f.anCells,
                            null !== f.nTr && (f.nTr._DT_RowIndex = e),
                            null !== s)
                            for (f = 0,
                                c = s.length; f < c; f++)
                                s[f]._DT_CellIndex.row = e;
                    oi(t.aiDisplayMaster, i);
                    oi(t.aiDisplay, i);
                    oi(n[u], i, !1);
                    0 < t._iRecordsDisplay && t._iRecordsDisplay--;
                    br(t);
                    i = t.rowIdFn(l._aData);
                    i !== r && delete t.aIds[i]
                }),
                    this.iterator("table", function (n) {
                        for (var t = 0, i = n.aoData.length; t < i; t++)
                            n.aoData[t].idx = t
                    }),
                    this
            }),
            f("rows.add()", function (t) {
                var r = this.iterator("table", function (n) {
                    for (var i, u = [], r = 0, f = t.length; r < f; r++)
                        i = t[r],
                            i.nodeName && "TR" === i.nodeName.toUpperCase() ? u.push(fi(n, i)[0]) : u.push(it(n, i));
                    return u
                }, 1)
                    , i = this.rows(-1);
                return i.pop(),
                    n.merge(i, r),
                    i
            }),
            f("row()", function (n, t) {
                return ou(this.rows(n, t))
            }),
            f("row().data()", function (t) {
                var i = this.context, u;
                return t === r ? i.length && this.length ? i[0].aoData[this[0]]._aData : r : (u = i[0].aoData[this[0]],
                    u._aData = t,
                    n.isArray(t) && u.nTr.id && rt(i[0].rowId)(t, u.nTr.id),
                    pt(i[0], this[0], "data"),
                    this)
            }),
            f("row().node()", function () {
                var n = this.context;
                return n.length && this.length ? n[0].aoData[this[0]].nTr || null : null
            }),
            f("row.add()", function (t) {
                t instanceof n && t.length && (t = t[0]);
                var i = this.iterator("table", function (n) {
                    return t.nodeName && "TR" === t.nodeName.toUpperCase() ? fi(n, t)[0] : it(n, t)
                });
                return this.row(i[0])
            }),
            gi = function (n, t) {
                var i = n.context;
                i.length && (i = i[0].aoData[t !== r ? t : n[0]]) && i._details && (i._details.remove(),
                    i._detailsShow = r,
                    i._details = r)
            }
            ,
            su = function (n, t) {
                var o = n.context, i;
                if (o.length && n.length && (i = o[0].aoData[n[0]],
                    i._details)) {
                    (i._detailsShow = t) ? i._details.insertAfter(i.nTr) : i._details.detach();
                    var f = o[0]
                        , r = new e(f)
                        , u = f.aoData;
                    r.off("draw.dt.DT_details column-visibility.dt.DT_details destroy.dt.DT_details");
                    0 < b(u, "_details").length && (r.on("draw.dt.DT_details", function (n, t) {
                        f === t && r.rows({
                            page: "current"
                        }).eq(0).each(function (n) {
                            n = u[n];
                            n._detailsShow && n._details.insertAfter(n.nTr)
                        })
                    }),
                        r.on("column-visibility.dt.DT_details", function (n, t) {
                            if (f === t)
                                for (var i, e = ot(t), r = 0, o = u.length; r < o; r++)
                                    i = u[r],
                                        i._details && i._details.children("td[colspan]").attr("colspan", e)
                        }),
                        r.on("destroy.dt.DT_details", function (n, t) {
                            if (f === t)
                                for (var i = 0, e = u.length; i < e; i++)
                                    u[i]._details && gi(r, i)
                        }))
                }
            }
            ,
            f("row().child()", function (t, i) {
                var u = this.context;
                if (t === r)
                    return u.length && this.length ? u[0].aoData[this[0]]._details : r;
                if (!0 === t)
                    this.child.show();
                else if (!1 === t)
                    gi(this);
                else if (u.length && this.length) {
                    var o = u[0]
                        , u = u[0].aoData[this[0]]
                        , f = []
                        , e = function (t, i) {
                            if (n.isArray(t) || t instanceof n)
                                for (var r = 0, u = t.length; r < u; r++)
                                    e(t[r], i);
                            else
                                t.nodeName && "tr" === t.nodeName.toLowerCase() ? f.push(t) : (r = n("<tr><td/><\/tr>").addClass(i),
                                    n("td", r).addClass(i).html(t)[0].colSpan = ot(o),
                                    f.push(r[0]))
                        };
                    e(t, i);
                    u._details && u._details.detach();
                    u._details = n(f);
                    u._detailsShow && u._details.insertAfter(u.nTr)
                }
                return this
            }),
            f(["row().child.show()", "row().child().show()"], function () {
                return su(this, !0),
                    this
            }),
            f(["row().child.hide()", "row().child().hide()"], function () {
                return su(this, !1),
                    this
            }),
            f(["row().child.remove()", "row().child().remove()"], function () {
                return gi(this),
                    this
            }),
            f("row().child.isShown()", function () {
                var n = this.context;
                return n.length && this.length ? n[0].aoData[this[0]]._detailsShow || !1 : !1
            }),
            he = /^([^:]+):(name|visIdx|visible)$/,
            hu = function (n, t, i, r, u) {
                for (var i = [], r = 0, f = u.length; r < f; r++)
                    i.push(y(n, u[r], t));
                return i
            }
            ,
            f("columns()", function (t, i) {
                t === r ? t = "" : n.isPlainObject(t) && (i = t,
                    t = "");
                var i = eu(i)
                    , u = this.iterator("table", function (r) {
                        var o = t
                            , e = i
                            , u = r.aoColumns
                            , s = b(u, "sName")
                            , f = b(u, "nTh");
                        return fu("column", o, function (t) {
                            var i = ue(t), c, o, h;
                            if (t === "")
                                return ht(u.length);
                            if (i !== null)
                                return [i >= 0 ? i : u.length + i];
                            if (typeof t == "function")
                                return c = di(r, e),
                                    n.map(u, function (n, i) {
                                        return t(i, hu(r, i, 0, 0, c), f[i]) ? i : null
                                    });
                            if (o = typeof t == "string" ? t.match(he) : "",
                                o)
                                switch (o[2]) {
                                    case "visIdx":
                                    case "visible":
                                        return (i = parseInt(o[1], 10),
                                            i < 0) ? (h = n.map(u, function (n, t) {
                                                return n.bVisible ? t : null
                                            }),
                                                [h[h.length + i]]) : [vt(r, i)];
                                    case "name":
                                        return n.map(s, function (n, t) {
                                            return n === o[1] ? t : null
                                        });
                                    default:
                                        return []
                                }
                            return t.nodeName && t._DT_CellIndex ? [t._DT_CellIndex.column] : (i = n(f).filter(t).map(function () {
                                return n.inArray(this, f)
                            }).toArray(),
                                i.length || !t.nodeName) ? i : (i = n(t).closest("*[data-dt-column]"),
                                    i.length ? [i.data("dt-column")] : [])
                        }, r, e)
                    }, 1);
                return u.selector.cols = t,
                    u.selector.opts = i,
                    u
            }),
            s("columns().header()", "column().header()", function () {
                return this.iterator("column", function (n, t) {
                    return n.aoColumns[t].nTh
                }, 1)
            }),
            s("columns().footer()", "column().footer()", function () {
                return this.iterator("column", function (n, t) {
                    return n.aoColumns[t].nTf
                }, 1)
            }),
            s("columns().data()", "column().data()", function () {
                return this.iterator("column-rows", hu, 1)
            }),
            s("columns().dataSrc()", "column().dataSrc()", function () {
                return this.iterator("column", function (n, t) {
                    return n.aoColumns[t].mData
                }, 1)
            }),
            s("columns().cache()", "column().cache()", function (n) {
                return this.iterator("column-rows", function (t, i, r, u, f) {
                    return ni(t.aoData, f, "search" === n ? "_aFilterData" : "_aSortData", i)
                }, 1)
            }),
            s("columns().nodes()", "column().nodes()", function () {
                return this.iterator("column-rows", function (n, t, i, r, u) {
                    return ni(n.aoData, u, "anCells", t)
                }, 1)
            }),
            s("columns().visible()", "column().visible()", function (t, i) {
                var u = this.iterator("column", function (i, u) {
                    var l;
                    if (t === r)
                        return i.aoColumns[u].bVisible;
                    var f = i.aoColumns, h = f[u], o = i.aoData, e, c, s;
                    if (t !== r && h.bVisible !== t) {
                        if (t)
                            for (l = n.inArray(!0, b(f, "bVisible"), u + 1),
                                e = 0,
                                c = o.length; e < c; e++)
                                s = o[e].nTr,
                                    f = o[e].anCells,
                                    s && s.insertBefore(f[u], f[l] || null);
                        else
                            n(b(i.aoData, "anCells", u)).detach();
                        h.bVisible = t;
                        wt(i, i.aoHeader);
                        wt(i, i.aoFooter);
                        i.aiDisplay.length || n(i.nTBody).find("td[colspan]").attr("colspan", ot(i));
                        yi(i)
                    }
                });
                return t !== r && (this.iterator("column", function (n, r) {
                    o(n, null, "column-visibility", [n, r, t, i])
                }),
                    (i === r || i) && this.columns.adjust()),
                    u
            }),
            s("columns().indexes()", "column().index()", function (n) {
                return this.iterator("column", function (t, i) {
                    return "visible" === n ? yt(t, i) : i
                }, 1)
            }),
            f("columns.adjust()", function () {
                return this.iterator("table", function (n) {
                    at(n)
                }, 1)
            }),
            f("column.index()", function (n, t) {
                if (0 !== this.context.length) {
                    var i = this.context[0];
                    if ("fromVisible" === n || "toData" === n)
                        return vt(i, t);
                    if ("fromData" === n || "toVisible" === n)
                        return yt(i, t)
                }
            }),
            f("column()", function (n, t) {
                return ou(this.columns(n, t))
            }),
            f("cells()", function (t, i, u) {
                var o, s, h, f, l, e, a, c;
                return (n.isPlainObject(t) && (t.row === r ? (u = t,
                    t = null) : (u = i,
                        i = null)),
                    n.isPlainObject(i) && (u = i,
                        i = null),
                    null === i || i === r) ? this.iterator("table", function (i) {
                        var w = t, a = eu(u), v = i.aoData, o = di(i, a), b = oe(ni(v, o, "anCells")), k = n([].concat.apply([], b)), s, d = i.aoColumns.length, h, c, p, e, l, f;
                        return fu("cell", w, function (t) {
                            var u = typeof t == "function";
                            if (t === null || t === r || u) {
                                for (h = [],
                                    c = 0,
                                    p = o.length; c < p; c++)
                                    for (s = o[c],
                                        e = 0; e < d; e++)
                                        l = {
                                            row: s,
                                            column: e
                                        },
                                            u ? (f = v[s],
                                                t(l, y(i, s, e), f.anCells ? f.anCells[e] : null) && h.push(l)) : h.push(l);
                                return h
                            }
                            return n.isPlainObject(t) ? t.column !== r && t.row !== r && n.inArray(t.row, o) !== -1 ? [t] : [] : (u = k.filter(t).map(function (n, t) {
                                return {
                                    row: t._DT_CellIndex.row,
                                    column: t._DT_CellIndex.column
                                }
                            }).toArray(),
                                u.length || !t.nodeName) ? u : (f = n(t).closest("*[data-dt-row]"),
                                    f.length ? [{
                                        row: f.data("dt-row"),
                                        column: f.data("dt-column")
                                    }] : [])
                        }, i, a)
                    }) : (o = this.columns(i),
                        s = this.rows(t),
                        this.iterator("table", function (n, t) {
                            for (h = [],
                                f = 0,
                                l = s[t].length; f < l; f++)
                                for (e = 0,
                                    a = o[t].length; e < a; e++)
                                    h.push({
                                        row: s[t][f],
                                        column: o[t][e]
                                    })
                        }, 1),
                        c = this.cells(h, u),
                        n.extend(c.selector, {
                            cols: i,
                            rows: t,
                            opts: u
                        }),
                        c)
            }),
            s("cells().nodes()", "cell().node()", function () {
                return this.iterator("cell", function (n, t, i) {
                    return (n = n.aoData[t]) && n.anCells ? n.anCells[i] : r
                }, 1)
            }),
            f("cells().data()", function () {
                return this.iterator("cell", function (n, t, i) {
                    return y(n, t, i)
                }, 1)
            }),
            s("cells().cache()", "cell().cache()", function (n) {
                return n = "search" === n ? "_aFilterData" : "_aSortData",
                    this.iterator("cell", function (t, i, r) {
                        return t.aoData[i][n][r]
                    }, 1)
            }),
            s("cells().render()", "cell().render()", function (n) {
                return this.iterator("cell", function (t, i, r) {
                    return y(t, i, r, n)
                }, 1)
            }),
            s("cells().indexes()", "cell().index()", function () {
                return this.iterator("cell", function (n, t, i) {
                    return {
                        row: t,
                        column: i,
                        columnVisible: yt(n, i)
                    }
                }, 1)
            }),
            s("cells().invalidate()", "cell().invalidate()", function (n) {
                return this.iterator("cell", function (t, i, r) {
                    pt(t, i, n, r)
                })
            }),
            f("cell()", function (n, t, i) {
                return ou(this.cells(n, t, i))
            }),
            f("cell().data()", function (n) {
                var i = this.context
                    , t = this[0];
                return n === r ? i.length && t.length ? y(i[0], t[0].row, t[0].column) : r : (wu(i[0], t[0].row, t[0].column, n),
                    pt(i[0], t[0].row, "data", t[0].column),
                    this)
            }),
            f("order()", function (t, i) {
                var u = this.context;
                return t === r ? 0 !== u.length ? u[0].aaSorting : r : ("number" == typeof t ? t = [[t, i]] : t.length && !n.isArray(t[0]) && (t = Array.prototype.slice.call(arguments)),
                    this.iterator("table", function (n) {
                        n.aaSorting = t.slice()
                    }))
            }),
            f("order.listener()", function (n, t, i) {
                return this.iterator("table", function (r) {
                    yr(r, n, t, i)
                })
            }),
            f("order.fixed()", function (t) {
                if (!t) {
                    var i = this.context
                        , i = i.length ? i[0].aaSortingFixed : r;
                    return n.isArray(i) ? {
                        pre: i
                    } : i
                }
                return this.iterator("table", function (i) {
                    i.aaSortingFixed = n.extend(!0, {}, t)
                })
            }),
            f(["columns().order()", "column().order()"], function (t) {
                var i = this;
                return this.iterator("table", function (r, u) {
                    var f = [];
                    n.each(i[u], function (n, i) {
                        f.push([i, t])
                    });
                    r.aaSorting = f
                })
            }),
            f("search()", function (t, i, u, f) {
                var e = this.context;
                return t === r ? 0 !== e.length ? e[0].oPreviousSearch.sSearch : r : this.iterator("table", function (r) {
                    r.oFeatures.bFilter && kt(r, n.extend({}, r.oPreviousSearch, {
                        sSearch: t + "",
                        bRegex: null === i ? !1 : i,
                        bSmart: null === u ? !0 : u,
                        bCaseInsensitive: null === f ? !0 : f
                    }), 1)
                })
            }),
            s("columns().search()", "column().search()", function (t, i, u, f) {
                return this.iterator("column", function (e, o) {
                    var s = e.aoPreSearchCols;
                    if (t === r)
                        return s[o].sSearch;
                    e.oFeatures.bFilter && (n.extend(s[o], {
                        sSearch: t + "",
                        bRegex: null === i ? !1 : i,
                        bSmart: null === u ? !0 : u,
                        bCaseInsensitive: null === f ? !0 : f
                    }),
                        kt(e, e.oPreviousSearch, 1))
                })
            }),
            f("state()", function () {
                return this.context.length ? this.context[0].oSavedState : null
            }),
            f("state.clear()", function () {
                return this.iterator("table", function (n) {
                    n.fnStateSaveCallback.call(n.oInstance, n, {})
                })
            }),
            f("state.loaded()", function () {
                return this.context.length ? this.context[0].oLoadedState : null
            }),
            f("state.save()", function () {
                return this.iterator("table", function (n) {
                    yi(n)
                })
            }),
            u.versionCheck = u.fnVersionCheck = function (n) {
                for (var f = u.version.split("."), n = n.split("."), i, r, t = 0, e = n.length; t < e; t++)
                    if (i = parseInt(f[t], 10) || 0,
                        r = parseInt(n[t], 10) || 0,
                        i !== r)
                        return i > r;
                return !0
            }
            ,
            u.isDataTable = u.fnIsDataTable = function (t) {
                var i = n(t).get(0)
                    , r = !1;
                return t instanceof u.Api ? !0 : (n.each(u.settings, function (t, u) {
                    var f = u.nScrollHead ? n("table", u.nScrollHead)[0] : null
                        , e = u.nScrollFoot ? n("table", u.nScrollFoot)[0] : null;
                    (u.nTable === i || f === i || e === i) && (r = !0)
                }),
                    r)
            }
            ,
            u.tables = u.fnTables = function (t) {
                var r = !1, i;
                return n.isPlainObject(t) && (r = t.api,
                    t = t.visible),
                    i = n.map(u.settings, function (i) {
                        if (!t || t && n(i.nTable).is(":visible"))
                            return i.nTable
                    }),
                    r ? new e(i) : i
            }
            ,
            u.camelToHungarian = g,
            f("$()", function (t, i) {
                var r = this.rows(i).nodes()
                    , r = n(r);
                return n([].concat(r.filter(t).toArray(), r.find(t).toArray()))
            }),
            n.each(["on", "one", "off"], function (t, i) {
                f(i + "()", function () {
                    var t = Array.prototype.slice.call(arguments), r;
                    return t[0] = n.map(t[0].split(/\s/), function (n) {
                        return n.match(/\.dt\b/) ? n : n + ".dt"
                    }).join(" "),
                        r = n(this.tables().nodes()),
                        r[i].apply(r, t),
                        this
                })
            }),
            f("clear()", function () {
                return this.iterator("table", function (n) {
                    ei(n)
                })
            }),
            f("settings()", function () {
                return new e(this.context, this.context)
            }),
            f("init()", function () {
                var n = this.context;
                return n.length ? n[0].oInit : null
            }),
            f("data()", function () {
                return this.iterator("table", function (n) {
                    return b(n.aoData, "_aData")
                }).flatten()
            }),
            f("destroy()", function (i) {
                return i = i || !1,
                    this.iterator("table", function (r) {
                        var h = r.nTableWrapper.parentNode, c = r.oClasses, l = r.nTable, a = r.nTBody, f = r.nTHead, v = r.nTFoot, s = n(l), a = n(a), y = n(r.nTableWrapper), p = n.map(r.aoData, function (n) {
                            return n.nTr
                        }), w;
                        r.bDestroying = !0;
                        o(r, "aoDestroyCallback", "destroy", [r]);
                        i || new e(r).columns().visible(!0);
                        y.off(".DT").find(":not(tbody *)").off(".DT");
                        n(t).off(".DT-" + r.sInstance);
                        l != f.parentNode && (s.children("thead").detach(),
                            s.append(f));
                        v && l != v.parentNode && (s.children("tfoot").detach(),
                            s.append(v));
                        r.aaSorting = [];
                        r.aaSortingFixed = [];
                        vi(r);
                        n(p).removeClass(r.asStripeClasses.join(" "));
                        n("th, td", f).removeClass(c.sSortable + " " + c.sSortableAsc + " " + c.sSortableDesc + " " + c.sSortableNone);
                        a.children().detach();
                        a.append(p);
                        f = i ? "remove" : "detach";
                        s[f]();
                        y[f]();
                        !i && h && (h.insertBefore(l, r.nTableReinsertBefore),
                            s.css("width", r.sDestroyWidth).removeClass(c.sTable),
                            (w = r.asDestroyStripes.length) && a.children().each(function (t) {
                                n(this).addClass(r.asDestroyStripes[t % w])
                            }));
                        h = n.inArray(r, u.settings);
                        -1 !== h && u.settings.splice(h, 1)
                    })
            }),
            n.each(["column", "row", "cell"], function (n, t) {
                f(t + "s().every()", function (n) {
                    var i = this.selector.opts
                        , u = this;
                    return this.iterator(t, function (f, e, o, s, h) {
                        n.call(u[t](e, "cell" === t ? o : i, "cell" === t ? i : r), e, o, s, h)
                    })
                })
            }),
            f("i18n()", function (t, i, u) {
                var f = this.context[0]
                    , t = ft(t)(f.oLanguage);
                return t === r && (t = i),
                    u !== r && n.isPlainObject(t) && (t = t[u] !== r ? t[u] : t._),
                    t.replace("%d", u)
            }),
            u.version = "1.10.19",
            u.settings = [],
            u.models = {},
            u.models.oSearch = {
                bCaseInsensitive: !0,
                sSearch: "",
                bRegex: !1,
                bSmart: !0
            },
            u.models.oRow = {
                nTr: null,
                anCells: null,
                _aData: [],
                _aSortData: null,
                _aFilterData: null,
                _sFilterRow: null,
                _sRowStripe: "",
                src: null,
                idx: -1
            },
            u.models.oColumn = {
                idx: null,
                aDataSort: null,
                asSorting: null,
                bSearchable: null,
                bSortable: null,
                bVisible: null,
                _sManualType: null,
                _bAttrSrc: !1,
                fnCreatedCell: null,
                fnGetData: null,
                fnSetData: null,
                mData: null,
                mRender: null,
                nTh: null,
                nTf: null,
                sClass: null,
                sContentPadding: null,
                sDefaultContent: null,
                sName: null,
                sSortDataType: "std",
                sSortingClass: null,
                sSortingClassJUI: null,
                sTitle: null,
                sType: null,
                sWidth: null,
                sWidthOrig: null
            },
            u.defaults = {
                aaData: null,
                aaSorting: [[0, "asc"]],
                aaSortingFixed: [],
                ajax: null,
                aLengthMenu: [10, 25, 50, 100],
                aoColumns: null,
                aoColumnDefs: null,
                aoSearchCols: [],
                asStripeClasses: null,
                bAutoWidth: !0,
                bDeferRender: !1,
                bDestroy: !1,
                bFilter: !0,
                bInfo: !0,
                bLengthChange: !0,
                bPaginate: !0,
                bProcessing: !1,
                bRetrieve: !1,
                bScrollCollapse: !1,
                bServerSide: !1,
                bSort: !0,
                bSortMulti: !0,
                bSortCellsTop: !1,
                bSortClasses: !0,
                bStateSave: !1,
                fnCreatedRow: null,
                fnDrawCallback: null,
                fnFooterCallback: null,
                fnFormatNumber: function (n) {
                    return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, this.oLanguage.sThousands)
                },
                fnHeaderCallback: null,
                fnInfoCallback: null,
                fnInitComplete: null,
                fnPreDrawCallback: null,
                fnRowCallback: null,
                fnServerData: null,
                fnServerParams: null,
                fnStateLoadCallback: function (n) {
                    try {
                        return JSON.parse((-1 === n.iStateDuration ? sessionStorage : localStorage).getItem("DataTables_" + n.sInstance + "_" + location.pathname))
                    } catch (t) { }
                },
                fnStateLoadParams: null,
                fnStateLoaded: null,
                fnStateSaveCallback: function (n, t) {
                    try {
                        (-1 === n.iStateDuration ? sessionStorage : localStorage).setItem("DataTables_" + n.sInstance + "_" + location.pathname, JSON.stringify(t))
                    } catch (i) { }
                },
                fnStateSaveParams: null,
                iStateDuration: 7200,
                iDeferLoading: null,
                iDisplayLength: 10,
                iDisplayStart: 0,
                iTabIndex: 0,
                oClasses: {},
                oLanguage: {
                    oAria: {
                        sSortAscending: ": activate to sort column ascending",
                        sSortDescending: ": activate to sort column descending"
                    },
                    oPaginate: {
                        sFirst: "First",
                        sLast: "Last",
                        sNext: "Next",
                        sPrevious: "Previous"
                    },
                    sEmptyTable: "No data available in table",
                    sInfo: "Showing _START_ to _END_ of _TOTAL_ entries",
                    sInfoEmpty: "Showing 0 to 0 of 0 entries",
                    sInfoFiltered: "(filtered from _MAX_ total entries)",
                    sInfoPostFix: "",
                    sDecimal: "",
                    sThousands: ",",
                    sLengthMenu: "Show _MENU_ entries",
                    sLoadingRecords: "Loading...",
                    sProcessing: "Processing...",
                    sSearch: "Search:",
                    sSearchPlaceholder: "",
                    sUrl: "",
                    sZeroRecords: "No matching records found"
                },
                oSearch: n.extend({}, u.models.oSearch),
                sAjaxDataProp: "data",
                sAjaxSource: null,
                sDom: "lfrtip",
                searchDelay: null,
                sPaginationType: "simple_numbers",
                sScrollX: "",
                sScrollXInner: "",
                sScrollY: "",
                sServerMethod: "GET",
                renderer: null,
                rowId: "DT_RowId"
            },
            lt(u.defaults),
            u.defaults.column = {
                aDataSort: null,
                iDataSort: -1,
                asSorting: ["asc", "desc"],
                bSearchable: !0,
                bSortable: !0,
                bVisible: !0,
                fnCreatedCell: null,
                mData: null,
                mRender: null,
                sCellType: "td",
                sClass: "",
                sContentPadding: "",
                sDefaultContent: null,
                sName: "",
                sSortDataType: "std",
                sTitle: null,
                sType: null,
                sWidth: null
            },
            lt(u.defaults.column),
            u.models.oSettings = {
                oFeatures: {
                    bAutoWidth: null,
                    bDeferRender: null,
                    bFilter: null,
                    bInfo: null,
                    bLengthChange: null,
                    bPaginate: null,
                    bProcessing: null,
                    bServerSide: null,
                    bSort: null,
                    bSortMulti: null,
                    bSortClasses: null,
                    bStateSave: null
                },
                oScroll: {
                    bCollapse: null,
                    iBarWidth: 0,
                    sX: null,
                    sXInner: null,
                    sY: null
                },
                oLanguage: {
                    fnInfoCallback: null
                },
                oBrowser: {
                    bScrollOversize: !1,
                    bScrollbarLeft: !1,
                    bBounding: !1,
                    barWidth: 0
                },
                ajax: null,
                aanFeatures: [],
                aoData: [],
                aiDisplay: [],
                aiDisplayMaster: [],
                aIds: {},
                aoColumns: [],
                aoHeader: [],
                aoFooter: [],
                oPreviousSearch: {},
                aoPreSearchCols: [],
                aaSorting: null,
                aaSortingFixed: [],
                asStripeClasses: null,
                asDestroyStripes: [],
                sDestroyWidth: 0,
                aoRowCallback: [],
                aoHeaderCallback: [],
                aoFooterCallback: [],
                aoDrawCallback: [],
                aoRowCreatedCallback: [],
                aoPreDrawCallback: [],
                aoInitComplete: [],
                aoStateSaveParams: [],
                aoStateLoadParams: [],
                aoStateLoaded: [],
                sTableId: "",
                nTable: null,
                nTHead: null,
                nTFoot: null,
                nTBody: null,
                nTableWrapper: null,
                bDeferLoading: !1,
                bInitialised: !1,
                aoOpenRows: [],
                sDom: null,
                searchDelay: null,
                sPaginationType: "two_button",
                iStateDuration: 0,
                aoStateSave: [],
                aoStateLoad: [],
                oSavedState: null,
                oLoadedState: null,
                sAjaxSource: null,
                sAjaxDataProp: null,
                bAjaxDataGet: !0,
                jqXHR: null,
                json: r,
                oAjaxData: r,
                fnServerData: null,
                aoServerParams: [],
                sServerMethod: null,
                fnFormatNumber: null,
                aLengthMenu: null,
                iDraw: 0,
                bDrawing: !1,
                iDrawError: -1,
                _iDisplayLength: 10,
                _iDisplayStart: 0,
                _iRecordsTotal: 0,
                _iRecordsDisplay: 0,
                oClasses: {},
                bFiltered: !1,
                bSorted: !1,
                bSortCellsTop: null,
                oInit: null,
                aoDestroyCallback: [],
                fnRecordsTotal: function () {
                    return "ssp" == v(this) ? 1 * this._iRecordsTotal : this.aiDisplayMaster.length
                },
                fnRecordsDisplay: function () {
                    return "ssp" == v(this) ? 1 * this._iRecordsDisplay : this.aiDisplay.length
                },
                fnDisplayEnd: function () {
                    var n = this._iDisplayLength
                        , t = this._iDisplayStart
                        , r = t + n
                        , i = this.aiDisplay.length
                        , u = this.oFeatures
                        , f = u.bPaginate;
                    return u.bServerSide ? !1 === f || -1 === n ? t + i : Math.min(t + n, this._iRecordsDisplay) : !f || r > i || -1 === n ? i : r
                },
                oInstance: null,
                sInstance: null,
                iTabIndex: 0,
                nScrollHead: null,
                nScrollFoot: null,
                aLastSort: [],
                oPlugins: {},
                rowIdFn: null,
                rowId: null
            },
            u.ext = c = {
                buttons: {},
                classes: {},
                builder: "-source-",
                errMode: "alert",
                feature: [],
                search: [],
                selector: {
                    cell: [],
                    column: [],
                    row: []
                },
                internal: {},
                legacy: {
                    ajax: null
                },
                pager: {},
                renderer: {
                    pageButton: {},
                    header: {}
                },
                order: {},
                type: {
                    detect: [],
                    search: {},
                    order: {}
                },
                _unique: 0,
                fnVersionCheck: u.fnVersionCheck,
                iApiIndex: 0,
                oJUIClasses: {},
                sVersion: u.version
            },
            n.extend(c, {
                afnFiltering: c.search,
                aTypes: c.type.detect,
                ofnSearch: c.type.search,
                oSort: c.type.order,
                afnSortData: c.order,
                aoFeatures: c.feature,
                oApi: c.internal,
                oStdClasses: c.classes,
                oPagination: c.pager
            }),
            n.extend(u.ext.classes, {
                sTable: "dataTable",
                sNoFooter: "no-footer",
                sPageButton: "paginate_button",
                sPageButtonActive: "current",
                sPageButtonDisabled: "disabled",
                sStripeOdd: "odd",
                sStripeEven: "even",
                sRowEmpty: "dataTables_empty",
                sWrapper: "dataTables_wrapper",
                sFilter: "dataTables_filter",
                sInfo: "dataTables_info",
                sPaging: "dataTables_paginate paging_",
                sLength: "dataTables_length",
                sProcessing: "dataTables_processing",
                sSortAsc: "sorting_asc",
                sSortDesc: "sorting_desc",
                sSortable: "sorting",
                sSortableAsc: "sorting_asc_disabled",
                sSortableDesc: "sorting_desc_disabled",
                sSortableNone: "sorting_disabled",
                sSortColumn: "sorting_",
                sFilterInput: "",
                sLengthSelect: "",
                sScrollWrapper: "dataTables_scroll",
                sScrollHead: "dataTables_scrollHead",
                sScrollHeadInner: "dataTables_scrollHeadInner",
                sScrollBody: "dataTables_scrollBody",
                sScrollFoot: "dataTables_scrollFoot",
                sScrollFootInner: "dataTables_scrollFootInner",
                sHeaderTH: "",
                sFooterTH: "",
                sSortJUIAsc: "",
                sSortJUIDesc: "",
                sSortJUI: "",
                sSortJUIAscAllowed: "",
                sSortJUIDescAllowed: "",
                sSortJUIWrapper: "",
                sSortIcon: "",
                sJUIHeader: "",
                sJUIFooter: ""
            }),
            cu = u.ext.pager,
            n.extend(cu, {
                simple: function () {
                    return ["previous", "next"]
                },
                full: function () {
                    return ["first", "previous", "next", "last"]
                },
                numbers: function (n, t) {
                    return [gt(n, t)]
                },
                simple_numbers: function (n, t) {
                    return ["previous", gt(n, t), "next"]
                },
                full_numbers: function (n, t) {
                    return ["first", "previous", gt(n, t), "next", "last"]
                },
                first_last_numbers: function (n, t) {
                    return ["first", gt(n, t), "last"]
                },
                _numbers: gt,
                numbers_length: 7
            }),
            n.extend(!0, u.ext.renderer, {
                pageButton: {
                    _: function (t, u, f, e, o, s) {
                        var l = t.oClasses, a = t.oLanguage.oPaginate, w = t.oLanguage.oAria.paginate || {}, h, c, y = 0, p = function (i, r) {
                            for (var v, u, k = function (n) {
                                lr(t, n.data.action, !0)
                            }, e = 0, b = r.length; e < b; e++)
                                if (u = r[e],
                                    n.isArray(u))
                                    v = n("<" + (u.DT_el || "div") + "/>").appendTo(i),
                                        p(v, u);
                                else {
                                    h = null;
                                    c = "";
                                    switch (u) {
                                        case "ellipsis":
                                            i.append('<span class="ellipsis">&#x2026;<\/span>');
                                            break;
                                        case "first":
                                            h = a.sFirst;
                                            c = u + (o > 0 ? "" : " " + l.sPageButtonDisabled);
                                            break;
                                        case "previous":
                                            h = a.sPrevious;
                                            c = u + (o > 0 ? "" : " " + l.sPageButtonDisabled);
                                            break;
                                        case "next":
                                            h = a.sNext;
                                            c = u + (o < s - 1 ? "" : " " + l.sPageButtonDisabled);
                                            break;
                                        case "last":
                                            h = a.sLast;
                                            c = u + (o < s - 1 ? "" : " " + l.sPageButtonDisabled);
                                            break;
                                        default:
                                            h = u + 1;
                                            c = o === u ? l.sPageButtonActive : ""
                                    }
                                    h !== null && (v = n("<a>", {
                                        "class": l.sPageButton + " " + c,
                                        "aria-controls": t.sTableId,
                                        "aria-label": w[u],
                                        "data-dt-idx": y,
                                        tabindex: t.iTabIndex,
                                        id: f === 0 && typeof u == "string" ? t.sTableId + "_" + u : null
                                    }).html(h).appendTo(i),
                                        wr(v, {
                                            action: u
                                        }, k),
                                        y++)
                                }
                        }, v;
                        try {
                            v = n(u).find(i.activeElement).data("dt-idx")
                        } catch (b) { }
                        p(n(u).empty(), e);
                        v !== r && n(u).find("[data-dt-idx=" + v + "]").focus()
                    }
                }
            }),
            n.extend(u.ext.type.detect, [function (n, t) {
                var i = t.oLanguage.sDecimal;
                return tu(n, i) ? "num" + i : null
            }
                , function (n) {
                    if (n && !(n instanceof Date) && !ce.test(n))
                        return null;
                    var t = Date.parse(n);
                    return null !== t && !isNaN(t) || tt(n) ? "date" : null
                }
                , function (n, t) {
                    var i = t.oLanguage.sDecimal;
                    return tu(n, i, !0) ? "num-fmt" + i : null
                }
                , function (n, t) {
                    var i = t.oLanguage.sDecimal;
                    return ee(n, i) ? "html-num" + i : null
                }
                , function (n, t) {
                    var i = t.oLanguage.sDecimal;
                    return ee(n, i, !0) ? "html-num-fmt" + i : null
                }
                , function (n) {
                    return tt(n) || "string" == typeof n && -1 !== n.indexOf("<") ? "html" : null
                }
            ]),
            n.extend(u.ext.type.search, {
                html: function (n) {
                    return tt(n) ? n : "string" == typeof n ? n.replace(re, " ").replace(wi, "") : ""
                },
                string: function (n) {
                    return tt(n) ? n : "string" == typeof n ? n.replace(re, " ") : n
                }
            }),
            ii = function (n, t, i, r) {
                return 0 !== n && (!n || "-" === n) ? -Infinity : (t && (n = fe(n, t)),
                    n.replace && (i && (n = n.replace(i, "")),
                        r && (n = n.replace(r, ""))),
                    1 * n)
            }
            ,
            n.extend(c.type.order, {
                "date-pre": function (n) {
                    return n = Date.parse(n),
                        isNaN(n) ? -Infinity : n
                },
                "html-pre": function (n) {
                    return tt(n) ? "" : n.replace ? n.replace(/<.*?>/g, "").toLowerCase() : n + ""
                },
                "string-pre": function (n) {
                    return tt(n) ? "" : "string" == typeof n ? n.toLowerCase() : n.toString ? n.toString() : ""
                },
                "string-asc": function (n, t) {
                    return n < t ? -1 : n > t ? 1 : 0
                },
                "string-desc": function (n, t) {
                    return n < t ? 1 : n > t ? -1 : 0
                }
            }),
            dr(""),
            n.extend(!0, u.ext.renderer, {
                header: {
                    _: function (t, i, r, u) {
                        n(t.nTable).on("order.dt.DT", function (n, f, e, o) {
                            t === f && (n = r.idx,
                                i.removeClass(r.sSortingClass + " " + u.sSortAsc + " " + u.sSortDesc).addClass(o[n] == "asc" ? u.sSortAsc : o[n] == "desc" ? u.sSortDesc : r.sSortingClass))
                        })
                    },
                    jqueryui: function (t, i, r, u) {
                        n("<div/>").addClass(u.sSortJUIWrapper).append(i.contents()).append(n("<span/>").addClass(u.sSortIcon + " " + r.sSortingClassJUI)).appendTo(i);
                        n(t.nTable).on("order.dt.DT", function (n, f, e, o) {
                            t === f && (n = r.idx,
                                i.removeClass(u.sSortAsc + " " + u.sSortDesc).addClass(o[n] == "asc" ? u.sSortAsc : o[n] == "desc" ? u.sSortDesc : r.sSortingClass),
                                i.find("span." + u.sSortIcon).removeClass(u.sSortJUIAsc + " " + u.sSortJUIDesc + " " + u.sSortJUI + " " + u.sSortJUIAscAllowed + " " + u.sSortJUIDescAllowed).addClass(o[n] == "asc" ? u.sSortJUIAsc : o[n] == "desc" ? u.sSortJUIDesc : r.sSortingClassJUI))
                        })
                    }
                }
            }),
            nr = function (n) {
                return "string" == typeof n ? n.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;") : n
            }
            ,
            u.render = {
                number: function (n, t, i, r, u) {
                    return {
                        display: function (f) {
                            if ("number" != typeof f && "string" != typeof f)
                                return f;
                            var o = 0 > f ? "-" : ""
                                , e = parseFloat(f);
                            return isNaN(e) ? nr(f) : (e = e.toFixed(i),
                                f = Math.abs(e),
                                e = parseInt(f, 10),
                                f = i ? t + (f - e).toFixed(i).substring(2) : "",
                                o + (r || "") + e.toString().replace(/\B(?=(\d{3})+(?!\d))/g, n) + f + (u || ""))
                        }
                    }
                },
                text: function () {
                    return {
                        display: nr,
                        filter: nr
                    }
                }
            },
            n.extend(u.ext.internal, {
                _fnExternApiFunc: ie,
                _fnBuildAjax: hi,
                _fnAjaxUpdate: du,
                _fnAjaxParameters: gu,
                _fnAjaxUpdateDraw: nf,
                _fnAjaxDataSrc: ci,
                _fnAddColumn: ir,
                _fnColumnOptions: ri,
                _fnAdjustColumnSizing: at,
                _fnVisibleToColumnIndex: vt,
                _fnColumnIndexToVisible: yt,
                _fnVisbleColumns: ot,
                _fnGetColumns: ui,
                _fnColumnTypes: rr,
                _fnApplyColumnDefs: pu,
                _fnHungarianMap: lt,
                _fnCamelToHungarian: g,
                _fnLanguageCompat: tr,
                _fnBrowserDetect: vu,
                _fnAddData: it,
                _fnAddTr: fi,
                _fnNodeToDataIndex: function (n, t) {
                    return t._DT_RowIndex !== r ? t._DT_RowIndex : null
                },
                _fnNodeToColumnIndex: function (t, i, r) {
                    return n.inArray(r, t.aoData[i].anCells)
                },
                _fnGetCellData: y,
                _fnSetCellData: wu,
                _fnSplitObjNotation: ur,
                _fnGetObjectDataFn: ft,
                _fnSetObjectDataFn: rt,
                _fnGetDataMaster: fr,
                _fnClearTable: ei,
                _fnDeleteIndex: oi,
                _fnInvalidate: pt,
                _fnGetRowElements: er,
                _fnCreateTr: or,
                _fnBuildHead: bu,
                _fnDrawHead: wt,
                _fnDraw: ut,
                _fnReDraw: et,
                _fnAddOptionsHtml: ku,
                _fnDetectHeader: bt,
                _fnGetUniqueThs: si,
                _fnFeatureHtmlFilter: tf,
                _fnFilterComplete: kt,
                _fnFilterCustom: rf,
                _fnFilterColumn: uf,
                _fnFilter: ff,
                _fnFilterCreateSearch: hr,
                _fnEscapeRegex: iu,
                _fnFilterData: ef,
                _fnFeatureHtmlInfo: hf,
                _fnUpdateInfo: cf,
                _fnInfoMacros: lf,
                _fnInitialise: dt,
                _fnInitComplete: li,
                _fnLengthChange: cr,
                _fnFeatureHtmlLength: af,
                _fnFeatureHtmlPaginate: vf,
                _fnPageChange: lr,
                _fnFeatureHtmlProcessing: yf,
                _fnProcessingDisplay: w,
                _fnFeatureHtmlTable: pf,
                _fnScrollDraw: ai,
                _fnApplyToChildren: d,
                _fnCalculateColumnWidths: ar,
                _fnThrottle: ru,
                _fnConvertToWidth: wf,
                _fnGetWidestNode: bf,
                _fnGetMaxLenString: kf,
                _fnStringToCss: h,
                _fnSortFlatten: st,
                _fnSort: df,
                _fnSortAria: gf,
                _fnSortListener: vr,
                _fnSortAttachListener: yr,
                _fnSortingClasses: vi,
                _fnSortData: ne,
                _fnSaveState: yi,
                _fnLoadState: te,
                _fnSettingsFromNode: pi,
                _fnLog: nt,
                _fnMap: k,
                _fnBindAction: wr,
                _fnCallbackReg: a,
                _fnCallbackFire: o,
                _fnLengthOverflow: br,
                _fnRenderer: kr,
                _fnDataSource: v,
                _fnRowAttributes: sr,
                _fnExtend: pr,
                _fnCalculateEnd: function () { }
            }),
            n.fn.dataTable = u,
            u.$ = n,
            n.fn.dataTableSettings = u.settings,
            n.fn.dataTableExt = u.ext,
            n.fn.DataTable = function (t) {
                return n(this).dataTable(t).api()
            }
            ,
            n.each(u, function (t, i) {
                n.fn.DataTable[t] = i
            }),
            n.fn.dataTable
    }),
    function (n) {
        "function" == typeof define && define.amd ? define(["jquery", "datatables.net"], function (t) {
            return n(t, window, document)
        }) : "object" == typeof exports ? module.exports = function (t, i) {
            return t || (t = window),
                i && i.fn.dataTable || (i = require("datatables.net")(t, i).$),
                n(i, t, t.document)
        }
                : n(jQuery, window, document)
    }(function (n, t, i, r) {
        var u = n.fn.dataTable;
        return n.extend(!0, u.defaults, {
            dom: "<'row'<'col-sm-6'l><'col-sm-6'f>><'row'<'col-sm-12'tr>><'row'<'col-sm-5'i><'col-sm-7'p>>",
            renderer: "bootstrap"
        }),
            n.extend(u.ext.classes, {
                sWrapper: "dataTables_wrapper form-inline dt-bootstrap",
                sFilterInput: "form-control input-sm",
                sLengthSelect: "form-control input-sm",
                sProcessing: "dataTables_processing panel panel-default"
            }),
            u.ext.renderer.pageButton.bootstrap = function (t, f, e, o, s, h) {
                var y = new u.Api(t), b = t.oClasses, a = t.oLanguage.oPaginate, k = t.oLanguage.oAria.paginate || {}, c, l, p = 0, w = function (i, r) {
                    for (var v, u, d = function (t) {
                        t.preventDefault();
                        n(t.currentTarget).hasClass("disabled") || y.page() == t.data.action || y.page(t.data.action).draw("page")
                    }, f = 0, o = r.length; f < o; f++)
                        if (u = r[f],
                            n.isArray(u))
                            w(i, u);
                        else {
                            l = c = "";
                            switch (u) {
                                case "ellipsis":
                                    c = "&#x2026;";
                                    l = "disabled";
                                    break;
                                case "first":
                                    c = a.sFirst;
                                    l = u + (0 < s ? "" : " disabled");
                                    break;
                                case "previous":
                                    c = a.sPrevious;
                                    l = u + (0 < s ? "" : " disabled");
                                    break;
                                case "next":
                                    c = a.sNext;
                                    l = u + (s < h - 1 ? "" : " disabled");
                                    break;
                                case "last":
                                    c = a.sLast;
                                    l = u + (s < h - 1 ? "" : " disabled");
                                    break;
                                default:
                                    c = u + 1;
                                    l = s === u ? "active" : ""
                            }
                            c && (v = n("<li>", {
                                "class": b.sPageButton + " " + l,
                                id: 0 === e && "string" == typeof u ? t.sTableId + "_" + u : null
                            }).append(n("<a>", {
                                href: "#",
                                "aria-controls": t.sTableId,
                                "aria-label": k[u],
                                "data-dt-idx": p,
                                tabindex: t.iTabIndex
                            }).html(c)).appendTo(i),
                                t.oApi._fnBindAction(v, {
                                    action: u
                                }, d),
                                p++)
                        }
                }, v;
                try {
                    v = n(f).find(i.activeElement).data("dt-idx")
                } catch (d) { }
                w(n(f).empty().html('<ul class="pagination"/>').children("ul"), o);
                v !== r && n(f).find("[data-dt-idx=" + v + "]").focus()
            }
            ,
            u
    });
!function (n, t, i) {
    "use strict";
    !function r(n, t, i) {
        function u(f, o) {
            var h, c, s;
            if (!t[f]) {
                if (!n[f]) {
                    if (h = "function" == typeof require && require,
                        !o && h)
                        return h(f, !0);
                    if (e)
                        return e(f, !0);
                    c = new Error("Cannot find module '" + f + "'");
                    throw c.code = "MODULE_NOT_FOUND",
                    c;
                }
                s = t[f] = {
                    exports: {}
                };
                n[f][0].call(s.exports, function (t) {
                    var i = n[f][1][t];
                    return u(i ? i : t)
                }, s, s.exports, r, n, t, i)
            }
            return t[f].exports
        }
        for (var e = "function" == typeof require && require, f = 0; f < i.length; f++)
            u(i[f]);
        return u
    }({
        1: [function (r, u, f) {
            var v = function (n) {
                return n && n.__esModule ? n : {
                    "default": n
                }
            };
            Object.defineProperty(f, "__esModule", {
                value: !0
            });
            var y, a, s, h, e = r("./modules/handle-dom"), c = r("./modules/utils"), o = r("./modules/handle-swal-dom"), p = r("./modules/handle-click"), w = r("./modules/handle-key"), b = v(w), k = r("./modules/default-params"), l = v(k), d = r("./modules/set-params"), g = v(d);
            f["default"] = s = h = function () {
                function k(n) {
                    var t = u;
                    return t[n] === i ? l["default"][n] : t[n]
                }
                var u = arguments[0], r, s, f, it, rt;
                if (e.addClass(t.body, "stop-scrolling"),
                    o.resetInput(),
                    u === i)
                    return c.logStr("SweetAlert expects at least 1 attribute!"),
                        !1;
                r = c.extend({}, l["default"]);
                switch (typeof u) {
                    case "string":
                        r.title = u;
                        r.text = arguments[1] || "";
                        r.type = arguments[2] || "";
                        break;
                    case "object":
                        if (u.title === i)
                            return c.logStr('Missing "title" argument!'),
                                !1;
                        r.title = u.title;
                        for (s in l["default"])
                            r[s] = k(s);
                        r.confirmButtonText = r.showCancelButton ? "Confirm" : l["default"].confirmButtonText;
                        r.confirmButtonText = k("confirmButtonText");
                        r.doneFunction = arguments[1] || null;
                        break;
                    default:
                        return c.logStr('Unexpected type of argument! Expected "string" or "object", got ' + typeof u),
                            !1
                }
                g["default"](r);
                o.fixVerticalPosition();
                o.openModal(arguments[1]);
                for (var v = o.getModal(), d = v.querySelectorAll("button"), nt = ["onclick", "onmouseover", "onmouseout", "onmousedown", "onmouseup", "onfocus"], tt = function (n) {
                    return p.handleButton(n, r, v)
                }, w = 0; w < d.length; w++)
                    for (f = 0; f < nt.length; f++)
                        it = nt[f],
                            d[w][it] = tt;
                o.getOverlay().onclick = tt;
                y = n.onkeydown;
                rt = function (n) {
                    return b["default"](n, r, v)
                }
                    ;
                n.onkeydown = rt;
                n.onfocus = function () {
                    setTimeout(function () {
                        a !== i && (a.focus(),
                            a = i)
                    }, 0)
                }
                    ;
                h.enableButtons()
            }
                ;
            s.setDefaults = h.setDefaults = function (n) {
                if (!n)
                    throw new Error("userParams is required");
                if ("object" != typeof n)
                    throw new Error("userParams has to be a object");
                c.extend(l["default"], n)
            }
                ;
            s.close = h.close = function () {
                var r = o.getModal(), u, s, f;
                return e.fadeOut(o.getOverlay(), 5),
                    e.fadeOut(r, 5),
                    e.removeClass(r, "showSweetAlert"),
                    e.addClass(r, "hideSweetAlert"),
                    e.removeClass(r, "visible"),
                    u = r.querySelector(".sa-icon.sa-success"),
                    e.removeClass(u, "animate"),
                    e.removeClass(u.querySelector(".sa-tip"), "animateSuccessTip"),
                    e.removeClass(u.querySelector(".sa-long"), "animateSuccessLong"),
                    s = r.querySelector(".sa-icon.sa-error"),
                    e.removeClass(s, "animateErrorIcon"),
                    e.removeClass(s.querySelector(".sa-x-mark"), "animateXMark"),
                    f = r.querySelector(".sa-icon.sa-warning"),
                    e.removeClass(f, "pulseWarning"),
                    e.removeClass(f.querySelector(".sa-body"), "pulseWarningIns"),
                    e.removeClass(f.querySelector(".sa-dot"), "pulseWarningIns"),
                    setTimeout(function () {
                        var n = r.getAttribute("data-custom-class");
                        e.removeClass(r, n)
                    }, 300),
                    e.removeClass(t.body, "stop-scrolling"),
                    n.onkeydown = y,
                    n.previousActiveElement && n.previousActiveElement.focus(),
                    a = i,
                    clearTimeout(r.timeout),
                    !0
            }
                ;
            s.showInputError = h.showInputError = function (n) {
                var t = o.getModal(), r = t.querySelector(".sa-input-error"), i;
                e.addClass(r, "show");
                i = t.querySelector(".sa-error-container");
                e.addClass(i, "show");
                i.querySelector("p").innerHTML = n;
                setTimeout(function () {
                    s.enableButtons()
                }, 1);
                t.querySelector("input").focus()
            }
                ;
            s.resetInputError = h.resetInputError = function (n) {
                var t, i, r;
                if (n && 13 === n.keyCode)
                    return !1;
                t = o.getModal();
                i = t.querySelector(".sa-input-error");
                e.removeClass(i, "show");
                r = t.querySelector(".sa-error-container");
                e.removeClass(r, "show")
            }
                ;
            s.disableButtons = h.disableButtons = function () {
                var n = o.getModal()
                    , t = n.querySelector("button.confirm")
                    , i = n.querySelector("button.cancel");
                t.disabled = !0;
                i.disabled = !0
            }
                ;
            s.enableButtons = h.enableButtons = function () {
                var n = o.getModal()
                    , t = n.querySelector("button.confirm")
                    , i = n.querySelector("button.cancel");
                t.disabled = !1;
                i.disabled = !1
            }
                ;
            "undefined" != typeof n ? n.sweetAlert = n.swal = s : c.logStr("SweetAlert is a frontend module!");
            u.exports = f["default"]
        }
            , {
            "./modules/default-params": 2,
            "./modules/handle-click": 3,
            "./modules/handle-dom": 4,
            "./modules/handle-key": 5,
            "./modules/handle-swal-dom": 6,
            "./modules/set-params": 8,
            "./modules/utils": 9
        }],
        2: [function (n, t, i) {
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            i["default"] = {
                title: "",
                text: "",
                type: null,
                allowOutsideClick: !1,
                showConfirmButton: !0,
                showCancelButton: !1,
                closeOnConfirm: !0,
                closeOnCancel: !0,
                confirmButtonText: "OK",
                confirmButtonColor: "#8CD4F5",
                cancelButtonText: "Cancel",
                imageUrl: null,
                imageSize: null,
                timer: null,
                customClass: "",
                html: !1,
                animation: !0,
                allowEscapeKey: !0,
                inputType: "text",
                inputPlaceholder: "",
                inputValue: "",
                showLoaderOnConfirm: !1
            };
            t.exports = i["default"]
        }
            , {}],
        3: [function (t, i, r) {
            Object.defineProperty(r, "__esModule", {
                value: !0
            });
            var f = t("./utils")
                , u = (t("./handle-swal-dom"),
                    t("./handle-dom"))
                , s = function (t, i, r) {
                    function h(n) {
                        l && i.confirmButtonColor && (s.style.backgroundColor = n)
                    }
                    var c, a, p, v = t || n.event, s = v.target || v.srcElement, l = -1 !== s.className.indexOf("confirm"), nt = -1 !== s.className.indexOf("sweet-overlay"), y = u.hasClass(r, "visible"), w = i.doneFunction && "true" === r.getAttribute("data-has-done-function"), b, k, d, g;
                    switch (l && i.confirmButtonColor && (c = i.confirmButtonColor,
                        a = f.colorLuminance(c, -.04),
                        p = f.colorLuminance(c, -.14)),
                    v.type) {
                        case "mouseover":
                            h(a);
                            break;
                        case "mouseout":
                            h(c);
                            break;
                        case "mousedown":
                            h(p);
                            break;
                        case "mouseup":
                            h(a);
                            break;
                        case "focus":
                            b = r.querySelector("button.confirm");
                            k = r.querySelector("button.cancel");
                            l ? k.style.boxShadow = "none" : b.style.boxShadow = "none";
                            break;
                        case "click":
                            if (d = r === s,
                                g = u.isDescendant(r, s),
                                !d && !g && y && !i.allowOutsideClick)
                                break;
                            l && w && y ? e(r, i) : w && y || nt ? o(r, i) : u.isDescendant(r, s) && "BUTTON" === s.tagName && sweetAlert.close()
                    }
                }
                , e = function (n, t) {
                    var i = !0;
                    u.hasClass(n, "show-input") && (i = n.querySelector("input").value,
                        i || (i = ""));
                    t.doneFunction(i);
                    t.closeOnConfirm && sweetAlert.close();
                    t.showLoaderOnConfirm && sweetAlert.disableButtons()
                }
                , o = function (n, t) {
                    var i = String(t.doneFunction).replace(/\s/g, "")
                        , r = "function(" === i.substring(0, 9) && ")" !== i.substring(9, 10);
                    r && t.doneFunction(!1);
                    t.closeOnCancel && sweetAlert.close()
                };
            r["default"] = {
                handleButton: s,
                handleConfirm: e,
                handleCancel: o
            };
            i.exports = r["default"]
        }
            , {
            "./handle-dom": 4,
            "./handle-swal-dom": 6,
            "./utils": 9
        }],
        4: [function (i, r, u) {
            Object.defineProperty(u, "__esModule", {
                value: !0
            });
            var f = function (n, t) {
                return new RegExp(" " + t + " ").test(" " + n.className + " ")
            }
                , s = function (n, t) {
                    f(n, t) || (n.className += " " + t)
                }
                , h = function (n, t) {
                    var i = " " + n.className.replace(/[\t\r\n]/g, " ") + " ";
                    if (f(n, t)) {
                        for (; i.indexOf(" " + t + " ") >= 0;)
                            i = i.replace(" " + t + " ", " ");
                        n.className = i.replace(/^\s+|\s+$/g, "")
                    }
                }
                , c = function (n) {
                    var i = t.createElement("div");
                    return i.appendChild(t.createTextNode(n)),
                        i.innerHTML
                }
                , e = function (n) {
                    n.style.opacity = "";
                    n.style.display = "block"
                }
                , l = function (n) {
                    if (n && !n.length)
                        return e(n);
                    for (var t = 0; t < n.length; ++t)
                        e(n[t])
                }
                , o = function (n) {
                    n.style.opacity = "";
                    n.style.display = "none"
                }
                , a = function (n) {
                    if (n && !n.length)
                        return o(n);
                    for (var t = 0; t < n.length; ++t)
                        o(n[t])
                }
                , v = function (n, t) {
                    for (var i = t.parentNode; null !== i;) {
                        if (i === n)
                            return !0;
                        i = i.parentNode
                    }
                    return !1
                }
                , y = function (n) {
                    n.style.left = "-9999px";
                    n.style.display = "block";
                    var t, i = n.clientHeight;
                    return t = "undefined" != typeof getComputedStyle ? parseInt(getComputedStyle(n).getPropertyValue("padding-top"), 10) : parseInt(n.currentStyle.padding),
                        n.style.left = "",
                        n.style.display = "none",
                        "-" + parseInt((i + t) / 2) + "px"
                }
                , p = function (n, t) {
                    if (+n.style.opacity < 1) {
                        t = t || 16;
                        n.style.opacity = 0;
                        n.style.display = "block";
                        var i = +new Date
                            , r = function (n) {
                                function t() {
                                    return n.apply(this, arguments)
                                }
                                return t.toString = function () {
                                    return n.toString()
                                }
                                    ,
                                    t
                            }(function () {
                                n.style.opacity = +n.style.opacity + (new Date - i) / 100;
                                i = +new Date;
                                +n.style.opacity < 1 && setTimeout(r, t)
                            });
                        r()
                    }
                    n.style.display = "block"
                }
                , w = function (n, t) {
                    t = t || 16;
                    n.style.opacity = 1;
                    var i = +new Date
                        , r = function (n) {
                            function t() {
                                return n.apply(this, arguments)
                            }
                            return t.toString = function () {
                                return n.toString()
                            }
                                ,
                                t
                        }(function () {
                            n.style.opacity = +n.style.opacity - (new Date - i) / 100;
                            i = +new Date;
                            +n.style.opacity > 0 ? setTimeout(r, t) : n.style.display = "none"
                        });
                    r()
                }
                , b = function (i) {
                    var u, r;
                    "function" == typeof MouseEvent ? (u = new MouseEvent("click", {
                        view: n,
                        bubbles: !1,
                        cancelable: !0
                    }),
                        i.dispatchEvent(u)) : t.createEvent ? (r = t.createEvent("MouseEvents"),
                            r.initEvent("click", !1, !1),
                            i.dispatchEvent(r)) : t.createEventObject ? i.fireEvent("onclick") : "function" == typeof i.onclick && i.onclick()
                }
                , k = function (t) {
                    "function" == typeof t.stopPropagation ? (t.stopPropagation(),
                        t.preventDefault()) : n.event && n.event.hasOwnProperty("cancelBubble") && (n.event.cancelBubble = !0)
                };
            u.hasClass = f;
            u.addClass = s;
            u.removeClass = h;
            u.escapeHtml = c;
            u._show = e;
            u.show = l;
            u._hide = o;
            u.hide = a;
            u.isDescendant = v;
            u.getTopMargin = y;
            u.fadeIn = p;
            u.fadeOut = w;
            u.fireClick = b;
            u.stopEventPropagation = k
        }
            , {}],
        5: [function (t, r, u) {
            Object.defineProperty(u, "__esModule", {
                value: !0
            });
            var f = t("./handle-dom")
                , e = t("./handle-swal-dom")
                , o = function (t, r, u) {
                    var s = t || n.event
                        , l = s.keyCode || s.which
                        , a = u.querySelector("button.confirm")
                        , y = u.querySelector("button.cancel")
                        , h = u.querySelectorAll("button[tabindex]");
                    if (-1 !== [9, 13, 32, 27].indexOf(l)) {
                        for (var o = s.target || s.srcElement, c = -1, v = 0; v < h.length; v++)
                            if (o === h[v]) {
                                c = v;
                                break
                            }
                        9 === l ? (o = -1 === c ? a : c === h.length - 1 ? h[0] : h[c + 1],
                            f.stopEventPropagation(s),
                            o.focus(),
                            r.confirmButtonColor && e.setFocusStyle(o, r.confirmButtonColor)) : 13 === l ? ("INPUT" === o.tagName && (o = a,
                                a.focus()),
                                o = -1 === c ? a : i) : 27 === l && r.allowEscapeKey === !0 ? (o = y,
                                    f.fireClick(o, s)) : o = i
                    }
                };
            u["default"] = o;
            r.exports = u["default"]
        }
            , {
            "./handle-dom": 4,
            "./handle-swal-dom": 6
        }],
        6: [function (i, r, u) {
            var s = function (n) {
                return n && n.__esModule ? n : {
                    "default": n
                }
            };
            Object.defineProperty(u, "__esModule", {
                value: !0
            });
            var v = i("./utils")
                , f = i("./handle-dom")
                , y = i("./default-params")
                , o = s(y)
                , p = i("./injected-html")
                , w = s(p)
                , b = ".sweet-alert"
                , k = ".sweet-overlay"
                , h = function () {
                    var n = t.createElement("div");
                    for (n.innerHTML = w["default"]; n.firstChild;)
                        t.body.appendChild(n.firstChild)
                }
                , e = function (n) {
                    function t() {
                        return n.apply(this, arguments)
                    }
                    return t.toString = function () {
                        return n.toString()
                    }
                        ,
                        t
                }(function () {
                    var n = t.querySelector(b);
                    return n || (h(),
                        n = e()),
                        n
                })
                , c = function () {
                    var n = e();
                    if (n)
                        return n.querySelector("input")
                }
                , l = function () {
                    return t.querySelector(k)
                }
                , d = function (n, t) {
                    var i = v.hexToRgb(t);
                    n.style.boxShadow = "0 0 2px rgba(" + i + ", 0.8), inset 0 0 0 1px rgba(0, 0, 0, 0.05)"
                }
                , g = function (i) {
                    var r = e(), s, u, o;
                    f.fadeIn(l(), 10);
                    f.show(r);
                    f.addClass(r, "showSweetAlert");
                    f.removeClass(r, "hideSweetAlert");
                    n.previousActiveElement = t.activeElement;
                    s = r.querySelector("button.confirm");
                    s.focus();
                    setTimeout(function () {
                        f.addClass(r, "visible")
                    }, 500);
                    u = r.getAttribute("data-timer");
                    "null" !== u && "" !== u && (o = i,
                        r.timeout = setTimeout(function () {
                            var n = (o || null) && "true" === r.getAttribute("data-has-done-function");
                            n ? o(null) : sweetAlert.close()
                        }, u))
                }
                , nt = function () {
                    var t = e()
                        , n = c();
                    f.removeClass(t, "show-input");
                    n.value = o["default"].inputValue;
                    n.setAttribute("type", o["default"].inputType);
                    n.setAttribute("placeholder", o["default"].inputPlaceholder);
                    a()
                }
                , a = function (n) {
                    var t, i, r;
                    if (n && 13 === n.keyCode)
                        return !1;
                    t = e();
                    i = t.querySelector(".sa-input-error");
                    f.removeClass(i, "show");
                    r = t.querySelector(".sa-error-container");
                    f.removeClass(r, "show")
                }
                , tt = function () {
                    var n = e();
                    n.style.marginTop = f.getTopMargin(e())
                };
            u.sweetAlertInitialize = h;
            u.getModal = e;
            u.getOverlay = l;
            u.getInput = c;
            u.setFocusStyle = d;
            u.openModal = g;
            u.resetInput = nt;
            u.resetInputError = a;
            u.fixVerticalPosition = tt
        }
            , {
            "./default-params": 2,
            "./handle-dom": 4,
            "./injected-html": 7,
            "./utils": 9
        }],
        7: [function (n, t, i) {
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            i["default"] = '<div class="sweet-overlay" tabIndex="-1"><\/div><div class="sweet-alert"><div class="sa-icon sa-error">\n      <span class="sa-x-mark">\n        <span class="sa-line sa-left"><\/span>\n        <span class="sa-line sa-right"><\/span>\n      <\/span>\n    <\/div><div class="sa-icon sa-warning">\n      <span class="sa-body"><\/span>\n      <span class="sa-dot"><\/span>\n    <\/div><div class="sa-icon sa-info"><\/div><div class="sa-icon sa-success">\n      <span class="sa-line sa-tip"><\/span>\n      <span class="sa-line sa-long"><\/span>\n\n      <div class="sa-placeholder"><\/div>\n      <div class="sa-fix"><\/div>\n    <\/div><div class="sa-icon sa-custom"><\/div><h2>Title<\/h2>\n    <p>Text<\/p>\n    <fieldset>\n      <input type="text" tabIndex="3" />\n      <div class="sa-input-error"><\/div>\n    <\/fieldset><div class="sa-error-container">\n      <div class="icon">!<\/div>\n      <p>Not valid!<\/p>\n    <\/div><div class="sa-button-container">\n      <button class="cancel" tabIndex="2">Cancel<\/button>\n      <div class="sa-confirm-button-container">\n        <button class="confirm" tabIndex="1">OK<\/button><div class="la-ball-fall">\n          <div><\/div>\n          <div><\/div>\n          <div><\/div>\n        <\/div>\n      <\/div>\n    <\/div><\/div>';
            t.exports = i["default"]
        }
            , {}],
        8: [function (n, t, r) {
            Object.defineProperty(r, "__esModule", {
                value: !0
            });
            var o = n("./utils")
                , f = n("./handle-swal-dom")
                , u = n("./handle-dom")
                , e = ["error", "warning", "info", "success", "input", "prompt"]
                , s = function (n) {
                    var t = f.getModal(), d = t.querySelector("h2"), v = t.querySelector("p"), h = t.querySelector("button.cancel"), r = t.querySelector("button.confirm"), y, c, s, l, a, k;
                    if ((d.innerHTML = n.html ? n.title : u.escapeHtml(n.title).split("\n").join("<br>"),
                        v.innerHTML = n.html ? n.text : u.escapeHtml(n.text || "").split("\n").join("<br>"),
                        n.text && u.show(v),
                        n.customClass) ? (u.addClass(t, n.customClass),
                            t.setAttribute("data-custom-class", n.customClass)) : (y = t.getAttribute("data-custom-class"),
                                u.removeClass(t, y),
                                t.setAttribute("data-custom-class", "")),
                        (u.hide(t.querySelectorAll(".sa-icon")),
                            n.type && !o.isIE8()) && (c = function () {
                                for (var c, r, o, h = !1, s = 0; s < e.length; s++)
                                    if (n.type === e[s]) {
                                        h = !0;
                                        break
                                    }
                                if (!h)
                                    return logStr("Unknown alert type: " + n.type),
                                    {
                                        v: !1
                                    };
                                c = ["success", "error", "warning", "info"];
                                r = i;
                                -1 !== c.indexOf(n.type) && (r = t.querySelector(".sa-icon.sa-" + n.type),
                                    u.show(r));
                                o = f.getInput();
                                switch (n.type) {
                                    case "success":
                                        u.addClass(r, "animate");
                                        u.addClass(r.querySelector(".sa-tip"), "animateSuccessTip");
                                        u.addClass(r.querySelector(".sa-long"), "animateSuccessLong");
                                        break;
                                    case "error":
                                        u.addClass(r, "animateErrorIcon");
                                        u.addClass(r.querySelector(".sa-x-mark"), "animateXMark");
                                        break;
                                    case "warning":
                                        u.addClass(r, "pulseWarning");
                                        u.addClass(r.querySelector(".sa-body"), "pulseWarningIns");
                                        u.addClass(r.querySelector(".sa-dot"), "pulseWarningIns");
                                        break;
                                    case "input":
                                    case "prompt":
                                        o.setAttribute("type", n.inputType);
                                        o.value = n.inputValue;
                                        o.setAttribute("placeholder", n.inputPlaceholder);
                                        u.addClass(t, "show-input");
                                        setTimeout(function () {
                                            o.focus();
                                            o.addEventListener("keyup", swal.resetInputError)
                                        }, 400)
                                }
                            }(),
                                "object" == typeof c))
                        return c.v;
                    if (n.imageUrl) {
                        if (s = t.querySelector(".sa-icon.sa-custom"),
                            s.style.backgroundImage = "url(" + n.imageUrl + ")",
                            u.show(s),
                            l = 80,
                            a = 80,
                            n.imageSize) {
                            var p = n.imageSize.toString().split("x")
                                , w = p[0]
                                , b = p[1];
                            w && b ? (l = w,
                                a = b) : logStr("Parameter imageSize expects value with format WIDTHxHEIGHT, got " + n.imageSize)
                        }
                        s.setAttribute("style", s.getAttribute("style") + "width:" + l + "px; height:" + a + "px")
                    }
                    t.setAttribute("data-has-cancel-button", n.showCancelButton);
                    n.showCancelButton ? h.style.display = "inline-block" : u.hide(h);
                    t.setAttribute("data-has-confirm-button", n.showConfirmButton);
                    n.showConfirmButton ? r.style.display = "inline-block" : u.hide(r);
                    n.cancelButtonText && (h.innerHTML = u.escapeHtml(n.cancelButtonText));
                    n.confirmButtonText && (r.innerHTML = u.escapeHtml(n.confirmButtonText));
                    n.confirmButtonColor && (r.style.backgroundColor = n.confirmButtonColor,
                        r.style.borderLeftColor = n.confirmLoadingButtonColor,
                        r.style.borderRightColor = n.confirmLoadingButtonColor,
                        f.setFocusStyle(r, n.confirmButtonColor));
                    t.setAttribute("data-allow-outside-click", n.allowOutsideClick);
                    k = n.doneFunction ? !0 : !1;
                    t.setAttribute("data-has-done-function", k);
                    n.animation ? "string" == typeof n.animation ? t.setAttribute("data-animation", n.animation) : t.setAttribute("data-animation", "pop") : t.setAttribute("data-animation", "none");
                    t.setAttribute("data-timer", n.timer)
                };
            r["default"] = s;
            t.exports = r["default"]
        }
            , {
            "./handle-dom": 4,
            "./handle-swal-dom": 6,
            "./utils": 9
        }],
        9: [function (t, i, r) {
            Object.defineProperty(r, "__esModule", {
                value: !0
            });
            var u = function (n, t) {
                for (var i in t)
                    t.hasOwnProperty(i) && (n[i] = t[i]);
                return n
            }
                , f = function (n) {
                    var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(n);
                    return t ? parseInt(t[1], 16) + ", " + parseInt(t[2], 16) + ", " + parseInt(t[3], 16) : null
                }
                , e = function () {
                    return n.attachEvent && !n.addEventListener
                }
                , o = function (t) {
                    n.console && n.console.log("SweetAlert: " + t)
                }
                , s = function (n, t) {
                    n = String(n).replace(/[^0-9a-f]/gi, "");
                    n.length < 6 && (n = n[0] + n[0] + n[1] + n[1] + n[2] + n[2]);
                    t = t || 0;
                    for (var i, u = "#", r = 0; 3 > r; r++)
                        i = parseInt(n.substr(2 * r, 2), 16),
                            i = Math.round(Math.min(Math.max(0, i + i * t), 255)).toString(16),
                            u += ("00" + i).substr(i.length);
                    return u
                };
            r.extend = u;
            r.hexToRgb = f;
            r.isIE8 = e;
            r.logStr = o;
            r.colorLuminance = s
        }
            , {}]
    }, {}, [1]);
    "function" == typeof define && define.amd ? define(function () {
        return sweetAlert
    }) : "undefined" != typeof module && module.exports && (module.exports = sweetAlert)
}(window, document);
$(document).ready(function () {
    $.extend(!0, $.fn.dataTable.defaults, {
        searching: !1,
        scrollX: !0,
        stateSave: !0,
        stateSaveParams: function (n, t) {
            t.order = [];
            t.search.search = "";
            t.start = 0;
            $(".dataTables_scrollHeadInner thead th").each(function () {
                $(this).prop("tabindex", -1)
            })
        },
        lengthMenu: [20, 50, 100],
        pageLength: 20,
        dom: "<'row row-10'<'col-xs-12'<'datatable-header input-group input-group-sm col-xs-12'l>>><'row'<'col-xs-12 nowrap'rt>><'row'<'col-sm-5'i><'col-xs-7 pagination-sm'p>>",
        oLanguage: {
            sEmptyTable: "条件に一致するデータがありません。",
            sInfo: " _TOTAL_ 件中 _START_ ～ _END_ 件まで表示",
            sInfoEmpty: " 0 件が該当しました。 ",
            sInfoFiltered: "（全 _MAX_ 件より抽出）",
            sInfoPostFix: "",
            sInfoThousands: ",",
            sLengthMenu: '<span class="input-group-addon paginationText lbl">件<\/span><span><select class="form-control input-sm pageselect"><option value="20">20<\/option><option value="50">50<\/option><option value="100">100<\/option><\/select><\/span>',
            sLoadingRecords: "読み込み中...",
            sProcessing: "処理中...",
            sSearch: "検索:",
            sZeroRecords: "一致するレコードがありません",
            oPaginate: {
                sFirst: "先頭",
                sLast: "最終",
                sNext: "次へ",
                sPrevious: "前へ"
            },
            oAria: {
                sSortAscending: ": 列を昇順に並べ替えるにはアクティブにする",
                sSortDescending: ": 列を降順に並べ替えるにはアクティブにする"
            }
        }
    })
});
$(document).on("keyup", ".selectdatepicker,.selectdatepickerDueDate", function () {
    clearTimeout(timer);
    timer = setTimeout(function () {
        $(".field-validation-error").each(function () {
            var n = $(this).find("span")
                , t = n.html()
                , i = t.replace(new RegExp("The field.*must be a date.", "gm"), "日付の形式ではありません。");
            n.html(i)
        })
    }, 0)
});
$(document).on("change", ".selectdatepicker,.selectdatepickerDueDate", function () {
    clearTimeout(timer);
    timer = setTimeout(function () {
        $(".field-validation-error").each(function () {
            var n = $(this).find("span")
                , t = n.html()
                , i = t.replace(new RegExp("The field.*must be a date.", "gm"), "日付の形式ではありません。");
            n.html(i)
        })
    }, 0)
});
$(document).ready(function () {
    NumInput();
    $("#gridSearch tbody").on("mouseover", "tr.delete", function () {
        var n = $("#gridSearch").DataTable()
            , i = n.row(this).nodes().to$()
            , t = !0;
        i.find("td").each(function () {
            if ($(this).css("background-color") == "rgb(128, 128, 128)")
                return t = !1,
                    !1;
            $(this).css("background-color", "#808080")
        });
        t && n.draw(!1)
    }).on("mouseout", "tr.delete", function () {
        var n = $("#gridSearch").DataTable()
            , t = n.row(this).nodes().to$();
        t.find("td").each(function () {
            $(this).css("background-color", "#bfbfbf")
        });
        n.draw(!1)
    });
    $("#gridSearch tbody").on("click", "tr", function () {
        var n = $("#gridSearch").DataTable()
            , t = n.row(this).nodes().to$();
        t.hasClass("selected") ? t.removeClass("selected") : (n.$("tr.selected").removeClass("selected"),
            t.addClass("selected"));
        n.draw(!1)
    });
    $("#gridSearch tbody").on("click", "td", function () {
        var t = $("#gridSearch").DataTable()
            , n = t.cell(this);
        $(n.node()).find('.fixed-column[type="checkbox"]').is(":checked") ? $(n.node()).find('.fixed-column[type="checkbox"]').prop("checked", !1) : $(n.node()).find('.fixed-column[type="checkbox"]').prop("checked", !0)
    });
    $("#button").click(function () {
        table_dataTable.row(".selected").remove().draw(!1)
    });
    $("input.toggle-vis").click(function () {
        var n = table_dataTable.column($(this).attr("data-column"));
        this.checked ? n.visible(!n.visible()) : n.visible(!n.visible())
    })
});
$(document).on("click", ".flatpickr-clear", function () {
    $(this).parent().find(".timepicker").flatpickr({
        noCalendar: !0,
        enableTime: !0,
        dateFormat: "h:i K",
        disableMobile: !0
    }).clear()
});
$(document).on("click", ".place-history-search", function () {
    ParentSelector = jQuery(this).closest(".row").prev().prev();
    var n = $(".popupPlaceCode #gridSearchPlace tbody");
    n.empty();
    $(".popupPlaceCode .btnSearchdelete").prop("disabled", !0);
    $(".popupPlaceCode #chkall").prop("disabled", !0);
    $(".popupPlaceCode .btnSavePlace ").prop("disabled", !0);
    $(".popupPlaceCode").show()
});
$(document).on("click", ".popupPlaceCode .btnClosePlace", function () {
    $("body").css("overflow", "auto");
    $(".popupPlaceCode").hide()
});
$(document).on("click", ".popupPlaceCode .btnSearchdelete", function () {
    var n = [];
    $(".chkOrder").each(function () {
        if ($(this).prop("checked")) {
            var t = $(this).closest(".clsplaceid").find(".hdplaceid");
            n.push(t.val())
        }
    });
    n.length <= 0 ? swal({
        title: "歴史を選択してください。",
        type: "warning",
        showCancelButton: !1,
        confirmButtonText: "OK",
        closeOnConfirm: !0
    }) : swal({
        title: "選択したデータは削除しますか？",
        type: "warning",
        showCancelButton: !0,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "実行する",
        cancelButtonText: "中止する",
        closeOnConfirm: !0,
        closeOnCancel: !0
    }, function () {
        $.ajax({
            type: "POST",
            url: "/Order/DeletePlaceHistory",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(n),
            async: !0,
            dataType: "json",
            success: function (n) {
                n.result == 0 ? ($(".popupPlaceCode .btnSearchPlace").trigger("click"),
                    swal({
                        title: "歴史を削除しました。",
                        type: "success",
                        showCancelButton: !1,
                        confirmButtonText: "OK",
                        closeOnConfirm: !0
                    })) : swal({
                        title: "歴史を削除できない。",
                        type: "success",
                        showCancelButton: !1,
                        confirmButtonText: "OK",
                        closeOnConfirm: !0
                    })
            },
            error: function () { }
        })
    })
});
$(document).on("click", ".popupPlaceCode .btnSearchPlace", function () {
    var n = $(".popupPlaceCode #txtPlaceName").val()
        , t = $(".popupPlaceCode #txtPlaceAddress").val()
        , i = $(".popupPlaceCode #txtPlacePhone").val()
        , r = $(".popupPlaceCode #txtPlacePersonName").val()
        , u = {
            PlaceName: n,
            PlaceAddress: t,
            PlacePhone: i,
            PlacePersonName: r
        };
    $.ajax({
        type: "POST",
        url: "/Order/GetPlaceHistory",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(u),
        async: !0,
        dataType: "json",
        success: function (n) {
            var u = $(".popupPlaceCode #gridSearchPlace tbody"), i, t, r;
            if (u.empty(),
                i = n.data,
                t = "",
                i.length)
                for ($(".popupPlaceCode #chkall").prop("disabled", !1),
                    r = 0; r < i.length; r++)
                    t = t + '<tr role="row" class="odd" >',
                        t = t + '\t<td class="text-center clsplaceid" style="width:3%">',
                        t = t + '\t\t<input type="checkbox" class="minimal chkOrder ipPlaceId" value="" />',
                        t = t + '\t\t<input type="hidden" class="hdplaceid" value="' + i[r].Id + '" />',
                        t = t + "\t<\/td>",
                        t = t + '\t<td style="width:23%">' + i[r].PlaceName + "<\/td>",
                        t = t + '\t<td style="width:30%">' + i[r].PlaceAddress + "<\/td>",
                        t = t + '\t<td style="width:17%">' + i[r].PlacePhone + "<\/td>",
                        t = t + '\t<td style="width:30%">' + i[r].PlacePersonName + "<\/td>",
                        t = t + "<\/tr>";
            else
                t = t + '<tr role="row" class="odd">',
                    t = t + '\t<td class="text-center" colspan="6">該当データがありません。<\/td>',
                    t = t + "<\/tr>";
            u.append(t);
            $(document).ready(function () {
                $('.popupPlaceCode input[type="checkbox"]').iCheck({
                    checkboxClass: "icheckbox_square-blue",
                    radioClass: "iradio_square-blue",
                    increaseArea: "20%"
                });
                $(".popupPlaceCode #chkall").on("ifClicked", function () {
                    var n = $(".popupPlaceCode #chkall").prop("checked");
                    $(".popupPlaceCode .btnSavePlace ").prop("disabled", !0);
                    n ? ($(".popupPlaceCode .chkOrder").iCheck("uncheck"),
                        $(".popupPlaceCode .btnSearchdelete").prop("disabled", !0)) : ($(".popupPlaceCode .chkOrder").iCheck("check"),
                            $(".popupPlaceCode .btnSearchdelete").prop("disabled", !1))
                });
                $(".popupPlaceCode .chkOrder").on("ifClicked ", function () {
                    var n = 0;
                    $(".popupPlaceCode .chkOrder").each(function () {
                        $(this).prop("checked") && (n += 1)
                    });
                    $(this).prop("checked") ? n -= 1 : n += 1;
                    n == i.length ? $(".popupPlaceCode #chkall").iCheck("check") : $(".popupPlaceCode #chkall").iCheck("uncheck");
                    n > 0 ? ($(".popupPlaceCode .btnSearchdelete").prop("disabled", !1),
                        $(".popupPlaceCode .btnSavePlace ").prop("disabled", !1)) : ($(".popupPlaceCode .btnSearchdelete").prop("disabled", !0),
                            $(".popupPlaceCode .btnSavePlace ").prop("disabled", !0))
                })
            })
        },
        error: function () { }
    })
});
$(document).on("click", ".popupPlaceCode .btnSavePlace", function () {
    var n = $(".popupPlaceCode").find('input[type="checkbox"]:checked');
    if (n.length == 0)
        swal({
            title: "履歴を選択してください。",
            type: "warning",
            showCancelButton: !1,
            confirmButtonText: "OK",
            closeOnConfirm: !0
        });
    else if (n.length > 1)
        swal({
            title: "一つ履歴を選択してください。",
            type: "warning",
            showCancelButton: !1,
            confirmButtonText: "OK",
            closeOnConfirm: !0
        });
    else {
        $("body").css("overflow", "auto");
        let n = [];
        $.each($("input:checkbox:checked").closest("td").siblings("td"), function () {
            n.push($(this).text())
        });
        ParentSelector.find(".txtPlaceName").val(n[0] == "null" || n[0] == null ? "" : n[0]);
        ParentSelector.find(".txtPlaceAddress").val(n[1] == "null" || n[1] == null ? "" : n[1]);
        ParentSelector.find(".txtPlacePhone").val(n[2] == "null" || n[2] == null ? "" : n[2]);
        ParentSelector.find(".txtPlacePersonName").val(n[3] == "null" || n[3] == null ? "" : n[3]);
        $(".popupPlaceCode").hide()
    }
});
$(document).on("change", ".box_order_item .selectdatepickerDueDate ", function () {
    var n = $(this);
    duedatechange(n)
});
$(document).on("focusout", ".box_order_item .selectdatepickerDueDate ", function () {
    var n = $(this);
    duedatechange(n)
});
$(function () {
    "use strict";
    function tt(n) {
        if (typeof Storage != "undefined")
            return localStorage.getItem(n);
        window.alert("Please use a modern browser to properly view this template!")
    }
    function it(n, t) {
        typeof Storage != "undefined" ? localStorage.setItem(n, t) : window.alert("Please use a modern browser to properly view this template!")
    }
    function o(n) {
        $("body").toggleClass(n);
        f.fixSidebar();
        $("body").hasClass("fixed") && n == "fixed" && (u.expandOnHover(),
            f.activate());
        i.fix()
    }
    function s(n) {
        return $.each(r, function (n) {
            $("body").removeClass(r[n])
        }),
            $("body").addClass(n),
            it("skin", n),
            !1
    }
    function rt() {
        var n = tt("skin");
        n && $.inArray(n, r) && s(n);
        $("[data-skin]").on("click", function (n) {
            $(this).hasClass("knob") || (n.preventDefault(),
                s($(this).data("skin")))
        });
        $("[data-layout]").on("click", function () {
            o($(this).data("layout"))
        });
        $("[data-controlsidebar]").on("click", function () {
            o($(this).data("controlsidebar"));
            var n = !i.options.slide;
            i.options.slide = n;
            n || $(".control-sidebar").removeClass("control-sidebar-open")
        });
        $('[data-sidebarskin="toggle"]').on("click", function () {
            var n = $(".control-sidebar");
            n.hasClass("control-sidebar-dark") ? (n.removeClass("control-sidebar-dark"),
                n.addClass("control-sidebar-light")) : (n.removeClass("control-sidebar-light"),
                    n.addClass("control-sidebar-dark"))
        });
        $('[data-enable="expandOnHover"]').on("click", function () {
            $(this).attr("disabled", !0);
            u.expandOnHover();
            $("body").hasClass("sidebar-collapse") || $('[data-layout="sidebar-collapse"]').click()
        });
        $("body").hasClass("fixed") && $('[data-layout="fixed"]').attr("checked", "checked");
        $("body").hasClass("layout-boxed") && $('[data-layout="layout-boxed"]').attr("checked", "checked");
        $("body").hasClass("sidebar-collapse") && $('[data-layout="sidebar-collapse"]').attr("checked", "checked")
    }
    var r, e, h, t, n, c, l, a, v, y, p, w, b, k, d, g, nt;
    $('[data-toggle="control-sidebar"]').controlSidebar();
    $('[data-toggle="push-menu"]').pushMenu();
    var u = $('[data-toggle="push-menu"]').data("lte.pushmenu")
        , i = $('[data-toggle="control-sidebar"]').data("lte.controlsidebar")
        , f = $("body").data("lte.layout");
    $(window).on("load", function () {
        u = $('[data-toggle="push-menu"]').data("lte.pushmenu");
        i = $('[data-toggle="control-sidebar"]').data("lte.controlsidebar");
        f = $("body").data("lte.layout")
    });
    r = ["skin-blue", "skin-black", "skin-red", "skin-yellow", "skin-purple", "skin-green", "skin-blue-light", "skin-black-light", "skin-red-light", "skin-yellow-light", "skin-purple-light", "skin-green-light"];
    e = $("<div />", {
        id: "control-sidebar-theme-demo-options-tab",
        "class": "tab-pane active"
    });
    h = $("<li />", {
        "class": "active"
    }).html("<a href='#control-sidebar-theme-demo-options-tab' data-toggle='tab'><i class=\"fa fa-wrench\"><\/i><\/a>");
    $('[href="#control-sidebar-home-tab"]').parent().before(h);
    t = $("<div />");
    t.append('<h4 class="control-sidebar-heading">Layout Options<\/h4><div class="form-group"><label class="control-sidebar-subheading"><input type="checkbox"data-layout="fixed"class="pull-right"/> Fixed layout<\/label><p>Activate the fixed layout. You can\'t use fixed and boxed layouts together<\/p><\/div><div class="form-group"><label class="control-sidebar-subheading"><input type="checkbox"data-layout="layout-boxed" class="pull-right"/> Boxed Layout<\/label><p>Activate the boxed layout<\/p><\/div><div class="form-group"><label class="control-sidebar-subheading"><input type="checkbox"data-layout="sidebar-collapse"class="pull-right"/> Toggle Sidebar<\/label><p>Toggle the left sidebar\'s state (open or collapse)<\/p><\/div><div class="form-group"><label class="control-sidebar-subheading"><input type="checkbox"data-enable="expandOnHover"class="pull-right"/> Sidebar Expand on Hover<\/label><p>Let the sidebar mini expand on hover<\/p><\/div><div class="form-group"><label class="control-sidebar-subheading"><input type="checkbox"data-controlsidebar="control-sidebar-open"class="pull-right"/> Toggle Right Sidebar Slide<\/label><p>Toggle between slide over content and push content effects<\/p><\/div><div class="form-group"><label class="control-sidebar-subheading"><input type="checkbox"data-sidebarskin="toggle"class="pull-right"/> Toggle Right Sidebar Skin<\/label><p>Toggle between dark and light skins for the right sidebar<\/p><\/div>');
    n = $("<ul />", {
        "class": "list-unstyled clearfix"
    });
    c = $("<li />", {
        style: "float:left; width: 33.33333%; padding: 5px;"
    }).append('<a href="javascript:void(0)" data-skin="skin-blue" style="display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)" class="clearfix full-opacity-hover"><div><span style="display:block; width: 20%; float: left; height: 7px; background: #367fa9"><\/span><span class="bg-light-blue" style="display:block; width: 80%; float: left; height: 7px;"><\/span><\/div><div><span style="display:block; width: 20%; float: left; height: 20px; background: #222d32"><\/span><span style="display:block; width: 80%; float: left; height: 20px; background: #f4f5f7"><\/span><\/div><\/a><p class="text-center no-margin">Blue<\/p>');
    n.append(c);
    l = $("<li />", {
        style: "float:left; width: 33.33333%; padding: 5px;"
    }).append('<a href="javascript:void(0)" data-skin="skin-black" style="display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)" class="clearfix full-opacity-hover"><div style="box-shadow: 0 0 2px rgba(0,0,0,0.1)" class="clearfix"><span style="display:block; width: 20%; float: left; height: 7px; background: #fefefe"><\/span><span style="display:block; width: 80%; float: left; height: 7px; background: #fefefe"><\/span><\/div><div><span style="display:block; width: 20%; float: left; height: 20px; background: #222"><\/span><span style="display:block; width: 80%; float: left; height: 20px; background: #f4f5f7"><\/span><\/div><\/a><p class="text-center no-margin">Black<\/p>');
    n.append(l);
    a = $("<li />", {
        style: "float:left; width: 33.33333%; padding: 5px;"
    }).append('<a href="javascript:void(0)" data-skin="skin-purple" style="display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)" class="clearfix full-opacity-hover"><div><span style="display:block; width: 20%; float: left; height: 7px;" class="bg-purple-active"><\/span><span class="bg-purple" style="display:block; width: 80%; float: left; height: 7px;"><\/span><\/div><div><span style="display:block; width: 20%; float: left; height: 20px; background: #222d32"><\/span><span style="display:block; width: 80%; float: left; height: 20px; background: #f4f5f7"><\/span><\/div><\/a><p class="text-center no-margin">Purple<\/p>');
    n.append(a);
    v = $("<li />", {
        style: "float:left; width: 33.33333%; padding: 5px;"
    }).append('<a href="javascript:void(0)" data-skin="skin-green" style="display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)" class="clearfix full-opacity-hover"><div><span style="display:block; width: 20%; float: left; height: 7px;" class="bg-green-active"><\/span><span class="bg-green" style="display:block; width: 80%; float: left; height: 7px;"><\/span><\/div><div><span style="display:block; width: 20%; float: left; height: 20px; background: #222d32"><\/span><span style="display:block; width: 80%; float: left; height: 20px; background: #f4f5f7"><\/span><\/div><\/a><p class="text-center no-margin">Green<\/p>');
    n.append(v);
    y = $("<li />", {
        style: "float:left; width: 33.33333%; padding: 5px;"
    }).append('<a href="javascript:void(0)" data-skin="skin-red" style="display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)" class="clearfix full-opacity-hover"><div><span style="display:block; width: 20%; float: left; height: 7px;" class="bg-red-active"><\/span><span class="bg-red" style="display:block; width: 80%; float: left; height: 7px;"><\/span><\/div><div><span style="display:block; width: 20%; float: left; height: 20px; background: #222d32"><\/span><span style="display:block; width: 80%; float: left; height: 20px; background: #f4f5f7"><\/span><\/div><\/a><p class="text-center no-margin">Red<\/p>');
    n.append(y);
    p = $("<li />", {
        style: "float:left; width: 33.33333%; padding: 5px;"
    }).append('<a href="javascript:void(0)" data-skin="skin-yellow" style="display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)" class="clearfix full-opacity-hover"><div><span style="display:block; width: 20%; float: left; height: 7px;" class="bg-yellow-active"><\/span><span class="bg-yellow" style="display:block; width: 80%; float: left; height: 7px;"><\/span><\/div><div><span style="display:block; width: 20%; float: left; height: 20px; background: #222d32"><\/span><span style="display:block; width: 80%; float: left; height: 20px; background: #f4f5f7"><\/span><\/div><\/a><p class="text-center no-margin">Yellow<\/p>');
    n.append(p);
    w = $("<li />", {
        style: "float:left; width: 33.33333%; padding: 5px;"
    }).append('<a href="javascript:void(0)" data-skin="skin-blue-light" style="display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)" class="clearfix full-opacity-hover"><div><span style="display:block; width: 20%; float: left; height: 7px; background: #367fa9"><\/span><span class="bg-light-blue" style="display:block; width: 80%; float: left; height: 7px;"><\/span><\/div><div><span style="display:block; width: 20%; float: left; height: 20px; background: #f9fafc"><\/span><span style="display:block; width: 80%; float: left; height: 20px; background: #f4f5f7"><\/span><\/div><\/a><p class="text-center no-margin" style="font-size: 12px">Blue Light<\/p>');
    n.append(w);
    b = $("<li />", {
        style: "float:left; width: 33.33333%; padding: 5px;"
    }).append('<a href="javascript:void(0)" data-skin="skin-black-light" style="display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)" class="clearfix full-opacity-hover"><div style="box-shadow: 0 0 2px rgba(0,0,0,0.1)" class="clearfix"><span style="display:block; width: 20%; float: left; height: 7px; background: #fefefe"><\/span><span style="display:block; width: 80%; float: left; height: 7px; background: #fefefe"><\/span><\/div><div><span style="display:block; width: 20%; float: left; height: 20px; background: #f9fafc"><\/span><span style="display:block; width: 80%; float: left; height: 20px; background: #f4f5f7"><\/span><\/div><\/a><p class="text-center no-margin" style="font-size: 12px">Black Light<\/p>');
    n.append(b);
    k = $("<li />", {
        style: "float:left; width: 33.33333%; padding: 5px;"
    }).append('<a href="javascript:void(0)" data-skin="skin-purple-light" style="display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)" class="clearfix full-opacity-hover"><div><span style="display:block; width: 20%; float: left; height: 7px;" class="bg-purple-active"><\/span><span class="bg-purple" style="display:block; width: 80%; float: left; height: 7px;"><\/span><\/div><div><span style="display:block; width: 20%; float: left; height: 20px; background: #f9fafc"><\/span><span style="display:block; width: 80%; float: left; height: 20px; background: #f4f5f7"><\/span><\/div><\/a><p class="text-center no-margin" style="font-size: 12px">Purple Light<\/p>');
    n.append(k);
    d = $("<li />", {
        style: "float:left; width: 33.33333%; padding: 5px;"
    }).append('<a href="javascript:void(0)" data-skin="skin-green-light" style="display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)" class="clearfix full-opacity-hover"><div><span style="display:block; width: 20%; float: left; height: 7px;" class="bg-green-active"><\/span><span class="bg-green" style="display:block; width: 80%; float: left; height: 7px;"><\/span><\/div><div><span style="display:block; width: 20%; float: left; height: 20px; background: #f9fafc"><\/span><span style="display:block; width: 80%; float: left; height: 20px; background: #f4f5f7"><\/span><\/div><\/a><p class="text-center no-margin" style="font-size: 12px">Green Light<\/p>');
    n.append(d);
    g = $("<li />", {
        style: "float:left; width: 33.33333%; padding: 5px;"
    }).append('<a href="javascript:void(0)" data-skin="skin-red-light" style="display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)" class="clearfix full-opacity-hover"><div><span style="display:block; width: 20%; float: left; height: 7px;" class="bg-red-active"><\/span><span class="bg-red" style="display:block; width: 80%; float: left; height: 7px;"><\/span><\/div><div><span style="display:block; width: 20%; float: left; height: 20px; background: #f9fafc"><\/span><span style="display:block; width: 80%; float: left; height: 20px; background: #f4f5f7"><\/span><\/div><\/a><p class="text-center no-margin" style="font-size: 12px">Red Light<\/p>');
    n.append(g);
    nt = $("<li />", {
        style: "float:left; width: 33.33333%; padding: 5px;"
    }).append('<a href="javascript:void(0)" data-skin="skin-yellow-light" style="display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)" class="clearfix full-opacity-hover"><div><span style="display:block; width: 20%; float: left; height: 7px;" class="bg-yellow-active"><\/span><span class="bg-yellow" style="display:block; width: 80%; float: left; height: 7px;"><\/span><\/div><div><span style="display:block; width: 20%; float: left; height: 20px; background: #f9fafc"><\/span><span style="display:block; width: 80%; float: left; height: 20px; background: #f4f5f7"><\/span><\/div><\/a><p class="text-center no-margin" style="font-size: 12px">Yellow Light<\/p>');
    n.append(nt);
    t.append('<h4 class="control-sidebar-heading">Skins<\/h4>');
    t.append(n);
    e.append(t);
    $("#control-sidebar-home-tab").after(e);
    rt();
    $('[data-toggle="tooltip"]').tooltip()
}),
    function (n) {
        function y(n, r, u) {
            var v = n[0]
                , e = /er/.test(u) ? h : /bl/.test(u) ? f : t
                , c = u == d ? {
                    checked: v[t],
                    disabled: v[f],
                    indeterminate: "true" == n.attr(h) || "false" == n.attr(p)
                } : v[e];
            if (/^(ch|di|in)/.test(u) && !c)
                a(n, e);
            else if (/^(un|en|de)/.test(u) && c)
                o(n, e);
            else if (u == d)
                for (e in c)
                    c[e] ? a(n, e, !0) : o(n, e, !0);
            else
                r && "toggle" != u || (r || n[l]("ifClicked"),
                    c ? v[i] !== s && o(n, e) : a(n, e))
        }
        function a(l, a, y) {
            var w = l[0]
                , d = l.parent()
                , g = a == t
                , nt = a == h
                , et = a == f
                , ut = nt ? p : g ? it : "enabled"
                , ot = r(l, ut + v(w[i]))
                , st = r(l, a + v(w[i]));
            if (!0 !== w[a]) {
                if (!y && a == t && w[i] == s && w.name) {
                    var ft = l.closest("form")
                        , rt = 'input[name="' + w.name + '"]'
                        , rt = ft.length ? ft.find(rt) : n(rt);
                    rt.each(function () {
                        this !== w && n(this).data(u) && o(n(this), a)
                    })
                }
                nt ? (w[a] = !0,
                    w[t] && o(l, t, "force")) : (y || (w[a] = !0),
                        g && w[h] && o(l, h, !1));
                tt(l, g, a, y)
            }
            w[f] && r(l, b, !0) && d.find("." + k).css(b, "default");
            d[e](st || r(l, a) || "");
            et ? d.attr("aria-disabled", "true") : d.attr("aria-checked", nt ? "mixed" : "true");
            d[c](ot || r(l, ut) || "")
        }
        function o(n, u, o) {
            var s = n[0]
                , l = n.parent()
                , y = u == t
                , w = u == h
                , d = u == f
                , a = w ? p : y ? it : "enabled"
                , g = r(n, a + v(s[i]))
                , nt = r(n, u + v(s[i]));
            !1 !== s[u] && ((w || !o || "force" == o) && (s[u] = !1),
                tt(n, y, a, o));
            !s[f] && r(n, b, !0) && l.find("." + k).css(b, "pointer");
            l[c](nt || r(n, u) || "");
            d ? l.attr("aria-disabled", "false") : l.attr("aria-checked", "false");
            l[e](g || r(n, a) || "")
        }
        function nt(t, i) {
            t.data(u) && (t.parent().html(t.attr("style", t.data(u).s || "")),
                i && t[l](i),
                t.off(".i").unwrap(),
                n(w + '[for="' + t[0].id + '"]').add(t.closest(w)).off(".i"))
        }
        function r(n, t, i) {
            if (n.data(u))
                return n.data(u).o[t + (i ? "" : "Class")]
        }
        function v(n) {
            return n.charAt(0).toUpperCase() + n.slice(1)
        }
        function tt(n, t, i, r) {
            r || (t && n[l]("ifToggled"),
                n[l]("ifChanged")[l]("if" + v(i)))
        }
        var u = "iCheck"
            , k = u + "-helper"
            , s = "radio"
            , t = "checked"
            , it = "un" + t
            , f = "disabled"
            , p = "determinate"
            , h = "in" + p
            , d = "update"
            , i = "type"
            , e = "addClass"
            , c = "removeClass"
            , l = "trigger"
            , w = "label"
            , b = "cursor"
            , g = /ipad|iphone|ipod|android|blackberry|windows phone|opera mini|silk/i.test(navigator.userAgent);
        n.fn[u] = function (r, v) {
            var rt = 'input[type="checkbox"], input[type="' + s + '"]'
                , b = n()
                , et = function (t) {
                    t.each(function () {
                        var t = n(this);
                        b = t.is(rt) ? b.add(t) : b.add(t.find(rt))
                    })
                };
            if (/^(check|uncheck|toggle|indeterminate|determinate|disable|enable|update|destroy)$/i.test(r))
                return r = r.toLowerCase(),
                    et(this),
                    b.each(function () {
                        var t = n(this);
                        "destroy" == r ? nt(t, "ifDestroyed") : y(t, !0, r);
                        n.isFunction(v) && v()
                    });
            if ("object" != typeof r && r)
                return this;
            var p = n.extend({
                checkedClass: t,
                disabledClass: f,
                indeterminateClass: h,
                labelHover: !0,
                aria: !1
            }, r)
                , ut = p.handle
                , it = p.hoverClass || "hover"
                , ht = p.focusClass || "focus"
                , ot = p.activeClass || "active"
                , st = !!p.labelHover
                , ft = p.labelHoverClass || "hover"
                , tt = ("" + p.increaseArea).replace("%", "") | 0;
            return ("checkbox" == ut || ut == s) && (rt = 'input[type="' + ut + '"]'),
                -50 > tt && (tt = -50),
                et(this),
                b.each(function () {
                    var h = n(this);
                    nt(h);
                    var v = this
                        , ut = v.id
                        , et = -tt + "%"
                        , b = 100 + 2 * tt + "%"
                        , b = {
                            position: "absolute",
                            top: et,
                            left: et,
                            display: "block",
                            width: b,
                            height: b,
                            margin: 0,
                            padding: 0,
                            background: "#fff",
                            border: 0,
                            opacity: 0
                        }
                        , et = g ? {
                            position: "absolute",
                            visibility: "hidden"
                        } : tt ? b : {
                            position: "absolute",
                            opacity: 0
                        }
                        , at = "checkbox" == v[i] ? p.checkboxClass || "icheckbox" : p.radioClass || "i" + s
                        , rt = n(w + '[for="' + ut + '"]').add(h.closest(w))
                        , ct = !!p.aria
                        , lt = u + "-" + Math.random().toString(36).replace("0.", "")
                        , r = '<div class="' + at + '" ' + (ct ? 'role="' + v[i] + '" ' : "");
                    if (rt.length && ct && rt.each(function () {
                        r += 'aria-labelledby="';
                        this.id ? r += this.id : (this.id = lt,
                            r += lt);
                        r += '"'
                    }),
                        r = h.wrap(r + "/>")[l]("ifCreated").parent().append(p.insert),
                        b = n('<ins class="' + k + '"/>').css(b).appendTo(r),
                        h.data(u, {
                            o: p,
                            s: h.attr("style")
                        }).css(et),
                        p.inheritClass && r[e](v.className || ""),
                        p.inheritID && ut && r.attr("id", u + "-" + ut),
                        "static" == r.css("position") && r.css("position", "relative"),
                        y(h, !0, d),
                        rt.length)
                        rt.on("click.i mouseover.i mouseout.i touchbegin.i touchend.i", function (t) {
                            var u = t[i]
                                , o = n(this);
                            if (!v[f]) {
                                if ("click" == u) {
                                    if (n(t.target).is("a"))
                                        return;
                                    y(h, !1, !0)
                                } else
                                    st && (/ut|nd/.test(u) ? (r[c](it),
                                        o[c](ft)) : (r[e](it),
                                            o[e](ft)));
                                if (g)
                                    t.stopPropagation();
                                else
                                    return !1
                            }
                        });
                    h.on("click.i focus.i blur.i keyup.i keydown.i keypress.i", function (n) {
                        var u = n[i];
                        if (n = n.keyCode,
                            "click" == u)
                            return !1;
                        if ("keydown" == u && 32 == n)
                            return v[i] == s && v[t] || (v[t] ? o(h, t) : a(h, t)),
                                !1;
                        "keyup" == u && v[i] == s ? v[t] || a(h, t) : /us|ur/.test(u) && r["blur" == u ? c : e](ht)
                    });
                    b.on("click mousedown mouseup mouseover mouseout touchbegin.i touchend.i", function (n) {
                        var t = n[i]
                            , u = /wn|up/.test(t) ? ot : it;
                        if (!v[f])
                            if ("click" == t ? y(h, !1, !0) : (/wn|er|in/.test(t) ? r[e](u) : r[c](u + " " + ot),
                                rt.length && st && u == it && rt[/ut|nd/.test(t) ? c : e](ft)),
                                g)
                                n.stopPropagation();
                            else
                                return !1
                    })
                })
        }
    }(window.jQuery || window.Zepto);
!function (n, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : n.moment = t()
}(this, function () {
    "use strict";
    function t() {
        return hf.apply(null, arguments)
    }
    function tt(n) {
        return n instanceof Array || "[object Array]" === Object.prototype.toString.call(n)
    }
    function li(n) {
        return null != n && "[object Object]" === Object.prototype.toString.call(n)
    }
    function p(n) {
        return void 0 === n
    }
    function dt(n) {
        return "number" == typeof n || "[object Number]" === Object.prototype.toString.call(n)
    }
    function gi(n) {
        return n instanceof Date || "[object Date]" === Object.prototype.toString.call(n)
    }
    function lf(n, t) {
        for (var r = [], i = 0; i < n.length; ++i)
            r.push(t(n[i], i));
        return r
    }
    function l(n, t) {
        return Object.prototype.hasOwnProperty.call(n, t)
    }
    function vt(n, t) {
        for (var i in t)
            l(t, i) && (n[i] = t[i]);
        return l(t, "toString") && (n.toString = t.toString),
            l(t, "valueOf") && (n.valueOf = t.valueOf),
            n
    }
    function ft(n, t, i, r) {
        return no(n, t, i, r, !0).utc()
    }
    function u(n) {
        return null == n._pf && (n._pf = {
            empty: !1,
            unusedTokens: [],
            unusedInput: [],
            overflow: -2,
            charsLeftOver: 0,
            nullInput: !1,
            invalidMonth: null,
            invalidFormat: !1,
            userInvalidated: !1,
            iso: !1,
            parsedDateParts: [],
            meridiem: null,
            rfc2822: !1,
            weekdayMismatch: !1
        }),
            n._pf
    }
    function nu(n) {
        if (null == n._isValid) {
            var t = u(n)
                , r = cf.call(t.parsedDateParts, function (n) {
                    return null != n
                })
                , i = !isNaN(n._d.getTime()) && t.overflow < 0 && !t.empty && !t.invalidMonth && !t.invalidWeekday && !t.weekdayMismatch && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && r);
            if (n._strict && (i = i && 0 === t.charsLeftOver && 0 === t.unusedTokens.length && void 0 === t.bigHour),
                null != Object.isFrozen && Object.isFrozen(n))
                return i;
            n._isValid = i
        }
        return n._isValid
    }
    function nr(n) {
        var t = ft(NaN);
        return null != n ? vt(u(t), n) : u(t).userInvalidated = !0,
            t
    }
    function tu(n, t) {
        var i, r, f;
        if (p(t._isAMomentObject) || (n._isAMomentObject = t._isAMomentObject),
            p(t._i) || (n._i = t._i),
            p(t._f) || (n._f = t._f),
            p(t._l) || (n._l = t._l),
            p(t._strict) || (n._strict = t._strict),
            p(t._tzm) || (n._tzm = t._tzm),
            p(t._isUTC) || (n._isUTC = t._isUTC),
            p(t._offset) || (n._offset = t._offset),
            p(t._pf) || (n._pf = u(t)),
            p(t._locale) || (n._locale = t._locale),
            0 < tr.length)
            for (i = 0; i < tr.length; i++)
                p(f = t[r = tr[i]]) || (n[r] = f);
        return n
    }
    function ai(n) {
        tu(this, n);
        this._d = new Date(null != n._d ? n._d.getTime() : NaN);
        this.isValid() || (this._d = new Date(NaN));
        !1 === ir && (ir = !0,
            t.updateOffset(this),
            ir = !1)
    }
    function yt(n) {
        return n instanceof ai || null != n && null != n._isAMomentObject
    }
    function d(n) {
        return n < 0 ? Math.ceil(n) || 0 : Math.floor(n)
    }
    function f(n) {
        var t = +n
            , i = 0;
        return 0 !== t && isFinite(t) && (i = d(t)),
            i
    }
    function af(n, t, i) {
        for (var e = Math.min(n.length, t.length), o = Math.abs(n.length - t.length), u = 0, r = 0; r < e; r++)
            (i && n[r] !== t[r] || !i && f(n[r]) !== f(t[r])) && u++;
        return u + o
    }
    function vf(n) {
        !1 === t.suppressDeprecationWarnings && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + n)
    }
    function g(n, i) {
        var r = !0;
        return vt(function () {
            var u, e, f, o;
            if (null != t.deprecationHandler && t.deprecationHandler(null, n),
                r) {
                for (e = [],
                    f = 0; f < arguments.length; f++) {
                    if (u = "",
                        "object" == typeof arguments[f]) {
                        for (o in u += "\n[" + f + "] ",
                            arguments[0])
                            u += o + ": " + arguments[0][o] + ", ";
                        u = u.slice(0, -2)
                    } else
                        u = arguments[f];
                    e.push(u)
                }
                vf(n + "\nArguments: " + Array.prototype.slice.call(e).join("") + "\n" + (new Error).stack);
                r = !1
            }
            return i.apply(this, arguments)
        }, i)
    }
    function pf(n, i) {
        null != t.deprecationHandler && t.deprecationHandler(n, i);
        iu[n] || (vf(i),
            iu[n] = !0)
    }
    function et(n) {
        return n instanceof Function || "[object Function]" === Object.prototype.toString.call(n)
    }
    function wf(n, t) {
        var i, r = vt({}, n);
        for (i in t)
            l(t, i) && (li(n[i]) && li(t[i]) ? (r[i] = {},
                vt(r[i], n[i]),
                vt(r[i], t[i])) : null != t[i] ? r[i] = t[i] : delete r[i]);
        for (i in n)
            l(n, i) && !l(t, i) && li(n[i]) && (r[i] = vt({}, r[i]));
        return r
    }
    function ru(n) {
        null != n && this.set(n)
    }
    function w(n, t) {
        var i = n.toLowerCase();
        ui[i] = ui[i + "s"] = ui[t] = n
    }
    function nt(n) {
        if ("string" == typeof n)
            return ui[n] || ui[n.toLowerCase()]
    }
    function uu(n) {
        var i, t, r = {};
        for (t in n)
            l(n, t) && (i = nt(t)) && (r[i] = n[t]);
        return r
    }
    function b(n, t) {
        fu[n] = t
    }
    function ct(n, t, i) {
        var r = "" + Math.abs(n)
            , u = t - r.length;
        return (0 <= n ? i ? "+" : "" : "-") + Math.pow(10, Math.max(0, u)).toString().substr(1) + r
    }
    function r(n, t, i, r) {
        var u = r;
        "string" == typeof r && (u = function () {
            return this[r]()
        }
        );
        n && (fi[n] = u);
        t && (fi[t[0]] = function () {
            return ct(u.apply(this, arguments), t[1], t[2])
        }
        );
        i && (fi[i] = function () {
            return this.localeData().ordinal(u.apply(this, arguments), n)
        }
        )
    }
    function ur(n, t) {
        return n.isValid() ? (t = kf(t, n.localeData()),
            eu[t] = eu[t] || function (n) {
                for (var u, t = n.match(bf), i = 0, r = t.length; i < r; i++)
                    t[i] = fi[t[i]] ? fi[t[i]] : (u = t[i]).match(/\[[\s\S]/) ? u.replace(/^\[|\]$/g, "") : u.replace(/\\/g, "");
                return function (i) {
                    for (var f = "", u = 0; u < r; u++)
                        f += et(t[u]) ? t[u].call(i, n) : t[u];
                    return f
                }
            }(t),
            eu[t](n)) : n.localeData().invalidDate()
    }
    function kf(n, t) {
        function r(n) {
            return t.longDateFormat(n) || n
        }
        var i = 5;
        for (rr.lastIndex = 0; 0 <= i && rr.test(n);)
            n = n.replace(rr, r),
                rr.lastIndex = 0,
                i -= 1;
        return n
    }
    function i(n, t, i) {
        hu[n] = et(t) ? t : function (n) {
            return n && i ? i : t
        }
    }
    function es(n, t) {
        return l(hu, n) ? hu[n](t._strict, t._locale) : new RegExp(gt(n.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (n, t, i, r, u) {
            return t || i || r || u
        })))
    }
    function gt(n) {
        return n.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
    }
    function h(n, t) {
        var i, r = t;
        for ("string" == typeof n && (n = [n]),
            dt(t) && (r = function (n, i) {
                i[t] = f(n)
            }
            ),
            i = 0; i < n.length; i++)
            cr[n[i]] = r
    }
    function yi(n, t) {
        h(n, function (n, i, r, u) {
            r._w = r._w || {};
            t(n, r._w, r, u)
        })
    }
    function pi(n) {
        return lr(n) ? 366 : 365
    }
    function lr(n) {
        return n % 4 == 0 && n % 100 != 0 || n % 400 == 0
    }
    function ei(n, i) {
        return function (r) {
            return null != r ? (ie(this, n, r),
                t.updateOffset(this, i),
                this) : ar(this, n)
        }
    }
    function ar(n, t) {
        return n.isValid() ? n._d["get" + (n._isUTC ? "UTC" : "") + t]() : NaN
    }
    function ie(n, t, i) {
        n.isValid() && !isNaN(i) && ("FullYear" === t && lr(n.year()) && 1 === n.month() && 29 === n.date() ? n._d["set" + (n._isUTC ? "UTC" : "") + t](i, n.month(), vr(i, n.month())) : n._d["set" + (n._isUTC ? "UTC" : "") + t](i))
    }
    function vr(n, t) {
        if (isNaN(n) || isNaN(t))
            return NaN;
        var i, r = (t % (i = 12) + i) % i;
        return n += (t - r) / 12,
            1 === r ? lr(n) ? 29 : 28 : 31 - r % 7 % 2
    }
    function fe(n, t) {
        var i;
        if (!n.isValid())
            return n;
        if ("string" == typeof t)
            if (/^\d+$/.test(t))
                t = f(t);
            else if (!dt(t = n.localeData().monthsParse(t)))
                return n;
        return i = Math.min(n.date(), vr(n.year(), t)),
            n._d["set" + (n._isUTC ? "UTC" : "") + "Month"](t, i),
            n
    }
    function ee(n) {
        return null != n ? (fe(this, n),
            t.updateOffset(this, !0),
            this) : ar(this, "Month")
    }
    function he() {
        function f(n, t) {
            return t.length - n.length
        }
        for (var i, r = [], u = [], t = [], n = 0; n < 12; n++)
            i = ft([2e3, n]),
                r.push(this.monthsShort(i, "")),
                u.push(this.months(i, "")),
                t.push(this.months(i, "")),
                t.push(this.monthsShort(i, ""));
        for (r.sort(f),
            u.sort(f),
            t.sort(f),
            n = 0; n < 12; n++)
            r[n] = gt(r[n]),
                u[n] = gt(u[n]);
        for (n = 0; n < 24; n++)
            t[n] = gt(t[n]);
        this._monthsRegex = new RegExp("^(" + t.join("|") + ")", "i");
        this._monthsShortRegex = this._monthsRegex;
        this._monthsStrictRegex = new RegExp("^(" + u.join("|") + ")", "i");
        this._monthsShortStrictRegex = new RegExp("^(" + r.join("|") + ")", "i")
    }
    function wi(n) {
        var t = new Date(Date.UTC.apply(null, arguments));
        return n < 100 && 0 <= n && isFinite(t.getUTCFullYear()) && t.setUTCFullYear(n),
            t
    }
    function yr(n, t, i) {
        var r = 7 + t - i;
        return -((7 + wi(n, 0, r).getUTCDay() - t) % 7) + r - 1
    }
    function ce(n, t, i, r, u) {
        var e, o, f = 1 + 7 * (t - 1) + (7 + i - r) % 7 + yr(n, r, u);
        return f <= 0 ? o = pi(e = n - 1) + f : f > pi(n) ? (e = n + 1,
            o = f - pi(n)) : (e = n,
                o = f),
        {
            year: e,
            dayOfYear: o
        }
    }
    function bi(n, t, i) {
        var u, f, e = yr(n.year(), t, i), r = Math.floor((n.dayOfYear() - e - 1) / 7) + 1;
        return r < 1 ? u = r + ti(f = n.year() - 1, t, i) : r > ti(n.year(), t, i) ? (u = r - ti(n.year(), t, i),
            f = n.year() + 1) : (f = n.year(),
                u = r),
        {
            week: u,
            year: f
        }
    }
    function ti(n, t, i) {
        var r = yr(n, t, i)
            , u = yr(n + 1, t, i);
        return (pi(n) - r + u) / 7
    }
    function lu() {
        function u(n, t) {
            return t.length - n.length
        }
        for (var f, e, o, s, h = [], i = [], r = [], t = [], n = 0; n < 7; n++)
            f = ft([2e3, 1]).day(n),
                e = this.weekdaysMin(f, ""),
                o = this.weekdaysShort(f, ""),
                s = this.weekdays(f, ""),
                h.push(e),
                i.push(o),
                r.push(s),
                t.push(e),
                t.push(o),
                t.push(s);
        for (h.sort(u),
            i.sort(u),
            r.sort(u),
            t.sort(u),
            n = 0; n < 7; n++)
            i[n] = gt(i[n]),
                r[n] = gt(r[n]),
                t[n] = gt(t[n]);
        this._weekdaysRegex = new RegExp("^(" + t.join("|") + ")", "i");
        this._weekdaysShortRegex = this._weekdaysRegex;
        this._weekdaysMinRegex = this._weekdaysRegex;
        this._weekdaysStrictRegex = new RegExp("^(" + r.join("|") + ")", "i");
        this._weekdaysShortStrictRegex = new RegExp("^(" + i.join("|") + ")", "i");
        this._weekdaysMinStrictRegex = new RegExp("^(" + h.join("|") + ")", "i")
    }
    function au() {
        return this.hours() % 12 || 12
    }
    function ae(n, t) {
        r(n, 0, 0, function () {
            return this.localeData().meridiem(this.hours(), this.minutes(), t)
        })
    }
    function ve(n, t) {
        return t._meridiemParse
    }
    function pe(n) {
        return n ? n.toLowerCase().replace("_", "-") : n
    }
    function pr(n) {
        var t = null;
        if (!y[n] && "undefined" != typeof module && module && module.exports)
            try {
                t = ki._abbr;
                require("./locale/" + n);
                oi(t)
            } catch (n) { }
        return y[n]
    }
    function oi(n, t) {
        var i;
        return n && ((i = p(t) ? pt(n) : vu(n, t)) ? ki = i : "undefined" != typeof console && console.warn && console.warn("Locale " + n + " not found. Did you forget to load it?")),
            ki._abbr
    }
    function vu(n, t) {
        if (null !== t) {
            var r, i = ye;
            if (t.abbr = n,
                null != y[n])
                pf("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),
                    i = y[n]._config;
            else if (null != t.parentLocale)
                if (null != y[t.parentLocale])
                    i = y[t.parentLocale]._config;
                else {
                    if (null == (r = pr(t.parentLocale)))
                        return di[t.parentLocale] || (di[t.parentLocale] = []),
                            di[t.parentLocale].push({
                                name: n,
                                config: t
                            }),
                            null;
                    i = r._config
                }
            return y[n] = new ru(wf(i, t)),
                di[n] && di[n].forEach(function (n) {
                    vu(n.name, n.config)
                }),
                oi(n),
                y[n]
        }
        return delete y[n],
            null
    }
    function pt(n) {
        var t;
        if (n && n._locale && n._locale._abbr && (n = n._locale._abbr),
            !n)
            return ki;
        if (!tt(n)) {
            if (t = pr(n))
                return t;
            n = [n]
        }
        return function (n) {
            for (var t, i, f, u, r = 0; r < n.length;) {
                for (t = (u = pe(n[r]).split("-")).length,
                    i = (i = pe(n[r + 1])) ? i.split("-") : null; 0 < t;) {
                    if (f = pr(u.slice(0, t).join("-")))
                        return f;
                    if (i && i.length >= t && af(u, i, !0) >= t - 1)
                        break;
                    t--
                }
                r++
            }
            return ki
        }(n)
    }
    function yu(n) {
        var i, t = n._a;
        return t && -2 === u(n).overflow && (i = t[lt] < 0 || 11 < t[lt] ? lt : t[ot] < 1 || t[ot] > vr(t[it], t[lt]) ? ot : t[v] < 0 || 24 < t[v] || 24 === t[v] && (0 !== t[rt] || 0 !== t[at] || 0 !== t[ni]) ? v : t[rt] < 0 || 59 < t[rt] ? rt : t[at] < 0 || 59 < t[at] ? at : t[ni] < 0 || 999 < t[ni] ? ni : -1,
            u(n)._overflowDayOfYear && (i < it || ot < i) && (i = ot),
            u(n)._overflowWeeks && -1 === i && (i = os),
            u(n)._overflowWeekday && -1 === i && (i = ss),
            u(n).overflow = i),
            n
    }
    function si(n, t, i) {
        return null != n ? n : null != t ? t : i
    }
    function pu(n) {
        var i, f, e, h, o, s = [], l, r;
        if (!n._d) {
            for (l = n,
                r = new Date(t.now()),
                e = l._useUTC ? [r.getUTCFullYear(), r.getUTCMonth(), r.getUTCDate()] : [r.getFullYear(), r.getMonth(), r.getDate()],
                n._w && null == n._a[ot] && null == n._a[lt] && function (n) {
                    var t, o, f, i, r, e, h, s, l;
                    null != (t = n._w).GG || null != t.W || null != t.E ? (r = 1,
                        e = 4,
                        o = si(t.GG, n._a[it], bi(c(), 1, 4).year),
                        f = si(t.W, 1),
                        ((i = si(t.E, 1)) < 1 || 7 < i) && (s = !0)) : (r = n._locale._week.dow,
                            e = n._locale._week.doy,
                            l = bi(c(), r, e),
                            o = si(t.gg, n._a[it], l.year),
                            f = si(t.w, l.week),
                            null != t.d ? ((i = t.d) < 0 || 6 < i) && (s = !0) : null != t.e ? (i = t.e + r,
                                (t.e < 0 || 6 < t.e) && (s = !0)) : i = r);
                    f < 1 || f > ti(o, r, e) ? u(n)._overflowWeeks = !0 : null != s ? u(n)._overflowWeekday = !0 : (h = ce(o, f, i, r, e),
                        n._a[it] = h.year,
                        n._dayOfYear = h.dayOfYear)
                }(n),
                null != n._dayOfYear && (o = si(n._a[it], e[it]),
                    (n._dayOfYear > pi(o) || 0 === n._dayOfYear) && (u(n)._overflowDayOfYear = !0),
                    f = wi(o, 0, n._dayOfYear),
                    n._a[lt] = f.getUTCMonth(),
                    n._a[ot] = f.getUTCDate()),
                i = 0; i < 3 && null == n._a[i]; ++i)
                n._a[i] = s[i] = e[i];
            for (; i < 7; i++)
                n._a[i] = s[i] = null == n._a[i] ? 2 === i ? 1 : 0 : n._a[i];
            24 === n._a[v] && 0 === n._a[rt] && 0 === n._a[at] && 0 === n._a[ni] && (n._nextDay = !0,
                n._a[v] = 0);
            n._d = (n._useUTC ? wi : function (n, t, i, r, u, f, e) {
                var o = new Date(n, t, i, r, u, f, e);
                return n < 100 && 0 <= n && isFinite(o.getFullYear()) && o.setFullYear(n),
                    o
            }
            ).apply(null, s);
            h = n._useUTC ? n._d.getUTCDay() : n._d.getDay();
            null != n._tzm && n._d.setUTCMinutes(n._d.getUTCMinutes() - n._tzm);
            n._nextDay && (n._a[v] = 24);
            n._w && void 0 !== n._w.d && n._w.d !== h && (u(n).weekdayMismatch = !0)
        }
    }
    function we(n) {
        var t, r, o, e, f, s, h = n._i, i = ws.exec(h) || bs.exec(h);
        if (i) {
            for (u(n).iso = !0,
                t = 0,
                r = wr.length; t < r; t++)
                if (wr[t][1].exec(i[1])) {
                    e = wr[t][0];
                    o = !1 !== wr[t][2];
                    break
                }
            if (null == e)
                return void (n._isValid = !1);
            if (i[3]) {
                for (t = 0,
                    r = wu.length; t < r; t++)
                    if (wu[t][1].exec(i[3])) {
                        f = (i[2] || " ") + wu[t][0];
                        break
                    }
                if (null == f)
                    return void (n._isValid = !1)
            }
            if (!o && null != f)
                return void (n._isValid = !1);
            if (i[4]) {
                if (!ks.exec(i[4]))
                    return void (n._isValid = !1);
                s = "Z"
            }
            n._f = e + (f || "") + (s || "");
            bu(n)
        } else
            n._isValid = !1
    }
    function gs(n, t, i, r, u, f) {
        var e = [function (n) {
            var t = parseInt(n, 10);
            return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t
        }(n), ue.indexOf(t), parseInt(i, 10), parseInt(r, 10), parseInt(u, 10)];
        return f && e.push(parseInt(f, 10)),
            e
    }
    function de(n) {
        var r, i, f, t = be.exec(n._i.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "")), e;
        if (t) {
            if (e = gs(t[4], t[3], t[2], t[5], t[6], t[7]),
                r = t[1],
                i = e,
                f = n,
                r && le.indexOf(r) !== new Date(i[0], i[1], i[2]).getDay() && (u(f).weekdayMismatch = !0,
                    !(f._isValid = !1)))
                return;
            n._a = e;
            n._tzm = function (n, t, i) {
                if (n)
                    return ke[n];
                if (t)
                    return 0;
                var r = parseInt(i, 10)
                    , u = r % 100;
                return (r - u) / 100 * 60 + u
            }(t[8], t[9], t[10]);
            n._d = wi.apply(null, n._a);
            n._d.setUTCMinutes(n._d.getUTCMinutes() - n._tzm);
            u(n).rfc2822 = !0
        } else
            n._isValid = !1
    }
    function bu(n) {
        if (n._f !== t.ISO_8601)
            if (n._f !== t.RFC_2822) {
                n._a = [];
                u(n).empty = !0;
                for (var r, f, c, o, a, h, i = "" + n._i, p = i.length, y = 0, s = kf(n._f, n._locale).match(bf) || [], e = 0; e < s.length; e++)
                    f = s[e],
                        (r = (i.match(es(f, n)) || [])[0]) && (0 < (c = i.substr(0, i.indexOf(r))).length && u(n).unusedInput.push(c),
                            i = i.slice(i.indexOf(r) + r.length),
                            y += r.length),
                        fi[f] ? (r ? u(n).empty = !1 : u(n).unusedTokens.push(f),
                            o = f,
                            h = n,
                            null != (a = r) && l(cr, o) && cr[o](a, h._a, h, o)) : n._strict && !r && u(n).unusedTokens.push(f);
                u(n).charsLeftOver = p - y;
                0 < i.length && u(n).unusedInput.push(i);
                n._a[v] <= 12 && !0 === u(n).bigHour && 0 < n._a[v] && (u(n).bigHour = void 0);
                u(n).parsedDateParts = n._a.slice(0);
                u(n).meridiem = n._meridiem;
                n._a[v] = function (n, t, i) {
                    var r;
                    return null == i ? t : null != n.meridiemHour ? n.meridiemHour(t, i) : (null != n.isPM && ((r = n.isPM(i)) && t < 12 && (t += 12),
                        r || 12 !== t || (t = 0)),
                        t)
                }(n._locale, n._a[v], n._meridiem);
                pu(n);
                yu(n)
            } else
                de(n);
        else
            we(n)
    }
    function ge(n) {
        var r, f, i, s, e = n._i, o = n._f;
        return n._locale = n._locale || pt(n._l),
            null === e || void 0 === o && "" === e ? nr({
                nullInput: !0
            }) : ("string" == typeof e && (n._i = e = n._locale.preparse(e)),
                yt(e) ? new ai(yu(e)) : (gi(e) ? n._d = e : tt(o) ? function (n) {
                    var t, e, f, r, i;
                    if (0 === n._f.length)
                        return u(n).invalidFormat = !0,
                            n._d = new Date(NaN);
                    for (r = 0; r < n._f.length; r++)
                        i = 0,
                            t = tu({}, n),
                            null != n._useUTC && (t._useUTC = n._useUTC),
                            t._f = n._f[r],
                            bu(t),
                            nu(t) && (i += u(t).charsLeftOver,
                                i += 10 * u(t).unusedTokens.length,
                                u(t).score = i,
                                (null == f || i < f) && (f = i,
                                    e = t));
                    vt(n, e || t)
                }(n) : o ? bu(n) : p(f = (r = n)._i) ? r._d = new Date(t.now()) : gi(f) ? r._d = new Date(f.valueOf()) : "string" == typeof f ? (i = r,
                    null === (s = ds.exec(i._i)) ? (we(i),
                        !1 === i._isValid && (delete i._isValid,
                            de(i),
                            !1 === i._isValid && (delete i._isValid,
                                t.createFromInputFallback(i)))) : i._d = new Date(+s[1])) : tt(f) ? (r._a = lf(f.slice(0), function (n) {
                                    return parseInt(n, 10)
                                }),
                                    pu(r)) : li(f) ? function (n) {
                                        if (!n._d) {
                                            var t = uu(n._i);
                                            n._a = lf([t.year, t.month, t.day || t.date, t.hour, t.minute, t.second, t.millisecond], function (n) {
                                                return n && parseInt(n, 10)
                                            });
                                            pu(n)
                                        }
                                    }(r) : dt(f) ? r._d = new Date(f) : t.createFromInputFallback(r),
                    nu(n) || (n._d = null),
                    n))
    }
    function no(n, t, i, r, u) {
        var e, f = {};
        return !0 !== i && !1 !== i || (r = i,
            i = void 0),
            (li(n) && function (n) {
                if (Object.getOwnPropertyNames)
                    return 0 === Object.getOwnPropertyNames(n).length;
                for (var t in n)
                    if (n.hasOwnProperty(t))
                        return !1;
                return !0
            }(n) || tt(n) && 0 === n.length) && (n = void 0),
            f._isAMomentObject = !0,
            f._useUTC = f._isUTC = u,
            f._l = i,
            f._i = n,
            f._f = t,
            f._strict = r,
            (e = new ai(yu(ge(f))))._nextDay && (e.add(1, "d"),
                e._nextDay = void 0),
            e
    }
    function c(n, t, i, r) {
        return no(n, t, i, r, !1)
    }
    function ro(n, t) {
        var r, i;
        if (1 === t.length && tt(t[0]) && (t = t[0]),
            !t.length)
            return c();
        for (r = t[0],
            i = 1; i < t.length; ++i)
            t[i].isValid() && !t[i][n](r) || (r = t[i]);
        return r
    }
    function br(n) {
        var t = uu(n)
            , i = t.year || 0
            , r = t.quarter || 0
            , u = t.month || 0
            , e = t.week || 0
            , o = t.day || 0
            , s = t.hour || 0
            , h = t.minute || 0
            , c = t.second || 0
            , l = t.millisecond || 0;
        this._isValid = function (n) {
            var i, r, t;
            for (i in n)
                if (-1 === a.call(hi, i) || null != n[i] && isNaN(n[i]))
                    return !1;
            for (r = !1,
                t = 0; t < hi.length; ++t)
                if (n[hi[t]]) {
                    if (r)
                        return !1;
                    parseFloat(n[hi[t]]) !== f(n[hi[t]]) && (r = !0)
                }
            return !0
        }(t);
        this._milliseconds = +l + 1e3 * c + 6e4 * h + 36e5 * s;
        this._days = +o + 7 * e;
        this._months = +u + 3 * r + 12 * i;
        this._data = {};
        this._locale = pt();
        this._bubble()
    }
    function ku(n) {
        return n instanceof br
    }
    function du(n) {
        return n < 0 ? -1 * Math.round(-1 * n) : Math.round(n)
    }
    function uo(n, t) {
        r(n, 0, 0, function () {
            var n = this.utcOffset()
                , i = "+";
            return n < 0 && (n = -n,
                i = "-"),
                i + ct(~~(n / 60), 2) + t + ct(~~n % 60, 2)
        })
    }
    function gu(n, t) {
        var u = (t || "").match(n), i, r;
        return null === u ? null : (i = ((u[u.length - 1] || []) + "").match(fo) || ["-", 0, 0],
            r = 60 * i[1] + f(i[2]),
            0 === r ? 0 : "+" === i[0] ? r : -r)
    }
    function nf(n, i) {
        var r, u;
        return i._isUTC ? (r = i.clone(),
            u = (yt(n) || gi(n) ? n.valueOf() : c(n).valueOf()) - r.valueOf(),
            r._d.setTime(r._d.valueOf() + u),
            t.updateOffset(r, !1),
            r) : c(n).local()
    }
    function tf(n) {
        return 15 * -Math.round(n._d.getTimezoneOffset() / 15)
    }
    function eo() {
        return !!this.isValid() && this._isUTC && 0 === this._offset
    }
    function ut(n, t) {
        var u, e, o, r = n, i = null;
        return ku(n) ? r = {
            ms: n._milliseconds,
            d: n._days,
            M: n._months
        } : dt(n) ? (r = {},
            t ? r[t] = n : r.milliseconds = n) : (i = oo.exec(n)) ? (u = "-" === i[1] ? -1 : 1,
                r = {
                    y: 0,
                    d: f(i[ot]) * u,
                    h: f(i[v]) * u,
                    m: f(i[rt]) * u,
                    s: f(i[at]) * u,
                    ms: f(du(1e3 * i[ni])) * u
                }) : (i = so.exec(n)) ? (u = "-" === i[1] ? -1 : (i[1],
                    1),
                    r = {
                        y: ii(i[2], u),
                        M: ii(i[3], u),
                        w: ii(i[4], u),
                        d: ii(i[5], u),
                        h: ii(i[6], u),
                        m: ii(i[7], u),
                        s: ii(i[8], u)
                    }) : null == r ? r = {} : "object" == typeof r && ("from" in r || "to" in r) && (o = function (n, t) {
                        var i;
                        return !n.isValid() || !t.isValid() ? {
                            milliseconds: 0,
                            months: 0
                        } : (t = nf(t, n),
                            n.isBefore(t) ? i = ho(n, t) : ((i = ho(t, n)).milliseconds = -i.milliseconds,
                                i.months = -i.months),
                            i)
                    }(c(r.from), c(r.to)),
                        (r = {}).ms = o.milliseconds,
                        r.M = o.months),
            e = new br(r),
            ku(n) && l(n, "_locale") && (e._locale = n._locale),
            e
    }
    function ii(n, t) {
        var i = n && parseFloat(n.replace(",", "."));
        return (isNaN(i) ? 0 : i) * t
    }
    function ho(n, t) {
        var i = {
            milliseconds: 0,
            months: 0
        };
        return i.months = t.month() - n.month() + 12 * (t.year() - n.year()),
            n.clone().add(i.months, "M").isAfter(t) && --i.months,
            i.milliseconds = +t - +n.clone().add(i.months, "M"),
            i
    }
    function co(n, t) {
        return function (i, r) {
            var u;
            return null === r || isNaN(+r) || (pf(t, "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),
                u = i,
                i = r,
                r = u),
                lo(this, ut(i = "string" == typeof i ? +i : i, r), n),
                this
        }
    }
    function lo(n, i, r, u) {
        var o = i._milliseconds
            , f = du(i._days)
            , e = du(i._months);
        n.isValid() && (u = null == u || u,
            e && fe(n, ar(n, "Month") + e * r),
            f && ie(n, "Date", ar(n, "Date") + f * r),
            o && n._d.setTime(n._d.valueOf() + o * r),
            u && t.updateOffset(n, f || e))
    }
    function rf(n, t) {
        var r = 12 * (t.year() - n.year()) + (t.month() - n.month())
            , i = n.clone().add(r, "months");
        return -(r + (t - i < 0 ? (t - i) / (i - n.clone().add(r - 1, "months")) : (t - i) / (n.clone().add(r + 1, "months") - i))) || 0
    }
    function yo(n) {
        var t;
        return void 0 === n ? this._locale._abbr : (null != (t = pt(n)) && (this._locale = t),
            this)
    }
    function po() {
        return this._locale
    }
    function kr(n, t) {
        r(0, [n, n.length], 0, t)
    }
    function wo(n, t, i, r, u) {
        var f;
        return null == n ? bi(this, r, u).year : ((f = ti(n, r, u)) < t && (t = f),
            function (n, t, i, r, u) {
                var e = ce(n, t, i, r, u)
                    , f = wi(e.year, 0, e.dayOfYear);
                return this.year(f.getUTCFullYear()),
                    this.month(f.getUTCMonth()),
                    this.date(f.getUTCDate()),
                    this
            }
                .call(this, n, t, i, r, u))
    }
    function nh(n, t) {
        t[ni] = f(1e3 * ("0." + n))
    }
    function ns(n) {
        return n
    }
    function dr(n, t, i, r) {
        var u = pt()
            , f = ft().set(r, t);
        return u[i](f, n)
    }
    function ts(n, t, i) {
        if (dt(n) && (t = n,
            n = void 0),
            n = n || "",
            null != t)
            return dr(n, t, i, "month");
        for (var u = [], r = 0; r < 12; r++)
            u[r] = dr(n, r, i, "month");
        return u
    }
    function ef(n, t, i, r) {
        var u, o, f, e;
        if ("boolean" == typeof n ? dt(t) && (i = t,
            t = void 0) : (t = n,
                n = !1,
                dt(i = t) && (i = t,
                    t = void 0)),
            t = t || "",
            o = pt(),
            f = n ? o._week.dow : 0,
            null != i)
            return dr(t, (i + f) % 7, r, "day");
        for (e = [],
            u = 0; u < 7; u++)
            e[u] = dr(t, (u + f) % 7, r, "day");
        return e
    }
    function is(n, t, i, r) {
        var u = ut(t, i);
        return n._milliseconds += r * u._milliseconds,
            n._days += r * u._days,
            n._months += r * u._months,
            n._bubble()
    }
    function rs(n) {
        return n < 0 ? Math.floor(n) : Math.ceil(n)
    }
    function us(n) {
        return 4800 * n / 146097
    }
    function of(n) {
        return 146097 * n / 4800
    }
    function bt(n) {
        return function () {
            return this.as(n)
        }
    }
    function ri(n) {
        return function () {
            return this.isValid() ? this._data[n] : NaN
        }
    }
    function ci(n) {
        return (0 < n) - (n < 0) || +n
    }
    function gr() {
        if (!this.isValid())
            return this.localeData().invalidDate();
        var i, o, t = sf(this._milliseconds) / 1e3, v = sf(this._days), s = sf(this._months);
        o = d((i = d(t / 60)) / 60);
        t %= 60;
        i %= 60;
        var h = d(s / 12)
            , c = s %= 12
            , l = v
            , r = o
            , u = i
            , f = t ? t.toFixed(3).replace(/\.?0+$/, "") : ""
            , n = this.asSeconds();
        if (!n)
            return "P0D";
        var y = n < 0 ? "-" : ""
            , a = ci(this._months) !== ci(n) ? "-" : ""
            , p = ci(this._days) !== ci(n) ? "-" : ""
            , e = ci(this._milliseconds) !== ci(n) ? "-" : "";
        return y + "P" + (h ? a + h + "Y" : "") + (c ? a + c + "M" : "") + (l ? p + l + "D" : "") + (r || u || f ? "T" : "") + (r ? e + r + "H" : "") + (u ? e + u + "M" : "") + (f ? e + f + "S" : "")
    }
    var hf, cf, tr, ir, yf, iu, ui, fu, cr, a, cu, oe, se, be, ke, to, io, hi, fo, oo, so, ao, vo, uf, ff, bo, wt, ko, go, n, o, st, e;
    cf = Array.prototype.some ? Array.prototype.some : function (n) {
        for (var i = Object(this), r = i.length >>> 0, t = 0; t < r; t++)
            if (t in i && n.call(this, i[t], t, i))
                return !0;
        return !1
    }
        ;
    tr = t.momentProperties = [];
    ir = !1;
    iu = {};
    t.suppressDeprecationWarnings = !1;
    t.deprecationHandler = null;
    yf = Object.keys ? Object.keys : function (n) {
        var t, i = [];
        for (t in n)
            l(n, t) && i.push(t);
        return i
    }
        ;
    ui = {};
    fu = {};
    var bf = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g
        , rr = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g
        , eu = {}
        , fi = {};
    var df = /\d/
        , k = /\d\d/
        , gf = /\d{3}/
        , ou = /\d{4}/
        , fr = /[+-]?\d{6}/
        , s = /\d\d?/
        , ne = /\d\d\d\d?/
        , te = /\d\d\d\d\d\d?/
        , er = /\d{1,3}/
        , su = /\d{1,4}/
        , or = /[+-]?\d{1,6}/
        , sr = /[+-]?\d+/
        , fs = /Z|[+-]\d\d:?\d\d/gi
        , hr = /Z|[+-]\d\d(?::?\d\d)?/gi
        , vi = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i
        , hu = {};
    cr = {};
    var it = 0
        , lt = 1
        , ot = 2
        , v = 3
        , rt = 4
        , at = 5
        , ni = 6
        , os = 7
        , ss = 8;
    r("Y", 0, 0, function () {
        var n = this.year();
        return n <= 9999 ? "" + n : "+" + n
    });
    r(0, ["YY", 2], 0, function () {
        return this.year() % 100
    });
    r(0, ["YYYY", 4], 0, "year");
    r(0, ["YYYYY", 5], 0, "year");
    r(0, ["YYYYYY", 6, !0], 0, "year");
    w("year", "y");
    b("year", 1);
    i("Y", sr);
    i("YY", s, k);
    i("YYYY", su, ou);
    i("YYYYY", or, fr);
    i("YYYYYY", or, fr);
    h(["YYYYY", "YYYYYY"], it);
    h("YYYY", function (n, i) {
        i[it] = 2 === n.length ? t.parseTwoDigitYear(n) : f(n)
    });
    h("YY", function (n, i) {
        i[it] = t.parseTwoDigitYear(n)
    });
    h("Y", function (n, t) {
        t[it] = parseInt(n, 10)
    });
    t.parseTwoDigitYear = function (n) {
        return f(n) + (68 < f(n) ? 1900 : 2e3)
    }
        ;
    cu = ei("FullYear", !0);
    a = Array.prototype.indexOf ? Array.prototype.indexOf : function (n) {
        for (var t = 0; t < this.length; ++t)
            if (this[t] === n)
                return t;
        return -1
    }
        ;
    r("M", ["MM", 2], "Mo", function () {
        return this.month() + 1
    });
    r("MMM", 0, 0, function (n) {
        return this.localeData().monthsShort(this, n)
    });
    r("MMMM", 0, 0, function (n) {
        return this.localeData().months(this, n)
    });
    w("month", "M");
    b("month", 8);
    i("M", s);
    i("MM", s, k);
    i("MMM", function (n, t) {
        return t.monthsShortRegex(n)
    });
    i("MMMM", function (n, t) {
        return t.monthsRegex(n)
    });
    h(["M", "MM"], function (n, t) {
        t[lt] = f(n) - 1
    });
    h(["MMM", "MMMM"], function (n, t, i, r) {
        var f = i._locale.monthsParse(n, r, i._strict);
        null != f ? t[lt] = f : u(i).invalidMonth = n
    });
    var re = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/
        , hs = "January_February_March_April_May_June_July_August_September_October_November_December".split("_")
        , ue = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_");
    oe = vi;
    se = vi;
    r("w", ["ww", 2], "wo", "week");
    r("W", ["WW", 2], "Wo", "isoWeek");
    w("week", "w");
    w("isoWeek", "W");
    b("week", 5);
    b("isoWeek", 5);
    i("w", s);
    i("ww", s, k);
    i("W", s);
    i("WW", s, k);
    yi(["w", "ww", "W", "WW"], function (n, t, i, r) {
        t[r.substr(0, 1)] = f(n)
    });
    r("d", 0, "do", "day");
    r("dd", 0, 0, function (n) {
        return this.localeData().weekdaysMin(this, n)
    });
    r("ddd", 0, 0, function (n) {
        return this.localeData().weekdaysShort(this, n)
    });
    r("dddd", 0, 0, function (n) {
        return this.localeData().weekdays(this, n)
    });
    r("e", 0, 0, "weekday");
    r("E", 0, 0, "isoWeekday");
    w("day", "d");
    w("weekday", "e");
    w("isoWeekday", "E");
    b("day", 11);
    b("weekday", 11);
    b("isoWeekday", 11);
    i("d", s);
    i("e", s);
    i("E", s);
    i("dd", function (n, t) {
        return t.weekdaysMinRegex(n)
    });
    i("ddd", function (n, t) {
        return t.weekdaysShortRegex(n)
    });
    i("dddd", function (n, t) {
        return t.weekdaysRegex(n)
    });
    yi(["dd", "ddd", "dddd"], function (n, t, i, r) {
        var f = i._locale.weekdaysParse(n, r, i._strict);
        null != f ? t.d = f : u(i).invalidWeekday = n
    });
    yi(["d", "e", "E"], function (n, t, i, r) {
        t[r] = f(n)
    });
    var cs = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_")
        , le = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_")
        , ls = "Su_Mo_Tu_We_Th_Fr_Sa".split("_")
        , as = vi
        , vs = vi
        , ys = vi;
    r("H", ["HH", 2], 0, "hour");
    r("h", ["hh", 2], 0, au);
    r("k", ["kk", 2], 0, function () {
        return this.hours() || 24
    });
    r("hmm", 0, 0, function () {
        return "" + au.apply(this) + ct(this.minutes(), 2)
    });
    r("hmmss", 0, 0, function () {
        return "" + au.apply(this) + ct(this.minutes(), 2) + ct(this.seconds(), 2)
    });
    r("Hmm", 0, 0, function () {
        return "" + this.hours() + ct(this.minutes(), 2)
    });
    r("Hmmss", 0, 0, function () {
        return "" + this.hours() + ct(this.minutes(), 2) + ct(this.seconds(), 2)
    });
    ae("a", !0);
    ae("A", !1);
    w("hour", "h");
    b("hour", 13);
    i("a", ve);
    i("A", ve);
    i("H", s);
    i("h", s);
    i("k", s);
    i("HH", s, k);
    i("hh", s, k);
    i("kk", s, k);
    i("hmm", ne);
    i("hmmss", te);
    i("Hmm", ne);
    i("Hmmss", te);
    h(["H", "HH"], v);
    h(["k", "kk"], function (n, t) {
        var i = f(n);
        t[v] = 24 === i ? 0 : i
    });
    h(["a", "A"], function (n, t, i) {
        i._isPm = i._locale.isPM(n);
        i._meridiem = n
    });
    h(["h", "hh"], function (n, t, i) {
        t[v] = f(n);
        u(i).bigHour = !0
    });
    h("hmm", function (n, t, i) {
        var r = n.length - 2;
        t[v] = f(n.substr(0, r));
        t[rt] = f(n.substr(r));
        u(i).bigHour = !0
    });
    h("hmmss", function (n, t, i) {
        var r = n.length - 4
            , e = n.length - 2;
        t[v] = f(n.substr(0, r));
        t[rt] = f(n.substr(r, 2));
        t[at] = f(n.substr(e));
        u(i).bigHour = !0
    });
    h("Hmm", function (n, t) {
        var i = n.length - 2;
        t[v] = f(n.substr(0, i));
        t[rt] = f(n.substr(i))
    });
    h("Hmmss", function (n, t) {
        var i = n.length - 4
            , r = n.length - 2;
        t[v] = f(n.substr(0, i));
        t[rt] = f(n.substr(i, 2));
        t[at] = f(n.substr(r))
    });
    var ki, ps = ei("Hours", !0), ye = {
        calendar: {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[Last] dddd [at] LT",
            sameElse: "L"
        },
        longDateFormat: {
            LTS: "h:mm:ss A",
            LT: "h:mm A",
            L: "MM/DD/YYYY",
            LL: "MMMM D, YYYY",
            LLL: "MMMM D, YYYY h:mm A",
            LLLL: "dddd, MMMM D, YYYY h:mm A"
        },
        invalidDate: "Invalid date",
        ordinal: "%d",
        dayOfMonthOrdinalParse: /\d{1,2}/,
        relativeTime: {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            ss: "%d seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years"
        },
        months: hs,
        monthsShort: ue,
        week: {
            dow: 0,
            doy: 6
        },
        weekdays: cs,
        weekdaysMin: ls,
        weekdaysShort: le,
        meridiemParse: /[ap]\.?m?\.?/i
    }, y = {}, di = {};
    var ws = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/
        , bs = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/
        , ks = /Z|[+-]\d\d(?::?\d\d)?/
        , wr = [["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/], ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/], ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/], ["GGGG-[W]WW", /\d{4}-W\d\d/, !1], ["YYYY-DDD", /\d{4}-\d{3}/], ["YYYY-MM", /\d{4}-\d\d/, !1], ["YYYYYYMMDD", /[+-]\d{10}/], ["YYYYMMDD", /\d{8}/], ["GGGG[W]WWE", /\d{4}W\d{3}/], ["GGGG[W]WW", /\d{4}W\d{2}/, !1], ["YYYYDDD", /\d{7}/]]
        , wu = [["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/], ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/], ["HH:mm:ss", /\d\d:\d\d:\d\d/], ["HH:mm", /\d\d:\d\d/], ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/], ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/], ["HHmmss", /\d\d\d\d\d\d/], ["HHmm", /\d\d\d\d/], ["HH", /\d\d/]]
        , ds = /^\/?Date\((\-?\d+)/i;
    for (be = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,
        ke = {
            UT: 0,
            GMT: 0,
            EDT: -240,
            EST: -300,
            CDT: -300,
            CST: -360,
            MDT: -360,
            MST: -420,
            PDT: -420,
            PST: -480
        },
        t.createFromInputFallback = g("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function (n) {
            n._d = new Date(n._i + (n._useUTC ? " UTC" : ""))
        }),
        t.ISO_8601 = function () { }
        ,
        t.RFC_2822 = function () { }
        ,
        to = g("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function () {
            var n = c.apply(null, arguments);
            return this.isValid() && n.isValid() ? n < this ? this : n : nr()
        }),
        io = g("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function () {
            var n = c.apply(null, arguments);
            return this.isValid() && n.isValid() ? this < n ? this : n : nr()
        }),
        hi = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"],
        uo("Z", ":"),
        uo("ZZ", ""),
        i("Z", hr),
        i("ZZ", hr),
        h(["Z", "ZZ"], function (n, t, i) {
            i._useUTC = !0;
            i._tzm = gu(hr, n)
        }),
        fo = /([\+\-]|\d\d)/gi,
        t.updateOffset = function () { }
        ,
        oo = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,
        so = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,
        ut.fn = br.prototype,
        ut.invalid = function () {
            return ut(NaN)
        }
        ,
        ao = co(1, "add"),
        vo = co(-1, "subtract"),
        t.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ",
        t.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]",
        uf = g("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function (n) {
            return void 0 === n ? this.localeData() : this.locale(n)
        }),
        r(0, ["gg", 2], 0, function () {
            return this.weekYear() % 100
        }),
        r(0, ["GG", 2], 0, function () {
            return this.isoWeekYear() % 100
        }),
        kr("gggg", "weekYear"),
        kr("ggggg", "weekYear"),
        kr("GGGG", "isoWeekYear"),
        kr("GGGGG", "isoWeekYear"),
        w("weekYear", "gg"),
        w("isoWeekYear", "GG"),
        b("weekYear", 1),
        b("isoWeekYear", 1),
        i("G", sr),
        i("g", sr),
        i("GG", s, k),
        i("gg", s, k),
        i("GGGG", su, ou),
        i("gggg", su, ou),
        i("GGGGG", or, fr),
        i("ggggg", or, fr),
        yi(["gggg", "ggggg", "GGGG", "GGGGG"], function (n, t, i, r) {
            t[r.substr(0, 2)] = f(n)
        }),
        yi(["gg", "GG"], function (n, i, r, u) {
            i[u] = t.parseTwoDigitYear(n)
        }),
        r("Q", 0, "Qo", "quarter"),
        w("quarter", "Q"),
        b("quarter", 7),
        i("Q", df),
        h("Q", function (n, t) {
            t[lt] = 3 * (f(n) - 1)
        }),
        r("D", ["DD", 2], "Do", "date"),
        w("date", "D"),
        b("date", 9),
        i("D", s),
        i("DD", s, k),
        i("Do", function (n, t) {
            return n ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient
        }),
        h(["D", "DD"], ot),
        h("Do", function (n, t) {
            t[ot] = f(n.match(s)[0])
        }),
        ff = ei("Date", !0),
        r("DDD", ["DDDD", 3], "DDDo", "dayOfYear"),
        w("dayOfYear", "DDD"),
        b("dayOfYear", 4),
        i("DDD", er),
        i("DDDD", gf),
        h(["DDD", "DDDD"], function (n, t, i) {
            i._dayOfYear = f(n)
        }),
        r("m", ["mm", 2], 0, "minute"),
        w("minute", "m"),
        b("minute", 14),
        i("m", s),
        i("mm", s, k),
        h(["m", "mm"], rt),
        bo = ei("Minutes", !1),
        r("s", ["ss", 2], 0, "second"),
        w("second", "s"),
        b("second", 15),
        i("s", s),
        i("ss", s, k),
        h(["s", "ss"], at),
        ko = ei("Seconds", !1),
        r("S", 0, 0, function () {
            return ~~(this.millisecond() / 100)
        }),
        r(0, ["SS", 2], 0, function () {
            return ~~(this.millisecond() / 10)
        }),
        r(0, ["SSS", 3], 0, "millisecond"),
        r(0, ["SSSS", 4], 0, function () {
            return 10 * this.millisecond()
        }),
        r(0, ["SSSSS", 5], 0, function () {
            return 100 * this.millisecond()
        }),
        r(0, ["SSSSSS", 6], 0, function () {
            return 1e3 * this.millisecond()
        }),
        r(0, ["SSSSSSS", 7], 0, function () {
            return 1e4 * this.millisecond()
        }),
        r(0, ["SSSSSSSS", 8], 0, function () {
            return 1e5 * this.millisecond()
        }),
        r(0, ["SSSSSSSSS", 9], 0, function () {
            return 1e6 * this.millisecond()
        }),
        w("millisecond", "ms"),
        b("millisecond", 16),
        i("S", er, df),
        i("SS", er, k),
        i("SSS", er, gf),
        wt = "SSSS"; wt.length <= 9; wt += "S")
        i(wt, /\d+/);
    for (wt = "S"; wt.length <= 9; wt += "S")
        h(wt, nh);
    go = ei("Milliseconds", !1);
    r("z", 0, 0, "zoneAbbr");
    r("zz", 0, 0, "zoneName");
    n = ai.prototype;
    n.add = ao;
    n.calendar = function (n, i) {
        var u = n || c()
            , f = nf(u, this).startOf("day")
            , r = t.calendarFormat(this, f) || "sameElse"
            , e = i && (et(i[r]) ? i[r].call(this, u) : i[r]);
        return this.format(e || this.localeData().calendar(r, this, c(u)))
    }
        ;
    n.clone = function () {
        return new ai(this)
    }
        ;
    n.diff = function (n, t, i) {
        var r, f, u;
        if (!this.isValid())
            return NaN;
        if (!(r = nf(n, this)).isValid())
            return NaN;
        switch (f = 6e4 * (r.utcOffset() - this.utcOffset()),
        t = nt(t)) {
            case "year":
                u = rf(this, r) / 12;
                break;
            case "month":
                u = rf(this, r);
                break;
            case "quarter":
                u = rf(this, r) / 3;
                break;
            case "second":
                u = (this - r) / 1e3;
                break;
            case "minute":
                u = (this - r) / 6e4;
                break;
            case "hour":
                u = (this - r) / 36e5;
                break;
            case "day":
                u = (this - r - f) / 864e5;
                break;
            case "week":
                u = (this - r - f) / 6048e5;
                break;
            default:
                u = this - r
        }
        return i ? u : d(u)
    }
        ;
    n.endOf = function (n) {
        return void 0 === (n = nt(n)) || "millisecond" === n ? this : ("date" === n && (n = "day"),
            this.startOf(n).add(1, "isoWeek" === n ? "week" : n).subtract(1, "ms"))
    }
        ;
    n.format = function (n) {
        n || (n = this.isUtc() ? t.defaultFormatUtc : t.defaultFormat);
        var i = ur(this, n);
        return this.localeData().postformat(i)
    }
        ;
    n.from = function (n, t) {
        return this.isValid() && (yt(n) && n.isValid() || c(n).isValid()) ? ut({
            to: this,
            from: n
        }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
    }
        ;
    n.fromNow = function (n) {
        return this.from(c(), n)
    }
        ;
    n.to = function (n, t) {
        return this.isValid() && (yt(n) && n.isValid() || c(n).isValid()) ? ut({
            from: this,
            to: n
        }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
    }
        ;
    n.toNow = function (n) {
        return this.to(c(), n)
    }
        ;
    n.get = function (n) {
        return et(this[n = nt(n)]) ? this[n]() : this
    }
        ;
    n.invalidAt = function () {
        return u(this).overflow
    }
        ;
    n.isAfter = function (n, t) {
        var i = yt(n) ? n : c(n);
        return !(!this.isValid() || !i.isValid()) && ("millisecond" === (t = nt(p(t) ? "millisecond" : t)) ? this.valueOf() > i.valueOf() : i.valueOf() < this.clone().startOf(t).valueOf())
    }
        ;
    n.isBefore = function (n, t) {
        var i = yt(n) ? n : c(n);
        return !(!this.isValid() || !i.isValid()) && ("millisecond" === (t = nt(p(t) ? "millisecond" : t)) ? this.valueOf() < i.valueOf() : this.clone().endOf(t).valueOf() < i.valueOf())
    }
        ;
    n.isBetween = function (n, t, i, r) {
        return ("(" === (r = r || "()")[0] ? this.isAfter(n, i) : !this.isBefore(n, i)) && (")" === r[1] ? this.isBefore(t, i) : !this.isAfter(t, i))
    }
        ;
    n.isSame = function (n, t) {
        var i, r = yt(n) ? n : c(n);
        return !(!this.isValid() || !r.isValid()) && ("millisecond" === (t = nt(t || "millisecond")) ? this.valueOf() === r.valueOf() : (i = r.valueOf(),
            this.clone().startOf(t).valueOf() <= i && i <= this.clone().endOf(t).valueOf()))
    }
        ;
    n.isSameOrAfter = function (n, t) {
        return this.isSame(n, t) || this.isAfter(n, t)
    }
        ;
    n.isSameOrBefore = function (n, t) {
        return this.isSame(n, t) || this.isBefore(n, t)
    }
        ;
    n.isValid = function () {
        return nu(this)
    }
        ;
    n.lang = uf;
    n.locale = yo;
    n.localeData = po;
    n.max = io;
    n.min = to;
    n.parsingFlags = function () {
        return vt({}, u(this))
    }
        ;
    n.set = function (n, t) {
        if ("object" == typeof n)
            for (var r = function (n) {
                var t = [];
                for (var i in n)
                    t.push({
                        unit: i,
                        priority: fu[i]
                    });
                return t.sort(function (n, t) {
                    return n.priority - t.priority
                }),
                    t
            }(n = uu(n)), i = 0; i < r.length; i++)
                this[r[i].unit](n[r[i].unit]);
        else if (et(this[n = nt(n)]))
            return this[n](t);
        return this
    }
        ;
    n.startOf = function (n) {
        switch (n = nt(n)) {
            case "year":
                this.month(0);
            case "quarter":
            case "month":
                this.date(1);
            case "week":
            case "isoWeek":
            case "day":
            case "date":
                this.hours(0);
            case "hour":
                this.minutes(0);
            case "minute":
                this.seconds(0);
            case "second":
                this.milliseconds(0)
        }
        return "week" === n && this.weekday(0),
            "isoWeek" === n && this.isoWeekday(1),
            "quarter" === n && this.month(3 * Math.floor(this.month() / 3)),
            this
    }
        ;
    n.subtract = vo;
    n.toArray = function () {
        var n = this;
        return [n.year(), n.month(), n.date(), n.hour(), n.minute(), n.second(), n.millisecond()]
    }
        ;
    n.toObject = function () {
        var n = this;
        return {
            years: n.year(),
            months: n.month(),
            date: n.date(),
            hours: n.hours(),
            minutes: n.minutes(),
            seconds: n.seconds(),
            milliseconds: n.milliseconds()
        }
    }
        ;
    n.toDate = function () {
        return new Date(this.valueOf())
    }
        ;
    n.toISOString = function (n) {
        if (!this.isValid())
            return null;
        var i = !0 !== n
            , t = i ? this.clone().utc() : this;
        return t.year() < 0 || 9999 < t.year() ? ur(t, i ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ") : et(Date.prototype.toISOString) ? i ? this.toDate().toISOString() : new Date(this.valueOf() + 6e4 * this.utcOffset()).toISOString().replace("Z", ur(t, "Z")) : ur(t, i ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ")
    }
        ;
    n.inspect = function () {
        var n, t;
        if (!this.isValid())
            return "moment.invalid(/* " + this._i + " */)";
        n = "moment";
        t = "";
        this.isLocal() || (n = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone",
            t = "Z");
        var i = "[" + n + '("]'
            , r = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY"
            , u = t + '[")]';
        return this.format(i + r + "-MM-DD[T]HH:mm:ss.SSS" + u)
    }
        ;
    n.toJSON = function () {
        return this.isValid() ? this.toISOString() : null
    }
        ;
    n.toString = function () {
        return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
    }
        ;
    n.unix = function () {
        return Math.floor(this.valueOf() / 1e3)
    }
        ;
    n.valueOf = function () {
        return this._d.valueOf() - 6e4 * (this._offset || 0)
    }
        ;
    n.creationData = function () {
        return {
            input: this._i,
            format: this._f,
            locale: this._locale,
            isUTC: this._isUTC,
            strict: this._strict
        }
    }
        ;
    n.year = cu;
    n.isLeapYear = function () {
        return lr(this.year())
    }
        ;
    n.weekYear = function (n) {
        return wo.call(this, n, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
    }
        ;
    n.isoWeekYear = function (n) {
        return wo.call(this, n, this.isoWeek(), this.isoWeekday(), 1, 4)
    }
        ;
    n.quarter = n.quarters = function (n) {
        return null == n ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (n - 1) + this.month() % 3)
    }
        ;
    n.month = ee;
    n.daysInMonth = function () {
        return vr(this.year(), this.month())
    }
        ;
    n.week = n.weeks = function (n) {
        var t = this.localeData().week(this);
        return null == n ? t : this.add(7 * (n - t), "d")
    }
        ;
    n.isoWeek = n.isoWeeks = function (n) {
        var t = bi(this, 1, 4).week;
        return null == n ? t : this.add(7 * (n - t), "d")
    }
        ;
    n.weeksInYear = function () {
        var n = this.localeData()._week;
        return ti(this.year(), n.dow, n.doy)
    }
        ;
    n.isoWeeksInYear = function () {
        return ti(this.year(), 1, 4)
    }
        ;
    n.date = ff;
    n.day = n.days = function (n) {
        if (!this.isValid())
            return null != n ? this : NaN;
        var t, i, r = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
        return null != n ? (t = n,
            i = this.localeData(),
            n = "string" != typeof t ? t : isNaN(t) ? "number" == typeof (t = i.weekdaysParse(t)) ? t : null : parseInt(t, 10),
            this.add(n - r, "d")) : r
    }
        ;
    n.weekday = function (n) {
        if (!this.isValid())
            return null != n ? this : NaN;
        var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
        return null == n ? t : this.add(n - t, "d")
    }
        ;
    n.isoWeekday = function (n) {
        var i, t, r;
        return this.isValid() ? null != n ? (i = (t = n,
            r = this.localeData(),
            "string" == typeof t ? r.weekdaysParse(t) % 7 || 7 : isNaN(t) ? null : t),
            this.day(this.day() % 7 ? i : i - 7)) : this.day() || 7 : null != n ? this : NaN
    }
        ;
    n.dayOfYear = function (n) {
        var t = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
        return null == n ? t : this.add(n - t, "d")
    }
        ;
    n.hour = n.hours = ps;
    n.minute = n.minutes = bo;
    n.second = n.seconds = ko;
    n.millisecond = n.milliseconds = go;
    n.utcOffset = function (n, i, r) {
        var u, f = this._offset || 0;
        if (!this.isValid())
            return null != n ? this : NaN;
        if (null != n) {
            if ("string" == typeof n) {
                if (null === (n = gu(hr, n)))
                    return this
            } else
                Math.abs(n) < 16 && !r && (n *= 60);
            return !this._isUTC && i && (u = tf(this)),
                this._offset = n,
                this._isUTC = !0,
                null != u && this.add(u, "m"),
                f !== n && (!i || this._changeInProgress ? lo(this, ut(n - f, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0,
                    t.updateOffset(this, !0),
                    this._changeInProgress = null)),
                this
        }
        return this._isUTC ? f : tf(this)
    }
        ;
    n.utc = function (n) {
        return this.utcOffset(0, n)
    }
        ;
    n.local = function (n) {
        return this._isUTC && (this.utcOffset(0, n),
            this._isUTC = !1,
            n && this.subtract(tf(this), "m")),
            this
    }
        ;
    n.parseZone = function () {
        if (null != this._tzm)
            this.utcOffset(this._tzm, !1, !0);
        else if ("string" == typeof this._i) {
            var n = gu(fs, this._i);
            null != n ? this.utcOffset(n) : this.utcOffset(0, !0)
        }
        return this
    }
        ;
    n.hasAlignedHourOffset = function (n) {
        return !!this.isValid() && (n = n ? c(n).utcOffset() : 0,
            (this.utcOffset() - n) % 60 == 0)
    }
        ;
    n.isDST = function () {
        return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
    }
        ;
    n.isLocal = function () {
        return !!this.isValid() && !this._isUTC
    }
        ;
    n.isUtcOffset = function () {
        return !!this.isValid() && this._isUTC
    }
        ;
    n.isUtc = eo;
    n.isUTC = eo;
    n.zoneAbbr = function () {
        return this._isUTC ? "UTC" : ""
    }
        ;
    n.zoneName = function () {
        return this._isUTC ? "Coordinated Universal Time" : ""
    }
        ;
    n.dates = g("dates accessor is deprecated. Use date instead.", ff);
    n.months = g("months accessor is deprecated. Use month instead", ee);
    n.years = g("years accessor is deprecated. Use year instead", cu);
    n.zone = g("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", function (n, t) {
        return null != n ? ("string" != typeof n && (n = -n),
            this.utcOffset(n, t),
            this) : -this.utcOffset()
    });
    n.isDSTShifted = g("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", function () {
        var n, t;
        return p(this._isDSTShifted) ? (n = {},
            (tu(n, this),
                (n = ge(n))._a) ? (t = n._isUTC ? ft(n._a) : c(n._a),
                    this._isDSTShifted = this.isValid() && 0 < af(n._a, t.toArray())) : this._isDSTShifted = !1,
            this._isDSTShifted) : this._isDSTShifted
    });
    o = ru.prototype;
    o.calendar = function (n, t, i) {
        var r = this._calendar[n] || this._calendar.sameElse;
        return et(r) ? r.call(t, i) : r
    }
        ;
    o.longDateFormat = function (n) {
        var t = this._longDateFormat[n]
            , i = this._longDateFormat[n.toUpperCase()];
        return t || !i ? t : (this._longDateFormat[n] = i.replace(/MMMM|MM|DD|dddd/g, function (n) {
            return n.slice(1)
        }),
            this._longDateFormat[n])
    }
        ;
    o.invalidDate = function () {
        return this._invalidDate
    }
        ;
    o.ordinal = function (n) {
        return this._ordinal.replace("%d", n)
    }
        ;
    o.preparse = ns;
    o.postformat = ns;
    o.relativeTime = function (n, t, i, r) {
        var u = this._relativeTime[i];
        return et(u) ? u(n, t, i, r) : u.replace(/%d/i, n)
    }
        ;
    o.pastFuture = function (n, t) {
        var i = this._relativeTime[0 < n ? "future" : "past"];
        return et(i) ? i(t) : i.replace(/%s/i, t)
    }
        ;
    o.set = function (n) {
        var t;
        for (var i in n)
            et(t = n[i]) ? this[i] = t : this["_" + i] = t;
        this._config = n;
        this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source)
    }
        ;
    o.months = function (n, t) {
        return n ? tt(this._months) ? this._months[n.month()] : this._months[(this._months.isFormat || re).test(t) ? "format" : "standalone"][n.month()] : tt(this._months) ? this._months : this._months.standalone
    }
        ;
    o.monthsShort = function (n, t) {
        return n ? tt(this._monthsShort) ? this._monthsShort[n.month()] : this._monthsShort[re.test(t) ? "format" : "standalone"][n.month()] : tt(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone
    }
        ;
    o.monthsParse = function (n, t, i) {
        var r, u, f;
        if (this._monthsParseExact)
            return function (n, t, i) {
                var u, r, e, f = n.toLocaleLowerCase();
                if (!this._monthsParse)
                    for (this._monthsParse = [],
                        this._longMonthsParse = [],
                        this._shortMonthsParse = [],
                        u = 0; u < 12; ++u)
                        e = ft([2e3, u]),
                            this._shortMonthsParse[u] = this.monthsShort(e, "").toLocaleLowerCase(),
                            this._longMonthsParse[u] = this.months(e, "").toLocaleLowerCase();
                return i ? "MMM" === t ? -1 !== (r = a.call(this._shortMonthsParse, f)) ? r : null : -1 !== (r = a.call(this._longMonthsParse, f)) ? r : null : "MMM" === t ? -1 !== (r = a.call(this._shortMonthsParse, f)) ? r : -1 !== (r = a.call(this._longMonthsParse, f)) ? r : null : -1 !== (r = a.call(this._longMonthsParse, f)) ? r : -1 !== (r = a.call(this._shortMonthsParse, f)) ? r : null
            }
                .call(this, n, t, i);
        for (this._monthsParse || (this._monthsParse = [],
            this._longMonthsParse = [],
            this._shortMonthsParse = []),
            r = 0; r < 12; r++)
            if ((u = ft([2e3, r]),
                i && !this._longMonthsParse[r] && (this._longMonthsParse[r] = new RegExp("^" + this.months(u, "").replace(".", "") + "$", "i"),
                    this._shortMonthsParse[r] = new RegExp("^" + this.monthsShort(u, "").replace(".", "") + "$", "i")),
                i || this._monthsParse[r] || (f = "^" + this.months(u, "") + "|^" + this.monthsShort(u, ""),
                    this._monthsParse[r] = new RegExp(f.replace(".", ""), "i")),
                i && "MMMM" === t && this._longMonthsParse[r].test(n)) || i && "MMM" === t && this._shortMonthsParse[r].test(n) || !i && this._monthsParse[r].test(n))
                return r
    }
        ;
    o.monthsRegex = function (n) {
        return this._monthsParseExact ? (l(this, "_monthsRegex") || he.call(this),
            n ? this._monthsStrictRegex : this._monthsRegex) : (l(this, "_monthsRegex") || (this._monthsRegex = se),
                this._monthsStrictRegex && n ? this._monthsStrictRegex : this._monthsRegex)
    }
        ;
    o.monthsShortRegex = function (n) {
        return this._monthsParseExact ? (l(this, "_monthsRegex") || he.call(this),
            n ? this._monthsShortStrictRegex : this._monthsShortRegex) : (l(this, "_monthsShortRegex") || (this._monthsShortRegex = oe),
                this._monthsShortStrictRegex && n ? this._monthsShortStrictRegex : this._monthsShortRegex)
    }
        ;
    o.week = function (n) {
        return bi(n, this._week.dow, this._week.doy).week
    }
        ;
    o.firstDayOfYear = function () {
        return this._week.doy
    }
        ;
    o.firstDayOfWeek = function () {
        return this._week.dow
    }
        ;
    o.weekdays = function (n, t) {
        return n ? tt(this._weekdays) ? this._weekdays[n.day()] : this._weekdays[this._weekdays.isFormat.test(t) ? "format" : "standalone"][n.day()] : tt(this._weekdays) ? this._weekdays : this._weekdays.standalone
    }
        ;
    o.weekdaysMin = function (n) {
        return n ? this._weekdaysMin[n.day()] : this._weekdaysMin
    }
        ;
    o.weekdaysShort = function (n) {
        return n ? this._weekdaysShort[n.day()] : this._weekdaysShort
    }
        ;
    o.weekdaysParse = function (n, t, i) {
        var r, u, f;
        if (this._weekdaysParseExact)
            return function (n, t, i) {
                var f, r, e, u = n.toLocaleLowerCase();
                if (!this._weekdaysParse)
                    for (this._weekdaysParse = [],
                        this._shortWeekdaysParse = [],
                        this._minWeekdaysParse = [],
                        f = 0; f < 7; ++f)
                        e = ft([2e3, 1]).day(f),
                            this._minWeekdaysParse[f] = this.weekdaysMin(e, "").toLocaleLowerCase(),
                            this._shortWeekdaysParse[f] = this.weekdaysShort(e, "").toLocaleLowerCase(),
                            this._weekdaysParse[f] = this.weekdays(e, "").toLocaleLowerCase();
                return i ? "dddd" === t ? -1 !== (r = a.call(this._weekdaysParse, u)) ? r : null : "ddd" === t ? -1 !== (r = a.call(this._shortWeekdaysParse, u)) ? r : null : -1 !== (r = a.call(this._minWeekdaysParse, u)) ? r : null : "dddd" === t ? -1 !== (r = a.call(this._weekdaysParse, u)) ? r : -1 !== (r = a.call(this._shortWeekdaysParse, u)) ? r : -1 !== (r = a.call(this._minWeekdaysParse, u)) ? r : null : "ddd" === t ? -1 !== (r = a.call(this._shortWeekdaysParse, u)) ? r : -1 !== (r = a.call(this._weekdaysParse, u)) ? r : -1 !== (r = a.call(this._minWeekdaysParse, u)) ? r : null : -1 !== (r = a.call(this._minWeekdaysParse, u)) ? r : -1 !== (r = a.call(this._weekdaysParse, u)) ? r : -1 !== (r = a.call(this._shortWeekdaysParse, u)) ? r : null
            }
                .call(this, n, t, i);
        for (this._weekdaysParse || (this._weekdaysParse = [],
            this._minWeekdaysParse = [],
            this._shortWeekdaysParse = [],
            this._fullWeekdaysParse = []),
            r = 0; r < 7; r++)
            if ((u = ft([2e3, 1]).day(r),
                i && !this._fullWeekdaysParse[r] && (this._fullWeekdaysParse[r] = new RegExp("^" + this.weekdays(u, "").replace(".", "\\.?") + "$", "i"),
                    this._shortWeekdaysParse[r] = new RegExp("^" + this.weekdaysShort(u, "").replace(".", "\\.?") + "$", "i"),
                    this._minWeekdaysParse[r] = new RegExp("^" + this.weekdaysMin(u, "").replace(".", "\\.?") + "$", "i")),
                this._weekdaysParse[r] || (f = "^" + this.weekdays(u, "") + "|^" + this.weekdaysShort(u, "") + "|^" + this.weekdaysMin(u, ""),
                    this._weekdaysParse[r] = new RegExp(f.replace(".", ""), "i")),
                i && "dddd" === t && this._fullWeekdaysParse[r].test(n)) || i && "ddd" === t && this._shortWeekdaysParse[r].test(n) || i && "dd" === t && this._minWeekdaysParse[r].test(n) || !i && this._weekdaysParse[r].test(n))
                return r
    }
        ;
    o.weekdaysRegex = function (n) {
        return this._weekdaysParseExact ? (l(this, "_weekdaysRegex") || lu.call(this),
            n ? this._weekdaysStrictRegex : this._weekdaysRegex) : (l(this, "_weekdaysRegex") || (this._weekdaysRegex = as),
                this._weekdaysStrictRegex && n ? this._weekdaysStrictRegex : this._weekdaysRegex)
    }
        ;
    o.weekdaysShortRegex = function (n) {
        return this._weekdaysParseExact ? (l(this, "_weekdaysRegex") || lu.call(this),
            n ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (l(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = vs),
                this._weekdaysShortStrictRegex && n ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
    }
        ;
    o.weekdaysMinRegex = function (n) {
        return this._weekdaysParseExact ? (l(this, "_weekdaysRegex") || lu.call(this),
            n ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (l(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = ys),
                this._weekdaysMinStrictRegex && n ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
    }
        ;
    o.isPM = function (n) {
        return "p" === (n + "").toLowerCase().charAt(0)
    }
        ;
    o.meridiem = function (n, t, i) {
        return 11 < n ? i ? "pm" : "PM" : i ? "am" : "AM"
    }
        ;
    oi("en", {
        dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal: function (n) {
            var t = n % 10;
            return n + (1 === f(n % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
        }
    });
    t.lang = g("moment.lang is deprecated. Use moment.locale instead.", oi);
    t.langData = g("moment.langData is deprecated. Use moment.localeData instead.", pt);
    st = Math.abs;
    var th = bt("ms")
        , ih = bt("s")
        , rh = bt("m")
        , uh = bt("h")
        , fh = bt("d")
        , eh = bt("w")
        , oh = bt("M")
        , sh = bt("y");
    var hh = ri("milliseconds")
        , ch = ri("seconds")
        , lh = ri("minutes")
        , ah = ri("hours")
        , vh = ri("days")
        , yh = ri("months")
        , ph = ri("years")
        , kt = Math.round
        , ht = {
            ss: 44,
            s: 45,
            m: 45,
            h: 22,
            d: 26,
            M: 11
        }
        , sf = Math.abs;
    return e = br.prototype,
        e.isValid = function () {
            return this._isValid
        }
        ,
        e.abs = function () {
            var n = this._data;
            return this._milliseconds = st(this._milliseconds),
                this._days = st(this._days),
                this._months = st(this._months),
                n.milliseconds = st(n.milliseconds),
                n.seconds = st(n.seconds),
                n.minutes = st(n.minutes),
                n.hours = st(n.hours),
                n.months = st(n.months),
                n.years = st(n.years),
                this
        }
        ,
        e.add = function (n, t) {
            return is(this, n, t, 1)
        }
        ,
        e.subtract = function (n, t) {
            return is(this, n, t, -1)
        }
        ,
        e.as = function (n) {
            if (!this.isValid())
                return NaN;
            var t, r, i = this._milliseconds;
            if ("month" === (n = nt(n)) || "year" === n)
                return t = this._days + i / 864e5,
                    r = this._months + us(t),
                    "month" === n ? r : r / 12;
            switch (t = this._days + Math.round(of(this._months)),
            n) {
                case "week":
                    return t / 7 + i / 6048e5;
                case "day":
                    return t + i / 864e5;
                case "hour":
                    return 24 * t + i / 36e5;
                case "minute":
                    return 1440 * t + i / 6e4;
                case "second":
                    return 86400 * t + i / 1e3;
                case "millisecond":
                    return Math.floor(864e5 * t) + i;
                default:
                    throw new Error("Unknown unit " + n);
            }
        }
        ,
        e.asMilliseconds = th,
        e.asSeconds = ih,
        e.asMinutes = rh,
        e.asHours = uh,
        e.asDays = fh,
        e.asWeeks = eh,
        e.asMonths = oh,
        e.asYears = sh,
        e.valueOf = function () {
            return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * f(this._months / 12) : NaN
        }
        ,
        e._bubble = function () {
            var u, f, e, o, s, r = this._milliseconds, t = this._days, n = this._months, i = this._data;
            return 0 <= r && 0 <= t && 0 <= n || r <= 0 && t <= 0 && n <= 0 || (r += 864e5 * rs(of(n) + t),
                n = t = 0),
                i.milliseconds = r % 1e3,
                u = d(r / 1e3),
                i.seconds = u % 60,
                f = d(u / 60),
                i.minutes = f % 60,
                e = d(f / 60),
                i.hours = e % 24,
                n += s = d(us(t += d(e / 24))),
                t -= rs(of(s)),
                o = d(n / 12),
                n %= 12,
                i.days = t,
                i.months = n,
                i.years = o,
                this
        }
        ,
        e.clone = function () {
            return ut(this)
        }
        ,
        e.get = function (n) {
            return n = nt(n),
                this.isValid() ? this[n + "s"]() : NaN
        }
        ,
        e.milliseconds = hh,
        e.seconds = ch,
        e.minutes = lh,
        e.hours = ah,
        e.days = vh,
        e.weeks = function () {
            return d(this.days() / 7)
        }
        ,
        e.months = yh,
        e.years = ph,
        e.humanize = function (n) {
            if (!this.isValid())
                return this.localeData().invalidDate();
            var l, a, v, t, i, r, u, f, e, s, o, h = this.localeData(), c = (a = !n,
                v = h,
                t = ut(l = this).abs(),
                i = kt(t.as("s")),
                r = kt(t.as("m")),
                u = kt(t.as("h")),
                f = kt(t.as("d")),
                e = kt(t.as("M")),
                s = kt(t.as("y")),
                (o = i <= ht.ss && ["s", i] || i < ht.s && ["ss", i] || r <= 1 && ["m"] || r < ht.m && ["mm", r] || u <= 1 && ["h"] || u < ht.h && ["hh", u] || f <= 1 && ["d"] || f < ht.d && ["dd", f] || e <= 1 && ["M"] || e < ht.M && ["MM", e] || s <= 1 && ["y"] || ["yy", s])[2] = a,
                o[3] = 0 < +l,
                o[4] = v,
                function (n, t, i, r, u) {
                    return u.relativeTime(t || 1, !!i, n, r)
                }
                    .apply(null, o));
            return n && (c = h.pastFuture(+this, c)),
                h.postformat(c)
        }
        ,
        e.toISOString = gr,
        e.toString = gr,
        e.toJSON = gr,
        e.locale = yo,
        e.localeData = po,
        e.toIsoString = g("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", gr),
        e.lang = uf,
        r("X", 0, 0, "unix"),
        r("x", 0, 0, "valueOf"),
        i("x", sr),
        i("X", /[+-]?\d+(\.\d{1,3})?/),
        h("X", function (n, t, i) {
            i._d = new Date(1e3 * parseFloat(n, 10))
        }),
        h("x", function (n, t, i) {
            i._d = new Date(f(n))
        }),
        t.version = "2.22.2",
        hf = c,
        t.fn = n,
        t.min = function () {
            return ro("isBefore", [].slice.call(arguments, 0))
        }
        ,
        t.max = function () {
            return ro("isAfter", [].slice.call(arguments, 0))
        }
        ,
        t.now = function () {
            return Date.now ? Date.now() : +new Date
        }
        ,
        t.utc = ft,
        t.unix = function (n) {
            return c(1e3 * n)
        }
        ,
        t.months = function (n, t) {
            return ts(n, t, "months")
        }
        ,
        t.isDate = gi,
        t.locale = oi,
        t.invalid = nr,
        t.duration = ut,
        t.isMoment = yt,
        t.weekdays = function (n, t, i) {
            return ef(n, t, i, "weekdays")
        }
        ,
        t.parseZone = function () {
            return c.apply(null, arguments).parseZone()
        }
        ,
        t.localeData = pt,
        t.isDuration = ku,
        t.monthsShort = function (n, t) {
            return ts(n, t, "monthsShort")
        }
        ,
        t.weekdaysMin = function (n, t, i) {
            return ef(n, t, i, "weekdaysMin")
        }
        ,
        t.defineLocale = vu,
        t.updateLocale = function (n, t) {
            if (null != t) {
                var i, r, u = ye;
                null != (r = pr(n)) && (u = r._config);
                (i = new ru(t = wf(u, t))).parentLocale = y[n];
                y[n] = i;
                oi(n)
            } else
                null != y[n] && (null != y[n].parentLocale ? y[n] = y[n].parentLocale : null != y[n] && delete y[n]);
            return y[n]
        }
        ,
        t.locales = function () {
            return yf(y)
        }
        ,
        t.weekdaysShort = function (n, t, i) {
            return ef(n, t, i, "weekdaysShort")
        }
        ,
        t.normalizeUnits = nt,
        t.relativeTimeRounding = function (n) {
            return void 0 === n ? kt : "function" == typeof n && (kt = n,
                !0)
        }
        ,
        t.relativeTimeThreshold = function (n, t) {
            return void 0 !== ht[n] && (void 0 === t ? ht[n] : (ht[n] = t,
                "s" === n && (ht.ss = t - 1),
                !0))
        }
        ,
        t.calendarFormat = function (n, t) {
            var i = n.diff(t, "days", !0);
            return i < -6 ? "sameElse" : i < -1 ? "lastWeek" : i < 0 ? "lastDay" : i < 1 ? "sameDay" : i < 2 ? "nextDay" : i < 7 ? "nextWeek" : "sameElse"
        }
        ,
        t.prototype = n,
        t.HTML5_FMT = {
            DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
            DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
            DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
            DATE: "YYYY-MM-DD",
            TIME: "HH:mm",
            TIME_SECONDS: "HH:mm:ss",
            TIME_MS: "HH:mm:ss.SSS",
            WEEK: "YYYY-[W]WW",
            MONTH: "YYYY-MM"
        },
        t
});
!function (n) {
    "function" == typeof define && define.amd ? define(["jquery"], n) : n("object" == typeof exports ? require("jquery") : jQuery)
}(function (n, t) {
    function f() {
        return new Date(Date.UTC.apply(Date, arguments))
    }
    function s() {
        var n = new Date;
        return f(n.getFullYear(), n.getMonth(), n.getDate())
    }
    function l(n, t) {
        return n.getUTCFullYear() === t.getUTCFullYear() && n.getUTCMonth() === t.getUTCMonth() && n.getUTCDate() === t.getUTCDate()
    }
    function h(i, r) {
        return function () {
            return r !== t && n.fn.datepicker.deprecated(r),
                this[i].apply(this, arguments)
        }
    }
    function p(n) {
        return n && !isNaN(n.getTime())
    }
    function w(t, i) {
        function o(n, t) {
            return t.toLowerCase()
        }
        var u, f = n(t).data(), e = {}, s = new RegExp("^" + i.toLowerCase() + "([A-Z])"), r;
        i = new RegExp("^" + i.toLowerCase());
        for (r in f)
            i.test(r) && (u = r.replace(s, o),
                e[u] = f[r]);
        return e
    }
    function b(t) {
        var u = {}, i;
        if (r[t] || (t = t.split("-")[0],
            r[t]))
            return i = r[t],
                n.each(y, function (n, t) {
                    t in i && (u[t] = i[t])
                }),
                u
    }
    var a = function () {
        var t = {
            get: function (n) {
                return this.slice(n)[0]
            },
            contains: function (n) {
                for (var i = n && n.valueOf(), t = 0, r = this.length; t < r; t++)
                    if (0 <= this[t].valueOf() - i && this[t].valueOf() - i < 864e5)
                        return t;
                return -1
            },
            remove: function (n) {
                this.splice(n, 1)
            },
            replace: function (t) {
                t && (n.isArray(t) || (t = [t]),
                    this.clear(),
                    this.push.apply(this, t))
            },
            clear: function () {
                this.length = 0
            },
            copy: function () {
                var n = new a;
                return n.replace(this),
                    n
            }
        };
        return function () {
            var i = [];
            return i.push.apply(i, arguments),
                n.extend(i, t),
                i
        }
    }(), u = function (t, r) {
        n.data(t, "datepicker", this);
        this._process_options(r);
        this.dates = new a;
        this.viewDate = this.o.defaultViewDate;
        this.focusDate = null;
        this.element = n(t);
        this.isInput = this.element.is("input");
        this.inputField = this.isInput ? this.element : this.element.find("input");
        this.component = !!this.element.hasClass("date") && this.element.find(".add-on, .input-group-addon, .btn");
        this.component && 0 === this.component.length && (this.component = !1);
        this.isInline = !this.component && this.element.is("div");
        this.picker = n(i.template);
        this._check_template(this.o.templates.leftArrow) && this.picker.find(".prev").html(this.o.templates.leftArrow);
        this._check_template(this.o.templates.rightArrow) && this.picker.find(".next").html(this.o.templates.rightArrow);
        this._buildEvents();
        this._attachEvents();
        this.isInline ? this.picker.addClass("datepicker-inline").appendTo(this.element) : this.picker.addClass("datepicker-dropdown dropdown-menu");
        this.o.rtl && this.picker.addClass("datepicker-rtl");
        this.o.calendarWeeks && this.picker.find(".datepicker-days .datepicker-switch, thead .datepicker-title, tfoot .today, tfoot .clear").attr("colspan", function (n, t) {
            return Number(t) + 1
        });
        this._process_options({
            startDate: this._o.startDate,
            endDate: this._o.endDate,
            daysOfWeekDisabled: this.o.daysOfWeekDisabled,
            daysOfWeekHighlighted: this.o.daysOfWeekHighlighted,
            datesDisabled: this.o.datesDisabled
        });
        this._allow_update = !1;
        this.setViewMode(this.o.startView);
        this._allow_update = !0;
        this.fillDow();
        this.fillMonths();
        this.update();
        this.isInline && this.show()
    }, c, v, o, e, y, r, i;
    u.prototype = {
        constructor: u,
        _resolveViewName: function (t) {
            return n.each(i.viewModes, function (i, r) {
                if (t === i || n.inArray(t, r.names) !== -1)
                    return t = i,
                        !1
            }),
                t
        },
        _resolveDaysOfWeek: function (t) {
            return n.isArray(t) || (t = t.split(/[,\s]*/)),
                n.map(t, Number)
        },
        _check_template: function (i) {
            try {
                if (i === t || "" === i)
                    return !1;
                if ((i.match(/[<>]/g) || []).length <= 0)
                    return !0;
                var r = n(i);
                return r.length > 0
            } catch (n) {
                return !1
            }
        },
        _process_options: function (t) {
            var u, h, l, o, c;
            if (this._o = n.extend({}, this._o, t),
                u = this.o = n.extend({}, this._o),
                h = u.language,
                r[h] || (h = h.split("-")[0],
                    r[h] || (h = e.language)),
                u.language = h,
                u.startView = this._resolveViewName(u.startView),
                u.minViewMode = this._resolveViewName(u.minViewMode),
                u.maxViewMode = this._resolveViewName(u.maxViewMode),
                u.startView = Math.max(this.o.minViewMode, Math.min(this.o.maxViewMode, u.startView)),
                u.multidate !== !0 && (u.multidate = Number(u.multidate) || !1,
                    u.multidate !== !1 && (u.multidate = Math.max(0, u.multidate))),
                u.multidateSeparator = String(u.multidateSeparator),
                u.weekStart %= 7,
                u.weekEnd = (u.weekStart + 6) % 7,
                l = i.parseFormat(u.format),
                u.startDate !== -(1 / 0) && (u.startDate = u.startDate ? u.startDate instanceof Date ? this._local_to_utc(this._zero_time(u.startDate)) : i.parseDate(u.startDate, l, u.language, u.assumeNearbyYear) : -(1 / 0)),
                u.endDate !== 1 / 0 && (u.endDate = u.endDate ? u.endDate instanceof Date ? this._local_to_utc(this._zero_time(u.endDate)) : i.parseDate(u.endDate, l, u.language, u.assumeNearbyYear) : 1 / 0),
                u.daysOfWeekDisabled = this._resolveDaysOfWeek(u.daysOfWeekDisabled || []),
                u.daysOfWeekHighlighted = this._resolveDaysOfWeek(u.daysOfWeekHighlighted || []),
                u.datesDisabled = u.datesDisabled || [],
                n.isArray(u.datesDisabled) || (u.datesDisabled = u.datesDisabled.split(",")),
                u.datesDisabled = n.map(u.datesDisabled, function (n) {
                    return i.parseDate(n, l, u.language, u.assumeNearbyYear)
                }),
                o = String(u.orientation).toLowerCase().split(/\s+/g),
                c = u.orientation.toLowerCase(),
                o = n.grep(o, function (n) {
                    return /^auto|left|right|top|bottom$/.test(n)
                }),
                u.orientation = {
                    x: "auto",
                    y: "auto"
                },
                c && "auto" !== c)
                if (1 === o.length)
                    switch (o[0]) {
                        case "top":
                        case "bottom":
                            u.orientation.y = o[0];
                            break;
                        case "left":
                        case "right":
                            u.orientation.x = o[0]
                    }
                else
                    c = n.grep(o, function (n) {
                        return /^left|right$/.test(n)
                    }),
                        u.orientation.x = c[0] || "auto",
                        c = n.grep(o, function (n) {
                            return /^top|bottom$/.test(n)
                        }),
                        u.orientation.y = c[0] || "auto";
            if (u.defaultViewDate instanceof Date || "string" == typeof u.defaultViewDate)
                u.defaultViewDate = i.parseDate(u.defaultViewDate, l, u.language, u.assumeNearbyYear);
            else if (u.defaultViewDate) {
                var a = u.defaultViewDate.year || (new Date).getFullYear()
                    , v = u.defaultViewDate.month || 0
                    , y = u.defaultViewDate.day || 1;
                u.defaultViewDate = f(a, v, y)
            } else
                u.defaultViewDate = s()
        },
        _events: [],
        _secondaryEvents: [],
        _applyEvents: function (n) {
            for (var f, r, u, i = 0; i < n.length; i++)
                f = n[i][0],
                    2 === n[i].length ? (r = t,
                        u = n[i][1]) : 3 === n[i].length && (r = n[i][1],
                            u = n[i][2]),
                    f.on(u, r)
        },
        _unapplyEvents: function (n) {
            for (var f, r, u, i = 0; i < n.length; i++)
                f = n[i][0],
                    2 === n[i].length ? (u = t,
                        r = n[i][1]) : 3 === n[i].length && (u = n[i][1],
                            r = n[i][2]),
                    f.off(r, u)
        },
        _buildEvents: function () {
            var t = {
                keyup: n.proxy(function (t) {
                    n.inArray(t.keyCode, [27, 37, 39, 38, 40, 32, 13, 9]) === -1 && this.update()
                }, this),
                keydown: n.proxy(this.keydown, this),
                paste: n.proxy(this.paste, this)
            };
            this.o.showOnFocus === !0 && (t.focus = n.proxy(this.show, this));
            this._events = this.isInput ? [[this.element, t]] : this.component && this.inputField.length ? [[this.inputField, t], [this.component, {
                click: n.proxy(this.show, this)
            }]] : [[this.element, {
                click: n.proxy(this.show, this),
                keydown: n.proxy(this.keydown, this)
            }]];
            this._events.push([this.element, "*", {
                blur: n.proxy(function (n) {
                    this._focused_from = n.target
                }, this)
            }], [this.element, {
                blur: n.proxy(function (n) {
                    this._focused_from = n.target
                }, this)
            }]);
            this.o.immediateUpdates && this._events.push([this.element, {
                "changeYear changeMonth": n.proxy(function (n) {
                    this.update(n.date)
                }, this)
            }]);
            this._secondaryEvents = [[this.picker, {
                click: n.proxy(this.click, this)
            }], [this.picker, ".prev, .next", {
                click: n.proxy(this.navArrowsClick, this)
            }], [this.picker, ".day:not(.disabled)", {
                click: n.proxy(this.dayCellClick, this)
            }], [n(window), {
                resize: n.proxy(this.place, this)
            }], [n(document), {
                "mousedown touchstart": n.proxy(function (n) {
                    this.element.is(n.target) || this.element.find(n.target).length || this.picker.is(n.target) || this.picker.find(n.target).length || this.isInline || this.hide()
                }, this)
            }]]
        },
        _attachEvents: function () {
            this._detachEvents();
            this._applyEvents(this._events)
        },
        _detachEvents: function () {
            this._unapplyEvents(this._events)
        },
        _attachSecondaryEvents: function () {
            this._detachSecondaryEvents();
            this._applyEvents(this._secondaryEvents)
        },
        _detachSecondaryEvents: function () {
            this._unapplyEvents(this._secondaryEvents)
        },
        _trigger: function (t, r) {
            var u = r || this.dates.get(-1)
                , f = this._utc_to_local(u);
            this.element.trigger({
                type: t,
                date: f,
                viewMode: this.viewMode,
                dates: n.map(this.dates, this._utc_to_local),
                format: n.proxy(function (n, t) {
                    0 === arguments.length ? (n = this.dates.length - 1,
                        t = this.o.format) : "string" == typeof n && (t = n,
                            n = this.dates.length - 1);
                    t = t || this.o.format;
                    var r = this.dates.get(n);
                    return i.formatDate(r, t, this.o.language)
                }, this)
            })
        },
        show: function () {
            if (!(this.inputField.prop("disabled") || this.inputField.prop("readonly") && this.o.enableOnReadonly === !1))
                return this.isInline || this.picker.appendTo(this.o.container),
                    this.place(),
                    this.picker.show(),
                    this._attachSecondaryEvents(),
                    this._trigger("show"),
                    (window.navigator.msMaxTouchPoints || "ontouchstart" in document) && this.o.disableTouchKeyboard && n(this.element).blur(),
                    this
        },
        hide: function () {
            return this.isInline || !this.picker.is(":visible") ? this : (this.focusDate = null,
                this.picker.hide().detach(),
                this._detachSecondaryEvents(),
                this.setViewMode(this.o.startView),
                this.o.forceParse && this.inputField.val() && this.setValue(),
                this._trigger("hide"),
                this)
        },
        destroy: function () {
            return this.hide(),
                this._detachEvents(),
                this._detachSecondaryEvents(),
                this.picker.remove(),
                delete this.element.data().datepicker,
                this.isInput || delete this.element.data().date,
                this
        },
        paste: function (t) {
            var i;
            if (t.originalEvent.clipboardData && t.originalEvent.clipboardData.types && n.inArray("text/plain", t.originalEvent.clipboardData.types) !== -1)
                i = t.originalEvent.clipboardData.getData("text/plain");
            else {
                if (!window.clipboardData)
                    return;
                i = window.clipboardData.getData("Text")
            }
            this.setDate(i);
            this.update();
            t.preventDefault()
        },
        _utc_to_local: function (n) {
            if (!n)
                return n;
            var t = new Date(n.getTime() + 6e4 * n.getTimezoneOffset());
            return t.getTimezoneOffset() !== n.getTimezoneOffset() && (t = new Date(n.getTime() + 6e4 * t.getTimezoneOffset())),
                t
        },
        _local_to_utc: function (n) {
            return n && new Date(n.getTime() - 6e4 * n.getTimezoneOffset())
        },
        _zero_time: function (n) {
            return n && new Date(n.getFullYear(), n.getMonth(), n.getDate())
        },
        _zero_utc_time: function (n) {
            return n && f(n.getUTCFullYear(), n.getUTCMonth(), n.getUTCDate())
        },
        getDates: function () {
            return n.map(this.dates, this._utc_to_local)
        },
        getUTCDates: function () {
            return n.map(this.dates, function (n) {
                return new Date(n)
            })
        },
        getDate: function () {
            return this._utc_to_local(this.getUTCDate())
        },
        getUTCDate: function () {
            var n = this.dates.get(-1);
            return n !== t ? new Date(n) : null
        },
        clearDates: function () {
            this.inputField.val("");
            this.update();
            this._trigger("changeDate");
            this.o.autoclose && this.hide()
        },
        setDates: function () {
            var t = n.isArray(arguments[0]) ? arguments[0] : arguments;
            return this.update.apply(this, t),
                this._trigger("changeDate"),
                this.setValue(),
                this
        },
        setUTCDates: function () {
            var t = n.isArray(arguments[0]) ? arguments[0] : arguments;
            return this.setDates.apply(this, n.map(t, this._utc_to_local)),
                this
        },
        setDate: h("setDates"),
        setUTCDate: h("setUTCDates"),
        remove: h("destroy", "Method `remove` is deprecated and will be removed in version 2.0. Use `destroy` instead"),
        setValue: function () {
            var n = this.getFormattedDate();
            return this.inputField.val(n),
                this
        },
        getFormattedDate: function (r) {
            r === t && (r = this.o.format);
            var u = this.o.language;
            return n.map(this.dates, function (n) {
                return i.formatDate(n, r, u)
            }).join(this.o.multidateSeparator)
        },
        getStartDate: function () {
            return this.o.startDate
        },
        setStartDate: function (n) {
            return this._process_options({
                startDate: n
            }),
                this.update(),
                this.updateNavArrows(),
                this
        },
        getEndDate: function () {
            return this.o.endDate
        },
        setEndDate: function (n) {
            return this._process_options({
                endDate: n
            }),
                this.update(),
                this.updateNavArrows(),
                this
        },
        setDaysOfWeekDisabled: function (n) {
            return this._process_options({
                daysOfWeekDisabled: n
            }),
                this.update(),
                this
        },
        setDaysOfWeekHighlighted: function (n) {
            return this._process_options({
                daysOfWeekHighlighted: n
            }),
                this.update(),
                this
        },
        setDatesDisabled: function (n) {
            return this._process_options({
                datesDisabled: n
            }),
                this.update(),
                this
        },
        place: function () {
            var y, r, p;
            if (this.isInline)
                return this;
            var f = this.picker.outerWidth()
                , s = this.picker.outerHeight()
                , e = n(this.o.container)
                , h = e.width()
                , c = "body" === this.o.container ? n(document).scrollTop() : e.scrollTop()
                , l = e.offset()
                , a = [0];
            this.element.parents().each(function () {
                var t = n(this).css("z-index");
                "auto" !== t && 0 !== Number(t) && a.push(Number(t))
            });
            var v = Math.max.apply(Math, a) + this.o.zIndexOffset
                , u = this.component ? this.component.parent().offset() : this.element.offset()
                , w = this.component ? this.component.outerHeight(!0) : this.element.outerHeight(!1)
                , o = this.component ? this.component.outerWidth(!0) : this.element.outerWidth(!1)
                , t = u.left - l.left
                , i = u.top - l.top;
            return "body" !== this.o.container && (i += c),
                this.picker.removeClass("datepicker-orient-top datepicker-orient-bottom datepicker-orient-right datepicker-orient-left"),
                "auto" !== this.o.orientation.x ? (this.picker.addClass("datepicker-orient-" + this.o.orientation.x),
                    "right" === this.o.orientation.x && (t -= f - o)) : u.left < 0 ? (this.picker.addClass("datepicker-orient-left"),
                        t -= u.left - 10) : t + f > h ? (this.picker.addClass("datepicker-orient-right"),
                            t += o - f) : this.o.rtl ? this.picker.addClass("datepicker-orient-right") : this.picker.addClass("datepicker-orient-left"),
                r = this.o.orientation.y,
                ("auto" === r && (y = -c + i - s,
                    r = y < 0 ? "bottom" : "top"),
                    this.picker.addClass("datepicker-orient-" + r),
                    "top" === r ? i -= s + parseInt(this.picker.css("padding-top")) : i += w,
                    this.o.rtl) ? (p = h - (t + o),
                        this.picker.css({
                            top: i,
                            right: p,
                            zIndex: v
                        })) : this.picker.css({
                            top: i,
                            left: t,
                            zIndex: v
                        }),
                this
        },
        _allow_update: !0,
        update: function () {
            if (!this._allow_update)
                return this;
            var u = this.dates.copy()
                , t = []
                , r = !1;
            return arguments.length ? (n.each(arguments, n.proxy(function (n, i) {
                i instanceof Date && (i = this._local_to_utc(i));
                t.push(i)
            }, this)),
                r = !0) : (t = this.isInput ? this.element.val() : this.element.data("date") || this.inputField.val(),
                    t = t && this.o.multidate ? t.split(this.o.multidateSeparator) : [t],
                    delete this.element.data().date),
                t = n.map(t, n.proxy(function (n) {
                    return i.parseDate(n, this.o.format, this.o.language, this.o.assumeNearbyYear)
                }, this)),
                t = n.grep(t, n.proxy(function (n) {
                    return !this.dateWithinRange(n) || !n
                }, this), !0),
                this.dates.replace(t),
                this.o.updateViewDate && (this.viewDate = this.dates.length ? new Date(this.dates.get(-1)) : this.viewDate < this.o.startDate ? new Date(this.o.startDate) : this.viewDate > this.o.endDate ? new Date(this.o.endDate) : this.o.defaultViewDate),
                r ? (this.setValue(),
                    this.element.change()) : this.dates.length && String(u) !== String(this.dates) && r && (this._trigger("changeDate"),
                        this.element.change()),
                !this.dates.length && u.length && (this._trigger("clearDate"),
                    this.element.change()),
                this.fill(),
                this
        },
        fillDow: function () {
            if (this.o.showWeekDays) {
                var i = this.o.weekStart
                    , t = "<tr>";
                for (this.o.calendarWeeks && (t += '<th class="cw">&#160;<\/th>'); i < this.o.weekStart + 7;)
                    t += '<th class="dow',
                        n.inArray(i, this.o.daysOfWeekDisabled) !== -1 && (t += " disabled"),
                        t += '">' + r[this.o.language].daysMin[i++ % 7] + "<\/th>";
                t += "<\/tr>";
                this.picker.find(".datepicker-days thead").append(t)
            }
        },
        fillMonths: function () {
            for (var t, i = this._utc_to_local(this.viewDate), u = "", n = 0; n < 12; n++)
                t = i && i.getMonth() === n ? " focused" : "",
                    u += '<span class="month' + t + '">' + r[this.o.language].monthsShort[n] + "<\/span>";
            this.picker.find(".datepicker-months td").html(u)
        },
        setRange: function (t) {
            t && t.length ? this.range = n.map(t, function (n) {
                return n.valueOf()
            }) : delete this.range;
            this.fill()
        },
        getClassNames: function (t) {
            var i = []
                , r = this.viewDate.getUTCFullYear()
                , u = this.viewDate.getUTCMonth()
                , f = s();
            return t.getUTCFullYear() < r || t.getUTCFullYear() === r && t.getUTCMonth() < u ? i.push("old") : (t.getUTCFullYear() > r || t.getUTCFullYear() === r && t.getUTCMonth() > u) && i.push("new"),
                this.focusDate && t.valueOf() === this.focusDate.valueOf() && i.push("focused"),
                this.o.todayHighlight && l(t, f) && i.push("today"),
                this.dates.contains(t) !== -1 && i.push("active"),
                this.dateWithinRange(t) || i.push("disabled"),
                this.dateIsDisabled(t) && i.push("disabled", "disabled-date"),
                n.inArray(t.getUTCDay(), this.o.daysOfWeekHighlighted) !== -1 && i.push("highlighted"),
                this.range && (t > this.range[0] && t < this.range[this.range.length - 1] && i.push("range"),
                    n.inArray(t.valueOf(), this.range) !== -1 && i.push("selected"),
                    t.valueOf() === this.range[0] && i.push("range-start"),
                    t.valueOf() === this.range[this.range.length - 1] && i.push("range-end")),
                i
        },
        _fill_yearsView: function (i, r, u, f, e, o, s) {
            for (var c, v, h, w = "", l = u / 10, b = this.picker.find(i), y = Math.floor(f / u) * u, p = y + 9 * l, k = Math.floor(this.viewDate.getFullYear() / l) * l, d = n.map(this.dates, function (n) {
                return Math.floor(n.getUTCFullYear() / l) * l
            }), a = y - l; a <= p + l; a += l)
                c = [r],
                    v = null,
                    a === y - l ? c.push("old") : a === p + l && c.push("new"),
                    n.inArray(a, d) !== -1 && c.push("active"),
                    (a < e || a > o) && c.push("disabled"),
                    a === k && c.push("focused"),
                    s !== n.noop && (h = s(new Date(a, 0, 1)),
                        h === t ? h = {} : "boolean" == typeof h ? h = {
                            enabled: h
                        } : "string" == typeof h && (h = {
                            classes: h
                        }),
                        h.enabled === !1 && c.push("disabled"),
                        h.classes && (c = c.concat(h.classes.split(/\s+/))),
                        h.tooltip && (v = h.tooltip)),
                    w += '<span class="' + c.join(" ") + '"' + (v ? ' title="' + v + '"' : "") + ">" + a + "<\/span>";
            b.find(".datepicker-switch").text(y + "-" + p);
            b.find("td").html(w)
        },
        fill: function () {
            var y, u, w = new Date(this.viewDate), o = w.getUTCFullYear(), d = w.getUTCMonth(), a = this.o.startDate !== -(1 / 0) ? this.o.startDate.getUTCFullYear() : -(1 / 0), ut = this.o.startDate !== -(1 / 0) ? this.o.startDate.getUTCMonth() : -(1 / 0), v = this.o.endDate !== 1 / 0 ? this.o.endDate.getUTCFullYear() : 1 / 0, ft = this.o.endDate !== 1 / 0 ? this.o.endDate.getUTCMonth() : 1 / 0, et = r[this.o.language].today || r.en.today || "", ot = r[this.o.language].clear || r.en.clear || "", st = r[this.o.language].titleFormat || r.en.titleFormat, e, g, h, p, s, c, k, it, l, rt;
            if (!isNaN(o) && !isNaN(d)) {
                for (this.picker.find(".datepicker-days .datepicker-switch").text(i.formatDate(w, st, this.o.language)),
                    this.picker.find("tfoot .today").text(et).css("display", this.o.todayBtn === !0 || "linked" === this.o.todayBtn ? "table-cell" : "none"),
                    this.picker.find("tfoot .clear").text(ot).css("display", this.o.clearBtn === !0 ? "table-cell" : "none"),
                    this.picker.find("thead .datepicker-title").text(this.o.title).css("display", "string" == typeof this.o.title && "" !== this.o.title ? "table-cell" : "none"),
                    this.updateNavArrows(),
                    this.fillMonths(),
                    e = f(o, d, 0),
                    g = e.getUTCDate(),
                    e.setUTCDate(g - (e.getUTCDay() - this.o.weekStart + 7) % 7),
                    h = new Date(e),
                    e.getUTCFullYear() < 100 && h.setUTCFullYear(e.getUTCFullYear()),
                    h.setUTCDate(h.getUTCDate() + 42),
                    h = h.valueOf(),
                    c = []; e.valueOf() < h;) {
                    if (p = e.getUTCDay(),
                        p === this.o.weekStart && (c.push("<tr>"),
                            this.o.calendarWeeks)) {
                        var nt = new Date(+e + (this.o.weekStart - p - 7) % 7 * 864e5)
                            , tt = new Date(Number(nt) + (11 - nt.getUTCDay()) % 7 * 864e5)
                            , b = new Date(Number(b = f(tt.getUTCFullYear(), 0, 1)) + (11 - b.getUTCDay()) % 7 * 864e5)
                            , ht = (tt - b) / 6048e5 + 1;
                        c.push('<td class="cw">' + ht + "<\/td>")
                    }
                    s = this.getClassNames(e);
                    s.push("day");
                    k = e.getUTCDate();
                    this.o.beforeShowDay !== n.noop && (u = this.o.beforeShowDay(this._utc_to_local(e)),
                        u === t ? u = {} : "boolean" == typeof u ? u = {
                            enabled: u
                        } : "string" == typeof u && (u = {
                            classes: u
                        }),
                        u.enabled === !1 && s.push("disabled"),
                        u.classes && (s = s.concat(u.classes.split(/\s+/))),
                        u.tooltip && (y = u.tooltip),
                        u.content && (k = u.content));
                    s = n.isFunction(n.uniqueSort) ? n.uniqueSort(s) : n.unique(s);
                    c.push('<td class="' + s.join(" ") + '"' + (y ? ' title="' + y + '"' : "") + ' data-date="' + e.getTime().toString() + '">' + k + "<\/td>");
                    y = null;
                    p === this.o.weekEnd && c.push("<\/tr>");
                    e.setUTCDate(e.getUTCDate() + 1)
                }
                this.picker.find(".datepicker-days tbody").html(c.join(""));
                it = r[this.o.language].monthsTitle || r.en.monthsTitle || "Months";
                l = this.picker.find(".datepicker-months").find(".datepicker-switch").text(this.o.maxViewMode < 2 ? it : o).end().find("tbody span").removeClass("active");
                (n.each(this.dates, function (n, t) {
                    t.getUTCFullYear() === o && l.eq(t.getUTCMonth()).addClass("active")
                }),
                    (o < a || o > v) && l.addClass("disabled"),
                    o === a && l.slice(0, ut).addClass("disabled"),
                    o === v && l.slice(ft + 1).addClass("disabled"),
                    this.o.beforeShowMonth !== n.noop) && (rt = this,
                        n.each(l, function (i, r) {
                            var f = new Date(o, i, 1)
                                , u = rt.o.beforeShowMonth(f);
                            u === t ? u = {} : "boolean" == typeof u ? u = {
                                enabled: u
                            } : "string" == typeof u && (u = {
                                classes: u
                            });
                            u.enabled !== !1 || n(r).hasClass("disabled") || n(r).addClass("disabled");
                            u.classes && n(r).addClass(u.classes);
                            u.tooltip && n(r).prop("title", u.tooltip)
                        }));
                this._fill_yearsView(".datepicker-years", "year", 10, o, a, v, this.o.beforeShowYear);
                this._fill_yearsView(".datepicker-decades", "decade", 100, o, a, v, this.o.beforeShowDecade);
                this._fill_yearsView(".datepicker-centuries", "century", 1e3, o, a, v, this.o.beforeShowCentury)
            }
        },
        updateNavArrows: function () {
            if (this._allow_update) {
                var i, r, u = new Date(this.viewDate), t = u.getUTCFullYear(), f = u.getUTCMonth(), e = this.o.startDate !== -(1 / 0) ? this.o.startDate.getUTCFullYear() : -(1 / 0), s = this.o.startDate !== -(1 / 0) ? this.o.startDate.getUTCMonth() : -(1 / 0), o = this.o.endDate !== 1 / 0 ? this.o.endDate.getUTCFullYear() : 1 / 0, h = this.o.endDate !== 1 / 0 ? this.o.endDate.getUTCMonth() : 1 / 0, n = 1;
                switch (this.viewMode) {
                    case 4:
                        n *= 10;
                    case 3:
                        n *= 10;
                    case 2:
                        n *= 10;
                    case 1:
                        i = Math.floor(t / n) * n < e;
                        r = Math.floor(t / n) * n + n > o;
                        break;
                    case 0:
                        i = t <= e && f < s;
                        r = t >= o && f > h
                }
                this.picker.find(".prev").toggleClass("disabled", i);
                this.picker.find(".next").toggleClass("disabled", r)
            }
        },
        click: function (t) {
            t.preventDefault();
            t.stopPropagation();
            var r, o, u, e;
            r = n(t.target);
            r.hasClass("datepicker-switch") && this.viewMode !== this.o.maxViewMode && this.setViewMode(this.viewMode + 1);
            r.hasClass("today") && !r.hasClass("day") && (this.setViewMode(0),
                this._setDate(s(), "linked" === this.o.todayBtn ? null : "view"));
            r.hasClass("clear") && this.clearDates();
            r.hasClass("disabled") || (r.hasClass("month") || r.hasClass("year") || r.hasClass("decade") || r.hasClass("century")) && (this.viewDate.setUTCDate(1),
                o = 1,
                1 === this.viewMode ? (e = r.parent().find("span").index(r),
                    u = this.viewDate.getUTCFullYear(),
                    this.viewDate.setUTCMonth(e)) : (e = 0,
                        u = Number(r.text()),
                        this.viewDate.setUTCFullYear(u)),
                this._trigger(i.viewModes[this.viewMode - 1].e, this.viewDate),
                this.viewMode === this.o.minViewMode ? this._setDate(f(u, e, o)) : (this.setViewMode(this.viewMode - 1),
                    this.fill()));
            this.picker.is(":visible") && this._focused_from && this._focused_from.focus();
            delete this._focused_from
        },
        dayCellClick: function (t) {
            var r = n(t.currentTarget)
                , u = r.data("date")
                , i = new Date(u);
            this.o.updateViewDate && (i.getUTCFullYear() !== this.viewDate.getUTCFullYear() && this._trigger("changeYear", this.viewDate),
                i.getUTCMonth() !== this.viewDate.getUTCMonth() && this._trigger("changeMonth", this.viewDate));
            this._setDate(i)
        },
        navArrowsClick: function (t) {
            var u = n(t.currentTarget)
                , r = u.hasClass("prev") ? -1 : 1;
            0 !== this.viewMode && (r *= 12 * i.viewModes[this.viewMode].navStep);
            this.viewDate = this.moveMonth(this.viewDate, r);
            this._trigger(i.viewModes[this.viewMode].e, this.viewDate);
            this.fill()
        },
        _toggle_multidate: function (n) {
            var t = this.dates.contains(n);
            if (n || this.dates.clear(),
                t !== -1 ? (this.o.multidate === !0 || this.o.multidate > 1 || this.o.toggleActive) && this.dates.remove(t) : this.o.multidate === !1 ? (this.dates.clear(),
                    this.dates.push(n)) : this.dates.push(n),
                "number" == typeof this.o.multidate)
                for (; this.dates.length > this.o.multidate;)
                    this.dates.remove(0)
        },
        _setDate: function (n, t) {
            t && "date" !== t || this._toggle_multidate(n && new Date(n));
            (!t && this.o.updateViewDate || "view" === t) && (this.viewDate = n && new Date(n));
            this.fill();
            this.setValue();
            t && "view" === t || this._trigger("changeDate");
            this.inputField.trigger("change");
            !this.o.autoclose || t && "date" !== t || this.hide()
        },
        moveDay: function (n, t) {
            var i = new Date(n);
            return i.setUTCDate(n.getUTCDate() + t),
                i
        },
        moveWeek: function (n, t) {
            return this.moveDay(n, 7 * t)
        },
        moveMonth: function (n, t) {
            var f;
            if (!p(n))
                return this.o.defaultViewDate;
            if (!t)
                return n;
            var r, u, i = new Date(n.valueOf()), e = i.getUTCDate(), o = i.getUTCMonth(), s = Math.abs(t);
            if (t = t > 0 ? 1 : -1,
                1 === s)
                u = t === -1 ? function () {
                    return i.getUTCMonth() === o
                }
                    : function () {
                        return i.getUTCMonth() !== r
                    }
                    ,
                    r = o + t,
                    i.setUTCMonth(r),
                    r = (r + 12) % 12;
            else {
                for (f = 0; f < s; f++)
                    i = this.moveMonth(i, t);
                r = i.getUTCMonth();
                i.setUTCDate(e);
                u = function () {
                    return r !== i.getUTCMonth()
                }
            }
            for (; u();)
                i.setUTCDate(--e),
                    i.setUTCMonth(r);
            return i
        },
        moveYear: function (n, t) {
            return this.moveMonth(n, 12 * t)
        },
        moveAvailableDate: function (n, t, i) {
            do {
                if (n = this[i](n, t),
                    !this.dateWithinRange(n))
                    return !1;
                i = "moveDay"
            } while (this.dateIsDisabled(n)); return n
        },
        weekOfDateIsDisabled: function (t) {
            return n.inArray(t.getUTCDay(), this.o.daysOfWeekDisabled) !== -1
        },
        dateIsDisabled: function (t) {
            return this.weekOfDateIsDisabled(t) || n.grep(this.o.datesDisabled, function (n) {
                return l(t, n)
            }).length > 0
        },
        dateWithinRange: function (n) {
            return n >= this.o.startDate && n <= this.o.endDate
        },
        keydown: function (n) {
            if (!this.picker.is(":visible"))
                return void (40 !== n.keyCode && 27 !== n.keyCode || (this.show(),
                    n.stopPropagation()));
            var i, t, u = !1, r = this.focusDate || this.viewDate;
            switch (n.keyCode) {
                case 27:
                    this.focusDate ? (this.focusDate = null,
                        this.viewDate = this.dates.get(-1) || this.viewDate,
                        this.fill()) : this.hide();
                    n.preventDefault();
                    n.stopPropagation();
                    break;
                case 37:
                case 38:
                case 39:
                case 40:
                    if (!this.o.keyboardNavigation || 7 === this.o.daysOfWeekDisabled.length)
                        break;
                    i = 37 === n.keyCode || 38 === n.keyCode ? -1 : 1;
                    0 === this.viewMode ? n.ctrlKey ? (t = this.moveAvailableDate(r, i, "moveYear"),
                        t && this._trigger("changeYear", this.viewDate)) : n.shiftKey ? (t = this.moveAvailableDate(r, i, "moveMonth"),
                            t && this._trigger("changeMonth", this.viewDate)) : 37 === n.keyCode || 39 === n.keyCode ? t = this.moveAvailableDate(r, i, "moveDay") : this.weekOfDateIsDisabled(r) || (t = this.moveAvailableDate(r, i, "moveWeek")) : 1 === this.viewMode ? (38 !== n.keyCode && 40 !== n.keyCode || (i *= 4),
                                t = this.moveAvailableDate(r, i, "moveMonth")) : 2 === this.viewMode && (38 !== n.keyCode && 40 !== n.keyCode || (i *= 4),
                                    t = this.moveAvailableDate(r, i, "moveYear"));
                    t && (this.focusDate = this.viewDate = t,
                        this.setValue(),
                        this.fill(),
                        n.preventDefault());
                    break;
                case 13:
                    if (!this.o.forceParse)
                        break;
                    r = this.focusDate || this.dates.get(-1) || this.viewDate;
                    this.o.keyboardNavigation && (this._toggle_multidate(r),
                        u = !0);
                    this.focusDate = null;
                    this.viewDate = this.dates.get(-1) || this.viewDate;
                    this.setValue();
                    this.fill();
                    this.picker.is(":visible") && (n.preventDefault(),
                        n.stopPropagation(),
                        this.o.autoclose && this.hide());
                    break;
                case 9:
                    this.focusDate = null;
                    this.viewDate = this.dates.get(-1) || this.viewDate;
                    this.fill();
                    this.hide()
            }
            u && (this.dates.length ? this._trigger("changeDate") : this._trigger("clearDate"),
                this.inputField.trigger("change"))
        },
        setViewMode: function (n) {
            this.viewMode = n;
            this.picker.children("div").hide().filter(".datepicker-" + i.viewModes[this.viewMode].clsName).show();
            this.updateNavArrows();
            this._trigger("changeViewMode", new Date(this.viewDate))
        }
    };
    c = function (t, i) {
        n.data(t, "datepicker", this);
        this.element = n(t);
        this.inputs = n.map(i.inputs, function (n) {
            return n.jquery ? n[0] : n
        });
        delete i.inputs;
        this.keepEmptyValues = i.keepEmptyValues;
        delete i.keepEmptyValues;
        o.call(n(this.inputs), i).on("changeDate", n.proxy(this.dateUpdated, this));
        this.pickers = n.map(this.inputs, function (t) {
            return n.data(t, "datepicker")
        });
        this.updateDates()
    }
        ;
    c.prototype = {
        updateDates: function () {
            this.dates = n.map(this.pickers, function (n) {
                return n.getUTCDate()
            });
            this.updateRanges()
        },
        updateRanges: function () {
            var t = n.map(this.dates, function (n) {
                return n.valueOf()
            });
            n.each(this.pickers, function (n, i) {
                i.setRange(t)
            })
        },
        clearDates: function () {
            n.each(this.pickers, function (n, t) {
                t.clearDates()
            })
        },
        dateUpdated: function (i) {
            var u;
            if (!this.updating && (this.updating = !0,
                u = n.data(i.target, "datepicker"),
                u !== t)) {
                var r = u.getUTCDate()
                    , s = this.keepEmptyValues
                    , o = n.inArray(i.target, this.inputs)
                    , f = o - 1
                    , e = o + 1
                    , h = this.inputs.length;
                if (o !== -1) {
                    if (n.each(this.pickers, function (n, t) {
                        t.getUTCDate() || t !== u && s || t.setUTCDate(r)
                    }),
                        r < this.dates[f])
                        for (; f >= 0 && r < this.dates[f];)
                            this.pickers[f--].setUTCDate(r);
                    else if (r > this.dates[e])
                        for (; e < h && r > this.dates[e];)
                            this.pickers[e++].setUTCDate(r);
                    this.updateDates();
                    delete this.updating
                }
            }
        },
        destroy: function () {
            n.map(this.pickers, function (n) {
                n.destroy()
            });
            n(this.inputs).off("changeDate", this.dateUpdated);
            delete this.element.data().datepicker
        },
        remove: h("destroy", "Method `remove` is deprecated and will be removed in version 2.0. Use `destroy` instead")
    };
    v = n.fn.datepicker;
    o = function (i) {
        var f = Array.apply(null, arguments), r;
        if (f.shift(),
            this.each(function () {
                var s = n(this)
                    , t = s.data("datepicker")
                    , h = "object" == typeof i && i;
                if (!t) {
                    var l = w(this, "date")
                        , a = n.extend({}, e, l, h)
                        , v = b(a.language)
                        , o = n.extend({}, e, v, l, h);
                    s.hasClass("input-daterange") || o.inputs ? (n.extend(o, {
                        inputs: o.inputs || s.find("input").toArray()
                    }),
                        t = new c(this, o)) : t = new u(this, o);
                    s.data("datepicker", t)
                }
                "string" == typeof i && "function" == typeof t[i] && (r = t[i].apply(t, f))
            }),
            r === t || r instanceof u || r instanceof c)
            return this;
        if (this.length > 1)
            throw new Error("Using only allowed for the collection of a single element (" + i + " function)");
        return r
    }
        ;
    n.fn.datepicker = o;
    e = n.fn.datepicker.defaults = {
        assumeNearbyYear: !1,
        autoclose: !1,
        beforeShowDay: n.noop,
        beforeShowMonth: n.noop,
        beforeShowYear: n.noop,
        beforeShowDecade: n.noop,
        beforeShowCentury: n.noop,
        calendarWeeks: !1,
        clearBtn: !1,
        toggleActive: !1,
        daysOfWeekDisabled: [],
        daysOfWeekHighlighted: [],
        datesDisabled: [],
        endDate: 1 / 0,
        forceParse: !0,
        format: "mm/dd/yyyy",
        keepEmptyValues: !1,
        keyboardNavigation: !0,
        language: "en",
        minViewMode: 0,
        maxViewMode: 4,
        multidate: !1,
        multidateSeparator: ",",
        orientation: "auto",
        rtl: !1,
        startDate: -(1 / 0),
        startView: 0,
        todayBtn: !1,
        todayHighlight: !1,
        updateViewDate: !0,
        weekStart: 0,
        disableTouchKeyboard: !1,
        enableOnReadonly: !0,
        showOnFocus: !0,
        zIndexOffset: 10,
        container: "body",
        immediateUpdates: !1,
        title: "",
        templates: {
            leftArrow: "&#x00AB;",
            rightArrow: "&#x00BB;"
        },
        showWeekDays: !0
    };
    y = n.fn.datepicker.locale_opts = ["format", "rtl", "weekStart"];
    n.fn.datepicker.Constructor = u;
    r = n.fn.datepicker.dates = {
        en: {
            days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
            months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            today: "Today",
            clear: "Clear",
            titleFormat: "MM yyyy"
        }
    };
    i = {
        viewModes: [{
            names: ["days", "month"],
            clsName: "days",
            e: "changeMonth"
        }, {
            names: ["months", "year"],
            clsName: "months",
            e: "changeYear",
            navStep: 1
        }, {
            names: ["years", "decade"],
            clsName: "years",
            e: "changeDecade",
            navStep: 10
        }, {
            names: ["decades", "century"],
            clsName: "decades",
            e: "changeCentury",
            navStep: 100
        }, {
            names: ["centuries", "millennium"],
            clsName: "centuries",
            e: "changeMillennium",
            navStep: 1e3
        }],
        validParts: /dd?|DD?|mm?|MM?|yy(?:yy)?/g,
        nonpunctuation: /[^ -\/:-@\u5e74\u6708\u65e5\[-`{-~\t\n\r]+/g,
        parseFormat: function (n) {
            if ("function" == typeof n.toValue && "function" == typeof n.toDisplay)
                return n;
            var t = n.replace(this.validParts, "\0").split("\0")
                , i = n.match(this.validParts);
            if (!t || !t.length || !i || 0 === i.length)
                throw new Error("Invalid date format.");
            return {
                separators: t,
                parts: i
            }
        },
        parseDate: function (f, e, o, h) {
            function et(n, t) {
                return t === !0 && (t = 10),
                    n < 100 && (n += 2e3,
                        n > (new Date).getFullYear() + t && (n -= 100)),
                    n
            }
            function tt() {
                var n = this.slice(0, l[c].length)
                    , t = l[c].slice(0, n.length);
                return n.toLowerCase() === t.toLowerCase()
            }
            var l, y, it, c, rt, ut, g, v, ft, d, w;
            if (!f)
                return t;
            if (f instanceof Date)
                return f;
            if ("string" == typeof e && (e = i.parseFormat(e)),
                e.toValue)
                return e.toValue(f, e, o);
            if (ut = {
                d: "moveDay",
                m: "moveMonth",
                w: "moveWeek",
                y: "moveYear"
            },
                g = {
                    yesterday: "-1d",
                    today: "+0d",
                    tomorrow: "+1d"
                },
                f in g && (f = g[f]),
                /^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/i.test(f)) {
                for (l = f.match(/([\-+]\d+)([dmwy])/gi),
                    f = new Date,
                    c = 0; c < l.length; c++)
                    y = l[c].match(/([\-+]\d+)([dmwy])/i),
                        it = Number(y[1]),
                        rt = ut[y[2].toLowerCase()],
                        f = u.prototype[rt](f, it);
                return u.prototype._zero_utc_time(f)
            }
            l = f && f.match(this.nonpunctuation) || [];
            var p, b, k = {}, nt = ["yyyy", "yy", "M", "MM", "m", "mm", "d", "dd"], a = {
                yyyy: function (n, t) {
                    return n.setUTCFullYear(h ? et(t, h) : t)
                },
                m: function (n, t) {
                    if (isNaN(n))
                        return n;
                    for (t -= 1; t < 0;)
                        t += 12;
                    for (t %= 12,
                        n.setUTCMonth(t); n.getUTCMonth() !== t;)
                        n.setUTCDate(n.getUTCDate() - 1);
                    return n
                },
                d: function (n, t) {
                    return n.setUTCDate(t)
                }
            };
            if (a.yy = a.yyyy,
                a.M = a.MM = a.mm = a.m,
                a.dd = a.d,
                f = s(),
                v = e.parts.slice(),
                l.length !== v.length && (v = n(v).filter(function (t, i) {
                    return n.inArray(i, nt) !== -1
                }).toArray()),
                l.length === v.length) {
                for (c = 0,
                    ft = v.length; c < ft; c++) {
                    if (p = parseInt(l[c], 10),
                        y = v[c],
                        isNaN(p))
                        switch (y) {
                            case "MM":
                                b = n(r[o].months).filter(tt);
                                p = n.inArray(b[0], r[o].months) + 1;
                                break;
                            case "M":
                                b = n(r[o].monthsShort).filter(tt);
                                p = n.inArray(b[0], r[o].monthsShort) + 1
                        }
                    k[y] = p
                }
                for (c = 0; c < nt.length; c++)
                    w = nt[c],
                        w in k && !isNaN(k[w]) && (d = new Date(f),
                            a[w](d, k[w]),
                            isNaN(d) || (f = d))
            }
            return f
        },
        formatDate: function (t, u, f) {
            var e;
            if (!t)
                return "";
            if ("string" == typeof u && (u = i.parseFormat(u)),
                u.toDisplay)
                return u.toDisplay(t, u, f);
            e = {
                d: t.getUTCDate(),
                D: r[f].daysShort[t.getUTCDay()],
                DD: r[f].days[t.getUTCDay()],
                m: t.getUTCMonth() + 1,
                M: r[f].monthsShort[t.getUTCMonth()],
                MM: r[f].months[t.getUTCMonth()],
                yy: t.getUTCFullYear().toString().substring(2),
                yyyy: t.getUTCFullYear()
            };
            e.dd = (e.d < 10 ? "0" : "") + e.d;
            e.mm = (e.m < 10 ? "0" : "") + e.m;
            t = [];
            for (var s = n.extend([], u.separators), o = 0, h = u.parts.length; o <= h; o++)
                s.length && t.push(s.shift()),
                    t.push(e[u.parts[o]]);
            return t.join("")
        },
        headTemplate: '<thead><tr><th colspan="7" class="datepicker-title"><\/th><\/tr><tr><th class="prev">' + e.templates.leftArrow + '<\/th><th colspan="5" class="datepicker-switch"><\/th><th class="next">' + e.templates.rightArrow + "<\/th><\/tr><\/thead>",
        contTemplate: '<tbody><tr><td colspan="7"><\/td><\/tr><\/tbody>',
        footTemplate: '<tfoot><tr><th colspan="7" class="today"><\/th><\/tr><tr><th colspan="7" class="clear"><\/th><\/tr><\/tfoot>'
    };
    i.template = '<div class="datepicker"><div class="datepicker-days"><table class="table-condensed">' + i.headTemplate + "<tbody><\/tbody>" + i.footTemplate + '<\/table><\/div><div class="datepicker-months"><table class="table-condensed">' + i.headTemplate + i.contTemplate + i.footTemplate + '<\/table><\/div><div class="datepicker-years"><table class="table-condensed">' + i.headTemplate + i.contTemplate + i.footTemplate + '<\/table><\/div><div class="datepicker-decades"><table class="table-condensed">' + i.headTemplate + i.contTemplate + i.footTemplate + '<\/table><\/div><div class="datepicker-centuries"><table class="table-condensed">' + i.headTemplate + i.contTemplate + i.footTemplate + "<\/table><\/div><\/div>";
    n.fn.datepicker.DPGlobal = i;
    n.fn.datepicker.noConflict = function () {
        return n.fn.datepicker = v,
            this
    }
        ;
    n.fn.datepicker.version = "1.8.0";
    n.fn.datepicker.deprecated = function (n) {
        var t = window.console;
        t && t.warn && t.warn("DEPRECATED: " + n)
    }
        ;
    n(document).on("focus.datepicker.data-api click.datepicker.data-api", '[data-provide="datepicker"]', function (t) {
        var i = n(this);
        i.data("datepicker") || (t.preventDefault(),
            o.call(i, "show"))
    });
    n(function () {
        o.call(n('[data-provide="datepicker-inline"]'))
    })
}),
    function (n) {
        n.fn.datepicker.dates.ja = {
            days: ["日曜", "月曜", "火曜", "水曜", "木曜", "金曜", "土曜"],
            daysShort: ["日", "月", "火", "水", "木", "金", "土"],
            daysMin: ["日", "月", "火", "水", "木", "金", "土"],
            months: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
            monthsShort: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
            today: "今日",
            format: "yyyy/mm/dd",
            titleFormat: "yyyy年mm月",
            clear: "クリア"
        }
    }(jQuery);
!function (n) {
    "function" == typeof define && define.amd ? define(["jquery"], n) : "object" == typeof module && module.exports ? module.exports = function (t, i) {
        return void 0 === i && (i = "undefined" != typeof window ? require("jquery") : require("jquery")(t)),
            n(i),
            i
    }
        : n(jQuery)
}(function (n) {
    var t = function () {
        var t;
        return n && n.fn && n.fn.select2 && n.fn.select2.amd && (t = n.fn.select2.amd),
            function () {
                if (!t || !t.requirejs) {
                    t ? i = t : t = {};
                    var n, i, r;
                    !function (t) {
                        function e(n, t) {
                            return tt.call(n, t)
                        }
                        function c(n, t) {
                            var e, o, s, u, h, y, c, p, i, l, w, b, r = t && t.split("/"), a = f.map, v = a && a["*"] || {};
                            if (n) {
                                for (n = n.split("/"),
                                    h = n.length - 1,
                                    f.nodeIdCompat && k.test(n[h]) && (n[h] = n[h].replace(k, "")),
                                    "." === n[0].charAt(0) && r && (b = r.slice(0, r.length - 1),
                                        n = b.concat(n)),
                                    i = 0; i < n.length; i++)
                                    if ("." === (w = n[i]))
                                        n.splice(i, 1),
                                            i -= 1;
                                    else if (".." === w) {
                                        if (0 === i || 1 === i && ".." === n[2] || ".." === n[i - 1])
                                            continue;
                                        i > 0 && (n.splice(i - 1, 2),
                                            i -= 2)
                                    }
                                n = n.join("/")
                            }
                            if ((r || v) && a) {
                                for (e = n.split("/"),
                                    i = e.length; i > 0; i -= 1) {
                                    if (o = e.slice(0, i).join("/"),
                                        r)
                                        for (l = r.length; l > 0; l -= 1)
                                            if ((s = a[r.slice(0, l).join("/")]) && (s = s[o])) {
                                                u = s;
                                                y = i;
                                                break
                                            }
                                    if (u)
                                        break;
                                    !c && v && v[o] && (c = v[o],
                                        p = i)
                                }
                                !u && c && (u = c,
                                    y = p);
                                u && (e.splice(0, y, u),
                                    n = e.join("/"))
                            }
                            return n
                        }
                        function w(n, i) {
                            return function () {
                                var r = it.call(arguments, 0);
                                return "string" != typeof r[0] && 1 === r.length && r.push(null),
                                    o.apply(t, r.concat([n, i]))
                            }
                        }
                        function d(n) {
                            return function (t) {
                                return c(t, n)
                            }
                        }
                        function g(n) {
                            return function (t) {
                                u[n] = t
                            }
                        }
                        function l(n) {
                            if (e(h, n)) {
                                var i = h[n];
                                delete h[n];
                                p[n] = !0;
                                a.apply(t, i)
                            }
                            if (!e(u, n) && !e(p, n))
                                throw new Error("No " + n);
                            return u[n]
                        }
                        function v(n) {
                            var i, t = n ? n.indexOf("!") : -1;
                            return t > -1 && (i = n.substring(0, t),
                                n = n.substring(t + 1, n.length)),
                                [i, n]
                        }
                        function b(n) {
                            return n ? v(n) : []
                        }
                        function nt(n) {
                            return function () {
                                return f && f.config && f.config[n] || {}
                            }
                        }
                        var a, o, y, s, u = {}, h = {}, f = {}, p = {}, tt = Object.prototype.hasOwnProperty, it = [].slice, k = /\.js$/;
                        y = function (n, t) {
                            var r, u = v(n), i = u[0], f = t[1];
                            return n = u[1],
                                i && (i = c(i, f),
                                    r = l(i)),
                                i ? n = r && r.normalize ? r.normalize(n, d(f)) : c(n, f) : (n = c(n, f),
                                    u = v(n),
                                    i = u[0],
                                    n = u[1],
                                    i && (r = l(i))),
                            {
                                f: i ? i + "!" + n : n,
                                n: n,
                                pr: i,
                                p: r
                            }
                        }
                            ;
                        s = {
                            require: function (n) {
                                return w(n)
                            },
                            exports: function (n) {
                                var t = u[n];
                                return void 0 !== t ? t : u[n] = {}
                            },
                            module: function (n) {
                                return {
                                    id: n,
                                    uri: "",
                                    exports: u[n],
                                    config: nt(n)
                                }
                            }
                        };
                        a = function (n, i, r, f) {
                            var v, o, d, k, c, nt, tt, a = [], it = typeof r;
                            if (f = f || n,
                                nt = b(f),
                                "undefined" === it || "function" === it) {
                                for (i = !i.length && r.length ? ["require", "exports", "module"] : i,
                                    c = 0; c < i.length; c += 1)
                                    if (k = y(i[c], nt),
                                        "require" === (o = k.f))
                                        a[c] = s.require(n);
                                    else if ("exports" === o)
                                        a[c] = s.exports(n),
                                            tt = !0;
                                    else if ("module" === o)
                                        v = a[c] = s.module(n);
                                    else if (e(u, o) || e(h, o) || e(p, o))
                                        a[c] = l(o);
                                    else {
                                        if (!k.p)
                                            throw new Error(n + " missing " + o);
                                        k.p.load(k.n, w(f, !0), g(o), {});
                                        a[c] = u[o]
                                    }
                                d = r ? r.apply(u[n], a) : void 0;
                                n && (v && v.exports !== t && v.exports !== u[n] ? u[n] = v.exports : d === t && tt || (u[n] = d))
                            } else
                                n && (u[n] = r)
                        }
                            ;
                        n = i = o = function (n, i, r, u, e) {
                            if ("string" == typeof n)
                                return s[n] ? s[n](i) : l(y(n, b(i)).f);
                            if (!n.splice) {
                                if (f = n,
                                    f.deps && o(f.deps, f.callback),
                                    !i)
                                    return;
                                i.splice ? (n = i,
                                    i = r,
                                    r = null) : n = t
                            }
                            return i = i || function () { }
                                ,
                                "function" == typeof r && (r = u,
                                    u = e),
                                u ? a(t, n, i, r) : setTimeout(function () {
                                    a(t, n, i, r)
                                }, 4),
                                o
                        }
                            ;
                        o.config = function (n) {
                            return o(n)
                        }
                            ;
                        n._defined = u;
                        r = function (n, t, i) {
                            if ("string" != typeof n)
                                throw new Error("See almond README: incorrect module build, no module name");
                            t.splice || (i = t,
                                t = []);
                            e(u, n) || e(h, n) || (h[n] = [n, t, i])
                        }
                            ;
                        r.amd = {
                            jQuery: !0
                        }
                    }();
                    t.requirejs = n;
                    t.require = i;
                    t.define = r
                }
            }(),
            t.define("almond", function () { }),
            t.define("jquery", [], function () {
                var t = n || $;
                return null == t && console && console.error && console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."),
                    t
            }),
            t.define("select2/utils", ["jquery"], function (n) {
                function r(n) {
                    var i = n.prototype
                        , r = [];
                    for (var t in i)
                        "function" == typeof i[t] && "constructor" !== t && r.push(t);
                    return r
                }
                var t = {}, i;
                return t.Extend = function (n, t) {
                    function r() {
                        this.constructor = n
                    }
                    var u = {}.hasOwnProperty;
                    for (var i in t)
                        u.call(t, i) && (n[i] = t[i]);
                    return r.prototype = t.prototype,
                        n.prototype = new r,
                        n.__super__ = t.prototype,
                        n
                }
                    ,
                    t.Decorate = function (n, t) {
                        function i() {
                            var r = Array.prototype.unshift
                                , u = t.prototype.constructor.length
                                , i = n.prototype.constructor;
                            u > 0 && (r.call(arguments, n.prototype.constructor),
                                i = t.prototype.constructor);
                            i.apply(this, arguments)
                        }
                        function l() {
                            this.constructor = i
                        }
                        var s = r(t), h = r(n), u, e, c, f, o;
                        for (t.displayName = n.displayName,
                            i.prototype = new l,
                            u = 0; u < h.length; u++)
                            e = h[u],
                                i.prototype[e] = n.prototype[e];
                        for (c = function (n) {
                            var r = function () { }, u;
                            return n in i.prototype && (r = i.prototype[n]),
                                u = t.prototype[n],
                                function () {
                                    return Array.prototype.unshift.call(arguments, r),
                                        u.apply(this, arguments)
                                }
                        }
                            ,
                            f = 0; f < s.length; f++)
                            o = s[f],
                                i.prototype[o] = c(o);
                        return i
                    }
                    ,
                    i = function () {
                        this.listeners = {}
                    }
                    ,
                    i.prototype.on = function (n, t) {
                        this.listeners = this.listeners || {};
                        n in this.listeners ? this.listeners[n].push(t) : this.listeners[n] = [t]
                    }
                    ,
                    i.prototype.trigger = function (n) {
                        var i = Array.prototype.slice
                            , t = i.call(arguments, 1);
                        this.listeners = this.listeners || {};
                        null == t && (t = []);
                        0 === t.length && t.push({});
                        t[0]._type = n;
                        n in this.listeners && this.invoke(this.listeners[n], i.call(arguments, 1));
                        "*" in this.listeners && this.invoke(this.listeners["*"], arguments)
                    }
                    ,
                    i.prototype.invoke = function (n, t) {
                        for (var i = 0, r = n.length; i < r; i++)
                            n[i].apply(this, t)
                    }
                    ,
                    t.Observable = i,
                    t.generateChars = function (n) {
                        for (var t = "", i = 0; i < n; i++)
                            t += Math.floor(36 * Math.random()).toString(36);
                        return t
                    }
                    ,
                    t.bind = function (n, t) {
                        return function () {
                            n.apply(t, arguments)
                        }
                    }
                    ,
                    t._convertData = function (n) {
                        var f, r, i, u, t;
                        for (f in n)
                            if (r = f.split("-"),
                                i = n,
                                1 !== r.length) {
                                for (u = 0; u < r.length; u++)
                                    t = r[u],
                                        t = t.substring(0, 1).toLowerCase() + t.substring(1),
                                        t in i || (i[t] = {}),
                                        u == r.length - 1 && (i[t] = n[f]),
                                        i = i[t];
                                delete n[f]
                            }
                        return n
                    }
                    ,
                    t.hasScroll = function (t, i) {
                        var u = n(i)
                            , f = i.style.overflowX
                            , r = i.style.overflowY;
                        return (f !== r || "hidden" !== r && "visible" !== r) && ("scroll" === f || "scroll" === r || u.innerHeight() < i.scrollHeight || u.innerWidth() < i.scrollWidth)
                    }
                    ,
                    t.escapeMarkup = function (n) {
                        var t = {
                            "\\": "&#92;",
                            "&": "&amp;",
                            "<": "&lt;",
                            ">": "&gt;",
                            '"': "&quot;",
                            "'": "&#39;",
                            "/": "&#47;"
                        };
                        return "string" != typeof n ? n : String(n).replace(/[&<>"'\/\\]/g, function (n) {
                            return t[n]
                        })
                    }
                    ,
                    t.appendMany = function (t, i) {
                        if ("1.7" === n.fn.jquery.substr(0, 3)) {
                            var r = n();
                            n.map(i, function (n) {
                                r = r.add(n)
                            });
                            i = r
                        }
                        t.append(i)
                    }
                    ,
                    t
            }),
            t.define("select2/results", ["jquery", "./utils"], function (n, t) {
                function i(n, t, r) {
                    this.$element = n;
                    this.data = r;
                    this.options = t;
                    i.__super__.constructor.call(this)
                }
                return t.Extend(i, t.Observable),
                    i.prototype.render = function () {
                        var t = n('<ul class="select2-results__options" role="tree"><\/ul>');
                        return this.options.get("multiple") && t.attr("aria-multiselectable", "true"),
                            this.$results = t,
                            t
                    }
                    ,
                    i.prototype.clear = function () {
                        this.$results.empty()
                    }
                    ,
                    i.prototype.displayMessage = function (t) {
                        var u = this.options.get("escapeMarkup"), i, r;
                        this.clear();
                        this.hideLoading();
                        i = n('<li role="treeitem" aria-live="assertive" class="select2-results__option"><\/li>');
                        r = this.options.get("translations").get(t.message);
                        i.append(u(r(t.args)));
                        i[0].className += " select2-results__message";
                        this.$results.append(i)
                    }
                    ,
                    i.prototype.hideMessages = function () {
                        this.$results.find(".select2-results__message").remove()
                    }
                    ,
                    i.prototype.append = function (n) {
                        var i, t, r, u;
                        if (this.hideLoading(),
                            i = [],
                            null == n.results || 0 === n.results.length)
                            return void (0 === this.$results.children().length && this.trigger("results:message", {
                                message: "noResults"
                            }));
                        for (n.results = this.sort(n.results),
                            t = 0; t < n.results.length; t++)
                            r = n.results[t],
                                u = this.option(r),
                                i.push(u);
                        this.$results.append(i)
                    }
                    ,
                    i.prototype.position = function (n, t) {
                        t.find(".select2-results").append(n)
                    }
                    ,
                    i.prototype.sort = function (n) {
                        return this.options.get("sorter")(n)
                    }
                    ,
                    i.prototype.highlightFirstItem = function () {
                        var n = this.$results.find(".select2-results__option[aria-selected]")
                            , t = n.filter("[aria-selected=true]");
                        t.length > 0 ? t.first().trigger("mouseenter") : n.first().trigger("mouseenter");
                        this.ensureHighlightVisible()
                    }
                    ,
                    i.prototype.setClasses = function () {
                        var t = this;
                        this.data.current(function (i) {
                            var r = n.map(i, function (n) {
                                return n.id.toString()
                            });
                            t.$results.find(".select2-results__option[aria-selected]").each(function () {
                                var i = n(this)
                                    , t = n.data(this, "data")
                                    , u = "" + t.id;
                                null != t.element && t.element.selected || null == t.element && n.inArray(u, r) > -1 ? i.attr("aria-selected", "true") : i.attr("aria-selected", "false")
                            })
                        })
                    }
                    ,
                    i.prototype.showLoading = function (n) {
                        this.hideLoading();
                        var i = this.options.get("translations").get("searching")
                            , r = {
                                disabled: !0,
                                loading: !0,
                                text: i(n)
                            }
                            , t = this.option(r);
                        t.className += " loading-results";
                        this.$results.prepend(t)
                    }
                    ,
                    i.prototype.hideLoading = function () {
                        this.$results.find(".loading-results").remove()
                    }
                    ,
                    i.prototype.option = function (t) {
                        var r = document.createElement("li"), i, e, c, o, u, s, f, l, a, h;
                        r.className = "select2-results__option";
                        i = {
                            role: "treeitem",
                            "aria-selected": "false"
                        };
                        t.disabled && (delete i["aria-selected"],
                            i["aria-disabled"] = "true");
                        null == t.id && delete i["aria-selected"];
                        null != t._resultId && (r.id = t._resultId);
                        t.title && (r.title = t.title);
                        t.children && (i.role = "group",
                            i["aria-label"] = t.text,
                            delete i["aria-selected"]);
                        for (e in i)
                            c = i[e],
                                r.setAttribute(e, c);
                        if (t.children) {
                            for (o = n(r),
                                u = document.createElement("strong"),
                                u.className = "select2-results__group",
                                n(u),
                                this.template(t, u),
                                s = [],
                                f = 0; f < t.children.length; f++)
                                l = t.children[f],
                                    a = this.option(l),
                                    s.push(a);
                            h = n("<ul><\/ul>", {
                                "class": "select2-results__options select2-results__options--nested"
                            });
                            h.append(s);
                            o.append(u);
                            o.append(h)
                        } else
                            this.template(t, r);
                        return n.data(r, "data", t),
                            r
                    }
                    ,
                    i.prototype.bind = function (t) {
                        var i = this
                            , r = t.id + "-results";
                        this.$results.attr("id", r);
                        t.on("results:all", function (n) {
                            i.clear();
                            i.append(n.data);
                            t.isOpen() && (i.setClasses(),
                                i.highlightFirstItem())
                        });
                        t.on("results:append", function (n) {
                            i.append(n.data);
                            t.isOpen() && i.setClasses()
                        });
                        t.on("query", function (n) {
                            i.hideMessages();
                            i.showLoading(n)
                        });
                        t.on("select", function () {
                            t.isOpen() && (i.setClasses(),
                                i.highlightFirstItem())
                        });
                        t.on("unselect", function () {
                            t.isOpen() && (i.setClasses(),
                                i.highlightFirstItem())
                        });
                        t.on("open", function () {
                            i.$results.attr("aria-expanded", "true");
                            i.$results.attr("aria-hidden", "false");
                            i.setClasses();
                            i.ensureHighlightVisible()
                        });
                        t.on("close", function () {
                            i.$results.attr("aria-expanded", "false");
                            i.$results.attr("aria-hidden", "true");
                            i.$results.removeAttr("aria-activedescendant")
                        });
                        t.on("results:toggle", function () {
                            var n = i.getHighlightedResults();
                            0 !== n.length && n.trigger("mouseup")
                        });
                        t.on("results:select", function () {
                            var n = i.getHighlightedResults(), t;
                            0 !== n.length && (t = n.data("data"),
                                "true" == n.attr("aria-selected") ? i.trigger("close", {}) : i.trigger("select", {
                                    data: t
                                }))
                        });
                        t.on("results:previous", function () {
                            var r = i.getHighlightedResults(), u = i.$results.find("[aria-selected]"), f = u.index(r), n, t;
                            if (0 !== f) {
                                n = f - 1;
                                0 === r.length && (n = 0);
                                t = u.eq(n);
                                t.trigger("mouseenter");
                                var e = i.$results.offset().top
                                    , o = t.offset().top
                                    , s = i.$results.scrollTop() + (o - e);
                                0 === n ? i.$results.scrollTop(0) : o - e < 0 && i.$results.scrollTop(s)
                            }
                        });
                        t.on("results:next", function () {
                            var e = i.getHighlightedResults(), t = i.$results.find("[aria-selected]"), o = t.index(e), r = o + 1, n;
                            if (!(r >= t.length)) {
                                n = t.eq(r);
                                n.trigger("mouseenter");
                                var u = i.$results.offset().top + i.$results.outerHeight(!1)
                                    , f = n.offset().top + n.outerHeight(!1)
                                    , s = i.$results.scrollTop() + f - u;
                                0 === r ? i.$results.scrollTop(0) : f > u && i.$results.scrollTop(s)
                            }
                        });
                        t.on("results:focus", function (n) {
                            n.element.addClass("select2-results__option--highlighted")
                        });
                        t.on("results:message", function (n) {
                            i.displayMessage(n)
                        });
                        n.fn.mousewheel && this.$results.on("mousewheel", function (n) {
                            var t = i.$results.scrollTop()
                                , r = i.$results.get(0).scrollHeight - t + n.deltaY
                                , u = n.deltaY > 0 && t - n.deltaY <= 0
                                , f = n.deltaY < 0 && r <= i.$results.height();
                            u ? (i.$results.scrollTop(0),
                                n.preventDefault(),
                                n.stopPropagation()) : f && (i.$results.scrollTop(i.$results.get(0).scrollHeight - i.$results.height()),
                                    n.preventDefault(),
                                    n.stopPropagation())
                        });
                        this.$results.on("mouseup", ".select2-results__option[aria-selected]", function (t) {
                            var r = n(this)
                                , u = r.data("data");
                            if ("true" === r.attr("aria-selected"))
                                return void (i.options.get("multiple") ? i.trigger("unselect", {
                                    originalEvent: t,
                                    data: u
                                }) : i.trigger("close", {}));
                            i.trigger("select", {
                                originalEvent: t,
                                data: u
                            })
                        });
                        this.$results.on("mouseenter", ".select2-results__option[aria-selected]", function () {
                            var t = n(this).data("data");
                            i.getHighlightedResults().removeClass("select2-results__option--highlighted");
                            i.trigger("results:focus", {
                                data: t,
                                element: n(this)
                            })
                        })
                    }
                    ,
                    i.prototype.getHighlightedResults = function () {
                        return this.$results.find(".select2-results__option--highlighted")
                    }
                    ,
                    i.prototype.destroy = function () {
                        this.$results.remove()
                    }
                    ,
                    i.prototype.ensureHighlightVisible = function () {
                        var n = this.getHighlightedResults();
                        if (0 !== n.length) {
                            var f = this.$results.find("[aria-selected]")
                                , e = f.index(n)
                                , t = this.$results.offset().top
                                , i = n.offset().top
                                , r = this.$results.scrollTop() + (i - t)
                                , u = i - t;
                            r -= 2 * n.outerHeight(!1);
                            e <= 2 ? this.$results.scrollTop(0) : (u > this.$results.outerHeight() || u < 0) && this.$results.scrollTop(r)
                        }
                    }
                    ,
                    i.prototype.template = function (t, i) {
                        var u = this.options.get("templateResult")
                            , f = this.options.get("escapeMarkup")
                            , r = u(t, i);
                        null == r ? i.style.display = "none" : "string" == typeof r ? i.innerHTML = f(r) : n(i).append(r)
                    }
                    ,
                    i
            }),
            t.define("select2/keys", [], function () {
                return {
                    BACKSPACE: 8,
                    TAB: 9,
                    ENTER: 13,
                    SHIFT: 16,
                    CTRL: 17,
                    ALT: 18,
                    ESC: 27,
                    SPACE: 32,
                    PAGE_UP: 33,
                    PAGE_DOWN: 34,
                    END: 35,
                    HOME: 36,
                    LEFT: 37,
                    UP: 38,
                    RIGHT: 39,
                    DOWN: 40,
                    DELETE: 46
                }
            }),
            t.define("select2/selection/base", ["jquery", "../utils", "../keys"], function (n, t, i) {
                function r(n, t) {
                    this.$element = n;
                    this.options = t;
                    r.__super__.constructor.call(this)
                }
                return t.Extend(r, t.Observable),
                    r.prototype.render = function () {
                        var t = n('<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"><\/span>');
                        return this._tabindex = 0,
                            null != this.$element.data("old-tabindex") ? this._tabindex = this.$element.data("old-tabindex") : null != this.$element.attr("tabindex") && (this._tabindex = this.$element.attr("tabindex")),
                            t.attr("title", this.$element.attr("title")),
                            t.attr("tabindex", this._tabindex),
                            this.$selection = t,
                            t
                    }
                    ,
                    r.prototype.bind = function (n) {
                        var t = this
                            , r = (n.id,
                                n.id + "-results");
                        this.container = n;
                        this.$selection.on("focus", function (n) {
                            t.trigger("focus", n)
                        });
                        this.$selection.on("blur", function (n) {
                            t._handleBlur(n)
                        });
                        this.$selection.on("keydown", function (n) {
                            t.trigger("keypress", n);
                            n.which === i.SPACE && n.preventDefault()
                        });
                        n.on("results:focus", function (n) {
                            t.$selection.attr("aria-activedescendant", n.data._resultId)
                        });
                        n.on("selection:update", function (n) {
                            t.update(n.data)
                        });
                        n.on("open", function () {
                            t.$selection.attr("aria-expanded", "true");
                            t.$selection.attr("aria-owns", r);
                            t._attachCloseHandler(n)
                        });
                        n.on("close", function () {
                            t.$selection.attr("aria-expanded", "false");
                            t.$selection.removeAttr("aria-activedescendant");
                            t.$selection.removeAttr("aria-owns");
                            t.$selection.focus();
                            t._detachCloseHandler(n)
                        });
                        n.on("enable", function () {
                            t.$selection.attr("tabindex", t._tabindex)
                        });
                        n.on("disable", function () {
                            t.$selection.attr("tabindex", "-1")
                        })
                    }
                    ,
                    r.prototype._handleBlur = function (t) {
                        var i = this;
                        window.setTimeout(function () {
                            document.activeElement == i.$selection[0] || n.contains(i.$selection[0], document.activeElement) || i.trigger("blur", t)
                        }, 1)
                    }
                    ,
                    r.prototype._attachCloseHandler = function (t) {
                        n(document.body).on("mousedown.select2." + t.id, function (t) {
                            var i = n(t.target)
                                , r = i.closest(".select2");
                            n(".select2.select2-container--open").each(function () {
                                var t = n(this);
                                this != r[0] && t.data("element").select2("close")
                            })
                        })
                    }
                    ,
                    r.prototype._detachCloseHandler = function (t) {
                        n(document.body).off("mousedown.select2." + t.id)
                    }
                    ,
                    r.prototype.position = function (n, t) {
                        t.find(".selection").append(n)
                    }
                    ,
                    r.prototype.destroy = function () {
                        this._detachCloseHandler(this.container)
                    }
                    ,
                    r.prototype.update = function () {
                        throw new Error("The `update` method must be defined in child classes.");
                    }
                    ,
                    r
            }),
            t.define("select2/selection/single", ["jquery", "./base", "../utils", "../keys"], function (n, t, i) {
                function r() {
                    r.__super__.constructor.apply(this, arguments)
                }
                return i.Extend(r, t),
                    r.prototype.render = function () {
                        var n = r.__super__.render.call(this);
                        return n.addClass("select2-selection--single"),
                            n.html('<span class="select2-selection__rendered"><\/span><span class="select2-selection__arrow" role="presentation"><b role="presentation"><\/b><\/span>'),
                            n
                    }
                    ,
                    r.prototype.bind = function (n) {
                        var t = this, i;
                        r.__super__.bind.apply(this, arguments);
                        i = n.id + "-container";
                        this.$selection.find(".select2-selection__rendered").attr("id", i);
                        this.$selection.attr("aria-labelledby", i);
                        this.$selection.on("mousedown", function (n) {
                            1 === n.which && t.trigger("toggle", {
                                originalEvent: n
                            })
                        });
                        this.$selection.on("focus", function () { });
                        this.$selection.on("blur", function () { });
                        n.on("focus", function () {
                            n.isOpen() || t.$selection.focus()
                        });
                        n.on("selection:update", function (n) {
                            t.update(n.data)
                        })
                    }
                    ,
                    r.prototype.clear = function () {
                        this.$selection.find(".select2-selection__rendered").empty()
                    }
                    ,
                    r.prototype.display = function (n, t) {
                        var i = this.options.get("templateSelection");
                        return this.options.get("escapeMarkup")(i(n, t))
                    }
                    ,
                    r.prototype.selectionContainer = function () {
                        return n("<span><\/span>")
                    }
                    ,
                    r.prototype.update = function (n) {
                        if (0 === n.length)
                            return void this.clear();
                        var t = n[0]
                            , i = this.$selection.find(".select2-selection__rendered")
                            , r = this.display(t, i);
                        i.empty().append(r);
                        i.prop("title", t.title || t.text)
                    }
                    ,
                    r
            }),
            t.define("select2/selection/multiple", ["jquery", "./base", "../utils"], function (n, t, i) {
                function r() {
                    r.__super__.constructor.apply(this, arguments)
                }
                return i.Extend(r, t),
                    r.prototype.render = function () {
                        var n = r.__super__.render.call(this);
                        return n.addClass("select2-selection--multiple"),
                            n.html('<ul class="select2-selection__rendered"><\/ul>'),
                            n
                    }
                    ,
                    r.prototype.bind = function () {
                        var t = this;
                        r.__super__.bind.apply(this, arguments);
                        this.$selection.on("click", function (n) {
                            t.trigger("toggle", {
                                originalEvent: n
                            })
                        });
                        this.$selection.on("click", ".select2-selection__choice__remove", function (i) {
                            if (!t.options.get("disabled")) {
                                var r = n(this)
                                    , u = r.parent()
                                    , f = u.data("data");
                                t.trigger("unselect", {
                                    originalEvent: i,
                                    data: f
                                })
                            }
                        })
                    }
                    ,
                    r.prototype.clear = function () {
                        this.$selection.find(".select2-selection__rendered").empty()
                    }
                    ,
                    r.prototype.display = function (n, t) {
                        var i = this.options.get("templateSelection");
                        return this.options.get("escapeMarkup")(i(n, t))
                    }
                    ,
                    r.prototype.selectionContainer = function () {
                        return n('<li class="select2-selection__choice"><span class="select2-selection__choice__remove" role="presentation">&times;<\/span><\/li>')
                    }
                    ,
                    r.prototype.update = function (n) {
                        var f, r, e;
                        if (this.clear(),
                            0 !== n.length) {
                            for (f = [],
                                r = 0; r < n.length; r++) {
                                var u = n[r]
                                    , t = this.selectionContainer()
                                    , o = this.display(u, t);
                                t.append(o);
                                t.prop("title", u.title || u.text);
                                t.data("data", u);
                                f.push(t)
                            }
                            e = this.$selection.find(".select2-selection__rendered");
                            i.appendMany(e, f)
                        }
                    }
                    ,
                    r
            }),
            t.define("select2/selection/placeholder", ["../utils"], function () {
                function n(n, t, i) {
                    this.placeholder = this.normalizePlaceholder(i.get("placeholder"));
                    n.call(this, t, i)
                }
                return n.prototype.normalizePlaceholder = function (n, t) {
                    return "string" == typeof t && (t = {
                        id: "",
                        text: t
                    }),
                        t
                }
                    ,
                    n.prototype.createPlaceholder = function (n, t) {
                        var i = this.selectionContainer();
                        return i.html(this.display(t)),
                            i.addClass("select2-selection__placeholder").removeClass("select2-selection__choice"),
                            i
                    }
                    ,
                    n.prototype.update = function (n, t) {
                        var r = 1 == t.length && t[0].id != this.placeholder.id, i;
                        if (t.length > 1 || r)
                            return n.call(this, t);
                        this.clear();
                        i = this.createPlaceholder(this.placeholder);
                        this.$selection.find(".select2-selection__rendered").append(i)
                    }
                    ,
                    n
            }),
            t.define("select2/selection/allowClear", ["jquery", "../keys"], function (n, t) {
                function i() { }
                return i.prototype.bind = function (n, t, i) {
                    var r = this;
                    n.call(this, t, i);
                    null == this.placeholder && this.options.get("debug") && window.console && console.error && console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option.");
                    this.$selection.on("mousedown", ".select2-selection__clear", function (n) {
                        r._handleClear(n)
                    });
                    t.on("keypress", function (n) {
                        r._handleKeyboardClear(n, t)
                    })
                }
                    ,
                    i.prototype._handleClear = function (n, t) {
                        var r, u, i, f;
                        if (!this.options.get("disabled") && (r = this.$selection.find(".select2-selection__clear"),
                            0 !== r.length)) {
                            for (t.stopPropagation(),
                                u = r.data("data"),
                                i = 0; i < u.length; i++)
                                if (f = {
                                    data: u[i]
                                },
                                    this.trigger("unselect", f),
                                    f.prevented)
                                    return;
                            this.$element.val(this.placeholder.id).trigger("change");
                            this.trigger("toggle", {})
                        }
                    }
                    ,
                    i.prototype._handleKeyboardClear = function (n, i, r) {
                        r.isOpen() || i.which != t.DELETE && i.which != t.BACKSPACE || this._handleClear(i)
                    }
                    ,
                    i.prototype.update = function (t, i) {
                        if (t.call(this, i),
                            !(this.$selection.find(".select2-selection__placeholder").length > 0 || 0 === i.length)) {
                            var r = n('<span class="select2-selection__clear">&times;<\/span>');
                            r.data("data", i);
                            this.$selection.find(".select2-selection__rendered").prepend(r)
                        }
                    }
                    ,
                    i
            }),
            t.define("select2/selection/search", ["jquery", "../utils", "../keys"], function (n, t, i) {
                function r(n, t, i) {
                    n.call(this, t, i)
                }
                return r.prototype.render = function (t) {
                    var i = n('<li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="textbox" aria-autocomplete="list" /><\/li>'), r;
                    return this.$searchContainer = i,
                        this.$search = i.find("input"),
                        r = t.call(this),
                        this._transferTabIndex(),
                        r
                }
                    ,
                    r.prototype.bind = function (n, t, r) {
                        var u = this, f, e;
                        n.call(this, t, r);
                        t.on("open", function () {
                            u.$search.trigger("focus")
                        });
                        t.on("close", function () {
                            u.$search.val("");
                            u.$search.removeAttr("aria-activedescendant");
                            u.$search.trigger("focus")
                        });
                        t.on("enable", function () {
                            u.$search.prop("disabled", !1);
                            u._transferTabIndex()
                        });
                        t.on("disable", function () {
                            u.$search.prop("disabled", !0)
                        });
                        t.on("focus", function () {
                            u.$search.trigger("focus")
                        });
                        t.on("results:focus", function (n) {
                            u.$search.attr("aria-activedescendant", n.id)
                        });
                        this.$selection.on("focusin", ".select2-search--inline", function (n) {
                            u.trigger("focus", n)
                        });
                        this.$selection.on("focusout", ".select2-search--inline", function (n) {
                            u._handleBlur(n)
                        });
                        this.$selection.on("keydown", ".select2-search--inline", function (n) {
                            var t, r;
                            (n.stopPropagation(),
                                u.trigger("keypress", n),
                                u._keyUpPrevented = n.isDefaultPrevented(),
                                n.which === i.BACKSPACE && "" === u.$search.val()) && (t = u.$searchContainer.prev(".select2-selection__choice"),
                                    t.length > 0 && (r = t.data("data"),
                                        u.searchRemoveChoice(r),
                                        n.preventDefault()))
                        });
                        f = document.documentMode;
                        e = f && f <= 11;
                        this.$selection.on("input.searchcheck", ".select2-search--inline", function () {
                            if (e)
                                return void u.$selection.off("input.search input.searchcheck");
                            u.$selection.off("keyup.search")
                        });
                        this.$selection.on("keyup.search input.search", ".select2-search--inline", function (n) {
                            if (e && "input" === n.type)
                                return void u.$selection.off("input.search input.searchcheck");
                            var t = n.which;
                            t != i.SHIFT && t != i.CTRL && t != i.ALT && t != i.TAB && u.handleSearch(n)
                        })
                    }
                    ,
                    r.prototype._transferTabIndex = function () {
                        this.$search.attr("tabindex", this.$selection.attr("tabindex"));
                        this.$selection.attr("tabindex", "-1")
                    }
                    ,
                    r.prototype.createPlaceholder = function (n, t) {
                        this.$search.attr("placeholder", t.text)
                    }
                    ,
                    r.prototype.update = function (n, t) {
                        var i = this.$search[0] == document.activeElement;
                        this.$search.attr("placeholder", "");
                        n.call(this, t);
                        this.$selection.find(".select2-selection__rendered").append(this.$searchContainer);
                        this.resizeSearch();
                        i && this.$search.focus()
                    }
                    ,
                    r.prototype.handleSearch = function () {
                        if (this.resizeSearch(),
                            !this._keyUpPrevented) {
                            var n = this.$search.val();
                            this.trigger("query", {
                                term: n
                            })
                        }
                        this._keyUpPrevented = !1
                    }
                    ,
                    r.prototype.searchRemoveChoice = function (n, t) {
                        this.trigger("unselect", {
                            data: t
                        });
                        this.$search.val(t.text);
                        this.handleSearch()
                    }
                    ,
                    r.prototype.resizeSearch = function () {
                        this.$search.css("width", "25px");
                        var n = "";
                        n = "" !== this.$search.attr("placeholder") ? this.$selection.find(".select2-selection__rendered").innerWidth() : .75 * (this.$search.val().length + 1) + "em";
                        this.$search.css("width", n)
                    }
                    ,
                    r
            }),
            t.define("select2/selection/eventRelay", ["jquery"], function (n) {
                function t() { }
                return t.prototype.bind = function (t, i, r) {
                    var u = this
                        , f = ["open", "opening", "close", "closing", "select", "selecting", "unselect", "unselecting"]
                        , e = ["opening", "closing", "selecting", "unselecting"];
                    t.call(this, i, r);
                    i.on("*", function (t, i) {
                        if (-1 !== n.inArray(t, f)) {
                            i = i || {};
                            var r = n.Event("select2:" + t, {
                                params: i
                            });
                            u.$element.trigger(r);
                            -1 !== n.inArray(t, e) && (i.prevented = r.isDefaultPrevented())
                        }
                    })
                }
                    ,
                    t
            }),
            t.define("select2/translation", ["jquery", "require"], function (n, t) {
                function i(n) {
                    this.dict = n || {}
                }
                return i.prototype.all = function () {
                    return this.dict
                }
                    ,
                    i.prototype.get = function (n) {
                        return this.dict[n]
                    }
                    ,
                    i.prototype.extend = function (t) {
                        this.dict = n.extend({}, t.all(), this.dict)
                    }
                    ,
                    i._cache = {},
                    i.loadPath = function (n) {
                        if (!(n in i._cache)) {
                            var r = t(n);
                            i._cache[n] = r
                        }
                        return new i(i._cache[n])
                    }
                    ,
                    i
            }),
            t.define("select2/diacritics", [], function () {
                return {
                    "Ⓐ": "A",
                    "Ａ": "A",
                    "À": "A",
                    "Á": "A",
                    "Â": "A",
                    "Ầ": "A",
                    "Ấ": "A",
                    "Ẫ": "A",
                    "Ẩ": "A",
                    "Ã": "A",
                    "Ā": "A",
                    "Ă": "A",
                    "Ằ": "A",
                    "Ắ": "A",
                    "Ẵ": "A",
                    "Ẳ": "A",
                    "Ȧ": "A",
                    "Ǡ": "A",
                    "Ä": "A",
                    "Ǟ": "A",
                    "Ả": "A",
                    "Å": "A",
                    "Ǻ": "A",
                    "Ǎ": "A",
                    "Ȁ": "A",
                    "Ȃ": "A",
                    "Ạ": "A",
                    "Ậ": "A",
                    "Ặ": "A",
                    "Ḁ": "A",
                    "Ą": "A",
                    "Ⱥ": "A",
                    "Ɐ": "A",
                    "Ꜳ": "AA",
                    "Æ": "AE",
                    "Ǽ": "AE",
                    "Ǣ": "AE",
                    "Ꜵ": "AO",
                    "Ꜷ": "AU",
                    "Ꜹ": "AV",
                    "Ꜻ": "AV",
                    "Ꜽ": "AY",
                    "Ⓑ": "B",
                    "Ｂ": "B",
                    "Ḃ": "B",
                    "Ḅ": "B",
                    "Ḇ": "B",
                    "Ƀ": "B",
                    "Ƃ": "B",
                    "Ɓ": "B",
                    "Ⓒ": "C",
                    "Ｃ": "C",
                    "Ć": "C",
                    "Ĉ": "C",
                    "Ċ": "C",
                    "Č": "C",
                    "Ç": "C",
                    "Ḉ": "C",
                    "Ƈ": "C",
                    "Ȼ": "C",
                    "Ꜿ": "C",
                    "Ⓓ": "D",
                    "Ｄ": "D",
                    "Ḋ": "D",
                    "Ď": "D",
                    "Ḍ": "D",
                    "Ḑ": "D",
                    "Ḓ": "D",
                    "Ḏ": "D",
                    "Đ": "D",
                    "Ƌ": "D",
                    "Ɗ": "D",
                    "Ɖ": "D",
                    "Ꝺ": "D",
                    "Ǳ": "DZ",
                    "Ǆ": "DZ",
                    "ǲ": "Dz",
                    "ǅ": "Dz",
                    "Ⓔ": "E",
                    "Ｅ": "E",
                    "È": "E",
                    "É": "E",
                    "Ê": "E",
                    "Ề": "E",
                    "Ế": "E",
                    "Ễ": "E",
                    "Ể": "E",
                    "Ẽ": "E",
                    "Ē": "E",
                    "Ḕ": "E",
                    "Ḗ": "E",
                    "Ĕ": "E",
                    "Ė": "E",
                    "Ë": "E",
                    "Ẻ": "E",
                    "Ě": "E",
                    "Ȅ": "E",
                    "Ȇ": "E",
                    "Ẹ": "E",
                    "Ệ": "E",
                    "Ȩ": "E",
                    "Ḝ": "E",
                    "Ę": "E",
                    "Ḙ": "E",
                    "Ḛ": "E",
                    "Ɛ": "E",
                    "Ǝ": "E",
                    "Ⓕ": "F",
                    "Ｆ": "F",
                    "Ḟ": "F",
                    "Ƒ": "F",
                    "Ꝼ": "F",
                    "Ⓖ": "G",
                    "Ｇ": "G",
                    "Ǵ": "G",
                    "Ĝ": "G",
                    "Ḡ": "G",
                    "Ğ": "G",
                    "Ġ": "G",
                    "Ǧ": "G",
                    "Ģ": "G",
                    "Ǥ": "G",
                    "Ɠ": "G",
                    "Ꞡ": "G",
                    "Ᵹ": "G",
                    "Ꝿ": "G",
                    "Ⓗ": "H",
                    "Ｈ": "H",
                    "Ĥ": "H",
                    "Ḣ": "H",
                    "Ḧ": "H",
                    "Ȟ": "H",
                    "Ḥ": "H",
                    "Ḩ": "H",
                    "Ḫ": "H",
                    "Ħ": "H",
                    "Ⱨ": "H",
                    "Ⱶ": "H",
                    "Ɥ": "H",
                    "Ⓘ": "I",
                    "Ｉ": "I",
                    "Ì": "I",
                    "Í": "I",
                    "Î": "I",
                    "Ĩ": "I",
                    "Ī": "I",
                    "Ĭ": "I",
                    "İ": "I",
                    "Ï": "I",
                    "Ḯ": "I",
                    "Ỉ": "I",
                    "Ǐ": "I",
                    "Ȉ": "I",
                    "Ȋ": "I",
                    "Ị": "I",
                    "Į": "I",
                    "Ḭ": "I",
                    "Ɨ": "I",
                    "Ⓙ": "J",
                    "Ｊ": "J",
                    "Ĵ": "J",
                    "Ɉ": "J",
                    "Ⓚ": "K",
                    "Ｋ": "K",
                    "Ḱ": "K",
                    "Ǩ": "K",
                    "Ḳ": "K",
                    "Ķ": "K",
                    "Ḵ": "K",
                    "Ƙ": "K",
                    "Ⱪ": "K",
                    "Ꝁ": "K",
                    "Ꝃ": "K",
                    "Ꝅ": "K",
                    "Ꞣ": "K",
                    "Ⓛ": "L",
                    "Ｌ": "L",
                    "Ŀ": "L",
                    "Ĺ": "L",
                    "Ľ": "L",
                    "Ḷ": "L",
                    "Ḹ": "L",
                    "Ļ": "L",
                    "Ḽ": "L",
                    "Ḻ": "L",
                    "Ł": "L",
                    "Ƚ": "L",
                    "Ɫ": "L",
                    "Ⱡ": "L",
                    "Ꝉ": "L",
                    "Ꝇ": "L",
                    "Ꞁ": "L",
                    "Ǉ": "LJ",
                    "ǈ": "Lj",
                    "Ⓜ": "M",
                    "Ｍ": "M",
                    "Ḿ": "M",
                    "Ṁ": "M",
                    "Ṃ": "M",
                    "Ɱ": "M",
                    "Ɯ": "M",
                    "Ⓝ": "N",
                    "Ｎ": "N",
                    "Ǹ": "N",
                    "Ń": "N",
                    "Ñ": "N",
                    "Ṅ": "N",
                    "Ň": "N",
                    "Ṇ": "N",
                    "Ņ": "N",
                    "Ṋ": "N",
                    "Ṉ": "N",
                    "Ƞ": "N",
                    "Ɲ": "N",
                    "Ꞑ": "N",
                    "Ꞥ": "N",
                    "Ǌ": "NJ",
                    "ǋ": "Nj",
                    "Ⓞ": "O",
                    "Ｏ": "O",
                    "Ò": "O",
                    "Ó": "O",
                    "Ô": "O",
                    "Ồ": "O",
                    "Ố": "O",
                    "Ỗ": "O",
                    "Ổ": "O",
                    "Õ": "O",
                    "Ṍ": "O",
                    "Ȭ": "O",
                    "Ṏ": "O",
                    "Ō": "O",
                    "Ṑ": "O",
                    "Ṓ": "O",
                    "Ŏ": "O",
                    "Ȯ": "O",
                    "Ȱ": "O",
                    "Ö": "O",
                    "Ȫ": "O",
                    "Ỏ": "O",
                    "Ő": "O",
                    "Ǒ": "O",
                    "Ȍ": "O",
                    "Ȏ": "O",
                    "Ơ": "O",
                    "Ờ": "O",
                    "Ớ": "O",
                    "Ỡ": "O",
                    "Ở": "O",
                    "Ợ": "O",
                    "Ọ": "O",
                    "Ộ": "O",
                    "Ǫ": "O",
                    "Ǭ": "O",
                    "Ø": "O",
                    "Ǿ": "O",
                    "Ɔ": "O",
                    "Ɵ": "O",
                    "Ꝋ": "O",
                    "Ꝍ": "O",
                    "Ƣ": "OI",
                    "Ꝏ": "OO",
                    "Ȣ": "OU",
                    "Ⓟ": "P",
                    "Ｐ": "P",
                    "Ṕ": "P",
                    "Ṗ": "P",
                    "Ƥ": "P",
                    "Ᵽ": "P",
                    "Ꝑ": "P",
                    "Ꝓ": "P",
                    "Ꝕ": "P",
                    "Ⓠ": "Q",
                    "Ｑ": "Q",
                    "Ꝗ": "Q",
                    "Ꝙ": "Q",
                    "Ɋ": "Q",
                    "Ⓡ": "R",
                    "Ｒ": "R",
                    "Ŕ": "R",
                    "Ṙ": "R",
                    "Ř": "R",
                    "Ȑ": "R",
                    "Ȓ": "R",
                    "Ṛ": "R",
                    "Ṝ": "R",
                    "Ŗ": "R",
                    "Ṟ": "R",
                    "Ɍ": "R",
                    "Ɽ": "R",
                    "Ꝛ": "R",
                    "Ꞧ": "R",
                    "Ꞃ": "R",
                    "Ⓢ": "S",
                    "Ｓ": "S",
                    "ẞ": "S",
                    "Ś": "S",
                    "Ṥ": "S",
                    "Ŝ": "S",
                    "Ṡ": "S",
                    "Š": "S",
                    "Ṧ": "S",
                    "Ṣ": "S",
                    "Ṩ": "S",
                    "Ș": "S",
                    "Ş": "S",
                    "Ȿ": "S",
                    "Ꞩ": "S",
                    "Ꞅ": "S",
                    "Ⓣ": "T",
                    "Ｔ": "T",
                    "Ṫ": "T",
                    "Ť": "T",
                    "Ṭ": "T",
                    "Ț": "T",
                    "Ţ": "T",
                    "Ṱ": "T",
                    "Ṯ": "T",
                    "Ŧ": "T",
                    "Ƭ": "T",
                    "Ʈ": "T",
                    "Ⱦ": "T",
                    "Ꞇ": "T",
                    "Ꜩ": "TZ",
                    "Ⓤ": "U",
                    "Ｕ": "U",
                    "Ù": "U",
                    "Ú": "U",
                    "Û": "U",
                    "Ũ": "U",
                    "Ṹ": "U",
                    "Ū": "U",
                    "Ṻ": "U",
                    "Ŭ": "U",
                    "Ü": "U",
                    "Ǜ": "U",
                    "Ǘ": "U",
                    "Ǖ": "U",
                    "Ǚ": "U",
                    "Ủ": "U",
                    "Ů": "U",
                    "Ű": "U",
                    "Ǔ": "U",
                    "Ȕ": "U",
                    "Ȗ": "U",
                    "Ư": "U",
                    "Ừ": "U",
                    "Ứ": "U",
                    "Ữ": "U",
                    "Ử": "U",
                    "Ự": "U",
                    "Ụ": "U",
                    "Ṳ": "U",
                    "Ų": "U",
                    "Ṷ": "U",
                    "Ṵ": "U",
                    "Ʉ": "U",
                    "Ⓥ": "V",
                    "Ｖ": "V",
                    "Ṽ": "V",
                    "Ṿ": "V",
                    "Ʋ": "V",
                    "Ꝟ": "V",
                    "Ʌ": "V",
                    "Ꝡ": "VY",
                    "Ⓦ": "W",
                    "Ｗ": "W",
                    "Ẁ": "W",
                    "Ẃ": "W",
                    "Ŵ": "W",
                    "Ẇ": "W",
                    "Ẅ": "W",
                    "Ẉ": "W",
                    "Ⱳ": "W",
                    "Ⓧ": "X",
                    "Ｘ": "X",
                    "Ẋ": "X",
                    "Ẍ": "X",
                    "Ⓨ": "Y",
                    "Ｙ": "Y",
                    "Ỳ": "Y",
                    "Ý": "Y",
                    "Ŷ": "Y",
                    "Ỹ": "Y",
                    "Ȳ": "Y",
                    "Ẏ": "Y",
                    "Ÿ": "Y",
                    "Ỷ": "Y",
                    "Ỵ": "Y",
                    "Ƴ": "Y",
                    "Ɏ": "Y",
                    "Ỿ": "Y",
                    "Ⓩ": "Z",
                    "Ｚ": "Z",
                    "Ź": "Z",
                    "Ẑ": "Z",
                    "Ż": "Z",
                    "Ž": "Z",
                    "Ẓ": "Z",
                    "Ẕ": "Z",
                    "Ƶ": "Z",
                    "Ȥ": "Z",
                    "Ɀ": "Z",
                    "Ⱬ": "Z",
                    "Ꝣ": "Z",
                    "ⓐ": "a",
                    "ａ": "a",
                    "ẚ": "a",
                    "à": "a",
                    "á": "a",
                    "â": "a",
                    "ầ": "a",
                    "ấ": "a",
                    "ẫ": "a",
                    "ẩ": "a",
                    "ã": "a",
                    "ā": "a",
                    "ă": "a",
                    "ằ": "a",
                    "ắ": "a",
                    "ẵ": "a",
                    "ẳ": "a",
                    "ȧ": "a",
                    "ǡ": "a",
                    "ä": "a",
                    "ǟ": "a",
                    "ả": "a",
                    "å": "a",
                    "ǻ": "a",
                    "ǎ": "a",
                    "ȁ": "a",
                    "ȃ": "a",
                    "ạ": "a",
                    "ậ": "a",
                    "ặ": "a",
                    "ḁ": "a",
                    "ą": "a",
                    "ⱥ": "a",
                    "ɐ": "a",
                    "ꜳ": "aa",
                    "æ": "ae",
                    "ǽ": "ae",
                    "ǣ": "ae",
                    "ꜵ": "ao",
                    "ꜷ": "au",
                    "ꜹ": "av",
                    "ꜻ": "av",
                    "ꜽ": "ay",
                    "ⓑ": "b",
                    "ｂ": "b",
                    "ḃ": "b",
                    "ḅ": "b",
                    "ḇ": "b",
                    "ƀ": "b",
                    "ƃ": "b",
                    "ɓ": "b",
                    "ⓒ": "c",
                    "ｃ": "c",
                    "ć": "c",
                    "ĉ": "c",
                    "ċ": "c",
                    "č": "c",
                    "ç": "c",
                    "ḉ": "c",
                    "ƈ": "c",
                    "ȼ": "c",
                    "ꜿ": "c",
                    "ↄ": "c",
                    "ⓓ": "d",
                    "ｄ": "d",
                    "ḋ": "d",
                    "ď": "d",
                    "ḍ": "d",
                    "ḑ": "d",
                    "ḓ": "d",
                    "ḏ": "d",
                    "đ": "d",
                    "ƌ": "d",
                    "ɖ": "d",
                    "ɗ": "d",
                    "ꝺ": "d",
                    "ǳ": "dz",
                    "ǆ": "dz",
                    "ⓔ": "e",
                    "ｅ": "e",
                    "è": "e",
                    "é": "e",
                    "ê": "e",
                    "ề": "e",
                    "ế": "e",
                    "ễ": "e",
                    "ể": "e",
                    "ẽ": "e",
                    "ē": "e",
                    "ḕ": "e",
                    "ḗ": "e",
                    "ĕ": "e",
                    "ė": "e",
                    "ë": "e",
                    "ẻ": "e",
                    "ě": "e",
                    "ȅ": "e",
                    "ȇ": "e",
                    "ẹ": "e",
                    "ệ": "e",
                    "ȩ": "e",
                    "ḝ": "e",
                    "ę": "e",
                    "ḙ": "e",
                    "ḛ": "e",
                    "ɇ": "e",
                    "ɛ": "e",
                    "ǝ": "e",
                    "ⓕ": "f",
                    "ｆ": "f",
                    "ḟ": "f",
                    "ƒ": "f",
                    "ꝼ": "f",
                    "ⓖ": "g",
                    "ｇ": "g",
                    "ǵ": "g",
                    "ĝ": "g",
                    "ḡ": "g",
                    "ğ": "g",
                    "ġ": "g",
                    "ǧ": "g",
                    "ģ": "g",
                    "ǥ": "g",
                    "ɠ": "g",
                    "ꞡ": "g",
                    "ᵹ": "g",
                    "ꝿ": "g",
                    "ⓗ": "h",
                    "ｈ": "h",
                    "ĥ": "h",
                    "ḣ": "h",
                    "ḧ": "h",
                    "ȟ": "h",
                    "ḥ": "h",
                    "ḩ": "h",
                    "ḫ": "h",
                    "ẖ": "h",
                    "ħ": "h",
                    "ⱨ": "h",
                    "ⱶ": "h",
                    "ɥ": "h",
                    "ƕ": "hv",
                    "ⓘ": "i",
                    "ｉ": "i",
                    "ì": "i",
                    "í": "i",
                    "î": "i",
                    "ĩ": "i",
                    "ī": "i",
                    "ĭ": "i",
                    "ï": "i",
                    "ḯ": "i",
                    "ỉ": "i",
                    "ǐ": "i",
                    "ȉ": "i",
                    "ȋ": "i",
                    "ị": "i",
                    "į": "i",
                    "ḭ": "i",
                    "ɨ": "i",
                    "ı": "i",
                    "ⓙ": "j",
                    "ｊ": "j",
                    "ĵ": "j",
                    "ǰ": "j",
                    "ɉ": "j",
                    "ⓚ": "k",
                    "ｋ": "k",
                    "ḱ": "k",
                    "ǩ": "k",
                    "ḳ": "k",
                    "ķ": "k",
                    "ḵ": "k",
                    "ƙ": "k",
                    "ⱪ": "k",
                    "ꝁ": "k",
                    "ꝃ": "k",
                    "ꝅ": "k",
                    "ꞣ": "k",
                    "ⓛ": "l",
                    "ｌ": "l",
                    "ŀ": "l",
                    "ĺ": "l",
                    "ľ": "l",
                    "ḷ": "l",
                    "ḹ": "l",
                    "ļ": "l",
                    "ḽ": "l",
                    "ḻ": "l",
                    "ſ": "l",
                    "ł": "l",
                    "ƚ": "l",
                    "ɫ": "l",
                    "ⱡ": "l",
                    "ꝉ": "l",
                    "ꞁ": "l",
                    "ꝇ": "l",
                    "ǉ": "lj",
                    "ⓜ": "m",
                    "ｍ": "m",
                    "ḿ": "m",
                    "ṁ": "m",
                    "ṃ": "m",
                    "ɱ": "m",
                    "ɯ": "m",
                    "ⓝ": "n",
                    "ｎ": "n",
                    "ǹ": "n",
                    "ń": "n",
                    "ñ": "n",
                    "ṅ": "n",
                    "ň": "n",
                    "ṇ": "n",
                    "ņ": "n",
                    "ṋ": "n",
                    "ṉ": "n",
                    "ƞ": "n",
                    "ɲ": "n",
                    "ŉ": "n",
                    "ꞑ": "n",
                    "ꞥ": "n",
                    "ǌ": "nj",
                    "ⓞ": "o",
                    "ｏ": "o",
                    "ò": "o",
                    "ó": "o",
                    "ô": "o",
                    "ồ": "o",
                    "ố": "o",
                    "ỗ": "o",
                    "ổ": "o",
                    "õ": "o",
                    "ṍ": "o",
                    "ȭ": "o",
                    "ṏ": "o",
                    "ō": "o",
                    "ṑ": "o",
                    "ṓ": "o",
                    "ŏ": "o",
                    "ȯ": "o",
                    "ȱ": "o",
                    "ö": "o",
                    "ȫ": "o",
                    "ỏ": "o",
                    "ő": "o",
                    "ǒ": "o",
                    "ȍ": "o",
                    "ȏ": "o",
                    "ơ": "o",
                    "ờ": "o",
                    "ớ": "o",
                    "ỡ": "o",
                    "ở": "o",
                    "ợ": "o",
                    "ọ": "o",
                    "ộ": "o",
                    "ǫ": "o",
                    "ǭ": "o",
                    "ø": "o",
                    "ǿ": "o",
                    "ɔ": "o",
                    "ꝋ": "o",
                    "ꝍ": "o",
                    "ɵ": "o",
                    "ƣ": "oi",
                    "ȣ": "ou",
                    "ꝏ": "oo",
                    "ⓟ": "p",
                    "ｐ": "p",
                    "ṕ": "p",
                    "ṗ": "p",
                    "ƥ": "p",
                    "ᵽ": "p",
                    "ꝑ": "p",
                    "ꝓ": "p",
                    "ꝕ": "p",
                    "ⓠ": "q",
                    "ｑ": "q",
                    "ɋ": "q",
                    "ꝗ": "q",
                    "ꝙ": "q",
                    "ⓡ": "r",
                    "ｒ": "r",
                    "ŕ": "r",
                    "ṙ": "r",
                    "ř": "r",
                    "ȑ": "r",
                    "ȓ": "r",
                    "ṛ": "r",
                    "ṝ": "r",
                    "ŗ": "r",
                    "ṟ": "r",
                    "ɍ": "r",
                    "ɽ": "r",
                    "ꝛ": "r",
                    "ꞧ": "r",
                    "ꞃ": "r",
                    "ⓢ": "s",
                    "ｓ": "s",
                    "ß": "s",
                    "ś": "s",
                    "ṥ": "s",
                    "ŝ": "s",
                    "ṡ": "s",
                    "š": "s",
                    "ṧ": "s",
                    "ṣ": "s",
                    "ṩ": "s",
                    "ș": "s",
                    "ş": "s",
                    "ȿ": "s",
                    "ꞩ": "s",
                    "ꞅ": "s",
                    "ẛ": "s",
                    "ⓣ": "t",
                    "ｔ": "t",
                    "ṫ": "t",
                    "ẗ": "t",
                    "ť": "t",
                    "ṭ": "t",
                    "ț": "t",
                    "ţ": "t",
                    "ṱ": "t",
                    "ṯ": "t",
                    "ŧ": "t",
                    "ƭ": "t",
                    "ʈ": "t",
                    "ⱦ": "t",
                    "ꞇ": "t",
                    "ꜩ": "tz",
                    "ⓤ": "u",
                    "ｕ": "u",
                    "ù": "u",
                    "ú": "u",
                    "û": "u",
                    "ũ": "u",
                    "ṹ": "u",
                    "ū": "u",
                    "ṻ": "u",
                    "ŭ": "u",
                    "ü": "u",
                    "ǜ": "u",
                    "ǘ": "u",
                    "ǖ": "u",
                    "ǚ": "u",
                    "ủ": "u",
                    "ů": "u",
                    "ű": "u",
                    "ǔ": "u",
                    "ȕ": "u",
                    "ȗ": "u",
                    "ư": "u",
                    "ừ": "u",
                    "ứ": "u",
                    "ữ": "u",
                    "ử": "u",
                    "ự": "u",
                    "ụ": "u",
                    "ṳ": "u",
                    "ų": "u",
                    "ṷ": "u",
                    "ṵ": "u",
                    "ʉ": "u",
                    "ⓥ": "v",
                    "ｖ": "v",
                    "ṽ": "v",
                    "ṿ": "v",
                    "ʋ": "v",
                    "ꝟ": "v",
                    "ʌ": "v",
                    "ꝡ": "vy",
                    "ⓦ": "w",
                    "ｗ": "w",
                    "ẁ": "w",
                    "ẃ": "w",
                    "ŵ": "w",
                    "ẇ": "w",
                    "ẅ": "w",
                    "ẘ": "w",
                    "ẉ": "w",
                    "ⱳ": "w",
                    "ⓧ": "x",
                    "ｘ": "x",
                    "ẋ": "x",
                    "ẍ": "x",
                    "ⓨ": "y",
                    "ｙ": "y",
                    "ỳ": "y",
                    "ý": "y",
                    "ŷ": "y",
                    "ỹ": "y",
                    "ȳ": "y",
                    "ẏ": "y",
                    "ÿ": "y",
                    "ỷ": "y",
                    "ẙ": "y",
                    "ỵ": "y",
                    "ƴ": "y",
                    "ɏ": "y",
                    "ỿ": "y",
                    "ⓩ": "z",
                    "ｚ": "z",
                    "ź": "z",
                    "ẑ": "z",
                    "ż": "z",
                    "ž": "z",
                    "ẓ": "z",
                    "ẕ": "z",
                    "ƶ": "z",
                    "ȥ": "z",
                    "ɀ": "z",
                    "ⱬ": "z",
                    "ꝣ": "z",
                    "Ά": "Α",
                    "Έ": "Ε",
                    "Ή": "Η",
                    "Ί": "Ι",
                    "Ϊ": "Ι",
                    "Ό": "Ο",
                    "Ύ": "Υ",
                    "Ϋ": "Υ",
                    "Ώ": "Ω",
                    "ά": "α",
                    "έ": "ε",
                    "ή": "η",
                    "ί": "ι",
                    "ϊ": "ι",
                    "ΐ": "ι",
                    "ό": "ο",
                    "ύ": "υ",
                    "ϋ": "υ",
                    "ΰ": "υ",
                    "ω": "ω",
                    "ς": "σ"
                }
            }),
            t.define("select2/data/base", ["../utils"], function (n) {
                function t() {
                    t.__super__.constructor.call(this)
                }
                return n.Extend(t, n.Observable),
                    t.prototype.current = function () {
                        throw new Error("The `current` method must be defined in child classes.");
                    }
                    ,
                    t.prototype.query = function () {
                        throw new Error("The `query` method must be defined in child classes.");
                    }
                    ,
                    t.prototype.bind = function () { }
                    ,
                    t.prototype.destroy = function () { }
                    ,
                    t.prototype.generateResultId = function (t, i) {
                        var r = t.id + "-result-";
                        return r += n.generateChars(4),
                            r += null != i.id ? "-" + i.id.toString() : "-" + n.generateChars(4),
                            r
                    }
                    ,
                    t
            }),
            t.define("select2/data/select", ["./base", "../utils", "jquery"], function (n, t, i) {
                function r(n, t) {
                    this.$element = n;
                    this.options = t;
                    r.__super__.constructor.call(this)
                }
                return t.Extend(r, n),
                    r.prototype.current = function (n) {
                        var t = []
                            , r = this;
                        this.$element.find(":selected").each(function () {
                            var n = i(this)
                                , u = r.item(n);
                            t.push(u)
                        });
                        n(t)
                    }
                    ,
                    r.prototype.select = function (n) {
                        var t = this, r;
                        if (n.selected = !0,
                            i(n.element).is("option"))
                            return n.element.selected = !0,
                                void this.$element.trigger("change");
                        this.$element.prop("multiple") ? this.current(function (r) {
                            var f = [], u, e;
                            for (n = [n],
                                n.push.apply(n, r),
                                u = 0; u < n.length; u++)
                                e = n[u].id,
                                    -1 === i.inArray(e, f) && f.push(e);
                            t.$element.val(f);
                            t.$element.trigger("change")
                        }) : (r = n.id,
                            this.$element.val(r),
                            this.$element.trigger("change"))
                    }
                    ,
                    r.prototype.unselect = function (n) {
                        var t = this;
                        if (this.$element.prop("multiple")) {
                            if (n.selected = !1,
                                i(n.element).is("option"))
                                return n.element.selected = !1,
                                    void this.$element.trigger("change");
                            this.current(function (r) {
                                for (var e, u = [], f = 0; f < r.length; f++)
                                    e = r[f].id,
                                        e !== n.id && -1 === i.inArray(e, u) && u.push(e);
                                t.$element.val(u);
                                t.$element.trigger("change")
                            })
                        }
                    }
                    ,
                    r.prototype.bind = function (n) {
                        var t = this;
                        this.container = n;
                        n.on("select", function (n) {
                            t.select(n.data)
                        });
                        n.on("unselect", function (n) {
                            t.unselect(n.data)
                        })
                    }
                    ,
                    r.prototype.destroy = function () {
                        this.$element.find("*").each(function () {
                            i.removeData(this, "data")
                        })
                    }
                    ,
                    r.prototype.query = function (n, t) {
                        var r = []
                            , u = this;
                        this.$element.children().each(function () {
                            var t = i(this), e, f;
                            (t.is("option") || t.is("optgroup")) && (e = u.item(t),
                                f = u.matches(n, e),
                                null !== f && r.push(f))
                        });
                        t({
                            results: r
                        })
                    }
                    ,
                    r.prototype.addOptions = function (n) {
                        t.appendMany(this.$element, n)
                    }
                    ,
                    r.prototype.option = function (n) {
                        var t, u, r;
                        return n.children ? (t = document.createElement("optgroup"),
                            t.label = n.text) : (t = document.createElement("option"),
                                void 0 !== t.textContent ? t.textContent = n.text : t.innerText = n.text),
                            void 0 !== n.id && (t.value = n.id),
                            n.disabled && (t.disabled = !0),
                            n.selected && (t.selected = !0),
                            n.title && (t.title = n.title),
                            u = i(t),
                            r = this._normalizeItem(n),
                            r.element = t,
                            i.data(t, "data", r),
                            u
                    }
                    ,
                    r.prototype.item = function (n) {
                        var t = {}, e, o;
                        if (null != (t = i.data(n[0], "data")))
                            return t;
                        if (n.is("option"))
                            t = {
                                id: n.val(),
                                text: n.text(),
                                disabled: n.prop("disabled"),
                                selected: n.prop("selected"),
                                title: n.prop("title")
                            };
                        else if (n.is("optgroup")) {
                            t = {
                                text: n.prop("label"),
                                children: [],
                                title: n.prop("title")
                            };
                            for (var u = n.children("option"), f = [], r = 0; r < u.length; r++)
                                e = i(u[r]),
                                    o = this.item(e),
                                    f.push(o);
                            t.children = f
                        }
                        return t = this._normalizeItem(t),
                            t.element = n[0],
                            i.data(n[0], "data", t),
                            t
                    }
                    ,
                    r.prototype._normalizeItem = function (n) {
                        i.isPlainObject(n) || (n = {
                            id: n,
                            text: n
                        });
                        n = i.extend({}, {
                            text: ""
                        }, n);
                        return null != n.id && (n.id = n.id.toString()),
                            null != n.text && (n.text = n.text.toString()),
                            null == n._resultId && n.id && null != this.container && (n._resultId = this.generateResultId(this.container, n)),
                            i.extend({}, {
                                selected: !1,
                                disabled: !1
                            }, n)
                    }
                    ,
                    r.prototype.matches = function (n, t) {
                        return this.options.get("matcher")(n, t)
                    }
                    ,
                    r
            }),
            t.define("select2/data/array", ["./select", "../utils", "jquery"], function (n, t, i) {
                function r(n, t) {
                    var i = t.get("data") || [];
                    r.__super__.constructor.call(this, n, t);
                    this.addOptions(this.convertToOptions(i))
                }
                return t.Extend(r, n),
                    r.prototype.select = function (n) {
                        var t = this.$element.find("option").filter(function (t, i) {
                            return i.value == n.id.toString()
                        });
                        0 === t.length && (t = this.option(n),
                            this.addOptions(t));
                        r.__super__.select.call(this, n)
                    }
                    ,
                    r.prototype.convertToOptions = function (n) {
                        function c(n) {
                            return function () {
                                return i(this).val() == n.id
                            }
                        }
                        for (var r, f, h, l = this, e = this.$element.find("option"), a = e.map(function () {
                            return l.item(i(this)).id
                        }).get(), o = [], u = 0; u < n.length; u++)
                            if (r = this._normalizeItem(n[u]),
                                i.inArray(r.id, a) >= 0) {
                                var s = e.filter(c(r))
                                    , v = this.item(s)
                                    , y = i.extend(!0, {}, r, v)
                                    , p = this.option(y);
                                s.replaceWith(p)
                            } else
                                f = this.option(r),
                                    r.children && (h = this.convertToOptions(r.children),
                                        t.appendMany(f, h)),
                                    o.push(f);
                        return o
                    }
                    ,
                    r
            }),
            t.define("select2/data/ajax", ["./array", "../utils", "jquery"], function (n, t, i) {
                function r(n, t) {
                    this.ajaxOptions = this._applyDefaults(t.get("ajax"));
                    null != this.ajaxOptions.processResults && (this.processResults = this.ajaxOptions.processResults);
                    r.__super__.constructor.call(this, n, t)
                }
                return t.Extend(r, n),
                    r.prototype._applyDefaults = function (n) {
                        var t = {
                            data: function (n) {
                                return i.extend({}, n, {
                                    q: n.term
                                })
                            },
                            transport: function (n, t, r) {
                                var u = i.ajax(n);
                                return u.then(t),
                                    u.fail(r),
                                    u
                            }
                        };
                        return i.extend({}, t, n, !0)
                    }
                    ,
                    r.prototype.processResults = function (n) {
                        return n
                    }
                    ,
                    r.prototype.query = function (n, t) {
                        function f() {
                            var f = r.transport(r, function (r) {
                                var f = u.processResults(r, n);
                                u.options.get("debug") && window.console && console.error && (f && f.results && i.isArray(f.results) || console.error("Select2: The AJAX results did not return an array in the `results` key of the response."));
                                t(f)
                            }, function () {
                                f.status && "0" === f.status || u.trigger("results:message", {
                                    message: "errorLoading"
                                })
                            });
                            u._request = f
                        }
                        var u = this, r;
                        null != this._request && (i.isFunction(this._request.abort) && this._request.abort(),
                            this._request = null);
                        r = i.extend({
                            type: "GET"
                        }, this.ajaxOptions);
                        "function" == typeof r.url && (r.url = r.url.call(this.$element, n));
                        "function" == typeof r.data && (r.data = r.data.call(this.$element, n));
                        this.ajaxOptions.delay && null != n.term ? (this._queryTimeout && window.clearTimeout(this._queryTimeout),
                            this._queryTimeout = window.setTimeout(f, this.ajaxOptions.delay)) : f()
                    }
                    ,
                    r
            }),
            t.define("select2/data/tags", ["jquery"], function (n) {
                function t(t, i, r) {
                    var f = r.get("tags"), o = r.get("createTag"), e, u;
                    if (void 0 !== o && (this.createTag = o),
                        e = r.get("insertTag"),
                        void 0 !== e && (this.insertTag = e),
                        t.call(this, i, r),
                        n.isArray(f))
                        for (u = 0; u < f.length; u++) {
                            var s = f[u]
                                , h = this._normalizeItem(s)
                                , c = this.option(h);
                            this.$element.append(c)
                        }
                }
                return t.prototype.query = function (n, t, i) {
                    function u(n, f) {
                        for (var s, l, h, c, e = n.results, o = 0; o < e.length; o++)
                            if (s = e[o],
                                l = null != s.children && !u({
                                    results: s.children
                                }, !0),
                                (s.text || "").toUpperCase() === (t.term || "").toUpperCase() || l)
                                return !f && (n.data = e,
                                    void i(n));
                        if (f)
                            return !0;
                        h = r.createTag(t);
                        null != h && (c = r.option(h),
                            c.attr("data-select2-tag", !0),
                            r.addOptions([c]),
                            r.insertTag(e, h));
                        n.results = e;
                        i(n)
                    }
                    var r = this;
                    if (this._removeOldTags(),
                        null == t.term || null != t.page)
                        return void n.call(this, t, i);
                    n.call(this, t, u)
                }
                    ,
                    t.prototype.createTag = function (t, i) {
                        var r = n.trim(i.term);
                        return "" === r ? null : {
                            id: r,
                            text: r
                        }
                    }
                    ,
                    t.prototype.insertTag = function (n, t, i) {
                        t.unshift(i)
                    }
                    ,
                    t.prototype._removeOldTags = function () {
                        this._lastTag;
                        this.$element.find("option[data-select2-tag]").each(function () {
                            this.selected || n(this).remove()
                        })
                    }
                    ,
                    t
            }),
            t.define("select2/data/tokenizer", ["jquery"], function (n) {
                function t(n, t, i) {
                    var r = i.get("tokenizer");
                    void 0 !== r && (this.tokenizer = r);
                    n.call(this, t, i)
                }
                return t.prototype.bind = function (n, t, i) {
                    n.call(this, t, i);
                    this.$search = t.dropdown.$search || t.selection.$search || i.find(".select2-search__field")
                }
                    ,
                    t.prototype.query = function (t, i, r) {
                        function e(t) {
                            var i = u._normalizeItem(t), r;
                            u.$element.find("option").filter(function () {
                                return n(this).val() === i.id
                            }).length || (r = u.option(i),
                                r.attr("data-select2-tag", !0),
                                u._removeOldTags(),
                                u.addOptions([r]));
                            o(i)
                        }
                        function o(n) {
                            u.trigger("select", {
                                data: n
                            })
                        }
                        var u = this, f;
                        i.term = i.term || "";
                        f = this.tokenizer(i, this.options, e);
                        f.term !== i.term && (this.$search.length && (this.$search.val(f.term),
                            this.$search.focus()),
                            i.term = f.term);
                        t.call(this, i, r)
                    }
                    ,
                    t.prototype.tokenizer = function (t, i, r, u) {
                        for (var o, h = r.get("tokenSeparators") || [], e = i.term, f = 0, c = this.createTag || function (n) {
                            return {
                                id: n.term,
                                text: n.term
                            }
                        }
                            ; f < e.length;)
                            if (o = e[f],
                                -1 !== n.inArray(o, h)) {
                                var l = e.substr(0, f)
                                    , a = n.extend({}, i, {
                                        term: l
                                    })
                                    , s = c(a);
                                null != s ? (u(s),
                                    e = e.substr(f + 1) || "",
                                    f = 0) : f++
                            } else
                                f++;
                        return {
                            term: e
                        }
                    }
                    ,
                    t
            }),
            t.define("select2/data/minimumInputLength", [], function () {
                function n(n, t, i) {
                    this.minimumInputLength = i.get("minimumInputLength");
                    n.call(this, t, i)
                }
                return n.prototype.query = function (n, t, i) {
                    if (t.term = t.term || "",
                        t.term.length < this.minimumInputLength)
                        return void this.trigger("results:message", {
                            message: "inputTooShort",
                            args: {
                                minimum: this.minimumInputLength,
                                input: t.term,
                                params: t
                            }
                        });
                    n.call(this, t, i)
                }
                    ,
                    n
            }),
            t.define("select2/data/maximumInputLength", [], function () {
                function n(n, t, i) {
                    this.maximumInputLength = i.get("maximumInputLength");
                    n.call(this, t, i)
                }
                return n.prototype.query = function (n, t, i) {
                    if (t.term = t.term || "",
                        this.maximumInputLength > 0 && t.term.length > this.maximumInputLength)
                        return void this.trigger("results:message", {
                            message: "inputTooLong",
                            args: {
                                maximum: this.maximumInputLength,
                                input: t.term,
                                params: t
                            }
                        });
                    n.call(this, t, i)
                }
                    ,
                    n
            }),
            t.define("select2/data/maximumSelectionLength", [], function () {
                function n(n, t, i) {
                    this.maximumSelectionLength = i.get("maximumSelectionLength");
                    n.call(this, t, i)
                }
                return n.prototype.query = function (n, t, i) {
                    var r = this;
                    this.current(function (u) {
                        var f = null != u ? u.length : 0;
                        if (r.maximumSelectionLength > 0 && f >= r.maximumSelectionLength)
                            return void r.trigger("results:message", {
                                message: "maximumSelected",
                                args: {
                                    maximum: r.maximumSelectionLength
                                }
                            });
                        n.call(r, t, i)
                    })
                }
                    ,
                    n
            }),
            t.define("select2/dropdown", ["jquery", "./utils"], function (n, t) {
                function i(n, t) {
                    this.$element = n;
                    this.options = t;
                    i.__super__.constructor.call(this)
                }
                return t.Extend(i, t.Observable),
                    i.prototype.render = function () {
                        var t = n('<span class="select2-dropdown"><span class="select2-results"><\/span><\/span>');
                        return t.attr("dir", this.options.get("dir")),
                            this.$dropdown = t,
                            t
                    }
                    ,
                    i.prototype.bind = function () { }
                    ,
                    i.prototype.position = function () { }
                    ,
                    i.prototype.destroy = function () {
                        this.$dropdown.remove()
                    }
                    ,
                    i
            }),
            t.define("select2/dropdown/search", ["jquery", "../utils"], function (n) {
                function t() { }
                return t.prototype.render = function (t) {
                    var r = t.call(this)
                        , i = n('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="textbox" /><\/span>');
                    return this.$searchContainer = i,
                        this.$search = i.find("input"),
                        r.prepend(i),
                        r
                }
                    ,
                    t.prototype.bind = function (t, i, r) {
                        var u = this;
                        t.call(this, i, r);
                        this.$search.on("keydown", function (n) {
                            u.trigger("keypress", n);
                            u._keyUpPrevented = n.isDefaultPrevented()
                        });
                        this.$search.on("input", function () {
                            n(this).off("keyup")
                        });
                        this.$search.on("keyup input", function (n) {
                            u.handleSearch(n)
                        });
                        i.on("open", function () {
                            u.$search.attr("tabindex", 0);
                            u.$search.focus();
                            window.setTimeout(function () {
                                u.$search.focus()
                            }, 0)
                        });
                        i.on("close", function () {
                            u.$search.attr("tabindex", -1);
                            u.$search.val("")
                        });
                        i.on("focus", function () {
                            i.isOpen() || u.$search.focus()
                        });
                        i.on("results:all", function (n) {
                            (null == n.query.term || "" === n.query.term) && (u.showSearch(n) ? u.$searchContainer.removeClass("select2-search--hide") : u.$searchContainer.addClass("select2-search--hide"))
                        })
                    }
                    ,
                    t.prototype.handleSearch = function () {
                        if (!this._keyUpPrevented) {
                            var n = this.$search.val();
                            this.trigger("query", {
                                term: n
                            })
                        }
                        this._keyUpPrevented = !1
                    }
                    ,
                    t.prototype.showSearch = function () {
                        return !0
                    }
                    ,
                    t
            }),
            t.define("select2/dropdown/hidePlaceholder", [], function () {
                function n(n, t, i, r) {
                    this.placeholder = this.normalizePlaceholder(i.get("placeholder"));
                    n.call(this, t, i, r)
                }
                return n.prototype.append = function (n, t) {
                    t.results = this.removePlaceholder(t.results);
                    n.call(this, t)
                }
                    ,
                    n.prototype.normalizePlaceholder = function (n, t) {
                        return "string" == typeof t && (t = {
                            id: "",
                            text: t
                        }),
                            t
                    }
                    ,
                    n.prototype.removePlaceholder = function (n, t) {
                        for (var u, r = t.slice(0), i = t.length - 1; i >= 0; i--)
                            u = t[i],
                                this.placeholder.id === u.id && r.splice(i, 1);
                        return r
                    }
                    ,
                    n
            }),
            t.define("select2/dropdown/infiniteScroll", ["jquery"], function (n) {
                function t(n, t, i, r) {
                    this.lastParams = {};
                    n.call(this, t, i, r);
                    this.$loadingMore = this.createLoadingMore();
                    this.loading = !1
                }
                return t.prototype.append = function (n, t) {
                    this.$loadingMore.remove();
                    this.loading = !1;
                    n.call(this, t);
                    this.showLoadingMore(t) && this.$results.append(this.$loadingMore)
                }
                    ,
                    t.prototype.bind = function (t, i, r) {
                        var u = this;
                        t.call(this, i, r);
                        i.on("query", function (n) {
                            u.lastParams = n;
                            u.loading = !0
                        });
                        i.on("query:append", function (n) {
                            u.lastParams = n;
                            u.loading = !0
                        });
                        this.$results.on("scroll", function () {
                            var t = n.contains(document.documentElement, u.$loadingMore[0]);
                            !u.loading && t && u.$results.offset().top + u.$results.outerHeight(!1) + 50 >= u.$loadingMore.offset().top + u.$loadingMore.outerHeight(!1) && u.loadMore()
                        })
                    }
                    ,
                    t.prototype.loadMore = function () {
                        this.loading = !0;
                        var t = n.extend({}, {
                            page: 1
                        }, this.lastParams);
                        t.page++;
                        this.trigger("query:append", t)
                    }
                    ,
                    t.prototype.showLoadingMore = function (n, t) {
                        return t.pagination && t.pagination.more
                    }
                    ,
                    t.prototype.createLoadingMore = function () {
                        var t = n('<li class="select2-results__option select2-results__option--load-more"role="treeitem" aria-disabled="true"><\/li>')
                            , i = this.options.get("translations").get("loadingMore");
                        return t.html(i(this.lastParams)),
                            t
                    }
                    ,
                    t
            }),
            t.define("select2/dropdown/attachBody", ["jquery", "../utils"], function (n, t) {
                function i(t, i, r) {
                    this.$dropdownParent = r.get("dropdownParent") || n(document.body);
                    t.call(this, i, r)
                }
                return i.prototype.bind = function (n, t, i) {
                    var r = this
                        , u = !1;
                    n.call(this, t, i);
                    t.on("open", function () {
                        r._showDropdown();
                        r._attachPositioningHandler(t);
                        u || (u = !0,
                            t.on("results:all", function () {
                                r._positionDropdown();
                                r._resizeDropdown()
                            }),
                            t.on("results:append", function () {
                                r._positionDropdown();
                                r._resizeDropdown()
                            }))
                    });
                    t.on("close", function () {
                        r._hideDropdown();
                        r._detachPositioningHandler(t)
                    });
                    this.$dropdownContainer.on("mousedown", function (n) {
                        n.stopPropagation()
                    })
                }
                    ,
                    i.prototype.destroy = function (n) {
                        n.call(this);
                        this.$dropdownContainer.remove()
                    }
                    ,
                    i.prototype.position = function (n, t, i) {
                        t.attr("class", i.attr("class"));
                        t.removeClass("select2");
                        t.addClass("select2-container--open");
                        t.css({
                            position: "absolute",
                            top: -999999
                        });
                        this.$container = i
                    }
                    ,
                    i.prototype.render = function (t) {
                        var i = n("<span><\/span>")
                            , r = t.call(this);
                        return i.append(r),
                            this.$dropdownContainer = i,
                            i
                    }
                    ,
                    i.prototype._hideDropdown = function () {
                        this.$dropdownContainer.detach()
                    }
                    ,
                    i.prototype._attachPositioningHandler = function (i, r) {
                        var u = this
                            , f = "scroll.select2." + r.id
                            , o = "resize.select2." + r.id
                            , s = "orientationchange.select2." + r.id
                            , e = this.$container.parents().filter(t.hasScroll);
                        e.each(function () {
                            n(this).data("select2-scroll-position", {
                                x: n(this).scrollLeft(),
                                y: n(this).scrollTop()
                            })
                        });
                        e.on(f, function () {
                            var t = n(this).data("select2-scroll-position");
                            n(this).scrollTop(t.y)
                        });
                        n(window).on(f + " " + o + " " + s, function () {
                            u._positionDropdown();
                            u._resizeDropdown()
                        })
                    }
                    ,
                    i.prototype._detachPositioningHandler = function (i, r) {
                        var u = "scroll.select2." + r.id
                            , f = "resize.select2." + r.id
                            , e = "orientationchange.select2." + r.id;
                        this.$container.parents().filter(t.hasScroll).off(u);
                        n(window).off(u + " " + f + " " + e)
                    }
                    ,
                    i.prototype._positionDropdown = function () {
                        var s = n(window), u = this.$dropdown.hasClass("select2-dropdown--above"), v = this.$dropdown.hasClass("select2-dropdown--below"), t = null, i = this.$container.offset(), r, o;
                        i.bottom = i.top + this.$container.outerHeight(!1);
                        r = {
                            height: this.$container.outerHeight(!1)
                        };
                        r.top = i.top;
                        r.bottom = i.top + r.height;
                        var h = {
                            height: this.$dropdown.outerHeight(!1)
                        }
                            , c = {
                                top: s.scrollTop(),
                                bottom: s.scrollTop() + s.height()
                            }
                            , l = c.top < i.top - h.height
                            , a = c.bottom > i.bottom + h.height
                            , f = {
                                left: i.left,
                                top: r.bottom
                            }
                            , e = this.$dropdownParent;
                        "static" === e.css("position") && (e = e.offsetParent());
                        o = e.offset();
                        f.top -= o.top;
                        f.left -= o.left;
                        u || v || (t = "below");
                        a || !l || u ? !l && a && u && (t = "below") : t = "above";
                        ("above" == t || u && "below" !== t) && (f.top = r.top - o.top - h.height);
                        null != t && (this.$dropdown.removeClass("select2-dropdown--below select2-dropdown--above").addClass("select2-dropdown--" + t),
                            this.$container.removeClass("select2-container--below select2-container--above").addClass("select2-container--" + t));
                        this.$dropdownContainer.css(f)
                    }
                    ,
                    i.prototype._resizeDropdown = function () {
                        var n = {
                            width: this.$container.outerWidth(!1) + "px"
                        };
                        this.options.get("dropdownAutoWidth") && (n.minWidth = n.width,
                            n.position = "relative",
                            n.width = "auto");
                        this.$dropdown.css(n)
                    }
                    ,
                    i.prototype._showDropdown = function () {
                        this.$dropdownContainer.appendTo(this.$dropdownParent);
                        this._positionDropdown();
                        this._resizeDropdown()
                    }
                    ,
                    i
            }),
            t.define("select2/dropdown/minimumResultsForSearch", [], function () {
                function n(t) {
                    for (var u, i = 0, r = 0; r < t.length; r++)
                        u = t[r],
                            u.children ? i += n(u.children) : i++;
                    return i
                }
                function t(n, t, i, r) {
                    this.minimumResultsForSearch = i.get("minimumResultsForSearch");
                    this.minimumResultsForSearch < 0 && (this.minimumResultsForSearch = 1 / 0);
                    n.call(this, t, i, r)
                }
                return t.prototype.showSearch = function (t, i) {
                    return !(n(i.data.results) < this.minimumResultsForSearch) && t.call(this, i)
                }
                    ,
                    t
            }),
            t.define("select2/dropdown/selectOnClose", [], function () {
                function n() { }
                return n.prototype.bind = function (n, t, i) {
                    var r = this;
                    n.call(this, t, i);
                    t.on("close", function (n) {
                        r._handleSelectOnClose(n)
                    })
                }
                    ,
                    n.prototype._handleSelectOnClose = function (n, t) {
                        var r, u, i;
                        t && null != t.originalSelect2Event && (r = t.originalSelect2Event,
                            "select" === r._type || "unselect" === r._type) || (u = this.getHighlightedResults(),
                                u.length < 1 || (i = u.data("data"),
                                    null != i.element && i.element.selected || null == i.element && i.selected || this.trigger("select", {
                                        data: i
                                    })))
                    }
                    ,
                    n
            }),
            t.define("select2/dropdown/closeOnSelect", [], function () {
                function n() { }
                return n.prototype.bind = function (n, t, i) {
                    var r = this;
                    n.call(this, t, i);
                    t.on("select", function (n) {
                        r._selectTriggered(n)
                    });
                    t.on("unselect", function (n) {
                        r._selectTriggered(n)
                    })
                }
                    ,
                    n.prototype._selectTriggered = function (n, t) {
                        var i = t.originalEvent;
                        i && i.ctrlKey || this.trigger("close", {
                            originalEvent: i,
                            originalSelect2Event: t
                        })
                    }
                    ,
                    n
            }),
            t.define("select2/i18n/en", [], function () {
                return {
                    errorLoading: function () {
                        return "The results could not be loaded."
                    },
                    inputTooLong: function (n) {
                        var t = n.input.length - n.maximum
                            , i = "Please delete " + t + " character";
                        return 1 != t && (i += "s"),
                            i
                    },
                    inputTooShort: function (n) {
                        return "Please enter " + (n.minimum - n.input.length) + " or more characters"
                    },
                    loadingMore: function () {
                        return "Loading more results…"
                    },
                    maximumSelected: function (n) {
                        var t = "You can only select " + n.maximum + " item";
                        return 1 != n.maximum && (t += "s"),
                            t
                    },
                    noResults: function () {
                        return "No results found"
                    },
                    searching: function () {
                        return "Searching…"
                    }
                }
            }),
            t.define("select2/defaults", ["jquery", "require", "./results", "./selection/single", "./selection/multiple", "./selection/placeholder", "./selection/allowClear", "./selection/search", "./selection/eventRelay", "./utils", "./translation", "./diacritics", "./data/select", "./data/array", "./data/ajax", "./data/tags", "./data/tokenizer", "./data/minimumInputLength", "./data/maximumInputLength", "./data/maximumSelectionLength", "./dropdown", "./dropdown/search", "./dropdown/hidePlaceholder", "./dropdown/infiniteScroll", "./dropdown/attachBody", "./dropdown/minimumResultsForSearch", "./dropdown/selectOnClose", "./dropdown/closeOnSelect", "./i18n/en"], function (n, t, i, r, u, f, e, o, s, h, c, l, a, v, y, p, w, b, k, d, g, nt, tt, it, rt, ut, ft, et, ot) {
                function st() {
                    this.reset()
                }
                return st.prototype.apply = function (l) {
                    var vt, yt, pt, wt, bt, kt, dt, ct, lt, st, ot, ht, gt, at;
                    if ((l = n.extend(!0, {}, this.defaults, l),
                        null == l.dataAdapter) && ((l.dataAdapter = null != l.ajax ? y : null != l.data ? v : a,
                            l.minimumInputLength > 0 && (l.dataAdapter = h.Decorate(l.dataAdapter, b)),
                            l.maximumInputLength > 0 && (l.dataAdapter = h.Decorate(l.dataAdapter, k)),
                            l.maximumSelectionLength > 0 && (l.dataAdapter = h.Decorate(l.dataAdapter, d)),
                            l.tags && (l.dataAdapter = h.Decorate(l.dataAdapter, p)),
                            null == l.tokenSeparators && null == l.tokenizer || (l.dataAdapter = h.Decorate(l.dataAdapter, w)),
                            null != l.query) && (vt = t(l.amdBase + "compat/query"),
                                l.dataAdapter = h.Decorate(l.dataAdapter, vt)),
                            null != l.initSelection && (yt = t(l.amdBase + "compat/initSelection"),
                                l.dataAdapter = h.Decorate(l.dataAdapter, yt))),
                        (null == l.resultsAdapter && (l.resultsAdapter = i,
                            null != l.ajax && (l.resultsAdapter = h.Decorate(l.resultsAdapter, it)),
                            null != l.placeholder && (l.resultsAdapter = h.Decorate(l.resultsAdapter, tt)),
                            l.selectOnClose && (l.resultsAdapter = h.Decorate(l.resultsAdapter, ft))),
                            null == l.dropdownAdapter) && (l.multiple ? l.dropdownAdapter = g : (pt = h.Decorate(g, nt),
                                l.dropdownAdapter = pt),
                                (0 !== l.minimumResultsForSearch && (l.dropdownAdapter = h.Decorate(l.dropdownAdapter, ut)),
                                    l.closeOnSelect && (l.dropdownAdapter = h.Decorate(l.dropdownAdapter, et)),
                                    null != l.dropdownCssClass || null != l.dropdownCss || null != l.adaptDropdownCssClass) && (wt = t(l.amdBase + "compat/dropdownCss"),
                                        l.dropdownAdapter = h.Decorate(l.dropdownAdapter, wt)),
                                l.dropdownAdapter = h.Decorate(l.dropdownAdapter, rt)),
                        null == l.selectionAdapter && ((l.selectionAdapter = l.multiple ? u : r,
                            null != l.placeholder && (l.selectionAdapter = h.Decorate(l.selectionAdapter, f)),
                            l.allowClear && (l.selectionAdapter = h.Decorate(l.selectionAdapter, e)),
                            l.multiple && (l.selectionAdapter = h.Decorate(l.selectionAdapter, o)),
                            null != l.containerCssClass || null != l.containerCss || null != l.adaptContainerCssClass) && (bt = t(l.amdBase + "compat/containerCss"),
                                l.selectionAdapter = h.Decorate(l.selectionAdapter, bt)),
                            l.selectionAdapter = h.Decorate(l.selectionAdapter, s)),
                        "string" == typeof l.language && (l.language.indexOf("-") > 0 ? (kt = l.language.split("-"),
                            dt = kt[0],
                            l.language = [l.language, dt]) : l.language = [l.language]),
                        n.isArray(l.language)) {
                        for (ct = new c,
                            l.language.push("en"),
                            lt = l.language,
                            st = 0; st < lt.length; st++) {
                            ot = lt[st];
                            ht = {};
                            try {
                                ht = c.loadPath(ot)
                            } catch (n) {
                                try {
                                    ot = this.defaults.amdLanguageBase + ot;
                                    ht = c.loadPath(ot)
                                } catch (n) {
                                    l.debug && window.console && console.warn && console.warn('Select2: The language file for "' + ot + '" could not be automatically loaded. A fallback will be used instead.');
                                    continue
                                }
                            }
                            ct.extend(ht)
                        }
                        l.translations = ct
                    } else
                        gt = c.loadPath(this.defaults.amdLanguageBase + "en"),
                            at = new c(l.language),
                            at.extend(gt),
                            l.translations = at;
                    return l
                }
                    ,
                    st.prototype.reset = function () {
                        function i(n) {
                            function t(n) {
                                return l[n] || n
                            }
                            return n.replace(/[^\u0000-\u007E]/g, t)
                        }
                        function t(r, u) {
                            var f, e, o, s;
                            if ("" === n.trim(r.term))
                                return u;
                            if (u.children && u.children.length > 0) {
                                for (f = n.extend(!0, {}, u),
                                    e = u.children.length - 1; e >= 0; e--)
                                    null == t(r, u.children[e]) && f.children.splice(e, 1);
                                return f.children.length > 0 ? f : t(r, f)
                            }
                            return o = i(u.text).toUpperCase(),
                                s = i(r.term).toUpperCase(),
                                o.indexOf(s) > -1 ? u : null
                        }
                        this.defaults = {
                            amdBase: "./",
                            amdLanguageBase: "./i18n/",
                            closeOnSelect: !0,
                            debug: !1,
                            dropdownAutoWidth: !1,
                            escapeMarkup: h.escapeMarkup,
                            language: ot,
                            matcher: t,
                            minimumInputLength: 0,
                            maximumInputLength: 0,
                            maximumSelectionLength: 0,
                            minimumResultsForSearch: 0,
                            selectOnClose: !1,
                            sorter: function (n) {
                                return n
                            },
                            templateResult: function (n) {
                                return n.text
                            },
                            templateSelection: function (n) {
                                return n.text
                            },
                            theme: "default",
                            width: "resolve"
                        }
                    }
                    ,
                    st.prototype.set = function (t, i) {
                        var f = n.camelCase(t), r = {}, u;
                        r[f] = i;
                        u = h._convertData(r);
                        n.extend(this.defaults, u)
                    }
                    ,
                    new st
            }),
            t.define("select2/options", ["require", "jquery", "./defaults", "./utils"], function (n, t, i, r) {
                function u(t, u) {
                    if (this.options = t,
                        null != u && this.fromElement(u),
                        this.options = i.apply(this.options),
                        u && u.is("input")) {
                        var f = n(this.get("amdBase") + "compat/inputData");
                        this.options.dataAdapter = r.Decorate(this.options.dataAdapter, f)
                    }
                }
                return u.prototype.fromElement = function (n) {
                    var e = ["select2"], f, u, i;
                    null == this.options.multiple && (this.options.multiple = n.prop("multiple"));
                    null == this.options.disabled && (this.options.disabled = n.prop("disabled"));
                    null == this.options.language && (n.prop("lang") ? this.options.language = n.prop("lang").toLowerCase() : n.closest("[lang]").prop("lang") && (this.options.language = n.closest("[lang]").prop("lang")));
                    null == this.options.dir && (this.options.dir = n.prop("dir") ? n.prop("dir") : n.closest("[dir]").prop("dir") ? n.closest("[dir]").prop("dir") : "ltr");
                    n.prop("disabled", this.options.disabled);
                    n.prop("multiple", this.options.multiple);
                    n.data("select2Tags") && (this.options.debug && window.console && console.warn && console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'),
                        n.data("data", n.data("select2Tags")),
                        n.data("tags", !0));
                    n.data("ajaxUrl") && (this.options.debug && window.console && console.warn && console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."),
                        n.attr("ajax--url", n.data("ajaxUrl")),
                        n.data("ajax--url", n.data("ajaxUrl")));
                    f = {};
                    f = t.fn.jquery && "1." == t.fn.jquery.substr(0, 2) && n[0].dataset ? t.extend(!0, {}, n[0].dataset, n.data()) : n.data();
                    u = t.extend(!0, {}, f);
                    u = r._convertData(u);
                    for (i in u)
                        t.inArray(i, e) > -1 || (t.isPlainObject(this.options[i]) ? t.extend(this.options[i], u[i]) : this.options[i] = u[i]);
                    return this
                }
                    ,
                    u.prototype.get = function (n) {
                        return this.options[n]
                    }
                    ,
                    u.prototype.set = function (n, t) {
                        this.options[n] = t
                    }
                    ,
                    u
            }),
            t.define("select2/core", ["jquery", "./options", "./utils", "./keys"], function (n, t, i, r) {
                var u = function (n, i) {
                    var f, e, r, o, s, h, c;
                    null != n.data("select2") && n.data("select2").destroy();
                    this.$element = n;
                    this.id = this._generateId(n);
                    i = i || {};
                    this.options = new t(i, n);
                    u.__super__.constructor.call(this);
                    f = n.attr("tabindex") || 0;
                    n.data("old-tabindex", f);
                    n.attr("tabindex", "-1");
                    e = this.options.get("dataAdapter");
                    this.dataAdapter = new e(n, this.options);
                    r = this.render();
                    this._placeContainer(r);
                    o = this.options.get("selectionAdapter");
                    this.selection = new o(n, this.options);
                    this.$selection = this.selection.render();
                    this.selection.position(this.$selection, r);
                    s = this.options.get("dropdownAdapter");
                    this.dropdown = new s(n, this.options);
                    this.$dropdown = this.dropdown.render();
                    this.dropdown.position(this.$dropdown, r);
                    h = this.options.get("resultsAdapter");
                    this.results = new h(n, this.options, this.dataAdapter);
                    this.$results = this.results.render();
                    this.results.position(this.$results, this.$dropdown);
                    c = this;
                    this._bindAdapters();
                    this._registerDomEvents();
                    this._registerDataEvents();
                    this._registerSelectionEvents();
                    this._registerDropdownEvents();
                    this._registerResultsEvents();
                    this._registerEvents();
                    this.dataAdapter.current(function (n) {
                        c.trigger("selection:update", {
                            data: n
                        })
                    });
                    n.addClass("select2-hidden-accessible");
                    n.attr("aria-hidden", "true");
                    this._syncAttributes();
                    n.data("select2", this)
                };
                return i.Extend(u, i.Observable),
                    u.prototype._generateId = function (n) {
                        var t = "";
                        return t = null != n.attr("id") ? n.attr("id") : null != n.attr("name") ? n.attr("name") + "-" + i.generateChars(2) : i.generateChars(4),
                            t = t.replace(/(:|\.|\[|\]|,)/g, ""),
                            t = "select2-" + t
                    }
                    ,
                    u.prototype._placeContainer = function (n) {
                        n.insertAfter(this.$element);
                        var t = this._resolveWidth(this.$element, this.options.get("width"));
                        null != t && n.css("width", t)
                    }
                    ,
                    u.prototype._resolveWidth = function (n, t) {
                        var r, u, f, s, i;
                        if ("resolve" == t)
                            return r = this._resolveWidth(n, "style"),
                                null != r ? r : this._resolveWidth(n, "element");
                        if ("element" == t)
                            return u = n.outerWidth(!1),
                                u <= 0 ? "auto" : u + "px";
                        if ("style" == t) {
                            if (f = n.attr("style"),
                                "string" != typeof f)
                                return null;
                            for (var o = f.split(";"), e = 0, h = o.length; e < h; e += 1)
                                if (s = o[e].replace(/\s/g, ""),
                                    i = s.match(/^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i),
                                    null !== i && i.length >= 1)
                                    return i[1];
                            return null
                        }
                        return t
                    }
                    ,
                    u.prototype._bindAdapters = function () {
                        this.dataAdapter.bind(this, this.$container);
                        this.selection.bind(this, this.$container);
                        this.dropdown.bind(this, this.$container);
                        this.results.bind(this, this.$container)
                    }
                    ,
                    u.prototype._registerDomEvents = function () {
                        var t = this, r;
                        this.$element.on("change.select2", function () {
                            t.dataAdapter.current(function (n) {
                                t.trigger("selection:update", {
                                    data: n
                                })
                            })
                        });
                        this.$element.on("focus.select2", function (n) {
                            t.trigger("focus", n)
                        });
                        this._syncA = i.bind(this._syncAttributes, this);
                        this._syncS = i.bind(this._syncSubtree, this);
                        this.$element[0].attachEvent && this.$element[0].attachEvent("onpropertychange", this._syncA);
                        r = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
                        null != r ? (this._observer = new r(function (i) {
                            n.each(i, t._syncA);
                            n.each(i, t._syncS)
                        }
                        ),
                            this._observer.observe(this.$element[0], {
                                attributes: !0,
                                childList: !0,
                                subtree: !1
                            })) : this.$element[0].addEventListener && (this.$element[0].addEventListener("DOMAttrModified", t._syncA, !1),
                                this.$element[0].addEventListener("DOMNodeInserted", t._syncS, !1),
                                this.$element[0].addEventListener("DOMNodeRemoved", t._syncS, !1))
                    }
                    ,
                    u.prototype._registerDataEvents = function () {
                        var n = this;
                        this.dataAdapter.on("*", function (t, i) {
                            n.trigger(t, i)
                        })
                    }
                    ,
                    u.prototype._registerSelectionEvents = function () {
                        var t = this
                            , i = ["toggle", "focus"];
                        this.selection.on("toggle", function () {
                            t.toggleDropdown()
                        });
                        this.selection.on("focus", function (n) {
                            t.focus(n)
                        });
                        this.selection.on("*", function (r, u) {
                            -1 === n.inArray(r, i) && t.trigger(r, u)
                        })
                    }
                    ,
                    u.prototype._registerDropdownEvents = function () {
                        var n = this;
                        this.dropdown.on("*", function (t, i) {
                            n.trigger(t, i)
                        })
                    }
                    ,
                    u.prototype._registerResultsEvents = function () {
                        var n = this;
                        this.results.on("*", function (t, i) {
                            n.trigger(t, i)
                        })
                    }
                    ,
                    u.prototype._registerEvents = function () {
                        var n = this;
                        this.on("open", function () {
                            n.$container.addClass("select2-container--open")
                        });
                        this.on("close", function () {
                            n.$container.removeClass("select2-container--open")
                        });
                        this.on("enable", function () {
                            n.$container.removeClass("select2-container--disabled")
                        });
                        this.on("disable", function () {
                            n.$container.addClass("select2-container--disabled")
                        });
                        this.on("blur", function () {
                            n.$container.removeClass("select2-container--focus")
                        });
                        this.on("query", function (t) {
                            n.isOpen() || n.trigger("open", {});
                            this.dataAdapter.query(t, function (i) {
                                n.trigger("results:all", {
                                    data: i,
                                    query: t
                                })
                            })
                        });
                        this.on("query:append", function (t) {
                            this.dataAdapter.query(t, function (i) {
                                n.trigger("results:append", {
                                    data: i,
                                    query: t
                                })
                            })
                        });
                        this.on("keypress", function (t) {
                            var i = t.which;
                            n.isOpen() ? i === r.ESC || i === r.TAB || i === r.UP && t.altKey ? (n.close(),
                                t.preventDefault()) : i === r.ENTER ? (n.trigger("results:select", {}),
                                    t.preventDefault()) : i === r.SPACE && t.ctrlKey ? (n.trigger("results:toggle", {}),
                                        t.preventDefault()) : i === r.UP ? (n.trigger("results:previous", {}),
                                            t.preventDefault()) : i === r.DOWN && (n.trigger("results:next", {}),
                                                t.preventDefault()) : (i === r.ENTER || i === r.SPACE || i === r.DOWN && t.altKey) && (n.open(),
                                                    t.preventDefault())
                        })
                    }
                    ,
                    u.prototype._syncAttributes = function () {
                        this.options.set("disabled", this.$element.prop("disabled"));
                        this.options.get("disabled") ? (this.isOpen() && this.close(),
                            this.trigger("disable", {})) : this.trigger("enable", {})
                    }
                    ,
                    u.prototype._syncSubtree = function (n, t) {
                        var i = !1, f = this, r, u;
                        if (!n || !n.target || "OPTION" === n.target.nodeName || "OPTGROUP" === n.target.nodeName) {
                            if (t)
                                if (t.addedNodes && t.addedNodes.length > 0)
                                    for (r = 0; r < t.addedNodes.length; r++)
                                        u = t.addedNodes[r],
                                            u.selected && (i = !0);
                                else
                                    t.removedNodes && t.removedNodes.length > 0 && (i = !0);
                            else
                                i = !0;
                            i && this.dataAdapter.current(function (n) {
                                f.trigger("selection:update", {
                                    data: n
                                })
                            })
                        }
                    }
                    ,
                    u.prototype.trigger = function (n, t) {
                        var r = u.__super__.trigger, f = {
                            open: "opening",
                            close: "closing",
                            select: "selecting",
                            unselect: "unselecting"
                        }, e, i;
                        if ((void 0 === t && (t = {}),
                            n in f) && (e = f[n],
                                i = {
                                    prevented: !1,
                                    name: n,
                                    args: t
                                },
                                r.call(this, e, i),
                                i.prevented))
                            return void (t.prevented = !0);
                        r.call(this, n, t)
                    }
                    ,
                    u.prototype.toggleDropdown = function () {
                        this.options.get("disabled") || (this.isOpen() ? this.close() : this.open())
                    }
                    ,
                    u.prototype.open = function () {
                        this.isOpen() || this.trigger("query", {})
                    }
                    ,
                    u.prototype.close = function () {
                        this.isOpen() && this.trigger("close", {})
                    }
                    ,
                    u.prototype.isOpen = function () {
                        return this.$container.hasClass("select2-container--open")
                    }
                    ,
                    u.prototype.hasFocus = function () {
                        return this.$container.hasClass("select2-container--focus")
                    }
                    ,
                    u.prototype.focus = function () {
                        this.hasFocus() || (this.$container.addClass("select2-container--focus"),
                            this.trigger("focus", {}))
                    }
                    ,
                    u.prototype.enable = function (n) {
                        this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.');
                        null != n && 0 !== n.length || (n = [!0]);
                        var t = !n[0];
                        this.$element.prop("disabled", t)
                    }
                    ,
                    u.prototype.data = function () {
                        this.options.get("debug") && arguments.length > 0 && window.console && console.warn && console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.');
                        var n = [];
                        return this.dataAdapter.current(function (t) {
                            n = t
                        }),
                            n
                    }
                    ,
                    u.prototype.val = function (t) {
                        if (this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'),
                            null == t || 0 === t.length)
                            return this.$element.val();
                        var i = t[0];
                        n.isArray(i) && (i = n.map(i, function (n) {
                            return n.toString()
                        }));
                        this.$element.val(i).trigger("change")
                    }
                    ,
                    u.prototype.destroy = function () {
                        this.$container.remove();
                        this.$element[0].detachEvent && this.$element[0].detachEvent("onpropertychange", this._syncA);
                        null != this._observer ? (this._observer.disconnect(),
                            this._observer = null) : this.$element[0].removeEventListener && (this.$element[0].removeEventListener("DOMAttrModified", this._syncA, !1),
                                this.$element[0].removeEventListener("DOMNodeInserted", this._syncS, !1),
                                this.$element[0].removeEventListener("DOMNodeRemoved", this._syncS, !1));
                        this._syncA = null;
                        this._syncS = null;
                        this.$element.off(".select2");
                        this.$element.attr("tabindex", this.$element.data("old-tabindex"));
                        this.$element.removeClass("select2-hidden-accessible");
                        this.$element.attr("aria-hidden", "false");
                        this.$element.removeData("select2");
                        this.dataAdapter.destroy();
                        this.selection.destroy();
                        this.dropdown.destroy();
                        this.results.destroy();
                        this.dataAdapter = null;
                        this.selection = null;
                        this.dropdown = null;
                        this.results = null
                    }
                    ,
                    u.prototype.render = function () {
                        var t = n('<span class="select2 select2-container"><span class="selection"><\/span><span class="dropdown-wrapper" aria-hidden="true"><\/span><\/span>');
                        return t.attr("dir", this.options.get("dir")),
                            this.$container = t,
                            this.$container.addClass("select2-container--" + this.options.get("theme")),
                            t.data("element", this.$element),
                            t
                    }
                    ,
                    u
            }),
            t.define("select2/compat/utils", ["jquery"], function (n) {
                function t(t, i, r) {
                    var u, e, f = [];
                    u = n.trim(t.attr("class"));
                    u && (u = "" + u,
                        n(u.split(/\s+/)).each(function () {
                            0 === this.indexOf("select2-") && f.push(this)
                        }));
                    u = n.trim(i.attr("class"));
                    u && (u = "" + u,
                        n(u.split(/\s+/)).each(function () {
                            0 !== this.indexOf("select2-") && null != (e = r(this)) && f.push(e)
                        }));
                    t.attr("class", f.join(" "))
                }
                return {
                    syncCssClasses: t
                }
            }),
            t.define("select2/compat/containerCss", ["jquery", "./utils"], function (n, t) {
                function r() {
                    return null
                }
                function i() { }
                return i.prototype.render = function (i) {
                    var o = i.call(this), u = this.options.get("containerCssClass") || "", f, s, e;
                    return n.isFunction(u) && (u = u(this.$element)),
                        f = this.options.get("adaptContainerCssClass"),
                        (f = f || r,
                            -1 !== u.indexOf(":all:")) && (u = u.replace(":all:", ""),
                                s = f,
                                f = function (n) {
                                    var t = s(n);
                                    return null != t ? t + " " + n : n
                                }
                        ),
                        e = this.options.get("containerCss") || {},
                        n.isFunction(e) && (e = e(this.$element)),
                        t.syncCssClasses(o, this.$element, f),
                        o.css(e),
                        o.addClass(u),
                        o
                }
                    ,
                    i
            }),
            t.define("select2/compat/dropdownCss", ["jquery", "./utils"], function (n, t) {
                function r() {
                    return null
                }
                function i() { }
                return i.prototype.render = function (i) {
                    var o = i.call(this), u = this.options.get("dropdownCssClass") || "", f, s, e;
                    return n.isFunction(u) && (u = u(this.$element)),
                        f = this.options.get("adaptDropdownCssClass"),
                        (f = f || r,
                            -1 !== u.indexOf(":all:")) && (u = u.replace(":all:", ""),
                                s = f,
                                f = function (n) {
                                    var t = s(n);
                                    return null != t ? t + " " + n : n
                                }
                        ),
                        e = this.options.get("dropdownCss") || {},
                        n.isFunction(e) && (e = e(this.$element)),
                        t.syncCssClasses(o, this.$element, f),
                        o.css(e),
                        o.addClass(u),
                        o
                }
                    ,
                    i
            }),
            t.define("select2/compat/initSelection", ["jquery"], function (n) {
                function t(n, t, i) {
                    i.get("debug") && window.console && console.warn && console.warn("Select2: The `initSelection` option has been deprecated in favor of a custom data adapter that overrides the `current` method. This method is now called multiple times instead of a single time when the instance is initialized. Support will be removed for the `initSelection` option in future versions of Select2");
                    this.initSelection = i.get("initSelection");
                    this._isInitialized = !1;
                    n.call(this, t, i)
                }
                return t.prototype.current = function (t, i) {
                    var r = this;
                    if (this._isInitialized)
                        return void t.call(this, i);
                    this.initSelection.call(null, this.$element, function (t) {
                        r._isInitialized = !0;
                        n.isArray(t) || (t = [t]);
                        i(t)
                    })
                }
                    ,
                    t
            }),
            t.define("select2/compat/inputData", ["jquery"], function (n) {
                function t(n, t, i) {
                    this._currentData = [];
                    this._valueSeparator = i.get("valueSeparator") || ",";
                    "hidden" === t.prop("type") && i.get("debug") && console && console.warn && console.warn("Select2: Using a hidden input with Select2 is no longer supported and may stop working in the future. It is recommended to use a `<select>` element instead.");
                    n.call(this, t, i)
                }
                return t.prototype.current = function (t, i) {
                    function f(t, i) {
                        var r = [];
                        return t.selected || -1 !== n.inArray(t.id, i) ? (t.selected = !0,
                            r.push(t)) : t.selected = !1,
                            t.children && r.push.apply(r, f(t.children, i)),
                            r
                    }
                    for (var e, r = [], u = 0; u < this._currentData.length; u++)
                        e = this._currentData[u],
                            r.push.apply(r, f(e, this.$element.val().split(this._valueSeparator)));
                    i(r)
                }
                    ,
                    t.prototype.select = function (t, i) {
                        if (this.options.get("multiple")) {
                            var r = this.$element.val();
                            r += this._valueSeparator + i.id;
                            this.$element.val(r);
                            this.$element.trigger("change")
                        } else
                            this.current(function (t) {
                                n.map(t, function (n) {
                                    n.selected = !1
                                })
                            }),
                                this.$element.val(i.id),
                                this.$element.trigger("change")
                    }
                    ,
                    t.prototype.unselect = function (n, t) {
                        var i = this;
                        t.selected = !1;
                        this.current(function (n) {
                            for (var f, u = [], r = 0; r < n.length; r++)
                                f = n[r],
                                    t.id != f.id && u.push(f.id);
                            i.$element.val(u.join(i._valueSeparator));
                            i.$element.trigger("change")
                        })
                    }
                    ,
                    t.prototype.query = function (n, t, i) {
                        for (var e, f, u = [], r = 0; r < this._currentData.length; r++)
                            e = this._currentData[r],
                                f = this.matches(t, e),
                                null !== f && u.push(f);
                        i({
                            results: u
                        })
                    }
                    ,
                    t.prototype.addOptions = function (t, i) {
                        var r = n.map(i, function (t) {
                            return n.data(t[0], "data")
                        });
                        this._currentData.push.apply(this._currentData, r)
                    }
                    ,
                    t
            }),
            t.define("select2/compat/matcher", ["jquery"], function (n) {
                function t(t) {
                    function i(i, r) {
                        var u = n.extend(!0, {}, r), f, e;
                        if (null == i.term || "" === n.trim(i.term))
                            return u;
                        if (r.children) {
                            for (f = r.children.length - 1; f >= 0; f--)
                                e = r.children[f],
                                    t(i.term, e.text, e) || u.children.splice(f, 1);
                            if (u.children.length > 0)
                                return u
                        }
                        return t(i.term, r.text, r) ? u : null
                    }
                    return i
                }
                return t
            }),
            t.define("select2/compat/query", [], function () {
                function n(n, t, i) {
                    i.get("debug") && window.console && console.warn && console.warn("Select2: The `query` option has been deprecated in favor of a custom data adapter that overrides the `query` method. Support will be removed for the `query` option in future versions of Select2.");
                    n.call(this, t, i)
                }
                return n.prototype.query = function (n, t, i) {
                    t.callback = i;
                    this.options.get("query").call(null, t)
                }
                    ,
                    n
            }),
            t.define("select2/dropdown/attachContainer", [], function () {
                function n(n, t, i) {
                    n.call(this, t, i)
                }
                return n.prototype.position = function (n, t, i) {
                    i.find(".dropdown-wrapper").append(t);
                    t.addClass("select2-dropdown--below");
                    i.addClass("select2-container--below")
                }
                    ,
                    n
            }),
            t.define("select2/dropdown/stopPropagation", [], function () {
                function n() { }
                return n.prototype.bind = function (n, t, i) {
                    n.call(this, t, i);
                    this.$dropdown.on("blur change click dblclick focus focusin focusout input keydown keyup keypress mousedown mouseenter mouseleave mousemove mouseover mouseup search touchend touchstart", function (n) {
                        n.stopPropagation()
                    })
                }
                    ,
                    n
            }),
            t.define("select2/selection/stopPropagation", [], function () {
                function n() { }
                return n.prototype.bind = function (n, t, i) {
                    n.call(this, t, i);
                    this.$selection.on("blur change click dblclick focus focusin focusout input keydown keyup keypress mousedown mouseenter mouseleave mousemove mouseover mouseup search touchend touchstart", function (n) {
                        n.stopPropagation()
                    })
                }
                    ,
                    n
            }),
            function (i) {
                "function" == typeof t.define && t.define.amd ? t.define("jquery-mousewheel", ["jquery"], i) : "object" == typeof exports ? module.exports = i : i(n)
            }(function (n) {
                function u(r) {
                    var u = r || window.event, w = c.call(arguments, 1), l = 0, s = 0, e = 0, a = 0, b = 0, k = 0, v, y, p;
                    if (r = n.event.fix(u),
                        r.type = "mousewheel",
                        "detail" in u && (e = -1 * u.detail),
                        "wheelDelta" in u && (e = u.wheelDelta),
                        "wheelDeltaY" in u && (e = u.wheelDeltaY),
                        "wheelDeltaX" in u && (s = -1 * u.wheelDeltaX),
                        "axis" in u && u.axis === u.HORIZONTAL_AXIS && (s = -1 * e,
                            e = 0),
                        l = 0 === e ? s : e,
                        "deltaY" in u && (e = -1 * u.deltaY,
                            l = e),
                        "deltaX" in u && (s = u.deltaX,
                            0 === e && (l = -1 * s)),
                        0 !== e || 0 !== s)
                        return 1 === u.deltaMode ? (v = n.data(this, "mousewheel-line-height"),
                            l *= v,
                            e *= v,
                            s *= v) : 2 === u.deltaMode && (y = n.data(this, "mousewheel-page-height"),
                                l *= y,
                                e *= y,
                                s *= y),
                            (a = Math.max(Math.abs(e), Math.abs(s)),
                                (!t || a < t) && (t = a,
                                    o(u, a) && (t /= 40)),
                                o(u, a) && (l /= 40,
                                    s /= 40,
                                    e /= 40),
                                l = Math[l >= 1 ? "floor" : "ceil"](l / t),
                                s = Math[s >= 1 ? "floor" : "ceil"](s / t),
                                e = Math[e >= 1 ? "floor" : "ceil"](e / t),
                                i.settings.normalizeOffset && this.getBoundingClientRect) && (p = this.getBoundingClientRect(),
                                    b = r.clientX - p.left,
                                    k = r.clientY - p.top),
                            r.deltaX = s,
                            r.deltaY = e,
                            r.deltaFactor = t,
                            r.offsetX = b,
                            r.offsetY = k,
                            r.deltaMode = 0,
                            w.unshift(r, l, s, e),
                            f && clearTimeout(f),
                            f = setTimeout(h, 200),
                            (n.event.dispatch || n.event.handle).apply(this, w)
                }
                function h() {
                    t = null
                }
                function o(n, t) {
                    return i.settings.adjustOldDeltas && "mousewheel" === n.type && t % 120 == 0
                }
                var f, t, s = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"], r = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"], c = Array.prototype.slice, e, i;
                if (n.event.fixHooks)
                    for (e = s.length; e;)
                        n.event.fixHooks[s[--e]] = n.event.mouseHooks;
                i = n.event.special.mousewheel = {
                    version: "3.1.12",
                    setup: function () {
                        if (this.addEventListener)
                            for (var t = r.length; t;)
                                this.addEventListener(r[--t], u, !1);
                        else
                            this.onmousewheel = u;
                        n.data(this, "mousewheel-line-height", i.getLineHeight(this));
                        n.data(this, "mousewheel-page-height", i.getPageHeight(this))
                    },
                    teardown: function () {
                        if (this.removeEventListener)
                            for (var t = r.length; t;)
                                this.removeEventListener(r[--t], u, !1);
                        else
                            this.onmousewheel = null;
                        n.removeData(this, "mousewheel-line-height");
                        n.removeData(this, "mousewheel-page-height")
                    },
                    getLineHeight: function (t) {
                        var r = n(t)
                            , i = r["offsetParent" in n.fn ? "offsetParent" : "parent"]();
                        return i.length || (i = n("body")),
                            parseInt(i.css("fontSize"), 10) || parseInt(r.css("fontSize"), 10) || 16
                    },
                    getPageHeight: function (t) {
                        return n(t).height()
                    },
                    settings: {
                        adjustOldDeltas: !0,
                        normalizeOffset: !0
                    }
                };
                n.fn.extend({
                    mousewheel: function (n) {
                        return n ? this.bind("mousewheel", n) : this.trigger("mousewheel")
                    },
                    unmousewheel: function (n) {
                        return this.unbind("mousewheel", n)
                    }
                })
            }),
            t.define("jquery.select2", ["jquery", "jquery-mousewheel", "./select2/core", "./select2/defaults"], function (n, t, i, r) {
                if (null == n.fn.select2) {
                    var u = ["open", "close", "destroy"];
                    n.fn.select2 = function (t) {
                        if ("object" == typeof (t = t || {}))
                            return this.each(function () {
                                var r = n.extend(!0, {}, t);
                                new i(n(this), r)
                            }),
                                this;
                        if ("string" == typeof t) {
                            var r, f = Array.prototype.slice.call(arguments, 1);
                            return this.each(function () {
                                var i = n(this).data("select2");
                                null == i && window.console && console.error && console.error("The select2('" + t + "') method was called on an element that is not using Select2.");
                                r = i[t].apply(i, f)
                            }),
                                n.inArray(t, u) > -1 ? this : r
                        }
                        throw new Error("Invalid arguments for Select2: " + t);
                    }
                }
                return null == n.fn.select2.defaults && (n.fn.select2.defaults = r),
                    i
            }),
        {
            define: t.define,
            require: t.require
        }
    }()
        , i = t.require("jquery.select2");
    return n.fn.select2.amd = t,
        i
}),
    function (n) {
        if (n.fn.inputmask === undefined) {
            function h(n) {
                var t = document.createElement("input")
                    , n = "on" + n
                    , i = n in t;
                return i || (t.setAttribute(n, "return;"),
                    i = typeof t[n] == "function"),
                    t = null,
                    i
            }
            function o(t, i, r) {
                var u = r.aliases[t];
                return u ? (u.alias && o(u.alias, undefined, r),
                    n.extend(!0, r, u),
                    n.extend(!0, r, i),
                    !0) : !1
            }
            function s(t) {
                function f(i) {
                    var o, e, s;
                    t.numericInput && (i = i.split("").reverse().join(""));
                    var r = !1
                        , h = 0
                        , u = t.greedy
                        , f = t.repeat;
                    for (f == "*" && (u = !1),
                        i.length == 1 && u == !1 && f != 0 && (t.placeholder = ""),
                        o = n.map(i.split(""), function (n) {
                            var i = [], f, u;
                            if (n == t.escapeChar)
                                r = !0;
                            else if (n != t.optionalmarker.start && n != t.optionalmarker.end || r) {
                                if (f = t.definitions[n],
                                    f && !r)
                                    for (u = 0; u < f.cardinality; u++)
                                        i.push(t.placeholder.charAt((h + u) % t.placeholder.length));
                                else
                                    i.push(n),
                                        r = !1;
                                return h += i.length,
                                    i
                            }
                        }),
                        e = o.slice(),
                        s = 1; s < f && u; s++)
                        e = e.concat(o.slice());
                    return {
                        mask: e,
                        repeat: f,
                        greedy: u
                    }
                }
                function e(i) {
                    t.numericInput && (i = i.split("").reverse().join(""));
                    var r = !1
                        , f = !1
                        , u = !1;
                    return n.map(i.split(""), function (n) {
                        var o = [], i, s, c, e;
                        if (n == t.escapeChar)
                            f = !0;
                        else if (n != t.optionalmarker.start || f) {
                            if (n != t.optionalmarker.end || f) {
                                if (i = t.definitions[n],
                                    i && !f) {
                                    for (s = i.prevalidator,
                                        c = s ? s.length : 0,
                                        e = 1; e < i.cardinality; e++) {
                                        var l = c >= e ? s[e - 1] : []
                                            , h = l.validator
                                            , a = l.cardinality;
                                        o.push({
                                            fn: h ? typeof h == "string" ? new RegExp(h) : new function () {
                                                this.test = h
                                            }
                                                : new RegExp("."),
                                            cardinality: a ? a : 1,
                                            optionality: r,
                                            newBlockMarker: r == !0 ? u : !1,
                                            offset: 0,
                                            casing: i.casing,
                                            def: i.definitionSymbol || n
                                        });
                                        r == !0 && (u = !1)
                                    }
                                    o.push({
                                        fn: i.validator ? typeof i.validator == "string" ? new RegExp(i.validator) : new function () {
                                            this.test = i.validator
                                        }
                                            : new RegExp("."),
                                        cardinality: i.cardinality,
                                        optionality: r,
                                        newBlockMarker: u,
                                        offset: 0,
                                        casing: i.casing,
                                        def: i.definitionSymbol || n
                                    })
                                } else
                                    o.push({
                                        fn: null,
                                        cardinality: 0,
                                        optionality: r,
                                        newBlockMarker: u,
                                        offset: 0,
                                        casing: null,
                                        def: n
                                    }),
                                        f = !1;
                                return u = !1,
                                    o
                            }
                            r = !1;
                            u = !0
                        } else
                            r = !0,
                                u = !0
                    })
                }
                function s(n) {
                    return t.optionalmarker.start + n + t.optionalmarker.end
                }
                function h(n) {
                    for (var f, r = 0, e = 0, u = n.length, i = 0; i < u; i++)
                        if (n.charAt(i) == t.optionalmarker.start && r++ ,
                            n.charAt(i) == t.optionalmarker.end && e++ ,
                            r > 0 && r == e)
                            break;
                    return f = [n.substring(0, i)],
                        i < u && f.push(n.substring(i + 1, u)),
                        f
                }
                function o(n) {
                    for (var u, r = n.length, i = 0; i < r; i++)
                        if (n.charAt(i) == t.optionalmarker.start)
                            break;
                    return u = [n.substring(0, i)],
                        i < r && u.push(n.substring(i + 1, r)),
                        u
                }
                function r(t, c, l) {
                    var y = h(c), a, v, p = o(y[0]);
                    p.length > 1 ? (a = t + p[0] + s(p[1]) + (y.length > 1 ? y[1] : ""),
                        n.inArray(a, i) == -1 && a != "" && (i.push(a),
                            v = f(a),
                            u.push({
                                mask: a,
                                _buffer: v.mask,
                                buffer: v.mask.slice(),
                                tests: e(a),
                                lastValidPosition: -1,
                                greedy: v.greedy,
                                repeat: v.repeat,
                                metadata: l
                            })),
                        a = t + p[0] + (y.length > 1 ? y[1] : ""),
                        n.inArray(a, i) == -1 && a != "" && (i.push(a),
                            v = f(a),
                            u.push({
                                mask: a,
                                _buffer: v.mask,
                                buffer: v.mask.slice(),
                                tests: e(a),
                                lastValidPosition: -1,
                                greedy: v.greedy,
                                repeat: v.repeat,
                                metadata: l
                            })),
                        o(p[1]).length > 1 && r(t + p[0], p[1] + y[1], l),
                        y.length > 1 && o(y[1]).length > 1 && (r(t + p[0] + s(p[1]), y[1], l),
                            r(t + p[0], y[1], l))) : (a = t + y,
                                n.inArray(a, i) == -1 && a != "" && (i.push(a),
                                    v = f(a),
                                    u.push({
                                        mask: a,
                                        _buffer: v.mask,
                                        buffer: v.mask.slice(),
                                        tests: e(a),
                                        lastValidPosition: -1,
                                        greedy: v.greedy,
                                        repeat: v.repeat,
                                        metadata: l
                                    })))
                }
                var u = []
                    , i = [];
                return n.isFunction(t.mask) && (t.mask = t.mask.call(this, t)),
                    n.isArray(t.mask) ? n.each(t.mask, function (n, t) {
                        t.mask != undefined ? r("", t.mask.toString(), t) : r("", t.toString())
                    }) : r("", t.mask.toString()),
                    t.greedy ? u : u.sort(function (n, t) {
                        return n.mask.length - t.mask.length
                    })
            }
            var i = navigator.userAgent.match(new RegExp("msie 10", "i")) !== null
                , r = navigator.userAgent.match(new RegExp("iphone", "i")) !== null
                , u = navigator.userAgent.match(new RegExp("android.*safari.*", "i")) !== null
                , t = navigator.userAgent.match(new RegExp("android.*chrome.*", "i")) !== null
                , f = h("paste") ? "paste" : h("input") ? "input" : "propertychange";
            function e(e, o, s, h) {
                function c() {
                    return e[o]
                }
                function rt() {
                    return c().tests
                }
                function v() {
                    return c()._buffer
                }
                function l() {
                    return c().buffer
                }
                function ht(t, i, r) {
                    function f(n, t, i, r) {
                        for (var u = tt(n), h = i ? 1 : 0, f = "", o = t.buffer, e = t.tests[u].cardinality; e > h; e--)
                            f += nt(o, u - (e - 1));
                        return i && (f += i),
                            t.tests[u].fn != null ? t.tests[u].fn.test(f, o, n, r, s) : i == nt(t._buffer, n, !0) || i == s.skipOptionalPartCharacter ? {
                                refresh: !0,
                                c: nt(t._buffer, n, !0),
                                pos: n
                            } : !1
                    }
                    function it(r, u) {
                        var l = !1, o, s, c;
                        return n.each(u, function (t, i) {
                            return l = n.inArray(i.activeMasksetIndex, r) == -1 && i.result !== !1,
                                l ? !1 : void 0
                        }),
                            l ? u = n.map(u, function (t) {
                                if (n.inArray(t.activeMasksetIndex, r) == -1)
                                    return t;
                                e[t.activeMasksetIndex].lastValidPosition = h
                            }) : (o = -1,
                                s = -1,
                                n.each(u, function (t, i) {
                                    n.inArray(i.activeMasksetIndex, r) != -1 && i.result !== !1 & (o == -1 || o > i.result.pos) && (o = i.result.pos,
                                        s = i.activeMasksetIndex)
                                }),
                                u = n.map(u, function (u) {
                                    if (n.inArray(u.activeMasksetIndex, r) != -1) {
                                        if (u.result.pos == o)
                                            return u;
                                        if (u.result !== !1) {
                                            for (var h = t; h < o; h++)
                                                if (c = f(h, e[u.activeMasksetIndex], e[s].buffer[h], !0),
                                                    c === !1) {
                                                    e[u.activeMasksetIndex].lastValidPosition = o - 1;
                                                    break
                                                } else
                                                    g(e[u.activeMasksetIndex].buffer, h, e[s].buffer[h], !0),
                                                        e[u.activeMasksetIndex].lastValidPosition = h;
                                            return c = f(o, e[u.activeMasksetIndex], i, !0),
                                                c !== !1 && (g(e[u.activeMasksetIndex].buffer, o, i, !0),
                                                    e[u.activeMasksetIndex].lastValidPosition = o),
                                                u
                                        }
                                    }
                                })),
                            u
                    }
                    var u;
                    if (r = r === !0,
                        r)
                        return u = f(t, c(), i, r),
                            u === !0 && (u = {
                                pos: t
                            }),
                            u;
                    var a = []
                        , u = !1
                        , v = o
                        , w = l().slice()
                        , h = c().lastValidPosition
                        , rt = d(t)
                        , b = [];
                    return n.each(e, function (n, e) {
                        var s, it, tt, d, ut, rt, nt;
                        if (typeof e == "object") {
                            if (o = n,
                                s = t,
                                it = c().lastValidPosition,
                                it == h) {
                                if (s - h > 1)
                                    for (d = it == -1 ? 0 : it; d < s; d++)
                                        if (tt = f(d, c(), w[d], !0),
                                            tt === !1)
                                            break;
                                        else
                                            g(l(), d, w[d], !0),
                                                tt === !0 && (tt = {
                                                    pos: d
                                                }),
                                                nt = tt.pos || d,
                                                c().lastValidPosition < nt && (c().lastValidPosition = nt);
                                if (!k(s) && !f(s, c(), i, r)) {
                                    for (ut = p(s) - s,
                                        rt = 0; rt < ut; rt++)
                                        if (f(++s, c(), i, r) !== !1)
                                            break;
                                    b.push(o)
                                }
                            }
                            (c().lastValidPosition >= h || o == v) && s >= 0 && s < y() && (u = f(s, c(), i, r),
                                u !== !1 && (u === !0 && (u = {
                                    pos: s
                                }),
                                    nt = u.pos || s,
                                    c().lastValidPosition < nt && (c().lastValidPosition = nt)),
                                a.push({
                                    activeMasksetIndex: n,
                                    result: u
                                }))
                        }
                    }),
                        o = v,
                        it(b, a)
                }
                function dt() {
                    var i = o
                        , t = {
                            activeMasksetIndex: 0,
                            lastValidPosition: -1,
                            next: -1
                        };
                    n.each(e, function (n, i) {
                        typeof i == "object" && (o = n,
                            c().lastValidPosition > t.lastValidPosition ? (t.activeMasksetIndex = n,
                                t.lastValidPosition = c().lastValidPosition,
                                t.next = p(c().lastValidPosition)) : c().lastValidPosition == t.lastValidPosition && (t.next == -1 || t.next > p(c().lastValidPosition)) && (t.activeMasksetIndex = n,
                                    t.lastValidPosition = c().lastValidPosition,
                                    t.next = p(c().lastValidPosition)))
                    });
                    o = t.lastValidPosition != -1 && e[i].lastValidPosition == t.lastValidPosition ? i : t.activeMasksetIndex;
                    i != o && (vt(l(), p(t.lastValidPosition), y()),
                        c().writeOutBuffer = !0);
                    a.data("_inputmask").activeMasksetIndex = o
                }
                function k(n) {
                    var i = tt(n)
                        , t = rt()[i];
                    return t != undefined ? t.fn : !1
                }
                function tt(n) {
                    return n % rt().length
                }
                function y() {
                    return s.getMaskLength(v(), c().greedy, c().repeat, l(), s)
                }
                function p(n) {
                    var i = y(), t;
                    if (n >= i)
                        return i;
                    for (t = n; ++t < i && !k(t);)
                        ;
                    return t
                }
                function d(n) {
                    var t = n;
                    if (t <= 0)
                        return 0;
                    while (--t > 0 && !k(t))
                        ;
                    return t
                }
                function g(n, t, i, r) {
                    r && (t = gt(n, t));
                    var f = rt()[tt(t)]
                        , u = i;
                    if (u != undefined && f != undefined)
                        switch (f.casing) {
                            case "upper":
                                u = i.toUpperCase();
                                break;
                            case "lower":
                                u = i.toLowerCase()
                        }
                    n[t] = u
                }
                function nt(n, t, i) {
                    return i && (t = gt(n, t)),
                        n[t]
                }
                function gt(n, t) {
                    for (var i; n[t] == undefined && n.length < y();)
                        for (i = 0; v()[i] !== undefined;)
                            n.push(v()[i++]);
                    return t
                }
                function it(n, t, i) {
                    n._valueSet(t.join(""));
                    i != undefined && w(n, i)
                }
                function vt(n, t, i, r) {
                    for (var u = t, f = y(); u < i && u < f; u++)
                        r === !0 ? k(u) || g(n, u, "") : g(n, u, nt(v().slice(), u, !0))
                }
                function lt(n, t) {
                    var i = tt(t);
                    g(n, t, nt(v(), i))
                }
                function et(n) {
                    return s.placeholder.charAt(n % s.placeholder.length)
                }
                function ot(t, i, r, u, f) {
                    var s = u != undefined ? u.slice() : yt(t._valueGet()).split(""), h;
                    n.each(e, function (n, t) {
                        typeof t == "object" && (t.buffer = t._buffer.slice(),
                            t.lastValidPosition = -1,
                            t.p = -1)
                    });
                    r !== !0 && (o = 0);
                    i && t._valueSet("");
                    h = y();
                    n.each(s, function (u, e) {
                        if (f === !0) {
                            var o = c().p
                                , s = o == -1 ? o : d(o)
                                , h = s == -1 ? u : p(s);
                            n.inArray(e, v().slice(s + 1, h)) == -1 && wt.call(t, undefined, !0, e.charCodeAt(0), i, r, u)
                        } else
                            wt.call(t, undefined, !0, e.charCodeAt(0), i, r, u)
                    });
                    r === !0 && c().p != -1 && (c().lastValidPosition = d(c().p))
                }
                function fi(t) {
                    return n.inputmask.escapeRegex.call(this, t)
                }
                function yt(n) {
                    return n.replace(new RegExp("(" + fi(v().join("")) + ")*$"), "")
                }
                function pt(n) {
                    for (var u, r = l(), i = r.slice(), t = i.length - 1; t >= 0; t--)
                        if (u = tt(t),
                            rt()[u].optionality)
                            if (k(t) && ht(t, r[t], !0))
                                break;
                            else
                                i.pop();
                        else
                            break;
                    it(n, i)
                }
                function ei(t, i) {
                    if (rt() && (i === !0 || !t.hasClass("hasDatepicker"))) {
                        var r = n.map(l(), function (n, t) {
                            return k(t) && ht(t, n, !0) ? n : null
                        })
                            , u = (b ? r.reverse() : r).join("");
                        return s.onUnMask != undefined ? s.onUnMask.call(this, l().join(""), u) : u
                    }
                    return t[0]._valueGet()
                }
                function ft(n) {
                    if (b && typeof n == "number" && (!s.greedy || s.placeholder != "")) {
                        var t = l().length;
                        n = t - n
                    }
                    return n
                }
                function w(t, i, r) {
                    var f = t.jquery && t.length > 0 ? t[0] : t, e;
                    if (typeof i == "number") {
                        if (i = ft(i),
                            r = ft(r),
                            !n(t).is(":visible"))
                            return;
                        r = typeof r == "number" ? r : i;
                        f.scrollLeft = f.scrollWidth;
                        s.insertMode == !1 && i == r && r++;
                        f.setSelectionRange ? (f.selectionStart = i,
                            f.selectionEnd = u ? i : r) : f.createTextRange && (e = f.createTextRange(),
                                e.collapse(!0),
                                e.moveEnd("character", r),
                                e.moveStart("character", i),
                                e.select())
                    } else
                        return n(t).is(":visible") ? (f.setSelectionRange ? (i = f.selectionStart,
                            r = f.selectionEnd) : document.selection && document.selection.createRange && (e = document.selection.createRange(),
                                i = 0 - e.duplicate().moveStart("character", -1e5),
                                r = i + e.text.length),
                            i = ft(i),
                            r = ft(r),
                        {
                            begin: i,
                            end: r
                        }) : {
                                begin: 0,
                                end: 0
                            }
                }
                function ct(t) {
                    if (s.repeat == "*")
                        return undefined;
                    var i = !1
                        , r = 0
                        , u = o;
                    return n.each(e, function (n, u) {
                        var e, s, f, h, c;
                        if (typeof u == "object") {
                            if (o = n,
                                e = d(y()),
                                u.lastValidPosition >= r && u.lastValidPosition == e) {
                                for (s = !0,
                                    f = 0; f <= e; f++)
                                    if (h = k(f),
                                        c = tt(f),
                                        h && (t[f] == undefined || t[f] == et(f)) || !h && t[f] != v()[c]) {
                                        s = !1;
                                        break
                                    }
                                if (i = i || s,
                                    i)
                                    return !1
                            }
                            r = u.lastValidPosition
                        }
                    }),
                        o = u,
                        i
                }
                function oi(n, t) {
                    return b ? n - t > 1 || n - t == 1 && s.insertMode : t - n > 1 || t - n == 1 && s.insertMode
                }
                function si(t) {
                    var i = n._data(t).events;
                    n.each(i, function (t, i) {
                        n.each(i, function (n, t) {
                            if (t.namespace == "inputmask" && t.type != "setvalue") {
                                var i = t.handler;
                                t.handler = function (n) {
                                    if (this.readOnly || this.disabled)
                                        n.preventDefault;
                                    else
                                        return i.apply(this, arguments)
                                }
                            }
                        })
                    })
                }
                function hi(t) {
                    var u, i, r;
                    Object.getOwnPropertyDescriptor && (u = Object.getOwnPropertyDescriptor(t, "value"));
                    u && u.get ? t._valueGet || (i = u.get,
                        r = u.set,
                        t._valueGet = function () {
                            return b ? i.call(this).split("").reverse().join("") : i.call(this)
                        }
                        ,
                        t._valueSet = function (n) {
                            r.call(this, b ? n.split("").reverse().join("") : n)
                        }
                        ,
                        Object.defineProperty(t, "value", {
                            get: function () {
                                var r = n(this)
                                    , t = n(this).data("_inputmask")
                                    , u = t.masksets
                                    , f = t.activeMasksetIndex;
                                return t && t.opts.autoUnmask ? r.inputmask("unmaskedvalue") : i.call(this) != u[f]._buffer.join("") ? i.call(this) : ""
                            },
                            set: function (t) {
                                r.call(this, t);
                                n(this).triggerHandler("setvalue.inputmask")
                            }
                        })) : document.__lookupGetter__ && t.__lookupGetter__("value") ? t._valueGet || (i = t.__lookupGetter__("value"),
                            r = t.__lookupSetter__("value"),
                            t._valueGet = function () {
                                return b ? i.call(this).split("").reverse().join("") : i.call(this)
                            }
                            ,
                            t._valueSet = function (n) {
                                r.call(this, b ? n.split("").reverse().join("") : n)
                            }
                            ,
                            t.__defineGetter__("value", function () {
                                var r = n(this)
                                    , t = n(this).data("_inputmask")
                                    , u = t.masksets
                                    , f = t.activeMasksetIndex;
                                return t && t.opts.autoUnmask ? r.inputmask("unmaskedvalue") : i.call(this) != u[f]._buffer.join("") ? i.call(this) : ""
                            }),
                            t.__defineSetter__("value", function (t) {
                                r.call(this, t);
                                n(this).triggerHandler("setvalue.inputmask")
                            })) : (t._valueGet || (t._valueGet = function () {
                                return b ? this.value.split("").reverse().join("") : this.value
                            }
                                ,
                                t._valueSet = function (n) {
                                    this.value = b ? n.split("").reverse().join("") : n
                                }
                            ),
                                (n.valHooks.text == undefined || n.valHooks.text.inputmaskpatch != !0) && (i = n.valHooks.text && n.valHooks.text.get ? n.valHooks.text.get : function (n) {
                                    return n.value
                                }
                                    ,
                                    r = n.valHooks.text && n.valHooks.text.set ? n.valHooks.text.set : function (n, t) {
                                        return n.value = t,
                                            n
                                    }
                                    ,
                                    jQuery.extend(n.valHooks, {
                                        text: {
                                            get: function (t) {
                                                var r = n(t);
                                                if (r.data("_inputmask")) {
                                                    if (r.data("_inputmask").opts.autoUnmask)
                                                        return r.inputmask("unmaskedvalue");
                                                    var u = i(t)
                                                        , f = r.data("_inputmask")
                                                        , e = f.masksets
                                                        , o = f.activeMasksetIndex;
                                                    return u != e[o]._buffer.join("") ? u : ""
                                                }
                                                return i(t)
                                            },
                                            set: function (t, i) {
                                                var u = n(t)
                                                    , f = r(t, i);
                                                return u.data("_inputmask") && u.triggerHandler("setvalue.inputmask"),
                                                    f
                                            },
                                            inputmaskpatch: !0
                                        }
                                    })))
                }
                function ni(n, t, i, r) {
                    var f = l(), e, o, s, u, h;
                    if (r !== !1)
                        while (!k(n) && n - 1 >= 0)
                            n--;
                    for (u = n; u < t && u < y(); u++)
                        if (k(u)) {
                            if (lt(f, u),
                                e = p(u),
                                o = nt(f, e),
                                o != et(e))
                                if (e < y() && ht(u, o, !0) !== !1 && rt()[tt(u)].def == rt()[tt(e)].def)
                                    g(f, u, o, !0);
                                else if (k(u))
                                    break
                        } else
                            lt(f, u);
                    if (i != undefined && g(f, d(t), i),
                        c().greedy == !1) {
                        for (s = yt(f.join("")).split(""),
                            f.length = s.length,
                            u = 0,
                            h = f.length; u < h; u++)
                            f[u] = s[u];
                        f.length == 0 && (c().buffer = v().slice())
                    }
                    return n
                }
                function ti(n, t, i) {
                    var r = l(), f, e, s, o, u, h;
                    if (nt(r, n, !0) != et(n))
                        for (u = d(t); u > n && u >= 0; u--)
                            k(u) ? (f = d(u),
                                e = nt(r, f),
                                e != et(f) && ht(f, e, !0) !== !1 && rt()[tt(u)].def == rt()[tt(f)].def && (g(r, u, e, !0),
                                    lt(r, f))) : lt(r, u);
                    if (i != undefined && nt(r, n) == et(n) && g(r, n, i),
                        s = r.length,
                        c().greedy == !1) {
                        for (o = yt(r.join("")).split(""),
                            r.length = o.length,
                            u = 0,
                            h = r.length; u < h; u++)
                            r[u] = o[u];
                        r.length == 0 && (c().buffer = v().slice())
                    }
                    return t - (s - r.length)
                }
                function ii(n, t, i) {
                    var v, r, u, h, a, f, o;
                    if (s.numericInput || b) {
                        switch (t) {
                            case s.keyCode.BACKSPACE:
                                t = s.keyCode.DELETE;
                                break;
                            case s.keyCode.DELETE:
                                t = s.keyCode.BACKSPACE
                        }
                        b && (v = i.end,
                            i.end = i.begin,
                            i.begin = v)
                    }
                    if (r = !0,
                        i.begin == i.end ? (u = t == s.keyCode.BACKSPACE ? i.begin - 1 : i.begin,
                            s.isNumeric && s.radixPoint != "" && l()[u] == s.radixPoint && (i.begin = l().length - 1 == u ? i.begin : t == s.keyCode.BACKSPACE ? u : p(u),
                                i.end = i.begin),
                            r = !1,
                            t == s.keyCode.BACKSPACE ? i.begin-- : t == s.keyCode.DELETE && i.end++) : i.end - i.begin != 1 || s.insertMode || (r = !1,
                                t == s.keyCode.BACKSPACE && i.begin--),
                        vt(l(), i.begin, i.end),
                        h = y(),
                        s.greedy == !1)
                        ni(i.begin, h, undefined, !b && t == s.keyCode.BACKSPACE && !r);
                    else {
                        for (a = i.begin,
                            f = i.begin; f < i.end; f++)
                            (k(f) || !r) && (a = ni(i.begin, h, undefined, !b && t == s.keyCode.BACKSPACE && !r));
                        r || (i.begin = a)
                    }
                    o = p(-1);
                    vt(l(), i.begin, i.end, !0);
                    ot(n, !1, e[1] == undefined || o >= i.end, l());
                    c().lastValidPosition < o ? (c().lastValidPosition = -1,
                        c().p = o) : c().p = i.begin
                }
                function ri(t) {
                    var o;
                    at = !1;
                    var u = this
                        , e = n(u)
                        , i = t.keyCode
                        , f = w(u);
                    i == s.keyCode.BACKSPACE || i == s.keyCode.DELETE || r && i == 127 || t.ctrlKey && i == 88 ? (t.preventDefault(),
                        i == 88 && (ut = l().join("")),
                        ii(u, i, f),
                        dt(),
                        it(u, l(), c().p),
                        u._valueGet() == v().join("") && e.trigger("cleared"),
                        s.showTooltip && e.prop("title", c().mask)) : i == s.keyCode.END || i == s.keyCode.PAGE_DOWN ? setTimeout(function () {
                            var n = p(c().lastValidPosition);
                            s.insertMode || n != y() || t.shiftKey || n--;
                            w(u, t.shiftKey ? f.begin : n, n)
                        }, 0) : (i != s.keyCode.HOME || t.shiftKey) && i != s.keyCode.PAGE_UP ? i == s.keyCode.ESCAPE || i == 90 && t.ctrlKey ? (ot(u, !0, !1, ut.split("")),
                            e.click()) : i != s.keyCode.INSERT || t.shiftKey || t.ctrlKey ? s.insertMode != !1 || t.shiftKey || (i == s.keyCode.RIGHT ? setTimeout(function () {
                                var n = w(u);
                                w(u, n.begin)
                            }, 0) : i == s.keyCode.LEFT && setTimeout(function () {
                                var n = w(u);
                                w(u, n.begin - 1)
                            }, 0)) : (s.insertMode = !s.insertMode,
                                w(u, !s.insertMode && f.begin == y() ? f.begin - 1 : f.begin)) : w(u, 0, t.shiftKey ? f.begin : 0);
                    o = w(u);
                    s.onKeyDown.call(this, t, l(), s) === !0 && w(u, o.begin, o.end);
                    kt = n.inArray(i, s.ignorables) != -1
                }
                function wt(t, i, r, u, f, h) {
                    var tt, ft, r, a, rt, ot, k, lt, ut, v, b, wt, yt, bt;
                    if (r == undefined && at)
                        return !1;
                    if (at = !0,
                        tt = this,
                        ft = n(tt),
                        t = t || window.event,
                        r = i ? r : t.which || t.charCode || t.keyCode,
                        i === !0 || t.ctrlKey && t.altKey || !(t.ctrlKey || t.metaKey || kt)) {
                        if (r) {
                            i !== !0 && r == 46 && t.shiftKey == !1 && s.radixPoint == "," && (r = 44);
                            k = String.fromCharCode(r);
                            i ? (lt = f ? h : c().lastValidPosition + 1,
                                a = {
                                    begin: lt,
                                    end: lt
                                }) : a = w(tt);
                            var pt = oi(a.begin, a.end)
                                , vt = o;
                            pt && (o = vt,
                                n.each(e, function (n, t) {
                                    typeof t == "object" && (o = n,
                                        c().undoBuffer = l().join(""))
                                }),
                                ii(tt, s.keyCode.DELETE, a),
                                s.insertMode || n.each(e, function (n, t) {
                                    typeof t == "object" && (o = n,
                                        ti(a.begin, y()),
                                        c().lastValidPosition = p(c().lastValidPosition))
                                }),
                                o = vt);
                            ut = l().join("").indexOf(s.radixPoint);
                            s.isNumeric && i !== !0 && ut != -1 && (s.greedy && a.begin <= ut ? (a.begin = d(a.begin),
                                a.end = a.begin) : k == s.radixPoint && (a.begin = ut,
                                    a.end = a.begin));
                            v = a.begin;
                            rt = ht(v, k, f);
                            f === !0 && (rt = [{
                                activeMasksetIndex: o,
                                result: rt
                            }]);
                            b = -1;
                            n.each(rt, function (n, t) {
                                var i, e, h, r, tt, a, u, w;
                                if (o = t.activeMasksetIndex,
                                    c().writeOutBuffer = !0,
                                    i = t.result,
                                    i !== !1) {
                                    if (e = !1,
                                        h = l(),
                                        i !== !0 && (e = i.refresh,
                                            v = i.pos != undefined ? i.pos : v,
                                            k = i.c != undefined ? i.c : k),
                                        e !== !0) {
                                        if (s.insertMode == !0) {
                                            for (r = y(),
                                                tt = h.slice(); nt(tt, r, !0) != et(r) && r >= v;)
                                                r = r == 0 ? -1 : d(r);
                                            r >= v ? (ti(v, y(), k),
                                                a = c().lastValidPosition,
                                                u = p(a),
                                                u != y() && a >= v && nt(l(), u, !0) != et(u) && (c().lastValidPosition = u)) : c().writeOutBuffer = !1
                                        } else
                                            g(h, v, k, !0);
                                        (b == -1 || b > p(v)) && (b = p(v))
                                    } else
                                        f || (w = v < y() ? v + 1 : v,
                                            (b == -1 || b > w) && (b = w));
                                    b > c().p && (c().p = b)
                                }
                            });
                            f !== !0 && (o = vt,
                                dt());
                            u !== !1 && (n.each(rt, function (n, t) {
                                if (t.activeMasksetIndex == o)
                                    return ot = t,
                                        !1
                            }),
                                ot != undefined && (wt = this,
                                    setTimeout(function () {
                                        s.onKeyValidation.call(wt, ot.result, s)
                                    }, 0),
                                    c().writeOutBuffer && ot.result !== !1 ? (yt = l(),
                                        bt = i ? undefined : s.numericInput ? v > ut ? d(b) : k == s.radixPoint ? b - 1 : d(b - 1) : b,
                                        it(tt, yt, bt),
                                        i !== !0 && setTimeout(function () {
                                            ct(yt) === !0 && ft.trigger("complete");
                                            st = !0;
                                            ft.trigger("input")
                                        }, 0)) : pt && (c().buffer = c().undoBuffer.split(""))));
                            s.showTooltip && ft.prop("title", c().mask);
                            t && (t.preventDefault ? t.preventDefault() : t.returnValue = !1)
                        }
                    } else
                        return !0
                }
                function ci(i) {
                    var f = n(this)
                        , r = this
                        , e = i.keyCode
                        , u = l();
                    t && e == s.keyCode.BACKSPACE && bt == r._valueGet() && ri.call(this, i);
                    s.onKeyUp.call(this, i, u, s);
                    e == s.keyCode.TAB && s.showMaskOnFocus && (f.hasClass("focus.inputmask") && r._valueGet().length == 0 ? (u = v().slice(),
                        it(r, u),
                        w(r, 0),
                        ut = l().join("")) : (it(r, u),
                            u.join("") == v().join("") && n.inArray(s.radixPoint, u) != -1 ? (w(r, ft(0)),
                                f.click()) : w(r, ft(0), ft(y()))))
                }
                function ui() {
                    if (st === !0)
                        return st = !1,
                            !0;
                    var t = this
                        , i = n(t);
                    bt = l().join("");
                    ot(t, !1, !1);
                    it(t, l());
                    ct(l()) === !0 && i.trigger("complete");
                    i.click()
                }
                function li(r) {
                    var u, h, d;
                    if (a = n(r),
                        a.is(":input")) {
                        a.data("_inputmask", {
                            masksets: e,
                            activeMasksetIndex: o,
                            opts: s,
                            isRTL: !1
                        });
                        s.showTooltip && a.prop("title", c().mask);
                        c().greedy = c().greedy ? c().greedy : c().repeat == 0;
                        a.attr("maxLength") != null && (u = a.prop("maxLength"),
                            u > -1 && n.each(e, function (n, t) {
                                typeof t == "object" && t.repeat == "*" && (t.repeat = u)
                            }),
                            y() >= u && u > -1 && (u < v().length && (v().length = u),
                                c().greedy == !1 && (c().repeat = Math.round(u / v().length)),
                                a.prop("maxLength", y() * 2)));
                        hi(r);
                        s.numericInput && (s.isNumeric = s.numericInput);
                        (r.dir == "rtl" || s.numericInput && s.rightAlignNumerics || s.isNumeric && s.rightAlignNumerics) && a.css("text-align", "right");
                        (r.dir == "rtl" || s.numericInput) && (r.dir = "ltr",
                            a.removeAttr("dir"),
                            h = a.data("_inputmask"),
                            h.isRTL = !0,
                            a.data("_inputmask", h),
                            b = !0);
                        a.unbind(".inputmask");
                        a.removeClass("focus.inputmask");
                        a.closest("form").bind("submit", function () {
                            ut != l().join("") && a.change()
                        }).bind("reset", function () {
                            setTimeout(function () {
                                a.trigger("setvalue")
                            }, 0)
                        });
                        a.bind("mouseenter.inputmask", function () {
                            var i = n(this)
                                , t = this;
                            !i.hasClass("focus.inputmask") && s.showMaskOnHover && t._valueGet() != l().join("") && it(t, l())
                        }).bind("blur.inputmask", function () {
                            var i = n(this)
                                , t = this
                                , u = t._valueGet()
                                , r = l();
                            i.removeClass("focus.inputmask");
                            ut != l().join("") && i.change();
                            s.clearMaskOnLostFocus && u != "" && (u == v().join("") ? t._valueSet("") : pt(t));
                            ct(r) === !1 && (i.trigger("incomplete"),
                                s.clearIncomplete && (n.each(e, function (n, t) {
                                    typeof t == "object" && (t.buffer = t._buffer.slice(),
                                        t.lastValidPosition = -1)
                                }),
                                    o = 0,
                                    s.clearMaskOnLostFocus ? t._valueSet("") : (r = v().slice(),
                                        it(t, r))))
                        }).bind("focus.inputmask", function () {
                            var i = n(this)
                                , t = this
                                , r = t._valueGet();
                            s.showMaskOnFocus && !i.hasClass("focus.inputmask") && (!s.showMaskOnHover || s.showMaskOnHover && r == "") && t._valueGet() != l().join("") && it(t, l(), p(c().lastValidPosition));
                            i.addClass("focus.inputmask");
                            ut = l().join("")
                        }).bind("mouseleave.inputmask", function () {
                            var i = n(this)
                                , t = this;
                            s.clearMaskOnLostFocus && (i.hasClass("focus.inputmask") || t._valueGet() == i.attr("placeholder") || (t._valueGet() == v().join("") || t._valueGet() == "" ? t._valueSet("") : pt(t)))
                        }).bind("click.inputmask", function () {
                            var t = this;
                            setTimeout(function () {
                                var r = w(t), u = l(), i, f, e;
                                r.begin == r.end && (i = b ? ft(r.begin) : r.begin,
                                    f = c().lastValidPosition,
                                    e = s.isNumeric ? s.skipRadixDance === !1 && s.radixPoint != "" && n.inArray(s.radixPoint, u) != -1 ? s.numericInput ? p(n.inArray(s.radixPoint, u)) : n.inArray(s.radixPoint, u) : p(f) : p(f),
                                    i < e ? k(i) ? w(t, i) : w(t, p(i)) : w(t, e))
                            }, 0)
                        }).bind("dblclick.inputmask", function () {
                            var n = this;
                            setTimeout(function () {
                                w(n, 0, p(c().lastValidPosition))
                            }, 0)
                        }).bind(f + ".inputmask dragdrop.inputmask drop.inputmask", function (t) {
                            if (st === !0)
                                return st = !1,
                                    !0;
                            var i = this
                                , r = n(i);
                            if (t.type == "propertychange" && i._valueGet().length <= y())
                                return !0;
                            setTimeout(function () {
                                var n = s.onBeforePaste != undefined ? s.onBeforePaste.call(this, i._valueGet()) : i._valueGet();
                                ot(i, !0, !1, n.split(""), !0);
                                ct(l()) === !0 && r.trigger("complete");
                                r.click()
                            }, 0)
                        }).bind("setvalue.inputmask", function () {
                            var n = this;
                            ot(n, !0);
                            ut = l().join("");
                            n._valueGet() == v().join("") && n._valueSet("")
                        }).bind("complete.inputmask", s.oncomplete).bind("incomplete.inputmask", s.onincomplete).bind("cleared.inputmask", s.oncleared).bind("keyup.inputmask", ci);
                        t ? a.bind("input.inputmask", ui) : a.bind("keydown.inputmask", ri).bind("keypress.inputmask", wt);
                        i && a.bind("input.inputmask", ui);
                        ot(r, !0, !1);
                        ut = l().join("");
                        try {
                            d = document.activeElement
                        } catch (g) { }
                        d === r ? (a.addClass("focus.inputmask"),
                            w(r, p(c().lastValidPosition))) : s.clearMaskOnLostFocus ? l().join("") == v().join("") ? r._valueSet("") : pt(r) : it(r, l());
                        si(r)
                    }
                }
                var b = !1, ut = l().join(""), a, bt, at = !1, st = !1, kt = !1;
                if (h != undefined)
                    switch (h.action) {
                        case "isComplete":
                            return ct(h.buffer);
                        case "unmaskedvalue":
                            return b = h.$input.data("_inputmask").isRTL,
                                ei(h.$input, h.skipDatepickerCheck);
                        case "mask":
                            li(h.el);
                            break;
                        case "format":
                            return a = n({}),
                                a.data("_inputmask", {
                                    masksets: e,
                                    activeMasksetIndex: o,
                                    opts: s,
                                    isRTL: s.numericInput
                                }),
                                s.numericInput && (s.isNumeric = s.numericInput,
                                    b = !0),
                                ot(a, !1, !1, h.value.split(""), !0),
                                l().join("")
                    }
            }
            n.inputmask = {
                defaults: {
                    placeholder: "_",
                    optionalmarker: {
                        start: "[",
                        end: "]"
                    },
                    quantifiermarker: {
                        start: "{",
                        end: "}"
                    },
                    groupmarker: {
                        start: "(",
                        end: ")"
                    },
                    escapeChar: "\\",
                    mask: null,
                    oncomplete: n.noop,
                    onincomplete: n.noop,
                    oncleared: n.noop,
                    repeat: 0,
                    greedy: !0,
                    autoUnmask: !1,
                    clearMaskOnLostFocus: !0,
                    insertMode: !0,
                    clearIncomplete: !1,
                    aliases: {},
                    onKeyUp: n.noop,
                    onKeyDown: n.noop,
                    onBeforePaste: undefined,
                    onUnMask: undefined,
                    showMaskOnFocus: !0,
                    showMaskOnHover: !0,
                    onKeyValidation: n.noop,
                    skipOptionalPartCharacter: " ",
                    showTooltip: !1,
                    numericInput: !1,
                    isNumeric: !1,
                    radixPoint: "",
                    skipRadixDance: !1,
                    rightAlignNumerics: !0,
                    definitions: {
                        "9": {
                            validator: "[0-9]",
                            cardinality: 1
                        },
                        a: {
                            validator: "[A-Za-zА-яЁё]",
                            cardinality: 1
                        },
                        "*": {
                            validator: "[A-Za-zА-яЁё0-9]",
                            cardinality: 1
                        }
                    },
                    keyCode: {
                        ALT: 18,
                        BACKSPACE: 8,
                        CAPS_LOCK: 20,
                        COMMA: 188,
                        COMMAND: 91,
                        COMMAND_LEFT: 91,
                        COMMAND_RIGHT: 93,
                        CONTROL: 17,
                        DELETE: 46,
                        DOWN: 40,
                        END: 35,
                        ENTER: 13,
                        ESCAPE: 27,
                        HOME: 36,
                        INSERT: 45,
                        LEFT: 37,
                        MENU: 93,
                        NUMPAD_ADD: 107,
                        NUMPAD_DECIMAL: 110,
                        NUMPAD_DIVIDE: 111,
                        NUMPAD_ENTER: 108,
                        NUMPAD_MULTIPLY: 106,
                        NUMPAD_SUBTRACT: 109,
                        PAGE_DOWN: 34,
                        PAGE_UP: 33,
                        PERIOD: 190,
                        RIGHT: 39,
                        SHIFT: 16,
                        SPACE: 32,
                        TAB: 9,
                        UP: 38,
                        WINDOWS: 91
                    },
                    ignorables: [8, 9, 13, 19, 27, 33, 34, 35, 36, 37, 38, 39, 40, 45, 46, 93, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123],
                    getMaskLength: function (n, t, i, r) {
                        var u = n.length;
                        return t || (i == "*" ? u = r.length + 1 : i > 1 && (u += n.length * (i - 1))),
                            u
                    }
                },
                escapeRegex: function (n) {
                    return n.replace(new RegExp("(\\/|\\.|\\*|\\+|\\?|\\||\\(|\\)|\\[|\\]|\\{|\\}|\\\\)", "gim"), "\\$1")
                },
                format: function (t, i) {
                    var r = n.extend(!0, {}, n.inputmask.defaults, i);
                    return o(r.alias, i, r),
                        e(s(r), 0, r, {
                            action: "format",
                            value: t
                        })
                }
            };
            n.fn.inputmask = function (t, i) {
                var r = n.extend(!0, {}, n.inputmask.defaults, i), u, f = 0, h, c;
                if (typeof t == "string")
                    switch (t) {
                        case "mask":
                            return (o(r.alias, i, r),
                                u = s(r),
                                u.length == 0) ? this : this.each(function () {
                                    e(n.extend(!0, {}, u), 0, r, {
                                        action: "mask",
                                        el: this
                                    })
                                });
                        case "unmaskedvalue":
                            return h = n(this),
                                c = this,
                                h.data("_inputmask") ? (u = h.data("_inputmask").masksets,
                                    f = h.data("_inputmask").activeMasksetIndex,
                                    r = h.data("_inputmask").opts,
                                    e(u, f, r, {
                                        action: "unmaskedvalue",
                                        $input: h
                                    })) : h.val();
                        case "remove":
                            return this.each(function () {
                                var i = n(this), t = this, o;
                                if (i.data("_inputmask")) {
                                    u = i.data("_inputmask").masksets;
                                    f = i.data("_inputmask").activeMasksetIndex;
                                    r = i.data("_inputmask").opts;
                                    t._valueSet(e(u, f, r, {
                                        action: "unmaskedvalue",
                                        $input: i,
                                        skipDatepickerCheck: !0
                                    }));
                                    i.removeData("_inputmask");
                                    i.unbind(".inputmask");
                                    i.removeClass("focus.inputmask");
                                    Object.getOwnPropertyDescriptor && (o = Object.getOwnPropertyDescriptor(t, "value"));
                                    o && o.get ? t._valueGet && Object.defineProperty(t, "value", {
                                        get: t._valueGet,
                                        set: t._valueSet
                                    }) : document.__lookupGetter__ && t.__lookupGetter__("value") && t._valueGet && (t.__defineGetter__("value", t._valueGet),
                                        t.__defineSetter__("value", t._valueSet));
                                    try {
                                        delete t._valueGet;
                                        delete t._valueSet
                                    } catch (s) {
                                        t._valueGet = undefined;
                                        t._valueSet = undefined
                                    }
                                }
                            });
                        case "getemptymask":
                            return this.data("_inputmask") ? (u = this.data("_inputmask").masksets,
                                f = this.data("_inputmask").activeMasksetIndex,
                                u[f]._buffer.join("")) : "";
                        case "hasMaskedValue":
                            return this.data("_inputmask") ? !this.data("_inputmask").opts.autoUnmask : !1;
                        case "isComplete":
                            return u = this.data("_inputmask").masksets,
                                f = this.data("_inputmask").activeMasksetIndex,
                                r = this.data("_inputmask").opts,
                                e(u, f, r, {
                                    action: "isComplete",
                                    buffer: this[0]._valueGet().split("")
                                });
                        case "getmetadata":
                            return this.data("_inputmask") ? (u = this.data("_inputmask").masksets,
                                f = this.data("_inputmask").activeMasksetIndex,
                                u[f].metadata) : undefined;
                        default:
                            return (o(t, i, r) || (r.mask = t),
                                u = s(r),
                                u.length == 0) ? this : this.each(function () {
                                    e(n.extend(!0, {}, u), f, r, {
                                        action: "mask",
                                        el: this
                                    })
                                })
                    }
                else {
                    if (typeof t == "object")
                        return (r = n.extend(!0, {}, n.inputmask.defaults, t),
                            o(r.alias, t, r),
                            u = s(r),
                            u.length == 0) ? this : this.each(function () {
                                e(n.extend(!0, {}, u), f, r, {
                                    action: "mask",
                                    el: this
                                })
                            });
                    if (t == undefined)
                        return this.each(function () {
                            var t = n(this).attr("data-inputmask"), u;
                            if (t && t != "")
                                try {
                                    t = t.replace(new RegExp("'", "g"), '"');
                                    u = n.parseJSON("{" + t + "}");
                                    n.extend(!0, u, i);
                                    r = n.extend(!0, {}, n.inputmask.defaults, u);
                                    o(r.alias, u, r);
                                    r.alias = undefined;
                                    n(this).inputmask(r)
                                } catch (f) { }
                        })
                }
            }
        }
    }(jQuery),
    function (n) {
        n.extend(n.inputmask.defaults.definitions, {
            h: {
                validator: "[01][0-9]|2[0-3]",
                cardinality: 2,
                prevalidator: [{
                    validator: "[0-2]",
                    cardinality: 1
                }]
            },
            s: {
                validator: "[0-5][0-9]",
                cardinality: 2,
                prevalidator: [{
                    validator: "[0-5]",
                    cardinality: 1
                }]
            },
            d: {
                validator: "0[1-9]|[12][0-9]|3[01]",
                cardinality: 2,
                prevalidator: [{
                    validator: "[0-3]",
                    cardinality: 1
                }]
            },
            m: {
                validator: "0[1-9]|1[012]",
                cardinality: 2,
                prevalidator: [{
                    validator: "[01]",
                    cardinality: 1
                }]
            },
            y: {
                validator: "(19|20)\\d{2}",
                cardinality: 4,
                prevalidator: [{
                    validator: "[12]",
                    cardinality: 1
                }, {
                    validator: "(19|20)",
                    cardinality: 2
                }, {
                    validator: "(19|20)\\d",
                    cardinality: 3
                }]
            }
        });
        n.extend(n.inputmask.defaults.aliases, {
            "dd/mm/yyyy": {
                mask: "1/2/y",
                placeholder: "dd/mm/yyyy",
                regex: {
                    val1pre: new RegExp("[0-3]"),
                    val1: new RegExp("0[1-9]|[12][0-9]|3[01]"),
                    val2pre: function (t) {
                        var i = n.inputmask.escapeRegex.call(this, t);
                        return new RegExp("((0[1-9]|[12][0-9]|3[01])" + i + "[01])")
                    },
                    val2: function (t) {
                        var i = n.inputmask.escapeRegex.call(this, t);
                        return new RegExp("((0[1-9]|[12][0-9])" + i + "(0[1-9]|1[012]))|(30" + i + "(0[13-9]|1[012]))|(31" + i + "(0[13578]|1[02]))")
                    }
                },
                leapday: "29/02/",
                separator: "/",
                yearrange: {
                    minyear: 1900,
                    maxyear: 2099
                },
                isInYearRange: function (n, t, i) {
                    var r = parseInt(n.concat(t.toString().slice(n.length)))
                        , u = parseInt(n.concat(i.toString().slice(n.length)));
                    return (r != NaN ? t <= r && r <= i : !1) || (u != NaN ? t <= u && u <= i : !1)
                },
                determinebaseyear: function (n, t, i) {
                    var u = (new Date).getFullYear(), r, e, f;
                    if (n > u)
                        return n;
                    if (t < u) {
                        for (r = t.toString().slice(0, 2),
                            e = t.toString().slice(2, 4); t < r + i;)
                            r--;
                        return f = r + e,
                            n > f ? n : f
                    }
                    return u
                },
                onKeyUp: function (t, i, r) {
                    var f = n(this), u;
                    t.ctrlKey && t.keyCode == r.keyCode.RIGHT && (u = new Date,
                        f.val(u.getDate().toString() + (u.getMonth() + 1).toString() + u.getFullYear().toString()))
                },
                definitions: {
                    "1": {
                        validator: function (n, t, i, r, u) {
                            var f = u.regex.val1.test(n);
                            return !r && !f && (n.charAt(1) == u.separator || "-./".indexOf(n.charAt(1)) != -1) && (f = u.regex.val1.test("0" + n.charAt(0)),
                                f) ? (t[i - 1] = "0",
                                {
                                    pos: i,
                                    c: n.charAt(0)
                                }) : f
                        },
                        cardinality: 2,
                        prevalidator: [{
                            validator: function (n, t, i, r, u) {
                                var f = u.regex.val1pre.test(n);
                                return !r && !f && (f = u.regex.val1.test("0" + n),
                                    f) ? (t[i] = "0",
                                        i++ ,
                                    {
                                        pos: i
                                    }) : f
                            },
                            cardinality: 1
                        }]
                    },
                    "2": {
                        validator: function (n, t, i, r, u) {
                            var e = t.join("").substr(0, 3), f;
                            return (e.indexOf(u.placeholder[0]) != -1 && (e = "01" + u.separator),
                                f = u.regex.val2(u.separator).test(e + n),
                                !r && !f && (n.charAt(1) == u.separator || "-./".indexOf(n.charAt(1)) != -1) && (f = u.regex.val2(u.separator).test(e + "0" + n.charAt(0)),
                                    f)) ? (t[i - 1] = "0",
                                    {
                                        pos: i,
                                        c: n.charAt(0)
                                    }) : f
                        },
                        cardinality: 2,
                        prevalidator: [{
                            validator: function (n, t, i, r, u) {
                                var e = t.join("").substr(0, 3), f;
                                return (e.indexOf(u.placeholder[0]) != -1 && (e = "01" + u.separator),
                                    f = u.regex.val2pre(u.separator).test(e + n),
                                    !r && !f && (f = u.regex.val2(u.separator).test(e + "0" + n),
                                        f)) ? (t[i] = "0",
                                            i++ ,
                                        {
                                            pos: i
                                        }) : f
                            },
                            cardinality: 1
                        }]
                    },
                    y: {
                        validator: function (n, t, i, r, u) {
                            var e, f;
                            return u.isInYearRange(n, u.yearrange.minyear, u.yearrange.maxyear) ? (e = t.join("").substr(0, 6),
                                e != u.leapday ? !0 : (f = parseInt(n, 10),
                                    f % 4 == 0 ? f % 100 == 0 ? f % 400 == 0 ? !0 : !1 : !0 : !1)) : !1
                        },
                        cardinality: 4,
                        prevalidator: [{
                            validator: function (n, t, i, r, u) {
                                var e = u.isInYearRange(n, u.yearrange.minyear, u.yearrange.maxyear), f;
                                if (!r && !e) {
                                    if (f = u.determinebaseyear(u.yearrange.minyear, u.yearrange.maxyear, n + "0").toString().slice(0, 1),
                                        e = u.isInYearRange(f + n, u.yearrange.minyear, u.yearrange.maxyear),
                                        e)
                                        return t[i++] = f[0],
                                        {
                                            pos: i
                                        };
                                    if (f = u.determinebaseyear(u.yearrange.minyear, u.yearrange.maxyear, n + "0").toString().slice(0, 2),
                                        e = u.isInYearRange(f + n, u.yearrange.minyear, u.yearrange.maxyear),
                                        e)
                                        return t[i++] = f[0],
                                            t[i++] = f[1],
                                        {
                                            pos: i
                                        }
                                }
                                return e
                            },
                            cardinality: 1
                        }, {
                            validator: function (n, t, i, r, u) {
                                var f = u.isInYearRange(n, u.yearrange.minyear, u.yearrange.maxyear), e, s, o;
                                if (!r && !f) {
                                    if (e = u.determinebaseyear(u.yearrange.minyear, u.yearrange.maxyear, n).toString().slice(0, 2),
                                        f = u.isInYearRange(n[0] + e[1] + n[1], u.yearrange.minyear, u.yearrange.maxyear),
                                        f)
                                        return t[i++] = e[1],
                                        {
                                            pos: i
                                        };
                                    if (e = u.determinebaseyear(u.yearrange.minyear, u.yearrange.maxyear, n).toString().slice(0, 2),
                                        u.isInYearRange(e + n, u.yearrange.minyear, u.yearrange.maxyear) ? (s = t.join("").substr(0, 6),
                                            s != u.leapday ? f = !0 : (o = parseInt(n, 10),
                                                f = o % 4 == 0 ? o % 100 == 0 ? o % 400 == 0 ? !0 : !1 : !0 : !1)) : f = !1,
                                        f)
                                        return t[i - 1] = e[0],
                                            t[i++] = e[1],
                                            t[i++] = n[0],
                                        {
                                            pos: i
                                        }
                                }
                                return f
                            },
                            cardinality: 2
                        }, {
                            validator: function (n, t, i, r, u) {
                                return u.isInYearRange(n, u.yearrange.minyear, u.yearrange.maxyear)
                            },
                            cardinality: 3
                        }]
                    }
                },
                insertMode: !1,
                autoUnmask: !1
            },
            "mm/dd/yyyy": {
                placeholder: "mm/dd/yyyy",
                alias: "dd/mm/yyyy",
                regex: {
                    val2pre: function (t) {
                        var i = n.inputmask.escapeRegex.call(this, t);
                        return new RegExp("((0[13-9]|1[012])" + i + "[0-3])|(02" + i + "[0-2])")
                    },
                    val2: function (t) {
                        var i = n.inputmask.escapeRegex.call(this, t);
                        return new RegExp("((0[1-9]|1[012])" + i + "(0[1-9]|[12][0-9]))|((0[13-9]|1[012])" + i + "30)|((0[13578]|1[02])" + i + "31)")
                    },
                    val1pre: new RegExp("[01]"),
                    val1: new RegExp("0[1-9]|1[012]")
                },
                leapday: "02/29/",
                onKeyUp: function (t, i, r) {
                    var f = n(this), u;
                    t.ctrlKey && t.keyCode == r.keyCode.RIGHT && (u = new Date,
                        f.val((u.getMonth() + 1).toString() + u.getDate().toString() + u.getFullYear().toString()))
                }
            },
            "yyyy/mm/dd": {
                mask: "y/1/2",
                placeholder: "yyyy/mm/dd",
                alias: "mm/dd/yyyy",
                leapday: "/02/29",
                onKeyUp: function (t, i, r) {
                    var f = n(this), u;
                    t.ctrlKey && t.keyCode == r.keyCode.RIGHT && (u = new Date,
                        f.val(u.getFullYear().toString() + (u.getMonth() + 1).toString() + u.getDate().toString()))
                },
                definitions: {
                    "2": {
                        validator: function (n, t, i, r, u) {
                            var e = t.join("").substr(5, 3), f, s, o;
                            return (e.indexOf(u.placeholder[5]) != -1 && (e = "01" + u.separator),
                                f = u.regex.val2(u.separator).test(e + n),
                                !r && !f && (n.charAt(1) == u.separator || "-./".indexOf(n.charAt(1)) != -1) && (f = u.regex.val2(u.separator).test(e + "0" + n.charAt(0)),
                                    f)) ? (t[i - 1] = "0",
                                    {
                                        pos: i,
                                        c: n.charAt(0)
                                    }) : f ? (s = t.join("").substr(4, 4) + n,
                                        s != u.leapday ? !0 : (o = parseInt(t.join("").substr(0, 4), 10),
                                            o % 4 == 0 ? o % 100 == 0 ? o % 400 == 0 ? !0 : !1 : !0 : !1)) : f
                        },
                        cardinality: 2,
                        prevalidator: [{
                            validator: function (n, t, i, r, u) {
                                var e = t.join("").substr(5, 3), f;
                                return (e.indexOf(u.placeholder[5]) != -1 && (e = "01" + u.separator),
                                    f = u.regex.val2pre(u.separator).test(e + n),
                                    !r && !f && (f = u.regex.val2(u.separator).test(e + "0" + n),
                                        f)) ? (t[i] = "0",
                                            i++ ,
                                        {
                                            pos: i
                                        }) : f
                            },
                            cardinality: 1
                        }]
                    }
                }
            },
            "dd.mm.yyyy": {
                mask: "1.2.y",
                placeholder: "dd.mm.yyyy",
                leapday: "29.02.",
                separator: ".",
                alias: "dd/mm/yyyy"
            },
            "dd-mm-yyyy": {
                mask: "1-2-y",
                placeholder: "dd-mm-yyyy",
                leapday: "29-02-",
                separator: "-",
                alias: "dd/mm/yyyy"
            },
            "mm.dd.yyyy": {
                mask: "1.2.y",
                placeholder: "mm.dd.yyyy",
                leapday: "02.29.",
                separator: ".",
                alias: "mm/dd/yyyy"
            },
            "mm-dd-yyyy": {
                mask: "1-2-y",
                placeholder: "mm-dd-yyyy",
                leapday: "02-29-",
                separator: "-",
                alias: "mm/dd/yyyy"
            },
            "yyyy.mm.dd": {
                mask: "y.1.2",
                placeholder: "yyyy.mm.dd",
                leapday: ".02.29",
                separator: ".",
                alias: "yyyy/mm/dd"
            },
            "yyyy-mm-dd": {
                mask: "y-1-2",
                placeholder: "yyyy-mm-dd",
                leapday: "-02-29",
                separator: "-",
                alias: "yyyy/mm/dd"
            },
            datetime: {
                mask: "1/2/y h:s",
                placeholder: "dd/mm/yyyy hh:mm",
                alias: "dd/mm/yyyy",
                regex: {
                    hrspre: new RegExp("[012]"),
                    hrs24: new RegExp("2[0-9]|1[3-9]"),
                    hrs: new RegExp("[01][0-9]|2[0-3]"),
                    ampm: new RegExp("^[a|p|A|P][m|M]")
                },
                timeseparator: ":",
                hourFormat: "24",
                definitions: {
                    h: {
                        validator: function (n, t, i, r, u) {
                            var e = u.regex.hrs.test(n), f;
                            return !r && !e && (n.charAt(1) == u.timeseparator || "-.:".indexOf(n.charAt(1)) != -1) && (e = u.regex.hrs.test("0" + n.charAt(0)),
                                e) ? (t[i - 1] = "0",
                                    t[i] = n.charAt(0),
                                    i++ ,
                                {
                                    pos: i
                                }) : e && u.hourFormat !== "24" && u.regex.hrs24.test(n) ? (f = parseInt(n, 10),
                                    f == 24 ? (t[i + 5] = "a",
                                        t[i + 6] = "m") : (t[i + 5] = "p",
                                            t[i + 6] = "m"),
                                    f = f - 12,
                                    f < 10 ? (t[i] = f.toString(),
                                        t[i - 1] = "0") : (t[i] = f.toString().charAt(1),
                                            t[i - 1] = f.toString().charAt(0)),
                                {
                                    pos: i,
                                    c: t[i]
                                }) : e
                        },
                        cardinality: 2,
                        prevalidator: [{
                            validator: function (n, t, i, r, u) {
                                var f = u.regex.hrspre.test(n);
                                return !r && !f && (f = u.regex.hrs.test("0" + n),
                                    f) ? (t[i] = "0",
                                        i++ ,
                                    {
                                        pos: i
                                    }) : f
                            },
                            cardinality: 1
                        }]
                    },
                    t: {
                        validator: function (n, t, i, r, u) {
                            return u.regex.ampm.test(n + "m")
                        },
                        casing: "lower",
                        cardinality: 1
                    }
                },
                insertMode: !1,
                autoUnmask: !1
            },
            datetime12: {
                mask: "1/2/y h:s t\\m",
                placeholder: "dd/mm/yyyy hh:mm xm",
                alias: "datetime",
                hourFormat: "12"
            },
            "hh:mm t": {
                mask: "h:s t\\m",
                placeholder: "hh:mm xm",
                alias: "datetime",
                hourFormat: "12"
            },
            "h:s t": {
                mask: "h:s t\\m",
                placeholder: "hh:mm xm",
                alias: "datetime",
                hourFormat: "12"
            },
            "hh:mm:ss": {
                mask: "h:s:s",
                autoUnmask: !1
            },
            "hh:mm": {
                mask: "h:s",
                autoUnmask: !1
            },
            date: {
                alias: "dd/mm/yyyy"
            },
            "mm/yyyy": {
                mask: "1/y",
                placeholder: "mm/yyyy",
                leapday: "donotuse",
                separator: "/",
                alias: "mm/dd/yyyy"
            }
        })
    }(jQuery),
    function (n) {
        n.extend(n.inputmask.defaults.definitions, {
            A: {
                validator: "[A-Za-z]",
                cardinality: 1,
                casing: "upper"
            },
            "#": {
                validator: "[A-Za-zА-яЁё0-9]",
                cardinality: 1,
                casing: "upper"
            }
        });
        n.extend(n.inputmask.defaults.aliases, {
            url: {
                mask: "ir",
                placeholder: "",
                separator: "",
                defaultPrefix: "http://",
                regex: {
                    urlpre1: new RegExp("[fh]"),
                    urlpre2: new RegExp("(ft|ht)"),
                    urlpre3: new RegExp("(ftp|htt)"),
                    urlpre4: new RegExp("(ftp:|http|ftps)"),
                    urlpre5: new RegExp("(ftp:/|ftps:|http:|https)"),
                    urlpre6: new RegExp("(ftp://|ftps:/|http:/|https:)"),
                    urlpre7: new RegExp("(ftp://|ftps://|http://|https:/)"),
                    urlpre8: new RegExp("(ftp://|ftps://|http://|https://)")
                },
                definitions: {
                    i: {
                        validator: function () {
                            return !0
                        },
                        cardinality: 8,
                        prevalidator: function () {
                            for (var t = [], n = 0; n < 8; n++)
                                t[n] = function () {
                                    var t = n;
                                    return {
                                        validator: function (n, i, r, u, f) {
                                            var o, e, s;
                                            if (f.regex["urlpre" + (t + 1)]) {
                                                if (o = n,
                                                    t + 1 - n.length > 0 && (o = i.join("").substring(0, t + 1 - n.length) + "" + o),
                                                    s = f.regex["urlpre" + (t + 1)].test(o),
                                                    !u && !s) {
                                                    for (r = r - t,
                                                        e = 0; e < f.defaultPrefix.length; e++)
                                                        i[r] = f.defaultPrefix[e],
                                                            r++;
                                                    for (e = 0; e < o.length - 1; e++)
                                                        i[r] = o[e],
                                                            r++;
                                                    return {
                                                        pos: r
                                                    }
                                                }
                                                return s
                                            }
                                            return !1
                                        },
                                        cardinality: t
                                    }
                                }();
                            return t
                        }()
                    },
                    r: {
                        validator: ".",
                        cardinality: 50
                    }
                },
                insertMode: !1,
                autoUnmask: !1
            },
            ip: {
                mask: ["[[x]y]z.[[x]y]z.[[x]y]z.x[yz]", "[[x]y]z.[[x]y]z.[[x]y]z.[[x]y][z]"],
                definitions: {
                    x: {
                        validator: "[012]",
                        cardinality: 1,
                        definitionSymbol: "i"
                    },
                    y: {
                        validator: function (n, t, i) {
                            return n = i - 1 > -1 && t[i - 1] != "." ? t[i - 1] + n : "0" + n,
                                new RegExp("2[0-5]|[01][0-9]").test(n)
                        },
                        cardinality: 1,
                        definitionSymbol: "i"
                    },
                    z: {
                        validator: function (n, t, i) {
                            return i - 1 > -1 && t[i - 1] != "." ? (n = t[i - 1] + n,
                                n = i - 2 > -1 && t[i - 2] != "." ? t[i - 2] + n : "0" + n) : n = "00" + n,
                                new RegExp("25[0-5]|2[0-4][0-9]|[01][0-9][0-9]").test(n)
                        },
                        cardinality: 1,
                        definitionSymbol: "i"
                    }
                }
            }
        })
    }(jQuery);
!function (n, t, i) {
    "use strict";
    var r = function (t, i) {
        this.widget = "";
        this.$element = n(t);
        this.defaultTime = i.defaultTime;
        this.disableFocus = i.disableFocus;
        this.disableMousewheel = i.disableMousewheel;
        this.isOpen = i.isOpen;
        this.minuteStep = i.minuteStep;
        this.modalBackdrop = i.modalBackdrop;
        this.orientation = i.orientation;
        this.secondStep = i.secondStep;
        this.snapToStep = i.snapToStep;
        this.showInputs = i.showInputs;
        this.showMeridian = i.showMeridian;
        this.showSeconds = i.showSeconds;
        this.template = i.template;
        this.appendWidgetTo = i.appendWidgetTo;
        this.showWidgetOnAddonClick = i.showWidgetOnAddonClick;
        this.icons = i.icons;
        this.maxHours = i.maxHours;
        this.explicitMode = i.explicitMode;
        this.handleDocumentClick = function (n) {
            var t = n.data.scope;
            t.$element.parent().find(n.target).length || t.$widget.is(n.target) || t.$widget.find(n.target).length || t.hideWidget()
        }
            ;
        this._init()
    };
    r.prototype = {
        constructor: r,
        _init: function () {
            var t = this;
            this.showWidgetOnAddonClick && this.$element.parent().hasClass("input-group") && this.$element.parent().hasClass("bootstrap-timepicker") ? (this.$element.parent(".input-group.bootstrap-timepicker").find(".input-group-addon").on({
                "click.timepicker": n.proxy(this.showWidget, this)
            }),
                this.$element.on({
                    "focus.timepicker": n.proxy(this.highlightUnit, this),
                    "click.timepicker": n.proxy(this.highlightUnit, this),
                    "keydown.timepicker": n.proxy(this.elementKeydown, this),
                    "blur.timepicker": n.proxy(this.blurElement, this),
                    "mousewheel.timepicker DOMMouseScroll.timepicker": n.proxy(this.mousewheel, this)
                })) : this.template ? this.$element.on({
                    "focus.timepicker": n.proxy(this.showWidget, this),
                    "click.timepicker": n.proxy(this.showWidget, this),
                    "blur.timepicker": n.proxy(this.blurElement, this),
                    "mousewheel.timepicker DOMMouseScroll.timepicker": n.proxy(this.mousewheel, this)
                }) : this.$element.on({
                    "focus.timepicker": n.proxy(this.highlightUnit, this),
                    "click.timepicker": n.proxy(this.highlightUnit, this),
                    "keydown.timepicker": n.proxy(this.elementKeydown, this),
                    "blur.timepicker": n.proxy(this.blurElement, this),
                    "mousewheel.timepicker DOMMouseScroll.timepicker": n.proxy(this.mousewheel, this)
                });
            this.$widget = this.template !== !1 ? n(this.getTemplate()).on("click", n.proxy(this.widgetClick, this)) : !1;
            this.showInputs && this.$widget !== !1 && this.$widget.find("input").each(function () {
                n(this).on({
                    "click.timepicker": function () {
                        n(this).select()
                    },
                    "keydown.timepicker": n.proxy(t.widgetKeydown, t),
                    "keyup.timepicker": n.proxy(t.widgetKeyup, t)
                })
            });
            this.setDefaultTime(this.defaultTime)
        },
        blurElement: function () {
            this.highlightedUnit = null;
            this.updateFromElementVal()
        },
        clear: function () {
            this.hour = "";
            this.minute = "";
            this.second = "";
            this.meridian = "";
            this.$element.val("")
        },
        decrementHour: function () {
            if (this.showMeridian)
                if (1 === this.hour)
                    this.hour = 12;
                else {
                    if (12 === this.hour)
                        return this.hour-- ,
                            this.toggleMeridian();
                    if (0 === this.hour)
                        return this.hour = 11,
                            this.toggleMeridian();
                    this.hour--
                }
            else
                this.hour <= 0 ? this.hour = this.maxHours - 1 : this.hour--
        },
        decrementMinute: function (n) {
            var t;
            t = n ? this.minute - n : this.minute - this.minuteStep;
            0 > t ? (this.decrementHour(),
                this.minute = t + 60) : this.minute = t
        },
        decrementSecond: function () {
            var n = this.second - this.secondStep;
            0 > n ? (this.decrementMinute(!0),
                this.second = n + 60) : this.second = n
        },
        elementKeydown: function (n) {
            switch (n.which) {
                case 9:
                    if (n.shiftKey) {
                        if ("hour" === this.highlightedUnit) {
                            this.hideWidget();
                            break
                        }
                        this.highlightPrevUnit()
                    } else {
                        if (this.showMeridian && "meridian" === this.highlightedUnit || this.showSeconds && "second" === this.highlightedUnit || !this.showMeridian && !this.showSeconds && "minute" === this.highlightedUnit) {
                            this.hideWidget();
                            break
                        }
                        this.highlightNextUnit()
                    }
                    n.preventDefault();
                    this.updateFromElementVal();
                    break;
                case 27:
                    this.updateFromElementVal();
                    break;
                case 37:
                    n.preventDefault();
                    this.highlightPrevUnit();
                    this.updateFromElementVal();
                    break;
                case 38:
                    switch (n.preventDefault(),
                    this.highlightedUnit) {
                        case "hour":
                            this.incrementHour();
                            this.highlightHour();
                            break;
                        case "minute":
                            this.incrementMinute();
                            this.highlightMinute();
                            break;
                        case "second":
                            this.incrementSecond();
                            this.highlightSecond();
                            break;
                        case "meridian":
                            this.toggleMeridian();
                            this.highlightMeridian()
                    }
                    this.update();
                    break;
                case 39:
                    n.preventDefault();
                    this.highlightNextUnit();
                    this.updateFromElementVal();
                    break;
                case 40:
                    switch (n.preventDefault(),
                    this.highlightedUnit) {
                        case "hour":
                            this.decrementHour();
                            this.highlightHour();
                            break;
                        case "minute":
                            this.decrementMinute();
                            this.highlightMinute();
                            break;
                        case "second":
                            this.decrementSecond();
                            this.highlightSecond();
                            break;
                        case "meridian":
                            this.toggleMeridian();
                            this.highlightMeridian()
                    }
                    this.update()
            }
        },
        getCursorPosition: function () {
            var n = this.$element.get(0), t, r;
            return "selectionStart" in n ? n.selectionStart : i.selection ? (n.focus(),
                t = i.selection.createRange(),
                r = i.selection.createRange().text.length,
                t.moveStart("character", -n.value.length),
                t.text.length - r) : void 0
        },
        getTemplate: function () {
            var n, t, i, r, u, f;
            switch (this.showInputs ? (t = '<input type="text" class="bootstrap-timepicker-hour" maxlength="2"/>',
                i = '<input type="text" class="bootstrap-timepicker-minute" maxlength="2"/>',
                r = '<input type="text" class="bootstrap-timepicker-second" maxlength="2"/>',
                u = '<input type="text" class="bootstrap-timepicker-meridian" maxlength="2"/>') : (t = '<span class="bootstrap-timepicker-hour"><\/span>',
                    i = '<span class="bootstrap-timepicker-minute"><\/span>',
                    r = '<span class="bootstrap-timepicker-second"><\/span>',
                    u = '<span class="bootstrap-timepicker-meridian"><\/span>'),
            f = '<table><tr><td><a href="#" data-action="incrementHour"><span class="' + this.icons.up + '"><\/span><\/a><\/td><td class="separator">&nbsp;<\/td><td><a href="#" data-action="incrementMinute"><span class="' + this.icons.up + '"><\/span><\/a><\/td>' + (this.showSeconds ? '<td class="separator">&nbsp;<\/td><td><a href="#" data-action="incrementSecond"><span class="' + this.icons.up + '"><\/span><\/a><\/td>' : "") + (this.showMeridian ? '<td class="separator">&nbsp;<\/td><td class="meridian-column"><a href="#" data-action="toggleMeridian"><span class="' + this.icons.up + '"><\/span><\/a><\/td>' : "") + "<\/tr><tr><td>" + t + '<\/td> <td class="separator">:<\/td><td>' + i + "<\/td> " + (this.showSeconds ? '<td class="separator">:<\/td><td>' + r + "<\/td>" : "") + (this.showMeridian ? '<td class="separator">&nbsp;<\/td><td>' + u + "<\/td>" : "") + '<\/tr><tr><td><a href="#" data-action="decrementHour"><span class="' + this.icons.down + '"><\/span><\/a><\/td><td class="separator"><\/td><td><a href="#" data-action="decrementMinute"><span class="' + this.icons.down + '"><\/span><\/a><\/td>' + (this.showSeconds ? '<td class="separator">&nbsp;<\/td><td><a href="#" data-action="decrementSecond"><span class="' + this.icons.down + '"><\/span><\/a><\/td>' : "") + (this.showMeridian ? '<td class="separator">&nbsp;<\/td><td><a href="#" data-action="toggleMeridian"><span class="' + this.icons.down + '"><\/span><\/a><\/td>' : "") + "<\/tr><\/table>",
            this.template) {
                case "modal":
                    n = '<div class="bootstrap-timepicker-widget modal hide fade in" data-backdrop="' + (this.modalBackdrop ? "true" : "false") + '"><div class="modal-header"><a href="#" class="close" data-dismiss="modal">&times;<\/a><h3>Pick a Time<\/h3><\/div><div class="modal-content">' + f + '<\/div><div class="modal-footer"><a href="#" class="btn btn-primary" data-dismiss="modal">OK<\/a><\/div><\/div>';
                    break;
                case "dropdown":
                    n = '<div class="bootstrap-timepicker-widget dropdown-menu">' + f + "<\/div>"
            }
            return n
        },
        getTime: function () {
            return "" === this.hour ? "" : this.hour + ":" + (1 === this.minute.toString().length ? "0" + this.minute : this.minute) + (this.showSeconds ? ":" + (1 === this.second.toString().length ? "0" + this.second : this.second) : "") + (this.showMeridian ? " " + this.meridian : "")
        },
        hideWidget: function () {
            this.isOpen !== !1 && (this.$element.trigger({
                type: "hide.timepicker",
                time: {
                    value: this.getTime(),
                    hours: this.hour,
                    minutes: this.minute,
                    seconds: this.second,
                    meridian: this.meridian
                }
            }),
                "modal" === this.template && this.$widget.modal ? this.$widget.modal("hide") : this.$widget.removeClass("open"),
                n(i).off("mousedown.timepicker, touchend.timepicker", this.handleDocumentClick),
                this.isOpen = !1,
                this.$widget.detach())
        },
        highlightUnit: function () {
            this.position = this.getCursorPosition();
            this.position >= 0 && this.position <= 2 ? this.highlightHour() : this.position >= 3 && this.position <= 5 ? this.highlightMinute() : this.position >= 6 && this.position <= 8 ? this.showSeconds ? this.highlightSecond() : this.highlightMeridian() : this.position >= 9 && this.position <= 11 && this.highlightMeridian()
        },
        highlightNextUnit: function () {
            switch (this.highlightedUnit) {
                case "hour":
                    this.highlightMinute();
                    break;
                case "minute":
                    this.showSeconds ? this.highlightSecond() : this.showMeridian ? this.highlightMeridian() : this.highlightHour();
                    break;
                case "second":
                    this.showMeridian ? this.highlightMeridian() : this.highlightHour();
                    break;
                case "meridian":
                    this.highlightHour()
            }
        },
        highlightPrevUnit: function () {
            switch (this.highlightedUnit) {
                case "hour":
                    this.showMeridian ? this.highlightMeridian() : this.showSeconds ? this.highlightSecond() : this.highlightMinute();
                    break;
                case "minute":
                    this.highlightHour();
                    break;
                case "second":
                    this.highlightMinute();
                    break;
                case "meridian":
                    this.showSeconds ? this.highlightSecond() : this.highlightMinute()
            }
        },
        highlightHour: function () {
            var n = this.$element.get(0)
                , t = this;
            this.highlightedUnit = "hour";
            n.setSelectionRange && setTimeout(function () {
                t.hour < 10 ? n.setSelectionRange(0, 1) : n.setSelectionRange(0, 2)
            }, 0)
        },
        highlightMinute: function () {
            var n = this.$element.get(0)
                , t = this;
            this.highlightedUnit = "minute";
            n.setSelectionRange && setTimeout(function () {
                t.hour < 10 ? n.setSelectionRange(2, 4) : n.setSelectionRange(3, 5)
            }, 0)
        },
        highlightSecond: function () {
            var n = this.$element.get(0)
                , t = this;
            this.highlightedUnit = "second";
            n.setSelectionRange && setTimeout(function () {
                t.hour < 10 ? n.setSelectionRange(5, 7) : n.setSelectionRange(6, 8)
            }, 0)
        },
        highlightMeridian: function () {
            var n = this.$element.get(0)
                , t = this;
            this.highlightedUnit = "meridian";
            n.setSelectionRange && (this.showSeconds ? setTimeout(function () {
                t.hour < 10 ? n.setSelectionRange(8, 10) : n.setSelectionRange(9, 11)
            }, 0) : setTimeout(function () {
                t.hour < 10 ? n.setSelectionRange(5, 7) : n.setSelectionRange(6, 8)
            }, 0))
        },
        incrementHour: function () {
            if (this.showMeridian) {
                if (11 === this.hour)
                    return this.hour++ ,
                        this.toggleMeridian();
                12 === this.hour && (this.hour = 0)
            }
            return this.hour === this.maxHours - 1 ? void (this.hour = 0) : void this.hour++
        },
        incrementMinute: function (n) {
            var t;
            t = n ? this.minute + n : this.minute + this.minuteStep - this.minute % this.minuteStep;
            t > 59 ? (this.incrementHour(),
                this.minute = t - 60) : this.minute = t
        },
        incrementSecond: function () {
            var n = this.second + this.secondStep - this.second % this.secondStep;
            n > 59 ? (this.incrementMinute(!0),
                this.second = n - 60) : this.second = n
        },
        mousewheel: function (t) {
            if (!this.disableMousewheel) {
                t.preventDefault();
                t.stopPropagation();
                var r = t.originalEvent.wheelDelta || -t.originalEvent.detail
                    , i = null;
                switch ("mousewheel" === t.type ? i = -1 * t.originalEvent.wheelDelta : "DOMMouseScroll" === t.type && (i = 40 * t.originalEvent.detail),
                i && (t.preventDefault(),
                    n(this).scrollTop(i + n(this).scrollTop())),
                this.highlightedUnit) {
                    case "minute":
                        r > 0 ? this.incrementMinute() : this.decrementMinute();
                        this.highlightMinute();
                        break;
                    case "second":
                        r > 0 ? this.incrementSecond() : this.decrementSecond();
                        this.highlightSecond();
                        break;
                    case "meridian":
                        this.toggleMeridian();
                        this.highlightMeridian();
                        break;
                    default:
                        r > 0 ? this.incrementHour() : this.decrementHour();
                        this.highlightHour()
                }
                return !1
            }
        },
        changeToNearestStep: function (n, t) {
            return n % t == 0 ? n : Math.round(n % t / t) ? (n + (t - n % t)) % 60 : n - n % t
        },
        place: function () {
            var v, s, r;
            if (!this.isInline) {
                var f = this.$widget.outerWidth()
                    , e = this.$widget.outerHeight()
                    , h = 10
                    , c = n(t).width()
                    , y = n(t).height()
                    , l = n(t).scrollTop()
                    , p = parseInt(this.$element.parents().filter(function () {
                        return "auto" !== n(this).css("z-index")
                    }).first().css("z-index"), 10) + 10
                    , i = this.component ? this.component.parent().offset() : this.$element.offset()
                    , a = this.component ? this.component.outerHeight(!0) : this.$element.outerHeight(!1)
                    , w = this.component ? this.component.outerWidth(!0) : this.$element.outerWidth(!1)
                    , u = i.left
                    , o = i.top;
                this.$widget.removeClass("timepicker-orient-top timepicker-orient-bottom timepicker-orient-right timepicker-orient-left");
                "auto" !== this.orientation.x ? (this.$widget.addClass("timepicker-orient-" + this.orientation.x),
                    "right" === this.orientation.x && (u -= f - w)) : (this.$widget.addClass("timepicker-orient-left"),
                        i.left < 0 ? u -= i.left - h : i.left + f > c && (u = c - f - h));
                r = this.orientation.y;
                "auto" === r && (v = -l + i.top - e,
                    s = l + y - (i.top + a + e),
                    r = Math.max(v, s) === s ? "top" : "bottom");
                this.$widget.addClass("timepicker-orient-" + r);
                "top" === r ? o += a : o -= e + parseInt(this.$widget.css("padding-top"), 10);
                this.$widget.css({
                    top: o,
                    left: u,
                    zIndex: p
                })
            }
        },
        remove: function () {
            n("document").off(".timepicker");
            this.$widget && this.$widget.remove();
            delete this.$element.data().timepicker
        },
        setDefaultTime: function (n) {
            if (this.$element.val())
                this.updateFromElementVal();
            else if ("current" === n) {
                var r = new Date
                    , t = r.getHours()
                    , i = r.getMinutes()
                    , u = r.getSeconds()
                    , f = "AM";
                0 !== u && (u = Math.ceil(r.getSeconds() / this.secondStep) * this.secondStep,
                    60 === u && (i += 1,
                        u = 0));
                0 !== i && (i = Math.ceil(r.getMinutes() / this.minuteStep) * this.minuteStep,
                    60 === i && (t += 1,
                        i = 0));
                this.showMeridian && (0 === t ? t = 12 : t >= 12 ? (t > 12 && (t -= 12),
                    f = "PM") : f = "AM");
                this.hour = t;
                this.minute = i;
                this.second = u;
                this.meridian = f;
                this.update()
            } else
                n === !1 ? (this.hour = 0,
                    this.minute = 0,
                    this.second = 0,
                    this.meridian = "AM") : this.setTime(n)
        },
        setTime: function (n, t) {
            if (!n)
                return void this.clear();
            var f, e, i, r, u, o;
            if ("object" == typeof n && n.getMonth)
                i = n.getHours(),
                    r = n.getMinutes(),
                    u = n.getSeconds(),
                    this.showMeridian && (o = "AM",
                        i > 12 && (o = "PM",
                            i %= 12),
                        12 === i && (o = "PM"));
            else {
                if ((f = (/a/i.test(n) ? 1 : 0) + (/p/i.test(n) ? 2 : 0),
                    f > 2) || (e = n.replace(/[^0-9\:]/g, "").split(":"),
                        i = e[0] ? e[0].toString() : e.toString(),
                        this.explicitMode && i.length > 2 && i.length % 2 != 0))
                    return void this.clear();
                r = e[1] ? e[1].toString() : "";
                u = e[2] ? e[2].toString() : "";
                i.length > 4 && (u = i.slice(-2),
                    i = i.slice(0, -2));
                i.length > 2 && (r = i.slice(-2),
                    i = i.slice(0, -2));
                r.length > 2 && (u = r.slice(-2),
                    r = r.slice(0, -2));
                i = parseInt(i, 10);
                r = parseInt(r, 10);
                u = parseInt(u, 10);
                isNaN(i) && (i = 0);
                isNaN(r) && (r = 0);
                isNaN(u) && (u = 0);
                u > 59 && (u = 59);
                r > 59 && (r = 59);
                i >= this.maxHours && (i = this.maxHours - 1);
                this.showMeridian ? (i > 12 && (f = 2,
                    i -= 12),
                    f || (f = 1),
                    0 === i && (i = 12),
                    o = 1 === f ? "AM" : "PM") : 12 > i && 2 === f ? i += 12 : i >= this.maxHours ? i = this.maxHours - 1 : (0 > i || 12 === i && 1 === f) && (i = 0)
            }
            this.hour = i;
            this.snapToStep ? (this.minute = this.changeToNearestStep(r, this.minuteStep),
                this.second = this.changeToNearestStep(u, this.secondStep)) : (this.minute = r,
                    this.second = u);
            this.meridian = o;
            this.update(t)
        },
        showWidget: function () {
            this.isOpen || this.$element.is(":disabled") || (this.$widget.appendTo(this.appendWidgetTo),
                n(i).on("mousedown.timepicker, touchend.timepicker", {
                    scope: this
                }, this.handleDocumentClick),
                this.$element.trigger({
                    type: "show.timepicker",
                    time: {
                        value: this.getTime(),
                        hours: this.hour,
                        minutes: this.minute,
                        seconds: this.second,
                        meridian: this.meridian
                    }
                }),
                this.place(),
                this.disableFocus && this.$element.blur(),
                "" === this.hour && (this.defaultTime ? this.setDefaultTime(this.defaultTime) : this.setTime("0:0:0")),
                "modal" === this.template && this.$widget.modal ? this.$widget.modal("show").on("hidden", n.proxy(this.hideWidget, this)) : this.isOpen === !1 && this.$widget.addClass("open"),
                this.isOpen = !0)
        },
        toggleMeridian: function () {
            this.meridian = "AM" === this.meridian ? "PM" : "AM"
        },
        update: function (n) {
            this.updateElement();
            n || this.updateWidget();
            this.$element.trigger({
                type: "changeTime.timepicker",
                time: {
                    value: this.getTime(),
                    hours: this.hour,
                    minutes: this.minute,
                    seconds: this.second,
                    meridian: this.meridian
                }
            })
        },
        updateElement: function () {
            this.$element.val(this.getTime()).change()
        },
        updateFromElementVal: function () {
            this.setTime(this.$element.val())
        },
        updateWidget: function () {
            if (this.$widget !== !1) {
                var n = this.hour
                    , t = 1 === this.minute.toString().length ? "0" + this.minute : this.minute
                    , i = 1 === this.second.toString().length ? "0" + this.second : this.second;
                this.showInputs ? (this.$widget.find("input.bootstrap-timepicker-hour").val(n),
                    this.$widget.find("input.bootstrap-timepicker-minute").val(t),
                    this.showSeconds && this.$widget.find("input.bootstrap-timepicker-second").val(i),
                    this.showMeridian && this.$widget.find("input.bootstrap-timepicker-meridian").val(this.meridian)) : (this.$widget.find("span.bootstrap-timepicker-hour").text(n),
                        this.$widget.find("span.bootstrap-timepicker-minute").text(t),
                        this.showSeconds && this.$widget.find("span.bootstrap-timepicker-second").text(i),
                        this.showMeridian && this.$widget.find("span.bootstrap-timepicker-meridian").text(this.meridian))
            }
        },
        updateFromWidgetInputs: function () {
            if (this.$widget !== !1) {
                var n = this.$widget.find("input.bootstrap-timepicker-hour").val() + ":" + this.$widget.find("input.bootstrap-timepicker-minute").val() + (this.showSeconds ? ":" + this.$widget.find("input.bootstrap-timepicker-second").val() : "") + (this.showMeridian ? this.$widget.find("input.bootstrap-timepicker-meridian").val() : "");
                this.setTime(n, !0)
            }
        },
        widgetClick: function (t) {
            t.stopPropagation();
            t.preventDefault();
            var i = n(t.target)
                , r = i.closest("a").data("action");
            r && this[r]();
            this.update();
            i.is("input") && i.get(0).setSelectionRange(0, 2)
        },
        widgetKeydown: function (t) {
            var r = n(t.target)
                , i = r.attr("class").replace("bootstrap-timepicker-", "");
            switch (t.which) {
                case 9:
                    if (t.shiftKey) {
                        if ("hour" === i)
                            return this.hideWidget()
                    } else if (this.showMeridian && "meridian" === i || this.showSeconds && "second" === i || !this.showMeridian && !this.showSeconds && "minute" === i)
                        return this.hideWidget();
                    break;
                case 27:
                    this.hideWidget();
                    break;
                case 38:
                    switch (t.preventDefault(),
                    i) {
                        case "hour":
                            this.incrementHour();
                            break;
                        case "minute":
                            this.incrementMinute();
                            break;
                        case "second":
                            this.incrementSecond();
                            break;
                        case "meridian":
                            this.toggleMeridian()
                    }
                    this.setTime(this.getTime());
                    r.get(0).setSelectionRange(0, 2);
                    break;
                case 40:
                    switch (t.preventDefault(),
                    i) {
                        case "hour":
                            this.decrementHour();
                            break;
                        case "minute":
                            this.decrementMinute();
                            break;
                        case "second":
                            this.decrementSecond();
                            break;
                        case "meridian":
                            this.toggleMeridian()
                    }
                    this.setTime(this.getTime());
                    r.get(0).setSelectionRange(0, 2)
            }
        },
        widgetKeyup: function (n) {
            (65 === n.which || 77 === n.which || 80 === n.which || 46 === n.which || 8 === n.which || n.which >= 48 && n.which <= 57 || n.which >= 96 && n.which <= 105) && this.updateFromWidgetInputs()
        }
    };
    n.fn.timepicker = function (t) {
        var i = Array.apply(null, arguments);
        return i.shift(),
            this.each(function () {
                var f = n(this)
                    , u = f.data("timepicker")
                    , e = "object" == typeof t && t;
                u || f.data("timepicker", u = new r(this, n.extend({}, n.fn.timepicker.defaults, e, n(this).data())));
                "string" == typeof t && u[t].apply(u, i)
            })
    }
        ;
    n.fn.timepicker.defaults = {
        defaultTime: "current",
        disableFocus: !1,
        disableMousewheel: !1,
        isOpen: !1,
        minuteStep: 15,
        modalBackdrop: !1,
        orientation: {
            x: "auto",
            y: "auto"
        },
        secondStep: 15,
        snapToStep: !1,
        showSeconds: !1,
        showInputs: !0,
        showMeridian: !0,
        template: "dropdown",
        appendWidgetTo: "body",
        showWidgetOnAddonClick: !0,
        icons: {
            up: "glyphicon glyphicon-chevron-up",
            down: "glyphicon glyphicon-chevron-down"
        },
        maxHours: 24,
        explicitMode: !1
    };
    n.fn.timepicker.Constructor = r;
    n(i).on("focus.timepicker.data-api click.timepicker.data-api", '[data-provide="timepicker"]', function (t) {
        var i = n(this);
        i.data("timepicker") || (t.preventDefault(),
            i.timepicker())
    })
}(jQuery, window, document)
