
<template>
 <v-app id="inspire">
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar color="cyan darken-1">
                <v-toolbar-title justify-center>Регистрация</v-toolbar-title>                        
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
                <v-btn color="primary" @click="login" class="mb-3">Войти</v-btn>
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
    async login() {
      try{
        const response = await AuthenticationService.login({
        email: this.email,
        password: this.password
      });
      }
      catch (err){
        this.error = err.response.data.error
        console.log(error)
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