<script setup>
import { f7 } from 'framework7-vue';
import MainLayout from '../components/layout/main-layout.vue';
import NatureIllustration from '../assets/nature-illustration.svg';

const currentPage = 'home';

// Redirection to other Page
const goToPage = (route) => {
    const animate = window.innerWidth <= 1023;
    f7.views.main.router.navigate(route, {
        animate: animate,
    });
};
</script>

<template>
    <MainLayout :currentPage="currentPage">
        <!-- Welcome Box -->
        <div class="bg-white rounded-xl app-shadow flex justify-between h-40 p-10">
            <div class="space-y-2">
                <h3 class="text-2xl font-normal text-gray-700">Hi <span class="font-bold">Ariel
                        Batoon</span>,</h3>
                <p class="text-gray-700 text-xl">Welcome back! 👋</p>
            </div>
            <div class="w-20">
                <img :src="NatureIllustration" />
            </div>
        </div>

        <h3 class="mt-10 mb-2 text-gray-300 text-xl font-medium">
            Get To Know
        </h3>

        <!-- CTA Boxes -->
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
                        class="text-yellow-500 font-medium">"Learn more"</span> to understand more.
                </p>
                <f7-button color="yellow" large tonal round>Learn more</f7-button>
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
                        class="text-red-500 font-medium">"Learn more"</span> to understand more.
                </p>
                <f7-button color="red" large tonal round>Learn more</f7-button>
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
                        class="text-orange-500 font-medium">"Learn more"</span> to understand more.
                </p>
                <br>
                <f7-button color="orange" large tonal round>Learn more</f7-button>
            </div>
        </div>

        <h3 class="mt-12 mb-2 text-gray-300 text-xl font-medium">
            Administrative
        </h3>
        <!-- For Rescuer -->
        <div class="grid grid-cols-1 mb-20">
            <!-- Asking for help table -->
            <div class="bg-white rounded-xl h-72 w-full p-6 text-center app-shadow flex flex-col items-center">
                <div class="flex flex-col items-center mb-4">
                    <svg class="w-12 h-12 bg-purple-500 text-white rounded-full p-2" aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                            d="M11 9h6m-6 3h6m-6 3h6M6.996 9h.01m-.01 3h.01m-.01 3h.01M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z" />
                    </svg>
                </div>
                <h3 class="text-purple-500 font-bold text-xl mb-4">Manage Emergency</h3>
                <p class="text-gray-600 mb-7 w-full lg:w-1/2">Manage the upcoming and ongoing emergency. Click <span
                        class="text-purple-500 font-medium">"Go to Emergency"</span> to check the list.
                </p>
                <f7-button @click="goToPage('/emergency')" color="purple" large tonal round class="w-full lg:w-1/6">Go to Emergency</f7-button>
            </div>
        </div>
    </MainLayout>
</template>