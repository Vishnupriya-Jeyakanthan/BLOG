import HeaderComponent from './components/views/HeaderComponent.vue'
<template>
        <div class="left">
            <div class="sidebar">
            <ul class="nav">
                <li @click="ques()" id="ques">Questions</li> <br> <br>
                <li @click="tags()" id="tags">Tags</li> <br> <br>
                <!-- <li @click="myques()" id="myques">My Questions</li> <br> <br>
                <li @click="prof()" id="prof">Profile</li> <br> <br> -->
            </ul>
        </div>
        </div>
</template>
<script src="../scripts/MenuPage.js"></script>
<style scoped>
@import url('../styles/MenuPage.css');
</style>
