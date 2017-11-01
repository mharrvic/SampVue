<template>
 <v-layout column>
   <v-flex xs6 offset-xs3>
     <div class="white elevation-2">
       <v-toolbar flat dense class="cyan" dark>
         <v-toolbar-title>Register</v-toolbar-title>
       </v-toolbar>

      <div class="pl-4 pr-4 pt-2 pb-2">
      <v-text-field
        label="Email Address"
        type="email"
        v-model="email">
      </v-text-field>
      <br>
      <v-text-field
        label="Password"
        type="password"
        v-model="password">
      </v-text-field>
      <br>
      <div class="error" v-html="error"/>
      <br>
      <v-btn
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
.error {
  color:red;
}
</style>

<script>
import AutheticationService from '@/services/AuthenticationService'
export default {
  name: 'register',
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
        await AutheticationService.register({
          email: this.email,
          password: this.password
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  },
  computed: {
    binding () {
      const binding = {}

      if (this.$vuetify.breakpoint.mdAndUp) binding.column = true

      return binding
    }
  }
}
</script>
