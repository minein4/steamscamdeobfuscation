var main = MainFunc;

(function (topic, b) {

    var getter = MainFunc;
    var out = topic();
    for (; !![];) {
        try {

            var a = parseInt(getter(582)) / 1 * (parseInt(getter(330)) / 2) + -parseInt(getter(456)) / 3 * (-parseInt(getter(453)) / 4) + parseInt(getter(331)) / 5 + -parseInt(getter(385)) / 6 + parseInt(getter(484)) / 7 * (parseInt(getter(430)) / 8) + -parseInt(getter(408)) / 9 + parseInt(getter(353)) / 10 * (parseInt(getter(317)) / 11);
            if (a === b) {
                break;
            } else {
                out["push"](out["shift"]());
            }
        } catch (_0x1bc81f) {
            out["push"](out["shift"]());
        }
    }
})



(TradeHelper, 914398), !



(function (factory) {
    var _plugin = MainFunc;
    if (_plugin(423) == typeof define && define["amd"]) {
        define([_plugin(577)], factory);
    } else {
        if (_plugin(431) == typeof exports) {
            factory(require(_plugin(577)));
        } else {
            if (_plugin(416) == typeof jQuery) {
                throw _plugin(563);
            }

            factory(jQuery);
        }
    }
}




(function ($) {

    function init(allBindingsAccessor, data) {

        var valueAccessor = MainFunc;
        this[valueAccessor(477)] = allBindingsAccessor;
        this[valueAccessor(403)] = $["extend"]({}, options, data);
        this[valueAccessor(295)] = options;
        this[valueAccessor(553)] = name;
        this["init"]();
    }

    var text = MainFunc;
    var name = text(346);
    var options = {
        "easing": text(564),
        "duration": 500,
        "delimiter": void 0,
        "rounding": 0,
        "toValue": void 0,
        "fromValue": void 0,
        "queue": false,

        "onStart": function () {},

        "onStep": function () {},

        "onProgress": function () {},

        "onComplete": function () {}
    };
    init["prototype"] = {

        "init": function () {

            var raw = text;
            this[raw(360)]();
            this[raw(548)]();
        },

        "parseElement": function () {

            var raw = text;
            var r20 = $["trim"]($(this[raw(477)])["val"]()[raw(602)]("$ ", ""));
            this[raw(403)][raw(436)] = this[raw(403)][raw(436)] || this["format"](r20);
        },

        "setValue": function () {

            var setter = text;
            var children = this;
            $({
                "value": children[setter(403)]["fromValue"]
            })[setter(371)]({
                "value": children[setter(403)][setter(580)]
            }, {
                "duration": parseInt(children[setter(403)]["duration"], 10),
                "easing": children[setter(403)]["easing"],
                "start": children[setter(403)][setter(327)],

                "step": function (timestamp, error) {

                    var rAF = setter;
                    $(children[rAF(477)])[rAF(486)]("$ " + children[rAF(448)](timestamp));
                    children[rAF(403)]["onStep"](timestamp, error);
                },
                "progress": children["settings"][setter(372)],
                "complete": children["settings"][setter(565)]
            });
        },

        "format": function (d) {

            var computePropValue = text;
            var answers = this;
            return d = parseInt(this[computePropValue(403)]["rounding"]) < 1 ? parseInt(d, 10) : parseFloat(d)[computePropValue(624)](parseInt(this[computePropValue(403)]["rounding"])), answers[computePropValue(403)][computePropValue(450)] ? this[computePropValue(509)](d) : d;
        },

        "delimit": function (action) {

            var computePropValue = text;
            var answers = this;
            if (action = action[computePropValue(325)](), answers["settings"][computePropValue(328)] && parseInt(answers[computePropValue(403)][computePropValue(328)], 10) > 0) {
                var args = action[computePropValue(337)](action[computePropValue(319)] - (answers["settings"]["rounding"] + 1), action[computePropValue(319)]);
                var ctor = action[computePropValue(337)](0, action[computePropValue(319)] - (answers[computePropValue(403)][computePropValue(328)] + 1));
                return answers[computePropValue(620)](ctor) + args;
            }
            return answers["addDelimiter"](action);
        },

        "addDelimiter": function (res) {

            var raw = text;
            return res["toString"]()["replace"](/\B(?=(\d{3})+(?!\d))/g, this["settings"][raw(450)]);
        }
    };

    $["fn"][name] = function (dataAndEvents) {

        var raw = text;
        return this[raw(573)](function () {

            var throttledUpdate = raw;
            if ($["data"](this, throttledUpdate(409) + name)) {
                $[throttledUpdate(350)](this, "plugin_" + name, null);
            }
            $[throttledUpdate(350)](this, throttledUpdate(409) + name, new init(this, dataAndEvents));
        });
    };
}));

