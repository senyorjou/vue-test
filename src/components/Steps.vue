<template>
  <div>
    <ul class="flex pl-0 list-none rounded my-2">
      <li
        v-for="(step, index) in stepsList"
        :key="index"
        :class="[
          'relative',
          'block',
          'py-2',
          'px-3',
          'leading-tight',
          'bg-white',
          'border',
          'border-gray-300',
          'text-blue-700',
          index === 0 ? 'rounded-l' : '',
          index === stepsList.length - 1 ? 'rounded-r' : '',
          index === 0 ? 'bg-gray-200' : '',
          'hover:bg-gray-400',
          'cursor-pointer',
        ]"
      >
        {{ step }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Steps",
  props: {
    steps: String,
  },
  computed: {
    stepsList: function() {
      return this.steps.split(",").map(step => step.trim())
    },
  },
}
</script>
