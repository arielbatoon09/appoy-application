<script setup>
import MainLayout from '../components/layout/main-layout.vue';

const currentPage = 'emergency';

</script>

<template>
    <MainLayout :currentPage="currentPage">
        <div>Emergency List</div>
    </MainLayout>
</template>