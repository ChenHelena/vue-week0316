<script>
  const { VITE_URL } = import.meta.env
  export default {
    data(){
      return{
        user:{
          username:'',
          password:''
        }
      }
    },
    methods:{
      login(){
        const api = `${ VITE_URL }admin/signin`
        this.$http.post(api,this.user)
          .then((res)=>{
            console.log(res);
            const { token, expired } = res.data
            document.cookie = `helenaToken=${token}; expires=${new Date(expired)};` 
            this.$router.push('/admin/products')
          })
          .catch((error) => {
            alert(error)
          })
      }
    }
  }
</script>
<template>
  <div class="container">
    <form class="form-signin contianer" @submit.prevent="login">
      <div class="form-floating mb-3">
        <input type="email" class="form-control" id="floatingInput" v-model="user.username" placeholder="name@example.com"
          required autofocus>
        <label for="floatingInput">Email address</label>
      </div>
      <div class="form-floating">
        <input type="password" class="form-control" v-model="user.password" id="floatingPassword" placeholder="Password"
          required>
        <label for="floatingPassword">Password</label>
      </div>
      <button class="btn btn-lg btn-primary w-100 mt-3" type="submit">
        登入
      </button>
    </form>
  </div>
</template>