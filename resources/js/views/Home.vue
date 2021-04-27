<template>
<div class="container">
    <!-- alert to show errors if there is one -->
        <div v-if="!store.state.new_user.register_user_is_valide" class="alert alert-danger alert-dismissible fade show my-3" role="alert">
        <strong>Attention!!</strong> {{store.state.new_user.register_user_error}}
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
        </div>

          <div v-if="!store.state.login_info" class="alert alert-warning alert-dismissible fade show my-3" role="alert">
        <strong>Attention!!</strong> Les informations d'identification fournies sont incorrectes
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
        </div>

        <div v-if="store.state.new_user.register_user_sucess" class="alert alert-success alert-dismissible fade show my-3" role="alert">
         <strong>-- félicitation -- </strong> Votre compte a été créé
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
        </div>

    <div v-if="!store.state.create_new_account" class="row">
        <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-12  align-self-center">
            <div class="Welcome justify-content-center text-center my-5"> Welcome! </div>
            <div class=" justify-content-center text-center d-flex align-items-center my-3">
                <span class="px-2">Email </span> <input class="form-control max-50 ml-auto" type="email" v-model="store.state.user.login_email" name="" id="">
            </div>
            <div class=" justify-content-center text-center d-flex align-items-center my-3 ">
                <span class="px-2">Password </span> <input class="form-control max-50 ml-auto" v-model="store.state.user.login_password" type="password" name="" id="">
            </div>
            <div class="d-flex justify-content-between">
                <div class="connect">
                <span class="px-3 mx-3 btn btn-info " @click="store.methodes.createNewAccount" >create new account</span>
                <button class="btn btn-primary float-right"  @click="store.methodes.login" >login</button>
            </div>
            </div>
        </div>
        <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-12 d-none d-lg-block d-xl-block align-self-center ">
            <img src="/images/Login-image.jpg" alt="" class=" w-100 h-100">
        </div>
    </div>
    <div v-if="store.state.create_new_account" class="row">
        <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-12  align-self-center">
            <div class="Welcome justify-content-center text-center my-5"> Create New account! </div>
            <div class=" justify-content-center text-center d-flex align-items-center my-3">
                <span class="px-2">name </span> <input class="form-control max-50 ml-auto"  v-model="store.state.new_user.register_user_name" type="text">
            </div>
            <div class=" justify-content-center text-center d-flex align-items-center my-3">
                <span class="px-2">Email </span> <input class="form-control max-50 ml-auto"  v-model="store.state.new_user.register_user_email" type="email">
            </div>
            <div class=" justify-content-center text-center d-flex align-items-center my-3 ">
                <span class="px-2">Password </span> <input class="form-control max-50 ml-auto"  v-model="store.state.new_user.register_user_password" type="password">
            </div>
            <div class=" justify-content-center text-center d-flex align-items-center my-3 ">
                <span class="px-2"> Confirm Password </span> <input class="form-control max-50 ml-auto"  v-model="store.state.new_user.register_user_password_confirmed" type="password">
            </div>
            <div class="d-flex justify-content-between">
                <div class="connect">
                <span class="px-3 mx-3 btn btn-info" @click="store.methodes.backToLogin"> back to login </span>
                <button @click.prevent="store.methodes.registerNewUser" class="btn btn-primary float-right">create account</button>
            </div>
            </div>

        </div>
         <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-12 d-none d-lg-block d-xl-block align-self-center ">
           <img src="/images/Login-image.jpg" alt="" class=" w-100 h-100">
        </div>
    </div>
</div>

</template>

<script>
import { inject } from 'vue'
import singin from './singin.vue'
export default {
components:{singin},
setup(){
    const store = inject('store')
    return{store}
}
}
</script>

<style>
.Welcome{
    font-size: xxx-large;
    font-family: cursive;
    font-weight: bold;
    color: #007cfc;
}
.bg-light{
    background-color: #e7e7e7!important;;
}
.connect{
    margin-left: auto;
}
.max-50{
    max-width: 50%;
}

</style>