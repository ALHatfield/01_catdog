// TODO: Need to accomodate all axios calls for getting all cats/dogs and both separately.
import axios from 'axios'

export default {
    findAll: function() {
    },
    deleteOne: function(id) {
    },
    findDog: function() {
        return axios.get(`/api/dog`)
    },
    deleteDog: function(id) {
        return axios.delete(`/api/dog/${id}`)
    },
    findCat: function() {

    },
    deleteCat: function(id) {

    },
}