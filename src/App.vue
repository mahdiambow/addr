<template>
  <Navbar />
  <router-view />
</template>

<script>
import Navbar from "@/components/Navbar.vue";
export default {
  components: {
    Navbar,
  },
};
</script>
<style>
.Vue-Toastification__toast-body {
  font-family: "Vazir";
  direction: rtl;
  text-align: right;
  margin-left: 7px;
  margin-right: 7px;
}
.Vue-Toastification__toast--warning {
  color: var(--bs-gray-900) !important;
}
#app {
  direction: rtl !important;
  font-family: Vazir;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
