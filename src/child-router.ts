import aureliaRouter = require('aurelia-router');

export class ChildRouter{
  static inject = [aureliaRouter.Router];
  constructor(private router: aureliaRouter.Router){
    router.configure(config => {
      config.map([
        { route: ['','welcome'],  moduleId: 'welcome',      nav: true, title:'Welcome' },
        { route: 'flickr',        moduleId: 'flickr',       nav: true },
        { route: 'child-router',  moduleId: 'child-router', nav: true, title:'Child Router' }
      ]);
    });
  }
  heading = 'Child Router';
}
