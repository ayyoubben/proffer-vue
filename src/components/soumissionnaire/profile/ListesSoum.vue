<template>
<div class="row flex-nowrap">
        <div class="col-2 bg-dark brown">
            <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                <a @click="$router.push('/')" class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <span class="fs-5 d-none d-sm-inline"><img class="img-fluid logo" src="../../../assets/logo.png" alt=""></span>
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
                        <img src="../../../assets/AF_281.png" alt="hugenerd" width="30" height="30" class="rounded-circle">
                        <span class="d-none d-sm-inline mx-1">Logout</span>
                    </a>
                </div>
            </div>
        </div>
    <div class="col-10">
        <!-- Account page navigation-->
        <nav class="nav nav-borders">
            <a @click="$router.push('/profile')" class="navlink nav-link" data-bs-toggle="tab">Edit</a>
            <a @click="$router.push('/messoumissions')" class="navlink nav-link active" data-bs-toggle="tab">Mes Soumissions</a>
            <a @click="$router.push('/securite')" class="navlink nav-link" data-bs-toggle="tab">Securité</a>
            <!--a class="nav-link" href=""  target="__blank">NotifHoications</a-->
        </nav>
        <hr class="mt-0 mb-4">
        <div class="container mt-5">
            <h2>{{$store.state.newLot.name}}</h2>
            <h6>Journée de la décision: {{$store.state.newOffre.dDay}}</h6>
            <h5>Les Soumissions:</h5>
            <div class="row">
                <div v-for="soum in soums" class="col-lg-6">
                    <div class="card mt-3 ">
                        <div class="card-body">
                        <h2 class="card-title mb-1">{{soum.soumissionnaireName}}</h2>
                        <p>{{$store.state.newOffre.dDay}}</p>  
                        <a @click="goToSoumission(soum)" class="btn1 btn m-1">Afficher</a>
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
</div>
</template>

<script>
import {loginSoum, logoutSoum} from '../../../utils/soumissionnaire/soumissionnaire'
import {getSoumissionByOffreAndSoumissionnaire} from '../../../utils/soumission/soumission'
export default {
    data() {
        return {
            soums: [],
        }
    },
    created() {
        this.handleGetLots()
        
    },
    methods: {
        handleLogout() {
                logoutSoum(localStorage.getItem("token")).then(res => {
                    localStorage.removeItem("token")
                    this.$router.push("/login")
                })
            },
        handleGetLots() {
            getSoumissionByOffreAndSoumissionnaire(this.$store.state.user._id, this.$store.state.newLot._id, localStorage.getItem("token")).then(res => {this.soums = res.data 
            console.log(res.data)})
        },
        goToSoumission(soum) {
            this.$store.commit('setNewSoum', soum)                
            this.$router.push("/messoumissions/soumission")
        }
    },
}
</script>

<style scoped>
.nav-borders .navlink.active {
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