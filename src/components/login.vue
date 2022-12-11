<template>
    <div class="min-h-screen flex flex-none  w-auto">
        <div class="w-9/12  bg-slate-600 bottom-0">
            <div class="absolute bottom-5 pl-20 ">
                <!-- edit img -->
                <img class="w-72 h-40 " src="../components/assets/logoipsum-288 1.svg" alt="">
            </div>
        </div>
        <div class="w-3/5 bg-white">
            <div class="flex justify-center items-center pt-48">
                <form action="">
                    <div class="space-y-8">
                        <div class="flex items-center text-xl font-sans">
                            <!-- input email -->
                            <input type="email" name="Email" id="username" placeholder="Email" class="appearance-none  bg-slate-300 h-14 w-96 outline-none pl-5 ">
                        </div>
                        <div class="flex items-center">
                            <!-- input password -->
                            <input type="password" name="Password" id="password" placeholder="********" class="appearance-none  bg-slate-300 h-14 w-96 pl-5">
                        </div>
                        <div class="flex items-center justify-center pt-14">
                            <!-- tombol -->
                            <router-link to="/sidebar" custom v-slot="{ navigate }">
                                <button type="submit" @click="navigate" role="link" class="bg-slate-300 h-14 w-96 text-xl font-bold">LOGIN</button>
                             </router-link>
                        </div>   
                    </div>
                </form>
            </div> 
        </div>
    </div>
</template>
