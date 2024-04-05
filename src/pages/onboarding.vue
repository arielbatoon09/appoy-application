<script setup>
import { f7 } from 'framework7-vue';
import { ref, onMounted } from 'vue';
import useCookies from 'vue-cookies';
import AppoyLogoWhite from '../assets/appoy-logo-official-white.png';

const onboardingStatus = ref(true);

// Redirection to other Page
const goToPage = (route) => {
    const animate = window.innerWidth <= 1023;
    f7.views.main.router.navigate(route, {
        animate: animate,
    });

    // Set the cookies upon clicking "Get Started"
    setOnboardingStatus();
};

// Set Cookies for Onboarding
const setOnboardingStatus = () => {
    const currentDate = new Date();
    const expirationDate = new Date(currentDate.getTime() + 7 * 24 * 60 * 60 * 1000);
    const expires = expirationDate.toUTCString();
    useCookies.set('completedOnboarding', onboardingStatus.value, expires);
};

</script>

<template>
    <f7-page name="onboarding" class="bg-clr-primary">
        <!-- Main Background -->
        <div class="bg-clr-primary h-[60vh]">
            <div class="test flex flex-col items-center justify-center h-[60vh]">
                <div class="w-32 object-cover overflow-hidden">
                    <img class="w-full object-cover h-full" :src="AppoyLogoWhite" alt="Appoy" />
                </div>
                <h3 class="text-white mt-4 font-medium text-lg">Be safe any time any where</h3>
            </div>
        </div>

        <!-- Tooltip -->
        <div class="bg-white h-[40vh] rounded-t-[2rem]">
            <f7-tabs swipeable>
                <!-- Slide 1 -->
                <f7-tab id="slide-1" tab-active>
                    <div class="flex flex-col items-center px-6">
                        <!-- Info -->
                        <div class="text-center mt-10">
                            <h3 class="text-gray-700 text-2xl font-bold mb-2">Emergency Rescue</h3>
                            <p class="text-gray-600 text-base">Ask for help conveniently.</p>
                        </div>
                        <!-- Slide Indicator -->
                        <div class="flex gap-2 mt-5">
                            <span class="bg-clr-primary w-6 h-2 rounded-full"></span>
                            <span class="bg-gray-300 w-6 h-2 rounded-full"></span>
                            <span class="bg-gray-300 w-6 h-2 rounded-full"></span>
                        </div>
                        <!-- Action Button -->
                        <div class="w-full lg:w-1/6 mt-12">
                            <f7-button tab-link="#slide-2" large tonal round>Next</f7-button>
                        </div>

                        <p class="mt-2 text-sm text-gray-500">Version 1.0.0</p>
                    </div>
                </f7-tab>
                <!-- Slide 2 -->
                <f7-tab id="slide-2">
                    <div class="flex flex-col items-center px-6">
                        <!-- Info -->
                        <div class="text-center mt-10">
                            <h3 class="text-gray-700 text-2xl font-bold mb-2">Emergency Rescue 2</h3>
                            <p class="text-gray-600 text-base">Ask for help conveniently 2.</p>
                        </div>
                        <!-- Slide Indicator -->
                        <div class="flex gap-2 mt-5">
                            <span class="bg-gray-300 w-6 h-2 rounded-full"></span>
                            <span class="bg-clr-primary w-6 h-2 rounded-full"></span>
                            <span class="bg-gray-300 w-6 h-2 rounded-full"></span>
                        </div>
                        <!-- Action Button -->
                        <div class="w-full lg:w-1/6 mt-12">
                            <f7-button tab-link="#slide-3" large tonal round>Next</f7-button>
                        </div>

                        <p class="mt-2 text-sm text-gray-500">Version 1.0.0</p>
                    </div>
                </f7-tab>
                <!-- Slide 3 -->
                <f7-tab id="slide-3">
                    <div class="flex flex-col items-center px-6">
                        <!-- Info -->
                        <div class="text-center mt-10">
                            <h3 class="text-gray-700 text-2xl font-bold mb-2">Emergency Rescue 3</h3>
                            <p class="text-gray-600 text-base">Ask for help conveniently 3.</p>
                        </div>
                        <!-- Slide Indicator -->
                        <div class="flex gap-2 mt-5">
                            <span class="bg-gray-300 w-6 h-2 rounded-full"></span>
                            <span class="bg-gray-300 w-6 h-2 rounded-full"></span>
                            <span class="bg-clr-primary w-6 h-2 rounded-full"></span>
                        </div>
                        <!-- Action Button -->
                        <div class="w-full lg:w-1/6 mt-12">
                            <f7-button @click="goToPage('/login')" large tonal round>Get Started</f7-button>
                        </div>

                        <p class="mt-2 text-sm text-gray-500">Version 1.0.0</p>
                    </div>
                </f7-tab>
            </f7-tabs>
        </div>
    </f7-page>
</template>