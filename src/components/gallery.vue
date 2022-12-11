<template>
     <!-- start gallery -->
    <div class=" pt-16 justify-center p-10 pb-20">
      <route-link to="/detail-karya" v-for="i in 9" :key="i">
      <gallery_row :gallery="{
        image: '',
      }">
      </gallery_row>
      </route-link> 
    </div>
          <!-- end gallery -->
  </template>
  
  <script>
  import gallery_row from './gallery_db.vue';
  export default {
    components: {gallery_row}
  }
  </script>
  