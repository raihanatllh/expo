<template>
    <div class="dimensi">
        <Navbar />
        <div class="h-20 pt-28">
        <Dimensi />
        <Footer />
    </div>
    </div>
  </template>

  <script>
     import Navbar from "../components/navbar.vue";
     import Dimensi from "../components/peminatan/3D.vue";
     import Footer from "../components/footer.vue";
    export default{
    name: "dimensi",
    components: {Navbar, Dimensi, Footer}
};
</script>