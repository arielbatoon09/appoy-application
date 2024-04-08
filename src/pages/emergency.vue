<script setup>
import MainLayout from '../components/layout/main-layout.vue';

const currentPage = 'emergency';

</script>

<template>
    <MainLayout :currentPage="currentPage">
        <div class="space-y-7 mb-20">
            <div>
                <h2 class="text-xl font-normal text-gray-500">Appoy</h2>
                <h3 class="text-3xl text-gray-800 font-bold">Manage Emergency</h3>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
                <div class="bg-white rounded-xl w-full p-6 app-shadow h-auto lg:h-[15rem]">
                    <div class="flex items-center gap-3 mb-4">
                        <div
                            class="bg-yellow-800 text-white rounded-full w-12 h-12 flex flex-col justify-center items-center">
                            <p class="font-medium text-xl">A</p>
                        </div>
                        <div>
                            <h4 class="text-xl text-gray-700 font-bold">Ariel Batoon</h4>
                            <p class="text-gray-500 font-medium text-base">0912345678</p>
                        </div>
                    </div>
                    <!-- Fire Stage Status -->
                    <p class="text-yellow-500 flex items-center text-base mb-2">
                        <svg class="w-6 h-6 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
                            height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path
                                d="M8.597 3.2A1 1 0 0 0 7.04 4.289a3.49 3.49 0 0 1 .057 1.795 3.448 3.448 0 0 1-.84 1.575.999.999 0 0 0-.077.094c-.596.817-3.96 5.6-.941 10.762l.03.049a7.73 7.73 0 0 0 2.917 2.602 7.617 7.617 0 0 0 3.772.829 8.06 8.06 0 0 0 3.986-.975 8.185 8.185 0 0 0 3.04-2.864c1.301-2.2 1.184-4.556.588-6.441-.583-1.848-1.68-3.414-2.607-4.102a1 1 0 0 0-1.594.757c-.067 1.431-.363 2.551-.794 3.431-.222-2.407-1.127-4.196-2.224-5.524-1.147-1.39-2.564-2.3-3.323-2.788a8.487 8.487 0 0 1-.432-.287Z" />
                        </svg>
                        <span class="font-semibold mr-1">Stage:</span> Growth Stage
                    </p>
                    <!-- Google Map Coordinates Link -->
                    <f7-link class="text-green-500 text-base" href="#">
                        <svg class="w-[24px] h-[24px] mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                            width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="1.5" d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="1.5"
                                d="M17.8 13.938h-.011a7 7 0 1 0-11.464.144h-.016l.14.171c.1.127.2.251.3.371L12 21l5.13-6.248c.194-.209.374-.429.54-.659l.13-.155Z" />
                        </svg>
                        <span class="hover:underline">View Google Map</span>
                    </f7-link>

                    <!-- Action Button -->
                    <div class="flex gap-2 mt-4">
                        <f7-button tonal color="blue" class="rounded-full">
                            <svg class="w-[24px] h-[24px]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="1.5" d="M5 11.917 9.724 16.5 19 7.5" />
                            </svg>
                        </f7-button>
                        <f7-button tonal color="red" class="rounded-full">
                            <svg class="w-[24px] h-[24px]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="1.5"
                                    d="M17 13c-.889.086-1.416.543-2.156 1.057a22.322 22.322 0 0 0-3.958 5.084 1.6 1.6 0 0 1-.582.628 1.549 1.549 0 0 1-1.466.087 1.587 1.587 0 0 1-.537-.406 1.666 1.666 0 0 1-.384-1.279l1.389-4.114M17 13h3V6.5A1.5 1.5 0 0 0 18.5 5v0A1.5 1.5 0 0 0 17 6.5V13Zm-6.5 1H5.585c-.286 0-.372-.014-.626-.15a1.797 1.797 0 0 1-.637-.572 1.873 1.873 0 0 1-.215-1.673l2.098-6.4C6.462 4.48 6.632 4 7.88 4c2.302 0 4.79.943 6.67 1.475" />
                            </svg>
                        </f7-button>
                    </div>
                </div>

                <div class="bg-white rounded-xl w-full p-6 app-shadow h-auto lg:h-[15rem]">
                    <div class="flex items-center gap-3 mb-4">
                        <div
                            class="bg-yellow-800 text-white rounded-full w-12 h-12 flex flex-col justify-center items-center">
                            <p class="font-medium text-xl">A</p>
                        </div>
                        <div>
                            <h4 class="text-xl text-gray-700 font-bold">Ariel Batoon</h4>
                            <p class="text-gray-500 font-medium text-base">0912345678</p>
                        </div>
                    </div>
                    <!-- Fire Stage Status -->
                    <p class="text-red-500 flex items-center text-base mb-2">
                        <svg class="w-6 h-6 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
                            height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path
                                d="M8.597 3.2A1 1 0 0 0 7.04 4.289a3.49 3.49 0 0 1 .057 1.795 3.448 3.448 0 0 1-.84 1.575.999.999 0 0 0-.077.094c-.596.817-3.96 5.6-.941 10.762l.03.049a7.73 7.73 0 0 0 2.917 2.602 7.617 7.617 0 0 0 3.772.829 8.06 8.06 0 0 0 3.986-.975 8.185 8.185 0 0 0 3.04-2.864c1.301-2.2 1.184-4.556.588-6.441-.583-1.848-1.68-3.414-2.607-4.102a1 1 0 0 0-1.594.757c-.067 1.431-.363 2.551-.794 3.431-.222-2.407-1.127-4.196-2.224-5.524-1.147-1.39-2.564-2.3-3.323-2.788a8.487 8.487 0 0 1-.432-.287Z" />
                        </svg>
                        <span class="font-semibold mr-1">Stage:</span> Fully Developed Stage
                    </p>
                    <!-- Google Map Coordinates Link -->
                    <f7-link class="text-green-500 text-base" href="#">
                        <svg class="w-[24px] h-[24px] mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                            width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="1.5" d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="1.5"
                                d="M17.8 13.938h-.011a7 7 0 1 0-11.464.144h-.016l.14.171c.1.127.2.251.3.371L12 21l5.13-6.248c.194-.209.374-.429.54-.659l.13-.155Z" />
                        </svg>
                        <span class="hover:underline">View Google Map</span>
                    </f7-link>

                    <!-- Action Button -->
                    <div class="flex items-center gap-2 mt-7">
                        <span class="relative flex h-3 w-3 ml-1.5">
                            <span
                                class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                            <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                        </span>
                        <p class="text-sky-500 text-base"><span class="font-semibold mr-1">Status:</span>On-going</p>
                    </div>
                </div>
            </div>
        </div>
    </MainLayout>
</template>