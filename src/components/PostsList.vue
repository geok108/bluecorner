<template>
      <div class="container">
            <div class="row gx-4 gx-lg-5 justify-content-center" style="text-align: left; margin-right:-20%;">
                <div class="col-md-10 col-lg-10 col-xl-10">
    <b-list-group v-for="post in posts" v-bind:key="post.url">
    
        <!-- Post preview-->
        <Post :url=post.url :title=post.title :description=post.description :publishDatetime=post.publishDatetime :image=post.image :source=post.source></Post>
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
        forceRerender(){},
        scroll () {
            window.onscroll = () => {
                let bottomOfWindow = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop) + window.innerHeight  === document.documentElement.offsetHeight

                if (bottomOfWindow) {
                    this.loadMore();
                }
            }
        }
    },
    name: "PostsList",
    mounted(){
        this.loadMore();
        this.timer = setInterval(this.loadMore, 10000);
        this.scroll();
        let recaptchaScript = document.createElement('script')
          recaptchaScript.setAttribute('src', 'https://platform.twitter.com/widgets.js')
          document.head.appendChild(recaptchaScript)
    },
    components: {Post}
}
</script>

