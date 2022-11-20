<template>
    <nav class="navbar navbar-expand-lg navbar-light" id="mainNav">
            <div class="container px-4 px-lg-5">
                <router-link class="navbar-brand" :to="{path:'/'}">CAGENEWS.LIVE</router-link>
                <!-- <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i class="fas fa-bars"></i>
                </button> -->
                
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ms-auto py-4 py-lg-0">
                        <!-- <li class="nav-item"><a class="nav-link px-lg-3 py-3 py-lg-4" href="index.html">Home</a></li>
                        <li class="nav-item"><a class="nav-link px-lg-3 py-3 py-lg-4" href="about.html">About</a></li>
                        <li class="nav-item"><a class="nav-link px-lg-3 py-3 py-lg-4" href="post.html">Sample Post</a></li>
                        <li class="nav-item"><a class="nav-link px-lg-3 py-3 py-lg-4" href="contact.html">Contact</a></li> -->
                    </ul>
                </div>
                <div id = "intro" style="color: white;">
                    <span>{{ timestamp }}</span>
                </div>
            </div>
        </nav>
</template>

<script>
export default {   
    data: () => ({
        timestamp: ""
    }),
    
    methods: {
        getNow: function() {
            const today = new Date();
            const date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
            const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
            const dateTime = date +' '+ time;
            this.timestamp = dateTime;
        }
    },
    mounted(){
        setInterval(this.getNow, 1000);
    },
    name: 'MainMenu'
}

</script>