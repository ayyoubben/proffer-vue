<template>
    
    <div class="container-xl px-4 mt-4">
        <!-- Account page navigation-->
        <nav class="nav nav-borders">
            <a class="nav-link active " data-bs-toggle="tab">Validations</a>
            <a class="nav-link" data-bs-toggle="tab">Offres</a>
            <a class="nav-link" data-bs-toggle="tab">Soumissions</a>
            
            <!--a class="nav-link" href=""  target="__blank">Notifications</a-->
        </nav>
        <hr class="mt-0 mb-4">
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
</template>
<script>
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