<script setup>
import { ref, computed } from 'vue';
import MainLayout from '../components/layout/main-layout.vue';

const currentPage = 'help';
const coordinates = ref(null);

const getCoordinates = () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                coordinates.value = `${position.coords.latitude},${position.coords.longitude}`;
            },
            (error) => {
                console.error('Error getting geolocation:', error);
            },
            { enableHighAccuracy: true }
        );
    } else {
        alert('Geolocation is not supported by this browser.');
    }
};

const googleMapLink = computed(() => {
    if (coordinates.value) {
        return `https://www.google.com/maps?q=${coordinates.value}`;
    } else {
        return null;
    }
});
</script>

<template>
    <MainLayout :currentPage="currentPage">
        <div class="space-y-7 mb-20">
            <div>
                <h2 class="text-xl font-normal text-gray-500">Appoy</h2>
                <h3 class="text-3xl text-gray-800 font-bold">Ask for help</h3>
            </div>

            <!-- Action for Help -->
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-10">
                <!-- Learn more: Growth Stage -->
                <div class="bg-white rounded-xl h-74 w-full p-6 text-center app-shadow">
                    <div class="flex flex-col items-center mb-4">
                        <svg class="w-12 h-12 bg-yellow-500 text-white rounded-full p-2" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                            viewBox="0 0 24 24">
                            <path
                                d="M8.597 3.2A1 1 0 0 0 7.04 4.289a3.49 3.49 0 0 1 .057 1.795 3.448 3.448 0 0 1-.84 1.575.999.999 0 0 0-.077.094c-.596.817-3.96 5.6-.941 10.762l.03.049a7.73 7.73 0 0 0 2.917 2.602 7.617 7.617 0 0 0 3.772.829 8.06 8.06 0 0 0 3.986-.975 8.185 8.185 0 0 0 3.04-2.864c1.301-2.2 1.184-4.556.588-6.441-.583-1.848-1.68-3.414-2.607-4.102a1 1 0 0 0-1.594.757c-.067 1.431-.363 2.551-.794 3.431-.222-2.407-1.127-4.196-2.224-5.524-1.147-1.39-2.564-2.3-3.323-2.788a8.487 8.487 0 0 1-.432-.287Z" />
                        </svg>
                    </div>
                    <h3 class="text-yellow-500 font-bold text-xl mb-4">Growth Stage</h3>
                    <p class="text-gray-600 mb-7">Fire has just started and is relatively small. Click <span
                            class="text-yellow-500 font-medium">"Ask Help"</span> to ask help.
                    </p>
                    <br>
                    <f7-button @click="getCoordinates" color="yellow" large tonal round>Ask Help</f7-button>
                </div>
                <!-- Learn more: Fully Developed Stage -->
                <div class="bg-white rounded-xl h-74 w-full p-6 text-center app-shadow">
                    <div class="flex flex-col items-center mb-4">
                        <svg class="w-12 h-12 bg-red-500 text-white rounded-full p-2" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                            viewBox="0 0 24 24">
                            <path
                                d="M8.597 3.2A1 1 0 0 0 7.04 4.289a3.49 3.49 0 0 1 .057 1.795 3.448 3.448 0 0 1-.84 1.575.999.999 0 0 0-.077.094c-.596.817-3.96 5.6-.941 10.762l.03.049a7.73 7.73 0 0 0 2.917 2.602 7.617 7.617 0 0 0 3.772.829 8.06 8.06 0 0 0 3.986-.975 8.185 8.185 0 0 0 3.04-2.864c1.301-2.2 1.184-4.556.588-6.441-.583-1.848-1.68-3.414-2.607-4.102a1 1 0 0 0-1.594.757c-.067 1.431-.363 2.551-.794 3.431-.222-2.407-1.127-4.196-2.224-5.524-1.147-1.39-2.564-2.3-3.323-2.788a8.487 8.487 0 0 1-.432-.287Z" />
                        </svg>
                    </div>
                    <h3 class="text-red-500 font-bold text-xl mb-4">Fully Developed Stage</h3>
                    <p class="text-gray-600 mb-7">The fire has already consumed an entire room and place. Click <span
                            class="text-red-500 font-medium">"Ask Help"</span> to ask help.
                    </p>
                    <f7-button @click="getCoordinates" color="red" large tonal round>Ask Help</f7-button>
                </div>
                <!-- Learn more: Decay Stage -->
                <div class="bg-white rounded-xl h-74 w-full p-6 text-center app-shadow">
                    <div class="flex flex-col items-center mb-4">
                        <svg class="w-12 h-12 bg-orange-500 text-white rounded-full p-2" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                            viewBox="0 0 24 24">
                            <path
                                d="M8.597 3.2A1 1 0 0 0 7.04 4.289a3.49 3.49 0 0 1 .057 1.795 3.448 3.448 0 0 1-.84 1.575.999.999 0 0 0-.077.094c-.596.817-3.96 5.6-.941 10.762l.03.049a7.73 7.73 0 0 0 2.917 2.602 7.617 7.617 0 0 0 3.772.829 8.06 8.06 0 0 0 3.986-.975 8.185 8.185 0 0 0 3.04-2.864c1.301-2.2 1.184-4.556.588-6.441-.583-1.848-1.68-3.414-2.607-4.102a1 1 0 0 0-1.594.757c-.067 1.431-.363 2.551-.794 3.431-.222-2.407-1.127-4.196-2.224-5.524-1.147-1.39-2.564-2.3-3.323-2.788a8.487 8.487 0 0 1-.432-.287Z" />
                        </svg>
                    </div>
                    <h3 class="text-orange-500 font-bold text-xl mb-4">Decay Stage</h3>
                    <p class="text-gray-600 mb-7">The fire is starting to lessen. Click <span
                            class="text-orange-500 font-medium">"Ask Help"</span> to ask help.
                    </p>
                    <br>
                    <f7-button @click="getCoordinates" color="orange" large tonal round>Ask Help</f7-button>
                </div>
            </div>

            <p v-if="coordinates">Coordinates: {{ coordinates }}</p>
            <f7-link v-if="coordinates" :href="googleMapLink" external>{{ googleMapLink }}</f7-link>
        </div>
    </MainLayout>
</template>