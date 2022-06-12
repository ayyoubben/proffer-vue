import VueRouter from 'vue-router'
import Vue from 'vue'

import store from '../store/index.js'
import Login from '../components/Auth/Login.vue'
import Signup from '../components/Auth/Signup.vue'
import Form1 from '../components/Auth/Form/Form1.vue'
import Form2 from '../components/Auth/Form/Form2.vue'
import Form3 from '../components/Auth/Form/Form3.vue'
import Form4 from '../components/Auth/Form/Form4.vue'
import Form5 from '../components/Auth/Form/Form5.vue'

Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((error) => {
  });
};

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/signup/form1',
    name: 'Form1',
    component: Form1
  },
  {
    path: '/signup/form2',
    name: 'Form2',
    component: Form2
  },
  {
    path: '/signup/form3',
    name: 'Form3',
    component: Form3
  },
  {
    path: '/signup/form4',
    name: 'Form4',
    component: Form4
  },
  {
    path: '/signup/form5',
    name: 'Form5',
    component: Form5
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router