<template>
  <v-toolbar fixed>
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <v-toolbar-title @click="navigateTo({name:'root'})">Title</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
    <v-btn flat 
      @click="navigateTo({name:'register'})"
      v-if="!$store.state.isUserLogged">Регистрация</v-btn> 
      <v-btn flat 
      @click="navigateTo({name:'login'})"
      v-if="!$store.state.isUserLogged">Войти</v-btn>
      <v-btn flat 
      @click="navigateTo({name:'login'})"
      v-if="!$store.state.isUserLogged">Выйти</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>


<script>
export default {
	methods: {
		navigateTo(route){
			this.$router.push(route)
		}
	}
}
</script>

<style scoped>

</style>
