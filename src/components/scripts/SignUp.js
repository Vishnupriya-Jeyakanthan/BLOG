// import { axios } from "vue/types/umd"
import TagPage from "../views/TagPage.vue"
import Multiselect from 'vue-multiselect'
import axios from "axios"
export default
{
    name:"SignUp",
    components:{
        TagPage,
        Multiselect
    },
    data(){
        return {
            UserDetails:
            {
                userName:"",
                password:"",
                email:"",
                jobPosition:""
            },
            value: [],
            options: []
        }
    },
    methods:{
        addTag (newTag) {
            console.log(newTag)
            const tag = {
              name: newTag
            }
            this.options.push(tag)
            this.value.push(tag)
          },

            
          TagValue(data)
          {
                // this.value=data;
                this.options=data.map((data)=>{
                    return {name: data.tagname};
                })

          },
       async signup()
        { 
            console.log(this.UserDetails.userName, this.UserDetails.password,this.email,this.UserDetails.jobPosition)
            let useradded = await axios.post(`/one/user/addUser`,this.UserDetails)
            console.log(this.UserDetails.value);
            if(this.UserDetails.value!="")
            {
                localStorage.setItem("UserDetails",JSON.stringify(useradded.data));
                console.log(useradded);
                alert("user-added-success")
                this.$router.push('/login')
            }
            console.log(useradded);
            console.log(this.UserDetails);
        },
        clear()
        {
            this.Email="";
            this.Password=""
        },            
        },
        login(){
            this.$router.push('/login')
        }
    }