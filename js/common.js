/**
 * 去除字符串两头多余的空格
 * @param {*} Str 需要去除空格的字符串
 * @returns 去除后的字符串
 */
function IgnoreSpaces(Str) {
    var ResultStr = ""
    Temp = Str.split(" ")
    for (i = 0; i < Temp.length; i++)
        ResultStr += Temp[i]
    return ResultStr.replace(/\r\n/g, "");
}

/**
 * js 设置 cookie
 * @param {*} cname cookie名
 * @param {*} cvalue cookie值
 * @param {*} exdays 有效天数
 */
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

/**
 * js 获取 cookie
 * @param {*} cname cookie名
 * @returns 存在返回cookie值，不存在返回空
 */
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i].trim();
        if (c.indexOf(name) == 0) { return c.substring(name.length, c.length); }
    }
    return "";
}

/**
 * js 获取 当前日期 YYYY-MM-DD格式
 * @returns 当前日期
 */
function getNowFormatDate() {
    var date = new Date();
    var seperator1 = "-";
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var currentdate = year + seperator1 + month + seperator1 + strDate;
    return currentdate;
}

/**
 * js 获取 url参数值
 * @param {*} variable 参数名
 * @returns 存在返回参数值，不存在返回false
 */
function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == variable) { return pair[1]; }
    }
    return (false);
}

/**
 * 生成从minNum到maxNum的随机数
 * @param {*} Min 区间最小边界值
 * @param {*} Max 区间最大边界值
 * @returns 区间内随机整数
 */
function RandomNumBoth(Min, Max) {
    var Range = Max - Min;
    var Rand = Math.random();
    var num = Min + Math.round(Rand * Range); //四舍五入
    return num;
}

/**
 * 获取数据日期列表
 * @returns 数组,日期列表
 */
function getDateList() {
    let datelist = []
    chendu.forEach(cd => {
        datelist.push(cd.date)
    })
    return Array.from(new Set(datelist))
}

/**
 * 获取数据晨读列表
 * @param {*} date 日期 默认值为""
 * @returns 晨读列表
 */
function getChenduList(date = "") {
    let chendu_list = []
    chendu.forEach(cd => {
        if (cd.date.indexOf(date) > -1)
            chendu_list.push(cd)
    })
    chendu_list.sort(function(a, b){
        return a.id - b.id;
    })
    return chendu_list
}

/**
 * 获取随机晨读单词
 * @param {*} date 日期 默认值为""
 * @returns 晨读单词
 */
function getChendu(date = "") {
    let chendu_list = getChenduList(date)
    let index = RandomNumBoth(0, chendu_list.length)
    let cd = chendu_list[index]
    cd.word = IgnoreSpaces(cd.word)
    return cd
}