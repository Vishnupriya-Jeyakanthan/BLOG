import axios from "axios"

export default{
    name:"LoginForm",
    data(){
        return { 
                Email:"",
                password:"",   
        }
    },
    methods:{
    async login() 
     

        {
            console.log(this.Email, this.password)
             let result = await axios.get(`/one/user/login?Email=${this.Email}&password=${this.password}`);
            console.log(result)
             if(result.status == 200 )
            {
                // alert('1st done')
                // console.log('check')
                localStorage.getItem("userDetails",JSON.stringify(result.data));
                // console.log(result);
                alert("logged-in success")
                this.$router.push('/BlogPage')      
            }
            else{
                alert('invalid username or password')
            }
        },
        clear()
        {
            this.Email="";
            this.Password=""
        },
        signup()
        {
            this.$router.push('/UserSignup')
        }
    }
}
             // .then((res) =>
            // {
            //     console.log("Loggedin success"+res)                
            //     this.$router.push({name:'AskQues'})
            //     // window.location.href = '/AskQues'
            // })
            // .catch(()=>
            // {
            //     alert('fail')
            //     console.log('error');
            // })


        // async signup()
        //  {
        //     let result = await axios.get("https://63d20c871780fd6ab9bd1092.mockapi.io/login",
        //     {
        //         EmailId:this.EmailId,
        //         Password:this.Password,
        //         UserName:this.UserName
        //     });

        //     console.log(result);
        //  }