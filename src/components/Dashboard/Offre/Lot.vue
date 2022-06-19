<template>
    <div class="row flex-nowrap">
        <div class="col-2 bg-dark brown">
            <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                <a @click="$router.push('/dashboard/offres')" class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <span class="fs-5 d-none d-sm-inline"><img class="img-fluid logo" src="../../../assets/logo.png" alt=""></span>
                </a>
                <hr>
                <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                    <li class="nav-item">
                        <a @click="$router.push('/dashboard/offres')" class="nav-link align-middle px-0">
                            <i class="fs-4 bi-house"></i> <span class="ms-1 d-none d-sm-inline text-white ">Offres</span>
                        </a>
                    </li>
                    <li>
                        <a @click="$router.push('/dashboard/inscriptions')" data-bs-toggle="collapse" class="nav-link px-0 align-middle">
                            <i class="fs-4 bi-grid"></i> <span class="ms-1 d-none d-sm-inline text-white ">Inscriptions</span> </a>
        
                    </li>
                    <li>
                        <a @click="$router.push('/dashboard/soumissions')" data-bs-toggle="collapse" class="nav-link px-0 align-middle">
                            <i class="fs-4 bi-speedometer2"></i> <span class="ms-1 d-none d-sm-inline text-white ">Soumissions</span> </a>
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
        <!-- add offer-->
        <div class="row">
          <div class="card m-4 col-xl-7 justify-content-center ">
            <div class="card-header" >
              <h1 style="color: #69707a !important; text-align: center;">Lot</h1>
            </div>
              <div class="card-body">
                
                  <!-- Form Row-->
                  <div class="row gx-3 mb-3">
                      <!-- Form Group (name)-->
                      <div class="col-md-5 mb-3">
                          <label class="small mb-1" for="inputName">Nom</label>
                          <input v-model="lot.name" class="form-control" id="inputName" type="text" placeholder="Entez le nom de votre lot" disabled>
                          
                      </div>
                      <!-- Form Group (d-day)-->
                      <div class="col-md-5 offset-md-1">
                          <label class="small mb-1" for="inputType">Classification</label>
                          <input v-model="lot.classification" class="form-control" id="inputType" type="text" placeholder="Entez la classification du lot" disabled>
                      </div>
                  </div>
                  <div class="row gx-3 mb-3">
                      <!-- Form Group (name)-->
                      <div class="col-md-5 mb-3">
                          <label class="small mb-1" for="inputName">Type</label>
                          <input v-model="lot.type" class="form-control" id="inputName" type="text" placeholder="Entez le type de votre lot" disabled>
                          
                      </div>
                      <!-- Form Group (d-day)-->
                      <div class="col-md-5 offset-md-1">
                          <label class="small mb-1" for="inputType">Delai</label>
                          <input v-model="lot.dernierDelai" class="form-control" id="inputType" type="text" placeholder="Entez le dernier delai du lot" disabled>
                      </div>
                  </div>
                  <div class="row gx-3 mb-3">
                      <!-- Form Group (name)-->
                      <div class="col-md-5 mb-3">
                          <label class="small mb-1" for="inputName">Nombre de salaires</label>
                          <input v-model="lot.nbSalariés" class="form-control" id="inputName" type="text" placeholder="Entez le nombre de salaire" disabled>
                          
                      </div>
                      <!-- Form Group (d-day)-->
                      <div class="col-md-5 offset-md-1">
                          <label class="small mb-1" for="inputType">Nombre de materiels</label>
                          <input v-model="lot.nbMateriels" class="form-control" id="inputType" type="text" placeholder="Entez le nombre de materiels" disabled>
                      </div>
                  </div>
                  <!--<div class="row gx-3 mb-3">
                      Form Group (name)
                      <div class="col-md-5 mb-3">
                          <label class="small mb-1" for="inputName">Prix Min</label>
                          <input v-model="prixMin" class="form-control" id="inputName" type="text" placeholder="Entez le prix minimal">
                          
                      </div>
                      Form Group (d-day)
                      <div class="col-md-5 offset-md-1">
                          <label class="small mb-1" for="inputType">Prix Max</label>
                          <input v-model="prixMin" class="form-control" id="inputType" type="text" placeholder="Entez le prix maximal">
                      </div>
                  </div>-->
                  <!--<div class="row gx-3 mb-3">
                      <div class="col-lg-5 col-md-12 col-sm-12 col-12">
                        <label class="small mb-1" for="cahier">Caheir des Charges</label>
                        <input @change="handleCahierFile()" ref="cahier" class="form-control mt-1" type="file" id="cahier" required="true"/>
                      </div>
                  </div>-->

              
                  <!-- edit btn-->
                </div>
              
              

          </div>

          <div class="card m-4 col-xl-4 offset-1">
            <div class="card-header" >
              <h1 style="color: #69707a !important; text-align: center;">Barrem</h1>
            </div>
            <div class="card-body text-center">
                <form id="Pinfo">
                    <div class="mb-3">
                        <label class="small mb-1" for="inputUsername">Classification</label>
                        <input v-model="barrem.classification" class="form-control" id="inputUsername" type="text" placeholder="Entrez le score de la classification" disabled>
                    </div>
                    <div class="mb-3">
                        <label class="small mb-1" for="inputFirstName">Nombre de materiels</label>
                        <input v-model="barrem.nbMateriels" class="form-control" id="inputFirstName" type="text" placeholder="Entrez le score du nombre de materiels" disabled>
                    </div>
                    <div class="mb-3">
                        <label class="small mb-1" for="inputEmail">Nombre de salaires</label>
                        <input v-model="barrem.nbSalariés" class="form-control" id="inputEmail" type="text" placeholder="Entrez le score du nombre de salaires" disabled>
                    </div>
                    <div class="mb-3">
                        <label class="small mb-1" for="inputAdresse">Prix</label>
                        <input v-model="barrem.prix" class="form-control" id="inputAdresse" type="text" placeholder="Entrez le score du prix" disabled>
                    </div> 
                    <div class="mb-3">
                        <label class="small mb-1" for="inputNum">Dernier Delai</label>
                        <input v-model="barrem.dernierDelai" class="form-control" id="inputNum" type="tel" placeholder="Entrez le score du dernier delai" disabled>
                    </div>
                </form>
            </div>          
        </div>
          
        </div>
    </div>
    </div>
</template>
<script>
import {logoutAdmin} from '../../../utils/admin/admin'
import {getLotById} from '../../../utils/lot/lot'
import {getBarremBylot} from '../../../utils/barrem/barrem'
    export default {
        data() {
            return {
                
                lot: {},
                barrem: {}
                //showBtn: (this.$store.state.newOffre._id == undefined)//true
            }
        },
        created() {
            this.handleGetLot()
            this.handleGetBarrem()
        },
        methods: {
          handleLogout() {
                logoutAdmin(localStorage.getItem("adminToken")).then(res => {
                    localStorage.removeItem("adminToken")
                    this.$router.push("/dashboard/login")
                })
            },
            handleGetBarrem() {
                getBarremBylot(localStorage.getItem("idLot"), localStorage.getItem("adminToken")).then(res => {
                    this.barrem = res.data
                    console.log(this.barrem)
                })
                //this.$router.push("/dashboard/offres")
            },
            handleGetLot() {
                getLotById(localStorage.getItem("idLot"), localStorage.getItem("adminToken")).then(res => this.lot = res.data)
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
    .icon-pencil{
        color: #FF4301;
        margin-top: -20px !important;
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
      .icon-plus{
        height: 20px  !important;
      }
      .card-body{
        padding-left: 8%;
      }
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
      label{
        float: left;
      }
</style>