(this.webpackJsonpmturk = this.webpackJsonpmturk || []).push([
    [3],
    {
        13: function (e, t, n) {
            "use strict";
            n.r(t);
            var a = n(14),
                s = n(15),
                i = n(16),
                c = n(26),
                r = n(18),
                l = n(17),
                o = n(0),
                d = n.n(o),
                h = (n(53), n(1)),
                m = (function (e) {
                    Object(r.a)(n, e);
                    var t = Object(l.a)(n);
                    function n() {
                        return Object(s.a)(this, n), t.apply(this, arguments);
                    }
                    return (
                        Object(i.a)(n, [
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
                b =
                    (n(54),
                    (function (e) {
                        Object(r.a)(n, e);
                        var t = Object(l.a)(n);
                        function n() {
                            return (
                                Object(s.a)(this, n), t.apply(this, arguments)
                            );
                        }
                        return (
                            Object(i.a)(n, [
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
                p =
                    (n(55),
                    (function (e) {
                        Object(r.a)(n, e);
                        var t = Object(l.a)(n);
                        function n() {
                            return (
                                Object(s.a)(this, n), t.apply(this, arguments)
                            );
                        }
                        return (
                            Object(i.a)(n, [
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
                                                            b,
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
                u = n(66),
                j =
                    (n(56),
                    (function (e) {
                        Object(r.a)(n, e);
                        var t = Object(l.a)(n);
                        function n(e) {
                            var a;
                            return (
                                Object(s.a)(this, n),
                                ((a = t.call(this, e)).state = {
                                    selectAppIndex: null,
                                }),
                                (a.handleClickApp = a.handleClickApp.bind(
                                    Object(c.a)(a)
                                )),
                                (a.handleCloseApp = a.handleCloseApp.bind(
                                    Object(c.a)(a)
                                )),
                                a
                            );
                        }
                        return (
                            Object(i.a)(n, [
                                {
                                    key: "handleClickApp",
                                    value: function (e) {
                                        if (
                                            (e.preventDefault(),
                                            this.props.disableClickApps)
                                        )
                                            this.setState({
                                                selectAppIndex: null,
                                            });
                                        else {
                                            var t = parseInt(
                                                e.currentTarget.getAttribute(
                                                    "data-app-index"
                                                )
                                            );
                                            this.setState({
                                                selectAppIndex: t,
                                            });
                                        }
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
                                                                        "col-sm app",
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
                                                                            "col-sm app",
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
                                                                            "col-sm app",
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
                x =
                    (n(57),
                    (function (e) {
                        Object(r.a)(n, e);
                        var t = Object(l.a)(n);
                        function n() {
                            return (
                                Object(s.a)(this, n), t.apply(this, arguments)
                            );
                        }
                        return (
                            Object(i.a)(n, [
                                {
                                    key: "getApps",
                                    value: function () {
                                        return [
                                            {
                                                name: "Navigation",
                                                icon: "car-front",
                                                about: "Directions, traffic conditions, time to travel, estimate time of arrival, estimate time of departure, and distance.",
                                            },
                                            {
                                                name: "Weather",
                                                icon: "cloud-sun",
                                                about: "Information on weather, weather conditions, and temperature.",
                                            },
                                            {
                                                name: "Calendar",
                                                icon: "calendar-date",
                                                about: "Information on calendar meetings and availability, and related actions (e.g., create, update and delete a calendar entry).",
                                            },
                                            {
                                                name: "Reminders",
                                                icon: "bookmark",
                                                about: "Information on reminders and related actions (e.g., create, update, and delete reminders).",
                                            },
                                            {
                                                name: "Messages",
                                                icon: "chat",
                                                about: "Information about messages and related actions (e.g., compose and reply to messages).",
                                            },
                                            {
                                                name: "Music",
                                                icon: "music-note-beamed",
                                                about: "Songs, playlist, podcasts, and related actions (e.g., start, stop, play, pause, restart, etc).",
                                            },
                                            {
                                                name: "Timer",
                                                icon: "alarm",
                                                about: "Information about alarms and timers, and related actions (e.g., create, update, delete, snooze, etc).",
                                            },
                                            {
                                                name: "Mail",
                                                icon: "envelope",
                                                about: "Information on emails, mail boxes, and related actions (e.g. compose, reply and forward).",
                                            },
                                            {
                                                name: "Smart Home",
                                                icon: "house",
                                                about: "Information on smart home devices and related actions (e.g., control the a/c, the boiler, unlock the door, etc).",
                                            },
                                            {
                                                name: "Events & Tickets",
                                                icon: "ticket-perforated",
                                                about: "Information about public events, and purchasing tickets to some event types.",
                                            },
                                            {
                                                name: "Shopping",
                                                icon: "cart",
                                                about: "Information on products and related actions (e.g., check the availability of products, and purchasing products).",
                                            },
                                            {
                                                name: "Map & Places",
                                                icon: "pin-map",
                                                about: "Information about public and private locations (e.g., start date and time, addresses, proximity, etc).",
                                            },
                                        ];
                                    },
                                },
                                {
                                    key: "getIcon",
                                    value: function (e) {
                                        var t = this.getApps().find(function (
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
                                            i = t.disableClickApps,
                                            c = Boolean(s) && s.length > 0,
                                            r = this.getApps();
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
                                                                disableClickApps:
                                                                    i,
                                                                apps: r,
                                                            }),
                                                        }),
                                                        c &&
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
                                                                                        u.a,
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
                                                                                                            u
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
                v =
                    (n(62),
                    (function (e) {
                        Object(r.a)(n, e);
                        var t = Object(l.a)(n);
                        function n() {
                            return (
                                Object(s.a)(this, n), t.apply(this, arguments)
                            );
                        }
                        return (
                            Object(i.a)(n, [
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
                                                "You are given a mobile device with the following apps. You can ask your virtual assistant to perform ",
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
                                            n = e.disableClickApps,
                                            a = e.onClickNext,
                                            s = e.onClickBack,
                                            i = this.getTitle(),
                                            c = this.getDescription(),
                                            r = t ? this.getExamples() : null;
                                        return Object(h.jsx)("div", {
                                            className: "simple",
                                            children: Object(h.jsxs)("div", {
                                                className: "container",
                                                children: [
                                                    Object(h.jsx)(x, {
                                                        title: i,
                                                        description: c,
                                                        examples: r,
                                                        disableClickApps: n,
                                                        onClickNext: a,
                                                        onClickBack: s,
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
                                                                                            s,
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
                                                                                            a,
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
                O =
                    (n(63),
                    (function (e) {
                        Object(r.a)(n, e);
                        var t = Object(l.a)(n);
                        function n() {
                            return (
                                Object(s.a)(this, n), t.apply(this, arguments)
                            );
                        }
                        return (
                            Object(i.a)(n, [
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
                                            a = e.disableClickApps,
                                            s = e.onClickNext,
                                            i = e.onClickBack,
                                            c = this.getTitle(),
                                            r = this.getDescription(t),
                                            l = n ? this.getExamples() : [];
                                        return Object(h.jsx)("div", {
                                            className: "simple",
                                            children: Object(h.jsxs)("div", {
                                                className: "container",
                                                children: [
                                                    Object(h.jsx)(x, {
                                                        title: c,
                                                        description: r,
                                                        examples: l,
                                                        disableClickApps: a,
                                                        onClickNext: s,
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
                k = n(65),
                f = n(69),
                g = function (e) {
                    return Object(h.jsxs)(
                        k.a,
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
                                    Object(h.jsx)(k.a.Header, {
                                        children: Object(h.jsx)(k.a.Title, {
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
                                    Object(h.jsx)(k.a.Body, {
                                        children: Object(h.jsx)("div", {
                                            children: e.children,
                                        }),
                                    }),
                                    Object(h.jsx)(k.a.Footer, {
                                        children: Object(h.jsx)(f.a, {
                                            onClick: e.onHide,
                                            children: "Close",
                                        }),
                                    }),
                                ],
                            }
                        )
                    );
                },
                N = (function (e) {
                    Object(r.a)(n, e);
                    var t = Object(l.a)(n);
                    function n() {
                        return Object(s.a)(this, n), t.apply(this, arguments);
                    }
                    return (
                        Object(i.a)(n, [
                            {
                                key: "render",
                                value: function () {
                                    var e = this.props,
                                        t = e.show,
                                        n = e.onHide,
                                        a = e.children;
                                    return Object(h.jsx)("div", {
                                        className: "help",
                                        children: Object(h.jsx)(g, {
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
                C =
                    (n(64),
                    (function (e) {
                        Object(r.a)(n, e);
                        var t = Object(l.a)(n);
                        function n(e) {
                            var a;
                            Object(s.a)(this, n), (a = t.call(this, e));
                            var i = e.utterance,
                                r = e.context,
                                l = e.contexts;
                            return (
                                (a.state = {
                                    utterance: i,
                                    context: r || a.getRandomContext(l),
                                }),
                                (a.getApps = a.getApps.bind(Object(c.a)(a))),
                                (a.handleClickNext = a.handleClickNext.bind(
                                    Object(c.a)(a)
                                )),
                                (a.handleClickHelp = a.handleClickHelp.bind(
                                    Object(c.a)(a)
                                )),
                                (a.handleTextAreaChange =
                                    a.handleTextAreaChange.bind(
                                        Object(c.a)(a)
                                    )),
                                (a.handleSwitchContextClick =
                                    a.handleSwitchContextClick.bind(
                                        Object(c.a)(a)
                                    )),
                                a
                            );
                        }
                        return (
                            Object(i.a)(n, [
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
                                            i = t.onUtteranceChange,
                                            c = this.state.context,
                                            r = e.target.value,
                                            l =
                                                !s || r.length <= a
                                                    ? r
                                                    : this.state.utterance ||
                                                      "";
                                        this.setState({ utterance: l }),
                                            i && i(n, r, c);
                                    },
                                },
                                {
                                    key: "handleSwitchContextClick",
                                    value: function () {
                                        var e = this.props.contexts,
                                            t = this.getRandomContext(e);
                                        this.setState({ context: t });
                                    },
                                },
                                {
                                    key: "getApps",
                                    value: function () {
                                        return [
                                            {
                                                name: "Navigation",
                                                icon: "car-front",
                                                about: "Directions, traffic conditions, time to travel, estimate time of arrival, estimate time of departure, and distance.",
                                            },
                                            {
                                                name: "Weather",
                                                icon: "cloud-sun",
                                                about: "Information on weather, weather conditions, and temperature.",
                                            },
                                            {
                                                name: "Calendar",
                                                icon: "calendar-date",
                                                about: "Information on calendar meetings and availability, and related actions (e.g., create, update and delete a calendar entry).",
                                            },
                                            {
                                                name: "Reminders",
                                                icon: "bookmark",
                                                about: "Information on reminders and related actions (e.g., create, update, and delete reminders).",
                                            },
                                            {
                                                name: "Messages",
                                                icon: "chat",
                                                about: "Information about messages and related actions (e.g., compose and reply to messages).",
                                            },
                                            {
                                                name: "Music",
                                                icon: "music-note-beamed",
                                                about: "Songs, playlist, podcasts, and related actions (e.g., start, stop, play, pause, restart, etc).",
                                            },
                                            {
                                                name: "Timer",
                                                icon: "alarm",
                                                about: "Information about alarms and timers, and related actions (e.g., create, update, delete, snooze, etc).",
                                            },
                                            {
                                                name: "Mail",
                                                icon: "envelope",
                                                about: "Information on emails, mail boxes, and related actions (e.g. compose, reply and forward).",
                                            },
                                            {
                                                name: "Smart Home",
                                                icon: "house",
                                                about: "Information on smart home devices and related actions (e.g., control the a/c, the boiler, unlock the door, etc).",
                                            },
                                            {
                                                name: "Events & Tickets",
                                                icon: "ticket-perforated",
                                                about: "Information about public events, and purchasing tickets to some event types.",
                                            },
                                            {
                                                name: "Shopping",
                                                icon: "cart",
                                                about: "Information on products and related actions (e.g., check the availability of products, and purchasing products).",
                                            },
                                            {
                                                name: "Map & Places",
                                                icon: "pin-map",
                                                about: "Information about public and private locations (e.g., start date and time, addresses, proximity, etc).",
                                            },
                                        ];
                                    },
                                },
                                {
                                    key: "getRandomContext",
                                    value: function (e) {
                                        var t =
                                                e[
                                                    Math.floor(
                                                        Math.random() * e.length
                                                    )
                                                ],
                                            n = this.props.onContextChange;
                                        return n && n(t), t;
                                    },
                                },
                                {
                                    key: "isUtteranceValid",
                                    value: function () {
                                        var e = this.props,
                                            t = e.conjunctionWords,
                                            n = e.utteranceLimit,
                                            a = this.state.utterance,
                                            s = t.reduce(function (e, t) {
                                                return e.concat(
                                                    t.verification || [
                                                        t.display,
                                                    ]
                                                );
                                            }, []),
                                            i = Boolean(
                                                a && a.trim().length > 0
                                            ),
                                            c = Boolean(s && s.length > 0),
                                            r =
                                                i &&
                                                c &&
                                                s.filter(function (e) {
                                                    return (
                                                        -1 !==
                                                        a
                                                            .toLowerCase()
                                                            .indexOf(
                                                                e
                                                                    .trim()
                                                                    .toLowerCase()
                                                            )
                                                    );
                                                }).length > 0;
                                        return !i || a.split(" ").length <= 2
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
                                            : c && !r
                                            ? (this.setState({
                                                  valid: !1,
                                                  errorMessage: Object(h.jsxs)(
                                                      "span",
                                                      {
                                                          children: [
                                                              "Please use at least 1 of the following word: ",
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
                                            : (a.indexOf("?") >= 0 &&
                                                  a.indexOf("?") <
                                                      0.5 * a.length) ||
                                              a
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
                                                              "Please try to phrase the utterance as a ",
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
                                            : a.length > n
                                            ? (this.setState({
                                                  valid: !1,
                                                  errorMessage: Object(h.jsx)(
                                                      "span",
                                                      {
                                                          children:
                                                              "Your utterance is too long!",
                                                      }
                                                  ),
                                              }),
                                              !1)
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
                                            a = t.disableClickApps,
                                            s = t.onClickBack,
                                            i = this.state,
                                            c = i.utterance,
                                            r = i.valid,
                                            l = i.errorMessage,
                                            o = i.showHelp,
                                            d = this.getApps();
                                        return o
                                            ? Object(h.jsx)(N, {
                                                  show: o,
                                                  onHide: function () {
                                                      return e.setState({
                                                          showHelp: !1,
                                                      });
                                                  },
                                                  children: Object(h.jsx)(
                                                      b,
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
                                                                                                  disableClickApps:
                                                                                                      a,
                                                                                                  apps: d,
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
                                                                                          "col align-self-center",
                                                                                      children:
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
                                                                                                                                                                                              r
                                                                                                                                                                                              ? "is-valid"
                                                                                                                                                                                              : !1 ===
                                                                                                                                                                                                    r &&
                                                                                                                                                                                                    "is-invalid"
                                                                                                                                                                                      ),
                                                                                                                                                                                  rows: "5",
                                                                                                                                                                                  value: c,
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
                                                                                                                                                                                                          c ||
                                                                                                                                                                                                          ""
                                                                                                                                                                                                      )
                                                                                                                                                                                                          .length >
                                                                                                                                                                                                      n
                                                                                                                                                                                                          ? "text-danger"
                                                                                                                                                                                                          : "",
                                                                                                                                                                                                  children:
                                                                                                                                                                                                      (
                                                                                                                                                                                                          c ||
                                                                                                                                                                                                          ""
                                                                                                                                                                                                      )
                                                                                                                                                                                                          .length,
                                                                                                                                                                                              }
                                                                                                                                                                                          ),
                                                                                                                                                                                          " / ",
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
                                                                                                                                                                                      l,
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
                                                                                                                  s,
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
                y = (function (e) {
                    Object(r.a)(n, e);
                    var t = Object(l.a)(n);
                    function n(e) {
                        var a;
                        return (
                            Object(s.a)(this, n),
                            ((a = t.call(this, e)).state = { feedback: "" }),
                            (a.handleSubmit = a.handleSubmit.bind(
                                Object(c.a)(a)
                            )),
                            (a.handleClickBack = a.handleClickBack.bind(
                                Object(c.a)(a)
                            )),
                            (a.handleTextAreaChange =
                                a.handleTextAreaChange.bind(Object(c.a)(a))),
                            a
                        );
                    }
                    return (
                        Object(i.a)(n, [
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
                w = (n(48), 1),
                S = 2,
                I = 3,
                A = 4,
                B = 5,
                T = 6,
                H = (function (e) {
                    Object(r.a)(n, e);
                    var t = Object(l.a)(n);
                    function n(e) {
                        var a;
                        Object(s.a)(this, n), (a = t.call(this, e));
                        var i = e.intents,
                            r = e.constraints;
                        return (
                            (a.state = {
                                index: 0,
                                currentScreen: w,
                                intentsSelections: i && new Array(i.length),
                                constraintsSelections: r && new Array(r.length),
                                workerResponses: [],
                            }),
                            (a.handleClickBack = a.handleClickBack.bind(
                                Object(c.a)(a)
                            )),
                            (a.handleClickNext = a.handleClickNext.bind(
                                Object(c.a)(a)
                            )),
                            (a.handleClickHelp = a.handleClickHelp.bind(
                                Object(c.a)(a)
                            )),
                            (a.handleFeedbackChange =
                                a.handleFeedbackChange.bind(Object(c.a)(a))),
                            (a.handleUtteranceChange =
                                a.handleUtteranceChange.bind(Object(c.a)(a))),
                            (a.handleSelectIntent = a.handleSelectIntent.bind(
                                Object(c.a)(a)
                            )),
                            (a.handleSelectConstraint =
                                a.handleSelectConstraint.bind(Object(c.a)(a))),
                            (a.handleSelection = a.handleSelection.bind(
                                Object(c.a)(a)
                            )),
                            a
                        );
                    }
                    return (
                        Object(i.a)(n, [
                            {
                                key: "submitToMTurk",
                                value: function () {
                                    var e = this.props,
                                        t = e.intents,
                                        n = e.constraints,
                                        a = this.state,
                                        s = a.workerResponses,
                                        i = a.feedback,
                                        c = [],
                                        r = function (e) {
                                            var a = s[e],
                                                i = a.utterance,
                                                r = a.context,
                                                l = a.selectedIntents,
                                                o = a.selectedConstraints,
                                                d = a.intentsSelections,
                                                h = a.constraintsSelections,
                                                m =
                                                    l &&
                                                    l
                                                        .map(function (e) {
                                                            return t[e];
                                                        })
                                                        .join(" | "),
                                                b =
                                                    o &&
                                                    o
                                                        .map(function (e) {
                                                            return n[e];
                                                        })
                                                        .join(" | "),
                                                p =
                                                    l &&
                                                    l
                                                        .map(function (e, t) {
                                                            return i.substring(
                                                                d[t][0],
                                                                d[t][1]
                                                            );
                                                        })
                                                        .join(" | "),
                                                u =
                                                    o &&
                                                    o
                                                        .map(function (e, t) {
                                                            return i.substring(
                                                                h[t][0],
                                                                h[t][1]
                                                            );
                                                        })
                                                        .join(" | "),
                                                j = {
                                                    utterance: i,
                                                    context: r,
                                                    intents: m,
                                                    constraints: b,
                                                    intentsAnnotations: p,
                                                    constraintsAnnotations: u,
                                                };
                                            c.push(j);
                                        };
                                    for (var l in s) r(l);
                                    var o = i;
                                    (document.querySelector(
                                        "crowd-form"
                                    ).onsubmit = function () {
                                        document.getElementById(
                                            "worker-responses"
                                        ) &&
                                            ((document.getElementById(
                                                "worker-responses"
                                            ).value = JSON.stringify(c)),
                                            (document.getElementById(
                                                "worker-feedback"
                                            ).value = o));
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
                                    if (e === T) this.submitToMTurk(this.state);
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
                                    if (e !== w) {
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
                                    var i = this.state.workerResponses;
                                    (i[e] = Object(a.a)(Object(a.a)({}, i[e]), {
                                        intentsSelections: t,
                                        constraintsSelections: n,
                                        currentSelectionIndex: s,
                                    })),
                                        this.setState({ workerResponses: i });
                                },
                            },
                            {
                                key: "getDisplayedScreen",
                                value: function () {
                                    var e = this.props,
                                        t = e.maxUtterances,
                                        n = e.contexts,
                                        a = e.maxLength,
                                        s = e.maxLengthPerIntent,
                                        i = e.minIntents,
                                        c = e.minConstraints,
                                        r = e.intents,
                                        l = e.constraints,
                                        o = e.conjunctionWords,
                                        d = e.minConjunctionWords,
                                        b = e.testVariation,
                                        u = this.state,
                                        j = u.currentScreen,
                                        x = u.index,
                                        k = u.workerResponses,
                                        f = k.length > x ? k[x] : {},
                                        g = f.utterance,
                                        N = f.context,
                                        H = a || s * r.length || 250,
                                        R = "B" === b || "D" === b,
                                        M = "control" === b || "C" === b,
                                        q =
                                            "control" === b ||
                                            "A" === b ||
                                            "B" === b;
                                    return j === w
                                        ? Object(h.jsx)(m, {
                                              onClickExample:
                                                  this.handleClickHelp,
                                              onClickSkip: this.handleClickNext,
                                          })
                                        : j === S
                                        ? Object(h.jsx)(v, {
                                              showExamples: M,
                                              disableClickApps: q,
                                              onClickBack: this.handleClickBack,
                                              onClickNext: this.handleClickNext,
                                          })
                                        : j === I
                                        ? Object(h.jsx)(O, {
                                              minimalDescription: R,
                                              showExamples: M,
                                              disableClickApps: q,
                                              onClickBack: this.handleClickBack,
                                              onClickNext: this.handleClickNext,
                                          })
                                        : j === A
                                        ? Object(h.jsx)(p, {
                                              onClickBack: this.handleClickBack,
                                              onClickNext: this.handleClickNext,
                                          })
                                        : j === B
                                        ? Object(h.jsx)(C, {
                                              index: x,
                                              maxUtterances: t,
                                              utterance: g,
                                              utteranceLimit: H,
                                              minIntents: i,
                                              minConstraints: c,
                                              intents: r,
                                              constraints: l,
                                              disableClickApps: q,
                                              conjunctionWords: o,
                                              minConjunctionWords: d,
                                              contexts: n,
                                              context: N,
                                              onUtteranceChange:
                                                  this.handleUtteranceChange,
                                              onClickBack: this.handleClickBack,
                                              onClickHelp: this.handleClickHelp,
                                              onClickNext: this.handleClickNext,
                                          })
                                        : j === T
                                        ? Object(h.jsx)(y, {
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
                R = function (e) {
                    var t =
                            arguments.length > 1 && void 0 !== arguments[1]
                                ? arguments[1]
                                : "root",
                        n = document.getElementById(t).getAttribute(e);
                    return n && !n.startsWith("${") ? n : null;
                },
                M = R("data-id"),
                q = R("data-max-utterances")
                    ? parseInt(R("data-max-utterances"))
                    : 1,
                D = R("data-context"),
                E = R("data-contexts")
                    ? R("data-contexts")
                          .split("|")
                          .map(function (e) {
                              return e.trim();
                          })
                    : [],
                W = R("data-min-intents") && parseInt(R("data-min-intents")),
                U =
                    R("data-min-constraints") &&
                    parseInt(R("data-min-constraints")),
                L = R("data-conjunction-words")
                    ? R("data-conjunction-words")
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
                P =
                    R("min-conjunction-words") &&
                    parseInt(R("min-conjunction-words")),
                F = R("data-quantifiers")
                    ? R("data-quantifiers")
                          .split("|")
                          .map(function (e) {
                              return e.trim();
                          })
                    : [],
                V = R("data-max-length") && parseInt(R("data-max-length")),
                Y =
                    R("data-max-length-per-intent") &&
                    parseInt(R("data-max-length-per-intent")),
                G = [
                    { name: "General knowledge", icon: "google" },
                    { name: "Weather", icon: "cloud-sun" },
                    { name: "Reminders", icon: "bookmark" },
                    { name: "Calendar", icon: "calendar-date" },
                    { name: "Events & Tickets", icon: "ticket-perforated" },
                    { name: "Mail", icon: "envelope" },
                    { name: "Messages", icon: "chat" },
                    { name: "Map & Navigation", icon: "truck" },
                    { name: "Shopping", icon: "cart" },
                    { name: "Music & Podcasts", icon: "music-note-beamed" },
                    { name: "Smart Home", icon: "house" },
                    { name: "Health & Nutrition", icon: "heart-pulse" },
                ],
                J = [],
                z = R("data-test-variation");
            t.default = function () {
                return Object(h.jsx)("div", {
                    className: "utterances",
                    children: Object(h.jsx)(H, {
                        id: M,
                        context: D,
                        contexts: E,
                        maxUtterances: q,
                        intents: G,
                        minIntents: W,
                        constraints: J,
                        minConstraints: U,
                        conjunctionWords: L,
                        minConjunctionWords: P,
                        linkWordIdx: null,
                        quantifiers: F,
                        quantifierIdx: null,
                        maxLength: V,
                        maxLengthPerIntent: Y,
                        testVariation: z,
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
//# sourceMappingURL=3.1b8d8ce8.chunk.js.map
