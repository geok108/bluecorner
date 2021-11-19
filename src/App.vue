<template>
  <div id="app">
      <MainMenu/>
      <div class="container" style="margin-top: 86px;">
        <div class="row">
          <div class="col-md-8">
            <router-view></router-view>   
          </div>
          <div class="col-md-4">
            <TwitterFeed/>
          </div>
        </div>
     </div>
  </div>
</template>

<script>
import MainMenu from "./components/MainMenu.vue"
import TwitterFeed from "./components/TwitterFeed.vue"

export default {
  name: 'App',
  components: {
    MainMenu,
    TwitterFeed,
  },
   mounted(){
        let recaptchaScript = document.createElement('script')
          recaptchaScript.setAttribute('src', 'https://platform.twitter.com/widgets.js')
          document.head.appendChild(recaptchaScript)
    },
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
