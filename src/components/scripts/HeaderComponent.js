// import axios from "axios";
export default{
    name:"HeaderComponent",
    data(){
        return{
            searchquery:'',
            blogs:[]
        }
    },
    methods:
    {
        menubar()
        {
            this.$router.push('/MenuPage');
        },
        login(){
            this.$router.push('/login')
        },
        // signup()
        // {
        //     this.$router.push('/UserSignup')
        //     alert('called-signup')
        // },
        upvote()
        {
                this.upvote = !this.upvoted;
                this.downvoted = false;
        },
        downvote(){
            this.downvote = !this.downvoted;
            this.upvoted = false;

        }

    },    
    // created(){
    //      axios.get(`/three/blog/getBlogs`).then(function(data){
    //         this.blogs = data.body.slice(0,10);
    //     })
    // },
    // computed:{
    //     filteredBlogs: function(){
    //         return this.blog.filter((blog)=>{
    //             return blog.title.match(this.searchquery)
    //         })
    //     }
    // }
}