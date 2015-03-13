module welcome {

  export class Welcome {

    heading = 'Welcome to the Aurelia Navigation App!';
    firstName = 'John';
    lastName = 'Doe';

    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    }

    welcome() {
      alert(`Welcome, ${this.fullName}!`);
    }

  }

  export class UpperValueConverter {
    toView(value) {
      return value && value.toUpperCase();
    }
  }
}

export = welcome;
