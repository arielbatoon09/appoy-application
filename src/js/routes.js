import useCookies from 'vue-cookies';
import OnboardingPage from '../pages/onboarding.vue';
import LoginPage from '../pages/login.vue';
import SignupPage from '../pages/signup.vue';
import DashboardPage from '../pages/dashboard.vue';
import ProfilePage from '../pages/profile.vue';
import HelpPage from '../pages/help.vue';
import NotificationPage from '../pages/notification.vue';
import EmergencyListPage from '../pages/emergency.vue';
import PhonePage from '../pages/phone.vue';
import GrowthPage from '../pages/growth.vue';
import FullyDevelopedPage from '../pages/fullydeveloped.vue';
import DecayPage from '../pages/decay.vue';
import TermsPage from '../pages/terms.vue';
import NotFound404 from '../pages/404.vue';

const completedOnboarding = useCookies.get('completedOnboarding');

const routes = [
  {
    path: '/',
    component: !completedOnboarding ? OnboardingPage : LoginPage,
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
    path: '/help',
    component: HelpPage,
  },
  {
    path: '/emergency',
    component: EmergencyListPage,
  },
  {
    path: '/notification',
    component: NotificationPage,
  },
  {
    path: '/profile',
    component: ProfilePage,
  },
  {
    path: '/phone',
    component: PhonePage,
  },
  {
    path: '/learn-growth',
    component: GrowthPage,
  },
  {
    path: '/learn-fully-developed',
    component: FullyDevelopedPage,
  },
  {
    path: '/learn-decay',
    component: DecayPage,
  },
  {
    path: '/terms-and-conditions',
    component: TermsPage,
  },
  {
    path: '/(.*)',
    component: NotFound404,
  }
];

export default routes;
