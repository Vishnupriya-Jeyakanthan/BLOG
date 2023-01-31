<template>
  <div id="app">
  <HeaderComponent/>
  <!-- <LoginForm/> -->
  <!-- <UserSignup/> -->
  <!-- <BlogPage/> -->
  <!-- <TagPage/> -->
  <!-- <MenuPage/> -->
  <!-- <AskQues/> -->
  <router-view/>
</div>
</template>

<script>
// import LoginForm from './components/views/LoginForm.vue';
// import BlogPage from './components/views/BlogPage.vue';
import HeaderComponent from './components/views/HeaderComponent.vue';
// import UserSignup from './components/views/UserSignup.vue';
// import TagPage from './components/views/TagPage.vue';
// import MenuPage from './components/views/MenuPage.vue';
// import AskQues from './components/views/AskQues.vue'
export default {
  name: 'App',
  components: {
    HeaderComponent,
    // LoginForm,
    // UserSignup,
    // TagPage
    // MenuPage,
    // AskQues,
  }
}
</script>
<router-view></router-view>

<style>
/* #app { */
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  /* -webkit-font-smoothing: antialiased; */
  /* -moz-osx-font-smoothing: grayscale; */
  /* text-align: center; */
  /* color: black; */
  /* margin-top: 60px; */
/* } */
</style>
