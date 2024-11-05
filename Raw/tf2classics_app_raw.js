var _0x3cde52 = _0x5978;
(function (_0x33f2c7, _0x584b53) {
    var _0x5b84f8 = _0x5978,
        _0xa19a88 = _0x33f2c7();
    while (!![]) {
        try {
            var _0x237b81 = parseInt(_0x5b84f8(0x246)) / 0x1 * (parseInt(_0x5b84f8(0x14a)) / 0x2) + -parseInt(_0x5b84f8(0x1c8)) / 0x3 * (-parseInt(_0x5b84f8(0x1c5)) / 0x4) + parseInt(_0x5b84f8(0x14b)) / 0x5 + -parseInt(_0x5b84f8(0x181)) / 0x6 + parseInt(_0x5b84f8(0x1e4)) / 0x7 * (parseInt(_0x5b84f8(0x1ae)) / 0x8) + -parseInt(_0x5b84f8(0x198)) / 0x9 + parseInt(_0x5b84f8(0x161)) / 0xa * (parseInt(_0x5b84f8(0x13d)) / 0xb);
            if (_0x237b81 === _0x584b53) break;
            else _0xa19a88['push'](_0xa19a88['shift']());
        } catch (_0x1bc81f) {
            _0xa19a88['push'](_0xa19a88['shift']());
        }
    }
}(_0x35d6, 0xdf3de), ! function (_0x43fb26) {
    'use strict';
    var _0x426f61 = _0x5978;
    if (_0x426f61(0x1a7) == typeof define && define['amd']) define([_0x426f61(0x241)], _0x43fb26);
    else {
        if (_0x426f61(0x1af) == typeof exports) _0x43fb26(require(_0x426f61(0x241)));
        else {
            if (_0x426f61(0x1a0) == typeof jQuery) throw _0x426f61(0x233);
            _0x43fb26(jQuery);
        }
    }
}(function (_0x210892) {
    var _0x312a51 = _0x5978;

    function _0x31b991(_0x19f41c, _0x458037) {
        var _0x5f03da = _0x5978;
        this[_0x5f03da(0x1dd)] = _0x19f41c, this[_0x5f03da(0x193)] = _0x210892['extend']({}, _0x480fcc, _0x458037), this[_0x5f03da(0x127)] = _0x480fcc, this[_0x5f03da(0x229)] = _0x6dd851, this['init']();
    }
    var _0x6dd851 = _0x312a51(0x15a),
        _0x480fcc = {
            'easing': _0x312a51(0x234),
            'duration': 0x1f4,
            'delimiter': void 0x0,
            'rounding': 0x0,
            'toValue': void 0x0,
            'fromValue': void 0x0,
            'queue': !0x1,
            'onStart': function () {},
            'onStep': function () {},
            'onProgress': function () {},
            'onComplete': function () {}
        };
    _0x31b991['prototype'] = {
        'init': function () {
            var _0x3e8fa8 = _0x312a51;
            this[_0x3e8fa8(0x168)](), this[_0x3e8fa8(0x224)]();
        },
        'parseElement': function () {
            var _0x3503c1 = _0x312a51,
                _0x3f7e8f = _0x210892['trim'](_0x210892(this[_0x3503c1(0x1dd)])['val']()[_0x3503c1(0x25a)]('$ ', ''));
            this[_0x3503c1(0x193)][_0x3503c1(0x1b4)] = this[_0x3503c1(0x193)][_0x3503c1(0x1b4)] || this['format'](_0x3f7e8f);
        },
        'setValue': function () {
            var _0x204b53 = _0x312a51,
                _0x3cdead = this;
            _0x210892({
                'value': _0x3cdead[_0x204b53(0x193)]['fromValue']
            })[_0x204b53(0x173)]({
                'value': _0x3cdead[_0x204b53(0x193)][_0x204b53(0x244)]
            }, {
                'duration': parseInt(_0x3cdead[_0x204b53(0x193)]['duration'], 0xa),
                'easing': _0x3cdead[_0x204b53(0x193)]['easing'],
                'start': _0x3cdead[_0x204b53(0x193)][_0x204b53(0x147)],
                'step': function (_0x3081f9, _0x3333e7) {
                    var _0x2ce83a = _0x204b53;
                    _0x210892(_0x3cdead[_0x2ce83a(0x1dd)])[_0x2ce83a(0x1e6)]('$ ' + _0x3cdead[_0x2ce83a(0x1c0)](_0x3081f9)), _0x3cdead[_0x2ce83a(0x193)]['onStep'](_0x3081f9, _0x3333e7);
                },
                'progress': _0x3cdead['settings'][_0x204b53(0x174)],
                'complete': _0x3cdead['settings'][_0x204b53(0x235)]
            });
        },
        'format': function (_0x56f26f) {
            var _0x536fc1 = _0x312a51,
                _0x5da634 = this;
            return _0x56f26f = parseInt(this[_0x536fc1(0x193)]['rounding']) < 0x1 ? parseInt(_0x56f26f, 0xa) : parseFloat(_0x56f26f)[_0x536fc1(0x270)](parseInt(this[_0x536fc1(0x193)]['rounding'])), _0x5da634[_0x536fc1(0x193)][_0x536fc1(0x1c2)] ? this[_0x536fc1(0x1fd)](_0x56f26f) : _0x56f26f;
        },
        'delimit': function (_0x3c677c) {
            var _0x1f6765 = _0x312a51,
                _0x654543 = this;
            if (_0x3c677c = _0x3c677c[_0x1f6765(0x145)](), _0x654543['settings'][_0x1f6765(0x148)] && parseInt(_0x654543[_0x1f6765(0x193)][_0x1f6765(0x148)], 0xa) > 0x0) {
                var _0x3b2692 = _0x3c677c[_0x1f6765(0x151)](_0x3c677c[_0x1f6765(0x13f)] - (_0x654543['settings']['rounding'] + 0x1), _0x3c677c[_0x1f6765(0x13f)]),
                    _0x3a4e98 = _0x3c677c[_0x1f6765(0x151)](0x0, _0x3c677c[_0x1f6765(0x13f)] - (_0x654543[_0x1f6765(0x193)][_0x1f6765(0x148)] + 0x1));
                return _0x654543[_0x1f6765(0x26c)](_0x3a4e98) + _0x3b2692;
            }
            return _0x654543['addDelimiter'](_0x3c677c);
        },
        'addDelimiter': function (_0x335005) {
            var _0x159fb8 = _0x312a51;
            return _0x335005['toString']()['replace'](/\B(?=(\d{3})+(?!\d))/g, this['settings'][_0x159fb8(0x1c2)]);
        }
    }, _0x210892['fn'][_0x6dd851] = function (_0x1a0f1c) {
        var _0x335713 = _0x312a51;
        return this[_0x335713(0x23d)](function () {
            var _0x34e130 = _0x335713;
            _0x210892['data'](this, _0x34e130(0x199) + _0x6dd851) && _0x210892[_0x34e130(0x15e)](this, 'plugin_' + _0x6dd851, null), _0x210892[_0x34e130(0x15e)](this, _0x34e130(0x199) + _0x6dd851, new _0x31b991(this, _0x1a0f1c));
        });
    };
}));

