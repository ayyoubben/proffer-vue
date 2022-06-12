<template>
    <div>
        <div class="container d-flex align-items-center min-vh-100">
            <div class="row g-0 justify-content-center">
         
        <div class="col-lg-4 offset-lg-1 mx-0 px-0">
            <div id="title-container">
               <h2>Completion de l'inscription</h2>
               <p class="my-5">Veuillez ajouter les informations concernant votre registre de commerce. Vous pouvez sauvegarder et continuer cette procedure a tout moment dans le délai de dix jours depuis votre inscription initiale, autrement votre compte serra supprimé</p>
            </div>
        </div>
         
        <div class="col-lg-7 mx-0 px-0">
            <div class="progress">
               <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="50" class="progress-bar gradient-custom-4" role="progressbar" style="width: 66%"></div>
            </div>
            <div id="qbox-container">
               <form class="needs-validation" id="form-wrapper" method="post" name="form-wrapper" novalidate="">
                        <div class="row mt-5">
                           <div class="col-lg-7 ">
                              <div class="mt-1 form-floating">   
                                 <input v-model="nif" class="form-control form-control-sm" id="NIF" name="NIF" type="number" minlength="15" maxlength="15" placeholder="Votre NIF" required="true"/>
                                 <label for="NIF">Votre NIF</label> 
                              </div>
                           </div>
                           <div class="col-lg-5 col-md-12 col-sm-12 col-12">
                                 <input @click="handleNifFile" ref="nif" class="form-control mt-1" type="file" id="NIFFile" required="true"/>
                           </div>
                        </div>
                        <div class="row mt-5">
                           <div class="col-lg-7 ">
                              <div class="mt-1 form-floating">   
                                 <input v-model="nis" class="form-control form-control-sm" id="NIS" name="NIS" minlength="15" maxlength="15" type="number" placeholder="Votre NIS" required="true"/>
                                 <label for="NIS">Votre NIS</label> 
                              </div>
                           </div>
                           <div class="col-lg-5 col-md-12 col-sm-12 col-12">
                                 <input @click="handleNisFile" ref="nis" class="form-control mt-1" type="file" id="NISFile" required="true"/>
                           </div>
                        </div>
                  <div id="q-box__buttons">
                     <button @click="handleSaveButton" id="save-btn" class="mx-2" type="button">Sauvegarder</button>
                     <button @click="handlePrevBtn" id="prev-btn" class="gradient-custom-4 mx-2" type="button">Precedent</button> 
                     <button @click="handleNextBtn" id="next-btn" class="gradient-custom-4 mx-2" type="button">Suivant</button> 
                     <!--<button @click="handleSubmitBtn" id="submit-btn" class="gradient-custom-4 mx-2" type="submit">Valider</button>-->
                  </div>
               </form>
            </div>
        </div>
            </div>
        </div>
        
        
    </div>
</template>

