define(["require", "exports", 'aurelia-router'], function (require, exports, aureliaRouter) {
    var ChildRouter = (function () {
        function ChildRouter(router) {
            this.router = router;
            this.heading = 'Child Router';
            router.configure(function (config) {
                config.map([
                    { route: ['', 'welcome'], moduleId: 'welcome', nav: true, title: 'Welcome' },
                    { route: 'flickr', moduleId: 'flickr', nav: true },
                    { route: 'child-router', moduleId: 'child-router', nav: true, title: 'Child Router' }
                ]);
            });
        }
        ChildRouter.inject = [aureliaRouter.Router];
        return ChildRouter;
    })();
    exports.ChildRouter = ChildRouter;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hpbGQtcm91dGVyLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIiwic291cmNlcyI6WyJjaGlsZC1yb3V0ZXIudHMiXSwibmFtZXMiOlsiQ2hpbGRSb3V0ZXIiLCJDaGlsZFJvdXRlci5jb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6IjZFQUFPLGFBQWE7SUFFcEIsSUFBYSxXQUFXO1FBRXRCQSxTQUZXQSxXQUFXQSxDQUVGQSxNQUE0QkE7WUFBNUJDLFdBQU1BLEdBQU5BLE1BQU1BLENBQXNCQTtZQVNoREEsWUFBT0EsR0FBR0EsY0FBY0EsQ0FBQ0E7WUFSdkJBLE1BQU1BLENBQUNBLFNBQVNBLENBQUNBLFVBQUFBLE1BQU1BO2dCQUNyQkEsTUFBTUEsQ0FBQ0EsR0FBR0EsQ0FBQ0E7b0JBQ1RBLEVBQUVBLEtBQUtBLEVBQUVBLENBQUNBLEVBQUVBLEVBQUNBLFNBQVNBLENBQUNBLEVBQUdBLFFBQVFBLEVBQUVBLFNBQVNBLEVBQU9BLEdBQUdBLEVBQUVBLElBQUlBLEVBQUVBLEtBQUtBLEVBQUNBLFNBQVNBLEVBQUVBO29CQUNoRkEsRUFBRUEsS0FBS0EsRUFBRUEsUUFBUUEsRUFBU0EsUUFBUUEsRUFBRUEsUUFBUUEsRUFBUUEsR0FBR0EsRUFBRUEsSUFBSUEsRUFBRUE7b0JBQy9EQSxFQUFFQSxLQUFLQSxFQUFFQSxjQUFjQSxFQUFHQSxRQUFRQSxFQUFFQSxjQUFjQSxFQUFFQSxHQUFHQSxFQUFFQSxJQUFJQSxFQUFFQSxLQUFLQSxFQUFDQSxjQUFjQSxFQUFFQTtpQkFDdEZBLENBQUNBLENBQUNBO1lBQ0xBLENBQUNBLENBQUNBLENBQUNBO1FBQ0xBLENBQUNBO1FBVE1ELGtCQUFNQSxHQUFHQSxDQUFDQSxhQUFhQSxDQUFDQSxNQUFNQSxDQUFDQSxDQUFDQTtRQVd6Q0Esa0JBQUNBO0lBQURBLENBQUNBLEFBWkQsSUFZQztJQVpZLG1CQUFXLEdBQVgsV0FZWixDQUFBIn0=