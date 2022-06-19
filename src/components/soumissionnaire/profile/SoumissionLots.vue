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
        <!-- Account page navigation-->
        <nav class="nav nav-borders">
            <a @click="$router.push('/profile')" class="navlink nav-link" data-bs-toggle="tab">Edit</a>
            <a @click="$router.push('/messoumissions')" class="navlink nav-link active" data-bs-toggle="tab">Mes Soumissions</a>
            <a @click="$router.push('/securite')" class="navlink nav-link" data-bs-toggle="tab">Securité</a>
            <!--a class="nav-link" href=""  target="__blank">NotifHoications</a-->
        </nav>
        <hr class="mt-0 mb-4">
        <!-- add offer-->
        
        <div class="card m-4 justify-content-center ">
          <div class="card-header" >
            <h1 style="color: #69707a !important;">{{name}}</h1>
          </div>
               
                <div class="col-md-6">
                    <h4 class="mt-1 mb-1">Jour J: {{dDay}}</h4>
                    <p class="mb-1">Lots:</p>
                    <div class="row">
                        <div v-for="l in lots" class="col-xl-3 col-sm-3">
                            <div @click="goToOffre(l)" class="card">
                                <div class="card-content">
                                  <div class="card-body cleartfix">
                                    <div class="media align-items-stretch">
                                      <div class="align-self-center">
                                        <h6 class=" lot mr-2">{{l.name}}</h6>
                                      </div>
                                      <div class="align-self-end">
                                        <a href="#" class="stretched-link"></a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                        </div>
                    </div>
                </div>                
                <!-- edit btn-->
        </div>
            
            

    </div>
    </div>
</template>
<script>
import {loginSoum, logoutSoum} from '../../../utils/soumissionnaire/soumissionnaire'
    import {getLotByIdSorted} from '../../../utils/lot/lot'
    export default {
        data() {
            return {
                
                lots:  [],
                name: "",
                dDay: null,
                //showBtn: (this.$store.state.newOffre._id == undefined)//true
            }
        },
        created() {
            if (this.$store.state.newOffre.name && this.$store.state.newOffre.name) {
                this.name = this.$store.state.newOffre.name
                this.dDay = this.$store.state.newOffre.dDay
                this.handleGetLots()
                console.log(this.lots)
                this.showBtn = false
            }
        },
        methods: {
          handleLogout() {
                logoutSoum(localStorage.getItem("token")).then(res => {
                    localStorage.removeItem("token")
                    this.$router.push("/login")
                })
            },
            handleGetLots() {
                getLotByIdSorted(this.$store.state.newOffre._id, localStorage.getItem("token")).then(res => this.lots = res.data)
            },
            goToOffre(lot) {
                this.$store.commit('setNewLot', lot)
                this.$router.push("/messoumissions/offre/lot/soumissions")
            }
        }
    }
</script>
<style scoped>
body{margin-top:20px;
    margin-left: 3% ;
    margin-right: 3%;
    background-color:#f5f7fa;
    color:#69707a;
    }

    .btn-confirm{
        float: right !important;
        width:120px;
        background: #FA7D09;
        color: white;
        margin-top: 2%;
        
         /* Chrome 10-25, Safari 5.1-6 */
         background: -webkit-linear-gradient(to right, rgb(250, 125, 9), rgb(255, 67, 1));
          
         /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
         background: linear-gradient(to right, rgb(250, 125, 9), rgb(255, 67, 1))
    }
    .card {
        box-shadow: 0 0.15rem 1.75rem 0 rgb(33 40 50 / 15%);
        background-color: #fff !important;
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
    
    .nav-borders .nav-link.active {
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
      h1{
        color: black;
        margin-top: 1%;
      }
      
      .lot{

        text-align: center !important; 
      }
      .col-xl-3{
        margin-bottom: 2%;
      }
      .d-flex{
        margin-bottom: 2% !important;
        color: #FA7D09 !important;
      }
      a{
        text-decoration: none;
        color: #FA7D09;
      }
      a:hover{
        color:#efa81d;
        text-decoration: none;

      }
      .icon{
        height: 20px  !important;
        color: #69707a
      }

</style>