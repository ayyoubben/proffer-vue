<template>
    <section class="vh-100 bg-image" style="background-image: url('../../assets/background.jpeg'); background-size: cover; background-repeat: no-repeat;">
        <div class="mask d-flex align-items-center h-100 gradient-custom-3">
          <div class="container h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
              <div class="col-12 col-md-9 col-lg-6 col-xl-5">
                <div class="card" style="border-radius: 10px; opacity: 0.9; color:E0E0E0;">
                  <div class="card-body p-5">
                    <h2 class="text-uppercase text-center mb-5" style="color:#2F2519">Se Connecter</h2>
      
                    <form>
                      <div class="form-floating mb-4">
                        <input v-model="email" type="email" id="form3Example3cg" class="form-control form-control-lg" placeholder="Votre email"/>
                        <label class="form-label" for="form3Example3cg">Votre email</label>
                      </div>
      
                      <div class="form-floating mb-4">
                        <input v-model="password" type="password" id="form3Example4cg" class="form-control form-control-lg"  placeholder="Mot de passe"/>
                        <label class="form-label" for="form4Example4cg">Mot de passe</label>
                       
                      </div>
      
                      
      
                      <div class="d-flex justify-content-center">
                        <button type="button" class="btn btn-block btn-lg gradient-custom-4" style=" color:white" @click="handleLoginUser">Confirmer</button>
                      </div>   
                      <p class="text-center text-muted mt-5 mb-0">Vous n'avez pas un compte? <a @click="$router.push('/signup')" class="fw-bold text-body"><u style="color: #FF4301">Créez un!</u></a></p>  
                    </form>
      
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
</template>

<script>
import {mapGetters} from 'vuex'
import {loginSoum} from '../../utils/soumissionnaire/soumissionnaire'
import {getInscEnrByOwner, getInscValByOwner} from '../../utils/inscription/inscription'

export default {
    data() {
    return {
      email: "",
      password: ""
    };
  },
  computed: {
        ...mapGetters(['user'])
  },
  created() {
    if(localStorage.getItem("token")) this.$router.push("/")  
  },
  watch: {
    /*user(value) {
        //if user value changes from null to object, redirect to home page
        if (value) {
            this.$router.push('/')
        }
    }*/
  },
  methods: {
    /*goToDemandAccount() {
      this.$router.push('/demand_account')
    },*/
    handleLoginUser() {
      loginSoum(this.email, this.password).then(res => {
        this.$store.commit('setUser', res.data.soumissionnaire)
        console.log(res.data)
        localStorage.setItem("token", res.data.token)
        getInscValByOwner(res.data.soumissionnaire._id, res.data.token).then(res => {
          this.$store.commit("setMyInsc", res.data)
          this.$router.push("/")
        }).catch(e => {
          getInscEnrByOwner(res.data.soumissionnaire._id, res.data.token).then(res => {
              console.log(res.data)
              localStorage.setItem("inscEnrId", res.data._id)
              if( res.data.nom != undefined ) {
                localStorage.setItem("inscNom", res.data.nom)                  
              }
              if( res.data.type!= undefined ) {
                localStorage.setItem("inscType", res.data.type)
              }
              if( res.data.casnos != undefined ) {
                localStorage.setItem("inscCasnos", res.data.casnos.value)          
              }
              if( res.data.cacopath!= undefined ) {
                localStorage.setItem("inscCacopath", res.data.cacopath.value)
              }
              if( res.data.nif != undefined ) {
                localStorage.setItem("inscNif", res.data.nif.value)            
              }
              if( res.data.nis!= undefined ) {
                localStorage.setItem("inscNis", res.data.nis.value)
              }
              if( res.data.numRegistre != undefined ) {
                localStorage.setItem("inscNumRegistre", res.data.numRegistre.value)       
              }
              if( res.data.classification != undefined ) {
                localStorage.setItem("inscClassification", res.data.classification.value)
              }
              this.$router.push("/signup/form1")
          })
        })
        console.log(this.user)
      })
      
    }
  }
}
</script>

<style scoped>
.gradient-custom-3 {
    /* fallback for old browsers */
    background: #FA7D09;
  
    /* Chrome 10-25, Safari 5.1-6 */
    background: -webkit-linear-gradient(to right, rgba(255, 67, 1, 0.5), rgba(47, 37, 25, 0.5));
  
    /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    background: linear-gradient(to right, rgba(255, 67, 1, 0.5), rgba(47, 37, 25, 0.5));
  }
  .gradient-custom-4 {
    /* fallback for old browsers */
    background: #FA7D09;
  
    /* Chrome 10-25, Safari 5.1-6 */
    background: -webkit-linear-gradient(to right, rgb(250, 125, 9), rgb(255, 67, 1));
  
    /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    background: linear-gradient(to right, rgb(250, 125, 9), rgb(255, 67, 1))
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
</style>