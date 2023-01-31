import axios from "axios"

export default{
    name:"BlogPage",
    data(){
        return{
            displayblogs:[],
            displayans:[]
        }
    },
    async mounted(){
        let blogs= await axios.get(`/three/blog/getBlogs`)
        console.log(blogs),
        this.displayblogs=blogs.data
        this.$emit('data',blogs.data)
    },
    methods:{
        quesdescription(blogid)
        {
            this.$router.push({path:'/ReplyPage',query: {id:blogid}})
        },
        menubar()
        {
            setTimeout( this.$router.push('/MenuPage') , 1000)
        },
        askques()
        {
            this.$router.push('/AskQues')
        },
       async replypage(blogid){
            let ans = await axios.get(`http://10.30.1.164:8083/answer/getAnswerForBlog?blogId=${blogid}`)
            if(ans.data.anscontent!='')
            {
                this.displayans = ans.data[0].anscontent
            document.getElementById("answerbox").innerHTML = this.displayans;
            }
            else{
                document.getElementById("answerbox").innerHTML = "No answer posted still"
            }
            // console.log(ans);
            // this.displayans = ans.data[0].anscontent
            // document.getElementById("answerbox").innerHTML = this.displayans;
        },
        upvotecnt(){
           console.log(this.blogs.upvotes); 
        }
    },
}


// import { mapActions,mapGetters } from "vuex";
// export default{
//     name:"BlogPage",
//     components:{
//         ReplyPage
//     },
//     data(){
//         return{
//             isErrorOccured: false,
//             serachResult:[],
//             searchquery:'all', 
//             filteredBlogs:[]
//         }
//     },
//         props: {
//             name:String
//         },
//         created(){

//         },
//         computed:{
//             ...mapGetters('BlogStore',['retrieve']),
//         },
//         // mounted(){

//         // }
//         methods:{
//             ...mapActions('BlogStore',['GET_BLOG_DETAILS']),
//             //funccalll(){}
//             this.GET_BLOG_DETAILS({
//                 success: this.onSuccessOfBlog,
//                 fail: this.onFailOfBlog,
//                 data: this.searchquery
//             })
//         },
//         onSuccessOfBlog(data){
//             this.filteredBlogs=data;
//         },
//         onFailOfBlog(){
//             this.isErrorOccured =true;
//         }


//     }
