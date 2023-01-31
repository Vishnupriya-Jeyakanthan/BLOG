<template>
    <div>
        <div class="signuppage">
            <br>
            <form class="signupform"  @submit.prevent="signup()">
                <label for="userName">Enter your username</label>
                <input type="text" placeholder="Enter your name..." id="un" size="60" required v-model="UserDetails.userName"  > <br>

                <label for="password">Enter your password</label> 
                <input type="password" placeholder="Enter your password..." id="pwd" size="60" minlength="8"  required v-model="UserDetails.password" > <br>

                <label for="confirmpass">Confirm password</label>
                <input type="password" placeholder="Enter your password again..." id="pwd" size="60" minlength="8" required> <br>

                <label for="email">Enter your email-id</label>
                <input type="email" placeholder="Enter your email-id..." id="email" size="60" required v-model="UserDetails.email" > <br>


                <label for="jobPosition">Enter your Job Position</label> <br>
                <input type="text" placeholder="Enter your job position..." id="jbps" size="60" required v-model="UserDetails.jobPosition" > <br>

                <label for="tags">Select the tags</label> <br>
                <TagPage @data="TagValue"></TagPage>
                <div>
                        <label class="typo__label"></label>
                        <multiselect v-model="value" tag-placeholder="Add this as new tag" placeholder="Search or add a tag" label="name" track-by="code" 
                        :options="options" 
                        :multiple="true" 
                        :taggable="true" 
                        @tag="addTag">
                        </multiselect>
                        <!-- <pre class="language-json"><code>{{ value }}</code></pre> -->
                </div> <br>
                <center>
                        <button id="signupbut" >Signup</button> <br>
                </center>
                <a href="login">Already have an account?!</a>
                
            </form>
        </div>
    </div>
</template>
<script src="../scripts/SignUp.js"></script>

<style scoped>
@import url('../styles/SignUp.css');
</style>