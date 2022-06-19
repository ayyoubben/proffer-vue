<template style="background-color: #f5f7fa;">
   <div class="row flex-nowrap"> 
    <div class="col-2 bg-dark brown">
            <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                <a @click="$router.push('/')" class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <span class="fs-5 d-none d-sm-inline"><img class="img-fluid logo" src="../../assets/logo.png" alt=""></span>
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
                        <img src="../../assets/AF_281.png" alt="hugenerd" width="30" height="30" class="rounded-circle">
                        <span class="d-none d-sm-inline mx-1">Logout</span>
                    </a>
                </div>
            </div>
    </div>
    <div class="col-10">
    <div class="container mt-5">
            <h3>{{$store.state.newLot.name}}</h3>
            <hr>
            <h5 class="mt-3 mb-4">Poser une soumission:</h5>
            <div class="row justify-content-center">
                <div class="col-xl-10">
                    <!-- entreprise details card-->
                    <div class="card mb-4">
                        <div class="card-body">
                            <form>
                                <!-- Form Row-->
                                <div class="row gx-3 mb-3">
                                    <!-- Form Group (CahierCharge)-->
                                    <div class="col-md-6">
                                        <label class="small mb-1" for="inputName">Cahier de charges</label>
                                        <input ref="cdc" class="form-control" id="inputCahierCharge" type="file" placeholder="Entez le nom de votre entreprise" value="ESi">
                                        
                                    </div>
                                    <div class="col-md-6">
                                        <label class="small mb-1" for="inputName">Extrait de Role</label>
                                        <input ref="edr" class="form-control" id="inputExtraitRole" type="file" placeholder="Entez le nom de votre entreprise" value="ESi">
                                        
                                    </div>
                                </div>
                                <!-- Form Row        -->
                                <div class="row gx-3 mb-3">
                                    <!-- Form Group (registre)-->
                                    <div class="col-md-6">
                                        <label class="small mb-1" for="inputnbMaterial">Nb Materiel</label>
                                        <div class="input-group mb-3">
                                            <input v-model="nbMateriel" type="number" class="form-control" id="inputnbMaterial" placeholder="Entrez la quantité du materiel">
                                            <div class="input-group-append">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <label class="small mb-1" for="inputnbSalaries">Nb Salaries</label>
                                        <div class="input-group mb-3">
                                            <input v-model="nbSalaries" type="number" class="form-control" id="inputnbSalaries" placeholder="Entrez la nombre des salariés">
                                            <div class="input-group-append">
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                                <!-- Form Group (codes)-->
                                
                                <!-- Form Row-->
                                <div class="row gx-3 mb-3">
                                    <!-- Form Group (CNAS)-->
                                    <div class="col-md-6">
                                        <label class="small mb-1" for="inputDelai">Duree (mois)</label>
                                        <input v-model="delai" class="form-control" id="inputDelai" type="number" placeholder="Entrez la duree">
                                    </div>
                                    <!-- Form Group (PRIX))-->
                                    <div class="col-md-6">
                                        <label class="small mb-1" for="inputNIS">Prix</label>
                                        
                                        <div class="input-group mb-3">
                                            <input v-model="prix" type="number" class="form-control" id="inputPrix" placeholder="Saisisser le prix de votre soumission" >
                                            <div class="input-group-append">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                               
                                
                                <!-- submit btn-->
                                
                                <div class="d-flex justify-content-center">
                                <input @click="handleSoumission" class="btn color-custom-2 " type="button" value="Valider">
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
    </div>
    </div>
    </div> 
</template>
<script>
import {loginSoum, logoutSoum} from '../../utils/soumissionnaire/soumissionnaire'
import {addSoumission} from '../../utils/soumission/soumission'
import {getBarremBylot} from '../../utils/barrem/barrem'
import {addAnnotation} from '../../utils/annotation/annotation'
export default {
    data() {
        return {
            barrem: {},
            nbMateriel: null,
            nbSalaries: null,
            prix: null,
            delai: null
        }
    },
    created() {
        getBarremBylot(this.$store.state.newLot._id, localStorage.getItem("token")).then(res => {
            console.log(res.data)
            this.barrem = res.data
        })
        //console.log(this.$store.state.newLot)
        //console.log(this.$store.state.myInsc)
    },
    methods:{
        handleLogout() {
                logoutSoum(localStorage.getItem("token")).then(res => {
                    localStorage.removeItem("token")
                    this.$router.push("/login")
                })
            },
        handleSoumission() {
            var fd = new FormData()
            //soumission.idSoumission = bufferObject.message.id
            fd.append("classification", this.$store.state.myInsc.classification.value)
            fd.append("nbMaterial", this.nbMateriel)
            fd.append("nbSalarie", this.nbSalaries)
            fd.append("prix", this.prix)
            fd.append("offre", this.$store.state.newOffre._id)
            fd.append("lot", this.$store.state.newLot._id)
            fd.append("delai", this.delai)
            fd.append("soumissionnaire", this.$store.state.user._id)
            fd.append("cahierCharge", this.$refs.cdc.files[0])
            fd.append("extraitRole", this.$refs.edr.files[0])
            fd.append("nCnas", this.$store.state.myInsc.casnos.value)
            fd.append("soumissionnaireName", this.$store.state.myInsc.nom)
            addSoumission(fd, localStorage.getItem("token")).then(res => {
                console.log(res.data)
                var annot = {}
                this.nbMateriel >= this.$store.state.newLot.nbMateriels ? annot.nb_materiel = this.barrem.nbMateriels : annot.nb_materiel = 0
                this.nbSalaries >= this.$store.state.newLot.nbSalariés ? annot.nb_salaries = this.barrem.nbSalariés : annot.nb_salaries = 0
                this.$store.state.myInsc.classification <= this.$store.state.newLot.classification ? annot.classification = this.barrem.classification : annot.classification = 0
                this.delai <= this.$store.state.newLot.dernierDelai ? annot.delai = this.barrem.dernierDelai : annot.delai = 0
                annot.prix = 0
                annot.qualite_tech = 0
                annot.soumission = res.data.id
                annot.offre = this.$store.state.newOffre._id
                annot.lot = this.$store.state.newLot._id
                console.log(annot)
                addAnnotation(annot, localStorage.getItem("token")).then(res => {
                    console.log(res.data)
                    //this.$router.push("/offre/lots")
                })
            })

        }
    }
}
</script>
<style scoped>
            .color-custom-2{
            /* fallback for old browsers */
            background: #FA7D09;
            color: white;
      
            /* Chrome 10-25, Safari 5.1-6 */
            background: -webkit-linear-gradient(to right, rgb(250, 125, 9), rgb(255, 67, 1));
      
            /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
            background: linear-gradient(to right, rgb(250, 125, 9), rgb(255, 67, 1))
            }
            label{
                color:#FA7D09
            }
</style>