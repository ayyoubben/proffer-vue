<template>
    <section class="vh-100 bg-image" style="background-image: url('../../assets/background.jpeg'); background-size: cover; background-repeat: no-repeat;">
        <div class="mask d-flex align-items-center h-100 gradient-custom-3">
          <div class="container h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
              <div class="col-12 col-md-9 col-lg-6 col-xl-5"> 
                <div class="card" style="border-radius: 10px; opacity: 0.9; color:E0E0E0;">
                  <div class="card-body p-5">
                    <h2 class="text-uppercase text-center mb-5" style="color:#2F2519">Creer un compte</h2>
      
                    <form>  
                      <div class="form-floating mb-4">
                        <input v-model="lastname" type="text" id="form3Example1cg" class="form-control form-control-lg" placeholder="Votre nom"/>
                        <label for="form3Example1cg">Votre nom</label>
                        
                      </div>

                      <div class="form-floating mb-4">
                        <input v-model="firstname" type="text" id="form3Example1cg" class="form-control form-control-lg" placeholder="Votre prénom"/>
                        <label for="form3Example1cg">Votre prénom</label>
                        
                      </div>
      
                      <div class="form-floating mb-4">
                        <input v-model="email" type="email" id="form3Example3cg" class="form-control form-control-lg" placeholder="Votre email"/>
                        <label for="form3Example3cg">Votre email</label>
                      </div>
      
                      <div class="form-floating mb-4">
                        <input v-model="password" type="password" id="form3Example4cg" class="form-control form-control-lg"  placeholder="Mot de passe"/>
                        <label for="form3Example4cg">Mot de passe</label>
                      </div>
      
                      <div class="form-floating mb-4">
                        <input v-model="confirmedPassword" type="password" id="form3Example5cdg" class="form-control form-control-lg" placeholder="Confirmer le mot de passe" />
                        <label for="form3Example5cg">Confirmer le mot de passe</label>
                      </div>
      
                      
      
                      <div class="d-flex justify-content-center">
                        <button @click="handleSignupUser" type="button" class="btn btn-block btn-lg gradient-custom-4" style=" color:white">Confirmer</button>
                      </div>      

                      <p class="text-center text-muted mt-5 mb-0">Vous avez dejà un compte? <a href="#!" class="fw-bold text-body"><u style="color:#FF4301">Se connecter</u></a></p>
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
import {createAcc} from '../../utils/soumissionnaire/soumissionnaire'
export default {
    data() {
    return {
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        confirmedPassword: "",
    };
  },
  computed: {
        ...mapGetters(['user'])
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
    handleSignupUser() {
        if(this.password === this.confirmedPassword) {
            const data = {
                firstname: this.firstname, 
                lastname: this.lastname,
                email: this.email, 
                password: this.password
            }
            createAcc(data).then(res => {
            this.$store.commit('setUser', res.data.soumissionnaire)
            console.log(res.data)
            console.log(this.user)
            })
        }
      this.$router.push("/signup/form1")
    }
  }

}
</script>

<style> 
.gradient-custom-3 {
    /* fallback for old browsers */
    background: #fac384;
  
    /* Chrome 10-25, Safari 5.1-6 */
    background: -webkit-linear-gradient(to right, rgba(255, 67, 1, 0.5), rgba(47, 37, 25, 0.5));
  
    /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    background: linear-gradient(to right, rgba(255, 67, 1, 0.5), rgba(47, 37, 25, 0.5))
  }
  .gradient-custom-4 {
    /* fallback for old browsers */
    background: #FA7D09;
  
    /* Chrome 10-25, Safari 5.1-6 */
    background: -webkit-linear-gradient(to right, #FA7D09, rgba(255, 67, 1, 1));
  
    /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    background: linear-gradient(to right, #FA7D09, rgba(255, 67, 1, 1))
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