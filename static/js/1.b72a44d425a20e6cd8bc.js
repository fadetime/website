webpackJsonp([1],{"3Bah":function(t,e){},VZrM:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=i("teIl"),l={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("footer",[i("div",{staticClass:"foot-container"},[t._l(t.footList,function(e,o){return i("div",{key:o,staticClass:"foot-left"},[i("h2",[t._v(t._s(e.title))]),t._v(" "),i("ul",t._l(e.subList,function(e,o){return i("li",{key:o},[i("router-link",{attrs:{to:e.link}},[t._v(t._s(e.sub_title))])],1)}))])}),t._v(" "),t._m(0),t._v(" "),i("div",{staticClass:"foot-right"},[i("h2",[t._v("概览")]),t._v(" "),i("ul",t._l(t.viewList,function(t,e){return i("li",{key:e},[i("router-link",{attrs:{to:t.link}},[i("img",{attrs:{src:"../..website/static/img/foot-view/"+t.path}})])],1)})),t._v(" "),i("h5",[i("router-link",{attrs:{to:""}},[t._v("View More >>")])],1)])],2),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"foot-middle"},[i("h2",[t._v("联系我们")]),t._v(" "),i("ul",[i("li",{staticStyle:{color:"#FF8724"}},[i("span",{staticStyle:{float:"left","margin-right":"8px"}},[i("i",{staticClass:"el-icon-location-outline"})]),t._v(" "),i("div",{staticStyle:{display:"inline-block"}},[t._v("\n                        公司地址"),i("br"),t._v("公司地址\n                    ")])]),t._v(" "),i("li",{staticStyle:{color:"#67C23A"}},[i("i",{staticClass:"el-icon-phone"}),t._v("服务热线：000-000 000")]),t._v(" "),i("li",{staticStyle:{color:"#009688"}},[i("i",{staticClass:"el-icon-printer"}),t._v("传真：000-00000000")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"foot-bottom"},[e("div",[this._v("© Copyrights 2018. All rights reserved ")]),this._v(" "),e("div",[this._v("000000")])])}]};var n=i("VU/8")({name:"Footer",data:function(){return{footList:[{title:"产品体系",subList:[{sub_title:"智能产品",link:""},{sub_title:"能效",link:""},{sub_title:"新能源",link:""}]},{title:"解决方案",subList:[{sub_title:"基于用户蓄电池分布式储能服务平台",link:""},{sub_title:"城市能源管控服务云平台",link:""},{sub_title:"需求侧能源管控平台",link:""},{sub_title:"智慧水务管控一体化平台",link:""}]},{title:"关于我们",subList:[{sub_title:"了解我们",link:""},{sub_title:"发展历程",link:""},{sub_title:"奖项荣誉",link:""},{sub_title:"新闻动态",link:""}]}],viewList:[{path:"flickr01.jpg",link:""},{path:"flickr02.jpg",link:""},{path:"flickr03.jpg",link:""},{path:"flickr04.jpg",link:""},{path:"flickr05.jpg",link:""},{path:"flickr06.jpg",link:""},{path:"flickr07.jpg",link:""},{path:"flickr08.jpg",link:""}]}}},l,!1,function(t){i("3Bah")},"data-v-e2c936c2",null).exports,s=i("eqh9"),r={components:{selfHeader:o.a,selfFooter:n,selfLoading:s.a},data:function(){return{header_color:"",header_position:"",header_hover:"",show_backtop:!1}},mounted:function(){window.addEventListener("scroll",this.handleScroll)},methods:{handleScroll:function(){var t=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;0===t&&(this.header_color="transparent"),t>100&&(this.header_color="rgba(3,3,3,.8)"),t>200&&(this.show_backtop=!0),t<200&&(this.show_backtop=!1)},backTop:function(){var t=void 0,e=setInterval(function(){t=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop,window.scroll(0,t-50),0===t&&clearInterval(e)},50)},head_fix:function(t){this.header_position=t[0],this.header_hover=t[1]}}},a={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("self-header",{attrs:{bg_color:t.header_color,hd_position:t.header_position,hover_flag:t.header_hover}}),t._v(" "),i("router-view",{on:{headFix:t.head_fix}}),t._v(" "),i("self-footer"),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.show_backtop,expression:"show_backtop"}],staticClass:"backtop",on:{click:t.backTop}},[i("i",{staticClass:"el-icon-arrow-up"})]),t._v(" "),i("self-loading")],1)},staticRenderFns:[]};var c=i("VU/8")(r,a,!1,function(t){i("h73l")},null,null);e.default=c.exports},W4Xd:function(t,e){},h73l:function(t,e){},teIl:function(t,e,i){"use strict";var o={name:"Header",props:{bg_color:{type:String,default:"transparent"},hd_position:{type:String,default:"fixed"},hover_flag:{type:Boolean,default:!0}},data:function(){return{active:"首页",titleList:[{title:"首页",link:"/home"},{title:"产品中心",link:"/product"},{title:"解决方案",link:"#"},{title:"客户案例",link:"#"},{title:"关于我们",link:"#"},{title:"500",link:"/error-500"}]}},mounted:function(){this.active=this.$route.meta.nav},methods:{selected:function(t){this.active=t},toHome:function(){this.$router.push("/home"),this.active="首页"}}},l={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("header",{style:{backgroundColor:t.bg_color,position:t.hd_position}},[o("div",[o("div",{staticClass:"web_icon",class:{img_hover:t.hover_flag}},[o("img",{attrs:{src:i(!function(){var t=new Error('Cannot find module "../..website/static/img/brand-logo.png"');throw t.code="MODULE_NOT_FOUND",t}()),alt:"官网"},on:{click:t.toHome}})]),t._v(" "),o("ul",t._l(t.titleList,function(e,i){return o("li",{key:i,on:{click:function(i){t.selected(e.title)}}},[o("router-link",{class:{active:t.active==e.title},attrs:{to:e.link}},[t._v(t._s(e.title))])],1)}))])])},staticRenderFns:[]};var n=i("VU/8")(o,l,!1,function(t){i("W4Xd")},"data-v-26deaad1",null);e.a=n.exports}});
//# sourceMappingURL=1.b72a44d425a20e6cd8bc.js.map