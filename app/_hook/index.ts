import { useQuery,useMutation } from "react-query"
import { getPosts,getComments } from "../_api/index"

export const useGetPosts = () => {
    return useQuery('getPost',getPosts)
}

export const useGetComments = () => {
    return useQuery('getCommnets',getComments)
}