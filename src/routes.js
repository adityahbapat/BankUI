import Dashboard from './components/Dashboard.vue';
import Notes from './components/Notes.vue';
import Team from './components/Team.vue';
import Signup from './components/Signup.vue'
import Login from './components/Login.vue'

export default [
    {
        path: '/',
        component: Login
    },
    {
        path: '/profile',
        component: Notes
    },
    {
        path: '/team',
        component: Team
    },
    {
        path: '/dashboard',
        component: Dashboard,
    },
    {
        path: '/sign-up',
        component: Signup
    },
    {
        path: '/log-in',
        component: Login
    }
]