/// <reference path="../../../dts/aurelia.d.ts" />
/// <reference path="../../../dts/jasmine.d.ts" />
import ChildRouter = require('../../app/child-router');
import aurelia = require('aurelia-router');

class RouterStub extends aurelia.Router {
  routes;
  configure = (handler) => {
    handler(this);
  }
  map(routes) {
    this.routes = routes;
  }
}

describe('the Child Router module', () => {
  var sut;
  beforeEach(() => { sut = new ChildRouter(new RouterStub()); });

  it('contains a router property', () => {
    expect(sut.router).toBeDefined();
  });

  it('configures the heading', () => {
    expect(sut.heading).toEqual('Child Router');
  });

  it('should have a welcome route', () => {
    expect(sut.router.routes).toContain({ route: ['','welcome'],  moduleId: 'welcome', nav: true, title:'Welcome' });
  });

  it('should have a flickr route', () => {
     expect(sut.router.routes).toContain({ route: 'flickr', moduleId: 'flickr', nav: true });
  });

  it('should have a child router route', () => {
    expect(sut.router.routes).toContain({ route: 'child-router', moduleId: 'child-router', nav: true, title:'Child Router' });
  });
});