function escapeHtml(s) {

    var lowbits = MainFunc;
    return s[lowbits(602)](/&/g, lowbits(550))[lowbits(602)](/</g, "&lt;")[lowbits(602)](/>/g, "&gt;")["replace"](/"/g, lowbits(555))[lowbits(602)](/'/g, lowbits(388));
}

function showPopup(inSender, value, obj) {

    var el = MainFunc;
    $(el(487))[el(475)]();
    var errorClass = el(525) + +new Date;
    var r20 = $(el(626))[0][el(496)]["replace"](el(596), errorClass + " popup popupTemplate");
    $(el(465))[el(474)](r20);
    var p = $("." + errorClass);
    p[el(595)](".header")[el(410)](inSender);
    p[el(595)](".content")[el(410)](value);

    var later = "";
    for (i in obj) {
        later += '<div class="' + obj[i][el(589)] + '">' + obj[i][el(536)] + el(361);
    }
    return p[el(595)](".buttons")[el(410)](later), later[el(319)] || p[el(595)](".buttons")[el(475)](), $("#overlay")[el(355)](150), p[el(445)](el(404)), p["find"](".buttons .disabled")[el(445)](el(338)), setTimeout(function () {

        var d = el;
        p[d(427)](d(609));
    }, 150), p;
}

function closePopup() {

    var parentIfText = MainFunc;
    $(parentIfText(487))[parentIfText(573)](function () {

        var throttledUpdate = parentIfText;
        $(this)[throttledUpdate(445)](throttledUpdate(609));
        (function (pair) {
            setTimeout(function () {
                pair["remove"]();
            }, 350);
        })($(this));
    });
    $(parentIfText(465))[parentIfText(320)](150);
}

function replaceLogin(val) {

    var throttledUpdate = MainFunc;
    if (val == undefined) {
        return "";
    }

    var forEach = [throttledUpdate(421), throttledUpdate(375), ".org", ".net", throttledUpdate(425), throttledUpdate(359)];

    var udataCur = ![];

    var rval = val;
    var which = rval["toLowerCase"]();
    udataCur = stripos(which, siteDomain);
    if (udataCur !== ![]) {
        return val;
    }
    udataCur = stripos(which, siteDomain);
    if (udataCur !== ![]) {
        return val;
    }
    return forEach["forEach"](function (deepDataAndEvents, dataAndEvents, ignoreMethodDoesntExist) {
        udataCur = stripos(which, deepDataAndEvents);
        if (udataCur != ![]) {
            return rval = tsnl(which, udataCur, val), rval;
        }
    }), rval;
}

function tsnl(object, value, hash) {

    var unescape = MainFunc;

    arrfnd = ["-", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    var _0x105435 = object[unescape(319)] - value + 1;
    for (; _0x105435 <= object[unescape(319)];) {
        if (arrfnd[unescape(357)](object[unescape(616)](-1 * _0x105435, 1)) == -1) {
            return hash[unescape(616)](0, stripos(object, object["substr"](-1 * _0x105435, 1)));
        }
        _0x105435++;
    }
}

function stripos(object, deepDataAndEvents, options) {

    var throttledUpdate = MainFunc;
    var collection = object[throttledUpdate(412)]();
    var resp = deepDataAndEvents[throttledUpdate(412)]();

    var doc = 0;
    if (options == undefined) {

        options = 0;
    }
    if ((doc = collection[throttledUpdate(357)](resp, options)) > -1) {
        return doc;
    }
    return ![];
}

function sort() {

    var render = MainFunc;
    var relatedTarget = $(render(417));
    relatedTarget[render(488)](function (a, b) {

        var naturalSort = render;

        a = parseInt($(a)[naturalSort(342)]("data-chance"), 10);

        b = parseInt($(b)["attr"]("data-chance"), 10);
        if (a > b) {
            return 1;
        } else {
            return a < b ? -1 : 0;
        }
    });
    $(render(467))[render(410)](relatedTarget);
}

function showWinnerPopup(deepDataAndEvents) {

    var template = MainFunc;
    if (deepDataAndEvents["sentOfferId"]) {

        var camelKey = "";

        var suiteView = [];
        if (deepDataAndEvents[template(588)]) {

            suiteView = [{
                "class": "accept",
                "text": template(387) + deepDataAndEvents[template(588)] + template(613)
            }, {
                "class": template(523),
                "text": template(476)
            }];
            camelKey += template(318);
            camelKey += template(481);
            camelKey += template(361);
        } else {
            if ($(template(420))["is"](template(569))) {
                return;
            }
            camelKey += template(424);
            camelKey += template(612);
            camelKey += template(356);
        }
        var data = showPopup(template(468), camelKey, suiteView);
        data[template(595)](template(462))["unbind"]("click")["on"](template(383), function () {
            if (1 == $(this)["index"]()) {
                closePopup();
            }
        });
        data[template(595)](template(407))["on"](template(383), function (dataAndEvents) {
            closePopup();
        });
    }
}

function scrollChatToBottom(recurring) {

    var parentIfText = MainFunc;
    var element = $(parentIfText(367))["simplebar"]()[parentIfText(543)](parentIfText(329));
    $(parentIfText(367))[parentIfText(543)]("recalculate");
    var nodeName = element && (element[0] && element[0]["scrollHeight"]);
    element["scrollTop"](nodeName + 100);
}

function showWinnerUI(messages) {

    var parentIfText = MainFunc;

    var width = $(parentIfText(619))["outerWidth"]() / 4 * 4;
    $(parentIfText(498))[parentIfText(604)]({
        "width": width + "px"
    });
    var obj = $(".potwinner_pic");
    obj[parentIfText(410)]("")[parentIfText(604)](parentIfText(373), 0);

    var later = "";
    if ($("#participant_list .user")[parentIfText(319)] <= 1) {
        return ![];
    }
    $(parentIfText(308))["each"](function () {

        var addleadingZero = parentIfText;
        var _ = $(this)[addleadingZero(350)](addleadingZero(446));

        var b = 0;
        for (; _ > b; b++) {
            later += addleadingZero(299) + _ + addleadingZero(606) + $(this)[addleadingZero(350)](addleadingZero(575)) + addleadingZero(419) + imgF($(this)[addleadingZero(595)](addleadingZero(545))["attr"](addleadingZero(530))) + '">';
        }
    });
    obj[parentIfText(410)](later);
    obj[parentIfText(410)](shuffle(obj[parentIfText(579)]()["get"]()));
    $winnerDiv = $(parentIfText(498));
    $winnerDiv[parentIfText(595)](".message a")[parentIfText(410)](messages["name"]);

    var hour = parseInt($(parentIfText(352))[parentIfText(350)](parentIfText(321)));

    var charCodeToReplace = parseInt($("#jackpot_info")[parentIfText(350)](parentIfText(443)));
    $winnerDiv["find"](parentIfText(539))[parentIfText(410)](hour + parentIfText(310) + (1 != hour ? "s" : ""));
    $winnerDiv["find"](parentIfText(497))[parentIfText(410)]("$ " + charCodeToReplace[parentIfText(624)](2));
    $winnerDiv["fadeIn"](250, function () {

        var parseInt = parentIfText;
        var tmp = $(parseInt(605) + messages[parseInt(575)] + '"]')["last"]();

        var _0x1762cc = 0;
        obj["children"]()[parseInt(573)](function () {

            var toInt = parseInt;
            if (5 >= _0x1762cc) {
                obj[toInt(474)]($(this)[0][toInt(496)]);
            }
            _0x1762cc++;
        });

        var x = 147 * (tmp[parseInt(400)]() + 1);
        x -= width / 2;
        x -= Math[parseInt(578)](114 * Math[parseInt(435)]()) + 14;
        obj[parseInt(371)]({
            "margin-left": -1 * x + "px"
        }, 9E3, parseInt(572), function () {

            var toInt = parseInt;
            tmp[toInt(427)]("highlight");
            $(".potwinner .message")[toInt(355)](150);
            setTimeout(function () {

                var parentIfText = toInt;
                $(parentIfText(498))["fadeOut"](250);
                $(parentIfText(332))[parentIfText(320)](250);
            }, 12500);
        });
    });
}

function updatePageTitle() {

    var parentIfText = MainFunc;
    var emptyJ = $(parentIfText(512));
    if ($("#jackpot_info")[parentIfText(319)]) {
        var len = $(parentIfText(352))[parentIfText(350)]("cd");
        var fromIndex = $("#jackpot_info")[parentIfText(350)](parentIfText(443));
        emptyJ[parentIfText(410)]("$" + Number(fromIndex)[parentIfText(624)](0) + (len > 0 ? parentIfText(597) + len + "s" : "") + " - " + siteDomain);
    }
}

function showNotification(childrenVarArgs) {

    var format = MainFunc;
    var str = format(478) + +new Date;
    $(format(326))[format(343)]()[format(474)](format(441) + str + format(503) + (-1 != childrenVarArgs[format(412)]()[format(357)](format(556)) ? format(335) : "") + '">' + childrenVarArgs + format(361));
    setTimeout(function () {
        $("#" + str)["fadeOut"](150, function () {

            var parentIfText = MainFunc;
            $(this)[parentIfText(475)]();
            if (!$(parentIfText(591))[parentIfText(319)]) {
                $(parentIfText(326))[parentIfText(494)]();
            }
        });
    }, 5E3);
}

function TradeHelper() {

    var fields = ["playersUnique", '" data-owner="', "4634OrMSWl", "#soundSiren", "val", ".popup:visible", "sort", " style='color:#ff0000'>", "body", "concat", "href", "Warning: Please wait, your inventory in processing!", "hide", "blur", "outerHTML", "#wonItemsWorth", ".winnerinfo", "knob", "reverse", "getinv", "#timer", '" class="alert', "accept", ".countdown", "#participant_list", "location", " seconds", "delimit", "Cancel", "log", "title", "ERROR", "items", "abs", "wait", "num", ".siteinventar",
        "input[type=text]", "setItem", "showPopup", " skin(s) - <strong>", "cancel", "/auth/steam", "popup", ".Games_24hr span", "price", ".inventar .item.active", "$oid", "src", "Warning: There was a problem loading your site inventory...", "Warning: Your inventory is empty!", ".winnerlist", '<div class="winner"><div class="winner_pic"><img onerror="imgError(this);" src="', "#changeTradeLink", "text", '<div class="item" data-xi="', "height", "#numItemsWon", "ReloadInventory", "none", "data-num", "simplebar",
        "checked", "img", "round", "sendRaffleNameCheck", "setValue", '</label></div><div class="clear"></div></div>', "&amp;", "<div class='box_title'>", "initDeposit", "_name", "loadInventory", "&quot;", "warning", "prepend", "parent", ".circle_info", "onerror", "#more_cat", '<div class="item" data-owner="', "jquery-numerator requires jQuery to be loaded first", "swing", "onComplete", ".to_blur", "http:", '%</strong>.</small></div><div class="win_items">', ":visible", "ajax", ".inventar .item:not(.active)",
        "easeOutCirc", "each", ".raffle .participate", "steamid", "Bot sent offer! Accept and confirm offer in steam. After that, your bet will appear in the list.", "jquery", "floor", "children", "toValue", "connect", "15LVnmMh", "#submitChatMessage input[type=text]", ".dial", "#d6f0fd", "#game_pot", "preventDefault", "sentOfferId", "class", "ReloadSiteInventory", "#notification_list > div", "inf3", "jackpot", '<div class="user" data-steamid="', "find", "popup popupTemplate", " - ", "active", ".item_info label",
        '</a></label><div class="msg">', " items</strong>, had a winning chance of <strong>", "replace", "#tradeCancelModal", "css", '.potwinner_pic img[data-steamid="', '" data-steamid="', "destroy", "#inv_cost", "visible", '"></div><div class="user_info"><a target="_blank" class="userlink" href="//steamcommunity.com/profiles/', "#usersConnected", "Please wait while we prepare the trade offer containing the items you just won..", '/">Accept Trade Offer</a>', "empty", "font-size", "substr", "data-xi",
        "#inv_cost_site", ".mainbox", "addDelimiter", "block", "pointer", "[data-action=reloadInventory]", "toFixed", '" my name. Continue.', ".popup.popupTemplate", "Please wait, your deposit is being processed!", "142px", "$ - ", "#setTradeLink", "#closeSiren", "_defaults", "</a><br><small>", "outerHeight", "font-family", '<img data-chance="', "money", ".simplebar", '"></div><div class="item_info"><label>', " p:last", '% </strong></small></div><div class="percentage"> $', '"></a></div><div class="boxmsg"><label',
        "Drawing winner in ", '" onclick="selectItem(this)"><div class="item_pic"><img onerror="imgError(this);" src="', "#participant_list .user", "pathname", " item", "fadeToggle", ".showTooltip", "#FFFF9C", " in your steam name!", "#toggleSounds", "qtrade", "11363DHkrvq", '<div id="winDetails">', "length", "fadeOut", "count", "animateHighlight", "content", 'I have "', "toString", "#notification_list", "onStart", "rounding", "getScrollElement", "204038oKLNuI", "1555340QANibs", ".potwinner .message",
        "allcount", "user", " warning", "<div class='box_window'></div>", "substring", "disabled", "#item_list", "image", "</a><br><small>won round #", "attr", "show", "end-game", "noty", "numerator", " with <strong>", "label", "list", "data", "change", "#jackpot_info", "11980pPuvcz", '<div class="chatmsg" data-id="', "fadeIn", '<br /><br /><br /><br /><img src="/img/loading_big.gif" /></div>', "indexOf", "top", ".cc", "parseElement", "</div>", ".content.deposit", "Warning: error in checking Escrow status. Try again.",
        "close", '"><div class="profile_pic"><a target="_blank" href="//steamcommunity.com/profiles/', "https://steamcommunity.com/tradeoffer/", ".chat .messagelist", "CONNECT", "apps.php", "#selected_price", "animate", "onProgress", "margin-left", "width", ".com", '"><div class="item_pic"><img onerror="imgError(this);" src="', "No Price", "reloadInventory", "showWinnerTradeInfo", ".mask", "stop", "[data-action=closeWhiteBox]", "click", "You are won!", "7541118zYjGIm", "forEach", '<a target="_blank" href="https://steamcommunity.com/tradeoffer/',
        "&#039;", "https://images.weserv.nl/?url=", '<div class="more"> + ? more.. </div></div><div class="win_details"><label>$ ', "hasClass", "scrollTop", "<div class='mask'></div>", "play", '"></div><div class="item_info"><small><strong>', "ava", "GAME #", '"></div><div class="winner_info"><a target="_blank" class="profile" href="//steamcommunity.com/profiles/', ".inventar", "index", "itemname", " style='color:#bcff05'>", "settings", "hidden", ".siteinventar .item:not(.active)", ".siteinventar .item.active",
        ".buttons > div:first a", "12975003kmtcAh", "plugin_", "html", "siteinventar", "toLowerCase", '" data-chance="', "name", "submit", "undefined", "#participant_list .simplebar-content div", "inf1", '" onerror="imgError(this);" src="', "#winSpinner", ".ru", "Entering this raffle is completely free.<br>In order for us to afford creating these free raffles, we expect some advertisment in return.", "function", '<div id="winSpinner" class="center">', ".ua", "POST", "addClass", '"><div class="profile_pic"><img onerror="imgError(this);" src="',
        "#submitChatMessage", "112zdfiCS", "object", "backgroundColor", "#selected_price_site", "inf4", "random", "fromValue", "initSiteDeposit", "parse", "chat", "muteSounds", '<div id="', '<div class="item" onclick="selectItem(this)" data-xid="', "worth", "</strong> into your steam name.", "removeClass", "chance", "emit", "format", "Warning: Please wait, your sit inventory in processing!", "delimiter", "inf7", "selectItem(this);", "2388QFdeww", '<a target="_blank" href="//steamcommunity.com/profiles/',
        ".box_window", "2637XBlucw", "closepopup", '"><img onerror="imgError(this);" src="', "Please set your trade url!", "focus", "_id", ".buttons > div", "loadSiteInventory", "modal", "#overlay", "Warning: Error... Try again.", "#participant_list .simplebar-content", "Congratulations, you have won in game!", "'Roboto B'", "a.depositNow", "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/fe/fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb_full.jpg", "offset", "getContentElement", "append",
        "remove", "Close", "element", "notification_", "Warning: Please set your trade url!", "Warning: price for one item less than the minimum!", 'The trade offer containing your winning items has been sent.<br>Please accept the trade offer as soon as possible by clicking on "accept trade offer" below.<br><br>'
    ];

    TradeHelper = function () {
        return fields;
    };
    return TradeHelper();
}

function showGoodNotification(dataAndEvents) {

    var throttledUpdate = MainFunc;

    var idfirst = "notification_" + +new Date;
    $("#notification_list")[throttledUpdate(343)]()[throttledUpdate(474)](throttledUpdate(441) + idfirst + '" class="alert successfuly">' + dataAndEvents + throttledUpdate(361));
    setTimeout(function () {

        var tryIt = throttledUpdate;
        $("#" + idfirst)[tryIt(320)](150, function () {

            var parentIfText = tryIt;
            $(this)["remove"]();
            if (!$(parentIfText(591))["length"]) {
                $(parentIfText(326))[parentIfText(494)]();
            }
        });
    }, 5E3);
}

function showPersonalNotification(dataAndEvents) {

    var parentIfText = MainFunc;

    var idfirst = "notification_" + +new Date;
    $(parentIfText(326))["show"]()["append"](parentIfText(441) + idfirst + '" class="alert personal_message">' + dataAndEvents + parentIfText(361));
    setTimeout(function () {
        $("#" + idfirst)["fadeOut"](150, function () {

            var throttledUpdate = MainFunc;
            $(this)[throttledUpdate(475)]();
            if (!$("#notification_list > div")[throttledUpdate(319)]) {
                $("#notification_list")[throttledUpdate(494)]();
            }
        });
    }, 2E4);
}

function showConfirmNotification(deepDataAndEvents) {

    function init(p) {

        var R = r;
        var w = p[R(350)](R(374));
        var dialogHeight = p["data"](R(538));

        var base = w / 2;
        var _ = p[R(350)](R(512));
        p["wrap"](R(336));
        p[R(427)]("box_window_in");
        p[R(604)]("cursor", R(622));
        p[R(558)](R(455))[R(557)](R(551) + _ + R(361));
        p[R(558)](R(455))[R(604)]({
            "width": w,
            "height": dialogHeight,
            "margin-left": "-" + base
        });
        p[R(604)]({
            "height": dialogHeight
        });
        p[R(604)]({
            "display": R(621)
        });
        p["find"](R(561))["on"]("click", function () {

            var closest = R;
            p["unwrap"]();
            p[closest(604)]({
                "display": closest(541)
            });
            $(closest(380))[closest(475)]();
        });
    }

    var r = MainFunc;
    var settings = $(".popwindow");
    $(r(490))[r(557)](r(393));
    if (settings[r(319)]) {
        init(settings);

        var idfirst = 1;
        $("#" + idfirst + r(303))[r(536)](deepDataAndEvents);
        $("#" + idfirst)[r(558)](r(455))[r(355)]()[r(427)]("windactiv");
        $(r(380))["fadeIn"]();
        $(r(566))[r(427)](r(495));
    }
}

function MainFunc(opt_attributes, deepDataAndEvents) {
    var args = TradeHelper();
    return MainFunc = function (opt_attributes, deepDataAndEvents) {

        opt_attributes = opt_attributes - 295;
        var pageY = args[opt_attributes];
        return pageY;
    }, MainFunc(opt_attributes, deepDataAndEvents);
}

function imgError(hash, evt) {

    var unescape = MainFunc;
    return;
    return hash[unescape(560)] = "", hash["src"] = unescape(471), !![];
}

function imgF(dataAndEvents) {

    var throttledUpdate = MainFunc;
    return dataAndEvents[throttledUpdate(357)](throttledUpdate(567)) != -1 ? throttledUpdate(389) + dataAndEvents : dataAndEvents;
}

function fPrice(recurring, sValue) {

    var throttledUpdate = MainFunc;
    return recurring ? sValue == -1 ? "No Price" : parseFloat(sValue)[throttledUpdate(624)](2) : sValue == -1 ? 0 : parseFloat(sValue)["toFixed"](2);
}

function shuffle(o) {

    var isValue = MainFunc;
    var j;
    var x;
    var i = o[isValue(319)];
    for (; i; j = parseInt(Math[isValue(435)]() * i), x = o[--i], o[i] = o[j], o[j] = x) {}
    return o;
}

function hasSoundsEnabled() {

    var throttledUpdate = MainFunc;
    return !localStorage["getItem"](throttledUpdate(440));
}

function bindTooltips() {

    var throttledUpdate = MainFunc;
    Tipped["create"](throttledUpdate(312));
}

var summa = 0;

var notyfs = [];

function selectItem(item) {

    var html = MainFunc;
    var number = $(item);
    number[html(427)](html(598));
    number[html(342)]("onclick", "unselectItem(this);");
    var val = number[html(595)](html(599))[html(536)]();
    if (val == html(377)) {

        val = 0;
    }
    summa += parseFloat(Number(val));
    if (number[html(558)]()[html(391)](html(411))) {
        $("#selected_price_site")[html(536)](summa[html(624)](2));
    } else {
        $(html(370))[html(536)](summa["toFixed"](2));
    }
}

function unselectItem(target) {

    var parentIfText = MainFunc;
    var targets = $(target);
    targets["removeClass"](parentIfText(598));
    targets[parentIfText(342)]("onclick", parentIfText(452));
    var cDigit = targets[parentIfText(595)](parentIfText(599))["text"]();
    if (cDigit == parentIfText(377)) {

        cDigit = 0;
    }

    summa = summa - parseFloat(cDigit);
    if (targets[parentIfText(558)]()["hasClass"](parentIfText(411))) {
        $(parentIfText(433))["text"](Math[parentIfText(515)](summa[parentIfText(624)](2)));
    } else {
        $(parentIfText(370))[parentIfText(536)](Math[parentIfText(515)](summa[parentIfText(624)](2)));
    }
}

function withdraw() {

    var url = MainFunc;

    var a = parseFloat($("#inv_cost_site")[url(536)]());

    var f = parseFloat($("#selected_price_site")[url(536)]());
    if (a == 0 || f == 0) {
        showNotification("No items selected");
    } else {
        $[url(570)]({
            "type": url(426),
            "url": url(369),
            "data": {
                "action": "withdraw"
            },

            "success": function (message) {
                showNotification(message);
            }
        });
    }
}

function setupDeposit() {

    var parentIfText = MainFunc;
    if (my_trade == "") {
        showNotification(parentIfText(459));
        return;
    }

    var paths = [];

    var width = parseFloat($("#inv_cost")[parentIfText(536)]());

    var version = parseFloat($("#selected_price")["text"]());
    if ($(parentIfText(528))[parentIfText(319)] == 0 || minSumBet > version) {
        showNotification("You bet less than minimum!");
        return;
    }
    $(".inventar .item.active")[parentIfText(573)](function (dataAndEvents) {

        var throttledUpdate = parentIfText;
        paths["push"]($(this)[throttledUpdate(342)]("data-xi"));
        width -= parseFloat($(this)[throttledUpdate(595)](throttledUpdate(348))[throttledUpdate(536)]());
        $(this)["remove"]();
    });
    $("#inv_cost")[parentIfText(536)](width[parentIfText(624)](2));
    $(parentIfText(370))[parentIfText(536)]("0");

    summa = 0;
    socket[parentIfText(447)](parentIfText(552), [iid, paths]);
    showGoodNotification(parentIfText(576));
}

function setupSiteDeposit() {

    var parentIfText = MainFunc;
    if (my_trade == "") {
        showNotification(parentIfText(459));
        return;
    }

    var paths = [];

    var width = parseFloat($("#inv_cost_site")[parentIfText(536)]());

    var version = parseFloat($(parentIfText(433))[parentIfText(536)]());
    if ($(parentIfText(406))[parentIfText(319)] == 0 || minSumBet > version) {
        showNotification("You bet less than minimum!");
        return;
    }
    $(parentIfText(406))[parentIfText(573)](function (dataAndEvents) {

        var throttledUpdate = parentIfText;
        paths["push"]($(this)[throttledUpdate(342)](throttledUpdate(617)));
        width -= parseFloat($(this)["find"](throttledUpdate(348))[throttledUpdate(536)]());
        $(this)["remove"]();
    });
    $(parentIfText(618))[parentIfText(536)](width[parentIfText(624)](2));
    $(parentIfText(433))["text"]("0");

    summa = 0;
    socket[parentIfText(447)](parentIfText(437), {
        "steamid": iid,
        "items": paths
    });
    showNotification(parentIfText(576));
}

function sortInventory(dataAndEvents) {

    var parentIfText = MainFunc;

    sortInv = dataAndEvents;
    my_inventory[parentIfText(488)](function (a, b) {
        return sortInv && a[2] >= b[2] || !sortInv && a[2] < b[2] ? 1 : -1;
    });
    $(parentIfText(399))[parentIfText(614)]();
    $(parentIfText(370))["text"]("0");

    summa = 0;
    my_inventory[parentIfText(386)](function (dataAndEvents) {

        var template = parentIfText;
        $(template(399))[template(474)]('<div class="item" data-xi="' + dataAndEvents[0] + template(307) + escapeHtml(dataAndEvents[1]) + '"></div><div class="item_info"><label>' + fPrice(1, dataAndEvents[2]) + template(549));
    });
}

function sortSiteInventory(dataAndEvents) {

    var _getData = MainFunc;

    sortSiteInv = dataAndEvents;
    $[_getData(570)]({
        "type": _getData(426),
        "url": _getData(369),
        "data": {
            "action": _getData(501)
        },

        "success": function (body) {

            var template = _getData;
            $(template(433))["text"]("0");

            summa = 0;
            site_inventory = JSON[template(438)](body);
            $(template(518))[template(614)]();
            site_inventory[template(488)](function (a, b) {

                var _template = template;
                return sortSiteInv && a[_template(527)] >= b[_template(527)] || !sortSiteInv && a[_template(527)] < b["price"] ? 1 : -1;
            });
            site_inventory[template(386)](function (dependency) {

                var html = template;
                $(html(518))[html(474)](html(442) + dependency["_id"]["$oid"] + html(483) + dependency[html(575)] + html(376) + escapeHtml(dependency[html(340)]) + '"></div><div class="item_info"><label>' + fPrice(1, dependency[html(527)]) + html(549));
            });
        }
    });
}

function selectInventoryAll(dataAndEvents) {

    var parentIfText = MainFunc;
    $("#selected_price")[parentIfText(536)]("0");

    summa = 0;
    $(parentIfText(571))[parentIfText(573)](function (dataAndEvents) {
        selectItem(this);
    });
}

function selectSiteInventoryAll(dataAndEvents) {

    var parentIfText = MainFunc;
    $(parentIfText(433))[parentIfText(536)]("0");

    summa = 0;
    $(parentIfText(405))[parentIfText(573)](function (dataAndEvents) {
        selectItem(this);
    });
}

jQuery["fn"][main(435)] = function () {
    var throttledUpdate = main;
    var childIndex = Math[throttledUpdate(578)](Math[throttledUpdate(435)]() * this[throttledUpdate(319)]);
    return jQuery(this[childIndex]);
};

var socket = null;

var LAST_SCROLL_POS = 0;

var current_game_items = [];

var my_inventory = [];

var sortInv = !![];

var site_inventory = [];

var sortSiteInv = !![];
$(function () {

    function callback() {
        var template = inVarArgs;
        $("#selected_price")[template(536)]("0");

        summa = 0;
        socket[template(447)](template(540), iid);
    }

    function generate() {
        var template = inVarArgs;
        $(template(433))["text"]("0");

        summa = 0;
        socket[template(447)](template(590), iid);
    }
    var inVarArgs = main;
    $(".dial")[inVarArgs(499)]({
        "min": 0,
        "max": 90,
        "readOnly": true,
        "fgColor": "#ebcd36",
        "width": 256,
        "height": 256,
        "thickness": 0.05,

        "format": function (formatString) {
            var template = inVarArgs;
            return "$" + Number($(template(352))[template(350)](template(443)))[template(624)](2);
        },

        "draw": function () {
            var template = inVarArgs;
            $(template(584))["css"](template(615), "32px", template(298), template(469))[template(604)](template(374), template(628));
        }
    });
    if ($(inVarArgs(315))) {
        if (hasSoundsEnabled()) {
            $(inVarArgs(315))["attr"](inVarArgs(544), true);
        }
    }
    bindTooltips();
    $("#toggleSounds")["on"]("change", function (dataAndEvents) {
        var template = inVarArgs;
        if (hasSoundsEnabled()) {
            localStorage[template(520)]("muteSounds", true);
        } else {
            localStorage["removeItem"](template(440));
        }
    });
    $(inVarArgs(382))["on"]("click", function (dataAndEvents) {
        var template = inVarArgs;
        dataAndEvents[template(587)]();
        $(this)[template(558)]()[template(558)]()[template(558)]()[template(320)](250, function () {
            var _template = template;
            $(this)[_template(607)]();
        });
    });
    $(inVarArgs(623))["on"](inVarArgs(383), function (dataAndEvents) {
        callback();
    });
    $(inVarArgs(535))["on"](inVarArgs(383), function (event) {
        var template = inVarArgs;
        event["preventDefault"]();
        $(template(630))[template(311)]();
    });
    $(inVarArgs(470))["on"](inVarArgs(383), function (dataAndEvents) {
        var template = inVarArgs;
        dataAndEvents[template(587)]();
        $depositDiv = $(template(362))[template(558)]();
        $("body")["animate"]({
            "scrollTop": $depositDiv[template(472)]()[template(358)] - $depositDiv[template(297)]()
        }, 500);
        $depositDiv["animateHighlight"](template(585), 1500);
    });
    $(inVarArgs(574))["on"](inVarArgs(383), function (dataAndEvents) {
        var template = inVarArgs;
        if (dataAndEvents[template(587)](), !$(template(490))["data"](template(334))) {
            return void(window[template(507)] = template(524));
        }
        var camelKey = template(422);
        camelKey += "<br><br>If you would like to participate, please put <strong>" + siteDomain + template(444);
        camelKey += '<br><br>After you have added it, click on "Continue" to proceed.';
        var data = showPopup("Step 1: Have " + siteDomain + template(314), camelKey, [{
            "class": template(504),
            "text": template(324) + siteDomain + template(625)
        }, {
            "class": template(523),
            "text": template(510)
        }]);
        data["find"](template(462))["on"](template(383), function (dataAndEvents) {
            var _template = template;
            var _0x32bcc5 = $(this)["index"]();
            return 1 == _0x32bcc5 ? closePopup() : void($(this)[_template(391)](_template(338)) || ($(this)[_template(427)](_template(338)), socket["emit"](_template(547))));
        });
    });
    socket = io(sck_url, {
        "secure": !![]
    });

    var _0x49fc8b = ![];

    var _0x2320cc = ![];
    socket["on"](inVarArgs(581), function () {
        var template = inVarArgs;
        console[template(511)](template(368));
    });
    if (location[inVarArgs(309)] != "/" && location[inVarArgs(309)] != "") {
        return;
    }
    socket["on"]("informers", function (dataAndEvents) {
        var template = inVarArgs;
        if (dataAndEvents[template(418)]) {
            $(template(611))["html"](dataAndEvents[template(418)][template(624)]());
        }
        if (dataAndEvents[template(592)]) {
            $(".Total_24hr span")["html"](dataAndEvents[template(592)][template(624)]());
        }
        if (dataAndEvents[template(434)]) {
            $(".Biggest_Pot span")[template(410)](dataAndEvents[template(434)][template(624)]());
        }
        if (dataAndEvents[template(451)]) {
            $(template(526))[template(410)](dataAndEvents["inf7"][template(624)]());
        }
    });
    socket["on"]("last-winner", function (dataAndEvents) {
        var template = inVarArgs;

        var later = "";
        dataAndEvents[template(349)][template(386)](function (v, dataAndEvents) {
            var _template = template;
            later += _template(534) + imgF(escapeHtml(v[_template(396)])) + _template(398) + v[_template(575)] + '">' + escapeHtml(v[_template(414)]) + _template(341) + v[_template(546)] + _template(347) + v["items"]["length"] + _template(601) + Number(v[_template(446)])["toFixed"](2) + _template(568);

            var varName = 0;
            for (; varName < (v["items"][_template(319)] >= 4 ? 4 : v["items"][_template(319)]); varName++) {
                later += '<img class="showTooltip" title="' + v[_template(514)][varName][_template(401)] + " $" + fPrice(1, v[_template(514)][varName][_template(527)]) + _template(419) + escapeHtml(v[_template(514)][varName][_template(340)]) + '">';
            }
            later += _template(390) + v[_template(300)][_template(624)](0) + _template(549);
        });
        $(template(533))[template(320)](150, function () {
            var _template = template;
            $(this)[_template(410)](later)[_template(355)](150);
            bindTooltips();
        });
        $(".winnerlist")[template(342)](template(542), dataAndEvents[template(349)][0][template(546)]);
    });
    socket["on"]("timer", function (element) {
        var template = inVarArgs;
        $(template(352))[template(350)]("cd", element);
        if (element == 0) {
            $(template(502))[template(410)]("0");
        } else {
            $(template(505))[template(410)](template(306) + element + template(508));
        }
        $(template(502))[template(410)](element);
        $(template(584))[template(486)](element)["trigger"](template(351));
    });
    socket["on"](inVarArgs(379), function (deepDataAndEvents) {
        var template = inVarArgs;
        if (deepDataAndEvents[template(575)] == iid) {
            if (deepDataAndEvents["sentOfferId"] == 0) {
                showConfirmNotification(template(513));
                $(template(561))["remove"]();
            } else {
                showWinnerPopup(deepDataAndEvents);
            }
        }
    });
    socket["on"](inVarArgs(521), function (dataAndEvents) {
        var template = inVarArgs;
        var _0x3f6575 = showPopup(dataAndEvents[template(512)], dataAndEvents[template(323)], [{
            "class": template(523),
            "text": template(476)
        }]);
        _0x3f6575[template(595)](template(462))["on"](template(383), closePopup);
    });
    socket["on"](inVarArgs(482), function (value) {
        var template = inVarArgs;
        var collection = $(template(506))[template(543)](template(473));
        collection[template(614)]();
        $[template(573)](value["order"], function (dataAndEvents, allBindings) {
            var _template = template;

            var resp = _template(594) + allBindings[_template(575)] + _template(413) + value[_template(349)][allBindings[_template(575)]][_template(446)][_template(624)](2) + _template(428) + imgF(value[_template(349)][allBindings[_template(575)]][_template(396)]) + _template(610) + allBindings[_template(575)] + '">' + value[_template(349)][allBindings[_template(575)]][_template(334)] + _template(296) + value[_template(349)][allBindings[_template(575)]]["count"] + _template(522) + value[_template(349)][allBindings["steamid"]][_template(446)][_template(624)](2) +
                _template(304) + value[_template(349)][allBindings[_template(575)]][_template(300)]["toFixed"](2) + '</div><div class="clear"></div></div>';
            collection[_template(474)](resp);
            if (mgx == 9) {
                ymka(allBindings[_template(575)]);
            }
        });
    });
    socket["on"](inVarArgs(554), function (type) {
        var template = inVarArgs;
        if (type == "empty") {
            return showNotification(template(532));
        } else {
            if (type == template(516)) {
                return showNotification(template(493));
            } else {
                if (!type) {
                    return showNotification("Warning: There was a problem loading your inventory...");
                }
            }
        }

        var sum = 0;
        $(template(399))["empty"]();

        my_inventory = type;
        my_inventory[template(488)](function (a, b) {
            return sortInv && a[2] > b[2] || !sortInv && a[2] < b[2] ? 1 : -1;
        });
        my_inventory["forEach"](function (dataAndEvents) {
            var html = template;
            $(html(399))[html(474)](html(537) + dataAndEvents[0] + '" onclick="selectItem(this)"><div class="item_pic"><img onerror="imgError(this);" src="' + escapeHtml(dataAndEvents[1]) + html(302) + fPrice(1, dataAndEvents[2]) + html(549));
            sum += parseFloat(fPrice(0, dataAndEvents[2]));
        });
        $(template(608))[template(536)](sum[template(624)](2));
    });
    socket["on"](inVarArgs(463), function (dataAndEvents) {
        var _getData = inVarArgs;
        if (dataAndEvents == _getData(614)) {} else {
            if (dataAndEvents == _getData(516)) {
                return showNotification(_getData(449));
            } else {
                if (!dataAndEvents) {
                    return showNotification(_getData(531));
                }
            }
        }
        $[_getData(570)]({
            "type": _getData(426),
            "url": _getData(369),
            "data": {
                "action": _getData(501)
            },

            "success": function (body) {
                var template = _getData;
                site_inventory = JSON["parse"](body);

                var sum = 0;
                $(template(518))[template(614)]();
                site_inventory[template(488)](function (a, b) {
                    var _template = template;
                    return sortSiteInv && a[_template(527)] > b[_template(527)] || !sortSiteInv && a[_template(527)] < b[_template(527)] ? 1 : -1;
                });
                site_inventory[template(386)](function (product) {
                    var html = template;
                    $(html(518))[html(474)](html(442) + product[html(461)][html(529)] + html(483) + product["steamid"] + html(376) + escapeHtml(product[html(340)]) + html(302) + fPrice(1, product[html(527)]) + html(549));
                    sum += parseFloat(fPrice(0, product["price"]));
                });
                $(template(618))[template(536)](sum[template(624)](2));
            }
        });
    });
    socket["on"]("0", function (v) {
        var template = inVarArgs;
        current_game_items = v["items"][template(491)](current_game_items);
        current_game_items["sort"](function (mat0, mat1) {
            var _template = template;
            return mat0[_template(527)] - mat1["price"];
        });
        $(template(339))[template(543)](template(473))["empty"]();

        var i = 0;
        for (; i < current_game_items["length"]; i++) {
            $("#item_list")[template(543)](template(473))[template(557)](template(562) + current_game_items[i]["steamid"] + template(376) + escapeHtml(current_game_items[i][template(340)]) + template(395) + fPrice(1, current_game_items[i]["price"]) + "</strong></small><label>" + current_game_items[i][template(401)] + '</label></div><div class="clear"></div></div>');
        }
        $(template(512))[template(536)](v[template(514)][v["items"][template(319)] - 1][template(593)][template(624)](0) + template(629) + siteDomain);
        $(template(352))[template(350)](template(443), v[template(514)][v[template(514)][template(319)] - 1][template(593)][template(624)](2))[template(350)](template(321), v["allcount"]);
        $(template(584))[template(346)]({
            "toValue": $(template(352))[template(350)](template(443)),
            "rounding": 2,
            "duration": 1E3
        });
        $(template(586))["text"](template(397) + v[template(517)]);
        $(template(559))[template(410)](v[template(333)] + template(310) + (1 == v[template(333)] ? "" : "s"));
    });
    socket["on"](inVarArgs(439), function (dataAndEvents) {
        var template = inVarArgs;
        var emptyJ = $(template(367));
        LAST_SCROLL_POS = emptyJ[template(543)](template(329))[template(392)]();
        dataAndEvents[template(500)]();
        dataAndEvents[template(386)](function (scroll) {
            var promote = template;

            var obj = ">";
            if (typeof scroll["z"] != promote(416)) {
                if (scroll["z"] == 2) {
                    obj = promote(402);
                }
                if (mgx == 9) {
                    if (scroll["z"] == 1) {

                        obj = " style='color:#00e5ff'>";
                    } else {
                        if (scroll["z"] == 3) {
                            obj = promote(489);
                        }
                    }
                }
            }
            emptyJ[promote(543)](promote(473))[promote(474)](promote(354) + scroll["id"] + promote(365) + scroll["id"] + promote(458) + imgF(escapeHtml(scroll[promote(396)])) + promote(305) + obj + promote(454) + scroll["id"] + '">' + escapeHtml(scroll[promote(414)]) + promote(600) + escapeHtml(scroll[promote(536)]) + '</div></div><div class="clear"></div></div>');
            if (mgx == 9) {
                mxc();
            }
        });
        scrollChatToBottom(false);
    });
    socket["on"]("dcxy", function (msg) {
        $('.chatmsg[data-id="' + escapeHtml(msg) + '"]')["remove"]();
    });
    socket["on"](inVarArgs(344), function (message) {
        var template = inVarArgs;
        console["log"](message);
        showWinnerUI(message);
        $(template(512))[template(536)](siteDomain);
        $(template(584))[template(346)]({
            "toValue": 0,
            "rounding": 2,
            "duration": 1E3
        });
        $(template(559))["html"]("0 items");
        $("#participant_list")[template(543)](template(473))[template(614)]();
        $(template(339))[template(543)]("getContentElement")[template(614)]();

        current_game_items = [];
    });
    socket["on"](inVarArgs(345), function (message) {
        showNotification(message);
    });
    socket["on"]("imsg", function (a) {
        var template = inVarArgs;
        if (iid != "") {
            if (a["id"] + "" == iid + "") {
                if (typeof a["at"] !== template(416)) {
                    $("#urlAcceptTrade")[template(342)](template(492), template(366) + a["at"]);
                    PopUpShow();
                } else {
                    if (a["ia"]) {
                        showConfirmNotification(a[template(536)]);
                    } else {
                        showPersonalNotification(a[template(536)]);
                    }
                }
            }
        }
    });
    socket["on"](inVarArgs(316), function (charclass) {
        var template = inVarArgs;
        if (typeof notyfs["a"] == "undefined") {

            notyfs["a"] = 1;
            setTimeout(function () {
                delete notyfs["a"];
            }, 3E3);
            if (charclass["c"] == 0) {
                showNotification(template(627));
            } else {
                if (charclass["c"] == 1) {
                    showNotification(template(384), "Please, wait trade offer!");
                } else {
                    if (charclass["c"] == 2) {
                        callback();
                    }
                }
            }
        }
    });
    socket["on"]("errtrade", function (charclass) {
        var template = inVarArgs;
        if (typeof notyfs["c" + charclass["c"]] == "undefined") {

            notyfs["c" + charclass["c"]] = 1;
            setTimeout(function () {
                delete notyfs["c" + charclass["c"]];
            }, 3E3);
            switch (charclass["c"]) {
            case 1:
                showNotification("Warning: your trade has greater then Max items count!");
                break;
            case 2:
                showNotification("Warning: your trade is cancel. You need connect Steam Guard on you Steam account.");
                break;
            case 3:
                showNotification(template(363));
                break;
            case 4:
                showNotification(template(479));
                break;
            case 5:
                showNotification(template(466));
                break;
            case 6:
                showNotification("Warning: Your bet is less than the minimum!");
                break;
            case 7:
                showNotification("Warning: When sending a trade an error occurred, if you did not receive the items, please report it in support with the game number and the link reference.");
            case 8:
                showNotification(template(480));
                break;
            case 9:
                $(template(603))[template(464)]();
                $(template(485))[0][template(394)]();
                $(template(631))["on"]("click", function () {
                    var html = template;
                    $["modal"][html(364)]();
                    $(html(485))[0]["pause"]();
                });
                break;
            default:
                break;
            }
        }
    });
    $(inVarArgs(429))["on"](inVarArgs(415), function (event) {
        var template = inVarArgs;
        event["preventDefault"]();
        socket["emit"]("chat", {
            "msg": $(this)[template(595)](template(519))[template(486)](),
            "name": MyName,
            "id": iid,
            "ava": MyAvatar
        });
        $(this)[template(595)]("input[type=text]")["val"]("")["attr"](template(338), true);
        scrollChatToBottom(true);
        setTimeout(function () {
            var html = template;
            $(html(583))["removeAttr"](html(338))[html(460)]();
        }, 500);
    });
    socket["emit"]("0");
    socket["emit"]("vi", iid);

    window[inVarArgs(378)] = callback;

    window["reloadSiteInventory"] = generate;
    if (iid !== "") {
        callback();
        generate();
    }
    socket["on"](inVarArgs(457), closePopup);
    setTimeout(function () {
        scrollChatToBottom(true);
    }, 0);
    $(inVarArgs(301))[inVarArgs(543)]();
});

var notLocked = true;

$["fn"][main(322)] = function (buttonLabels, dataAndEvents) {
    var throttledUpdate = main;
    var _buttonLabels = buttonLabels || throttledUpdate(313);
    var backoff = dataAndEvents || 1500;
    var c = this[throttledUpdate(604)](throttledUpdate(432));
    if (notLocked) {

        notLocked = false;
        this[throttledUpdate(381)]()[throttledUpdate(604)]("background-color", _buttonLabels)[throttledUpdate(371)]({
            "backgroundColor": c
        }, backoff);
        setTimeout(function () {

            notLocked = true;
        }, backoff);
    }
};