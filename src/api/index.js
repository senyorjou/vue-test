import axios from "axios"

export default {
  step: async () => {
    const url = "/step/"
    const response = await axios.get(url)
    console.log(response.data)
    return response.data
  },
}
