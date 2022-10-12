import { router } from '@/router';
import { Route } from 'vue-router';

router.beforeEach(async (to: Route, from: Route, next) => {
  // get token and check roles/permissions here
  next();
});
