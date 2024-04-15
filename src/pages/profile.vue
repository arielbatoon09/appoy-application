<script setup>
import { f7 } from 'framework7-vue';
import { ref, onMounted } from 'vue';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebase';
import { useAuthStore } from '../js/store/auth.store';
import MainLayout from '../components/layout/main-layout.vue';

const currentPage = 'profile';
const authStore = useAuthStore();
const toastWithButton = ref(null);
const isRequest = ref(false);
const userData = ref({});

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

const isLoggedState = () => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            userData.value = user ;
        }
    });
};

onMounted(() => {
    isLoggedState();
});
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
                        <p class="font-medium text-7xl" v-if="userData && userData.displayName">{{ userData.displayName.charAt(0) }}</p>
                    </div>
                    <h5 class="font-bold text-2xl text-gray-700 mt-5">{{ userData.displayName }}</h5>
                    <p class="text-base text-gray-600 font-medium mb-7">{{ userData.email }}</p>
                    <f7-button preloader :loading="isRequest" @click="handleLogout" fill class="w-full lg:w-1/2">Logout</f7-button>
                </div>
            </div>
        </div>
    </MainLayout>
</template>