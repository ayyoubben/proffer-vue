<template>
    <div class="row flex-nowrap">
        <div class="col-2 bg-dark brown">
            <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                <a @click="$router.push('/')" class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <span class="fs-5 d-none d-sm-inline"><img class="img-fluid logo" src="../../../assets/logo.png" alt=""></span>
                </a>
                <hr>
                <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                    <li class="nav-item">
                        <a @click="$router.push('/')" class="nav-link align-middle px-0">
                            <i class="fs-4 bi-house"></i> <span class="ms-1 d-none d-sm-inline text-white ">Home</span>
                        </a>
                    </li>
                    <li>
                        <a @click="$router.push('/profile')" data-bs-toggle="collapse" class="nav-link px-0 align-middle">
                            <i class="fs-4 bi-grid"></i> <span class="ms-1 d-none d-sm-inline text-white ">Profile</span> </a>
        
                    </li>
                    <li>
                        <a @click="$router.push('/notifications')" data-bs-toggle="collapse" class="nav-link px-0 align-middle">
                            <i class="fs-4 bi-speedometer2"></i> <span class="ms-1 d-none d-sm-inline text-white ">Notifications</span> </a>
                    </li>
                    <li>
                        <a @click="$router.push('/contact')" class="nav-link px-0 align-middle">
                            <i class="fs-4 bi-table"></i> <span class="ms-1 d-none d-sm-inline text-white ">Contact Us</span></a>
                    </li>
                </ul>
                <hr>
                <div class="dropdown pb-4">
                    <a @click="handleLogout" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="../../../assets/AF_281.png" alt="hugenerd" width="30" height="30" class="rounded-circle">
                        <span class="d-none d-sm-inline mx-1">Logout</span>
                    </a>
                </div>
            </div>
        </div>
        <div class="col-10">        
                <div class="">
                    <h3 style="margin-top: 30px;">
                     Notifications
                    </h3>
                    <hr class="mt-0 mb-4">
                    <div class="main-body">
                    
                          
                          <div class="row gutters-sm d-flex justify-content-center">
                            
                            <div class="col-md-8 ">
                              <div class="card mb-3">
                                
                                <div class="card-body">
                                  
                                  
                                  <div class="row">
                                    <div class="col-sm-3">
                                      <h6 class="mb-0">Classification</h6>
                                    </div>
                                    <div class="col-sm-9 text-secondary">
                                      <div class= "row">
                                        <p class="col-10 mb-0 text-secondary">{{$store.state.myInsc.classification.notification}}</p>
                                        <i v-if="$store.state.myInsc.classification.valid" style="color:#4A3F35" class="fa-solid fa-xl pt-2 fa-circle-check mb-0 col-2"></i>
                                        <i v-if="!$store.state.myInsc.classification.valid" style= "color:#FF4301;" class="fa-solid fa-circle-exclamation fa-xl pt-2 mb-0 col-2"></i>
                                      </div>
                                    </div>
                                  </div>
                                  
                                  <hr>
                                  <div class="row">
                                    <div class="col-sm-3">
                                      <h6 class="mb-0">N° de registre</h6>
                                    </div>
                                    <div class="col-sm-9 text-secondary">
                                      <div class= "row">
                                        <p class="col-10 mb-0 text-secondary">{{$store.state.myInsc.numRegistre.notification}}</p>
                                        <i v-if="$store.state.myInsc.numRegistre.valid" style="color:#4A3F35" class="fa-solid fa-xl pt-2 fa-circle-check mb-0 col-2"></i>
                                        <i v-if="!$store.state.myInsc.numRegistre.valid" style= "color:#FF4301;" class="fa-solid fa-circle-exclamation fa-xl pt-2 mb-0 col-2"></i>
                                      </div>
                                    </div>
                                  </div>
                                  <hr>
                                  <div class="row">
                                    <div class="col-sm-3">
                                      <h6 class="mb-0">NIF</h6>
                                    </div>
                                    <div class="col-sm-9">
                                      <div class="row">
                                        <p class="col-10 mb-0 text-secondary">{{$store.state.myInsc.nif.notification}}</p>
                                        <i v-if="$store.state.myInsc.nif.valid" style="color:#4A3F35" class="fa-solid fa-xl pt-2 fa-circle-check mb-0 col-2"></i>
                                        <i v-if="!$store.state.myInsc.nif.valid" style= "color:#FF4301;" class="fa-solid fa-circle-exclamation fa-xl pt-2 mb-0 col-2"></i>
                                      </div> 
                                    </div>
                                  </div>
                                  <hr>
                                  <div class="row">
                                    <div class="col-sm-3">
                                      <h6 class="mb-0">NIS</h6>
                                    </div>
                                    <div class="col-sm-9 text-secondary">
                                      <div class= "row">
                                        <p class="col-10 mb-0 text-secondary">{{$store.state.myInsc.nis.notification}}</p>
                                        <i v-if="$store.state.myInsc.nis.valid" style="color:#4A3F35" class="fa-solid fa-xl pt-2 fa-circle-check mb-0 col-2"></i>
                                        <i v-if="!$store.state.myInsc.nis.valid" style= "color:#FF4301;" class="fa-solid fa-circle-exclamation fa-xl pt-2 mb-0 col-2"></i>
                                      </div>
                                    </div>
                                  </div>
                                  <hr>
                                  <div class="row">
                                    <div class="col-sm-3">
                                      <h6 class="mb-0">CASNOS</h6>
                                    </div>
                                    <div class="col-sm-9 text-secondary">
                                      <div class= "row">
                                        <p class="col-10 mb-0 text-secondary">{{$store.state.myInsc.casnos.notification}}</p>
                                        <i v-if="$store.state.myInsc.casnos.valid" style="color:#4A3F35" class="fa-solid fa-xl pt-2 fa-circle-check mb-0 col-2"></i>
                                        <i v-if="!$store.state.myInsc.casnos.valid" style= "color:#FF4301;" class="fa-solid fa-circle-exclamation fa-xl pt-2 mb-0 col-2"></i>
                                      </div>
                                    </div>
                                  </div>
                                  <hr>
                                  <div class="row">
                                    <div class="col-sm-3">
                                      <h6 class="mb-0">CACOBAPTH</h6>
                                    </div>
                                    <div class="col-sm-9 text-secondary">
                                      <div class= "row">
                                        <p class="col-10 mb-0 text-secondary">{{$store.state.myInsc.cacopath.notification}}</p>
                                        <i v-if="$store.state.myInsc.cacopath.valid" style="color:#4A3F35" class="fa-solid fa-xl pt-2 fa-circle-check mb-0 col-2"></i>
                                        <i v-if="!$store.state.myInsc.cacopath.valid" style= "color:#FF4301;" class="fa-solid fa-circle-exclamation fa-xl pt-2 mb-0 col-2"></i>
                                      </div>
                                    </div>
                                    
                                  
                                </div>
                              </div>
                            </div>
                          </div>
                
                        </div>
                    </div>
                </div>
        </div>
    </div>

