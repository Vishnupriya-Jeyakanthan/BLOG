import BlogService from "@/service/BlogService";
export default{
    state:{
        blogDetails:{},
        blogDescription:{}
    },
    mutations:{
        setblogDetails(state,payload)
        {
            state.blogDetails=payload
        },
        setblogDescription(state,payload)
        {
            state.blogDescription=payload
        }
    },
    actions:{
        GET_BLOG_DETAILS:({commit},{success,fail,data}) =>
        {
            BlogService.getBlogs({
                success:(detail) =>{
                    console.log(detail)
                    commit('setblogDetails',detail.data.data.blogs)
                    success(detail.data.data.blogs)
                },
                failure:(error) => {
                    commit('setblogDetails',[]),
                    fail(error)
                },
                data:data
            })
        },
        FETCH_DESCRIPTION:({commit},{success,fail,id}) =>{
            BlogService.fetchDescription({
                success:(detail) => {
                    console.log(detail)
                    commit('setdescription', detail.data.data)
                    success(detail.data.data.blogs)
                },
                failure:(error) => {
                    commit('setdescription',[]),
                    fail(error)
                },blog_id:id
            })
        }
    },
    getters:{
        retrieve(state)
        {
            console.log(state.blogDetails);
            return state.blogDetails
        },
        retrievedescription(state)
        {
            console.log(state.blogDescription);
            return state.blogDescription

        }
    },
    namespaced: true
}