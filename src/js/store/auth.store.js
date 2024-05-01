import { defineStore } from 'pinia';
import { auth } from '../../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";

export const useAuthStore = defineStore('auth', {
	state: () => ({

	}),
	getters: {

	},
	actions: {
		async signup(FormData) {
			try {
				const { fullname, email, password, terms } = FormData;

				if (!fullname) {
					return { code: 422, status: 'error', source: 'fullname', message: "Please enter your full name." };
				}

				// Email validation using a regular expression
				const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
				if (!emailRegex.test(email)) {
					if (email) return;
					return { code: 422, status: 'error', source: 'email', message: "Invalid email address." };
				}

				if (!password) {
					return { code: 422, status: 'error', source: 'password', message: "Please enter password." };
				}

				// Password Length Checker
				if (password.length < 6 || password.length > 18) {
					return { code: 422, status: 'error', source: 'password', message: "Password must be between 6 and 18 characters." };
				}

				// Terms and Conditions validate
				if (!terms) {
					return { code: 422, status: 'error', source: 'terms', message: "Failed to agree on our Terms and Conditions." };
				}

				const res = await createUserWithEmailAndPassword(auth, email, password);
				const user = res.user;
				// Update display name
				await updateProfile(user, { displayName: fullname });

				// Success
				return { code: 200, status: 'success', message: 'Created account successfully' };
			} catch (error) {
				if (error.code === 'auth/email-already-in-use') {
					return { code: 400, status: 'error', source: 'email', message: "Email already in use." };
				}

				return { code: 400, status: 'error', message: error.message };
			}
		},
		async login(FormData) {
			try {
				const { email, password } = FormData;
		
				if (!email || !password) {
					return { code: 422, status: 'error', source: 'email', message: "Please fill in all the fields." };
				}
		
				await signInWithEmailAndPassword(auth, email, password);
		
				// Success
				return { code: 200, status: 'success', message: 'Login successfully' };

			} catch (error) {
				if (error.code === 'auth/invalid-email' || error.code === 'auth/invalid-credential') {
					return { code: 400, status: 'error', source: 'email', message: "Invalid email or password." };
				}

				return { code: 400, status: 'error', message: error.message };
			}
		},
		async logout() {
			try {
				await signOut(auth);

				// Success
				return { code: 200, status: 'success', message: 'Logout successfully' };
			} catch (error) {
				return { code: 400, status: 'error', message: error.message };
			}
		},		
	},
});