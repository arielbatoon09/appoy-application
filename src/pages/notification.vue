<script setup>
import MainLayout from '../components/layout/main-layout.vue';

const currentPage = 'notification';

</script>

<template>
    <MainLayout :currentPage="currentPage">
        <div class="space-y-7 mb-20">
            <div>
                <h2 class="text-xl font-normal text-gray-500">Appoy</h2>
                <h3 class="text-3xl text-gray-800 font-bold">Notifications</h3>
            </div>


        </div>
    </MainLayout>
</template>