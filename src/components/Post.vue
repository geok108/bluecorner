<template>
    <div>
        <div v-for="post in posts" v-bind:key="post.url">
            <a :href="post.url">{{post.title}}</a><br/> 
        </div>
    </div>
</template>
<script>
import Vue from 'vue'

export default {
}
</script>
