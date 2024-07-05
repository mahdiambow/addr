<template>
  <button class="btn me-1 mb-1" :class="btnStyle" type="button">
    <label
      class="mb-0"
      style="cursor: pointer !important"
      for="basic"
      v-if="!showLoading"
      >{{ text }}</label
    >
    <span
      class="spinner-border spinner-border-sm"
      role="status"
      aria-hidden="true"
      v-if="showLoading"
    ></span>
    <!-- <label style="margin-right: 10px" v-if="showLoading">لطفا صبر کنید</label> -->
  </button>
</template>




<script>
export default {
  name: "ButtonLoading",
  props: {
    btnStyle: {
      type: String,
      default: "btn-dark",
    },
    showLoading: {
      type: Boolean,
      default: false,
    },
    text: {
      type: String,
      default: "",
    },
  },
  data() {
    return {};
  },
};
</script>