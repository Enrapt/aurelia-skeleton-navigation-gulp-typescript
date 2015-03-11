var welcome;
(function (welcome) {
    var Welcome = (function () {
        function Welcome() {
            this.heading = 'Welcome to the Aurelia Navigation App!';
            this.firstName = 'John';
            this.lastName = 'Doe';
        }
        Object.defineProperty(Welcome.prototype, "fullName", {
            get: function () {
                return "" + this.firstName + " " + this.lastName;
            },
            enumerable: true,
            configurable: true
        });
        Welcome.prototype.welcome = function () {
            alert("Welcome, " + this.fullName + "!");
        };
        return Welcome;
    })();
    welcome.Welcome = Welcome;
    var UpperValueConverter = (function () {
        function UpperValueConverter() {
        }
        UpperValueConverter.prototype.toView = function (value) {
            return value && value.toUpperCase();
        };
        return UpperValueConverter;
    })();
    welcome.UpperValueConverter = UpperValueConverter;
})(welcome || (welcome = {}));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2VsY29tZS5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyIsInNvdXJjZXMiOlsid2VsY29tZS50cyJdLCJuYW1lcyI6WyJ3ZWxjb21lIiwid2VsY29tZS5XZWxjb21lIiwid2VsY29tZS5XZWxjb21lLmNvbnN0cnVjdG9yIiwid2VsY29tZS5XZWxjb21lLmZ1bGxOYW1lIiwid2VsY29tZS5XZWxjb21lLndlbGNvbWUiLCJ3ZWxjb21lLlVwcGVyVmFsdWVDb252ZXJ0ZXIiLCJ3ZWxjb21lLlVwcGVyVmFsdWVDb252ZXJ0ZXIuY29uc3RydWN0b3IiLCJ3ZWxjb21lLlVwcGVyVmFsdWVDb252ZXJ0ZXIudG9WaWV3Il0sIm1hcHBpbmdzIjoiQUFBQSxJQUFPLE9BQU8sQ0F1QmI7QUF2QkQsV0FBTyxPQUFPLEVBQUMsQ0FBQztJQUVkQSxJQUFhQSxPQUFPQTtRQUFwQkMsU0FBYUEsT0FBT0E7WUFFbEJDLFlBQU9BLEdBQUdBLHdDQUF3Q0EsQ0FBQ0E7WUFDbkRBLGNBQVNBLEdBQUdBLE1BQU1BLENBQUNBO1lBQ25CQSxhQUFRQSxHQUFHQSxLQUFLQSxDQUFDQTtRQVVuQkEsQ0FBQ0E7UUFSQ0Qsc0JBQUlBLDZCQUFRQTtpQkFBWkE7Z0JBQ0VFLE1BQU1BLENBQUNBLEtBQUdBLElBQUlBLENBQUNBLFNBQVNBLFNBQUlBLElBQUlBLENBQUNBLFFBQVVBLENBQUNBO1lBQzlDQSxDQUFDQTs7O1dBQUFGO1FBRURBLHlCQUFPQSxHQUFQQTtZQUNFRyxLQUFLQSxDQUFDQSxjQUFZQSxJQUFJQSxDQUFDQSxRQUFRQSxNQUFHQSxDQUFDQSxDQUFDQTtRQUN0Q0EsQ0FBQ0E7UUFFSEgsY0FBQ0E7SUFBREEsQ0FBQ0EsQUFkREQsSUFjQ0E7SUFkWUEsZUFBT0EsR0FBUEEsT0FjWkEsQ0FBQUE7SUFFREEsSUFBYUEsbUJBQW1CQTtRQUFoQ0ssU0FBYUEsbUJBQW1CQTtRQUloQ0MsQ0FBQ0E7UUFIQ0Qsb0NBQU1BLEdBQU5BLFVBQU9BLEtBQUtBO1lBQ1ZFLE1BQU1BLENBQUNBLEtBQUtBLElBQUlBLEtBQUtBLENBQUNBLFdBQVdBLEVBQUVBLENBQUNBO1FBQ3RDQSxDQUFDQTtRQUNIRiwwQkFBQ0E7SUFBREEsQ0FBQ0EsQUFKREwsSUFJQ0E7SUFKWUEsMkJBQW1CQSxHQUFuQkEsbUJBSVpBLENBQUFBO0FBQ0hBLENBQUNBLEVBdkJNLE9BQU8sS0FBUCxPQUFPLFFBdUJiIn0=