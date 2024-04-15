<script setup>
import { f7 } from 'framework7-vue';
import { ref, onMounted } from 'vue';
import { useAuthStore } from '../js/store/auth.store';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebase';
import WelcomeIllustration from '../assets/welcome-illustration.svg';
import AppoyLogo from '../assets/appoy-logo-official.png';

const authStore = useAuthStore();
const toastWithButton = ref(null);
const isRequest = ref(false);
const showPassword = ref(false);

const FormData = ref({
    fullname: null,
    email: null,
    password: null,
    terms: false,
});

const errorMsg = ref({
    fullname: null,
    email: null,
    password: null,
    terms: null,
});

// Handle Signup functionality
const handleSignUp = async () => {
    isRequest.value = true;
    const response = await authStore.signup(FormData.value);
    isRequest.value = false;

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

        // Redirect the user to login page
        goToPage('/login')

    }

    // Null Error
    errorMsg.value.fullname = null;
    errorMsg.value.email = null;
    errorMsg.value.password = null;

    // Switch Case for Error Message
    switch (response.source) {
        case 'fullname':
            errorMsg.value.fullname = response.message;
            break;
        case 'email':
            errorMsg.value.email = response.message;
            break;
        case 'password':
            errorMsg.value.password = response.message;
            break;
        case 'terms':
            errorMsg.value.fullname = response.message;
            errorMsg.value.email = response.message;
            errorMsg.value.password = response.message;
            break;
    }
};

const isLoggedState = () => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            goToPage('/dashboard');
        }
    });
};

const togglePasswordVisibility = () => {
    showPassword.value = !showPassword.value;
};

const toggleTermsCheckbox = () => {
    FormData.value.terms = !FormData.value.terms;
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
                        <h3 class="text-base text-gray-500 text-center">Already have an accout?
                            <span @click="goToPage('/login')"
                                class="text-clr-primary hover:underline font-medium cursor-pointer">Login</span>
                        </h3>
                    </f7-block>
                    <form class="space-y-4">
                        <f7-list>
                            <!-- Full Name -->
                            <f7-list-input v-model:value="FormData.fullname" :error-message="errorMsg.fullname"
                                error-message-force outline label="Full Name" floating-label type="text"
                                placeholder="Your name" clear-button>
                                <template #media>
                                    <svg class="w-[24px] h-[24px] text-gray-700" aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                        viewBox="0 0 24 24">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                            stroke-width="1.5"
                                            d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a8.949 8.949 0 0 0 4.951-1.488A3.987 3.987 0 0 0 13 16h-2a3.987 3.987 0 0 0-3.951 3.512A8.948 8.948 0 0 0 12 21Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    </svg>
                                </template>
                            </f7-list-input>

                            <!-- Email -->
                            <f7-list-input v-model:value="FormData.email" :error-message="errorMsg.email"
                                error-message-force outline label="Email" floating-label type="email"
                                placeholder="Your email address" clear-button>
                                <template #media>
                                    <svg class="w-[24px] h-[24px] text-gray-700" aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                        viewBox="0 0 24 24">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-width="1.5"
                                            d="m3.5 5.5 7.893 6.036a1 1 0 0 0 1.214 0L20.5 5.5M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z" />
                                    </svg>
                                </template>
                            </f7-list-input>

                            <!-- Password -->
                            <f7-list-input v-model:value="FormData.password" :error-message="errorMsg.password"
                                error-message-force outline label="Password" floating-label
                                :type="showPassword ? 'text' : 'password'" placeholder="Your password" clear-button>
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

                            <!-- Show password -->
                            <f7-list-item class="-mt-4" v-show="FormData.password">
                                <p @click="togglePasswordVisibility"
                                    class="cursor-pointer hover:underline text-gray-700 flex items-center text-sm text-clr-primary gap-2">
                                    <!-- On -->
                                    <svg v-if="!showPassword" class="w-[16px] h-[16px]" aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                        viewBox="0 0 24 24">
                                        <path stroke="currentColor" stroke-width="1.5"
                                            d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z" />
                                        <path stroke="currentColor" stroke-width="1.5"
                                            d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    </svg>
                                    <!-- Off -->
                                    <svg v-else class="w-[16px] h-[16px]" aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                        viewBox="0 0 24 24">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                            stroke-width="1.5"
                                            d="M3.933 13.909A4.357 4.357 0 0 1 3 12c0-1 4-6 9-6m7.6 3.8A5.068 5.068 0 0 1 21 12c0 1-3 6-9 6-.314 0-.62-.014-.918-.04M5 19 19 5m-4 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    </svg>
                                    <span>{{ !showPassword ? 'Show' : 'Hide' }} Password</span>
                                </p>
                            </f7-list-item>

                            <f7-list-item @click="toggleTermsCheckbox" checkbox
                                title="Agree on our Terms and Conditions." name="demo-checkbox"></f7-list-item>

                            <f7-list-item>
                                <f7-button preloader :loading="isRequest" @click="handleSignUp" class="w-full" fill
                                    large>Sign up</f7-button>
                            </f7-list-item>
                        </f7-list>
                    </form>
                </div>
            </div>
        </div>
    </f7-page>
</template>