<template>
  <div class="mb-4">
    <label class="block text-gray-700 text-sm font-bold mb-2">
      <input type="checkbox" v-model="props.data" />
      <span>{{ props.name }}</span>
    </label>
  </div>
</template>

<script>
export default {
  name: "BoolCheckBoxField",
  props: {
    props: Object,
  },
}
</script>
