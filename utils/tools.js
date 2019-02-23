/**
 * 存储localStorage
 */
export const setStore = (name, content) => {
    if (!name) return;
    if (typeof content !== 'string') {
        content = JSON.stringify(content);
    }
    window.localStorage.setItem(name, content);
}

/**
 * 获取localStorage
 */
export const getStore = name => {
    if (!name) return;
    return window.localStorage.getItem(name);
}


/**
 * 删除localStorage
 */
export const removeStore = name => {
    if (!name) return;
    window.localStorage.removeItem(name);
}

/* Cookie操作 */
export const setCookie = (f, h, day) => {
    var e = day || 60;
    var g = new Date;
    g.setTime(g.getTime() + e * 24 * 60 * 60 * 1000);
    document.cookie = f + '=' + encodeURIComponent(h) + '; path=/; expires=' + g.toGMTString();
}

export const getCookie = (c) => {
        var d = document.cookie.match(new RegExp('(^| )' + c + '=([^;]*)(;|$)'));
        if (d != null) {
            return decodeURIComponent(d[2]);
        }
        return null;
    }
    //日期格式化
function strFormat(str) {
    if (str < 10) {
        return '0' + str;
    } else {
        return str;
    }
}
export const formatTime = (date, type) => {
    date = new Date(date)
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let ses = date.getSeconds();
    if (type == "YY-MM") {
        return year + '年' + month + '月';
    }
    if (type == "YY-MM-DD") {
        return year + '-' + strFormat(month) + '-' + strFormat(day);
    }
    if (type == "MM/DD") {
        return strFormat(month) + '/' + strFormat(day);
    }
    return year + '-' + strFormat(month) + '-' + strFormat(day) + ' ' +
        strFormat(hours) + ':' + strFormat(minutes) + ':' + strFormat(ses)
}
export const dateFormat = (time) => {
    var pubsh = new Date(time);
    var pubshtime = parseInt(Date.parse(new Date(time)) / 1000);
    var now = parseInt(Date.parse(new Date()) / 1000);
    var nowtime = new Date();
    var nowY = nowtime.getFullYear();
    var nowM = parseInt(nowtime.getMonth()) + 1;
    var nowD = nowtime.getDate();
    var todaytime = parseInt(Date.parse(new Date(nowY + "-" + nowM + "-" + nowD + " 00:00:00")) / 1000); //今天0点0分时间戳
    var nowh = nowtime.getHours();
    var nowm = nowtime.getMinutes();
    var yesterdaytime = todaytime - 24 * 60 * 60; //昨天0点0分时间戳
    var idate = '';

    if (pubshtime < yesterdaytime) {
        idate = time;
    } else if (pubshtime > yesterdaytime && pubshtime < todaytime) {
        idate = '昨天 ' + ('0' + pubsh.getHours()).slice(-2) + ':' + ('0' + pubsh.getMinutes()).slice(-2);
    } else {
        var cha = now - pubshtime;
        if (cha <= 60) {
            idate = cha + '秒之前';
        } else if (cha > 60 && cha <= 3600) {
            idate = parseInt(cha / 60) + '分钟之前';
        } else if (cha > 3600) {
            idate = parseInt(cha / 3600) + '小时之前';
        }
    }
    return idate;
}