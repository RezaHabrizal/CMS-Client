import Vue from 'vue'
import Vuex from 'vuex'
import axios from '@/API/axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    addProductValue: {
      name: '',
      imageUrl: '',
      price: 0,
      stock: 0
    },
    baner: ''
  },
  mutations: {
    setProducts (state, payload) {
      state.products = payload.data
    },
    addProduct (state, payload) {
      state.products.push(payload)
    },
    updateProducts (state, payload) {
      state.products.forEach(e => {
        if (e.id === payload.id) {
          e = payload
        }
      })
    },
    goLogOut (state) {
      localStorage.clear()
      this.$router.push({ name: 'Login' }).catch(() => {})
    },
    setBaner (state, payload) {
      state.baner = payload.imageUrl
    }
  },
  actions: {
    getProducts (context) {
      axios.get('/products')
        .then(({ data }) => {
          context.commit('setProducts', { data })
        })
        .catch(err => {
          console.log(err)
        })
    },
    goLogin (context, payload) {
      axios.post('/login', {
        data: {
          email: payload.email,
          password: payload.password
        }
      })
        .then(({ data }) => {
          localStorage.setItem('access_token', data.access_token)
        })
        .catch(err => {
          console.log(err)
        })
    },
    goEdit (context, payload) {
      axios.put(`/products/${payload.id}`, {
        data: {
          name: payload.name,
          imageUrl: payload.imageUrl,
          price: payload.price,
          stock: payload.stock
        }
      })
        .then(response => {
          // console.log(response.data.updated.price, '<<<<<<<<<<<<<<')
          context.commit('updateProducts', response.data.updated)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    goDelete (context, payload) {
      axios.delete(`/products/${payload.id}`)
        .then((response) => {
          console.log(response)
        })
        .catch(err => {
          console.log(err)
        })
    },
    goAddProduct (context, payload) {
      // console.log(payload.imageUrl, '<<<<<<<<payload addproduct')
      axios.post('/products', {
        data: {
          name: payload.name,
          imageUrl: payload.imageUrl,
          price: payload.price,
          stock: payload.stock
        }
      })
        .then(({ data }) => {
          context.commit('addProduct', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    goLogOut (context) {
      context.commit('goLogOut')
    },
    addBaner (context, payload) {
      axios.post('/baner', {
        data: {
          imageUrl: payload.imageUrl
        }
      })
        .then(({ data }) => {
          console.log(data)
          // context.commit('addBaner', data)
        })
        .catch(err => {
          console.log(err, '<<ERROR')
        })
    },
    getBaner (context) {
      axios.get('/baner')
        .then(({ data }) => {
          console.log(data)
          context.commit('setBaner', data)
        })
        .catch(err => {
          console.log(err, '<<ERROR')
        })
    }
  },
  modules: {
  }
})
