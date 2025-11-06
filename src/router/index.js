import Vue from 'vue'
import VueRouter from 'vue-router'
import UserView from '../views/elment/UserView.vue'
import QuestionView from '../views/elment/QuestionView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/user'
  },
  {
    path: '/user',
    name: 'user',
    component: UserView
  },
  {
    path: '/question',
    name: 'question',
    component: QuestionView
  }
]

const router = new VueRouter({
  routes
})

export default router
