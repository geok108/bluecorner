<template>
<div>
    <h1>{{post.title}}</h1>
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
        Vue.axios.get("http://localhost:8080/posts/" + postId, {
            })  
            .then((resp)=>{
                this.post=resp.data.post;
                console.log('POST:',this.post);
                console.log(resp.data);
        });
    },
}
</script>

