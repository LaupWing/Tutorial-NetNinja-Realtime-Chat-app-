import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/components/Welcome'
import Chat from '@/components/Chat'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    },
    // Watch the code below for some route guarding
    // There are diffrent kinds of route gaurding
    // The below is the beforeeenter route guard. This means before the the user sees the page / before it is rendered
    {
      path: '/chat',
      name: 'Chat',
      component: Chat,
      props: true,
      beforeEnter: (to , from , next)=>{
        // To is to which component we are going
        // From is from which component we came from
        // Next is a function to calle to where to go to next
        if(to.params.name){
          next()
        }else{
          next({name:'Welcome'})
        }
      }
    }
  ]
})
