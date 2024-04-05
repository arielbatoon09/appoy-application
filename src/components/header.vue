<script setup>
import AppoyLogo from '../assets/appoy-logo-official.png';

</script>
<template>
    <header class="transition-shadow flex flex-col w-full box-border flex-shrink-0 fixed z-50 top-0 right-0 text-white bg-white app-shadow">
        <div class="relative flex items-center justify-between py-2 px-10 text-gray-600 min-h-[70px]">
            <div class="w-12 h-full">
                <img :src="AppoyLogo" />
            </div>

            <!-- Profile Settings -->
            <div>
                Profile
            </div>
        </div>
    </header>
</template>