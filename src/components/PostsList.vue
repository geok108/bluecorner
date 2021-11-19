<template>
      <div class="container">
            <div class="row gx-4 gx-lg-5 justify-content-center" style="text-align: left; margin-right:-15%;">
                <div class="col-md-10 col-lg-10 col-xl-10">
        <b-list-group v-for="post in posts" v-bind:key="post.url">
        
            <!-- Post preview-->
            <Post :url=post.url :title=post.title :description=post.description :publishDatetime=post.publishDatetime :image=post.image :source=post.source :sourceUrl=post.sourceUrl :sourceLogo=post.sourceLogo :slug=post.slug></Post>
            <!-- Divider-->
            <hr class="my-4" />

        </b-list-group>
         </div>
            </div>
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
        return { 
                page: 1,
                pageSize: 9,
                posts: []
            }
        },
    methods:{
        loadMore(){
            Vue.axios.get("http://localhost:8080/posts/list", {
                params: {
                    page: this.page++,
                    perpage: this.pageSize,
                }
                })  
                .then((resp)=>{
                    this.posts.push(...resp.data.postList);
                    console.log('POSTS:',this.posts);
                    console.log(resp.data);
            });
         
        },
        scroll () {
            window.onscroll = () => {
                let bottomOfWindow = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop) + window.innerHeight + 10  === document.documentElement.offsetHeight + 10

                if (bottomOfWindow) {
                    this.loadMore();
                }
            }
        },
        refresh () {
            this.forceRerender();
        },
        forceRerender(){}
    },
    name: "PostsList",
    mounted(){
        this.loadMore();
        this.timer = setInterval(this.refresh(), 5000);
        this.scroll();
    },
    components: {Post}
}
</script>

