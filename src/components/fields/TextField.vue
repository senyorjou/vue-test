<template>
  <div class="mb-4">
    <label class="block text-gray-700 text-sm font-bold mb-2" :for="props.id">
      {{ props.name }}
    </label>
    <input
      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      :id="props.id"
      type="text"
      :placeholder="props.name"
      :value="props.data"
    />
  </div>
</template>

<script>
export default {
  name: "TextField",
  props: {
    props: Object,
  },

  mounted: function() {
    console.log("Inside field, props:", this.props)
  },
}
</script>
