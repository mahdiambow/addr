<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light d-s-mobile">
    <a class="navbar-brand">
      <img
        src="https://achareh.co/_nuxt/img/achareh-type-logo.81c41d5.png"
        alt=""
        class="img-fluid"
        style="height: 2rem"
      />
    </a>

    <ul class="navbar-nav mr-auto d-flex flex-row">
      <li class="nav-item">
        <router-link class="nav-link mx-2" :to="{ name: 'Home' }"
          >صفحه اصلی</router-link
        >
      </li>

      <li class="nav-item">
        <router-link class="nav-link mx-2" :to="{ name: 'Address-New' }"
          >افزودن آدرس</router-link
        >
      </li>
    </ul>
  </nav>
  <!-- <nav>
    <img
      src="https://achareh.co/_nuxt/img/achareh-type-logo.81c41d5.png"
      alt=""
      class="img-fluid"
      style="height: 3rem"
    />
    <router-link :to="{ name: 'Home' }">صفحه اصلی</router-link> |
    <router-link :to="{ name: 'Address-New' }">افزودن آدرس</router-link>
  </nav> -->
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
nav {
  max-height: 8vh;
  min-height: 8vh;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav .nav-link.router-link-exact-active {
  color: #45cab8;
}
.navbar-light .navbar-nav .nav-link:focus,
.navbar-light .navbar-nav .nav-link:hover {
  color: #45cab8 !important;
}

@media all and (max-width: 1023px) {
  .d-s-mobile {
    display: flex;
    flex-direction: column;
  }
}
</style>
