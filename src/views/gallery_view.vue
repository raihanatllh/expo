<template>
    <div class="gallery">
      <Navbar />
        <div class="h-20 pt-28">
    <Gallery />
    <Footer />
  </div>
  </div>
  </template>
  
  <script>
       import Navbar from "../components/navbar.vue";
       import Gallery from "../components/gallery.vue";
       import Footer from "../components/footer.vue";
    export default {
        name: 'gallery',
        components: {Navbar,Gallery,Footer},
    };
  </script>