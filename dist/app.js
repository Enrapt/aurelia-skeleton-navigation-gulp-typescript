define(["require", "exports", 'aurelia-router', "bootstrap"], function (require, exports, aureliaRouter) {
    var App = (function () {
        function App(router) {
            this.router = router;
            this.router.configure(function (config) {
                config.title = 'Aurelia';
                config.map([
                    { route: ['', 'welcome'], moduleId: 'welcome', nav: true, title: 'Welcome' },
                    { route: 'flickr', moduleId: 'flickr', nav: true },
                    { route: 'child-router', moduleId: 'child-router', nav: true, title: 'Child Router' }
                ]);
            });
        }
        App.inject = [aureliaRouter.Router];
        return App;
    })();
    exports.App = App;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIiwic291cmNlcyI6WyJhcHAudHMiXSwibmFtZXMiOlsiQXBwIiwiQXBwLmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiMEZBQ08sYUFBYTtJQUVwQixJQUFhLEdBQUc7UUFFZEEsU0FGV0EsR0FBR0EsQ0FFTUEsTUFBNEJBO1lBQTVCQyxXQUFNQSxHQUFOQSxNQUFNQSxDQUFzQkE7WUFDOUNBLElBQUlBLENBQUNBLE1BQU1BLENBQUNBLFNBQVNBLENBQUNBLFVBQUFBLE1BQU1BO2dCQUMxQkEsTUFBTUEsQ0FBQ0EsS0FBS0EsR0FBR0EsU0FBU0EsQ0FBQ0E7Z0JBQ3pCQSxNQUFNQSxDQUFDQSxHQUFHQSxDQUFDQTtvQkFDVEEsRUFBRUEsS0FBS0EsRUFBRUEsQ0FBQ0EsRUFBRUEsRUFBQ0EsU0FBU0EsQ0FBQ0EsRUFBR0EsUUFBUUEsRUFBRUEsU0FBU0EsRUFBT0EsR0FBR0EsRUFBRUEsSUFBSUEsRUFBRUEsS0FBS0EsRUFBQ0EsU0FBU0EsRUFBRUE7b0JBQ2hGQSxFQUFFQSxLQUFLQSxFQUFFQSxRQUFRQSxFQUFTQSxRQUFRQSxFQUFFQSxRQUFRQSxFQUFRQSxHQUFHQSxFQUFFQSxJQUFJQSxFQUFFQTtvQkFDL0RBLEVBQUVBLEtBQUtBLEVBQUVBLGNBQWNBLEVBQUdBLFFBQVFBLEVBQUVBLGNBQWNBLEVBQUVBLEdBQUdBLEVBQUVBLElBQUlBLEVBQUVBLEtBQUtBLEVBQUNBLGNBQWNBLEVBQUVBO2lCQUN0RkEsQ0FBQ0EsQ0FBQ0E7WUFDTEEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7UUFDTEEsQ0FBQ0E7UUFWTUQsVUFBTUEsR0FBR0EsQ0FBQ0EsYUFBYUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0E7UUFXekNBLFVBQUNBO0lBQURBLENBQUNBLEFBWkQsSUFZQztJQVpZLFdBQUcsR0FBSCxHQVlaLENBQUEifQ==