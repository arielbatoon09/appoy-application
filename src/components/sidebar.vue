<template>
    <div class="hidden lg:inline-block flex-grow-0 flex-shrink-0 flex-initial">
        <div class="bg-white text-black transition overflow-y-auto flex flex-col flex-1 z-50 fixed outline-none lg:w-64 top-[6.5rem] left-10 rounded-lg border-none app-shadow"
            style="height: calc(-130px + 100vh)">
            <div style="height: calc(-5px + 100vh)">
                <ul class="p-6">
                    <li class="text-gray-400 mb-5">MENU</li>
                    <li
                        class="cursor-pointer sidebar-clr-primary text-white p-2 rounded-lg transition-transform flex items-center gap-4 mb-2">
                        <svg class="w-[28px] h-[28px]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
                            height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="1.5"
                                d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5" />
                        </svg>
                        <span class="text-lg">Dashboard</span>
                    </li>
                    <li
                        class="cursor-pointer hover:bg-gray-100 text-gray-700 p-2 rounded-lg transition-transform flex items-center gap-4 mb-2">
                        <svg class="w-[28px] h-[28px]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
                            height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="1.5" d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="1.5"
                                d="M17.8 13.938h-.011a7 7 0 1 0-11.464.144h-.016l.14.171c.1.127.2.251.3.371L12 21l5.13-6.248c.194-.209.374-.429.54-.659l.13-.155Z" />
                        </svg>
                        <span class="text-lg">Map</span>
                    </li>
                    <li
                        class="cursor-pointer hover:bg-gray-100 text-gray-700 p-2 rounded-lg transition-transform flex items-center gap-4 mb-2">
                        <svg class="w-[28px] h-[28px]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
                            height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="1.5"
                                d="M18.427 14.768 17.2 13.542a1.733 1.733 0 0 0-2.45 0l-.613.613a1.732 1.732 0 0 1-2.45 0l-1.838-1.84a1.735 1.735 0 0 1 0-2.452l.612-.613a1.735 1.735 0 0 0 0-2.452L9.237 5.572a1.6 1.6 0 0 0-2.45 0c-3.223 3.2-1.702 6.896 1.519 10.117 3.22 3.221 6.914 4.745 10.12 1.535a1.601 1.601 0 0 0 0-2.456Z" />
                        </svg>
                        <span class="text-lg">Emergency</span>
                    </li>
                    <li
                        class="cursor-pointer hover:bg-gray-100 text-gray-700 p-2 rounded-lg transition-transform flex items-center gap-4 mb-2">
                        <svg class="w-[28px] h-[28px]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
                            height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="1.5"
                                d="M12 5.365V3m0 2.365a5.338 5.338 0 0 1 5.133 5.368v1.8c0 2.386 1.867 2.982 1.867 4.175 0 .593 0 1.292-.538 1.292H5.538C5 18 5 17.301 5 16.708c0-1.193 1.867-1.789 1.867-4.175v-1.8A5.338 5.338 0 0 1 12 5.365ZM8.733 18c.094.852.306 1.54.944 2.112a3.48 3.48 0 0 0 4.646 0c.638-.572 1.236-1.26 1.33-2.112h-6.92Z" />
                        </svg>
                        <span class="text-lg">Notification</span>
                    </li>
                    <li class="text-gray-400 my-5">SETTINGS</li>
                    <li
                        class="cursor-pointer hover:bg-gray-100 text-gray-700 p-2 rounded-lg transition-transform flex items-center gap-4 mb-2">
                        <svg class="w-[28px] h-[28px]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
                            height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-width="1.5"
                                d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                        <span class="text-lg">Profile</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>