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
import Inscription from '../components/Dashboard/Inscription/Inscription.vue'
import InscValidation from '../components/Dashboard/Inscription/InscValidation.vue'
import CreateOffre from '../components/Dashboard/Offre/CreateOffre.vue'
import CreateLot from '../components/Dashboard/Offre/CreateLot.vue'
import Offres from '../components/Dashboard/Offre/Offres.vue'
import Offre from '../components/Dashboard/Offre/Offre.vue'
import Lot from '../components/Dashboard/Offre/Lot.vue'
import Soumission from '../components/Dashboard/soumission/soumission.vue'
import Soumissions from '../components/Dashboard/soumission/soumissions.vue'
import Home from '../components/soumissionnaire/home.vue'
import Profile from '../components/soumissionnaire/profile/profile.vue'
import SoumissionSoum from '../components/soumissionnaire/profile/soumissionSou.vue'
import Securite from '../components/soumissionnaire/profile/securite.vue'
import Notifications from '../components/soumissionnaire/profile/notifications.vue'
import Contact from '../components/soumissionnaire/contact.vue'
import SoumLots from '../components/soumissionnaire/SoumLots.vue'
import Soumissionner from '../components/soumissionnaire/Soumissionner'


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
   {
    path: "/",
    name: "Home",
    component: Home
   },
   {
    path: "/profile",
    name: "Profile",
    component: Profile
   },
   {
    path: "/offre/lots/soumissionner",
    name: "Soumissionner",
    component: Soumissionner
   },
   {
    path: "/offre/lots",
    name: "SoumLots",
    component: SoumLots
   },
   {
    path: "/messoumissions",
    name: "SoumissionSoum",
    component: SoumissionSoum
   },
   {
    path: "/securite",
    name: "Securite",
    component: Securite
   },
   {
    path: "/notifications",
    name: "Notifications",
    component: Notifications
   },
   {
    path: "/contact",
    name: "Contact",
    component: Contact
   },
  {
    path: '/dashboard/inscriptions',
    name: 'Inscription',
    component: Inscription
  },
  {
    path: '/dashboard/inscriptions/validation',
    name: 'InscValidation',
    component: InscValidation
  },
  {
    path: '/dashboard/offres/create',
    name: 'CreateOffre',
    component: CreateOffre
  },
  {
    path: '/dashboard/offres/lots/create',
    name: 'CreateLot',
    component: CreateLot
  },
  {
    path: '/dashboard/offres',
    name: 'Offres',
    component: Offres
  },
  {
    path: '/dashboard/offres/offre',
    name: 'Offre',
    component: Offre
  },
  {
    path: "/dashboard/soumissions/soumission",
    name: "Soumission",
    component: Soumission
   },
   {
    path: "/dashboard/soumissions",
    name: "Soumissions",
    component: Soumissions
   },
  {
    path: '/dashboard/offres/offre/lot',
    name: 'Lot',
    component: Lot
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router