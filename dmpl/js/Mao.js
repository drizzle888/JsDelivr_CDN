/*
 *Progcessed By JSDec in 4.02s
 *JSDec - JSDec.js.org
 */
var _0x5b8e5c = function() {
    var _0x40ee59 = !![];
    return function(_0x2796f2, _0x2529c0) {
        var _0xe690f3 = _0x40ee59 ? function() {
            if (_0x2529c0) {
                var _0x49dd75 = _0x2529c0['apply'](_0x2796f2, arguments);
                _0x2529c0 = null;
                return _0x49dd75;
            }
        } : function() {};
        _0x40ee59 = ![];
        return _0xe690f3;
    };
}();
var _0xe375ab = _0x5b8e5c(this, function() {
    var _0x2d04a0 = function() {
            return 'dev';
        },
        _0xd05106 = function() {
            return 'window';
        };
    var _0x3f7104 = function() {
        var _0x3458cc = new RegExp('\\w+ *\\(\\) *{\\w+ *[\'|\"].+[\'|\"];? *}');
        return !_0x3458cc['test'](_0x2d04a0['toString']());
    };
    var _0x234f00 = function() {
        var _0x1c26a2 = new RegExp('(\\\\[x|u](\\w){2,4})+');
        return _0x1c26a2['test'](_0xd05106['toString']());
    };
    var _0x8667e0 = function(_0x510e52) {
        var _0x23fffa = ~-0x1 >> 0x1 + 0xff % 0x0;
        // if (_0x510e52['indexOf']('i' === _0x23fffa)) {
        //     _0x4e678c(_0x510e52);
        // }
    };
    var _0x4e678c = function(_0x1db1cf) {
        var _0x20c6f5 = ~-0x4 >> 0x1 + 0xff % 0x0;
        if (_0x1db1cf['indexOf']((!![] + '')[0x3]) !== _0x20c6f5) {
            _0x8667e0(_0x1db1cf);
        }
    };
    if (!_0x3f7104()) {
        if (!_0x234f00()) {
            _0x8667e0('indеxOf');
        } else {
            _0x8667e0('indexOf');
        }
    } else {
        _0x8667e0('indеxOf');
    }
});
_0xe375ab();
var token_key = CryptoJS['enc']['Utf8']['parse']('8FB5006902F91320');
var token_iv = CryptoJS['enc']['Utf8']['parse'](le_token);

function encrypt(_0x1159ac) {
    return CryptoJS['AES']['encrypt'](_0x1159ac, token_key, {
        'iv': token_iv,
        'mode': CryptoJS['mode']['CBC']
    })['toString']();
}

