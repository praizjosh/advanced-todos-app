<template>
  <button
    @click="$emit('click')"
    class="w-full py-2 px-4 text-white rounded-md"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    text: String,
  },
};
</script>
