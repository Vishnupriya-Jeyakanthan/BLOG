import UserServices from "../service/UserServices";
export default{
    state:{
        userdetails:{},
    },
    mutations:{
        setuserdetails(state,userdetails)
        {
            state.userdetails = userdetails;
        },
        logOut(state)
        {
            let del ={}
            state.user=del
        }
    },
    actions:{
        getUserdetails:({commit},userdetails)=>{
            commit('setuserdetails',userdetails)
        },
        LOG_OUT:({commit})=>{
            commit('logOut')
        }
    },
    getters:{

        userdetails(state)
        {
            return state.userdetails
        }
    },
    namespaced : true
}
