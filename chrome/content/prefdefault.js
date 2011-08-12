var PrefDefaults = {
    'Encoding': (window.navigator.language == 'zh-CN' ? 'gb2312' : 'big5'),
    'Cols': 80,
    'Rows': 24,
    'NewTab': false,
    'LineFeed': true,
    'AntiIdleTime': 180,
    'AntiIdleStr': '^[[A^[[B',
    'ReconnectTime': 15,
    'PreLoginPrompt': '',
    'PreLogin': '',
    'LoginPrompt': '',
    'Login': '',
    'PasswdPrompt': '',
    'Passwd': '',
    'PostLogin': ''
}

var PrefDefault = 'Encoding';

// the value of an element corresponds to the property of nsILoginInfo
var PrefLoginMgr = {
    'Login': 'username',
    'Passwd': 'password'
}