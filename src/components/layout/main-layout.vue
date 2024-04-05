<script setup>
import Header from '../header.vue';
import Sidebar from '../sidebar.vue';
import MobileMenu from '../menu.vue';

</script>

<template>
    <f7-page name="main-page" class="bg-gray-50">
        <div class="flex min-h-screen overflow-hidden w-full">
            <!-- Header -->
            <Header />

            <!-- Desktop Sidebar -->
            <Sidebar />

            <!-- Container -->
            <div class="flex flex-1 overflow-hidden">
                <div class="w-full mx-auto box-border block max-w-screen-xl pt-20 pr-15 pl-15 lg:pl-80">
                    <!-- Content -->
                    <div class="space-y-8" style="min-height: calc(-170px + 100vh)">
                        <!-- Welcome Box -->
                        <div class="bg-white rounded-xl app-shadow flex justify-between h-40 p-10">
                            <div>
                                <h3>Hi Ariel Batoon,</h3>
                                <p>Welcome back!</p>
                            </div>
                            <div>
                                Image
                            </div>
                        </div>

                        <!-- CTA Boxes -->
                        <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-10">
                            <div class="bg-white rounded-xl h-72 w-full p-6 app-shadow">Test 1</div>
                            <div class="bg-white rounded-xl h-72 w-full p-6 app-shadow">Test 2</div>
                            <div class="bg-white rounded-xl h-72 w-full p-6 app-shadow">Test 3</div>
                        </div>
                    </div>
                    <!-- Footer -->
                    <div class="p-6 text-center">
                        <p>Terms And Condition</p>
                    </div>
                </div>
            </div>

            <!-- Mobile Menu -->
            <MobileMenu />
        </div>
    </f7-page>
</template>