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
    <div class="post-preview">
        <a :href="url">
            <h2 class="post-title">{{title}}</h2>
            <!-- <h3 class="post-subtitle">{{description}}</h3> -->

        </a>
        <p class="post-meta">
            <a :href="sourceUrl">
                <b-img :src="sourceLogo" width="50px"/>
            </a>
            | {{publishDatetime}}
        </p>
    </div>
                
</template>
<script>

export default {
    props : ['url', 'title', 'description', 'publishDatetime', 'image', 'source', 'sourceUrl', 'sourceLogo']
}
</script>
