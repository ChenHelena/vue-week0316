<script>
const { VITE_URL, VITE_PATH } = import.meta.env
import { Modal } from 'bootstrap'
import ProductModal from '@/components/ProductModal.vue'
import DelProductModal from '@/components/DelProductModal.vue'
import PaginationView from '@/components/PaginationView.vue'

export default {
  data(){
    return{
      products:[],
      tempProduct: {
        imageUrl: []
      },
      isNew: false,//確認modal是新增還是編輯
      page:{},
    }
  },
  components:{
    ProductModal,
    DelProductModal,
    PaginationView
  },
  methods:{
    checkAdmin() {
      const url = `${VITE_URL}api/user/check`
      this.$http.post(url)
        .then((res) => {
          if (res.data.success) {
            this.$router.push('/admin/products')
          }
        })
        .catch(() => {
          this.$router.push('/login')
        })
    },
    getData(page = 1){
      const url = `${VITE_URL}api/${VITE_PATH}/admin/products?page=${page}`
      this.$http.get(url)
        .then((res)=>{
          this.products = res.data.products
          this.page = res.data.pagination
        })
        .catch((err)=>{
          console.log(err.response.data.message);
        })
    },
     openModal(status, product) {
      if (status === 'delete') {
        this.tempProduct = { ...product }
        this.delProductModal.show()
      } else if (status === 'edit') {
        this.isNew = false
        this.tempProduct = { ...product }
        this.productModal.show()
        console.log(this.tempProduct);
      } else if (status === 'new') {
        this.isNew = true
        this.tempProduct = { imagesUrl: [] }
        this.productModal.show()
      }
    },
    updateProduct(){
      let url =`${VITE_URL}api/${VITE_PATH}/admin/product`
      let method = 'post'
      if(!this.isNew){
        url = `${VITE_URL}api/${VITE_PATH}/admin/product/${ this.tempProduct.id }`
        method = 'put'
      }
      this.$http[method](url,{ data:this.tempProduct})
        .then((res)=>{
          alert(res.data.message);
          this.productModal.hide();
          this.getData();
        })
        .catch((err) => {
          alert(err.response.data);
        })
    },
    deleteProduct() {
      const url = `${VITE_URL}api/${VITE_PATH}/admin/product/${this.tempProduct.id}`
      this.$http.delete(url)
        .then(res => {
          alert(res.data.message)
          this.delProductModal.hide()
          this.getData()
        })
        .catch(err => {
          alert(err.data)
        })
    },
  },
  mounted(){
    this.getData()
    this.productModal = new Modal('#productModal')
    this.delProductModal = new Modal('#delProductModal')
    this.checkAdmin()
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)helenaToken\s*=\s*([^;]*).*$)|^.*$/, '$1')
    this.$http.defaults.headers.common.Authorization = token
  }
}
</script>
<template>
  <div class="container">
    <div class="text-end mt-4">
      <button class="btn btn-primary"  @click="() => openModal('new') ">
        建立新的產品
      </button>
    </div>
    <table class="table mt-4">
      <thead>
        <tr>
          <th width="120">
            分類
          </th>
          <th>產品名稱</th>
          <th width="120">
            原價
          </th>
          <th width="120">
            售價
          </th>
          <th width="100">
            是否啟用
          </th>
          <th width="120">
            編輯
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in products" :key="item.id">
          <td>{{ item.category }}</td>
          <td>{{ item.title }}</td>
          <td class="text-end">
            {{ item.origin_price }}
          </td>
          <td class="text-end">
            {{ item.price }}
          </td>
          <td>
            <span class="text-success" v-if="item.is_enabled">啟用</span>
            <span v-else>未啟用</span>
          </td>
          <td>
            <div class="btn-group">
              <button type="button" class="btn btn-outline-primary btn-sm" @click="() => openModal('edit', item)">
                編輯
              </button>
              <button type="button" class="btn btn-outline-danger btn-sm" @click="() => openModal('delete', item)">
                刪除
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <PaginationView :pages="page" @emit-pages="getData"></PaginationView>
    <!-- modal -->
    <div id="productModal" ref="productModal" class="modal fade" tabindex="-1" aria-labelledby="productModalLabel"
    aria-hidden="true">
      <product-modal :is-new="isNew" :temp-product="tempProduct" :update-product="updateProduct"></product-modal>
    </div>
    <div id="delProductModal" ref="delProductModal" class="modal fade" tabindex="-1"
        aria-labelledby="delProductModalLabel" aria-hidden="true">
      <del-product-modal :item="tempProduct" @del-modal="deleteProduct"></del-product-modal>
    </div>
  </div>
</template>