<script>   
    import { mapGetters } from 'vuex'
    export default {  
        data() {
            return {
                nif: "",
                nis: "",
                nifFile: {},
                nisFile: {}
            }
        },
        computed: {
            ...mapGetters["inscDocuments", "user"]
        },
        created () {
            this.nif = localStorage.getItem("inscNif")
            this.nis = localStorage.getItem("inscNis")
        },      
        methods:{
            handlePrevBtn() {
                if( this.nif != undefined ) {
                    localStorage.setItem("inscNif", this.nif)
                        
                }
                if( this.nis != undefined ) {
                    localStorage.setItem("inscNis", this.nis)
                }
                this.$router.push('/signup/form2')
            },
            handleNextBtn() {
                if( this.nif != undefined ) {
                    localStorage.setItem("inscNif", this.nif)
                        
                }
                if( this.nis!= undefined ) {
                    localStorage.setItem("inscNis", this.nis)
                }
                this.$router.push('/signup/form4')

            },
            handleNisFile() {
                this.nisFile = this.$refs.nis.files[0]
                const vm = this
                if(this.nisFile){
                    const reader = new FileReader();
                    reader.onload = function(){
                        const result = reader.result;
                        const file = {}
                        //console.log(result)
                        file.name = "nis file"
                        file.src = result
                        vm.nisFile = file
                        
                        const inserted = false
                        if (vm.$store.state.inscDocuments != undefined) {
                            vm.$store.state.inscDocuments.forEach(doc => {
                                if(doc.name === file.name)  {
                                    doc = file
                                    inserted = true
                                }
                            })
                            if (!inserted) {
                                vm.$store.state.inscDocuments.push(file)
                        
                            }    
                        } else {
                            vm.$store.state.inscDocuments = []
                            vm.$store.state.inscDocuments.push(file)
                        }
                        console.log(vm.$store.state.inscDocuments)
                    }
                    this.$store.commit("setInscDocuments", this.$store.state.inscDocuments)              
                    reader.readAsDataURL(this.nisFile);
                }
                
            },
            handleNifFile() {
                this.nifFile = this.$refs.nif.files[0]
                const vm = this
                if(this.nifFile){
                    const reader = new FileReader();
                    reader.onload = function(){
                        const result = reader.result;
                        const file = {}
                        //console.log(result)
                        file.name = "nif file"
                        file.src = result
                        vm.nifFile = file
                        
                        const inserted = false
                        if (vm.$store.state.inscDocuments != undefined) {
                            vm.$store.state.inscDocuments.forEach(doc => {
                                if(doc.name === file.name)  {
                                    doc = file
                                    inserted = true
                                }
                            })
                            if (!inserted) {
                                vm.$store.state.inscDocuments.push(file)
                        
                            }    
                        } else {
                            vm.$store.state.inscDocuments = []
                            vm.$store.state.inscDocuments.push(file)
                        }
                        console.log(vm.$store.state.inscDocuments)
                    }
                    this.$store.commit("setInscDocuments", this.$store.state.inscDocuments)
                    reader.readAsDataURL(this.nifFile);
                }
                
            },
            handleSaveButton() {
                console.log(this.nis)
                console.log(this.nif)
                console.log(this.$store.state.user)
                const inscEnr = {
                    nom: localStorage.getItem("inscNom"),
                    type: localStorage.getItem("inscType"),
                    numRegistre: {
                        value: localStorage.getItem("inscNumRegistre"),
                    },
                    classification: {
                        value: localStorage.getItem("inscClassification"),
                    },
                    /*codes: {
                        codes: localStorage.getItem("inscCodes"),
                    },*/
                    nif: {
                        value: this.nif,
                    },
                    nis: {
                        value: this.nis,
                    },
                    casnos: {
                        value: localStorage.getItem("inscCasnos"),
                    },
                    cacopath: {
                        value: localStorage.getItem("inscCacopath"),
                    },
                    documents: this.$store.state.inscDocuments,
                    owner: this.$store.state.user._id
                }
                console.log(inscEnr)
                //request
                //this.$router.push("/login")
            }
        }    
    }
    
</script>

<style>
/* TITLE */
 
#title-container {
    min-height: 460px;
    height: 100%;
    color: #fff;
    background-color: #2F2519;
    text-align: center;
    padding: 105px 28px 28px 28px;
    box-sizing: border-box;
    position: relative;
    box-shadow: 10px 8px 21px 0px rgba(204, 204, 204, 0.75);
    -webkit-box-shadow: 10px 8px 21px 0px rgba(204, 204, 204, 0.75);
    -moz-box-shadow: 10px 8px 21px 0px rgba(204, 204, 204, 0.75);
}
 
#title-container h2 {
    font-size: 45px;
    font-weight: 800;
    color: #fff;
    padding: 0;
    margin-bottom: 0px;
}
 
#title-container h3 {
    font-size: 25px;
    font-weight: 600;
    color: #82000a;
    padding: 0;
}
 
#title-container p {
    font-size: 13px;
    padding: 0 25px;
    line-height: 20px;
}
 
.covid-image {
    width: 214px;
    margin-bottom: 15px;
}

/* FORMS */
 
#qbox-container {
    /*background: url(../img/corona.png);*/
    background-repeat: repeat;
    position: relative;
    padding: 62px;
    min-height: 630px;
    box-shadow: 10px 8px 21px 0px rgba(204, 204, 204, 0.75);
    -webkit-box-shadow: 10px 8px 21px 0px rgba(204, 204, 204, 0.75);
    -moz-box-shadow: 10px 8px 21px 0px rgba(204, 204, 204, 0.75);
}
 
#steps-container {
    margin: auto;
    width: 500px;
    min-height: 420px;
    display: flex;
    vertical-align: middle;
    align-items: center;
}
 
.step {
    display: none;
}
 
.step h4 {
    margin: 0 0 26px 0;
    padding: 0;
    position: relative;
    font-weight: 500;
    font-size: 23px;
    font-size: 1.4375rem;
    line-height: 1.6;
}
 
button#prev-btn,
button#next-btn,
button#submit-btn,
button#save-btn {
    font-size: 17px;
    font-weight: bold;
    position: relative;
    width: 130px;
    height: 50px;
    margin: 0 auto;
    margin-top: 40px;
    overflow: hidden;
    z-index: 1;
    cursor: pointer;
    transition: color .3s;
    text-align: center;
    color: #fff;
    border: 0;
    -webkit-border-bottom-right-radius: 5px;
    -webkit-border-bottom-left-radius: 5px;
    -moz-border-radius-bottomright: 5px;
    -moz-border-radius-bottomleft: 5px;
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;

    border-color: #FA7D09;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px rgba(250, 125, 9, 0.8);
  outline: 0 none;
}
 

 

 .progress-bar {
    background-color: #FA7D09;
 }
