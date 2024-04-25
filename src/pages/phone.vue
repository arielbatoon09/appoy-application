<script setup>
import { f7 } from 'framework7-vue';
import { ref, onMounted } from 'vue';
import { auth, database } from '../firebase';
import { onAuthStateChanged } from "firebase/auth";
import { collection, addDoc, query, where, getDocs, doc, updateDoc, serverTimestamp, onSnapshot } from "firebase/firestore";
import MainLayout from '../components/layout/main-layout.vue';

const currentPage = 'profile';
const db = database;
const error = ref(null);
const isRequest = ref(false);
const userData = ref({});
const PhoneNumber = ref(null);

const isLoggedState = () => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            userData.value = user;
        }
    });
};

const handlePhoneNumber = async () => {
    try {
        if (!PhoneNumber.value) return;

        const numbersRegex = /^[0-9]+$/;
        const phoneNumber = PhoneNumber.value.trim();
        if (!numbersRegex.test(phoneNumber) || phoneNumber.length !== 11) {
            error.value = 'Enter 11-digit phone number';
            return;
        }

        const phoneQuery = query(collection(db, 'phone'), where('uid', '==', userData.value.uid));
        const phoneSnapshot = await getDocs(phoneQuery);

        if (!phoneSnapshot.empty) {
            // If a document with the uid exists, update it
            const phoneDoc = phoneSnapshot.docs[0]; // Assuming there's only one document per uid
            await updateDoc(phoneDoc.ref, {
                phoneNumber: PhoneNumber.value,
                updated_at: serverTimestamp()
            });

            const toast = f7.toast.create({
                text: `Successfully updated phone number.`,
                closeButton: true,
                closeButtonText: 'Okay',
                closeButtonColor: 'green',
                closeTimeout: 3000,
            });
            toast.open()
            goToPage('/profile');

        } else {
            // If no document with the uid exists, add a new document
            await addDoc(collection(db, 'phone'), {
                uid: userData.value.uid,
                phoneNumber: PhoneNumber.value,
                created_at: serverTimestamp()
            });

            const toast = f7.toast.create({
                text: `Successfully added phone number.`,
                closeButton: true,
                closeButtonText: 'Okay',
                closeButtonColor: 'green',
                closeTimeout: 3000,
            });
            toast.open()
            goToPage('/profile');
        }
    } catch (error) {
        console.error("Error System: ", error);
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
                <h3 class="text-3xl text-gray-800 font-bold">Phone Number</h3>
            </div>

            <div class="bg-white p-5 h-[270px] rounded-2xl app-shadow">
                <h4 class="font-semibold text-xl text-gray-700">Update Phone Number</h4>
                <p @click="goToPage('/profile')"
                    class="cursor-pointer mb-7 text-gray-700 hover:underline flex items-center mt-2">
                    <svg class="w-[18px] h-[18px]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
                        height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                            d="m15 19-7-7 7-7" />
                    </svg>
                    <span>Back to Profile</span>
                </p>
                <div class="flex flex-col -ml-3">
                    <f7-list class="my-0 w-full lg:w-1/2">
                        <f7-list-input v-model:value="PhoneNumber" :error-message="error" error-message-force outline label="Phone Number" floating-label
                            type="email" placeholder="Your 11-digit phone number" clear-button>
                            <template #media>
                                <svg class="w-[24px] h-[24px] text-gray-700" aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                    viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="1.5"
                                        d="M18.427 14.768 17.2 13.542a1.733 1.733 0 0 0-2.45 0l-.613.613a1.732 1.732 0 0 1-2.45 0l-1.838-1.84a1.735 1.735 0 0 1 0-2.452l.612-.613a1.735 1.735 0 0 0 0-2.452L9.237 5.572a1.6 1.6 0 0 0-2.45 0c-3.223 3.2-1.702 6.896 1.519 10.117 3.22 3.221 6.914 4.745 10.12 1.535a1.601 1.601 0 0 0 0-2.456Z" />
                                </svg>

                            </template>
                        </f7-list-input>
                    </f7-list>
                    <f7-button preloader :loading="isRequest" @click="handlePhoneNumber" fill large
                        class="w-1/2 md:w-1/6 ml-4 mt-2">Update</f7-button>
                </div>
            </div>
        </div>
    </MainLayout>
</template>