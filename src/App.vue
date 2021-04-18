<template>
  <div id="app">
      <router-view />
  </div>
</template>

<script>

export default {
  created () {
    if (localStorage.access_token) {
      this.isLogin = true
    } else {
      this.isLogin = false
    }
  }
}
</script>
<style>
</style>
