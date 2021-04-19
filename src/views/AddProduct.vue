<template>
      <div
      class="container d-flex justify-content-center flex-column"
      style="height: 100vh;"
    >
      <div>
        <form
          class="container justify-content-sm-center"
          style="width: 300px;"
          @submit.prevent="goAdd"
        >
          <div class="container text-center">
            <h3 style="color: blue;">ADD PRODUCT</h3>
          </div>
          <label for=""><h6 style="color: green;">Name</h6></label>
          <input type="text" v-model="addProductValue.name" class="form-control" />
          <label for=""><h6 style="color: green;">ImageUrl</h6></label>
          <input
            type="text"
            v-model="addProductValue.imageUrl"
            class="form-control"
          />
          <label for=""><h6 style="color: green;">Price</h6></label>
          <input type="number" v-model="addProductValue.price" class="form-control" />
          <label for=""><h6 style="color: green;">Stock</h6></label>
          <input type="number" v-model="addProductValue.stock" class="form-control" />
          <div class="row" style="padding-top: 1rem;">
            <div class="container d-flex">
              <button type="submit" class="btn btn-primary btn-lg btn-block">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
</template>

<script>

export default {
  data () {
    return {
      addProductValue: {
        name: '',
        imageUrl: '',
        price: 0,
        stock: 0
      }
    }
  },
  methods: {
    goAdd () {
      this.$store.dispatch('goAddProduct', this.addProductValue)
      this.$nextTick(() => {
        this.$router.push('/').catch(() => {})
      })
    }
  }
}
</script>
