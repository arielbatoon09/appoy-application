
import OnboardingPage from '../pages/onboarding.vue';
import LoginPage from '../pages/login.vue';
import SignupPage from '../pages/signup.vue';
import DashboardPage from '../pages/dashboard.vue';
import NotFound404 from '../pages/404.vue';

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
  },
  {
    path: '/dashboard',
    component: DashboardPage,
  },
  {
    path: '/(.*)',
    component: NotFound404,
  }
];

export default routes;
