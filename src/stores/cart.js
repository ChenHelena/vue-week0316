import { defineStore } from 'pinia'
import axios from 'axios';

const { VITE_URL, VITE_PATH } = import.meta.env;

const cartStore = defineStore('cart', {
  state: () => {
    return {
      carts: [],
      total: 0,
      final_total: 0
    }
  },
  actions: {
    getCart() {
      axios.get(`${VITE_URL}api/${VITE_PATH}/cart`)
        .then((res) => {
          this.carts = res.data.data.carts;
          this.total = res.data.data.total;
          this.final_total = res.data.data.final_total;
        })
    },
    addToCart(product_id, qty = 1) {
      const data = {
        data: {
          product_id,
          qty,
        },
      };
      axios.post(`${VITE_URL}api/${VITE_PATH}/cart`, data)
        .then(() => {
          this.getCart();
          alert('已加入購物車')
        })
    }
  }
});

export default cartStore;
