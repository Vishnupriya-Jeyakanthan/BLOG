import axios from "axios"
export default{
    getBlogs({success, failure, data})
    {
        axios.get(`http://10.30.1.164:8083/blog/getBlogs`)
        .then((data) => {
            success(data)
        })
        .catch((error) => {
            failure(error)
        })
    },
}