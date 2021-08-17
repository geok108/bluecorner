<template>
    <a :href="url" class="list-group-item-action">
        <b-row>
            <b-col cols="4">
                <b-img :src=image style="object-fit:cover;
                    width:200px;
                    height:100px;"></b-img>
            </b-col>
            <b-col>
                <h5 class="text-lg-left font-weight-bold">{{title}}</h5>                                               
                <div class="d-flex justify-content-end" style="font-size:0.75rem;">
                    <div class="p-2 font-weight-bold">{{source}}</div>
                    <div class="p-2 text-muted">{{publishDatetime}}</div>
                </div>
            </b-col>
        </b-row>
        <hr/>
    </a>
</template>
<script>

export default {
    props : ['url', 'title', 'publishDatetime', 'image', 'source']
}
</script>
