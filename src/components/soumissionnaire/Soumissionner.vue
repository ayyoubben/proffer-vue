<template style="background-color: #f5f7fa;">
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
</template>
<script>
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