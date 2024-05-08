<script setup>
import { f7 } from 'framework7-vue';
import { ref, onMounted } from 'vue';
import { onAuthStateChanged } from "firebase/auth";
import { auth, database } from '../firebase';
import { collection, query, doc, addDoc, updateDoc, orderBy, onSnapshot, serverTimestamp } from "firebase/firestore";
import MainLayout from '../components/layout/main-layout.vue';

const currentPage = 'emergency';
const data = ref({});
const userData = ref({});
const db = database;
const isLoading = ref(false);

const isLoggedState = () => {
    const animate = window.innerWidth <= 1023;
    onAuthStateChanged(auth, (user) => {
        if (user) {
            userData.value = user;

            if (user.email !== 'admin@appoy.com') {
                f7.views.main.router.navigate('/dashboard', {
                    animate: animate,
                });
            }
        }
    });
};

const renderData = async () => {
    try {
        isLoading.value = true;
        const queryCollection = query(
            collection(db, "help"),
            orderBy("created_at", "desc")
        );

        onSnapshot(queryCollection, (querySnapshot) => {
            const listData = [];

            querySnapshot.forEach((item) => {
                const list = {
                    id: item.id,
                    fullname: item.data().fullname,
                    googleMap: item.data().googleMap,
                    phone: item.data().phone,
                    stage: item.data().stage,
                    status: item.data().status,
                    created_at: item.data().created_at,
                };
                listData.push(list);
            });

            data.value = listData;
            console.log(data.value);
            isLoading.value = false;
        });


    } catch (error) {
        console.error("System Error: ", error);
    }
};

const updateStatus = async (HelpId, status) => {
    try {
        const docRef = doc(db, "help", HelpId);

        await updateDoc(docRef, {
            status: status
        });

        const toast = f7.toast.create({
            text: `${status} the request.`,
            closeButton: true,
            closeButtonText: 'Okay',
            closeButtonColor: `${status === 'Accepted' ? 'green' : 'red'}`,
            closeTimeout: 3000,
        });

        // Open the toast
        toast.open();

    } catch (error) {
        console.error("System Error: ", error);
    }
};

const completedStatus = async (HelpId) => {
    try {
        const docRef = doc(db, "help", HelpId);

        await updateDoc(docRef, {
            status: 'Completed'
        });

        const toast = f7.toast.create({
            text: `Marked as completed`,
            closeButton: true,
            closeButtonText: 'Okay',
            closeButtonColor: 'green',
            closeTimeout: 3000,
        });

        // Open the toast
        toast.open();

    } catch (error) {
        console.error("System Error: ", error);
    }
};

const triggerNotification = async (HelpName, status) => {
    try {
        // Process Data
        await addDoc(collection(db, 'notification'), {
            uid: userData.value.uid,
            sender: userData.value.displayName,
            to: HelpName,
            message: status,
            is_read: false,
            created_at: serverTimestamp(),
        });

    } catch (error) {
        return { code: 400, status: 'error', message: error.message };
    }
};

// Stage Color
const getStageColor = (stage) => {
    switch (stage) {
        case 'Growth Stage':
            return 'text-yellow-500';
        case 'Fully Developed Stage':
            return 'text-red-500';
        case 'Decay Stage':
            return 'text-orange-500';
        default:
            return '';
    }
};

onMounted(() => {
    isLoggedState();
    renderData();
});

</script>