function decrypt(_0x5b5c9f) {
    return CryptoJS['AES']['decrypt'](_0x5b5c9f, token_key, {
        'iv': token_iv
    })['toString'](CryptoJS['enc']['Utf8']);
}
var lele = {
    'Weixin': function() {
        var _0x5568f6 = navigator['userAgent']['toLowerCase']();
        return /micromessenger/ ['test'](_0x5568f6) ? !![] : ![];
    },
    'start': function() {
        var _0x33e39a = {
            'OReiA': function(_0x2de485) {
                return _0x2de485();
            },
            'rDLaw': 'group_id',
            'kSVQc': function(_0x27c23f, _0x4d6286) {
                return _0x27c23f == _0x4d6286;
            },
            'ZAKjJ': 'true',
            'fLvYG': function(_0x48ccbe, _0x5bd56c) {
                return _0x48ccbe === _0x5bd56c;
            },
            'AzPNb': 'kixzf',
            'vvHZG': function(_0x1f69f5, _0x1019d2) {
                return _0x1f69f5 < _0x1019d2;
            },
            'UxIzT': function(_0x25a2da, _0x2e7b84) {
                return _0x25a2da == _0x2e7b84;
            },
            'qkPKA': function(_0x45f204, _0x42c4ff) {
                return _0x45f204 != _0x42c4ff;
            },
            'ENSDz': function(_0x28b50e, _0x563f3b) {
                return _0x28b50e == _0x563f3b;
            },
            'KgJXy': function(_0x26bfbf, _0x1c7974) {
                return _0x26bfbf !== _0x1c7974;
            },
            'OHoJB': 'Hlnuc',
            'wSWpB': function(_0x3577bb, _0x386223, _0x2dcb3e, _0x5e02ff) {
                return _0x3577bb(_0x386223, _0x2dcb3e, _0x5e02ff);
            },
            'qPZcQ': './api.php',
            'MdPoz': 'json'
        };
        $['ajax']({
            'url': _0x33e39a['qPZcQ'],
            'dataType': _0x33e39a['MdPoz'],
            'success': function(_0x16155a) {
                danmuon = _0x16155a['data']['danmuon'];
                up['pbgjz'] = _0x16155a['data']['pbgjz'];
                up['trysee'] = _0x16155a['data']['trytime'];
                config['logo'] = _0x16155a['data']['logo'];
                config['bjt'] = _0x16155a['data']['ads']['pause']['bjt'];
                config['pic'] = _0x16155a['data']['ads']['pause']['pic'];
                config['sendtime'] = _0x16155a['data']['sendtime'];
                config['color'] = _0x16155a['data']['color'];
                config['dmliyi'] = _0x16155a['data']['dmliyi'];
                config['dmrule'] = _0x16155a['data']['dmrule'];
                config['yjtest'] = _0x16155a['data']['yjtest'];
                config['yjrule'] = _0x16155a['data']['yjrule'];
                config['group'] = lele['getCookie'](_0x33e39a['rDLaw']);
                lele['autoplay'] = _0x16155a['data']['autoplay'];
                lele['bilibili'] = _0x16155a['data']['bilibili'];
                lele['waittime'] = _0x16155a['data']['waittime'];
                lele['pmdzd'] = _0x16155a['data']['pmdzd'];
                lele['pmdzdy'] = _0x16155a['data']['pmdzdy'];
                lele['jybf'] = config['id'];
                lele['ads'] = _0x16155a['data']['ads'];
                if (_0x33e39a['kSVQc'](_0x16155a['data']['autoplay'], _0x33e39a['ZAKjJ'])) {
                    if (_0x33e39a['fLvYG'](_0x33e39a['AzPNb'], _0x33e39a['AzPNb'])) {
                        lele['autoplay'] = !![];
                    } else {
                        _peers = peersData['length'];
                        _0x33e39a['OReiA'](updateStats);
                    }
                } else {
                    lele['autoplay'] = ![];
                }
                if (_0x33e39a['vvHZG'](config['group'], config['group_x']) && _0x33e39a['UxIzT'](lele['ads']['state'], 'on') && _0x33e39a['qkPKA'](config['group'], '')) {
                    if (_0x33e39a['UxIzT'](lele['ads']['set']['state'], '1')) {
                        lele['MYad']['vod'](lele['ads']['set']['vod']['url'], lele['ads']['set']['vod']['link']);
                    } else if (_0x33e39a['ENSDz'](lele['ads']['set']['state'], '2')) {
                        if (_0x33e39a['KgJXy'](_0x33e39a['OHoJB'], _0x33e39a['OHoJB'])) {
                            lele['dp']['seek'](lele['playtime']);
                        } else {
                            lele['MYad']['pic'](lele['ads']['set']['pic']['link'], lele['ads']['set']['pic']['time'], lele['ads']['set']['pic']['img']);
                        }
                    }
                } else {
                    lele['play'](_0x33e39a['wSWpB'](v_decrypt, config['url'], _token_key, key_token));
                }
            }
        });
    },
    'play': function(_0x19e483) {
        var _0x7277eb = {
            'oSbZV': function(_0x41d81c, _0x59c402) {
                return _0x41d81c > _0x59c402;
            },
            'eJILW': function(_0x466bc8, _0x16629a) {
                return _0x466bc8 == _0x16629a;
            },
            'XqKHS': function(_0x1bef47) {
                return _0x1bef47();
            },
            'iHUhd': '会员专属功能',
            'vuUmD': function(_0x465fd9, _0xe28bb7) {
                return _0x465fd9 === _0xe28bb7;
            },
            'jviuh': 'UFbcO',
            'xVErp': function(_0x2f57dc, _0xa0bfa7) {
                return _0x2f57dc === _0xa0bfa7;
            },
            'cTgBQ': 'cABiD',
            'GNivt': 'LMzwE',
            'EKBVT': function(_0x19d2c5, _0x2c947c) {
                return _0x19d2c5 + _0x2c947c;
            },
            'ccEpH': function(_0x363f20, _0x154f84) {
                return _0x363f20 + _0x154f84;
            },
            'jrNWo': function(_0x58a65d, _0x3ee13d) {
                return _0x58a65d + _0x3ee13d;
            },
            'nZFVR': function(_0xa1c1cd, _0x10649e) {
                return _0xa1c1cd + _0x10649e;
            },
            'PZGEv': '<div id="player_pause"><div class="adimg"><a style="color:#ffffff;">广告</a></div><div class="tip"><a style="color:#ffffff;cursor:pointer;" onclick="javascript:turnoff(',
            'raNkX': '\'player_pause\'',
            'tzUly': ')" title="点击关闭广告">✖</a></div><a href="',
            'puNsK': '" target="_blank" ><img src="',
            'DOozN': '"></a></div>',
            'CSUTt': function(_0x5169ac, _0x10aa96) {
                return _0x5169ac(_0x10aa96);
            },
            'jpPhu': '#player',
            'orupA': function(_0x1585fa, _0x40dadc) {
                return _0x1585fa !== _0x40dadc;
            },
            'dzMRW': 'BBqIy',
            'FPqdF': 'WtFbr',
            'EWpbW': function(_0x3ece4e, _0x527675) {
                return _0x3ece4e !== _0x527675;
            },
            'piJee': 'AnrIc',
            'UlpPm': function(_0x38229f, _0x3d3813) {
                return _0x38229f(_0x3d3813);
            },
            'SCmYl': '.speed-stting',
            'qhseG': 'speed-stting-open',
            'MUqTE': function(_0x30408f, _0x319a24) {
                return _0x30408f(_0x319a24);
            },
            'FTLvy': '.leleplayer-setting-speeds.title',
            'NzCdA': function(_0x1ac595, _0xb706f7) {
                return _0x1ac595(_0xb706f7);
            },
            'TxysD': '.leleplayer-setting-speeds,.leleplayer-setting-speed-item',
            'dWkJF': 'click',
            'kRgea': '.speed-stting.leleplayer-setting-speed-item',
            'btivJ': '.vod-pic',
            'NrKbp': 'off',
            'ajtXB': '#loading-box',
            'BGnIp': function(_0x454321, _0x689d28) {
                return _0x454321 != _0x689d28;
            },
            'MQvbW': 'KzCdD',
            'tEtxv': 'ZKfdC',
            'SaAFd': function(_0x434340, _0x2a43f3) {
                return _0x434340 === _0x2a43f3;
            },
            'lAAmi': 'RWPuX',
            'iZzZi': 'lZbOo',
            'UhLHc': 'enterhzh',
            'oacGt': 'exithzh',
            'mDjUM': function(_0x4116ac, _0x555ebc) {
                return _0x4116ac != _0x555ebc;
            },
            'oMdSs': 'lelezdy',
            'nJPvC': function(_0x44c60a, _0x249745) {
                return _0x44c60a + _0x249745;
            },
            'tBVTn': function(_0x298b17, _0x2f9e0f) {
                return _0x298b17 + _0x2f9e0f;
            },
            'MELCz': function(_0x149fbc, _0x2df2e7) {
                return _0x149fbc + _0x2df2e7;
            },
            'kciBr': function(_0x159767, _0x15e3e5) {
                return _0x159767 + _0x15e3e5;
            },
            'TfKBy': function(_0x2878d9, _0x125fc3) {
                return _0x2878d9 + _0x125fc3;
            },
            'VuPFU': function(_0xbfdbcc, _0x10c1f3) {
                return _0xbfdbcc + _0x10c1f3;
            },
            'ylBor': function(_0x2f4d6e, _0x1b3e04) {
                return _0x2f4d6e + _0x1b3e04;
            },
            'JRHWk': '<style type="text/css">.showdan-setting .leleplayer-toggle input+label{border: 1px solid ',
            'gLCIY': '!important;background: ',
            'RRyJN': '!important;}.leleplayer-controller .leleplayer-icons .leleplayer-setting .leleplayer-setting-speed-item:hover .leleplayer-label{color: ',
            'PhZsv': ';}.leleplayer-controller .leleplayer-icons .leleplayer-toggle input+label{background: ',
            'OiItk': ';}.leleplayer .leleplayer-controller .leleplayer-icons.leleplayer-comment-box .lele-leleplayer-send-icon{background-color: ',
            'QSusp': ';}.leleplayer .leleplayer-controller .leleplayer-icons.leleplayer-comment-box .lele-leleplayer-send-icon:active{background-color:',
            'Xupty': ';}.leleplayer-setting-speeds:hover .title{background-color:',
            'eRZzr': '!important;}.fixed{height:',
            'dgmeS': ';}</style>',
            'iXXaw': 'head',
            'WGCAv': function(_0x32cbc2, _0xd915d9) {
                return _0x32cbc2(_0xd915d9);
            },
            'qJuAM': '.leleplayer-fulloff-icon',
            'cohfp': '.leleplayer-showing',
            'FZhiA': function(_0x33cfdc, _0x20c4f5) {
                return _0x33cfdc != _0x20c4f5;
            },
            'iXbJD': '#vodtitle'
        };
        if (_0x7277eb['eJILW'](danmuon, _0x7277eb['NrKbp'])) {
            lele['player']['play'](_0x19e483);
            _0x7277eb['NzCdA']($, _0x7277eb['ajtXB'])['remove']();
        } else {
            if (_0x7277eb['BGnIp'](lele['bilibili'], '')) {
                if (_0x7277eb['xVErp'](_0x7277eb['MQvbW'], _0x7277eb['tEtxv'])) {
                    console['log'](error);
                } else {
                    lele['player']['bdplay'](_0x19e483);
                }
            } else {
                if (_0x7277eb['SaAFd'](_0x7277eb['lAAmi'], _0x7277eb['iZzZi'])) {
                    if (_0x7277eb['oSbZV'](lele['headt'], lele['playtime']) || _0x7277eb['eJILW'](lele['playtime'], 0x0)) {
                        lele['jump_f'] = 0x1;
                    } else {
                        lele['jump_f'] = 0x0;
                    }
                } else {
                    lele['player']['dmplay'](_0x19e483);
                }
            }
        }
        if (_0x7277eb['eJILW'](document['pictureInPictureEnabled'], !![])) {
            if (_0x7277eb['BGnIp'](document['getElementById'](_0x7277eb['UhLHc']), null)) {
                document['getElementById'](_0x7277eb['UhLHc'])['addEventListener'](_0x7277eb['dWkJF'], () => {
                    var _0x4ba791 = {
                        'Jkbzw': function(_0x19e8f7) {
                            return _0x7277eb['XqKHS'](_0x19e8f7);
                        },
                        'XBvaT': _0x7277eb['iHUhd'],
                        'YLwZt': function(_0x393e2f, _0x227d1e) {
                            return _0x7277eb['vuUmD'](_0x393e2f, _0x227d1e);
                        },
                        'ZcLDE': _0x7277eb['jviuh']
                    };
                    if (_0x7277eb['xVErp'](_0x7277eb['cTgBQ'], _0x7277eb['GNivt'])) {
                        _0x4ba791['Jkbzw'](er);
                    } else {
                        lelevideo['requestPictureInPicture']()['catch'](_0x3db716 => {
                            if (_0x4ba791['YLwZt'](_0x4ba791['ZcLDE'], _0x4ba791['ZcLDE'])) {
                                console['log'](_0x3db716);
                            } else {
                                layer['msg'](_0x4ba791['XBvaT']);
                                return;
                            }
                        });
                    }
                });
                document['getElementById'](_0x7277eb['UhLHc'])['id'] = _0x7277eb['oacGt'];
            }
            if (_0x7277eb['mDjUM'](document['getElementById'](_0x7277eb['oacGt']), null)) {
                document['getElementById'](_0x7277eb['oacGt'])['addEventListener'](_0x7277eb['dWkJF'], () => {
                    if (_0x7277eb['orupA'](_0x7277eb['dzMRW'], _0x7277eb['FPqdF'])) {
                        document['exitPictureInPicture']()['catch'](_0x43defc => {
                            console['log'](_0x43defc);
                        });
                    } else {
                        var _0x3dfbee = _0x7277eb['EKBVT'](_0x7277eb['ccEpH'](_0x7277eb['ccEpH'](_0x7277eb['jrNWo'](_0x7277eb['jrNWo'](_0x7277eb['nZFVR'](_0x7277eb['PZGEv'], _0x7277eb['raNkX']), _0x7277eb['tzUly']), l), _0x7277eb['puNsK']), p), _0x7277eb['DOozN']);
                        _0x7277eb['CSUTt']($, _0x7277eb['jpPhu'])['before'](_0x3dfbee);
                    }
                });
                document['getElementById'](_0x7277eb['oacGt'])['id'] = _0x7277eb['UhLHc'];
            }
        }
        document['getElementById'](_0x7277eb['oMdSs'])['innerHTML'] = lele['pmdzdy'];
        var _0x347493 = _0x7277eb['nJPvC'](_0x7277eb['tBVTn'](_0x7277eb['tBVTn'](_0x7277eb['tBVTn'](_0x7277eb['MELCz'](_0x7277eb['MELCz'](_0x7277eb['MELCz'](_0x7277eb['MELCz'](_0x7277eb['MELCz'](_0x7277eb['kciBr'](_0x7277eb['TfKBy'](_0x7277eb['TfKBy'](_0x7277eb['TfKBy'](_0x7277eb['VuPFU'](_0x7277eb['ylBor'](_0x7277eb['ylBor'](_0x7277eb['JRHWk'], config['color']), _0x7277eb['gLCIY']), config['color']), _0x7277eb['RRyJN']), config['color']), _0x7277eb['PhZsv']), config['color']), _0x7277eb['OiItk']), config['color']), _0x7277eb['QSusp']), config['color']), _0x7277eb['Xupty']), config['color']), _0x7277eb['eRZzr']), lele['pmdzd']), _0x7277eb['dgmeS']);
        _0x7277eb['NzCdA']($, _0x7277eb['iXXaw'])['append'](_0x347493);
        _0x7277eb['WGCAv']($, function() {
            _0x7277eb['NzCdA']($, _0x7277eb['TxysD'])['on'](_0x7277eb['dWkJF'], function() {
                if (_0x7277eb['EWpbW'](_0x7277eb['piJee'], _0x7277eb['piJee'])) {
                    lele['player']['dmplay'](_0x19e483);
                } else {
                    _0x7277eb['UlpPm']($, _0x7277eb['SCmYl'])['toggleClass'](_0x7277eb['qhseG']);
                }
            });
            _0x7277eb['NzCdA']($, _0x7277eb['kRgea'])['click'](function() {
                _0x7277eb['MUqTE']($, _0x7277eb['FTLvy'])['text'](_0x7277eb['MUqTE']($, this)['text']());
            });
        });
        _0x7277eb['WGCAv']($, _0x7277eb['qJuAM'])['on'](_0x7277eb['dWkJF'], function() {
            lele['dp']['fullScreen']['cancel']();
        });
        _0x7277eb['WGCAv']($, _0x7277eb['cohfp'])['on'](_0x7277eb['dWkJF'], function() {
            lele['dp']['play']();
            _0x7277eb['NzCdA']($, _0x7277eb['btivJ'])['remove']();
        });
        if (_0x7277eb['FZhiA'](config['title'], '')) {
            _0x7277eb['WGCAv']($, _0x7277eb['iXbJD'])['html'](_0x7277eb['ylBor'](_0x7277eb['ylBor'](config['title'], '  '), config['sid']));
        };
    },
    'dmid': function() {
        var _0x265839 = {
            'BUwph': 'size',
            'MrQEp': function(_0x1c681a, _0x4f7fcd) {
                return _0x1c681a == _0x4f7fcd;
            },
            'Zyacw': function(_0x59c793, _0x45c3c0) {
                return _0x59c793 != _0x45c3c0;
            },
            'nQoIt': function(_0x1c8418, _0x2b3b5f) {
                return _0x1c8418 === _0x2b3b5f;
            },
            'ZyFTL': 'cWVfK',
            'mExCY': 'FqHax'
        };
        if (_0x265839['MrQEp'](up['diyid'][0x0], 0x0) && _0x265839['Zyacw'](config['id'], '')) {
            if (_0x265839['nQoIt'](_0x265839['ZyFTL'], _0x265839['mExCY'])) {
                d['attr'](_0x265839['BUwph'], t);
            } else {
                a = config['id'], b = config['sid'];
            }
        } else if (_0x265839['MrQEp'](up['diyid'][0x0], 0x1) || !config['id']) {
            a = up['diyid'][0x1], b = up['diyid'][0x2];
        }
        lele['id'] = config['id'];
    },
    'load': function() {
        var _0x12f317 = {
            'MiQoF': function(_0x3852b6, _0x4a5b3d) {
                return _0x3852b6(_0x4a5b3d);
            },
            'FbYjo': '#link1',
            'yjiLG': function(_0x3d2cb4, _0x3a7639) {
                return _0x3d2cb4 === _0x3a7639;
            },
            'ZwjdH': 'iAJTf',
            'GjjWv': 'EPyPC',
            'dvWHM': '#link1-success',
            'AZqju': '#link2',
            'llQiV': function(_0x193519, _0xc846bb) {
                return _0x193519(_0xc846bb);
            },
            'RFKdz': function(_0x3876a3, _0x12127b) {
                return _0x3876a3 == _0x12127b;
            },
            'AuGBw': 'true',
            'BHQPF': function(_0x202657, _0x300f33) {
                return _0x202657(_0x300f33);
            },
            'jPNaK': '.memory-play-wrap,#loading-box',
            'yPgCW': 'Xcuow',
            'UKCVF': function(_0x2b8643, _0x150150) {
                return _0x2b8643(_0x150150);
            },
            'pxFGa': '#link3,#span',
            'BpyJd': function(_0x5d20da, _0x24601c, _0x30c200) {
                return _0x5d20da(_0x24601c, _0x30c200);
            },
            'wOrzz': function(_0x1da118, _0x5359a5) {
                return _0x1da118 * _0x5359a5;
            },
            'crqhe': function(_0x5caffb, _0x26353a, _0x512488) {
                return _0x5caffb(_0x26353a, _0x512488);
            }
        };
        _0x12f317['BpyJd'](setTimeout, function() {
            _0x12f317['MiQoF']($, _0x12f317['FbYjo'])['fadeIn']();
        }, 0x64);
        _0x12f317['BpyJd'](setTimeout, function() {
            if (_0x12f317['yjiLG'](_0x12f317['ZwjdH'], _0x12f317['GjjWv'])) {
                lele['dp']['play']();
            } else {
                _0x12f317['MiQoF']($, _0x12f317['dvWHM'])['fadeIn']();
            }
        }, 0x1f4);
        _0x12f317['BpyJd'](setTimeout, function() {
            _0x12f317['MiQoF']($, _0x12f317['AZqju'])['show']();
        }, _0x12f317['wOrzz'](0x1, 0x3e8));
        _0x12f317['crqhe'](setTimeout, function() {
            var _0x1ba0e7 = {
                'iIHqG': function(_0x318bb3, _0x1975e1) {
                    return _0x12f317['llQiV'](_0x318bb3, _0x1975e1);
                },
                'prUBz': function(_0x3b36dd, _0x3d919b) {
                    return _0x12f317['RFKdz'](_0x3b36dd, _0x3d919b);
                },
                'jPRxH': _0x12f317['AuGBw'],
                'tXjFD': function(_0x4a2fb1, _0x5a2a4f) {
                    return _0x12f317['BHQPF'](_0x4a2fb1, _0x5a2a4f);
                },
                'oUCgS': _0x12f317['jPNaK']
            };
            if (_0x12f317['yjiLG'](_0x12f317['yPgCW'], _0x12f317['yPgCW'])) {
                _0x12f317['UKCVF']($, _0x12f317['pxFGa'])['fadeIn']();
            } else {
                _0x1ba0e7['iIHqG'](clearInterval, timer);
                lele['video']['seek']();
                if (_0x1ba0e7['prUBz'](lele['autoplay'], _0x1ba0e7['jPRxH'])) {
                    lele['dp']['play']();
                }
                _0x1ba0e7['tXjFD']($, _0x1ba0e7['oUCgS'])['remove']();
            }
        }, _0x12f317['wOrzz'](0x2, 0x3e8));
        lele['danmu']['send']();
        lele['danmu']['list']();
        lele['def']();
        lele['dp']['danmaku']['opacity'](0x1);
    },
    'def': function() {
        var _0x821144 = {
            'hXMfD': 'totalP2PDownloaded',
            'ZOaYk': 'totalP2PUploaded',
            'uSYVo': function(_0xddf6a4) {
                return _0xddf6a4();
            },
            'ZXItN': function(_0x2557d2, _0x6bda3f) {
                return _0x2557d2 === _0x6bda3f;
            },
            'dqIyP': 'aapOf',
            'sOCuO': 'ymbQG',
            'fvguS': function(_0xcabe60, _0xf6feaa) {
                return _0xcabe60 !== _0xf6feaa;
            },
            'AJxJI': 'XaiRN',
            'PxLsP': '欢迎使用Mao视频播放器',
            'uLpvw': function(_0xd8b6b4, _0x34eb39) {
                return _0xd8b6b4 == _0x34eb39;
            },
            'bwRIW': function(_0x46827c, _0x295c49) {
                return _0x46827c == _0x295c49;
            },
            'GJRDk': function(_0xbede05, _0x588ae9) {
                return _0xbede05(_0x588ae9);
            },
            'LcsGN': '#loading-box',
            'UHTji': 'headt',
            'CSxco': 'lastt',
            'jltyi': function(_0x5ecd95, _0xf624ec) {
                return _0x5ecd95 + _0xf624ec;
            },
            'uHGgu': function(_0x49efac, _0x4bb255) {
                return _0x49efac(_0x4bb255);
            },
            'gRjQg': 'frists',
            'cAVcV': 'lasts',
            'IAfGn': 'loadedmetadata',
            'PSuNC': 'ended',
            'zqSlN': 'pause',
            'tWHCk': 'play',
            'kHlDG': 'timeupdate'
        };
        console['log'](_0x821144['PxLsP']);
        if (_0x821144['uLpvw'](lele['waittime'], '0') || _0x821144['bwRIW'](lele['waittime'], '')) {
            _0x821144['GJRDk']($, _0x821144['LcsGN'])['remove']();
        }
        lele['stime'] = 0x0;
        lele['headt'] = leleck['get'](_0x821144['UHTji']);
        lele['lastt'] = leleck['get'](_0x821144['CSxco']);
        lele['last_tip'] = _0x821144['jltyi'](_0x821144['uHGgu'](parseInt, lele['lastt']), 0xa);
        lele['frists'] = leleck['get'](_0x821144['gRjQg']);
        lele['lasts'] = leleck['get'](_0x821144['cAVcV']);
        lele['playtime'] = _0x821144['uHGgu'](Number, localStorage['getItem'](lele['jybf']));
        lele['ctime'] = lele['formatTime'](lele['playtime']);
        lele['dp']['on'](_0x821144['IAfGn'], function() {
            lele['loadedmetadataHandler']();
        });
        lele['dp']['on'](_0x821144['PSuNC'], function() {
            var _0x346764 = {
                'VrczU': _0x821144['hXMfD'],
                'JlKRq': _0x821144['ZOaYk'],
                'QrJNT': function(_0x35e5dc) {
                    return _0x821144['uSYVo'](_0x35e5dc);
                }
            };
            if (_0x821144['ZXItN'](_0x821144['dqIyP'], _0x821144['sOCuO'])) {
                tota1P2PDownloaded = data[_0x346764['VrczU']];
                totalP2PUploaded = data[_0x346764['JlKRq']];
                _0x346764['QrJNT'](updateStats);
            } else {
                lele['endedHandler']();
            }
        });
        lele['dp']['on'](_0x821144['zqSlN'], function() {
            lele['MYad']['pause']['play'](lele['ads']['pause']['link'], lele['ads']['pause']['pic']);
        });
        lele['dp']['on'](_0x821144['tWHCk'], function() {
            lele['MYad']['pause']['out']();
        });
        lele['dp']['on'](_0x821144['kHlDG'], function(_0xc56687) {
            if (_0x821144['fvguS'](_0x821144['AJxJI'], _0x821144['AJxJI'])) {
                lele['jump_f'] = 0x0;
            } else {
                lele['timeupdateHandler']();
            }
        });
        if (lele['Weixin']()) {
            _0x821144['uHGgu']($, _0x821144['LcsGN'])['remove']();
        }
        lele['jump']['def']();
    },
    'video': {
        'play': function() {
            var _0x1f85ed = {
                'aMofE': function(_0x3b7a7e, _0x11ad86) {
                    return _0x3b7a7e == _0x11ad86;
                },
                'jHlfx': 'true',
                'tgmLZ': function(_0x41e28b, _0xc172dd) {
                    return _0x41e28b(_0xc172dd);
                },
                'oPjWW': '#loading-box'
            };
            if (_0x1f85ed['aMofE'](lele['autoplay'], _0x1f85ed['jHlfx'])) {
                lele['dp']['play']();
            }
            _0x1f85ed['tgmLZ']($, _0x1f85ed['oPjWW'])['remove']();
            lele['jump']['head']();
        },
        'next': function() {
            var _0x3bd874 = {
                'gePgU': function(_0x351094, _0x1d3ec0) {
                    return _0x351094 + _0x1d3ec0;
                }
            };
            top['location']['href'] = _0x3bd874['gePgU'](up['mylink'], config['next']);
        },
        'seek': function() {
            lele['dp']['seek'](lele['playtime']);
        },
        'end': function() {
            var _0x17198d = {
                'vYjfX': '播放结束啦=。='
            };
            layer['msg'](_0x17198d['vYjfX']);
        },
        'con_play': function() {
            var _0x38ccb2 = {
                'nktpI': function(_0x112de1, _0x58134c) {
                    return _0x112de1 == _0x58134c;
                },
                'clWOv': function(_0x4d29a0, _0x40a5b0) {
                    return _0x4d29a0(_0x40a5b0);
                },
                'qvXDa': function(_0x1fc873, _0x29e67c, _0x591826, _0x2e4f4e) {
                    return _0x1fc873(_0x29e67c, _0x591826, _0x2e4f4e);
                },
                'FMopr': '#ADtip',
                'uUjcy': function(_0x19a70d, _0x31e2de, _0x299f7e) {
                    return _0x19a70d(_0x31e2de, _0x299f7e);
                },
                'iGPgG': function(_0x448f88, _0x3e4c80) {
                    return _0x448f88(_0x3e4c80);
                },
                'jcyBO': function(_0x4954ad, _0x3a4d78) {
                    return _0x4954ad != _0x3a4d78;
                },
                'DHeYc': function(_0x3edeed, _0xfb1722) {
                    return _0x3edeed !== _0xfb1722;
                },
                'Lxoxz': 'ptVWN',
                'DehAp': 'rpZWR',
                'BPQhR': function(_0x5d8ddc, _0x48be6b) {
                    return _0x5d8ddc == _0x48be6b;
                },
                'HKAcl': 'true',
                'aHVrP': '.memory-play-wrap,#loading-box',
                'LyLzU': function(_0x18bd72, _0x1fcc8a, _0x3d04ca) {
                    return _0x18bd72(_0x1fcc8a, _0x3d04ca);
                },
                'zrLtz': function(_0x10e41e, _0x5a2f77) {
                    return _0x10e41e(_0x5a2f77);
                },
                'ThkmW': '.speed-stting',
                'fRzXu': 'speed-stting-open',
                'dMwvr': '.leleplayer-setting-speeds.title',
                'otooW': function(_0x5c1fcf, _0x2c6510) {
                    return _0x5c1fcf(_0x2c6510);
                },
                'yMeWf': '.leleplayer-setting-speeds,.leleplayer-setting-speed-item',
                'LRjaN': 'click',
                'LFMCa': '.speed-stting.leleplayer-setting-speed-item',
                'tUedN': '.memory-play-wrap',
                'UsQmM': function(_0x4dc8af, _0x531ccb) {
                    return _0x4dc8af(_0x531ccb);
                },
                'ySvkK': '#loading-box',
                'ZRfRU': 'lzVMa',
                'UzjSc': 'BeiAK',
                'riRsS': '违法违禁',
                'vEeea': function(_0x1a097e, _0x2f77e6) {
                    return _0x1a097e(_0x2f77e6);
                },
                'IzKDC': 'yDPIC',
                'gvqVs': 'mAPXb',
                'SGykr': function(_0x2dbdd1, _0x4788ff) {
                    return _0x2dbdd1 == _0x4788ff;
                },
                'AFRGF': 'off',
                'RcOeI': function(_0x4d5b13, _0x3fd4ce) {
                    return _0x4d5b13 !== _0x3fd4ce;
                },
                'FtheG': 'kVoTi',
                'pSqmP': 'Msctt',
                'hizTY': function(_0x1c1200, _0x4e6f15) {
                    return _0x1c1200 !== _0x4e6f15;
                },
                'RijTk': 'beyhi',
                'ktxtW': 'lNseV',
                'itebo': function(_0xe0395e, _0x5914d4) {
                    return _0xe0395e == _0x5914d4;
                },
                'fzeFN': function(_0x57e603, _0x556a28) {
                    return _0x57e603(_0x556a28);
                },
                'SFeoy': '#link3',
                'pmyAl': 'num',
                'KVFTq': function(_0x4fd358, _0x3579f2, _0x13ade6) {
                    return _0x4fd358(_0x3579f2, _0x13ade6);
                },
                'amVsg': function(_0x43bab2, _0x181866) {
                    return _0x43bab2(_0x181866);
                },
                'tfVKu': '.leleplayer-cplayer',
                'fTzkH': '.close',
                'EEYcG': function(_0x46df6a, _0x4a5e00) {
                    return _0x46df6a * _0x4a5e00;
                },
                'cEgxx': '.conplaying',
                'lMGaw': function(_0x1b0cc7, _0x66ded3) {
                    return _0x1b0cc7(_0x66ded3);
                },
                'ISVlS': '.conplay-jump,.play-jump'
            };
            if (_0x38ccb2['SGykr'](danmuon, _0x38ccb2['AFRGF'])) {
                if (_0x38ccb2['RcOeI'](_0x38ccb2['FtheG'], _0x38ccb2['pSqmP'])) {
                    lele['jump']['head']();
                } else {
                    var _0x7d2090 = {
                        'iRRDT': function(_0x17c1f9, _0x18e237) {
                            return _0x38ccb2['nktpI'](_0x17c1f9, _0x18e237);
                        },
                        'BEiFQ': function(_0x5ce2e2, _0x5e276e) {
                            return _0x38ccb2['clWOv'](_0x5ce2e2, _0x5e276e);
                        },
                        'HQegF': function(_0x383cba, _0x538640, _0xbe480d, _0x38f79c) {
                            return _0x38ccb2['qvXDa'](_0x383cba, _0x538640, _0xbe480d, _0x38f79c);
                        },
                        'GCDGA': _0x38ccb2['FMopr']
                    };
                    _0x3c2f9a = _0x38ccb2['uUjcy'](setInterval, function() {
                        _0x5a9234--;
                        _0x529d96['innerHTML'] = _0x5a9234;
                        if (_0x7d2090['iRRDT'](_0x5a9234, 0x0)) {
                            _0x7d2090['BEiFQ'](clearInterval, _0x3c2f9a);
                            lele['play'](_0x7d2090['HQegF'](v_decrypt, config['url'], _token_key, key_token));
                            _0x7d2090['BEiFQ']($, _0x7d2090['GCDGA'])['remove']();
                        }
                    }, 0x3e8);
                }
            } else {
                if (_0x38ccb2['hizTY'](_0x38ccb2['RijTk'], _0x38ccb2['ktxtW'])) {
                    var _0x2be950 = ' <e>已播放至' + lele['ctime'] + '，继续上次播放？</e><d class="conplay-jump">是 <i id="num">' + lele['waittime'] + '</i>s</d><d class="conplaying">否</d>';
                    if (_0x38ccb2['itebo'](lele['waittime'], '0') || _0x38ccb2['itebo'](lele['waittime'], '')) {
                        var _0x5a9234 = 0xa;
                    } else {
                        _0x38ccb2['fzeFN']($, _0x38ccb2['SFeoy'])['html'](_0x2be950);
                        var _0x529d96 = document['getElementById'](_0x38ccb2['pmyAl']);
                        var _0x5a9234 = _0x529d96['innerHTML'];
                    }
                    var _0x3c2f9a = null;
                    _0x38ccb2['KVFTq'](setTimeout, function() {
                        var _0xcb6b71 = {
                            'BYoMi': function(_0x1bffaa, _0x12970b) {
                                return _0x38ccb2['iGPgG'](_0x1bffaa, _0x12970b);
                            },
                            'VXUux': function(_0x407bf0, _0x51e593) {
                                return _0x38ccb2['iGPgG'](_0x407bf0, _0x51e593);
                            },
                            'BRwIv': function(_0x3a1cac, _0x358a02) {
                                return _0x38ccb2['jcyBO'](_0x3a1cac, _0x358a02);
                            },
                            'MxxCe': function(_0xf7f248, _0x5795d0) {
                                return _0x38ccb2['DHeYc'](_0xf7f248, _0x5795d0);
                            },
                            'duwXm': _0x38ccb2['Lxoxz'],
                            'ZjBUe': _0x38ccb2['DehAp'],
                            'WKwff': function(_0x403ef7, _0x6b9056) {
                                return _0x38ccb2['BPQhR'](_0x403ef7, _0x6b9056);
                            },
                            'FTtqr': _0x38ccb2['HKAcl'],
                            'rQlmg': _0x38ccb2['aHVrP']
                        };
                        _0x3c2f9a = _0x38ccb2['LyLzU'](setInterval, function() {
                            var _0x2225f1 = {
                                'RxBEh': function(_0x2a15ed, _0x3a44dd) {
                                    return _0xcb6b71['BYoMi'](_0x2a15ed, _0x3a44dd);
                                },
                                'vgnGd': function(_0x2423cb, _0x57ee86) {
                                    return _0xcb6b71['VXUux'](_0x2423cb, _0x57ee86);
                                }
                            };
                            if (_0xcb6b71['BRwIv'](lele['waittime'], '0') && _0xcb6b71['BRwIv'](lele['waittime'], '')) {
                                if (_0xcb6b71['MxxCe'](_0xcb6b71['duwXm'], _0xcb6b71['ZjBUe'])) {
                                    _0x5a9234--;
                                    _0x529d96['innerHTML'] = _0x5a9234;
                                } else {
                                    _0x2225f1['RxBEh']($, div2)['toggleClass'](div3);
                                    _0x2225f1['vgnGd']($, div4)['remove']();
                                }
                            }
                            if (_0xcb6b71['WKwff'](_0x5a9234, 0x0)) {
                                _0xcb6b71['VXUux'](clearInterval, _0x3c2f9a);
                                lele['video']['seek']();
                                if (_0xcb6b71['WKwff'](lele['autoplay'], _0xcb6b71['FTtqr'])) {
                                    lele['dp']['play']();
                                }
                                _0xcb6b71['VXUux']($, _0xcb6b71['rQlmg'])['remove']();
                            }
                        }, 0x3e8);
                    }, 0x1);
                } else {
                    var _0x1d6f63 = {
                        'DPWeq': function(_0x13f148, _0x88fe6d) {
                            return _0x38ccb2['zrLtz'](_0x13f148, _0x88fe6d);
                        },
                        'kSdHt': _0x38ccb2['ThkmW'],
                        'DPxbK': _0x38ccb2['fRzXu'],
                        'PdUPA': _0x38ccb2['dMwvr'],
                        'Adzmu': function(_0x1e674d, _0x1b7d73) {
                            return _0x38ccb2['zrLtz'](_0x1e674d, _0x1b7d73);
                        }
                    };
                    _0x38ccb2['otooW']($, _0x38ccb2['yMeWf'])['on'](_0x38ccb2['LRjaN'], function() {
                        _0x1d6f63['DPWeq']($, _0x1d6f63['kSdHt'])['toggleClass'](_0x1d6f63['DPxbK']);
                    });
                    _0x38ccb2['otooW']($, _0x38ccb2['LFMCa'])['click'](function() {
                        _0x1d6f63['DPWeq']($, _0x1d6f63['PdUPA'])['text'](_0x1d6f63['Adzmu']($, this)['text']());
                    });
                }
            };
            var _0xb0307b = '<div class="memory-play-wrap"><div class="memory-play"><span class="close">×</span><span>上次看到 </span><span>' + lele['ctime'] + '</span><span class="play-jump">跳转播放</span></div></div>';
            _0x38ccb2['amVsg']($, _0x38ccb2['tfVKu'])['append'](_0xb0307b);
            _0x38ccb2['amVsg']($, _0x38ccb2['fTzkH'])['on'](_0x38ccb2['LRjaN'], function() {
                _0x38ccb2['otooW']($, _0x38ccb2['tUedN'])['remove']();
            });
            _0x38ccb2['KVFTq'](setTimeout, function() {
                _0x38ccb2['otooW']($, _0x38ccb2['tUedN'])['remove']();
            }, _0x38ccb2['EEYcG'](0x14, 0x3e8));
            _0x38ccb2['amVsg']($, _0x38ccb2['cEgxx'])['on'](_0x38ccb2['LRjaN'], function() {
                _0x38ccb2['otooW'](clearTimeout, _0x3c2f9a);
                _0x38ccb2['UsQmM']($, _0x38ccb2['ySvkK'])['remove']();
                if (_0x38ccb2['BPQhR'](lele['autoplay'], _0x38ccb2['HKAcl'])) {
                    if (_0x38ccb2['DHeYc'](_0x38ccb2['ZRfRU'], _0x38ccb2['UzjSc'])) {
                        lele['dp']['play']();
                    } else {
                        lele['danmu']['post_r'](a, b, c, d, '剧透');
                    }
                }
                lele['jump']['head']();
            });
            _0x38ccb2['lMGaw']($, _0x38ccb2['ISVlS'])['on'](_0x38ccb2['LRjaN'], function() {
                _0x38ccb2['UsQmM'](clearTimeout, _0x3c2f9a);
                lele['video']['seek']();
                _0x38ccb2['vEeea']($, _0x38ccb2['aHVrP'])['remove']();
                if (_0x38ccb2['BPQhR'](lele['autoplay'], _0x38ccb2['HKAcl'])) {
                    if (_0x38ccb2['DHeYc'](_0x38ccb2['IzKDC'], _0x38ccb2['gvqVs'])) {
                        lele['dp']['play']();
                    } else {
                        lele['danmu']['post_r'](a, b, c, d, _0x38ccb2['riRsS']);
                    }
                }
            });
        }
    },
    'jump': {
        'def': function() {
            var _0x44ebed = {
                'puQjW': '请输入有效时间哟！',
                'EUzeE': '设置完成，将在刷新或下一集生效',
                'rDpEy': '5s后,将自动为您播放下一集',
                'cfMNn': function(_0x231df3, _0x146f29, _0x23a1bf) {
                    return _0x231df3(_0x146f29, _0x23a1bf);
                },
                'rCyMq': function(_0xc7785b, _0x1a96eb) {
                    return _0xc7785b * _0x1a96eb;
                },
                'EeQvd': function(_0x41ee20, _0x72f089) {
                    return _0x41ee20 === _0x72f089;
                },
                'EupCM': 'OfcIK',
                'WAVky': 'IXoXK',
                'WQiUP': function(_0x41faa3, _0x553696) {
                    return _0x41faa3(_0x553696);
                },
                'wQijo': function(_0x5a5743, _0x2fc270) {
                    return _0x5a5743 > _0x2fc270;
                },
                'LCKKN': function(_0x3e2932, _0x44ccd3) {
                    return _0x3e2932(_0x44ccd3);
                },
                'tvRZW': 'checked',
                'RisPi': function(_0x17b07e) {
                    return _0x17b07e();
                },
                'cdwVQ': function(_0x293b73) {
                    return _0x293b73();
                },
                'FgbOn': function(_0x4d2b4c, _0x15df47) {
                    return _0x4d2b4c + _0x15df47;
                },
                'bzNuS': '请勿频繁操作！发送弹幕需间隔',
                'qZCwf': 'totalP2PDownloaded',
                'IlvJQ': 'totalP2PUploaded',
                'EZHio': function(_0x1d6d87) {
                    return _0x1d6d87();
                },
                'xSshx': function(_0x34990e, _0x8baa4a) {
                    return _0x34990e > _0x8baa4a;
                },
                'zzpTm': function(_0x4b3013, _0x2a7e3a) {
                    return _0x4b3013 == _0x2a7e3a;
                },
                'ETLeG': '会员专属功能',
                'YtPwo': function(_0x5c6a6f, _0x1bbf27) {
                    return _0x5c6a6f(_0x1bbf27);
                },
                'yCiHF': 'value',
                'pXPeF': function(_0x5844bb, _0x141524, _0x492969) {
                    return _0x5844bb(_0x141524, _0x492969);
                },
                'KXaos': 'size',
                'ZMnpe': 'sRnzg',
                'oWdUh': function(_0x155b3d, _0x5c8cb0) {
                    return _0x155b3d !== _0x5c8cb0;
                },
                'iMJdq': 'rlODH',
                'WYyFT': function(_0x372ce2, _0x2e89c8) {
                    return _0x372ce2 > _0x2e89c8;
                },
                'SVWxF': 'click',
                'SwsVu': 'vpphd',
                'WtSHC': 'NJFgv',
                'SRsLm': function(_0x32cc54, _0xe488e7) {
                    return _0x32cc54(_0xe488e7);
                },
                'nstQp': 'qEBvL',
                'eKJds': 'piGQW',
                'Lpuot': function(_0x23957c, _0x2082bb) {
                    return _0x23957c(_0x2082bb);
                },
                'LmdDB': '.leleplayer-setting-jfrist label',
                'IdQGt': '.leleplayer-setting-jlast label',
                'SWHxW': '#fristtime',
                'hauRX': '#jumptime',
                'JzYpM': function(_0x1a9b4f, _0x55a823, _0x3c15e9, _0x5f384a, _0x1e26fc, _0xf1a400, _0x10dc68) {
                    return _0x1a9b4f(_0x55a823, _0x3c15e9, _0x5f384a, _0x1e26fc, _0xf1a400, _0x10dc68);
                },
                'qLhyj': 'frists',
                'eTkMb': 'headt',
                'VcGsH': 'lasts',
                'NXJZR': 'lastt',
                'lKREL': function(_0x38840f, _0x3c8199) {
                    return _0x38840f(_0x3c8199);
                }
            };
            h = _0x44ebed['LmdDB'];
            l = _0x44ebed['IdQGt'];
            f = _0x44ebed['SWHxW'];
            j = _0x44ebed['hauRX'];
            _0x44ebed['JzYpM'](_0x9cc75, h, _0x44ebed['qLhyj'], lele['frists'], _0x44ebed['eTkMb'], lele['headt'], f);
            _0x44ebed['JzYpM'](_0x9cc75, l, _0x44ebed['VcGsH'], lele['lasts'], _0x44ebed['NXJZR'], lele['lastt'], j);

            function _0x426afd() {
                layer['msg'](_0x44ebed['puQjW']);
            }

            function _0x412c65() {
                layer['msg'](_0x44ebed['EUzeE']);
            }

            function _0x9cc75(_0xe6f6f1, _0x25ee18, _0x22fb37, _0x143dfd, _0x311231, _0x22e9b0) {
                var _0x5d9719 = {
                    'gjnJH': _0x44ebed['qZCwf'],
                    'Orcdc': _0x44ebed['IlvJQ'],
                    'WgvbL': function(_0x5b5513) {
                        return _0x44ebed['EZHio'](_0x5b5513);
                    },
                    'XECiR': function(_0x9b4a6a, _0x58c2eb) {
                        return _0x44ebed['xSshx'](_0x9b4a6a, _0x58c2eb);
                    },
                    'Zvmje': function(_0x4f8144, _0x15cd9f) {
                        return _0x44ebed['zzpTm'](_0x4f8144, _0x15cd9f);
                    },
                    'NnZpm': _0x44ebed['ETLeG'],
                    'IBcgB': function(_0x5d922b, _0x1768f2) {
                        return _0x44ebed['YtPwo'](_0x5d922b, _0x1768f2);
                    },
                    'Zymwy': _0x44ebed['yCiHF'],
                    'jIpiZ': function(_0x4e85f5, _0x216d69, _0x2d5178) {
                        return _0x44ebed['pXPeF'](_0x4e85f5, _0x216d69, _0x2d5178);
                    },
                    'WgRDJ': _0x44ebed['KXaos'],
                    'djeiC': function(_0xb9a531, _0x4775b1) {
                        return _0x44ebed['YtPwo'](_0xb9a531, _0x4775b1);
                    },
                    'BTmhb': function(_0x1ea0c2, _0x3254e9) {
                        return _0x44ebed['EeQvd'](_0x1ea0c2, _0x3254e9);
                    },
                    'RFcNi': _0x44ebed['ZMnpe'],
                    'JHMCq': function(_0x3ab421) {
                        return _0x44ebed['EZHio'](_0x3ab421);
                    },
                    'YMLNn': function(_0x511bec, _0x4811f5) {
                        return _0x44ebed['oWdUh'](_0x511bec, _0x4811f5);
                    },
                    'RsAOS': _0x44ebed['iMJdq'],
                    'uOzkE': function(_0x2fa170, _0x49b946) {
                        return _0x44ebed['YtPwo'](_0x2fa170, _0x49b946);
                    },
                    'jpZPy': function(_0xa22b42, _0x536157) {
                        return _0x44ebed['WYyFT'](_0xa22b42, _0x536157);
                    }
                };
                _0x44ebed['YtPwo']($, _0xe6f6f1)['on'](_0x44ebed['SVWxF'], function() {
                    var _0x27fb39 = {
                        'nhTbc': _0x44ebed['rDpEy'],
                        'JbqJE': function(_0x3c6563, _0x2382d3, _0x25d853) {
                            return _0x44ebed['cfMNn'](_0x3c6563, _0x2382d3, _0x25d853);
                        },
                        'zzacG': function(_0x4650f3, _0x30f1a6) {
                            return _0x44ebed['rCyMq'](_0x4650f3, _0x30f1a6);
                        }
                    };
                    if (_0x44ebed['EeQvd'](_0x44ebed['EupCM'], _0x44ebed['WAVky'])) {
                        lele['dp']['notice'](_0x27fb39['nhTbc']);
                        _0x27fb39['JbqJE'](setTimeout, function() {
                            lele['video']['next']();
                        }, _0x27fb39['zzacG'](0x5, 0x3e8));
                    } else {
                        o = _0x44ebed['WQiUP']($, _0x22e9b0)['val']();
                        if (_0x44ebed['wQijo'](o, 0x0)) {
                            _0x44ebed['LCKKN']($, _0xe6f6f1)['toggleClass'](_0x44ebed['tvRZW']);
                            _0x44ebed['RisPi'](_0x412c65);
                            _0x311231 = _0x44ebed['LCKKN']($, _0x22e9b0)['val']();
                            leleck['set'](_0x143dfd, _0x311231);
                        } else {
                            _0x44ebed['cdwVQ'](_0x426afd);
                        };
                    }
                });
                if (_0x44ebed['zzpTm'](_0x22fb37, 0x1)) {
                    if (_0x44ebed['EeQvd'](_0x44ebed['SwsVu'], _0x44ebed['WtSHC'])) {
                        tota1P2PDownloaded = data[_0x5d9719['gjnJH']];
                        totalP2PUploaded = data[_0x5d9719['Orcdc']];
                        _0x5d9719['WgvbL'](updateStats);
                    } else {
                        _0x44ebed['SRsLm']($, _0xe6f6f1)['addClass'](_0x44ebed['tvRZW']);
                        _0x44ebed['SRsLm']($, _0xe6f6f1)['click'](function() {
                            var _0x2312b6 = {
                                'OLKpI': _0x5d9719['WgRDJ']
                            };
                            o = _0x5d9719['djeiC']($, _0x22e9b0)['val']();
                            if (_0x5d9719['XECiR'](o, 0x0)) {
                                if (_0x5d9719['BTmhb'](_0x5d9719['RFcNi'], _0x5d9719['RFcNi'])) {
                                    leleck['set'](_0x25ee18, 0x0);
                                } else {
                                    if (_0x5d9719['XECiR'](up['trysee'], 0x0) && _0x5d9719['Zvmje'](config['group'], config['group_x'])) {
                                        layer['msg'](_0x5d9719['NnZpm']);
                                        return;
                                    };
                                    _0x22e9b0 = _0x5d9719['IBcgB']($, this)['attr'](_0x5d9719['Zymwy']);
                                    _0x5d9719['jIpiZ'](setTimeout, function() {
                                        _0x22fb37['attr'](_0x2312b6['OLKpI'], _0x22e9b0);
                                    }, 0x64);
                                }
                            } else {
                                _0x5d9719['JHMCq'](_0x426afd);
                            };
                        });
                    }
                } else {
                    if (_0x44ebed['oWdUh'](_0x44ebed['nstQp'], _0x44ebed['eKJds'])) {
                        _0x44ebed['Lpuot']($, _0xe6f6f1)['click'](function() {
                            if (_0x5d9719['YMLNn'](_0x5d9719['RsAOS'], _0x5d9719['RsAOS'])) {
                                lele['dp']['play']();
                            } else {
                                o = _0x5d9719['uOzkE']($, _0x22e9b0)['val']();
                                if (_0x5d9719['jpZPy'](o, 0x0)) {
                                    leleck['set'](_0x25ee18, 0x1);
                                } else {
                                    _0x5d9719['JHMCq'](_0x426afd);
                                };
                            }
                        });
                    } else {
                        layer['msg'](_0x44ebed['FgbOn'](_0x44ebed['FgbOn'](_0x44ebed['bzNuS'], config['sendtime']), '秒~'));
                        return;
                    }
                }
            };
            _0x44ebed['Lpuot']($, f)['attr']({
                'value': lele['headt']
            });
            _0x44ebed['lKREL']($, j)['attr']({
                'value': lele['lastt']
            });
            lele['jump']['last']();
        },
        'head': function() {
            var _0x3c5996 = {
                'eVvSC': '已为您跳过片头',
                'qPlZM': function(_0x439181, _0x39c86f) {
                    return _0x439181(_0x39c86f);
                },
                'AheWx': '.vod-pic',
                'zCKkG': function(_0x3c0c46, _0x3c6197) {
                    return _0x3c0c46 != _0x3c6197;
                },
                'QjUrP': function(_0x1bf714, _0x3283db) {
                    return _0x1bf714 > _0x3283db;
                },
                'HCjfq': function(_0x411618, _0x1261a9) {
                    return _0x411618 == _0x1261a9;
                },
                'VKxjw': function(_0x50020c, _0x1c8608) {
                    return _0x50020c !== _0x1c8608;
                },
                'bJLGY': 'tGJul',
                'MgEtj': function(_0x11ed0b, _0x19505b) {
                    return _0x11ed0b > _0x19505b;
                },
                'HfLPg': function(_0x3e771a, _0xeb5502) {
                    return _0x3e771a === _0xeb5502;
                },
                'wfCxq': 'rnUiJ',
                'wTFgx': 'YbEkL',
                'fzvFp': function(_0x55080e, _0x41860e) {
                    return _0x55080e === _0x41860e;
                },
                'hyZep': 'LUOMF',
                'bbDsN': 'ytlBQ'
            };
            if (_0x3c5996['QjUrP'](lele['stime'], lele['playtime'])) lele['playtime'] = lele['stime'];
            if (_0x3c5996['HCjfq'](lele['frists'], 0x1)) {
                if (_0x3c5996['VKxjw'](_0x3c5996['bJLGY'], _0x3c5996['bJLGY'])) {
                    lele['dp']['seek'](lele['headt']);
                    lele['dp']['notice'](_0x3c5996['eVvSC']);
                } else {
                    if (_0x3c5996['MgEtj'](lele['headt'], lele['playtime']) || _0x3c5996['HCjfq'](lele['playtime'], 0x0)) {
                        if (_0x3c5996['HfLPg'](_0x3c5996['wfCxq'], _0x3c5996['wTFgx'])) {
                            lele['dp']['play']();
                            _0x3c5996['qPlZM']($, _0x3c5996['AheWx'])['remove']();
                        } else {
                            lele['jump_f'] = 0x1;
                        }
                    } else {
                        if (_0x3c5996['fzvFp'](_0x3c5996['hyZep'], _0x3c5996['bbDsN'])) {
                            if (_0x3c5996['zCKkG'](lele['bilibili'], '')) {
                                lele['player']['bdplay'](url);
                            } else {
                                lele['player']['dmplay'](url);
                            }
                        } else {
                            lele['jump_f'] = 0x0;
                        }
                    }
                }
            }
            if (_0x3c5996['HCjfq'](lele['jump_f'], 0x1)) {
                lele['dp']['seek'](lele['headt']);
                lele['dp']['notice'](_0x3c5996['eVvSC']);
            }
        },
        'last': function() {
            var _0x566967 = {
                'pMsex': function(_0x2529e4, _0x379549) {
                    return _0x2529e4 - _0x379549;
                },
                'ytVoq': function(_0x55d5ce, _0x1ef132) {
                    return _0x55d5ce < _0x1ef132;
                },
                'SoYXo': '即将为您跳过片尾',
                'WzBbk': function(_0xfe94aa, _0x271123) {
                    return _0xfe94aa > _0x271123;
                },
                'jbpLK': function(_0x2ad153, _0x52b621) {
                    return _0x2ad153 < _0x52b621;
                },
                'VFddf': function(_0x486a94, _0xbd4aca) {
                    return _0x486a94 != _0xbd4aca;
                },
                'BweLX': function(_0x3949d4, _0x17c862) {
                    return _0x3949d4 == _0x17c862;
                },
                'xungB': function(_0x5ec401, _0x4ab4f8, _0x164a5d) {
                    return _0x5ec401(_0x4ab4f8, _0x164a5d);
                },
                'EQFRn': function(_0x3c7f0a, _0x48e753) {
                    return _0x3c7f0a(_0x48e753);
                },
                'joIgf': '.icon-xj'
            };
            if (_0x566967['VFddf'](config['next'], '')) {
                if (_0x566967['BweLX'](lele['lasts'], 0x1)) {
                    _0x566967['xungB'](setInterval, function() {
                        var _0x11ab87 = _0x566967['pMsex'](lele['dp']['video']['duration'], lele['dp']['video']['currentTime']);
                        if (_0x566967['ytVoq'](_0x11ab87, lele['last_tip'])) lele['dp']['notice'](_0x566967['SoYXo']);
                        if (_0x566967['WzBbk'](lele['lastt'], 0x0) && _0x566967['jbpLK'](_0x11ab87, lele['lastt'])) {
                            localStorage['setItem'](lele['jybf'], '');
                            lele['video']['next']();
                        };
                    }, 0x3e8);
                };
            } else {
                _0x566967['EQFRn']($, _0x566967['joIgf'])['remove']();
            };
        },
        'ad': function(_0x121bc0, _0x5b9937) {}
    },
    'danmu': {
        'send': function() {
            var _0x4fcb7d = {
                'csKFO': function(_0x3a0fa4, _0x596e12, _0x17ec2e) {
                    return _0x3a0fa4(_0x596e12, _0x17ec2e);
                },
                'dWKFw': function(_0x6a7496, _0xdde51c) {
                    return _0x6a7496 * _0xdde51c;
                },
                'OppvY': function(_0x3556fc, _0x394d61) {
                    return _0x3556fc !== _0x394d61;
                },
                'OwHgc': 'nbxyO',
                'eINZw': 'uIQok',
                'HQdUD': function(_0x5fb20, _0x256eae) {
                    return _0x5fb20(_0x256eae);
                },
                'RUdlh': 'value',
                'ISjSE': function(_0x3747f7, _0x494595) {
                    return _0x3747f7 == _0x494595;
                },
                'FAyKd': 'off',
                'PZhMb': '准备就绪，即将为您播放',
                'xSapU': 'GeJsp',
                'haXHP': 'ooaEb',
                'ityoN': 'dmtype',
                'jFdaX': function(_0x544626, _0x47ac89) {
                    return _0x544626 !== _0x47ac89;
                },
                'vCaIb': 'THvkn',
                'AAapN': function(_0x9cbe7, _0x2f9578) {
                    return _0x9cbe7(_0x2f9578);
                },
                'mmzTR': 'size',
                'tYFTt': function(_0x27aef9, _0x220cc3) {
                    return _0x27aef9 > _0x220cc3;
                },
                'Envsd': function(_0x159b8c, _0x53334c) {
                    return _0x159b8c == _0x53334c;
                },
                'aGPSE': '会员专属功能',
                'WGQqC': function(_0xc0e8cc, _0x4f2a18, _0x1eff6d) {
                    return _0xc0e8cc(_0x4f2a18, _0x1eff6d);
                },
                'AhQMe': 'link',
                'gkzmN': 'dmtext',
                'ULlLk': 'color',
                'XQjOg': function(_0x1963ee, _0x27181a) {
                    return _0x1963ee < _0x27181a;
                },
                'SPukV': function(_0x33f325, _0x3792e2) {
                    return _0x33f325 != _0x3792e2;
                },
                'lnegI': '您发送的内容含有敏感字符，请规范您的弹幕内容',
                'iqZJv': '要输入内容啊~',
                'glZwW': 'dmsent',
                'oWLhF': function(_0x3b3d73, _0x7702a6) {
                    return _0x3b3d73 < _0x7702a6;
                },
                'ShJqm': function(_0x5ec0a1, _0x30cb95) {
                    return _0x5ec0a1 - _0x30cb95;
                },
                'wBKak': function(_0x5413ae, _0x47fb4f) {
                    return _0x5413ae * _0x47fb4f;
                },
                'qZUtP': 'muotf',
                'CjKdV': 'oWLuv',
                'qPZAd': function(_0x4f2aa4, _0x158e70) {
                    return _0x4f2aa4 + _0x158e70;
                },
                'sMVIr': '请勿频繁操作！发送弹幕需间隔',
                'qpull': 'click',
                'uyBmA': function(_0x1f08c5, _0x116894) {
                    return _0x1f08c5 == _0x116894;
                },
                'SYzsr': function(_0x517de1, _0x3cec07) {
                    return _0x517de1(_0x3cec07);
                },
                'dBpoI': function(_0x309b73, _0x38afdb, _0x5939e9, _0x21f8e0) {
                    return _0x309b73(_0x38afdb, _0x5939e9, _0x21f8e0);
                },
                'KcysW': '#ADtip',
                'MWbSB': 'FqjDw',
                'uKsMY': 'XxdxE',
                'oOBGI': function(_0x33db2f) {
                    return _0x33db2f();
                },
                'AiTtZ': '.lele-leleplayer-send-icon',
                'uJhIn': function(_0x1b7615, _0x3ccf68) {
                    return _0x1b7615(_0x3ccf68);
                },
                'sUXRK': '#dmtext',
                'Npsyt': '.leleplayer-comment-setting-',
                'kqKxN': 'color input',
                'ifRjj': function(_0xc1e422, _0x55adcc) {
                    return _0xc1e422(_0x55adcc);
                },
                'zICJU': 'type input',
                'jZoxs': function(_0x2e4b2f, _0x44109d) {
                    return _0x2e4b2f(_0x44109d);
                },
                'LTDuV': function(_0x480bfe, _0x404a9d) {
                    return _0x480bfe + _0x404a9d;
                },
                'gcDYc': 'font input'
            };
            g = _0x4fcb7d['SYzsr']($, _0x4fcb7d['AiTtZ']);
            d = _0x4fcb7d['uJhIn']($, _0x4fcb7d['sUXRK']);
            h = _0x4fcb7d['Npsyt'];
            _0x4fcb7d['uJhIn']($, _0x4fcb7d['qPZAd'](h, _0x4fcb7d['kqKxN']))['on'](_0x4fcb7d['qpull'], function() {
                var _0x3ae9aa = {
                    'IDuht': function(_0x20bb2a, _0x1aa9aa, _0x12f131) {
                        return _0x4fcb7d['csKFO'](_0x20bb2a, _0x1aa9aa, _0x12f131);
                    },
                    'vfrlz': function(_0x59bc93, _0x2de2ad) {
                        return _0x4fcb7d['dWKFw'](_0x59bc93, _0x2de2ad);
                    },
                    'oEOgL': function(_0x3cbfe2, _0x272327) {
                        return _0x4fcb7d['OppvY'](_0x3cbfe2, _0x272327);
                    },
                    'iLCKC': _0x4fcb7d['OwHgc'],
                    'vmDCm': _0x4fcb7d['eINZw']
                };
                r = _0x4fcb7d['HQdUD']($, this)['attr'](_0x4fcb7d['RUdlh']);
                _0x4fcb7d['csKFO'](setTimeout, function() {
                    if (_0x3ae9aa['oEOgL'](_0x3ae9aa['iLCKC'], _0x3ae9aa['vmDCm'])) {
                        d['css']({
                            'color': r
                        });
                    } else {
                        _0x3ae9aa['IDuht'](setTimeout, function() {
                            lele['video']['con_play']();
                        }, _0x3ae9aa['vfrlz'](0x1, 0x3e8));
                    }
                }, 0x64);
            });
            _0x4fcb7d['ifRjj']($, _0x4fcb7d['qPZAd'](h, _0x4fcb7d['zICJU']))['on'](_0x4fcb7d['qpull'], function() {
                var _0x165be2 = {
                    'zoGrf': function(_0x14eef8, _0x462959) {
                        return _0x4fcb7d['ISjSE'](_0x14eef8, _0x462959);
                    },
                    'SUEkm': _0x4fcb7d['FAyKd'],
                    'wqQto': _0x4fcb7d['PZhMb'],
                    'FyChz': function(_0x4f8756, _0x22a0ac) {
                        return _0x4fcb7d['OppvY'](_0x4f8756, _0x22a0ac);
                    },
                    'cbvAq': _0x4fcb7d['xSapU'],
                    'nALLL': _0x4fcb7d['haXHP'],
                    'XOkHD': _0x4fcb7d['ityoN']
                };
                if (_0x4fcb7d['jFdaX'](_0x4fcb7d['vCaIb'], _0x4fcb7d['vCaIb'])) {
                    lele['dp']['play']();
                } else {
                    t = _0x4fcb7d['AAapN']($, this)['attr'](_0x4fcb7d['RUdlh']);
                    _0x4fcb7d['csKFO'](setTimeout, function() {
                        var _0x4e4914 = {
                            'feBtF': function(_0x56d210, _0x42016a) {
                                return _0x165be2['zoGrf'](_0x56d210, _0x42016a);
                            },
                            'AoHJu': _0x165be2['SUEkm'],
                            'BFcct': _0x165be2['wqQto']
                        };
                        if (_0x165be2['FyChz'](_0x165be2['cbvAq'], _0x165be2['nALLL'])) {
                            d['attr'](_0x165be2['XOkHD'], t);
                        } else {
                            if (_0x4e4914['feBtF'](danmuon, _0x4e4914['AoHJu'])) {
                                lele['jump']['head']();
                            } else {
                                lele['dp']['notice'](_0x4e4914['BFcct']);
                                lele['video']['play']();
                            }
                        }
                    }, 0x64);
                }
            });
            _0x4fcb7d['jZoxs']($, _0x4fcb7d['LTDuV'](h, _0x4fcb7d['gcDYc']))['on'](_0x4fcb7d['qpull'], function() {
                if (_0x4fcb7d['tYFTt'](up['trysee'], 0x0) && _0x4fcb7d['Envsd'](config['group'], config['group_x'])) {
                    layer['msg'](_0x4fcb7d['aGPSE']);
                    return;
                };
                t = _0x4fcb7d['AAapN']($, this)['attr'](_0x4fcb7d['RUdlh']);
                _0x4fcb7d['WGQqC'](setTimeout, function() {
                    d['attr'](_0x4fcb7d['mmzTR'], t);
                }, 0x64);
            });
            g['on'](_0x4fcb7d['qpull'], function() {
                var _0x48e580 = {
                    'cGraM': _0x4fcb7d['AhQMe']
                };
                a = document['getElementById'](_0x4fcb7d['gkzmN']);
                a = a['value'];
                b = d['attr'](_0x4fcb7d['ityoN']);
                c = d['css'](_0x4fcb7d['ULlLk']);
                z = d['attr'](_0x4fcb7d['mmzTR']);
                for (var _0x18f04d = 0x0; _0x4fcb7d['XQjOg'](_0x18f04d, up['pbgjz']['length']); _0x18f04d++) {
                    if (_0x4fcb7d['SPukV'](a['search'](up['pbgjz'][_0x18f04d]), -0x1)) {
                        layer['msg'](_0x4fcb7d['lnegI']);
                        return;
                    }
                }
                if (_0x4fcb7d['XQjOg'](a['length'], 0x1)) {
                    layer['msg'](_0x4fcb7d['iqZJv']);
                    return;
                }
                var _0x548808 = Date['parse'](new Date());
                var _0x8a2a8c = leleck['get'](_0x4fcb7d['glZwW'], _0x548808);
                if (_0x4fcb7d['oWLhF'](_0x4fcb7d['ShJqm'](_0x548808, _0x8a2a8c), _0x4fcb7d['wBKak'](config['sendtime'], 0x3e8))) {
                    if (_0x4fcb7d['jFdaX'](_0x4fcb7d['qZUtP'], _0x4fcb7d['CjKdV'])) {
                        layer['msg'](_0x4fcb7d['qPZAd'](_0x4fcb7d['qPZAd'](_0x4fcb7d['sMVIr'], config['sendtime']), '秒~'));
                        return;
                    } else {
                        document['getElementById'](_0x48e580['cGraM'])['click']();
                    }
                }
                d['val']('');
                lele['dp']['danmaku']['send']({
                    'text': a,
                    'color': c,
                    'type': b,
                    'size': z
                });
                leleck['set'](_0x4fcb7d['glZwW'], _0x548808);
            });

            function _0x3aa3a0() {
                g['trigger'](_0x4fcb7d['qpull']);
            };
            d['keydown'](function(_0x1ed43c) {
                var _0x2591dd = {
                    'uDjSf': function(_0x4b24cf, _0x377d08) {
                        return _0x4fcb7d['uyBmA'](_0x4b24cf, _0x377d08);
                    },
                    'EmYDf': function(_0x10b198, _0x26295d) {
                        return _0x4fcb7d['SYzsr'](_0x10b198, _0x26295d);
                    },
                    'yDuAK': function(_0x3c442b, _0x4d7cf2, _0x179780, _0x222133) {
                        return _0x4fcb7d['dBpoI'](_0x3c442b, _0x4d7cf2, _0x179780, _0x222133);
                    },
                    'UAatr': _0x4fcb7d['KcysW']
                };
                if (_0x4fcb7d['uyBmA'](_0x1ed43c['keyCode'], 0xd)) {
                    if (_0x4fcb7d['jFdaX'](_0x4fcb7d['MWbSB'], _0x4fcb7d['uKsMY'])) {
                        _0x4fcb7d['oOBGI'](_0x3aa3a0);
                    } else {
                        num--;
                        span['innerHTML'] = num;
                        if (_0x2591dd['uDjSf'](num, 0x0)) {
                            _0x2591dd['EmYDf'](clearInterval, timer);
                            lele['play'](_0x2591dd['yDuAK'](v_decrypt, config['url'], _token_key, key_token));
                            _0x2591dd['EmYDf']($, _0x2591dd['UAatr'])['remove']();
                        }
                    }
                };
            });
        },
        'list': function() {
            var _0x551827 = {
                'npweN': function(_0x24687f, _0x43b731) {
                    return _0x24687f == _0x43b731;
                },
                'pDziX': function(_0x25bee1, _0x3b693f) {
                    return _0x25bee1 !== _0x3b693f;
                },
                'ZMmlo': 'IImrV',
                'KgScN': '3|0|4|1|2',
                'FgaQs': function(_0x580c43, _0x23fdfc) {
                    return _0x580c43(_0x23fdfc);
                },
                'OfBNN': '.danmuku-num',
                'gduYB': function(_0x222426, _0xe28a75) {
                    return _0x222426(_0xe28a75);
                },
                'udGIC': '.danmuku-list',
                'NcGAG': 'dblclick',
                'PuDGd': '恶意刷屏',
                'nNTgQ': function(_0xd60b3c, _0x179bc5) {
                    return _0xd60b3c(_0x179bc5);
                },
                'eGFkn': '.list-show',
                'vlylx': function(_0x378f9d, _0x374957) {
                    return _0x378f9d === _0x374957;
                },
                'sLZzn': 'knZKb',
                'EkCxm': function(_0x5ddae6, _0xfa4431) {
                    return _0x5ddae6(_0xfa4431);
                },
                'YtYGV': 'time',
                'qALBB': function(_0x56bf1f, _0x1425dc) {
                    return _0x56bf1f + _0x1425dc;
                },
                'uGOVe': function(_0x222fa8, _0x473a59) {
                    return _0x222fa8 + _0x473a59;
                },
                'ahQbz': '?ac=get&id=',
                'xlxxy': function(_0x1134e4, _0x199eb2) {
                    return _0x1134e4(_0x199eb2);
                },
                'bZsKQ': function(_0x195b84, _0x5528fd) {
                    return _0x195b84(_0x5528fd);
                },
                'qaxMd': '.leleplayer-list-icon,.lele-leleplayer-send-icon',
                'iOSto': 'click',
                'bZaWd': '<div class="dmrules"><a target="_blank" href="',
                'ShRpS': '</a></div>',
                'rQCKQ': function(_0x393458, _0x412a29) {
                    return _0x393458(_0x412a29);
                },
                'KLZCf': 'div.leleplayer-comment-box:last',
                'PUzcX': function(_0x544104, _0x3f20ad) {
                    return _0x544104(_0x3f20ad);
                },
                'gXVSM': '.leleplayer-watching-number',
                'nBKoU': function(_0xd3e3d5, _0x3455a8) {
                    return _0xd3e3d5(_0x3455a8);
                },
                'Yicaq': '.leleplayer-info-panel-item-title-amount .leleplayer-info-panel-item-title',
                'NwoAh': '违规词',
                'NmQPk': function(_0x5458e2, _0x3cba87) {
                    return _0x5458e2 < _0x3cba87;
                },
                'oOTKG': function(_0x1f9655, _0x566b58) {
                    return _0x1f9655 + _0x566b58;
                },
                'FEaNw': function(_0x4f16ba, _0x343fd1) {
                    return _0x4f16ba + _0x343fd1;
                },
                'HwrDZ': '<e>',
                'STGfQ': '</e>',
                'hNKAx': '#vod-title',
                'kSUBP': function(_0x29cc6a, _0xfe8829, _0x148cf7, _0x58580a) {
                    return _0x29cc6a(_0xfe8829, _0x148cf7, _0x58580a);
                },
                'QFaea': '.leleplayer-list-icon',
                'NzfaJ': '.leleplayer-danmu',
                'Tbojh': 'show'
            };
            _0x551827['bZsKQ']($, _0x551827['qaxMd'])['on'](_0x551827['iOSto'], function() {
                var _0x14706b = {
                    'mYFWm': _0x551827['PuDGd'],
                    'PeEAX': function(_0x526cef, _0x49f5c2) {
                        return _0x551827['nNTgQ'](_0x526cef, _0x49f5c2);
                    },
                    'tNcug': _0x551827['eGFkn'],
                    'YJQiH': function(_0x48681a, _0x4958d4) {
                        return _0x551827['vlylx'](_0x48681a, _0x4958d4);
                    },
                    'XZQbM': _0x551827['sLZzn'],
                    'EHTvf': function(_0xebb0be, _0x187307) {
                        return _0x551827['EkCxm'](_0xebb0be, _0x187307);
                    },
                    'DWnSc': _0x551827['YtYGV']
                };
                _0x551827['EkCxm']($, _0x551827['eGFkn'])['empty']();
                $['ajax']({
                    'url': _0x551827['qALBB'](_0x551827['uGOVe'](config['api'], _0x551827['ahQbz']), lele['id']),
                    'success': function(_0x346b4c) {
                        if (_0x551827['npweN'](_0x346b4c['code'], 0x17)) {
                            if (_0x551827['pDziX'](_0x551827['ZMmlo'], _0x551827['ZMmlo'])) {
                                lele['danmu']['post_r'](a, b, c, _0x346b4c, _0x14706b['mYFWm']);
                            } else {
                                var _0x15ffa0 = _0x551827['KgScN']['split']('|'),
                                    _0x3a1d96 = 0x0;
                                while (!![]) {
                                    switch (_0x15ffa0[_0x3a1d96++]) {
                                        case '0':
                                            b = _0x346b4c['name'];
                                            continue;
                                        case '1':
                                            _0x551827['FgaQs']($, _0x551827['OfBNN'])['text'](c);
                                            continue;
                                        case '2':
                                            _0x551827['FgaQs']($, a)['each'](function(_0x57d574, _0x3f8f04) {
                                                l = '<d class="danmuku-list" time="' + _0x3f8f04[0x0] + '"><li>' + lele['formatTime'](_0x3f8f04[0x0]) + '</li><li title="' + _0x3f8f04[0x4] + '\">' + _0x3f8f04[0x4] + '</li><li title="用户：' + _0x3f8f04[0x3] + '  IP地址：' + _0x3f8f04[0x5] + '\">' + _0x3f8f04[0x6] + '</li><li class="report" onclick="lele.danmu.report(\'' + _0x3f8f04[0x5] + '\',\'' + b + '\',\'' + _0x3f8f04[0x4] + '\',\'' + _0x3f8f04[0x3] + '\')">举报</li></d>';
                                                _0x14706b['PeEAX']($, _0x14706b['tNcug'])['append'](l);
                                            });
                                            continue;
                                        case '3':
                                            a = _0x346b4c['danmuku'];
                                            continue;
                                        case '4':
                                            c = _0x346b4c['danum'];
                                            continue;
                                    }
                                    break;
                                }
                            }
                        }
                        _0x551827['gduYB']($, _0x551827['udGIC'])['on'](_0x551827['NcGAG'], function() {
                            if (_0x14706b['YJQiH'](_0x14706b['XZQbM'], _0x14706b['XZQbM'])) {
                                lele['dp']['seek'](_0x14706b['EHTvf']($, this)['attr'](_0x14706b['DWnSc']));
                            } else {
                                lele['video']['end']();
                            }
                        });
                    }
                });
            });
            var _0x1dd5f7 = _0x551827['uGOVe'](_0x551827['uGOVe'](_0x551827['uGOVe'](_0x551827['uGOVe'](_0x551827['bZaWd'], config['dmrule']), '\">'), config['dmliyi']), _0x551827['ShRpS']);
            _0x551827['rQCKQ']($, _0x551827['KLZCf'])['append'](_0x1dd5f7);
            _0x551827['PUzcX']($, _0x551827['gXVSM'])['text'](up['usernum']);
            _0x551827['nBKoU']($, _0x551827['Yicaq'])['html'](_0x551827['NwoAh']);
            for (var _0x2567a9 = 0x0; _0x551827['NmQPk'](_0x2567a9, up['pbgjz']['length']); _0x2567a9++) {
                var _0x31df65 = _0x551827['oOTKG'](_0x551827['FEaNw'](_0x551827['HwrDZ'], up['pbgjz'][_0x2567a9]), _0x551827['STGfQ']);
                _0x551827['nBKoU']($, _0x551827['hNKAx'])['append'](_0x31df65);
            }
            _0x551827['kSUBP'](_0x175811, _0x551827['QFaea'], _0x551827['NzfaJ'], _0x551827['Tbojh']);

            function _0x175811(_0x36e90f, _0xf9ebb, _0x51f50a, _0x3dc107) {
                var _0x5b03ff = {
                    'YvIwL': function(_0x5f04e3, _0x347ba4) {
                        return _0x551827['EkCxm'](_0x5f04e3, _0x347ba4);
                    }
                };
                _0x551827['xlxxy']($, _0x36e90f)['click'](function() {
                    _0x5b03ff['YvIwL']($, _0xf9ebb)['toggleClass'](_0x51f50a);
                    _0x5b03ff['YvIwL']($, _0x3dc107)['remove']();
                });
            }
        },
        'report': function(_0x19434f, _0x4625e3, _0x39bc1b, _0x1644b4) {
            var _0x2f9058 = {
                'uXqce': function(_0x56c31, _0xe08ce7) {
                    return _0x56c31(_0xe08ce7);
                },
                'Oimkt': function(_0x1f1d7e, _0xd21aa7) {
                    return _0x1f1d7e > _0xd21aa7;
                },
                'cYTva': function(_0x2ca8ad) {
                    return _0x2ca8ad();
                },
                'EynKr': function(_0x4e88c1, _0x352b52) {
                    return _0x4e88c1 !== _0x352b52;
                },
                'ZrMGu': 'zNsoa',
                'WihdY': '恶意刷屏',
                'YwjsS': '赌博诈骗',
                'ZspTW': function(_0xd22c78, _0x2996ed) {
                    return _0xd22c78 > _0x2996ed;
                },
                'pfUaF': function(_0x7edb62, _0x4e1dae) {
                    return _0x7edb62 - _0x4e1dae;
                },
                'XMpvm': '3|0|4|1|2',
                'Andnf': '#ADtip',
                'VqEaL': function(_0x44a1f2, _0x420043, _0x34d1c9, _0x30287a) {
                    return _0x44a1f2(_0x420043, _0x34d1c9, _0x30287a);
                },
                'gAgoP': function(_0x2f8edb, _0x5e26ff) {
                    return _0x2f8edb(_0x5e26ff);
                },
                'fVIEU': 'body',
                'dKjUK': 'danmu-off',
                'mzTiw': function(_0x4f9a2d, _0x25e648) {
                    return _0x4f9a2d(_0x25e648);
                },
                'TaceF': '#ADplayer',
                'nJYMZ': function(_0x31a758, _0x3db77e) {
                    return _0x31a758 === _0x3db77e;
                },
                'azICq': 'VfeLX',
                'XotIW': '人身攻击',
                'OgTQu': '侵犯隐私',
                'kpTPQ': '.memory-play-wrap',
                'tqjHd': 'jSCWr',
                'yWQwJ': 'MGItB',
                'uYfTW': '垃圾广告',
                'PntHG': 'CUiLT',
                'CHJAg': 'oElyY',
                'QcnkC': '违法违禁',
                'usFIs': function(_0x1f54fe, _0x1b3c25) {
                    return _0x1f54fe(_0x1b3c25);
                },
                'BsFkw': 'aBKaA',
                'DvCXO': 'KsTUo',
                'sXtgm': '色情低俗',
                'xCxoQ': function(_0x251513, _0x5a0f26) {
                    return _0x251513 + _0x5a0f26;
                },
                'kSgCC': '<!--br><br><span style="color:#333">请选择需要举报的类型</span-->',
                'KFIfd': '举报弹幕'
            };
            layer['confirm'](_0x2f9058['xCxoQ'](_0x2f9058['xCxoQ']('', _0x39bc1b), _0x2f9058['kSgCC']), {
                'anim': 0x1,
                'title': _0x2f9058['KFIfd'],
                'btn': [_0x2f9058['QcnkC'], _0x2f9058['sXtgm'], _0x2f9058['WihdY'], _0x2f9058['YwjsS'], _0x2f9058['XotIW'], _0x2f9058['OgTQu'], _0x2f9058['uYfTW'], '剧透', '引战'],
                'btn3': function(_0x5aa189, _0x54d0cc) {
                    var _0x296ecf = {
                        'zEvyj': function(_0x1ff25f, _0x20ce6d) {
                            return _0x2f9058['uXqce'](_0x1ff25f, _0x20ce6d);
                        },
                        'TASEG': function(_0x5ed63c, _0x3a563e) {
                            return _0x2f9058['Oimkt'](_0x5ed63c, _0x3a563e);
                        },
                        'jgQXA': function(_0x211366) {
                            return _0x2f9058['cYTva'](_0x211366);
                        }
                    };
                    if (_0x2f9058['EynKr'](_0x2f9058['ZrMGu'], _0x2f9058['ZrMGu'])) {
                        _0x2f9058['uXqce']($, _0x4625e3)['click'](function() {
                            o = _0x296ecf['zEvyj']($, t)['val']();
                            if (_0x296ecf['TASEG'](o, 0x0)) {
                                leleck['set'](_0x39bc1b, 0x1);
                            } else {
                                _0x296ecf['jgQXA'](er);
                            };
                        });
                    } else {
                        lele['danmu']['post_r'](_0x19434f, _0x4625e3, _0x39bc1b, _0x1644b4, _0x2f9058['WihdY']);
                    }
                },
                'btn4': function(_0x84cee5, _0x39a4e2) {
                    lele['danmu']['post_r'](_0x19434f, _0x4625e3, _0x39bc1b, _0x1644b4, _0x2f9058['YwjsS']);
                },
                'btn5': function(_0x19720e, _0x19a557) {
                    var _0x42328a = {
                        'EEakd': function(_0x5af881, _0x414f46) {
                            return _0x2f9058['ZspTW'](_0x5af881, _0x414f46);
                        },
                        'MAATE': function(_0x38d94a, _0x4d4de7) {
                            return _0x2f9058['pfUaF'](_0x38d94a, _0x4d4de7);
                        },
                        'pXKJH': _0x2f9058['XMpvm'],
                        'sAddV': function(_0x55d0ec, _0x5b2a9e) {
                            return _0x2f9058['uXqce'](_0x55d0ec, _0x5b2a9e);
                        },
                        'DDPsj': _0x2f9058['Andnf'],
                        'ELear': function(_0x55319d, _0x2e7257, _0x34e525, _0x5e0c59) {
                            return _0x2f9058['VqEaL'](_0x55319d, _0x2e7257, _0x34e525, _0x5e0c59);
                        },
                        'NvNrA': function(_0x458b5c, _0x3e6b33) {
                            return _0x2f9058['gAgoP'](_0x458b5c, _0x3e6b33);
                        },
                        'MZURK': _0x2f9058['fVIEU'],
                        'bThKP': _0x2f9058['dKjUK'],
                        'HApXP': function(_0x273099, _0xab9348) {
                            return _0x2f9058['mzTiw'](_0x273099, _0xab9348);
                        },
                        'NvMrB': _0x2f9058['TaceF']
                    };
                    if (_0x2f9058['nJYMZ'](_0x2f9058['azICq'], _0x2f9058['azICq'])) {
                        lele['danmu']['post_r'](_0x19434f, _0x4625e3, _0x39bc1b, _0x1644b4, _0x2f9058['XotIW']);
                    } else {
                        if (_0x42328a['EEakd'](lele['ad']['video']['currentTime'], _0x42328a['MAATE'](lele['ad']['video']['duration'], 0.1))) {
                            var _0x509d7a = _0x42328a['pXKJH']['split']('|'),
                                _0x16cd28 = 0x0;
                            while (!![]) {
                                switch (_0x509d7a[_0x16cd28++]) {
                                    case '0':
                                        lele['ad']['destroy']();
                                        continue;
                                    case '1':
                                        _0x42328a['sAddV']($, _0x42328a['DDPsj'])['remove']();
                                        continue;
                                    case '2':
                                        lele['play'](_0x42328a['ELear'](v_decrypt, config['url'], _token_key, key_token));
                                        continue;
                                    case '3':
                                        _0x42328a['NvNrA']($, _0x42328a['MZURK'])['removeClass'](_0x42328a['bThKP']);
                                        continue;
                                    case '4':
                                        _0x42328a['HApXP']($, _0x42328a['NvMrB'])['remove']();
                                        continue;
                                }
                                break;
                            }
                        }
                    }
                },
                'btn6': function(_0x3e075b, _0x118732) {
                    lele['danmu']['post_r'](_0x19434f, _0x4625e3, _0x39bc1b, _0x1644b4, _0x2f9058['OgTQu']);
                },
                'btn7': function(_0x50b75a, _0x4ed491) {
                    if (_0x2f9058['nJYMZ'](_0x2f9058['tqjHd'], _0x2f9058['yWQwJ'])) {
                        _0x2f9058['mzTiw']($, _0x2f9058['kpTPQ'])['remove']();
                    } else {
                        lele['danmu']['post_r'](_0x19434f, _0x4625e3, _0x39bc1b, _0x1644b4, _0x2f9058['uYfTW']);
                    }
                },
                'btn8': function(_0x17b6a4, _0x5438fe) {
                    var _0xabc844 = {
                        'EeJXk': function(_0x581d6e) {
                            return _0x2f9058['cYTva'](_0x581d6e);
                        }
                    };
                    if (_0x2f9058['EynKr'](_0x2f9058['PntHG'], _0x2f9058['CHJAg'])) {
                        lele['danmu']['post_r'](_0x19434f, _0x4625e3, _0x39bc1b, _0x1644b4, '剧透');
                    } else {
                        _0xabc844['EeJXk'](k);
                    }
                },
                'btn9': function(_0x94f6ed, _0x3a82be) {
                    lele['danmu']['post_r'](_0x19434f, _0x4625e3, _0x39bc1b, _0x1644b4, '引战');
                }
            }, function(_0x53bd57, _0x250e80) {
                lele['danmu']['post_r'](_0x19434f, _0x4625e3, _0x39bc1b, _0x1644b4, _0x2f9058['QcnkC']);
            }, function(_0x4d21ca) {
                if (_0x2f9058['EynKr'](_0x2f9058['BsFkw'], _0x2f9058['DvCXO'])) {
                    lele['danmu']['post_r'](_0x19434f, _0x4625e3, _0x39bc1b, _0x1644b4, _0x2f9058['sXtgm']);
                } else {
                    _0x2f9058['usFIs'](clearInterval, timer);
                    lele['play'](_0x2f9058['VqEaL'](v_decrypt, config['url'], _token_key, key_token));
                    _0x2f9058['usFIs']($, _0x2f9058['Andnf'])['remove']();
                }
            });
        },
        'post_r': function(_0x5890e4, _0x9e4e4d, _0x3962a6, _0x26f18c, _0x4ee64c) {
            var _0x8c423 = {
                'OwseW': function(_0x2e194, _0x17f7b6) {
                    return _0x2e194 + _0x17f7b6;
                },
                'PgSKY': '<e>',
                'yNKqh': '</e>',
                'Ricna': function(_0x4f3031, _0xa6333c) {
                    return _0x4f3031(_0xa6333c);
                },
                'fAoru': '#vod-title',
                'pIMHl': function(_0x395577, _0x145d49) {
                    return _0x395577 === _0x145d49;
                },
                'KawuI': 'NVfXU',
                'yDZne': '举报成功！感谢您为守护弹幕作出了贡献',
                'zhWVF': '服务故障 or 网络异常，稍后再试6！',
                'QApqV': 'GET',
                'ldBdA': function(_0xf4dfb8, _0x38c768) {
                    return _0xf4dfb8 + _0x38c768;
                },
                'qrruK': function(_0x5f0f54, _0x474094) {
                    return _0x5f0f54 + _0x474094;
                },
                'VYefV': function(_0x8a7ef5, _0x204173) {
                    return _0x8a7ef5 + _0x204173;
                },
                'oGLXt': function(_0x56e217, _0x288edf) {
                    return _0x56e217 + _0x288edf;
                },
                'GYBAC': '?ac=report&cid=',
                'phIhg': '&user=',
                'MuSHk': '&type=',
                'GAiQq': '&title=',
                'ImgYr': '&text=',
                'VXmyo': '&referer=',
                'VXEvD': 'json'
            };
            $['ajax']({
                'type': _0x8c423['QApqV'],
                'url': _0x8c423['OwseW'](_0x8c423['ldBdA'](_0x8c423['ldBdA'](_0x8c423['ldBdA'](_0x8c423['ldBdA'](_0x8c423['ldBdA'](_0x8c423['ldBdA'](_0x8c423['qrruK'](_0x8c423['VYefV'](_0x8c423['oGLXt'](_0x8c423['oGLXt'](_0x8c423['oGLXt'](config['api'], _0x8c423['GYBAC']), _0x26f18c), _0x8c423['phIhg']), _0x5890e4), _0x8c423['MuSHk']), _0x4ee64c), _0x8c423['GAiQq']), _0x9e4e4d), _0x8c423['ImgYr']), _0x3962a6), _0x8c423['VXmyo']), document['referrer']),
                'cache': ![],
                'dataType': _0x8c423['VXEvD'],
                'beforeSend': function() {},
                'success': function(_0x4f9f21) {
                    var _0x18c72a = {
                        'wOJDq': function(_0x5baf3d, _0x1fbcf7) {
                            return _0x8c423['OwseW'](_0x5baf3d, _0x1fbcf7);
                        },
                        'ZTMGK': _0x8c423['PgSKY'],
                        'zipYh': _0x8c423['yNKqh'],
                        'UFzUf': function(_0x4ea21e, _0x9d95df) {
                            return _0x8c423['Ricna'](_0x4ea21e, _0x9d95df);
                        },
                        'cIkzy': _0x8c423['fAoru']
                    };
                    if (_0x8c423['pIMHl'](_0x8c423['KawuI'], _0x8c423['KawuI'])) {
                        layer['msg'](_0x8c423['yDZne']);
                    } else {
                        var _0x31a46c = _0x18c72a['wOJDq'](_0x18c72a['wOJDq'](_0x18c72a['ZTMGK'], up['pbgjz'][i]), _0x18c72a['zipYh']);
                        _0x18c72a['UFzUf']($, _0x18c72a['cIkzy'])['append'](_0x31a46c);
                    }
                },
                'error': function(_0x41622f) {
                    var _0x5ad90a = _0x8c423['zhWVF'];
                    layer['msg'](_0x5ad90a);
                }
            });
        }
    },
    'setCookie': function(_0x30d665, _0x3aea51, _0x2cc11e) {
        var _0x80ba28 = {
            'xdjPk': function(_0x12640d, _0x2df16d) {
                return _0x12640d + _0x2df16d;
            },
            'gimFL': function(_0x369315, _0x2d23af) {
                return _0x369315 + _0x2d23af;
            },
            'zpWtW': function(_0x25f804, _0x213913) {
                return _0x25f804 + _0x213913;
            },
            'fXTbC': function(_0x16df7, _0x37d66c) {
                return _0x16df7 + _0x37d66c;
            },
            'uvNxe': function(_0xa3905, _0x3d040d) {
                return _0xa3905(_0x3d040d);
            },
            'zsVMI': function(_0x229820, _0x303a93) {
                return _0x229820 === _0x303a93;
            },
            'ZtadJ': ';expires='
        };
        var _0x145bdf = new Date();
        _0x145bdf['setHours'](_0x80ba28['xdjPk'](_0x145bdf['getHours'](), _0x2cc11e));
        document['cookie'] = _0x80ba28['gimFL'](_0x80ba28['zpWtW'](_0x80ba28['fXTbC'](_0x30d665, '='), _0x80ba28['uvNxe'](escape, _0x3aea51)), _0x80ba28['zsVMI'](_0x2cc11e, null) ? '' : _0x80ba28['fXTbC'](_0x80ba28['ZtadJ'], _0x145bdf['toGMTString']()));
    },
    'getCookie': function(_0x545bc4) {
        var _0xb58580 = {
            'VWyOA': function(_0x21a419, _0xae34ce) {
                return _0x21a419(_0xae34ce);
            },
            'JuqXi': 'checked',
            'Smhui': function(_0x443327) {
                return _0x443327();
            },
            'ORzbZ': function(_0x1607bf, _0x16138f) {
                return _0x1607bf(_0x16138f);
            },
            'dzOih': '#link1',
            'jawHs': function(_0x36c396, _0x4a84b2) {
                return _0x36c396 > _0x4a84b2;
            },
            'AXlAj': function(_0x24f856, _0x455ab1) {
                return _0x24f856 + _0x455ab1;
            },
            'JQLwZ': function(_0x54b2f3, _0x47bdfc) {
                return _0x54b2f3 !== _0x47bdfc;
            },
            'BCqFZ': 'WvUfm',
            'gMGFc': 'jXtgR',
            'yIHFG': function(_0x3b6dd1, _0x524a8b) {
                return _0x3b6dd1 + _0x524a8b;
            },
            'aWHbD': function(_0x36b6f5, _0x575fe5) {
                return _0x36b6f5 === _0x575fe5;
            },
            'fZQFH': function(_0x20d8bc, _0x4d64d6) {
                return _0x20d8bc !== _0x4d64d6;
            },
            'GeOLM': 'zyTRH',
            'hebmY': function(_0xf1bf3c, _0x223749) {
                return _0xf1bf3c(_0x223749);
            }
        };
        if (_0xb58580['jawHs'](document['cookie']['length'], 0x0)) {
            c_start = document['cookie']['indexOf'](_0xb58580['AXlAj'](_0x545bc4, '='));
            if (_0xb58580['JQLwZ'](c_start, -0x1)) {
                if (_0xb58580['JQLwZ'](_0xb58580['BCqFZ'], _0xb58580['gMGFc'])) {
                    c_start = _0xb58580['yIHFG'](_0xb58580['yIHFG'](c_start, _0x545bc4['length']), 0x1);
                    c_end = document['cookie']['indexOf'](';', c_start);
                    if (_0xb58580['aWHbD'](c_end, -0x1)) {
                        if (_0xb58580['fZQFH'](_0xb58580['GeOLM'], _0xb58580['GeOLM'])) {
                            _0xb58580['VWyOA']($, b)['toggleClass'](_0xb58580['JuqXi']);
                            _0xb58580['Smhui'](su);
                            g = _0xb58580['ORzbZ']($, t)['val']();
                            leleck['set'](e, g);
                        } else {
                            c_end = document['cookie']['length'];
                        }
                    };
                    return _0xb58580['hebmY'](unescape, document['cookie']['substring'](c_start, c_end));
                } else {
                    _0xb58580['ORzbZ']($, _0xb58580['dzOih'])['fadeIn']();
                }
            }
        }
        return '';
    },
    'formatTime': function(_0x29d7c6) {
        var _0x10d6a5 = {
            'XSWjU': function(_0x3d5b94, _0xab3b07) {
                return _0x3d5b94(_0xab3b07);
            },
            'uLXsk': function(_0x33a9d4, _0x45e0b5) {
                return _0x33a9d4 / _0x45e0b5;
            },
            'BDsjU': function(_0x5ed14d, _0x14ab24) {
                return _0x5ed14d % _0x14ab24;
            },
            'vWTue': function(_0x54b2e8, _0x28a88d) {
                return _0x54b2e8(_0x28a88d);
            },
            'mmvYg': function(_0x1abbf6, _0x4f7069) {
                return _0x1abbf6 % _0x4f7069;
            },
            'ZWocU': '0$1'
        };
        return [_0x10d6a5['XSWjU'](parseInt, _0x10d6a5['uLXsk'](_0x10d6a5['uLXsk'](_0x29d7c6, 0x3c), 0x3c)), _0x10d6a5['XSWjU'](parseInt, _0x10d6a5['BDsjU'](_0x10d6a5['uLXsk'](_0x29d7c6, 0x3c), 0x3c)), _0x10d6a5['vWTue'](parseInt, _0x10d6a5['mmvYg'](_0x29d7c6, 0x3c))]['join'](':')['replace'](/\b(\d)\b/g, _0x10d6a5['ZWocU']);
    },
    'loadedmetadataHandler': function() {
        var _0x1ee9c1 = {
            'IGMuc': function(_0x48c48c, _0x47dd7c) {
                return _0x48c48c(_0x47dd7c);
            },
            'lYmzV': '#loading-box',
            'SdzGw': function(_0x321f6f, _0x4288a6) {
                return _0x321f6f > _0x4288a6;
            },
            'XkjRp': function(_0x2faa81, _0x17be13) {
                return _0x2faa81 < _0x17be13;
            },
            'SjwsP': function(_0x9eb776, _0x476843, _0x42df87) {
                return _0x9eb776(_0x476843, _0x42df87);
            },
            'CcsrW': function(_0x300feb, _0x1dd919) {
                return _0x300feb * _0x1dd919;
            },
            'uANET': function(_0xdcf038, _0x543886) {
                return _0xdcf038 == _0x543886;
            },
            'OJuew': 'off',
            'sXRxx': function(_0xb317f4, _0x1981c7) {
                return _0xb317f4 === _0x1981c7;
            },
            'TFMEm': 'wBJxG',
            'SVPlk': function(_0x314e29, _0x4c5c79) {
                return _0x314e29 === _0x4c5c79;
            },
            'wMVFX': 'ioweo',
            'qYLhU': '准备就绪，即将为您播放',
            'fuWsK': 'timeupdate'
        };
        if (_0x1ee9c1['SdzGw'](lele['playtime'], 0x0) && _0x1ee9c1['XkjRp'](lele['dp']['video']['currentTime'], lele['playtime'])) {
            _0x1ee9c1['SjwsP'](setTimeout, function() {
                lele['video']['con_play']();
            }, _0x1ee9c1['CcsrW'](0x1, 0x3e8));
        } else {
            if (_0x1ee9c1['uANET'](danmuon, _0x1ee9c1['OJuew'])) {
                if (_0x1ee9c1['sXRxx'](_0x1ee9c1['TFMEm'], _0x1ee9c1['TFMEm'])) {
                    lele['jump']['head']();
                } else {
                    lele['autoplay'] = ![];
                }
            } else {
                if (_0x1ee9c1['SVPlk'](_0x1ee9c1['wMVFX'], _0x1ee9c1['wMVFX'])) {
                    lele['dp']['notice'](_0x1ee9c1['qYLhU']);
                    lele['video']['play']();
                } else {
                    _0x1ee9c1['IGMuc']($, _0x1ee9c1['lYmzV'])['remove']();
                }
            }
        }
        lele['dp']['on'](_0x1ee9c1['fuWsK'], function() {
            lele['timeupdateHandler']();
        });
    },
    'timeupdateHandler': function() {
        localStorage['setItem'](lele['jybf'], lele['dp']['video']['currentTime']);
    },
    'endedHandler': function() {
        var _0x50ebb2 = {
            'bmSUZ': '请输入有效时间哟！',
            'vpEpo': function(_0x2f80d4, _0x12bb30) {
                return _0x2f80d4 === _0x12bb30;
            },
            'IyRNj': 'JNsSK',
            'dqjzM': function(_0x57599a, _0x5b27f8) {
                return _0x57599a != _0x5b27f8;
            },
            'uBpIe': function(_0x5132ce, _0x314a51) {
                return _0x5132ce === _0x314a51;
            },
            'CyKlh': 'GKEBu',
            'nHMfq': '5s后,将自动为您播放下一集',
            'PPjTd': function(_0x199a41, _0x10a764, _0x40fc40) {
                return _0x199a41(_0x10a764, _0x40fc40);
            },
            'SQhad': function(_0x4d2ddb, _0x22e6b3) {
                return _0x4d2ddb * _0x22e6b3;
            },
            'DCwMO': '视频播放已结束'
        };
        localStorage['setItem'](lele['jybf'], '');
        if (_0x50ebb2['dqjzM'](config['next'], '')) {
            if (_0x50ebb2['uBpIe'](_0x50ebb2['CyKlh'], _0x50ebb2['CyKlh'])) {
                lele['dp']['notice'](_0x50ebb2['nHMfq']);
                _0x50ebb2['PPjTd'](setTimeout, function() {
                    lele['video']['next']();
                }, _0x50ebb2['SQhad'](0x5, 0x3e8));
            } else {
                layer['msg'](_0x50ebb2['bmSUZ']);
            }
        } else {
            lele['dp']['notice'](_0x50ebb2['DCwMO']);
            _0x50ebb2['PPjTd'](setTimeout, function() {
                if (_0x50ebb2['vpEpo'](_0x50ebb2['IyRNj'], _0x50ebb2['IyRNj'])) {
                    lele['video']['end']();
                } else {
                    _peerId = peerIdData;
                }
            }, _0x50ebb2['SQhad'](0x2, 0x3e8));
        }
    },
    'player': {
        'play': function(_0x3d5927) {
            var _0x2f9344 = {
                'EgkHR': 'totalP2PDownloaded',
                'StJNG': 'totalP2PUploaded',
                'ciqAL': function(_0x311d3b) {
                    return _0x311d3b();
                },
                'fezfb': function(_0x5c1b87) {
                    return _0x5c1b87();
                },
                'HIzkU': '举报成功！感谢您为守护弹幕作出了贡献',
                'MbVVe': function(_0x235a14, _0x9270fe) {
                    return _0x235a14 === _0x9270fe;
                },
                'XoCRm': 'zmDfo',
                'xDVRT': 'stats',
                'HkThN': 'peerId',
                'vxIvu': 'peers',
                'batuJ': function(_0x583309, _0x29c757) {
                    return _0x583309(_0x29c757);
                },
                'CFijt': 'body',
                'rQAfo': 'danmu-off',
                'QBUTq': 'player',
                'avZJi': 'auto',
                'kPfln': 'VoYQj',
                'tTuQj': '<style type="text/css">',
                'jCtse': '#loading-box{display: none;}',
                'kqVpv': '</style>',
                'CcDQh': function(_0xcb9f42, _0x53a283) {
                    return _0xcb9f42(_0x53a283);
                }
            };
            _0x2f9344['batuJ']($, _0x2f9344['CFijt'])['addClass'](_0x2f9344['rQAfo']);
            lele['dp'] = new leleplayer({
                'autoplay': lele['autoplay'],
                'element': document['getElementById'](_0x2f9344['QBUTq']),
                'theme': config['color'],
                'logo': config['logo'],
                'video': {
                    'url': _0x3d5927,
                    'pic': config['bjt'],
                    'type': _0x2f9344['avZJi'],
                    'customType': {
                        'customHls': function(_0x2a3cf6, _0x2a44e3) {
                            var _0x566d30 = {
                                'oohlm': function(_0x4dc1b0) {
                                    return _0x2f9344['fezfb'](_0x4dc1b0);
                                },
                                'uiqcw': _0x2f9344['HIzkU']
                            };
                            if (_0x2f9344['MbVVe'](_0x2f9344['XoCRm'], _0x2f9344['XoCRm'])) {
                                const _0x26ef29 = new Hls({
                                    'debug': ![],
                                    'p2pConfig': {
                                        'logLevel': !![],
                                        'live': ![]
                                    }
                                });
                                _0x26ef29['loadSource'](_0x2a3cf6['src']);
                                _0x26ef29['attachMedia'](_0x2a3cf6);
                                _0x26ef29['p2pEngine']['on'](_0x2f9344['xDVRT'], function(_0x22655a) {
                                    tota1P2PDownloaded = _0x22655a[_0x2f9344['EgkHR']];
                                    totalP2PUploaded = _0x22655a[_0x2f9344['StJNG']];
                                    _0x2f9344['ciqAL'](updateStats);
                                })['on'](_0x2f9344['HkThN'], function(_0x3e3b06) {
                                    _peerId = _0x3e3b06;
                                })['on'](_0x2f9344['vxIvu'], function(_0xc9952) {
                                    _peers = _0xc9952['length'];
                                    _0x566d30['oohlm'](updateStats);
                                });
                            } else {
                                layer['msg'](_0x566d30['uiqcw']);
                            }
                        }
                    }
                }
            });
            if (lele['Weixin']()) {
                if (_0x2f9344['MbVVe'](_0x2f9344['kPfln'], _0x2f9344['kPfln'])) {
                    var _0x130540 = _0x2f9344['tTuQj'];
                    _0x130540 += _0x2f9344['jCtse'];
                    _0x130540 += _0x2f9344['kqVpv'];
                    _0x2f9344['CcDQh']($, _0x2f9344['CFijt'])['append'](_0x130540)['addClass']('');
                } else {
                    lele['dp']['fullScreen']['cancel']();
                }
            }
            lele['def']();
            lele['jump']['head']();
        },
        'adplay': function(_0x499ae1) {
            var _0x5d5f8d = {
                'psgyH': 'totalP2PDownloaded',
                'fUizC': 'totalP2PUploaded',
                'dJLOl': function(_0x19b2b7) {
                    return _0x19b2b7();
                },
                'Pxsji': function(_0x271190, _0x122cb8) {
                    return _0x271190(_0x122cb8);
                },
                'TKzVs': '.list-show',
                'RHaOJ': function(_0x3051d4, _0x446fb3) {
                    return _0x3051d4 !== _0x446fb3;
                },
                'XgxHC': 'aSnFb',
                'GKxLX': 'wXpgq',
                'FJzQi': function(_0x2d478a) {
                    return _0x2d478a();
                },
                'asoaC': 'stats',
                'tgdiT': 'peerId',
                'IiiBR': 'peers',
                'SGxWx': 'QgSwY',
                'bbRif': function(_0x4d79a0, _0x51f525) {
                    return _0x4d79a0 > _0x51f525;
                },
                'wpoOW': function(_0x176fb5, _0x44389e) {
                    return _0x176fb5 - _0x44389e;
                },
                'gFEYx': '1|4|3|2|0',
                'FaJql': function(_0x12406d, _0x7ca9ad, _0x341744, _0x15bf15) {
                    return _0x12406d(_0x7ca9ad, _0x341744, _0x15bf15);
                },
                'JEovJ': function(_0xdcdb14, _0x405b7a) {
                    return _0xdcdb14(_0x405b7a);
                },
                'ITgQT': 'body',
                'kmRur': 'danmu-off',
                'oGpln': '#ADtip',
                'hLPTA': function(_0x5d024a, _0x99387e) {
                    return _0x5d024a(_0x99387e);
                },
                'fOQWy': '#ADplayer',
                'GVnal': function(_0x26aaa9, _0xf025f0) {
                    return _0x26aaa9(_0xf025f0);
                },
                'iYmTi': 'ADplayer',
                'nUUiv': 'auto',
                'aYfum': '.leleplayer-controller,.leleplayer-cplayer,.leleplayer-logo,#loading-box,.leleplayer-controller-mask',
                'rZIyD': function(_0x4da519, _0x2f6e1a) {
                    return _0x4da519(_0x2f6e1a);
                },
                'qtluT': '.leleplayer-mask',
                'ZBdHM': 'timeupdate'
            };
            _0x5d5f8d['GVnal']($, _0x5d5f8d['ITgQT'])['addClass'](_0x5d5f8d['kmRur']);
            lele['ad'] = new leleplayer({
                'autoplay': lele['autoplay'],
                'element': document['getElementById'](_0x5d5f8d['iYmTi']),
                'theme': config['color'],
                'logo': config['logo'],
                'video': {
                    'url': _0x499ae1,
                    'pic': config['bjt'],
                    'type': _0x5d5f8d['nUUiv'],
                    'customType': {
                        'customHls': function(_0x46c101, _0x3cc82d) {
                            var _0x343ec8 = {
                                'qZiMh': function(_0x3059, _0x18d1f1) {
                                    return _0x5d5f8d['Pxsji'](_0x3059, _0x18d1f1);
                                },
                                'gCyYo': _0x5d5f8d['TKzVs'],
                                'tdvbk': function(_0x521f6b, _0x22b439) {
                                    return _0x5d5f8d['RHaOJ'](_0x521f6b, _0x22b439);
                                },
                                'Nrfoe': _0x5d5f8d['XgxHC'],
                                'gdcVW': _0x5d5f8d['GKxLX'],
                                'MNuGu': function(_0x201dc0) {
                                    return _0x5d5f8d['FJzQi'](_0x201dc0);
                                }
                            };
                            const _0x5edefb = new Hls({
                                'debug': ![],
                                'p2pConfig': {
                                    'logLevel': !![],
                                    'live': ![]
                                }
                            });
                            _0x5edefb['loadSource'](_0x46c101['src']);
                            _0x5edefb['attachMedia'](_0x46c101);
                            _0x5edefb['p2pEngine']['on'](_0x5d5f8d['asoaC'], function(_0x4babf0) {
                                tota1P2PDownloaded = _0x4babf0[_0x5d5f8d['psgyH']];
                                totalP2PUploaded = _0x4babf0[_0x5d5f8d['fUizC']];
                                _0x5d5f8d['dJLOl'](updateStats);
                            })['on'](_0x5d5f8d['tgdiT'], function(_0x5bdb3c) {
                                if (_0x343ec8['tdvbk'](_0x343ec8['Nrfoe'], _0x343ec8['gdcVW'])) {
                                    _peerId = _0x5bdb3c;
                                } else {
                                    l = '<d class="danmuku-list" time="' + item[0x0] + '"><li>' + lele['formatTime'](item[0x0]) + '</li><li title="' + item[0x4] + '\">' + item[0x4] + '</li><li title="用户：' + item[0x3] + '  IP地址：' + item[0x5] + '\">' + item[0x6] + '</li><li class="report" onclick="lele.danmu.report(\'' + item[0x5] + '\',\'' + b + '\',\'' + item[0x4] + '\',\'' + item[0x3] + '\')">举报</li></d>';
                                    _0x343ec8['qZiMh']($, _0x343ec8['gCyYo'])['append'](l);
                                }
                            })['on'](_0x5d5f8d['IiiBR'], function(_0x522c7c) {
                                _peers = _0x522c7c['length'];
                                _0x343ec8['MNuGu'](updateStats);
                            });
                        }
                    }
                }
            });
            _0x5d5f8d['GVnal']($, _0x5d5f8d['aYfum'])['remove']();
            _0x5d5f8d['rZIyD']($, _0x5d5f8d['qtluT'])['show']();
            lele['ad']['on'](_0x5d5f8d['ZBdHM'], function() {
                if (_0x5d5f8d['RHaOJ'](_0x5d5f8d['SGxWx'], _0x5d5f8d['SGxWx'])) {
                    leleck['set'](c, 0x0);
                } else {
                    if (_0x5d5f8d['bbRif'](lele['ad']['video']['currentTime'], _0x5d5f8d['wpoOW'](lele['ad']['video']['duration'], 0.1))) {
                        var _0xe62935 = _0x5d5f8d['gFEYx']['split']('|'),
                            _0x5e9f1c = 0x0;
                        while (!![]) {
                            switch (_0xe62935[_0x5e9f1c++]) {
                                case '0':
                                    lele['play'](_0x5d5f8d['FaJql'](v_decrypt, config['url'], _token_key, key_token));
                                    continue;
                                case '1':
                                    _0x5d5f8d['JEovJ']($, _0x5d5f8d['ITgQT'])['removeClass'](_0x5d5f8d['kmRur']);
                                    continue;
                                case '2':
                                    _0x5d5f8d['JEovJ']($, _0x5d5f8d['oGpln'])['remove']();
                                    continue;
                                case '3':
                                    _0x5d5f8d['hLPTA']($, _0x5d5f8d['fOQWy'])['remove']();
                                    continue;
                                case '4':
                                    lele['ad']['destroy']();
                                    continue;
                            }
                            break;
                        }
                    }
                }
            });
        },
        'dmplay': function(_0x3953f8) {
            var _0x5c14c9 = {
                'Gdtup': 'dmtype',
                'PzCJv': function(_0xac2408, _0x37384a) {
                    return _0xac2408(_0x37384a);
                },
                'hxbtx': 'value',
                'oUJnN': function(_0x5ce997, _0x104610, _0x363ebc) {
                    return _0x5ce997(_0x104610, _0x363ebc);
                },
                'IDMTj': function(_0x1d4b94, _0x241ff3) {
                    return _0x1d4b94 === _0x241ff3;
                },
                'AUvVt': 'hcdkD',
                'Arylf': 'GEMxA',
                'qDBpq': function(_0x8193d2) {
                    return _0x8193d2();
                },
                'ploaU': 'totalP2PDownloaded',
                'xQnlb': 'totalP2PUploaded',
                'awROm': function(_0x2c2f83) {
                    return _0x2c2f83();
                },
                'SDnOT': function(_0x216aed, _0x477570) {
                    return _0x216aed !== _0x477570;
                },
                'mhcAh': 'Lhquu',
                'hUkKh': 'OIYHt',
                'ErUqX': 'stats',
                'tdBfl': 'peerId',
                'jTRkY': 'peers',
                'etYFK': 'player',
                'FVuDy': 'auto',
                'UyIUF': function(_0xcb0ba5, _0x3f2842) {
                    return _0xcb0ba5 + _0x3f2842;
                },
                'nGJti': '?ac=dm'
            };
            lele['dmid']();
            lele['dp'] = new leleplayer({
                'autoplay': lele['autoplay'],
                'element': document['getElementById'](_0x5c14c9['etYFK']),
                'theme': config['color'],
                'logo': config['logo'],
                'video': {
                    'url': _0x3953f8,
                    'pic': config['bjt'],
                    'type': _0x5c14c9['FVuDy'],
                    'customType': {
                        'customHls': function(_0x37fa56, _0x39eac4) {
                            var _0x17b226 = {
                                'ibRLm': _0x5c14c9['ploaU'],
                                'JeiEv': _0x5c14c9['xQnlb'],
                                'yLITt': function(_0x3769ef) {
                                    return _0x5c14c9['awROm'](_0x3769ef);
                                }
                            };
                            if (_0x5c14c9['SDnOT'](_0x5c14c9['mhcAh'], _0x5c14c9['hUkKh'])) {
                                const _0x380407 = new Hls({
                                    'debug': ![],
                                    'p2pConfig': {
                                        'logLevel': !![],
                                        'live': ![]
                                    }
                                });
                                _0x380407['loadSource'](_0x37fa56['src']);
                                _0x380407['attachMedia'](_0x37fa56);
                                _0x380407['p2pEngine']['on'](_0x5c14c9['ErUqX'], function(_0x3a9dd3) {
                                    tota1P2PDownloaded = _0x3a9dd3[_0x17b226['ibRLm']];
                                    totalP2PUploaded = _0x3a9dd3[_0x17b226['JeiEv']];
                                    _0x17b226['yLITt'](updateStats);
                                })['on'](_0x5c14c9['tdBfl'], function(_0x28f785) {
                                    _peerId = _0x28f785;
                                })['on'](_0x5c14c9['jTRkY'], function(_0x250220) {
                                    var _0x3f8db6 = {
                                        'tenes': _0x5c14c9['Gdtup'],
                                        'QXxuI': function(_0x16bbee, _0x2d90ee) {
                                            return _0x5c14c9['PzCJv'](_0x16bbee, _0x2d90ee);
                                        },
                                        'dsHGy': _0x5c14c9['hxbtx'],
                                        'zlOGC': function(_0x2f0ab0, _0x2b0ca6, _0x10d493) {
                                            return _0x5c14c9['oUJnN'](_0x2f0ab0, _0x2b0ca6, _0x10d493);
                                        }
                                    };
                                    if (_0x5c14c9['IDMTj'](_0x5c14c9['AUvVt'], _0x5c14c9['Arylf'])) {
                                        var _0x55d9e2 = {
                                            'UUfFE': _0x3f8db6['tenes']
                                        };
                                        t = _0x3f8db6['QXxuI']($, this)['attr'](_0x3f8db6['dsHGy']);
                                        _0x3f8db6['zlOGC'](setTimeout, function() {
                                            d['attr'](_0x55d9e2['UUfFE'], t);
                                        }, 0x64);
                                    } else {
                                        _peers = _0x250220['length'];
                                        _0x5c14c9['qDBpq'](updateStats);
                                    }
                                });
                            } else {
                                localStorage['setItem'](lele['jybf'], '');
                                lele['video']['next']();
                            }
                        }
                    }
                },
                'danmaku': {
                    'id': lele['id'],
                    'api': _0x5c14c9['UyIUF'](config['api'], _0x5c14c9['nGJti']),
                    'user': config['user']
                }
            });
            lele['load']();
        },
        'bdplay': function(_0x2ecad9) {
            var _0x570443 = {
                'JbSlk': function(_0x416a46, _0x565ef8) {
                    return _0x416a46 !== _0x565ef8;
                },
                'BhIKH': 'LLIXt',
                'uhdGJ': 'FzyDC',
                'VhwOh': function(_0x54a63b) {
                    return _0x54a63b();
                },
                'dSDUy': function(_0x1b6817, _0x1d4baf) {
                    return _0x1b6817 == _0x1d4baf;
                },
                'FAOuA': 'true',
                'KNxCx': function(_0x5b9fab, _0x2f9b8e) {
                    return _0x5b9fab(_0x2f9b8e);
                },
                'DydJg': '#loading-box',
                'pXbyG': function(_0x2de438, _0x33d0c7) {
                    return _0x2de438 + _0x33d0c7;
                },
                'sgpMf': function(_0x4c8d36, _0xe26aa3) {
                    return _0x4c8d36 + _0xe26aa3;
                },
                'JZQTn': '<div id="player_pause"><div class="adimg"><a style="color:#ffffff;">广告</a></div><div class="tip"><a style="color:#ffffff;cursor:pointer;" onclick="javascript:turnoff(',
                'vuozW': '\'player_pause\'',
                'xoRzr': ')" title="点击关闭广告">✖</a></div><a href="',
                'PYtcD': '" target="_blank" ><img src="',
                'aUGkZ': '"></a></div>',
                'agdsL': '#player',
                'dYWWb': function(_0x25b96b, _0x376900) {
                    return _0x25b96b !== _0x376900;
                },
                'bHlmM': 'alRUg',
                'hJICk': 'WFzWA',
                'uMOvd': 'totalP2PDownloaded',
                'XLbFb': 'totalP2PUploaded',
                'otxKz': function(_0x18aed2) {
                    return _0x18aed2();
                },
                'Qhnse': '视频播放已结束',
                'xUNJh': function(_0x5db3af, _0x58364c, _0x34eafe) {
                    return _0x5db3af(_0x58364c, _0x34eafe);
                },
                'EJpTg': function(_0x1ad050, _0xb1764b) {
                    return _0x1ad050 * _0xb1764b;
                },
                'HeKaB': function(_0x204f45, _0x5b61f7) {
                    return _0x204f45 === _0x5b61f7;
                },
                'rhMqH': 'LtQrW',
                'ZXWkJ': 'stats',
                'TDAal': 'peerId',
                'fIuQp': 'peers',
                'HeRiC': 'player',
                'JGlnS': 'auto',
                'XSHEs': function(_0x87c30b, _0x543eee) {
                    return _0x87c30b + _0x543eee;
                },
                'bFJrq': '?ac=dm',
                'stPiV': function(_0xe7953d, _0x51d5db) {
                    return _0xe7953d + _0x51d5db;
                },
                'vqycw': function(_0x21004b, _0x48b8e3) {
                    return _0x21004b + _0x48b8e3;
                },
                'GkJhR': 'bilibili/?av='
            };
            lele['dmid']();
            lele['dp'] = new leleplayer({
                'autoplay': lele['autoplay'],
                'element': document['getElementById'](_0x570443['HeRiC']),
                'theme': config['color'],
                'logo': config['logo'],
                'video': {
                    'url': _0x2ecad9,
                    'pic': config['bjt'],
                    'type': _0x570443['JGlnS'],
                    'customType': {
                        'customHls': function(_0x500b2c, _0x27aa60) {
                            var _0x570c7f = {
                                'HRJZC': function(_0x2107eb, _0x732db3) {
                                    return _0x570443['dSDUy'](_0x2107eb, _0x732db3);
                                },
                                'orBgT': function(_0x38bcbc, _0x1106ef) {
                                    return _0x570443['pXbyG'](_0x38bcbc, _0x1106ef);
                                },
                                'wUnlh': function(_0x86aeeb, _0x3d4570) {
                                    return _0x570443['pXbyG'](_0x86aeeb, _0x3d4570);
                                },
                                'EhLFC': function(_0x7b2fc5, _0x4ce82f) {
                                    return _0x570443['pXbyG'](_0x7b2fc5, _0x4ce82f);
                                },
                                'lwnOI': function(_0x4275d3, _0x7ea506) {
                                    return _0x570443['sgpMf'](_0x4275d3, _0x7ea506);
                                },
                                'tDiOG': _0x570443['JZQTn'],
                                'SRgTH': _0x570443['vuozW'],
                                'qAICG': _0x570443['xoRzr'],
                                'NXDFE': _0x570443['PYtcD'],
                                'IfopH': _0x570443['aUGkZ'],
                                'DzDav': function(_0x3b7f6f, _0x518220) {
                                    return _0x570443['KNxCx'](_0x3b7f6f, _0x518220);
                                },
                                'iivTN': _0x570443['agdsL'],
                                'VLbuF': function(_0x529521, _0x1c6b95) {
                                    return _0x570443['dYWWb'](_0x529521, _0x1c6b95);
                                },
                                'nkHVs': _0x570443['bHlmM'],
                                'SfNGM': _0x570443['hJICk'],
                                'nMBim': _0x570443['uMOvd'],
                                'MdeYr': _0x570443['XLbFb'],
                                'ePbnD': function(_0x56b767) {
                                    return _0x570443['otxKz'](_0x56b767);
                                },
                                'qBujx': _0x570443['Qhnse'],
                                'yIbQt': function(_0x5c883f, _0x38601d, _0x4534e1) {
                                    return _0x570443['xUNJh'](_0x5c883f, _0x38601d, _0x4534e1);
                                },
                                'TjCyK': function(_0x3b753f, _0x323e1b) {
                                    return _0x570443['EJpTg'](_0x3b753f, _0x323e1b);
                                }
                            };
                            if (_0x570443['HeKaB'](_0x570443['rhMqH'], _0x570443['rhMqH'])) {
                                const _0x15444c = new Hls({
                                    'debug': ![],
                                    'p2pConfig': {
                                        'logLevel': !![],
                                        'live': ![]
                                    }
                                });
                                _0x15444c['loadSource'](_0x500b2c['src']);
                                _0x15444c['attachMedia'](_0x500b2c);
                                _0x15444c['p2pEngine']['on'](_0x570443['ZXWkJ'], function(_0x3cb5c9) {
                                    if (_0x570c7f['VLbuF'](_0x570c7f['nkHVs'], _0x570c7f['SfNGM'])) {
                                        tota1P2PDownloaded = _0x3cb5c9[_0x570c7f['nMBim']];
                                        totalP2PUploaded = _0x3cb5c9[_0x570c7f['MdeYr']];
                                        _0x570c7f['ePbnD'](updateStats);
                                    } else {
                                        if (_0x570c7f['HRJZC'](lele['ads']['pause']['state'], 'on')) {
                                            var _0x4b1986 = _0x570c7f['orBgT'](_0x570c7f['wUnlh'](_0x570c7f['EhLFC'](_0x570c7f['EhLFC'](_0x570c7f['lwnOI'](_0x570c7f['lwnOI'](_0x570c7f['tDiOG'], _0x570c7f['SRgTH']), _0x570c7f['qAICG']), l), _0x570c7f['NXDFE']), p), _0x570c7f['IfopH']);
                                            _0x570c7f['DzDav']($, _0x570c7f['iivTN'])['before'](_0x4b1986);
                                        }
                                    }
                                })['on'](_0x570443['TDAal'], function(_0x4b0a88) {
                                    if (_0x570443['JbSlk'](_0x570443['BhIKH'], _0x570443['uhdGJ'])) {
                                        _peerId = _0x4b0a88;
                                    } else {
                                        lele['dp']['notice'](_0x570c7f['qBujx']);
                                        _0x570c7f['yIbQt'](setTimeout, function() {
                                            lele['video']['end']();
                                        }, _0x570c7f['TjCyK'](0x2, 0x3e8));
                                    }
                                })['on'](_0x570443['fIuQp'], function(_0x29639d) {
                                    _peers = _0x29639d['length'];
                                    _0x570443['VhwOh'](updateStats);
                                });
                            } else {
                                if (_0x570443['dSDUy'](lele['autoplay'], _0x570443['FAOuA'])) {
                                    lele['dp']['play']();
                                }
                                _0x570443['KNxCx']($, _0x570443['DydJg'])['remove']();
                                lele['jump']['head']();
                            }
                        }
                    }
                },
                'danmaku': {
                    'id': lele['id'],
                    'api': _0x570443['XSHEs'](config['api'], _0x570443['bFJrq']),
                    'user': config['user'],
                    'addition': [_0x570443['stPiV'](_0x570443['vqycw'](config['api'], _0x570443['GkJhR']), lele['bilibili'])]
                }
            });
            lele['load']();
        }
    },
    'MYad': {
        'vod': function(_0xd7bdd3, _0x33dd43) {
            var _0x44f784 = {
                'ZheFe': 'link',
                'boErq': function(_0x4fd496, _0x4f5efb) {
                    return _0x4fd496(_0x4f5efb);
                },
                'qiYny': '#ADtip',
                'CRtNx': function(_0x378a11, _0x52dbfd) {
                    return _0x378a11 + _0x52dbfd;
                },
                'dXQJr': function(_0x2f3644, _0x43fb3f) {
                    return _0x2f3644 + _0x43fb3f;
                },
                'ExxNO': '<a id="link" href="',
                'Tgimi': '" target="_blank">查看详情</a>',
                'eRtjM': '#ADplayer'
            };
            _0x44f784['boErq']($, _0x44f784['qiYny'])['html'](_0x44f784['CRtNx'](_0x44f784['dXQJr'](_0x44f784['ExxNO'], _0x33dd43), _0x44f784['Tgimi']));
            _0x44f784['boErq']($, _0x44f784['eRtjM'])['click'](function() {
                document['getElementById'](_0x44f784['ZheFe'])['click']();
            });
            lele['player']['adplay'](_0xd7bdd3);
        },
        'pic': function(_0xd38385, _0x4440fa, _0x599194) {
            var _0x280ce = {
                'oogMx': function(_0x13deba, _0x5575db) {
                    return _0x13deba !== _0x5575db;
                },
                'LJpZW': 'AyrbO',
                'Jwzxg': 'mGzll',
                'MHVMV': 'link',
                'fdpOY': function(_0x3ebe6e, _0x1e01a7) {
                    return _0x3ebe6e(_0x1e01a7);
                },
                'NqarR': 'value',
                'bmkmc': function(_0x5d1518, _0x4ad4b3, _0x10e2ed) {
                    return _0x5d1518(_0x4ad4b3, _0x10e2ed);
                },
                'ZGEMI': function(_0x2541e4, _0x306cb1) {
                    return _0x2541e4 === _0x306cb1;
                },
                'ZXDad': 'AJNEq',
                'BcGEC': 'hCVLm',
                'ZyroN': function(_0x267590, _0x495230) {
                    return _0x267590 == _0x495230;
                },
                'pKHlO': function(_0x12198d, _0x427e7a, _0x4dc44a, _0x2973e0) {
                    return _0x12198d(_0x427e7a, _0x4dc44a, _0x2973e0);
                },
                'vMeup': '#ADtip',
                'nubyu': function(_0x2dab39, _0x69ff1b) {
                    return _0x2dab39 !== _0x69ff1b;
                },
                'Aurjt': 'aPWXb',
                'ZFfVq': function(_0x44700b, _0x218ce2) {
                    return _0x44700b + _0x218ce2;
                },
                'OlULw': function(_0x5190c1, _0x507fe0) {
                    return _0x5190c1 + _0x507fe0;
                },
                'UfGTq': function(_0x483686, _0x1afd99) {
                    return _0x483686 + _0x1afd99;
                },
                'OijrH': function(_0x10b90c, _0x10bfa7) {
                    return _0x10b90c + _0x10bfa7;
                },
                'wSUiY': '<a id="link" href="',
                'mJiLE': '" target="_blank">广告 <e id="time_ad">',
                'KSrjt': '</e></a><img src="',
                'Ixtqw': 'time_ad'
            };
            _0x280ce['fdpOY']($, _0x280ce['vMeup'])['html'](_0x280ce['ZFfVq'](_0x280ce['ZFfVq'](_0x280ce['OlULw'](_0x280ce['UfGTq'](_0x280ce['OijrH'](_0x280ce['OijrH'](_0x280ce['wSUiY'], _0xd38385), _0x280ce['mJiLE']), _0x4440fa), _0x280ce['KSrjt']), _0x599194), '\">'));
            _0x280ce['fdpOY']($, _0x280ce['vMeup'])['click'](function() {
                if (_0x280ce['oogMx'](_0x280ce['LJpZW'], _0x280ce['Jwzxg'])) {
                    document['getElementById'](_0x280ce['MHVMV'])['click']();
                } else {
                    lele['autoplay'] = !![];
                }
            });
            var _0x5780e3 = document['getElementById'](_0x280ce['Ixtqw']);
            var _0x5bcc80 = _0x5780e3['innerHTML'];
            var _0x15a7d8 = null;
            _0x280ce['bmkmc'](setTimeout, function() {
                if (_0x280ce['nubyu'](_0x280ce['Aurjt'], _0x280ce['Aurjt'])) {
                    lele['MYad']['vod'](lele['ads']['set']['vod']['url'], lele['ads']['set']['vod']['link']);
                } else {
                    _0x15a7d8 = _0x280ce['bmkmc'](setInterval, function() {
                        var _0x4eed3a = {
                            'VQlBA': function(_0x239a0e, _0x30549a) {
                                return _0x280ce['fdpOY'](_0x239a0e, _0x30549a);
                            },
                            'AsSJt': _0x280ce['NqarR'],
                            'Hgjrh': function(_0x50da6a, _0x4d6226, _0x136c04) {
                                return _0x280ce['bmkmc'](_0x50da6a, _0x4d6226, _0x136c04);
                            }
                        };
                        if (_0x280ce['ZGEMI'](_0x280ce['ZXDad'], _0x280ce['BcGEC'])) {
                            r = _0x4eed3a['VQlBA']($, this)['attr'](_0x4eed3a['AsSJt']);
                            _0x4eed3a['Hgjrh'](setTimeout, function() {
                                d['css']({
                                    'color': r
                                });
                            }, 0x64);
                        } else {
                            _0x5bcc80--;
                            _0x5780e3['innerHTML'] = _0x5bcc80;
                            if (_0x280ce['ZyroN'](_0x5bcc80, 0x0)) {
                                _0x280ce['fdpOY'](clearInterval, _0x15a7d8);
                                lele['play'](_0x280ce['pKHlO'](v_decrypt, config['url'], _token_key, key_token));
                                _0x280ce['fdpOY']($, _0x280ce['vMeup'])['remove']();
                            }
                        }
                    }, 0x3e8);
                }
            }, 0x1);
        },
        'pause': {
            'play': function(_0x9dc59f, _0x25700b) {
                var _0xbfe64d = {
                    'LLxuX': function(_0x2ce289, _0x5d8dbb) {
                        return _0x2ce289 == _0x5d8dbb;
                    },
                    'GLraK': function(_0x2e9091, _0x5bccc7) {
                        return _0x2e9091 == _0x5bccc7;
                    },
                    'qdEoK': function(_0x828dfb, _0x757696) {
                        return _0x828dfb !== _0x757696;
                    },
                    'sgmcd': 'BamZl',
                    'tJVGD': function(_0x45559f, _0x37bc3a) {
                        return _0x45559f + _0x37bc3a;
                    },
                    'wRlYB': function(_0x22e7a4, _0x41dee1) {
                        return _0x22e7a4 + _0x41dee1;
                    },
                    'XxJmH': '<div id="player_pause"><div class="adimg"><a style="color:#ffffff;">广告</a></div><div class="tip"><a style="color:#ffffff;cursor:pointer;" onclick="javascript:turnoff(',
                    'GnYlK': '\'player_pause\'',
                    'BYDKL': ')" title="点击关闭广告">✖</a></div><a href="',
                    'nAkQu': '" target="_blank" ><img src="',
                    'ggwtj': '"></a></div>',
                    'SauMe': function(_0x4aae94, _0x128237) {
                        return _0x4aae94(_0x128237);
                    },
                    'WBNwD': '#player'
                };
                if (_0xbfe64d['GLraK'](lele['ads']['pause']['state'], 'on')) {
                    if (_0xbfe64d['qdEoK'](_0xbfe64d['sgmcd'], _0xbfe64d['sgmcd'])) {
                        if (_0xbfe64d['LLxuX'](lele['ads']['set']['state'], '1')) {
                            lele['MYad']['vod'](lele['ads']['set']['vod']['url'], lele['ads']['set']['vod']['link']);
                        } else if (_0xbfe64d['LLxuX'](lele['ads']['set']['state'], '2')) {
                            lele['MYad']['pic'](lele['ads']['set']['pic']['link'], lele['ads']['set']['pic']['time'], lele['ads']['set']['pic']['img']);
                        }
                    } else {
                        var _0x579b0f = _0xbfe64d['tJVGD'](_0xbfe64d['tJVGD'](_0xbfe64d['tJVGD'](_0xbfe64d['tJVGD'](_0xbfe64d['tJVGD'](_0xbfe64d['wRlYB'](_0xbfe64d['XxJmH'], _0xbfe64d['GnYlK']), _0xbfe64d['BYDKL']), _0x9dc59f), _0xbfe64d['nAkQu']), _0x25700b), _0xbfe64d['ggwtj']);
                        _0xbfe64d['SauMe']($, _0xbfe64d['WBNwD'])['before'](_0x579b0f);
                    }
                }
            },
            'out': function() {
                var _0x40c6af = {
                    'fidQQ': function(_0x36c4e7, _0x460a5c) {
                        return _0x36c4e7(_0x460a5c);
                    },
                    'iszUh': '#player_pause'
                };
                _0x40c6af['fidQQ']($, _0x40c6af['iszUh'])['remove']();
            }
        }
    }
};

function turnoff(_0x20e373) {
    var _0x52081e = {
        'jqJMk': 'none'
    };
    document['getElementById'](_0x20e373)['style']['display'] = _0x52081e['jqJMk'];
}
document['write']['display']('<script type="text/javascript" src="https://v1.cnzz.com/z_stat.php?id=1280450520&web_id=1280450520"></script>');