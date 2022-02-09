/**
 * 验证是否 为数组
 * @param {*} obj
 * @returns
 */
function isArray(obj) {
  return Object.prototype.toString.call(obj) === "[object Array]";
}

/**
 * 验证是否为数字
 * @param {*} n
 * @returns
 */
function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

/**
 * 生日转换年龄 精确到月
 * @param {*} birsday
 * @returns
 */
function birsdayToAge(birsday) {
  let aDate = new Date();
  let thisYear = aDate.getFullYear();
  let bDate = new Date(birsday);
  let brith = bDate.getFullYear();
  let age = thisYear - brith;
  if (aDate.getMonth() == bDate.getMonth()) {
    if (aDate.getDate() < bDate.getDate()) {
      age = age - 1;
    }
  } else {
    if (aDate.getMonth() < bDate.getMonth()) {
      age = age - 1;
    }
  }
  return age;
}

/**
 * 获取url参数
 * @returns
 */
function getUrlParams() {
  let url = window.location.search;
  let index = url.indexOf("?");
  let obj = {};
  if (index !== -1) {
    let str = url.substr(1);
    let arr = str.split("&");
    for (let i = 0; i < arr.length; i++) {
      obj[arr[i].split("=")[0]] = arr[i].split("=")[1];
    }
  }
  return obj; //{articleId: "1", articleNum: "1", opt: "edit"}
}

/**
 * 判断是不是url
 * @param {*} str
 * @returns
 */
function isUrl(str) {
  var v = new RegExp(
    "^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$",
    "i"
  );
  return v.test(str);
}

/**
 * 判断手机系统
 * @returns
 */
function getSystem() {
  let u = navigator.userAgent;
  let isAndroid = u.indexOf("Android") > -1 || u.indexOf("Linux") > -1; // Android终端
  let isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); // ios终端
  if (isAndroid) {
    return "Android";
  } else if (isIOS) {
    return "iPhone";
  } else {
    return "phone";
  }
}

/**
 * 防抖
 * @desc  函数防抖，用于将多次执行变为最后一次执行
 * @param {function} func - 需要使用函数防抖的被执行的函数。必传
 * @param {Number} wait - 多少毫秒之内触发，只执行第一次，默认1000ms。可以不传
 */
function debounce(fn, delay) {
  delay = delay || 1000; //默认1s后执行
  let timer = null;
  return function () {
    let context = this;
    let arg = arguments;
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn.apply(context, arg);
    }, delay);
  };
}

/**
 * 节流函数, 用于将多次执行变为每隔一段时间执行
 * @param fn 事件触发的操作
 * @param delay 间隔多少毫秒需要触发一次事件
 */
function throttle(fn, delay) {
  let timer = null;
  return function () {
    let context = this;
    let args = arguments;
    if (!timer) {
      timer = setTimeout(function () {
        fn.apply(context, args);
        clearTimeout(timer);
      }, delay);
    }
  };
}

module.exports = {
  isArray,
  isNumber,
  birsdayToAge,
  getUrlParams,
  isUrl,
  getSystem,
  debounce,
  throttle,
};
