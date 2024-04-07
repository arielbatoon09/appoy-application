<script setup>
import AppoyLogo from '../assets/appoy-logo-official.png';

</script>
<template>
    <header
        class="transition-shadow flex flex-col w-full box-border flex-shrink-0 fixed z-50 top-0 right-0 text-white bg-white app-shadow">
        <div class="relative flex items-center justify-between py-2 px-5 lg:px-10 text-gray-600 min-h-[70px]">
            <div class="w-12 h-full">
                <img :src="AppoyLogo" />
            </div>

            <!-- Profile Settings -->
            <div class="cursor-pointer flex items-center gap-3 hover:bg-gray-100 p-2 rounded-lg transition delay-75">
                <div class="bg-yellow-800 text-white rounded-full w-10 h-10 flex flex-col justify-center items-center">
                    <p class="font-medium text-xl">A</p>
                </div>
                <div class="hidden lg:flex">
                    <h4 class="text-base text-gray-500">Hi, <span class="text-gray-700 font-bold">Ariel Batoon</span></h4>
                    <svg class="w-[24px] h-[24px] text-gray-700" aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                            d="m8 10 4 4 4-4" />
                    </svg>
                </div>
            </div>
        </div>
    </header>
</template>