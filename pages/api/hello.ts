import axios from "axios";

class ApiService {
    _URL = 'https://simple-blog-api.crew.red/';

    async getAllPosts(){
      const {data} = await axios.get(`${this._URL}posts`);
      return data;

    }

    async getPostById(id){
      const {data} = await axios.get(`${this._URL}posts/${id}?_embed=comments`);
      return data;
    }

    async createPost(newPost){
      return await axios.post(`${this._URL}posts`, newPost);     
    }
}

export const apiService = new ApiService();


