<script setup>
import MainLayout from '../components/layout/main-layout.vue';

const currentPage = 'profile';

</script>

<template>
    <MainLayout :currentPage="currentPage">
        <div class="space-y-7 mb-20">
            <div>
                <h2 class="text-xl font-normal text-gray-500">Appoy</h2>
                <h3 class="text-3xl text-gray-800 font-bold">Settings</h3>
            </div>

            <div class="bg-white p-5 h-[450px] rounded-2xl app-shadow">
                <h4 class="font-semibold text-xl text-gray-700 mb-12">Profile</h4>
                <div class="flex flex-col items-center">
                    <div
                        class="bg-yellow-800 text-white rounded-full w-44 h-44 flex flex-col justify-center items-center">
                        <p class="font-medium text-7xl">A</p>
                    </div>
                    <h5 class="font-bold text-2xl text-gray-700 mt-5">Ariel Batoon</h5>
                    <p class="text-base text-gray-600 font-medium mb-7">09310367164</p>
                    <f7-button fill class="w-full lg:w-1/2">Logout</f7-button>
                </div>
            </div>
        </div>
    </MainLayout>
</template>