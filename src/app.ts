/// <amd-dependency path="bootstrap" />
import aureliaRouter = require('aurelia-router');

export class App {
  static inject = [aureliaRouter.Router];
  constructor(private router: aureliaRouter.Router) {
    this.router.configure(config => {
      config.title = 'Aurelia';
      config.map([
        { route: ['','welcome'],  moduleId: 'welcome',      nav: true, title:'Welcome' },
        { route: 'flickr',        moduleId: 'flickr',       nav: true },
        { route: 'child-router',  moduleId: 'child-router', nav: true, title:'Child Router' }
      ]);
    });
  }
}
