import axios from "axios"

export default class PostService {
    static async getAll(params) {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
        return response.data
    }
}