import{_ as r,a as d,r as _,o as s,c as e,d as o,F as l,g as h,t as c,e as p,w as u,f as m}from"./index-d6217576.js";const{VITE_URL:g,VITE_PATH:f}={VITE_URL:"https://vue3-course-api.hexschool.io/v2/",VITE_PATH:"helena27",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},k={data(){return{products:[]}},components:{RouterLink:d},methods:{getProducts(){this.$http.get(`${g}api/${f}/products/all`).then(a=>{this.products=a.data.products})}},mounted(){this.getProducts()}},v={class:"products"},x={class:"container"},V=o("h5",null,"This is an products page",-1),y={class:"row g-3"},E={class:"card"},R=["src"],T={key:1,src:"https://tomchun.tw/tomchun/wp-content/uploads/2020/07/S__31834120.jpg",class:"card-img-top object-fit-cover",height:"200",alt:"..."},$={class:"card-body"},w={class:"card-title"},L={key:0,class:"card-text"},P={key:1,class:"card-text"},b={class:"card-text fs-5 text-end"};function S(a,U,B,D,n,I){const i=_("RouterLink");return s(),e("div",v,[o("div",x,[V,o("div",y,[(s(!0),e(l,null,h(n.products,t=>(s(),e("div",{class:"col-md-3",key:t.id},[o("div",E,[t.imageUrl?(s(),e("img",{key:0,src:t.imageUrl,class:"card-img-top object-fit-cover",height:"200",alt:"..."},null,8,R)):(s(),e("img",T)),o("div",$,[o("h5",w,c(t.title),1),t.content?(s(),e("p",L,c(t.content),1)):(s(),e("p",P,"無說明")),o("p",b,"$ "+c(t.price),1),p(i,{to:`/product/${t.id}`,class:"btn btn-primary w-100 stretched-link"},{default:u(()=>[m("加入購物車")]),_:2},1032,["to"])])])]))),128))])])])}const A=r(k,[["render",S]]);export{A as default};