<template>
    <MainLayout :currentPage="currentPage">
        <div class="space-y-7 mb-20">
            <div>
                <h2 class="text-xl font-normal text-gray-500">Appoy</h2>
                <h3 class="text-3xl text-gray-800 font-bold">Manage Emergency</h3>

                <p class="text-base bg-blue-50 p-2 rounded-lg flex items-center gap-1 mt-5">
                    <svg class="w-[24px] h-[24px] text-blue-700 shrink-0" aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                            d="M9 9a3 3 0 0 1 3-3m-2 15h4m0-3c0-4.1 4-4.9 4-9A6 6 0 1 0 6 9c0 4 4 5 4 9h4Z" />
                    </svg>
                    <span class="text-gray-600"><strong>Reminder:</strong> Make sure to make a follow-up call before
                        accepting the
                        request.</span>
                </p>
            </div>

            <!-- Data -->
            <div v-if="data.length > 0" class="grid grid-cols-1 lg:grid-cols-3 gap-4">
                <div v-for="help in data" :key="help.id"
                    class="bg-white rounded-xl w-full p-6 app-shadow h-auto lg:h-[15rem]">
                    <div class="flex items-center gap-3 mb-4">
                        <div
                            class="bg-yellow-800 text-white rounded-full w-12 h-12 flex flex-col justify-center items-center shrink-0">
                            <p class="font-medium text-xl" v-if="help.fullname">{{ help.fullname.charAt(0) }}</p>
                        </div>
                        <div>
                            <h4 class="text-sm text-gray-700 font-bold truncate whitespace-nowrap">{{ help.fullname }}</h4>
                            <f7-link :href="`${'tel:'+help.phone}`" external class="text-gray-500 font-medium text-sm hover:underline">{{ help.phone ? help.phone : 'N/A' }}</f7-link>
                        </div>
                    </div>
                    <!-- Fire Stage Status -->
                    <p :class="getStageColor(help.stage)" class="flex items-center text-sm mb-2">
                        <svg class="w-6 h-6 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
                            height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path
                                d="M8.597 3.2A1 1 0 0 0 7.04 4.289a3.49 3.49 0 0 1 .057 1.795 3.448 3.448 0 0 1-.84 1.575.999.999 0 0 0-.077.094c-.596.817-3.96 5.6-.941 10.762l.03.049a7.73 7.73 0 0 0 2.917 2.602 7.617 7.617 0 0 0 3.772.829 8.06 8.06 0 0 0 3.986-.975 8.185 8.185 0 0 0 3.04-2.864c1.301-2.2 1.184-4.556.588-6.441-.583-1.848-1.68-3.414-2.607-4.102a1 1 0 0 0-1.594.757c-.067 1.431-.363 2.551-.794 3.431-.222-2.407-1.127-4.196-2.224-5.524-1.147-1.39-2.564-2.3-3.323-2.788a8.487 8.487 0 0 1-.432-.287Z" />
                        </svg>
                        <span class="font-semibold mr-1">Stage:</span> {{ help.stage }}
                    </p>
                    <!-- Google Map Coordinates Link -->
                    <f7-link class="text-green-500 text-sm" external :href="help.googleMap">
                        <svg class="w-[24px] h-[24px] mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                            width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="1.5" d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="1.5"
                                d="M17.8 13.938h-.011a7 7 0 1 0-11.464.144h-.016l.14.171c.1.127.2.251.3.371L12 21l5.13-6.248c.194-.209.374-.429.54-.659l.13-.155Z" />
                        </svg>
                        <span class="hover:underline">View Google Map</span>
                    </f7-link>

                    <!-- Action Button -->
                    <div v-if="help.status === 'Pending'" class="flex gap-2 mt-4">
                        <f7-button
                            @click="updateStatus(help.id, 'Accepted'), triggerNotification(help.fullname, 'Accepted')"
                            tonal color="blue" class="rounded-full">
                            <svg class="w-[24px] h-[24px]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="1.5" d="M5 11.917 9.724 16.5 19 7.5" />
                            </svg>
                        </f7-button>
                        <f7-button
                            @click="updateStatus(help.id, 'Rejected'), triggerNotification(help.fullname, 'Rejected')"
                            tonal color="red" class="rounded-full">
                            <svg class="w-[24px] h-[24px]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="1.5"
                                    d="M17 13c-.889.086-1.416.543-2.156 1.057a22.322 22.322 0 0 0-3.958 5.084 1.6 1.6 0 0 1-.582.628 1.549 1.549 0 0 1-1.466.087 1.587 1.587 0 0 1-.537-.406 1.666 1.666 0 0 1-.384-1.279l1.389-4.114M17 13h3V6.5A1.5 1.5 0 0 0 18.5 5v0A1.5 1.5 0 0 0 17 6.5V13Zm-6.5 1H5.585c-.286 0-.372-.014-.626-.15a1.797 1.797 0 0 1-.637-.572 1.873 1.873 0 0 1-.215-1.673l2.098-6.4C6.462 4.48 6.632 4 7.88 4c2.302 0 4.79.943 6.67 1.475" />
                            </svg>
                        </f7-button>
                    </div>

                    <!-- Status-mark -->
                    <div v-else class="mt-7">
                        <p @click="completedStatus(help.id), triggerNotification(help.fullname, 'Completed')"
                            v-if="help.status === 'Accepted'"
                            class="cursor-pointer hover:underline text-green-700 font-bold flex items-center">
                            <svg class="w-[24px] h-[24px]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="1.5" d="M5 11.917 9.724 16.5 19 7.5" />
                            </svg>
                            <span>Mark as Completed</span>
                        </p>

                        <p v-if="help.status === 'Completed'" class="text-green-700 font-bold flex items-center">
                            <svg class="w-[24px] h-[24px] mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="1.5" d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                            <span>Completed</span>
                        </p>

                        <p v-if="help.status === 'Rejected'" class="text-red-700 font-bold flex items-center">
                            <svg class="w-[24px] h-[24px]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="1.5" d="M6 18 17.94 6M18 18 6.06 6" />
                            </svg>
                            <span>Rejected</span>
                        </p>
                    </div>
                </div>
            </div>

            <!-- Loading -->
            <div class="flex flex-col items-center pt-40 gap-4">
                <f7-preloader v-show="isLoading" />
                <p v-show="isLoading" class="text-base font-medium text-gray-600">Loading...</p>
                <p v-show="data.length <= 0" class="text-lg font-medium text-gray-600">No Data Found</p>
            </div>
        </div>
    </MainLayout>
</template>