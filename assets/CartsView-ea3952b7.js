import{_ as g,o as l,c as d,d as t,F as p,g as _,j as C,t as o,f,k as m,v as b}from"./index-d6217576.js";const{VITE_URL:c,VITE_PATH:r}={VITE_URL:"https://vue3-course-api.hexschool.io/v2/",VITE_PATH:"helena27",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},x={data(){return{carts:{},loadingItem:""}},methods:{getCarts(){this.$http.get(`${c}api/${r}/cart`).then(e=>{this.carts=e.data.data})},updateCartItem(e){this.loadingItem=e.id;const a={product_id:e.product.id,qty:e.qty};this.$http.put(`${c}api/${r}/cart/${e.id}`,{data:a}).then(()=>{this.getCarts(),this.loadingItem="",alert("已更新購物車")}).catch(u=>{console.log(u)})},deleteItem(e){this.loadingItem=e.id,this.$http.delete(`${c}api/${r}/cart/${e.id}`).then(()=>{this.getCarts(),this.loadingItem="",alert("已刪除單一產品")}).catch(a=>{console.log(a)})},deleteAllCarts(){this.$http.delete(`${c}api/${r}/carts`).then(e=>{alert("刪除全部購物車成功"),console.log("刪除全部購物車",e.data),this.getCarts()})}},mounted(){this.getCarts()}},y={class:"container"},I={class:"text-end"},$={class:"table align-middle"},V=t("thead",null,[t("tr",null,[t("th"),t("th",null,"品名"),t("th",{style:{width:"150px"}},"數量/單位"),t("th",{class:"text-end"},"單價")])],-1),v=["onClick"],k=t("i",{class:"fas fa-spinner fa-pulse"},null,-1),E={class:"input-group input-group-sm"},T=["onUpdate:modelValue","onChange"],A=["value"],D={class:"input-group-text",id:"basic-addon2",style:{width:"30%"}},R={class:"text-end"},S=t("td",{colspan:"3",class:"text-end"},"總計",-1),U={class:"text-end"};function q(e,a,u,w,i,h){return l(),d("div",y,[t("div",I,[t("button",{class:"btn btn-outline-danger",onClick:a[0]||(a[0]=()=>h.deleteAllCarts()),type:"button"},"清空購物車")]),t("table",$,[V,t("tbody",null,[i.carts.carts?(l(!0),d(p,{key:0},_(i.carts.carts,s=>(l(),d("tr",{key:s.id},[t("td",null,[t("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:()=>h.deleteItem(s)},[k,f(" x ")],8,v)]),t("td",null,o(s.product.title)+" ",1),t("td",null,[t("div",E,[m(t("select",{name:"",id:"","onUpdate:modelValue":n=>s.qty=n,class:"form-select",onChange:()=>h.updateCartItem(s)},[(l(),d(p,null,_(20,n=>t("option",{value:n,key:`${n}+123`},o(n),9,A)),64))],40,T),[[b,s.qty]]),t("span",D,o(s.product.unit),1)])]),t("td",R,o(s.total),1)]))),128)):C("",!0)]),t("tfoot",null,[t("tr",null,[S,t("td",U,o(i.carts.total),1)])])])])}const L=g(x,[["render",q]]);export{L as default};
