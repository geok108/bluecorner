<template>
  <div id="app">
  
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
          <MainMenu/>
          <b-container style="margin-top: 86px;">
          <b-row>
          <b-col cols="8">
          <PostsList/>
          </b-col>
          <b-col>
          <TwitterFeed/>
          </b-col>
          </b-row>
          </b-container>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
  
</template>

<script>
import PostsList from "./components/PostsList.vue"
import MainMenu from "./components/MainMenu.vue"
import TwitterFeed from "./components/TwitterFeed.vue"

// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    TwitterFeed,
    MainMenu,
    PostsList
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
