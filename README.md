# 安装

```
npm install lmkweb
```

## 导入

```js
const lmkweb = require("lmkweb");
// 使用 lmkweb.方法()
```

## 生日转换年龄--示例

```js
const age = lmkweb.birsdayToAge("2000-06-03");
//结果21
```

## 校验

```js
//校验车牌号
lmkweb.vehicleNumber("车牌号"); //验证车牌号是否合格
lmkweb.isIdCard("身份证"); //验证身份证是否合格
lmkweb.mobile("手机号"); //验证手机号是否合格
lmkweb.isEmail("邮箱"); //验证邮箱是否合格
lmkweb.isArray("自定义参数"); //校验是否为数组
lmkweb.isNumber("自定义参数"); //校验是否为数字
lmkweb.isUrl("自定义参数"); //校验是否为url
//结果 true或false
```

## 获取 url 参数--示例

```js
//当前地址http://xxx.xxx.com?id=20&type=5
const url = lmkweb.getUrlParams();
//结果{id:20,type:5}
```

## 判断手机系统--示例

```js
lmkweb.getSystem();
//结果 Android|iPhone|phone
```

## 格式化时间---示例

```js
//调用 dateFormat 对时间进行格式化
const dtStr = lmkweb.dateFormat(new Date());
//结果 2022-02-09 18:00:00
```

## 转义 HTML 中的特殊字符

```js
const htmlStr = '<h1 title="abc">这是h1标签<span>123&nbsp;</span></h1>';
const str = lmkweb.htmlEscape(htmlStr);
//结果 &lt;h1 title=&quot;abc&quot; &gt;这是h1标签&lt;span&gt;123&amp;nbsp;&lt;/span&gt;&lt;/h1&gt;
```

## 还原 HTML 中的特殊字符

```js
const str2 = lmkweb.htmlUnEscape(str);
//结果 <h1 title="abc" >这是h1标签<span>123&nbsp;</span></h1>
```