</template>

<script>
import {loginSoum, logoutSoum} from '../../../utils/soumissionnaire/soumissionnaire'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
    handleLogout() {
                logoutSoum(localStorage.getItem("token")).then(res => {
                    localStorage.removeItem("token")
                    this.$router.push("/login")
                })
            },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

body{margin-top:20px;
    background-color:#f5f7fa;
    color:#69707a;
    }
    .img-account-profile {
        height: 10rem;
    }
    .rounded-circle {
        border-radius: 50% !important;
    }
    .card {
        box-shadow: 0 0.15rem 1.75rem 0 rgb(33 40 50 / 15%);
    }
    .card .card-header {
        font-weight: 500;
        
        color: white;
    }
    ul{
        list-style-type: none;
        margin-left: 0%;
        padding: 0%;
    }
      ul > ul{
        list-style-type: none;
        margin-left: 1.5%;
        padding: 0%;
    }

    .card-header:first-child {
        border-radius: 0.35rem 0.35rem 0 0;
    }
    .card-header {
        padding: 1rem 1.35rem;
        margin-bottom: 0;
        background-color: rgba(33, 40, 50, 0.03);
        border-bottom: 1px solid rgba(33, 40, 50, 0.125);
    }
    .form-control, .dataTable-input {
        display: block;
        width: 100%;
        padding: 0.875rem 1.125rem;
        font-size: 0.875rem;
        font-weight: 400;
        line-height: 1;
        color: #69707a;
        background-color: #fff;
        background-clip: padding-box;
        border: 1px solid #c5ccd6;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        border-radius: 0.35rem;
        transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    }
        .btn1{
            background-color: #FA7D09;
            color: white;
        }
        .cardoffre a{
          margin-top: 20px;
          margin-bottom: 20px;
        }
        .nav-borders .navlink.active {
        color: #FF4301;
        border-bottom-color: #FF4301;
        }
    .nav-borders .nav-link {
        color: #69707a;
        border-bottom-width: 0.125rem;
        border-bottom-style: solid;
        border-bottom-color: transparent;
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
        padding-left: 0;
        padding-right: 0;
        margin-left: 1rem;
        margin-right: 1rem;
    }    .color-custom-1 {
        /* fallback for old browsers */
        background: #FA7D09;
        color: white;
      
        /* Chrome 10-25, Safari 5.1-6 */
        background: -webkit-linear-gradient(to right, rgb(250, 125, 9), rgb(255, 67, 1));
      
        /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        background: linear-gradient(to right, rgb(250, 125, 9), rgb(255, 67, 1))
      }

      .color-custom-2 {
        /* fallback for old browsers */
        background: #2F2519;
        color: white;
      
        /* Chrome 10-25, Safari 5.1-6 */
        background: -webkit-linear-gradient(to right, rgba(255, 67, 1, 0.5), rgb(47, 37, 25));
      
        /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        background: linear-gradient(to right, rgb(74, 63, 53), rgb(47, 37, 25));
        
      }
      .color-custom-2:focus {   
        border-color: #2F2519;
        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px rgba(250, 125, 9, 0.8);
        outline: 0 none;
      }

      

      textarea:focus,
      input[type="text"]:focus,
      input[type="password"]:focus,
      input[type="datetime"]:focus,
      input[type="datetime-local"]:focus,
      input[type="date"]:focus,
      input[type="month"]:focus,
      input[type="time"]:focus,
      input[type="week"]:focus,
      input[type="number"]:focus,
      input[type="email"]:focus,
      input[type="url"]:focus,
      input[type="search"]:focus,
      input[type="tel"]:focus,
      input[type="color"]:focus,
      .uneditable-input:focus {   
        border-color: #FA7D09;
        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px rgba(250, 125, 9, 0.8);
        outline: 0 none;
      }
      
      .btn1:focus {
        border-color: #FA7D09;
        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px rgba(250, 125, 9, 0.8);
        outline: 0 none;
      }

      .icon-file {
        background-position: center center;
    }
    
    a{
        text-decoration: none;
        color: #2F2519;
    }

    a:hover{
        color:#FA7D09
    }

</style>
