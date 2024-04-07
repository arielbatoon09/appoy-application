<script setup>
import Header from '../header.vue';
import Sidebar from '../sidebar.vue';
import MobileMenu from '../menu.vue';

const props = defineProps({
  currentPage: String
});

</script>

<template>
    <f7-page name="main-page" class="bg-gray-50">
        <div class="flex min-h-screen overflow-hidden w-full">
            <!-- Header -->
            <Header />

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
            <MobileMenu />
        </div>
    </f7-page>
</template>