<script setup>
import { f7 } from 'framework7-vue';
import { ref, onMounted } from 'vue';
import { onAuthStateChanged } from "firebase/auth";
import { auth, database } from '../firebase';
import { collection, query, serverTimestamp, addDoc, where, doc, updateDoc, orderBy, onSnapshot } from "firebase/firestore";

const db = database;
const unreadNotificationsCount = ref(0); 

const isLoggedState = () => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            getUnreadNotif(user);
        }
    });
};

const getUnreadNotif = (userData) => {
    try {
        const queryCollection = query(
            collection(db, "notification"),
            where('to', '==', userData.displayName),
            where('is_read', '==', false),
            orderBy("created_at", "desc")
        );

        onSnapshot(queryCollection, (querySnapshot) => {
            const listData = [];

            querySnapshot.forEach((item) => {
                const list = {
                    id: item.id,
                    uid: item.data().uid,
                    sender: item.data().sender,
                    to: item.data().to,
                    is_read: item.data().is_read,
                };
                listData.push(list);
            });

            unreadNotificationsCount.value = listData.length;
        });
    } catch (error) {
        console.error("System Error: ", error);
    }
};

const props = defineProps({
    currentPage: String
});

// Redirection to other Page
const goToPage = (route) => {
    f7.views.main.router.navigate(route, {
        animate: false,
    });
};

// Function to check if the page is active
const isPageActive = (pageName) => {
    return props.currentPage === pageName;
};

onMounted(() => {
    isLoggedState();
});
</script>

<template>
    <div class="lg:hidden fixed -bottom-1 left-0 w-full bg-white text-center app-shadow z-50 border-t-2 border-gray-100">
        <div class="grid grid-cols-4">
            <f7-button @click="goToPage('/dashboard')" :tonal="isPageActive('home')" class="flex flex-col items-center py-1.5 h-auto">
                <svg class="w-[28px] h-[28px]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
                    height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                        d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5" />
                </svg>
                <span class="-mt-2">Home</span>
            </f7-button>
            <f7-button @click="goToPage('/help')" :tonal="isPageActive('help')" class="flex flex-col items-center py-1.5 h-auto">
                <svg class="w-[28px] h-[28px]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
                    height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                        d="M18.427 14.768 17.2 13.542a1.733 1.733 0 0 0-2.45 0l-.613.613a1.732 1.732 0 0 1-2.45 0l-1.838-1.84a1.735 1.735 0 0 1 0-2.452l.612-.613a1.735 1.735 0 0 0 0-2.452L9.237 5.572a1.6 1.6 0 0 0-2.45 0c-3.223 3.2-1.702 6.896 1.519 10.117 3.22 3.221 6.914 4.745 10.12 1.535a1.601 1.601 0 0 0 0-2.456Z" />
                </svg>
                <span class="-mt-2">Ask Help</span>
            </f7-button>
            <f7-button @click="goToPage('/notification')" :tonal="isPageActive('notification')" class="flex flex-col items-center py-1.5 h-auto relative">
                <svg class="w-[28px] h-[28px]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
                    height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                        d="M12 5.365V3m0 2.365a5.338 5.338 0 0 1 5.133 5.368v1.8c0 2.386 1.867 2.982 1.867 4.175 0 .593 0 1.292-.538 1.292H5.538C5 18 5 17.301 5 16.708c0-1.193 1.867-1.789 1.867-4.175v-1.8A5.338 5.338 0 0 1 12 5.365ZM8.733 18c.094.852.306 1.54.944 2.112a3.48 3.48 0 0 0 4.646 0c.638-.572 1.236-1.26 1.33-2.112h-6.92Z" />
                </svg>
                <span class="-mt-2">Notification</span>
                <div class="absolute top-1 right-5 bg-gray-100 text-gray-700 rounded-full w-5 h-5 text-center font-medium">
                    <span class="relative -top-2">{{ unreadNotificationsCount }}</span>
                </div>
            </f7-button>
            <f7-button @click="goToPage('/profile')" :tonal="isPageActive('profile')" class="flex flex-col items-center py-1.5 h-auto">
                <svg class="w-[28px] h-[28px]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
                    height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-width="1.5"
                        d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
                <span class="-mt-2">Profile</span>
            </f7-button>
        </div>
    </div>
</template>