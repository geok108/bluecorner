<template>
    <div>
        <h1>
            News
        </h1>
        <b-list-group v-for="post in posts" v-bind:key="post.url">
            <Post :url=post.url :title=post.title :publishDatetime=post.publishDatetime></Post>
        </b-list-group>

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
        })
    },
    components: {Post}
}
</script>
