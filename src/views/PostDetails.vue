<template>
<div style="text-align:left;">
        <h1>{{post.title}}</h1>

    <p class="post-meta" style="font-size: 0.75rem;"> 
         <b-img :src="post.sourceLogo" width="50px"/>
    {{post.publishDatetime}}</p>
    <div v-html=post.description>
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
        return{post:{}}
    },    
    mounted(){
        this.post = {};
        console.log("loading post..");
        let postId = this.$route.params.slug;
        const apiUrl = process.env.VUE_APP_CAGENEWSAPI + "/posts/";
        Vue.axios.get(apiUrl + postId, {
            })  
            .then((resp)=>{
                this.post=resp.data.post;
                console.log('POST:',this.post);
                console.log(resp.data);
        });
    },
}
</script>

