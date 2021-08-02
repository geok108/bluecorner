<template>
    <b-list-group-item :href="url" class="flex-column align-items-start">
        <div class="d-flex w-100 justify-content-between">
         <b-img :src=image height="100px" width="250px"></b-img>

             <h5 class="mb-1">{{title}}</h5>
            <small>{{publishDatetime}}</small>
        </div>
         <br/>
      
    </b-list-group-item>       
</template>
<script>

export default {
    props : ['url', 'title', 'publishDatetime', 'image']
}
</script>
