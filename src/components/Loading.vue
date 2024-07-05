<template>
  <span
    class="spinner-border spinner-border-sm"
    role="status"
    aria-hidden="true"
    v-if="loading"
  ></span>
  <label style="margin-right: 10px" v-if="loading">لطفا صبر کنید</label>
</template>




<script>
export default {
  name: "ButtonLoading",
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {};
  },
};
</script>