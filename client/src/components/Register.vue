<template>
 <v-layout column>
   <v-flex xs6 offset-xs3>
     <div class="white elevation-2">
       <v-toolbar flat dense class="cyan" dark>
         <v-toolbar-title>Register</v-toolbar-title>
       </v-toolbar>

      <div class="pl-4 pr-4 pt-2 pb-2">
        <form 
          name="tab-tracker-form"
          autocomplete="off">
      <v-text-field
        label="Email Address"
        type="email"
        v-model="email">
      </v-text-field>
      <br>
      <v-text-field
        label="Password"
        type="password"
        v-model="password"
        autocomplete="new-password">
      </v-text-field>
        </form>
      <br>
      <div class="error" v-html="error"/>
      <br>
      <v-btn
      dark
      class="cyan"
      @click="register">
      Register
      </v-btn>
      </div>
     </div>
   </v-flex>
 </v-layout>
</template>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* .error {
  
  
} */
</style>

<script>
import AutheticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register () {
      try {
        const response = await AutheticationService.register({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>
