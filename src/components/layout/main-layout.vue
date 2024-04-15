<script setup>
import { f7 } from 'framework7-vue';
import { ref, onMounted } from 'vue';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../../firebase';
import Header from '../header.vue';
import Sidebar from '../sidebar.vue';
import MobileMenu from '../menu.vue';

const userData = ref({});

const props = defineProps({
  currentPage: String
});

const isLoggedState = () => {
    onAuthStateChanged(auth, (user) => {
        if (!user) {
            goToPage('/login');
        } else {
            userData.value = user;
        }
    });
};

// Redirection to other Page
const goToPage = (route) => {
    const animate = window.innerWidth <= 1023;
    f7.views.main.router.navigate(route, {
        animate: animate,
    });
};

onMounted(() => {
    isLoggedState();
});
</script>

<template>
    <f7-page name="main-page" class="bg-gray-50">
        <div class="flex min-h-screen overflow-hidden w-full">
            <!-- Header -->
            <Header :userData="userData" />

            <!-- Desktop Sidebar -->
            <Sidebar :currentPage="props.currentPage" />

            <!-- Container -->
            <div class="flex flex-1 overflow-hidden">
                <div class="w-full mx-auto box-border block max-w-screen-xl pt-20 pr-15 pl-15 lg:pl-80">
                    <!-- Content -->
                    <div style="min-height: calc(-170px + 100vh)">
                        <slot />
                    </div>
                </div>
            </div>

            <!-- Mobile Menu -->
            <MobileMenu :currentPage="props.currentPage" />
        </div>
    </f7-page>
</template>