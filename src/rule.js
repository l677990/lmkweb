/**
 * 验证车牌号是否合格
 * @param {*} vehicleNumber
 * @returns
 */
function isVehicleNumber(vehicleNumber) {
  let xreg =
    /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}(([0-9]{5}[DF]$)|([DF][A-HJ-NP-Z0-9][0-9]{4}$))/;
  let creg =
    /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳]{1}$/;
  if (vehicleNumber.length == 7) {
    return creg.test(vehicleNumber);
  } else if (vehicleNumber.length == 8) {
    return xreg.test(vehicleNumber);
  } else {
    return false;
  }
}

/**
 * 验证身份证是否合格
 * @param {*} idCardStr
 * @returns
 */
function isIdCard(idCardStr) {
  let idcardReg =
    /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/;
  if (idcardReg.test(idCardStr)) {
    return true;
  } else {
    return false;
  }
}

/**
 * 验证手机
 * @param {*} mobile
 * @returns
 */
function isMobel(mobile) {
  var reg = /^1[0-9]{10}$/;
  return reg.test(mobile);
}

/**
 * 验证邮箱
 * @param {*} str
 * @returns
 */
function isEmail(str) {
  var re = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
  return re.test(str);
}

module.exports = {
  isVehicleNumber,
  isIdCard,
  isMobel,
  isEmail,
};
