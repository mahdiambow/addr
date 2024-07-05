<template>
  <div class="flex-grow-1 mt-4 mb-2 ms-3">
    <div class="row align-items-center">
      <div class="col d-flex flex-column">
        <h6 class="mb-0 fw-light text-right" v-text="title"></h6>
        <textarea
          class="form-control mt-2"
          v-model="componentValue"
          rows="4"
          :style="[{ 'font-family': fontFamily }]"
        ></textarea>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    modelValue: {
      type: String,
      default: "",
    },
    fontFamily: {
      String,
      default: "unset",
    },

    title: {
      type: String,
      default: "title",
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
</style>