<template>
    <div class="presentasi">
        <Navbar />
        <div class="h-20 pt-28">
        <Presentasi />
        <Footer />
    </div>
    </div>
</template>

<script>
    import Navbar from "../components/navbar.vue";
    import Presentasi from "../components/peminatan/presentasi.vue";
    import Footer from "../components/footer.vue";
    export default {
        name: 'presentasi',
        components: {Navbar,Presentasi, Footer},
    };
</script>