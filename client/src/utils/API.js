import axios from 'axios'

export default {
    findMany: function() {
        return axios.get(`/api/dog`)
    },
    deleteOne: function(id) {
        return axios.delete(`/api/dog/${id}`)
    }
}