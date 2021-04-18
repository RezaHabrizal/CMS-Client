<template>
  <div class="col-md">
    <b-card
      :title="product.name"
      :img-src="product.imageUrl"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 20rem"
      class="mb-2"
    >
      <b-card-text>
        {{ product.price }}
      </b-card-text>
      <div class="row">
        <div class="col-md">
        <b-button v-b-toggle="'sidebar-variant' + product.id">Edit Product</b-button>
        </div>
            <b-button variant="danger" @click.prevent="goDelete(product.id)">Delete</b-button>
          <div>
            <b-sidebar :id="'sidebar-variant'+ product.id" title="Edit Product" bg-variant="dark" text-variant="light" shadow>
              <div class="px-3 py-2">
                <div class="container">
                  <form @submit.prevent="goEdit">
                  <div>Name:</div>
                  <input type="text" v-model="product.name" required>
                  <div>ImageUrl:</div>
                  <input type="text" v-model="product.imageUrl" required>
                  <div>Price: (please input number only without any else)</div>
                  <input type="text" v-model="product.price" required>
                  <div>Stock:</div>
                  <input type="number" v-model="product.stock" required>
                  <div>
                  <button type="submit">Edit</button>
                  </div>
                </form>
                </div>
              </div>
            </b-sidebar>
        </div>
      </div>
    </b-card>
  </div>
</template>

<script>
export default {
  props: ['product'],
  methods: {
    goEdit () {
      this.$store.dispatch('goEdit', this.product)
      this.$nextTick(() => {
        this.$store.dispatch('getProducts')
      })
    },
    goDelete (id) {
      this.$store.dispatch('goDelete', { id })
      this.$nextTick(() => {
        this.$store.dispatch('getProducts')
      })
    }
  }
}
</script>

<style>
</style>
