<script setup>
import { f7 } from 'framework7-vue';
import { ref, onMounted } from 'vue';
import { auth, database } from '../firebase';
import { onAuthStateChanged } from "firebase/auth";
import { collection, addDoc, query, where, getDocs, doc, updateDoc, serverTimestamp, onSnapshot } from "firebase/firestore";
import { useAuthStore } from '../js/store/auth.store';
import MainLayout from '../components/layout/main-layout.vue';

const currentPage = 'profile';
const db = database;
const authStore = useAuthStore();
const toastWithButton = ref(null);
const isRequest = ref(false);
const userData = ref({});
const PhoneNumber = ref(null);

const isLoggedState = () => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            userData.value = user ;
            renderPhoneData(user);
        }
    });
};

const renderPhoneData = async (user) => {
    try {
        const queryCollection = query(
            collection(db, "phone"),
            where("uid", "==", user.uid)
        );

        onSnapshot(queryCollection, (querySnapshot) => {
            querySnapshot.forEach((doc) => {
                PhoneNumber.value = doc.data().phoneNumber;
            });
        });
        
    } catch (error) {
        console.error("Error System: ", error);
    }
};

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
    }
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
    <MainLayout :currentPage="currentPage">
        <div class="space-y-7 mb-20">
            <div>
                <h2 class="text-xl font-normal text-gray-500">Appoy</h2>
                <h3 class="text-3xl text-gray-800 font-bold">Settings</h3>
            </div>

            <div class="bg-white p-5 h-[490px] rounded-2xl app-shadow">
                <h4 class="font-semibold text-xl text-gray-700 mb-12">Profile</h4>
                <div class="flex flex-col items-center">
                    <div
                        class="bg-yellow-800 text-white rounded-full w-44 h-44 flex flex-col justify-center items-center">
                        <p class="font-medium text-7xl" v-if="userData && userData.displayName">{{
                            userData.displayName.charAt(0) }}</p>
                    </div>
                    <h5 class="font-bold text-2xl text-gray-700 mt-5">{{ userData.displayName }}</h5>
                    <p class="text-base text-gray-600 font-medium">{{ userData.email }}</p>
                    <div class="my-4 text-center">
                        <p class="text-gray-700 font-medium">{{ PhoneNumber ? PhoneNumber : 'No Phone Number' }}</p>
                        <p @click="goToPage('/phone')" class="cursor-pointer text-gray-700 font-medium hover:underline flex items-center gap-1 mt-1">
                            <svg class="w-[18px] h-[18px] text-gray-700" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="1.5"
                                    d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z" />
                            </svg>
                            Update Phone Number
                        </p>
                    </div>
                    <f7-button preloader :loading="isRequest" @click="handleLogout" fill
                        class="w-full lg:w-1/2">Logout</f7-button>
                </div>
            </div>
        </div>
    </MainLayout>
</template>