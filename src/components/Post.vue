<template>
    <!-- <a :href="url" class="list-group-item-action">
        <b-row>
            <b-col cols="4">
                <b-img :src=image style="object-fit:cover;
                    width:200px;
                    height:100px;"></b-img>
            </b-col>
            <b-col>
                <h3 class="text-lg-left font-weight-bold">{{title}}</h3>                                               
                   
            <b-row align-h="start">
                <b-col cols="4"><h5>{{source}}</h5></b-col>
                <b-col cols="4"><h6>{{publishDatetime}}</h6></b-col>                   
            </b-row> 
            </b-col>
        </b-row>
      
        <hr/>
    </a> -->

     
    <!-- Post preview-->
    <div class="row">
        <div class="col-lg-3 col-md-3 col-5">
            <router-link :to="{path:slug}">

            <b-img class="post-img-size" :src=image style="object-fit:cover;
                    width:14vh;
                    height:9vh;"></b-img>
            </router-link>

        </div>
        <div class="col-lg-9 col-md-9 col-7 post-preview">
            <router-link :to="{path:slug}">
            <h2 class="post-title">{{title}}</h2>
        </router-link>
        <p class="post-meta" style="font-size: 0.75rem;font-style: italic;">
                <b-img :src="sourceLogo" width="50px"/>
            {{publishDatetime}}
        </p>
        </div>
         <!-- <h3 class="post-subtitle">{{description}}</h3> -->

       
    </div>
                
</template>
<script>
export default {
    props : ['url', 'title', 'description', 'publishDatetime', 'image', 'source', 'sourceUrl', 'sourceLogo', 'slug'],
}
</script>
