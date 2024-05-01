<script setup>
import { f7 } from 'framework7-vue';
import { ref } from 'vue';
import { useAuthStore } from '../js/store/auth.store';
import AppoyLogo from '../assets/appoy-logo-official.png';

const authStore = useAuthStore();
const toastWithButton = ref(null);
const isModalOpen = ref(false);
const isRequest = ref(false);

const props = defineProps({
    userData: Object,
});

const handleLogout = async () => {
    isRequest.value = true;
    const response = await authStore.logout();
    isRequest.value = false;

    console.log(response);

    // Success response
    if (response.code === 200) {
        // Show the toast
        if (!toastWithButton.value) {
            toastWithButton.value = f7.toast.create({
                text: response.message,
                closeButton: true,
                closeButtonText: 'Okay',
                closeButtonColor: 'green',
                closeTimeout: 3000,
            });
        }

        // Open the toast
        toastWithButton.value.open();

        // Redirect the user to dashboard page
        goToPage('/login')
    }
};

// Redirection to other Page
const goToPage = (route) => {
    const animate = window.innerWidth <= 1023;
    f7.views.main.router.navigate(route, {
        animate: animate,
    });
};

const toggleModal = () => {
    isModalOpen.value = !isModalOpen.value;
};

</script>
<template>
    <header
        class="transition-shadow flex flex-col w-full box-border flex-shrink-0 fixed z-50 top-0 right-0 text-white bg-white app-shadow">
        <div class="relative flex items-center justify-between py-2 px-5 lg:px-10 text-gray-600 min-h-[70px]">
            <div class="w-12 h-full">
                <img :src="AppoyLogo" />
            </div>

            <!-- Profile Settings -->
            <div @click="toggleModal"
                class="cursor-pointer flex items-center gap-3 hover:bg-gray-100 p-2 rounded-lg transition delay-75">
                <div class="bg-yellow-800 text-white rounded-full w-10 h-10 flex flex-col justify-center items-center">
                    <p class="font-medium text-xl" v-if="props.userData && props.userData.displayName">{{ props.userData.displayName.charAt(0) }}</p>
                </div>
                <div class="hidden lg:flex">
                    <h4 class="text-base text-gray-500">Hi, <span class="text-gray-700 font-bold">{{ props.userData.displayName }}</span>
                    </h4>
                    <svg class="w-[24px] h-[24px] text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                        width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                            d="m8 10 4 4 4-4" />
                    </svg>
                </div>
            </div>

            <!-- Modal Profile Dropdown -->
            <div v-if="isModalOpen"
                class="absolute bg-white w-[350px] lg:w-[370px] h-[250px] p-6 right-4 top-20 rounded-xl app-shadow"
                :class="{ 'transition-opacity duration-300 ease-in-out': isModalOpen }">
                <h2 class="text-gray-400 font-medium text-lg mb-4">User Profile</h2>
                <div @click="goToPage('/profile'), toggleModal()"
                    class="cursor-pointer flex items-center hover:bg-gray-100 gap-3 mb-4 rounded-lg delay-75 border-b p-2">
                    <div
                        class="bg-yellow-800 text-white rounded-full w-16 h-16 flex flex-col justify-center items-center shrink-0">
                        <p class="font-medium text-4xl" v-if="props.userData && props.userData.displayName">{{ props.userData.displayName.charAt(0) }}</p>
                    </div>
                    <div class="truncate">
                        <h4 class="text-lg text-gray-600 font-medium whitespace-nowrap truncate">{{ props.userData.displayName }}</h4>
                        <p class="text-gray-400 font-normal text-base whitespace-nowrap truncate">{{ props.userData.email }}</p>
                    </div>
                </div>
                <f7-button preloader :loading="isRequest" @click="handleLogout" fill>
                    Logout
                </f7-button>
            </div>
        </div>
    </header>
</template>