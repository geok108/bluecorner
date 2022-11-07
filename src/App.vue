<template>
  <div id="app">
      <MainMenu/>
      <div class="container" style="margin-top: 86px;">
        <div class="row">
          <div class="col-md-8">
            <router-view></router-view>   
          </div>
          <!-- <div class="col-md-4">
            <TwitterFeed/>
          </div> -->
        </div>
     </div>
     <!-- <footer class="border-top">
            <div class="container px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5 justify-content-center">
                    <div class="col-md-10 col-lg-8 col-xl-7">
                        <ul class="list-inline text-center">
                            <li class="list-inline-item">
                                <a href="#!">
                                    <span class="fa-stack fa-lg">
                                        <i class="fas fa-circle fa-stack-2x"></i>
                                        <i class="fab fa-twitter fa-stack-1x fa-inverse"></i>
                                    </span>
                                </a>
                            </li>
                            <li class="list-inline-item">
                                <a href="#!">
                                    <span class="fa-stack fa-lg">
                                        <i class="fas fa-circle fa-stack-2x"></i>
                                        <i class="fab fa-facebook-f fa-stack-1x fa-inverse"></i>
                                    </span>
                                </a>
                            </li>
                            <li class="list-inline-item">
                                <a href="#!">
                                    <span class="fa-stack fa-lg">
                                        <i class="fas fa-circle fa-stack-2x"></i>
                                        <i class="fab fa-github fa-stack-1x fa-inverse"></i>
                                    </span>
                                </a>
                            </li>
                        </ul>
                        <div class="small text-center text-muted fst-italic">Copyright &copy; Your Website 2021</div>
                    </div>
                </div>
            </div>
        </footer> -->
  </div>
</template>

<script>
import MainMenu from "./components/MainMenu.vue"
// import TwitterFeed from "./components/TwitterFeed.vue"

export default {
  name: 'App',
  components: {
    MainMenu,
    // TwitterFeed,
  },
//    mounted(){
//         let recaptchaScript = document.createElement('script')
//           recaptchaScript.setAttribute('src', 'https://platform.twitter.com/widgets.js')
//           document.head.appendChild(recaptchaScript)

//     },
}
        //   $('.timeline-Header').remove();

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

footer{
    position: relative;
    width: 100%;
    /* top:300px; */
    padding-top: 2rem;
    padding-bottom: 2rem;
}	

.twitter-timeline {
    /* position: fixed!important; Make the sidebar immovable */
    /* width:25%!important;
    height:75%!important; */
    top:5%;
    margin-left: -6%!important;
}
</style>
