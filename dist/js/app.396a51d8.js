(function(t){function e(e){for(var n,s,c=e[0],r=e[1],u=e[2],m=0,f=[];m<c.length;m++)s=c[m],i[s]&&f.push(i[s][0]),i[s]=0;for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n]);l&&l(e);while(f.length)f.shift()();return a.push.apply(a,u||[]),o()}function o(){for(var t,e=0;e<a.length;e++){for(var o=a[e],n=!0,c=1;c<o.length;c++){var r=o[c];0!==i[r]&&(n=!1)}n&&(a.splice(e--,1),t=s(s.s=o[0]))}return t}var n={},i={app:0},a=[];function s(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.m=t,s.c=n,s.d=function(t,e,o){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(o,n,function(e){return t[e]}.bind(null,n));return o},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/wwwww/dist/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],r=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var l=r;a.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"0271":function(t,e,o){},"0c9c":function(t,e,o){},"106f":function(t,e,o){},"1dee":function(t,e,o){"use strict";var n=o("f32d"),i=o.n(n);i.a},"20ea":function(t,e,o){"use strict";var n=o("9df6"),i=o.n(n);i.a},"3c90":function(t,e,o){"use strict";var n=o("c800"),i=o.n(n);i.a},"486e":function(t,e){},"4ee2":function(t,e,o){},"55a5":function(t,e,o){"use strict";var n=o("5c3b"),i=o.n(n);i.a},"56d7":function(t,e,o){"use strict";o.r(e);o("cadf"),o("551c"),o("097d");var n=o("2b0e"),i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("CommonHeader"),o("router-view",{staticClass:"content"}),o("CommonFooter",{attrs:{menuList:t.menuList}})],1)},a=[],s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"header",style:{background:t.bgColor}},[o("span",{staticClass:"header-home"},[t._v("首页")]),o("h1",{staticClass:"header-title"},[t._v(t._s(t.title))])])},c=[],r=o("2f62"),u={computed:Object(r["b"])(["bgColor","title"])},l=u,m=(o("aef3"),o("2877")),f=Object(m["a"])(l,s,c,!1,null,null,null);f.options.__file="CHeader.vue";var h=f.exports,A=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ul",{staticClass:"footer",style:{background:t.bgColor}},t._l(t.menuList,function(e){return o("li",[o("router-link",{attrs:{to:e.path},nativeOn:{click:function(o){t.changeBg(e)}}},[t._v(t._s(e.name))])],1)}))},v=[],p={props:["menuList"],data:function(){return{}},methods:{changeBg:function(t){this.$store.dispatch("changeBg",t)}},computed:Object(r["b"])(["bgColor"])},d=p,g=(o("20ea"),Object(m["a"])(d,A,v,!1,null,null,null));g.options.__file="CommonFooter.vue";var w=g.exports,C={data:function(){return{menuList:[{name:"电影",path:"/movie",bgColor:"rgb(33, 150, 243)",title:"movie"},{name:"音乐",path:"/music",bgColor:"rgb(0, 150, 136)",title:"music"},{name:"书籍",path:"/book",bgColor:"rgb(121, 85, 72)",title:"book"},{name:"图片",path:"/photo",bgColor:"#3f51b5",title:"photo"}]}},components:{CommonHeader:h,CommonFooter:w},created:function(){var t=this.$route.path,e=this.menuList.filter(function(e){return e.path==t});this.$store.dispatch("changeBg",e[0])}},b=C,Q=(o("5c0b"),Object(m["a"])(b,i,a,!1,null,null,null));Q.options.__file="App.vue";var E=Q.exports,B=o("8c4f"),I=o("948e"),j=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"book"},[o("swipe",{staticClass:"my-swipe"},[o("swipe-item",{staticClass:"item1"}),o("swipe-item",{staticClass:"item2"}),o("swipe-item",{staticClass:"item3"})],1)],1)},M=[],O=o("ada1"),k={components:{swipe:O["Swipe"],"swipe-item":O["SwipeItem"]}},D=k,_=(o("72c9"),Object(m["a"])(D,j,M,!1,null,null,null));_.options.__file="Book.vue";var y=_.exports,R=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"photo"},t._l(t.photoList,function(t,e){return o("router-link",{attrs:{to:"/photoDetail/"+e}},[o("img",{attrs:{src:t.src}})])}))},S=[],x=o("bc3a"),L=o.n(x),T={data:function(){return{photoList:[]}},created:function(){var t=this;L.a.get("data/photodata.json").then(function(e){t.photoList=e.data.photoData,t.$store.dispatch("setPhoto",t.photoList)})}},F=T,J=(o("1dee"),Object(m["a"])(F,R,S,!1,null,"b307986e",null));J.options.__file="Photo.vue";var H=J.exports,P=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"music"},[t.isShow?o("aplayer",{attrs:{autoplay:"",showLrc:!0,music:t.musicList[0],list:t.musicList}}):t._e()],1)},G=[],K=(o("ac6a"),o("0f7d")),Z=o.n(K),Y={data:function(){return{musicList:[],isShow:!1}},created:function(){var t=this;L.a.get("data/musicdata.json").then(function(e){var o=e.data.musicData;o.forEach(function(e){var o={};o.title=e.title,o.src=e.src,o.artist=e.author,o.pic=e.musicImgSrc,o.lrc="http://localhost:8080/"+e.lrc,t.musicList.push(o)}),t.isShow=!0})},components:{Aplayer:Z.a}},W=Y,U=(o("55a5"),Object(m["a"])(W,P,G,!1,null,null,null));U.options.__file="Music.vue";var V=U.exports,z=function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.show?o("div",{staticClass:"movie-detail"},[o("h3",[t._v("名称:"+t._s(t.movieDetail.title))]),o("img",{attrs:{src:t.movieDetail.images.small,alt:""}}),o("p",[t._v("id:"+t._s(t.movieDetail.id))]),o("p",[t._v("简介:"+t._s(t.movieDetail.summary))])]):t._e()},q=[],N={data:function(){return{movieDetail:{},show:!1}},mounted:function(){var t=this,e=this.$route.params.id;L.a.get("https://bird.ioliu.cn/v1?url=https://api.douban.com/v2/movie/subject/"+e).then(function(e){t.movieDetail=e.data,t.show=!0})}},X=N,$=(o("c906"),Object(m["a"])(X,z,q,!1,null,null,null));$.options.__file="MovieDetail.vue";var tt=$.exports,et=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"movie-home"},[n("ul",t._l(t.movieList,function(e){return n("MovieList",{attrs:{movie:e},nativeOn:{click:function(o){t.getDetail(e)}}})})),n("div",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],staticClass:"loading"},[n("img",{attrs:{src:o("f8b2"),alt:""}})]),n("div",{directives:[{name:"show",rawName:"v-show",value:t.isEnd,expression:"isEnd"}]},[t._v("\n      到底了...\n  ")])])},ot=[],nt=o("8afe"),it=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("li",[o("div",{staticClass:"movie-img"},[o("img",{attrs:{src:t.movie.images.small,alt:""}})]),o("div",{staticClass:"movie-desc"},[o("h3",[t._v(t._s(t.movie.title))]),o("p",[t._v("观众评 "),o("span",{staticClass:"aver"},[t._v(t._s(t.movie.rating.average))])]),t._v("\n        主演："),t._l(t.movie.casts,function(e){return o("span",[t._v(t._s(e.name)+" ")])})],2)])},at=[],st={props:["movie"]},ct=st,rt=(o("877d"),Object(m["a"])(ct,it,at,!1,null,"13fc3dc4",null));rt.options.__file="MovieList.vue";var ut=rt.exports,lt={data:function(){return{movieList:[],isShow:!1,isEnd:!1}},created:function(){var t=this;this.getData(),window.onscroll=function(){var e=document.documentElement.scrollTop,o=document.documentElement.scrollHeight,n=document.documentElement.clientHeight;e+n!=o||t.isEnd||(t.isShow=!0,t.getData())}},methods:{getDetail:function(t){this.$router.push("/movie/movie-detail/"+t.id)},getData:function(){var t=this;L.a.get("/movie.json").then(function(e){var o=e.data.subjects.slice(t.movieList.length,t.movieList.length+5);t.movieList=Object(nt["a"])(t.movieList).concat(Object(nt["a"])(o)),console.log(t.movieList),t.isShow=!1,o.length<5&&(t.isEnd=!0)})}},components:{MovieList:ut},destroyed:function(){window.onscroll=null}},mt=lt,ft=(o("3c90"),Object(m["a"])(mt,et,ot,!1,null,"3379acb0",null));ft.options.__file="MovieHome.vue";var ht=ft.exports,At=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("router-link",{attrs:{to:"/photo"}},[o("v-touch",{staticClass:"photo-detail",style:{"background-image":"url("+t.photoList[t.index].src+")"},on:{swipeleft:t.left,swiperight:t.right}})],1)},vt=[],pt={data:function(){return{index:this.$route.params.index}},methods:{left:function(){this.index++},right:function(){this.index--}},computed:Object(r["b"])(["photoList"])},dt=pt,gt=(o("f85e"),Object(m["a"])(dt,At,vt,!1,null,"3b8db3b0",null));gt.options.__file="PhotoDetail.vue";var wt=gt.exports;n["default"].use(B["a"]);var Ct=new B["a"]({mode:"history",base:"/wwwww/dist/",routes:[{path:"/",redirect:"/movie/movie-home"},{path:"/movie",name:"movie",component:I["default"],children:[{path:"movie-detail/:id",name:"moviedetail",component:tt},{path:"movie-home/",name:"moviehome",component:ht}]},{path:"/music",name:"music",component:V},{path:"/book",name:"book",component:y},{path:"/photo",name:"photo",component:H},{path:"/photoDetail/:index",component:wt}]});n["default"].use(r["a"]);var bt=new r["a"].Store({state:{bgColor:"rgb(33, 150, 243)",title:"movie",photoList:[]},mutations:{changeBg:function(t,e){t.bgColor=e.bgColor,t.title=e.title},photo:function(t,e){t.photoList=e}},actions:{changeBg:function(t,e){var o=t.commit;o("changeBg",e)},setPhoto:function(t,e){var o=t.commit;o("photo",e)}}}),Qt=o("ca95"),Et=o.n(Qt);o("4ee2");(function(t){var e,o=t.document,n=o.documentElement;function i(){var t=n.getBoundingClientRect().width,e=t/6.4;n.style.fontSize=e+"px"}t.addEventListener("resize",function(){clearTimeout(e),e=setTimeout(i,10)},!1),t.addEventListener("pageshow",function(t){t.persisted&&(clearTimeout(e),e=setTimeout(i,10))},!1),i()})(window);o("d081");n["default"].use(Et.a,{name:"v-touch"}),n["default"].config.productionTip=!1,new n["default"]({router:Ct,store:bt,render:function(t){return t(E)}}).$mount("#app")},"5c0b":function(t,e,o){"use strict";var n=o("106f"),i=o.n(n);i.a},"5c3b":function(t,e,o){},"655c":function(t,e,o){"use strict";var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"movie"},[o("router-view")],1)},i=[];o.d(e,"a",function(){return n}),o.d(e,"b",function(){return i})},"72c9":function(t,e,o){"use strict";var n=o("0271"),i=o.n(n);i.a},"877d":function(t,e,o){"use strict";var n=o("c33d"),i=o.n(n);i.a},"8be2":function(t,e,o){"use strict";var n=o("9fc3"),i=o.n(n);i.a},"948e":function(t,e,o){"use strict";var n=o("655c"),i=o("98eb"),a=(o("8be2"),o("2877")),s=Object(a["a"])(i["default"],n["a"],n["b"],!1,null,"8d2e2f46",null);s.options.__file="Movie.vue",e["default"]=s.exports},"98eb":function(t,e,o){"use strict";var n=o("486e"),i=o.n(n);e["default"]=i.a},"9df6":function(t,e,o){},"9fc3":function(t,e,o){},aef3:function(t,e,o){"use strict";var n=o("ccf7"),i=o.n(n);i.a},bdbd:function(t,e,o){},c33d:function(t,e,o){},c800:function(t,e,o){},c906:function(t,e,o){"use strict";var n=o("bdbd"),i=o.n(n);i.a},ccf7:function(t,e,o){},d081:function(t,e,o){},f32d:function(t,e,o){},f85e:function(t,e,o){"use strict";var n=o("0c9c"),i=o.n(n);i.a},f8b2:function(t,e){t.exports="data:image/gif;base64,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"}});
//# sourceMappingURL=app.396a51d8.js.map