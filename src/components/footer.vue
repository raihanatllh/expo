<template>
      <!-- footer -->
      <footer class="bg-slate-400 py-8">
    <!-- flex container -->
    <div class="container flex flex-col-reverse justify-between px-6 mx-auto space-y-7 md:flex-row md:space-y-0">
        <!-- logo and sosial links container -->
        <div class="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start">
            <!-- logo -->
            <img src="./assets/logoipsum-288 1.svg" alt="" class="w-60 pt-10">
        
        </div>
        <!-- list container -->
        <div class="flex justify-around gap-x-36 pr-10">
            <div class="flex flex-col space-y-3 text-black">
                <p class="font-semibold"><router-link to="/programing">Programming</router-link></p>
                <p class="font-semibold"><router-link to="/3D">3D</router-link></p>
                <p class="font-semibold"><router-link to="/ilustrasi">Ilustrasi</router-link></p>
                <p class="font-semibold"><router-link to="/presentasi">Presentasi</router-link></p>
            </div>
            <div class="flex flex-col space-y-3 text-black">
                <p class="font-semibold"><router-link to="/about">About</router-link></p>
                <p class="font-semibold"><router-link to="/">Gallery</router-link></p>
                <p class="font-semibold"><router-link to="/login">Login</router-link></p>
            </div>
        </div>
    </div>
  </footer>
</template>

<script>

</script>