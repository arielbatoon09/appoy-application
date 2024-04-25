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
                During the Growth Stage of a fire emergency, the situation is characterized by the initial ignition and the subsequent development of the fire. At this point, the fire is typically small in size and has only just begun to spread.
                <br><br>
                In the Growth Stage, several key factors come into play to influence the fire's behavior and progression. Firstly, the availability of fuel plays a crucial role. Whether it's combustible materials such as wood, paper, fabric, or flammable liquids, the presence of fuel determines the fire's potential to escalate. Additionally, environmental conditions such as temperature, humidity, and wind speed can significantly impact how rapidly the fire spreads.
                <br><br>
                The Growth Stage is marked by a relatively slow but steady increase in the size and intensity of the fire. Initially, flames may be confined to a small area, but if not controlled, they can quickly expand and engulf surrounding materials. As the fire grows, it releases heat, which preheats nearby fuels, making them more susceptible to ignition. This creates a feedback loop, further accelerating the fire's progression.
                <br><br>
                At this stage, effective intervention is crucial to prevent the fire from escalating into a more dangerous situation. Prompt detection and swift action, such as deploying fire extinguishers or initiating evacuation procedures, can help contain the fire and minimize its impact. However, if not adequately addressed during the Growth Stage, the fire can quickly transition to more advanced stages, posing greater risks to life, property, and the environment.
                <br><br>
                Understanding the Growth Stage of a fire emergency is essential for implementing appropriate response measures and ensuring the safety of individuals and assets. By recognizing the early signs of a fire and taking proactive steps to address it, emergency responders and the public can mitigate its effects and prevent further harm.
            </div>
        </div>
    </MainLayout>
</template>