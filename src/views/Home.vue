<template>
<div>
  <div>
    <div>
      <div>
        <b-navbar toggleable="lg" type="dark" variant="info">
          <b-navbar-brand href="#">E-Commerce CMS</b-navbar-brand>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-button
              @click.prevent="doLogOut"
              size="sm"
              class="my-2 my-sm-0"
              type="button"
              >LOGOUT</b-button
            >
          </b-navbar-nav>
        </b-navbar>
      </div>
  <div class="container-banner" style="height: 30vh">
    <div  style="text-align: center;">
      <b-button v-b-modal="'my-modal'"><b-badge variant="light">Add Banner</b-badge></b-button>
      <b-modal id="my-modal">
        <form @submit.prevent="addBaner">
          <div>imageUrl:</div><input type="text" v-model="imageUrl"><button type="submit">Submit</button>
        </form>
      </b-modal>
    </div>
    <div class="d-flex justify-content-center" style="height: 100%; padding: 20px;">
      <img :src="baner">
    </div>
  </div>
  <div class="d-flex justify-content-center">
  <router-link to="/add-products">ADD PRODUCT</router-link>
  </div>
  <div class="container">
    <div class="row">
    <Cards v-for="product in products"
    :key="product.id"
    :product="product"/>
    </div>
    <div>
    </div>
  </div>
  </div>
  </div>
</div>
</template>

<script>
import Cards from '../components/Cards.vue'
import { mapState } from 'vuex'

export default {
  name: 'Products',
  components: {
    Cards
  },
  data () {
    return {
      imageUrl: ''
    }
  },
  methods: {
    doLogOut () {
      localStorage.removeItem('access_token')
      this.$nextTick(() => {
        this.$router.push('/login').catch(() => {})
      })
    },
    addBaner () {
      this.$store.dispatch('addBaner', { imageUrl: this.imageUrl })
    }
  },
  computed: {
    ...mapState({
      products: 'products',
      baner: 'baner'
    })
  },
  created () {
    this.$store.dispatch('getProducts')
  }
}
</script>

<style scoped>
a {
  font-weight: bold;
  color: #2c3e50;
  padding: 5px 10px;
  border: 1px solid gray;
  margin: 20px;
}

a.router-link-exact-active {
  color: #42b983;
}
</style>
