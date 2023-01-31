import VueRouter from 'vue-router'

import LoginForm from "./components/views/LoginForm.vue";
import UserSignup from "./components/views/UserSignup.vue";
import HeaderComponent from './components/views/HeaderComponent.vue';
import BlogPage from './components/views/BlogPage.vue';
import MenuPage from './components/views/MenuPage.vue';
import TagPage from './components/views/TagPage.vue';
import AskQues from './components/views/AskQues.vue';
import TagDescription from './components/views/TagDescription.vue';
import ReplyPage from './components/views/ReplyPage.vue';
import AddNewTag from './components/views/AddNewTag.vue';




import Vue from 'vue';


Vue.use(VueRouter);
const routes = 
[
  {
    path: '/login',
    name: "LoginForm",
    component: LoginForm
  },
  {
    path: '/UserSignup',
    name: "UserSignup",
    component: UserSignup
  },
  {
    path: '/BlogPage',
    name: "BlogPage",
    component: BlogPage
  },
  {
    path:'/AddNewTag',
    name:'AddNewTag',
    component:AddNewTag
  },
  {
     path:'/HeaderComponent',
     name:'HeaderComponent',
     component:HeaderComponent
  },
  {
    path:'/MenuPage',
     name:'MenuPage',
     component:MenuPage
  },
  {
    path: '/TagPage',
    name: 'TagPage',
    component: TagPage
  },
  {
    path: '/AskQues',
    name:'AskQues',
    component: AskQues
  },
  {
    path: '/TagDescription',
    name:'TagDescription',
    component: TagDescription
  },
  {
    path: '/ReplyPage',
    name: 'ReplyPage',
    component: ReplyPage,
  }
]
  const router = new VueRouter(
    {
      mode: "history",
      routes
    }
  )

export default router;

  // router.beforeEach((to, from,next)=> {
  //   console.log("beforeeach")
  //   console.log(to)
  //   console.log(from)
  //   if(to.name == 'BlogPage' && from.name!= 'LoginForm')
  //   {
  //     alert('Unauthorized access')
  //     return false
  //   }
  //   next()
  // })
  // router.beforeResolve((to, from,next)=> {
  //   console.log("beforeResolve")
  //   console.log(to)
  //   console.log(from)
  //   next()
  // })
  // router.beforeEach((to, from,next)=> {
  //   console.log("beforeeach2")
  //   console.log(to)
  //   console.log(from)
  //   if(to.name == 'ProductDescriptiondetails' && from.name!= 'homePageComponent')
  //   {
  //     alert('Unauthorized access')
  //     return false
  //   }
  //   next()
  // })
