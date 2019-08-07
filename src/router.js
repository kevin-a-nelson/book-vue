import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import BooksIndex from './views/BooksIndex.vue';
import BooksShow from './views/BooksShow.vue';
import BooksNew from './views/BooksNew.vue';
import BooksEdit from './views/BooksEdit.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/books',
      name: 'books',
      component: BooksIndex
    },
    {
      path: '/books/:id',
      name: 'books-show',
      component: BooksShow
    },
    {
      path: '/new',
      name: 'books-new',
      component: BooksNew
    },
    {
      path: '/books/:id/edit',
      name: 'books-edit',
      component: BooksEdit
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
});
