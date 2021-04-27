import { reactive } from "@vue/reactivity";

const state = reactive({
    create_new_account: false,
    login_info:true,
    user:{
        login_email:'',
        login_password:''
    },
   new_user:{
    register_user_name:'',
    register_user_email:'',
    register_user_password:'',
    register_user_password_confirmed:'',
    register_user_is_valide:true,
    register_user_error:'',
    register_user_sucess:false,
   },
});

const methodes = {
    createNewAccount() {
        state.create_new_account = true;
    },
    backToLogin() {
        state.create_new_account = false;
    },
    registerNewUser(){
        
        console.log('register new user is called');
        state.new_user.register_user_is_valide=true
        if( state.new_user.register_user_name.length<4) {
            state.new_user.register_user_is_valide=false
            state.new_user.register_user_error='le nom doit comporter au moins 4 caractères'
        }else   if ( state.new_user.register_user_password.length<6) {
                    state.new_user.register_user_is_valide=false
                    state.new_user.register_user_error='le mot de pass doit comporter au moins 6 caractères'
                }else   if( state.new_user.register_user_password != state.new_user.register_user_password_confirmed) {
                        state.new_user.register_user_is_valide=false
                        state.new_user.register_user_error='La confirmation du mot de passe ne correspond pas au mot de passe'
        }
        if(state.new_user.register_user_is_valide){
            axios.post('http://127.0.0.1:8000/api/register', state.new_user).then((res) =>{
                console.log('res = ', res);
                state.new_user.register_user_name='',
                state.new_user.register_user_email='',
                state.new_user.register_user_password='',
                state.new_user.register_user_password_confirmed='',
                state.new_user.register_user_error='',
                state.new_user.register_user_is_valide=true
                state.new_user.register_user_sucess=true
                state.create_new_account = false;
                
            }).catch((error) =>{
                state.new_user.register_user_is_valide=false
                state.new_user.register_user_error='!!!! erreur lors de la connexion au serveur !!!!'
               
            })
        }else{
            console.log('this is not a valid user')
        }

        
    },
    login(){
        console.log('login new user is called');
            axios.post('http://127.0.0.1:8000/api/login', state.user).then((res) =>{
            // this.$router.push({ name: "Dashboard"}); 
            console.log('user is loged in')
            }).catch((error) =>{
      //  this.errors = error.response.data.errors;
      state.login_info=false
      setTimeout(() => {
        state.login_info=true
      }, 10000);
           })
        }


};

export default {
    state,methodes
};
