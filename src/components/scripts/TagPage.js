import axios from "axios";
export default
{
    name:"TagPage",
    data(){
        return {
            list:[],
        }
    },
    async mounted(){
        let tags= await axios.get(`http://10.30.1.164:8082/tag/getTag`)
        console.log(tags);
        this.list=tags.data
        this.$emit('data',tags.data)
    }



}