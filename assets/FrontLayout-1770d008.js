import{_ as r,R as d,a as _,m as p,b as u,r as n,o as v,c as b,d as t,e as a,w as e,F as m,f as o,t as g}from"./index-d6217576.js";import{c}from"./cart-546ec985.js";const h={components:{RouterView:d,RouterLink:_},computed:{...p(c,["carts"])},methods:{...u(c,["getCart"])},mounted(){this.getCart()}},f={class:"navbar navbar-expand-lg bg-body-tertiary mt-2"},k={class:"container-fluid"},x=t("a",{class:"navbar-brand",href:"#"},null,-1),y=t("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},[t("span",{class:"navbar-toggler-icon"})],-1),R={class:"collapse navbar-collapse",id:"navbarNav"},w={class:"navbar-nav d-flex justify-content-center w-100 text-center"},N={class:"nav-item"},V={class:"nav-item"},B={class:"nav-item"},C={class:"nav-item"},L={class:"nav-item"},$={class:"bi bi-cart nav-link position-relative"},F={class:"position-absolute top-0 start-100 translate-middle badge rounded-pill text-bg-danger p-2"};function S(l,A,T,j,D,E){const s=n("RouterLink"),i=n("RouterView");return v(),b(m,null,[t("nav",f,[t("div",k,[x,y,t("div",R,[t("ul",w,[t("li",N,[a(s,{to:"/",class:"nav-link"},{default:e(()=>[o("Home")]),_:1})]),t("li",V,[a(s,{to:"/about",class:"nav-link"},{default:e(()=>[o("About")]),_:1})]),t("li",B,[a(s,{to:"/products",class:"nav-link"},{default:e(()=>[o("Products")]),_:1})]),t("li",C,[a(s,{to:"/admin/products",class:"nav-link"},{default:e(()=>[o("Backstage")]),_:1})]),t("li",L,[a(s,{to:"/carts",class:"nav-link py-0"},{default:e(()=>[t("i",$,[t("span",F,g(l.carts.length),1)])]),_:1})])])])])]),a(i)],64)}const q=r(h,[["render",S]]);export{q as default};
