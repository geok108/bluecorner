<template>
    <div>
        <h1>
            News
        </h1>
        <div v-for="post in posts" v-bind:key="post.url">
            <a :href="post.url">{{post.title}}</a><br/> 
        </div>
    </div>
</template>
<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

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
    }
}
</script>
