import {Router} from 'aurelia-router';

export class ChildRouter {

  router: Router;

  configureRouter(config, router: Router) {
    config.map([
      { route: ['','welcome'],  moduleId: './welcome',      nav: true, title:'Welcome' },
      { route: 'flickr',        moduleId: './flickr',       nav: true },
      { route: 'child-router',  moduleId: './child-router', nav: true, title:'Child Router' }
    ]);

    this.router = router;
  }
  heading = 'Child Router';
};
