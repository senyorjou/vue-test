<template>
  <div class="main">
    <Steps steps="Start, Step 1, Step 2" />
    <MainForm />
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex"

import MainForm from "@/components/MainForm.vue"
import Steps from "@/components/Steps.vue"

export default {
  name: "Home",
  components: {
    MainForm,
    Steps,
  },

  mounted: function() {
    this.LOAD_SCHEMA()
  },

  computed: {
    ...mapState(["isLoading"]),
  },

  methods: {
    ...mapActions(["LOAD_SCHEMA"]),
  },
}
</script>
