<template>
    <div class="list-group list-group-item-action border-bottom">
        <a :href="url" class="list-group-item-action">
         <!-- <b-img :src=image height="100px" width="250px"></b-img> -->
<br/>
             <h3 class="text-lg-left font-weight-bold">{{title}}</h3>
             
        </a>
            
        <div class="d-flex justify-content-end">
            <div class="p-2 font-weight-bold">{{source}}</div>
            <div class="p-2 text-muted">{{publishDatetime}}</div>
        </div>

    </div> 
</template>
<script>

export default {
    props : ['url', 'title', 'publishDatetime', 'image', 'source']
}
</script>
