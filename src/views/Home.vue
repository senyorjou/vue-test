<template>
  <div class="main">
    <Steps steps="Start, Step 1, Step 2" />
    <MainForm />
  </div>
</template>

<script>
// @ is an alias to /src
import MainForm from "@/components/MainForm.vue"
import Steps from "@/components/Steps.vue"

export default {
  name: "Home",
  components: {
    MainForm,
    Steps,
  },
}
</script>
