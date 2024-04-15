import { defineStore } from 'pinia';
import { auth, database } from '../../firebase';
import { collection, serverTimestamp, addDoc } from "firebase/firestore";

const db = database;
const userUID = ref('');

export const useAuthStore = defineStore('auth', {
    state: () => ({

    }),
    getters: {

    },
    actions: {
        async DoAskHelp(FormData) {
            try {

            } catch (error) {
                return { code: 400, status: 'error', message: error.message };
            }
        }
    },
})