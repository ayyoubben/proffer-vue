<template>
    <div class="row flex-nowrap"> 
        <div class="col-2 bg-dark brown">
            <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                <a @click="$router.push('/')" class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <span class="fs-5 d-none d-sm-inline"><img class="img-fluid logo" src="../../assets/logo.png" alt=""></span>
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
                        <img src="../../assets/AF_281.png" alt="hugenerd" width="30" height="30" class="rounded-circle">
                        <span class="d-none d-sm-inline mx-1">Logout</span>
                    </a>
                </div>
            </div>
        </div>
        <div class="col-10" style="text-align:center;">
      <div class="container"  style="margin-top: 100px;">
        <!--Section: Contact v.2-->
          <section class="mb-4" style="order: 1px solid #c5ccd6; ; border-radius: 0.35rem;box-shadow: 0 0.15rem 1.75rem 0 rgb(33 40 50 / 15%); padding: 20px;">
          
            <!--Section heading-->
            <h2 class="h1-responsive font-weight-bold text-center my-4">Contact</h2>
            
            <div class="row">
            
                <!--Grid column-->
                <div class="col-md-9 mb-md-0 mb-5">
                    <form id="contact-form" >
                    
                        <!--Grid row-->
                        <div class="row"  style="margin-top:30px;">
                        
                            <!--Grid column-->
                            <div class="col-md-6">
                                <div class="md-form mb-0">
                                    <input type="text" id="name" name="name" class="form-control" placeholder="Nom et Prénom">
                                </div>
                            </div>
                            <!--Grid column-->
                          
                            <!--Grid column-->
                            <div class="col-md-6">
                                <div class="md-form mb-0">
                                    <input type="text" id="email" name="email" class="form-control" placeholder="Email">
                                </div>
                            </div>
                            <!--Grid column-->
                          
                        </div>
                        <!--Grid row-->
                      
                        <!--Grid row-->
                        <div class="row"  style="margin-top:30px;">
                            <div class="col-md-12">
                                <div class="md-form mb-0" >
                                    <input type="text" id="subject" name="subject" class="form-control" placeholder="Sujet">
                                </div>
                            </div>
                        </div>
                        <!--Grid row-->
                      
                        <!--Grid row-->
                        <div class="row"  style="margin-top:30px;">
                        
                            <!--Grid column-->
                            <div class="col-md-12 " >
                            
                                <div class="md-form">
                                    <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea" placeholder="Message"></textarea>
                                </div>
                              
                            </div>
                        </div>
                        <!--Grid row-->
                      
                    </form>
                  
                    <div class="text-center text-md-left"  style="margin-top:30px;">
                        <a class="btn" onclick="document.getElementById('contact-form').submit();" style="background-color:#FA7D09 ; color: white;">Envoyer</a>
                    </div>
                    <div class="status"></div>
                </div>
                <!--Grid column-->
              
                <!--Grid column-->
                <div class="col-md-3 text-center">
                    <ul class="list-unstyled mb-0">
                        <li><i class="fas fa-phone mt-4 fa-2x"></i>
                            <p>0792171077</p>
                        </li>
                      
                        <li><i class="fas fa-envelope mt-4 fa-2x"></i>
                            <p>k.dadouahadria@esi-sba.dz</p>
                        </li>
                    </ul>
                </div>
                <!--Grid column-->
              
            </div>
          
          </section>
    <!--Section: Contact v.2-->
      </div>
        </div>
    </div>

</template>

<script>
import {loginSoum, logoutSoum} from '../../utils/soumissionnaire/soumissionnaire'
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
        .btn{
            background-color: #FA7D09;
            color: white;
        }
        .cardoffre{
            margin-top: 50px;
            box-shadow: 0 0.15rem 1.75rem 0 rgb(33 40 50 / 15%);
            border-radius: 0.35rem;
            
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
      
      .btn:focus {
        border-color: #FA7D09;
        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px rgba(250, 125, 9, 0.8);
        outline: 0 none;
      }

      .icon-file {
        background-position: center center;
    }

</style>
