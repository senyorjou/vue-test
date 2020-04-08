<template>
  <div class="w-full max-w-xs">
    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div v-for="field in fields" :key="field.id">
        <component :is="field.type" :props="field" />
      </div>

      <div class="flex items-center justify-between">
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
        >
          Next Step &gt;&gt;
        </button>
      </div>
    </form>
    <textarea class="font-mono text-xs" cols="50" rows="10" v-model="schema_str"></textarea>
  </div>
</template>

<script>
import { mapState } from "vuex"

import BoolCheckBoxField from "@/components/fields/BoolCheckBoxField.vue"
import PasswordField from "@/components/fields/PasswordField.vue"
import TextField from "@/components/fields/TextField.vue"

export default {
  name: "MainForm",
  components: {
    TextField,
  },

  data() {
    return {
      fields: [
        {
          name: "Email",
          id: "email",
          type: TextField,
          data: "spyder@onna.com",
        },
        {
          name: "Password",
          id: "password",
          type: PasswordField,
        },
        {
          name: "Include channels",
          id: "channels_toggle",
          type: BoolCheckBoxField,
          data: true,
        },
      ],
    }
  },

  computed: {
    ...mapState(["schema_str"]),
  },
}
</script>
