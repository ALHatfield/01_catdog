import axios from 'axios'

export default {
    findMany: function() {
        return axios.get("/api/dog")
    }
}