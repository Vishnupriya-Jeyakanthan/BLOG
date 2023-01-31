<template>
        <div class="loginpage">
            <form class="loginform" @submit.prevent="login()">
                <h1 id="logintitle">Welcome! Please do login to your account..</h1>

                <label for="username" id="untxt">Username </label>
                <input type="email" placeholder="Enter your useremail..." id="unip" size="50" required v-model="Email"><br>

                <label for="password" id="pwtxt">Password </label>
                <input type="password" placeholder="Enter your password..." id="pwip" size="50" minlength="8" required v-model="password"><br>

               <center>
                <button id="loginbut" @click="login()" >Login</button> 
               </center>       
                <p id="signuptxt">Not a member? &nbsp;&nbsp;
                    <span>
                        <center>
                            <button id="signupbut" @click="signup()">Create a new account</button> 
                        </center>
                    </span>
                </p>
            </form>
        </div>
</template>

<style scoped>
@import url('../styles/LoginForm.css');
</style>
<script src="../scripts/LoginForm.js"></script>