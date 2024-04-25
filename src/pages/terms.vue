<script setup>
import MainLayout from '../components/layout/main-layout.vue';

const currentPage = 'growth';
</script>

<template>
    <MainLayout :currentPage="currentPage">
        <!-- Welcome Box -->
        <div class="bg-white rounded-xl app-shadow p-10 mb-20">
            <h2 class="text-lg font-bold text-gray-700">TERMS AND CONDITIONS</h2>
            <h3 class="text-gray-600">Please read these terms and conditions carefully before using APPoy.</h3>

            <div class="mt-5">
                <div class="space-y-2 mb-4">
                    <h4 class="text-gray-700 font-medium">Conditions of use</h4>
                    <p class=text-gray-600>These terms and conditions govern your use of APPoy. By using this mobile
                        application, you certify that you have read and reviewed this Agreement and that you agree to
                        comply with its terms. If you do not want to be bound by the terms of this Agreement, you are
                        advised to stop using the application accordingly. APPoy only grants use and access of this
                        application and its services to those who have accepted its terms.</p>
                </div>

                <div class="space-y-2 mb-4">
                    <h4 class="text-gray-700 font-medium">Age restriction</h4>
                    <p class=text-gray-600>All users who are minors in the jurisdiction in which they reside (Filipinos
                        under the age of 18, as per the Philippine laws) must have the permission of, and be directly
                        supervised by, their parent or guardian to use the Services. If you are a minor, you must have
                        your parent or guardian read and agree to these Legal Terms prior to you using the Services.
                        APPoy assumes no responsibility for liabilities related to age misrepresentation, and reserves
                        the right to terminate accounts found in violation of this policy.</p>
                </div>

                <div class="space-y-2 mb-4">
                    <h4 class="text-gray-700 font-medium">Intellectual property</h4>
                    <p class=text-gray-600>You agree that all materials, products, and services provided on this app are
                        the property of APPoy and its affiliates including all copyrights, trade secrets, trademarks,
                        patents, and other intellectual property. You also agree that you will not reproduce or
                        redistribute APPoy's intellectual property in any way, including electronic, digital, or new
                        trademark registrations.
                        <br><br>You grant APPoy a royalty-free and non-exclusive license to display, use, copy,
                        transmit, and broadcast the content you upload and publish. For issues regarding intellectual
                        property claims, you should contact APPoy in order to come to an agreement.
                    </p>
                </div>

                <div class="space-y-2 mb-4">
                    <h4 class="text-gray-700 font-medium">User accounts</h4>
                    <p class=text-gray-600>As a user of this app you may be asked to register with us and provide
                        private information. You are responsible for ensuring the accuracy of this information, and you
                        are responsible for maintaining the safety and security of your identifying information. You are
                        also responsible for all activities that occur under your account or password.
                        If you think there are any possible issues regarding the security of your account on the app,
                        inform us immediately so we may address them accordingly. We reserve all rights to terminate
                        accounts, edit or remove content and cancel orders at our sole discretion.
                    </p>
                </div>


                <div class="space-y-2 mb-4">
                    <h4 class="text-gray-700 font-medium">Prohibited Activities</h4>
                    <p class=text-gray-600>The application is intended for serious use, and you are expected to refrain
                        from engaging in any form of misconduct, including but not limited to prank messages or any
                        other behavior that disrupts the intended function and purpose of the application. Unauthorized
                        use of emergency messages within the app is strictly prohibited and may result in legal
                        consequences.
                    </p>
                </div>

                <div class="space-y-2 mb-4">
                    <h4 class="text-gray-700 font-medium">Applicable law</h4>
                    <p class=text-gray-600>By using this app, you agree that the laws of the Philippines, without regard
                        to principles of conflict laws, will govern these terms and conditions, or any dispute of any
                        sort that might come between APPoy and you.
                    </p>
                </div>

                <div class="space-y-2 mb-4">
                    <h4 class="text-gray-700 font-medium">Disputes</h4>
                    <p class=text-gray-600>Any dispute related in any way to your use of this app or to products you
                        purchase from us shall be arbitrated by court of the Philippines and you consent to exclusive
                        jurisdiction and venue of such courts.
                    </p>
                </div>

                <div class="space-y-2 mb-4">
                    <h4 class="text-gray-700 font-medium">Indemnification</h4>
                    <p class=text-gray-600>You agree to compensateAPPoy and its affiliates and hold APPoy harmless
                        against legal claims and demands that may arise from your use or misuse of our services. We
                        reserve the right to select our own legal counsel.
                    </p>
                </div>

                <div class="space-y-2 mb-4">
                    <h4 class="text-gray-700 font-medium">Limitation on liability</h4>
                    <p class=text-gray-600>APPoy is not liable for any damages that may occur to you as a result of your
                        misuse of our app.<br><br>
                        APPoy reserves the right to edit, modify, and change this Agreement at any time. We shall let
                        our users know of these changes through electronic mail. This Agreement is an understanding
                        between APPoy and the user, and this supersedes and replaces all prior agreements regarding the
                        use of this app.

                    </p>
                </div>
            </div>
        </div>
    </MainLayout>
</template>