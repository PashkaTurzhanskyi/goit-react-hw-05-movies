"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[75],{126:function(e,t,n){n.d(t,{$:function(){return c},_:function(){return r}});var r="https://api.themoviedb.org/3/",c="51103b4e400ad80867dbac8add08ee9b"},75:function(e,t,n){n.r(t);var r=n(439),c=n(791),a=n(243),i=n(689),u=n(87),o=n(126),s=n(184);t.default=function(){var e=(0,c.useState)([]),t=(0,r.Z)(e,2),n=t[0],d=t[1],l=(0,c.useState)(null),h=(0,r.Z)(l,2),f=h[0],m=h[1],p=(0,i.TH)();return(0,c.useEffect)((function(){a.Z.get("".concat(o._,"trending/movie/day?api_key=").concat(o.$)).then((function(e){var t=e.data;return d(t.results)})).catch((function(e){return m(e)}))}),[]),(0,s.jsxs)("div",{children:[(0,s.jsx)("h1",{children:"Trending today"}),(0,s.jsxs)("ul",{children:[f&&(0,s.jsx)("p",{children:f.message}),n.map((function(e){return(0,s.jsx)("li",{children:(0,s.jsx)(u.rU,{to:"movies/".concat(e.id),state:{from:p},children:e.title})},e.id)}))]})]})}}}]);
//# sourceMappingURL=75.0bc5ceee.chunk.js.map