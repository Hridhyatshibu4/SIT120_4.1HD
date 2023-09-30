import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import GoalsAchievements from '../components/GoalsAchievements.vue';
import LearningModule from '../components/LearningModule.vue';
import ProjectCanvas from '../components/ProjectCanvas.vue';
import NavigationMap from '../components/NavigationMap.vue';
import ChatPortal from '../components/ChatPortal.vue';
import LoginPortal from '../components/LoginPortal.vue';
import SignUp from '../components/SignUp.vue';


const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/login-portal',
    name: 'LoginPortal',
    component: LoginPortal,
  },
  {
    path: '/sign-up',
    name: 'SignUp',
    component: SignUp,
  },
  {
    path: '/goals-and-achievements',
    name: 'GoalsAchievements',
    component: GoalsAchievements,
  },
  {
    path: '/learning-module',
    name: 'LearningModule',
    component: LearningModule,
  },
  {
    path: '/project-canvas',
    name: 'ProjectCanvas',
    component: ProjectCanvas,
  },
  {
    path: '/navigation-map',
    name: 'NavigationMap',
    component: NavigationMap,
  },
  {
    path: '/chat-portal',
    name: 'ChatPortal',
    component: ChatPortal,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
