<template>
 
        <b-container>
            <b-row>
        <b-col cols="8">
                <b-list-group v-for="post in posts" v-bind:key="post.url">
                <Post :url=post.url :title=post.title :publishDatetime=post.publishDatetime :image=post.image></Post>
                </b-list-group>
        </b-col>
        <b-col>
            <a class="twitter-timeline" href="https://twitter.com/geok108/lists/1421396067636105218" data-width="1000" data-height="600">A Twitter List by TwitterDev</a> 
        </b-col>
        </b-row>
        </b-container>
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

