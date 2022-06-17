<template>
    <div class="container">
        <div class="main-body">
          <!--<div class="jumbotron m-2">-->
            <a href="#">
              <div class="d-flex" >
                <p>Liste des demandes de validation</p>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-return-left" viewBox="0 0 16 16" style="margin-top: 5px;margin-left:5px">
                    <path fill-rule="evenodd" d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5z"/>
                  </svg>
              </div>
            </a>
          <!--</div>-->
        
        
              <div class="row gutters-sm">
                <div class="col-md-4 mb-3">
    
                </div>
                <div class="col-md-12" v-if="inscription">
                  <div class="card mb-3">
                    <div class="card-body">
                      <div class="row">
                        <div class="col-sm-3">
                          <h6 class="mb-0">Nom</h6>
                        </div>
                        <div class="col-sm-9 text-secondary">
                          {{inscription.nom}}
                        </div>
                      </div>
                      <hr>
                      <div class="row">
                        <div class="col-sm-3">
                          <h6 class="mb-0">Type</h6>
                        </div>
                        <div class="col-sm-9 text-secondary">
                          {{inscription.type}}
                        </div>
                      </div>
                      <hr>
                      <div class="row">
                        <div class="col-sm-3">
                          <h6 class="mb-0">N° de registre</h6>
                        </div>
                        <div class="col-sm-9 text-secondary">
                          {{inscription.numRegistre.value}}
                          <button v-if="insc.numRegistre.show" @click="handleValider(insc.numRegistre)" type="button" class="btn btn-validate col-2" >Valider</button>
                          <button v-if="insc.numRegistre.show" @click="handleRejeter(insc.numRegistre)" type="button" class="btn btn-reject col-2" >Rejeter</button>
                        </div>
                      </div>
                      <hr>
                      <div class="row">
                        <div class="col-sm-3">
                          <h6 class="mb-0">Classification</h6>
                        </div>
                        <div class="col-sm-9 text-secondary">
                            {{inscription.classification.value}}
                            <button v-if="insc.classification.show" @click="handleValider(insc.classification)" type="button" class="btn btn-validate col-2" >Valider</button>
                          <button v-if="insc.classification.show" @click="handleRejeter(insc.classification)" type="button" class="btn btn-reject col-2" >Rejeter</button>
                        </div>
                      </div>
                      <hr>
                      <!--<div class="row">
                        <div class="col-sm-3">
                          <h6 class="mb-0">Codes</h6>
                        </div>
                        <div class="col-sm-9 text-secondary">
                            Code1, Code2, Code3 ...
                            <button type="button" class="btn btn-validate col-2" >Valider</button>
                            <button type="button" class="btn btn-reject col-2" >Rejeter</button>
                        </div>
                      </div>
                      <hr>-->
                      <div class="row">
                        <div class="col-sm-3">
                          <h6 class="mb-0">NIF</h6>
                        </div>
                        <div class="col-sm-9 text-secondary">
                            {{inscription.nif.value}}
                            <button v-if="insc.nif.show" @click="handleValider(insc.nif)" type="button" class="btn btn-validate col-2" >Valider</button>
                            <button v-if="insc.nif.show" @click="handleRejeter(insc.nif)" type="button" class="btn btn-reject col-2" >Rejeter</button>
                        </div>
                      </div>
                      <hr>
                      <div class="row">
                        <div class="col-sm-3">
                          <h6 class="mb-0">NIS</h6>
                        </div>
                        <div class="col-sm-9 text-secondary">
                            {{inscription.nis.value}}
                            <button v-if="insc.nis.show" @click="handleValider(insc.nis)" type="button" class="btn btn-validate col-2" >Valider</button>
                            <button v-if="insc.nis.show" @click="handleRejeter(insc.nis)" type="button" class="btn btn-reject col-2" >Rejeter</button>
                        </div>
                      </div>
                      <hr>
                      <div class="row">
                        <div class="col-sm-3">
                          <h6 class="mb-0">CASNOS</h6>
                        </div>
                        <div class="col-sm-9 text-secondary">
                            {{inscription.casnos.value}}
                            <button v-if="insc.casnos.show" @click="handleValider(insc.casnos)" type="button" class="btn btn-validate col-2" >Valider</button>
                            <button v-if="insc.casnos.show" @click="handleRejeter(insc.casnos)" type="button" class="btn btn-reject col-2" >Rejeter</button>
                        </div>
                      </div>
                      <hr>
                      <div class="row">
                        <div class="col-sm-3">
                          <h6 class="mb-0">CACOPATH</h6>
                        </div>
                        <div class="col-sm-9 text-secondary">
                            {{inscription.cacopath.value}}
                            <button v-if="insc.cacopath.show" @click="handleValider(insc.cacopath)" type="button" class="btn btn-validate col-2" >Valider</button>
                            <button v-if="insc.cacopath.show" @click="handleRejeter(insc.cacopath)" type="button" class="btn btn-reject col-2" >Rejeter</button>
                        </div>
                        
                      </div>
                      <hr>
                      <div class="row">
                        <div class="col-sm-12">
                          <a @click="downloadFiles" class="btn btn-dl " target="__blank">Show files</a>
                          <button v-if="handleValidBtn()" @click="handleConfirm" style="float: right;" class="btn btn-confirm">Valider Compte</button>
                          <button v-if="!handleValidBtn()" @click="handleConfirm" type="button" class="btn btn-confirm">Confirmer</button>
    
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
  import {mapGetters} from 'vuex'
  import {getInscValById, updateAdminInscVal} from '../../../utils/inscription/inscription'

  export default {
    data() {
      return {
        inscription: {},
        insc: {
          numRegistre: {
            valid: null,
            notification: null,
            show: true
          },
          classification: {
            valid: null,
            notification: null,
            show: true
          },
          nis: {
            valid: null,
            notification: null,
            show: true
          },
          nif: {
            valid: null,
            notification: null,
            show: true
          },
          casnos: {
            valid: null,
            notification: null,
            show: true
          },
          cacopath: {
            valid: null,
            notification: null,
            show: true
          },
          valide: false
        }
      };
    },
    created() {
      this.getInscById()
      //this.handleValidBtn()
    },
    computed: {
      
    },
    methods: {
      getInscById() {
        getInscValById(this.$store.state.dashInscId).then(res => this.inscription = res.data)
      },
      handleValider(value) {
        value.valid = true,
        value.notification = "Ce champ est valide"
        value.show = false
      },
      handleRejeter(value) {
        value.valid = false,
        value.notification = "Ce champ n'est pas valide"
        value.show = false
      },
      handleConfirm() {
        console.log(this.insc)
        this.insc.valide = this.handleValidBtn()
        updateAdminInscVal(this.inscription._id, this.insc, localStorage.getItem("adminToken")).then(res => {
          this.$router.push("/dashboard/inscriptions")
        })
      },
      /*handleValiderCompte() {
        console.log("clicked");
        this.insc.valide = this.handleValidBtn
        updateAdminInscVal(this.inscription._id, this.insc, localStorage.getItem("adminToken")).then(res => {
          this.$router.push("/dashboard/inscriptions")
        })
      },*/
      handleValidBtn() {
        //console.log(this.insc.numRegistre.valid == true && this.insc.classification.valid == true && this.insc.cacopath.valid == true && this.insc.casnos.valid == true && this.insc.nis.valid == true && this.insc.nif.valid == true)
        return (this.insc.numRegistre.valid == true && this.insc.classification.valid == true && this.insc.cacopath.valid == true && this.insc.casnos.valid == true && this.insc.nis.valid == true && this.insc.nif.valid == true)
      },
      downloadFiles(){
        /*this.inscription.documents.forEach(doc => {
          window.open(doc, "w"+i)
          i++
        })*/
        window.open(this.inscription.documents[0], "w0")
        window.open(this.inscription.documents[1], "w1")
        window.open(this.inscription.documents[2], "w2")
        window.open(this.inscription.documents[3], "w3")
        window.open(this.inscription.documents[4], "w4")
        window.open(this.inscription.documents[5], "w5")
      }
    }
  }
</script>
<style scoped>
template{
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






</style>