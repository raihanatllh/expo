<template>
    <div class="detail-karya">
        <Navbar />
        <div class="h-20 pt-28">
    <Detail_karya />
    <Footer />
</div>
</div>
</template>

<script>
       import Navbar from "../components/navbar.vue";
       import Detail_karya from "../components/detail_karya.vue";
       import Footer from "../components/footer.vue";
    export default {
        name: 'detail-karya',
        components: {Navbar,Detail_karya,Footer},
    };
</script>