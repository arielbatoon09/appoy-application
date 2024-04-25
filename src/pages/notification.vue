<script setup>
import { f7 } from 'framework7-vue';
import { ref, onMounted, computed } from 'vue';
import { onAuthStateChanged } from "firebase/auth";
import { auth, database } from '../firebase';
import { collection, query, serverTimestamp, addDoc, where, doc, updateDoc, orderBy, onSnapshot } from "firebase/firestore";
import MainLayout from '../components/layout/main-layout.vue';

const currentPage = 'notification';
const data = ref({});
const userData = ref({});
const db = database;
const filterType = ref('all');
const isLoading = ref(false);

const isLoggedState = () => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            renderData(user);
            userData.value = user;
        }
    });
};

const renderData = (user) => {
    try {
        isLoading.value = true;
        const queryCollection = query(
            collection(db, "notification"),
            where('to', '==', user.displayName),
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
                    message: item.data().message,
                    is_read: item.data().is_read,
                    created_at: item.data().created_at ? getTimeAgoString(item.data().created_at) : 'Loading...',
                };
                listData.push(list);
            });

            data.value = listData;
            isLoading.value = false;
        });

    } catch (error) {
        console.error("System Error: ", error);
    }
};

const filteredData = computed(() => {
    switch (filterType.value) {
        case 'all':
            return data.value;
        case 'unread':
            return data.value.filter(notification => !notification.is_read);
        default:
            return data.value;
    }
});

const getNotificationMessage = (message) => {
    switch (message) {
        case 'Request':
            return 'is requesting for an assistance.';
        case 'Accepted':
            return 'rescuer is on the way.';
        case 'Rejected':
            return 'rejected your request. Kindly check your phone number.';
        case 'Completed':
            return 'rescuer completed the rescue. Stay safe always!'
        default:
            return '';
    }
};

const updateIsRead = async (id) => {
    try {
        const docRef = doc(db, "notification", id);
        
        await updateDoc(docRef, {
            is_read: true,
        });

        if (userData.value.email === 'admin@appoy.com') {
            goToPage('/emergency');
            return;
        }

    } catch (error) {
        console.error("System Error: ", error);
    }
};

const getTimeAgoString = (createdAt) => {
    const currentTime = new Date();
    const createdTime = new Date(createdAt.toDate());

    const timeDifferenceInSeconds = Math.floor((currentTime - createdTime) / 1000);

    if (timeDifferenceInSeconds < 60) {
        return `${timeDifferenceInSeconds} seconds ago`;
    } else if (timeDifferenceInSeconds < 3600) {
        const minutes = Math.floor(timeDifferenceInSeconds / 60);
        return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    } else if (timeDifferenceInSeconds < 86400) {
        const hours = Math.floor(timeDifferenceInSeconds / 3600);
        return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    } else {
        const days = Math.floor(timeDifferenceInSeconds / 86400);
        return `${days} day${days > 1 ? 's' : ''} ago`;
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
                <h3 class="text-3xl text-gray-800 font-bold">Notifications</h3>
            </div>

            <div class="bg-white p-4 rounded-xl app-shadow">
                <!-- Filter Tag -->
                <div class="flex gap-2 mb-7">
                    <f7-button fill tonal class="text-clr-primary" @click="filterType = 'all'">All</f7-button>
                    <f7-button class="text-gray-700" @click="filterType = 'unread'">Unread</f7-button>
                </div>

                <!-- Notification List -->
                <div v-if="data.length > 0" v-for="notif in filteredData" :key="notif.id"
                    :class="notif.is_read ? 'hover:bg-gray-100' : 'bg-red-50 hover:bg-red-100 delay-75 transition'"
                    class="cursor-pointer flex items-center justify-between rounded-lg py-2 px-4 mb-2"
                    @click="updateIsRead(notif.id)">
                    <div class="flex items-center gap-4">
                        <!-- Icons -->
                        <div class="bg-red-100 p-2 rounded-full">
                            <svg class="w-[32px] h-[32px] text-red-500" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                viewBox="0 0 24 24">
                                <path
                                    d="M11.209 3.816a1 1 0 0 0-1.966.368l.325 1.74a5.338 5.338 0 0 0-2.8 5.762l.276 1.473.055.296c.258 1.374-.228 2.262-.63 2.998-.285.52-.527.964-.437 1.449.11.586.22 1.173.75 1.074l12.7-2.377c.528-.1.418-.685.308-1.27-.103-.564-.636-1.123-1.195-1.711-.606-.636-1.243-1.306-1.404-2.051-.233-1.085-.275-1.387-.303-1.587-.009-.063-.016-.117-.028-.182a5.338 5.338 0 0 0-5.353-4.39l-.298-1.592Z" />
                                <path fill-rule="evenodd"
                                    d="M6.539 4.278a1 1 0 0 1 .07 1.412c-1.115 1.23-1.705 2.605-1.83 4.26a1 1 0 0 1-1.995-.15c.16-2.099.929-3.893 2.342-5.453a1 1 0 0 1 1.413-.069Z"
                                    clip-rule="evenodd" />
                                <path d="M8.95 19.7c.7.8 1.7 1.3 2.8 1.3 1.6 0 2.9-1.1 3.3-2.5l-6.1 1.2Z" />
                            </svg>
                        </div>
                        <div>
                            <h3 class="text-gray-700">
                                <span class="font-semibold">{{ notif.sender }}</span>
                                {{ getNotificationMessage(notif.message) }}
                            </h3>
                            <p class="text-gray-500">{{ notif.created_at }}</p>
                        </div>
                    </div>

                    <!-- Status Indicator -->
                    <div v-show="!notif.is_read" class="relative flex h-2 w-2">
                        <span
                            class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                        <span class="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                    </div>
                </div>
                <div class="text-center">
                    <p v-show="isLoading" class="text-gray-600">Loading...</p>
                    <p v-show="data.length <= 0" class="text-gray-600">No Notification Found</p>
                </div>
            </div>
        </div>
    </MainLayout>
</template>