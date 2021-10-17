<template>
<div class="container-login">
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>
     <v-text-field
            v-model="password"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min]"
            :type="show1 ? 'text' : 'password'"
            name="input-10-1"
            label="Password"
            hint="At least 8 characters"
            counter
            @click:append="show1 = !show1"
          ></v-text-field>
  <div class="group-buttom">
    <v-btn
      :disabled="!valid"
      color="success"
      class="mr-4 btn-form-sigin"
      @click="validate"
    >
      Login
    </v-btn>
    </div>
  </v-form>
</div>
</template>

<script>
import axios from "axios";
  export default {
    data: () => ({
      valid: true,
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
        show1: false,
        password: '',
        rules: {
          required: value => !!value || 'Required.',
          min: v => v.length >= 8 || 'Min 8 characters',
          emailMatch: () => (`The email and password you entered don't match`),
        },
    }),

    methods: {
      validate () {
       let valid =  this.$refs.form.validate()
       if(valid != false){
           axios.post('http://localhost:8686/login',{ password: this.password,email: this.email,}).then(res => {
          localStorage.setItem("token",res.data.token)
           this.$router.push({name:'Home'})
        }).catch(error =>{
          console.log(error.response)
        })
       }
      
      },

    },
  }
</script>

<style>
  .container-login {
    background-color: #FFF;
    width: 380px !important;
    height: 580px !important;

    padding: 3rem;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;

    border: solid 1px white;
    border-radius: 4px;
  }

  .group-buttom {
    display: flex;
    flex-direction: column;
    padding: 1rem; 
  }

  .btn-form-sigin {
    margin: 10px;
    background-image: linear-gradient(to left, #5ecddc, #668ae4, #9c54e9, #d63af5) !important;
    border-radius: 25px !important;

    font-family: Roboto;
    font-weight: bold;
  }

    .btn-form {
    margin: 10px;
    background-color: white !important;
    border-radius: 25px !important;

    font-family: Roboto;
    font-weight: bold;
    color: #000 !important;
  }

  .btn-form:hover{
    transform: translateY(-3px);

    background-image: linear-gradient(to left, #5ecddc, #668ae4, #9c54e9, #d63af5) !important;
    color: white !important;
  }

</style>