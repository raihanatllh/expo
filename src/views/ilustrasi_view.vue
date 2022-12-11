<template>
    <div class="ilustrasi">
        <Navbar />
        <div class="h-20 pt-28">
    <Ilustrasi />
    <Footer />
</div>
</div>
</template>

<script>
       import Navbar from "../components/navbar.vue";
       import Ilustrasi from "../components/peminatan/ilustrasi.vue";
       import Footer from "../components/footer.vue";
    export default {
        name: 'ilustrasi',
        components: {Navbar,Ilustrasi,Footer},
    };
</script>