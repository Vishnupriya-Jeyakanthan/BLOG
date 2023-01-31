import axios from "axios"

export default
{
    name: 'AskQues',
    data(){
        return {
            newQuestion:{
                title:"",
                blogdescription:"",
                thingstried:"",
            }
        }
    },
    methods:{
     async postques()
    {
        alert('postques func call')
        let newQue = await axios.post(`/three/blog/addBlogs`, this.newQuestion)
        console.log(this.newQuestion.title, this.newQuestion.description, this.newQuestion.thingstried)
        
        console.log(this.newQuestion.value);
        if(this.newQuestion.value!="")
        {
            localStorage.setItem("newQuestion", JSON.stringify(newQue.data));
            console.log(newQue);
            alert('question added')
            this.$router.push('/BlogPage')
        }
        console.log(newQue);
        console.log(this.newQuestion);
    },
    clear()
    {
        this.newQuestion.title="";
        this.newQuestion.blogdescription="",
        this.newQuestion.thingstried=""
    },
    discarddraft(){
        this.newQuestion.title=""
        this.newQuestion.blogdescription=""
        this.newQuestion.thingstried=""
    }
}
    // methods(){

    // }
}