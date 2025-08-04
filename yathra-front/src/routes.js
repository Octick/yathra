/* eslint-disable */
import { createWebHistory, createRouter } from 'vue-router'
import Home from './views/home-scr.vue'
import About from './views/about-us-scr.vue'
import Contact from './views/contact-scr.vue'
import Tours from './views/tours-scr.vue'
import Tours3Nights from './views/trip-plans/3-nights.vue'
import Tours6Nights from './views/trip-plans/6-nights.vue'
import Tours8Nights from './views/trip-plans/8-nights.vue'
import Tours9Nights from './views/trip-plans/9-nights.vue'
import Activities from './views/activities-scr.vue'
import PrivacyPolicy from './views/privacy-policy-scr.vue'
import TermsCondition from './views/terms-condition-scr.vue'
import PageNotFound from './views/not-found-scr.vue'

const routes = [
    {
        name: 'Home',
        path: '/',
        component: Home,
        meta: {
            title: 'Home - Yathra Tours'
        }
    },

    {
        name: 'About',
        path: '/about-us',
        component: About,
        meta: {
            title: 'About - Yathra Tours'
        }
    },

    {
        name: 'Contact',
        path: '/contact-us',
        component: Contact,
        meta: {
            title: 'Contact - Yathra Tours'
        }
    },

    {
        name: 'Tours',
        path: '/tours',
        component: Tours,
        meta: {
            title: 'Tours - Yathra Tours'
        }
    },

    {
        name: 'Tours3Nights',
        path: '/tours/3-nights-4-days',
        component: Tours3Nights,
        meta: {
            title: 'Tours 3 Nights 4 Days  - Yathra Tours'
        }
    },

    {
        name: 'Tours6Nights',
        path: '/tours/6-nights-7-days',
        component: Tours6Nights,
        meta: {
            title: 'Tours 6 Nights 7 Days - Yathra Tours'
        }
    },

    {
        name: 'Tours8Nights',
        path: '/tours/8-nights-9-days',
        component: Tours8Nights,
        meta: {
            title: 'Tours 8 Nights 9 Days - Yathra Tours'
        }
    },

    {
        name: 'Tours9Nights',
        path: '/tours/9-nights-10-days',
        component: Tours9Nights,
        meta: {
            title: 'Tours 9 Nights 10 Days - Yathra Tours'
        }
    },

    {
        name: 'Activities',
        path: '/activities',
        component: Activities,
        meta: {
            title: 'Activities - Yathra Tours'
        }
    },

    {
        name: 'PrivacyPolicy',
        path: '/privacy-policy',
        component: PrivacyPolicy,
        meta: {
            title: 'Privacy Policy - Yathra Tours'
        }
    },

    {
        name: 'TermsCondition',
        path: '/terms-&-conditions',
        component: TermsCondition,
        meta: {
            title: 'Terms & Conditions - Yathra Tours'
        }
    },

    {
        name: 'NotFound',
        path: '/:pathMatch(.*)*',
        component: PageNotFound,
        meta: {
            title: '404 Not Found'
        }
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior (to, from, savedPosition) {
        return { top: 0 };
      }
})

router.beforeEach((to, from, next) => {
    document.title = `${to.meta.title}`;
    next();
})

export default router;