<script>
const { VITE_URL, VITE_PATH } = import.meta.env;
export default{
  data(){
    return{
      carts:{},
      loadingItem:''
    }
  },
  methods:{
    getCarts() {
      this.$http.get(`${VITE_URL}api/${VITE_PATH}/cart`)
        .then((res) => {
          this.carts = res.data.data;
        })
    },
    updateCartItem(item){
      this.loadingItem = item.id
      const data = {
        product_id:item.product.id,
        qty: item.qty
      }
      this.$http.put(`${VITE_URL}api/${VITE_PATH}/cart/${item.id}`,{ data })
        .then(() => {
          this.getCarts()
          this.loadingItem = '';
          alert('已更新購物車')
        })
        .catch((err) => {
          console.log(err)
        })
    },
    deleteItem(item){
      this.loadingItem = item.id;
      this.$http.delete(`${VITE_URL}api/${VITE_PATH}/cart/${item.id}`)
        .then(()=>{
          this.getCarts()
          this.loadingItem = ''
          alert('已刪除單一產品')
        })
        .catch((err) => {
          console.log(err);
        })
    },
    deleteAllCarts() {
      this.$http.delete(`${VITE_URL}api/${VITE_PATH}/carts`)
        .then((res) => {
          alert('刪除全部購物車成功')
          console.log('刪除全部購物車', res.data);
          this.getCarts();
        })
    },
  },
  mounted(){
    this.getCarts()
  }
}
</script>
<template>
  <div class="container">
    <!-- 購物車列表 -->
    <div class="text-end">
      <button class="btn btn-outline-danger"  @click="()=> deleteAllCarts()" type="button">清空購物車</button>
    </div>
    <table class="table align-middle" >
      <thead>
        <tr>
        <th></th>
        <th>品名</th>
          <th style="width: 150px">數量/單位</th>
          <th class="text-end">單價</th>
        </tr>
      </thead>
      <tbody>
        <template  v-if="carts.carts">
          <tr v-for="item in carts.carts" :key="item.id">
            <td>
              <button type="button" class="btn btn-outline-danger btn-sm"  @click="() => deleteItem(item)">
                <i class="fas fa-spinner fa-pulse"></i>
                x
              </button>
            </td>
            <td>
              {{ item.product.title }}
              <!-- <div class="text-success">
                已套用優惠券
              </div> -->
            </td>
            <td>
              <div class="input-group input-group-sm">
                <select name="" id="" v-model="item.qty" class="form-select"  @change="() => updateCartItem(item)">
                  <option :value="i" v-for="i in 20" :key="`${i}+123`">
                    {{ i }}
                  </option>
                </select>
                  <span class="input-group-text" id="basic-addon2" style="width
                  :30%">{{ item.product.unit }}</span>
              </div>
            </td>
            <td class="text-end">
              <!-- <small class="text-success">折扣價：</small> -->
              {{ item.total }}
            </td>
          </tr>
        </template>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="3" class="text-end">總計</td>
          <td class="text-end">{{ carts.total }}</td>
        </tr>
        <!-- <tr>
          <td colspan="3" class="text-end text-success">折扣價</td>
          <td class="text-end text-success"></td>
        </tr> -->
      </tfoot>
    </table>
  </div>
</template>