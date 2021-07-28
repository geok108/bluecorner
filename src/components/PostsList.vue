<template>
    <div>
        <h1>
            News
        </h1>
        <b-list-group v-for="post in posts" v-bind:key="post.url" class="col-md-6">
            <Post :url=post.url :title=post.title :publishDatetime=post.publishDatetime></Post>
        </b-list-group>
        <a class="twitter-timeline" href="https://twitter.com/TwitterDev/lists/national-parks?ref_src=twsrc%5Etfw">A Twitter List by TwitterDev</a> 
    </div>
</template>
<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Post from "./Post.vue"

Vue.use(VueAxios,axios)
export default {
    data(){
        return {posts: null}
    },
    name: "PostsList",
    mounted(){
        Vue.axios.get("http://localhost:8080/posts/list")
        .then((resp)=>{
            this.posts = resp.data.postList;
            console.log(resp.data);
        });
         let recaptchaScript = document.createElement('script')
      recaptchaScript.setAttribute('src', 'https://platform.twitter.com/widgets.js')
      document.head.appendChild(recaptchaScript)
    },
    components: {Post}
}
</script>

