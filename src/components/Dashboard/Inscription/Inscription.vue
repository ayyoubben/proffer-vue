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
          <div id="validations" class="container tab-pane fade show active">
                <div class="grey-bg container-fluid">
                    <section id="minimal-statistics">
                      <div class="row">
                        <div class="col-12 mt-3 mb-1">
                          <h4 class="text-uppercase">Demandes de Validation:</h4>
                          <p>do your work or you'll be fired</p>
                          <div class="row justify-content-end mb-4">
                            <div class="input-group">
                              <div class="form-outline">
                                <input type="search" id="form1" class="form-control" placeholder="Search..."/>
                              </div>
                              <button type="button" class="btn btn-search">
                                <i class="fas fa-search"></i>
                              </button>
                            </div>
                          </div>
                        </div>
                        
                        
                      </div>
                
                    <div v-for="ins in inscriptions" class="row d-flex justify-content-center">
                      <div class="col-xl-12 col-md-12">
                        <div class="card">
                          <div class="card-content">
                            <div class="card-body cleartfix">
                              <div class="media align-items-stretch">
                                <div class="align-self-center">
                                  <h5 class="mr-4">{{ins.nom}}</h5>
                                </div>
                                <div class="media-body" >
                                  <p>Request date: {{ins.createdAt}}</p>
                                </div>
                                <div class="align-self-center">
                                  <a @click="handleGetInsc(ins._id)"><i class="icon-book-open font-medium-2 float-right"></i></a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  </div>
            </div>
      </div>
    </div>
</template>
<script>
import {logoutAdmin} from '../../../utils/admin/admin'
import {mapGetters} from 'vuex'
import {getInscValsInvalide} from '../../../utils/inscription/inscription'

export default {
  data() {
    return {
      inscriptions: []
    };
  },
  created() {
    this.getAllInvalidInsc()
  },
  computed: {
    
  },
  methods: {
    handleLogout() {
                logoutAdmin(localStorage.getItem("adminToken")).then(res => {
                    localStorage.removeItem("adminToken")
                    this.$router.push("/dashboard/login")
                })
            },
    getAllInvalidInsc() {
      getInscValsInvalide().then(res => this.inscriptions = res.data)
    },
    handleGetInsc(id) {
      this.$store.commit("setDashInscId", id)
      this.$router.push("/dashboard/inscriptions/validation")
    }
  }
}
</script>
<style scoped>
body{margin-top:20px;
    background-color:#f5f7fa !important;
    color:#69707a !important;
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

      .icon-file {
        background-position: center center;
    }
    .icon-book-open{
        color: #FF4301;
        margin-top: -20px !important;
    }
    .mr-4{
        margin-top: -17px !important;
    }
    .media-body{
        margin-top: -7px !important;
    }
    .card{
        height: 60px !important;
        margin-bottom: 5px !important;
    }
    .icon-pencil{
        color: #FF4301;
        margin-top: -20px !important;
    }
    .icon-plus{
        margin-bottom: 2% !important;
        margin-top: -3% !important;
        color: #2F2519;
    }
    .btn-search{
        background-color:rgb(250, 125, 9) !important;
    }
</style>