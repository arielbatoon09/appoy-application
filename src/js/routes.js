
import OnboardingPage from '../pages/onboarding.vue';
import LoginPage from '../pages/login.vue';
import SignupPage from '../pages/signup.vue';

var routes = [
  {
    path: '/',
    component: OnboardingPage,
  },
  {
    path: '/login',
    component: LoginPage,
  },
  {
    path: '/signup',
    component: SignupPage,
  }
];

export default routes;