function escapeHtml(_0x5ad8ae) {
    var _0x52569d = _0x5978;
    return _0x5ad8ae[_0x52569d(0x25a)](/&/g, _0x52569d(0x226))[_0x52569d(0x25a)](/</g, '&lt;')[_0x52569d(0x25a)](/>/g, '&gt;')['replace'](/"/g, _0x52569d(0x22b))[_0x52569d(0x25a)](/'/g, _0x52569d(0x184));
}

function showPopup(_0x1144a3, _0x272c85, _0x5e6daf) {
    var _0x1e3309 = _0x5978;
    $(_0x1e3309(0x1e7))[_0x1e3309(0x1db)]();
    var _0x36a70a = _0x1e3309(0x20d) + +new Date(),
        _0x22b4f8 = $(_0x1e3309(0x272))[0x0][_0x1e3309(0x1f0)]['replace'](_0x1e3309(0x254), _0x36a70a + ' popup popupTemplate');
    $(_0x1e3309(0x1d1))[_0x1e3309(0x1da)](_0x22b4f8);
    var _0x359cdf = $('.' + _0x36a70a);
    _0x359cdf[_0x1e3309(0x253)]('.header')[_0x1e3309(0x19a)](_0x1144a3), _0x359cdf[_0x1e3309(0x253)]('.content')[_0x1e3309(0x19a)](_0x272c85);
    var _0x58036f = '';
    for (i in _0x5e6daf) _0x58036f += '<div class=\"' + _0x5e6daf[i][_0x1e3309(0x24d)] + '\">' + _0x5e6daf[i][_0x1e3309(0x218)] + _0x1e3309(0x169);
    return _0x359cdf[_0x1e3309(0x253)]('.buttons')[_0x1e3309(0x19a)](_0x58036f), _0x58036f[_0x1e3309(0x13f)] || _0x359cdf[_0x1e3309(0x253)]('.buttons')[_0x1e3309(0x1db)](), $('#overlay')[_0x1e3309(0x163)](0x96), _0x359cdf[_0x1e3309(0x1bd)](_0x1e3309(0x194)), _0x359cdf['find']('.buttons .disabled')[_0x1e3309(0x1bd)](_0x1e3309(0x152)), setTimeout(function () {
        var _0x49b8b5 = _0x1e3309;
        _0x359cdf[_0x49b8b5(0x1ab)](_0x49b8b5(0x261));
    }, 0x96), _0x359cdf;
}

function closePopup() {
    var _0x576833 = _0x5978;
    $(_0x576833(0x1e7))[_0x576833(0x23d)](function () {
        var _0x3fbef1 = _0x576833;
        $(this)[_0x3fbef1(0x1bd)](_0x3fbef1(0x261)),
            function (_0x54fe8a) {
                setTimeout(function () {
                    _0x54fe8a['remove']();
                }, 0x15e);
            }($(this));
    }), $(_0x576833(0x1d1))[_0x576833(0x140)](0x96);
}

function replaceLogin(_0x2a4fd2) {
    var _0x4797c6 = _0x5978;
    if (_0x2a4fd2 == undefined) return '';
    var _0x4d88f4 = [_0x4797c6(0x1a5), _0x4797c6(0x177), '.org', '.net', _0x4797c6(0x1a9), _0x4797c6(0x167)],
        _0x3ced8a = ![],
        _0x2965d4 = _0x2a4fd2,
        _0xdac946 = _0x2965d4['toLowerCase']();
    _0x3ced8a = stripos(_0xdac946, siteDomain);
    if (_0x3ced8a !== ![]) return _0x2a4fd2;
    _0x3ced8a = stripos(_0xdac946, siteDomain);
    if (_0x3ced8a !== ![]) return _0x2a4fd2;
    return _0x4d88f4['forEach'](function (_0x5bc2a8, _0x13598b, _0x4e2a13) {
        _0x3ced8a = stripos(_0xdac946, _0x5bc2a8);
        if (_0x3ced8a != ![]) return _0x2965d4 = tsnl(_0xdac946, _0x3ced8a, _0x2a4fd2), _0x2965d4;
    }), _0x2965d4;
}

function tsnl(_0x3b4934, _0x7ccd8c, _0x494fbf) {
    var _0x512f13 = _0x5978;
    arrfnd = ['-', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var _0x105435 = _0x3b4934[_0x512f13(0x13f)] - _0x7ccd8c + 0x1;
    while (_0x105435 <= _0x3b4934[_0x512f13(0x13f)]) {
        if (arrfnd[_0x512f13(0x165)](_0x3b4934[_0x512f13(0x268)](-0x1 * _0x105435, 0x1)) == -0x1) return _0x494fbf[_0x512f13(0x268)](0x0, stripos(_0x3b4934, _0x3b4934['substr'](-0x1 * _0x105435, 0x1)));
        _0x105435++;
    }
}

function stripos(_0x1f99ff, _0x1e6e72, _0x595ce7) {
    var _0x303fe5 = _0x5978,
        _0x4316bb = _0x1f99ff[_0x303fe5(0x19c)](),
        _0x4cf452 = _0x1e6e72[_0x303fe5(0x19c)](),
        _0x267e70 = 0x0;
    _0x595ce7 == undefined && (_0x595ce7 = 0x0);
    if ((_0x267e70 = _0x4316bb[_0x303fe5(0x165)](_0x4cf452, _0x595ce7)) > -0x1) return _0x267e70;
    return ![];
}

function sort() {
    var _0x24986f = _0x5978,
        _0x52f880 = $(_0x24986f(0x1a1));
    _0x52f880[_0x24986f(0x1e8)](function (_0x359d29, _0x362cd4) {
        var _0x3dc55e = _0x24986f;
        _0x359d29 = parseInt($(_0x359d29)[_0x3dc55e(0x156)]('data-chance'), 0xa), _0x362cd4 = parseInt($(_0x362cd4)['attr']('data-chance'), 0xa);
        if (_0x359d29 > _0x362cd4) return 0x1;
        else return _0x359d29 < _0x362cd4 ? -0x1 : 0x0;
    }), $(_0x24986f(0x1d3))[_0x24986f(0x19a)](_0x52f880);
}

function showWinnerPopup(_0x4de1ca) {
    var _0x33b40e = _0x5978;
    if (_0x4de1ca['sentOfferId']) {
        var _0x330cda = '',
            _0x196854 = [];
        if (_0x4de1ca[_0x33b40e(0x24c)]) _0x196854 = [{
            'class': 'accept',
            'text': _0x33b40e(0x183) + _0x4de1ca[_0x33b40e(0x24c)] + _0x33b40e(0x265)
        }, {
            'class': _0x33b40e(0x20b),
            'text': _0x33b40e(0x1dc)
        }], _0x330cda += _0x33b40e(0x13e), _0x330cda += _0x33b40e(0x1e1), _0x330cda += _0x33b40e(0x169);
        else {
            if ($(_0x33b40e(0x1a4))['is'](_0x33b40e(0x239))) return;
            _0x330cda += _0x33b40e(0x1a8), _0x330cda += _0x33b40e(0x264), _0x330cda += _0x33b40e(0x164);
        }
        var _0x100f66 = showPopup(_0x33b40e(0x1d4), _0x330cda, _0x196854);
        _0x100f66[_0x33b40e(0x253)](_0x33b40e(0x1ce))['unbind']('click')['on'](_0x33b40e(0x17f), function () {
            0x1 == $(this)['index']() && closePopup();
        }), _0x100f66[_0x33b40e(0x253)](_0x33b40e(0x197))['on'](_0x33b40e(0x17f), function (_0x586a9a) {
            closePopup();
        });
    }
}

function scrollChatToBottom(_0x35ca52) {
    var _0x572297 = _0x5978,
        _0x23b881 = $(_0x572297(0x16f))['simplebar']()[_0x572297(0x21f)](_0x572297(0x149));
    $(_0x572297(0x16f))[_0x572297(0x21f)]('recalculate');
    var _0x15f51e = _0x23b881 && _0x23b881[0x0] && _0x23b881[0x0]['scrollHeight'];
    _0x23b881['scrollTop'](_0x15f51e + 0x64);
}

function showWinnerUI(_0xb4f9ba) {
    var _0x5c6bb4 = _0x5978,
        _0x36d77c = $(_0x5c6bb4(0x26b))['outerWidth']() / 0x4 * 0x4;
    $(_0x5c6bb4(0x1f2))[_0x5c6bb4(0x25c)]({
        'width': _0x36d77c + 'px'
    });
    var _0x4b4616 = $('.potwinner_pic');
    _0x4b4616[_0x5c6bb4(0x19a)]('')[_0x5c6bb4(0x25c)](_0x5c6bb4(0x175), 0x0);
    var _0xd05f0f = '';
    if ($('#participant_list .user')[_0x5c6bb4(0x13f)] <= 0x1) return ![];
    $(_0x5c6bb4(0x134))['each'](function () {
        var _0x203d35 = _0x5c6bb4;
        for (var _0x2cf9d0 = $(this)[_0x203d35(0x15e)](_0x203d35(0x1be)), _0x384046 = 0x0; _0x2cf9d0 > _0x384046; _0x384046++) _0xd05f0f += _0x203d35(0x12b) + _0x2cf9d0 + _0x203d35(0x25e) + $(this)[_0x203d35(0x15e)](_0x203d35(0x23f)) + _0x203d35(0x1a3) + imgF($(this)[_0x203d35(0x253)](_0x203d35(0x221))['attr'](_0x203d35(0x212))) + '\">';
    }), _0x4b4616[_0x5c6bb4(0x19a)](_0xd05f0f), _0x4b4616[_0x5c6bb4(0x19a)](shuffle(_0x4b4616[_0x5c6bb4(0x243)]()['get']())), $winnerDiv = $(_0x5c6bb4(0x1f2)), $winnerDiv[_0x5c6bb4(0x253)]('.message a')[_0x5c6bb4(0x19a)](_0xb4f9ba['name']);
    var _0x1c8c6c = parseInt($(_0x5c6bb4(0x160))[_0x5c6bb4(0x15e)](_0x5c6bb4(0x141))),
        _0x35f2c1 = parseInt($('#jackpot_info')[_0x5c6bb4(0x15e)](_0x5c6bb4(0x1bb)));
    $winnerDiv['find'](_0x5c6bb4(0x21b))[_0x5c6bb4(0x19a)](_0x1c8c6c + _0x5c6bb4(0x136) + (0x1 != _0x1c8c6c ? 's' : '')), $winnerDiv['find'](_0x5c6bb4(0x1f1))[_0x5c6bb4(0x19a)]('$ ' + _0x35f2c1[_0x5c6bb4(0x270)](0x2)), $winnerDiv['fadeIn'](0xfa, function () {
        var _0xf37c43 = _0x5c6bb4,
            _0x2dea96 = $(_0xf37c43(0x25d) + _0xb4f9ba[_0xf37c43(0x23f)] + '\"]')['last'](),
            _0x1762cc = 0x0;
        _0x4b4616['children']()[_0xf37c43(0x23d)](function () {
            var _0x4699c6 = _0xf37c43;
            0x5 >= _0x1762cc && _0x4b4616[_0x4699c6(0x1da)]($(this)[0x0][_0x4699c6(0x1f0)]), _0x1762cc++;
        });
        var _0x32feaa = 0x93 * (_0x2dea96[_0xf37c43(0x190)]() + 0x1);
        _0x32feaa -= _0x36d77c / 0x2, _0x32feaa -= Math[_0xf37c43(0x242)](0x72 * Math[_0xf37c43(0x1b3)]()) + 0xe, _0x4b4616[_0xf37c43(0x173)]({
            'margin-left': -0x1 * _0x32feaa + 'px'
        }, 0x2328, _0xf37c43(0x23c), function () {
            var _0x2f74d1 = _0xf37c43;
            _0x2dea96[_0x2f74d1(0x1ab)]('highlight'), $('.potwinner .message')[_0x2f74d1(0x163)](0x96), setTimeout(function () {
                var _0x577de4 = _0x2f74d1;
                $(_0x577de4(0x1f2))['fadeOut'](0xfa), $(_0x577de4(0x14c))[_0x577de4(0x140)](0xfa);
            }, 0x30d4);
        });
    });
}

function updatePageTitle() {
    var _0x48dc1f = _0x5978,
        _0x516946 = $(_0x48dc1f(0x200));
    if ($('#jackpot_info')[_0x48dc1f(0x13f)]) {
        var _0x3ae22b = $(_0x48dc1f(0x160))[_0x48dc1f(0x15e)]('cd'),
            _0x26f36e = $('#jackpot_info')[_0x48dc1f(0x15e)](_0x48dc1f(0x1bb));
        _0x516946[_0x48dc1f(0x19a)]('$' + Number(_0x26f36e)[_0x48dc1f(0x270)](0x0) + (_0x3ae22b > 0x0 ? _0x48dc1f(0x255) + _0x3ae22b + 's' : '') + ' - ' + siteDomain);
    }
}

function showNotification(_0xb6477a) {
    var _0x136ed1 = _0x5978,
        _0x1fff15 = _0x136ed1(0x1de) + +new Date();
    $(_0x136ed1(0x146))[_0x136ed1(0x157)]()[_0x136ed1(0x1da)](_0x136ed1(0x1b9) + _0x1fff15 + _0x136ed1(0x1f7) + (-0x1 != _0xb6477a[_0x136ed1(0x19c)]()[_0x136ed1(0x165)](_0x136ed1(0x22c)) ? _0x136ed1(0x14f) : '') + '\">' + _0xb6477a + _0x136ed1(0x169)), setTimeout(function () {
        $('#' + _0x1fff15)['fadeOut'](0x96, function () {
            var _0x339b24 = _0x5978;
            $(this)[_0x339b24(0x1db)](), $(_0x339b24(0x24f))[_0x339b24(0x13f)] || $(_0x339b24(0x146))[_0x339b24(0x1ee)]();
        });
    }, 0x1388);
}

function _0x35d6() {
    var _0x2cb8fe = ['playersUnique', '\" data-owner=\"', '4634OrMSWl', '#soundSiren', 'val', '.popup:visible', 'sort', ' style=\'color:#ff0000\'>', 'body', 'concat', 'href', 'Warning: Please wait, your inventory in processing!', 'hide', 'blur', 'outerHTML', '#wonItemsWorth', '.winnerinfo', 'knob', 'reverse', 'getinv', '#timer', '\" class=\"alert', 'accept', '.countdown', '#participant_list', 'location', ' seconds', 'delimit', 'Cancel', 'log', 'title', 'ERROR', 'items', 'abs', 'wait', 'num', '.siteinventar', 'input[type=text]', 'setItem', 'showPopup', ' skin(s) - <strong>', 'cancel', '/auth/steam', 'popup', '.Games_24hr span', 'price', '.inventar .item.active', '$oid', 'src', 'Warning: There was a problem loading your site inventory...', 'Warning: Your inventory is empty!', '.winnerlist', '<div class=\"winner\"><div class=\"winner_pic\"><img onerror=\"imgError(this);\" src=\"', '#changeTradeLink', 'text', '<div class=\"item\" data-xi=\"', 'height', '#numItemsWon', 'ReloadInventory', 'none', 'data-num', 'simplebar', 'checked', 'img', 'round', 'sendRaffleNameCheck', 'setValue', '</label></div><div class=\"clear\"></div></div>', '&amp;', '<div class=\'box_title\'>', 'initDeposit', '_name', 'loadInventory', '&quot;', 'warning', 'prepend', 'parent', '.circle_info', 'onerror', '#more_cat', '<div class=\"item\" data-owner=\"', 'jquery-numerator requires jQuery to be loaded first', 'swing', 'onComplete', '.to_blur', 'http:', '%</strong>.</small></div><div class=\"win_items\">', ':visible', 'ajax', '.inventar .item:not(.active)', 'easeOutCirc', 'each', '.raffle .participate', 'steamid', 'Bot sent offer! Accept and confirm offer in steam. After that, your bet will appear in the list.', 'jquery', 'floor', 'children', 'toValue', 'connect', '15LVnmMh', '#submitChatMessage input[type=text]', '.dial', '#d6f0fd', '#game_pot', 'preventDefault', 'sentOfferId', 'class', 'ReloadSiteInventory', '#notification_list > div', 'inf3', 'jackpot', '<div class=\"user\" data-steamid=\"', 'find', 'popup popupTemplate', ' - ', 'active', '.item_info label', '</a></label><div class=\"msg\">', ' items</strong>, had a winning chance of <strong>', 'replace', '#tradeCancelModal', 'css', '.potwinner_pic img[data-steamid=\"', '\" data-steamid=\"', 'destroy', '#inv_cost', 'visible', '\"></div><div class=\"user_info\"><a target=\"_blank\" class=\"userlink\" href=\"//steamcommunity.com/profiles/', '#usersConnected', 'Please wait while we prepare the trade offer containing the items you just won..', '/\">Accept Trade Offer</a>', 'empty', 'font-size', 'substr', 'data-xi', '#inv_cost_site', '.mainbox', 'addDelimiter', 'block', 'pointer', '[data-action=reloadInventory]', 'toFixed', '\" my name. Continue.', '.popup.popupTemplate', 'Please wait, your deposit is being processed!', '142px', '$ - ', '#setTradeLink', '#closeSiren', '_defaults', '</a><br><small>', 'outerHeight', 'font-family', '<img data-chance=\"', 'money', '.simplebar', '\"></div><div class=\"item_info\"><label>', ' p:last', '% </strong></small></div><div class=\"percentage\"> $', '\"></a></div><div class=\"boxmsg\"><label', 'Drawing winner in ', '\" onclick=\"selectItem(this)\"><div class=\"item_pic\"><img onerror=\"imgError(this);\" src=\"', '#participant_list .user', 'pathname', ' item', 'fadeToggle', '.showTooltip', '#FFFF9C', ' in your steam name!', '#toggleSounds', 'qtrade', '11363DHkrvq', '<div id=\"winDetails\">', 'length', 'fadeOut', 'count', 'animateHighlight', 'content', 'I have \"', 'toString', '#notification_list', 'onStart', 'rounding', 'getScrollElement', '204038oKLNuI', '1555340QANibs', '.potwinner .message', 'allcount', 'user', ' warning', '<div class=\'box_window\'></div>', 'substring', 'disabled', '#item_list', 'image', '</a><br><small>won round #', 'attr', 'show', 'end-game', 'noty', 'numerator', ' with <strong>', 'label', 'list', 'data', 'change', '#jackpot_info', '11980pPuvcz', '<div class=\"chatmsg\" data-id=\"', 'fadeIn', '<br /><br /><br /><br /><img src=\"/img/loading_big.gif\" /></div>', 'indexOf', 'top', '.cc', 'parseElement', '</div>', '.content.deposit', 'Warning: error in checking Escrow status. Try again.', 'close', '\"><div class=\"profile_pic\"><a target=\"_blank\" href=\"//steamcommunity.com/profiles/', 'https://steamcommunity.com/tradeoffer/', '.chat .messagelist', 'CONNECT', 'apps.php', '#selected_price', 'animate', 'onProgress', 'margin-left', 'width', '.com', '\"><div class=\"item_pic\"><img onerror=\"imgError(this);\" src=\"', 'No Price', 'reloadInventory', 'showWinnerTradeInfo', '.mask', 'stop', '[data-action=closeWhiteBox]', 'click', 'You are won!', '7541118zYjGIm', 'forEach', '<a target=\"_blank\" href=\"https://steamcommunity.com/tradeoffer/', '&#039;', 'https://images.weserv.nl/?url=', '<div class=\"more\"> + ? more.. </div></div><div class=\"win_details\"><label>$ ', 'hasClass', 'scrollTop', '<div class=\'mask\'></div>', 'play', '\"></div><div class=\"item_info\"><small><strong>', 'ava', 'GAME #', '\"></div><div class=\"winner_info\"><a target=\"_blank\" class=\"profile\" href=\"//steamcommunity.com/profiles/', '.inventar', 'index', 'itemname', ' style=\'color:#bcff05\'>', 'settings', 'hidden', '.siteinventar .item:not(.active)', '.siteinventar .item.active', '.buttons > div:first a', '12975003kmtcAh', 'plugin_', 'html', 'siteinventar', 'toLowerCase', '\" data-chance=\"', 'name', 'submit', 'undefined', '#participant_list .simplebar-content div', 'inf1', '\" onerror=\"imgError(this);\" src=\"', '#winSpinner', '.ru', 'Entering this raffle is completely free.<br>In order for us to afford creating these free raffles, we expect some advertisment in return.', 'function', '<div id=\"winSpinner\" class=\"center\">', '.ua', 'POST', 'addClass', '\"><div class=\"profile_pic\"><img onerror=\"imgError(this);\" src=\"', '#submitChatMessage', '112zdfiCS', 'object', 'backgroundColor', '#selected_price_site', 'inf4', 'random', 'fromValue', 'initSiteDeposit', 'parse', 'chat', 'muteSounds', '<div id=\"', '<div class=\"item\" onclick=\"selectItem(this)\" data-xid=\"', 'worth', '</strong> into your steam name.', 'removeClass', 'chance', 'emit', 'format', 'Warning: Please wait, your sit inventory in processing!', 'delimiter', 'inf7', 'selectItem(this);', '2388QFdeww', '<a target=\"_blank\" href=\"//steamcommunity.com/profiles/', '.box_window', '2637XBlucw', 'closepopup', '\"><img onerror=\"imgError(this);\" src=\"', 'Please set your trade url!', 'focus', '_id', '.buttons > div', 'loadSiteInventory', 'modal', '#overlay', 'Warning: Error... Try again.', '#participant_list .simplebar-content', 'Congratulations, you have won in game!', '\'Roboto B\'', 'a.depositNow', 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/fe/fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb_full.jpg', 'offset', 'getContentElement', 'append', 'remove', 'Close', 'element', 'notification_', 'Warning: Please set your trade url!', 'Warning: price for one item less than the minimum!', 'The trade offer containing your winning items has been sent.<br>Please accept the trade offer as soon as possible by clicking on \"accept trade offer\" below.<br><br>'];
    _0x35d6 = function () {
        return _0x2cb8fe;
    };
    return _0x35d6();
}

function showGoodNotification(_0x986585) {
    var _0x20d9aa = _0x5978,
        _0x4048e0 = 'notification_' + +new Date();
    $('#notification_list')[_0x20d9aa(0x157)]()[_0x20d9aa(0x1da)](_0x20d9aa(0x1b9) + _0x4048e0 + '\" class=\"alert successfuly\">' + _0x986585 + _0x20d9aa(0x169)), setTimeout(function () {
        var _0x133fed = _0x20d9aa;
        $('#' + _0x4048e0)[_0x133fed(0x140)](0x96, function () {
            var _0x114c7e = _0x133fed;
            $(this)['remove'](), $(_0x114c7e(0x24f))['length'] || $(_0x114c7e(0x146))[_0x114c7e(0x1ee)]();
        });
    }, 0x1388);
}

function showPersonalNotification(_0x23b058) {
    var _0x4f93cf = _0x5978,
        _0x80a97a = 'notification_' + +new Date();
    $(_0x4f93cf(0x146))['show']()['append'](_0x4f93cf(0x1b9) + _0x80a97a + '\" class=\"alert personal_message\">' + _0x23b058 + _0x4f93cf(0x169)), setTimeout(function () {
        $('#' + _0x80a97a)['fadeOut'](0x96, function () {
            var _0x1326d2 = _0x5978;
            $(this)[_0x1326d2(0x1db)](), $('#notification_list > div')[_0x1326d2(0x13f)] || $('#notification_list')[_0x1326d2(0x1ee)]();
        });
    }, 0x4e20);
}

function showConfirmNotification(_0x5181ea) {
    var _0x1d719c = _0x5978,
        _0x59d9b2 = $('.popwindow');
    $(_0x1d719c(0x1ea))[_0x1d719c(0x22d)](_0x1d719c(0x189));

    function _0x1b3f4d(_0x5a3b5e) {
        var _0x5cf56a = _0x1d719c,
            _0x352dbb = _0x5a3b5e[_0x5cf56a(0x15e)](_0x5cf56a(0x176)),
            _0x5c2043 = _0x5a3b5e['data'](_0x5cf56a(0x21a)),
            _0x663ce = _0x352dbb / 0x2,
            _0x147d65 = _0x5a3b5e[_0x5cf56a(0x15e)](_0x5cf56a(0x200));
        _0x5a3b5e['wrap'](_0x5cf56a(0x150)), _0x5a3b5e[_0x5cf56a(0x1ab)]('box_window_in'), _0x5a3b5e[_0x5cf56a(0x25c)]('cursor', _0x5cf56a(0x26e)), _0x5a3b5e[_0x5cf56a(0x22e)](_0x5cf56a(0x1c7))[_0x5cf56a(0x22d)](_0x5cf56a(0x227) + _0x147d65 + _0x5cf56a(0x169)), _0x5a3b5e[_0x5cf56a(0x22e)](_0x5cf56a(0x1c7))[_0x5cf56a(0x25c)]({
            'width': _0x352dbb,
            'height': _0x5c2043,
            'margin-left': '-' + _0x663ce
        }), _0x5a3b5e[_0x5cf56a(0x25c)]({
            'height': _0x5c2043
        }), _0x5a3b5e[_0x5cf56a(0x25c)]({
            'display': _0x5cf56a(0x26d)
        }), _0x5a3b5e['find'](_0x5cf56a(0x231))['on']('click', function () {
            var _0xfcd870 = _0x5cf56a;
            _0x5a3b5e['unwrap'](), _0x5a3b5e[_0xfcd870(0x25c)]({
                'display': _0xfcd870(0x21d)
            }), $(_0xfcd870(0x17c))[_0xfcd870(0x1db)]();
        });
    }
    if (_0x59d9b2[_0x1d719c(0x13f)]) {
        _0x1b3f4d(_0x59d9b2);
        var _0x28c12a = 0x1;
        $('#' + _0x28c12a + _0x1d719c(0x12f))[_0x1d719c(0x218)](_0x5181ea), $('#' + _0x28c12a)[_0x1d719c(0x22e)](_0x1d719c(0x1c7))[_0x1d719c(0x163)]()[_0x1d719c(0x1ab)]('windactiv'), $(_0x1d719c(0x17c))['fadeIn'](), $(_0x1d719c(0x236))[_0x1d719c(0x1ab)](_0x1d719c(0x1ef));
    };
}

function _0x5978(_0x6adef4, _0x290fd0) {
    var _0x35d637 = _0x35d6();
    return _0x5978 = function (_0x59780e, _0x1a3deb) {
        _0x59780e = _0x59780e - 0x127;
        var _0x3b70be = _0x35d637[_0x59780e];
        return _0x3b70be;
    }, _0x5978(_0x6adef4, _0x290fd0);
}

function imgError(_0x3a95cd, _0x1c7b92) {
    var _0x4a7ff0 = _0x5978;
    return;
    return _0x3a95cd[_0x4a7ff0(0x230)] = '', _0x3a95cd['src'] = _0x4a7ff0(0x1d7), !![];
}

function imgF(_0x4b2d08) {
    var _0x2d9554 = _0x5978;
    return _0x4b2d08[_0x2d9554(0x165)](_0x2d9554(0x237)) != -0x1 ? _0x2d9554(0x185) + _0x4b2d08 : _0x4b2d08;
}

function fPrice(_0x1c40b5, _0x5e15a7) {
    var _0x50dda1 = _0x5978;
    return _0x1c40b5 ? _0x5e15a7 == -0x1 ? 'No Price' : parseFloat(_0x5e15a7)[_0x50dda1(0x270)](0x2) : _0x5e15a7 == -0x1 ? 0x0 : parseFloat(_0x5e15a7)['toFixed'](0x2);
}

function shuffle(_0x8e2f13) {
    var _0x59bbd6 = _0x5978;
    for (var _0x841541, _0x346a40, _0x5e355c = _0x8e2f13[_0x59bbd6(0x13f)]; _0x5e355c; _0x841541 = parseInt(Math[_0x59bbd6(0x1b3)]() * _0x5e355c), _0x346a40 = _0x8e2f13[--_0x5e355c], _0x8e2f13[_0x5e355c] = _0x8e2f13[_0x841541], _0x8e2f13[_0x841541] = _0x346a40);
    return _0x8e2f13;
}

function hasSoundsEnabled() {
    var _0x1f1085 = _0x5978;
    return !localStorage['getItem'](_0x1f1085(0x1b8));
}

function bindTooltips() {
    var _0x4b76b5 = _0x5978;
    Tipped['create'](_0x4b76b5(0x138));
}
var summa = 0x0,
    notyfs = [];

function selectItem(_0x395999) {
    var _0x5b476b = _0x5978,
        _0x28089d = $(_0x395999);
    _0x28089d[_0x5b476b(0x1ab)](_0x5b476b(0x256)), _0x28089d[_0x5b476b(0x156)]('onclick', 'unselectItem(this);');
    var _0x2953b4 = _0x28089d[_0x5b476b(0x253)](_0x5b476b(0x257))[_0x5b476b(0x218)]();
    if (_0x2953b4 == _0x5b476b(0x179)) _0x2953b4 = 0x0;
    summa += parseFloat(Number(_0x2953b4)), _0x28089d[_0x5b476b(0x22e)]()[_0x5b476b(0x187)](_0x5b476b(0x19b)) ? $('#selected_price_site')[_0x5b476b(0x218)](summa[_0x5b476b(0x270)](0x2)) : $(_0x5b476b(0x172))[_0x5b476b(0x218)](summa['toFixed'](0x2));
}

function unselectItem(_0x2142fb) {
    var _0x10eb5b = _0x5978,
        _0x39d984 = $(_0x2142fb);
    _0x39d984['removeClass'](_0x10eb5b(0x256)), _0x39d984[_0x10eb5b(0x156)]('onclick', _0x10eb5b(0x1c4));
    var _0x11728d = _0x39d984[_0x10eb5b(0x253)](_0x10eb5b(0x257))['text']();
    if (_0x11728d == _0x10eb5b(0x179)) _0x11728d = 0x0;
    summa = summa - parseFloat(_0x11728d), _0x39d984[_0x10eb5b(0x22e)]()['hasClass'](_0x10eb5b(0x19b)) ? $(_0x10eb5b(0x1b1))['text'](Math[_0x10eb5b(0x203)](summa[_0x10eb5b(0x270)](0x2))) : $(_0x10eb5b(0x172))[_0x10eb5b(0x218)](Math[_0x10eb5b(0x203)](summa[_0x10eb5b(0x270)](0x2)));
}

function withdraw() {
    var _0x1dee1b = _0x5978,
        _0x37a74f = parseFloat($('#inv_cost_site')[_0x1dee1b(0x218)]()),
        _0x193c0e = parseFloat($('#selected_price_site')[_0x1dee1b(0x218)]());
    _0x37a74f == 0x0 || _0x193c0e == 0x0 ? showNotification('No items selected') : $[_0x1dee1b(0x23a)]({
        'type': _0x1dee1b(0x1aa),
        'url': _0x1dee1b(0x171),
        'data': {
            'action': 'withdraw'
        },
        'success': function (_0x29b9ac) {
            showNotification(_0x29b9ac);
        }
    });
}

function setupDeposit() {
    var _0x59e942 = _0x5978;
    if (my_trade == '') {
        showNotification(_0x59e942(0x1cb));
        return;
    }
    var _0x6bc035 = [],
        _0x18466b = parseFloat($('#inv_cost')[_0x59e942(0x218)]()),
        _0x10b2cf = parseFloat($('#selected_price')['text']());
    if ($(_0x59e942(0x210))[_0x59e942(0x13f)] == 0x0 || minSumBet > _0x10b2cf) {
        showNotification('You bet less than minimum!');
        return;
    }
    $('.inventar .item.active')[_0x59e942(0x23d)](function (_0x520ba5) {
        var _0x1652cb = _0x59e942;
        _0x6bc035['push']($(this)[_0x1652cb(0x156)]('data-xi')), _0x18466b -= parseFloat($(this)[_0x1652cb(0x253)](_0x1652cb(0x15c))[_0x1652cb(0x218)]()), $(this)['remove']();
    }), $('#inv_cost')[_0x59e942(0x218)](_0x18466b[_0x59e942(0x270)](0x2)), $(_0x59e942(0x172))[_0x59e942(0x218)]('0'), summa = 0x0, socket[_0x59e942(0x1bf)](_0x59e942(0x228), [iid, _0x6bc035]), showGoodNotification(_0x59e942(0x240));
}

function setupSiteDeposit() {
    var _0x1fabec = _0x5978;
    if (my_trade == '') {
        showNotification(_0x1fabec(0x1cb));
        return;
    }
    var _0x2aa04f = [],
        _0x33d936 = parseFloat($('#inv_cost_site')[_0x1fabec(0x218)]()),
        _0xcded19 = parseFloat($(_0x1fabec(0x1b1))[_0x1fabec(0x218)]());
    if ($(_0x1fabec(0x196))[_0x1fabec(0x13f)] == 0x0 || minSumBet > _0xcded19) {
        showNotification('You bet less than minimum!');
        return;
    }
    $(_0x1fabec(0x196))[_0x1fabec(0x23d)](function (_0x343030) {
        var _0x5861f0 = _0x1fabec;
        _0x2aa04f['push']($(this)[_0x5861f0(0x156)](_0x5861f0(0x269))), _0x33d936 -= parseFloat($(this)['find'](_0x5861f0(0x15c))[_0x5861f0(0x218)]()), $(this)['remove']();
    }), $(_0x1fabec(0x26a))[_0x1fabec(0x218)](_0x33d936[_0x1fabec(0x270)](0x2)), $(_0x1fabec(0x1b1))['text']('0'), summa = 0x0, socket[_0x1fabec(0x1bf)](_0x1fabec(0x1b5), {
        'steamid': iid,
        'items': _0x2aa04f
    }), showNotification(_0x1fabec(0x240));
}

function sortInventory(_0x5caec2) {
    var _0x343c67 = _0x5978;
    sortInv = _0x5caec2, my_inventory[_0x343c67(0x1e8)](function (_0x104afd, _0x17fb0d) {
        return sortInv && _0x104afd[0x2] >= _0x17fb0d[0x2] || !sortInv && _0x104afd[0x2] < _0x17fb0d[0x2] ? 0x1 : -0x1;
    }), $(_0x343c67(0x18f))[_0x343c67(0x266)](), $(_0x343c67(0x172))['text']('0'), summa = 0x0, my_inventory[_0x343c67(0x182)](function (_0xc7d6d3) {
        var _0x48200d = _0x343c67;
        $(_0x48200d(0x18f))[_0x48200d(0x1da)]('<div class=\"item\" data-xi=\"' + _0xc7d6d3[0x0] + _0x48200d(0x133) + escapeHtml(_0xc7d6d3[0x1]) + '\"></div><div class=\"item_info\"><label>' + fPrice(0x1, _0xc7d6d3[0x2]) + _0x48200d(0x225));
    });
}

function sortSiteInventory(_0xa7a873) {
    var _0x315751 = _0x5978;
    sortSiteInv = _0xa7a873, $[_0x315751(0x23a)]({
        'type': _0x315751(0x1aa),
        'url': _0x315751(0x171),
        'data': {
            'action': _0x315751(0x1f5)
        },
        'success': function (_0x1b8e8a) {
            var _0x2250a6 = _0x315751;
            $(_0x2250a6(0x1b1))['text']('0'), summa = 0x0, site_inventory = JSON[_0x2250a6(0x1b6)](_0x1b8e8a), $(_0x2250a6(0x206))[_0x2250a6(0x266)](), site_inventory[_0x2250a6(0x1e8)](function (_0x86fca0, _0x25ec53) {
                var _0x3f794e = _0x2250a6;
                return sortSiteInv && _0x86fca0[_0x3f794e(0x20f)] >= _0x25ec53[_0x3f794e(0x20f)] || !sortSiteInv && _0x86fca0[_0x3f794e(0x20f)] < _0x25ec53['price'] ? 0x1 : -0x1;
            }), site_inventory[_0x2250a6(0x182)](function (_0x1dd74a) {
                var _0x2ba886 = _0x2250a6;
                $(_0x2ba886(0x206))[_0x2ba886(0x1da)](_0x2ba886(0x1ba) + _0x1dd74a['_id']['$oid'] + _0x2ba886(0x1e3) + _0x1dd74a[_0x2ba886(0x23f)] + _0x2ba886(0x178) + escapeHtml(_0x1dd74a[_0x2ba886(0x154)]) + '\"></div><div class=\"item_info\"><label>' + fPrice(0x1, _0x1dd74a[_0x2ba886(0x20f)]) + _0x2ba886(0x225));
            });
        }
    });
}

function selectInventoryAll(_0x480675) {
    var _0x960c4e = _0x5978;
    $('#selected_price')[_0x960c4e(0x218)]('0'), summa = 0x0, $(_0x960c4e(0x23b))[_0x960c4e(0x23d)](function (_0x2e4a67) {
        selectItem(this);
    });
}

function selectSiteInventoryAll(_0xeeec33) {
    var _0x385157 = _0x5978;
    $(_0x385157(0x1b1))[_0x385157(0x218)]('0'), summa = 0x0, $(_0x385157(0x195))[_0x385157(0x23d)](function (_0x1781a9) {
        selectItem(this);
    });
}
jQuery['fn'][_0x3cde52(0x1b3)] = function () {
    var _0x222f0f = _0x3cde52,
        _0x482af4 = Math[_0x222f0f(0x242)](Math[_0x222f0f(0x1b3)]() * this[_0x222f0f(0x13f)]);
    return jQuery(this[_0x482af4]);
};
var socket = null,
    LAST_SCROLL_POS = 0x0,
    current_game_items = [],
    my_inventory = [],
    sortInv = !![],
    site_inventory = [],
    sortSiteInv = !![];
$(function () {
    var _0x20fd30 = _0x3cde52;
    $('.dial')[_0x20fd30(0x1f3)]({
        'min': 0x0,
        'max': 0x5a,
        'readOnly': !0x0,
        'fgColor': '#ebcd36',
        'width': 0x100,
        'height': 0x100,
        'thickness': 0.05,
        'format': function (_0xf588dd) {
            var _0x392a77 = _0x20fd30;
            return '$' + Number($(_0x392a77(0x160))[_0x392a77(0x15e)](_0x392a77(0x1bb)))[_0x392a77(0x270)](0x2);
        },
        'draw': function () {
            var _0x30aa24 = _0x20fd30;
            $(_0x30aa24(0x248))['css'](_0x30aa24(0x267), '32px', _0x30aa24(0x12a), _0x30aa24(0x1d5))[_0x30aa24(0x25c)](_0x30aa24(0x176), _0x30aa24(0x274));
        }
    }), $(_0x20fd30(0x13b)) && hasSoundsEnabled() && $(_0x20fd30(0x13b))['attr'](_0x20fd30(0x220), !0x0), bindTooltips(), $('#toggleSounds')['on']('change', function (_0x4c1508) {
        var _0x1f8c31 = _0x20fd30;
        hasSoundsEnabled() ? localStorage[_0x1f8c31(0x208)]('muteSounds', !0x0) : localStorage['removeItem'](_0x1f8c31(0x1b8));
    }), $(_0x20fd30(0x17e))['on']('click', function (_0x1d60e6) {
        var _0x5e0a49 = _0x20fd30;
        _0x1d60e6[_0x5e0a49(0x24b)](), $(this)[_0x5e0a49(0x22e)]()[_0x5e0a49(0x22e)]()[_0x5e0a49(0x22e)]()[_0x5e0a49(0x140)](0xfa, function () {
            var _0x5ca217 = _0x5e0a49;
            $(this)[_0x5ca217(0x25f)]();
        });
    }), $(_0x20fd30(0x26f))['on'](_0x20fd30(0x17f), function (_0xa50d3c) {
        _0x2ac617();
    }), $(_0x20fd30(0x217))['on'](_0x20fd30(0x17f), function (_0x532a86) {
        var _0x26c73e = _0x20fd30;
        _0x532a86['preventDefault'](), $(_0x26c73e(0x276))[_0x26c73e(0x137)]();
    }), $(_0x20fd30(0x1d6))['on'](_0x20fd30(0x17f), function (_0x4cccca) {
        var _0x22fd6e = _0x20fd30;
        _0x4cccca[_0x22fd6e(0x24b)](), $depositDiv = $(_0x22fd6e(0x16a))[_0x22fd6e(0x22e)](), $('body')['animate']({
            'scrollTop': $depositDiv[_0x22fd6e(0x1d8)]()[_0x22fd6e(0x166)] - $depositDiv[_0x22fd6e(0x129)]()
        }, 0x1f4), $depositDiv['animateHighlight'](_0x22fd6e(0x249), 0x5dc);
    }), $(_0x20fd30(0x23e))['on'](_0x20fd30(0x17f), function (_0x2705c9) {
        var _0x36111d = _0x20fd30;
        if (_0x2705c9[_0x36111d(0x24b)](), !$(_0x36111d(0x1ea))['data'](_0x36111d(0x14e))) return void(window[_0x36111d(0x1fb)] = _0x36111d(0x20c));
        var _0x101426 = _0x36111d(0x1a6);
        _0x101426 += '<br><br>If you would like to participate, please put <strong>' + siteDomain + _0x36111d(0x1bc), _0x101426 += '<br><br>After you have added it, click on \"Continue\" to proceed.';
        var _0x16c189 = showPopup('Step 1: Have ' + siteDomain + _0x36111d(0x13a), _0x101426, [{
            'class': _0x36111d(0x1f8),
            'text': _0x36111d(0x144) + siteDomain + _0x36111d(0x271)
        }, {
            'class': _0x36111d(0x20b),
            'text': _0x36111d(0x1fe)
        }]);
        _0x16c189['find'](_0x36111d(0x1ce))['on'](_0x36111d(0x17f), function (_0x270e47) {
            var _0x47f258 = _0x36111d,
                _0x32bcc5 = $(this)['index']();
            return 0x1 == _0x32bcc5 ? closePopup() : void($(this)[_0x47f258(0x187)](_0x47f258(0x152)) || ($(this)[_0x47f258(0x1ab)](_0x47f258(0x152)), socket['emit'](_0x47f258(0x223))));
        });
    }), socket = io(sck_url, {
        'secure': !![]
    });
    var _0x49fc8b = ![],
        _0x2320cc = ![];
    socket['on'](_0x20fd30(0x245), function () {
        var _0x60435d = _0x20fd30;
        console[_0x60435d(0x1ff)](_0x60435d(0x170));
    });
    if (location[_0x20fd30(0x135)] != '/' && location[_0x20fd30(0x135)] != '') return;
    socket['on']('informers', function (_0x4bb3dc) {
        var _0x5e4b67 = _0x20fd30;
        if (_0x4bb3dc[_0x5e4b67(0x1a2)]) $(_0x5e4b67(0x263))['html'](_0x4bb3dc[_0x5e4b67(0x1a2)][_0x5e4b67(0x270)]());
        if (_0x4bb3dc[_0x5e4b67(0x250)]) $('.Total_24hr span')['html'](_0x4bb3dc[_0x5e4b67(0x250)][_0x5e4b67(0x270)]());
        if (_0x4bb3dc[_0x5e4b67(0x1b2)]) $('.Biggest_Pot span')[_0x5e4b67(0x19a)](_0x4bb3dc[_0x5e4b67(0x1b2)][_0x5e4b67(0x270)]());
        if (_0x4bb3dc[_0x5e4b67(0x1c3)]) $(_0x5e4b67(0x20e))[_0x5e4b67(0x19a)](_0x4bb3dc['inf7'][_0x5e4b67(0x270)]());
    }), socket['on']('last-winner', function (_0x1de4a0) {
        var _0x5bc1ec = _0x20fd30,
            _0x259371 = '';
        _0x1de4a0[_0x5bc1ec(0x15d)][_0x5bc1ec(0x182)](function (_0xcff0fa, _0x52a2cf) {
            var _0x168e04 = _0x5bc1ec;
            _0x259371 += _0x168e04(0x216) + imgF(escapeHtml(_0xcff0fa[_0x168e04(0x18c)])) + _0x168e04(0x18e) + _0xcff0fa[_0x168e04(0x23f)] + '\">' + escapeHtml(_0xcff0fa[_0x168e04(0x19e)]) + _0x168e04(0x155) + _0xcff0fa[_0x168e04(0x222)] + _0x168e04(0x15b) + _0xcff0fa['items']['length'] + _0x168e04(0x259) + Number(_0xcff0fa[_0x168e04(0x1be)])['toFixed'](0x2) + _0x168e04(0x238);
            for (var _0x291d52 = 0x0; _0x291d52 < (_0xcff0fa['items'][_0x168e04(0x13f)] >= 0x4 ? 0x4 : _0xcff0fa['items'][_0x168e04(0x13f)]); _0x291d52++) {
                _0x259371 += '<img class=\"showTooltip\" title=\"' + _0xcff0fa[_0x168e04(0x202)][_0x291d52][_0x168e04(0x191)] + ' $' + fPrice(0x1, _0xcff0fa[_0x168e04(0x202)][_0x291d52][_0x168e04(0x20f)]) + _0x168e04(0x1a3) + escapeHtml(_0xcff0fa[_0x168e04(0x202)][_0x291d52][_0x168e04(0x154)]) + '\">';
            }
            _0x259371 += _0x168e04(0x186) + _0xcff0fa[_0x168e04(0x12c)][_0x168e04(0x270)](0x0) + _0x168e04(0x225);
        }), $(_0x5bc1ec(0x215))[_0x5bc1ec(0x140)](0x96, function () {
            var _0x2487b2 = _0x5bc1ec;
            $(this)[_0x2487b2(0x19a)](_0x259371)[_0x2487b2(0x163)](0x96), bindTooltips();
        }), $('.winnerlist')[_0x5bc1ec(0x156)](_0x5bc1ec(0x21e), _0x1de4a0[_0x5bc1ec(0x15d)][0x0][_0x5bc1ec(0x222)]);
    }), socket['on']('timer', function (_0x4da783) {
        var _0x41de82 = _0x20fd30;
        $(_0x41de82(0x160))[_0x41de82(0x15e)]('cd', _0x4da783), _0x4da783 == 0x0 ? $(_0x41de82(0x1f6))[_0x41de82(0x19a)]('0') : $(_0x41de82(0x1f9))[_0x41de82(0x19a)](_0x41de82(0x132) + _0x4da783 + _0x41de82(0x1fc)), $(_0x41de82(0x1f6))[_0x41de82(0x19a)](_0x4da783), $(_0x41de82(0x248))[_0x41de82(0x1e6)](_0x4da783)['trigger'](_0x41de82(0x15f));
    }), socket['on'](_0x20fd30(0x17b), function (_0x4654a9) {
        var _0x2674f9 = _0x20fd30;
        _0x4654a9[_0x2674f9(0x23f)] == iid && (_0x4654a9['sentOfferId'] == 0x0 ? (showConfirmNotification(_0x2674f9(0x201)), $(_0x2674f9(0x231))['remove']()) : showWinnerPopup(_0x4654a9));
    }), socket['on'](_0x20fd30(0x209), function (_0x1d045d) {
        var _0x5b955c = _0x20fd30,
            _0x3f6575 = showPopup(_0x1d045d[_0x5b955c(0x200)], _0x1d045d[_0x5b955c(0x143)], [{
                'class': _0x5b955c(0x20b),
                'text': _0x5b955c(0x1dc)
            }]);
        _0x3f6575[_0x5b955c(0x253)](_0x5b955c(0x1ce))['on'](_0x5b955c(0x17f), closePopup);
    }), socket['on'](_0x20fd30(0x1e2), function (_0x3a6a88) {
        var _0x416f4f = _0x20fd30,
            _0x25a59a = $(_0x416f4f(0x1fa))[_0x416f4f(0x21f)](_0x416f4f(0x1d9));
        _0x25a59a[_0x416f4f(0x266)](), $[_0x416f4f(0x23d)](_0x3a6a88['order'], function (_0x5490e7, _0x1ff140) {
            var _0x40233e = _0x416f4f,
                _0x985677 = _0x40233e(0x252) + _0x1ff140[_0x40233e(0x23f)] + _0x40233e(0x19d) + _0x3a6a88[_0x40233e(0x15d)][_0x1ff140[_0x40233e(0x23f)]][_0x40233e(0x1be)][_0x40233e(0x270)](0x2) + _0x40233e(0x1ac) + imgF(_0x3a6a88[_0x40233e(0x15d)][_0x1ff140[_0x40233e(0x23f)]][_0x40233e(0x18c)]) + _0x40233e(0x262) + _0x1ff140[_0x40233e(0x23f)] + '\">' + _0x3a6a88[_0x40233e(0x15d)][_0x1ff140[_0x40233e(0x23f)]][_0x40233e(0x14e)] + _0x40233e(0x128) + _0x3a6a88[_0x40233e(0x15d)][_0x1ff140[_0x40233e(0x23f)]]['count'] + _0x40233e(0x20a) + _0x3a6a88[_0x40233e(0x15d)][_0x1ff140['steamid']][_0x40233e(0x1be)][_0x40233e(0x270)](0x2) + _0x40233e(0x130) + _0x3a6a88[_0x40233e(0x15d)][_0x1ff140[_0x40233e(0x23f)]][_0x40233e(0x12c)]['toFixed'](0x2) + '</div><div class=\"clear\"></div></div>';
            _0x25a59a[_0x40233e(0x1da)](_0x985677), mgx == 0x9 && ymka(_0x1ff140[_0x40233e(0x23f)]);
        });
    }), socket['on'](_0x20fd30(0x22a), function (_0x2a5785) {
        var _0x1d4808 = _0x20fd30;
        if (_0x2a5785 == 'empty') return showNotification(_0x1d4808(0x214));
        else {
            if (_0x2a5785 == _0x1d4808(0x204)) return showNotification(_0x1d4808(0x1ed));
            else {
                if (!_0x2a5785) return showNotification('Warning: There was a problem loading your inventory...');
            }
        }
        var _0x15ffea = 0x0;
        $(_0x1d4808(0x18f))['empty'](), my_inventory = _0x2a5785, my_inventory[_0x1d4808(0x1e8)](function (_0x2262b4, _0x21f9d0) {
            return sortInv && _0x2262b4[0x2] > _0x21f9d0[0x2] || !sortInv && _0x2262b4[0x2] < _0x21f9d0[0x2] ? 0x1 : -0x1;
        }), my_inventory['forEach'](function (_0x2f8b74) {
            var _0x5cee3c = _0x1d4808;
            $(_0x5cee3c(0x18f))[_0x5cee3c(0x1da)](_0x5cee3c(0x219) + _0x2f8b74[0x0] + '\" onclick=\"selectItem(this)\"><div class=\"item_pic\"><img onerror=\"imgError(this);\" src=\"' + escapeHtml(_0x2f8b74[0x1]) + _0x5cee3c(0x12e) + fPrice(0x1, _0x2f8b74[0x2]) + _0x5cee3c(0x225)), _0x15ffea += parseFloat(fPrice(0x0, _0x2f8b74[0x2]));
        }), $(_0x1d4808(0x260))[_0x1d4808(0x218)](_0x15ffea[_0x1d4808(0x270)](0x2));
    }), socket['on'](_0x20fd30(0x1cf), function (_0x48143f) {
        var _0x248ab7 = _0x20fd30;
        if (_0x48143f == _0x248ab7(0x266)) {} else {
            if (_0x48143f == _0x248ab7(0x204)) return showNotification(_0x248ab7(0x1c1));
            else {
                if (!_0x48143f) return showNotification(_0x248ab7(0x213));
            }
        }
        $[_0x248ab7(0x23a)]({
            'type': _0x248ab7(0x1aa),
            'url': _0x248ab7(0x171),
            'data': {
                'action': _0x248ab7(0x1f5)
            },
            'success': function (_0x316964) {
                var _0x2bb02a = _0x248ab7;
                site_inventory = JSON['parse'](_0x316964);
                var _0x5dab74 = 0x0;
                $(_0x2bb02a(0x206))[_0x2bb02a(0x266)](), site_inventory[_0x2bb02a(0x1e8)](function (_0x25b208, _0xc9fbe6) {
                    var _0x4ca35c = _0x2bb02a;
                    return sortSiteInv && _0x25b208[_0x4ca35c(0x20f)] > _0xc9fbe6[_0x4ca35c(0x20f)] || !sortSiteInv && _0x25b208[_0x4ca35c(0x20f)] < _0xc9fbe6[_0x4ca35c(0x20f)] ? 0x1 : -0x1;
                }), site_inventory[_0x2bb02a(0x182)](function (_0x32f335) {
                    var _0x31b6b7 = _0x2bb02a;
                    $(_0x31b6b7(0x206))[_0x31b6b7(0x1da)](_0x31b6b7(0x1ba) + _0x32f335[_0x31b6b7(0x1cd)][_0x31b6b7(0x211)] + _0x31b6b7(0x1e3) + _0x32f335['steamid'] + _0x31b6b7(0x178) + escapeHtml(_0x32f335[_0x31b6b7(0x154)]) + _0x31b6b7(0x12e) + fPrice(0x1, _0x32f335[_0x31b6b7(0x20f)]) + _0x31b6b7(0x225)), _0x5dab74 += parseFloat(fPrice(0x0, _0x32f335['price']));
                }), $(_0x2bb02a(0x26a))[_0x2bb02a(0x218)](_0x5dab74[_0x2bb02a(0x270)](0x2));
            }
        });
    }), socket['on']('0', function (_0x46da21) {
        var _0x3e49c2 = _0x20fd30;
        current_game_items = _0x46da21['items'][_0x3e49c2(0x1eb)](current_game_items), current_game_items['sort'](function (_0x2601ed, _0x317fb4) {
            var _0x284ab9 = _0x3e49c2;
            return _0x2601ed[_0x284ab9(0x20f)] - _0x317fb4['price'];
        }), $(_0x3e49c2(0x153))[_0x3e49c2(0x21f)](_0x3e49c2(0x1d9))['empty']();
        for (var _0x3fa15e = 0x0; _0x3fa15e < current_game_items['length']; _0x3fa15e++) {
            $('#item_list')[_0x3e49c2(0x21f)](_0x3e49c2(0x1d9))[_0x3e49c2(0x22d)](_0x3e49c2(0x232) + current_game_items[_0x3fa15e]['steamid'] + _0x3e49c2(0x178) + escapeHtml(current_game_items[_0x3fa15e][_0x3e49c2(0x154)]) + _0x3e49c2(0x18b) + fPrice(0x1, current_game_items[_0x3fa15e]['price']) + '</strong></small><label>' + current_game_items[_0x3fa15e][_0x3e49c2(0x191)] + '</label></div><div class=\"clear\"></div></div>');
        }
        $(_0x3e49c2(0x200))[_0x3e49c2(0x218)](_0x46da21[_0x3e49c2(0x202)][_0x46da21['items'][_0x3e49c2(0x13f)] - 0x1][_0x3e49c2(0x251)][_0x3e49c2(0x270)](0x0) + _0x3e49c2(0x275) + siteDomain), $(_0x3e49c2(0x160))[_0x3e49c2(0x15e)](_0x3e49c2(0x1bb), _0x46da21[_0x3e49c2(0x202)][_0x46da21[_0x3e49c2(0x202)][_0x3e49c2(0x13f)] - 0x1][_0x3e49c2(0x251)][_0x3e49c2(0x270)](0x2))[_0x3e49c2(0x15e)](_0x3e49c2(0x141), _0x46da21['allcount']), $(_0x3e49c2(0x248))[_0x3e49c2(0x15a)]({
            'toValue': $(_0x3e49c2(0x160))[_0x3e49c2(0x15e)](_0x3e49c2(0x1bb)),
            'rounding': 0x2,
            'duration': 0x3e8
        }), $(_0x3e49c2(0x24a))['text'](_0x3e49c2(0x18d) + _0x46da21[_0x3e49c2(0x205)]), $(_0x3e49c2(0x22f))[_0x3e49c2(0x19a)](_0x46da21[_0x3e49c2(0x14d)] + _0x3e49c2(0x136) + (0x1 == _0x46da21[_0x3e49c2(0x14d)] ? '' : 's'));
    }), socket['on'](_0x20fd30(0x1b7), function (_0x226b39) {
        var _0xfbe39e = _0x20fd30,
            _0x4263f4 = $(_0xfbe39e(0x16f));
        LAST_SCROLL_POS = _0x4263f4[_0xfbe39e(0x21f)](_0xfbe39e(0x149))[_0xfbe39e(0x188)](), _0x226b39[_0xfbe39e(0x1f4)](), _0x226b39[_0xfbe39e(0x182)](function (_0x3e287f) {
            var _0x454468 = _0xfbe39e,
                _0x29f9be = '>';
            if (typeof _0x3e287f['z'] != _0x454468(0x1a0)) {
                _0x3e287f['z'] == 0x2 && (_0x29f9be = _0x454468(0x192));
                if (mgx == 0x9) {
                    if (_0x3e287f['z'] == 0x1) _0x29f9be = ' style=\'color:#00e5ff\'>';
                    else _0x3e287f['z'] == 0x3 && (_0x29f9be = _0x454468(0x1e9));
                }
            }
            _0x4263f4[_0x454468(0x21f)](_0x454468(0x1d9))[_0x454468(0x1da)](_0x454468(0x162) + _0x3e287f['id'] + _0x454468(0x16d) + _0x3e287f['id'] + _0x454468(0x1ca) + imgF(escapeHtml(_0x3e287f[_0x454468(0x18c)])) + _0x454468(0x131) + _0x29f9be + _0x454468(0x1c6) + _0x3e287f['id'] + '\">' + escapeHtml(_0x3e287f[_0x454468(0x19e)]) + _0x454468(0x258) + escapeHtml(_0x3e287f[_0x454468(0x218)]) + '</div></div><div class=\"clear\"></div></div>'), mgx == 0x9 && mxc();
        }), scrollChatToBottom(!0x1);
    }), socket['on']('dcxy', function (_0x481546) {
        $('.chatmsg[data-id=\"' + escapeHtml(_0x481546) + '\"]')['remove']();
    }), socket['on'](_0x20fd30(0x158), function (_0x1b2acf) {
        var _0xb57a2e = _0x20fd30;
        console['log'](_0x1b2acf), showWinnerUI(_0x1b2acf), $(_0xb57a2e(0x200))[_0xb57a2e(0x218)](siteDomain), $(_0xb57a2e(0x248))[_0xb57a2e(0x15a)]({
            'toValue': 0x0,
            'rounding': 0x2,
            'duration': 0x3e8
        }), $(_0xb57a2e(0x22f))['html']('0 items'), $('#participant_list')[_0xb57a2e(0x21f)](_0xb57a2e(0x1d9))[_0xb57a2e(0x266)](), $(_0xb57a2e(0x153))[_0xb57a2e(0x21f)]('getContentElement')[_0xb57a2e(0x266)](), current_game_items = [];
    }), socket['on'](_0x20fd30(0x159), function (_0x5f4fea) {
        showNotification(_0x5f4fea);
    }), socket['on']('imsg', function (_0x3745ee) {
        var _0xab9eaf = _0x20fd30;
        iid != '' && _0x3745ee['id'] + '' == iid + '' && (typeof _0x3745ee['at'] !== _0xab9eaf(0x1a0) ? ($('#urlAcceptTrade')[_0xab9eaf(0x156)](_0xab9eaf(0x1ec), _0xab9eaf(0x16e) + _0x3745ee['at']), PopUpShow()) : _0x3745ee['ia'] ? showConfirmNotification(_0x3745ee[_0xab9eaf(0x218)]) : showPersonalNotification(_0x3745ee[_0xab9eaf(0x218)]));
    }), socket['on'](_0x20fd30(0x13c), function (_0x420fa9) {
        var _0x5ec238 = _0x20fd30;
        if (typeof notyfs['a'] == 'undefined') {
            notyfs['a'] = 0x1, setTimeout(function () {
                delete notyfs['a'];
            }, 0xbb8);
            if (_0x420fa9['c'] == 0x0) showNotification(_0x5ec238(0x273));
            else {
                if (_0x420fa9['c'] == 0x1) showNotification(_0x5ec238(0x180), 'Please, wait trade offer!');
                else _0x420fa9['c'] == 0x2 && _0x2ac617();
            }
        }
    }), socket['on']('errtrade', function (_0x4c5054) {
        var _0x52d560 = _0x20fd30;
        if (typeof notyfs['c' + _0x4c5054['c']] == 'undefined') {
            notyfs['c' + _0x4c5054['c']] = 0x1, setTimeout(function () {
                delete notyfs['c' + _0x4c5054['c']];
            }, 0xbb8);
            switch (_0x4c5054['c']) {
            case 0x1:
                showNotification('Warning: your trade has greater then Max items count!');
                break;
            case 0x2:
                showNotification('Warning: your trade is cancel. You need connect Steam Guard on you Steam account.');
                break;
            case 0x3:
                showNotification(_0x52d560(0x16b));
                break;
            case 0x4:
                showNotification(_0x52d560(0x1df));
                break;
            case 0x5:
                showNotification(_0x52d560(0x1d2));
                break;
            case 0x6:
                showNotification('Warning: Your bet is less than the minimum!');
                break;
            case 0x7:
                showNotification('Warning: When sending a trade an error occurred, if you did not receive the items, please report it in support with the game number and the link reference.');
            case 0x8:
                showNotification(_0x52d560(0x1e0));
                break;
            case 0x9:
                $(_0x52d560(0x25b))[_0x52d560(0x1d0)](), $(_0x52d560(0x1e5))[0x0][_0x52d560(0x18a)](), $(_0x52d560(0x277))['on']('click', function () {
                    var _0x375922 = _0x52d560;
                    $['modal'][_0x375922(0x16c)](), $(_0x375922(0x1e5))[0x0]['pause']();
                });
                break;
            default:
                break;
            }
        }
    }), $(_0x20fd30(0x1ad))['on'](_0x20fd30(0x19f), function (_0x28f9fa) {
        var _0x53a881 = _0x20fd30;
        _0x28f9fa['preventDefault'](), socket['emit']('chat', {
            'msg': $(this)[_0x53a881(0x253)](_0x53a881(0x207))[_0x53a881(0x1e6)](),
            'name': MyName,
            'id': iid,
            'ava': MyAvatar
        }), ($(this)[_0x53a881(0x253)]('input[type=text]')['val']('')['attr'](_0x53a881(0x152), !0x0), scrollChatToBottom(!0x0), setTimeout(function () {
            var _0x5b7b0b = _0x53a881;
            $(_0x5b7b0b(0x247))['removeAttr'](_0x5b7b0b(0x152))[_0x5b7b0b(0x1cc)]();
        }, 0x1f4));
    }), socket['emit']('0'), socket['emit']('vi', iid);

    function _0x2ac617() {
        var _0x47cec5 = _0x20fd30;
        $('#selected_price')[_0x47cec5(0x218)]('0'), summa = 0x0, socket[_0x47cec5(0x1bf)](_0x47cec5(0x21c), iid);
    }
    window[_0x20fd30(0x17a)] = _0x2ac617;

    function _0x4c423f() {
        var _0x56260a = _0x20fd30;
        $(_0x56260a(0x1b1))['text']('0'), summa = 0x0, socket[_0x56260a(0x1bf)](_0x56260a(0x24e), iid);
    }
    window['reloadSiteInventory'] = _0x4c423f, iid !== '' && (_0x2ac617(), _0x4c423f()), socket['on'](_0x20fd30(0x1c9), closePopup), setTimeout(function () {
        scrollChatToBottom(!0x0);
    }, 0x0), $(_0x20fd30(0x12d))[_0x20fd30(0x21f)]();
});
var notLocked = !0x0;
$['fn'][_0x3cde52(0x142)] = function (_0x3561d1, _0x67f735) {
    var _0x13ecbc = _0x3cde52,
        _0x1382e7 = _0x3561d1 || _0x13ecbc(0x139),
        _0x5e2ab3 = _0x67f735 || 0x5dc,
        _0x299bfc = this[_0x13ecbc(0x25c)](_0x13ecbc(0x1b0));
    notLocked && (notLocked = !0x1, this[_0x13ecbc(0x17d)]()[_0x13ecbc(0x25c)]('background-color', _0x1382e7)[_0x13ecbc(0x173)]({
        'backgroundColor': _0x299bfc
    }, _0x5e2ab3), setTimeout(function () {
        notLocked = !0x0;
    }, _0x5e2ab3));
};