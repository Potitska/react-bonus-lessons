import {IPost} from "../interfaces/postInterface";
import {apiService, IRes} from "./apiService";
import {urls} from "../constants/urls";

const postService ={
    getAll(): IRes<IPost[]> {
        return apiService.get(urls.posts)
    }
}

export {
    postService
}