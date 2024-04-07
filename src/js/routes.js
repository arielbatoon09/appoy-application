
import OnboardingPage from '../pages/onboarding.vue';
import LoginPage from '../pages/login.vue';
import SignupPage from '../pages/signup.vue';
import DashboardPage from '../pages/dashboard.vue';
import ProfilePage from '../pages/profile.vue';
import HelpPage from '../pages/help.vue';
import NotificationPage from '../pages/notification.vue';
import EmergencyListPage from '../pages/emergencylist.vue';
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
    path: '/help',
    component: HelpPage,
  },
  {
    path: '/list/emergency',
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
    path: '/(.*)',
    component: NotFound404,
  }
];

export default routes;
