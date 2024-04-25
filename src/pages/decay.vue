<script setup>
import MainLayout from '../components/layout/main-layout.vue';

const currentPage = 'growth';
</script>

<template>
    <MainLayout :currentPage="currentPage">
        <!-- Welcome Box -->
        <div class="bg-white rounded-xl app-shadow p-10 mb-20">
            <h2 class="text-lg font-bold text-gray-700">Growth Stage</h2>
            <h3 class="text-gray-600">Learn more about Growth stage.</h3>

            <div class="mt-5">
                The Decay Stage of a fire emergency marks the point at which the fire begins to diminish in intensity and gradually lose its ability to sustain itself. During this stage, the flames diminish, and the fire's energy output decreases as it consumes the remaining available fuel.
                <br><br>
                During the Decay Stage of a fire, the flame size diminishes as available fuel is consumed, leading to lower temperatures and reduced heat output. Smoke production decreases, though some residual smoke may linger. Lingering hot spots pose a risk of reignition, necessitating vigilance to prevent rekindling.
                <br><br>
                During the Decay Stage, it is crucial to continue monitoring the fire's progress and taking appropriate action to fully extinguish any remaining hot spots. This may involve applying additional water or fire-retardant agents to ensure that all embers are fully extinguished and the fire is completely suppressed.
                <br><br>
                Understanding the characteristics and challenges associated with the Decay Stage of a fire emergency is essential for effective firefighting and mitigation efforts. By recognizing the signs of a diminishing fire and taking proactive measures to prevent rekindling, emergency responders can ensure the safety of individuals and minimize the risk of property damage.
            </div>
        </div>
    </MainLayout>
</template>