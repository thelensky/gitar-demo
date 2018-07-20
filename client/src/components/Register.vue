
<template>
 <v-app id="inspire">
    
      <v-container fluid>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar color="cyan darken-1">
                <v-toolbar-title justify-center>Вход</v-toolbar-title>                        
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field prepend-icon="person" name="login" label="Login" 
                  type="text" v-model="email"></v-text-field>
                  <v-text-field id="password" prepend-icon="lock" name="password" 
                  label="Password" type="password" v-model="password"></v-text-field>
                </v-form>
                <div v-html="error" class="alert-msg"></div>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="register" class="mb-3">Регистрация</v-btn>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    
  </v-app>

</template>

<script>
import AuthenticationService from "@/services/AuthenticationService";
export default {
  data() {
    return {
      email: "",
      password: "",
      error: null,
    };
  },
  methods: {
    async register() {
      try{
        const response = await AuthenticationService.register({
        email: this.email,
        password: this.password
      });
      this.$store.dispatch('setToken', response.data.token)
      this.$store.dispatch('setUser', response.data.user)
      }
      catch (err){
        this.error = err.response.data.error
      }
      
    }
  }
};
</script>

<style scoped>
.alert-msg{
  color: red;
}
</style>