<template>
    <!-- Navbar start -->
    <div class="flex max-w-screen bg-white justify-between">
        <!-- Right menu -->
            <ul class="flex flex-row  gap-x-7 ml-14 my-9 text-xl font-semibold">
                <li>
                    <RouterLink to="/programing">Programming</RouterLink>
                </li>
                <li>
                    <RouterLink to="/3D">3D</RouterLink>
                </li>
                <li>
                    <RouterLink to="/ilustrasi">Ilustrasi</RouterLink>
                </li>
                <li>
                    <RouterLink to="/presentasi">Presentasi</RouterLink>
                </li>
            </ul>
           <!-- LOGO -->
                <img class="h-16 my-5" src="../components/assets/logoipsum-288 1.svg" alt="">
        <!-- Left menu -->
            <ul class="flex flex-row gap-x-7 mr-16 my-9 text-xl font-semibold">
                <li>
                    <RouterLink to="/about">About</RouterLink>
                </li>
                <li>
                    <RouterLink to="/gallery">Gallery</RouterLink>
                </li>
                <li>
                    <RouterLink to="/login">Login</RouterLink>
                </li>
            </ul>
    </div>
    <!-- navbar end -->
</template>