<template>
  <section id="login-page">
    <div
      class="container d-flex justify-content-center flex-column"
      style="height: 100vh;"
    >
      <div>
        <form
          class="container justify-content-sm-center"
          style="width: 300px;"
          @submit.prevent="login"
        >
          <div class="container text-center">
            <h3 style="color: blue;">E-COMMERCE CMS LOGIN</h3>
          </div>
          <label for=""><h6 style="color: green;">Email</h6></label>
          <input type="email" v-model="email" class="form-control" />
          <label for=""><h6 style="color: green;">Password</h6></label>
          <input
            type="password"
            v-model="password"
            class="form-control"
          />
          <div class="row" style="padding-top: 1rem;">
            <div class="container d-flex">
              <button type="submit" class="btn btn-primary btn-lg btn-block">
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login () {
      this.$store.dispatch('goLogin', { email: this.email, password: this.password })
      this.$nextTick(() => {
        this.$router.push('/').catch(() => {})
      })
    }
  }
}
</script>

<style></style>
