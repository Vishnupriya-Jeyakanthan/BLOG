import axios from "axios"
export default{
    fetchTagsName({success, failure,tagname})
    {
axios.get(`http://10.30.1.164:8082/tag/getTag${tagname}`)
            .then(
                (data)=>
                {
                    success(data)
                })
            .catch((error) => {
                failure(error)
            })
    },
    fetchDescription({success,failure, tagdescription})
    {
        axios.get(`http://10.30.1.164:8082/tag/getTag${tagdescription}`)
        .then(
        (data)=> 
        {
            success(data)
        })
        .catch((error) => {
            failure(error)
        })
    },
    getTagbyId({success, failure, tagId})
    {
        axios.get(`http://10.30.1.164:8082/tag/getTagsById?tagId=${tagId}`)
        .then(
        (data)=>
        {
            success(data)
        })
        .catch((error) => {
            failure
        })
    }
}