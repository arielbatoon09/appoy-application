<script setup>
import { f7 } from 'framework7-vue';
import WelcomeIllustration from '../assets/welcome-illustration.svg';
import AppoyLogo from '../assets/appoy-logo-official.png';

// Redirection to other Page
const goToPage = (route) => {
    const animate = window.innerWidth <= 1023;
    f7.views.main.router.navigate(route, {
        animate: animate,
    });
};
</script>

<template>
    <f7-page name="signup">
        <div class="flex h-screen">
            <!-- Left Panel -->
            <div class="hidden lg:flex items-center justify-center flex-1 bg-white text-black">
                <div class="max-w-md">
                    <img class="w-full h-full" :src="WelcomeIllustration" />
                </div>
            </div>

            <!-- Right Panel -->
            <div class="w-full bg-white lg:bg-gray-50 lg:w-1/2 flex items-center justify-center -mt-14 lg:mt-0">
                <div class="max-w-md w-full p-6">
                    <div class="flex flex-col items-center">
                        <img class="w-20" :src="AppoyLogo" />
                    </div>
                    <f7-block class="mt-3">
                        <h2 class="text-3xl font-semibold text-black text-center mb-3">Welcome to Appoy</h2>
                        <h3 class="text-base text-gray-500 text-center">New to Appoy?
                            <span @click="goToPage('/signup')"
                                class="text-clr-primary hover:underline font-medium cursor-pointer">Create an
                                account</span>
                        </h3>
                    </f7-block>
                    <form class="space-y-4">
                        <f7-list>
                            <f7-list-input outline label="Phone" floating-label type="tel"
                                placeholder="Your phone number" clear-button>
                                <template #media>
                                    <svg class="w-[24px] h-[24px] text-gray-700" aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                        viewBox="0 0 24 24">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                            stroke-width="1.5"
                                            d="M6 15h12M6 6h12m-6 12h.01M7 21h10a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1Z" />
                                    </svg>
                                </template>
                            </f7-list-input>

                            <f7-list-input outline label="Password" floating-label type="password"
                                placeholder="Your password" clear-button>
                                <template #media>
                                    <svg class="w-[24px] h-[24px] text-gray-700" aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                        viewBox="0 0 24 24">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                            stroke-width="1.5"
                                            d="M12 14v3m-3-6V7a3 3 0 1 1 6 0v4m-8 0h10a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1Z" />
                                    </svg>
                                </template>
                            </f7-list-input>

                            <f7-list-item>
                                <f7-button class="w-full" fill large>Login</f7-button>
                            </f7-list-item>
                        </f7-list>
                    </form>
                </div>
            </div>
        </div>
    </f7-page>
</template>