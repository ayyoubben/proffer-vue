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
        
        
              <div class="row gutters-sm">
                <div class="row justify-content-center">
                    <div class="col-md-8 ">
                        <div class="card mb-3">
                            <div class="card-header color-custom-1" >
                            <h1>Soumission</h1>
                            </div>
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-sm-3">
                                    <h6 class="mb-0">Soumissioneur:</h6>
                                    </div>
                                    <div class="col-sm-9 text-secondary">
                                    {{$store.state.newSoum.soumissionnaireName}}
                                    </div>
                                </div>

                            <div class="row">
                                <div class="col-sm-3">
                                <h6 class="mb-0">Offre</h6>
                                </div>
                                <div class="col-sm-9 text-secondary">
                                    {{$store.state.newOffre.name}}
                                    </div>
                            </div>

                            <div class="row">
                                <div class="col-sm-3">
                                <h6 class="mb-0">Lot</h6>
                                </div>
                                <div class="col-sm-9 text-secondary">
                                    {{$store.state.newLot.name}}
                                    </div>
                            </div>

                            <div class="row">
                                <div class="col-sm-3">
                                <h6 class="mb-0">Date:</h6>
                                </div>
                                <div class="col-sm-9 text-secondary">
                                {{$store.state.newOffre.dDay}}
                                </div>
                            </div>

                            <hr>
                            <div class="row">
                                <div class="col-sm-3">
                                <h6 class="mb-0">Classification</h6>
                                </div>
                                <div class="col-sm-9 text-secondary">
                                    {{$store.state.newSoum.classification}}
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-sm-3">
                                <h6 class="mb-0">Nombre de Materiels</h6>
                                </div>
                                <div class="col-sm-9 text-secondary">
                                    {{$store.state.newSoum.nbMaterial}}
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-sm-3">
                                <h6 class="mb-0">Nombre de Salaires</h6>
                                </div>
                                <div class="col-sm-9 text-secondary">
                                    {{$store.state.newSoum.nbSalarie}}
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-sm-3">
                                <h6 class="mb-0">Numero de CNAS</h6>
                                </div>
                                <div class="col-sm-9 text-secondary">
                                    {{$store.state.newSoum.nCnas}}
                                </div>
                            </div>
                            <hr>
                            <div class="row">
                                <div class="col-sm-4">
                                <h6 class="mb-0">Extrait de role + cahier des charges</h6>
                                </div>
                                <div class="col-sm-8 text-secondary">
                                    <button @click="downloadFile($store.state.newSoum)" type="button" class="btn btn-dl col-3" >Telecharger</button>
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
import {getAnnotationBySoumission, updateEvaluateur} from '../../../utils/annotation/annotation'
    export default {
        data() {
            return {
                //annot: {}
            }
        },
        created() {
            //this.getAnnotBySoum()
        },
        methods: {
            handleLogout() {
                logoutSoum(localStorage.getItem("token")).then(res => {
                    localStorage.removeItem("token")
                    this.$router.push("/login")
                })
            },
            downloadFile(file) {
                const newSp = file.cahierCharge.replace("http://localhost:8000/", "http://localhost:8000/soumission/")
                const newSp1 = file.extraitRole.replace("http://localhost:8000/", "http://localhost:8000/soumission/")
                window.open(newSp, "w0")
                window.open(newSp1, "w1")
            }
        },
    }
</script>

<style scoped>
body{
    margin-top:20px;
    text-align: left;
    background-color: #f5f7fa;  
    color:#69707a;  
}
.main-body {
    padding: 15px;
}
.card {
    box-shadow: 0 1px 3px 0 rgba(0,0,0,.1), 0 1px 2px 0 rgba(0,0,0,.06);
}
.card {
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 0 solid rgba(0,0,0,.125);
    border-radius: .25rem;
}

.card-body {
    flex: 1 1 auto;
    min-height: 1px;
    padding: 1rem;
}

.gutters-sm {
    margin-right: -8px;
    margin-left: -8px;
}

.gutters-sm>.col, .gutters-sm>[class*=col-] {
    padding-right: 8px;
    padding-left: 8px;
}
.mb-3, .my-3 {
    margin-bottom: 1rem!important;
}

.bg-gray-300 {
    background-color: #e2e8f0;
}
.h-100 {
    height: 100%!important;
}
.shadow-none {
    box-shadow: none!important;
}

.btn-validate {
    float: right !important;
    width:65px;
    height: 30px;
    font-size: 12px;
    background: #FA7D09;
    color: white;

}


.btn-reject {
    float: right !important;
    width:67px;
    height: 30px;
    font-size: 12px;
    margin-right: 5px;
    background: #4A3F35;
    color: white;
  

  }
  .btn-note{
    float: right;
  }

.btn:focus {
    border-color: #FA7D09;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px rgba(250, 125, 9, 0.8);
    outline: 0 none;
  }

.btn-dl{
    background: #2F2519;
    color: white;
        /* Chrome 10-25, Safari 5.1-6 */
        background: -webkit-linear-gradient(to right, rgb(74, 63, 53), rgb(47, 37, 25));
  
        /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        background: linear-gradient(to right, rgb(74, 63, 53), rgb(47, 37, 25));
        float: right !important;
        width:33%;
        height: 35px;
        font-size: 14px;
        margin-right: 5px;
        color: white;
        
}
.color-custom-1 {
    /* fallback for old browsers */
    background: #FA7D09;
    color: white;
    text-align: center;
  
    /* Chrome 10-25, Safari 5.1-6 */
    background: -webkit-linear-gradient(to right, rgb(250, 125, 9), rgb(255, 67, 1));
  
    /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    background: linear-gradient(to right, rgb(250, 125, 9), rgb(255, 67, 1))
  }
.btn-confirm{
    float: right !important;
    width:100px;
    background: #FA7D09;
    color: white;


     /* Chrome 10-25, Safari 5.1-6 */
     background: -webkit-linear-gradient(to right, rgb(250, 125, 9), rgb(255, 67, 1));
      
     /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
     background: linear-gradient(to right, rgb(250, 125, 9), rgb(255, 67, 1))
}
/*.d-flex{

    color: #FA7D09 !important;
    margin-left: -6% !important;
  }*/
  /*a{
    color: #FA7D09;
  }
  a:hover{
    color:#efa81d;
    text-decoration: none;

  }*/
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
    }
  /*.row{
    margin-top: 6px;
    margin-bottom: 6px;
  }*/
  .color-custom-2 {
    /* fallback for old browsers */
    background: #2F2519;
    color: white;
    text-align: center;
  
    /* Chrome 10-25, Safari 5.1-6 */
    background: -webkit-linear-gradient(to right, rgba(255, 67, 1, 0.5), rgb(47, 37, 25));
  
    /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    background: linear-gradient(to right, rgb(74, 63, 53), rgb(47, 37, 25));
    
  }



</style>