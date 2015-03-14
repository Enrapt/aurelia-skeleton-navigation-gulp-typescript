/// <reference path="../../../dts/es6-promise.d.ts" />
/// <reference path="../../../dts/jasmine.d.ts" />
import Flickr = require('../../app/flickr');

class HttpStub {
  itemStub;
  url;
  jsonp(url) {
    var response = this.itemStub;
    this.url = url;
    return new Promise((resolve) => {
      resolve({ content: { items: response } });
    })
  }
}

describe('the Flickr module', () => {

  it('sets jsonp response to images', (done) => {
    var http = new HttpStub(),
        sut = new Flickr(http),
        itemStubs = [1],
        itemFake = [2];

    http.itemStub = itemStubs;
    sut.activate().then(() => {
      expect(sut.images).toBe(itemStubs);
      expect(sut.images).not.toBe(itemFake);
      done();
    });
  });

  it('calls confirm on canDeactivate', () => {
    var http = new HttpStub(),
        sut = new Flickr(http),
        global = jasmine.getGlobal();
    spyOn(global, "confirm");
    sut.canDeactivate();
    expect(global.confirm).toHaveBeenCalled();
  });
});
