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
        <!-- <button id="loadMoreBtn" style="display:none;" @click="loadMore">Load More</button> -->
        <div style="text-align-last:center;">
            <b-button pill variant="outline-secondary" id="loadMoreBtn" style="display:none;" @click="loadMore">Load More</b-button>
        </div>
        <br>
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
                page: 0,
                pageSize: 9,
                posts: []
            }
        },
    methods:{
        loadAll(){
            console.log("api url: "+process.env.VUE_APP_CAGENEWSAPI);
            Vue.axios.get(process.env.VUE_APP_CAGENEWSAPI + "/posts/list/all", {
                params: {
                }
                })  
                .then((resp)=>{
                    this.posts.push(...resp.data.postList);
                    console.log('POSTS:',this.posts);
                    console.log(resp.data);
            }).catch((e) => {
            console.log("ERROR:"+e);
        });
         
        },
        loadMore(){
            console.log("api url: "+process.env.VUE_APP_CAGENEWSAPI);
            Vue.axios.get(process.env.VUE_APP_CAGENEWSAPI + "/posts/list/", {
                params: {
                    page: this.page++,
                    perpage: this.pageSize,
                }
                })  
                .then((resp)=>{
                    this.posts.push(...resp.data.postList);
                    // console.log('POSTS:',this.posts);
                    // console.log(resp.data);
            }).catch((e) => {
            console.log("ERROR:"+e);
        });
         
        },
        scroll () {
            window.onscroll = () => {
                let bottomOfWindow = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop) + window.innerHeight === document.documentElement.offsetHeight;
                if (bottomOfWindow) {
                    this.loadMore();
                }
            }

            window.ontouchmove = () => {
                let bottomOfWindow = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop) + window.innerHeight === document.documentElement.offsetHeight;
                if (bottomOfWindow) {
                    this.loadMore();
                }
            }
        },
        
    },
    name: "PostsList",
    mounted(){
        let isMobDevice = (/iphone|ipad|Android|webOS|iPod|BlackBerry|Windows Phone|ZuneWP7/gi).test(navigator.appVersion);
        if(isMobDevice){
            this.loadMore();
            const elem = document.getElementById('loadMoreBtn');
            elem.style.display = "unset";
        }else{
            this.loadMore();
        }

        // this.timer = setInterval(this.refresh(), 50000);
        this.scroll();
    },
    components: {Post}
}
</script>

