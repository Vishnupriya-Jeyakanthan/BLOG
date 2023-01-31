import axios from 'axios'
export default{
    fetchTags({succes, failure })
    {
        axios.get(`https://63d20c871780fd6ab9bd1092.mockapi.io/getTag`)
        .then(
            (data)=>
            {
                success(data)
            })
        .catch((error) => {
            failure(error)
        })
    }
}