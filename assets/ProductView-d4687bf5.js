import{_ as i,b as n,o as s,c,d as t,t as d}from"./index-acd9cc3d.js";import{c as a}from"./cart-03eb1fee.js";const{VITE_URL:p,VITE_PATH:_}={VITE_URL:"https://vue3-course-api.hexschool.io/v2/",VITE_PATH:"helena27",BASE_URL:"/vue-week0316/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},l={data(){return{product:{}}},methods:{getProduct(){const{id:r}=this.$route.params;this.$http.get(`${p}api/${_}/product/${r}`).then(e=>{this.product=e.data.product})},...n(a,["addToCart"])},mounted(){this.getProduct()}},u={class:"container"},h={class:"card mb-3 mx-auto",style:{"max-width":"768px"}},m={class:"row g-0"},g={class:"col-md-4"},f=["src"],v={key:1,src:"https://tomchun.tw/tomchun/wp-content/uploads/2020/07/S__31834120.jpg",class:"card-img-top object-fit-cover",height:"200",alt:"..."},x={class:"col-md-8"},y={class:"card-body"},b={class:"card-title"},k={key:0,class:"card-text"},E={key:1,class:"card-text"},T={class:"card-text fs-5 text-end"};function w(r,e,V,P,o,S){return s(),c("div",u,[t("div",h,[t("div",m,[t("div",g,[o.product.imageUrl?(s(),c("img",{key:0,src:o.product.imageUrl,class:"img-fluid rounded-start h-100",alt:"..."},null,8,f)):(s(),c("img",v))]),t("div",x,[t("div",y,[t("h5",b,d(o.product.title),1),o.product.content?(s(),c("p",k,d(o.product.content),1)):(s(),c("p",E,"無說明")),t("p",T,"$ "+d(o.product.price),1),t("button",{type:"button",class:"btn btn-primary w-100",onClick:e[0]||(e[0]=()=>r.addToCart(o.product.id))},"加入購物車")])])])])])}const A=i(l,[["render",w]]);export{A as default};