.progress {
    border-radius: 0px !important;
}
 
.q__question {
    position: relative;
}
 
.q__question:not(:last-child) {
    margin-bottom: 10px;
}
 
.question__input {
    position: absolute;
    left: -9999px;
}
 
.question__label {
    position: relative;
    display: block;
    line-height: 40px;
    border: 1px solid #ced4da;
    border-radius: 5px;
    background-color: #fff;
    padding: 5px 20px 5px 50px;
    cursor: pointer;
    transition: all 0.15s ease-in-out;
}
 
.question__label:hover {
    border-color: #FA7D09;
}
 
.question__label:before,
.question__label:after {
    position: absolute;
    content: "";
}
 
.question__label:before {
    top: 12px;
    left: 10px;
    width: 26px;
    height: 26px;
    border-radius: 50%;
    background-color: #fff;
    box-shadow: inset 0 0 0 1px #ced4da;
    -webkit-transition: all 0.15s ease-in-out;
    -moz-transition: all 0.15s ease-in-out;
    -o-transition: all 0.15s ease-in-out;
    transition: all 0.15s ease-in-out;
}
 
.question__input:checked+.question__label:before {
    border-color: #FA7D09;
    
    background-color: #FA7D09;
    box-shadow: 0 0 0 0;
}
 
.question__input:checked+.question__label:after {
    top: 22px;
    left: 18px;
    width: 10px;
    height: 5px;
    border-left: 2px solid #fff;
    border-bottom: 2px solid #fff;
    transform: rotate(-45deg);
}
 
.form-check-input:checked,
.form-check-input:focus {
    border-color: #FA7D09;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px rgba(250, 125, 9, 0.8) !important;
    outline: 0 none !important;
}
 
input:focus {
    outline: none;
    
}
 
#input-container {
    display: inline-block;
    box-shadow: none !important;
    margin-top: 36px !important;
}
 
label.form-check-label.radio-lb {
    margin-right: 15px;
}
 
#q-box__buttons {
    text-align: center;
}
 
input[type="text"],
input[type="email"] {
    padding: 8px 14px;
}
 
input[type="text"]:focus,
input[type="email"]:focus,
input[type="number"]:focus {
    border-color: #FA7D09;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px rgba(250, 125, 9, 0.8) !important;
    outline: 0 none !important;
    border-radius: 5px;
    
    -webkit-appearance: none;
    
    -webkit-transition: all 0.15s ease-in-out;
    -moz-transition: all 0.15s ease-in-out;
    -o-transition: all 0.15s ease-in-out;
    transition: all 0.15s ease-in-out;
}
 
.form-check-input:checked[type=radio],
.form-check-input:checked[type=radio]:hover,
.form-check-input:checked[type=radio]:focus,
.form-select:focus,
.form-check-input:checked[type=radio]:active {
    border-color: #FA7D09;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px rgba(250, 125, 9, 0.8) !important;
    outline: 0 none !important;
    -webkit-outline: 0px !important;
    
}
 
.form-check-input:focus,
input[type="radio"]:hover {
    border-color: #FA7D09;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px rgba(250, 125, 9, 0.8) !important;
    outline: 0 none !important;
}
 
#success {
    display: none;
}
 
#success h4 {
    color: #FA7D09;
}
 

 


/* MEDIA QUERIES */
 
@media (min-width: 990px) and (max-width: 1199px) {
    #title-container {
        padding: 80px 28px 28px 28px;
    }
    #steps-container {
        width: 85%;
    }
}
 
@media (max-width: 991px) {
    #title-container {
        padding: 30px;
        min-height: inherit;
    }
}
 
@media (max-width: 767px) {
    #qbox-container {
        padding: 30px;
    }
    #steps-container {
        width: 100%;
        min-height: 400px;
    }
    #title-container {
        padding-top: 50px;
    }
}
 
@media (max-width: 560px) {
    #qbox-container {
        padding: 40px;
    }
    #title-container {
        padding-top: 45px;
    }
}

.gradient-custom-4 {
    /* fallback for old browsers */
    background: #FA7D09;
  
    /* Chrome 10-25, Safari 5.1-6 */
    background: -webkit-linear-gradient(to right, #FA7D09, rgba(255, 67, 1, 1));
  
    /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    background: linear-gradient(to right, #FA7D09, rgba(255, 67, 1, 1))
  }
  
  input[type=file]::file-selector-button {
    height: 55px;
  }

 

  input[type=file]:focus{
    border-color: #FA7D09;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px rgba(250, 125, 9, 0.8) !important;

  }

  #save-btn{
      background-color: #4A3F35;
  }
</style>