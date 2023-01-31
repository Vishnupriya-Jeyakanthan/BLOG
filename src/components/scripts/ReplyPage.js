import axios from "axios";
export default{
        name:"ReplyPage",
        data(){
            return{
                ReplyPage:[],
                data:{},
                id:this.$router.query.id,
                ans:""
            }
        },
        async mounted(){
            this.ans = await axios.get (`/three/answer/getAnswerForBlog?blogId=${this.id}`)
            console.log(this.ans)
            this.datas=this.ans.data
            this.$emit('data',this.ans.data)
        },
        // methods:{
        //     reply(){
        //         document.getElementById("replies").innerHTML = "this.ans";
        //     }
        // }
}



// import {mapActions, mapGetters} from "vuex"
// export default{
//     name:'ReplyPage',
//     data(){
//         return {
//             replyComponent:[],
//         }
//     },
//     props:{
//         productobj:{
//             type:Object,
//             default:{}
//         }
//     },
//     methods:{
//         ...mapActions('BlogStore',['GET_BLOG_DETAILS']),
//         ...mapActions('BlogStore',['FETCH_DESCRIPTION']),
//         // funcname(){}
//         this.$router.push({name:"QuestionPage", query:{blogs: this.productobj.id}})
//     }
// }




