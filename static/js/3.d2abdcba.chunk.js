(this.webpackJsonpprofiler=this.webpackJsonpprofiler||[]).push([[3],{105:function(e,n,r){e.exports={findusers:"findusers_findusers__3Cw9G",searchbox:"findusers_searchbox__1RhDa",users:"findusers_users__29_Ce",usercard:"findusers_usercard__20XcH",ava:"findusers_ava__1_1FU",navlink:"findusers_navlink__1GM0a",button:"findusers_button__1HTze",data:"findusers_data__3Gg4C",tabs:"findusers_tabs__3PA2w",addMore:"findusers_addMore__2gbTY",addMoreBtn:"findusers_addMoreBtn__50ajg"}},106:function(e,n,r){e.exports={pagination_track:"pagination_pagination_track__1oEyx",pagination:"pagination_pagination__1v_UQ",page:"pagination_page__-9lmE",prev:"pagination_prev__2DTw9",next:"pagination_next__R1saG"}},110:function(e,n,r){"use strict";r.r(n);var t=r(2),s=r(0),a=r(1),i=r(17),c=r(9),u=r(60),l=r(27),o=r(8),d=r(106),f=r.n(d),j=function(e){var n=e.pageQuant,r=e.currentQuant,t=e.totalUsers,a=e.pageSize,i=e.isFetching,c=e.currentPage,u=e.pageHandler,d=Math.ceil(t/a),j=r,p=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:j;return u(e,n)},b=new Array(n).fill(1).filter((function(e,n){return e+n+j<=d})).map((function(e,n){return e+n+j}));return Object(s.jsxs)("div",{className:f.a.pagination_track,children:[i&&Object(s.jsx)(l.a,{}),Object(s.jsxs)("div",{className:f.a.pagination,children:[Object(s.jsx)("div",{className:f.a.prev,children:Object(s.jsx)(o.a,{title:"\u043f\u0440\u0435\u0434.",handler:function(){return j-n>=0&&u(j-n+1,j-n)},disabled:0===j,fontsize:"10px"})}),b.map((function(e){return Object(s.jsx)("div",{className:f.a.page,children:Object(s.jsx)(o.a,{title:e,type:e===c&&"activated",handler:p,handlerArgs:e,fontsize:"10px"})},e)})),Object(s.jsx)("div",{className:f.a.next,children:Object(s.jsx)(o.a,{title:"\u0441\u043b\u0435\u0434.",handler:function(){return j+n<d&&u(j+n+1,j+n)},disabled:j+n>=d,fontsize:"10px"})})]})]})},p=r(15),b=r(105),_=r.n(b),g=r(38),h=function(e){var n=function(){return e.user.followed?e.unfollower(e.user.id):e.follower(e.user.id)};return Object(s.jsxs)("div",{className:_.a.usercard,children:[Object(s.jsxs)("div",{className:_.a.ava,children:[Object(s.jsx)(p.b,{to:"/profile/".concat(e.user.id),className:_.a.navlink,children:Object(s.jsx)("img",{src:null===e.user.photos.small?g.a:e.user.photos.small,alt:"Avatar"})}),Object(s.jsx)("div",{className:_.a.button,children:e.user.followed?Object(s.jsx)(o.a,{disabled:e.whileFollow.some((function(n){return n===e.user.id})),title:"\u043e\u0442\u043f\u0438\u0441\u043a\u0430",type:"secondary",handler:n,fontsize:"10px"}):Object(s.jsx)(o.a,{disabled:e.whileFollow.some((function(n){return n===e.user.id})),title:"\u0432 \u0434\u0440\u0443\u0437\u044c\u044f",type:"primary",handler:n,fontsize:"10px"})})]}),Object(s.jsxs)("div",{className:_.a.data,children:[Object(s.jsx)("h3",{children:e.user.name}),Object(s.jsx)("p",{children:null===e.user.status?"\u043d\u0435\u043e\u043f\u044b\u0442\u043d\u044b\u0439 \u0433\u0435\u043d\u0438\u0439":e.user.status}),Object(s.jsxs)("div",{className:_.a.tabs,children:[e.icons.country,Object(s.jsx)("p",{children:"\u0420\u043e\u0441\u0441\u0438\u044f"})]}),Object(s.jsxs)("div",{className:_.a.tabs,children:[e.icons.city,Object(s.jsx)("p",{children:"\u041c\u043e\u0441\u043a\u0432\u0430"})]})]})]})},x=function(e){return Object(s.jsxs)("div",{className:_.a.findusers,children:[Object(s.jsx)("div",{className:_.a.searchbox}),Object(s.jsx)(j,{isFetching:e.isFetching,currentPage:e.currentPage,pageHandler:e.pageHandler,totalUsers:e.totalUsers,pageSize:e.pageSize,pageQuant:e.pageQuant,currentQuant:e.currentQuant}),Object(s.jsx)("div",{className:_.a.users,children:e.users.map((function(n){return Object(s.jsx)(h,{user:n,icons:e.icons,follower:e.follower,unfollower:e.unfollower,whileFollow:e.whileFollow},n.id)}))})]})},O=r(61),v=Object(O.a)((function(e){return e.findusers.users}),(function(e){return e.map((function(e){return e}))})),w=function(e){return e.findusers.pageSize},m=function(e){return e.findusers.pageQuant},N=function(e){return e.findusers.currentQuant},z=function(e){return e.findusers.totalUsers},F=function(e){return e.findusers.currentPage},Q=function(e){return e.findusers.isFetching},y=function(e){return e.findusers.whileFollow},P=r(62),U=r(63),k=Object(i.d)(u.a,Object(c.b)((function(e){return{users:v(e),icons:P.a(e),totalUsers:z(e),pageSize:w(e),pageQuant:m(e),currentQuant:N(e),currentPage:F(e),isFetching:Q(e),whileFollow:y(e)}}),{requestUsers:U.c,setCurrentPage:U.d,follower:U.b,unfollower:U.e}))((function(e){var n=e.requestUsers,r=e.currentPage,i=e.pageSize;Object(a.useEffect)((function(){return n(r,i)}),[n,r,i]);return Object(s.jsx)(x,Object(t.a)(Object(t.a)({},e),{},{pageHandler:function(n,r){return e.setCurrentPage(n,r)}}))}));n.default=k}}]);
//# sourceMappingURL=3.d2abdcba.chunk.js.map