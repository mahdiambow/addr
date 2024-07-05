<template>
  <div class="flex-grow-1 d-flex flex-column">
    <h6 class="mb-0 fw-light text-right font-weight-bold" v-text="title"></h6>
    <input
      :type="type"
      v-model="componentValue"
      class="form-control mt-3"
      :placeholder="placeholder"
      style="padding: 1.4rem"
      :style="[{ 'font-family': fontFamily }]"
      :disabled="disabled"
    />
  </div>
</template>


<script>
export default {
  props: {
    modelValue: {
      type: String,
      default: "",
    },
    dir: {
      String,
      default: "rtl",
    },
    fontFamily: {
      String,
      default: "unset",
    },
    title: {
      type: String,
      default: "title",
    },
    type: {
      type: String,
      default: "text",
    },

    placeholder: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["update:modelValue"],
  computed: {
    componentValue: {
      get() {
        return this.modelValue;
      },
      set(componentValue) {
        this.$emit("update:modelValue", componentValue);
      },
    },
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
.myLtr {
  direction: ltr !important;
  text-align: left !important;
}

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}

.form-control:focus {
  border-color: #45cab8 !important;
  box-shadow: 0 0 0 0 !important;
}
</style>