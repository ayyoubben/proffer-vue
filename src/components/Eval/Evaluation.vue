<template>
    <div class="container">
        <div class="main-body">
          <div class="m-2">
            <a href="#">
              <div class="d-flex" >
                <p>Liste des soumissions</p>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-return-left" viewBox="0 0 16 16" style="margin-top: 5px;margin-left:5px">
                    <path fill-rule="evenodd" d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5z"/>
                  </svg>
              </div>
            </a>
          </div>
        
        
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
                            <hr>
                            <div class= "row mt-2">
                                <label for="inputEval" class="col-sm-2 col-form-label">Note</label>
                                <div v-if="annot.state == 'in progress'" class="col-sm-5">
                                  <input v-model="annot.qualite_tech" type="note d'evaluation" class="form-control align-self-center" id="inputEval" placeholder="Note d'évalutation">
                                </div>
                                <div v-if="annot.state == 'done'" class="col-sm-5">
                                  <p class="mt-2 pt-0">noté</p>
                                </div>
                                <div v-if="annot.state == 'in progress'" class="col-sm-5 text-secondary">
                                    <button @click="updateAnnot" type="button" class="btn btn-note color-custom-1 col-5" >Confirmer</button>
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
    import router from '../../router'
import {getAnnotationBySoumission, updateEvaluateur} from '../../utils/annotation/annotation'
    export default {
        data() {
            return {
                annot: {}
            }
        },
        created() {
            this.getAnnotBySoum()
        },
        methods: {
            getAnnotBySoum() {
                getAnnotationBySoumission(this.$store.state.newSoum.id, localStorage.getItem("evalToken")).then(res => {
                    this.annot = res.data
                    console.log(res.data)
                })
            },
            downloadFile(file) {
                const newSp = file.cahierCharge.replace("http://localhost:8000/", "http://localhost:8000/soumission/")
                const newSp1 = file.extraitRole.replace("http://localhost:8000/", "http://localhost:8000/soumission/")
                window.open(newSp, "w0")
                window.open(newSp1, "w1")
            },
            updateAnnot() {
                updateEvaluateur(this.annot._id, {qualite_tech: this.annot.qualite_tech}, localStorage.getItem("evalToken")).then(res => {
                    //this.$router.push("/evaluateur/offre/lot")
                })
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
.d-flex{

    color: #FA7D09 !important;
    margin-left: -6% !important;
  }
  a{
    color: #FA7D09;
  }
  a:hover{
    color:#efa81d;
    text-decoration: none;

  }
  .row{
    margin-top: 6px;
    margin-bottom: 6px;
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



</style>