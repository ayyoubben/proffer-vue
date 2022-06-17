<template>
    <div>
        <div class="container mt-5">
            <h2>{{$store.state.newOffre.name}}</h2>
            <hr class="mb-5">
            <h5>Journée de la décision:</h5> 
            <p>{{$store.state.newOffre.dDay}}</p>
            <h5>Les lots:</h5>
            <div class="row">
                <div v-for="lot in lots" class="col-lg-6">
                    <div class="card mt-3 ">
                        <div class="card-body">
                        <h2 class="card-title mb-1">{{lot.name}}</h2>
                        <p>{{$store.state.newOffre.dDay}}</p>  
                        <a @click="goToSoumission(lot)" class="btn1 btn m-1">Soumissionner</a>
                        <a @click="downloadFile(lot.cahierDesCharges)" class="btn2 m-1" >Télécharger Cahier Des Charges</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--<div class="modal fade" id="CahierChargeModal" tabindex="-1" aria-labelledby="CahierChargeModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-xl">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Registre de commerce</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <embed src="test.pdf#toolbar=0" frameborder="0" width="100%" height="400px">
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>-->
    </div>
</template>

<script>
import {getLotByIdSorted} from '../../utils/lot/lot'
export default {
    data() {
        return {
            lots:  [],
        }
    },
    created() {
        this.handleGetLots()
        
    },
    methods: {
        handleGetLots() {
            getLotByIdSorted(this.$store.state.newOffre._id, localStorage.getItem("token")).then(res => {this.lots = res.data 
            console.log(res.data)})
        },
        goToSoumission(lot) {
            this.$store.commit('setNewLot', lot)                
            this.$router.push("/offre/lots/soumissionner")
        },
        downloadFile(file){
            console.log('object :>> ')
            window.open(file)
        }
    },
}
</script>

<style scoped>
.btn1 {
    background-color: #FA7D09;
    color: white;
}
.btn2 {
    background-color: #2F2519;
    color: white;
    display: inline-block;
    font-weight: 400;
    line-height: 1.5;
    text-align: center;
    text-decoration: none;
    vertical-align: middle;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    border: 1px solid transparent;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    border-radius: 0.25rem;
    transition: color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

}
.card {
    box-shadow: 0 0.15rem 1.75rem 0 rgb(33 40 50 / 15%);
}
</style>