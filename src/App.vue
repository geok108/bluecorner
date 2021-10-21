<template>
  <div id="app">
  
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
          <MainMenu/>
          <div class="container" style="margin-top: 86px;">
          <div class="row">
          <div class="col-md-8">
          <PostsList/>
          </div>
          <div class="col-md-4">
          <TwitterFeed/>
          </div>
          </div>
          </div>
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
