(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{"0408":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return a}));var a={newsbox:n("ef66").default},i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"home"},[a("v-uni-scroll-view",{staticClass:"navscroll",attrs:{"scroll-x":"true"}},t._l(t.navArr,(function(e,n){return a("v-uni-view",{key:e.id,staticClass:"item",class:e.id==t.navIndex?"active":"",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.clickNav(e.id)}}},[t._v(t._s(e.classname))])})),1),a("v-uni-view",{staticClass:"content"},t._l(t.newsArr,(function(e,n){return a("v-uni-view",{key:e.id,staticClass:"row"},[a("newsbox",{attrs:{item:e},nativeOn:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.goDetail(e)}}})],1)})),1),a("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:0==t.newsArr.length,expression:"newsArr.length==0"}],staticClass:"nodata"},[a("v-uni-image",{attrs:{src:n("51a3"),mode:"aspectFill"}})],1),a("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.newsArr.length,expression:"newsArr.length"}],staticClass:"loading"},[a("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:1==t.loding,expression:"loding==1"}]},[t._v("数据加载中...")]),a("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:2==t.loding,expression:"loding==2"}]},[t._v("没有更多了~~")])],1)],1)},r=[]},"0ce8":function(t,e,n){"use strict";n.r(e);var a=n("d8c5"),i=n.n(a);for(var r in a)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=i.a},2909:function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return(0,a.default)(t)||(0,i.default)(t)||(0,r.default)(t)||(0,s.default)()};var a=o(n("6005")),i=o(n("db90")),r=o(n("06c5")),s=o(n("3427"));function o(t){return t&&t.__esModule?t:{default:t}}},3427:function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},n("d9e2"),n("d401")},3524:function(t,e,n){"use strict";var a=n("6536"),i=n.n(a);i.a},"4ec1":function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.newsbox[data-v-49677a34]{display:flex}.newsbox .pic[data-v-49677a34]{width:%?230?%;height:%?160?%}.newsbox .pic uni-image[data-v-49677a34]{width:100%;height:100%}.newsbox .text[data-v-49677a34]{display:flex;flex-direction:column;justify-content:space-between;flex:1;padding-left:%?20?%}.newsbox .text .title[data-v-49677a34]{font-size:%?36?%;color:#333;text-overflow:-o-ellipsis-lastline;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;line-clamp:2;-webkit-box-orient:vertical}.newsbox .text .info[data-v-49677a34]{font-size:%?26?%;color:#999}.newsbox .text .info uni-text[data-v-49677a34]{padding-right:%?30?%}',""]),t.exports=e},"51a3":function(t,e,n){t.exports=n.p+"static/img/nodata.56986da7.png"},"57d8":function(t,e,n){var a=n("4ec1");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("66499282",a,!0,{sourceMap:!1,shadowMode:!1})},6005:function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){if(Array.isArray(t))return(0,a.default)(t)};var a=function(t){return t&&t.__esModule?t:{default:t}}(n("6b75"))},"624a":function(t,e,n){"use strict";n.r(e);var a=n("8650"),i=n.n(a);for(var r in a)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=i.a},6536:function(t,e,n){var a=n("f8c9e");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("67dbeef7",a,!0,{sourceMap:!1,shadowMode:!1})},8650:function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"newsbox",props:{item:{type:Object,default:function(){return{title:"组件内默认的标题",author:"张三",hits:668,picurl:"../../static/images/新闻.jpg",looktime:Date()}}}},data:function(){return{}}};e.default=a},"8d99":function(t,e,n){"use strict";var a=n("57d8"),i=n.n(a);i.a},b016:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"newsbox"},[n("v-uni-view",{staticClass:"pic"},[n("v-uni-image",{attrs:{src:t.item.picurl,mode:"aspectFill"}})],1),n("v-uni-view",{staticClass:"text"},[n("v-uni-view",{staticClass:"title"},[t._v(t._s(t.item.title))]),t.item.looktime?n("v-uni-view",{staticClass:"info"},[n("v-uni-text",[t._v("浏览时间："+t._s(t.item.looktime))])],1):n("v-uni-view",{staticClass:"info"},[n("v-uni-text",[t._v(t._s(t.item.author))]),n("v-uni-text",[t._v(t._s(t.item.hits)+" 浏览")])],1)],1)],1)},i=[]},b5fb:function(t,e,n){"use strict";n.r(e);var a=n("0408"),i=n("0ce8");for(var r in i)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(r);n("3524");var s=n("f0c5"),o=Object(s["a"])(i["default"],a["b"],a["c"],!1,null,"4de4edc9",null,!1,a["a"],void 0);e["default"]=o.exports},d8c5:function(t,e,n){"use strict";n("7a82");var a=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("2909"));n("99af");var r={data:function(){return{navIndex:51,navArr:[],newsArr:[],currentPage:1,loding:0}},onLoad:function(){this.getNavData(),this.getNewsData()},onReachBottom:function(){2!=this.loding&&(this.currentPage++,this.loding=1,this.getNewsData())},methods:{clickNav:function(t){this.newsArr=[],this.loding=0,this.currentPage=1,this.navIndex=t,this.getNewsData()},goDetail:function(t){uni.navigateTo({url:"/pages/detail/detail?id=".concat(t.id,"&cid=").concat(t.classid)})},getNavData:function(){var t=this;uni.request({url:"https://ku.qingnian8.com/dataApi/news/navlist.php",success:function(e){t.navArr=e.data}})},getNewsData:function(){var t=this;uni.request({url:"https://ku.qingnian8.com/dataApi/news/newslist.php",data:{cid:this.navIndex,page:this.currentPage},success:function(e){0==e.data.length&&(t.loding=2),t.newsArr=[].concat((0,i.default)(t.newsArr),(0,i.default)(e.data))}})}}};e.default=r},db90:function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)},n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0"),n("a630")},ef66:function(t,e,n){"use strict";n.r(e);var a=n("b016"),i=n("624a");for(var r in i)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(r);n("8d99");var s=n("f0c5"),o=Object(s["a"])(i["default"],a["b"],a["c"],!1,null,"49677a34",null,!1,a["a"],void 0);e["default"]=o.exports},f8c9e:function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.navscroll[data-v-4de4edc9]{position:fixed;left:0;top:var(window-top);z-index:10;height:%?100?%;background:#f7f8fa;white-space:nowrap}.navscroll[data-v-4de4edc9] ::-webkit-scrollbar{width:4px!important;height:1px!important;overflow:auto!important;background:transparent!important;-webkit-appearance:auto!important;display:block}.navscroll .item[data-v-4de4edc9]{display:inline-block;font-size:%?40?%;line-height:%?100?%;padding:0 %?30?%;color:#333}.navscroll .item.active[data-v-4de4edc9]{color:#31c27c}.content[data-v-4de4edc9]{padding:%?30?%;padding-top:%?130?%}.content .row[data-v-4de4edc9]{border-bottom:1px dashed #efefef;padding:%?20?% 0}.loading[data-v-4de4edc9]{text-align:center;font-size:%?26?%;color:#888;line-height:2em}',""]),t.exports=e}}]);