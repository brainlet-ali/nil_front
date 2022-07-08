import axios from '@/lib/axios'

const FeatureAPI = {
  features: async (version) => {
    return await axios
      .get(`/features/${version}`)
      .catch((error) => error.response)
  },
}

export default FeatureAPI
