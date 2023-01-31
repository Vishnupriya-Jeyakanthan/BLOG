import axios from "axios"

export default
{
    name: 'AddNewTag',
    data(){
        return {
            newTag:{
                tagName:"",
                tagDescription:"",
                createdby:"",
            }
        }
    },
    methods:{
     async addnewtag()
    {
        alert('addnewtag func call')
        let addtag = await axios.post(`/two/tag/addTags
        `, this.newTag)
        console.log(this.newTag.value);
        if(this.newTag.value!="")
        {
            localStorage.setItem("newTag", JSON.stringify(addtag.data));
            console.log(addtag);
            alert('question added')
            this.$router.push('/TagDescription')
        }
        console.log(addtag);
        console.log(this.newTag);
    },
    clear()
    {
        this.newTag.tagName="";
        this.newTag.tagDescription=""
    },
    discarddraft(){
        alert('your draft has been cleared successfully')
        this.newTag.tagName=""
        this.newTag.tagDescription=""
        this.newTag.createdby=""
    }
}
}