<template>
    <div class="home">
        <Navbar />
        <div class="h-20 pt-28">
        <Programing />
        <Footer />
    </div>
    </div>
</template>

<script>
    import Navbar from "../components/navbar.vue";
    import Programing from "../components/peminatan/programing.vue";
    import Footer from "../components/footer.vue";
    export default {
        name: 'home',
        components: {Navbar, Programing, Footer},
    };
</script>