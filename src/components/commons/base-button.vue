<template>
  <v-btn
    class="base_button"
    depressed
    :block="block"
    :type="type"
    :color="color"
    v-text="title"
    :height="height"
    v-bind="$attrs"
    v-on="$listeners"
  >
  </v-btn>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    title: {
      type: String,
      require: true,
    },

    type: {
      type: String,
      default: "button",
    },

    color: {
      type: String,
      require: true,
    },

    block: {
      type: Boolean,
      default: false,
    },

    height: {
      type: String,
      default: "42",
    }
  },
};
</script>
