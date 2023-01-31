<template>
      <header>
        <nav class="navbar">
            <ul>
              <li> <a><img src="https://cdn-icons-png.flaticon.com/128/6015/6015685.png" alt="menuicon" width="35" height="30" @click="menubar()"></a></li>  
                <li><a id="compname">  KNOWLEDGE BASE</a></li>
                 <li> <span>
                  <input type="text" name="search" id="search" placeholder="Search this website...." size="50" v-model="searchquery" >
                 </span>
                </li> 
                <li><a> <button id="loginbut" @click="login()" >Login </button> </a></li>
                <!-- <li><a> <button id="signupbut" @click="signup()" > Signup</button></a></li> -->
            </ul>
        </nav>
    </header>

</template>
<style scoped>
@import url('../styles/HeaderComponent.css');
</style>
<script src="../scripts/HeaderComponent.js">
</script>