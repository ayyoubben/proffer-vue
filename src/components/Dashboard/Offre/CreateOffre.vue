<template>
    <div class="col-xl-12 justify-content-center">
      <div class="m-2">
        <a href="#">
          <div class="d-flex" >
            <p>Liste des offres</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-return-left" viewBox="0 0 16 16" style="margin-top: 5px;margin-left:5px">
                <path fill-rule="evenodd" d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5z"/>
              </svg>
          </div>
        </a>
      </div>
        <!-- add offer-->
        
        <div class="card mb-4 justify-content-center ">
          <div class="card-header" >
            <h1 style="color: #69707a !important;">Nouvel Offre</h1>
          </div>
            <div class="card-body">
              
                <!-- Form Row-->
                <div class="row gx-3 mb-3">
                    <!-- Form Group (name)-->
                    <div class="col-md-6">
                        <label class="small mb-1" for="inputName">Nom</label>
                        <input v-model="name" class="form-control" id="inputName" type="text" placeholder="Entez le nom de votre offre">
                        
                    </div>
                    <!-- Form Group (d-day)-->
                    <div class="col-md-6">
                        <label class="small mb-1" for="inputType">Jour J</label>
                        <input v-model="dDay" class="form-control" id="inputType" type="date" placeholder="Entez le dernier delai de l'offre">
                    </div>
                </div>
                <hr>
               
                <div v-if="!showBtn" class="col-md-6">
                    <p class="small mb-1">Lots:</p>
                    <div class="row">
                        <div v-for="l in lots" class="col-xl-3 col-sm-3">
                            <div class="card">
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
                        <div class="col-xl-2 col-sm-2">
                          <a class="btn" @click="goToCreateLot"><h1 class="icon float-right">+</h1></a>
                        </div>
                    </div>
                </div>                
                <!-- edit btn-->
                <button v-if="showBtn" @click="handleAddOffer" class="btn btn-confirm" type="button">Enregistrer</button>
            </div>
            
            

        </div>
    </div>
</template>
<script>
    import {addOffre} from '../../../utils/offre/offre'
    import {getLotByIdSorted} from '../../../utils/lot/lot'
    export default {
        data() {
            return {
                lots:  [],
                name: "",
                dDay: null,
                showBtn: (this.$store.state.newOffre._id == undefined)//true
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
            handleAddOffer() {
                const data = {
                    name: this.name,
                    dDay: this.dDay
                }
                console.log(data)
                addOffre(data, localStorage.getItem("adminToken")).then(res => {
                    console.log(res.data)
                    this.$store.commit('setNewOffre', res.data)
                    this.showBtn = false
                    //this.$router.push("/dashboard/offres/lots/create")  
                })
                //this.$router.push("/dashboard/offres")
            },
            handleGetLots() {
                getLotByIdSorted(this.$store.state.newOffre._id, localStorage.getItem("adminToken")).then(res => this.lots = res.data)
            },
            goToCreateLot() {                
                //this.$store.commit("setNewOffre", {})
                this.$router.push("/dashboard/offres/lots/create")
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