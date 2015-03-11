import aureliaHttpClient = require('aurelia-http-client');

var url = 'http://api.flickr.com/services/feeds/photos_public.gne?tags=rainier&tagmode=any&format=json';

export class Flickr{
  static inject = [aureliaHttpClient.HttpClient];
  constructor(public http: aureliaHttpClient.HttpClient){
  }
  heading = 'Flickr';
  images = [];

  activate(){
    return this.http.jsonp(url).then(response => {
      this.images = response.content.items;
    });
  }

  canDeactivate(){
    return confirm('Are you sure you want to leave?');
  }
}
