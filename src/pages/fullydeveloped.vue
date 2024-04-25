<script setup>
import MainLayout from '../components/layout/main-layout.vue';

const currentPage = 'growth';
</script>

<template>
    <MainLayout :currentPage="currentPage">
        <!-- Welcome Box -->
        <div class="bg-white rounded-xl app-shadow p-10 mb-20">
            <h2 class="text-lg font-bold text-gray-700">Fully Developed Stage</h2>
            <h3 class="text-gray-600">Learn more about Fully Developed Stage.</h3>

            <div class="mt-5">
                The Fully Developed Stage of a fire emergency represents a critical point where the fire has reached its peak intensity and has consumed all available fuel within its immediate surroundings. At this stage, the fire has grown beyond its initial size and has engulfed an entire room or area, leaving little to no unburned material behind.
                <br><br>
                <b>Several key characteristics define the Fully Developed Stage of a fire:</b>
                <ol class="list-decimal">
                    <li><b>Intense Heat:</b> The fire generates extreme heat, reaching temperatures that can cause structural materials to weaken or fail. This intense heat radiates outward, posing a significant risk to nearby objects and individuals.</li>
                    <li><b>Rapid Spread:</b> With ample fuel available, the fire spreads rapidly, consuming combustible materials in its path. Flames may extend vertically and horizontally, filling the entire space with fire and smoke.</li>
                    <li><b>Thick Smoke:</b> The combustion of materials produces thick, dark smoke that fills the air within the affected area. This smoke reduces visibility and can hinder evacuation efforts, making it difficult for individuals to navigate through the environment.</li>
                    <li><b>Structural Instability:</b> As the fire progresses, it can compromise the structural integrity of the building or enclosure where it occurs. High temperatures weaken load-bearing elements such as walls, floors, and ceilings, increasing the risk of collapse.</li>
                    <li><b>Potential for Flashover:</b> In some cases, the conditions within the Fully Developed Stage may lead to a phenomenon known as flashover. During flashover, the gases and smoke within the room ignite simultaneously, resulting in a sudden and widespread increase in fire intensity.</li>
                </ol>
                <br>
                During the Fully Developed Stage, extinguishing the fire becomes increasingly challenging and dangerous. Traditional firefighting tactics may prove less effective due to the intensity of the flames and the limited accessibility of the burning area. Therefore, prioritizing the safety of occupants and firefighters through timely evacuation and strategic deployment of firefighting resources is paramount.
                <br><br>
                Understanding the characteristics and challenges associated with the Fully Developed Stage of a fire emergency is essential for emergency responders and building occupants alike. By recognizing the signs of a fully developed fire and taking appropriate actions to mitigate its impact, individuals can help minimize the risk of injury, property damage, and loss of life.
            </div>
        </div>
    </MainLayout>
</template>