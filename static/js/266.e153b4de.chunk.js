"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[266],{126:function(e,t,n){n.d(t,{$:function(){return c},_:function(){return r}});var r="https://api.themoviedb.org/3/",c="51103b4e400ad80867dbac8add08ee9b"},266:function(e,t,n){n.r(t);var r=n(439),c=n(791),a=n(243),i=n(689),o=n(87),u=n(126),d=n(184);t.default=function(){var e=(0,c.useState)([]),t=(0,r.Z)(e,2),n=t[0],s=t[1],l=(0,i.TH)();return(0,c.useEffect)((function(){a.Z.get("".concat(u._,"trending/movie/day?api_key=").concat(u.$)).then((function(e){var t=e.data;return s(t.results)})).catch((function(e){return console.log(e)}))}),[]),(0,d.jsxs)("div",{children:[(0,d.jsx)("h1",{children:"Trending today"}),(0,d.jsx)("ul",{children:n.map((function(e){return(0,d.jsx)("li",{children:(0,d.jsx)(o.rU,{to:"movies/".concat(e.id),state:{from:l},children:e.title})},e.id)}))})]})}}}]);
//# sourceMappingURL=266.e153b4de.chunk.js.map