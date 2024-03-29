(this.webpackJsonpmturk = this.webpackJsonpmturk || []).push([
    [3],
    {
        13: function (e, t, n) {
            "use strict";
            n.r(t);
            var a = n(14),
                s = n(15),
                c = n(16),
                i = n(26),
                l = n(18),
                r = n(17),
                o = n(0),
                d = n.n(o),
                h = (n(53), n(1)),
                u = (function (e) {
                    Object(l.a)(n, e);
                    var t = Object(r.a)(n);
                    function n() {
                        return Object(s.a)(this, n), t.apply(this, arguments);
                    }
                    return (
                        Object(c.a)(n, [
                            {
                                key: "render",
                                value: function () {
                                    var e = this.props.onClickSkip;
                                    return Object(h.jsx)("div", {
                                        className: "home",
                                        children: Object(h.jsxs)("div", {
                                            className: "container",
                                            children: [
                                                Object(h.jsx)("div", {
                                                    className: "row",
                                                    children: Object(h.jsx)(
                                                        "div",
                                                        {
                                                            className: "col",
                                                            children: Object(
                                                                h.jsxs
                                                            )("div", {
                                                                className:
                                                                    "header text-center",
                                                                children: [
                                                                    Object(
                                                                        h.jsx
                                                                    )("h1", {
                                                                        children:
                                                                            "Virtual Assistant++",
                                                                    }),
                                                                    Object(
                                                                        h.jsx
                                                                    )("h3", {
                                                                        children:
                                                                            Object(
                                                                                h.jsx
                                                                            )(
                                                                                "span",
                                                                                {
                                                                                    className:
                                                                                        "bi bi-robot",
                                                                                }
                                                                            ),
                                                                    }),
                                                                    Object(
                                                                        h.jsx
                                                                    )("p", {
                                                                        children:
                                                                            "Your goal in this task is to write Complex Commands to the perfect virtual assistant (better than Google assistant, Alexa or Siri)",
                                                                    }),
                                                                ],
                                                            }),
                                                        }
                                                    ),
                                                }),
                                                Object(h.jsx)("div", {
                                                    className: "row mb-5",
                                                    children: Object(h.jsx)(
                                                        "div",
                                                        {
                                                            className: "col",
                                                            children: Object(
                                                                h.jsx
                                                            )("div", {
                                                                className:
                                                                    "mt-4 mb-4 d-grid gap-2 d-sm-flex justify-content-sm-center",
                                                                children:
                                                                    Object(
                                                                        h.jsx
                                                                    )(
                                                                        "button",
                                                                        {
                                                                            type: "button",
                                                                            className:
                                                                                "btn btn-primary btn-lg px-4",
                                                                            onClick:
                                                                                e,
                                                                            children:
                                                                                "Start",
                                                                        }
                                                                    ),
                                                            }),
                                                        }
                                                    ),
                                                }),
                                            ],
                                        }),
                                    });
                                },
                            },
                        ]),
                        n
                    );
                })(d.a.Component),
                p =
                    (n(54),
                    (function (e) {
                        Object(l.a)(n, e);
                        var t = Object(r.a)(n);
                        function n() {
                            return (
                                Object(s.a)(this, n), t.apply(this, arguments)
                            );
                        }
                        return (
                            Object(c.a)(n, [
                                {
                                    key: "getRequirments",
                                    value: function () {
                                        return [
                                            {
                                                title: "Relevant",
                                                desc: "The different parts in your complex command should be related to one another. ",
                                            },
                                            {
                                                title: "Can be done by a virtual assistant",
                                                desc: "Think of instructions that are possible for a virtual assistant to perform. As a rule of thumb, if a virtual assistant (like Siri or Alexa) can do each of the simple commands that make the complex command, then it is valid.",
                                            },
                                            {
                                                title: "Useful",
                                                desc: "Think about real-life scenarios where you could use this ideal virtual assistance in your favor.",
                                            },
                                            {
                                                title: "Diverse",
                                                desc: "Don\u2019t repeat yourself. Think of commands in different apps or different commands in the same app. ",
                                            },
                                            {
                                                title: "DRY (Don't Repreat Yourself)",
                                                desc: 'If you use multiple equal expressions in your command: for example, a time (5 pm) or a name of a person (Bill), use different nouns to describe these expressions (for exmaple, "at that time" or "he" accordingly).',
                                            },
                                            {
                                                title: "Unambiguous",
                                                desc: "A person can clearly understand the intents within your instruction.",
                                            },
                                        ];
                                    },
                                },
                                {
                                    key: "render",
                                    value: function () {
                                        var e = this.getRequirments();
                                        return Object(h.jsxs)("div", {
                                            className: "instructions",
                                            children: [
                                                Object(h.jsx)("div", {
                                                    className: "row",
                                                    children: Object(h.jsx)(
                                                        "div",
                                                        {
                                                            className: "col",
                                                            children: Object(
                                                                h.jsxs
                                                            )("div", {
                                                                className:
                                                                    "header text-center",
                                                                children: [
                                                                    Object(
                                                                        h.jsxs
                                                                    )("h1", {
                                                                        className:
                                                                            "text-center",
                                                                        children:
                                                                            [
                                                                                Object(
                                                                                    h.jsx
                                                                                )(
                                                                                    "span",
                                                                                    {
                                                                                        className:
                                                                                            "title-small",
                                                                                        children:
                                                                                            "Your task:",
                                                                                    }
                                                                                ),
                                                                                "Write a Complex Command",
                                                                            ],
                                                                    }),
                                                                    Object(
                                                                        h.jsx
                                                                    )("p", {
                                                                        children:
                                                                            "Now, you think of a complex command you can ask your virtual assistant that involves multiple apps (or the same app multiple times).",
                                                                    }),
                                                                ],
                                                            }),
                                                        }
                                                    ),
                                                }),
                                                Object(h.jsx)("div", {
                                                    className: "row",
                                                    children: Object(h.jsxs)(
                                                        "div",
                                                        {
                                                            className: "col",
                                                            children: [
                                                                Object(h.jsx)(
                                                                    "h3",
                                                                    {
                                                                        children:
                                                                            "Requirements",
                                                                    }
                                                                ),
                                                                Object(h.jsx)(
                                                                    "ol",
                                                                    {
                                                                        className:
                                                                            "requirements",
                                                                        children:
                                                                            e.map(
                                                                                function (
                                                                                    e,
                                                                                    t
                                                                                ) {
                                                                                    return Object(
                                                                                        h.jsxs
                                                                                    )(
                                                                                        "li",
                                                                                        {
                                                                                            className:
                                                                                                "requirement",
                                                                                            children:
                                                                                                [
                                                                                                    Object(
                                                                                                        h.jsx
                                                                                                    )(
                                                                                                        "div",
                                                                                                        {
                                                                                                            className:
                                                                                                                "requirement-title bold",
                                                                                                            children:
                                                                                                                e.title,
                                                                                                        }
                                                                                                    ),
                                                                                                    Object(
                                                                                                        h.jsx
                                                                                                    )(
                                                                                                        "div",
                                                                                                        {
                                                                                                            className:
                                                                                                                "requirement-desc",
                                                                                                            children:
                                                                                                                e.desc,
                                                                                                        }
                                                                                                    ),
                                                                                                ],
                                                                                        },
                                                                                        t
                                                                                    );
                                                                                }
                                                                            ),
                                                                    }
                                                                ),
                                                            ],
                                                        }
                                                    ),
                                                }),
                                            ],
                                        });
                                    },
                                },
                            ]),
                            n
                        );
                    })(d.a.Component)),
                m =
                    (n(55),
                    (function (e) {
                        Object(l.a)(n, e);
                        var t = Object(r.a)(n);
                        function n() {
                            return (
                                Object(s.a)(this, n), t.apply(this, arguments)
                            );
                        }
                        return (
                            Object(c.a)(n, [
                                {
                                    key: "render",
                                    value: function () {
                                        var e = this.props,
                                            t = e.onClickNext,
                                            n = e.onClickBack;
                                        return Object(h.jsx)("div", {
                                            className: "instructions",
                                            children: Object(h.jsxs)("div", {
                                                className: "container",
                                                children: [
                                                    Object(h.jsx)("div", {
                                                        className: "row",
                                                        children: Object(h.jsx)(
                                                            p,
                                                            {}
                                                        ),
                                                    }),
                                                    Object(h.jsx)("div", {
                                                        className: "row mb-3",
                                                        children: Object(h.jsx)(
                                                            "div",
                                                            {
                                                                className:
                                                                    "col",
                                                                children:
                                                                    Object(
                                                                        h.jsxs
                                                                    )("div", {
                                                                        className:
                                                                            "actions bottom mt-4 mb-4 d-grid gap-2 d-sm-flex justify-content-sm-center",
                                                                        children:
                                                                            [
                                                                                Object(
                                                                                    h.jsx
                                                                                )(
                                                                                    "button",
                                                                                    {
                                                                                        type: "button",
                                                                                        className:
                                                                                            "btn btn-outline-secondary btn-lg px-4 gap-3",
                                                                                        onClick:
                                                                                            n,
                                                                                        children:
                                                                                            Object(
                                                                                                h.jsx
                                                                                            )(
                                                                                                "i",
                                                                                                {
                                                                                                    className:
                                                                                                        "bi bi-chevron-left",
                                                                                                }
                                                                                            ),
                                                                                    }
                                                                                ),
                                                                                Object(
                                                                                    h.jsx
                                                                                )(
                                                                                    "button",
                                                                                    {
                                                                                        type: "button",
                                                                                        className:
                                                                                            "btn btn-primary btn-lg px-4",
                                                                                        onClick:
                                                                                            t,
                                                                                        children:
                                                                                            Object(
                                                                                                h.jsx
                                                                                            )(
                                                                                                "i",
                                                                                                {
                                                                                                    className:
                                                                                                        "bi bi-chevron-right",
                                                                                                }
                                                                                            ),
                                                                                    }
                                                                                ),
                                                                            ],
                                                                    }),
                                                            }
                                                        ),
                                                    }),
                                                ],
                                            }),
                                        });
                                    },
                                },
                            ]),
                            n
                        );
                    })(d.a.Component)),
                b = n(66),
                j =
                    (n(56),
                    (function (e) {
                        Object(l.a)(n, e);
                        var t = Object(r.a)(n);
                        function n(e) {
                            var a;
                            return (
                                Object(s.a)(this, n),
                                ((a = t.call(this, e)).state = {
                                    selectAppIndex: null,
                                }),
                                (a.handleClickApp = a.handleClickApp.bind(
                                    Object(i.a)(a)
                                )),
                                (a.handleCloseApp = a.handleCloseApp.bind(
                                    Object(i.a)(a)
                                )),
                                a
                            );
                        }
                        return (
                            Object(c.a)(n, [
                                {
                                    key: "handleClickApp",
                                    value: function (e) {
                                        if (
                                            (e.preventDefault(),
                                            this.props.showAppHelp)
                                        ) {
                                            var t = parseInt(
                                                e.currentTarget.getAttribute(
                                                    "data-app-index"
                                                )
                                            );
                                            this.setState({
                                                selectAppIndex: t,
                                            });
                                        } else
                                            this.setState({
                                                selectAppIndex: null,
                                            });
                                    },
                                },
                                {
                                    key: "handleCloseApp",
                                    value: function (e) {
                                        e.preventDefault(),
                                            this.setState({
                                                selectAppIndex: null,
                                            });
                                    },
                                },
                                {
                                    key: "renderAppsGrid",
                                    value: function () {
                                        for (
                                            var e =
                                                    arguments.length > 0 &&
                                                    void 0 !== arguments[0]
                                                        ? arguments[0]
                                                        : 3,
                                                t = this.props.apps,
                                                n = [],
                                                a = 0;
                                            a < t.length;
                                            a += e
                                        )
                                            n.push(
                                                Object(h.jsxs)(
                                                    "div",
                                                    {
                                                        className: "row",
                                                        children: [
                                                            Object(h.jsxs)(
                                                                "div",
                                                                {
                                                                    className:
                                                                        "col-sm-4 app",
                                                                    "data-app-index":
                                                                        a,
                                                                    onClick:
                                                                        this
                                                                            .handleClickApp,
                                                                    children: [
                                                                        Object(
                                                                            h.jsx
                                                                        )(
                                                                            "div",
                                                                            {
                                                                                className:
                                                                                    "app-icon text-center",
                                                                                children:
                                                                                    Object(
                                                                                        h.jsx
                                                                                    )(
                                                                                        "span",
                                                                                        {
                                                                                            className:
                                                                                                "bi bi-".concat(
                                                                                                    t[
                                                                                                        a
                                                                                                    ]
                                                                                                        .icon
                                                                                                ),
                                                                                        }
                                                                                    ),
                                                                            }
                                                                        ),
                                                                        Object(
                                                                            h.jsx
                                                                        )(
                                                                            "div",
                                                                            {
                                                                                className:
                                                                                    "app-name text-center",
                                                                                children:
                                                                                    t[
                                                                                        a
                                                                                    ]
                                                                                        .name,
                                                                            }
                                                                        ),
                                                                    ],
                                                                }
                                                            ),
                                                            a + 1 < t.length &&
                                                                Object(h.jsxs)(
                                                                    "div",
                                                                    {
                                                                        className:
                                                                            "col-sm-4 app",
                                                                        "data-app-index":
                                                                            a +
                                                                            1,
                                                                        onClick:
                                                                            this
                                                                                .handleClickApp,
                                                                        children:
                                                                            [
                                                                                Object(
                                                                                    h.jsx
                                                                                )(
                                                                                    "div",
                                                                                    {
                                                                                        className:
                                                                                            "app-icon text-center",
                                                                                        children:
                                                                                            Object(
                                                                                                h.jsx
                                                                                            )(
                                                                                                "span",
                                                                                                {
                                                                                                    className:
                                                                                                        "bi bi-".concat(
                                                                                                            t[
                                                                                                                a +
                                                                                                                    1
                                                                                                            ]
                                                                                                                .icon
                                                                                                        ),
                                                                                                }
                                                                                            ),
                                                                                    }
                                                                                ),
                                                                                Object(
                                                                                    h.jsx
                                                                                )(
                                                                                    "div",
                                                                                    {
                                                                                        className:
                                                                                            "app-name text-center",
                                                                                        children:
                                                                                            t[
                                                                                                a +
                                                                                                    1
                                                                                            ]
                                                                                                .name,
                                                                                    }
                                                                                ),
                                                                            ],
                                                                    }
                                                                ),
                                                            a + 2 < t.length &&
                                                                Object(h.jsxs)(
                                                                    "div",
                                                                    {
                                                                        className:
                                                                            "col-sm-4 app",
                                                                        "data-app-index":
                                                                            a +
                                                                            2,
                                                                        onClick:
                                                                            this
                                                                                .handleClickApp,
                                                                        children:
                                                                            [
                                                                                Object(
                                                                                    h.jsx
                                                                                )(
                                                                                    "div",
                                                                                    {
                                                                                        className:
                                                                                            "app-icon text-center",
                                                                                        children:
                                                                                            Object(
                                                                                                h.jsx
                                                                                            )(
                                                                                                "span",
                                                                                                {
                                                                                                    className:
                                                                                                        "bi bi-".concat(
                                                                                                            t[
                                                                                                                a +
                                                                                                                    2
                                                                                                            ]
                                                                                                                .icon
                                                                                                        ),
                                                                                                }
                                                                                            ),
                                                                                    }
                                                                                ),
                                                                                Object(
                                                                                    h.jsx
                                                                                )(
                                                                                    "div",
                                                                                    {
                                                                                        className:
                                                                                            "app-name text-center",
                                                                                        children:
                                                                                            t[
                                                                                                a +
                                                                                                    2
                                                                                            ]
                                                                                                .name,
                                                                                    }
                                                                                ),
                                                                            ],
                                                                    }
                                                                ),
                                                        ],
                                                    },
                                                    a
                                                )
                                            );
                                        return Object(h.jsx)("div", {
                                            className: "apps",
                                            children: n,
                                        });
                                    },
                                },
                                {
                                    key: "renderShowApp",
                                    value: function (e) {
                                        var t = this.props.apps[e];
                                        return Object(h.jsx)("div", {
                                            className: "app-help",
                                            children: Object(h.jsx)("div", {
                                                className: "row",
                                                children: Object(h.jsx)("div", {
                                                    className: "col",
                                                    children: Object(h.jsxs)(
                                                        "div",
                                                        {
                                                            className:
                                                                "app-help-content",
                                                            children: [
                                                                Object(h.jsx)(
                                                                    "div",
                                                                    {
                                                                        className:
                                                                            "close-icon",
                                                                        onClick:
                                                                            this
                                                                                .handleCloseApp,
                                                                        children:
                                                                            Object(
                                                                                h.jsx
                                                                            )(
                                                                                "span",
                                                                                {
                                                                                    className:
                                                                                        "bi bi-x-circle",
                                                                                }
                                                                            ),
                                                                    }
                                                                ),
                                                                Object(h.jsxs)(
                                                                    "h3",
                                                                    {
                                                                        children:
                                                                            [
                                                                                Object(
                                                                                    h.jsx
                                                                                )(
                                                                                    "span",
                                                                                    {
                                                                                        className:
                                                                                            "bi bi-".concat(
                                                                                                t.icon
                                                                                            ),
                                                                                    }
                                                                                ),
                                                                                t.name,
                                                                            ],
                                                                    }
                                                                ),
                                                                Object(h.jsx)(
                                                                    "p",
                                                                    {
                                                                        children:
                                                                            t.about,
                                                                    }
                                                                ),
                                                            ],
                                                        }
                                                    ),
                                                }),
                                            }),
                                        });
                                    },
                                },
                                {
                                    key: "render",
                                    value: function () {
                                        var e = this.props.disableClickApps,
                                            t = this.state.selectAppIndex;
                                        return Object(h.jsxs)("div", {
                                            className: "device",
                                            children: [
                                                Object(h.jsx)("div", {
                                                    className: "smartphone",
                                                    children: Object(h.jsxs)(
                                                        "div",
                                                        {
                                                            className:
                                                                "content",
                                                            children: [
                                                                Object(h.jsx)(
                                                                    "div",
                                                                    {
                                                                        className:
                                                                            "apps",
                                                                        children:
                                                                            Object(
                                                                                h.jsx
                                                                            )(
                                                                                "div",
                                                                                {
                                                                                    className:
                                                                                        "container",
                                                                                    children:
                                                                                        Object(
                                                                                            h.jsx
                                                                                        )(
                                                                                            "div",
                                                                                            {
                                                                                                children:
                                                                                                    this.renderAppsGrid(),
                                                                                            }
                                                                                        ),
                                                                                }
                                                                            ),
                                                                    }
                                                                ),
                                                                null !== t &&
                                                                    Object(
                                                                        h.jsx
                                                                    )("div", {
                                                                        className:
                                                                            "app-help",
                                                                        children:
                                                                            this.renderShowApp(
                                                                                t
                                                                            ),
                                                                    }),
                                                            ],
                                                        }
                                                    ),
                                                }),
                                                !e &&
                                                    Object(h.jsx)("div", {
                                                        className:
                                                            "device-help text-center",
                                                        children:
                                                            "Click any of the apps for more information",
                                                    }),
                                            ],
                                        });
                                    },
                                },
                            ]),
                            n
                        );
                    })(d.a.Component)),
                x = function (e) {
                    for (var t = e.length; t > 0; ) {
                        var n = Math.floor(Math.random() * t),
                            a = e[--t];
                        (e[t] = e[n]), (e[n] = a);
                    }
                    return e;
                },
                v = function () {
                    var e =
                            arguments.length > 0 &&
                            void 0 !== arguments[0] &&
                            arguments[0],
                        t =
                            arguments.length > 1 && void 0 !== arguments[1]
                                ? arguments[1]
                                : [],
                        n =
                            arguments.length > 2 && void 0 !== arguments[2]
                                ? arguments[2]
                                : 0,
                        a = [
                            {
                                id: "navigation",
                                name: "Navigation",
                                icon: "car-front",
                                about: "You can find the best routes based on real-time traffic, accident and road conditions. Know when you will arrive and when to leave to get to places on-time.",
                            },
                            {
                                id: "weather",
                                name: "Weather",
                                icon: "cloud-sun",
                                about: "You can get detailed local forecast & weather forecast world wide, the app provides the current temperature in Celsius and Fahrenheit, sunrise and sunset time according to city time zone.",
                            },
                            {
                                id: "calendar",
                                name: "Calendar",
                                icon: "calendar-date",
                                about: "You can schedule meetings and events, get reminders about upcoming activities and check your availability.",
                            },
                            {
                                id: "reminders",
                                name: "Reminders",
                                icon: "bookmark",
                                about: "You can use it for all of life's to-dos, including grocery lists, projects at work, or anything else you want to track",
                            },
                            {
                                id: "messages",
                                name: "Messages",
                                icon: "chat",
                                about: "Send texts, photos, videos, documents, stickers, Memoji, and more to contacts.",
                            },
                            {
                                id: "music",
                                name: "Music",
                                icon: "music-note-beamed",
                                about: "Play your favorites songs and albums. Listen to the music you love, and discover new music and podcasts.",
                            },
                            {
                                id: "clock",
                                name: "Clock",
                                icon: "alarm",
                                about: "Set regular alarms for any time of day and have them repeat on one or more days of the week. You can also use the timer to count down from a specified time. You can also use the it to measure the duration of an event. Start the timer, pause it, stop it and restart it.",
                            },
                            {
                                id: "mail",
                                name: "Mail",
                                icon: "envelope",
                                about: "You can send and receive message. You can also archive, delete, flag, or mark messages as read or unread.",
                            },
                            {
                                id: "home",
                                name: "Smart Home",
                                icon: "house",
                                about: "Easily control your smart home accessories from your mobile device. Turn off the lights, see who's at the front door, adjust your living room temperature, turn up the music, and so much more.",
                            },
                            {
                                id: "events",
                                name: "Events & Tickets",
                                icon: "ticket-perforated",
                                about: "Find out about the the best art and entertainment, food and drink, attractions, and immediately buy and sell tickets to these events.",
                            },
                            {
                                id: "shopping",
                                name: "Shopping",
                                icon: "cart",
                                about: "You can get access to online stores (like Amazon), search for stuff to buy, see recommendations, compare prices, look up products, check on your orders, manage subscriptions",
                            },
                            {
                                id: "map",
                                name: "Map & Places",
                                icon: "pin-map",
                                about: "Look up information about places, including hours, photos, ratings, and reviews. Search and browse by category, including food, drink, shopping, and more.",
                            },
                        ],
                        s = a;
                    return (
                        e && (s = x(a)),
                        t &&
                            t.length > 0 &&
                            (s = s.filter(function (e) {
                                return -1 === t.indexOf(e.id);
                            })),
                        n > 0 && (s = s.slice(0, n)),
                        s
                    );
                },
                O =
                    (n(57),
                    (function (e) {
                        Object(l.a)(n, e);
                        var t = Object(r.a)(n);
                        function n(e) {
                            var a;
                            return (
                                Object(s.a)(this, n),
                                ((a = t.call(this, e)).state = {
                                    apps: v(!0, e.excludedApps),
                                }),
                                a
                            );
                        }
                        return (
                            Object(c.a)(n, [
                                {
                                    key: "getIcon",
                                    value: function (e) {
                                        var t = this.state.apps.find(function (
                                            t
                                        ) {
                                            return t.name === e;
                                        });
                                        return t && t.icon;
                                    },
                                },
                                {
                                    key: "render",
                                    value: function () {
                                        var e = this,
                                            t = this.props,
                                            n = t.title,
                                            a = t.description,
                                            s = t.examples,
                                            c = t.showAppHelp,
                                            i = this.state.apps,
                                            l = Boolean(s) && s.length > 0;
                                        return Object(h.jsxs)("div", {
                                            className: "example",
                                            children: [
                                                Object(h.jsx)("div", {
                                                    className: "row",
                                                    children: Object(h.jsx)(
                                                        "div",
                                                        {
                                                            className: "col",
                                                            children: Object(
                                                                h.jsxs
                                                            )("div", {
                                                                className:
                                                                    "header text-center",
                                                                children: [
                                                                    Object(
                                                                        h.jsx
                                                                    )("h1", {
                                                                        children:
                                                                            n,
                                                                    }),
                                                                    Object(
                                                                        h.jsx
                                                                    )("div", {
                                                                        children:
                                                                            a,
                                                                    }),
                                                                ],
                                                            }),
                                                        }
                                                    ),
                                                }),
                                                Object(h.jsxs)("div", {
                                                    className: "row",
                                                    children: [
                                                        Object(h.jsx)("div", {
                                                            className: "col",
                                                            children: Object(
                                                                h.jsx
                                                            )(j, {
                                                                showAppHelp: c,
                                                                apps: i,
                                                            }),
                                                        }),
                                                        l &&
                                                            Object(h.jsxs)(
                                                                "div",
                                                                {
                                                                    className:
                                                                        "col align-self-center",
                                                                    children: [
                                                                        Object(
                                                                            h.jsx
                                                                        )(
                                                                            "h5",
                                                                            {
                                                                                className:
                                                                                    "examples-header",
                                                                                children:
                                                                                    "Examples:",
                                                                            }
                                                                        ),
                                                                        Object(
                                                                            h.jsx
                                                                        )(
                                                                            "div",
                                                                            {
                                                                                className:
                                                                                    "card card-block",
                                                                                children:
                                                                                    Object(
                                                                                        h.jsx
                                                                                    )(
                                                                                        b.a,
                                                                                        {
                                                                                            variant:
                                                                                                "dark",
                                                                                            interval:
                                                                                                "10000",
                                                                                            children:
                                                                                                s.map(
                                                                                                    function (
                                                                                                        t,
                                                                                                        n
                                                                                                    ) {
                                                                                                        return Object(
                                                                                                            h.jsx
                                                                                                        )(
                                                                                                            b
                                                                                                                .a
                                                                                                                .Item,
                                                                                                            {
                                                                                                                className:
                                                                                                                    "instruction-example positive-example",
                                                                                                                children:
                                                                                                                    Object(
                                                                                                                        h.jsx
                                                                                                                    )(
                                                                                                                        "div",
                                                                                                                        {
                                                                                                                            className:
                                                                                                                                "vertical-center-container",
                                                                                                                            children:
                                                                                                                                Object(
                                                                                                                                    h.jsxs
                                                                                                                                )(
                                                                                                                                    "div",
                                                                                                                                    {
                                                                                                                                        className:
                                                                                                                                            "vertical-center",
                                                                                                                                        children:
                                                                                                                                            [
                                                                                                                                                Object(
                                                                                                                                                    h.jsx
                                                                                                                                                )(
                                                                                                                                                    "div",
                                                                                                                                                    {
                                                                                                                                                        className:
                                                                                                                                                            "example-title utterance-text text-center",
                                                                                                                                                        children:
                                                                                                                                                            t.title,
                                                                                                                                                    }
                                                                                                                                                ),
                                                                                                                                                t.caption &&
                                                                                                                                                    Object(
                                                                                                                                                        h.jsxs
                                                                                                                                                    )(
                                                                                                                                                        "div",
                                                                                                                                                        {
                                                                                                                                                            className:
                                                                                                                                                                "example-caption utterance-text text-center",
                                                                                                                                                            children:
                                                                                                                                                                [
                                                                                                                                                                    e.getIcon(
                                                                                                                                                                        t.caption
                                                                                                                                                                    ) &&
                                                                                                                                                                        Object(
                                                                                                                                                                            h.jsx
                                                                                                                                                                        )(
                                                                                                                                                                            "span",
                                                                                                                                                                            {
                                                                                                                                                                                className:
                                                                                                                                                                                    "bi bi-".concat(
                                                                                                                                                                                        e.getIcon(
                                                                                                                                                                                            t.caption
                                                                                                                                                                                        )
                                                                                                                                                                                    ),
                                                                                                                                                                            }
                                                                                                                                                                        ),
                                                                                                                                                                    t.caption,
                                                                                                                                                                    Object(
                                                                                                                                                                        h.jsx
                                                                                                                                                                    )(
                                                                                                                                                                        "span",
                                                                                                                                                                        {}
                                                                                                                                                                    ),
                                                                                                                                                                ],
                                                                                                                                                        }
                                                                                                                                                    ),
                                                                                                                                            ],
                                                                                                                                    }
                                                                                                                                ),
                                                                                                                        }
                                                                                                                    ),
                                                                                                            },
                                                                                                            n
                                                                                                        );
                                                                                                    }
                                                                                                ),
                                                                                        }
                                                                                    ),
                                                                            }
                                                                        ),
                                                                    ],
                                                                }
                                                            ),
                                                    ],
                                                }),
                                            ],
                                        });
                                    },
                                },
                            ]),
                            n
                        );
                    })(d.a.Component)),
                f =
                    (n(62),
                    (function (e) {
                        Object(l.a)(n, e);
                        var t = Object(r.a)(n);
                        function n() {
                            return (
                                Object(s.a)(this, n), t.apply(this, arguments)
                            );
                        }
                        return (
                            Object(c.a)(n, [
                                {
                                    key: "getTitle",
                                    value: function () {
                                        return "Simple commands";
                                    },
                                },
                                {
                                    key: "getDescription",
                                    value: function () {
                                        return Object(h.jsxs)("p", {
                                            children: [
                                                "You are given a mobile device with the following apps. You can ask your virtual assistant to perform",
                                                " ",
                                                Object(h.jsx)("span", {
                                                    className: "bold",
                                                    children: "Simple commands",
                                                }),
                                                " using these apps.",
                                            ],
                                        });
                                    },
                                },
                                {
                                    key: "getExamples",
                                    value: function () {
                                        return [
                                            {
                                                title: "Remind me at 2 pm to call dad",
                                                caption: "Reminders",
                                            },
                                            {
                                                title: "Send a message to Louise and ask if I left my wallet in her car.",
                                                caption: "Messages",
                                            },
                                            {
                                                title: "If I leave Shakespeare in the Park at 6 pm, when will I get home?",
                                                caption: "Map & Navigation",
                                            },
                                            {
                                                title: "Is it going to snow through the spring in upstate new york?",
                                                caption: "Weather",
                                            },
                                        ];
                                    },
                                },
                                {
                                    key: "render",
                                    value: function () {
                                        var e = this.props,
                                            t = e.showExamples,
                                            n = e.showAppHelp,
                                            a = e.excludedApps,
                                            s = e.onClickNext,
                                            c = e.onClickBack,
                                            i = this.getTitle(),
                                            l = this.getDescription(),
                                            r = t ? this.getExamples() : null;
                                        return Object(h.jsx)("div", {
                                            className: "simple",
                                            children: Object(h.jsxs)("div", {
                                                className: "container",
                                                children: [
                                                    Object(h.jsx)(O, {
                                                        title: i,
                                                        description: l,
                                                        examples: r,
                                                        showAppHelp: n,
                                                        excludedApps: a,
                                                        onClickNext: s,
                                                        onClickBack: c,
                                                    }),
                                                    Object(h.jsx)("div", {
                                                        className: "row mb-3",
                                                        children: Object(h.jsx)(
                                                            "div",
                                                            {
                                                                className:
                                                                    "col",
                                                                children:
                                                                    Object(
                                                                        h.jsxs
                                                                    )("div", {
                                                                        className:
                                                                            "actions bottom mt-4 mb-4 d-grid gap-2 d-sm-flex justify-content-sm-center",
                                                                        children:
                                                                            [
                                                                                Object(
                                                                                    h.jsx
                                                                                )(
                                                                                    "button",
                                                                                    {
                                                                                        type: "button",
                                                                                        className:
                                                                                            "btn btn-outline-secondary btn-lg px-4 gap-3",
                                                                                        onClick:
                                                                                            c,
                                                                                        children:
                                                                                            Object(
                                                                                                h.jsx
                                                                                            )(
                                                                                                "i",
                                                                                                {
                                                                                                    className:
                                                                                                        "bi bi-chevron-left",
                                                                                                }
                                                                                            ),
                                                                                    }
                                                                                ),
                                                                                Object(
                                                                                    h.jsx
                                                                                )(
                                                                                    "button",
                                                                                    {
                                                                                        type: "button",
                                                                                        className:
                                                                                            "btn btn-primary btn-lg px-4",
                                                                                        onClick:
                                                                                            s,
                                                                                        children:
                                                                                            Object(
                                                                                                h.jsx
                                                                                            )(
                                                                                                "i",
                                                                                                {
                                                                                                    className:
                                                                                                        "bi bi-chevron-right",
                                                                                                }
                                                                                            ),
                                                                                    }
                                                                                ),
                                                                            ],
                                                                    }),
                                                            }
                                                        ),
                                                    }),
                                                ],
                                            }),
                                        });
                                    },
                                },
                            ]),
                            n
                        );
                    })(d.a.Component)),
                k =
                    (n(63),
                    (function (e) {
                        Object(l.a)(n, e);
                        var t = Object(r.a)(n);
                        function n() {
                            return (
                                Object(s.a)(this, n), t.apply(this, arguments)
                            );
                        }
                        return (
                            Object(c.a)(n, [
                                {
                                    key: "getTitle",
                                    value: function () {
                                        return "Complex commands";
                                    },
                                },
                                {
                                    key: "getDescription",
                                    value: function () {
                                        var e =
                                            arguments.length > 0 &&
                                            void 0 !== arguments[0] &&
                                            arguments[0];
                                        return Object(h.jsxs)("p", {
                                            children: [
                                                "A ",
                                                Object(h.jsx)("span", {
                                                    className: "bold",
                                                    children: "Complex command",
                                                }),
                                                " allows you to request multiple simple commands in a ",
                                                Object(h.jsx)("u", {
                                                    children: "single",
                                                }),
                                                " command from your virtual assistant. ",
                                                !e &&
                                                    Object(h.jsx)("span", {
                                                        children:
                                                            "Commands can be expressed in repetition, sequence and conditions.",
                                                    }),
                                            ],
                                        });
                                    },
                                },
                                {
                                    key: "getExamples",
                                    value: function () {
                                        return [
                                            {
                                                title: "Text coach Nick that I will be late and ask Lauren if I left my keys in her car",
                                                caption: "Sequence",
                                            },
                                            {
                                                title: "Is there a Coldplay concert in the park in July, August or September?",
                                                caption: "Repetition",
                                            },
                                            {
                                                title: "In case it will be hot tomorrow morning, text my sister that I will need to use my car at that time",
                                                caption: "Condition",
                                            },
                                            {
                                                title: "As I leave now to Shakespeare in the Park let everyone on my friends list know if I will be late and block my calendar at that time",
                                                caption:
                                                    "Condition, Repetition & Sequence",
                                            },
                                        ];
                                    },
                                },
                                {
                                    key: "render",
                                    value: function () {
                                        var e = this.props,
                                            t = e.minimalDescription,
                                            n = e.showExamples,
                                            a = e.showAppHelp,
                                            s = e.excludedApps,
                                            c = e.onClickNext,
                                            i = e.onClickBack,
                                            l = this.getTitle(),
                                            r = this.getDescription(t),
                                            o = n ? this.getExamples() : [];
                                        return Object(h.jsx)("div", {
                                            className: "simple",
                                            children: Object(h.jsxs)("div", {
                                                className: "container",
                                                children: [
                                                    Object(h.jsx)(O, {
                                                        title: l,
                                                        description: r,
                                                        examples: o,
                                                        excludedApps: s,
                                                        showAppHelp: a,
                                                        onClickNext: c,
                                                        onClickBack: i,
                                                    }),
                                                    Object(h.jsx)("div", {
                                                        className: "row mb-3",
                                                        children: Object(h.jsx)(
                                                            "div",
                                                            {
                                                                className:
                                                                    "col",
                                                                children:
                                                                    Object(
                                                                        h.jsxs
                                                                    )("div", {
                                                                        className:
                                                                            "actions bottom mt-4 mb-4 d-grid gap-2 d-sm-flex justify-content-sm-center",
                                                                        children:
                                                                            [
                                                                                Object(
                                                                                    h.jsx
                                                                                )(
                                                                                    "button",
                                                                                    {
                                                                                        type: "button",
                                                                                        className:
                                                                                            "btn btn-outline-secondary btn-lg px-4 gap-3",
                                                                                        onClick:
                                                                                            i,
                                                                                        children:
                                                                                            Object(
                                                                                                h.jsx
                                                                                            )(
                                                                                                "i",
                                                                                                {
                                                                                                    className:
                                                                                                        "bi bi-chevron-left",
                                                                                                }
                                                                                            ),
                                                                                    }
                                                                                ),
                                                                                Object(
                                                                                    h.jsx
                                                                                )(
                                                                                    "button",
                                                                                    {
                                                                                        type: "button",
                                                                                        className:
                                                                                            "btn btn-primary btn-lg px-4",
                                                                                        onClick:
                                                                                            c,
                                                                                        children:
                                                                                            Object(
                                                                                                h.jsx
                                                                                            )(
                                                                                                "i",
                                                                                                {
                                                                                                    className:
                                                                                                        "bi bi-chevron-right",
                                                                                                }
                                                                                            ),
                                                                                    }
                                                                                ),
                                                                            ],
                                                                    }),
                                                            }
                                                        ),
                                                    }),
                                                ],
                                            }),
                                        });
                                    },
                                },
                            ]),
                            n
                        );
                    })(d.a.Component)),
                g = n(65),
                N = n(69),
                y = function (e) {
                    return Object(h.jsxs)(
                        g.a,
                        Object(a.a)(
                            Object(a.a)({}, e),
                            {},
                            {
                                size: "xl",
                                "aria-labelledby":
                                    "contained-modal-title-vcenter",
                                animation: !1,
                                centered: !0,
                                children: [
                                    Object(h.jsx)(g.a.Header, {
                                        children: Object(h.jsx)(g.a.Title, {
                                            id: "contained-modal-title-vcenter",
                                            children: Object(h.jsx)("div", {
                                                className: "text-center",
                                                children: Object(h.jsx)("i", {
                                                    className:
                                                        "bi bi-life-preserver",
                                                }),
                                            }),
                                        }),
                                    }),
                                    Object(h.jsx)(g.a.Body, {
                                        children: Object(h.jsx)("div", {
                                            children: e.children,
                                        }),
                                    }),
                                    Object(h.jsx)(g.a.Footer, {
                                        children: Object(h.jsx)(N.a, {
                                            onClick: e.onHide,
                                            children: "Close",
                                        }),
                                    }),
                                ],
                            }
                        )
                    );
                },
                C = (function (e) {
                    Object(l.a)(n, e);
                    var t = Object(r.a)(n);
                    function n() {
                        return Object(s.a)(this, n), t.apply(this, arguments);
                    }
                    return (
                        Object(c.a)(n, [
                            {
                                key: "render",
                                value: function () {
                                    var e = this.props,
                                        t = e.show,
                                        n = e.onHide,
                                        a = e.children;
                                    return Object(h.jsx)("div", {
                                        className: "help",
                                        children: Object(h.jsx)(y, {
                                            show: t,
                                            onHide: n,
                                            children: a,
                                        }),
                                    });
                                },
                            },
                        ]),
                        n
                    );
                })(d.a.Component),
                w =
                    (n(64),
                    (function (e) {
                        Object(l.a)(n, e);
                        var t = Object(r.a)(n);
                        function n(e) {
                            var a;
                            Object(s.a)(this, n), (a = t.call(this, e));
                            var c = e.utterance,
                                l = e.context;
                            return (
                                (a.state = {
                                    utterance: c,
                                    context: l,
                                    apps: v(!0, e.excludedApps),
                                }),
                                (a.handleClickNext = a.handleClickNext.bind(
                                    Object(i.a)(a)
                                )),
                                (a.handleClickHelp = a.handleClickHelp.bind(
                                    Object(i.a)(a)
                                )),
                                (a.handleTextAreaChange =
                                    a.handleTextAreaChange.bind(
                                        Object(i.a)(a)
                                    )),
                                a
                            );
                        }
                        return (
                            Object(c.a)(n, [
                                {
                                    key: "componentDidUpdate",
                                    value: function (e, t) {
                                        if (
                                            e.utterance !== this.props.utterance
                                        ) {
                                            var n = this.props.utterance;
                                            (n = n || ""),
                                                this.setState({ utterance: n });
                                        }
                                    },
                                },
                                {
                                    key: "handleTextAreaChange",
                                    value: function (e) {
                                        var t = this.props,
                                            n = t.index,
                                            a = t.utteranceLimit,
                                            s = t.disableTextOverflow,
                                            c = t.onUtteranceChange,
                                            i = this.state.context,
                                            l = e.target.value,
                                            r =
                                                !s || l.length <= a
                                                    ? l
                                                    : this.state.utterance ||
                                                      "";
                                        this.setState({ utterance: r }),
                                            c && c(n, l, i);
                                    },
                                },
                                {
                                    key: "isUtteranceValid",
                                    value: function () {
                                        var e = this.props,
                                            t = e.conjunctionWords,
                                            n = e.utteranceLimit,
                                            a = e.excludedTerms,
                                            s = this.state.utterance,
                                            c = t.reduce(function (e, t) {
                                                return e.concat(
                                                    t.verification || [
                                                        t.display,
                                                    ]
                                                );
                                            }, []),
                                            i = Boolean(
                                                s && s.trim().length > 0
                                            ),
                                            l = Boolean(c && c.length > 0),
                                            r =
                                                i &&
                                                l &&
                                                c.filter(function (e) {
                                                    return new RegExp(
                                                        "\\b" + e + "\\b",
                                                        "i"
                                                    ).test(s);
                                                }).length > 0,
                                            o =
                                                a &&
                                                a.length > 0 &&
                                                a.filter(function (e) {
                                                    return new RegExp(
                                                        "\\b" + e + "\\b",
                                                        "i"
                                                    ).test(s);
                                                });
                                        return !i || s.split(" ").length <= 2
                                            ? (this.setState({
                                                  valid: !1,
                                                  errorMessage: Object(h.jsx)(
                                                      "span",
                                                      {
                                                          children:
                                                              "Please be more creative.",
                                                      }
                                                  ),
                                              }),
                                              !1)
                                            : l && !r
                                            ? (this.setState({
                                                  valid: !1,
                                                  errorMessage: Object(h.jsxs)(
                                                      "span",
                                                      {
                                                          children: [
                                                              "Please use at least 1 of the following word:",
                                                              " ",
                                                              Object(h.jsx)(
                                                                  "strong",
                                                                  {
                                                                      children:
                                                                          t
                                                                              .map(
                                                                                  function (
                                                                                      e
                                                                                  ) {
                                                                                      return e.display;
                                                                                  }
                                                                              )
                                                                              .join(
                                                                                  ", "
                                                                              ),
                                                                  }
                                                              ),
                                                              ".",
                                                          ],
                                                      }
                                                  ),
                                              }),
                                              !1)
                                            : (s.indexOf("?") >= 0 &&
                                                  s.indexOf("?") <
                                                      0.5 * s.length) ||
                                              s
                                                  .trim()
                                                  .split("?")
                                                  .filter(function (e) {
                                                      return e.length > 0;
                                                  }).length > 1
                                            ? (this.setState({
                                                  valid: !1,
                                                  errorMessage: Object(h.jsxs)(
                                                      "span",
                                                      {
                                                          children: [
                                                              "Please try to phrase the text as a",
                                                              " ",
                                                              Object(h.jsx)(
                                                                  "strong",
                                                                  {
                                                                      children:
                                                                          "single",
                                                                  }
                                                              ),
                                                              " request (and not in multiple phrases).",
                                                          ],
                                                      }
                                                  ),
                                              }),
                                              !1)
                                            : s.length > n
                                            ? (this.setState({
                                                  valid: !1,
                                                  errorMessage: Object(h.jsx)(
                                                      "span",
                                                      {
                                                          children:
                                                              "Your text is too long!",
                                                      }
                                                  ),
                                              }),
                                              !1)
                                            : a &&
                                              a.length > 0 &&
                                              o &&
                                              o.length > 0
                                            ? void this.setState({
                                                  valid: !1,
                                                  errorMessage: Object(h.jsxs)(
                                                      "span",
                                                      {
                                                          children: [
                                                              "Your text contains a term that should not be used:",
                                                              " ",
                                                              o.join(", "),
                                                          ],
                                                      }
                                                  ),
                                              })
                                            : (this.setState({ valid: !0 }),
                                              !0);
                                    },
                                },
                                {
                                    key: "handleClickNext",
                                    value: function (e) {
                                        e.preventDefault(),
                                            this.isUtteranceValid() &&
                                                this.props.onClickNext();
                                    },
                                },
                                {
                                    key: "handleClickHelp",
                                    value: function (e) {
                                        this.setState({ showHelp: !0 });
                                    },
                                },
                                {
                                    key: "render",
                                    value: function () {
                                        var e = this,
                                            t = this.props,
                                            n = t.utteranceLimit,
                                            a = t.excludedTerms,
                                            s = t.requiredFlowsInUtterance,
                                            c = t.showAppHelp,
                                            i = t.onClickBack,
                                            l = this.state,
                                            r = l.utterance,
                                            o = l.valid,
                                            d = l.errorMessage,
                                            u = l.showHelp,
                                            m = l.apps;
                                        return u
                                            ? Object(h.jsx)(C, {
                                                  show: u,
                                                  onHide: function () {
                                                      return e.setState({
                                                          showHelp: !1,
                                                      });
                                                  },
                                                  children: Object(h.jsx)(
                                                      p,
                                                      {}
                                                  ),
                                              })
                                            : Object(h.jsxs)("div", {
                                                  className:
                                                      "utterance px-4 py-5 my-5",
                                                  children: [
                                                      Object(h.jsxs)("div", {
                                                          className:
                                                              "container",
                                                          children: [
                                                              Object(h.jsx)(
                                                                  "div",
                                                                  {
                                                                      className:
                                                                          "row",
                                                                      children:
                                                                          Object(
                                                                              h.jsx
                                                                          )(
                                                                              "div",
                                                                              {
                                                                                  className:
                                                                                      "col",
                                                                                  children:
                                                                                      Object(
                                                                                          h.jsxs
                                                                                      )(
                                                                                          "div",
                                                                                          {
                                                                                              className:
                                                                                                  "header text-center",
                                                                                              children:
                                                                                                  [
                                                                                                      Object(
                                                                                                          h.jsxs
                                                                                                      )(
                                                                                                          "h1",
                                                                                                          {
                                                                                                              className:
                                                                                                                  "text-center",
                                                                                                              children:
                                                                                                                  [
                                                                                                                      Object(
                                                                                                                          h.jsx
                                                                                                                      )(
                                                                                                                          "span",
                                                                                                                          {
                                                                                                                              className:
                                                                                                                                  "title-small",
                                                                                                                              children:
                                                                                                                                  "Your task:",
                                                                                                                          }
                                                                                                                      ),
                                                                                                                      "Write a Complex Command",
                                                                                                                  ],
                                                                                                          }
                                                                                                      ),
                                                                                                      Object(
                                                                                                          h.jsx
                                                                                                      )(
                                                                                                          "p",
                                                                                                          {
                                                                                                              children:
                                                                                                                  "Follow the requirements and write a complex command to your virtual assistant. Use the following apps in your request.",
                                                                                                          }
                                                                                                      ),
                                                                                                  ],
                                                                                          }
                                                                                      ),
                                                                              }
                                                                          ),
                                                                  }
                                                              ),
                                                              Object(h.jsxs)(
                                                                  "div",
                                                                  {
                                                                      className:
                                                                          "row mt-3 mb-3",
                                                                      children:
                                                                          [
                                                                              Object(
                                                                                  h.jsx
                                                                              )(
                                                                                  "div",
                                                                                  {
                                                                                      className:
                                                                                          "col",
                                                                                      children:
                                                                                          Object(
                                                                                              h.jsx
                                                                                          )(
                                                                                              j,
                                                                                              {
                                                                                                  showAppHelp:
                                                                                                      c,
                                                                                                  apps: m,
                                                                                              }
                                                                                          ),
                                                                                  }
                                                                              ),
                                                                              Object(
                                                                                  h.jsxs
                                                                              )(
                                                                                  "div",
                                                                                  {
                                                                                      className:
                                                                                          "col align-self-center",
                                                                                      children:
                                                                                          [
                                                                                              s &&
                                                                                                  s.length >
                                                                                                      0 &&
                                                                                                  Object(
                                                                                                      h.jsxs
                                                                                                  )(
                                                                                                      "div",
                                                                                                      {
                                                                                                          className:
                                                                                                              "row required-flows-in-utterance",
                                                                                                          children:
                                                                                                              [
                                                                                                                  Object(
                                                                                                                      h.jsx
                                                                                                                  )(
                                                                                                                      "p",
                                                                                                                      {
                                                                                                                          children:
                                                                                                                              "Your complex command should express at least one of the following:",
                                                                                                                      }
                                                                                                                  ),
                                                                                                                  Object(
                                                                                                                      h.jsx
                                                                                                                  )(
                                                                                                                      "div",
                                                                                                                      {
                                                                                                                          children:
                                                                                                                              s.map(
                                                                                                                                  function (
                                                                                                                                      e,
                                                                                                                                      t
                                                                                                                                  ) {
                                                                                                                                      return Object(
                                                                                                                                          h.jsx
                                                                                                                                      )(
                                                                                                                                          "span",
                                                                                                                                          {
                                                                                                                                              className:
                                                                                                                                                  "required-flow-in-utterance",
                                                                                                                                              children:
                                                                                                                                                  e,
                                                                                                                                          },
                                                                                                                                          t
                                                                                                                                      );
                                                                                                                                  }
                                                                                                                              ),
                                                                                                                      }
                                                                                                                  ),
                                                                                                              ],
                                                                                                      }
                                                                                                  ),
                                                                                              a &&
                                                                                                  a.length >
                                                                                                      0 &&
                                                                                                  Object(
                                                                                                      h.jsxs
                                                                                                  )(
                                                                                                      "div",
                                                                                                      {
                                                                                                          className:
                                                                                                              "row excluded-terms",
                                                                                                          children:
                                                                                                              [
                                                                                                                  Object(
                                                                                                                      h.jsxs
                                                                                                                  )(
                                                                                                                      "p",
                                                                                                                      {
                                                                                                                          children:
                                                                                                                              [
                                                                                                                                  Object(
                                                                                                                                      h.jsx
                                                                                                                                  )(
                                                                                                                                      "b",
                                                                                                                                      {
                                                                                                                                          children:
                                                                                                                                              "Do not",
                                                                                                                                      }
                                                                                                                                  ),
                                                                                                                                  " use any of the following words and terms in your command:",
                                                                                                                              ],
                                                                                                                      }
                                                                                                                  ),
                                                                                                                  Object(
                                                                                                                      h.jsx
                                                                                                                  )(
                                                                                                                      "div",
                                                                                                                      {
                                                                                                                          children:
                                                                                                                              a.map(
                                                                                                                                  function (
                                                                                                                                      e,
                                                                                                                                      t
                                                                                                                                  ) {
                                                                                                                                      return Object(
                                                                                                                                          h.jsx
                                                                                                                                      )(
                                                                                                                                          "span",
                                                                                                                                          {
                                                                                                                                              className:
                                                                                                                                                  "excluded-term",
                                                                                                                                              children:
                                                                                                                                                  e,
                                                                                                                                          },
                                                                                                                                          t
                                                                                                                                      );
                                                                                                                                  }
                                                                                                                              ),
                                                                                                                      }
                                                                                                                  ),
                                                                                                              ],
                                                                                                      }
                                                                                                  ),
                                                                                              Object(
                                                                                                  h.jsxs
                                                                                              )(
                                                                                                  "div",
                                                                                                  {
                                                                                                      className:
                                                                                                          "card mt-4",
                                                                                                      children:
                                                                                                          [
                                                                                                              Object(
                                                                                                                  h.jsx
                                                                                                              )(
                                                                                                                  "div",
                                                                                                                  {
                                                                                                                      className:
                                                                                                                          "card-header",
                                                                                                                      children:
                                                                                                                          Object(
                                                                                                                              h.jsxs
                                                                                                                          )(
                                                                                                                              "h3",
                                                                                                                              {
                                                                                                                                  className:
                                                                                                                                      "text-center",
                                                                                                                                  children:
                                                                                                                                      [
                                                                                                                                          Object(
                                                                                                                                              h.jsx
                                                                                                                                          )(
                                                                                                                                              "span",
                                                                                                                                              {
                                                                                                                                                  className:
                                                                                                                                                      "intent-icon bi bi-keyboard",
                                                                                                                                              }
                                                                                                                                          ),
                                                                                                                                          "Write here",
                                                                                                                                      ],
                                                                                                                              }
                                                                                                                          ),
                                                                                                                  }
                                                                                                              ),
                                                                                                              Object(
                                                                                                                  h.jsx
                                                                                                              )(
                                                                                                                  "div",
                                                                                                                  {
                                                                                                                      className:
                                                                                                                          "card-body",
                                                                                                                      children:
                                                                                                                          Object(
                                                                                                                              h.jsx
                                                                                                                          )(
                                                                                                                              "div",
                                                                                                                              {
                                                                                                                                  className:
                                                                                                                                      "row",
                                                                                                                                  children:
                                                                                                                                      Object(
                                                                                                                                          h.jsx
                                                                                                                                      )(
                                                                                                                                          "div",
                                                                                                                                          {
                                                                                                                                              className:
                                                                                                                                                  "col",
                                                                                                                                              children:
                                                                                                                                                  Object(
                                                                                                                                                      h.jsx
                                                                                                                                                  )(
                                                                                                                                                      "form",
                                                                                                                                                      {
                                                                                                                                                          className:
                                                                                                                                                              "g-3 needs-validation pt-1",
                                                                                                                                                          onSubmit:
                                                                                                                                                              this
                                                                                                                                                                  .handleSubmit,
                                                                                                                                                          noValidate:
                                                                                                                                                              !0,
                                                                                                                                                          children:
                                                                                                                                                              Object(
                                                                                                                                                                  h.jsxs
                                                                                                                                                              )(
                                                                                                                                                                  "div",
                                                                                                                                                                  {
                                                                                                                                                                      className:
                                                                                                                                                                          "has-validation",
                                                                                                                                                                      children:
                                                                                                                                                                          [
                                                                                                                                                                              Object(
                                                                                                                                                                                  h.jsx
                                                                                                                                                                              )(
                                                                                                                                                                                  "label",
                                                                                                                                                                                  {
                                                                                                                                                                                      className:
                                                                                                                                                                                          "form-label",
                                                                                                                                                                                      style: {
                                                                                                                                                                                          display:
                                                                                                                                                                                              "none",
                                                                                                                                                                                      },
                                                                                                                                                                                      children:
                                                                                                                                                                                          "Write a complex command",
                                                                                                                                                                                  }
                                                                                                                                                                              ),
                                                                                                                                                                              Object(
                                                                                                                                                                                  h.jsx
                                                                                                                                                                              )(
                                                                                                                                                                                  "textarea",
                                                                                                                                                                                  {
                                                                                                                                                                                      className:
                                                                                                                                                                                          "input-textarea utterance-text form-control mb-3 ".concat(
                                                                                                                                                                                              !0 ===
                                                                                                                                                                                                  o
                                                                                                                                                                                                  ? "is-valid"
                                                                                                                                                                                                  : !1 ===
                                                                                                                                                                                                        o &&
                                                                                                                                                                                                        "is-invalid"
                                                                                                                                                                                          ),
                                                                                                                                                                                      rows: "5",
                                                                                                                                                                                      value: r,
                                                                                                                                                                                      type: "text",
                                                                                                                                                                                      id: "utterance",
                                                                                                                                                                                      "aria-describedby":
                                                                                                                                                                                          "help",
                                                                                                                                                                                      onChange:
                                                                                                                                                                                          this
                                                                                                                                                                                              .handleTextAreaChange,
                                                                                                                                                                                      placeholder:
                                                                                                                                                                                          "Type your complex command here...",
                                                                                                                                                                                      required:
                                                                                                                                                                                          !0,
                                                                                                                                                                                  }
                                                                                                                                                                              ),
                                                                                                                                                                              Object(
                                                                                                                                                                                  h.jsxs
                                                                                                                                                                              )(
                                                                                                                                                                                  "div",
                                                                                                                                                                                  {
                                                                                                                                                                                      className:
                                                                                                                                                                                          "p-1 m-1",
                                                                                                                                                                                      children:
                                                                                                                                                                                          [
                                                                                                                                                                                              Object(
                                                                                                                                                                                                  h.jsx
                                                                                                                                                                                              )(
                                                                                                                                                                                                  "span",
                                                                                                                                                                                                  {
                                                                                                                                                                                                      className:
                                                                                                                                                                                                          (
                                                                                                                                                                                                              r ||
                                                                                                                                                                                                              ""
                                                                                                                                                                                                          )
                                                                                                                                                                                                              .length >
                                                                                                                                                                                                          n
                                                                                                                                                                                                              ? "text-danger"
                                                                                                                                                                                                              : "",
                                                                                                                                                                                                      children:
                                                                                                                                                                                                          (
                                                                                                                                                                                                              r ||
                                                                                                                                                                                                              ""
                                                                                                                                                                                                          )
                                                                                                                                                                                                              .length,
                                                                                                                                                                                                  }
                                                                                                                                                                                              ),
                                                                                                                                                                                              " ",
                                                                                                                                                                                              "/ ",
                                                                                                                                                                                              n,
                                                                                                                                                                                          ],
                                                                                                                                                                                  }
                                                                                                                                                                              ),
                                                                                                                                                                              Object(
                                                                                                                                                                                  h.jsx
                                                                                                                                                                              )(
                                                                                                                                                                                  "div",
                                                                                                                                                                                  {
                                                                                                                                                                                      className:
                                                                                                                                                                                          "invalid-feedback",
                                                                                                                                                                                      children:
                                                                                                                                                                                          d,
                                                                                                                                                                                  }
                                                                                                                                                                              ),
                                                                                                                                                                          ],
                                                                                                                                                                  }
                                                                                                                                                              ),
                                                                                                                                                      }
                                                                                                                                                  ),
                                                                                                                                          }
                                                                                                                                      ),
                                                                                                                              }
                                                                                                                          ),
                                                                                                                  }
                                                                                                              ),
                                                                                                          ],
                                                                                                  }
                                                                                              ),
                                                                                          ],
                                                                                  }
                                                                              ),
                                                                          ],
                                                                  }
                                                              ),
                                                              Object(h.jsx)(
                                                                  "div",
                                                                  {
                                                                      className:
                                                                          "row mb-3",
                                                                      children:
                                                                          Object(
                                                                              h.jsx
                                                                          )(
                                                                              "div",
                                                                              {
                                                                                  className:
                                                                                      "col",
                                                                                  children:
                                                                                      Object(
                                                                                          h.jsxs
                                                                                      )(
                                                                                          "div",
                                                                                          {
                                                                                              className:
                                                                                                  "actions bottom mt-4 d-grid gap-2 d-sm-flex justify-content-sm-center",
                                                                                              children:
                                                                                                  [
                                                                                                      Object(
                                                                                                          h.jsx
                                                                                                      )(
                                                                                                          "button",
                                                                                                          {
                                                                                                              type: "button",
                                                                                                              className:
                                                                                                                  "btn btn-outline-secondary btn-lg px-4 gap-3",
                                                                                                              onClick:
                                                                                                                  i,
                                                                                                              children:
                                                                                                                  Object(
                                                                                                                      h.jsx
                                                                                                                  )(
                                                                                                                      "i",
                                                                                                                      {
                                                                                                                          className:
                                                                                                                              "bi bi-chevron-left",
                                                                                                                      }
                                                                                                                  ),
                                                                                                          }
                                                                                                      ),
                                                                                                      Object(
                                                                                                          h.jsx
                                                                                                      )(
                                                                                                          "button",
                                                                                                          {
                                                                                                              type: "button",
                                                                                                              className:
                                                                                                                  "btn btn-primary btn-lg px-4",
                                                                                                              onClick:
                                                                                                                  this
                                                                                                                      .handleClickNext,
                                                                                                              children:
                                                                                                                  Object(
                                                                                                                      h.jsx
                                                                                                                  )(
                                                                                                                      "i",
                                                                                                                      {
                                                                                                                          className:
                                                                                                                              "bi bi-chevron-right",
                                                                                                                      }
                                                                                                                  ),
                                                                                                          }
                                                                                                      ),
                                                                                                  ],
                                                                                          }
                                                                                      ),
                                                                              }
                                                                          ),
                                                                  }
                                                              ),
                                                          ],
                                                      }),
                                                      Object(h.jsx)("div", {
                                                          className:
                                                              "actions float",
                                                          children: Object(
                                                              h.jsxs
                                                          )("button", {
                                                              type: "button",
                                                              className:
                                                                  "btn btn-outline-secondary btn-lg px-4 gap-3",
                                                              onClick:
                                                                  this
                                                                      .handleClickHelp,
                                                              children: [
                                                                  Object(h.jsx)(
                                                                      "i",
                                                                      {
                                                                          className:
                                                                              "bi bi-life-preserver",
                                                                      }
                                                                  ),
                                                                  "Help",
                                                              ],
                                                          }),
                                                      }),
                                                  ],
                                              });
                                    },
                                },
                            ]),
                            n
                        );
                    })(d.a.Component)),
                S = (function (e) {
                    Object(l.a)(n, e);
                    var t = Object(r.a)(n);
                    function n(e) {
                        var a;
                        return (
                            Object(s.a)(this, n),
                            ((a = t.call(this, e)).state = { feedback: "" }),
                            (a.handleSubmit = a.handleSubmit.bind(
                                Object(i.a)(a)
                            )),
                            (a.handleClickBack = a.handleClickBack.bind(
                                Object(i.a)(a)
                            )),
                            (a.handleTextAreaChange =
                                a.handleTextAreaChange.bind(Object(i.a)(a))),
                            a
                        );
                    }
                    return (
                        Object(c.a)(n, [
                            {
                                key: "handleTextAreaChange",
                                value: function (e) {
                                    var t = this.props.onFeedbackChange,
                                        n = e.target.value;
                                    this.setState({ feedback: n }), t && t(n);
                                },
                            },
                            {
                                key: "handleSubmit",
                                value: function (e) {
                                    e.preventDefault();
                                    var t = this.state.feedback;
                                    this.props.onSubmit(t);
                                },
                            },
                            {
                                key: "handleClickBack",
                                value: function (e) {
                                    e.preventDefault(),
                                        this.props.onClickBack();
                                },
                            },
                            {
                                key: "render",
                                value: function () {
                                    var e = this.state.feedback;
                                    return Object(h.jsx)("div", {
                                        className: "thank-you",
                                        children: Object(h.jsxs)("div", {
                                            className: "container",
                                            children: [
                                                Object(h.jsx)("div", {
                                                    className: "row",
                                                    children: Object(h.jsx)(
                                                        "div",
                                                        {
                                                            className: "col",
                                                            children: Object(
                                                                h.jsx
                                                            )("h2", {
                                                                className:
                                                                    "text-muted text-center mb-3",
                                                                children:
                                                                    "Thank You.",
                                                            }),
                                                        }
                                                    ),
                                                }),
                                                Object(h.jsx)("div", {
                                                    className: "row mt-3 mb-3",
                                                    children: Object(h.jsx)(
                                                        "div",
                                                        {
                                                            className: "col",
                                                            children: Object(
                                                                h.jsxs
                                                            )("div", {
                                                                className:
                                                                    "card mt-4",
                                                                children: [
                                                                    Object(
                                                                        h.jsx
                                                                    )("div", {
                                                                        className:
                                                                            "card-header",
                                                                        children:
                                                                            Object(
                                                                                h.jsxs
                                                                            )(
                                                                                "h4",
                                                                                {
                                                                                    className:
                                                                                        "text-center",
                                                                                    children:
                                                                                        [
                                                                                            Object(
                                                                                                h.jsx
                                                                                            )(
                                                                                                "span",
                                                                                                {
                                                                                                    className:
                                                                                                        "intent-icon bi bi-megaphone",
                                                                                                }
                                                                                            ),
                                                                                            "Have any feedback?",
                                                                                        ],
                                                                                }
                                                                            ),
                                                                    }),
                                                                    Object(
                                                                        h.jsx
                                                                    )("div", {
                                                                        className:
                                                                            "card-body",
                                                                        children:
                                                                            Object(
                                                                                h.jsx
                                                                            )(
                                                                                "div",
                                                                                {
                                                                                    className:
                                                                                        "row",
                                                                                    children:
                                                                                        Object(
                                                                                            h.jsx
                                                                                        )(
                                                                                            "div",
                                                                                            {
                                                                                                className:
                                                                                                    "col",
                                                                                                children:
                                                                                                    Object(
                                                                                                        h.jsx
                                                                                                    )(
                                                                                                        "form",
                                                                                                        {
                                                                                                            className:
                                                                                                                "g-3 needs-validation pt-1",
                                                                                                            onSubmit:
                                                                                                                this
                                                                                                                    .handleSubmit,
                                                                                                            noValidate:
                                                                                                                !0,
                                                                                                            children:
                                                                                                                Object(
                                                                                                                    h.jsx
                                                                                                                )(
                                                                                                                    "div",
                                                                                                                    {
                                                                                                                        className:
                                                                                                                            "has-validation",
                                                                                                                        children:
                                                                                                                            Object(
                                                                                                                                h.jsx
                                                                                                                            )(
                                                                                                                                "textarea",
                                                                                                                                {
                                                                                                                                    className:
                                                                                                                                        "feedback-textarea form-control mb-3",
                                                                                                                                    rows: "3",
                                                                                                                                    value: e,
                                                                                                                                    type: "text",
                                                                                                                                    id: "feedback-text",
                                                                                                                                    "aria-describedby":
                                                                                                                                        "help",
                                                                                                                                    onChange:
                                                                                                                                        this
                                                                                                                                            .handleTextAreaChange,
                                                                                                                                    placeholder:
                                                                                                                                        "Enter your feedback here...",
                                                                                                                                    required:
                                                                                                                                        !0,
                                                                                                                                }
                                                                                                                            ),
                                                                                                                    }
                                                                                                                ),
                                                                                                        }
                                                                                                    ),
                                                                                            }
                                                                                        ),
                                                                                }
                                                                            ),
                                                                    }),
                                                                ],
                                                            }),
                                                        }
                                                    ),
                                                }),
                                                Object(h.jsx)("div", {
                                                    className: "row",
                                                    children: Object(h.jsx)(
                                                        "div",
                                                        {
                                                            className: "col",
                                                            children: Object(
                                                                h.jsxs
                                                            )("div", {
                                                                className:
                                                                    "mt-4 d-grid gap-2 d-sm-flex justify-content-sm-center",
                                                                children: [
                                                                    Object(
                                                                        h.jsx
                                                                    )(
                                                                        "button",
                                                                        {
                                                                            type: "button",
                                                                            className:
                                                                                "btn btn-outline-secondary btn-lg px-4 gap-3",
                                                                            onClick:
                                                                                this
                                                                                    .handleClickBack,
                                                                            children:
                                                                                Object(
                                                                                    h.jsx
                                                                                )(
                                                                                    "i",
                                                                                    {
                                                                                        className:
                                                                                            "bi bi-chevron-left",
                                                                                    }
                                                                                ),
                                                                        }
                                                                    ),
                                                                    Object(
                                                                        h.jsx
                                                                    )(
                                                                        "button",
                                                                        {
                                                                            type: "button",
                                                                            className:
                                                                                "btn btn-primary btn-lg px-4",
                                                                            onClick:
                                                                                this
                                                                                    .handleSubmit,
                                                                            children:
                                                                                "Finish",
                                                                        }
                                                                    ),
                                                                ],
                                                            }),
                                                        }
                                                    ),
                                                }),
                                            ],
                                        }),
                                    });
                                },
                            },
                        ]),
                        n
                    );
                })(d.a.Component),
                A = (n(48), 1),
                I = 2,
                T = 3,
                H = 4,
                B = 5,
                q = 6,
                R = (function (e) {
                    Object(l.a)(n, e);
                    var t = Object(r.a)(n);
                    function n(e) {
                        var a;
                        Object(s.a)(this, n), (a = t.call(this, e));
                        var c = e.intents,
                            l = e.constraints;
                        return (
                            (a.state = {
                                index: 0,
                                currentScreen: A,
                                intentsSelections: c && new Array(c.length),
                                constraintsSelections: l && new Array(l.length),
                                workerResponses: [],
                            }),
                            (a.handleClickBack = a.handleClickBack.bind(
                                Object(i.a)(a)
                            )),
                            (a.handleClickNext = a.handleClickNext.bind(
                                Object(i.a)(a)
                            )),
                            (a.handleClickHelp = a.handleClickHelp.bind(
                                Object(i.a)(a)
                            )),
                            (a.handleFeedbackChange =
                                a.handleFeedbackChange.bind(Object(i.a)(a))),
                            (a.handleUtteranceChange =
                                a.handleUtteranceChange.bind(Object(i.a)(a))),
                            (a.handleSelectIntent = a.handleSelectIntent.bind(
                                Object(i.a)(a)
                            )),
                            (a.handleSelectConstraint =
                                a.handleSelectConstraint.bind(Object(i.a)(a))),
                            (a.handleSelection = a.handleSelection.bind(
                                Object(i.a)(a)
                            )),
                            a
                        );
                    }
                    return (
                        Object(c.a)(n, [
                            {
                                key: "submitToMTurk",
                                value: function () {
                                    var e = this.props,
                                        t = e.intents,
                                        n = e.constraints,
                                        a = e.excludedApps,
                                        s = e.excludedTerms,
                                        c = e.requiredFlowsInUtterance,
                                        i = this.state,
                                        l = i.workerResponses,
                                        r = i.feedback,
                                        o = [],
                                        d = function (e) {
                                            var i = l[e],
                                                r = i.utterance,
                                                d = i.context,
                                                h = i.selectedIntents,
                                                u = i.selectedConstraints,
                                                p = i.intentsSelections,
                                                m = i.constraintsSelections,
                                                b =
                                                    h &&
                                                    h
                                                        .map(function (e) {
                                                            return t[e];
                                                        })
                                                        .join(" | "),
                                                j =
                                                    u &&
                                                    u
                                                        .map(function (e) {
                                                            return n[e];
                                                        })
                                                        .join(" | "),
                                                x =
                                                    h &&
                                                    h
                                                        .map(function (e, t) {
                                                            return r.substring(
                                                                p[t][0],
                                                                p[t][1]
                                                            );
                                                        })
                                                        .join(" | "),
                                                v =
                                                    u &&
                                                    u
                                                        .map(function (e, t) {
                                                            return r.substring(
                                                                m[t][0],
                                                                m[t][1]
                                                            );
                                                        })
                                                        .join(" | "),
                                                O = {
                                                    utterance: r,
                                                    context: d,
                                                    excludedTerms: s,
                                                    excludedApps: a,
                                                    requiredFlowsInUtterance: c,
                                                    intents: b,
                                                    constraints: j,
                                                    intentsAnnotations: x,
                                                    constraintsAnnotations: v,
                                                };
                                            o.push(O);
                                        };
                                    for (var h in l) d(h);
                                    var u = r;
                                    (document.querySelector(
                                        "crowd-form"
                                    ).onsubmit = function () {
                                        document.getElementById(
                                            "worker-responses"
                                        ) &&
                                            ((document.getElementById(
                                                "worker-responses"
                                            ).value = JSON.stringify(o)),
                                            (document.getElementById(
                                                "worker-feedback"
                                            ).value = u));
                                    }),
                                        document
                                            .querySelector("crowd-form")
                                            .submit();
                                },
                            },
                            {
                                key: "handleClickNext",
                                value: function () {
                                    var e = this.state.currentScreen;
                                    if (e === q) this.submitToMTurk(this.state);
                                    else {
                                        var t = e + 1;
                                        this.setState({ currentScreen: t });
                                    }
                                    window.scrollTo(0, 0);
                                },
                            },
                            {
                                key: "handleClickBack",
                                value: function () {
                                    var e = this.state.currentScreen;
                                    if (e !== A) {
                                        var t = e - 1;
                                        this.setState({ currentScreen: t });
                                    }
                                    window.scrollTo(0, 0);
                                },
                            },
                            {
                                key: "handleClickHelp",
                                value: function () {
                                    this.setState({ showHelp: !0 });
                                },
                            },
                            {
                                key: "handleFeedbackChange",
                                value: function (e) {
                                    this.setState({ feedback: e });
                                },
                            },
                            {
                                key: "handleUtteranceChange",
                                value: function (e, t, n) {
                                    var s = this.state.workerResponses;
                                    (s[e] = Object(a.a)(Object(a.a)({}, s[e]), {
                                        utterance: t,
                                        context: n,
                                        intentsSelections: [],
                                        constraintsSelections: [],
                                    })),
                                        this.setState({ workerResponses: s });
                                },
                            },
                            {
                                key: "handleSelectIntent",
                                value: function (e, t) {
                                    var n = this.state.workerResponses;
                                    (n[e] = Object(a.a)(Object(a.a)({}, n[e]), {
                                        selectedIntents: t,
                                        intentsSelections: [],
                                    })),
                                        this.setState({ workerResponses: n });
                                },
                            },
                            {
                                key: "handleSelectConstraint",
                                value: function (e, t) {
                                    var n = this.state.workerResponses;
                                    (n[e] = Object(a.a)(Object(a.a)({}, n[e]), {
                                        selectedConstraints: t,
                                        constraintsSelections: [],
                                    })),
                                        this.setState({ workerResponses: n });
                                },
                            },
                            {
                                key: "handleSelection",
                                value: function (e, t, n, s) {
                                    var c = this.state.workerResponses;
                                    (c[e] = Object(a.a)(Object(a.a)({}, c[e]), {
                                        intentsSelections: t,
                                        constraintsSelections: n,
                                        currentSelectionIndex: s,
                                    })),
                                        this.setState({ workerResponses: c });
                                },
                            },
                            {
                                key: "getDisplayedScreen",
                                value: function () {
                                    var e = this.props,
                                        t = e.maxUtterances,
                                        n = e.maxLength,
                                        a = e.minIntents,
                                        s = e.minConstraints,
                                        c = e.conjunctionWords,
                                        i = e.minConjunctionWords,
                                        l = e.excludedTerms,
                                        r = e.excludedApps,
                                        o = e.requiredFlowsInUtterance,
                                        d = e.showExamples,
                                        p = e.showAppHelp,
                                        b = this.state,
                                        j = b.currentScreen,
                                        x = b.index,
                                        v = b.workerResponses,
                                        O = v.length > x ? v[x] : {},
                                        g = O.utterance,
                                        N = O.context,
                                        y = n || 250;
                                    return j === A
                                        ? Object(h.jsx)(u, {
                                              onClickExample:
                                                  this.handleClickHelp,
                                              onClickSkip: this.handleClickNext,
                                          })
                                        : j === I
                                        ? Object(h.jsx)(f, {
                                              showExamples: d,
                                              showAppHelp: p,
                                              excludedApps: r,
                                              onClickBack: this.handleClickBack,
                                              onClickNext: this.handleClickNext,
                                          })
                                        : j === T
                                        ? Object(h.jsx)(k, {
                                              minimalDescription: !1,
                                              showExamples: d,
                                              excludedApps: r,
                                              showAppHelp: p,
                                              onClickBack: this.handleClickBack,
                                              onClickNext: this.handleClickNext,
                                          })
                                        : j === H
                                        ? Object(h.jsx)(m, {
                                              onClickBack: this.handleClickBack,
                                              onClickNext: this.handleClickNext,
                                          })
                                        : j === B
                                        ? Object(h.jsx)(w, {
                                              index: x,
                                              maxUtterances: t,
                                              utterance: g,
                                              utteranceLimit: y,
                                              minIntents: a,
                                              minConstraints: s,
                                              showAppHelp: p,
                                              excludedTerms: l,
                                              requiredFlowsInUtterance: o,
                                              conjunctionWords: c,
                                              minConjunctionWords: i,
                                              context: N,
                                              excludedApps: r,
                                              onUtteranceChange:
                                                  this.handleUtteranceChange,
                                              onClickBack: this.handleClickBack,
                                              onClickHelp: this.handleClickHelp,
                                              onClickNext: this.handleClickNext,
                                          })
                                        : j === q
                                        ? Object(h.jsx)(S, {
                                              onFeedbackChange:
                                                  this.handleFeedbackChange,
                                              onSubmit: this.handleClickNext,
                                              onClickBack: this.handleClickBack,
                                          })
                                        : void 0;
                                },
                            },
                            {
                                key: "render",
                                value: function () {
                                    var e = this.getDisplayedScreen();
                                    return Object(h.jsx)("div", {
                                        className: "app",
                                        children: Object(h.jsx)("div", {
                                            className: "container",
                                            children: Object(h.jsx)("main", {
                                                children: e,
                                            }),
                                        }),
                                    });
                                },
                            },
                        ]),
                        n
                    );
                })(d.a.Component),
                E = function (e) {
                    var t =
                            arguments.length > 1 && void 0 !== arguments[1]
                                ? arguments[1]
                                : null,
                        n =
                            arguments.length > 2 && void 0 !== arguments[2]
                                ? arguments[2]
                                : "root",
                        a = document.getElementById(n).getAttribute(e);
                    return a && !a.startsWith("${") ? a : t;
                },
                U = E("data-id"),
                Y = E("data-max-utterances")
                    ? parseInt(E("data-max-utterances"))
                    : 1,
                D = E("data-min-intents") && parseInt(E("data-min-intents")),
                F = E("data-conjunction-words")
                    ? E("data-conjunction-words")
                          .split("|")
                          .map(function (e) {
                              return {
                                  display: e.trim().split(":")[0],
                                  verification: e
                                      .trim()
                                      .split(":")[1]
                                      .split(","),
                              };
                          })
                    : [],
                M =
                    E("min-conjunction-words") &&
                    parseInt(E("min-conjunction-words")),
                W = E("data-quantifiers")
                    ? E("data-quantifiers")
                          .split("|")
                          .map(function (e) {
                              return e.trim();
                          })
                    : [],
                L = E("data-excluded-terms", "").split("|"),
                P = E("data-required-flows-in-utterance", "").split("|"),
                V = E("data-excluded-apps", "").split("|"),
                J = E("data-max-length") && parseInt(E("data-max-length")),
                z = Boolean(E("data-show-examples", !0)),
                G = Boolean(E("data-show-app-help", !0));
            t.default = function () {
                return Object(h.jsx)("div", {
                    className: "utterances",
                    children: Object(h.jsx)(R, {
                        id: U,
                        maxUtterances: Y,
                        minIntents: D,
                        conjunctionWords: F,
                        minConjunctionWords: M,
                        quantifiers: W,
                        quantifierIdx: null,
                        excludedApps: V,
                        maxLength: J,
                        showExamples: z,
                        showAppHelp: G,
                        requiredFlowsInUtterance: P,
                        excludedTerms: L,
                    }),
                });
            };
        },
        48: function (e, t, n) {},
        53: function (e, t, n) {},
        54: function (e, t, n) {},
        55: function (e, t, n) {},
        56: function (e, t, n) {},
        57: function (e, t, n) {},
        62: function (e, t, n) {},
        63: function (e, t, n) {},
        64: function (e, t, n) {},
    },
]);
//# sourceMappingURL=3.9855d1c6.chunk.js.map
