import Tagservices from "../service/Tagservices";
export default{
    state:{
        tagDetails:{}
    },
    mutations:{
        settagDetils(state,payload)
        {
            state.tagDetails = payload
        }
    },
    getters:{
        gettagDetails(state)
        {
            return state.tagDetails
        }
    },
    actions:
    {
        FETCH_TAGS:({commit},{success,fail,data}) =>
        {
            Tagservices.fetchTagsName({
                succes:(detail) => {
                    console.log(detail)
                    commit('settagDetails', detail.data.data)
                    success(detail.data.data.tags)
                },
                failure: (error) => {
                    commit('settagDetails',[]),
                    fail(error)
                }, tag_data:data
            })
        }
    },
    namespaced: true
}