define(["require", "exports", 'aurelia-http-client'], function (require, exports, aureliaHttpClient) {
    var url = 'http://api.flickr.com/services/feeds/photos_public.gne?tags=rainier&tagmode=any&format=json';
    var Flickr = (function () {
        function Flickr(http) {
            this.http = http;
            this.heading = 'Flickr';
            this.images = [];
        }
        Flickr.prototype.activate = function () {
            var _this = this;
            return this.http.jsonp(url).then(function (response) {
                _this.images = response.content.items;
            });
        };
        Flickr.prototype.canDeactivate = function () {
            return confirm('Are you sure you want to leave?');
        };
        Flickr.inject = [aureliaHttpClient.HttpClient];
        return Flickr;
    })();
    exports.Flickr = Flickr;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxpY2tyLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIiwic291cmNlcyI6WyJmbGlja3IudHMiXSwibmFtZXMiOlsiRmxpY2tyIiwiRmxpY2tyLmNvbnN0cnVjdG9yIiwiRmxpY2tyLmFjdGl2YXRlIiwiRmxpY2tyLmNhbkRlYWN0aXZhdGUiXSwibWFwcGluZ3MiOiJrRkFBTyxpQkFBaUI7SUFFeEIsSUFBSSxHQUFHLEdBQUcsNkZBQTZGLENBQUM7SUFFeEcsSUFBYSxNQUFNO1FBRWpCQSxTQUZXQSxNQUFNQSxDQUVFQSxJQUFrQ0E7WUFBbENDLFNBQUlBLEdBQUpBLElBQUlBLENBQThCQTtZQUVyREEsWUFBT0EsR0FBR0EsUUFBUUEsQ0FBQ0E7WUFDbkJBLFdBQU1BLEdBQUdBLEVBQUVBLENBQUNBO1FBRlpBLENBQUNBO1FBSURELHlCQUFRQSxHQUFSQTtZQUFBRSxpQkFJQ0E7WUFIQ0EsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsVUFBQUEsUUFBUUE7Z0JBQ3ZDQSxLQUFJQSxDQUFDQSxNQUFNQSxHQUFHQSxRQUFRQSxDQUFDQSxPQUFPQSxDQUFDQSxLQUFLQSxDQUFDQTtZQUN2Q0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7UUFDTEEsQ0FBQ0E7UUFFREYsOEJBQWFBLEdBQWJBO1lBQ0VHLE1BQU1BLENBQUNBLE9BQU9BLENBQUNBLGlDQUFpQ0EsQ0FBQ0EsQ0FBQ0E7UUFDcERBLENBQUNBO1FBZE1ILGFBQU1BLEdBQUdBLENBQUNBLGlCQUFpQkEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsQ0FBQ0E7UUFlakRBLGFBQUNBO0lBQURBLENBQUNBLEFBaEJELElBZ0JDO0lBaEJZLGNBQU0sR0FBTixNQWdCWixDQUFBIn0=